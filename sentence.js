// sentence.js
// 문장 학습용 문제 DB 빌더

(function () {
  function buildDB(raw) {
    const db = {};
    const lines = raw.split(/\r?\n/);

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue; // 빈 줄, 주석 무시

      const parts = trimmed.split("|");
      if (parts.length < 3) continue;

      const unit = parts[0].trim();       // 예: "1-1"
      const type = parts[1].trim();       // "blank" | "order" | "choose"

      if (!db[unit]) db[unit] = [];

      // 공통 필드
      let q = { unit, type };

      if (type === "blank") {
        // 형식:
        // unit|blank|question|opt1|opt2|opt3|opt4|answerIndex(1~4)|explanation
        if (parts.length < 9) continue;
        const question = parts[2].trim();
        const opt1 = parts[3].trim();
        const opt2 = parts[4].trim();
        const opt3 = parts[5].trim();
        const opt4 = parts[6].trim();
        const answerIndex = Number(parts[7].trim()) - 1; // 0-based
        const explanation = parts[8].trim();

        q.question = question;
        q.options = [opt1, opt2, opt3, opt4];
        q.answerIndex = answerIndex;
        q.explanation = explanation;
      } else if (type === "order") {
        // 형식:
        // unit|order|question|words( "/"로 구분 )|answer|explanation
        if (parts.length < 6) continue;
        const question = parts[2].trim();
        const wordsStr = parts[3].trim();
        const answer = parts[4].trim();
        const explanation = parts[5].trim();

        const words = wordsStr.split("/").map(w => w.trim()).filter(Boolean);

        q.question = question;
        q.words = words;
        q.answer = answer;
        q.explanation = explanation;
      } else if (type === "choose") {
        // 형식:
        // unit|choose|question|opt1|opt2|opt3|opt4|answerIndex(1~4)|explanation
        if (parts.length < 9) continue;
        const question = parts[2].trim();
        const opt1 = parts[3].trim();
        const opt2 = parts[4].trim();
        const opt3 = parts[5].trim();
        const opt4 = parts[6].trim();
        const answerIndex = Number(parts[7].trim()) - 1;
        const explanation = parts[8].trim();

        q.question = question;
        q.options = [opt1, opt2, opt3, opt4];
        q.answerIndex = answerIndex;
        q.explanation = explanation;
      } else {
        // 모르는 type은 무시
        continue;
      }

      db[unit].push(q);
    }

    return db;
  }

  // 👇 여기부터 네가 수정/추가할 영역 (문제 데이터)
  const RAW_SENTENCES = `
# ========== 1-1 유닛: 현재형 / 현재진행형 초6 난이도 ==========

# ----- 빈칸 완성 (blank) 10문제 -----
1-1|blank|빈칸에 알맞은 말을 고르시오.\nHe ____ to school every day.|go|goes|going|is going|2|주어가 He(3인칭 단수)이므로 동사는 goes 로 변해야 함.
1-1|blank|빈칸에 알맞은 말을 고르시오.\nShe ____ breakfast at 7 a.m.|eat|eats|eating|is eat|2|She는 3인칭 단수 → 일반동사 eat에 s를 붙여 eats가 되어야 함.
1-1|blank|빈칸에 알맞은 말을 고르시오.\nThey ____ soccer after school.|play|plays|playing|is play|1|They는 복수 주어 → 동사는 기본형 play 사용.
1-1|blank|빈칸에 알맞은 말을 고르시오.\nMy father ____ in an office.|work|works|working|is work|2|My father는 3인칭 단수 → works가 정답.
1-1|blank|빈칸에 알맞은 말을 고르시오.\nI ____ TV every evening.|watch|watches|watching|is watch|1|I는 1인칭이므로 동사 원형 watch 사용.
1-1|blank|빈칸에 알맞은 말을 고르시오.\nWe ____ English on Monday.|study|studies|studying|is study|1|We는 복수 주어 → 동사 기본형 study 사용.
1-1|blank|빈칸에 알맞은 말을 고르시오.\nTom and Jerry ____ friends.|is|am|are|be|3|Tom and Jerry는 복수 → be동사 are 사용.
1-1|blank|빈칸에 알맞은 말을 고르시오.\nIt ____ a lot in winter here.|rain|rains|raining|are raining|2|It은 3인칭 단수 → 일반동사에 s를 붙여 rains.
1-1|blank|빈칸에 알맞은 말을 고르시오.\nJenny ____ to music now.|listen|listens|is listening|listening|3|now는 현재 진행 시제 → is listening이 자연스러운 표현.
1-1|blank|빈칸에 알맞은 말을 고르시오.\nMy brother ____ his homework right now.|do|does|is doing|doing|3|right now는 현재 진행형 → be + doing 형태가 정답.

# ----- 문장 배열 (order) 5문제 -----
1-1|order|다음 단어를 바르게 배열하여 문장을 만드시오.|She/reads/books/every day.|She reads books every day.|reads는 3인칭 단수 she에 맞는 동사 형태.
1-1|order|다음 단어를 바르게 배열하여 문장을 만드시오.|He/goes/to school/at 8.|He goes to school at 8.|goes는 3인칭 단수 he에 맞는 형태.
1-1|order|다음 단어를 바르게 배열하여 문장을 만드시오.|The children/play/in the park.|The children play in the park.|children은 복수이므로 play 사용.
1-1|order|다음 단어를 바르게 배열하여 문장을 만드시오.|Mom/is/cooking/dinner.|Mom is cooking dinner.|현재진행형: be 동사 + ~ing.
1-1|order|다음 단어를 바르게 배열하여 문장을 만드시오.|I/am/doing/homework.|I am doing homework.|I + am + doing 구조의 현재진행형.

# ----- 문장 고르기 (choose) 5문제 -----
1-1|choose|다음 중 올바른 문장을 고르시오.|He go to school.|She plays the piano.|They walks fast.|I am goes home.|2|3인칭 단수 She + plays 형태가 맞음.
1-1|choose|다음 중 올바른 문장을 고르시오.|We is hungry.|Does he like apples?|She don’t read.|He cans swim well.|2|의문문: Does + 주어 + 동사원형 구조가 정답.
1-1|choose|다음 중 올바른 문장을 고르시오.|My father work at a bank.|They is friends.|She is studying now.|He don’t has money.|3|현재진행형: 주어 + be동사 + ~ing.
1-1|choose|다음 중 올바른 문장을 고르시오.|Do she play tennis?|He have a cat.|I doesn’t know.|The students are in the classroom.|4|students(복수) + are가 올바른 be동사 형태.
1-1|choose|다음 중 올바른 문장을 고르시오.|She eat breakfast.|They are happy today.|He don’t like music.|I goes to bed early.|2|복수 주어 They + are가 자연스러운 문장.
  `;

  window.SENTENCE_DB = buildDB(RAW_SENTENCES);
})();
