// 1. Supabase 설정
const SUPABASE_URL = "https://bpdisxjhhibrgfpvtlmv.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwZGlzeGpoaGlicmdmcHZ0bG12Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5NTkxODQsImV4cCI6MjA3OTUzNTE4NH0.jDZ6BGirOPuWUnt4ykjhng4PLft2ZjBuYAFzApUnlYU";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let classList = [];

// 페이지 시작 시 실행
document.addEventListener("DOMContentLoaded", async () => {
  await loadClasses();       // 1. 반 목록 가져오기
  loadNewStudents();         // 2. 신입생 목록 가져오기
});

// --- [1] 반 목록 가져와서 Dropdown 채우기 ---
async function loadClasses() {
  const { data, error } = await supabase.from('classes').select('*').order('name');
  if (error) { console.error(error); return; }
  
  classList = data;
  
  // 숙제 조회용 Select 박스 채우기
  const select = document.getElementById("classSelect");
  select.innerHTML = '<option value="">반 선택</option>';
  
  data.forEach(cls => {
    const opt = document.createElement("option");
    opt.value = cls.id;
    opt.textContent = cls.name;
    select.appendChild(opt);
  });
}

// --- [2] 신입생(반 없는 학생) 불러오기 ---
async function loadNewStudents() {
  const tbody = document.querySelector("#newStudentTable tbody");
  
  // class_id가 NULL인 학생만 찾음
  const { data, error } = await supabase
    .from('students')
    .select('*')
    .is('class_id', null)
    .order('created_at', { ascending: false });

  if (error) { console.error(error); return; }

  tbody.innerHTML = "";
  if (!data || data.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:20px; color:#999;">신규 학생(미배정)이 없습니다.</td></tr>`;
    return;
  }

  // 표 그리기
  data.forEach(student => {
    const tr = document.createElement("tr");
    
    // 반 선택 옵션 만들기
    let options = '<option value="">선택</option>';
    classList.forEach(c => {
      options += `<option value="${c.id}">${c.name}</option>`;
    });

    tr.innerHTML = `
      <td style="font-weight:bold;">${student.name}</td>
      <td>${student.login_id}</td>
      <td>${student.parent_phone || '-'}</td>
      <td><span class="badge badge-new">미배정</span></td>
      <td>
        <select class="assign-select" id="sel-${student.id}">${options}</select>
      </td>
      <td>
        <button class="btn-save" onclick="saveClass('${student.id}')">저장</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// 반 배정 저장하기 (Update)
async function saveClass(studentId) {
  const sel = document.getElementById(`sel-${studentId}`);
  const classId = sel.value;

  if (!classId) { alert("반을 선택해주세요."); return; }

  const { error } = await supabase
    .from('students')
    .update({ class_id: classId })
    .eq('id', studentId);

  if (error) { alert("저장 실패"); return; }
  
  alert("반 배정이 완료되었습니다.");
  loadNewStudents(); // 목록 새로고침
}

// --- [3] 숙제 결과 조회 (날짜 포함) ---
async function loadHomework() {
  const classId = document.getElementById("classSelect").value;
  const unit = document.getElementById("unitInput").value.trim();
  const tbody = document.querySelector("#homeworkTable tbody");

  if (!classId) { alert("반을 먼저 선택해주세요."); return; }
  if (!unit) { alert("검사할 단원을 입력해주세요."); return; }

  tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:20px;">데이터 조회 중...</td></tr>`;

  try {
    // 1. 그 반 학생 명단 가져오기
    const { data: students } = await supabase
      .from('students')
      .select('*')
      .eq('class_id', classId)
      .order('name');

    if (!students || students.length === 0) {
      tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:20px;">이 반에 학생이 없습니다.</td></tr>`;
      return;
    }

    // 2. 그 학생들의 숙제 결과 가져오기
    const loginIds = students.map(s => s.login_id);
    const { data: results } = await supabase
      .from('vocab_results')
      .select('*')
      .in('student_login_id', loginIds)
      .eq('unit', unit)
      .order('submitted_at', { ascending: false });

    // 3. 표 만들기
    tbody.innerHTML = "";
    
    students.forEach(std => {
      // 내 결과 찾기
      const myResult = results.find(r => r.student_login_id === std.login_id);
      const tr = document.createElement("tr");

      if (myResult) {
        // ✨ 날짜 포맷팅 (YYYY. M. D. 오후 h:mm:ss) ✨
        const dateObj = new Date(myResult.submitted_at);
        const dateStr = dateObj.toLocaleString('ko-KR', {
          year: 'numeric', 
          month: 'numeric', 
          day: 'numeric', 
          hour: 'numeric', 
          minute: 'numeric', 
          second: 'numeric',
          hour12: true 
        });

        tr.innerHTML = `
          <td style="font-weight:700;">${std.name}</td>
          <td><span class="badge badge-done">제출 완료</span></td>
          <td>${myResult.correct_count}점 (${myResult.mode})</td>
          <td class="time-text">${dateStr}</td>
        `;
      } else {
        // 안 함 (빨간 배경)
        tr.style.backgroundColor = "#fff5f5";
        tr.innerHTML = `
          <td>${std.name}</td>
          <td><span class="badge badge-yet">미제출</span></td>
          <td>-</td>
          <td>-</td>
        `;
      }
      tbody.appendChild(tr);
    });

  } catch (err) {
    console.error(err);
    alert("오류가 발생했습니다.");
  }
}
