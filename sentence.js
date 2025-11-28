// sentence.js
// 문장 학습용 문제 DB
// words.js와 같은 구조 대응

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

      // -----------------------------
      // 1) 빈칸 완성
      // -----------------------------
      if (type === "blank") {
        // unit|blank|id|question|opt1|opt2|opt3|opt4|answerIndex|explanation
        const [question, o1, o2, o3, o4, ansStr, explanation] = rest;
        q = {
          id,
          type,
          question,
          options: [o1, o2, o3, o4],
          answerIndex: Number(ansStr),
          explanation
        };
      }

      // -----------------------------
      // 2) 문장 배열
      // -----------------------------
      else if (type === "order") {
        // unit|order|id|question|wordsStr|answer|koreanMeaning
        const [question, wordsStr, answer, koreanMeaning] = rest;

        q = {
          id,
          type,
          question,
          words: wordsStr.split("/").map(w => w.trim()),
          answer,
          koreanMeaning   // ← 기존 explanation 대신 “해석”
        };
      }

      // -----------------------------
      // 3) 문장 완성(타이핑)
      // -----------------------------
      else if (type === "type") {
        // unit|type|id|question|answer|koreanMeaning
        const [question, answer, koreanMeaning] = rest;

        q = {
          id,
          type,
          question,
          answer,
          koreanMeaning
        };
      }

      // -----------------------------
      // 4) 문장 고르기
      // -----------------------------
      else if (type === "choose") {
        const [question, o1, o2, o3, o4, ansStr, explanation] = rest;

        q = {
          id,
          type,
          question,
          options: [o1, o2, o3, o4],
          answerIndex: Number(ansStr),
          explanation
        };
      }

      // -----------------------------
      // 5) 지문 완성
      // -----------------------------
      else if (type === "passage") {
        // unit|passage|id|passage|opt1|opt2|opt3|opt4|opt5|b1|b2|b3|explanation
        const [
          passage,
          o1, o2, o3, o4, o5,
          b1, b2, b3,
          explanation
        ] = rest;

        q = {
          id,
          type,
          passage,
          options: [o1, o2, o3, o4, o5],
          blanks: [b1, b2, b3].filter(Boolean),
          explanation
        };
      }

      if (!q) continue;

      if (!db[unit]) db[unit] = [];
      db[unit].push(q);
    }

    return db;
  }

  // *******************************************
  //  🔽 여기를 네가 원하는 문제로 계속 수정하면 된다!
  // *******************************************
  const RAW_SENTENCES = `
# 1-1 현재형 (초6)
# 문제 5종류 총 16문제

# --------------------
# 1) 빈칸 완성 (5문제)
# --------------------
1-1|blank|B1|He ____ to school every day.|go|goes|going|is going|1|He는 3인칭 단수라서 goes가 됩니다.
1-1|blank|B2|She ____ breakfast at 7 a.m.|eat|eats|eating|is eat|1|She는 3인칭 단수 → eats 사용.
1-1|blank|B3|They ____ soccer after school.|play|plays|playing|is play|0|They(복수) → 동사 원형 play.
1-1|blank|B4|My father ____ in an office.|work|works|working|is work|1|My father는 3인칭 단수 → works 정답.
1-1|blank|B5|I ____ TV every evening.|watch|watches|watching|is watch|0|I → 동사 원형 watch.

# --------------------
# 2) 문장 배열 (5문제)
#   ⬇️ 여기서 마지막 칸을 “한국어 해석”으로 기입
# --------------------
1-1|order|R1|다음 단어를 바르게 배열하여 문장을 만드시오.|She / reads / books / every day.|She reads books every day.|그녀는 매일 책을 읽습니다.
1-1|order|R2|다음 단어를 바르게 배열하여 문장을 만드시오.|to school / goes / he / at 8.|He goes to school at 8.|그는 8시에 학교에 갑니다.
1-1|order|R3|다음 단어를 바르게 배열하여 문장을 만드시오.|in the park / play / children / the.|The children play in the park.|그 아이들은 공원에서 놉니다.
1-1|order|R4|다음 단어를 바르게 배열하여 문장을 만드시오.|cooking / is / dinner / mom.|Mom is cooking dinner.|엄마는 저녁을 요리하고 있습니다.
1-1|order|R5|다음 단어를 바르게 배열하여 문장을 만드시오.|homework / doing / am / I.|I am doing homework.|나는 숙제를 하고 있습니다.

# --------------------
# 3) 문장 완성(타이핑) — 문장 배열과 같은 문장 5개
# --------------------
1-1|type|T1|문장을 완성하세요.|She reads books every day.|그녀는 매일 책을 읽습니다.
1-1|type|T2|문장을 완성하세요.|He goes to school at 8.|그는 8시에 학교에 갑니다.
1-1|type|T3|문장을 완성하세요.|The children play in the park.|그 아이들은 공원에서 놉니다.
1-1|type|T4|문장을 완성하세요.|Mom is cooking dinner.|엄마는 저녁을 요리하고 있습니다.
1-1|type|T5|문장을 완성하세요.|I am doing homework.|나는 숙제를 하고 있습니다.

# --------------------
# 4) 문장 고르기 (5문제)
# --------------------
1-1|choose|C1|다음 중 올바른 문장을 고르시오.|He go to school.|She plays the piano.|They walks fast.|I am goes home.|1|She + plays가 올바른 형태입니다.
1-1|choose|C2|다음 중 올바른 문장을 고르시오.|We is hungry.|Does he like apples?|She don’t read.|He cans swim well.|1|Does + 동사원형.
1-1|choose|C3|다음 중 올바른 문장을 고르시오.|My father work at a bank.|They is friends.|She is studying now.|He don’t has money.|2|현재진행형 규칙.
1-1|choose|C4|다음 중 올바른 문장을 고르시오.|Do she play tennis?|He have a cat.|I doesn’t know.|The students are in the classroom.|3|students → are.
1-1|choose|C5|다음 중 올바른 문장을 고르시오.|She eat breakfast.|They are happy today.|He don’t like music.|I goes to bed early.|1|They are.

# --------------------
# 5) 지문 완성 (1문제)
# --------------------
1-1|passage|P1|My name is Tom. I (1) ____ in a small town.\nEvery morning, I (2) ____ up at 7 a.m.\nI (3) ____ breakfast with my family.|live|lives|get|gets|eat|live|get|eat|I(1인칭) → live, get, eat 원형.
`;

  window.SENTENCE_DB = buildSentenceDB(RAW_SENTENCES);
})();
