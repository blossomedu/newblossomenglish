// sentence2.js
// 문장 학습 2단계용 문제 DB (예: 10-1)

(function () {
  function buildSentenceDB(raw) {
    const db = {};
    const lines = raw.split(/\r?\n/);

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;

      const parts = trimmed.split("|").map(p => p.trim());
      if (parts.length < 3) continue;

      const [unit, type, id, ...rest] = parts;
      let q = null;

      if (type === "blank") {
        // unit|blank|id|question|opt1|opt2|opt3|opt4|answerIndex|explanation
        if (rest.length < 7) continue;
        const [question, opt1, opt2, opt3, opt4, ansStr, explanation] = rest;
        const answerIndex = parseInt(ansStr, 10);
        if (Number.isNaN(answerIndex)) continue;
        q = {
          id,
          type,
          question,
          options: [opt1, opt2, opt3, opt4],
          answerIndex,
          explanation,
        };
      } else if (type === "order") {
        // unit|order|id|question|answerEn|meaningKo
        if (rest.length < 3) continue;
        const [question, answerEn, meaningKo] = rest;
        q = {
          id,
          type,
          question,
          answerEn,
          meaningKo,
        };
      } else if (type === "type") {
        // 🔹 부분 타이핑용
        // 형식: unit|type|id|question|fullEn|meaningKo|targetEn
        if (rest.length < 4) continue;
        const [question, fullEn, meaningKo, targetEn] = rest;
        q = {
          id,
          type,
          question,
          fullEn,             // 전체 문장
          answerEn: fullEn,   // 혹시 기존 코드에서 answerEn을 쓸 수도 있으니 같이 넣어둠
          meaningKo,
          targetEn,           // 빈칸에 입력할 부분
        };
      } else if (type === "choose") {
        // unit|choose|id|question|opt1|opt2|opt3|opt4|answerIndex|explanation
        if (rest.length < 7) continue;
        const [question, opt1, opt2, opt3, opt4, ansStr, explanation] = rest;
        const answerIndex = parseInt(ansStr, 10);
        if (Number.isNaN(answerIndex)) continue;
        q = {
          id,
          type,
          question,
          options: [opt1, opt2, opt3, opt4],
          answerIndex,
          explanation,
        };
      } else if (type === "passage") {
        // unit|passage|id|passage|opt1|opt2|opt3|opt4|opt5|blank1|blank2|blank3|explanation
        if (rest.length < 11) continue;
        const [
          passage,
          opt1,
          opt2,
          opt3,
          opt4,
          opt5,
          b1,
          b2,
          b3,
          explanation,
        ] = rest;
        const blanks = [b1, b2, b3].filter(Boolean);
        const options = [opt1, opt2, opt3, opt4, opt5];
        q = {
          id,
          type,
          passage,
          options,
          blanks,
          explanation,
        };
      }

      if (!q) continue;
      if (!db[unit]) db[unit] = [];
      db[unit].push(q);
    }

    return db;
  }

  // ===== 여기서부터 문제 데이터 (2단계: 10-1) =====
  const RAW_SENTENCES = `
# 1) 빈칸 완성 (5문제)
10-1|blank|B1|He ____ to school every day.|go|goes|going|is going|1|He는 3인칭 단수라서 goes가 됩니다.
10-1|blank|B2|She ____ breakfast at 7 a.m.|eat|eats|eating|is eat|1|She는 3인칭 단수 → eats 사용.
10-1|blank|B3|They ____ soccer after school.|play|plays|playing|is play|0|They(복수) → 동사 원형 play.
10-1|blank|B4|My father ____ in an office.|work|works|working|is work|1|My father는 3인칭 단수 → works 정답.
10-1|blank|B5|I ____ TV every evening.|watch|watches|watching|is watch|0|I → 동사 원형 watch.

# 2) 문장 배열 (5문제)
10-1|order|R1|다음 단어를 바르게 배열하여 문장을 만드시오.|She reads books every day.|그녀는 매일 책을 읽습니다.
10-1|order|R2|다음 단어를 바르게 배열하여 문장을 만드시오.|He goes to school at 8.|그는 8시에 학교에 갑니다.
10-1|order|R3|다음 단어를 바르게 배열하여 문장을 만드시오.|The children play in the park.|그 아이들은 공원에서 놉니다.
10-1|order|R4|다음 단어를 바르게 배열하여 문장을 만드시오.|Mom is cooking dinner.|엄마는 저녁을 요리하고 있습니다.
10-1|order|R5|다음 단어를 바르게 배열하여 문장을 만드시오.|I am doing homework.|나는 숙제를 하고 있습니다.

# 3) 문장 타이핑 – 문장 안 '필요한 부분'만 입력
# 형식: unit|type|id|question|fullEn|meaningKo|targetEn
10-1|type|T1|문장을 완성하세요.|She reads books every day.|그녀는 매일 책을 읽습니다.|reads books every day
10-1|type|T2|문장을 완성하세요.|He goes to school at 8.|그는 8시에 학교에 갑니다.|goes to school at 8
10-1|type|T3|문장을 완성하세요.|The children play in the park.|그 아이들은 공원에서 놉니다.|play in the park
10-1|type|T4|문장을 완성하세요.|Mom is cooking dinner.|엄마는 저녁을 요리하고 있습니다.|is cooking dinner
10-1|type|T5|문장을 완성하세요.|I am doing homework.|나는 숙제를 하고 있습니다.|doing homework

# 4) 문장 고르기 (5문제) – 나중에 쓸 수 있게 남겨둠
10-1|choose|C1|다음 중 올바른 문장을 고르시오.|He go to school.|She plays the piano.|They walks fast.|I am goes home.|1|She + plays가 올바른 형태입니다.
10-1|choose|C2|다음 중 올바른 문장을 고르시오.|We is hungry.|Does he like apples?|She don’t read.|He cans swim well.|1|Does + 동사원형.
10-1|choose|C3|다음 중 올바른 문장을 고르시오.|My father work at a bank.|They is friends.|She is studying now.|He don’t has money.|2|현재진행형 규칙.
10-1|choose|C4|다음 중 올바른 문장을 고르시오.|Do she play tennis?|He have a cat.|I doesn’t know.|The students are in the classroom.|3|students → are.
10-1|choose|C5|다음 중 올바른 문장을 고르시오.|She eat breakfast.|They are happy today.|He don’t like music.|I goes to bed early.|1|They are.

# 5) 지문 완성 (1문제)
10-1|passage|P1|My name is Tom. I (1) ____ in a small town.\nEvery morning, I (2) ____ up at 7 a.m.\nI (3) ____ breakfast with my family.|live|lives|get|gets|eat|live|get|eat|I(1인칭) → live, get, eat 원형.
`;

  window.SENTENCE_DB = buildSentenceDB(RAW_SENTENCES);
})();
