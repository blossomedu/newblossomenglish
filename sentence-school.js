// sentence-school.js
// 문장 학습 - 학교 시험 DB

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
        if (rest.length < 3) continue;
        const [question, answerEn, meaningKo] = rest;
        q = { id, type, question, answerEn, meaningKo };
      } else if (type === "type") {
        // 형식:
        // unit|type|id|question|answerEn|meaningKo
        // 또는
        // unit|type|id|question|answerEn|meaningKo|blankWords
        //   예: blankWords = "doing, homework"
        if (rest.length < 3) continue;
        const [question, answerEn, meaningKo, blankWords] = rest;
        q = { id, type, question, answerEn, meaningKo };
        if (blankWords) {
          q.blankWords = blankWords; // sentence-school-quiz에서 사용
        }
      } else if (type === "choose") {
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
        // unit|passage|id|passage|opt1|opt2|opt3|opt4|opt5|b1|b2|b3|explanation
        if (rest.length < 10) continue;
        const [
          passageRaw,
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

        // \\n → 실제 줄바꿈으로 변환
        const passage = passageRaw.replace(/\\n/g, "\n");
        const blanks  = [b1, b2, b3].filter(Boolean);
        const options = [opt1, opt2, opt3, opt4, opt5];
        q = { id, type, passage, options, blanks, explanation };
      }

      if (!q) continue;
      if (!db[unit]) db[unit] = [];
      db[unit].push(q);
    }

    return db;
  }

  const RAW_SENTENCES = `
# 1) 빈칸 완성
잠신중 1-1|blank|B1|He ____ to school every day.|go|goes|going|is going|1|He는 3인칭 단수라서 goes가 됩니다.
잠신중 1-1|blank|B2|She ____ breakfast at 7 a.m.|eat|eats|eating|is eat|1|She는 3인칭 단수 → eats 사용.
잠신중 1-1|blank|B3|They ____ soccer after school.|play|plays|playing|is play|0|They(복수) → 동사 원형 play.
잠신중 1-1|blank|B4|My father ____ in an office.|work|works|working|is work|1|My father는 3인칭 단수 → works 정답.
잠신중 1-1|blank|B5|I ____ TV every evening.|watch|watches|watching|is watch|0|I → 동사 원형 watch.

# 2) 문장 배열
잠신중 1-1|order|R1|다음 단어를 바르게 배열하여 문장을 만드시오.|She reads books every day.|그녀는 매일 책을 읽습니다.
잠신중 1-1|order|R2|다음 단어를 바르게 배열하여 문장을 만드시오.|He goes to school at 8.|그는 8시에 학교에 갑니다.
잠신중 1-1|order|R3|다음 단어를 바르게 배열하여 문장을 만드시오.|The children play in the park.|그 아이들은 공원에서 놉니다.
잠신중 1-1|order|R4|다음 단어를 바르게 배열하여 문장을 만드시오.|Mom is cooking dinner.|엄마는 저녁을 요리하고 있습니다.
잠신중 1-1|order|R5|다음 단어를 바르게 배열하여 문장을 만드시오.|I am doing homework.|나는 숙제를 하고 있습니다.

# 3) 문장 완성(타이핑)
잠신중 1-1|type|T1|빈칸을 채워 문장을 완성하세요.|She reads books every day.|그녀는 매일 책을 읽습니다.|reads,books
잠신중 1-1|type|T2|빈칸을 채워 문장을 완성하세요.|He goes to school at 8.|그는 8시에 학교에 갑니다.|goes,to,school,at
잠신중 1-1|type|T3|빈칸을 채워 문장을 완성하세요.|The children play in the park.|그 아이들은 공원에서 놉니다.|play,in,the,park
잠신중 1-1|type|T4|빈칸을 채워 문장을 완성하세요.|Mom is cooking dinner.|엄마는 저녁을 요리하고 있습니다.|is,cooking,dinner
잠신중 1-1|type|T5|빈칸을 채워 문장을 완성하세요.|I am doing homework.|나는 숙제를 하고 있습니다.|doing,homework

# 4) 문장 고르기
잠신중 1-1|choose|C1|다음 중 올바른 문장을 고르시오.|He go to school.|She plays the piano.|They walks fast.|I am goes home.|1|She + plays가 올바른 형태입니다.
잠신중 1-1|choose|C2|다음 중 올바른 문장을 고르시오.|We is hungry.|Does he like apples?|She don’t read.|He cans swim well.|1|Does + 동사원형.
잠신중 1-1|choose|C3|다음 중 올바른 문장을 고르시오.|My father work at a bank.|They is friends.|She is studying now.|He don’t has money.|2|현재진행형 규칙.
잠신중 1-1|choose|C4|다음 중 올바른 문장을 고르시오.|Do she play tennis?|He have a cat.|I doesn’t know.|The students are in the classroom.|3|students → are.
잠신중 1-1|choose|C5|다음 중 올바른 문장을 고르시오.|She eat breakfast.|They are happy today.|He don’t like music.|I goes to bed early.|1|They are.

# 5) 지문 완성 (1문제)
잠신중 1-1|passage|P1|My name is Tom. I (1) ____ in a small town.\\nEvery morning, I (2) ____ up at 7 a.m.\\nI (3) ____ breakfast with my family.|live|lives|get|gets|eat|eats|live|get|(1인칭) → live, get, eat 원형.  
`;

  window.SENTENCE_SCHOOL_DB = buildSentenceDB(RAW_SENTENCES);
})();

