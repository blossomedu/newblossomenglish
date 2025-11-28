// sentence.js
// 문장 학습용 문제 DB
// words.js와 비슷한 구조로, RAW_SENTENCES 문자열만 수정해서 사용

(function () {
  function buildSentenceDB(raw) {
    const db = {};
    const lines = raw.split(/\r?\n/);

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue; // 빈 줄, 주석 무시

      const parts = trimmed.split("|");
      if (parts.length < 3) continue;

      const [unit, type, id, ...rest] = parts.map(p => p.trim());
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
        // unit|order|id|question|wordsStr|answer|explanation
        if (rest.length < 3) continue;
        const [question, wordsStr, answer, explanation] = rest;
        const words = wordsStr
          .split("/")
          .map(w => w.trim())
          .filter(Boolean);
        q = {
          id,
          type,
          question,
          words,
          answer,
          explanation,
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

  // 👇👇👇 여기부터 네가 수정/추가할 영역 👇👇👇
  // 형식:
  // 빈칸 완성: unit|blank|id|question|opt1|opt2|opt3|opt4|answerIndex(0~3)|explanation
  // 문장 배열: unit|order|id|question|단어들(/로 구분)|정답문장|explanation
  // 문장 고르기: unit|choose|id|question|opt1|opt2|opt3|opt4|answerIndex(0~3)|explanation
  // 지문 완성: unit|passage|id|passage|opt1|opt2|opt3|opt4|opt5|blank1|blank2|blank3|explanation
  const RAW_SENTENCES = `
# ----- 1-1 유닛: 현재형 / 초6 난이도, 총 16문제 -----

# 빈칸 완성 5문제
1-1|blank|B1|He ____ to school every day.|go|goes|going|is going|1|He는 3인칭 단수라서 동사에 -es가 붙어 goes가 됩니다.
1-1|blank|B2|She ____ breakfast at 7 a.m.|eat|eats|eating|is eat|1|She는 3인칭 단수 → 일반동사 eat에 s를 붙여 eats가 정답입니다.
1-1|blank|B3|They ____ soccer after school.|play|plays|playing|is play|0|They는 복수 주어이므로 동사 원형 play를 씁니다.
1-1|blank|B4|My father ____ in an office.|work|works|working|is work|1|My father는 3인칭 단수이므로 works가 정답입니다.
1-1|blank|B5|I ____ TV every evening.|watch|watches|watching|is watch|0|I는 1인칭이므로 동사 원형 watch를 사용합니다.

# 문장 배열 5문제
1-1|order|R1|다음 단어를 바르게 배열하여 문장을 만드시오.|she / every day / reads / books|She reads books every day.|reads는 3인칭 단수 she에 맞는 동사 형태입니다.
1-1|order|R2|다음 단어를 바르게 배열하여 문장을 만드시오.|to school / goes / he / at 8|He goes to school at 8.|goes는 3인칭 단수 he에 맞는 형태입니다.
1-1|order|R3|다음 단어를 바르게 배열하여 문장을 만드시오.|in the park / play / children / the|The children play in the park.|children은 복수이므로 동사 원형 play를 사용합니다.
1-1|order|R4|다음 단어를 바르게 배열하여 문장을 만드시오.|cooking / is / dinner / mom|Mom is cooking dinner.|현재진행형: be 동사(is) + 동사ing(cooking) 구조입니다.
1-1|order|R5|다음 단어를 바르게 배열하여 문장을 만드시오.|homework / doing / am / I|I am doing homework.|주어 I + be동사 am + doing 형태의 현재진행형입니다.

# 문장 고르기 5문제
1-1|choose|C1|다음 중 올바른 문장을 고르시오.|He go to school.|She plays the piano.|They walks fast.|I am goes home.|1|3인칭 단수 She에는 plays처럼 동사에 -s가 붙어야 합니다.
1-1|choose|C2|다음 중 올바른 문장을 고르시오.|We is hungry.|Does he like apples?|She don’t read.|He cans swim well.|1|의문문은 Does + 주어 + 동사원형 구조가 바른 형태입니다.
1-1|choose|C3|다음 중 올바른 문장을 고르시오.|My father work at a bank.|They is friends.|She is studying now.|He don’t has money.|2|현재진행형은 주어 + be동사 + 동사ing 형태입니다.
1-1|choose|C4|다음 중 올바른 문장을 고르시오.|Do she play tennis?|He have a cat.|I doesn’t know.|The students are in the classroom.|3|students는 복수 주어이므로 be동사 are가 바른 형태입니다.
1-1|choose|C5|다음 중 올바른 문장을 고르시오.|She eat breakfast.|They are happy today.|He don’t like music.|I goes to bed early.|1|복수 주어 They에는 be동사 are가 자연스럽게 쓰입니다.

# 지문 완성 1문제
1-1|passage|P1|My name is Tom. I (1) ____ in a small town.\nEvery morning, I (2) ____ up at 7 a.m.\nI (3) ____ breakfast with my family.|live|lives|get|gets|eat|live|get|eat|주어 I에는 현재형 동사 원형인 live, get, eat이 알맞습니다.
  `;
  // 👆 RAW_SENTENCES 내용만 수정/추가해서 문제를 늘릴 수 있음

  window.SENTENCE_DB = buildSentenceDB(RAW_SENTENCES);
})();