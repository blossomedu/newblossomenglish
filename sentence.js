// sentence.js
// 문장 학습용 문제 DB
// RAW_SENTENCES 문자열만 수정해서 사용

(function () {
  /**
   * RAW_SENTENCES 문자열을 파싱해서
   *  unit -> [questions...] 형태의 DB로 변환
   */
  function buildSentenceDB(raw) {
    const db = {};
    const lines = raw.split(/\r?\n/);

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue; // 빈 줄 / 주석 무시

      const parts = trimmed.split("|");
      if (parts.length < 3) continue;

      const [unit, type, id, ...rest] = parts.map(p => p.trim());
      let q = null;

     // ===== 여기서부터 if~else 묶음 전체 교체 =====
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
        // 새 형식:
        // unit|order|id|question|answerEn|meaningKo
        if (rest.length < 2) continue;
        const [question, answerEn, meaningKo] = rest;

        // 정답 문장을 자동으로 단어 리스트로 쪼개서 사용
        const words = (answerEn || "")
          .trim()
          .split(" ")
          .map(w => w.trim())
          .filter(Boolean);

        q = {
          id,
          type,
          question,
          answerEn,
          meaningKo,
          words,
        };

      } else if (type === "type") {
        // 문장 완성(타이핑)
        // 형식:
        // unit|type|id|question|answerEn|meaningKo|[target1]|[target2]|...
        if (rest.length < 2) continue;
        const [question, answerEn, meaningKo, ...targets] = rest;

        const targetWords = (targets || [])
          .map(w => w.trim())
          .filter(Boolean);   // 타이핑해야 할 단어들 (없으면 빈 배열)

        q = {
          id,
          type,
          question,
          answerEn,
          meaningKo,
          targetWords,
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
      //
        // 형식(예전 그대로 예시):
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

  // 👇 여기서부터는 “문제 데이터”만 신경 쓰면 됨
  // 형식 다시 정리:
  // 1) 빈칸 완성(blank)
  //    unit|blank|id|question|opt1|opt2|opt3|opt4|answerIndex(0~3)|explanation
  //
  // 2) 문장 배열(order)
  //    unit|order|id|question|answerEn|meaningKo
  //
  // 3) 문장 완성(type)
  //    unit|type|id|question|answerEn|meaningKo
  //
  // 4) 문장 고르기(choose)
  //    unit|choose|id|question|opt1|opt2|opt3|opt4|answerIndex(0~3)|explanation
  //
  // 5) 지문 완성(passage)
  //    unit|passage|id|passage|opt1|opt2|opt3|opt4|opt5|blank1|blank2|blank3|explanation

  const RAW_SENTENCES = `
# ----- 1-1 유닛: 현재형 / 초6 난이도 -----

# 1) 빈칸 완성 (5문제)
1-1|blank|B1|He ____ to school every day.|go|goes|going|is going|1|He는 3인칭 단수라서 goes가 됩니다.
1-1|blank|B2|She ____ breakfast at 7 a.m.|eat|eats|eating|is eat|1|She는 3인칭 단수 → eats 사용.
1-1|blank|B3|They ____ soccer after school.|play|plays|playing|is play|0|They(복수) → 동사 원형 play.
1-1|blank|B4|My father ____ in an office.|work|works|working|is work|1|My father는 3인칭 단수 → works 정답.
1-1|blank|B5|I ____ TV every evening.|watch|watches|watching|is watch|0|I → 동사 원형 watch.

# 2) 문장 배열 (5문제)
1-1|order|R1|다음 단어를 바르게 배열하여 문장을 만드시오.|She reads books every day.|그녀는 매일 책을 읽습니다.
1-1|order|R2|다음 단어를 바르게 배열하여 문장을 만드시오.|He goes to school at 8.|그는 8시에 학교에 갑니다.
1-1|order|R3|다음 단어를 바르게 배열하여 문장을 만드시오.|The children play in the park.|그 아이들은 공원에서 놉니다.
1-1|order|R4|다음 단어를 바르게 배열하여 문장을 만드시오.|Mom is cooking dinner.|엄마는 저녁을 요리하고 있습니다.
1-1|order|R5|다음 단어를 바르게 배열하여 문장을 만드시오.|I am doing homework.|나는 숙제를 하고 있습니다.

# 3) 문장 완성(타이핑) – 문장 배열과 동일한 문장 사용
1-1|type|T1|문장을 완성하세요.|She reads books every day.|그녀는 매일 책을 읽습니다.
1-1|type|T2|문장을 완성하세요.|He goes to school at 8.|그는 8시에 학교에 갑니다.
1-1|type|T3|문장을 완성하세요.|The children play in the park.|그 아이들은 공원에서 놉니다.
1-1|type|T4|문장을 완성하세요.|Mom is cooking dinner.|엄마는 저녁을 요리하고 있습니다.
1-1|type|T5|문장을 완성하세요.|I am doing homework.|나는 숙제를 하고 있습니다.

# 4) 문장 고르기 (5문제)
# 형식: unit|choose|id|question|opt1|opt2|opt3|opt4|answerIndex(0~3)|explanation
1-1|choose|C1|다음 중 올바른 문장을 고르시오.|He go to school.|She plays the piano.|They walks fast.|I am goes home.|1|She plays the piano.가 올바른 문장입니다.
1-1|choose|C2|다음 중 올바른 문장을 고르시오.|We is hungry.|Does he like apples?|She don’t read.|He cans swim well.|1|Does + 주어 + 동사원형 구조가 바른 형태입니다.
1-1|choose|C3|다음 중 올바른 문장을 고르시오.|My father work at a bank.|They is friends.|She is studying now.|He don’t has money.|2|현재진행형: be동사 + 동사ing 형태입니다.
1-1|choose|C4|다음 중 올바른 문장을 고르시오.|Do she play tennis?|He have a cat.|I doesn’t know.|The students are in the classroom.|3|students는 복수 주어이므로 are를 사용합니다.
1-1|choose|C5|다음 중 올바른 문장을 고르시오.|She eat breakfast.|They are happy today.|He don’t like music.|I goes to bed early.|1|복수 주어 They에는 be동사 are가 자연스럽게 쓰입니다.

# 5) 지문 완성 (1문제)
# 형식: unit|passage|id|passage|opt1|opt2|opt3|opt4|opt5|blank1|blank2|blank3|explanation
1-1|passage|P1|My name is Tom. I (1) ____ in a small town.\nEvery morning, I (2) ____ up at 7 a.m.\nI (3) ____ breakfast with my family.|live|lives|get|gets|eat|live|get|eat|주어 I에는 현재형 동사 원형인 live, get, eat이 알맞습니다.

  // 최종 DB를 전역에 노출
  window.SENTENCE_DB = buildSentenceDB(RAW_SENTENCES);
})();



