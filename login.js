/* 1. Supabase 설정 (기존 키 유지) */
const SUPABASE_URL = "https://bpdisxjhhibrgfpvtlmv.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwZGlzeGpoaGlicmdmcHZ0bG12Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5NTkxODQsImV4cCI6MjA3OTUzNTE4NH0.jDZ6BGirOPuWUnt4ykjhng4PLft2ZjBuYAFzApUnlYU";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/* 메시지 표시 헬퍼 함수 */
function setTeacherStatus(msg, type) {
  const el = document.getElementById("teacherStatus");
  if (el) {
    el.textContent = msg;
    el.className = "status-text " + type;
  }
}

function setStudentStatus(msg, type) {
  const el = document.getElementById("studentStatus");
  if (el) {
    el.textContent = msg;
    el.className = "status-text " + type;
  }
}

/* ==========================================
   [Part A] 선생님 기능 (기존 유지)
   ========================================== */
const teacherCodeEl    = document.getElementById("teacherCode");
const teacherSignupBtn = document.getElementById("teacherSignupBtn");
const googleLoginBtn   = document.getElementById("googleLoginBtn");

if (teacherSignupBtn) {
  teacherSignupBtn.onclick = async function() {
    const inputCode = teacherCodeEl.value.trim();

    if (!inputCode) {
      setTeacherStatus("가입 코드를 입력해 주세요.", "error");
      return;
    }

    try {
      const { data, error } = await supabaseClient
        .from("system_settings")
        .select("value")
        .eq("key", "teacher_auth_code")
        .single();

      if (error) throw error;

      if (data && data.value === inputCode) {
        setTeacherStatus("인증되었습니다! 구글 버튼을 눌러주세요.", "success");

        teacherCodeEl.disabled = true;
        teacherSignupBtn.style.display = "none";

        googleLoginBtn.disabled = false;
        googleLoginBtn.style.backgroundColor = "var(--pink)";
        googleLoginBtn.style.cursor = "pointer";
        googleLoginBtn.textContent = "🔑 구글 계정으로 로그인";
      } else {
        setTeacherStatus("코드가 올바르지 않습니다. (DB 불일치)", "error");
      }
    } catch (err) {
      console.error(err);
      setTeacherStatus("인증 시스템 오류 (DB 연결 확인 필요)", "error");
    }
  };
}

/* 구글 로그인 버튼 클릭 */
if (googleLoginBtn) {
  googleLoginBtn.onclick = async function() {
    if (googleLoginBtn.disabled) return;

    const redirectUrl = window.location.origin + "/newblossomenglish/index.html";

    try {
      const { error } = await supabaseClient.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: redirectUrl },
      });
      if (error) throw error;
    } catch (err) {
      console.error(err);
      setTeacherStatus("구글 로그인 연결 실패", "error");
    }
  };
}

/* ==========================================
   [Part B] 학생 로그인 (★업그레이드: 반 배정 확인 추가)
   ========================================== */
const studentLoginBtn = document.getElementById("studentLoginBtn");

if (studentLoginBtn) {
  studentLoginBtn.onclick = async function() {
    const idVal = document.getElementById("studentLoginId").value.trim();
    const pwVal = document.getElementById("studentLoginPw").value.trim();

    if (!idVal || !pwVal) {
      setStudentStatus("아이디와 비밀번호를 입력해주세요.", "error");
      return;
    }

    try {
      // 1. DB에서 아이디/비번 일치하는 학생 찾기
      const { data, error } = await supabaseClient
        .from("students")
        .select("id, name, login_id, class_id, created_at")
        .eq("login_id", idVal)
        .eq("password", pwVal)
        .maybeSingle();

      if (error) throw error;

      // 2. 계정 존재 여부 확인
      if (!data) {
        setStudentStatus("아이디 또는 비밀번호가 틀렸습니다.", "error");
        return;
      }

      // 3. [추가된 로직] 반 배정(class_id) 체크
      if (!data.class_id) {
        setStudentStatus(`'${data.name}' 학생은 아직 반 배정이 안 되었습니다. 선생님께 문의하세요.`, "error");
        // 로그인 처리 안 하고 여기서 멈춤
        return;
      }

      // 4. 모든 조건 통과 -> 로그인 성공 처리
      setStudentStatus(`반가워요, ${data.name} 학생! 이동합니다...`, "success");

      localStorage.setItem("user_role", "student");
      localStorage.setItem("blossom_student", JSON.stringify(data));

      setTimeout(() => {
        // 기존 코드에 있던 이동 경로 유지
        window.location.href = "student-mypage.html";
      }, 1000);
      
    } catch (e) {
      console.error(e);
      setStudentStatus("로그인 중 시스템 오류가 발생했습니다.", "error");
    }
  };
}

/* ==========================================
   [Part C] 학생 회원가입 (기존 유지)
   ========================================== */
const studentSignupBtn = document.getElementById("studentSignupBtn");

if (studentSignupBtn) {
  studentSignupBtn.onclick = async function() {
    const nameVal  = document.getElementById("studentSignupName").value.trim();
    const idVal    = document.getElementById("studentSignupId").value.trim();
    const pwVal    = document.getElementById("studentSignupPw").value.trim();
    const phoneVal = document.getElementById("studentSignupPhone").value.trim();

    if (!nameVal || !idVal || !pwVal || !phoneVal) {
      setStudentStatus("모든 정보를 입력해 주세요.", "error");
      return;
    }
    if (idVal.length < 4) {
      setStudentStatus("아이디는 4글자 이상이어야 합니다.", "error");
      return;
    }

    try {
      const { data: existing } = await supabaseClient
        .from("students")
        .select("id")
        .eq("login_id", idVal)
        .maybeSingle();

      if (existing) {
        setStudentStatus("이미 사용 중인 아이디입니다.", "error");
        return;
      }

      const { error: insertError } = await supabaseClient
        .from("students")
        .insert([{
          name: nameVal,
          login_id: idVal,
          password: pwVal,
          parent_phone: phoneVal,
          class_id: null // 가입 시에는 반 배정 없음(null)
        }]);

      if (insertError) throw insertError;

      alert("회원가입 완료! 로그인해 주세요.");
      setStudentStatus("가입 완료! 위에서 로그인하세요.", "success");

      // 입력창 초기화
      document.getElementById("studentSignupName").value  = "";
      document.getElementById("studentSignupId").value    = "";
      document.getElementById("studentSignupPw").value    = "";
      document.getElementById("studentSignupPhone").value = "";

      window.scrollTo(0, 0);
    } catch (e) {
      console.error(e);
      setStudentStatus("가입 중 오류가 발생했습니다.", "error");
    }
  };
}
