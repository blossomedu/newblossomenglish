// words.js
// 👇 위쪽은 '코드 영역' - 건들지 말기!
(function () {
  function buildDB(raw) {
    const db = {};
    const lines = raw.split(/\r?\n/);

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue; // 빈 줄, 주석 무시

      // 유닛 | 영어 | 한글뜻 | 영어예문 | 한글예문
      const parts = trimmed.split("|");
      if (parts.length < 5) continue;

      const [unit, word, meaning, exampleEn, exampleKo] = parts.map(p => p.trim());
      if (!db[unit]) db[unit] = [];
      db[unit].push({ word, meaning, exampleEn, exampleKo });
    }

    return db;
  }

  // 👇👇👇 여기부터가 '복붙하는 구역'이야 👇👇👇
  // 형식: 유닛|영어|한글뜻|영어예문|한글예문
  const RAW_WORDS = `
1-1|at|~에|I get up at 7 o'clock.|나는 7시 정각에 일어나.
1-1|bat|야구방망이, 박쥐|I have a bat.|나는 야구 방망이를 가지고 있어.
1-1|fat|뚱뚱한, 살찐|a fat cat|뚱뚱한 고양이
1-1|hat|모자|a yellow hat|노란색 모자
1-1|chat|이야기하다, 수다 떨다|I like to chat.|나는 이야기하는 것을 좋아해.
1-1|act|행동하다, 연기하다|act like a kid|아이처럼 행동하다
1-1|fact|사실|a clear fact|분명한 사실
1-1|fan|팬, 선풍기|a big fan|큰 선풍기
1-1|man|남자, 사람|an old man|나이 든 남자
1-1|pants|바지|blue pants|파란색 바지

1-2|map|지도|look at the map|지도를 보다
1-2|cap|모자|a blue cap|파란색 모자
1-2|fun|재미, 재밌는|Have fun.|재미있게 보내.
1-2|run|달리다|run fast|빠르게 달리다
1-2|sad|슬픈|I'm sad.|나는 슬퍼.
1-2|mad|화난|She's mad.|그녀는 화났어.
1-2|glad|기쁜, 반가운|He's glad.|그는 기뻐.
1-2|bag|가방|It’s my bag.|그것은 나의 가방이야.
1-2|pig|돼지|It's a big pig.|그것은 큰 돼지야.
1-2|leg|다리|have four legs|다리 4개

1-3|get|얻다, 사다, (잠에서) 일어나다|get a gift|선물을 받다
1-3|net|그물|a fishing net|낚시 그물
1-3|set|두다, 설정하다|set the table|상을 차리다
1-3|pet|반려동물|cute pets|귀여운 반려동물
1-3|wet|젖은|a wet towel|젖은 수건
1-3|let's|~하자|Let's go.|가자.
1-3|upset|속상한, 짜증 난|She's upset.|그녀는 속상해.
1-3|pen|펜|a black pen|검은색 펜
1-3|bed|침대|Time for bed.|잘 시간이야.
1-3|bedroom|침실|three bedrooms|침실 3개

1-4|bell|벨, 종|ring the bell|종을 울리다
1-4|sell|팔다|It sells cards.|그곳은 카드를 팔아.
1-4|tell|말하다|tell a story|이야기를 들려주다
1-4|well|잘, 건강한, 우물|very well|매우 잘
1-4|cello|(악기) 첼로|play the cello|첼로를 연주하다.
1-4|hello|안녕|Hello. I'm Jisoo.|안녕. 나는 지수야.
1-4|in|~안에|in the box|상자 안에
1-4|pin|핀|a hair pin|머리핀
1-4|win|이기다|win the prize|상을 타다.
1-4|twin|쌍둥이|cute twins|귀여운 쌍둥이

1-5|ill|아픈|He feels ill.|그는 아파해요.
1-5|bill|지폐, 청구서|coins and bills|동전과 지폐
1-5|hill|언덕|on the hill|언덕 위에
1-5|kill|죽이다|kill a bug|벌레를 죽이다.
1-5|fill|채우다|fill up|~을 가득 채우다
1-5|film|영화|I love this film.|나는 이 영화를 좋아해.
1-5|hit|때리다|hit the ball|공을 때리다
1-5|sit|앉다|sit down|앉다
1-5|up|위로|up and down|위로 아래로
1-5|cup|컵|It’s a cup.|그것은 컵이야.

1-6|but|그러나|It's small but I like it.|그것은 작지만 나는 그것이 좋아.
1-6|cut|자르다|cut the paper|종이를 자르다
1-6|shut|닫다|shut the door|문을 닫다
1-6|bug|벌레|a ladybug|무당벌레
1-6|plan|계획, 계획하다|the next plan|다음 계획
1-6|plant|식물, 심다|plant a flower|꽃을 심다
1-6|dish|접시, 요리, 반찬|a clean dish|깨끗한 접시
1-6|wish|바라다, 소원|make a wish|소원을 빌다
1-6|cash|현금|by cash|현금으로
1-6|gas|가스, 기체|gas station|주유소

1-7|and|그리고, ~와|apples and grapes.|사과와 포도
1-7|band|밴드, 악단|The band plays music.|밴드가 음악을 연주해.
1-7|hand|손|a right hand|오른손
1-7|sand|모래|a sandcastle|모래성
1-7|land|땅, 육지|the land and the sea|육지와 바다
1-7|gum|껌|bubble gum|풍선껌
1-7|album|앨범|an old album|오래된 앨범
1-7|drum|드럼|play the drums|드럼을 치다
1-7|camp|캠프(지), 캠핑하다|go camping|캠핑 가다
1-7|lamp|램프|They're lamps.|그것들은 전등이야.

1-8|back|등, 뒤로, 제자리로|Come back.|돌아와.
1-8|black|검은(색)|a black cat|검은색 고양이
1-8|rock|바위|rocks and stones|바위들과 돌멩이들
1-8|lock|잠그다, 자물쇠|lock the door|그 문을 잠그다
1-8|block|막다, 블록|two blocks|2개의 블록
1-8|clock|벽시계|a clock and a watch|벽시계와 손목시계
1-8|o'clock|~시|at 10 o'clock|10시에
1-8|luck|행운|Good luck.|행운을 빌어.
1-8|kick|차다|kick the ball|공을 차다
1-8|sick|아픈|sick children|아픈 아이들

1-9|pick|고르다, 줍다|pick up trash|쓰레기를 줍다
1-9|thick|두꺼운|thick paper|두꺼운 종이
1-9|truck|트럭|a toy truck|하나의 장난감 트럭
1-9|track|선로, 자국|long train track|긴 기차선로
1-9|neck|목|a long neck|긴 목
1-9|check|확인하다|Check the box.|박스를 확인하다
1-9|quick|빠른|a quick rabbit|빠른 토끼
1-9|quiz|퀴즈|quiz time|퀴즈 시간
1-9|fast|빠른, 빨리|run fast|빠르게 달리다
1-9|last|지난, 마지막의|last summer|지난여름

1-10|bank|은행|Where is the bank?|은행이 어디에 있어?
1-10|sink|싱크대, 가라앉다|in the bathroom|욕실에
1-10|pink|분홍색(의)|a pink pig|분홍색 돼지
1-10|milk|우유|chocolate milk|초콜릿 우유
1-10|wing|날개|four wings|날개 네 개
1-10|swing|그네, 흔들리다|I like to swing.|나는 그네 타기를 좋아한다.
1-10|swim|수영하다|I can swim.|나는 수영을 할 수 있다.
1-10|gift|선물|a small gift|작은 선물
1-10|left|왼쪽(의)|on your left|너의 왼쪽에
1-10|soft|부드러운|soft bread|부드러운 빵

3-1|at|~에|at 7 o'clock|7시 정각에
3-1|bat|야구방망이, 박쥐|I have a bat.|나는 야구 방망이를 가지고 있어.
3-1|fat|뚱뚱한, 살찐|a fat cat|뚱뚱한 고양이
3-1|hat|모자|a yellow hat|노란색 모자
3-1|chat|이야기하다, 수다 떨다|I like to chat.|나는 이야기하는 것을 좋아해.
3-1|act|행동하다, 연기하다|act like a kid|아이처럼 행동하다
3-1|fact|사실|a clear fact|분명한 사실
3-1|fan|팬, 선풍기|a big fan|큰 선풍기
3-1|man|남자, 사람|an old man|나이 든 남자
3-1|pants|바지|blue pants|파란색 바지

3-2|map|지도|look at the map|지도를 보다
3-2|cap|모자|a blue cap|파란색 모자
3-2|fun|재미, 재밌는|Have fun.|재미있게 보내.
3-2|run|달리다|run fast|빠르게 달리다
3-2|sad|슬픈|I'm sad.|나는 슬퍼.
3-2|mad|화난|She's mad.|그녀는 화났어.
3-2|glad|기쁜, 반가운|He's glad.|그는 기뻐.
3-2|bag|가방|It’s my bag.|그것은 나의 가방이야.
3-2|pig|돼지|It's a big pig.|그것은 큰 돼지야.
3-2|leg|다리|have four legs|다리 4개

3-3|get|얻다, 사다, (잠에서) 일어나다|get a gift|선물을 받다
3-3|net|그물|a fishing net|낚시 그물
3-3|set|두다, 설정하다|set the table|상을 차리다
3-3|pet|반려동물|cute pets|귀여운 반려동물
3-3|wet|젖은|a wet towel|젖은 수건
3-3|let's|~하자|Let's go.|가자.
3-3|upset|속상한, 짜증 난|She's upset.|그녀는 속상해.
3-3|pen|펜|a black pen|검은색 펜
3-3|bed|침대|Time for bed.|잘 시간이야.
3-3|bedroom|침실|three bedrooms|침실 3개

3-4|bell|벨, 종|ring the bell|종을 울리다
3-4|sell|팔다|It sells cards.|그곳은 카드를 팔아.
3-4|tell|말하다|tell a story|이야기를 들려주다
3-4|well|잘, 건강한, 우물|very well|매우 잘
3-4|cello|(악기) 첼로|play the cello|그녀는 첼로를 연주해.
3-4|hello|안녕|Hello. I'm Jisoo.|안녕. 나는 지수야.
3-4|in|~안에|in the box|상자 안에
3-4|pin|핀|a hair pin|머리핀
3-4|win|이기다|win the prize|상을 타다.
3-4|twin|쌍둥이|cute twins|귀여운 쌍둥이

3-5|ill|아픈|He feels ill.|그는 아파해요.
3-5|bill|지폐, 청구서|coins and bills|동전과 지폐
3-5|hill|언덕|on the hill|언덕 위에
3-5|kill|죽이다|kill a bug|벌레를 죽이다.
3-5|fill|채우다|fill up|~을 가득 채우다
3-5|film|영화|I love this film.|나는 이 영화를 좋아해.
3-5|hit|때리다|hit the ball|공을 때리다
3-5|sit|앉다|sit down|앉다
3-5|up|위로|up and down|위로 아래로
3-5|cup|컵|It’s a cup.|그것은 컵이야.

3-6|but|그러나|It's small but I like it.|그것은 작지만 나는 그것이 좋아.
3-6|cut|자르다|cut the paper|종이를 자르다
3-6|shut|닫다|shut the door|문을 닫다
3-6|bug|벌레|a ladybug|무당벌레
3-6|plan|계획, 계획하다|the next plan|다음 계획
3-6|plant|식물, 심다|plant a flower|꽃을 심다
3-6|dish|접시, 요리, 반찬|a clean dish|깨끗한 접시
3-6|wish|바라다, 소원|make a wish|소원을 빌다
3-6|cash|현금|by cash|현금으로
3-6|gas|가스, 기체|gas station|주유소

3-7|and|그리고, ~와|apples and grapes.|사과와 포도
3-7|band|밴드, 악단|The band plays music.|밴드가 음악을 연주해.
3-7|hand|손|a right hand|오른손
3-7|sand|모래|a sandcastle|모래성
3-7|land|땅, 육지|the land and the sea|육지와 바다
3-7|gum|껌|bubble gum|풍선껌
3-7|album|앨범|an old album|오래된 앨범
3-7|drum|드럼|play the drums|드럼을 치다
3-7|camp|캠프(지), 캠핑하다|go camping|캠핑 가다
3-7|lamp|램프|They're lamps.|그것들은 전등이야.

3-8|back|등, 뒤로, 제자리로|Come back.|돌아와.
3-8|black|검은(색)|a black cat|검은색 고양이
3-8|rock|바위|rocks and stones|바위들과 돌멩이들
3-8|lock|잠그다, 자물쇠|lock the door|그 문을 잠그다
3-8|block|막다, 블록|two blocks|2개의 블록
3-8|clock|벽시계|a clock and a watch|벽시계와 손목시계
3-8|o'clock|~시|at 10 o'clock|10시에
3-8|luck|행운|Good luck.|행운을 빌어.
3-8|kick|차다|kick the ball|공을 차다
3-8|sick|아픈|sick children|아픈 아이들

3-9|pick|고르다, 줍다|pick up trash|쓰레기를 줍다
3-9|thick|두꺼운|thick paper|두꺼운 종이
3-9|truck|트럭|a toy truck|하나의 장난감 트럭
3-9|track|선로, 자국|long train track|긴 기차선로
3-9|neck|목|a long neck|긴 목
3-9|check|확인하다|Check the box.|박스를 확인하다
3-9|quick|빠른|a quick rabbit|빠른 토끼
3-9|quiz|퀴즈|quiz time|퀴즈 시간
3-9|fast|빠른, 빨리|run fast|빠르게 달리다
3-9|last|지난, 마지막의|last summer|지난여름

3-10|bank|은행|Where is the bank?|은행이 어디에 있어?
3-10|sink|싱크대, 가라앉다|in the bathroom|욕실에
3-10|pink|분홍색(의)|a pink pig|분홍색 돼지
3-10|milk|우유|chocolate milk|초콜릿 우유
3-10|wing|날개|four wings|날개 네 개
3-10|swing|그네, 흔들리다|I like to swing.|나는 그네 타기를 좋아한다.
3-10|swim|수영하다|I can swim.|나는 수영을 할 수 있다.
3-10|gift|선물|a small gift|작은 선물
3-10|left|왼쪽(의)|on your left|너의 왼쪽에
3-10|soft|부드러운|soft bread|부드러운 빵

3-11|west|서쪽|in the west|서쪽에서
3-11|nest|둥지|in the nest|둥지 안
3-11|vest|조끼|put on a vest|조끼를 입다
3-11|best|가장 좋은, 최고의|best friends|가장 친한 친구
3-11|belt|벨트, 허리띠|wear a belt|벨트를 차다
3-11|melt|녹다, 녹이다|melt butter|버터를 녹이다
3-11|smell|냄새, 냄새 맡다|Smells good.|냄새가 좋다.
3-11|spell|철자를 말하다, 쓰다|Spell your name.|너의 이름을 써.
3-11|full|배부른, 가득한|I'm full.|난 배불러.
3-11|pull|당기다|Pull the rope.|줄을 당겨라.

3-12|put|두다, 놓다|Put it here.|그것을 여기에 놔.
3-12|push|밀다, 누르다|Push the button.|버튼을 눌러라
3-12|brush|붓(칠하다), 닦다, 빗다|I brush my teeth.|나는 이를 닦아.
3-12|finish|끝내다|finish homework|숙제를 끝내다
3-12|rich|부자의, 부유한|He's rich.|그는 부자야.
3-12|bench|벤치|a green bench|녹색 벤치
3-12|lunch|점심 식사|lunchtime|점심시간
3-12|much|많은, 매우|Thank you so much.|정말 고마워.
3-12|must|~해야 한다, 틀림없다|I must go home.|나는 집에 가야 해.
3-12|just|단지, 막, 그냥|Just wait.|그냥 기다려.

3-13|I|나는|I am Sumin.|나는 수민이야.
3-13|hi|안녕|Hi.|안녕.
3-13|on|~위에|on the desk|책상 위에
3-13|son|아들|my son|나의 아들
3-13|lion|사자|lions and tigers|사자와 호랑이
3-13|onion|양파|Chop the onion.|양파를 썰어라.
3-13|crayon|크레용|It's a crayon.|그것은 크레용이야.
3-13|crazy|제정신이 아닌|He's crazy.|그는 제정신이 아니야.
3-13|lazy|게으른|a lazy man|게으른 남자
3-13|pretty|예쁜, 매우|a pretty doll|예쁜 인형

3-14|kiss|입 맞추다, 뽀뽀하다|kiss the frog|개구리한테 키스하다
3-14|miss|그리워하다, 놓치다|I'll miss you.|나는 네가 보고 싶을 거야.
3-14|pass|건네주다, 통과하다|pass the ball|공을 건네주다
3-14|grass|풀, 잔디|on the grass|잔디에
3-14|glass|유리(컵)|a glass of water|물 한잔
3-14|glasses|안경|sunglasses|선글라스
3-14|dress|드레스|wear a dress|드레스를 입다
3-14|address|주소|his name and address|그의 이름과 주소
3-14|add|더하다|add numbers|숫자를 더하다
3-14|all|모든|all the boys|모든 소년들

3-15|ball|공|a ball and a bat|공과 야구방망이
3-15|call|부르다, 전화하다|Call me Kate.|케이트라고 불러.
3-15|fall|가을, 떨어지다|It's fall.|가을이다.
3-15|tall|키가 큰|a tall man|키가 큰 남자
3-15|small|작은|It's small.|그것은 작다.
3-15|animal|동물|animals in the zoo|동물원안에 있는 동물들
3-15|pianist|피아노 연주자|a good pianist|좋은 피아니스트
3-15|piano|피아노|a piano lesson|피아노 수업
3-15|radio|라디오|on the radio|라디오에서
3-15|audio|음성의, 오디오|an audio file|오디오 파일

3-16|end|끝(나다)|end at 3|3시에 끝나다
3-16|lend|빌려주다|lend a book|책을 빌려주다
3-16|send|보내다|send a message|메시지를 보내다
3-16|boy|소년, 남자아이|five boys|5명의 소년들
3-16|toy|장난감|a toy shop|장난감 가게
3-16|joy|기쁨|full of joy|기쁨으로 가득한
3-16|enjoy|즐기다|Enjoy your meal.|식사 맛있게 드세요.
3-16|oil|기름|vegetable oil|식물성 기름
3-16|coin|동전|coins and bills|동전과 지폐
3-16|join|참가하다, 함께하다|I will join you.|내가 너와 함께 할게.

3-17|pill|알약|take a pill|알약을 먹다
3-17|will|~할 것이다|I will go camping.|나 캠핑 갈 거야.
3-17|slim|날씬한|She's slim.|그녀는 날씬하다.
3-17|job|일, 직업|Good job!|잘했어.
3-17|god|신|God loves us.|신은 우리를 사랑한다.
3-17|body|몸, 신체|Our body needs good food.|우리의 몸은 좋은 음식이 필요하다.
3-17|happy|행복한|I'm happy.|나는 행복해.
3-17|puppy|강아지|a cute puppy|귀여운 강아지
3-17|dance|춤(추다)|I can dance.|나는 춤을 출 수 있다
3-17|dancer|무용수|good dancer|좋은 무용수

3-18|hot|뜨거운, 더운, 매운|hot weather|더운 날씨
3-18|not|아니다|It's not mine.|그것은 내 것이 아니야.
3-18|a lot of|많은|a lot of people|많은 사람들
3-18|pilot|조종사, 파일럿|be a pilot|조종사가 되다
3-18|top|꼭대기, 정상|on top|위에
3-18|drop|떨어지다, 떨어뜨리다|drop the glass|유리컵을 떨어뜨리다
3-18|shop|가게|a flower shop|꽃가게
3-18|stop|멈추다, 정지|The rain stops.|비가 그치다.
3-18|step|걸음, 단계|five steps|5단계
3-18|bus stop|버스 정류장|Where is the bus stop?|버스정류장이 어디에 있니?

3-19|lip|입술|thick lips|두꺼운 입술
3-19|clip|클립, 동영상|a paper clip|종이 클립
3-19|tulip|튤립|pink tulips|핑크 튤립
3-19|ship|배|on the ship|배 위에서
3-19|trip|여행|a trip to Canada|캐나다로 가는 여행
3-19|do|하다|do my homework|숙제를 하다
3-19|to|~로|go to school|학교에 가다
3-19|into|~안으로|into the box|상자에
3-19|ask|묻다|Let's ask him.|그에게 물어보자
3-19|desk|책상|a desk and a chair|책상과 의자

3-20|love|사랑(하다)|I love you.|사랑해
3-20|glove|장갑|pink gloves|핑크 장갑
3-20|live|살다|live in Korea.|한국에 살다.
3-20|give|주다|Give it to me.|그것을 내게 줘.
3-20|have|가지다, 먹다|I have lunch.|나는 점심을 먹는다.
3-20|little|어린, 작은, 조금의|my little brother|내 남동생
3-20|bottle|병|a bottle of water|물 한병
3-20|battle|전투|in the battle|전투에서
3-20|gentle|온화한, 친절한|gentle and nice|온화하고 착한
3-20|gentleman|신사, 남자분|He's a gentleman.|그는 신사야.

3-21|bring|가져오다|Bring your homework.|너의 숙제를 가져와.
3-21|hiking|하이킹|Let's go hiking.|하이킹 가자.
3-21|see|보다, 알다|see a movie|영화를 보다
3-21|beef|소고기|beef curry|소고기 카레
3-21|feel|느끼다|I feel great.|나는 기분이 아주 좋아.
3-21|free|자유로운, 한가한|free time|자유 시간
3-21|tree|나무|We can save the trees.|우리는 나무를 절약할 수 있어.
3-21|teen|십 대|Teens like cartoons.|십 대 들은 만화를 좋아한다.
3-21|green|초록색(의)|It’s green.|그것은 녹색이야.
3-21|queen|여왕|a pretty queen|예쁜 여왕

3-22|sheep|양|three sheep|양 세 마리
3-22|sleep|자다|She sleeps.|그녀는 잔다.
3-22|meet|만나다|Nice to meet you.|만나서 반가워.
3-22|sheet|시트, 장|a sheet of paper|종이 한 장
3-22|street|거리, 길|on the street|거리에
3-22|sweet|달콤한|It's sweet.|그것은 달콤해.
3-22|coffee|커피|a cup of coffee|커피 한 잔
3-22|cheese|치즈|cheese and butter|치즈와 버터
3-22|sea|바다|in the sea|바다에서
3-22|tea|(마시는) 차|warm tea|따뜻한 차

3-23|east|동쪽|in the east|동쪽에서
3-23|eat|먹다|I eat pizza.|나는 피자를 먹는다.
3-23|meat|고기|meat and salad|고기와 샐러드
3-23|heat|열, 데우다|Heat the oven.|오븐을 가열해.
3-23|seat|좌석|have seat|자리에 앉다
3-23|seatbelt|안전벨트|Fasten your seatbelt.|안전벨트를 매라.
3-23|lead|이끌다|lead the team|팀을 이끌다
3-23|read|읽다|read many books|많은 책들을 읽다.
3-23|beach|해변|go to the beach|해변에 가다
3-23|teach|가르치다|teach English|영어를 가르치다

3-24|dream|꿈, 꿈을 꾸다|my dream|내 꿈
3-24|cream|크림|ice cream|아이스크림
3-24|clean|깨끗한, 청소하다|The room is clean.|방은 깨끗해.
3-24|bean|콩|I love beans.|나는 콩을 좋아해.
3-24|jeans|청바지|wear jeans|청바지를 입다
3-24|please|제발, 부디|Come here, please.|여기로 와주세요.
3-24|old|오래된, 낡은, 늙은|an old house|오래된 집
3-24|cold|추운, 차가운, 감기|It is cold.|추워.
3-24|gold|금, 금색의|gold coins|금화
3-24|hold|잡다|Hold my hand.|내 손을 잡아.

3-25|no|아니다, 없다|Are you hungry? No, I'm not.|너 배고파? 아니, 안 배고파.
3-25|so|매우, 그래서|The rainbow is so colorful.|무지개는 매우 화려해.
3-25|go|가다|Let's go home.|집에 가자.
3-25|ago|~전에|ten minutes ago|10분 전에
3-25|hippo|하마|a fat hippo|뚱뚱한 하마
3-25|road|길, 도로|on the road|길에서
3-25|soap|비누|soap bubbles|비눗방울
3-25|boat|배, 보트|get on the boat|보트에 타다
3-25|coat|코트, 외투|wear a coat|외투를 걸치다
3-25|note|메모, 필기|take a note|필기하다

3-26|nose|코|I have a big nose.|나는 큰 코를 가지고 있어.
3-26|rose|장미|a red rose|빨간 장미
3-26|hose|호스|a water hose|물 호스
3-26|hole|구멍|a big hole|큰 구멍
3-26|hope|희망, 바라다|She needs hope.|그녀는 희망이 필요해.
3-26|home|집|Let's go home.|집에 가자.
3-26|homework|숙제|math homework|수학 숙제
3-26|ear|귀|two ears|두 개의 귀
3-26|dear|소중한, ~에게|dear my friend|나의 친구에게
3-26|hear|듣다|hear the news|소식을 듣다

3-27|near|가까운, 가까이|near my house|내 집 가까이
3-27|tear|눈물|Tears rolled down.|눈물이 흘러내렸다.
3-27|year|해, 년|ten years old|10살
3-27|clear|맑은, 깨끗한|the clear sky|맑은 하늘
3-27|bear|곰|It's a brown bear.|그것은 갈색곰이야.
3-27|pear|(과일) 배|juicy pears|과즙이 많은 배
3-27|wear|입다|Wear your raincoat.|우비를 입어.
3-27|sugar|설탕|I don't like sugar.|난 설탕을 안 좋아해.
3-27|dollar|(미국 화폐 단위) 달러|ten dollars|10 달러
3-27|umbrella|우산|I have an umbrella.|나는 우산이 있어.

3-28|book|책|It’s a book.|그것은 책이야.
3-28|cook|요리사, 요리하다|He's a cook.|그는 요리사야.
3-28|look|~해 보이다, 보다|Look! It’s a cute cat.|봐! 그것은 귀여운 고양이야.
3-28|good|좋은, 멋진|Good morning.|좋은 아침.
3-28|wood|나무|made of wood|나무로 만들어진
3-28|food|음식|healthy food|건강한 음식
3-28|foot|발|a left foot|왼발
3-28|boot|부츠, 장화|wear boots|부츠를 신다
3-28|tooth|치아, 이|Brush your teeth.|이를 닦아.
3-28|too|너무, 또한|I like tomatoes, too.|나도 토마토 좋아해.

3-29|roof|지붕|on the roof|지붕에
3-29|room|방|living room|거실
3-29|cool|시원한, 멋진|It's cool.|추워.
3-29|fool|바보|He's a fool.|그는 바보야.
3-29|pool|수영장|a large swimming pool|대형 수영장
3-29|school|학교|at school|학교에서
3-29|moon|달|the moon and stars|달과 별
3-29|soon|곧, 빨리|Come back soon.|곧 돌아와.
3-29|spoon|숟가락|a spoon and a fork|숟가락과 포크
3-29|balloon|풍선|colorful balloons|다채로운 풍선

3-30|be|~이다, ~되다|be a pilot|조종사가 되다
3-30|we|우리는|We're friends.|우리는 친구다.
3-30|he|그는|Who's he?|그는 누구니?
3-30|she|그녀는|Who's she?|그녀는 누구니?
3-30|ticket|티켓, 표|ticket office|매표소
3-30|pocket|주머니|in my pocket|내 주머니 안에
3-30|rocket|로켓|a red rocket|빨간 로켓
3-30|jacket|재킷|wear a jacket|재킷을 입다
3-30|open|열다, 열린|Open the door.|문을 열어라.
3-30|often|자주, 흔히|We often go to the park.|우리는 공원에 자주 간다.

3-31|wild|야생의|wild animals|야생동물
3-31|child|어린이|I have a child.|나는 아이가 있다.
3-31|children|어린이들|They have children.|그들은 아이들이 있다.
3-31|ice|얼음|put ice|얼음을 넣다
3-31|dice|주사위|roll the dice|주사위를 굴리다
3-31|nice|멋진, 친절한|Be nice.|착하게 굴어라
3-31|rice|쌀|rice and side dishes|밥과 반찬
3-31|hike|도보 여행하다|go hiking|도보 여행하러 가다
3-31|bike|자전거|a blue bike|파란 자전거
3-31|like|좋아하다, ~같은|I like snow.|나는 눈을 좋아해.

3-32|die|죽다|People die.|사람들이 죽는다.
3-32|pie|파이|apple pie|사과 파이
3-32|tie|매다, 넥타이|tie shoelaces|신발끈을 묶다
3-32|lie|거짓말(하다)|Don't lie.|거짓말하지 마.
3-32|smile|미소(짓다)|smile at|미소 짓다
3-32|file|파일|an audio file|음성 파일
3-32|find|찾다|find a map|지도를 찾아라
3-32|kind|친절한, 종류|You're very kind.|너는 매우 친절해.
3-32|mind|마음|keep in mind|명심하다
3-32|behind|뒤에|behind me|내 뒤에

3-33|carry|나르다|carry books|책들을 나르다
3-33|marry|결혼하다|The couple will marry.|그 커플은 결혼할 것이다.
3-33|hurry|서두르다|Hurry up.|서둘러.
3-33|worry|걱정(하다)|Don't worry.|걱정 마.
3-33|cry|울다|She's crying.|그녀는 울고 있다.
3-33|dry|건조한, 말리다|dry a wet towel|젖은 수건을 말리다
3-33|try|시도하다, 노력하다|Try this.|이거 먹어봐.
3-33|fry|튀기다|Fry potatoes.|감자를 튀겨라.
3-33|fly|파리, 날다|I can fly.|나는 날 수 있다.
3-33|sky|하늘|in the sky|하늘에

3-34|guy|남자|a tall guy|키가 큰 남자
3-34|buy|사다|buy some grapes|약간의 포도를 사다
3-34|by|~옆에, ~로|by the park|공원 옆에
3-34|bye|안녕, 잘 가|Goodbye.|잘 가.
3-34|eye|눈|Open your eyes.|눈을 떠.
3-34|wall|벽|on the wall|벽에
3-34|wallet|지갑|a pink wallet|분홍색 지갑
3-34|fire|불|make a fire|불을 피우다
3-34|tire|타이어|a flat tire|펑크 난 타이어
3-34|tired|피곤한|She's tired.|그녀는 지쳤다.

3-35|cow|암소|Six cows.|소 여섯 마리
3-35|how|어떻게, 어떤|How are you?|어떻게 지내?
3-35|now|지금, 이제|I'm at home now.|나는 지금 집이야.
3-35|down|아래로|Sit down.|앉아라.
3-35|town|마을|a new town|새로운 마을
3-35|brown|갈색의|brown eyes|갈색의 눈
3-35|house|집|in my house.|내 집에
3-35|mouse|쥐|a little mouse|작은 쥐
3-35|loud|시끄러운, 큰 소리의|a loud voice|큰 목소리
3-35|aloud|큰 소리로|speak aloud|큰 소리로 말하다

3-36|grow|기르다, 자라다|grow plants|식물을 기르다
3-36|show|쇼, 보여주다|a magic show|마술 쇼
3-36|throw|던지다|throw a ball|공을 던지다
3-36|bowl|그릇|a big bowl|큰 그릇
3-36|blow|(바람) 불다|The wind blows.|바람이 분다.
3-36|slow|느린|a slow turtle|느린 거북이
3-36|rainbow|무지개|a pretty rainbow|예쁜 무지개
3-36|window|창문|Close the window.|창문 닫아라.
3-36|who|누구|Who’s she?|그녀는 누구니?
3-36|what|무엇, 어떤|What's this?|이것은 무엇이니?

3-37|great|멋진, 훌륭한|That's great!|훌륭해!
3-37|break|깨뜨리다, 깨지다|break the window|창문을 깨뜨리다
3-37|steak|스테이크|yummy steak|맛있는 스테이크
3-37|bread|빵|soft bread|부드러운 빵
3-37|dead|죽은|a dead animal|죽은 동물
3-37|head|머리|a small head|작은 머리
3-37|heavy|무거운|a heavy box|무거운 상자
3-37|ready|준비된|Are you ready?|준비됐어?
3-37|envy|부러워하다|I envy you.|나는 네가 부러워.
3-37|very|매우|very well|아주 잘

3-38|life|삶, 인생|Life is a journey.|인생은 여행이다.
3-38|wife|아내|his wife|그의 아내
3-38|wide|넓은|a wide river|넓은 강
3-38|hide|숨다, 숨기다|hide and seek|숨바꼭질
3-38|ride|타다|ride a bike|자전거를 타다
3-38|slide|미끄럼틀, 미끄러지다|I like to slide.|나는 미끄럼틀을 좋아한다.
3-38|wine|와인, 포도주|a bottle of red wine|적포도주 한 병
3-38|pine|소나무|a pine tree|소나무
3-38|line|선, 줄을 서다|Draw a line.|선을 그려.
3-38|fine|좋은, 훌륭한|fine weather|좋은 날씨

3-39|five|(숫자) 5|Five apples.|사과 다섯 개
3-39|safe|안전한|It's safe.|안전하다.
3-39|save|저장하다, 구하다|save energy|에너지 절약
3-39|wave|파도, 흔들다|big waves|큰 파도
3-39|cave|동굴|a dark cave|어두운 동굴
3-39|time|시간|What time is it?|몇 시야?
3-39|name|이름|My name is Kate.|내 이름은 케이트야.
3-39|same|같은|We're the same age.|우리는 같은 나이야.
3-39|game|게임|play games|게임하다
3-39|tape|테이프|with the tape|테이프로

3-40|bake|굽다|bake cookies|쿠키를 굽다
3-40|cake|케이크|make a cake|케이크를 만들다
3-40|lake|호수|a big lake|큰 호수
3-40|make|만들다|Let's make a snowman.|눈사람을 만들자.
3-40|take|가져가다, (시간이) 걸리다|I'll take it.|그것을 살게요.
3-40|wake|깨다, 깨우다|Wake up.|일어나.
3-40|shake|흔들다|Shake it.|흔들어.
3-40|base|기초, (야구) 베이스|around the base|(야구) 베이스 주변
3-40|case|경우, 통|a pencil case|필통
3-40|face|얼굴|Wash your face.|세수를 해라

3-41|date|날짜|What's the date?|며칠이야?
3-41|gate|문, 출입구|at the gate|게이트에서
3-41|hate|싫어하다|I hate snakes.|나는 뱀이 싫어.
3-41|late|늦은, 늦게|I'm late.|나는 늦는다.
3-41|later|나중에|See you later.|나중에 봐.
3-41|skate|스케이트(를 타다)|I can skate.|나는 스케이트를 탈 수 있다.
3-41|taste|맛|It tastes good.|맛있어.
3-41|waste|낭비(하다)|Don't waste water.|물 낭비하지 마.
3-41|table|탁자|under the table|탁자 아래
3-41|vegetable|채소|fruits and vegetables|과일과 채소

3-42|gym|체육관|at the gym|체육관에서
3-42|age|나이|at the age|~살에
3-42|page|쪽, 페이지|page 10|10 쪽
3-42|cage|우리, 새장|in the cage|새장 안에
3-42|stage|무대|on the stage|무대 위에
3-42|sale|판매|on sale|할인 판매 중인
3-42|fix|고치다|I can fix it.|내가 고칠 수 있어.
3-42|six|(숫자) 6|six children|6명의 아이들
3-42|sixty|(숫자) 60|sixty years old|60살
3-42|sixteen|(숫자) 16|sixteen years old|16살

3-43|nail|손톱, 못|nails and toenails|손톱과 발톱
3-43|tail|꼬리|a long tail|긴 꼬리
3-43|mail|우편|Check the mailbox.|우편함을 확인해.
3-43|email|이메일, 전자 우편|send a message by email|이메일로 메시지를 보내다
3-43|wait|기다리다|Please wait.|기다려.
3-43|brain|두뇌|our brain|우리의 뇌
3-43|train|기차|on the train|기차에서
3-43|chain|(쇠)사슬, 체인점|a bicycle chain|자전거 체인
3-43|paint|그림을 그리다, 칠하다|paint a bird|새를 그리다
3-43|painting|그림|a painting on the wall|벽에 걸린 그림

3-44|day|날|What day is it today?|오늘이 무슨 요일이지?
3-44|May|5월|in May|5월에
3-44|say|말하다|say hello|인사하다
3-44|okay|괜찮아|Okay. Let's go.|알겠어. 가자.
3-44|stay|머무르다|Stay here.|여기서 있어.
3-44|gray|회색|a gray mouse|회색 쥐
3-44|play|놀다, (운동)하다, (악기) 연주하다|She plays the cello.|그녀는 첼로를 연주한다.
3-44|lady|숙녀, 여자|a beautiful lady|아름다운 여인
3-44|baby|아기|a cute baby|귀여운 아기
3-44|hobby|취미|your hobby|너의 취미

3-45|angry|화난|I’m angry|나 화나
3-45|hungry|배고픈|Are you hungry?|너 배고프니?
3-45|chair|의자|under the chair|의자 아래
3-45|hair|머리카락|I brush my hair.|나는 머리를 빗는다.
3-45|fair|공평한|a fair chance|공정한 기회
3-45|pair|쌍, 짝|a pair of gloves|장갑 한 켤레
3-45|stair|계단|Go up the stairs.|계단 올라가.
3-45|color|색깔|what color|무슨 색
3-45|actor|배우|a famous actor|유명한 배우
3-45|doctor|의사|be a doctor|의사가 되다

3-46|girl|소녀, 여자아이|a cute girl|귀여운 소녀
3-46|bird|새|a small bird|작은 새
3-46|third|세 번째|the third grade|3학년
3-46|shirt|셔츠|That is my shirt.|저것은 내 셔츠야.
3-46|skirt|치마, 스커트|That is her skirt.|저것은 그녀의 치마야.
3-46|first|첫 번째(의)|the first grade|1학년
3-46|juice|주스|fruit juice|과일주스
3-46|fruit|과일|summer fruits|여름 과일
3-46|blue|파란|a blue crayon|파란색 크레용
3-46|glue|풀|a glue and scissors|풀과 가위

3-47|habit|습관|a good habit|좋은 습관
3-47|rabbit|토끼|a cute rabbit|귀여운 토끼
3-47|tomato|토마토|I like tomatoes.|나는 토마토를 좋아해.
3-47|potato|감자|I like potatoes.|나는 감자를 좋아해.
3-47|some|어떤, 몇몇(의)|I have some plans.|나는 몇 가지 계획이 있어.
3-47|handsome|잘생긴|He's very handsome.|그는 매우 잘생겼다.
3-47|come|오다|Come here, please.|여기로 와주세요.
3-47|become|~되다|become a pilot|조종사가 되다
3-47|welcome|환영하다|Welcome to Korea.|한국에 오신 걸 환영해요.
3-47|twelve|(숫자) 12|It's twelve o'clock.|12시야.

3-48|help|돕다, 도움|I can help you.|내가 도와줄 수 있어.
3-48|hotel|호텔|at the hotel|호텔에서
3-48|doll|인형|a pretty doll|예쁜 인형
3-48|roll|굴리다|Roll the dice.|주사위를 굴려라.
3-48|dog|개|It’s a big dog.|그것은 큰 개야.
3-48|fog|안개|There's fog.|안개가 낀다.
3-48|frog|개구리|Frogs are on the pond.|개구리들이 연못에 있다.
3-48|from|~에서, ~로부터|I'm from Korea.|난 한국에서 왔어.
3-48|front|앞|front seats|앞자리
3-48|in front of|~앞에|in front of the toy shop|장난감 가게 앞에

3-49|way|길|the best way|가장 좋은 방법
3-49|away|떨어져, 멀리|Go away!|저리 가!
3-49|subway|지하철|at the subway station|지하철역에서
3-49|pizza|피자|order pizza|피자를 주문하다
3-49|zebra|얼룩말|zebras, giraffes, and hippos|얼룩말, 기린, 하마
3-49|elephant|코끼리|It's an elephant.|그것은 코끼리야.
3-49|giant|거대한, 거인|The elephant is giant.|코끼리는 아주 크다.
3-49|zero|(숫자) 0|Three, two, one, zero!|3, 2, 1, 0!
3-49|hero|영웅|my hero|내 영웅
3-49|robot|로봇|make a robot|로봇을 만들다

3-50|art|예술|I have an art class.|나 미술수업 있어.
3-50|far|먼|It's far from here.|여기서 멀어요.
3-50|car|자동차|There are cars on the road.|도로에 차들이 있어.
3-50|cart|카트, 수레|shopping cart|쇼핑카트
3-50|card|카드|cards and letters|카드와 편지
3-50|hard|어려운, 열심히, 딱딱한|Math is hard.|수학은 어려워.
3-50|yard|마당|in the yard|마당에
3-50|smart|똑똑한|She's smart.|그녀는 똑똑해.
3-50|ugly|못생긴, 추한|You're not ugly.|너는 못생기지 않았어.
3-50|only|오직|only child|외동

3-51|tower|타워, 탑|the Eiffel Tower|에펠 탑
3-51|power|힘|a special power|특별한 힘
3-51|cover|덮다, 표지|Cover them.|그것들을 덮어.
3-51|fever|열|have a fever|열이 나다
3-51|river|강|You can see the river.|너는 강을 볼 수 있어.
3-51|silver|은, 은색의|silver coins|은 동전
3-51|driver|운전자|a bus driver|버스 기사
3-51|clever|영리한|a clever mouse|똑똑한 쥐
3-51|never|결코, 절대|Never lie to me.|나에게 절대로 거짓말하지 마.
3-51|over|~위에, ~너머에|Look over there.|저기를 봐.

3-52|cotton|면|Cotton is soft.|면은 부드럽다.
3-52|button|단추|She found a button.|그녀는 버튼을 찾았어.
3-52|badminton|배드민턴|play badminton|배드민턴을 치다
3-52|ribbon|리본|wear a ribbon|리본을 달다
3-52|lemon|레몬|Lemons taste sour.|레몬은 신 맛이 난다.
3-52|summer|여름|It is very hot in summer.|여름은 매우 덥다.
3-52|bubble|거품|soap bubbles|비눗방울
3-52|butter|버터|melt butter|버터를 녹이다
3-52|letter|편지|I write a letter.|나는 편지를 쓴다.
3-52|water|물(주다)|It's hot. I need water.|덥다. 난 물이 필요해.

3-53|sister|여동생|This is my sister.|내 여동생이야.
3-53|poster|포스터, 벽보|posters on the wall|벽 위에 포스터
3-53|winter|겨울|It's very cold in winter.|겨울에는 매우 추워.
3-53|father|아버지|Bora's father|보라의 아버지
3-53|mother|어머니|Tom's mother|톰의 어머니
3-53|brother|남동생|This is my little brother.|이 아이는 내 남동생이야.
3-53|under|~아래에|It's under the table.|그것은 탁자 아래에 있어.
3-53|order|주문하다, 순서, 명령|Let's order pizza.|피자를 주문하자.
3-53|number|숫자|Add up all the numbers.|모든 숫자를 더 해.
3-53|hamburger|햄버거|I like hamburgers.|나는 햄버거를 좋아해.

3-54|horse|말|I saw sea horses.|나는 해마 보았어.
3-54|score|점수, 득점하다|My math score is good.|내 수학 점수는 좋아.
3-54|store|가게|The store sells fruits.|그 가게는 과일을 팔아.
3-54|before|~앞에, ~전에|It starts before ten.|그것은 10시 전에 시작한다.
3-54|begin|시작하다|Spring begins in March.|봄은 3월에 시작해.
3-54|north|북쪽|North pole|북극
3-54|south|남쪽|South Africa|남 아프리카
3-54|out|밖에, 밖으로|Let's go out.|밖으로 나가자.
3-54|shout|소리 지르다, 외치다|Don't shout at me.|나에게 소리치지 마.
3-54|about|약, ~에 대한|I'll go home about five.|나는 약 5시에 집에 갈 거야.

3-55|any|어떤, 약간(의)|I don't have any plans.|나는 어떤 계획도 없어.
3-55|many|많은|How many monkeys?|원숭이들이 얼마나 많이 있나요?
3-55|busy|바쁜|I'm busy.|나는 바빠.
3-55|easy|쉬운|It's not easy.|그것은 쉽지 않아.
3-55|money|돈|I have no money.|나는 돈이 없어.
3-55|honey|꿀|Bees make honey.|벌은 꿀을 만든다.
3-55|monkey|원숭이|It's a monkey.|원숭이야.
3-55|stamp|도장, 우표|put a stamp on the letter|편지에 우표를 붙이다
3-55|stand|서다|Stand up, please.|일어나 주세요.
3-55|understand|이해하다|Do you understand?|이해했어?

3-56|with|~함께, ~를 가지고|with my friends|친구와 함께
3-56|without|~없이|without any money|돈 없이
3-56|this|이것, 이 사람, 이|This is for you.|이것은 너를 위한 것이야.
3-56|that|저것, 저 사람, 저|Look at that.|저것을 봐!
3-56|they|그들은, 그것들은|They are brown bears.|그것들은 갈색곰들이야.
3-56|then|그때, 그 이후에|Then, I take a shower.|그 이후에 나는 샤워를 해.
3-56|thin|얇은|I like thin pizza.|나는 얇은 피자를 좋아해.
3-56|think|생각하다|I think so.|나는 그렇게 생각해
3-56|thank|감사하다|Thank you.|고마워요.
3-56|drink|마시다|Drink warm water.|따뜻한 물을 마셔.

3-57|bone|뼈|My dog loves bones.|나의 개는 뼈를 사랑해.
3-57|alone|혼자, 홀로|She went there alone.|그녀는 혼자 그곳에 갔다.
3-57|photo|사진|I take a photo.|나는 사진을 찍는다.
3-57|phone|전화|You can use my phone.|너는 내 전화를 써도 돼.
3-57|cell phone|휴대전화|I got a new cell phone.|난 새로운 휴대폰이 생겼어.
3-57|lose|잃다, 지다|lose a game|게임에 지다
3-57|move|움직이다, 이사 가다|move to a new town|새로운 마을로 이사 가다
3-57|movie|영화|watch a movie|영화를 보다
3-57|cookie|쿠키|Try some cookies.|쿠키 좀 드셔보세요.
3-57|piece|조각|into pieces|조각으로

3-58|drive|운전하다|He drives fast.|그는 빨리 운전한다.
3-58|arrive|도착하다|They arrive on time.|그들은 제시간에 도착한다.
3-58|hour|시간|for five hours|5시간 동안
3-58|sour|신, 시큼한|It's sour and sweet.|그것은 새콤 달콤해.
3-58|soup|수프|Warm the soup.|수프를 데워.
3-58|group|그룹, 단체|in a group|그룹에서
3-58|war|전쟁|in the war|전쟁에서
3-58|warm|따뜻한|It's nice and warm.|날씨가 좋고 따뜻해.
3-58|want|원하다|I want a magic carpet.|나는 마법 양탄자를 원해.
3-58|wash|씻다|Wash your hands.|너의 손을 씻어.

3-59|planet|행성|There are planets.|행성들이 있다.
3-59|player|선수, 연주자|a soccer player|축구 선수
3-59|April|4월|It's April 19th.|4월 19일이야.
3-59|pencil|연필|My pencil is blue.|내 연필은 파란색이야.
3-59|high|높은, 높이|I can jump high.|나는 높이 점프할 수 있어.
3-59|fight|싸움, 싸우다|Don't fight.|싸우지 마.
3-59|light|빛, 조명, 가벼운|Turn off the light.|불 꺼.
3-59|right|올바른, 오른쪽|You're right.|네 말이 맞아.
3-59|mouth|입|Open your mouth.|입을 벌려.
3-59|mountain|산|Let's go up the mountain.|산 위로 올라가자.

3-60|eraser|지우개|I need an eraser.|나는 지우개가 필요해.
3-60|service|서비스|the best service|최고의 서비스
3-60|chance|기회|another chance|또 다른 기회
3-60|uncle|삼촌|at my uncle's house|내 삼촌의 집에서
3-60|bicycle|자전거|Did you ride a bicycle?|너는 자전거를 탔니?
3-60|few|몇몇(의), 거의 없는|I have few toys.|나는 장난감이 거의 없어.
3-60|a few|몇몇(의), 조금 있는|I have a few friends.|나는 친구가 몇 명 있어.
3-60|new|새로운|Let's buy it.|그것을 사자.
3-60|news|뉴스|on the news|뉴스에서
3-60|newspaper|신문|I read a newspaper.|나는 신문을 읽어.

4-1|father|아버지|This is my father.|이 분은 나의 아버지이다.
4-1|dad|아빠|I like my dad.|나는 나의 아빠를 좋아한다.
4-1|mother|어머니|She is my mother.|그녀는 나의 어머니이다.
4-1|mom|엄마|My mom is pretty.|나의 엄마는 예쁘다.
4-1|brother|남자 형제|He is my brother.|그는 나의 남자 형제이다.
4-1|sister|여자 형제|I have a sister.|나는 여자 형제가 한 명 있다.
4-1|family|가족|We love our family.|우리는 우리의 가족을 사랑한다.
4-1|parents|부모|My parents are here.|나의 부모님들이 여기에 계신다.
4-1|daughter|딸|She is my daughter.|그녀는 나의 딸이다.
4-1|son|아들|I am a good son.|나는 착한 아들이다.
4-1|grandparents|조부모|I call my grandparents.|나는 나의 조부모님께 전화한다.
4-1|grandfather|할아버지|My grandfather is old.|나의 할아버지는 나이가 많으시다.
4-1|grandmother|할머니|I see my grandmother.|나는 나의 할머니를 뵌다.
4-1|uncle|삼촌|My uncle has a car.|나의 삼촌은 차를 한 대 가지고 계신다.
4-1|aunt|이모, 고모|I play with my aunt.|나는 나의 이모/고모와 함께 논다.
4-1|cousin|사촌|He is my cousin.|그는 나의 사촌이다.
4-2|Sunday|일요일|Today is Sunday.|오늘은 일요일이다.
4-2|Monday|월요일|I go to school on Monday.|나는 월요일에 학교에 간다.
4-2|Tuesday|화요일|We have P.E. on Tuesday.|우리는 화요일에 체육 수업이 있다.
4-2|Wednesday|수요일|I eat lunch on Wednesday.|나는 수요일에 점심을 먹는다.
4-2|Thursday|목요일|Do you like Thursday?|너는 목요일을 좋아하니?
4-2|Friday|금요일|Let's meet next Friday.|다음 주 금요일에 만나자.
4-2|Saturday|토요일|We play soccer on Saturday.|우리는 토요일에 축구를 한다.
4-2|today|오늘|What is the date today?|오늘 날짜는 언제니?
4-2|morning|아침|I eat breakfast in the morning.|나는 아침에 아침밥을 먹는다.
4-2|afternoon|오후|Let's play in the afternoon.|오후에 놀자.
4-2|evening|저녁|I watch TV in the evening.|나는 저녁에 TV를 본다.
4-2|night|밤|I sleep at night.|나는 밤에 잠을 잔다.
4-2|tonight|오늘밤|I will study tonight.|나는 오늘밤에 공부할 것이다.
4-2|yesterday|어제|I was sick yesterday.|나는 어제 아팠다.
4-2|tomorrow|내일|We will meet tomorrow.|우리는 내일 만날 것이다.
4-2|week|일주일, 주|There are seven days in a week.|한 주에는 7일이 있다.
4-3|weather|날씨|The weather is nice today.|오늘 날씨는 좋다.
4-3|sunny|화창한|It is a sunny day.|오늘은 화창한 날이다.
4-3|cloudy|구름이 낀|It is cloudy now.|지금은 구름이 끼어 있다.
4-3|rainy|비가 오는|Don't forget your umbrella on a rainy day.|비 오는 날에 우산을 잊지 마라.
4-3|snowy|눈이 오는|Let's make a snowman on a snowy day.|눈 오는 날에 눈사람을 만들자.
4-3|foggy|안개가 낀|It is foggy outside.|밖은 안개가 끼어 있다.
4-3|windy|바람이 부는|The windy day is cold.|바람 부는 날은 춥다.
4-3|warm|따뜻한|The room is warm.|방이 따뜻하다.
4-3|cold|추운|I feel cold now.|나는 지금 춥다.
4-3|cool|시원한|The drink is cool.|음료수가 시원하다.
4-3|hot|더운|It is very hot outside.|밖이 매우 덥다.
4-3|season|계절|What is your favorite season?|네가 가장 좋아하는 계절은 무엇이니?
4-3|spring|봄|I like spring flowers.|나는 봄꽃을 좋아한다.
4-3|summer|여름|Let's swim in the summer.|여름에 수영하자.
4-3|fall|가을|Fall is a beautiful season.|가을은 아름다운 계절이다.
4-3|winter|겨울|Winter is very cold.|겨울은 매우 춥다.
4-4|taste|맛이 나다, 맛보다|I taste the sweet cake.|나는 달콤한 케이크 맛을 본다.
4-4|sweet|달콤한|The candy is sweet.|그 사탕은 달콤하다.
4-4|sour|신맛이 나는|I don't like sour lemons.|나는 신 레몬을 좋아하지 않는다.
4-4|feel|느끼다|I feel happy today.|나는 오늘 행복함을 느낀다.
4-4|wet|젖은, 축축한|My shoes are wet.|나의 신발이 젖었다.
4-4|dry|마른, 건조한|Please use a dry towel.|마른 수건을 사용해 주세요.
4-4|soft|부드러운|The pillow is very soft.|그 베개는 매우 부드럽다.
4-4|hard|딱딱한|The rock is very hard.|그 돌은 매우 딱딱하다.
4-4|hear|듣다|Can you hear the music?|음악을 들을 수 있니?
4-4|look|보이다, 보다|You look happy.|너는 행복해 보인다.
4-4|smell|냄새가 나다, 냄새 맡다|I can smell the food.|나는 그 음식 냄새를 맡을 수 있다.
4-4|delicious|맛있는|This cake is delicious.|이 케이크는 맛있다.
4-4|sound|~하게 들리다|It sounds like a bird.|새 소리처럼 들린다.
4-4|loud|시끄러운|The music is too loud.|음악이 너무 시끄럽다.
4-4|quiet|조용한|Please be quiet.|조용히 해 주세요.
4-4|nice|좋은|Have a nice day.|좋은 하루 보내세요.
4-5|number|숫자|What is your favorite number?|네가 가장 좋아하는 숫자는 무엇이니?
4-5|one|1, 하나|I have one dog.|나는 개를 한 마리 가지고 있다.
4-5|two|2, 둘|We have two brothers.|우리는 두 명의 남자 형제가 있다.
4-5|three|3, 셋|I eat three cookies.|나는 쿠키 세 개를 먹는다.
4-5|four|4, 넷|A cat has four legs.|고양이는 다리가 네 개 있다.
4-5|five|5, 다섯|I count to five.|나는 다섯까지 센다.
4-5|six|6, 여섯|There are six chairs.|의자가 여섯 개 있다.
4-5|seven|7, 일곱|Today is day seven.|오늘은 일곱 번째 날이다.
4-5|eight|8, 여덟|I have eight pencils.|나는 연필을 여덟 자루 가지고 있다.
4-5|nine|9, 아홉|He is nine years old.|그는 아홉 살이다.
4-5|ten|10, 열|Let's count to ten.|열까지 세어 보자.
4-5|eleven|11, 열하나|I see eleven birds.|나는 새 열한 마리를 본다.
4-5|twelve|12, 열 둘|There are twelve months.|열두 달이 있다.
4-5|thirteen|13, 열 셋|My sister is thirteen.|나의 여동생은 열세 살이다.
4-5|fourteen|14, 열 넷|I wear fourteen stickers.|나는 스티커 열네 개를 붙인다.
4-5|fifteen|15, 열 다섯|I can see fifteen cars.|나는 차 열다섯 대를 볼 수 있다.
4-6|how|얼마? 어떻게|How old are you?|너는 나이가 얼마나 되니?
4-6|long|긴|That ruler is long.|저 자는 길다.
4-6|quick|빠른|Be quick!|빠르게 해라!
4-6|large|큰, 넓은|My school has a large gym.|나의 학교는 넓은 체육관이 있다.
4-6|big|큰|That house is very big.|저 집은 매우 크다.
4-6|small|작은|I have a small pencil.|나는 작은 연필을 가지고 있다.
4-6|heavy|무거운|This box is heavy.|이 상자는 무겁다.
4-6|light|가벼운|My bag is light.|나의 가방은 가볍다.
4-6|dirty|더러운|The floor is dirty.|바닥이 더럽다.
4-6|clean|깨끗한|My hands are clean.|나의 손은 깨끗하다.
4-6|high|높은|The bird flies high.|그 새는 높이 난다.
4-6|low|낮은|The fence is low.|울타리가 낮다.
4-6|wide|넓은|The road is wide.|그 도로는 넓다.
4-6|narrow|좁은|This street is narrow.|이 길은 좁다.
4-6|thick|두꺼운|This book is thick.|이 책은 두껍다.
4-6|thin|얇은|I wear a thin jacket.|나는 얇은 재킷을 입는다.
4-7|body|몸|Take care of your body.|너의 몸을 돌보아라.
4-7|muscle|근육|Running builds your muscle.|달리기는 너의 근육을 만든다.
4-7|bone|뼈|My leg bone is strong.|나의 다리 뼈는 튼튼하다.
4-7|foot|발|I wear shoes on my foot.|나는 나의 발에 신발을 신는다.
4-7|feet|발 (복수)|I have two feet.|나는 두 발을 가지고 있다.
4-7|toe|발가락|I wiggle my toe.|나는 나의 발가락을 꼼지락거린다.
4-7|hand|손|Wash your hand.|너의 손을 씻어라.
4-7|finger|손가락|I have ten fingers.|나는 열 개의 손가락이 있다.
4-7|heart|심장|My heart beats fast.|나의 심장이 빠르게 뛴다.
4-7|brain|뇌|The brain helps me think.|뇌는 내가 생각하는 것을 돕는다.
4-7|shoulder|어깨|He taps my shoulder.|그는 나의 어깨를 두드린다.
4-7|back|등|I carry a bag on my back.|나는 나의 등에 가방을 멘다.
4-7|leg|다리|I run with my leg.|나는 나의 다리로 달린다.
4-7|knee|무릎|He fell on his knee.|그는 무릎을 꿇고 넘어졌다.
4-7|arm|팔|I hold the bag with my arm.|나는 나의 팔로 가방을 잡는다.
4-7|elbow|팔꿈치|I hurt my elbow.|나는 나의 팔꿈치를 다쳤다.
4-8|face|얼굴|I wash my face.|나는 나의 얼굴을 씻는다.
4-8|cheek|볼, 뺨|My cheek is soft.|나의 볼은 부드럽다.
4-8|chin|턱|He has a big chin.|그는 큰 턱을 가지고 있다.
4-8|skin|피부|My skin is dry.|나의 피부는 건조하다.
4-8|head|머리|I wash my head.|나는 나의 머리를 감는다.
4-8|hair|머리카락|My hair is black.|나의 머리카락은 검은색이다.
4-8|neck|목|I wear a scarf around my neck.|나는 나의 목에 스카프를 두른다.
4-8|throat|목구멍|I have a sore throat.|나는 목구멍이 아프다.
4-8|eye|눈|I have two eyes.|나는 두 개의 눈이 있다.
4-8|eyebrow|눈썹|My eyebrow is thick.|나의 눈썹은 두껍다.
4-8|ear|귀|I hear with my ear.|나는 나의 귀로 듣는다.
4-8|nose|코|I smell with my nose.|나는 나의 코로 냄새를 맡는다.
4-8|mouth|입|I open my mouth.|나는 나의 입을 벌린다.
4-8|lip|입술|My lips are red.|나의 입술은 빨갛다.
4-8|tooth|치아, 이|I brush my tooth.|나는 나의 이를 닦는다.
4-8|teeth|tooth의 복수형|I brush my teeth.|나는 나의 이들을 닦는다.
4-9|good|좋은|This movie is good.|이 영화는 좋다.
4-9|bad|나쁜|He is a bad person.|그는 나쁜 사람이다.
4-9|sad|슬픈|I feel sad today.|나는 오늘 슬프다.
4-9|happy|행복한|I am happy to see you.|나는 너를 만나서 행복하다.
4-9|lonely|외로운|The dog looks lonely.|그 개는 외로워 보인다.
4-9|angry|화난|Don't be angry with me.|나에게 화내지 마라.
4-9|tired|피곤한|I am tired after school.|나는 방과 후에 피곤하다.
4-9|nervous|불안해하는|I feel nervous before the test.|나는 시험 전에 불안해한다.
4-9|upset|속상한, 짜증 난|She is upset about the game.|그녀는 그 게임 때문에 속상해한다.
4-9|glad|기쁜|I am glad you came.|나는 네가 와서 기쁘다.
4-9|mad|몹시 화난|He is mad at his brother.|그는 그의 남동생에게 몹시 화가 났다.
4-9|worried|걱정하는|My mom is worried about me.|나의 엄마는 나에 대해 걱정하신다.
4-9|scared|무서워하는|I am scared of the dark.|나는 어둠을 무서워한다.
4-9|surprised|놀란|I was surprised by the noise.|나는 그 소음에 놀랐다.
4-9|excited|신이 난|The kids are excited to play.|아이들은 놀 생각에 신이 났다.
4-9|bored|지루해 하는|I am bored with this lesson.|나는 이 수업이 지루하다.
4-10|house|집|I live in a big house.|나는 큰 집에 산다.
4-10|bedroom|침실|I sleep in my bedroom.|나는 나의 침실에서 잠을 잔다.
4-10|living room|거실|We watch TV in the living room.|우리는 거실에서 TV를 본다.
4-10|bathroom|욕실, 화장실|I wash my hands in the bathroom.|나는 욕실에서 손을 씻는다.
4-10|garden|정원|We have many flowers in the garden.|우리는 정원에 많은 꽃을 가지고 있다.
4-10|backyard|뒷마당|I play soccer in the backyard.|나는 뒷마당에서 축구를 한다.
4-10|kitchen|부엌|My mom is in the kitchen.|나의 엄마는 부엌에 계신다.
4-10|where|어디에|Where is my book?|나의 책은 어디에 있니?
4-10|gate|대문|Open the gate, please.|대문을 열어 주세요.
4-10|bell|종, 초인종|Ring the bell to enter.|들어오려면 초인종을 눌러라.
4-10|door|문|Close the door.|문을 닫아라.
4-10|roof|지붕|The rain falls on the roof.|비가 지붕 위에 떨어진다.
4-10|sofa|소파|I sit on the sofa.|나는 소파에 앉는다.
4-10|table|탁자|Put the pen on the table.|펜을 탁자 위에 놓아라.
4-10|carpet|카펫|The carpet is soft.|카펫이 부드럽다.
4-10|stairs|계단|I walk up the stairs.|나는 계단을 걸어 올라간다.
4-11|raise|키우다, 기르다|I raise a dog.|나는 개를 키운다.
4-11|pet|애완동물|I have a cute pet.|나는 귀여운 애완동물이 있다.
4-11|animal|동물|A dog is an animal.|개는 동물이다.
4-11|dog|개|I play with my dog.|나는 나의 개와 함께 논다.
4-11|puppy|강아지|The puppy is small.|그 강아지는 작다.
4-11|cat|고양이|My cat likes to sleep.|나의 고양이는 자는 것을 좋아한다.
4-11|kitten|새끼 고양이|The kitten is tiny.|그 새끼 고양이는 아주 작다.
4-11|turtle|거북이|The turtle moves slowly.|거북이는 느리게 움직인다.
4-11|feed|먹이를 주다|I feed my cat.|나는 나의 고양이에게 먹이를 준다.
4-11|cage|우리, 새장|The bird is in the cage.|새가 새장 안에 있다.
4-11|fish|물고기|I have a fish tank.|나는 어항을 가지고 있다.
4-11|rabbit|토끼|A rabbit eats carrots.|토끼는 당근을 먹는다.
4-11|hamster|햄스터|My hamster is running.|나의 햄스터가 달리고 있다.
4-11|snake|뱀|A snake is long.|뱀은 길다.
4-11|bird|새|A bird is singing.|새가 노래하고 있다.
4-11|spider|거미|A spider has eight legs.|거미는 여덟 개의 다리를 가지고 있다.
4-12|color|색깔, 색칠하다|What is your favorite color?|네가 가장 좋아하는 색깔은 무엇이니?
4-12|favorite|가장 좋아하는|My favorite color is red.|내가 가장 좋아하는 색깔은 빨간색이다.
4-12|red|빨간색|The apple is red.|그 사과는 빨간색이다.
4-12|orange|주황색|I eat an orange.|나는 주황색 오렌지를 먹는다.
4-12|yellow|노란색|I draw a yellow sun.|나는 노란색 태양을 그린다.
4-12|green|초록색|The grass is green.|잔디는 초록색이다.
4-12|blue|파란색|The sky is blue.|하늘은 파란색이다.
4-12|purple|보라색|She wears a purple hat.|그녀는 보라색 모자를 쓴다.
4-12|black|검은색|My dog is black.|나의 개는 검은색이다.
4-12|white|흰색|The cloud is white.|구름은 흰색이다.
4-12|brown|갈색|My shoes are brown.|나의 신발은 갈색이다.
4-12|gray|회색|The rock is gray.|그 돌은 회색이다.
4-12|pink|분홍색|I like pink flowers.|나는 분홍색 꽃을 좋아한다.
4-12|gold|금색|I found a gold coin.|나는 금색 동전을 찾았다.
4-12|silver|은색|The ring is silver.|그 반지는 은색이다.
4-12|paint|칠하다, 그리다|Let's paint the wall blue.|벽을 파란색으로 칠하자.
4-13|age|나이|What is your age?|너의 나이는 몇 살이니?
4-13|who|누구|Who is that boy?|저 소년은 누구니?
4-13|young|어린, 젊은|She is a young student.|그녀는 어린 학생이다.
4-13|old|늙은, 나이가 많은|My grandfather is old.|나의 할아버지는 나이가 많으시다.
4-13|child|아이|I am a happy child.|나는 행복한 아이이다.
4-13|adult|성인, 어른|My parents are adults.|나의 부모님은 어른이다.
4-13|boy|소년, 남자아이|He is a clever boy.|그는 똑똑한 소년이다.
4-13|girl|소녀, 여자아이|She is a nice girl.|그녀는 착한 소녀이다.
4-13|man|(성인) 남자|That man is tall.|저 남자는 키가 크다.
4-13|woman|(성인) 여자|That woman is a teacher.|저 여자는 선생님이다.
4-13|gentleman|신사|He is a kind gentleman.|그는 친절한 신사이다.
4-13|lady|숙녀, 여성|She is a beautiful lady.|그녀는 아름다운 숙녀이다.
4-13|Mr.|(남성의 성, 이름 앞에) ~씨|Mr. Kim is my teacher.|김 씨는 나의 선생님이다.
4-13|Ms.|(여성의 성, 이름 앞에) ~씨|Ms. Park works here.|박 씨는 여기서 일한다.
4-13|Mrs.|(결혼한 여성) ~부인|Mrs. Lee is my friend's mom.|이 부인은 나의 친구 엄마다.
4-13|know|알다|I know the answer.|나는 그 답을 안다.
4-14|want|원하다|I want a new book.|나는 새 책을 원한다.
4-14|hope|희망, 바라다|I hope to see you soon.|나는 곧 너를 보기를 바란다.
4-14|dream|꿈, 꿈꾸다|I have a great dream.|나는 대단한 꿈을 가지고 있다.
4-14|become|~가 되다|I want to become a pilot.|나는 조종사가 되고 싶다.
4-14|doctor|의사|The doctor helps sick people.|의사는 아픈 사람들을 돕는다.
4-14|nurse|간호사|The nurse is very kind.|간호사는 매우 친절하다.
4-14|scientist|과학자|A scientist studies nature.|과학자는 자연을 연구한다.
4-14|firefighter|소방관|A firefighter stops the fire.|소방관은 불을 끈다.
4-14|job|직업|What is your job?|너의 직업은 무엇이니?
4-14|work|일하다|My parents work hard.|나의 부모님은 열심히 일하신다.
4-14|actor|배우|He is a famous actor.|그는 유명한 배우이다.
4-14|artist|예술가, 화가|My friend is a great artist.|나의 친구는 훌륭한 예술가이다.
4-14|teacher|선생님|My teacher is smart.|나의 선생님은 똑똑하시다.
4-14|police officer|경찰관|The police officer is driving a car.|경찰관이 차를 운전하고 있다.
4-14|pilot|조종사|A pilot flies a plane.|조종사는 비행기를 조종한다.
4-14|engineer|기술자|My uncle is an engineer.|나의 삼촌은 기술자이다.
4-15|handsome|잘생긴|My brother is very handsome.|나의 오빠는 아주 잘생겼다.
4-15|ugly|못생긴|I saw an ugly duck.|나는 못생긴 오리를 보았다.
4-15|tall|키가 큰|The basketball player is tall.|그 농구 선수는 키가 크다.
4-15|short|키가 작은|I am short for my age.|나는 내 나이에 비해 키가 작다.
4-15|fat|살찐|The cat is getting fat.|그 고양이는 살이 찌고 있다.
4-15|slim|날씬한|She has a slim figure.|그녀는 날씬한 몸매를 가지고 있다.
4-15|strong|강한|He is very strong.|그는 매우 강하다.
4-15|weak|약한|I feel weak when I am sick.|나는 아플 때 약하게 느낀다.
4-15|beautiful|아름다운|The flower is beautiful.|그 꽃은 아름답다.
4-15|wonderful|아주 멋진|We had a wonderful time.|우리는 아주 멋진 시간을 보냈다.
4-15|pretty|예쁜|The doll is very pretty.|그 인형은 매우 예쁘다.
4-15|cute|귀여운|The puppy is so cute.|그 강아지는 정말 귀엽다.
4-15|hungry|배고픈|I am hungry now.|나는 지금 배고프다.
4-15|thirsty|목마른|I am thirsty after running.|나는 달린 후에 목마르다.
4-15|honest|정직한|He is an honest person.|그는 정직한 사람이다.
4-15|curious|호기심이 많은|I am curious about the world.|나는 세상에 대해 호기심이 많다.
4-16|clever|영리한|He is a clever student.|그는 영리한 학생이다.
4-16|smart|똑똑한|My teacher is very smart.|나의 선생님은 아주 똑똑하시다.
4-16|wise|현명한|My grandmother is wise.|나의 할머니는 현명하시다.
4-16|stupid|어리석은|Don't do stupid things.|어리석은 짓을 하지 마라.
4-16|foolish|어리석은|It was a foolish mistake.|그것은 어리석은 실수였다.
4-16|calm|차분한|Be calm before the test.|시험 전에 차분하게 있어라.
4-16|shy|수줍어하는|She is a little shy.|그녀는 조금 수줍어한다.
4-16|funny|재미있는|That movie is very funny.|저 영화는 매우 재미있다.
4-16|polite|예의 바른|He is a very polite boy.|그는 아주 예의 바른 소년이다.
4-16|rude|예의 없는|Don't be rude to others.|다른 사람들에게 예의 없게 굴지 마라.
4-16|gentle|상냥한, 순한|The cat is very gentle.|그 고양이는 매우 순하다.
4-16|kind|친절한|She is a kind person.|그녀는 친절한 사람이다.
4-16|selfish|이기적인|Don't be selfish with your toys.|너의 장난감에 대해 이기적으로 굴지 마라.
4-16|brave|용감한|The brave knight saved the princess.|그 용감한 기사가 공주를 구했다.
4-16|careful|주의 깊은|Be careful when you cross the road.|길을 건널 때 주의 깊게 해라.
4-16|lazy|게으른|The lazy boy didn't clean his room.|그 게으른 소년은 그의 방을 청소하지 않았다.
4-17|bring|가져오다|Please bring a gift.|선물을 가져와 주세요.
4-17|invite|초대하다|I will invite my friends.|나는 나의 친구들을 초대할 것이다.
4-17|need|필요하다|I need a cake for the party.|나는 파티를 위해 케이크가 필요하다.
4-17|snack|간식|We eat a lot of snacks.|우리는 많은 간식을 먹는다.
4-17|balloon|풍선|The balloons are red and blue.|풍선들은 빨갛고 파랗다.
4-17|toy|장난감|I play with my new toy.|나는 나의 새 장난감으로 논다.
4-17|birthday|생일|Today is my birthday.|오늘은 나의 생일이다.
4-17|party|파티|We have a fun party.|우리는 재미있는 파티를 한다.
4-17|make|만들다|I make a card for my mom.|나는 나의 엄마를 위해 카드를 만든다.
4-17|give|주다|I give a gift to my friend.|나는 나의 친구에게 선물을 준다.
4-17|congratulate|축하하다|Congratulate him on his win.|그의 승리를 축하해 줘라.
4-17|card|카드|I wrote a letter on the card.|나는 카드에 편지를 썼다.
4-17|cake|케이크|We eat the cake together.|우리는 케이크를 함께 먹는다.
4-17|doll|인형|My sister loves her new doll.|나의 여동생은 그녀의 새 인형을 매우 좋아한다.
4-17|gift|선물|This gift is for you.|이 선물은 너를 위한 것이다.
4-17|present|선물|I got a nice present.|나는 멋진 선물을 받았다.
4-18|what|무엇|What is your name?|너의 이름은 무엇이니?
4-18|year|해, 년|This year is 2025.|올해는 2025년이다.
4-18|date|날짜|What is the date today?|오늘 날짜는 언제니?
4-18|month|달, 월|There are twelve months in a year.|1년은 열두 달이다.
4-18|January|1월|My birthday is in January.|나의 생일은 1월이다.
4-18|February|2월|February is the shortest month.|2월은 가장 짧은 달이다.
4-18|March|3월|School starts in March.|학교는 3월에 시작한다.
4-18|April|4월|I like the weather in April.|나는 4월의 날씨를 좋아한다.
4-18|May|5월|We have Children's Day in May.|우리는 5월에 어린이날이 있다.
4-18|June|6월|We go swimming in June.|우리는 6월에 수영하러 간다.
4-18|July|7월|July is a hot month.|7월은 더운 달이다.
4-18|August|8월|We have summer vacation in August.|우리는 8월에 여름 방학이 있다.
4-18|September|9월|School starts again in September.|학교는 9월에 다시 시작한다.
4-18|October|10월|I see red leaves in October.|나는 10월에 빨간 나뭇잎을 본다.
4-18|November|11월|It starts getting cold in November.|11월에 추워지기 시작한다.
4-18|December|12월|We celebrate Christmas in December.|우리는 12월에 크리스마스를 기념한다.
4-19|wake up|잠에서 깨다|I wake up at 7 o'clock.|나는 7시에 잠에서 깬다.
4-19|get up|일어나다|I get up from my bed.|나는 나의 침대에서 일어난다.
4-19|go to school|학교에 가다|I go to school by bus.|나는 버스를 타고 학교에 간다.
4-19|come home|집에 오다|I come home after school.|나는 방과 후에 집에 온다.
4-19|take a shower|샤워를 하다|I take a shower in the morning.|나는 아침에 샤워를 한다.
4-19|wash hands|손을 씻다|Always wash hands before eating.|먹기 전에 항상 손을 씻어라.
4-19|brush teeth|양치질을 하다|I brush teeth twice a day.|나는 하루에 두 번 양치질을 한다.
4-19|go to bed|잠자리에 들다|I go to bed at ten.|나는 10시에 잠자리에 든다.
4-19|read a book|책을 읽다|I read a book every night.|나는 매일 밤 책을 읽는다.
4-19|keep a diary|일기를 쓰다|I keep a diary about my day.|나는 나의 하루에 대해 일기를 쓴다.
4-19|watch television|텔레비전을 보다|We watch television in the living room.|우리는 거실에서 텔레비전을 본다.
4-19|cook|요리하다|My dad likes to cook.|나의 아빠는 요리하는 것을 좋아하신다.
4-19|take a bath|목욕하다|I take a bath on Sunday.|나는 일요일에 목욕한다.
4-19|rest|쉬다|You should rest when you are tired.|너는 피곤할 때 쉬어야 한다.
4-19|do homework|숙제를 하다|I must do homework now.|나는 지금 숙제를 해야 한다.
4-19|soon|곧|I will finish soon.|나는 곧 끝낼 것이다.
4-20|go|가다|I go to the park.|나는 공원에 간다.
4-20|build|짓다|They will build a new school.|그들은 새 학교를 지을 것이다.
4-20|company|회사|My father works at a company.|나의 아버지는 회사에서 일하신다.
4-20|office|사무실|The doctor is in his office.|의사는 그의 사무실에 있다.
4-20|post office|우체국|I send a letter at the post office.|나는 우체국에서 편지를 보낸다.
4-20|bank|은행|I save money in the bank.|나는 은행에 돈을 저금한다.
4-20|store|가게|Let's buy some candy at the store.|가게에서 사탕을 좀 사자.
4-20|church|교회|We go to church on Sunday.|우리는 일요일에 교회에 간다.
4-20|place|장소|This is a beautiful place.|이곳은 아름다운 장소이다.
4-20|library|도서관|I read books in the library.|나는 도서관에서 책을 읽는다.
4-20|bookstore|서점|I buy a comic book at the bookstore.|나는 서점에서 만화책을 산다.
4-20|bakery|빵집|I smell bread from the bakery.|나는 빵집에서 빵 냄새를 맡는다.
4-20|supermarket|슈퍼마켓|My mom goes to the supermarket.|나의 엄마는 슈퍼마켓에 가신다.
4-20|restaurant|식당|We eat dinner at the restaurant.|우리는 식당에서 저녁을 먹는다.
4-20|café|카페|I drink juice at the café.|나는 카페에서 주스를 마신다.
4-20|department store|백화점|I bought a shirt at the department store.|나는 백화점에서 셔츠를 샀다.
4-21|come|오다|Come to the park with me.|나랑 같이 공원에 와라.
4-21|jump|뛰다, 점프하다|The frog can jump high.|개구리는 높이 뛸 수 있다.
4-21|run|달리다|I run in the morning.|나는 아침에 달린다.
4-21|sit|앉다|Sit here, please.|여기에 앉아 주세요.
4-21|wait|기다리다|Wait for me at the bus stop.|버스 정류장에서 나를 기다려라.
4-21|sleep|잠자다|I sleep for 8 hours.|나는 8시간 동안 잠을 잔다.
4-21|move|움직이다|Please move the chair.|의자를 움직여 주세요.
4-21|put|놓다, 두다|Put the toys in the box.|장난감을 상자 안에 놓아라.
4-21|do|하다|I do my homework every day.|나는 매일 숙제를 한다.
4-21|cut|자르다|Cut the paper with scissors.|가위로 종이를 잘라라.
4-21|drop|떨어뜨리다|Be careful not to drop the glass.|유리잔을 떨어뜨리지 않도록 조심해라.
4-21|forget|잊다|Don't forget my name.|나의 이름을 잊지 마라.
4-21|open|열다|Open the window for fresh air.|신선한 공기를 위해 창문을 열어라.
4-21|close|닫다|Close the door quietly.|문을 조용히 닫아라.
4-21|blow|불다|I blow out the candle.|나는 촛불을 분다.
4-21|show|보여주다|Show me your new pencil.|너의 새 연필을 나에게 보여 줘.
4-22|park|공원|I play soccer in the park.|나는 공원에서 축구를 한다.
4-22|field|들판|We saw many flowers in the field.|우리는 들판에서 많은 꽃을 보았다.
4-22|ground|땅|The ball rolled on the ground.|공이 땅 위에서 굴러갔다.
4-22|grass|풀, 잔디|We sit on the soft grass.|우리는 부드러운 잔디 위에 앉는다.
4-22|sand|모래|I build a castle with sand.|나는 모래로 성을 만든다.
4-22|bench|벤치|Let's sit on the bench.|벤치에 앉자.
4-22|flower|꽃|This flower smells sweet.|이 꽃은 달콤한 냄새가 난다.
4-22|rose|장미|The red rose is beautiful.|빨간 장미는 아름답다.
4-22|find|찾다|I need to find my lost key.|나는 잃어버린 열쇠를 찾아야 한다.
4-22|ride|타다|Can you ride a bike?|너는 자전거를 탈 수 있니?
4-22|bicycle|자전거|I have a new bicycle.|나는 새 자전거를 가지고 있다.
4-22|jump rope|줄넘기, 줄넘기를 하다|We jump rope during break time.|우리는 쉬는 시간에 줄넘기를 한다.
4-22|camera|카메라|I take pictures with my camera.|나는 나의 카메라로 사진을 찍는다.
4-22|map|지도|Look at the map to find the way.|길을 찾기 위해 지도를 보아라.
4-22|stone|돌|I picked up a small stone.|나는 작은 돌 하나를 주웠다.
4-22|plant|식물|My mom waters the plant.|나의 엄마는 식물에 물을 주신다.
4-23|many|(수가) 많은|There are many people here.|여기에 많은 사람들이 있다.
4-23|much|(양이) 많은|I don't have much time.|나는 시간이 많지 않다.
4-23|few|(수가) 거의 없는|He has few friends.|그는 친구가 거의 없다.
4-23|little|(양이) 거의 없는|There is little water left.|남은 물이 거의 없다.
4-23|more|더 많은|I want more cake.|나는 케이크를 더 많이 원한다.
4-23|enough|충분한|I have enough money for the ticket.|나는 티켓을 살 충분한 돈이 있다.
4-23|some|조금, 약간의|Do you want some juice?|주스 좀 마실래?
4-23|both|둘 다|Both my parents are here.|나의 부모님 두 분 다 여기 계시다.
4-23|all|모든, 모두|All students must be quiet.|모든 학생들은 조용해야 한다.
4-23|most|대부분의|Most of the work is done.|일의 대부분이 끝났다.
4-23|a lot of|많은|We saw a lot of birds.|우리는 많은 새를 보았다.
4-23|any|어느, 어떤|Do you have any questions?|질문이 있니?
4-23|full|가득 찬|The basket is full of apples.|바구니는 사과로 가득 차 있다.
4-23|empty|비어 있는|The box is empty.|그 상자는 비어 있다.
4-23|another|또 하나의|Please give me another chance.|나에게 또 하나의 기회를 주세요.
4-23|only|오직, 겨우|I have only one cookie left.|나에게는 오직 하나의 쿠키만 남아 있다.
4-24|country|나라, 국가|I love my country, Korea.|나는 나의 나라, 한국을 매우 사랑한다.
4-24|world|세계, 세상|There are many places in the world.|세상에는 많은 장소가 있다.
4-24|culture|문화|I want to learn about different cultures.|나는 다양한 문화에 대해 배우고 싶다.
4-24|Korea|한국|Korea is in Asia.|한국은 아시아에 있다.
4-24|China|중국|China is a very big country.|중국은 아주 큰 나라이다.
4-24|America|미국|My uncle lives in America.|나의 삼촌은 미국에 사신다.
4-24|Japan|일본|I want to travel to Japan.|나는 일본으로 여행하고 싶다.
4-24|Canada|캐나다|Canada is famous for maple syrup.|캐나다는 메이플 시럽으로 유명하다.
4-24|grow up|성장하다, 자라다|I will grow up to be a kind person.|나는 자라서 친절한 사람이 될 것이다.
4-24|live|살다|I live in Seoul with my family.|나는 나의 가족과 함께 서울에 산다.
4-24|island|섬|Jeju is a famous island.|제주는 유명한 섬이다.
4-24|town|소도시|I visited a small quiet town.|나는 작고 조용한 소도시를 방문했다.
4-24|city|도시|Seoul is a very busy city.|서울은 매우 바쁜 도시이다.
4-24|village|마을|My grandparents live in a small village.|나의 할아버지와 할머니는 작은 마을에 사신다.
4-24|countryside|시골, 지방|We went to the countryside for a trip.|우리는 여행을 위해 시골에 갔다.
4-24|downtown|시내에|Let's meet downtown this weekend.|이번 주말에 시내에서 만나자.
4-25|zoo|동물원|We go to the zoo to see animals.|우리는 동물들을 보기 위해 동물원에 간다.
4-25|lion|사자|The lion is the king of the jungle.|사자는 정글의 왕이다.
4-25|tiger|호랑이|The tiger has black stripes.|호랑이는 검은 줄무늬를 가지고 있다.
4-25|giraffe|기린|The giraffe has a long neck.|기린은 목이 길다.
4-25|monkey|원숭이|The monkey likes to eat bananas.|원숭이는 바나나 먹는 것을 좋아한다.
4-25|elephant|코끼리|The elephant is a big animal.|코끼리는 큰 동물이다.
4-25|fox|여우|The fox is a smart animal.|여우는 영리한 동물이다.
4-25|dolphin|돌고래|The dolphin can jump very high.|돌고래는 아주 높이 점프할 수 있다.
4-25|jungle|밀림 지대, 정글|We explored the dense jungle.|우리는 빽빽한 정글을 탐험했다.
4-25|wolf|늑대|I heard a wolf howling at night.|나는 밤에 늑대가 우는 소리를 들었다.
4-25|hippo|하마|The hippo stays in the water.|하마는 물 속에 머문다.
4-25|bear|곰|The bear likes to eat honey.|곰은 꿀 먹는 것을 좋아한다.
4-25|cheetah|치타|The cheetah runs very fast.|치타는 매우 빠르게 달린다.
4-25|zebra|얼룩말|The zebra has black and white stripes.|얼룩말은 검은색과 흰색 줄무늬를 가지고 있다.
4-25|panda|판다|The panda eats bamboo.|판다는 대나무를 먹는다.
4-25|bat|박쥐|The bat flies only at night.|박쥐는 밤에만 난다.
4-26|farm|농장|My grandfather works on the farm.|나의 할아버지는 농장에서 일하신다.
4-26|cow|소|The cow gives us milk.|소는 우리에게 우유를 준다.
4-26|horse|말|I like to ride a horse.|나는 말을 타는 것을 좋아한다.
4-26|sheep|양|The sheep is eating grass.|양이 풀을 먹고 있다.
4-26|chicken|닭|We feed the chickens every day.|우리는 매일 닭들에게 먹이를 준다.
4-26|hen|암탉|The hen laid an egg this morning.|암탉이 오늘 아침에 알을 낳았다.
4-26|pig|돼지|The pig is sleeping in the mud.|돼지가 진흙 속에서 자고 있다.
4-26|deer|사슴|We saw a wild deer in the forest.|우리는 숲에서 야생 사슴을 보았다.
4-26|goat|염소|The goat is climbing the rock.|염소가 바위를 오르고 있다.
4-26|duck|오리|The duck is swimming on the pond.|오리가 연못 위에서 수영하고 있다.
4-26|frog|개구리|The frog jumps very high.|개구리는 아주 높이 점프한다.
4-26|mouse|쥐|A small mouse ran into the hole.|작은 쥐가 구멍으로 뛰어 들어갔다.
4-26|mice|(mouse의 복수형) 쥐들|There are three mice under the sofa.|소파 밑에 쥐 세 마리가 있다.
4-26|bug|벌레|I found a green bug on the leaf.|나는 나뭇잎 위에서 초록색 벌레를 발견했다.
4-26|bee|벌|The bee is making honey.|벌이 꿀을 만들고 있다.
4-26|ant|개미|An ant is carrying a piece of food.|개미 한 마리가 먹이 조각을 운반하고 있다.
4-27|market|시장|I buy fresh vegetables at the market.|나는 시장에서 신선한 채소를 산다.
4-27|plastic bag|비닐봉지|I put apples in a plastic bag.|나는 사과를 비닐봉지에 넣는다.
4-27|shopping bag|쇼핑 백, 장바구니|Please bring a shopping bag.|쇼핑 백을 가져와 주세요.
4-27|cart|카트, 수레|I push the cart in the store.|나는 가게에서 카트를 민다.
4-27|shop|가게|I found a nice gift at the shop.|나는 가게에서 좋은 선물을 찾았다.
4-27|customer|손님, 고객|The customer is buying a shirt.|그 손님은 셔츠를 사고 있다.
4-27|clerk|점원|The clerk helped me find the item.|점원이 내가 물건을 찾는 것을 도와주었다.
4-27|sell|팔다|The bakery sells fresh bread.|그 빵집은 신선한 빵을 판다.
4-27|look for|~을 찾다|I will look for my lost wallet.|나는 잃어버린 지갑을 찾을 것이다.
4-27|buy|사다|I want to buy a new toy.|나는 새 장난감을 사고 싶다.
4-27|spend|(돈을) 쓰다|I spend money on books.|나는 책에 돈을 쓴다.
4-27|pay|지불하다|I will pay with cash.|나는 현금으로 지불할 것이다.
4-27|cost|값, 비용|The cost of the pen is 1,000 won.|그 펜의 값은 1,000원이다.
4-27|price|가격|What is the price of this candy?|이 사탕의 가격은 얼마입니까?
4-27|cheap|(값이) 싼|This snack is very cheap.|이 과자는 매우 싸다.
4-27|expensive|비싼|That necklace is too expensive.|저 목걸이는 너무 비싸다.
4-28|fruit|과일|I eat fruit every morning.|나는 매일 아침 과일을 먹는다.
4-28|banana|바나나|A banana is a yellow fruit.|바나나는 노란색 과일이다.
4-28|apple|사과|I like red apples.|나는 빨간 사과를 좋아한다.
4-28|orange|오렌지|I drink orange juice.|나는 오렌지 주스를 마신다.
4-28|lemon|레몬|Lemons are sour.|레몬은 시큼하다.
4-28|grape|포도|I like purple grapes.|나는 보라색 포도를 좋아한다.
4-28|strawberry|딸기|I bought sweet strawberryies.|나는 달콤한 딸기를 샀다.
4-28|watermelon|수박|Watermelon is a summer fruit.|수박은 여름 과일이다.
4-28|vegetable|채소|We should eat more vegetables.|우리는 채소를 더 많이 먹어야 한다.
4-28|tomato|토마토|A tomato is red and round.|토마토는 빨갛고 둥글다.
4-28|carrot|당근|Rabbits eat carrots.|토끼는 당근을 먹는다.
4-28|corn|옥수수|I like roasted corn.|나는 구운 옥수수를 좋아한다.
4-28|onion|양파|Onions can make you cry.|양파는 너를 울게 만들 수 있다.
4-28|garlic|마늘|Garlic has a strong smell.|마늘은 강한 냄새가 난다.
4-28|potato|감자|We make french fries from a potato.|우리는 감자로 감자튀김을 만든다.
4-28|fresh|신선한|I buy fresh fruit at the market.|나는 시장에서 신선한 과일을 산다.
4-29|time|시간|What time is it now?|지금 몇 시니?
4-29|second|초|The light lasts for ten seconds.|빛이 10초 동안 지속된다.
4-29|minute|분|Wait for five minutes.|5분 동안 기다려라.
4-29|hour|한 시간|I study for one hour.|나는 한 시간 동안 공부한다.
4-29|day|하루|There are seven days in a week.|일주일에는 7일이 있다.
4-29|ago|(지금부터) ~전에|I saw him two days ago.|나는 그를 이틀 전에 보았다.
4-29|last|지난, 마지막의|Last week I went camping.|지난주에 나는 캠핑을 갔다.
4-29|when|언제|When will the movie start?|영화는 언제 시작할까?
4-29|before|전에, 앞에|I brush my teeth before bed.|나는 잠자기 전에 양치질을 한다.
4-29|after|후에, 뒤에|We will eat cake after dinner.|우리는 저녁 식사 후에 케이크를 먹을 것이다.
4-29|then|그때|I was playing outside then.|나는 그때 밖에서 놀고 있었다.
4-29|now|지금|We should leave now.|우리는 지금 떠나야 한다.
4-29|early|일찍|I wake up early on weekdays.|나는 평일에 일찍 일어난다.
4-29|late|늦은, 늦게|Don't be late for school.|학교에 늦지 마라.
4-29|busy|바쁜|My mom is busy today.|나의 엄마는 오늘 바쁘시다.
4-29|next|다음의|Next week is my birthday.|다음 주는 나의 생일이다.
4-30|sky|하늘|The sky is clear and blue today.|오늘 하늘은 맑고 파랗다.
4-30|sun|해, 태양|The sun sets in the west.|해는 서쪽으로 진다.
4-30|moon|달|We can see the full moon tonight.|우리는 오늘 밤 보름달을 볼 수 있다.
4-30|star|별|I saw a shooting star.|나는 별똥별을 보았다.
4-30|cloud|구름|The airplane is flying above the clouds.|비행기가 구름 위를 날고 있다.
4-30|shine|빛나다, 반짝이다|The diamonds shine brightly.|다이아몬드가 밝게 빛난다.
4-30|bright|밝은|The light is too bright.|빛이 너무 밝다.
4-30|dark|어두운|It gets dark very fast in winter.|겨울에는 해가 아주 빨리 진다.
4-30|rain|비|The rain stopped this morning.|비가 오늘 아침에 멈췄다.
4-30|snow|눈|I like the soft white snow.|나는 부드러운 하얀 눈을 좋아한다.
4-30|storm|폭풍우|A big storm is coming soon.|큰 폭풍우가 곧 올 것이다.
4-30|fog|안개|The fog made it hard to see the road.|안개 때문에 길을 보기 어려웠다.
4-30|air|공기|We need clean air to breathe.|우리는 숨 쉬기 위해 깨끗한 공기가 필요하다.
4-30|light|빛|The sun gives off warm light.|태양은 따뜻한 빛을 내뿜는다.
4-30|earth|지구|The earth is round.|지구는 둥글다.
4-30|space|우주|There are many stars in outer space.|외부 우주에는 많은 별들이 있다.


5-1|ten|(숫자) 10|get up at ten o'clock|10시 정각에 일어나다
5-1|tent|텐트|put up the tent|텐트를 치다
5-1|next|다음의, 그다음에|the next morning|다음 날 아침
5-1|next to|~옆에|next to my house|나의 집 옆에
5-1|textbook|교과서|my English textbook|나의 영어 교과서
5-1|tax|세금|income tax|소득세
5-1|relax|휴식하다, 완화되다|Calm down and relax.|진정하고 좀 쉬어.
5-1|bath|목욕|take a bath|목욕을 하다
5-1|bathroom|화장실, 욕실|in the bathroom|욕실 안에서
5-1|living room|거실|in the living room|거실 안에서
5-1|look at|~을 보다|{look at} the stars|별을 바라보다
5-1|look for|~을 찾다|{look for} jeans|청바지를 찾다
5-1|look like|~을 닮다|{look like} his father|그의 아버지처럼 보이다
5-1|look after|~을 돌보다|{look after} my cat|나의 고양이를 돌보다

5-2|close|닫다, 가까운|Close the door.|문을 닫아.
5-2|closet|옷장|in the closet|옷장 안에
5-2|four|(숫자) 4|four people|네 명의 사람
5-2|court|법정, 코트|in the court|법정 안에서
5-2|course|강의, 과정|a beginner course|초보자 과정
5-2|deep|깊은|a deep river|깊은 강
5-2|keep|유지하다|keep the room clean.|방을 깨끗하게 유지하다
5-2|knee|무릎|Bend your knee.|무릎을 굽혀.
5-2|need|필요하다|I need your help.|나는 너의 도움이 필요해.
5-2|speed|속도|speed limit|속도 제한
5-2|speech|연설|give a speech|연설하다
5-2|week|주|every week|매주
5-2|weekend|주말|every weekend|주말마다
5-2|between|~사이에|between you and me|너와 나 사이에

5-3|leaf|(나뭇)잎|a four-leaf clover|네 잎 클로버
5-3|leave|떠나다, 휴가|leave the door open|문을 열어둬
5-3|weak|약한|He's weak.|그는 약해.
5-3|speak|말하다|speak in English|영어로 말하다
5-3|each|각각의|each other|서로
5-3|cheap|값싼|It's cheap.|그것은 싸다.
5-3|team|팀|in the team|팀 안에
5-3|steam|증기|The soup made steam.|수프에서 김이 났다
5-3|scream|소리 지르다|She screamed.|그녀는 소리쳤다.
5-3|soccer|축구|play soccer|축구를 하다
5-3|shower|샤워|take a shower|샤워를 하다
5-3|flower|꽃|plant a flower|꽃을 심다
5-3|answer|대답하다|Answer this question.|이 질문에 대답해.
5-3|jungle|정글|in the jungle|정글에서

5-4|for|[전] ~을 위한, ~로|for you|너를 위해
5-4|fork|[명] 포크|a fork and a knife|포크와 나이프
5-4|pork|[명] 돼지고기|pork and beef|돼지고기와 소고기
5-4|sport|[명] 운동, 스포츠|I like sports.|나는 스포츠를 좋아해.
5-4|short|[형] 작은, 짧은|He's short.|그는 키가 작아.
5-4|star|[명] 별|Look at the stars!|별들을 봐!
5-4|start|[동] 시작하다 [명] 출발|Let's start.|시작하자.
5-4|part|[명] 부분, 부품|important parts|중요한 부분들
5-4|party|[명] 파티|have a fun party|즐거운 파티를 하다
5-4|park|[명] 공원|go to the park|공원에 가다
5-4|dark|[형] 어두운|It's dark at night.|밤에는 어두워.
5-4|mark|[명] 표시 [동] 표시하다|I marked important parts.|나는 중요한 부분을 표시했다.
5-4|carrot|[명] 당근|Rabbits like carrots.|토끼들은 당근을 좋아해.
5-4|parrot|[명] 앵무새|a colorful parrot|알록달록한 앵무새

5-5|size|[명] 크기, 사이즈|a big size|큰 크기
5-5|prize|[명] 상(품)|I won a prize.|나는 상을 받았다.
5-5|wise|[형] 현명한|He's wise and kind.|그는 지혜롭고 친절해.
5-5|pipe|[명] 파이프, 관|through the pipe|파이프를 통해
5-5|bite|[동] 물다 [명] 한 입|Mosquitoes bite people.|모기는 사람을 물어.
5-5|invite|[동] 초대하다|invite her to the party|그녀를 파티에 초대하다
5-5|knife|[명] 칼|use a knife|칼을 사용하다
5-5|know|[동] 알다|I know his name.|나는 그의 이름을 알아.
5-5|knock|[동] 두드리다, 노크하다|knock on the door|문을 두드리다
5-5|sock|[명] 양말|wear warm socks|따뜻한 양말을 신다
5-5|shock|[명] 충격 [동] 충격을 주다|The news shocked me.|그 소식은 내게 충격을 줬다.
5-5|locker|[명] 사물함, 자물쇠|in the locker|사물함 안에
5-5|exit|[명] 출구|The exit is on your right.|출구는 너의 오른쪽에 있어.
5-5|taxi|[명] 택시|We took a taxi.|우리는 택시를 탔다.

5-6|calm|[형] 차분한|Stay calm.|차분하게 있어.
5-6|half|[명] 절반|in half|반으로
5-6|talk|[동] 이야기하다, 대화하다|talk about the book|그 책에 대해 이야기하다
5-6|walk|[동] 걷다, 산책시키다|walk to school|학교까지 걸어가다
5-6|work|[명] 일 [동] 일하다, 작동하다|It doesn't work.|그것은 작동하지 않아.
5-6|word|[명] 단어|a few words|몇 단어
5-6|world|[명] 세계, 세상|in the world|세계에서
5-6|focus|[명] 초점 [동] 집중하다|focus on|~에 집중하다
5-6|circus|[명] 서커스|watch the circus|서커스를 보다
5-6|circle|[명] 원, 동그라미|triangle, square, and circle|삼각형, 사각형 그리고 원
5-6|cycle|[명] 주기, 자전거|the cycle of seasons|계절의 순환
5-6|cross|[동] 건너다 [명] 십자가|cross the street|길을 건너다
5-6|across|[전] 건너편에, 가로질러|across from|맞은편에
5-6|crosswalk|[명] 횡단보도|Use the crosswalk.|횡단보도를 사용하다

5-7|true|[형] 진짜의, 정말인|That's true.|그것은 진짜야.
5-7|clue|[명] 단서|find a clue|단서를 찾다
5-7|June|[명] 6월|in June|6월에
5-7|issue|[명] 문제점, 발행(물)|talk about the issue|그 문제에 대해 이야기하다
5-7|laser|[명] 레이저|use a laser|레이저를 사용하다
5-7|loser|[명] 패배자|a winner and a loser|승자와 패자
5-7|desert|[명] 사막|in the desert|사막에서
5-7|or|[접] 또는, 혹은|apples or oranges|사과 또는 오렌지
5-7|poor|[형] 가난한, 불쌍한|help poor people|가난한 사람들을 돕다
5-7|door|[명] 문|Close the door.|문을 닫아.
5-7|indoor|[형] 실내의|Let's play indoor games.|실내 게임을 하자.
5-7|outdoor|[형] 실외의|Let's play outdoor games.|야외 게임을 하자.
5-7|floor|[명] 바닥, 층|Sweep the floor.|바닥을 쓸어.
5-7|solve|[동] 풀다, 해결하다|solve the puzzle|퍼즐을 풀다

5-8|shoe|[명] 신발|wear new shoes|새 신발을 신다
5-8|shoot|[동] 쏘다|a shooting star|유성
5-8|English|[명] 영어|speak in English|영어로 말하다
5-8|touch|[동] 만지다, 손대다|Don't touch it.|만지지 마.
5-8|church|[명] 교회|go to church|교회에 가다
5-8|chicken|[명] 닭고기|chicken and beef|닭고기와 소고기
5-8|watch|[명] 손목시계, 지켜보다|He wore a watch.|그는 시계를 차고 있었다.
5-8|catch|[동] 잡다|Catch the ball.|공을 잡아.
5-8|switch|[명] 스위치, 전환하다|switch off the lights|불을 끄다
5-8|kitchen|[명] 주방|in the kitchen|부엌에서
5-8|sketchbook|[명] 스케치북|in my sketchbook|나의 스케치북에
5-8|notebook|[명] 공책|write down in the notebook|공책에 필기하다
5-8|salt|[명] 소금|Pass me the salt.|소금을 건네줘.
5-8|adult|[명] 어른, 성인|adults and children|어른들과 아이들

5-9|math|[명] 수학|solve math problems|수학 문제를 풀다
5-9|magic|[명] 마술|do a magic trick|마술을 부리다
5-9|music|[명] 음악|dance to music|음악에 맞춰 춤추다
5-9|basic|[형] 기초의, 기본적인|basic rules|기본 규칙
5-9|picnic|[명] 소풍|go on a picnic|소풍을 가다
5-9|comic|[명] 만화|comic books|만화책
5-9|copy|[동] 복사하다 [명] 복사본|Can I copy your notes?|너의 노트를 복사해도 될까?
5-9|pay|[동] 지불하다|pay for lunch|점심값을 지불하다
5-9|both|[형] 둘 다|both of us|우리 둘 다
5-9|cloth|[명] 천, 옷감|a soft cloth|부드러운 천
5-9|clothes|[명] 옷|warm clothes|따뜻한 옷
5-9|noise|[명] 소음|a loud noise|큰 소음
5-9|voice|[명] 목소리|Her voice is beautiful.|그녀의 목소리는 아름답다.
5-9|choice|[명] 선택|make a choice|선택을 하다

5-10|shape|[명] 모양|a heart shape|하트 모양
5-10|grape|[명] 포도|grapes in the basket|바구니에 든 포도
5-10|grade|[명] 학년, 등급|in the sixth grade|6학년에
5-10|trade|[명] 무역, 거래 [동] 거래하다|trade goods|상품을 거래하다
5-10|website|[명] 웹사이트|on the website|웹사이트에서
5-10|white|[명] 흰색|a white scarf|흰색 스카프
5-10|write|[동] 쓰다|how to write English|영어를 쓰는 방법
5-10|writer|[명] 작가|a famous writer|유명한 작가
5-10|tiger|[명] 호랑이|a strong tiger|강한 호랑이
5-10|meter|[명] 미터|5 meters|5 미터
5-10|matter|[명] 문제, 사안|What's the matter?|무슨 일이에요?
5-10|after|[부] [전] 후에|after school|방과 후에
5-10|noon|[명] 정오|at noon|정오에
5-10|afternoon|[명] 오후|in the afternoon|오후에

5-11|foolish|어리석은|He's foolish.|그는 어리석어.
5-11|choose|[동] 선택하다|choose a favorite one|좋아하는 것을 고르다
5-11|bookshelf|[명] 책장, 책꽂이|on the bookshelf|책장 위에
5-11|selfish|[형] 이기적인, 자기중심적인|Don't be selfish.|이기적으로 굴지 마.
5-11|cost|[명] 비용|The cost is too expensive.|그 비용은 너무 비싸.
5-11|post|[명] 우편|post a letter|편지를 우편으로 보내다
5-11|post office|[명] 우체국|in the post office|우체국에서
5-11|test|[명] 시험|on the test|시험에서
5-11|contest|[명] 대회|in the contest|대회에서
5-11|supper|[명] 저녁 식사|have supper|저녁식사를 하다
5-11|paper|[명] 종이|on the paper|종이 위에
5-11|perfect|[형] 완벽한|Your drawing is perfect.|너의 그림은 완벽해.
5-11|person|[명] 사람|Be kind to every person.|모든 사람에게 친절해야 해.
5-11|lesson|[명] 수업, 교훈|five lessons|다섯 개의 수업

5-12|law|[명] 법|follow the law|법을 따르다
5-12|draw|[동] 그리다|Draw a circle.|원을 그려라.
5-12|strawberry|[명] 딸기|I love strawberry juice.|나는 딸기 주스를 좋아해.
5-12|sorry|[형] 미안한, 유감스러운|I'm sorry.|미안해.
5-12|one|[명] 하나|one apple|한 개의 사과
5-12|anyone|[대] 아무도, 누구든지|Anyone can come.|누구든지 와도 돼.
5-12|someone|[대] 누군가, 어떤 사람|Someone left it in the room.|누군가가 그것을 방에 놔두었어.
5-12|round|[형] 둥근|The earth is round.|지구는 둥근 모양이야.
5-12|sound|[명] 소리 [동] 들리다|That sounds fun.|그거 재미있겠다.
5-12|around|[부] 주위에 [전] ~ 주위에|around the park|공원 주위에
5-12|ground|[명] 땅, 토대|on the wet ground|젖은 땅 위에
5-12|background|[명] 배경|a beautiful background|아름다운 배경
5-12|playground|[명] 놀이터|on the playground|놀이터에서
5-12|marathon|[명] 마라톤|join a marathon|마라톤에 참가하다

5-13|helmet|[명] 헬멧|wear a helmet|헬멧을 쓰다
5-13|metal|[명] 금속|made of metal|금속으로 만들어진
5-13|medal|[명] 메달|win a gold medal|금메달을 따다
5-13|messy|[형] 어수선한, 지저분한|Your room is messy.|너의 방은 어수선해.
5-13|bomb|[명] 폭탄|Bombs are dangerous.|폭탄은 위험해.
5-13|comb|[명] 빗 [동] 빗질하다|comb hair|머리를 빗다
5-13|thumb|[명] 엄지 손가락|my thumb|나의 엄지 손가락
5-13|climb|[동] 올라가다, 등반하다|climb up the mountain|산을 올라가다
5-13|brave|[형] 용감한|a brave hero|용감한 영웅
5-13|brand|[명] 브랜드|a popular brand|인기 있는 브랜드
5-13|branch|[명] 가지, 분야|a branch of a tree|나뭇가지
5-13|once|[부] 한 번|once a week|일주일에 한 번
5-13|space|[명] 우주, 공간|in space|우주에서
5-13|spaceship|[명] 우주선|in the spaceship|우주선 안에서

5-14|dirt|[명] 먼지, 흙|dirt in the air|공기 중에 먼지
5-14|dirty|[형] 더러운|Your hands are dirty.|너의 손이 더러워.
5-14|birth|[명] 출생|give birth|출산하다
5-14|birthday|[명] 생일|a birthday party|생일 파티
5-14|thirty|[명] (숫자) 30|thirty days|30일
5-14|thirsty|[형] 목마른|feel thirsty|목이 마르다
5-14|thirteen|[명] (숫자) 13|thirteen boys in the classroom|교실 안의 13명의 남자아이들
5-14|air|[명] 공기 [형] 항공의|in the fresh air|신선한 공기 속에서
5-14|airline|[명] 항공사|an airline company|항공사 회사
5-14|airplane|[명] 비행기|an airplane in the sky|하늘에 떠 있는 비행기
5-14|airport|[명] 공항|at the airport|공항에서
5-14|passport|[명] 여권|Take your passport when traveling.|여행할 때 여권을 가져가세요.
5-14|effort|[명] 노력|with effort|노력으로
5-14|soldier|[명] 군인|soldiers in the war|전쟁 중인 군인들

5-15|what|[대] 무엇|What do you want for lunch?|점심 뭐 먹을래?
5-15|when|[부] 언제|When is your birthday?|너의 생일은 언제야?
5-15|which|[대] 어느 것|which one|어느 것
5-15|sandwich|[명] 샌드위치|a cheese sandwich|치즈 샌드위치
5-15|shy|[형] 부끄러운|a shy girl|부끄러운 소녀
5-15|why|[부] 왜 [명] 이유|Why are you upset?|너는 왜 화가 났어?
5-15|July|[명] 7월|in July|7월에
5-15|style|[명] 스타일, 방식|a unique style|독특한 스타일
5-15|type|[명] 종류|what type|어떤 종류
5-15|fresh|[형] 신선한|It smells fresh.|신선한 냄새가 난다.
5-15|trash|[명] 쓰레기|take out the trash|쓰레기를 버리다
5-15|travel|[명] 여행 [동] 여행하다|travel abroad|해외로 여행하다
5-15|level|[명] 수준, 레벨|at a basic level|기본 수준에서
5-15|model|[명] 모델|a fashion model|패션모델

5-16|long|[형] 긴|wide and long|넓고 긴
5-16|along|[전] ~을 따라|along the beach|해변을 따라
5-16|among|[전] 사이에|among books|책 사이에서
5-16|wrong|[형] 틀린|What's wrong?|무슨 문제가 있어?
5-16|strong|[형] 강한, 튼튼한|How strong!|정말 힘이 세구나!
5-16|spring|[명] 봄|I like spring.|나는 봄을 좋아해.
5-16|print|[동] 인쇄하다|I need to print these.|나는 이것들을 인쇄해야 해.
5-16|point|[명] 요점, 점수|a main point|요점
5-16|visit|[동] 방문하다|visit grandparents|조부모님을 방문하다
5-16|victory|[명] 승리|The team celebrated victory.|그 팀은 승리를 축하했다.
5-16|history|[명] 역사|in history|역사에서
5-16|factory|[명] 공장|in the factory|공장에서
5-16|memory|[명] 기억|a good memory|좋은 기억
5-16|memo|[명] 메모|I got a memo.|나는 메모를 받았어.

5-17|than|[접] [전] ~보다|I like books more than movies.|나는 영화보다 책을 더 좋아해.
5-17|there|[부] 거기에|I'll go there.|나는 거기에 갈게.
5-17|where|[부] 어디에|Where is the hospital?|병원은 어디야?
5-17|here|[부] 여기에|Come here.|이리 와.
5-17|more|[형] 더 많은 [부] 더 많이|I need more time.|나는 더 많은 시간이 필요해.
5-17|morning|[명] 아침|in the morning|아침에
5-17|evening|[명] 저녁|in the evening|저녁에
5-17|every|[형] 모든, ~마다|every meal|매 식사마다
5-17|story|[명] 이야기|tell a story|이야기를 하다
5-17|storm|[명] 폭풍|The storm brought heavy rain and thunder.|폭풍우가 많은 비와 천둥을 가져왔어.
5-17|stormy|[형] 폭풍우가 치는|It's stormy right now.|지금 폭풍우가 몰아쳐.
5-17|violin|[명] 바이올린|play the violin|바이올린을 연주하다
5-17|online|[명] 온라인|shop online|온라인에서 쇼핑하다
5-17|polite|[형] 예의 바른|Be polite.|예의 바르게 행동해.

5-18|low|[형] 낮은|a low voice|낮은 목소리
5-18|below|[전][부] ~ 아래에|below the old tree|오래된 나무 아래
5-18|yellow|[형] 노란 [명] 노란색|Red, yellow, and green.|빨강, 노랑 그리고 초록
5-18|follow|[동] 따라가다|follow the rules|규칙을 따르다
5-18|pillow|[명] 베개|a soft pillow|부드러운 베개
5-18|narrow|[형] 좁은|The path is narrow.|그 길은 좁아.
5-18|borrow|[동] 빌리다|Can I borrow your eraser?|지우개 빌려줄래?
5-18|tomorrow|[명] 내일|Tomorrow is my birthday.|내일은 내 생일이야.
5-18|as|[부] ~으로, ~로서|as a doctor|의사로서
5-18|reason|[명] 이유, 이성|a good reason|좋은 이유
5-18|season|[명] 계절|There are four seasons.|사계절이 있어.
5-18|poison|[명] 독|Snakes have poison.|뱀은 독이 있어.
5-18|forget|[동] 잊다|Don't forget.|잊지 마.
5-18|forgive|[동] 용서하다|Forgive me.|나를 용서해 줘.

5-19|stupid|[형] 바보 같은, 어리석은|a stupid person|어리석은 사람
5-19|student|[명] 학생|She's a good student.|그녀는 훌륭한 학생이야.
5-19|accident|[명] 사고, 사건|a car accident|차 사고
5-19|laugh|[동] 웃다|He made her laugh.|그는 그녀를 웃게 만들었어.
5-19|cough|[명] 기침|I have a cough.|나는 기침을 해.
5-19|enough|[형] 충분한|enough water|충분한 물
5-19|through|[전] ~을 통해|through the forest|숲을 가로질러
5-19|friend|[명] 친구|a true friend|진정한 친구
5-19|friendly|[형] 친근한|very friendly|아주 친절한
5-19|family|[명] 가족|with my family|내 가족과 함께
5-19|candle|[명] 양초|light a candle|촛불을 켜다
5-19|handle|[명] 손잡이|Hold the handle.|손잡이를 잡다.
5-19|middle|[형] 가운데|in the middle|가운데에
5-19|noodle|[명] 국수|eat noodles|면을 먹어.

5-20|salad|[명] 샐러드|eat salad|샐러드를 먹다
5-20|banana|[명] 바나나|I like bananas.|나는 바나나를 좋아해.
5-20|pajama|[명] 파자마|put on pajamas|잠옷을 입다
5-20|peace|[명] 평화|for world peace|세계 평화를 위해서
5-20|repeat|[동] 반복하다|repeat after me|따라 말해
5-20|record|[동] 기록하다|set a record|기록을 세우다
5-20|today|[명] 오늘|Today is my birthday.|오늘은 내 생일이야.
5-20|holiday|[명] 휴일|during the holiday|휴일 동안
5-20|yesterday|[명] 어제|yesterday morning|어제 아침
5-20|illness|[명] 질병|recover from illness|병에서 회복하다
5-20|business|[명] 사업|run a business|사업을 하다
5-20|prince|[명] 왕자|a prince|왕자
5-20|princess|[명] 공주|a princess|공주
5-20|stress|[명] 스트레스|too much stress|너무 많은 스트레스

5-21|total|[명] 총합|in total|총합하면
5-21|hospital|[명] 병원|in the hospital|병원에서
5-21|capital|[명] 수도|the capital of England|영국의 수도
5-21|captain|[명] 선장|The team has a captain.|그 팀에는 선장이 있어.
5-21|academy|[명] 학원|The academy gives lessons.|그 학원은 수업을 해.
5-21|ahead|[부] 앞쪽에|Walk ahead.|앞으로 걸어 가.
5-21|already|[부] 이미|already finished|이미 끝났어
5-21|the U.S.|[명] 미국|the U.S.|미국
5-21|the U.K.|[명] 영국|the U.K.|영국
5-21|A.M.|[명] 오전|at 8 A.M.|오전 8시에
5-21|P.M.|[명] 오후|at 9 P.M.|오후 9시에
5-21|P.E.|[명] 체육|P.E. class|체육 수업
5-21|Mr.|-씨|Mr. Smith|스미스 씨
5-21|Ms.|-씨|Ms. Johnson|존슨 씨

5-22|parent|[명] 부모|with my parents|부모님과 함께
5-22|talent|[명] 재능|a talent for painting|그림에 재능
5-22|fuel|[명] 연료|need fuel|연료가 필요해
5-22|cute|[형] 귀여운|a cute baby|귀여운 아기
5-22|use|[동] 사용하다|use a pen|펜을 쓰다
5-22|useful|[형] 유용한|very useful|아주 유용해
5-22|excuse|[명] 변명|Excuse me.|실례해요
5-22|rude|[형] 무례한|Don't be rude.|무례하게 굴지 마
5-22|thief|[명] 도둑|catch the thief|도둑을 잡다
5-22|field|[명] 들판|in the field|들판에서
5-22|field trip|[명] 견학|go on a field trip|현장학습 가다
5-22|believe|[동] 믿다|I believe you.|나는 너를 믿어
5-22|plastic|[명] 플라스틱|plastic bag|비닐봉지
5-22|fantastic|[형] 환상적인|fantastic show|환상적인 쇼

5-23|attack|[동] 공격하다|attack the enemy|적을 공격하다
5-23|snack|[명] 간식|a healthy snack|건강한 간식
5-23|snake|[명] 뱀|a snake|뱀
5-23|brake|[명] 브레이크|Use the brake.|브레이크를 사용해
5-23|smoke|[명] 연기|smoke in the air|공기 중의 연기
5-23|stone|[명] 돌|stepping stones|디딤돌
5-23|stove|[명] 가스레인지|on the stove|가스레인지 위에
5-23|above|[전] ~위에|above us|우리 위에
5-23|city|[명] 도시|a capital city|수도
5-23|forty|[명] 40|forty students|40명의 학생
5-23|fifty|[명] 50|fifty people|50명
5-23|empty|[형] 비어있는|empty bottle|빈 병
5-23|twenty|[명] 20|twenty minutes|20분
5-23|activity|[명] 활동|an activity|활동

5-24|hang|[동] 걸다, 매달다|Hang the coat.|코트를 걸어놓아.
5-24|anger|[명] 분노|control anger|분노를 통제하다
5-24|finger|[명] 손가락|ten fingers|열 손가락
5-24|hall|[명] 홀, 복도|the city hall|시청
5-24|football|[명] 미식축구|a football game|미식축구 경기
5-24|baseball|[명] 야구|watch a baseball game|야구 게임을 보다
5-24|basket|[명] 바구니|in the basket|바구니 안에
5-24|basketball|[명] 농구|play basketball|농구를 하다
5-24|supermarket|[명] 슈퍼마켓|go to the supermarket|슈퍼마켓에 가다
5-24|angel|[명] 천사|a cute angel|귀여운 천사
5-24|orange|[명] 오렌지|eat an orange|오렌지를 먹다
5-24|change|[동] 바꾸다 [명] 변화|change my style|스타일을 바꾸다
5-24|strange|[형] 이상한|That's strange.|이상하네.
5-24|straight|[부][형] 곧장, 곧은|Go straight.|곧장 가.

5-25|Spain|[명] 스페인|in Spain|스페인에서
5-25|pain|[명] 고통|feel pain|고통을 느끼다
5-25|explain|[동] 설명하다|explain the rule|규칙을 설명하다
5-25|nephew|[명] 조카|my nephew|나의 조카
5-25|graph|[명] 그래프|draw a graph|그래프를 그리다
5-25|dolphin|[명] 돌고래|a smart dolphin|똑똑한 돌고래
5-25|if|[접] 만약 ~라면|If it rains|만약 비가 오면
5-25|of|[전] ~의|a cup of water|물 한 컵
5-25|off|[부][전] 떨어져|turn off the light|불을 끄다
5-25|take off|[동] 이륙하다|The plane will take off.|비행기가 이륙해.
5-25|mistake|[명] 실수|make a mistake|실수하다
5-25|death|[명] 죽음|fear of death|죽음에 대한 두려움
5-25|health|[명] 건강|good health|건강
5-25|healthy|[형] 건강한|healthy food|건강한 음식

5-26|sure|[형] 확실한|Are you sure?|확실해?
5-26|future|[명] 미래|in the future|미래에
5-26|nature|[명] 자연|in nature|자연 속에서
5-26|picture|[명] 사진|take a picture|사진을 찍다
5-26|culture|[명] 문화|different cultures|다양한 문화
5-26|difficult|[형] 어려운|It's difficult.|어려워.
5-26|furniture|[명] 가구|new furniture|새 가구
5-26|gesture|[명] 몸짓|a kind gesture|친절한 몸짓
5-26|adventure|[명] 모험|an adventure|모험
5-26|treasure|[명] 보물|hidden treasure|숨겨진 보물
5-26|pleasure|[명] 기쁨|My pleasure.|천만에요.
5-26|toothache|[명] 치통|have a toothache|치통이 있다
5-26|headache|[명] 두통|have a headache|두통이 있다
5-26|stomachache|[명] 복통|have a stomachache|복통이 있다

5-27|wind|[명] 바람|strong wind|강한 바람
5-27|windy|[형] 바람 부는|It's windy.|바람이 분다
5-27|cloud|[명] 구름|clouds in the sky|하늘의 구름
5-27|cloudy|[형] 흐린|It's cloudy.|흐리다
5-27|sunny|[형] 맑은|It's sunny.|맑다
5-27|funny|[형] 웃긴|a funny movie|웃긴 영화
5-27|rain|[명][동] 비|heavy rain|폭우
5-27|rainy|[형] 비 오는|It's rainy.|비가 온다
5-27|snow|[명][동] 눈|snow falls|눈이 내리다
5-27|snowy|[형] 눈 오는|It's snowy.|눈이 온다
5-27|candy|[명] 사탕|eat candy|사탕을 먹다
5-27|study|[동] 공부하다|study English|영어 공부하다
5-27|tour|[명] 여행|a city tour|도시 여행
5-27|during|[전] ~동안|during class|수업 중에

5-28|simple|[형] 간단한|It's simple.|간단해.
5-28|temple|[명] 사원|a Buddhist temple|사원
5-28|people|[명] 사람들|many people|많은 사람들
5-28|couple|[명] 커플|a happy couple|행복한 커플
5-28|cousin|[명] 사촌|my cousin|나의 사촌
5-28|double|[명][형] 두 배|double size|두 배 크기
5-28|possible|[형] 가능한|Is it possible?|가능해?
5-28|terrible|[형] 끔찍한|terrible weather|끔찍한 날씨
5-28|class|[명] 수업|in class|수업 중에
5-28|classroom|[명] 교실|enter the classroom|교실에 들어가다
5-28|classmate|[명] 반친구|my classmate|반친구
5-28|graduate|[동] 졸업하다|graduate from school|학교를 졸업하다
5-28|lottery|[명] 복권|win the lottery|복권에 당첨되다
5-28|battery|[명] 배터리|low battery|배터리가 부족해

5-29|two|[명] 숫자 2|two apples|사과 두 개
5-29|woman|[명] 여자|a woman doctor|여의사
5-29|human|[명] 인간|human rights|인권
5-29|humor|[명] 유머|sense of humor|유머 감각
5-29|huge|[형] 거대한|a huge animal|거대한 동물
5-29|bridge|[명] 다리|cross the bridge|다리를 건너다
5-29|village|[명] 마을|a small village|작은 마을
5-29|image|[명] 이미지|a clear image|선명한 이미지
5-29|college|[명] 대학|go to college|대학에 가다
5-29|comedy|[명] 코미디|a comedy movie|코미디 영화
5-29|side|[명] 옆, 측면|on the side|옆에
5-29|beside|[전] ~옆에|beside me|내 옆에
5-29|inside|[부] 안으로|go inside|안으로 가다
5-29|outside|[부] 밖에|play outside|밖에서 놀다

5-30|young|[형] 어린|a young child|어린 아이
5-30|receipt|[명] 영수증|keep the receipt|영수증을 보관하다
5-30|ceiling|[명] 천장|on the ceiling|천장에
5-30|earring|[명] 귀걸이|wear earrings|귀걸이를 차다
5-30|minute|[명] 분|wait a minute|잠깐 기다려
5-30|million|[명] 백만|a million people|백만 명
5-30|melon|[명] 멜론|sweet melon|달콤한 멜론
5-30|watermelon|[명] 수박|eat watermelon|수박을 먹다
5-30|second|[명][형] 초, 두 번째|second grade|2학년
5-30|month|[명] 달|every month|매달
5-30|Monday|[명] 월요일|on Monday|월요일에
5-30|blood|[명] 피|blood test|피 검사
5-30|flood|[명] 홍수|a big flood|큰 홍수
5-30|flag|[명] 깃발|national flag|국기

5-31|local|[형] 지역의|local market|지역 시장
5-31|social|[형] 사회의|social studies|사회 과목
5-31|special|[형] 특별한|a special day|특별한 날
5-31|festival|[명] 축제|music festival|음악 축제
5-31|global|[형] 세계적인|global warming|지구 온난화
5-31|real|[형] 진짜의|a real story|진짜 이야기
5-31|dial|[명][동] 다이얼, 전화 걸다|dial the number|번호를 누르다
5-31|dialogue|[명] 대화|have a dialogue|대화를 나누다
5-31|usual|[형] 평소의|usual day|평소의 하루
5-31|usually|[부] 보통|I usually walk.|나는 보통 걷는다
5-31|machine|[명] 기계|use a machine|기계를 사용하다
5-31|magician|[명] 마술사|a magician|마술사
5-31|musician|[명] 음악가|a musician|음악가
5-31|ocean|[명] 바다|the ocean|바다

5-32|stick|[명] 막대기|a wooden stick|나무 막대기
5-32|chopstick|[명] 젓가락|use chopsticks|젓가락을 쓰다
5-32|happen|[동] 일어나다|What happened?|무슨 일이 있었어?
5-32|eleven|[명] 숫자 11|eleven players|11명의 선수
5-32|heaven|[명] 천국|go to heaven|천국에 가다
5-32|seven|[명] 숫자 7|seven days|7일
5-32|seventy|[명] 70|seventy years|70년
5-32|nine|[명] 9|nine cats|고양이 9마리
5-32|ninety|[명] 90|ninety minutes|90분
5-32|excite|[동] 흥분시키다|excite people|사람들을 흥분시키다
5-32|excited|[형] 신난|be excited|신나다
5-32|exciting|[형] 신나는|an exciting game|신나는 경기
5-32|wedding|[명] 결혼식|a wedding|결혼식
5-32|Wednesday|[명] 수요일|on Wednesday|수요일에

5-33|fail|[동] 실패하다|fail the test|시험에 실패하다
5-33|aid|[명] 도움|first aid|응급처치
5-33|afraid|[형] 두려운|be afraid of dogs|개를 무서워하다
5-33|again|[부] 다시|try again|다시 해봐
5-33|against|[전] ~에 반대하여|against the rule|규칙에 반대하여
5-33|crab|[명] 게|a crab|게
5-33|clap|[동] 박수치다|clap your hands|손뼉 치다
5-33|laptop|[명] 노트북|use a laptop|노트북을 쓰다
5-33|sign|[명][동] 표지, 서명하다|sign here|여기에 서명해
5-33|design|[동][명] 디자인하다|design clothes|옷을 디자인하다
5-33|designer|[명] 디자이너|a fashion designer|패션 디자이너
5-33|campaign|[명] 캠페인|a campaign|캠페인
5-33|scissors|[명] 가위|use scissors|가위를 쓰다
5-33|muscle|[명] 근육|strong muscles|강한 근육

5-34|singer|[명] 가수|a famous singer|유명한 가수
5-34|teacher|[명] 선생님|my teacher|나의 선생님
5-34|monster|[명] 괴물|a scary monster|무서운 괴물
5-34|theater|[명] 극장|go to the theater|극장에 가다
5-34|Jupiter|[명] 목성|Jupiter is big.|목성은 크다
5-34|guitar|[명] 기타|play the guitar|기타를 연주하다
5-34|biscuit|[명] 비스킷|eat biscuits|비스킷을 먹다
5-34|build|[동] 짓다|build a house|집을 짓다
5-34|building|[명] 건물|tall building|높은 건물
5-34|guide|[명] 안내자|tour guide|여행 가이드
5-34|idea|[명] 생각, 아이디어|good idea|좋은 생각
5-34|area|[명] 지역|this area|이 지역
5-34|Korea|[명] 한국|live in Korea|한국에 살다
5-34|Korean|[명][형] 한국인, 한국의|Korean food|한국 음식

5-35|boss|[명] 상사|my boss|나의 상사
5-35|chess|[명] 체스|play chess|체스를 하다
5-35|guess|[동] 추측하다|guess the answer|정답을 맞히다
5-35|guest|[명] 손님|welcome guests|손님을 맞다
5-35|discuss|[동] 토론하다|discuss the problem|문제를 토론하다
5-35|discover|[동] 발견하다|discover a fact|사실을 발견하다
5-35|deliver|[동] 배달하다|deliver food|음식을 배달하다
5-35|delicious|[형] 맛있는|delicious food|맛있는 음식
5-35|famous|[형] 유명한|a famous city|유명한 도시
5-35|curious|[형] 호기심 많은|a curious child|호기심 많은 아이
5-35|serious|[형] 진지한|a serious talk|진지한 대화
5-35|dangerous|[형] 위험한|dangerous road|위험한 길
5-35|danger|[명] 위험|in danger|위험에 처한
5-35|teenager|[명] 십대|teenagers|십 대들

5-36|corn|[명] 옥수수|sweet corn|달콤한 옥수수
5-36|corner|[명] 모퉁이|at the corner|모퉁이에
5-36|dinner|[명] 저녁|have dinner|저녁을 먹다
5-36|winner|[명] 승자|the winner|승자
5-36|soccer|[명] 축구|play soccer|축구를 하다
5-36|shower|[명] 샤워|take a shower|샤워를 하다
5-36|flower|[명] 꽃|a red flower|빨간 꽃
5-36|answer|[명][동] 답, 대답하다|answer the question|질문에 대답하다
5-36|jungle|[명] 정글|in the jungle|정글에서
5-36|angle|[명] 각도|right angle|직각
5-36|triangle|[명] 삼각형|draw a triangle|삼각형을 그리다
5-36|past|[명] 과거|in the past|과거에
5-36|forecast|[명] 예보|weather forecast|날씨 예보
5-36|breakfast|[명] 아침|eat breakfast|아침을 먹다

5-37|Venus|[명] 금성|Venus is bright.|금성은 밝다
5-37|minus|[명] 빼기|ten minus two|10에서 2를 빼다
5-37|plus|[명][동] 더하기|ten plus two|10에 2를 더하다
5-37|club|[명] 동아리|join a club|동아리에 가입하다
5-37|clerk|[명] 점원|a store clerk|가게 점원
5-37|enter|[동] 들어가다|enter the room|방에 들어가다
5-37|center|[명] 중심|the center of town|도시의 중심
5-37|cinema|[명] 영화관|go to the cinema|영화관에 가다
5-37|medicine|[명] 약|take medicine|약을 먹다
5-37|cliff|[명] 절벽|high cliff|높은 절벽
5-37|staff|[명] 직원|hotel staff|호텔 직원
5-37|giraffe|[명] 기린|tall giraffe|키 큰 기린
5-37|traffic|[명] 교통|heavy traffic|교통체증
5-37|traffic light|[명] 신호등|traffic lights|신호등

5-38|hunt|[동] 사냥하다|hunt animals|사냥하다
5-38|hundred|[명] 100|a hundred people|100명
5-38|Sunday|[명] 일요일|on Sunday|일요일에
5-38|Tuesday|[명] 화요일|next Tuesday|다음 주 화요일
5-38|Friday|[명] 금요일|this Friday|이번 주 금요일
5-38|prime|[형] 최상의|prime beef|최상급 소고기
5-38|crime|[명] 범죄|solve a crime|범죄를 해결하다
5-38|crown|[명] 왕관|wear a crown|왕관을 쓰다
5-38|crowd|[명] 군중|big crowd|큰 군중
5-38|crowded|[형] 붐비는|crowded street|붐비는 거리
5-38|put on|[동] 입다|put on shoes|신발을 신다
5-38|computer|[명] 컴퓨터|use a computer|컴퓨터를 쓰다
5-38|company|[명] 회사|big company|큰 회사
5-38|compass|[명] 나침반|use a compass|나침반을 사용하다

5-39|thing|[명] 물건|many things|많은 물건
5-39|nothing|[대] 아무것도|do nothing|아무것도 하지 않다
5-39|anything|[대] 무엇이든|anything is fine|아무거나 좋아
5-39|something|[대] 무언가|something new|새로운 무언가
5-39|sometimes|[부] 가끔|sometimes I walk|가끔 나는 걷는다
5-39|ghost|[명] 유령|see a ghost|유령을 보다
5-39|most|[대][형] 대부분|most people|대부분의 사람들
5-39|almost|[부] 거의|almost finished|거의 끝났어
5-39|also|[부] 또한|also good|또한 좋다
5-39|always|[부] 항상|always try|항상 노력하다
5-39|feed|[동] 먹이다|feed a dog|개에게 먹이를 주다
5-39|feeling|[명] 감정|good feeling|좋은 감정
5-39|three|[명] 3|three cats|고양이 세 마리
5-39|agree|[동] 동의하다|agree with you|너에게 동의해

5-40|list|[명] 목록|make a list|목록을 만들다
5-40|listen|[동] 듣다|listen to music|음악을 듣다
5-40|castle|[명] 성|old castle|오래된 성
5-40|fasten|[동] 고정하다|fasten seatbelt|안전벨트를 매다
5-40|Christmas|[명] 크리스마스|on Christmas|크리스마스에
5-40|bored|[형] 지루한, 심심한|I feel bored|나는 심심해.
5-40|boring|[형] 지루하게 하는|a boring class|지루한 수업
5-40|error|[명] 오류|make an error|실수를 하다
5-40|mirror|[명] 거울|look in the mirror|거울을 보다
5-40|eight|[명] 8|eight apples|사과 8개
5-40|eighty|[명] 80|eighty years|80년
5-40|weight|[명] 무게|lose weight|살을 빼다
5-40|neighbor|[명] 이웃|my neighbor|나의 이웃
5-40|neighborhood|[명] 동네|safe neighborhood|안전한 동네

5-41|surf|[동] 서핑하다|go surfing|서핑하러 가다
5-41|hurt|[동] 다치다|hurt my arm|팔을 다치다
5-41|burn|[동] 타다|burn wood|나무를 태우다
5-41|nurse|[명] 간호사|a kind nurse|친절한 간호사
5-41|turn|[동] 돌다|turn left|왼쪽으로 돌다
5-41|return|[동] 돌아가다|return home|집에 돌아가다
5-41|curly|[형] 곱슬의|curly hair|곱슬 머리
5-41|early|[부][형] 일찍, 이른|early morning|이른 아침
5-41|earth|[명] 지구|planet earth|지구
5-41|earn|[동] 벌다|earn money|돈을 벌다
5-41|learn|[동] 배우다|learn English|영어를 배우다
5-41|heart|[명] 심장|my heart|나의 심장
5-41|search|[동] 찾다|search for keys|열쇠를 찾다
5-41|research|[명] 연구|do research|연구하다

5-42|Mars|[명] 화성|Mars is red.|화성은 빨갛다
5-42|March|[명] 3월|in March|3월에
5-42|large|[형] 큰|large house|큰 집
5-42|garden|[명] 정원|flower garden|꽃 정원
5-42|garlic|[명] 마늘|garlic smell|마늘 냄새
5-42|public|[형] 공공의|public place|공공장소
5-42|puzzle|[명] 퍼즐|solve a puzzle|퍼즐을 풀다
5-42|punish|[동] 처벌하다|punish him|그를 처벌하다
5-42|October|[명] 10월|in October|10월에
5-42|November|[명] 11월|in November|11월에
5-42|December|[명] 12월|in December|12월에
5-42|September|[명] 9월|in September|9월에
5-42|system|[명] 체계|school system|학교 제도
5-42|solar system|[명] 태양계|the solar system|태양계

5-43|exact|[형] 정확한|exact time|정확한 시간
5-43|exam|[명] 시험|take an exam|시험을 보다
5-43|example|[명] 예|for example|예를 들어
5-43|exercise|[명][동] 운동, 운동하다|do exercise|운동하다
5-43|advise|[동] 조언하다|advise students|학생에게 조언하다
5-43|advice|[명] 조언|ask for advice|조언을 구하다
5-43|proud|[형] 자랑스러운|be proud of|~를 자랑스러워하다
5-43|problem|[명] 문제|solve a problem|문제를 해결하다
5-43|promise|[명][동] 약속|keep a promise|약속을 지키다
5-43|favor|[명] 부탁|do me a favor|부탁 하나 해줘
5-43|favorite|[형] 가장 좋아하는|favorite food|가장 좋아하는 음식
5-43|select|[동] 선택하다|select one|하나를 고르다
5-43|elect|[동] 선출하다|elect a leader|대표를 뽑다
5-43|collect|[동] 모으다|collect stamps|우표를 모으다

5-44|expert|[명] 전문가|as an expert|전문가로서
5-44|concert|[명] 콘서트|go to a concert|콘서트에 가다
5-44|certain|[형] 확실한|be certain of|~를 확신하다
5-44|curtain|[명] 커튼|open the curtain|커튼을 열다
5-44|survive|[동] 생존하다|survive the accident|사고에서 살아남다
5-44|expect|[동] 기대하다|expect good results|좋은 결과를 기대하다
5-44|expensive|[형] 비싼|expensive bag|비싼 가방
5-44|experience|[명] 경험|new experience|새로운 경험
5-44|science|[명] 과학|science class|과학 수업
5-44|scientist|[명] 과학자|a famous scientist|유명한 과학자
5-44|dentist|[명] 치과의사|see a dentist|치과에 가다
5-44|artist|[명] 예술가|a great artist|위대한 예술가
5-44|express|[동] 표현하다|express feelings|감정을 표현하다
5-44|expression|[명] 표현|facial expression|얼굴 표정

5-45|until|[전] ~까지|until tomorrow|내일까지
5-45|still|[부] 여전히|still raining|여전히 비가 와
5-45|steal|[동] 훔치다|steal money|돈을 훔치다
5-45|invent|[동] 발명하다|invent something|무언가를 발명하다
5-45|insect|[명] 곤충|small insect|작은 곤충
5-45|subject|[명] 과목, 주제|favorite subject|좋아하는 과목
5-45|project|[명] 프로젝트|school project|학교 프로젝트
5-45|protect|[동] 보호하다|protect animals|동물을 보호하다
5-45|program|[명] 프로그램|TV program|TV 프로그램
5-45|prefer|[동] 선호하다|prefer tea|차를 선호하다
5-45|president|[명] 대통령|the president|대통령
5-45|present|[명][형] 선물, 현재의|birthday present|생일 선물
5-45|absent|[형] 결석한|be absent|결석하다
5-45|accent|[명] 억양|British accent|영국식 억양

5-46|question|[명] 질문|ask a question|질문하다
5-46|nation|[명] 국가|strong nation|강한 국가
5-46|vacation|[명] 방학, 휴가|summer vacation|여름 방학
5-46|station|[명] 역|train station|기차역
5-46|stadium|[명] 경기장|big stadium|큰 경기장
5-46|museum|[명] 박물관|visit a museum|박물관을 방문하다
5-46|tradition|[명] 전통|Korean tradition|한국 전통
5-46|pollution|[명] 오염|air pollution|대기 오염
5-46|form|[명] 양식|fill out the form|양식을 작성하다
5-46|information|[명] 정보|get information|정보를 얻다
5-46|direction|[명] 방향|wrong direction|잘못된 방향
5-46|condition|[명] 상태|good condition|좋은 상태
5-46|continue|[동] 계속하다|continue studying|계속 공부하다
5-46|chocolate|[명] 초콜릿|chocolate cake|초콜릿 케이크

5-47|bright|[형] 밝은|bright light|밝은 빛
5-47|might|[조] ~일지도|might rain|비 올지도 몰라
5-47|night|[명] 밤|at night|밤에
5-47|tonight|[부] 오늘 밤|tonight show|오늘 밤 공연
5-47|firefighter|[명] 소방관|brave firefighter|용감한 소방관
5-47|daughter|[명] 딸|my daughter|나의 딸
5-47|doughnut|[명] 도넛|eat a doughnut|도넛을 먹다
5-47|wonder|[동] 궁금해하다|wonder why|왜인지 궁금해하다
5-47|shoulder|[명] 어깨|hurt my shoulder|어깨가 아프다
5-47|member|[명] 멤버|team member|팀 멤버
5-47|remember|[동] 기억하다|remember the rule|규칙을 기억하다
5-47|wonderful|[형] 멋진|wonderful day|멋진 하루
5-47|beautiful|[형] 아름다운|beautiful flower|아름다운 꽃
5-47|beauty|[명] 아름다움, 미 |the beauty and the beast|미녀와 야수

5-48|twice|[부] 두 번|twice a week|일주일에 두 번
5-48|price|[명] 가격|high price|높은 가격
5-48|office|[명] 사무실|work in the office|사무실에서 일하다
5-48|police|[명] 경찰|The police caught the thief.|경찰이 도둑을 잡았어.
5-48|police office|[명] 경찰서|at the police office|경찰서에서
5-48|practice|[명] 연습 [동] 연습하다, 실행하다|Practice makes perfect.|연습이 완벽을 만든다.
5-48|introduce|[동] 소개하다|Let me introduce myself.|내 소개를 할게.
5-48|difference|[명] 차이(점)|tell the difference|차이점을 말하다
5-48|different|[형] 다른|different types of ice cream|다른 종류의 아이스크림
5-48|excellent|[형] 훌륭한|do an excellent job|멋진 일을 하다
5-48|blouse|[명] 블라우스|My sister bought a new blouse.|나의 여동생은 새로운 블라우스를 샀어.
5-48|thousand|[명] 숫자 1000|a thousand stars|천 개의 별들
5-48|husband|[명] 남편|a husband and a wife|남편과 아내
5-48|island|[명] 섬|on island|섬에

5-49|engine|[명] 엔진|a car's engine|자동차 엔진
5-49|engineer|[명] 엔지니어, 기술자|I want to be a car engineer.|나는 자동차 엔지니어가 되고 싶어.
5-49|report|[명] 보고서|write a report|보고서를 쓰다
5-49|reporter|[명] 기자|The reporter interviewed people.|기자는 사람들을 인터뷰했어.
5-49|important|[형] 중요한|important lessons|중요한 교훈
5-49|square|[명] 정사각형, 광장|a large square|큰 광장
5-49|scared|[형] 겁먹은|I'm scared of water.|나는 물이 무서워.
5-49|Saturday|[명] 토요일|It's Saturday.|토요일이야.
5-49|Thursday|[명] 목요일|It's Thursday.|목요일이야.
5-49|surprise|[동] 놀라게 하다 [명] 놀람|Surprise!|놀랐지!
5-49|surprised|[형] 놀란|be surprised at|~에 놀라다
5-49|surprising|[형] 놀라운, 놀랄 만한|The magic show was surprising.|마술쇼는 놀라웠어.
5-49|create|[동] 창조하다|Artists create beautiful paintings.|화가는 멋진 그림을 만들어.
5-49|recreation|[명] 여가 활동|Playing sports is a form of recreation.|운동하는 것은 여가 활동이야.

5-50|tennis|[명] 테니스|play tennis|테니스를 치다
5-50|rest|[명] 휴식 [동] 쉬다|take a rest|휴식을 취하다
5-50|restroom|[명] 화장실|Where is the bathroom?|화장실이 어디예요?
5-50|forest|[명] 숲|in the forest|숲 속에서
5-50|interest|[명] 관심 [동] 흥미를 갖게 하다|The movie interested me.|그 영화가 나의 관심을 끌었어.
5-50|interested|[형] 관심 있는, 흥미 있는|be interested in|~에 관심이 있다
5-50|interesting|[형] 흥미로운|an interesting movie|흥미로운 영화
5-50|restaurant|[명] 식당|I like this restaurant.|나는 이 식당을 좋아해.
5-50|because|[접] 왜냐하면, ~하기 때문에|I like autumn because it's cool.|나는 가을을 좋아해 왜냐하면 시원하니까.
5-50|August|[명] 8월|in August|8월에
5-50|autumn|[명] 가을|in autumn|가을에
5-50|fault|[명] 결점|It's my fault.|그건 나의 잘못이야.
5-50|quiet|[형] 조용한|Be quiet.|조용히 해.
5-50|society|[명] 사회|in society|사회에서

5-51|sweat|[명] 땀 [동] 땀을 흘리다|I sweat on my forehead.|나는 이마에서 땀을 흘렸어.
5-51|sweater|[명] 스웨터|I want this sweater.|나는 이 스웨터를 원해요.
5-51|weather|[명] 날씨|How's the weather?|날씨가 어때?
5-51|other|[형] 다른|from other countries|다른 나라에서
5-51|another|[형] 또 다른|another one|또 다른 것
5-51|gather|[동] 모으다, 모이다|Let's gather our toys.|장난감을 모으자.
5-51|together|[명] 함께|We can build a sandcastle together.|우리는 모래성을 함께 만들 수 있어.
5-51|grandmother|[명] 할머니|This is my grandmother.|이 분은 나의 할머니 셔.
5-51|grandfather|[명] 할아버지|He's my grandfather.|그분은 나의 할아버지 셔.
5-51|grandparent|[명] 조부모|visit grandparents|조부모님을 방문하다
5-51|patrol|[동] 순찰하다|patrol the building|건물을 순찰하다
5-51|control|[동] 통제하다|control oneself|자신을 통제하다
5-51|count|[동] 세다|Can you count them?|너는 그것들을 셀 수 있니?
5-51|discount|[명] 할인|Can I get a discount?|제가 할인을 받을 수 있나요?

5-52|popular|[형] 인기 있는|They are popular singers.|그들은 유명한 가수야.
5-52|calendar|[명] 달력|Look at the calendar.|달력을 봐.
5-52|elementary|[명] 초등|elementary school|초등학교
5-52|diary|[명] 다이어리|keep a diary|일기를 쓰다
5-52|library|[명] 도서관|go to the library|도서관에 가다
5-52|dictionary|[명] 사전|look up the dictionary|사전을 찾아보다
5-52|January|[명] 1월|It's January.|1월이야.
5-52|February|[명] 2월|It's February.|2월이야.
5-52|telephone|[명] 전화|We used telephones.|우리는 전화를 사용했다.
5-52|telescope|[명] 망원경|with a telescope|망원경으로
5-52|television|[명] 텔레비전|watch television|텔레비전을 보다
5-52|technology|[명] 기술|a new technology|새로운 기술
5-52|energy|[명] 에너지|wind energy|바람 에너지
5-52|partner|[명] 파트너, 동업자|I need a partner.|나는 파트너가 필요해.

5-53|fourteen|[명] (숫자) 14|I have fourteen cousins.|나는 14명의 사촌이 있어.
5-53|fifteen|[명] (숫자) 15|I have fifteen friends.|나는 15명의 친구가 있어.
5-53|software|[명] 소프트웨어|We use special software.|우리는 특별한 소프트웨어를 사용해.
5-53|care|[동] 보살피다 [명] 돌봄|take care of|~을 보살피다
5-53|careful|[형] 조심스러운, 주의 깊은|Be careful.|조심해.
5-53|harmful|[형] 해로운|Smoking is harmful.|담배 피우는 것은 해로워.
5-53|farm|[명] 농장|We saw many animals in the farm.|우리는 농장에서 많은 동물을 봤어.
5-53|farmer|[명] 농부|The farmer grows vegetables.|농부는 야채를 기른다.
5-53|customer|[명] 고객|The clerk helped customers.|점원은 손님들을 도왔어.
5-53|Mercury|[명] 수성|Mercury is the smallest planet.|수성은 가장 작은 행성이야.
5-53|board|[명] 판자, 보드|on the board|보드에
5-53|internet|[명] 인터넷|on the internet|인터넷에서
5-53|international|[형] 국제적인|an international language|국제적인 언어
5-53|national|[형] 국가적인|a national holiday|국경일

5-54|China|[명] 중국|in China|중국에서
5-54|Chinese|[형] 중국의 [명] 중국인, 중국어|I can speak Chinese.|나는 중국어를 할 수 있어.
5-54|America|[명] 미국|the Statue of Liberty in America|미국에 있는 자유의 여신상
5-54|American|[형] 미국의 [명] 미국인|American culture|미국의 문화
5-54|Japan|[명] 일본|in Japan|일본에서
5-54|Japanese|[형] 일본의 [명] 일본인, 일본어|She can speak Japanese.|그녀는 일본어를 할 수 있어.
5-54|Canada|[명] 캐나다|in Canada|캐나다에서
5-54|Canadian|[형] 캐나다의 [명] 캐나다인|I have a Canadian friend.|나는 캐나다인 친구가 있어.
5-54|France|[명] 프랑스|in France|프랑스에서
5-54|French|[형] 프랑스의 [명] 프랑스인, 프랑스어|French toast|프렌치토스트
5-54|Germany|[명] 독일|In Germany|독일에서
5-54|German|[형] 독일의 [명] 독일인, 독일어|They can speak German.|그들은 독일어를 할 수 있어.
5-54|congratulate|[동] 축하하다|I want to congratulate you on your birthday.|나는 너의 생일을 축하해주고 싶어.
5-54|Congratulations!|축하해!|Congratulations!|축하해!

5-55|should|[조] 해야 한다|You should finish your homework.|너는 너의 숙제를 끝내야 해.
5-55|could|[조] 할 수 있다, 해 주세요|Could you help me?|너는 나를 도와줄 수 있니?
5-55|spend|[동] 소비하다|Let's spend the weekend at the beach.|해변에서 주말을 보내자.
5-55|recommend|[동] 추천하다|Can you recommend a good place?|너는 좋은 장소를 추천해 줄 수 있니?
5-55|apartment|[명] 아파트|live in a apartment|아파트에서 살다
5-55|environment|[명] 환경|protect the environment|환경을 보호하다
5-55|amusement park|[명] 놀이 공원|in the amusement park|놀이동산에서
5-55|country|[명] 나라, 시골|Canada is a beautiful country.|캐나다는 아름다운 나라야.
5-55|countryside|[명] 시골, 지방|in the countryside|시골에서
5-55|decide|[동] 결정하다|I can't decide between pizza and pasta.|나는 피자랑 파스타 중에 결정 못하겠어.
5-55|divide|[동] 나누다|Let's divide the cake.|케이크를 나누자.
5-55|twenty-first|[명] 스물한 번째|in the twenty-first century|21세기에
5-55|twenty-second|[명] 스물두 번째|on the twenty-second floor|22층에
5-55|twenty-third|[명] 스물세 번째|on the twenty-third of this month|이번달 23일에

5-56|honest|[형] 정직한|She is very honest.|그녀는 매우 정직해.
5-56|destroy|[동] 파괴하다|The storms destroyed the village.|폭풍이 마을을 파괴했어.
5-56|connect|[동] 연결하다|connect the computer to the internet|컴퓨터를 인터넷에 연결하다
5-56|disconnect|[동] 끊다, 분리하다|disconnect the computer from the internet|컴퓨터를 인터넷 연결을 끊다
5-56|however|[부] 그러나|I wanted to go to the park; however, it started raining.|하지만 비가 오기 시작했어.
5-56|forever|[부] 영원히|They lived happily forever.|그들은 영원히 행복하게 살았어.
5-56|foreign|[형] 외국의|a foreign country|외국
5-56|foreigner|[명] 외국인|a foreigner from Japan|일본에서 온 외국인
5-56|language|[명] 언어|learn a new language|새로운 언어를 배우다
5-56|foreign language|[명] 외국어|Spanish is a foreign language.|스페인어는 외국어이다.
5-56|rule|[명] 규칙|follow the rules|규칙을 따르다
5-56|ruler|[명] 자, 지배자|I have a ruler and a eraser.|나는 자와 지우개를 가지고 있어.
5-56|schedule|[명] 일정|Check your schedule.|너의 일정을 확인해.
5-56|spaghetti|[명] 스파게티|cook delicious spaghetti|맛있는 스파게티를 요리하다

6-1|study|공부하다|I study English every day.|나는 매일 영어를 공부한다.
6-1|remember|기억하다|I cannot remember the name.|나는 그 이름을 기억할 수 없다.
6-1|subject|과목|My favorite subject is art.|내가 가장 좋아하는 과목은 미술이다.
6-1|math|수학|Math is a difficult subject.|수학은 어려운 과목이다.
6-1|science|과학|We learn about animals in science.|우리는 과학 시간에 동물에 대해 배운다.
6-1|art|미술|She is good at art.|그녀는 미술을 잘한다.
6-1|history|역사|We read a book about history.|우리는 역사에 대한 책을 읽는다.
6-1|English|영어|I want to speak English well.|나는 영어를 잘 말하고 싶다.
6-1|exam|시험[e]|I must prepare for the exam.|나는 시험을 준비해야 한다.
6-1|test|시험[t]|We will have a test tomorrow.|우리는 내일 시험을 볼 것이다.
6-1|write|쓰다|Please write your name here.|여기에 당신의 이름을 써 주세요.
6-1|ask|묻다|Don't be afraid to ask.|묻는 것을 두려워하지 마라.
6-1|question|질문, 문제|I have one question.|나는 질문이 하나 있다.
6-1|answer|답, 답하다|I know the answer.|나는 답을 안다.
6-1|easy|쉬운|This game is very easy.|이 게임은 매우 쉽다.
6-1|difficult|어려운|The final exam was difficult.|기말고사는 어려웠다.
6-2|school|학교|I go to school.|나는 학교에 간다.
6-2|student|학생|I am a student.|나는 학생이다.
6-2|classmate|반 친구|I study with my classmate.|나는 반 친구와 공부한다.
6-2|group|그룹, 단체|Let's work in a group.|그룹으로 일하자.
6-2|dictionary|사전|I use the dictionary.|나는 사전을 사용한다.
6-2|textbook|교과서|I read the textbook.|나는 교과서를 읽는다.
6-2|teach|가르치다|The teacher can teach well.|선생님은 잘 가르치실 수 있다.
6-2|introduce|소개하다|I introduce my family.|나는 나의 가족을 소개한다.
6-2|playground|놀이터, 운동장|We play in the playground.|우리는 놀이터에서 논다.
6-2|classroom|교실|Our classroom is large.|우리의 교실은 크다.
6-2|lesson|수업|I like this lesson.|나는 이 수업이 좋다.
6-2|class|수업, 학급|My class is fun.|나의 학급은 재미있다.
6-2|name|이름|My name is long.|나의 이름은 길다.
6-2|desk|책상|My desk is clean.|나의 책상은 깨끗하다.
6-2|chair|의자|Please sit on the chair.|의자에 앉으세요.
6-2|learn|배우다|I learn new words.|나는 새로운 단어를 배운다.
6-3|use|사용하다|Can I use this pen?|이 펜을 사용해도 되니?
6-3|borrow|빌리다|I want to borrow a book.|나는 책을 빌리고 싶다.
6-3|lose|잃어버리다|Don't lose your money.|돈을 잃어버리지 마라.
6-3|eraser|지우개|Use an eraser to clean it.|지우개로 지워라.
6-3|ruler|자|The ruler is straight.|그 자는 곧다.
6-3|tape|테이프|I need some tape.|나는 테이프가 좀 필요하다.
6-3|scissors|가위|The scissors cut paper.|가위는 종이를 자른다.
6-3|glue|풀|Stick it with glue.|풀로 그것을 붙여라.
6-3|paper|종이|Write on the paper.|종이에 써라.
6-3|notebook|공책|Open your notebook.|공책을 펼쳐라.
6-3|sketchbook|스케치북|I draw in my sketchbook.|나는 스케치북에 그림을 그린다.
6-3|pen|펜|This is a red pen.|이것은 빨간 펜이다.
6-3|pencil|연필|Sharpen your pencil.|연필을 깎아라.
6-3|pencil case|필통|Put the pen in the pencil case.|펜을 필통에 넣어라.
6-3|crayon|크레파스, 크레용|Use a yellow crayon.|노란색 크레용을 사용해라.
6-3|brush|붓|Wash the brush.|붓을 씻어라.
6-4|grade|학년, 성적|I am in the first grade.|나는 1학년이다.
6-4|line|선|Draw a straight line.|직선을 그려라.
6-4|page|페이지, 쪽|Open page ten.|10페이지를 펴라.
6-4|second|두 번째의|This is the second time.|이번이 두 번째다.
6-4|fourth|네 번째의|He came in fourth.|그는 4등으로 들어왔다.
6-4|first|첫 번째의|She is the first student.|그녀는 첫 번째 학생이다.
6-4|third|세 번째의|It is the third door.|세 번째 문이다.
6-4|fifth|다섯 번째의|Today is the fifth day.|오늘은 5일째다.
6-4|floor|바닥, 층|Sit on the floor.|바닥에 앉아라.
6-4|level|수준, 정도|What is your level?|너의 수준은 무엇이니?
6-4|list|목록|Make a shopping list.|쇼핑 목록을 만들어라.
6-4|sixth|여섯 번째의|It is the sixth month.|6번째 달이다.
6-4|seventh|일곱 번째의|This is the seventh book.|이것은 7번째 책이다.
6-4|eighth|여덟 번째의|It is my eighth birthday.|나의 8번째 생일이다.
6-4|ninth|아홉 번째의|He is the ninth player.|그는 9번째 선수다.
6-4|tenth|열 번째의|It is the tenth question.|10번째 질문이다.
6-5|wear|입다|I wear a hat.|나는 모자를 쓴다.
6-5|shirt|셔츠|He wears a white shirt.|그는 흰 셔츠를 입는다.
6-5|blouse|블라우스|She likes her blouse.|그녀는 자신의 블라우스를 좋아한다.
6-5|sweater|스웨터|It is warm sweater.|따뜻한 스웨터이다.
6-5|clothes|옷|Put on your clothes.|옷을 입어라.
6-5|pajamas|잠옷|I sleep in my pajamas.|나는 잠옷을 입고 잔다.
6-5|size|크기, 치수|What is your size?|너의 사이즈는 몇이니?
6-5|new|새로운|I bought new shoes.|나는 새 신발을 샀다.
6-5|put on|입다, 쓰다, 신다|Put on your coat.|코트를 입어라.
6-5|take off|벗다|Take off your shoes.|신발을 벗어라.
6-5|jacket|재킷|Wear a jacket outside.|밖에서는 재킷을 입어라.
6-5|coat|코트, 외투|It is cold, so wear a coat.|추우니까 코트를 입어라.
6-5|dress|원피스, 드레스|The dress is pretty.|그 드레스는 예쁘다.
6-5|skirt|치마|She wears a pink skirt.|그녀는 분홍색 치마를 입는다.
6-5|pants|바지|My pants are blue.|나의 바지는 파란색이다.
6-5|jeans|청바지|I like wearing jeans.|나는 청바지 입는 것을 좋아한다.
6-6|pair|쌍, 짝|I have a pair of gloves.|나는 장갑 한 켤레가 있다.
6-6|socks|양말|Put on your socks.|양말을 신어라.
6-6|gloves|장갑, 글러브|Wear gloves in winter.|겨울에는 장갑을 껴라.
6-6|earrings|귀걸이|Her earrings shine.|그녀의 귀걸이가 빛난다.
6-6|shoes|신발|My shoes are old.|나의 신발은 낡았다.
6-6|boots|부츠, 장화|Use rain boots today.|오늘은 장화를 신어라.
6-6|necklace|목걸이|The necklace is gold.|그 목걸이는 금이다.
6-6|ring|반지|He gave her a ring.|그는 그녀에게 반지를 주었다.
6-6|hat|모자|The hat covers my head.|모자가 내 머리를 덮는다.
6-6|cap|모자(챙 있는)|He wears a baseball cap.|그는 야구 모자를 쓴다.
6-6|belt|벨트|Fasten your belt.|벨트를 매라.
6-6|watch|손목시계|Look at your watch.|너의 시계를 봐라.
6-6|tie|넥타이|Dad wears a tie.|아빠는 넥타이를 매신다.
6-6|ribbon|리본|The gift has a ribbon.|선물에 리본이 있다.
6-6|button|단추|Push the button.|단추를 눌러라.
6-6|pocket|주머니|My pocket is empty.|내 주머니는 비었다.
6-7|eat|먹다|Let's eat lunch.|점심 먹자.
6-7|breakfast|아침 식사|I eat breakfast at 7.|나는 7시에 아침을 먹는다.
6-7|lunch|점심 식사|What is for lunch?|점심 메뉴가 뭐니?
6-7|dinner|저녁 식사|We cook dinner together.|우리는 저녁을 함께 요리한다.
6-7|pizza|피자|I love cheese pizza.|나는 치즈 피자를 좋아한다.
6-7|hamburger|햄버거|The hamburger is big.|그 햄버거는 크다.
6-7|salad|샐러드|Salad is healthy.|샐러드는 건강에 좋다.
6-7|soup|수프|The soup is hot.|수프가 뜨겁다.
6-7|food|음식|Do you like Korean food?|한국 음식을 좋아하니?
6-7|bread|빵|I bake bread.|나는 빵을 굽는다.
6-7|cookie|쿠키|This cookie is sweet.|이 쿠키는 달콤하다.
6-7|drink|마시다|Drink some water.|물을 좀 마셔라.
6-7|water|물|Give me cold water.|찬물을 주세요.
6-7|milk|우유|Milk is white.|우유는 하얗다.
6-7|juice|주스|I want orange juice.|나는 오렌지 주스를 원한다.
6-7|tea|차|Do you drink tea?|차를 마시니?
6-8|in|~ 안에|The ball is in the box.|공이 상자 안에 있다.
6-8|out|~ 밖으로|Go out and play.|나가서 놀아라.
6-8|on|~ 위에|The cup is on the table.|컵이 탁자 위에 있다.
6-8|into|~ 안으로|Come into the room.|방 안으로 들어와라.
6-8|under|~ 아래에, ~ 밑에|The cat is under the chair.|고양이가 의자 아래에 있다.
6-8|below|~ 아래에|Look at the picture below.|아래 그림을 봐라.
6-8|by|~ 옆에|Stand by me.|내 옆에 서라.
6-8|over|~ 너머, ~ 위쪽에|Jump over the fence.|울타리를 넘어 점프해라.
6-8|bottom|맨 아래|Look at the bottom of the page.|페이지의 맨 아래를 봐라.
6-8|top|맨 위, 꼭대기|He is at the top.|그는 꼭대기에 있다.
6-8|middle|가운데, 중간|Sit in the middle.|가운데에 앉아라.
6-8|center|중앙|It is in the center.|그것은 중앙에 있다.
6-8|side|옆, 측면|Move to the side.|옆으로 이동해라.
6-8|above|~ 위에, ~ 위로|The bird is above the tree.|새가 나무 위에 있다.
6-8|up|위로|Look up at the sky.|하늘을 올려다봐라.
6-8|down|아래로|Sit down, please.|앉아 주세요.
6-9|room|방|This is my room.|여기는 나의 방이다.
6-9|wall|벽|The wall is white.|벽은 하얀색이다.
6-9|window|창문|Open the window.|창문을 열어라.
6-9|closet|벽장|My clothes are in the closet.|내 옷은 벽장에 있다.
6-9|bed|침대|I sleep in my bed.|나는 내 침대에서 잔다.
6-9|pillow|베개|The pillow is soft.|베개는 부드럽다.
6-9|fan|선풍기|Turn on the fan.|선풍기를 켜라.
6-9|lamp|램프, 등|The lamp is bright.|램프가 밝다.
6-9|computer|컴퓨터|I use a computer.|나는 컴퓨터를 사용한다.
6-9|bag|가방|My bag is heavy.|내 가방은 무겁다.
6-9|basket|바구니|The basket is full.|바구니가 가득 찼다.
6-9|box|상자|What is in the box?|상자 안에 무엇이 있니?
6-9|umbrella|우산|Take an umbrella.|우산을 가져가라.
6-9|mirror|거울|Look in the mirror.|거울을 봐라.
6-9|telephone|전화기|The telephone is ringing.|전화기가 울리고 있다.
6-9|key|열쇠|I lost my key.|나는 열쇠를 잃어버렸다.
6-10|nature|자연|We love nature.|우리는 자연을 사랑한다.
6-10|mountain|산|The mountain is high.|산은 높다.
6-10|forest|숲|Animals live in the forest.|동물들은 숲에 산다.
6-10|valley|계곡|The valley is deep.|계곡은 깊다.
6-10|lake|호수|Let's swim in the lake.|호수에서 수영하자.
6-10|desert|사막|The desert is hot.|사막은 덥다.
6-10|wind|바람|The wind blows strongly.|바람이 강하게 분다.
6-10|rock|바위|This rock is hard.|이 바위는 단단하다.
6-10|ocean|대양, 바다|The ocean is blue.|바다는 파랗다.
6-10|sea|바다|I see the sea.|나는 바다를 본다.
6-10|beach|해변|We play on the beach.|우리는 해변에서 논다.
6-10|river|강|The river is long.|강은 길다.
6-10|land|땅, 육지|The land is dry.|땅이 말랐다.
6-10|hill|언덕|Go up the hill.|언덕을 올라가라.
6-10|tree|나무|The tree is green.|나무는 초록색이다.
6-10|leaf|나뭇잎|A leaf falls down.|나뭇잎이 떨어진다.
6-11|in front of|~ 앞에|Stand in front of me.|내 앞에 서라.
6-11|behind|~ 뒤에|Look behind you.|네 뒤를 봐라.
6-11|beside|~ 옆에|Sit beside me.|내 옆에 앉아라.
6-11|next to|~ 옆에|I am next to him.|나는 그의 옆에 있다.
6-11|across|건너서, 가로질러|Walk across the street.|길을 건너가라.
6-11|at|~에|I am at home.|나는 집에 있다.
6-11|here|여기에|Come here.|이리로 와라.
6-11|there|거기에|Go there.|거기로 가라.
6-11|west|서쪽|The sun sets in the west.|해는 서쪽으로 진다.
6-11|north|북쪽|The north is cold.|북쪽은 춥다.
6-11|east|동쪽|The sun rises in the east.|해는 동쪽에서 뜬다.
6-11|south|남쪽|Birds fly south.|새들은 남쪽으로 날아간다.
6-11|through|~을 통해|Go through the door.|문을 통과해 가라.
6-11|between|~ 사이에|Sit between us.|우리 사이에 앉아라.
6-11|around|~ 주위에|Look around.|주위를 둘러봐라.
6-11|among|~에 둘러싸인|I am among friends.|나는 친구들 사이에 있다.
6-12|always|항상, 늘|I always smile.|나는 항상 웃는다.
6-12|usually|보통, 대개|I usually wake up early.|나는 보통 일찍 일어난다.
6-12|often|종종, 자주|I often visit the park.|나는 종종 공원에 간다.
6-12|sometimes|때때로, 가끔|Sometimes I eat pizza.|가끔 나는 피자를 먹는다.
6-12|never|절대 ~ 않다|I never tell a lie.|나는 절대 거짓말을 하지 않는다.
6-12|festival|축제|We enjoy the festival.|우리는 축제를 즐긴다.
6-12|schedule|일정, 스케줄|Check the schedule.|일정을 확인해라.
6-12|ready|준비가 된|Are you ready?|준비됐니?
6-12|start|시작하다|Let's start the game.|게임을 시작하자.
6-12|begin|시작하다|Class will begin soon.|수업이 곧 시작될 것이다.
6-12|finish|끝나다, 끝내다|I finish my work.|나는 내 일을 끝낸다.
6-12|end|끝나다, 끝|This is the end.|이것이 끝이다.
6-12|contest|대회|He won the contest.|그는 대회에서 우승했다.
6-12|again|다시|Try again.|다시 시도해라.
6-12|once|한 번|I met him once.|나는 그를 한 번 만났다.
6-12|twice|두 번|I checked it twice.|나는 그것을 두 번 확인했다.
6-13|hobby|취미|My hobby is reading.|내 취미는 독서다.
6-13|walk|걷다|Let's walk together.|함께 걷자.
6-13|climb|오르다|Monkeys climb trees.|원숭이는 나무를 오른다.
6-13|exercise|운동하다|I exercise every day.|나는 매일 운동한다.
6-13|dance|춤추다|Do you like to dance?|너는 춤추는 것을 좋아하니?
6-13|sing|노래하다|She loves to sing.|그녀는 노래하는 것을 좋아한다.
6-13|bake|굽다|I bake cookies.|나는 쿠키를 굽는다.
6-13|draw|그리다|I can draw a cat.|나는 고양이를 그릴 수 있다.
6-13|free time|여가 시간|What do you do in your free time?|너는 여가 시간에 무엇을 하니?
6-13|listen|듣다|Listen to the music.|음악을 들어라.
6-13|music|음악|I enjoy listening to music.|나는 음악 듣는 것을 즐긴다.
6-13|radio|라디오|Turn on the radio.|라디오를 켜라.
6-13|practice|연습하다|You must practice piano.|너는 피아노를 연습해야 한다.
6-13|piano|피아노|She plays the piano.|그녀는 피아노를 친다.
6-13|violin|바이올린|He has a violin.|그는 바이올린을 가지고 있다.
6-13|guitar|기타|My dad plays the guitar.|우리 아빠는 기타를 치신다.
6-14|left|왼쪽|Turn left.|왼쪽으로 돌아라.
6-14|right|오른쪽|Turn right.|오른쪽으로 돌아라.
6-14|straight|곧은, 똑바로|Go straight.|똑바로 가라.
6-14|way|길, 방법|This is the way.|이쪽 길이다.
6-14|far|멀리|Is it far?|그것은 머니?
6-14|near|가까이|The park is near.|공원은 가깝다.
6-14|turn|돌다|Turn around.|뒤로 돌아라.
6-14|corner|모퉁이|It is at the corner.|그것은 모퉁이에 있다.
6-14|road|도로|The road is wide.|도로는 넓다.
6-14|street|길, 거리|Walk down the street.|거리를 따라 걸어가라.
6-14|bridge|다리|Cross the bridge.|다리를 건너라.
6-14|address|주소|What is your address?|너의 주소는 무엇이니?
6-14|return|되돌아가다|Return to your seat.|자리로 돌아가라.
6-14|cross|건너다|Cross the road carefully.|길을 조심해서 건너라.
6-14|along|~을 따라|Walk along the river.|강을 따라 걸어라.
6-14|away|떨어져|Go away.|저리 떨어져.
6-15|travel|여행하다|I like to travel.|나는 여행하는 것을 좋아한다.
6-15|trip|여행|How was your trip?|여행 어땠니?
6-15|visit|방문하다|I will visit my grandma.|나는 할머니를 방문할 것이다.
6-15|stay|머물다|Stay here.|여기에 머물러라.
6-15|nation|국가|Korea is a nation.|한국은 국가이다.
6-15|arrive|도착하다|When did you arrive?|언제 도착했니?
6-15|leave|떠나다|Don't leave me.|나를 떠나지 마라.
6-15|hotel|호텔|We stay at a hotel.|우리는 호텔에 머문다.
6-15|vacation|방학, 휴가|Summer vacation is coming.|여름 방학이 오고 있다.
6-15|holiday|휴일, 휴가|Today is a holiday.|오늘은 휴일이다.
6-15|during|~ 동안|I slept during the class.|나는 수업 시간 동안 잤다.
6-15|plan|계획, 계획하다|What is your plan?|너의 계획은 무엇이니?
6-15|tour guide|여행 가이드|The tour guide is kind.|여행 가이드는 친절하다.
6-15|airport|공항|I go to the airport.|나는 공항에 간다.
6-15|album|사진첩|Show me your album.|네 사진첩을 보여줘.
6-15|photo|사진|Take a photo.|사진을 찍어라.
6-16|take|타다, 가져가다|Take a bus.|버스를 타라.
6-16|drive|운전하다|Can you drive?|운전할 줄 아니?
6-16|fast|빠른|The car is fast.|그 차는 빠르다.
6-16|slow|느린|Turtles are slow.|거북이는 느리다.
6-16|carrot|당근|Rabbits eat a carrot.|토끼는 당근을 먹는다.
6-16|bus|버스|The bus is coming.|버스가 오고 있다.
6-16|taxi|택시|I call a taxi.|나는 택시를 부른다.
6-16|subway|지하철|I take the subway.|나는 지하철을 탄다.
6-16|plane|비행기|Look at the plane.|비행기를 봐라.
6-16|ship|배|The ship is big.|그 배는 크다.
6-16|boat|배, 보트|We ride a boat.|우리는 보트를 탄다.
6-16|train|기차|The train is long.|기차는 길다.
6-16|truck|트럭|A truck carries boxes.|트럭이 상자들을 나른다.
6-16|station|역|Meet me at the station.|역에서 만나자.
6-16|ticket|표, 티켓|Do you have a ticket?|너는 표를 가지고 있니?
6-16|seat|자리, 좌석|Take a seat.|자리에 앉아라.
6-17|play|놀다, (운동 경기를) 하다|Let's play soccer.|축구를 하자.
6-17|sports|운동, 스포츠|I like sports.|나는 운동을 좋아한다.
6-17|soccer|축구|He plays soccer well.|그는 축구를 잘한다.
6-17|baseball|야구|Do you like baseball?|너는 야구를 좋아하니?
6-17|basketball|농구|I play basketball.|나는 농구를 한다.
6-17|tennis|테니스|Tennis is fun.|테니스는 재미있다.
6-17|badminton|배드민턴|We play badminton.|우리는 배드민턴을 친다.
6-17|volleyball|배구|The net is for volleyball.|그 네트는 배구용이다.
6-17|shoot|(슛을) 쏘다, 던지다|Shoot the ball.|공을 쏴라(던져라).
6-17|throw|던지다|Throw me the ball.|나에게 공을 던져라.
6-17|kick|차다|Kick the ball hard.|공을 세게 차라.
6-17|catch|잡다|Catch the ball.|공을 잡아라.
6-17|pass|패스하다, 건네주다|Pass to me.|나에게 패스해라.
6-17|ball|공|I have a round ball.|나는 둥근 공을 가지고 있다.
6-17|team|팀|We are a good team.|우리는 좋은 팀이다.
6-17|gym|체육관|Let's go to the gym.|체육관에 가자.
6-18|win|이기다|I want to win.|나는 이기고 싶다.
6-18|lose|지다|I don't want to lose.|나는 지고 싶지 않다.
6-18|winner|승자|He is the winner.|그는 승자이다.
6-18|loser|패자|There is no loser.|패자는 없다.
6-18|game|경기, 게임|Let's play a game.|게임을 하자.
6-18|match|경기, 시합|The match starts now.|경기가 지금 시작된다.
6-18|race|경주, 달리기|We ran a race.|우리는 경주를 했다.
6-18|join|함께하다, 가입하다|Come and join us.|와서 우리와 함께해라.
6-18|medal|메달|She got a gold medal.|그녀는 금메달을 땄다.
6-18|prize|상|I won the first prize.|나는 1등 상을 탔다.
6-18|try|노력하다, 시도하다|Try your best.|최선을 다해라.
6-18|rule|규칙|Follow the rules.|규칙을 따르라.
6-18|score|득점, 점수|What is the score?|점수가 몇이니?
6-18|point|점수, 요점|I got one point.|나는 1점을 얻었다.
6-18|goal|골, 득점|He scored a goal.|그는 골을 넣었다.
6-18|captain|주장|Who is the captain?|주장이 누구니?
6-19|relax|휴식을 취하다|Sit down and relax.|앉아서 쉬어라.
6-19|see a doctor|진찰을 받다|You should see a doctor.|너는 병원(의사)에 가봐야 한다.
6-19|take medicine|약을 먹다|Take medicine with water.|물과 함께 약을 먹어라.
6-19|hospital|병원|Go to the hospital.|병원에 가라.
6-19|disease|질병|Wash hands to stop disease.|질병을 막기 위해 손을 씻어라.
6-19|sick|아픈|I am sick.|나는 아프다.
6-19|ill|아픈|He feels ill.|그는 몸이 좋지 않다.
6-19|healthy|건강한|Eat healthy food.|건강한 음식을 먹어라.
6-19|fever|열|I have a fever.|나는 열이 있다.
6-19|pain|통증|I feel pain here.|나는 여기에 통증을 느낀다.
6-19|cough|기침|He has a bad cough.|그는 기침이 심하다.
6-19|headache|두통|I have a headache.|나는 두통이 있다.
6-19|stomachache|복통|She has a stomachache.|그녀는 배가 아프다.
6-19|toothache|치통|I have a toothache.|나는 치통이 있다.
6-19|die|죽다|Flowers will die without water.|물이 없으면 꽃은 죽을 것이다.
6-19|dead|죽은|The tree is dead.|그 나무는 죽었다.
6-20|butter|버터|I like butter on bread.|나는 빵에 버터 바르는 것을 좋아한다.
6-20|cheese|치즈|Cheese is yellow.|치즈는 노란색이다.
6-20|egg|달걀|I eat an egg for breakfast.|나는 아침으로 달걀을 먹는다.
6-20|oil|기름|Put some oil in the pan.|팬에 기름을 좀 둘러라.
6-20|meat|고기|Do you like meat?|너는 고기를 좋아하니?
6-20|rice|쌀, 밥|We eat rice every day.|우리는 매일 밥을 먹는다.
6-20|salt|소금|Pass me the salt.|소금 좀 건네줘.
6-20|sugar|설탕|Sugar is sweet.|설탕은 달다.
6-20|fork|포크|Use a fork.|포크를 사용해라.
6-20|knife|칼|The knife is sharp.|칼이 날카롭다.
6-20|spoon|숟가락|Eat soup with a spoon.|숟가락으로 수프를 먹어라.
6-20|chopsticks|젓가락|I use chopsticks.|나는 젓가락을 사용한다.
6-20|bowl|그릇, 사발|A bowl of rice.|밥 한 공기.
6-20|dish|접시|Wash the dish.|접시를 씻어라.
6-20|bottle|병|Open the bottle.|병을 열어라.
6-20|cup|컵|A cup of milk.|우유 한 컵.
6-21|money|돈|I need some money.|나는 돈이 좀 필요하다.
6-21|dollar|달러|It costs one dollar.|그것은 1달러이다.
6-21|coin|동전|I have a gold coin.|나는 금화(동전)를 가지고 있다.
6-21|count|세다, 계산하다|Can you count to ten?|10까지 셀 수 있니?
6-21|twenty|20|He is twenty years old.|그는 20살이다.
6-21|thirty|30|It is thirty dollars.|그것은 30달러이다.
6-21|forty|40|My dad is forty.|나의 아빠는 40살이다.
6-21|fifty|50|There are fifty stars.|별이 50개 있다.
6-21|sixty|60|Wait sixty seconds.|60초를 기다려라.
6-21|seventy|70|My grandma is seventy.|나의 할머니는 70세이시다.
6-21|eighty|80|Read page eighty.|80페이지를 읽어라.
6-21|ninety|90|I got ninety points.|나는 90점을 받았다.
6-21|hundred|100, 백|I want a hundred candies.|나는 사탕 100개를 원한다.
6-21|thousand|1000, 천|It is two thousand won.|그것은 2,000원이다.
6-21|poor|가난한|He helps poor people.|그는 가난한 사람들을 돕는다.
6-21|rich|부유한|The king is rich.|왕은 부유하다.
6-22|dangerous|위험한|Fire is dangerous.|불은 위험하다.
6-22|safe|안전한|This place is safe.|이 장소는 안전하다.
6-22|strange|이상한|That is a strange sound.|저것은 이상한 소리다.
6-22|happen|발생하다, 일어나다|What happened?|무슨 일이 일어났니?
6-22|bomb|폭탄|The bomb is scary.|폭탄은 무섭다.
6-22|accident|사고|I saw a car accident.|나는 자동차 사고를 목격했다.
6-22|fire|불|Do not play with fire.|불장난하지 마라.
6-22|fact|사실|Is that a fact?|그것이 사실이니?
6-22|news|뉴스|I watch the news.|나는 뉴스를 본다.
6-22|break|깨다, 부수다|Don't break the glass.|유리를 깨지 마라.
6-22|fix|수리하다|Can you fix this?|이것을 고칠 수 있니?
6-22|burn|타다, 태우다|Paper burns easily.|종이는 쉽게 탄다.
6-22|hit|치다, 때리다|He hit the ball.|그가 공을 쳤다.
6-22|hurt|다치게 하다, 아프다|Did you hurt your leg?|다리를 다쳤니?
6-22|kill|죽이다|Do not kill bugs.|벌레를 죽이지 마라.
6-22|help|돕다|Please help me.|나를 도와주세요.
6-23|camping|캠핑|We go camping today.|우리는 오늘 캠핑을 간다.
6-23|hiking|하이킹 (걷는 여행)|I like hiking.|나는 하이킹을 좋아한다.
6-23|fishing|낚시|Let's go fishing.|낚시하러 가자.
6-23|swimming|수영|Swimming is fun.|수영은 재미있다.
6-23|skiing|스키 타기|I enjoy skiing.|나는 스키 타기를 즐긴다.
6-23|jogging|조깅|My dad likes jogging.|나의 아빠는 조깅을 좋아하신다.
6-23|picnic|소풍|We have a picnic.|우리는 소풍을 간다.
6-23|outside|바깥, 밖에|Let's play outside.|밖에서 놀자.
6-23|spend|(시간을) 쓰다|I spend time with mom.|나는 엄마와 시간을 보낸다.
6-23|meet|만나다|Nice to meet you.|만나서 반가워.
6-23|pool|수영장|The pool is big.|수영장은 크다.
6-23|museum|박물관|We visit the museum.|우리는 박물관을 방문한다.
6-23|tent|텐트|I sleep in a tent.|나는 텐트에서 잔다.
6-23|amusement park|놀이공원|I love the amusement park.|나는 놀이공원을 좋아한다.
6-23|baseball stadium|야구장|Go to the baseball stadium.|야구장에 가라.
6-23|weekend|주말|Have a nice weekend.|즐거운 주말 보내.
6-24|shout|소리치다|Don't shout.|소리치지 마라.
6-24|cry|울다|Why do you cry?|왜 우니?
6-24|lie|거짓말하다|Do not lie.|거짓말하지 마라.
6-24|fight|싸우다|Friends shouldn't fight.|친구끼리는 싸우면 안 된다.
6-24|hide|숨다, 숨기다|I hide behind the tree.|나는 나무 뒤에 숨는다.
6-24|friend|친구|She is my best friend.|그녀는 나의 가장 친한 친구다.
6-24|together|함께|Let's study together.|함께 공부하자.
6-24|sorry|미안한|I am sorry.|미안해.
6-24|fault|잘못|It is my fault.|그것은 내 잘못이다.
6-24|mistake|실수|I made a mistake.|나는 실수를 했다.
6-24|matter|문제, 일|What is the matter?|무슨 일이니? (무엇이 문제니?)
6-24|problem|문제|Solve the problem.|문제를 풀어라.
6-24|peace|평화|We want peace.|우리는 평화를 원한다.
6-24|hate|싫어하다|I hate bugs.|나는 벌레를 싫어한다.
6-24|understand|이해하다|Do you understand?|이해하니?
6-24|promise|약속하다|I promise you.|너에게 약속한다.
6-25|wedding|결혼식, 결혼|The wedding is today.|결혼식은 오늘이다.
6-25|hall|홀, 큰방이나 건물|The hall is big.|홀은 크다.
6-25|person|사람|He is a nice person.|그는 좋은 사람이다.
6-25|people|사람들|Many people are here.|많은 사람들이 여기에 있다.
6-25|chat|수다를 떨다|We chat together.|우리는 함께 수다를 떤다.
6-25|clap|박수를 치다|Everyone claps.|모두 박수를 친다.
6-25|laugh|웃다|We laugh loudly.|우리는 크게 웃는다.
6-25|smile|미소를 짓다|She smiles at me.|그녀는 나에게 미소를 짓는다.
6-25|wife|아내|She is his wife.|그녀는 그의 아내이다.
6-25|baby|아기|The baby sleeps.|아기가 잔다.
6-25|husband|남편|He is her husband.|그는 그녀의 남편이다.
6-25|marry|결혼하다|Will you marry me?|나와 결혼해 줄래?
6-25|love|사랑하다|I love my family.|나는 나의 가족을 사랑한다.
6-25|gather|모이다|Let's gather here.|여기로 모이자.
6-25|married couple|부부|They are a married couple.|그들은 부부이다.
6-25|band|밴드, 악단|The band plays music.|밴드가 음악을 연주한다.
6-26|shape|모양|What shape is this?|이것은 무슨 모양이니?
6-26|circle|동그라미, 원|Draw a circle.|원을 그려라.
6-26|round|둥근|The ball is round.|공은 둥글다.
6-26|oval|계란형, 계란형의|An egg is oval.|달걀은 계란형이다.
6-26|square|정사각형 (네모)|The box is a square.|상자는 정사각형이다.
6-26|rectangle|직사각형 (네모)|A book is a rectangle.|책은 직사각형이다.
6-26|triangle|삼각형 (세모)|This is a triangle.|이것은 삼각형이다.
6-26|cone|원뿔|An ice cream cone.|아이스크림 콘.
6-26|glass|유리잔, 유리|Be careful with glass.|유리를 조심해라.
6-26|board|판자|Look at the board.|칠판(판자)을 봐라.
6-26|chalk|분필|Use white chalk.|흰 분필을 사용해라.
6-26|soap|비누|Wash with soap.|비누로 씻어라.
6-26|candle|양초|Light the candle.|양초에 불을 켜라.
6-26|wallet|지갑|I lost my wallet.|나는 지갑을 잃어버렸다.
6-26|clock|시계|The clock ticks.|시계가 똑딱거린다.
6-26|bat|(야구) 방망이|Swing the bat.|방망이를 휘둘러라.
6-27|king|왕|The king is strong.|왕은 힘이 세다.
6-27|queen|왕비|The queen is kind.|왕비는 친절하다.
6-27|prince|왕자|The prince rides a horse.|왕자는 말을 탄다.
6-27|princess|공주|The princess is pretty.|공주는 예쁘다.
6-27|story|이야기|Tell me a story.|나에게 이야기를 해줘.
6-27|god|신|Thank god.|신에게 감사합니다.
6-27|angel|천사|You are an angel.|너는 천사야.
6-27|crown|왕관|The crown is gold.|왕관은 금이다.
6-27|castle|성|Look at the castle.|성을 봐라.
6-27|palace|성, 궁전|The palace is huge.|궁전은 거대하다.
6-27|heaven|천국|Heaven is beautiful.|천국은 아름답다.
6-27|hell|지옥|It is hot like hell.|지옥처럼 뜨겁다.
6-27|giant|거인|A giant is very tall.|거인은 매우 키가 크다.
6-27|ghost|유령, 귀신|I saw a ghost.|나는 유령을 보았다.
6-27|monster|괴물|The monster is scary.|괴물은 무섭다.
6-27|hero|영웅|He is my hero.|그는 나의 영웅이다.
6-28|interesting|재미있는, 흥미로운|The book is interesting.|그 책은 재미있다.
6-28|exciting|신나는|The game is exciting.|그 게임은 신난다.
6-28|fantastic|환상적인|You look fantastic.|너 환상적으로 보인다.
6-28|excellent|훌륭한|Good job, excellent!|잘했어, 훌륭해!
6-28|terrible|끔찍한|The weather is terrible.|날씨가 끔찍하다.
6-28|famous|유명한|He is a famous singer.|그는 유명한 가수이다.
6-28|concert|콘서트|We go to a concert.|우리는 콘서트에 간다.
6-28|picture|그림, 사진|Take a picture.|사진을 찍어라.
6-28|enjoy|즐기다|Enjoy your trip.|여행을 즐겨라.
6-28|song|노래|Sing a song.|노래를 불러라.
6-28|singer|가수|Who is your favorite singer?|네가 가장 좋아하는 가수는 누구니?
6-28|musician|음악가|She is a musician.|그녀는 음악가이다.
6-28|movie|영화|I like this movie.|나는 이 영화를 좋아한다.
6-28|theater|극장|Let's go to the theater.|극장에 가자.
6-28|director|감독|He is a movie director.|그는 영화 감독이다.
6-28|why|왜|Why are you here?|너는 왜 여기에 있니?
6-29|idea|생각, 의견|I have a good idea.|나에게 좋은 생각이 있다.
6-29|opinion|의견|What is your opinion?|너의 의견은 무엇이니?
6-29|example|예, 보기|Give me an example.|예를 들어 줘.
6-29|great|위대한, 훌륭한|That is great!|그거 훌륭하다!
6-29|correct|맞는, 정확한|The answer is correct.|답이 맞다.
6-29|wrong|틀린, 잘못된|It is wrong.|그것은 틀렸다.
6-29|same|같은|We have the same bag.|우리는 같은 가방을 가지고 있다.
6-29|different|다른|They are different.|그들은 다르다.
6-29|tell|말하다|Tell me the truth.|진실을 말해줘.
6-29|discuss|토론하다|Let's discuss it.|그것을 토론하자.
6-29|think|생각하다|Think about it.|그것에 대해 생각해 봐.
6-29|guess|추측하다|Guess what?|뭔지 맞춰봐?
6-29|change|바뀌다, 바꾸다|Change your clothes.|옷을 갈아입어라.
6-29|decide|결정하다|You must decide.|너는 결정해야 한다.
6-29|agree|동의하다|I agree with you.|나는 너에게 동의한다.
6-29|because|왜냐하면|I cry because I am sad.|나는 슬퍼서 운다.
6-30|mail|우편물|Check the mail.|우편물을 확인해라.
6-30|letter|편지|I write a letter.|나는 편지를 쓴다.
6-30|postcard|엽서|Send a postcard.|엽서를 보내라.
6-30|call|전화, 전화하다|Call me now.|지금 전화해.
6-30|get|받다, 얻다|Did you get it?|너 그거 받았니?
6-30|receive|받다|I receive an email.|나는 이메일을 받는다.
6-30|send|보내다|Send it to me.|그것을 나에게 보내라.
6-30|deliver|배달하다|Please deliver this.|이것을 배달해 주세요.
6-30|talk|말하다, 이야기하다|Don't talk loudly.|크게 말하지 마라.
6-30|speak|말하다|Can you speak English?|영어를 할 줄 아니?
6-30|say|말하다|Say yes.|'네'라고 말해라.
6-30|repeat|반복하다|Repeat after me.|나를 따라 해라.
6-30|voice|목소리|I hear a voice.|나는 목소리를 듣는다.
6-30|dialogue|대화|Listen to the dialogue.|대화를 들어라.
6-30|stamp|우표, 도장|Buy a stamp.|우표를 사라.
6-30|envelope|봉투|Put it in the envelope.|그것을 봉투에 넣어라.

10-1|name|이름|My name is Tom.|내 이름은 톰이다.
10-1|boy|소년, 남자아이|The boy runs fast.|그 소년은 빨리 달린다.
10-1|girl|소녀, 여자아이|The girl is pretty.|그 소녀는 예쁘다.
10-1|baby|아기|The baby sleeps.|아기가 잔다.
10-1|man|남자, 남성|He is a strong man.|그는 힘센 남자다.
10-1|woman|여자, 여성|The woman is kind.|그 여자는 친절하다.
10-1|age|나이|What is your age?|너의 나이는 몇이니?
10-1|dear|사랑하는, 소중한|My dear friend.|나의 소중한 친구.
10-1|child|아이, 어린이|The child plays.|아이가 논다.
10-1|teenager|십 대|My brother is a teenager.|나의 형은 십 대다.
10-1|adult|성인, 어른|Acts like an adult.|어른처럼 행동해라.
10-1|someone|누군가, 어떤 사람|Someone is here.|누군가가 여기에 있다.
10-1|everyone|모두, 모든 사람|Hello, everyone.|여러분(모두), 안녕.
10-1|lady|여성, 부인|She is a nice lady.|그녀는 멋진 여성(숙녀)이다.
10-1|gentleman|신사, 양반|Be a gentleman.|신사가 되어라.
10-1|person|사람, 개인|He is a good person.|그는 좋은 사람이다.
10-1|people|사람들|Many people came.|많은 사람들이 왔다.
10-1|own|자기 자신의|Use your own pen.|너 자신의 펜을 사용해라.
10-1|each other|서로|Help each other.|서로 도와라.
10-1|be from|~출신이다|I am from Korea.|나는 한국 출신이다.
10-2|family|가족|I love my family.|나는 나의 가족을 사랑한다.
10-2|father|아버지|My father works hard.|나의 아버지는 열심히 일하신다.
10-2|mother|어머니|My mother cooks well.|나의 어머니는 요리를 잘 하신다.
10-2|son|아들|He is my son.|그는 나의 아들이다.
10-2|daughter|딸|She is my daughter.|그녀는 나의 딸이다.
10-2|brother|형, 오빠, 남동생|Do you have a brother?|너는 남자 형제가 있니?
10-2|sister|언니, 누나, 여동생|My sister is cute.|내 여동생은 귀엽다.
10-2|marry|결혼하다|Will you marry me?|나와 결혼해 줄래?
10-2|husband|남편|Her husband is tall.|그녀의 남편은 키가 크다.
10-2|wife|아내, 부인|His wife is kind.|그의 아내는 친절하다.
10-2|parent|부모|Ask your parents.|부모님께 여쭤봐라.
10-2|uncle|삼촌|My uncle is funny.|나의 삼촌은 재미있다.
10-2|aunt|고모, 이모, 숙모|My aunt gave me a gift.|나의 이모가 나에게 선물을 주셨다.
10-2|grandparent|조부모|I visit my grandparents.|나는 조부모님을 방문한다.
10-2|cousin|사촌|My cousin lives nearby.|내 사촌은 근처에 산다.
10-2|member|구성원, 일원|I am a member of the club.|나는 그 클럽의 일원이다.
10-2|pet|반려동물|I have a pet dog.|나는 반려견을 키운다.
10-2|relative|친척|Many relatives came.|많은 친척들이 왔다.
10-2|be born|태어나다|I was born in 2012.|나는 2012년에 태어났다.
10-2|take care of|~을 돌보다|I take care of my sister.|나는 내 동생을 돌본다.
10-3|friend|친구|We are good friends.|우리는 좋은 친구다.
10-3|together|함께, 같이|Let's play together.|함께 놀자.
10-3|club|동아리, 클럽|Join the book club.|독서 클럽에 가입해라.
10-3|join|가입하다, 함께하다|Can I join you?|너와 함께해도 되니?
10-3|fight|싸우다|Don't fight with friends.|친구들과 싸우지 마라.
10-3|group|무리, 집단, 그룹|A group of students.|학생들의 무리(그룹)
10-3|classmate|급우, 반 친구|He is my classmate.|그는 나의 반 친구다.
10-3|partner|파트너, 짝|Who is your partner?|너의 짝은 누구니?
10-3|alone|혼자|I am home alone.|나는 집에 혼자 있다.
10-3|friendship|우정|Our friendship is strong.|우리의 우정은 강하다.
10-3|share|함께 쓰다, 나누다|Share your toys.|장난감을 함께 써라.
10-3|neighbor|이웃|My neighbor is kind.|나의 이웃은 친절하다.
10-3|favor|호의, 부탁|Do me a favor.|부탁 하나만 들어줘.
10-3|introduce|소개하다|Let me introduce myself.|내 소개를 할게.
10-3|harmony|조화, 화합|Live in harmony.|조화롭게 살아라.
10-3|nickname|별명|My nickname is Speedy.|내 별명은 스피디다.
10-3|welcome|환영하다|Welcome to my house.|우리 집에 온 것을 환영해.
10-3|strange|이상한, 낯선|That is strange.|저것은 이상하다.
10-3|hang out|~와 시간을 보내다|I hang out with friends.|나는 친구들과 어울려 논다.
10-3|make fun of|~을 놀리다|Don't make fun of him.|그를 놀리지 마라.
10-4|body|몸, 신체|Move your body.|몸을 움직여라.
10-4|ear|귀|I have two ears.|나는 두 개의 귀가 있다.
10-4|eye|눈|Close your eyes.|눈을 감아라.
10-4|nose|코|Touch your nose.|코를 만져라.
10-4|mouth|입|Open your mouth.|입을 벌려라.
10-4|skin|피부|My skin is soft.|내 피부는 부드럽다.
10-4|tooth|이, 치아|Brush your tooth.|이를 닦아라. (보통 teeth 사용)
10-4|tongue|혀|Stick out your tongue.|혀를 내밀어라.
10-4|head|머리|Shake your head.|머리를 흔들어라.
10-4|hair|머리카락, 털|Comb your hair.|머리를 빗어라.
10-4|arm|팔|Raise your arm.|팔을 들어라.
10-4|shoulder|어깨|Tap your shoulder.|어깨를 두드려라.
10-4|hand|손|Wash your hands.|손을 씻어라.
10-4|finger|손가락|Use your finger.|손가락을 사용해라.
10-4|leg|다리|My leg is long.|내 다리는 길다.
10-4|knee|무릎|Bend your knees.|무릎을 굽혀라.
10-4|foot|발|Stamp your foot.|발을 굴러라.
10-4|toe|발가락|Touch your toes.|발가락을 만져라.
10-4|grow up|성장하다, 자라다|I want to grow up fast.|나는 빨리 자라고 싶다.
10-4|watch out|조심하다|Watch out for cars.|차를 조심해라.
10-5|old|늙은, 오래된|My bike is old.|내 자전거는 오래되었다.
10-5|young|어린, 젊은|She is young.|그녀는 어리다.
10-5|short|키가 작은, 짧은|The pencil is short.|연필은 짧다.
10-5|tall|키가 큰, 높은|The tree is tall.|나무는 키가 크다.
10-5|long|긴|The snake is long.|뱀은 길다.
10-5|pretty|예쁜, 귀여운|You look pretty.|너 예뻐 보인다.
10-5|ugly|못생긴, 보기 싫은|The monster is ugly.|괴물은 못생겼다.
10-5|handsome|잘생긴|He is handsome.|그는 잘생겼다.
10-5|face|얼굴|Your face is red.|네 얼굴이 빨갛다.
10-5|thin|날씬한, 얇은|The book is thin.|책은 얇다.
10-5|fat|뚱뚱한, 살찐|The pig is fat.|돼지는 뚱뚱하다.
10-5|curly|곱슬곱슬한|She has curly hair.|그녀는 곱슬머리다.
10-5|blond|금발인|He has blond hair.|그는 금발이다.
10-5|change|바꾸다, 변하다|Leaves change color.|나뭇잎은 색이 변한다.
10-5|lovely|사랑스러운|What a lovely day.|정말 사랑스러운 날이다.
10-5|cute|귀여운|The puppy is cute.|강아지는 귀엽다.
10-5|normal|평범한, 정상적인|It is a normal day.|평범한 날이다.
10-5|beautiful|아름다운|The flower is beautiful.|꽃은 아름답다.
10-5|look like|~처럼 보이다|You look like your mom.|너는 엄마를 닮았다.
10-5|show up|나타나다|He didn't show up.|그는 나타나지 않았다.
10-6|kind|친절한|She is very kind.|그녀는 매우 친절하다.
10-6|funny|웃기는, 재미있는|The clown is funny.|광대는 웃기다.
10-6|quiet|조용한|Be quiet in the library.|도서관에서는 조용히 해라.
10-6|careful|주의 깊은, 조심하는|Be careful with the knife.|칼을 조심해라.
10-6|shy|수줍음을 많이 타는|The boy is shy.|그 소년은 수줍음이 많다.
10-6|stupid|어리석은, 멍청한|Don't do stupid things.|어리석은 짓을 하지 마라.
10-6|lazy|게으른|Don't be lazy.|게으르지 마라.
10-6|calm|차분한, 침착한|Stay calm.|침착해라.
10-6|smart|똑똑한, 영리한|You are smart.|너는 똑똑하다.
10-6|clever|영리한, 똑똑한|The fox is clever.|여우는 영리하다.
10-6|wise|지혜로운, 현명한|My grandpa is wise.|우리 할아버지는 지혜로우시다.
10-6|honest|정직한, 솔직한|An honest person tells the truth.|정직한 사람은 진실을 말한다.
10-6|polite|예의 바른, 공손한|He is polite.|그는 예의 바르다.
10-6|friendly|친절한, 우호적인|My dog is friendly.|내 개는 친절하다.
10-6|active|활동적인|She is very active.|그녀는 매우 활동적이다.
10-6|brave|용감한|Be brave.|용감해져라.
10-6|curious|호기심이 많은|I am curious about it.|나는 그것이 궁금하다.
10-6|character|성격, 특징|He has a good character.|그는 좋은 성격을 가졌다.
10-6|on time|시간을 어기지 않고|Please be on time.|제시간에 와라.
10-6|on my own|나 혼자 힘으로|I did it on my own.|나는 나 혼자 힘으로 그것을 했다.
10-7|job|일, 직장|What is your job?|너의 직업은 무엇이니?
10-7|firefighter|소방관|The firefighter is brave.|소방관은 용감하다.
10-7|librarian|사서|The librarian loves books.|사서는 책을 사랑한다.
10-7|pilot|조종사, 비행사|A pilot flies a plane.|조종사는 비행기를 조종한다.
10-7|want|원하다, ~하고 싶다|I want some water.|나는 물을 좀 원한다.
10-7|police officer|경찰관|The police officer helps people.|경찰관은 사람들을 돕는다.
10-7|scientist|과학자|A scientist studies science.|과학자는 과학을 연구한다.
10-7|worker|노동자, 근로자|He is a hard worker.|그는 열심히 일하는 노동자다.
10-7|become|~이 되다|I want to become a singer.|나는 가수가 되고 싶다.
10-7|reporter|기자|The reporter writes news.|기자는 뉴스를 쓴다.
10-7|farmer|농부, 농장주|The farmer grows rice.|농부는 벼를 재배한다.
10-7|writer|작가|She is a famous writer.|그녀는 유명한 작가이다.
10-7|engineer|기사, 기술자|My dad is an engineer.|우리 아빠는 기술자이시다.
10-7|work|일하다, 근무하다|They work hard.|그들은 열심히 일한다.
10-7|company|회사, 동료|It is a big company.|그것은 큰 회사이다.
10-7|director|감독, 연출자|Who is the movie director?|영화 감독이 누구니?
10-7|future|미래|Think about the future.|미래에 대해 생각해라.
10-7|experience|경험|It was a good experience.|좋은 경험이었다.
10-7|be interested in|~에 관심이 있다|I am interested in music.|나는 음악에 관심이 있다.
10-7|come true|이루어지다|Dreams come true.|꿈은 이루어진다.
10-8|play|놀다|Let's play together.|함께 놀자.
10-8|walk|걷다|We walk to school.|우리는 학교에 걸어간다.
10-8|run|달리다, 뛰다|Can you run fast?|너는 빨리 달릴 수 있니?
10-8|kick|차다|Kick the ball.|공을 차라.
10-8|jump|뛰다, 도약하다|Jump high.|높이 뛰어라.
10-8|throw|던지다|Throw the stone.|돌을 던져라.
10-8|use|쓰다, 사용하다|Use a fork.|포크를 사용해라.
10-8|close|닫다|Close the door.|문을 닫아라.
10-8|cry|울다|Don't cry.|울지 마라.
10-8|act|연기하다, 행동하다|Act nicely.|멋지게 행동해라.
10-8|move|움직이다, 이사하다|Don't move.|움직이지 마라.
10-8|shout|소리치다|Never shout.|절대 소리치지 마라.
10-8|carry|나르다|Carry this box.|이 상자를 날라라.
10-8|drop|떨어뜨리다|Don't drop it.|그것을 떨어뜨리지 마라.
10-8|try|노력하다, 시도하다|Try again.|다시 시도해라.
10-8|check|확인하다|Check the time.|시간을 확인해라.
10-8|bring|가져오다|Bring me water.|물을 가져와라.
10-8|laugh|웃다|We laugh loud.|우리는 크게 웃는다.
10-8|have a seat|자리에 앉다|Please have a seat.|자리에 앉으세요.
10-8|get out of|~에서 나가다|Get out of the car.|차에서 내려라(나가라).
10-9|sad|슬픈|I feel sad.|나는 슬프다.
10-9|happy|행복한|I am happy.|나는 행복하다.
10-9|afraid|무서워하는, 겁내는|Don't be afraid.|무서워하지 마라.
10-9|angry|화난, 성난|He is angry.|그는 화가 났다.
10-9|glad|기쁜, 반가운|I am glad to see you.|너를 봐서 기쁘다.
10-9|lonely|외로운, 쓸쓸한|I feel lonely.|나는 외롭다.
10-9|serious|심각한, 진지한|Are you serious?|너 진심이니?
10-9|nervous|불안해하는, 긴장한|I am nervous.|나는 긴장된다.
10-9|scared|무서워하는|I am scared of ghosts.|나는 유령이 무섭다.
10-9|upset|속상한, 화난|Don't get upset.|속상해하지 마라.
10-9|surprised|놀란|I was surprised.|나는 놀랐다.
10-9|bored|지루해 하는|I am bored.|나는 지루하다.
10-9|pleased|기쁜, 만족해하는|I am pleased.|나는 기쁘다.
10-9|excited|신이 난, 흥분한|I am excited.|나는 신이 난다.
10-9|worry|걱정하다|Don't worry.|걱정하지 마라.
10-9|miss|그리워하다|I miss you.|나는 네가 그립다.
10-9|excuse|용서하다, 변명|Excuse me.|실례합니다. (용서하세요.)
10-9|complain|불평하다|Don't complain.|불평하지 마라.
10-9|be proud of|~을 자랑스러워하다|I am proud of you.|나는 네가 자랑스럽다.
10-9|would like to|~하고 싶다|I would like to go.|나는 가고 싶다.
10-10|idea|발상, 생각|Good idea.|좋은 생각이다.
10-10|dream|꿈|I have a dream.|나는 꿈이 있다.
10-10|believe|믿다|Believe in yourself.|너 자신을 믿어라.
10-10|think|생각하다|What do you think?|너는 어떻게 생각하니?
10-10|know|알다|I know him.|나는 그를 안다.
10-10|need|필요로 하다|I need help.|나는 도움이 필요하다.
10-10|hope|바라다, 희망하다|I hope so.|나도 그러길 바란다.
10-10|wish|원하다, 소원|Make a wish.|소원을 빌어라.
10-10|decide|결정하다|You decide.|네가 결정해라.
10-10|guess|추측하다|Guess what?|뭔지 맞춰봐?
10-10|forget|잊다|Don't forget.|잊지 마라.
10-10|remember|기억하다|I remember that.|나는 그것을 기억한다.
10-10|wonder|궁금하다|I wonder why.|왜 그런지 궁금하다.
10-10|keep|유지하다, 지키다|Keep it secret.|비밀을 지켜라.
10-10|understand|이해하다|I understand.|나는 이해한다.
10-10|plan|계획|What is the plan?|계획이 무엇이니?
10-10|mind|마음, 정신|Change your mind.|마음을 바꿔라.
10-10|question|질문, 문제|Ask a question.|질문을 해라.
10-10|feel like|~하고 싶다|I feel like dancing.|나는 춤추고 싶다.
10-10|give up|포기하다|Don't give up.|포기하지 마라.
10-11|talk|말하다, 이야기하다|Let's talk.|이야기하자.
10-11|speak|말하다, 이야기하다|Can you speak English?|영어를 할 줄 아니?
10-11|call|부르다, 전화하다|Call me later.|나중에 전화해.
10-11|tell|알리다, 말하다|Tell me the truth.|진실을 말해줘.
10-11|say|말하다|Say yes.|'네'라고 말해라.
10-11|ask|묻다, 질문하다|Can I ask you?|너에게 물어봐도 될까?
10-11|answer|답하다, 대답|I know the answer.|나는 답을 안다.
10-11|show|보여 주다, 공연|Show me your bag.|네 가방을 보여줘.
10-11|express|나타내다, 표현하다|Express your feelings.|너의 감정을 표현해라.
10-11|message|메시지, 전갈|I got a message.|나는 메시지를 받았다.
10-11|mean|의미하다|What do you mean?|무슨 뜻이니?
10-11|discuss|상의하다, 논의하다|Let's discuss it.|그것을 논의하자.
10-11|explain|설명하다|Please explain this.|이것을 설명해 주세요.
10-11|problem|문제, 어려움|I have a problem.|나는 문제가 있다.
10-11|agree|동의하다, 찬성하다|I agree with you.|나는 너에게 동의한다.
10-11|allow|허락하다, 허용하다|My mom allows it.|엄마는 그것을 허락하신다.
10-11|accept|받아들이다, 수락하다|Accept my gift.|내 선물을 받아줘.
10-11|promise|약속하다, 약속|Keep your promise.|약속을 지켜라.
10-11|find out|알아내다, 발견하다|I will find out.|내가 알아낼 것이다.
10-11|say hello to|~에게 안부를 전하다|Say hello to your dad.|너의 아빠에게 안부를 전해줘.
10-12|hear|듣다, 들리다|Can you hear me?|내 말이 들리니?
10-12|listen|듣다, 귀 기울이다|Listen carefully.|주의 깊게 들어라.
10-12|see|보다|I see a bird.|나는 새를 본다.
10-12|watch|보다, 지켜보다|I watch TV.|나는 TV를 본다.
10-12|look|~해 보이다, 보다|You look happy.|너는 행복해 보인다.
10-12|voice|목소리, 음성|Your voice is nice.|너의 목소리는 좋다.
10-12|feel|느끼다|I feel cold.|나는 춥게 느낀다.
10-12|smell|냄새가 나다, 냄새|It smells good.|좋은 냄새가 난다.
10-12|sound|~하게 들리다, 소리|It sounds fun.|재미있게 들린다.
10-12|taste|맛이 나다, 맛|This tastes sweet.|이것은 단맛이 난다.
10-12|loud|큰, 시끄러운|The music is loud.|음악 소리가 크다.
10-12|touch|만지다|Don't touch it.|그것을 만지지 마라.
10-12|soft|부드러운, 푹신한|The cat is soft.|고양이는 부드럽다.
10-12|hard|단단한, 열심히|The rock is hard.|바위는 단단하다.
10-12|sweet|달콤한, 단|Candy is sweet.|사탕은 달콤하다.
10-12|sharp|날카로운, 뾰족한|The knife is sharp.|칼이 날카롭다.
10-12|same|같은, 동일한|We are the same.|우리는 같다.
10-12|color|색, 색깔|What color is it?|그것은 무슨 색이니?
10-12|be good at|~을 잘하다|I am good at math.|나는 수학을 잘한다.
10-12|make a noise|시끄럽게 하다|Don't make a noise.|시끄럽게 하지 마라.
10-13|visit|방문하다|I visit my grandma.|나는 할머니를 방문한다.
10-13|zoo|동물원|Let's go to the zoo.|동물원에 가자.
10-13|bank|은행|Where is the bank?|은행이 어디니?
10-13|park|공원|I run in the park.|나는 공원에서 달린다.
10-13|airport|공항|The airport is busy.|공항은 바쁘다.
10-13|place|장소|This is a nice place.|이곳은 좋은 장소다.
10-13|town|(소)도시, 마을|I live in a small town.|나는 작은 마을에 산다.
10-13|village|마을, 부락|My grandpa lives in a village.|할아버지는 시골 마을에 사신다.
10-13|city|도시|Seoul is a big city.|서울은 큰 도시다.
10-13|bookstore|서점|I buy books at the bookstore.|나는 서점에서 책을 산다.
10-13|market|시장|Mom goes to the market.|엄마는 시장에 가신다.
10-13|square|광장, 정사각형|Meet me at the square.|광장에서 만나자.
10-13|theater|극장|We watch a movie at the theater.|우리는 극장에서 영화를 본다.
10-13|bakery|빵집, 제과점|The bakery smells good.|빵집에서 좋은 냄새가 난다.
10-13|space|공간, 우주|There is no space.|공간이 없다.
10-13|station|역, 정류장|Go to the bus station.|버스 정류장으로 가라.
10-13|museum|박물관, 미술관|We learn history at the museum.|우리는 박물관에서 역사를 배운다.
10-13|gallery|미술관, 화랑|The gallery has pictures.|미술관에는 그림들이 있다.
10-13|line up|줄을 서다|Please line up.|줄을 서 주세요.
10-13|stop by|~에 잠시 들르다|I will stop by your house.|너희 집에 잠시 들를게.
10-14|wall|담, 벽|The wall is high.|담이 높다.
10-14|garden|정원, 뜰|I water the garden.|나는 정원에 물을 준다.
10-14|bathroom|욕실, 화장실|Where is the bathroom?|화장실이 어디니?
10-14|stair|계단|Walk up the stairs.|계단을 걸어 올라가라.
10-14|wash|씻다, 빨래하다|Wash your face.|세수해라.
10-14|gate|문, 출입구|Close the gate.|대문을 닫아라.
10-14|umbrella|우산|Take an umbrella.|우산을 가져가라.
10-14|roof|지붕|The roof is red.|지붕은 빨간색이다.
10-14|kitchen|부엌, 주방|Mom is in the kitchen.|엄마는 부엌에 계신다.
10-14|refrigerator|냉장고|The milk is in the refrigerator.|우유는 냉장고에 있다.
10-14|floor|바닥, 층|Clean the floor.|바닥을 청소해라.
10-14|living room|거실|We watch TV in the living room.|우리는 거실에서 TV를 본다.
10-14|bedroom|침실|I sleep in the bedroom.|나는 침실에서 잔다.
10-14|address|주소|What is your address?|너의 주소는 무엇이니?
10-14|stay|머무르다|Stay here.|여기에 머물러라.
10-14|garbage|쓰레기|Throw away the garbage.|쓰레기를 버려라.
10-14|housework|가사, 집안일|I help with housework.|나는 집안일을 돕는다.
10-14|comfortable|편안한, 쾌적한|The chair is comfortable.|그 의자는 편안하다.
10-14|turn off|~을 끄다|Turn off the light.|불을 꺼라.
10-14|go to bed|잠자리에 들다|I go to bed at 9.|나는 9시에 잠자리에 든다.
10-15|salt|소금|Pass me the salt.|소금 좀 건네줘.
10-15|sugar|설탕|Sugar is sweet.|설탕은 달다.
10-15|meat|고기|Do you like meat?|너는 고기를 좋아하니?
10-15|snack|간단한 식사, 간식|Let's have a snack.|간식 먹자.
10-15|fresh|신선한, 상쾌한|This fruit is fresh.|이 과일은 신선하다.
10-15|sauce|소스, 양념|The sauce is spicy.|소스가 맵다.
10-15|rice|쌀, 밥|We eat rice.|우리는 밥을 먹는다.
10-15|bottle|병|Open the bottle.|병을 열어라.
10-15|heat|가열하다, 열기|Heat the soup.|수프를 데워라.
10-15|bake|굽다|I bake cookies.|나는 쿠키를 굽는다.
10-15|meal|식사, 끼니|Enjoy your meal.|식사 맛있게 하세요.
10-15|cook|요리하다, 요리사|My dad cooks well.|우리 아빠는 요리를 잘하신다.
10-15|mix|섞다, 혼합하다|Mix it well.|잘 섞어라.
10-15|pour|붓다, 따르다|Pour the milk.|우유를 부어라.
10-15|melt|녹다, 녹이다|The ice melts.|얼음이 녹는다.
10-15|delicious|아주 맛있는|It is delicious.|그것은 아주 맛있다.
10-15|freeze|얼다, 얼리다|Water freezes in winter.|겨울에는 물이 언다.
10-15|recipe|요리법, 레시피|Follow the recipe.|요리법을 따라라.
10-15|such as|~와 같은|I like fruit such as apples.|나는 사과 같은 과일을 좋아한다.
10-15|do the dishes|설거지를 하다|I do the dishes.|나는 설거지를 한다.
10-16|eat|먹다|Let's eat lunch.|점심을 먹자.
10-16|drink|마시다|Drink some water.|물을 좀 마셔라.
10-16|knife|칼|The knife is sharp.|칼이 날카롭다.
10-16|cup|컵, 잔|A cup of tea.|차 한 잔.
10-16|dish|접시, 요리|Wash the dish.|접시를 씻어라.
10-16|juice|주스, 즙|I like orange juice.|나는 오렌지 주스를 좋아한다.
10-16|soup|수프, 국|The soup is hot.|수프가 뜨겁다.
10-16|salad|샐러드|Salad is healthy.|샐러드는 건강에 좋다.
10-16|seafood|해산물|I love seafood.|나는 해산물을 사랑한다.
10-16|menu|메뉴, 식단표|Look at the menu.|메뉴를 봐라.
10-16|hungry|배고픈|I am hungry.|나는 배가 고프다.
10-16|thirsty|목이 마른|I am thirsty.|나는 목이 마르다.
10-16|open|열다, 열린|The shop is open.|가게가 열려 있다.
10-16|order|주문하다|Can I order now?|지금 주문해도 될까요?
10-16|chef|요리사, 주방장|The chef cooks well.|그 요리사는 요리를 잘한다.
10-16|serve|제공하다, 차려 내다|They serve pizza.|그들은 피자를 제공한다.
10-16|dessert|디저트, 후식|I want dessert.|나는 디저트를 원한다.
10-16|restaurant|식당, 레스토랑|Go to a restaurant.|식당에 가라.
10-16|eat out|외식하다|We eat out today.|우리는 오늘 외식한다.
10-16|wait for|~을 기다리다|Wait for me.|나를 기다려라.
10-17|pants|바지|My pants are blue.|내 바지는 파란색이다.
10-17|belt|벨트, 허리띠|Wear a belt.|벨트를 매라.
10-17|shirt|셔츠|Iron your shirt.|셔츠를 다림질해라.
10-17|skirt|치마|She wears a skirt.|그녀는 치마를 입는다.
10-17|socks|양말|Put on your socks.|양말을 신어라.
10-17|shoes|신발|New shoes.|새 신발.
10-17|hat|(테가 있는) 모자|I have a big hat.|나는 큰 모자를 가지고 있다.
10-17|cap|(챙이 달린) 모자|He wears a cap.|그는 모자를 쓴다.
10-17|sweater|스웨터|A warm sweater.|따뜻한 스웨터.
10-17|jacket|재킷, 상의|Take your jacket.|재킷을 챙겨라.
10-17|gloves|장갑|Wear gloves in winter.|겨울에는 장갑을 껴라.
10-17|pocket|주머니|My pocket is empty.|내 주머니는 비었다.
10-17|clothes|옷, 의복|Wash your clothes.|옷을 빨아라.
10-17|wear|입다, 쓰다, 신다|I wear glasses.|나는 안경을 쓴다.
10-17|fashion|패션|I like fashion.|나는 패션을 좋아한다.
10-17|design|디자인하다, 디자인|Design a dress.|드레스를 디자인해라.
10-17|popular|인기 있는|He is popular.|그는 인기가 있다.
10-17|style|스타일, 방식|Nice style!|멋진 스타일이다!
10-17|put on|~을 입다(신다/쓰다)|Put on your coat.|코트를 입어라.
10-17|take off|~을 벗다|Take off your shoes.|신발을 벗어라.
10-18|subway|지하철|Take the subway.|지하철을 타라.
10-18|bike|자전거|Ride a bike.|자전거를 타라.
10-18|airplane|비행기|Look at the airplane.|비행기를 봐라.
10-18|truck|트럭|A big truck.|큰 트럭.
10-18|boat|보트, 배|Row the boat.|배를 저어라.
10-18|ride|타다, 몰다|I can ride a horse.|나는 말을 탈 수 있다.
10-18|street|거리, 도로|Walk down the street.|거리를 따라 걸어라.
10-18|road|도로, 길|Cross the road.|길을 건너라.
10-18|drive|운전하다|Drive safely.|안전하게 운전해라.
10-18|right|오른쪽, 오른쪽의|Turn right.|오른쪽으로 돌아라.
10-18|left|왼쪽, 왼쪽의|Turn left.|왼쪽으로 돌아라.
10-18|block|구역, 막다|Walk one block.|한 블록 걸어라.
10-18|straight|곧은, 똑바른|Go straight.|똑바로 가라.
10-18|bridge|다리|Cross the bridge.|다리를 건너라.
10-18|across|가로질러, 맞은편에|Walk across the street.|길을 건너라.
10-18|sign|표지판, 서명하다|Read the sign.|표지판을 읽어라.
10-18|corner|모퉁이, 구석|At the corner.|모퉁이에서.
10-18|stop|멈추다, 정류장|Stop here.|여기서 멈춰라.
10-18|get on|~에 타다|Get on the bus.|버스에 타라.
10-18|hurry up|서두르다|Hurry up!|서둘러!
10-19|teacher|교사, 선생|My teacher is nice.|나의 선생님은 좋으시다.
10-19|student|학생|I am a student.|나는 학생이다.
10-19|test|시험, 실험|We have a test.|우리는 시험이 있다.
10-19|library|도서관|Go to the library.|도서관에 가라.
10-19|playground|운동장, 놀이터|Play in the playground.|운동장에서 놀아라.
10-19|gym|체육관|Meet at the gym.|체육관에서 만나자.
10-19|contest|대회, 콘테스트|Win the contest.|대회에서 우승해라.
10-19|follow|따르다, 따라가다|Follow me.|나를 따라와라.
10-19|school uniform|교복|Wear a school uniform.|교복을 입어라.
10-19|hall|복도, 홀|Don't run in the hall.|복도에서 뛰지 마라.
10-19|cafeteria|구내식당, 급식실|Eat in the cafeteria.|급식실에서 먹어라.
10-19|locker|사물함|Open your locker.|사물함을 열어라.
10-19|homeroom|홈룸, 출석 반|Go to homeroom.|홈룸(교실)으로 가라.
10-19|grade|성적, 학년|Good grades.|좋은 성적.
10-19|teach|가르치다|Can you teach me?|나를 가르쳐 줄 수 있니?
10-19|learn|배우다|We learn English.|우리는 영어를 배운다.
10-19|subject|과목|What is your favorite subject?|네가 가장 좋아하는 과목은 뭐니?
10-19|borrow|빌리다|Borrow a book.|책을 빌려라.
10-19|make friends with|(~와) 친구가 되다|Make friends with him.|그와 친구가 되어라.
10-19|after school|방과 후에|See you after school.|방과 후에 보자.
10-20|homework|숙제, 과제|Do your homework.|숙제를 해라.
10-20|lesson|수업, 교훈|The lesson starts at 9.|수업은 9시에 시작한다.
10-20|study|공부하다|Study hard.|열심히 공부해라.
10-20|difficult|어려운|Math is difficult.|수학은 어렵다.
10-20|classroom|교실|Clean the classroom.|교실을 청소해라.
10-20|review|복습하다, 검토하다|Review the lesson.|수업을 복습해라.
10-20|write|쓰다|Write your name.|이름을 써라.
10-20|solve|해결하다, 풀다|Solve the problem.|문제를 풀어라.
10-20|correct|옳은, 맞는|The answer is correct.|답이 맞다.
10-20|wrong|틀린, 잘못된|It is wrong.|그것은 틀렸다.
10-20|diary|일기|Write a diary.|일기를 써라.
10-20|report|보고서, 보고하다|Write a report.|보고서를 써라.
10-20|fail|실패하다, 떨어지다|Don't fail the test.|시험에 떨어지지 마라.
10-20|note|필기, 쪽지|Take notes.|필기를 해라.
10-20|speech|연설|Make a speech.|연설을 해라.
10-20|finish|끝내다, 끝나다|Finish your work.|일을 끝내라.
10-20|mistake|실수, 잘못|It's a mistake.|그것은 실수다.
10-20|absent|결석한|He is absent.|그는 결석했다.
10-20|take a break|휴식을 취하다|Let's take a break.|휴식을 취하자.
10-20|get up|일어나다|Get up early.|일찍 일어나라.
10-21|date|날짜|What is the date?|날짜가 어떻게 되니?
10-21|week|주, 일주일|See you next week.|다음 주에 보자.
10-21|from|~에서, ~부터|I am from Seoul.|나는 서울에서 왔다.
10-21|month|달, 월|Next month is May.|다음 달은 5월이다.
10-21|year|한 해, 1년|Happy New Year!|새해 복 많이 받아!
10-21|early|일찍, 이른|I get up early.|나는 일찍 일어난다.
10-21|today|오늘|Today is Friday.|오늘은 금요일이다.
10-21|yesterday|어제|It rained yesterday.|어제 비가 왔다.
10-21|tomorrow|내일|I will go tomorrow.|나는 내일 갈 것이다.
10-21|past|과거, 지난날|Don't live in the past.|과거에 살지 마라.
10-21|tonight|오늘 밤, 오늘 밤에|See you tonight.|오늘 밤에 보자.
10-21|hour|시간, 시각|I study for an hour.|나는 한 시간 동안 공부한다.
10-21|minute|(시간 단위) 분|Wait a minute.|잠시만(1분만) 기다려.
10-21|soon|곧, 머지않아|See you soon.|곧 보자.
10-21|calendar|달력|Look at the calendar.|달력을 봐라.
10-21|during|~ 동안, ~중에|Be quiet during the test.|시험 동안에는 조용히 해라.
10-21|until|~까지, ~할 때까지|Wait until 5 o'clock.|5시까지 기다려라.
10-21|moment|순간, 잠시|Wait a moment.|잠시만 기다려.
10-21|be late for|~에 늦다|Don't be late for school.|학교에 늦지 마라.
10-21|at the same time|동시에|They arrived at the same time.|그들은 동시에 도착했다.
10-22|first|첫 번째의|Who is the first?|첫 번째는 누구니?
10-22|second|두 번째의|This is the second time.|이번이 두 번째다.
10-22|third|세 번째의|He won the third prize.|그는 3등 상을 탔다.
10-22|again|한 번 더, 다시|Try again.|다시 시도해라.
10-22|before|~전에|Wash hands before eating.|먹기 전에 손을 씻어라.
10-22|after|~후에(뒤에)|Let's play after school.|방과 후에 놀자.
10-22|never|절대 ~ 않다|I never tell a lie.|나는 절대 거짓말하지 않는다.
10-22|sometimes|때때로, 가끔|Sometimes I swim.|가끔 나는 수영한다.
10-22|often|자주, 종종|I often visit the park.|나는 종종 공원에 간다.
10-22|usually|보통, 대개|I usually wake up at 7.|나는 보통 7시에 일어난다.
10-22|always|항상, 언제나|I always love you.|나는 항상 너를 사랑한다.
10-22|once|한 번|I met him once.|나는 그를 한 번 만났다.
10-22|final|마지막의|This is the final game.|이것이 마지막 게임이다.
10-22|last|마지막의, 지난|Last week was fun.|지난주는 재미있었다.
10-22|next|다음의|See you next time.|다음에 보자.
10-22|step|단계, 걸음|Watch your step.|발밑을 조심해라.
10-22|repeat|반복하다, 되풀이하다|Please repeat that.|다시 말씀해 주세요.
10-22|suddenly|갑자기|It stopped suddenly.|그것이 갑자기 멈췄다.
10-22|all the time|항상, 줄곧, 내내|He smiles all the time.|그는 항상 미소 짓는다.
10-22|from time to time|가끔, 때때로|I see her from time to time.|나는 가끔 그녀를 본다.
10-23|clean|깨끗한|My room is clean.|내 방은 깨끗하다.
10-23|dirty|더러운|Your hands are dirty.|네 손은 더럽다.
10-23|busy|바쁜|I am busy today.|나는 오늘 바쁘다.
10-23|poor|가난한|He helps poor people.|그는 가난한 사람들을 돕는다.
10-23|slow|느린|The turtle is slow.|거북이는 느리다.
10-23|fast|빠른, 빨리|The car is fast.|그 차는 빠르다.
10-23|quickly|빨리, 빠르게|Do it quickly.|빨리 해라.
10-23|sleepy|졸린, 졸음이 오는|I am so sleepy.|나는 너무 졸리다.
10-23|heavy|무거운|This box is heavy.|이 상자는 무겁다.
10-23|light|가벼운, 밝은|A feather is light.|깃털은 가볍다.
10-23|safe|안전한|This place is safe.|이곳은 안전하다.
10-23|wet|젖은|My hair is wet.|내 머리카락은 젖었다.
10-23|ready|준비가 된|Are you ready?|준비됐니?
10-23|dark|어두운, 캄캄한|It is dark outside.|밖은 어둡다.
10-23|bright|밝은, 빛나는|The sun is bright.|태양은 밝다.
10-23|perfect|완벽한|It is perfect.|그것은 완벽하다.
10-23|different|다른|We are different.|우리는 다르다.
10-23|terrible|끔찍한, 형편없는|The food was terrible.|그 음식은 끔찍했다.
10-23|be full of|~로 가득 차다|The box is full of toys.|상자는 장난감으로 가득 차 있다.
10-23|for a while|잠시 동안|Rest for a while.|잠시 동안 쉬어라.
10-24|huge|엄청난, 거대한|The elephant is huge.|코끼리는 거대하다.
10-24|small|작은, 소규모의|The ant is small.|개미는 작다.
10-24|narrow|좁은|The road is narrow.|길은 좁다.
10-24|wide|넓은|The river is wide.|강은 넓다.
10-24|round|둥근, 동그란|The ball is round.|공은 둥글다.
10-24|part|부분, 일부|It is part of the game.|그것은 게임의 일부다.
10-24|line|줄, 선|Draw a line.|선을 그려라.
10-24|side|쪽, 면; 옆|Look at the other side.|다른 쪽을 봐라.
10-24|shape|모양, 형태|What shape is it?|그것은 무슨 모양이니?
10-24|size|크기; 치수|What is your size?|너의 사이즈는 몇이니?
10-24|type|종류, 유형|What type do you like?|어떤 종류를 좋아하니?
10-24|large|큰, 넓은|I want a large pizza.|나는 큰 피자를 원한다.
10-24|high|높은|The mountain is high.|산은 높다.
10-24|low|낮은|The wall is low.|벽은 낮다.
10-24|deep|깊은|The sea is deep.|바다는 깊다.
10-24|thick|두꺼운, 두툼한|The book is thick.|그 책은 두껍다.
10-24|flat|평평한, 납작한|The table is flat.|탁자는 평평하다.
10-24|object|물체, 물건|What is that object?|저 물체는 무엇이니?
10-24|for example|예를 들어|Fruits, for example, apples.|과일들, 예를 들어 사과.
10-24|a kind of|일종의|It is a kind of fruit.|그것은 일종의 과일이다.
10-25|number|수, 숫자, 번호|Pick a number.|숫자를 골라라.
10-25|some|몇몇의, 약간의|I want some water.|나는 물을 좀 원한다.
10-25|each|각각의|Each student has a book.|각각의 학생은 책을 가지고 있다.
10-25|every|모든|I study every day.|나는 매일 공부한다.
10-25|all|모든|All students are here.|모든 학생이 여기에 있다.
10-25|only|유일한, 단지, 오직|I have only one pen.|나는 펜이 오직 하나 있다.
10-25|many|(수가) 많은|I have many books.|나는 많은 책을 가지고 있다.
10-25|much|(양이) 많은|Thank you very much.|대단히 감사합니다.
10-25|half|반, 절반|Give me half.|나에게 절반을 줘.
10-25|add|추가하다; 더하다|Add sugar to the tea.|차에 설탕을 넣어라.
10-25|empty|빈, 비어 있는|The box is empty.|상자가 비어 있다.
10-25|fill|채우다|Fill the cup.|컵을 채워라.
10-25|count|(수를) 세다|Count to ten.|10까지 세어라.
10-25|enough|충분한, 충분히|I have enough money.|나는 충분한 돈이 있다.
10-25|total|전체의, 합계|What is the total?|합계가 얼마니?
10-25|piece|조각, 한 개|A piece of cake.|케이크 한 조각.
10-25|nothing|아무것도 ~ 아니다|I have nothing.|나는 아무것도 없다.
10-25|a lot of|(수, 양이) 많은|I have a lot of toys.|나는 많은 장난감을 가지고 있다.
10-25|a few|(수가) 약간의|I have a few friends.|나는 친구가 몇 명 있다.
10-25|a little|(양이) 약간의|I speak a little English.|나는 영어를 조금 한다.
10-26|south|남쪽, 남쪽의|Birds fly south.|새들은 남쪽으로 날아간다.
10-26|east|동쪽, 동쪽의|The sun rises in the east.|해는 동쪽에서 뜬다.
10-26|west|서쪽, 서쪽의|The sun sets in the west.|해는 서쪽으로 진다.
10-26|north|북쪽, 북쪽의|The north is cold.|북쪽은 춥다.
10-26|under|~아래에|Look under the bed.|침대 아래를 봐라.
10-26|below|(~보다) 아래에|See the picture below.|아래 그림을 봐라.
10-26|behind|~ 뒤에|Don't hide behind me.|내 뒤에 숨지 마라.
10-26|between|~ 사이에|Sit between us.|우리 사이에 앉아라.
10-26|center|중심, 중앙|Stand in the center.|중앙에 서라.
10-26|around|~ 주위(둘레)에|Run around the park.|공원 주위를 달려라.
10-26|toward|~ 쪽으로|Walk toward the door.|문쪽으로 걸어가라.
10-26|above|(~보다) 위에|Look above your head.|네 머리 위를 봐라.
10-26|over|~ 위에|Jump over the box.|상자를 넘어 뛰어라.
10-26|far|먼, 멀리|My school is far.|우리 학교는 멀다.
10-26|inside|안에(서)|Let's go inside.|안으로 들어가자.
10-26|outside|밖에(서)|It is cold outside.|밖은 춥다.
10-26|top|맨 위, 정상|Climb to the top.|정상으로 올라가라.
10-26|bottom|맨 아래, 바닥|It sank to the bottom.|그것은 바닥으로 가라앉았다.
10-26|next to|~ 옆에|Sit next to me.|내 옆에 앉아라.
10-26|in front of|~ 앞에|Meet in front of the school.|학교 앞에서 만나자.
10-27|map|지도|I need a map.|나는 지도가 필요하다.
10-27|vacation|방학|Winter vacation starts.|겨울 방학이 시작된다.
10-27|beach|해변, 바닷가|Let's go to the beach.|해변으로 가자.
10-27|trip|여행|How was your trip?|여행 어땠니?
10-27|tour|여행, 관광|We went on a bus tour.|우리는 버스 여행을 갔다.
10-27|travel|여행하다|I want to travel.|나는 여행하고 싶다.
10-27|backpack|배낭|Pack your backpack.|배낭을 싸라.
10-27|climb|오르다|Can you climb the tree?|너는 나무에 오를 수 있니?
10-27|leave|떠나다, 놓고 가다|Don't leave me.|나를 떠나지 마라.
10-27|arrive|도착하다|When do we arrive?|우리는 언제 도착하니?
10-27|return|돌아오다|I will return soon.|나는 곧 돌아올 것이다.
10-27|guide|안내하다, 안내원|He is our guide.|그는 우리의 안내원이다.
10-27|tourist|관광객|There are many tourists.|관광객들이 많이 있다.
10-27|view|전망, 견해|The view is great.|전망이 훌륭하다.
10-27|memory|기억, 추억|Good memory.|좋은 추억.
10-27|exciting|신나는|It was an exciting day.|신나는 하루였다.
10-27|adventure|모험|I like adventure.|나는 모험을 좋아한다.
10-27|pack|짐을 싸다|Pack your bag.|가방을 싸라.
10-27|get to|~에 도착하다|How do I get to the station?|역에 어떻게 가나요?
10-27|take a walk|산책을 하다|Let's take a walk.|산책하자.
10-28|sport|스포츠, 운동|I like sports.|나는 스포츠를 좋아한다.
10-28|race|경주, 경기|I won the race.|나는 경주에서 이겼다.
10-28|baseball|야구|We play baseball.|우리는 야구를 한다.
10-28|basketball|농구|He is good at basketball.|그는 농구를 잘한다.
10-28|soccer|축구|Let's play soccer.|축구하자.
10-28|catch|잡다, 받다|Catch the ball.|공을 잡아라.
10-28|win|이기다|I want to win.|나는 이기고 싶다.
10-28|lose|지다, 잃어버리다|Don't lose hope.|희망을 잃지 마라.
10-28|stadium|경기장|The stadium is big.|경기장은 크다.
10-28|cheer|환호하다, 응원하다|Cheer for our team.|우리 팀을 응원해라.
10-28|practice|연습하다|You must practice.|너는 연습해야 한다.
10-28|rule|규칙|Follow the rules.|규칙을 따라라.
10-28|player|선수|He is a soccer player.|그는 축구 선수이다.
10-28|teamwork|팀워크, 협동|Teamwork is important.|팀워크는 중요하다.
10-28|match|경기, 시합|Watch the match.|경기를 봐라.
10-28|hold|개최하다, 잡다|Hold my hand.|내 손을 잡아라.
10-28|score|득점, 점수|What is the score?|점수가 몇이니?
10-28|possible|가능한|Is it possible?|그것이 가능한가요?
10-28|work|일하다|I work hard.|나는 열심히 일한다.
10-28|work out|운동하다|I work out every day.|나는 매일 운동한다.
10-29|gift|선물|This is a gift.|이것은 선물이다.
10-29|weekend|주말|Have a nice weekend.|즐거운 주말 보내.
10-29|birthday|생일|Happy birthday!|생일 축하해!
10-29|photo|사진|Take a photo.|사진을 찍어라.
10-29|special|특별한|You are special.|너는 특별하다.
10-29|prize|상, 상품|I won a prize.|나는 상을 탔다.
10-29|festival|축제|The festival is fun.|축제는 재미있다.
10-29|firework|폭죽, 불꽃놀이|Look at the fireworks.|불꽃놀이를 봐라.
10-29|wonderful|멋진, 훌륭한|It is wonderful.|그것은 멋지다.
10-29|holiday|휴가, 휴일|Today is a holiday.|오늘은 휴일이다.
10-29|fair|박람회, 공정한|The game was fair.|그 게임은 공정했다.
10-29|party|파티|Let's have a party.|파티를 열자.
10-29|guest|손님|We have a guest.|손님이 계시다.
10-29|invite|초대하다|I invite you.|너를 초대한다.
10-29|meeting|회의|The meeting is at 2.|회의는 2시다.
10-29|present|선물|A birthday present.|생일 선물.
10-29|volunteer|자원봉사자|He is a volunteer.|그는 자원봉사자다.
10-29|interview|인터뷰|I have an interview.|나는 인터뷰가 있다.
10-29|be going to|~할 것이다|I am going to study.|나는 공부할 것이다.
10-29|take place|(행사가) 열리다|The contest takes place here.|대회가 여기서 열린다.
10-30|swim|수영하다|I can swim.|나는 수영할 수 있다.
10-30|read|읽다|Read a book.|책을 읽어라.
10-30|draw|그리다|I draw a picture.|나는 그림을 그린다.
10-30|hobby|취미|My hobby is cooking.|내 취미는 요리다.
10-30|dance|춤추다|Let's dance.|춤추자.
10-30|free|자유로운, 무료의|It is free.|그것은 무료다.
10-30|collect|모으다, 수집하다|I collect stamps.|나는 우표를 모은다.
10-30|paint|칠하다, 그리다|Paint the wall.|벽을 칠해라.
10-30|game|게임, 경기|Play a game.|게임을 해라.
10-30|favorite|가장 좋아하는|My favorite color.|내가 가장 좋아하는 색깔.
10-30|enjoy|즐기다|Enjoy your meal.|식사를 즐겨라.
10-30|exercise|운동하다|Exercise daily.|매일 운동해라.
10-30|activity|활동|Outdoor activity.|야외 활동.
10-30|hiking|하이킹|I go hiking.|나는 하이킹을 간다.
10-30|fishing|낚시|I like fishing.|나는 낚시를 좋아한다.
10-30|camping|캠핑|We went camping.|우리는 캠핑을 갔다.
10-30|outdoor|야외의|Outdoor sports.|야외 스포츠.
10-30|interesting|재미있는|That is interesting.|그것은 재미있다.
10-30|have fun|즐기다|Have fun!|즐거운 시간 보내!
10-30|take a picture of|~의 사진을 찍다|Take a picture of me.|내 사진을 찍어줘.
10-31|art|미술, 예술|I like art class.|나는 미술 수업을 좋아한다.
10-31|music|음악|Listen to the music.|음악을 들어라.
10-31|singer|가수|He is a great singer.|그는 훌륭한 가수다.
10-31|ticket|표, 입장권|I have a movie ticket.|나는 영화표를 가지고 있다.
10-31|film|영화|We watched a funny film.|우리는 재미있는 영화를 봤다.
10-31|story|이야기|Tell me a story.|나에게 이야기를 해줘.
10-31|famous|유명한|She is a famous actor.|그녀는 유명한 배우다.
10-31|band|악단, 밴드|The band plays loudly.|밴드가 크게 연주한다.
10-31|actor|(남자) 배우|He is a handsome actor.|그는 잘생긴 배우다.
10-31|actress|(여자) 배우|The actress cried.|여배우가 울었다.
10-31|painting|(물감으로 그린) 그림|Look at that painting.|저 그림을 봐라.
10-31|stage|무대; 단계|He is on the stage.|그는 무대 위에 있다.
10-31|artist|화가, 예술가|My mom is an artist.|나의 엄마는 예술가시다.
10-31|magic|마법, 마술, 마술의|It is like magic.|그것은 마법 같다.
10-31|novel|소설|I read a novel.|나는 소설을 읽는다.
10-31|concert|콘서트, 연주회|Let's go to the concert.|콘서트에 가자.
10-31|role|역할|What is your role?|너의 역할은 무엇이니?
10-31|main|주된|This is the main idea.|이것이 주된 생각이다.
10-31|be over|끝나다|The game is over.|게임이 끝났다.
10-31|go to the movies|영화를 보러 가다|I go to the movies.|나는 영화를 보러 간다.
10-32|buy|사다, 구입하다|I will buy a toy.|나는 장난감을 살 것이다.
10-32|sell|팔다, 팔리다|They sell fruit.|그들은 과일을 판다.
10-32|spend|(돈을) 쓰다, 소비하다|Don't spend too much.|너무 많이 쓰지 마라.
10-32|list|목록|Make a shopping list.|쇼핑 목록을 만들어라.
10-32|item|물품, 품목|Choose one item.|한 가지 물품을 골라라.
10-32|sale|판매; 할인 판매|It is on sale.|그것은 할인 판매 중이다.
10-32|store|가게, 상점|Go to the store.|가게로 가라.
10-32|mall|쇼핑몰, 쇼핑센터|The mall is big.|쇼핑몰은 크다.
10-32|choose|선택하다, 고르다|Choose a color.|색깔을 골라라.
10-32|pay|지불하다|I will pay for it.|내가 낼게. (지불할게.)
10-32|coupon|쿠폰, 할인권|Use this coupon.|이 쿠폰을 사용해라.
10-32|waste|낭비하다, 낭비|Don't waste water.|물을 낭비하지 마라.
10-32|price|값, 가격|What is the price?|가격이 얼마입니까?
10-32|expensive|비싼|That car is expensive.|저 차는 비싸다.
10-32|cheap|값싼, 저렴한|This pen is cheap.|이 펜은 싸다.
10-32|customer|손님, 고객|The customer is happy.|손님이 행복해한다.
10-32|discount|할인, 할인하다|Can I get a discount?|할인받을 수 있나요?
10-32|useful|유용한|This tool is useful.|이 도구는 유용하다.
10-32|try on|~을 입어(신어) 보다|Can I try on this hat?|이 모자를 써봐도 될까요?
10-32|look around|(주위를) 둘러보다|Let's look around.|둘러보자.
10-33|nurse|간호사|The nurse helps me.|간호사가 나를 돕는다.
10-33|sick|아픈, 병든|I feel sick.|나는 몸이 아프다.
10-33|weak|약한, 힘이 없는|He is too weak.|그는 너무 약하다.
10-33|strong|튼튼한, 건강한|My dad is strong.|우리 아빠는 튼튼하시다.
10-33|fever|열|I have a fever.|나는 열이 있다.
10-33|cough|기침, 기침하다|He has a bad cough.|그는 기침이 심하다.
10-33|pain|고통, 통증|I feel pain in my leg.|나는 다리에 통증을 느낀다.
10-33|hospital|병원|Go to the hospital.|병원에 가라.
10-33|headache|두통|I have a headache.|나는 두통이 있다.
10-33|medicine|약, 약물|Take this medicine.|이 약을 먹어라.
10-33|weight|무게, 체중|Watch your weight.|체중을 조심해라.
10-33|tired|피곤한, 지친|I am very tired.|나는 매우 피곤하다.
10-33|hurt|다치게 하다; 아프다|Did you hurt yourself?|다쳤니?
10-33|treat|치료하다; 다루다|Doctors treat patients.|의사들은 환자를 치료한다.
10-33|relax|휴식을 취하다, 쉬다|Sit down and relax.|앉아서 쉬어라.
10-33|advice|조언, 충고|Give me some advice.|나에게 조언을 좀 해줘.
10-33|health|건강|Health is important.|건강은 중요하다.
10-33|stomach|위, 배|My stomach hurts.|배가 아프다.
10-33|see a doctor|병원에 가다, 진찰을 받다|You should see a doctor.|너는 병원에 가봐야 한다.
10-33|catch a cold|감기에 걸리다|Don't catch a cold.|감기 걸리지 마라.
10-34|grass|풀, 잔디|Sit on the grass.|잔디에 앉아라.
10-34|flower|꽃|The flower is red.|꽃이 빨갛다.
10-34|tree|나무|Climb the tree.|나무에 올라라.
10-34|leaf|잎, 나뭇잎|A green leaf.|초록색 잎.
10-34|stone|돌|Throw a stone.|돌을 던져라.
10-34|wood|나무, 목재; 숲|It is made of wood.|그것은 나무로 만들어졌다.
10-34|fruit|과일, 열매|Eat fresh fruit.|신선한 과일을 먹어라.
10-34|branch|나뭇가지|The bird is on the branch.|새가 나뭇가지 위에 있다.
10-34|ground|땅, 토양|Sit on the ground.|땅에 앉아라.
10-34|soil|토양, 흙|Plant seeds in the soil.|흙에 씨앗을 심어라.
10-34|field|들판, 밭; 경기장|Run in the field.|들판에서 달려라.
10-34|farm|농장, 농원|Animals live on a farm.|동물들은 농장에 산다.
10-34|water|물, 물을 주다|Water the plants.|식물에 물을 줘라.
10-34|dig|파다, 캐내다|Dogs dig holes.|개들은 구멍을 판다.
10-34|grow|재배하다; 자라다|Plants grow fast.|식물들은 빨리 자란다.
10-34|plant|식물, 심다|Plant a tree.|나무를 심어라.
10-34|bean|콩|I like bean soup.|나는 콩 수프를 좋아한다.
10-34|vegetable|채소|Eat your vegetables.|채소를 먹어라.
10-34|right away|즉시, 곧바로|Do it right away.|즉시 그것을 해라.
10-34|pick up|~을 집다|Pick up the trash.|쓰레기를 주워라.
10-35|bee|벌|A bee makes honey.|벌은 꿀을 만든다.
10-35|fly|파리, 날다|A fly is on the wall.|파리가 벽에 있다.
10-35|wolf|늑대|The wolf howls.|늑대가 울부짖는다.
10-35|monkey|원숭이|The monkey eats a banana.|원숭이가 바나나를 먹는다.
10-35|elephant|코끼리|An elephant has a long nose.|코끼리는 긴 코를 가졌다.
10-35|zebra|얼룩말|A zebra has stripes.|얼룩말은 줄무늬가 있다.
10-35|whale|고래|The whale is huge.|고래는 거대하다.
10-35|chicken|닭|The chicken runs.|닭이 달린다.
10-35|snake|뱀|The snake is long.|뱀은 길다.
10-35|mouse|쥐, 생쥐|The mouse is small.|쥐는 작다.
10-35|sheep|양|Sheep eat grass.|양은 풀을 먹는다.
10-35|giraffe|기린|The giraffe is tall.|기린은 키가 크다.
10-35|wild|야생의|Lions are wild animals.|사자는 야생 동물이다.
10-35|animal|동물|I like animals.|나는 동물을 좋아한다.
10-35|hunt|사냥하다|Tigers hunt for food.|호랑이는 먹이를 위해 사냥한다.
10-35|tail|꼬리|The dog wags its tail.|개가 꼬리를 흔든다.
10-35|colorful|알록달록한|The bird is colorful.|그 새는 알록달록하다.
10-35|feed|먹이를 주다|Feed the dog.|개에게 먹이를 줘라.
10-35|by the way|그런데, 그나저나|By the way, who are you?|그런데, 너는 누구니?
10-35|look for|~을 찾다|I look for my key.|나는 내 열쇠를 찾는다.
10-36|hill|언덕|Go up the hill.|언덕을 올라가라.
10-36|land|육지, 땅|The ship reached land.|배가 육지에 닿았다.
10-36|river|강|The river is long.|강은 길다.
10-36|lake|호수|Swim in the lake.|호수에서 수영해라.
10-36|desert|사막|The desert is hot.|사막은 덥다.
10-36|forest|숲|Walk in the forest.|숲속을 걸어라.
10-36|valley|계곡, 골짜기|The valley is deep.|계곡은 깊다.
10-36|island|섬|Jeju is an island.|제주는 섬이다.
10-36|jungle|밀림, 정글|Tigers live in the jungle.|호랑이는 정글에 산다.
10-36|mountain|산|Climb the mountain.|산을 올라라.
10-36|pond|연못|Fish live in the pond.|물고기는 연못에 산다.
10-36|ocean|대양, 바다|The ocean is blue.|대양은 파랗다.
10-36|cave|동굴|A bear is in the cave.|곰이 동굴 안에 있다.
10-36|polar|북극(남극)의|A polar bear is white.|북극곰은 하얗다.
10-36|nature|자연|We love nature.|우리는 자연을 사랑한다.
10-36|mystery|미스터리, 불가사의|It is a mystery.|그것은 미스터리다.
10-36|wave|파도, 물결|The wave is high.|파도가 높다.
10-36|discover|발견하다|Discover new places.|새로운 장소를 발견해라.
10-36|look at|~을 보다|Look at the sky.|하늘을 봐라.
10-36|take turns|교대로 하다|Let's take turns.|교대로 하자.
10-37|warm|따뜻한|It is warm today.|오늘은 따뜻하다.
10-37|cold|추운, 차가운|Winter is cold.|겨울은 춥다.
10-37|cool|시원한; 멋진|The wind is cool.|바람이 시원하다.
10-37|hot|더운, 뜨거운|Summer is hot.|여름은 덥다.
10-37|rain|비가 오다, 비|It will rain soon.|곧 비가 올 것이다.
10-37|snow|눈이 오다, 눈|Snow falls in winter.|겨울에는 눈이 내린다.
10-37|clear|(날씨가) 맑은|The sky is clear.|하늘이 맑다.
10-37|sunny|화창한|It is a sunny day.|화창한 날이다.
10-37|windy|바람이 많이 부는|It is very windy.|바람이 많이 분다.
10-37|cloudy|흐린, 구름 낀|It is cloudy.|날이 흐리다.
10-37|spring|봄|Flowers bloom in spring.|봄에는 꽃이 핀다.
10-37|summer|여름|I swim in summer.|나는 여름에 수영한다.
10-37|fall|가을|Leaves fall in fall.|가을에는 낙엽이 진다.
10-37|winter|겨울|I ski in winter.|나는 겨울에 스키를 탄다.
10-37|season|계절; 시기, 철|Four seasons.|사계절.
10-37|blow|(바람이) 불다|The wind blows.|바람이 분다.
10-37|weather|날씨, 기상|How is the weather?|날씨가 어떠니?
10-37|forecast|예측, 예보|Check the weather forecast.|일기 예보를 확인해라.
10-37|at first|처음에|At first, I was scared.|처음에 나는 무서웠다.
10-37|all day long|하루 종일|I played all day long.|나는 하루 종일 놀았다.
10-38|event|사건, 행사|It is a big event.|그것은 큰 행사다.
10-38|start|시작하다, 시작|Let's start now.|지금 시작하자.
10-38|end|끝나다, 끝|This is the end.|이것이 끝이다.
10-38|enter|들어가다; 참가하다|Enter the room.|방으로 들어가라.
10-38|luck|행운, 운|Good luck!|행운을 빌어!,
10-38|important|중요한|It is important.|그것은 중요하다.
10-38|building|건물|That building is tall.|저 건물은 높다.
10-38|law|법|Follow the law.|법을 따라라.
10-38|history|역사|Study history.|역사를 공부해라.
10-38|hometown|고향|This is my hometown.|이곳은 나의 고향이다.
10-38|local|지역의, 현지의|I like local food.|나는 지역 음식을 좋아한다.
10-38|create|창조하다, 만들다|Create a new file.|새 파일을 만들어라.
10-38|project|계획; 연구 과제|Finish the project.|과제를 끝내라.
10-38|citizen|시민, 국민|I am a citizen of Seoul.|나는 서울 시민이다.
10-38|president|대통령; 회장|Who is the president?|대통령은 누구니?
10-38|information|정보, 자료|Get information.|정보를 얻어라.
10-38|program|(TV 등의) 프로그램|Watch a TV program.|TV 프로그램을 봐라.
10-38|traditional|전통적인|Look at traditional clothes.|전통 의상을 봐라.
10-38|ask for|~을 요청하다|Ask for help.|도움을 요청해라.
10-38|these days|요즘|I am busy these days.|나는 요즘 바쁘다.
10-39|air|공기|Fresh air is good.|신선한 공기는 좋다.
10-39|fire|불; 화재|Fire is hot.|불은 뜨겁다.
10-39|sand|모래|Play with sand.|모래를 가지고 놀아라.
10-39|rock|바위, 암석|The rock is hard.|바위는 단단하다.
10-39|earth|지구|The earth is round.|지구는 둥글다.
10-39|power|힘; 동력|Solar power.|태양열 동력.
10-39|glass|유리; 유리잔|Be careful with glass.|유리를 조심해라.
10-39|reuse|재사용하다|Reuse bottles.|병을 재사용해라.
10-39|recycle|재활용하다|Recycle paper.|종이를 재활용해라.
10-39|plastic|플라스틱|Don't use plastic.|플라스틱을 사용하지 마라.
10-39|trash|쓰레기|Pick up trash.|쓰레기를 주워라.
10-39|save|구하다; 절약하다|Save water.|물을 절약해라.
10-39|energy|에너지|Save energy.|에너지를 절약해라.
10-39|bill|청구서; 지폐|Pay the bill.|요금(청구서)을 내라.
10-39|protect|보호하다, 지키다|Protect nature.|자연을 보호해라.
10-39|dangerous|위험한|It is dangerous.|그것은 위험하다.
10-39|float|(물 위에) 뜨다|Wood floats.|나무는 뜬다.
10-39|environment|환경|Clean environment.|깨끗한 환경.
10-39|throw away|버리다|Don't throw away food.|음식을 버리지 마라.
10-39|be worried about|~에 대해 걱정하다|I am worried about you.|나는 네가 걱정된다.
10-40|help|돕다, 도움|Can you help me?|나를 도와줄 수 있니?
10-40|human|인간, 사람|We are humans.|우리는 인간이다.
10-40|country|나라; 시골|Which country?|어느 나라이니?
10-40|peace|평화|We want peace.|우리는 평화를 원한다.
10-40|war|전쟁|Stop the war.|전쟁을 멈춰라.
10-40|website|웹사이트|Visit the website.|웹사이트를 방문해라.
10-40|spread|퍼지다; 퍼뜨리다|News spreads fast.|뉴스는 빨리 퍼진다.
10-40|chat|수다 떨다, 채팅하다|Let's chat.|채팅하자.
10-40|post|(웹사이트에) 올리다|Post a photo.|사진을 올려라.
10-40|online|온라인의|Play games online.|온라인으로 게임을 해라.
10-40|explore|탐험하다, 답사하다|Explore the world.|세상을 탐험해라.
10-40|palace|궁전|The king lives in a palace.|왕은 궁전에 산다.
10-40|actually|사실은; 실제로|Actually, I am busy.|사실은, 나는 바쁘다.
10-40|science|과학|I like science.|나는 과학을 좋아한다.
10-40|culture|문화|Learn about Korean culture.|한국 문화에 대해 배워라.
10-40|universe|우주|The universe is big.|우주는 크다.
10-40|language|언어, 말|I speak two languages.|나는 두 가지 언어를 말한다.
10-40|foreigner|외국인|He is a foreigner.|그는 외국인이다.
10-40|believe in|~을 믿다|Believe in yourself.|너 자신을 믿어라.
10-40|around the world|전 세계에|Travel around the world.|전 세계를 여행해라.

12-1|learn|[동] 배우다, 외우다|I learn English.|나는 영어를 배운다.
12-1|speak|[동] 말하다, 연설하다|Don't speak loudly.|크게 말하지 마라.
12-1|something|[대] 무엇인가, 어떤 것|I need something.|나는 무언가가 필요하다.
12-1|try|[동] 해보다, 노력하다|Try again.|다시 시도해라.
12-1|enjoy|[동] 즐기다|Enjoy the game.|게임을 즐겨라.
12-1|because|[접] 왜냐하면, ~이기 때문에|I smile because I'm happy.|나는 행복해서 웃는다.
12-1|than|[접] ~보다|It is bigger than that.|그것은 저것보다 크다.
12-1|before|[전] 앞에, [부] 이전에|Come home before dark.|어두워지기 전에 집에 와라.
12-1|oneself|[대] 자기 자신이, 자기 자신을|Know oneself.|자신을 알아라.
12-1|understand|[동] 이해하다, 알다|I understand you.|나는 너를 이해한다.
12-1|become|[동] ~이 되다|It will become a butterfly.|그것은 나비가 될 것이다.
12-1|always|[부] 언제나, 항상|He is always late.|그는 항상 늦는다.
12-1|which|[대] 어느 것, [형] 어느|Which is yours?|어느 것이 네 것이니?
12-1|really|[부] 정말로, 참으로|I am really sorry.|정말 미안하다.
12-1|away|[부] 떨어져서, 저쪽에|Run away.|도망가라.
12-1|visit|[동] 방문하다, [명] 방문|Please visit us.|우리를 방문해 주세요.
12-1|please|[부] 부디, [동] 기쁘게 하다|The song pleased me.|그 노래는 나를 기쁘게 했다.
12-1|stay|[동] 머무르다, [명] 체류|Stay with me.|나와 함께 머물러라.
12-1|hope|[동] 희망하다, 바라다|I hope to win.|나는 이기기를 바란다.
12-1|any|[형] 무언가의, 조금도|Do you have any pets?|너는 애완동물이 있니?
12-1|let|[동] ~시키다|Let me go.|나를 가게 해줘.
12-1|beautiful|[형] 아름다운|The flower is beautiful.|그 꽃은 아름답다.
12-1|window|[명] 창문, 창|Open the window.|창문을 열어라.
12-1|sure|[형] 확실한, 믿을 수 있는|I am sure.|나는 확신한다.
12-1|almost|[부] 거의|It is almost time.|거의 시간이 다 됐다.
12-1|without|[전] ~없이, ~이 없으면|Don't go without me.|나 없이 가지 마라.
12-1|own|[형] 자기 자신의, [동] 소유하다|My own room.|나 자신의 방.
12-1|such|[형] 그러한, 이러한|He is such a nice boy.|그는 정말(그러한) 착한 소년이다.
12-1|during|[부] ~동안, ~하는 중|Quiet during the movie.|영화 보는 동안 조용히.
12-1|river|[명] 강|The river flows.|강이 흐른다.
12-2|perhaps|[부] 아마, 어쩌면|Perhaps he is sick.|아마 그는 아플 것이다.
12-2|shout|[동] 외치다, [명] 외침|Do not shout.|소리치지 마라.
12-2|example|[명] 예, 보기|For example.|예를 들어.
12-2|off|[부] 떨어져, [전] ~에서 떨어져|Turn off the light.|불을 꺼라.
12-2|far|[형] 먼, [부] 멀리|Is it far from here?|여기서 먼가요?
12-2|both|[형] 양쪽의, [대] 양쪽 다|I like both.|나는 둘 다 좋다.
12-2|busy|[형] 바쁜, 번화한|I am busy today.|나는 오늘 바쁘다.
12-2|everything|[대] 모든 것, 무엇이나 다|Everything is fine.|모든 것이 괜찮다.
12-2|afraid|[형] 두려워하여, 걱정하여|Don't be afraid.|두려워하지 마라.
12-2|nothing|[대] 아무것도 ~ 않다|I have nothing.|나는 아무것도 없다.
12-2|someone|[대] 어떤 사람, 누군가|Someone called.|누군가 전화했다.
12-2|garden|[명] 정원|Flowers in the garden.|정원의 꽃들.
12-2|trip|[명] 여행|Have a nice trip.|즐거운 여행 되세요.
12-2|quite|[부] 아주, 꽤|It is quite hot.|꽤 덥다.
12-2|seem|[동] ~처럼 보이다|You seem happy.|너는 행복해 보인다.
12-2|travel|[명] 여행, [동] 여행하다|I want to travel.|나는 여행하고 싶다.
12-2|piece|[명] 조각, 한 개|A piece of cake.|케이크 한 조각.
12-2|history|[명] 역사|Study history.|역사를 공부해라.
12-2|light|[명] 빛, [형] 밝은|Turn on the light.|불을 켜라.
12-2|along|[전] ~을 따라서|Walk along the river.|강을 따라 걸어라.
12-2|carry|[동] 나르다, 가지고 가다|Carry this box.|이 상자를 날라라.
12-2|outside|[명] 바깥쪽, [부] 바깥쪽으로|Let's play outside.|밖에서 놀자.
12-2|tired|[형] 피곤한, 싫증난|I am so tired.|나는 너무 피곤하다.
12-2|worry|[동] 걱정하다, 괴롭히다|Don't worry.|걱정하지 마라.
12-2|side|[명] 쪽, 옆|Stand by my side.|내 옆에 서라.
12-2|between|[전] ~의 사이에|Sit between us.|우리 사이에 앉아라.
12-2|front|[명] 앞, [형] 앞의|In front of me.|내 앞에서.
12-2|ever|[부] 일찍이, 언젠가|Have you ever seen it?|그것을 본 적 있니?
12-2|famous|[형] 유명한|A famous singer.|유명한 가수.
12-2|climb|[동] 오르다, 기어오르다|Climb the mountain.|산을 올라라.
12-3|behind|[전] ~의 뒤에, [부] 뒤에|Look behind.|뒤를 봐라.
12-3|pay|[동] 치르다, 지불하다|You must pay.|너는 지불해야 한다.
12-3|hill|[명] 언덕, 작은 산|Up the hill.|언덕 위로.
12-3|else|[부] 그 밖에|Anything else?|그 밖에 또?
12-3|cover|[동] 덮다, [명] 덮개|Cover your eyes.|눈을 가려라.
12-3|true|[형] 진실한, 진짜의|It is true.|그것은 사실이다.
12-3|husband|[명] 남편|Her husband.|그녀의 남편.
12-3|mistake|[명] 잘못, [동] 틀리다|It was a mistake.|그것은 실수였다.
12-3|restaurant|[명] 식당, 레스토랑|Eat at a restaurant.|식당에서 먹다.
12-3|carefully|[부] 주의 깊게|Listen carefully.|주의 깊게 들어라.
12-3|yet|[부] 아직, 벌써|Not yet.|아직 아니다.
12-3|everybody|[대] 누구나 다|Everybody knows.|모두가 안다.
12-3|dance|[동] 춤추다, [명] 춤|Let's dance.|춤추자.
12-3|album|[명] 앨범, 사진첩|Look at the album.|앨범을 봐라.
12-3|airport|[명] 공항|Go to the airport.|공항으로 가라.
12-3|player|[명] 선수|Soccer player.|축구 선수.
12-3|cave|[명] 동굴|A dark cave.|어두운 동굴.
12-3|hurry|[동] 서두르다|Hurry up.|서둘러라.
12-3|hospital|[명] 병원|Go to the hospital.|병원에 가라.
12-3|dream|[명] 꿈, [동] 꿈꾸다|I had a dream.|나는 꿈을 꿨다.
12-3|dead|[형] 죽은|The tree is dead.|그 나무는 죽었다.
12-3|whose|[대] 누구의|Whose bag is this?|이것은 누구의 가방이니?
12-3|plan|[명] 계획, [동] 계획하다|Make a plan.|계획을 세워라.
12-3|careful|[형] 주의 깊은|Be careful.|조심해라.
12-3|excuse|[동] 용서하다, [명] 변명|Excuse me.|실례합니다.
12-3|follow|[동] 따르다|Follow me.|나를 따라와라.
12-3|ski|[동] 스키를 타다|I like to ski.|나는 스키 타는 것을 좋아한다.
12-3|speech|[명] 말, 연설|Make a speech.|연설을 해라.
12-3|toward|[전] ~쪽으로|Walk toward the door.|문쪽으로 걸어가라.
12-3|corner|[명] 구석, 모퉁이|In the corner.|구석에.
12-4|maybe|[부] 아마, 어쩌면|Maybe tomorrow.|아마도 내일.
12-4|special|[형] 특별한|A special gift.|특별한 선물.
12-4|useful|[형] 쓸모 있는, 유용한|It is useful.|그것은 유용하다.
12-4|rock|[명] 바위|A hard rock.|단단한 바위.
12-4|reason|[명] 이유, 이성|Give me a reason.|이유를 대라.
12-4|science|[명] 과학|I like science.|나는 과학을 좋아한다.
12-4|museum|[명] 박물관|Visit the museum.|박물관을 방문해라.
12-4|wonder|[동] 이상하게 생각하다|I wonder why.|나는 왜 그런지 궁금하다.
12-4|another|[형] 또 하나의|Try another one.|다른 것을 시도해 봐라.
12-4|life|[명] 생명, 생활|Happy life.|행복한 삶.
12-4|city|[명] 도시|A big city.|큰 도시.
12-4|each|[형] 각각의|Each student.|각각의 학생.
12-4|poster|[명] 포스터|Look at the poster.|포스터를 봐라.
12-4|sometimes|[부] 가끔|Sometimes I swim.|가끔 나는 수영한다.
12-4|inch|[명] 인치|One inch.|1인치.
12-4|should|[조] ~일 것이다|You should go.|너는 가야 한다.
12-4|month|[명] 달, 1개월|Last month.|지난달.
12-4|class|[명] 학급, 수업|In the class.|교실(수업)에서.
12-4|later|[부] 나중에|See you later.|나중에 봐.
12-4|great|[형] 위대한, 큰|A great man.|위대한 사람.
12-4|town|[명] 읍, 도시|Small town.|작은 마을.
12-4|feel|[동] 느끼다|I feel good.|기분이 좋다.
12-4|wait|[동] 기다리다|Wait here.|여기서 기다려라.
12-4|road|[명] 길, 도로|Cross the road.|길을 건너라.
12-4|interesting|[형] 흥미 있는|An interesting book.|재미있는 책.
12-4|glove|[명] 장갑|Put on a glove.|장갑을 껴라.
12-4|cream|[명] 크림|Ice cream.|아이스크림.
12-4|mask|[명] 가면, 복면|Wear a mask.|마스크를 써라.
12-4|mean|[동] 의미하다|What do you mean?|무슨 뜻이니?
12-4|runner|[명] 달리는 사람|A fast runner.|빠른 주자.
12-5|pool|[명] 수영장, 물웅덩이|Swim in the pool.|수영장에서 수영해라.
12-5|show|[동] 보이다, 안내하다|Show me.|나에게 보여줘.
12-5|animal|[명] 동물|Wild animal.|야생 동물.
12-5|question|[명] 질문, 문제|Ask a question.|질문을 해라.
12-5|bring|[동] 가져오다, 데려오다|Bring it here.|그것을 이리로 가져와라.
12-5|minute|[명] 분, 순간|Wait a minute.|잠시만 기다려.
12-5|anything|[대] 무엇인가|Do you need anything?|뭐 필요한 거 있니?
12-5|through|[전] ~을 통하여|Go through the door.|문을 통과해 가라.
12-5|low|[형] 낮은|A low wall.|낮은 벽.
12-5|need|[동] 필요로 하다|I need help.|나는 도움이 필요하다.
12-5|part|[명] 부분, 일부|Part of the team.|팀의 일부.
12-5|course|[명] 진로, 과정|Of course.|물론이지.
12-5|even|[부] 조차도|Even a child knows.|어린아이조차 안다.
12-5|interest|[명] 흥미, 관심|I have no interest.|나는 관심이 없다.
12-5|glad|[형] 기쁜|I am glad.|나는 기쁘다.
12-5|remember|[동] 기억하다|Remember me.|나를 기억해라.
12-5|arrive|[동] 도착하다|We arrived late.|우리는 늦게 도착했다.
12-5|enough|[형] 충분한|Enough money.|충분한 돈.
12-5|doctor|[명] 의사, 박사|See a doctor.|의사를 만나라.
12-5|street|[명] 거리|On the street.|거리에서.
12-5|leader|[명] 지도자|A good leader.|훌륭한 지도자.
12-5|able|[형] ~할 수 있는|Be able to swim.|수영할 수 있다.
12-5|usually|[부] 보통, 대개|I usually walk.|나는 보통 걷는다.
12-5|catch|[동] 붙잡다|Catch the ball.|공을 잡아라.
12-5|idea|[명] 생각, 관념|Good idea.|좋은 생각.
12-5|forget|[동] 잊다|Don't forget.|잊지 마라.
12-5|sleep|[동] 자다|Go to sleep.|자러 가라.
12-5|tomorrow|[명,부] 내일|See you tomorrow.|내일 보자.
12-5|sorry|[형] 미안한|I am sorry.|미안해.
12-5|job|[명] 일, 직업|Good job.|잘했어(좋은 일).
12-6|open|[동] 열다, [형] 열려 있는|Please open your book.|책을 펴세요(여세요).
12-6|paper|[명] 종이, 답안, 신문|I need a piece of paper.|나는 종이 한 장이 필요하다.
12-6|cold|[형] 추운, [명] 추위, 감기|It is very cold outside.|밖은 매우 춥다.
12-6|laugh|[동] 웃다, [명] 웃음|They laugh at the joke.|그들은 농담을 보고 웃는다.
12-6|plane|[명] 비행기|The plane is flying high.|비행기가 높이 날고 있다.
12-6|early|[부] 일찍, [형] 이른|Get up early.|일찍 일어나라.
12-6|late|[형] 늦은, [부] 늦게|Better late than never.|늦더라도 안 하는 것보다는 낫다.
12-6|difficult|[형] 어려운, 곤란한|The exam was difficult.|시험은 어려웠다.
12-6|everyone|[대] 모두 다, 누구나 다|Everyone likes him.|모두가 그를 좋아한다.
12-6|happen|[동] (일, 사건 등이) 일어나다|Accidents can happen.|사고는 일어날 수 있다.
12-6|finish|[동] 끝내다, 끝나다|Did you finish your homework?|숙제를 끝냈니?
12-6|teach|[동] 가르치다|My dad teaches me math.|아빠는 나에게 수학을 가르쳐 주신다.
12-6|mountain|[명] 산|We climbed the mountain.|우리는 산을 올랐다.
12-6|sound|[명] 소리, [동] 소리가 나다|That sounds great.|그거 멋지게 들린다(좋은 생각이다).
12-6|change|[동] 바꾸다, [명] 변화, 잔돈|Change your clothes.|옷을 갈아입어라.
12-6|suddenly|[부] 갑자기|It stopped suddenly.|그것이 갑자기 멈췄다.
12-6|wonderful|[형] 놀라운, 훌륭한|It is a wonderful place.|그곳은 훌륭한 장소다.
12-6|birthday|[명] 생일|When is your birthday?|네 생일은 언제니?
12-6|easy|[형] 쉬운|English is easy.|영어는 쉽다.
12-6|important|[형] 중요한, 중대한|Family is important.|가족은 중요하다.
12-6|short|[형] 짧은, 키가 작은|The summer night is short.|여름밤은 짧다.
12-6|break|[동] 부수다, 깨지다, 어기다|Don't break the rule.|규칙을 어기지 마라.
12-6|already|[부] 벌써, 이미|It is already dark.|벌써 어둡다.
12-6|pound|파운드|The cake weighs a pound.|그 케이크는 무게가 1파운드다.
12-6|quick|[형] 빠른, [부] 빨리|Be quick!|서둘러라(빨리 해라)!
12-6|club|[명] 클럽, 곤봉|I joined a soccer club.|나는 축구 클럽에 가입했다.
12-6|close|[동] 닫다, [형] 가까운|Close your eyes.|눈을 감아라.
12-6|since|[전, 접] ~이래, ~이므로|I have known him since 2015.|나는 2015년부터 그를 알고 있다.
12-6|print|[동] 인쇄하다, [명] 인쇄(물)|Print this page.|이 페이지를 인쇄해라.
12-6|building|[명] 건물|Look at that high building.|저 높은 건물을 봐라.
12-7|east|[명] 동쪽, [형] 동쪽의|The sun rises in the east.|해는 동쪽에서 뜬다.
12-7|darkness|[명] 어둠|Lights shine in the darkness.|어둠 속에서 불빛이 빛난다.
12-7|dark|[형] 어두운, [명] 어둠|The room is dark.|방이 어둡다.
12-7|bicycle|[명] 자전거|I can ride a bicycle.|나는 자전거를 탈 수 있다.
12-7|college|[명] 단과 대학, 대학|She wants to go to college.|그녀는 대학에 가고 싶어 한다.
12-7|heart|[명] 심장, 마음, 중심|Listen to your heart.|너의 마음(심장) 소리를 들어라.
12-7|lady|[명] 숙녀, 귀부인|Ladies and gentlemen.|신사 숙녀 여러분.
12-7|radio|[명] 라디오|I listen to the radio.|나는 라디오를 듣는다.
12-7|indoor|[형] 실내의, 옥내의|Bowling is an indoor sport.|볼링은 실내 스포츠다.
12-7|lake|[명] 호수|The lake is deep.|호수는 깊다.
12-7|rain|[명] 비, [동] 비가 내리다|It looks like rain.|비가 올 것 같다.
12-7|drive|[동] 운전하다, 드라이브하다|My dad drives a bus.|우리 아빠는 버스를 운전하신다.
12-7|tennis|[명] 테니스, 정구|Let's play tennis.|테니스 치자.
12-7|under|[전] ~아래에|The cat is under the table.|고양이가 탁자 아래에 있다.
12-7|shirt|[명] 와이셔츠, 셔츠|He wears a blue shirt.|그는 파란 셔츠를 입는다.
12-7|die|[동] 죽다|All living things die.|모든 생명체는 죽는다.
12-7|gold|[명] 금, 금화, [형] 금의|Silence is gold.|침묵은 금이다.
12-7|ship|[명] 배|A big ship is in the sea.|큰 배가 바다에 있다.
12-7|warm|[형] 따뜻한|Keep yourself warm.|몸을 따뜻하게 해라.
12-7|reader|[명] 독자, 독서가|This book is for young readers.|이 책은 어린 독자들을 위한 것이다.
12-7|clothes|[명] 옷, 의복|Put on your clothes.|옷을 입어라.
12-7|seat|[명] 좌석|Please take a seat.|자리에 앉으세요.
12-7|poor|[형] 가난한, 가엾은, 서투른|He helps poor people.|그는 가난한 사람들을 돕는다.
12-7|make|[동] 만들다|Make a wish.|소원을 빌어라(만들어라).
12-7|across|[부] 가로질러, [전] ~을 가로질러|Run across the field.|들판을 가로질러 달려라.
12-7|believe|[동] 믿다|Do you believe in ghosts?|너는 유령을 믿니?
12-7|library|[명] 도서관, 도서실|We study in the library.|우리는 도서관에서 공부한다.
12-7|holiday|[명] 휴일, 휴가|Tomorrow is a holiday.|내일은 휴일이다.
12-7|lately|[부] 요즘, 최근|I haven't seen him lately.|나는 최근에 그를 본 적이 없다.
12-7|ground|[명] 땅, 운동장|Don't sit on the ground.|땅바닥에 앉지 마라.
12-8|look|[동] 보다, ~으로 보이다|Look at the sky.|하늘을 봐라.
12-8|spend|[동] (돈을) 소비하다, (시간을) 보내다|I spend time reading.|나는 독서하며 시간을 보낸다.
12-8|field|[명] 들, 밭, 경기장|Kids play on the field.|아이들이 경기장에서 논다.
12-8|strong|[형] 강한, 튼튼한|You are strong.|너는 튼튼하다.
12-8|camera|[명] 카메라, 사진기|I have a digital camera.|나는 디지털카메라를 가지고 있다.
12-8|phone|[명] 전화, [동] 전화하다|Use my phone.|내 전화를 써라.
12-8|mile|[명] 마일|It is a mile away.|그것은 1마일 떨어져 있다.
12-8|sick|[형] 병든, 싫증난|I feel sick.|나는 아프다.
12-8|member|[명] 회원, 일원|Are you a member?|너는 회원이니?
12-8|return|[동] 돌아오다(가다), 돌려주다|When will you return?|언제 돌아올 거니?
12-8|until|[전, 접] ~까지|Wait until I come.|내가 올 때까지 기다려라.
12-8|ready|[형] 준비된|Lunch is ready.|점심이 준비됐다.
12-8|pull|[동] 잡아당기다, 끌다|Pull the rope.|밧줄을 당겨라.
12-8|alone|[형] 홀로, [부] 홀로|I prefer to be alone.|나는 혼자 있는 것을 선호한다.
12-8|tape|[명] 테이프|I need some tape.|나는 테이프가 좀 필요하다.
12-8|living room|[명] 거실|Dad is in the living room.|아빠는 거실에 계신다.
12-8|build|[동] 짓다, 건축하다|Let's build a sandcastle.|모래성을 짓자.
12-8|dollar|[명] 달러 (화폐 단위)|Here is a dollar.|여기 1달러가 있다.
12-8|half|[명] 절반, [형] 절반의|Cut the apple in half.|사과를 반으로 잘라라.
12-8|ride|[동] (말, 탈것을) 타다|Can you ride a horse?|너는 말을 탈 수 있니?
12-8|clean|[형] 깨끗한, [동] 청소하다|Clean air is important.|깨끗한 공기는 중요하다.
12-8|telephone|[명] 전화|The telephone is ringing.|전화가 울리고 있다.
12-8|wash|[동] 씻다, 세탁하다|Wash the dishes.|설거지를 해라(접시를 씻어라).
12-8|among|[전] ~의 사이에|A wolf among sheep.|양들 사이의 늑대.
12-8|office|[명] 사무소, 회사, 관청|My mom works in an office.|엄마는 회사에서 일하신다.
12-8|several|[형] 여럿의, 몇 사람(개)의|I have several pens.|나는 펜을 여러 자루 가지고 있다.
12-8|voice|[명] 목소리|She has a beautiful voice.|그녀는 아름다운 목소리를 가졌다.
12-8|win|[동] 이기다, 얻다|I hope you win.|네가 이기기를 바란다.
12-8|island|[명] 섬|It is a desert island.|그곳은 무인도다.
12-8|sell|[동] 팔다, 팔리다|They sell books.|그들은 책을 판다.
12-9|full|[형] 가득한, 충분한|I am full.|나는 배부르다.
12-9|aunt|[명] 고모, 이모, 숙모|My aunt is a nurse.|나의 이모는 간호사다.
12-9|paint|[동] 그리다, [명] 페인트|Paint a picture.|그림을 그려라.
12-9|though|[접] ~이긴 하지만|Though young, he is wise.|어리지만 그는 지혜롭다.
12-9|jump|[동] 뛰다, [명] 도약|Jump over the box.|상자를 뛰어넘어라.
12-9|reach|[동] 도착하다, 닿다|I cannot reach the shelf.|선반에 손이 닿지 않는다.
12-9|hole|[명] 구멍|There is a hole in my sock.|내 양말에 구멍이 있다.
12-9|floor|[명] 바닥, 층|The floor is wet.|바닥이 젖었다.
12-9|inside|[명] 안쪽, [전] ~의 안쪽에|Let's stay inside.|안에 머물자.
12-9|village|[명] 마을|It is a quiet village.|조용한 마을이다.
12-9|golden|[형] 금으로 만든, 황금빛의|A golden crown.|금으로 만든 왕관.
12-9|skate|[명] 스케이트, [동] 스케이트를 타다|Let's go to skate.|스케이트 타러 가자.
12-9|wood|[명] 나무, 목재|Chop some wood.|장작(나무)을 좀 패라.
12-9|person|[명] 사람|Be a good person.|좋은 사람이 되어라.
12-9|strange|[형] 이상한, 낯선|That's strange.|그거 이상하다.
12-9|wear|[동] 입고(쓰고) 있다, 착용하다|Wear a hat.|모자를 써라.
12-9|trouble|[명] 문제, [동] 괴롭히다|Don't cause trouble.|문제를 일으키지 마라.
12-9|problem|[명] 문제|No problem.|문제없어.
12-9|invite|[동] 초대하다|I invite you to dinner.|너를 저녁 식사에 초대한다.
12-9|language|[명] 언어, 국어|What language do you speak?|너는 어떤 언어를 쓰니?
12-9|lose|[동] 잃다, 지다|Don't lose your way.|길을 잃지 마라.
12-9|different|[형] 다른|We have different ideas.|우리는 서로 다른 생각을 가지고 있다.
12-9|surprise|[동] 놀라게 하다 [명] 놀람|Don't surprise me.|나를 놀라게 하지 마라.
12-9|welcome|[동] 환영하다, [명] 환영|You are welcome.|천만에요(환영합니다).
12-9|decide|[동] 결정(판단)하다, 결심하다|I cannot decide.|나는 결정할 수 없다.
12-9|dictionary|[명] 사전|Use an English dictionary.|영어 사전을 사용해라.
12-9|shake|[동] 흔들다, 흔들리다|Shake the bottle.|병을 흔들어라.
12-9|foreign|[형] 외국의|Do you speak a foreign language?|너는 외국어를 할 줄 아니?
12-9|culture|[명] 문화, 교양|Korean culture.|한국 문화.
12-9|noise|[명] 소음|Don't make a noise.|소음을 내지 마라.
12-10|church|[명] 교회|A church is near here.|교회가 이 근처에 있다.
12-10|easily|[부] 쉽게, 용이하게|He solved it easily.|그는 그것을 쉽게 풀었다.
12-10|cloud|[명] 구름|The cloud covers the sun.|구름이 해를 가린다.
12-10|cool|[형] 시원한, 냉정한|Have a cool drink.|시원한 음료를 마셔라.
12-10|arm|[명] 팔|He broke his arm.|그는 팔이 부러졌다.
12-10|pocket|[명] 호주머니 [동] 호주머니에 넣다|I have coins in my pocket.|나는 주머니에 동전이 있다.
12-10|moment|[명] 순간|Just a moment.|잠시만요.
12-10|ticket|[명] 표, 입장권|Show me your ticket.|표를 보여 주세요.
12-10|basketball|[명] 농구|I play basketball well.|나는 농구를 잘한다.
12-10|line|[명] 선, 줄|Draw a line.|선을 그려라.
12-10|shoe|[명] 신발, 신|One shoe is missing.|신발 한 짝이 없어졌다.
12-10|fight|[명] 전투, [동] 싸우다|Don't fight with friends.|친구들과 싸우지 마라.
12-10|police|[명] 경찰|Ask the police.|경찰에게 물어봐라.
12-10|Mt.|[명] ~산|Mt. Everest is high.|에베레스트산은 높다.
12-10|unhappy|[형] 불행한, 행복하지 않은|Don't be unhappy.|불행해하지 마라.
12-10|meat|[명] 고기|Cook the meat.|고기를 요리해라.
12-10|marry|[동] 결혼하다|Will you marry me?|나와 결혼해 줄래?
12-10|difference|[명] 다름, 차이|Tell me the difference.|차이점을 말해줘.
12-10|heaven|[명] 천국, 하늘|Go to heaven.|천국에 가다.
12-10|harvest|[명] 수확(물), [동] 수확하다|It is harvest time.|수확의 계절이다.
12-10|century|[명] 100년, 세기|This is the 21st century.|지금은 21세기다.
12-10|soldier|[명] 군인, 병사|The soldier marches.|군인이 행진한다.
12-10|age|[명] 나이, 시대|Act your age.|나잇값을 해라.
12-10|weather|[명] 날씨, 기상|The weather is nice.|날씨가 좋다.
12-10|past|[형] 과거의, [명] 과거|In the past.|과거에.
12-10|excite|[동] 흥분 시키다|Do not excite the dog.|개를 흥분시키지 마라.
12-10|fact|[명] 사실|It is a known fact.|그것은 알려진 사실이다.
12-10|television|[명] 텔레비전|Turn on the television.|텔레비전을 켜라.
12-10|stone|[명] 돌, 석조|It is made of stone.|그것은 돌로 만들어졌다.
12-10|foreigner|[명] 외국인, 국외자|He is a foreigner.|그는 외국인이다.
12-11|however|[부] 아무리 ~해도, 그러나|However, I was late.|그러나, 나는 늦었다.
12-11|accident|[명] 사고, 우연|It was an accident.|그것은 사고였다.
12-11|finally|[부] 마침내, 최후로|Finally, we won.|마침내 우리가 이겼다.
12-11|pole|[명] 막대기, 장대|A long pole.|긴 막대기.
12-11|idle|[형] 게으른|Don't be idle.|게으름 피우지 마라.
12-11|guess|[동] 추측하다, [명] 추측|Guess who?|누군지 맞춰봐?
12-11|treat|[동] 다루다, 대접하다|Treat others well.|다른 사람들을 잘 대우해라.
12-11|Chinese|[형] 중국의, [명] 중국어|I learn Chinese.|나는 중국어를 배운다.
12-11|wild|[형] 야생의, 난폭한|Wild flowers.|야생화.
12-11|record|[명] 기록, [동] 기록하다|Break a record.|기록을 깨다.
12-11|factory|[명] 공장|A shoe factory.|신발 공장.
12-11|mix|[동] 섞다|Mix yellow and blue.|노란색과 파란색을 섞어라.
12-11|agree|[동] 동의하다|I agree with you.|나는 너에게 동의한다.
12-11|information|[명] 정보, 안내|Get information.|정보를 얻다.
12-11|shopkeeper|[명] 가게 주인|The shopkeeper is kind.|가게 주인은 친절하다.
12-11|popular|[형] 인기 있는|A popular song.|인기 있는 노래.
12-11|forest|[명] 숲|Birds in the forest.|숲속의 새들.
12-11|future|[명] 미래, [형] 미래의|In the near future.|가까운 미래에.
12-11|autumn|[명] 가을|Leaves fall in autumn.|가을에는 낙엽이 진다.
12-11|coin|[명] 동전|Flip a coin.|동전을 던져라.
12-11|choose|[동] 선택하다|Choose carefully.|신중하게 선택해라.
12-11|vacation|[명] 휴가|Summer vacation.|여름 휴가(방학).
12-11|continue|[동] 계속하다|Continue studying.|공부를 계속해라.
12-11|southern|[형] 남쪽의|The southern part.|남쪽 부분.
12-11|business|[명] 사업, 일|My dad does business.|아빠는 사업을 하신다.
12-11|introduce|[동] 소개하다|Let me introduce myself.|제 소개를 하겠습니다.
12-11|practice|[명] 연습, [동] 연습하다|Practice makes perfect.|연습이 완벽을 만든다.
12-11|neighbor|[명] 이웃 사람|Help your neighbor.|이웃을 도와라.
12-11|amount|[명] 양, 액수|A large amount.|많은 양.
12-11|dangerous|[형] 위험한|Fire is dangerous.|불은 위험하다.
12-12|space|[명] 우주, 공간|Travel to space.|우주로 여행하다.
12-12|traffic|[명] 교통|Heavy traffic.|교통 체증(복잡한 교통).
12-12|expensive|[형] 비싼|An expensive car.|비싼 차.
12-12|machine|[명] 기계|A washing machine.|세탁기.
12-12|middle|[형] 한가운데의, [명] 중앙|In the middle.|한가운데에.
12-12|slow|[형] 느린, [부] 천천히|Turtles are slow.|거북이는 느리다.
12-12|page|[명] 쪽, 페이지|Turn the page.|페이지를 넘겨라.
12-12|mark|[명] 표, 점수, [동] 표시하다|Get a good mark.|좋은 점수를 받아라.
12-12|blackboard|[명] 칠판|Look at the blackboard.|칠판을 봐라.
12-12|scientist|[명] 과학자|She is a scientist.|그녀는 과학자이다.
12-12|grass|[명] 풀, 잔디|Green grass.|푸른 잔디.
12-12|meaning|[명] 뜻, 의미|The meaning of life.|삶의 의미.
12-12|cousin|[명] 사촌|My cousin lives here.|내 사촌은 여기에 산다.
12-12|rocket|[명] 로켓|Launch a rocket.|로켓을 발사하다.
12-12|sandwich|[명] 샌드위치|Eat a sandwich.|샌드위치를 먹다.
12-12|candy|[명] 사탕|Sweet candy.|달콤한 사탕.
12-12|number|[명] 수, 번호|What is your number?|너의 번호는 무엇이니?
12-12|gentleman|[명] 신사|Be a gentleman.|신사가 되어라.
12-12|speed|[명] 속력|High speed.|빠른 속도.
12-12|knife|[명] 칼|A sharp knife.|날카로운 칼.
12-12|clock|[명] 시계|The clock struck 12.|시계가 12시를 쳤다.
12-12|team|[명] 팀, 조|A baseball team.|야구 팀.
12-12|hurt|[동] 아프다, [명] 상처|My leg hurts.|내 다리가 아프다.
12-12|yard|[명] 마당|Play in the yard.|마당에서 놀다.
12-12|spell|[동] 철자하다|How do you spell it?|그것의 철자가 어떻게 되니?
12-12|speaker|[명] 연설자, 스피커|A good speaker.|훌륭한 연설가.
12-12|lawyer|[명] 변호사|He is a lawyer.|그는 변호사이다.
12-12|orange|[명] 오렌지|I like orange juice.|나는 오렌지 주스를 좋아한다.
12-12|throw|[동] 던지다|Throw a ball.|공을 던져라.
12-12|meter|[명] 미터|100 meters.|100미터.
12-13|meal|[명] 식사|Have a meal.|식사를 하다.
12-13|north|[명] 북쪽, [형] 북쪽의|Go north.|북쪽으로 가라.
12-13|god|[명] 신|Thank god.|신에게 감사하다.
12-13|wind|[명] 바람|The wind blows.|바람이 분다.
12-13|yellow|[형] 노란색의|A yellow bus.|노란 버스.
12-13|concert|[명] 음악회|Go to a concert.|음악회에 가다.
12-13|center|[명] 중앙|The center of town.|마을의 중심.
12-13|heavy|[형] 무거운|A heavy bag.|무거운 가방.
12-13|note|[명] 기록, [동] 적어 두다|Take a note.|메모하다.
12-13|weak|[형] 약한|I feel weak.|나는 몸이 약해진 것 같다.
12-13|dry|[형] 마른, [동] 말리다|Dry hair.|마른 머리카락.
12-13|supper|[명] 저녁밥|Eat supper.|저녁을 먹다.
12-13|noon|[명] 정오|It is noon.|정오다.
12-13|anyone|[대] 누군가|Does anyone know?|누가 아니?
12-13|rude|[형] 무례한|Don't be rude.|무례하게 굴지 마라.
12-13|normal|[형] 정상의, 평범한|A normal day.|평범한 날.
12-13|dining room|[명] 식당|Eat in the dining room.|식당에서 밥을 먹다.
12-13|south|[명] 남쪽, [형] 남쪽의|Birds fly south.|새들은 남쪽으로 날아간다.
12-13|above|[전] ~위에|Look above.|위를 봐라.
12-13|China|[명] 중국|I visited China.|나는 중국을 방문했다.
12-13|group|[명] 집단|A study group.|스터디 그룹.
12-13|guitar|[명] 기타|Play the guitar.|기타를 치다.
12-13|most|[형] 가장 많은, [대] 대부분|Most people.|대부분의 사람들.
12-13|join|[동] 결합하다, 참가하다|Join the club.|클럽에 가입하다.
12-13|bridge|[명] 다리|Cross the bridge.|다리를 건너다.
12-13|cent|[명] 센트|50 cents.|50센트.
12-13|ill|[형] 병든|He is ill.|그는 병들었다.
12-13|size|[명] 크기|What size?|무슨 사이즈?
12-13|bath|[명] 목욕|Take a bath.|목욕하다.
12-13|pond|[명] 연못|Frogs in the pond.|연못 속의 개구리들.
12-14|pair|[명] 한 쌍|A pair of shoes.|신발 한 켤레.
12-14|probably|[부] 아마|Probably not.|아마 아닐 것이다.
12-14|mad|[형] 미친, 화난|Don't get mad.|화내지 마라.
12-14|tonight|[명/부] 오늘 밤|See you tonight.|오늘 밤에 보자.
12-14|prize|[명] 상|Win a prize.|상을 타다.
12-14|instead|[부] 그 대신에|Use this instead.|대신 이것을 써라.
12-14|justice|[명] 정의|Fight for justice.|정의를 위해 싸우다.
12-14|mercy|[명] 자비|Show mercy.|자비를 베풀다.
12-14|discuss|[동] 토론하다|Let's discuss it.|그것을 토론하자.
12-14|rice|[명] 쌀, 밥|Eat rice.|밥을 먹다.
12-14|flight|[명] 비행|A long flight.|긴 비행.
12-14|fruit|[명] 과일|Fresh fruit.|신선한 과일.
12-14|monkey|[명] 원숭이|A funny monkey.|웃기는 원숭이.
12-14|million|[명] 100만|One million.|100만.
12-14|certainly|[부] 확실히, 물론|Certainly!|물론이지!
12-14|classmate|[명] 동급생|My classmate.|내 반 친구.
12-14|west|[명] 서쪽, [형] 서쪽의|Go west.|서쪽으로 가라.
12-14|map|[명] 지도|Look at the map.|지도를 봐라.
12-14|tie|[동] 매다, [명] 넥타이|Tie your shoes.|신발 끈을 매라.
12-14|push|[동] 밀다|Push the door.|문을 밀어라.
12-14|pen pal|[명] 펜팔|Write to a pen pal.|펜팔에게 편지를 쓰다.
12-14|favorite|[형] 아주 좋아하는|My favorite color.|내가 가장 좋아하는 색.
12-14|terrible|[형] 끔찍한|A terrible day.|끔찍한 날.
12-14|soft|[형] 부드러운|Soft skin.|부드러운 피부.
12-14|cow|[명] 암소|Milk the cow.|소의 젖을 짜다.
12-14|tail|[명] 꼬리|A long tail.|긴 꼬리.
12-14|aloud|[부] 소리 내어|Read aloud.|소리 내어 읽어라.
12-14|wall|[명] 벽|Paint the wall.|벽을 칠하다.
12-14|tourist|[명] 관광객|A foreign tourist.|외국인 관광객.
12-14|rise|[동] 오르다|The sun rises.|해가 뜬다.
12-15|list|[명] 목록|Make a list.|목록을 만들어라.
12-15|singer|[명] 가수|A famous singer.|유명한 가수.
12-15|lead|[동] 인도하다, 앞장서다|Lead the way.|길을 안내해라.
12-15|turtle|[명] 거북|A slow turtle.|느린 거북이.
12-15|sailor|[명] 선원|A brave sailor.|용감한 선원.
12-15|clever|[형] 영리한|A clever boy.|영리한 소년.
12-15|beach|[명] 해변|Play on the beach.|해변에서 놀다.
12-15|impressive|[형] 인상적인|An impressive sight.|인상적인 광경.
12-15|painting|[명] 그림|A beautiful painting.|아름다운 그림.
12-15|receive|[동] 받다|Receive a letter.|편지를 받다.
12-15|friendly|[형] 친절한|A friendly dog.|친절한(사람을 잘 따르는) 개.
12-15|cook|[동] 요리하다, [명] 요리사|I like to cook.|나는 요리하는 것을 좋아한다.
12-15|loud|[형] 큰소리의|A loud noise.|시끄러운 소리.
12-15|northern|[형] 북쪽의|Northern wind.|북풍.
12-15|less|[형] ~보다 적은|Eat less.|덜 먹어라.
12-15|dig|[동] 파다|Dig a hole.|구멍을 파라.
12-15|fill|[동] 채우다|Fill the cup.|컵을 채워라.
12-15|pet|[명] 애완동물|I have a pet.|나는 애완동물이 있다.
12-15|garbage|[명] 쓰레기|Pick up garbage.|쓰레기를 주워라.
12-15|lucky|[형] 운 좋은|You are lucky.|너는 운이 좋다.
12-15|secret|[명] 비밀|Keep a secret.|비밀을 지켜라.
12-15|beside|[전] ~의 곁에|Sit beside me.|내 곁에 앉아라.
12-15|shape|[명] 모양|What shape is it?|그것은 무슨 모양이니?
12-15|tiny|[형] 아주 작은|A tiny ant.|아주 작은 개미.
12-15|United States|[명] 미합중국(미국)|The United States.|미국.
12-15|feeling|[명] 느낌|A good feeling.|좋은 느낌.
12-15|statue|[명] 조각상|A stone statue.|돌로 된 조각상.
12-15|ancient|[형] 고대의|Ancient history.|고대 역사.
12-15|art|[명] 예술|I love art.|나는 예술을 사랑한다.
12-15|burn|[동] 타다|Wood burns.|나무는 탄다.
12-16|contest|[명] 경쟁, 경기|I won the contest.|나는 대회에서 우승했다.
12-16|experience|[명] 경험, [동] 경험하다|It was a good experience.|그것은 좋은 경험이었다.
12-16|date|[명] 날짜, 데이트|What is the date?|날짜가 며칠이니?
12-16|explain|[동] 설명하다|Please explain it.|그것을 설명해 주세요.
12-16|habit|[명] 습관|A good habit.|좋은 습관.
12-16|boring|[형] 지루한, 따분한|This book is boring.|이 책은 지루하다.
12-16|bother|[동] 괴롭히다, 귀찮게 굴다|Don't bother me.|나를 괴롭히지 마라.
12-16|gesture|[명] 몸짓, 손짓|He made a gesture.|그는 몸짓을 했다.
12-16|battle|[명] 전투, 싸움|Win the battle.|전투에서 이기다.
12-16|promise|[명] 약속, [동] 약속하다|Keep your promise.|약속을 지켜라.
12-16|artist|[명] 예술가, 화가|My dad is an artist.|우리 아빠는 화가시다.
12-16|nobody|[대] 아무도 ~않다|Nobody knows.|아무도 모른다.
12-16|sentence|[명] 문장|Read the sentence.|문장을 읽어라.
12-16|scholar|[명] 학자|A great scholar.|위대한 학자.
12-16|stupid|[형] 어리석은|Don't be stupid.|어리석게 굴지 마라.
12-16|rather|[부] 오히려, 꽤|It is rather cold.|꽤 춥다.
12-16|wish|[동] 바라다, [명] 소원|Make a wish.|소원을 빌어라.
12-16|drop|[동] 떨어지다, [명] 방울|Drop the ball.|공을 떨어뜨려라.
12-16|hide|[동] 숨기다, 숨다|Hide under the bed.|침대 밑에 숨어라.
12-16|forward|[부] 앞으로, [형] 앞쪽의|Look forward.|앞을 봐라.
12-16|diary|[명] 일기|Write a diary.|일기를 써라.
12-16|expect|[동] 기대하다|I expect good news.|나는 좋은 소식을 기대한다.
12-16|international|[형] 국제적인|An international school.|국제 학교.
12-16|mayor|[명] 시장|The mayor of Seoul.|서울 시장.
12-16|master|[명] 주인, [동] 습득하다|Master English.|영어를 습득해라(마스터해라).
12-16|vegetable|[명] 채소, 야채|Eat your vegetables.|채소를 먹어라.
12-16|borrow|[동] 빌리다|Can I borrow a pen?|펜을 빌릴 수 있을까?
12-16|straight|[형] 똑바른, [부] 똑바로|Go straight.|똑바로 가라.
12-16|precious|[형] 귀중한|Time is precious.|시간은 귀중하다.
12-16|beyond|[전] ~저편에, [부] 저편에|Look beyond the sea.|바다 저편을 봐라.
12-17|twice|[부] 두 번, 두 배로|I went there twice.|나는 그곳에 두 번 갔다.
12-17|celebrate|[동] 축하하다|Let's celebrate.|축하하자.
12-17|beginning|[명] 처음, 시작|From the beginning.|처음부터.
12-17|below|[전] ~의 아래에|See below.|아래를 봐라.
12-17|guest|[명] 손님|Be my guest.|사양하지 마세요(내 손님이 되어라).
12-17|plate|[명] 접시, 얇은 판|A clean plate.|깨끗한 접시.
12-17|proud|[형] 자랑스러운|I am proud of you.|나는 네가 자랑스럽다.
12-17|wake|[동] 깨다, 깨우다|Wake up!|일어나!
12-17|season|[명] 계절, 시기|My favorite season.|내가 좋아하는 계절.
12-17|shine|[동] 빛나다|The sun shines.|태양이 빛난다.
12-17|clear|[형] 맑은, [동] 깨끗하게 하다|The water is clear.|물이 맑다.
12-17|control|[명] 지배, [동] 지배하다|Control yourself.|자제해라(자신을 지배해라).
12-17|desert|[명] 사막|Camels live in the desert.|낙타는 사막에 산다.
12-17|consist|[동] ~으로 이루어지다|Water consists of H and O.|물은 수소와 산소로 이루어져 있다.
12-17|symbol|[명] 상징|A dove is a symbol of peace.|비둘기는 평화의 상징이다.
12-17|fantastic|[형] 환상적인|It was fantastic.|그것은 환상적이었다.
12-17|monument|[명] 기념비|A stone monument.|돌 기념비.
12-17|turkey|[명] 칠면조|Eat turkey.|칠면조를 먹다.
12-17|frog|[명] 개구리|A green frog.|청개구리.
12-17|fit|[형] 알맞은, [동] ~에 맞다|The shoes fit me.|그 신발은 나에게 맞다.
12-17|modern|[형] 현대의|Modern art.|현대 미술.
12-17|government|[명] 정부|The Korean government.|한국 정부.
12-17|simple|[형] 간단한, 단순한|It is simple.|그것은 간단하다.
12-17|price|[명] 값, 가격|A low price.|낮은 가격.
12-17|lazy|[형] 게으른|Don't be lazy.|게으름 피우지 마라.
12-17|chicken|[명] 닭, 닭고기|Fried chicken.|튀긴 닭(치킨).
12-17|engine|[명] 기관, 기관차|Start the engine.|엔진을 켜라.
12-17|smoke|[동] 담배 피우다, [명] 연기|No smoke.|금연(연기 없음).
12-17|ghost|[명] 유령|I saw a ghost.|나는 유령을 보았다.
12-17|madam|[명] 부인|May I help you, madam?|도와드릴까요, 부인?
12-18|nearly|[부] 거의|It is nearly noon.|거의 정오다.
12-18|smell|[동] 냄새 맡다, [명] 냄새|It smells good.|좋은 냄새가 난다.
12-18|air|[명] 공기, [동] 방송하다|Fresh air.|신선한 공기.
12-18|Spain|[명] 스페인|I went to Spain.|나는 스페인에 갔다.
12-18|lovely|[형] 사랑스러운|A lovely day.|사랑스러운 날.
12-18|stamp|[명] 우표, 도장|Put a stamp on it.|거기에 우표를 붙여라.
12-18|elect|[동] 선거하다, 뽑다|Elect a leader.|지도자를 뽑다.
12-18|limit|[명] 제한, [동] 제한하다|Speed limit.|속도제한.
12-18|whole|[형] 전체의, [명] 전체|The whole world.|전 세계.
12-18|blow|[동] 불다|The wind blows.|바람이 분다.
12-18|hall|[명] 홀, 회관|City hall.|시청(홀).
12-18|pilot|[명] 조종사|He is a pilot.|그는 조종사이다.
12-18|bottle|[명] 병|A milk bottle.|우유병.
12-18|power|[명] 힘, 능력|Knowledge is power.|아는 것이 힘이다.
12-18|serve|[동] 섬기다, (음식을) 내다|Serve dinner.|저녁을 내다.
12-18|hometown|[명] 고향|My hometown.|나의 고향.
12-18|step|[명] 걸음, 계단, [동] 걷다|Watch your step.|발밑을 조심해라.
12-18|cheap|[형] 값싼|It is cheap.|그것은 싸다.
12-18|add|[동] 더하다|Add sugar.|설탕을 더해라.
12-18|blood|[명] 피, 혈액|Red blood.|붉은 피.
12-18|wing|[명] 날개|A bird's wing.|새의 날개.
12-18|rope|[명] 밧줄|Pull the rope.|밧줄을 당겨라.
12-18|dirty|[형] 더러운|Dirty hands.|더러운 손.
12-18|fox|[명] 여우|A clever fox.|영리한 여우.
12-18|kindness|[명] 친절|Thank you for your kindness.|친절에 감사합니다.
12-18|worse|[형] 더 나쁜|It gets worse.|더 나빠진다.
12-18|gate|[명] 문, 출입문|Open the gate.|문을 열어라.
12-18|health|[명] 건강|Good health.|좋은 건강.
12-18|musician|[명] 음악가|A famous musician.|유명한 음악가.
12-18|neck|[명] 목|My neck hurts.|내 목이 아프다.
12-19|empty|[형] 빈, [동] 비우다|An empty box.|빈 상자.
12-19|sacrifice|[동] 희생하다, [명] 희생|A great sacrifice.|큰 희생.
12-19|silver|[명] 은, [형] 은(빛)의|A silver spoon.|은수저.
12-19|officer|[명] 관리, 장교|Police officer.|경찰관.
12-19|none|[대] 아무도 ~않다|None of us.|우리 중 아무도(아니다).
12-19|anyway|[부] 어쨌든|Thanks anyway.|어쨌든 고마워.
12-19|sunshine|[명] 햇빛|Bright sunshine.|밝은 햇빛.
12-19|especially|[부] 특히|I like fruit, especially apples.|나는 과일, 특히 사과를 좋아한다.
12-19|opera|[명] 오페라|Watch an opera.|오페라를 보다.
12-19|peace|[명] 평화|World peace.|세계 평화.
12-19|shut|[동] 닫다|Shut the door.|문을 닫아라.
12-19|captain|[명] 우두머리, 선장|The captain of the ship.|배의 선장.
12-19|principal|[명] 교장|The school principal.|학교 교장 선생님.
12-19|universe|[명] 우주|The vast universe.|광활한 우주.
12-19|generally|[부] 일반적으로|Generally speaking.|일반적으로 말해서.
12-19|discover|[동] 발견하다|Discover treasure.|보물을 발견하다.
12-19|engineer|[명] 기사, 기술자|An expert engineer.|전문 기술자.
12-19|value|[명] 가치|Of great value.|큰 가치가 있는.
12-19|ambitious|[형] 야망을 품은|Be ambitious.|야망을 가져라.
12-19|diligent|[형] 부지런한|A diligent student.|부지런한 학생.
12-19|forgive|[동] 용서하다|Please forgive me.|나를 용서해 주세요.
12-19|wander|[동] 떠돌아다니다|Wander around.|주위를 헤매다.
12-19|remove|[동] 옮기다, 제거하다|Remove the cover.|덮개를 치워라.
12-19|gun|[명] 총|A toy gun.|장난감 총.
12-19|leaf|[명] 나뭇잎|A green leaf.|초록색 나뭇잎.
12-19|possible|[형] 가능한|Is it possible?|그것이 가능한가?
12-19|lend|[동] 빌려 주다|Lend me a hand.|나를 도와줘라(손을 빌려줘라).
12-19|rabbit|[명] 토끼|A white rabbit.|흰 토끼.
12-19|law|[명] 법|Break the law.|법을 어기다.
12-19|somewhere|[부] 어딘가에|Let's go somewhere.|어딘가로 가자.
12-20|umbrella|[명] 우산|An umbrella stands.|우산 꽂이.
12-20|bit|[명] 조금|A little bit.|조금.
12-20|stranger|[명] 낯선 사람|Don't talk to a stranger.|낯선 사람에게 말 걸지 마라.
12-20|advice|[명] 충고, 조언|Good advice.|좋은 충고.
12-20|method|[명] 방법|A new method.|새로운 방법.
12-20|appreciate|[동] 감사하다, 감상하다|I appreciate it.|감사합니다.
12-20|adult|[명] 어른, [형] 어른의|An adult ticket.|성인용 표.
12-20|magazine|[명] 잡지|Read a magazine.|잡지를 읽다.
12-20|endure|[동] 참다, 견디다|Endure the pain.|고통을 참아라.
12-20|talent|[명] 재능|Musical talent.|음악적 재능.
12-20|protect|[동] 보호하다|Protect nature.|자연을 보호해라.
12-20|program|[명] 프로그램|TV program.|TV 프로그램.
12-20|shoulder|[명] 어깨|Touch your shoulder.|어깨를 만져라.
12-20|tear|[명] 눈물, [동] 찢다|Shed a tear.|눈물을 흘리다.
12-20|pollute|[동] 오염시키다|Don't pollute the air.|공기를 오염시키지 마라.
12-20|throat|[명] 목구멍|Sore throat.|아픈 목.
12-20|glory|[명] 영광|Morning glory.|나팔꽃(아침의 영광).
12-20|climate|[명] 기후|Mild climate.|온화한 기후.
12-20|pollution|[명] 오염|Air pollution.|대기 오염.
12-20|unless|[접] 만일 ~하지 않으면|Unless you go.|네가 가지 않는다면.
12-20|lift|[동] 들어 올리다|Lift the box.|상자를 들어 올려라.
12-20|bark|[동] 짖다|Dogs bark.|개들이 짖는다.
12-20|belong|[동] ~에 속하다|I belong to the club.|나는 그 클럽에 속해 있다.
12-20|raise|[동] 올리다|Raise your hand.|손을 들어라.
12-20|deep|[형] 깊은, [부] 깊게|A deep hole.|깊은 구멍.
12-20|form|[명] 모양, 형식|Fill out the form.|양식을 작성해라.
12-20|candle|[명] 양초|Light a candle.|초를 켜라.
12-20|Russian|[형] 러시아의|Russian doll.|러시아 인형.
12-20|funny|[형] 재미있는|A funny story.|재미있는 이야기.
12-20|host|[명] 주인|The host of the party.|파티의 주인.
12-21|although|[접] 비록 ~일지라도|Although small, it is strong.|비록 작지만, 그것은 강하다.
12-21|area|[명] 지역, 면적|A play area.|놀이 구역.
12-21|prince|[명] 왕자|The prince met a princess.|왕자는 공주를 만났다.
12-21|rush|[동] 돌진하다, [명] 돌진|Don't rush.|서두르지 마라(돌진하지 마라).
12-21|theater|[명] 극장|Let's go to the theater.|극장에 가자.
12-21|thought|[명] 생각, [동] think의 과거|That's a good thought.|그것은 좋은 생각이다.
12-21|hang|[동] 걸다, 매달다|Hang your coat here.|코트를 여기에 걸어라.
12-21|suppose|[동] 상상하다, 가정하다|I suppose so.|나도 그렇게 생각한다(가정한다).
12-21|university|[명] 대학교|Seoul National University.|서울대학교.
12-21|event|[명] 사건, 행사|A big event.|큰 행사.
12-21|message|[명] 전갈, 소식|Leave a message.|메시지를 남겨라.
12-21|metal|[명] 금속|Gold is a metal.|금은 금속이다.
12-21|communicate|[동] 의사소통하다|We communicate with words.|우리는 말로 의사소통한다.
12-21|cost|[명] 비용, [동] (비용이) 들다|How much does it cost?|비용이 얼마나 드니?
12-21|medicine|[명] 약, 의학|Take this medicine.|이 약을 먹어라.
12-21|memory|[명] 기억(력), 추억|I have a good memory.|나는 기억력이 좋다.
12-21|nervous|[형] 신경질의, 초조한|Don't be nervous.|초조해하지 마라.
12-21|queen|[명] 여왕|The queen wears a crown.|여왕은 왕관을 쓴다.
12-21|custom|[명] 관습, 습관|It is a Korean custom.|그것은 한국의 관습이다.
12-21|create|[동] 창조하다|God created the world.|신이 세상을 창조했다.
12-21|remain|[동] 남다|Only one cookie remains.|쿠키가 하나만 남았다.
12-21|cultural|[형] 문화의|A cultural event.|문화 행사.
12-21|harmony|[명] 조화, 화합|Live in harmony.|조화롭게 살아라.
12-21|model|[명] 모형, 모범|A model plane.|모형 비행기.
12-21|servant|[명] 하인|A faithful servant.|충실한 하인.
12-21|prepare|[동] 준비하다|Prepare for the test.|시험을 준비해라.
12-21|challenge|[명] 도전, [동] 도전하다|I like a challenge.|나는 도전을 좋아한다.
12-21|survive|[동] 살아남다|Plants need water to survive.|식물은 살아남기 위해 물이 필요하다.
12-21|position|[명] 위치, 입장|What is your position?|너의 위치(입장)는 무엇이니?
12-21|praise|[동] 칭찬하다, [명] 칭찬|The teacher praised him.|선생님은 그를 칭찬하셨다.
12-22|hero|[명] 영웅|He is a war hero.|그는 전쟁 영웅이다.
12-22|attractive|[형] 매력적인|She is attractive.|그녀는 매력적이다.
12-22|favor|[명] 호의, 부탁|Do me a favor.|내 부탁 하나만 들어줘.
12-22|palace|[명] 궁전|The king lives in a palace.|왕은 궁전에 산다.
12-22|repeat|[동] 반복하다|Repeat after me.|나를 따라 해라(반복해라).
12-22|citizen|[명] 시민|A good citizen.|훌륭한 시민.
12-22|unite|[동] 결합하다|We must unite.|우리는 뭉쳐야(결합해야) 한다.
12-22|warn|[동] 경고하다|I warned you.|나는 너에게 경고했다.
12-22|medical|[형] 의학의|Medical help.|의학적 도움.
12-22|devil|[명] 악마|An evil devil.|사악한 악마.
12-22|valley|[명] 골짜기, 계곡|A deep valley.|깊은 계곡.
12-22|breath|[명] 숨, 호흡|Take a deep breath.|깊게 숨을 쉬어라.
12-22|source|[명] 원천, 출처|The source of the river.|강의 발원지(원천).
12-22|harm|[명] 해, [동] 해치다|Do no harm.|해를 끼치지 마라.
12-22|wave|[명] 물결, [동] 손을 흔들다|Big waves.|큰 파도(물결).
12-22|pain|[명] 아픔, 고통|No pain, no gain.|고통 없이는 얻는 것도 없다.
12-22|taste|[명] 맛, [동] 맛이 나다|It tastes sweet.|단맛이 난다.
12-22|quarrel|[명] 싸움, [동] 말다툼하다|Don't quarrel.|말다툼하지 마라.
12-22|report|[동] 보고하다, [명] 보고서|Write a report.|보고서를 써라.
12-22|athlete|[명] 운동선수|A famous athlete.|유명한 운동선수.
12-22|bottom|[명] 밑바닥|At the bottom of the sea.|바다 밑바닥에.
12-22|condition|[명] 조건, 상태|Good condition.|좋은 상태.
12-22|sightsee|[동] 구경하다|We went sightseeing.|우리는 구경(관광)하러 갔다.
12-22|fare|[명] 요금|Bus fare.|버스 요금.
12-22|giant|[명] 거인, [형] 거대한|A huge giant.|거대한 거인.
12-22|Spanish|[형] 스페인의, [명] 스페인어|I speak Spanish.|나는 스페인어를 한다.
12-22|imagine|[동] 상상하다|Imagine that.|그것을 상상해 봐라.
12-22|wet|[형] 젖은|My hair is wet.|내 머리카락은 젖었다.
12-22|act|[명] 행위, [동] 행동하다|Think before you act.|행동하기 전에 생각해라.
12-22|clerk|[명] 점원|Ask the clerk.|점원에게 물어봐라.
12-23|grown-up|[명] 어른, [형] 성장한|Act like a grown-up.|어른처럼 행동해라.
12-23|healthy|[형] 건강한|Eat healthy food.|건강한 음식을 먹어라.
12-23|complain|[동] 불평하다|Don't complain.|불평하지 마라.
12-23|weekend|[명] 주말|Have a nice weekend.|즐거운 주말 보내.
12-23|coach|[명] 코치|Soccer coach.|축구 코치.
12-23|rose|[명] 장미|A red rose.|빨간 장미.
12-23|upon|[전] ~위에|Once upon a time.|옛날에.
12-23|dozen|[명] 1다스, 12개|A dozen eggs.|달걀 한 다스(12개).
12-23|copy|[명] 사본, [동] 베끼다|Copy this page.|이 페이지를 복사해라(베껴라).
12-23|curtain|[명] 커튼|Open the curtain.|커튼을 열어라.
12-23|market|[명] 시장|Go to the market.|시장에 가라.
12-23|wine|[명] 포도주|Red wine.|적포도주.
12-23|jacket|[명] 재킷|Wear a jacket.|재킷을 입어라.
12-23|everyday|[형] 매일의|Everyday life.|일상생활(매일의 삶).
12-23|post|[명] 우편, [동] 부치다|Post a letter.|편지를 부치다.
12-23|double|[형] 두 배의|Double bed.|2인용 침대.
12-23|asleep|[형] 잠들어 있는|The baby is asleep.|아기는 잠들어 있다.
12-23|alphabet|[명] 알파벳|The English alphabet.|영어 알파벳.
12-23|racket|[명] 라켓|Tennis racket.|테니스 라켓.
12-23|apartment|[명] 아파트|I live in an apartment.|나는 아파트에 산다.
12-23|headache|[명] 두통|I have a headache.|나는 두통이 있다.
12-23|sale|[명] 판매, 세일|On sale.|판매 중(세일 중).
12-23|salt|[명] 소금|Pass me the salt.|소금 좀 건네줘.
12-23|cookie|[명] 쿠키|Chocolate cookie.|초콜릿 쿠키.
12-23|impossible|[형] 불가능한|Nothing is impossible.|불가능한 것은 없다.
12-23|everywhere|[부] 어디에나|God is everywhere.|신은 어디에나 있다.
12-23|pants|[명] 바지|Blue pants.|파란 바지.
12-23|wide|[형] 넓은|A wide river.|넓은 강.
12-23|storm|[명] 폭풍|A heavy storm.|심한 폭풍.
12-23|medal|[명] 메달|Gold medal.|금메달.
12-24|sleepy|[형] 졸린|I feel sleepy.|나는 졸리다.
12-24|bathroom|[명] 욕실, 화장실|Go to the bathroom.|화장실에 가라.
12-24|ahead|[부] 앞에, 앞으로|Go ahead.|앞으로 가라(계속해라).
12-24|cheer|[명] 환호, [동] 환호하다|Cheer up!|기운 내(환호해)!
12-24|jam|[명] 혼잡, 잼|Traffic jam.|교통 혼잡.
12-24|picnic|[명] 소풍|Go on a picnic.|소풍 가다.
12-24|tower|[명] 탑|A high tower.|높은 탑.
12-24|strike|[동] 치다, 때리다|Strike the ball.|공을 쳐라.
12-24|midnight|[명] 자정|At midnight.|자정에.
12-24|basket|[명] 바구니|A fruit basket.|과일 바구니.
12-24|blanket|[명] 담요|A warm blanket.|따뜻한 담요.
12-24|indeed|[부] 정말로|Yes, indeed.|네, 정말로요.
12-24|certain|[형] 확실한, 어떤|I am certain.|나는 확실하다.
12-24|recorder|[명] 녹음기, 리코더|Tape recorder.|테이프 녹음기.
12-24|volleyball|[명] 배구|Play volleyball.|배구를 하다.
12-24|stove|[명] 난로|A hot stove.|뜨거운 난로.
12-24|castle|[명] 성|An old castle.|오래된 성.
12-24|tunnel|[명] 터널|A long tunnel.|긴 터널.
12-24|sharp|[형] 날카로운|A sharp knife.|날카로운 칼.
12-24|role|[명] 역할|Play a role.|역할을 하다.
12-24|helpful|[형] 도움이 되는|It was helpful.|그것은 도움이 되었다.
12-24|bookstore|[명] 서점|Go to a bookstore.|서점에 가라.
12-24|death|[명] 죽음|Life and death.|삶과 죽음.
12-24|except|[전] ~을 제외하고는|Everyone except me.|나를 제외한 모두.
12-24|excellent|[형] 우수한|Excellent work.|훌륭한 솜씨(작품).
12-24|attack|[동] 공격하다|Attack the enemy.|적을 공격해라.
12-24|enemy|[명] 적|Fight the enemy.|적과 싸워라.
12-24|honor|[명] 명예|It is an honor.|영광입니다(명예입니다).
12-24|remind|[동] 생각나게 하다|Remind me later.|나중에 다시 말해줘(생각나게 해줘).
12-24|textbook|[명] 교과서|Open your textbook.|교과서를 펴라.
12-25|wool|[명] 양털|A wool sweater.|양털 스웨터.
12-25|graduate|[동] 졸업하다|Graduate from school.|학교를 졸업하다.
12-25|painter|[명] 화가|A famous painter.|유명한 화가.
12-25|knock|[동] 두드리다|Knock on the door.|문을 두드려라.
12-25|somebody|[대] 누군가|Somebody help me!|누가 좀 도와줘요!
12-25|joy|[명] 기쁨|Jump for joy.|기뻐서 펄쩍 뛰다.
12-25|anybody|[대] 누군가, 누구도|Is anybody home?|집에 누구 있어요?
12-25|goods|[명] 상품|Leather goods.|가죽 제품(상품).
12-25|couple|[명] 한 쌍, 부부|A married couple.|부부.
12-25|handsome|[형] 잘생긴|A handsome boy.|잘생긴 소년.
12-25|p.m.|[부] 오후|2 p.m.|오후 2시.
12-25|jet|[명] 제트기|A jet plane.|제트기.
12-25|disappear|[동] 사라지다|The sun disappeared.|해가 사라졌다.
12-25|rapidly|[부] 빠르게|Run rapidly.|빠르게 달려라.
12-25|president|[명] 대통령|The president of Korea.|한국의 대통령.
12-25|feed|[동] 먹을 것을 주다|Feed the dog.|개에게 먹이를 줘라.
12-25|gym|[명] 체육관|Go to the gym.|체육관에 가라.
12-25|worst|[형] 최악의|The worst day.|최악의 날.
12-25|mail|[명] 우편, [동] 부치다|Send mail.|우편을 보내다.
12-25|department|[명] 부, 매장|Toy department.|장난감 매장.
12-25|mend|[동] 고치다|Mend the shoes.|신발을 고쳐라.
12-25|humor|[명] 유머|Sense of humor.|유머 감각.
12-25|jungle|[명] 정글|King of the jungle.|정글의 왕.
12-25|butter|[명] 버터|Bread and butter.|버터 바른 빵.
12-25|lonely|[형] 쓸쓸한|I feel lonely.|나는 쓸쓸하다.
12-25|cage|[명] 새장, 우리|A bird in a cage.|새장 속의 새.
12-25|subway|[명] 지하철|Take the subway.|지하철을 타라.
12-25|photo|[명] 사진|Take a photo.|사진을 찍어라.
12-25|band|[명] 악단, 밴드|A rock band.|록 밴드.
12-25|manner|[명] 방법, 태도|Table manners.|식사 예절.
12-26|thirsty|[형] 목마른|I am very thirsty.|나는 매우 목이 마르다.
12-26|chief|[명] 우두머리, 장|The chief of police.|경찰 서장(우두머리).
12-26|thick|[형] 두꺼운, 굵은|A thick book.|두꺼운 책.
12-26|wise|[형] 현명한|A wise king.|현명한 왕.
12-26|result|[명] 결과|Good result.|좋은 결과.
12-26|sunlight|[명] 햇빛|Bright sunlight.|밝은 햇빛.
12-26|kangaroo|[명] 캥거루|A kangaroo jumps.|캥거루가 뛴다.
12-26|scenery|[명] 풍경, 경치|Beautiful scenery.|아름다운 풍경.
12-26|neither|[대] ~도 ~도 아니다|Neither of them came.|그들 중 아무도 오지 않았다.
12-26|simply|[부] 간단히, 다만|Simply do it.|그냥(간단히) 해라.
12-26|thin|[형] 얇은, 야윈|A thin book.|얇은 책.
12-26|alive|[형] 살아있는|Is it alive?|그것은 살아 있니?
12-26|homeroom|[명] 홈룸|Go to homeroom.|홈룸(교실)으로 가라.
12-26|noisy|[형] 시끄러운|A noisy street.|시끄러운 거리.
12-26|nation|[명] 국민, 국가|One nation.|하나의 국가.
12-26|fellow|[명] 동료, 녀석|Good fellow.|좋은 동료(친구).
12-26|luck|[명] 운, 행운|Good luck!|행운을 빌어!
12-26|downstairs|[부] 아래층으로|Go downstairs.|아래층으로 가라.
12-26|advise|[동] 충고하다|I advise you to stop.|나는 네가 멈추기를 충고한다.
12-26|serious|[형] 진지한, 심각한|Be serious.|진지해져라.
12-26|ache|[동] 아프다, [명] 아픔|My head aches.|머리가 아프다.
12-26|foolish|[형] 어리석은|Don't be foolish.|어리석게 굴지 마라.
12-26|success|[명] 성공|I wish you success.|성공을 빈다.
12-26|abroad|[부] 외국에|Study abroad.|외국에서 공부하다(유학하다).
12-26|visitor|[명] 방문자|A foreign visitor.|외국인 방문객.
12-26|Greek|[형] 그리스의|Greek myths.|그리스 신화.
12-26|energy|[명] 에너지, 힘|Save energy.|에너지를 절약해라.
12-26|upstairs|[부] 위층으로|Go upstairs.|위층으로 가라.
12-26|steak|[명] 스테이크|I like steak.|나는 스테이크를 좋아한다.
12-26|anywhere|[부] 어디엔가, 어디든지|Go anywhere.|어디든지 가라.
12-27|trick|[명] 속임수, 장난|A magic trick.|마술 속임수.
12-27|actor|[명] 배우|A famous actor.|유명한 배우.
12-27|seed|[명] 씨|Plant a seed.|씨를 심어라.
12-27|weight|[명] 무게|Watch your weight.|체중(무게)을 조심해라.
12-27|twinkle|[동] 반짝이다|Stars twinkle.|별들이 반짝인다.
12-27|happiness|[명] 행복|True happiness.|진정한 행복.
12-27|fool|[명] 바보|Don't be a fool.|바보같이 굴지 마라.
12-27|count|[동] 세다|Count to ten.|10까지 세어라.
12-27|sweet|[형] 단, 향기로운|Sweet candy.|달콤한 사탕.
12-27|hammer|[명] 망치|Use a hammer.|망치를 사용해라.
12-27|cloth|[명] 천|A piece of cloth.|천 조각.
12-27|calendar|[명] 달력|Check the calendar.|달력을 확인해라.
12-27|heat|[명] 열, 더위|Summer heat.|여름 더위.
12-27|till|[전] ~까지|Wait till noon.|정오까지 기다려라.
12-27|lip|[명] 입술|Red lips.|붉은 입술.
12-27|medium|[형] 중간의|Medium size.|중간 크기.
12-27|wrap|[동] 싸다, 포장하다|Wrap the gift.|선물을 포장해라.
12-27|well-done|[형] 잘 구워진|Well-done steak.|잘 구워진 스테이크.
12-27|truly|[부] 진실로|I am truly sorry.|정말로 미안하다.
12-27|Asia|[명] 아시아|I live in Asia.|나는 아시아에 산다.
12-27|danger|[명] 위험|In danger.|위험에 처한.
12-27|earn|[동] 벌다|Earn money.|돈을 벌다.
12-27|marathon|[명] 마라톤|Run a marathon.|마라톤을 뛰다.
12-27|express|[동] 표현하다|Express yourself.|자신을 표현해라.
12-27|population|[명] 인구|Large population.|많은 인구.
12-27|pleasure|[명] 즐거움|It's my pleasure.|저의 즐거움입니다(천만에요).
12-27|unfortunately|[부] 불행하게도|Unfortunately, I lost.|불행하게도, 나는 졌다.
12-27|effect|[명] 효과, 결과|Good effect.|좋은 효과.
12-27|equal|[형] 같은|All men are equal.|모든 사람은 평등하다(같다).
12-27|wolf|[명] 늑대|A wild wolf.|야생 늑대.
12-28|fault|[명] 결점, 잘못|It's my fault.|내 잘못이다.
12-28|waiter|[명] 웨이터|Call the waiter.|웨이터를 불러라.
12-28|smooth|[형] 매끄러운|Smooth skin.|매끄러운 피부.
12-28|kick|[동] 차다|Kick the ball.|공을 차라.
12-28|branch|[명] 가지, 지점|A tree branch.|나뭇가지.
12-28|operator|[명] 기사, 교환수|Phone operator.|전화 교환원.
12-28|local|[형] 지방의, 지역의|Local news.|지역 뉴스.
12-28|according|[부] ~에 의하면|According to him.|그에 의하면.
12-28|army|[명] 육군, 군대|Join the army.|군대에 가다.
12-28|bow|[동] 절하다|Bow to the teacher.|선생님께 절해라(인사해라).
12-28|businessman|[명] 사업가|A rich businessman.|부유한 사업가.
12-28|festival|[명] 축제|School festival.|학교 축제.
12-28|forever|[부] 영원히|Friends forever.|영원한 친구.
12-28|main|[형] 주요한|Main street.|주요 거리(대로).
12-28|poem|[명] 시|Write a poem.|시를 써라.
12-28|kid|[명] 아이|He is just a kid.|그는 그저 아이다.
12-28|distance|[명] 거리|Long distance.|긴 거리.
12-28|prison|[명] 감옥|Go to prison.|감옥에 가다.
12-28|safety|[명] 안전|Safety first.|안전 제일.
12-28|community|[명] 공동체, 지역 사회|Our community.|우리 지역 사회.
12-28|charge|[동] 청구하다, [명] 요금|How much do you charge?|얼마를 청구하나요?
12-28|flame|[명] 불꽃|Red flame.|붉은 불꽃.
12-28|Europe|[명] 유럽|Travel to Europe.|유럽으로 여행하다.
12-28|Roman|[형] 로마의|Roman Empire.|로마 제국.
12-28|scene|[명] 장면, 광경|A beautiful scene.|아름다운 광경.
12-28|absent|[형] 결석한|He is absent.|그는 결석했다.
12-28|Japanese|[형] 일본의, [명] 일본어|I like Japanese food.|나는 일본 음식을 좋아한다.
12-28|coast|[명] 해안|Along the coast.|해안을 따라서.
12-28|fog|[명] 안개|Thick fog.|짙은 안개.
12-28|rough|[형] 거친|Rough hands.|거친 손.
12-29|enter|[동] 들어가다|Enter the room.|방에 들어가라.
12-29|guide|[동] 안내하다|Guide me.|나를 안내해라.
12-29|fry|[동] 튀기다|Fry an egg.|달걀을 튀겨라(부쳐라).
12-29|handkerchief|[명] 손수건|Use a handkerchief.|손수건을 사용해라.
12-29|skin|[명] 피부|Soft skin.|부드러운 피부.
12-29|stream|[명] 시내, 개울|A small stream.|작은 시내.
12-29|track|[명] 자국, 선로|Train track.|기차 선로.
12-29|Japan|[명] 일본|Japan is near Korea.|일본은 한국에서 가깝다.
12-29|jewel|[명] 보석|A shining jewel.|빛나는 보석.
12-29|Olympic|[형] 올림픽의|Olympic Games.|올림픽 경기.
12-29|attract|[동] 끌다, 유인하다|Flowers attract bees.|꽃은 벌을 유인한다.
12-29|schedule|[명] 시간표, 일정|Check the schedule.|일정을 확인해라.
12-29|unusual|[형] 별난, 특이한|An unusual hat.|특이한 모자.
12-29|human|[형] 인간의|Human rights.|인권(인간의 권리).
12-29|knee|[명] 무릎|Bend your knees.|무릎을 굽혀라.
12-29|French|[형] 프랑스의|French bread.|프랑스 빵.
12-29|manager|[명] 지배인, 감독|Store manager.|상점 지배인.
12-29|wagon|[명] 짐마차|A horse wagon.|말이 끄는 짐마차.
12-29|Pacific|[명] 태평양|The Pacific Ocean.|태평양.
12-29|shoot|[동] 사격하다, 쏘다|Shoot the ball.|공을 쏴라.
12-29|national|[형] 국가의|National flag.|국기.
12-29|allow|[동] 허락하다|Please allow me.|나를 허락해 주세요.
12-29|collect|[동] 모으다|Collect stamps.|우표를 모으다.
12-29|fix|[동] 고치다, 고정하다|Fix the car.|차를 고쳐라.
12-29|brave|[형] 용감한|A brave soldier.|용감한 군인.
12-29|dive|[동] 뛰어들다, 잠수하다|Dive into water.|물속으로 뛰어들어라.
12-29|barn|[명] 헛간|A red barn.|빨간 헛간.
12-29|classical|[형] 고전의|Classical music.|고전 음악(클래식).
12-29|examine|[동] 조사하다, 검사하다|Examine it carefully.|그것을 주의 깊게 조사해라.
12-29|perfect|[형] 완전한|Nobody is perfect.|아무도 완벽하지 않다.
12-30|address|[명] 주소|Write your address.|주소를 써라.
12-30|necessary|[형] 필요한|Water is necessary.|물은 필요하다.
12-30|nest|[명] 둥지|A bird's nest.|새 둥지.
12-30|expression|[명] 표현|Facial expression.|얼굴 표정(표현).
12-30|scientific|[형] 과학의|Scientific study.|과학적 연구.
12-30|attention|[명] 주의, 주목|Pay attention.|주목해라.
12-30|nor|[접] ~도 또한 ~아니다|Neither he nor I went.|그도 나도 가지 않았다.
12-30|hardly|[부] 거의 ~않다|I can hardly hear you.|네 말이 거의 안 들린다.
12-30|planet|[명] 행성|Earth is a planet.|지구는 행성이다.
12-30|pride|[명] 자존심, 자랑|Take pride in yourself.|자부심을 가져라.
12-30|hate|[동] 싫어하다|I hate lies.|나는 거짓말을 싫어한다.
12-30|nearby|[형] 가까운|A nearby park.|가까운 공원.
12-30|pleasant|[형] 즐거운|Have a pleasant day.|즐거운 하루 보내세요.
12-30|starve|[동] 굶어 죽다|Don't starve.|굶지 마라.
12-30|nature|[명] 자연|We must protect nature.|우리는 자연을 보호해야 한다.
12-30|movement|[명] 움직임|Slow movement.|느린 움직임.
12-30|signal|[명] 신호|Traffic signal.|교통 신호.
12-30|cinema|[명] 영화관|Go to the cinema.|영화관에 가다.
12-30|mild|[형] 온화한|Mild weather.|온화한 날씨.
12-30|search|[동] 찾다, 수색하다|Search for truth.|진실을 찾아라.
12-30|experiment|[명] 실험|Do an experiment.|실험을 하다.
12-30|silent|[형] 조용한|Be silent.|조용히 해라.
12-30|part-time|[형] 파트타임의|Part-time job.|아르바이트(파트타임 일).
12-30|hobby|[명] 취미|My hobby is reading.|내 취미는 독서다.
12-30|devote|[동] 바치다|Devote your time.|시간을 바쳐라.
12-30|fail|[동] 실패하다|Don't be afraid to fail.|실패하는 것을 두려워하지 마라.
12-30|pop|[형] 대중적인|Pop music.|대중음악.
12-30|block|[명] 블록, 구획|Walk one block.|한 블록 걸어라.
12-30|nurse|[명] 간호사|She is a nurse.|그녀는 간호사다.
12-30|sight|[명] 시력, 광경|Wonderful sight.|멋진 광경.
12-31|garage|[명] 차고|The car is in the garage.|차가 차고에 있다.
12-31|female|[명] 여성, 암컷|Female lion.|암사자.
12-31|stomach|[명] 위|My stomach hurts.|위(배)가 아프다.
12-31|exchange|[동] 교환하다|Exchange gifts.|선물을 교환해라.
12-31|equipment|[명] 장비|Sports equipment.|스포츠 장비.
12-31|magic|[명] 마법, 요술|Do magic.|마법을 부리다.
12-31|admire|[동] 감탄하다|I admire you.|나는 너에게 감탄한다(존경한다).
12-31|memorize|[동] 외우다|Memorize the words.|단어를 외워라.
12-31|appointment|[명] 약속|Make an appointment.|약속을 잡아라.
12-31|invitation|[명] 초대|Thank you for the invitation.|초대에 감사합니다.
12-31|sense|[명] 감각, 의미|Five senses.|오감.
12-31|crop|[명] 농작물|Good crop.|풍작(좋은 수확).
12-31|spread|[동] 펴다, 퍼뜨리다|Spread the map.|지도를 펴라.
12-31|whether|[접] ~인지 어떤지|I don't know whether it is true.|나는 그것이 사실인지 아닌지 모른다.
12-31|applaud|[동] 박수갈채를 보내다|They applauded loudly.|그들은 크게 박수를 쳤다.
12-31|badly|[부] 나쁘게, 몹시|He was injured badly.|그는 심하게 다쳤다.
12-31|fresh|[형] 신선한|Fresh fruit.|신선한 과일.
12-31|melt|[동] 녹다|Ice melts.|얼음이 녹는다.
12-31|pity|[명] 동정, [동] 불쌍히 여기다|Have pity on him.|그를 불쌍히 여겨라.
12-31|sweat|[명] 땀, [동] 땀을 흘리다|Wipe the sweat.|땀을 닦아라.
12-31|comfortable|[형] 편안한|A comfortable chair.|편안한 의자.
12-31|friendship|[명] 우정|True friendship.|진정한 우정.
12-31|adventure|[명] 모험|Go on an adventure.|모험을 떠나다.
12-31|etc.|~등, ~따위|Pens, pencils, etc.|펜, 연필 등등.
12-31|freedom|[명] 자유|Fight for freedom.|자유를 위해 싸우다.
12-31|fence|[명] 울타리|Jump over the fence.|울타리를 뛰어넘어라.
12-31|France|[명] 프랑스|Paris is in France.|파리는 프랑스에 있다.
12-31|huge|[형] 거대한|A huge building.|거대한 건물.
12-31|musical|[형] 음악의|Musical instrument.|악기.
12-31|root|[명] 뿌리|Tree roots.|나무 뿌리.
12-32|charming|[형] 매력적인|A charming girl.|매력적인 소녀.
12-32|bowl|[명] 사발, 그릇|A bowl of soup.|수프 한 그릇.
12-32|disease|[명] 병, 질병|Cure a disease.|병을 치료하다.
12-32|gather|[동] 모으다, 모이다|Gather together.|함께 모여라.
12-32|judge|[명] 재판관, [동] 판단하다|Don't judge others.|남을 판단하지 마라.
12-32|pour|[동] 붓다|Pour water.|물을 부어라.
12-32|service|[명] 봉사, 서비스|Good service.|좋은 서비스.
12-32|electric|[형] 전기의|Electric fan.|선풍기.
12-32|effort|[명] 노력|Make an effort.|노력해라.
12-32|bury|[동] 묻다|Bury a bone.|뼈를 묻어라.
12-32|feather|[명] 깃털|Light as a feather.|깃털처럼 가벼운.
12-32|quarter|[명] 4분의 1, 15분|A quarter past two.|2시 15분.
12-32|attend|[동] 출석하다|Attend school.|학교에 출석하다(다니다).
12-32|junior|[형] 연소한, [명] 후배|He is my junior.|그는 내 후배다.
12-32|shy|[형] 수줍어하는|Don't be shy.|부끄러워하지 마라.
12-32|suggest|[동] 제안하다|I suggest a plan.|나는 계획을 제안한다.
12-32|education|[명] 교육|School education.|학교 교육.
12-32|calm|[형] 고요한, [명] 고요|Stay calm.|침착해라(고요함을 유지해라).
12-32|social|[형] 사회의|Social studies.|사회 과목.
12-32|honest|[형] 정직한|Be honest.|정직해라.
12-32|boil|[동] 끓다, 끓이다|Boil water.|물을 끓여라.
12-32|reply|[동] 대답하다, [명] 대답|Please reply.|대답해 주세요.
12-32|polite|[형] 공손한|A polite boy.|공손한 소년.
12-32|temperature|[명] 온도, 체온|Check the temperature.|온도를 확인해라.
12-32|doubt|[동] 의심하다, [명] 의심|No doubt.|의심할 여지 없이.
12-32|avenue|[명] 큰 거리|Fifth Avenue.|5번가(거리 이름).
12-32|shock|[명] 충격, [동] 충격을 주다|It was a big shock.|그것은 큰 충격이었다.
12-32|realize|[동] 깨닫다|I realized my mistake.|나는 내 실수를 깨달았다.
12-32|central|[형] 중앙의|Central park.|중앙 공원.
12-32|instance|[명] 예, 보기|For instance.|예를 들어.
12-33|delicious|[형] 맛있는|It looks delicious.|맛있어 보인다.
12-33|goal|[명] 득점, 목표|Score a goal.|득점하다(골을 넣다).
12-33|hunt|[동] 사냥하다, [명] 사냥|Lions hunt.|사자는 사냥한다.
12-33|powerful|[형] 강력한|A powerful car.|강력한 차.
12-33|Australian|[형] 오스트레일리아의|An Australian animal.|오스트레일리아 동물.
12-33|continent|[명] 대륙|The Asian continent.|아시아 대륙.
12-33|path|[명] 작은 길|Follow the path.|길을 따라가라.
12-33|exactly|[부] 정확히|That's exactly right.|그것이 정확히 맞다.
12-33|similar|[형] 비슷한|They look similar.|그들은 비슷해 보인다.
12-33|ocean|[명] 대양|The wide ocean.|넓은 대양.
12-33|truth|[명] 진실|Tell the truth.|진실을 말해라.
12-33|opinion|[명] 의견|What is your opinion?|너의 의견은 무엇이니?
12-33|loose|[형] 헐거운|A loose tooth.|흔들리는(헐거운) 이.
12-33|crash|[명] 충돌, [동] 충돌하다|A car crash.|자동차 충돌 사고.
12-33|temple|[명] 절, 사원|An old temple.|오래된 절.
12-33|instruction|[명] 교육, 지시|Follow the instruction.|지시를 따르라.
12-33|direction|[명] 방향|Which direction?|어느 방향이니?
12-33|author|[명] 저자, 작가|Who is the author?|작가가 누구니?
12-33|divide|[동] 나누다|Divide the cake.|케이크를 나누어라.
12-33|unify|[동] 통일하다|Unify the country.|나라를 통일하다.
12-33|share|[동] 나누다, 공유하다|Share your toys.|장난감을 나누어 써라.
12-33|trade|[명] 무역|Free trade.|자유 무역.
12-33|unification|[명] 통일|Peaceful unification.|평화 통일.
12-33|connect|[동] 연결하다|Connect the dots.|점들을 연결해라.
12-33|relative|[명] 친척|Visit a relative.|친척을 방문하다.
12-33|trust|[명] 신용, [동] 믿다|Trust me.|나를 믿어라.
12-33|democracy|[명] 민주주의|Fight for democracy.|민주주의를 위해 싸우다.
12-33|silly|[형] 어리석은|Don't be silly.|바보같이 굴지 마라.
12-33|independent|[형] 독립의|Be independent.|독립심을 가져라.
12-33|blossom|[명] 꽃, [동] 꽃이 피다|Cherry blossom.|벚꽃.
12-34|rub|[동] 문지르다|Rub your hands.|손을 비벼라.
12-34|offer|[동] 제공하다|Offer help.|도움을 제공하다.
12-34|particular|[형] 특별한|Nothing particular.|특별한 것은 없다.
12-34|conversation|[명] 대화|English conversation.|영어 회화.
12-34|professor|[명] 교수|A university professor.|대학교수.
12-34|completely|[부] 완전히|Completely different.|완전히 다른.
12-34|succeed|[동] 성공하다|You will succeed.|너는 성공할 것이다.
12-34|sorrow|[명] 슬픔|Joy and sorrow.|기쁨과 슬픔.
12-34|bite|[동] 물다|Dogs bite.|개들은 문다.
12-34|obey|[동] 복종하다|Obey the rules.|규칙을 따르라.
12-34|congratulate|[동] 축하하다|I congratulate you.|너를 축하한다.
12-34|avoid|[동] 피하다|Avoid danger.|위험을 피하라.
12-34|congratulation|[명] 축하|Congratulations!|축하해!
12-34|mention|[동] 말하다, 언급하다|Don't mention it.|천만에요(그걸 언급하지 마세요).
12-34|accept|[동] 받다|Accept the gift.|선물을 받아라.
12-34|private|[형] 사적인|Private life.|사생활.
12-34|society|[명] 사회|Modern society.|현대 사회.
12-34|sow|[동] 뿌리다|Sow seeds.|씨를 뿌려라.
12-34|solve|[동] 풀다|Solve the problem.|문제를 풀어라.
12-34|choice|[명] 선택|Good choice.|좋은 선택.
12-34|actually|[부] 실제로|Actually, I am busy.|사실, 나는 바쁘다.
12-34|economy|[명] 경제|The world economy.|세계 경제.
12-34|curious|[형] 호기심이 강한|I am curious.|나는 궁금하다.
12-34|spirit|[명] 정신|Team spirit.|협동심(팀 정신).
12-34|frankly|[부] 솔직히|Frankly speaking.|솔직히 말해서.
12-34|greet|[동] 인사하다|Greet your teacher.|선생님께 인사해라.
12-34|active|[형] 활동적인|Be active.|활동적으로 움직여라.
12-34|furniture|[명] 가구(기구)|Wooden furniture.|나무 가구.
12-34|destroy|[동] 파괴하다|Destroy the building.|건물을 파괴하다.
12-34|escape|[동] 달아나다|Escape from prison.|감옥에서 탈출하다.
12-35|extra|[형] 여분의|An extra pen.|여분의 펜.
12-35|invent|[동] 발명하다|Invent a machine.|기계를 발명하다.
12-35|pardon|[명] 용서|I beg your pardon?|뭐라고요?(다시 말씀해 주시겠어요?)
12-35|waste|[동] 낭비하다|Don't waste time.|시간을 낭비하지 마라.
12-35|disappoint|[동] 실망시키다|Don't disappoint me.|나를 실망시키지 마라.
12-35|freeze|[동] 얼다|Water freezes.|물은 언다.
12-35|educate|[동] 교육하다|Educate children.|아이들을 교육하다.
12-35|breathe|[동] 호흡하다|Breathe deeply.|깊게 숨을 쉬어라.
12-35|tooth|[명] 이|Brush your tooth.|이를 닦아라. (보통 teeth 사용)
12-35|successful|[형] 성공한|A successful man.|성공한 남자.
12-35|cause|[명] 원인, [동] 일으키다|The cause of the fire.|화재의 원인.
12-35|lecture|[명] 강의|Give a lecture.|강의를 하다.
12-35|communication|[명] 의사소통|Good communication.|원활한 의사소통.
12-35|elementary|[형] 초보의, 기본의|Elementary school.|초등학교.
12-35|exercise|[명] 운동, 연습|Do exercise.|운동을 해라.
12-35|recently|[부] 최근에|I met him recently.|나는 최근에 그를 만났다.
12-35|repair|[동] 수리하다|Repair the car.|차를 수리하다.
12-35|proverb|[명] 속담|An old proverb.|옛 속담.
12-35|view|[명] 경치, 의견|A fine view.|멋진 경치.
12-35|patience|[명] 인내|Have patience.|인내심을 가져라.
12-35|progress|[명] 진보, [동] 나아가다|Make progress.|진보하다(발전하다).
12-35|basic|[형] 기초의|Basic English.|기초 영어.
12-35|punish|[동] 벌하다|Punish the criminal.|범인을 벌하다.
12-35|refuse|[동] 거절하다|I refuse to go.|나는 가기를 거절한다.
12-35|depend|[동] 의지하다|Depend on you.|너에게 의지하다.
12-35|excitement|[명] 흥분|Full of excitement.|흥분으로 가득 찬.
12-35|design|[명] 디자인, [동] 설계하다|Design a house.|집을 설계하다.
12-35|various|[형] 여러 가지의|Various colors.|여러 가지 색깔들.
12-35|single|[형] 단 하나의|Every single day.|매일매일(하루도 빠짐없이).
12-35|blame|[동] 나무라다, 비난하다|Don't blame me.|나를 비난하지 마라.
12-36|satisfy|[동] 만족시키다|Satisfy your hunger.|너의 허기를 채워라(만족시켜라).
12-36|uniform|[명] 제복|School uniform.|교복.
12-36|public|[형] 공공의|Public park.|공공 공원.
12-36|courage|[명] 용기|Have courage.|용기를 가져라.
12-36|shame|[명] 부끄러움|What a shame!|정말 부끄러운 일이다! (안타깝다!)
12-36|dress|[명] 의복, [동] 옷을 입다|Wear a nice dress.|멋진 옷을 입어라.
12-36|skill|[명] 솜씨, 숙련|Good skill.|좋은 솜씨.
12-36|develop|[동] 발달하다|Plants develop.|식물이 발달한다(자란다).
12-36|produce|[동] 생산하다|Bees produce honey.|벌은 꿀을 생산한다.
12-36|entrance|[명] 입구, 입학|Entrance exam.|입학 시험.
12-36|fear|[명] 두려움, [동] 두려워하다|I have no fear.|나는 두려움이 없다.
12-36|youth|[명] 젊음|Eternal youth.|영원한 젊음.
12-36|increase|[동] 증가하다|Sales increased.|판매가 증가했다.
12-36|ceremony|[명] 의식, 식|Wedding ceremony.|결혼식.
12-36|pray|[동] 빌다, 기도하다|Pray to God.|신에게 기도해라.
12-36|system|[명] 조직, 체계|Computer system.|컴퓨터 시스템.
12-36|when|[부] 언제, [접] ~할 때|When will you come?|언제 올 거니?
12-36|tomb|[명] 무덤|A king's tomb.|왕의 무덤.
12-36|invade|[동] 침입하다|Enemies invade.|적들이 침입한다.
12-36|respect|[명] 존경, [동] 존경하다|Respect your parents.|부모님을 존경해라.
12-36|circle|[명] 원, [동] 회전하다|Draw a circle.|원을 그려라.
12-36|wisdom|[명] 지혜|Words of wisdom.|지혜의 말.
12-36|relax|[동] 쉬다|Relax at home.|집에서 쉬어라.
12-36|treasure|[명] 보물|Hidden treasure.|숨겨진 보물.
12-36|stretch|[동] 뻗다|Stretch your arms.|팔을 뻗어라.
12-36|notice|[명] 주의, [동] 알아차리다|I didn't notice it.|나는 그것을 알아차리지 못했다.
12-36|ancestor|[명] 조상|My ancestors.|나의 조상들.
12-36|subject|[명] 과목, 주제|Favorite subject.|가장 좋아하는 과목.
12-36|prefer|[동] 더 좋아하다|I prefer coffee.|나는 커피를 더 좋아한다.
12-36|responsible|[형] 책임이 있는|Be responsible.|책임감을 가져라.
12-37|kind|[형] 친절한, [명] 종류|What kind of fruit?|어떤 종류의 과일?
12-37|pretty|[형] 예쁜, [부] 꽤|She is pretty.|그녀는 예쁘다.
12-37|free|[형] 자유로운, 무료의|It is free.|그것은 무료다.
12-37|about|[전] ~에 대하여, [부] 약|Think about it.|그것에 대해 생각해 봐.
12-37|time|[명] 시간, ~번(회)|Three times a day.|하루에 세 번.
12-37|like|[동] 좋아하다, [전] ~처럼|He looks like his dad.|그는 아빠처럼 보인다(닮았다).
12-37|story|[명] 이야기, 층|A two-story house.|2층 집.
12-37|park|[명] 공원, [동] 주차하다|Park the car here.|차를 여기에 주차해라.
12-37|fall|[명] 가을, 폭포|Niagara Falls.|나이아가라 폭포.
12-37|watch|[동] 보다, [명] 시계|Watch TV.|TV를 보다.
12-37|bear|[동] 참다, [명] 곰|I can't bear it.|나는 그것을 참을 수 없다.
12-37|miss|[동] 놓치다, 그리워하다|Don't miss the bus.|버스를 놓치지 마라.
12-37|safe|[형] 안전한, [명] 금고|Put money in the safe.|돈을 금고에 넣어라.
12-37|end|[명] 끝, 목적, [동] 끝나다|To the end.|끝까지.
12-37|store|[명] 가게, [동] 저장하다|Store food for winter.|겨울을 위해 식량을 저장해라.
12-37|party|[명] 파티, 정당|Birthday party.|생일 파티.
12-37|draw|[동] 당기다, 그리다|Draw a line.|선을 그려라.
12-37|race|[명] 경주, 인종|Human race.|인류(인종).
12-37|case|[명] 상자, 경우|In that case.|그 경우에.
12-37|have|[동] 가지다, 먹다|Have lunch.|점심을 먹다.
12-37|match|[명] 시합, 성냥|Light a match.|성냥을 켜라.
12-37|rest|[동] 쉬다, [명] 나머지|Take a rest.|휴식을 취해라.
12-37|bank|[명] 은행, 둑|River bank.|강둑.
12-37|gift|[명] 선물, 재능|A special gift.|특별한 선물.
12-37|spring|[명] 봄, 용수철|A metal spring.|금속 용수철.
12-37|lie|[동] 눕다, 거짓말하다|Don't lie to me.|나에게 거짓말하지 마라.
12-37|blue|[형] 파란, 우울한|I feel blue.|나는 우울하다.
12-37|check|[동] 확인하다, [명] 수표|Pay by check.|수표로 지불하다.
12-37|fair|[형] 공평한, [명] 전시회|It's not fair.|그것은 공평하지 않다.
12-37|company|[명] 회사, 친구|A big company.|큰 회사.
12-38|touch|[동] 대다, 감동시키다|Don't touch it.|그것에 손대지 마라.
12-38|plant|[명] 식물, 공장|A car plant.|자동차 공장.
12-38|for|[전] ~을 위하여, ~동안|Wait for me.|나를 기다려줘.
12-38|fine|[형] 훌륭한, [명] 벌금|Pay a fine.|벌금을 내다.
12-38|take|[동] 잡다, 데려가다|Take my hand.|내 손을 잡아라.
12-38|present|[명] 선물, [형] 현재의|Present time.|현재 시간.
12-38|by|[전] ~옆에, ~에 의하여|Stand by me.|내 옆에 서라.
12-38|work|[동] 일하다, [명] 작품|Art work.|예술 작품.
12-38|right|[형] 오른쪽의, 옳은, [명] 권리|Human rights.|인권(인간의 권리).
12-38|face|[명] 얼굴, [동] 직면하다|Face the problem.|문제에 직면해라.
12-38|cross|[동] 건너다, [명] 십자가|The Red Cross.|적십자.
12-38|back|[명] 등, [부] 뒤로|Come back.|돌아와라.
12-38|country|[명] 나라, 시골|I live in the country.|나는 시골에 산다.
12-38|or|[접] 또는, 그렇지 않으면|Hurry up, or you'll be late.|서둘러라, 그렇지 않으면 늦을 것이다.
12-38|leave|[동] 떠나다, 남기다|Leave a message.|메시지를 남겨라.
12-38|hard|[형] 어려운, 단단한|Hard rock.|단단한 바위.
12-38|place|[명] 장소, [동] 놓다|Place it here.|그것을 여기에 놓아라.
12-38|land|[명] 육지, [동] 착륙하다|The plane landed.|비행기가 착륙했다.
12-38|dear|[형] 친애하는, 비싼|Oh dear!|어머나! (감탄사) / 친애하는 (편지 서두).
12-38|chance|[명] 기회, 우연|By chance.|우연히.
12-38|ring|[명] 반지, [동] 울리다|The bell rings.|종이 울린다.
12-38|wrong|[형] 틀린, 나쁜|What's wrong?|무슨 일이니(무엇이 잘못됐니)?
12-38|round|[형] 둥근, [전] ~의 주위에|Walk round the pond.|연못 주위를 걸어라.
12-38|glass|[명] 유리, 안경|Wear glasses.|안경을 써라.
12-38|every|[형] 모든, ~마다|Every day.|매일.
12-38|lesson|[명] 수업, 교훈|Learn a lesson.|교훈을 얻다.
12-38|either|[대] 어느 한 쪽|Either will do.|어느 쪽이든 좋다.
12-38|letter|[명] 편지, 문자|Capital letter.|대문자.
12-38|around|[전] ~주위에, [부] 약|Around 5 o'clock.|5시쯤.
12-38|station|[명] 역, 국|Police station.|경찰서.
12-39|over|[전] ~위에, [부] 끝나고|Game over.|게임 끝.
12-39|still|[부] 아직, [형] 고요한|Stand still.|가만히(고요히) 서 있어라.
12-39|get|[동] 얻다, ~이 되다|Get ready.|준비해라(준비된 상태가 되어라).
12-39|move|[동] 움직이다, 감동시키다|It moved me.|그것은 나를 감동시켰다.
12-39|fly|[동] 날다, [명] 파리|A fly on the wall.|벽에 붙은 파리.
12-39|stand|[동] 서다, 참다|I can't stand it.|나는 그것을 참을 수 없다.
12-39|turn|[동] 돌다, [명] 차례|My turn.|내 차례.
12-39|keep|[동] 지키다, 유지하다|Keep a promise.|약속을 지켜라.
12-39|while|[전] ~하는 동안, [명] 잠시|Wait a while.|잠시만 기다려라.
12-39|once|[부] 한 번, 한때|Once upon a time.|옛날 옛적에.
12-39|ask|[동] 묻다, 부탁하다|Ask for help.|도움을 요청해라.
12-39|hold|[동] 잡다, 개최하다|Hold a meeting.|회의를 열다(개최하다).
12-39|mind|[명] 마음, [동] 싫어하다|Do you mind?|싫으신가요(꺼리시나요)?
12-39|pass|[동] 지나가다, 건네주다|Pass me the salt.|소금을 건네줘.
12-39|so|[부] 매우, [접] 그래서|It was raining, so I stayed home.|비가 와서 나는 집에 있었다.
12-39|left|[형] 왼쪽의, [동] 떠났다|He left home.|그는 집을 떠났다.
12-39|care|[명] 걱정, 돌봄|Take care of yourself.|몸조심해라.
12-39|see|[동] 보다, 알다|I see.|알겠어.
12-39|dish|[명] 접시, 요리|A delicious dish.|맛있는 요리.
12-39|bright|[형] 밝은, 영리한|A bright student.|영리한 학생.
12-39|sign|[명] 신호, [동] 서명하다|Sign your name.|이름을 서명해라.
12-39|well|[부] 잘, [명] 우물|An old well.|오래된 우물.
12-39|save|[동] 구하다, 저축하다|Save energy.|에너지를 절약해라.
12-39|order|[명] 명령, 순서|In alphabetical order.|알파벳 순서로.
12-39|school|[명] 학교, (물고기) 떼|A school of fish.|물고기 떼.
12-39|film|[명] 영화, 필름|Take a film.|영화를 찍다.
12-39|point|[명] 점, 요점|That's the point.|그것이 요점이다.
12-39|pick|[동] 줍다, 고르다|Pick a card.|카드를 골라라.
12-39|matter|[명] 문제, [동] 중요하다|It doesn't matter.|그것은 중요하지 않다.
12-39|set|[동] 놓다, (해가) 지다|The sun sets.|해가 진다.
12-40|against|[전] ~에 반대하여|I am against it.|나는 그것에 반대한다.
12-40|fat|[형] 뚱뚱한, [명] 지방|Too much fat.|너무 많은 지방.
12-40|state|[명] 상태, 주(州)|United States.|미국(합중국).
12-40|stick|[명] 막대기, [동] 찌르다|A walking stick.|지팡이.
12-40|natural|[형] 자연의, 당연한|It is natural.|그것은 당연하다.
12-40|character|[명] 성격, 등장인물|A cartoon character.|만화 등장인물.
12-40|grow|[동] 자라다, ~이 되다|He grew old.|그는 늙게 되었다.
12-40|appear|[동] 나타나다, ~인 듯하다|He appears happy.|그는 행복해 보인다.
12-40|grade|[명] 학년, 성적|First grade.|1학년.
12-40|rare|[형] 드문, (고기가) 덜 익은|A rare bird.|희귀한 새.
12-40|earth|[명] 지구, 흙|Soft earth.|부드러운 흙.
12-40|period|[명] 기간, 마침표|Put a period.|마침표를 찍어라.
12-40|find|[동] 찾다, 알다|I found it easy.|나는 그것이 쉽다는 것을 알았다.
12-40|rule|[명] 규칙, [동] 지배하다|The king rules.|왕이 지배한다.
12-40|conductor|[명] 지휘자|A bus conductor.|버스 차장.
12-40|common|[형] 흔한, 공통의|Common sense.|상식(공통된 센스).
12-40|force|[명] 힘, [동] 강요하다|Don't force me.|나에게 강요하지 마라.
12-40|good|[형] 좋은, 유익한|Milk is good for you.|우유는 너에게 유익하다.
12-40|capital|[명] 수도, 대문자|Capital city.|수도.
12-40|much|[형] 많은, [부] 매우|Thank you very much.|대단히 감사합니다.
12-40|correct|[형] 올바른, [동] 고치다|Correct the errors.|오류를 고쳐라.
12-40|industry|[명] 산업, 근면|Auto industry.|자동차 산업.
12-40|court|[명] 법정, 경기장|Tennis court.|테니스 경기장.
12-40|little|[형] 작은, [부] 거의 ~없는|I have little money.|나는 돈이 거의 없다.
12-40|say|[동] 말하다, ~라고 쓰여 있다|The sign says stop.|표지판에 멈춤이라고 쓰여 있다.
12-40|roll|[동] 구르다, [명] 두루마리|A roll of paper.|종이 두루마리.
12-40|sail|[동] 항해하다, [명] 돛|Raise the sail.|돛을 올려라.
12-40|crowd|[명] 군중, [동] 붐비다|A large crowd.|많은 군중.
12-40|blind|[형] 눈먼, [명] 블라인드|Love is blind.|사랑은 눈이 멀었다.
12-40|suit|[명] 양복, [동] 어울리다|It suits you.|그것은 너에게 잘 어울린다.


13-1|wise|지혜로운, 슬기로운|A wise man.|지혜로운 사람.
13-1|foolish|바보같은, 어리석은|Don't be foolish.|바보같이 굴지 마라.
13-1|proud|자랑스러워하는|I am proud of you.|나는 네가 자랑스럽다.
13-1|honest|정직한, 솔직한|Be honest.|정직해라.
13-1|careful|조심성 있는|Be careful with fire.|불을 조심해라.
13-1|brave|용감한|A brave soldier.|용감한 군인.
13-1|lazy|게으른|Don't be lazy.|게으름 피우지 마라.
13-1|calm|차분한, 침착한|Stay calm.|침착해라.
13-1|rude|무례한, 예의 없는|It is rude to stare.|빤히 쳐다보는 것은 무례하다.
13-1|active|활동적인, 적극적인|Be active.|활동적으로 움직여라.
13-1|character|성격, 기질|Good character.|좋은 성격.
13-1|serious|진지한, 진심의|Are you serious?|진심이니? [s]
13-1|strict|엄한, 엄격한|A strict teacher.|엄격한 선생님.
13-1|cruel|잔인한, 무자비한|Don't be cruel to animals.|동물에게 잔인하게 굴지 마라.
13-1|mean|못된, 심술궂은|Don't be mean.|심술궂게 굴지 마라.
13-1|selfish|이기적인|Don't be selfish.|이기적으로 굴지 마라.
13-1|evil|나쁜, 사악한|An evil witch.|사악한 마녀.
13-1|curious|호기심이 많은|I am curious.|나는 궁금하다.
13-1|cheerful|쾌활한, 명랑한|A cheerful girl.|명랑한 소녀.
13-1|friendly|친한, 친절한|A friendly dog.|친절한 개.
13-1|modest|겸손한, 신중한|Be modest.|겸손해라.
13-1|generous|관대한, 후한|He is generous.|그는 관대하다.
13-1|sensitive|민감한, 예민한|Sensitive skin.|민감한 피부.
13-1|confident|자신만만한|Be confident.|자신감을 가져라.
13-1|positive|긍정적인|Positive thinking.|긍정적인 사고.
13-1|negative|부정적인|Negative answer.|부정적인 대답.
13-1|optimistic|낙관적인|Be optimistic.|낙관적이 되어라.
13-1|cautious|조심스러운|Be cautious.|조심해라.
13-1|make fun of|~을 놀리다|Don't make fun of him.|그를 놀리지 마라.
13-1|cheer up|기운을 내다|Cheer up!|기운 내!

13-2|cute|귀여운, 예쁜|A cute baby.|귀여운 아기.
13-2|pretty|예쁜, 매우|A pretty flower.|예쁜 꽃.
13-2|beautiful|아름다운|A beautiful view.|아름다운 경치.
13-2|ugly|못생긴, 추한|The ugly duckling.|미운 오리 새끼.
13-2|overweight|과체중의|He is overweight.|그는 과체중이다.
13-2|young|어린, 젊은|A young man.|젊은이.
13-2|handsome|잘생긴|A handsome boy.|잘생긴 소년.
13-2|slim|날씬한|She is slim.|그녀는 날씬하다.
13-2|beard|턱수염|He has a beard.|그는 턱수염이 있다.
13-2|lovely|사랑스러운|A lovely day.|사랑스러운(멋진) 날.
13-2|neat|단정한, 깔끔한|Keep your room neat.|방을 깔끔하게 해라.
13-2|plain|평범하게 생긴|A plain face.|평범한 얼굴.
13-2|good-looking|잘생긴|A good-looking guy.|잘생긴 남자.
13-2|skinny|깡마른|Skinny jeans.|딱 달라붙는 청바지.
13-2|fit|건강한, 꼭 맞다|Keep fit.|건강을 유지해라.
13-2|muscular|근육질의|Muscular arms.|근육질의 팔.
13-2|thin|가는, 수척한|A thin book.|얇은 책.
13-2|bald|대머리의|A bald head.|대머리.
13-2|curly|곱슬거리는|Curly hair.|곱슬머리.
13-2|dye|염색하다|Dye your hair.|머리를 염색해라.
13-2|appearance|외모|Good appearance.|좋은 외모.
13-2|attractive|매력적인 [a]|An attractive smile.|매력적인 미소. [a]
13-2|charming|매력적인 [c]|A charming prince.|매력적인 왕자. [c]
13-2|mustache|코밑수염|A long mustache.|긴 콧수염.
13-2|sideburns|구레나룻|Long sideburns.|긴 구레나룻.
13-2|middle-aged|중년의|A middle-aged man.|중년 남성.
13-2|build|체격, 짓다|A strong build.|튼튼한 체격.
13-2|image|이미지, 상|A public image.|대중적 이미지.
13-2|grow up|자라다|I want to grow up.|나는 자라고 싶다.
13-2|both A and B|A와 B 둘 다|Both you and I.|너와 나 둘 다.

13-3|enjoy|즐기다|Enjoy your life.|인생을 즐겨라.
13-3|cry|울다|Don't cry.|울지 마라.
13-3|glad|기쁜 [g]|I am glad.|나는 기쁘다.
13-3|fear|공포|No fear.|두려움 없음.
13-3|joy|기쁨, 즐거움 [j]|Jump for joy.|기뻐서 뛰다. [j]
13-3|miss|그리워하다, 놓치다|I miss you.|나는 네가 그립다.
13-3|laugh|웃다|Laugh loudly.|크게 웃어라.
13-3|mad|몹시 화난, 성난, 미친, 제정신이 아닌|Are you mad?|너 화났니?
13-3|annoyed|짜증 난, 화가 난|I am annoyed.|나는 짜증 난다.
13-3|upset|화가 난, 기분이 상한|Don't be upset.|속상해하지 마라.
13-3|worried|걱정스러운|I am worried.|나는 걱정된다.
13-3|regret|유감, 후회, 후회하다|I regret it.|나는 그것을 후회한다.
13-3|bother|괴롭히다, 방해하다|Don't bother me.|나를 괴롭히지 마라. [b]
13-3|excited|흥분한, 신이 난|I am excited.|나는 신이 난다.
13-3|surprised|놀란|I was surprised.|나는 놀랐다.
13-3|pleased|기쁜, 좋아하는|I am pleased.|나는 기쁘다.
13-3|horrible|무서운, 끔찍한|A horrible dream.|끔찍한 꿈.
13-3|grateful|감사하는, 고맙게 여기는 [g]|I am grateful.|나는 감사합니다. [g]
13-3|anxious|걱정되는, 근심이 되는|I am anxious.|나는 걱정된다.
13-3|delighted|매우 기뻐하는|I am delighted.|나는 매우 기쁘다.
13-3|depressed|의기소침한, 낙담한, 우울한 [9]|He looks depressed.|그는 우울해 보인다. [d]
13-3|frightened|깜짝 놀란, 겁이 난|I was frightened.|나는 겁이 났다.
13-3|ashamed|부끄러워하는|Don't be ashamed.|부끄러워하지 마라. [a]
13-3|emotion|감정|Show your emotion.|감정을 보여라.
13-3|sympathy|동정|Have sympathy.|동정심을 가져라.
13-3|satisfied|만족한|I am satisfied.|나는 만족한다.
13-3|disappointed|실망한, 낙담한|I am disappointed.|나는 실망했다.
13-3|amused|즐기는, 즐거워하는|We were amused.|우리는 즐거웠다.
13-3|calm down|진정하다, 흥분을 가라앉히다|Please calm down.|진정해라.
13-3|feel sorry for|~을 안쓰럽게(안됐다고) 여기다, ~에게 미안함을 느끼다|I feel sorry for him.|나는 그가 안쓰럽다.

13-4|baker|제빵사|The baker bakes bread.|제빵사는 빵을 굽는다.
13-4|reporter|기자, 통신원 [r]|A news reporter.|뉴스 기자.
13-4|engineer|기사, 기술자|An expert engineer.|전문 기술자.
13-4|scientist|과학자|A famous scientist.|유명한 과학자.
13-4|lawyer|변호사 [l]|Ask a lawyer.|변호사에게 물어봐라. [l]
13-4|dentist|치과의사|Go to the dentist.|치과에 가라.
13-4|mechanic|정비공|A car mechanic.|자동차 정비공.
13-4|architect|건축가|An architect designs houses.|건축가는 집을 설계한다.
13-4|officer|공무원, 관리|A police officer.|경찰관.
13-4|gardener|정원사|The gardener plants flowers.|정원사는 꽃을 심는다.
13-4|photographer|사진사, 사진작가|Take a photo, photographer.|사진사님, 사진 좀 찍어주세요.
13-4|president|대통령|The president speaks.|대통령이 연설한다.
13-4|salesperson|판매원|Ask the salesperson.|판매원에게 물어봐라.
13-4|carpenter|목수|The carpenter makes tables.|목수는 탁자를 만든다.
13-4|businessman|사업가|A rich businessman.|부유한 사업가.
13-4|fisherman|어부|The fisherman catches fish.|어부는 물고기를 잡는다.
13-4|soldier|군인|A brave soldier.|용감한 군인.
13-4|professor|교수|A university professor.|대학교수.
13-4|judge|판사, 심사원, 판단하다|The judge decides.|판사가 결정한다.
13-4|announcer|방송 진행자, 아나운서|TV announcer.|TV 아나운서.
13-4|hairdresser|미용사|My mom is a hairdresser.|우리 엄마는 미용사시다.
13-4|accountant|회계사|An accountant counts money.|회계사는 돈을 계산한다.
13-4|novelist|소설가|A great novelist.|위대한 소설가.
13-4|security guard|경호원, 경비원|Ask the security guard.|경비원에게 물어봐라.
13-4|astronaut|우주비행사|An astronaut goes to space.|우주비행사는 우주로 간다.
13-4|detective|탐정|A clever detective.|영리한 탐정.
13-4|secretary|비서|Call my secretary.|내 비서에게 전화해라.
13-4|illustrator|삽화가|An illustrator draws pictures.|삽화가는 그림을 그린다.
13-4|be good at|~에 능숙하다, ~을 잘하다|I am good at English.|나는 영어를 잘한다.
13-4|be interested in|~에 관심이(흥미가) 있다|I am interested in music.|나는 음악에 관심이 있다.

13-5|pants|바지 [p]|Blue pants.|파란 바지.
13-5|sweater|스웨터|A warm sweater.|따뜻한 스웨터.
13-5|skirt|치마|A short skirt.|짧은 치마.
13-5|tie|넥타이, ~을 묶다, 매다|Wear a tie.|넥타이를 매라.
13-5|belt|벨트, 허리띠|Fasten your belt.|벨트를 매라.
13-5|uniform|유니폼, 제복|School uniform.|교복.
13-5|socks|양말|Put on socks.|양말을 신어라.
13-5|material|직물, 천, 재료|Soft material.|부드러운 천.
13-5|gloves|장갑|Wear gloves.|장갑을 껴라.
13-5|boots|장화, 부츠, 목이 긴 구두|Rain boots.|장화.
13-5|dress|옷, 의복, 옷을 입다|A pretty dress.|예쁜 원피스.
13-5|scarf|스카프, 목도리 [s]|A red scarf.|빨간 스카프.
13-5|jacket|재킷, 상의, 웃옷|A leather jacket.|가죽 재킷.
13-5|shorts|반바지, 운동 팬츠|Wear shorts in summer.|여름에는 반바지를 입어라.
13-5|button|단추, ~에 단추를 채우다|Push the button.|단추(버튼)를 눌러라.
13-5|jeans|청바지|Blue jeans.|청바지.
13-5|suit|정장, 슈트, ~에게 잘 어울리다|A black suit.|검은 정장.
13-5|pocket|주머니|Empty pocket.|빈 주머니.
13-5|bow tie|나비넥타이|A bow tie.|나비넥타이.
13-5|heels|굽 높은 구두 [5]|High heels.|하이힐.
13-5|stockings|긴 양말, 스타킹|Wear stockings.|스타킹을 신어라.
13-5|sandals|샌들|Summer sandals.|여름 샌들.
13-5|wallet|지갑|My wallet is lost.|내 지갑을 잃어버렸다.
13-5|purse|돈주머니, 지갑 [p]|A lady's purse.|숙녀용 지갑.
13-5|vest|조끼 [v]|A safety vest.|안전 조끼.
13-5|overalls|멜빵바지|Blue overalls.|파란 멜빵바지.
13-5|athletic shoes|운동화|Wear athletic shoes.|운동화를 신어라.
13-5|put on|(옷을) 입다, (모자, 안경 등을) 쓰다 [p]|Put on your coat.|코트를 입어라.
13-5|try on|~을 입어(신어) 보다|Can I try on this?|이것을 입어봐도 될까요?
13-5|take off|(옷 등을) 벗다, 이륙하다|Take off your hat.|모자를 벗어라.

13-6|butter|버터|Bread and butter.|버터 바른 빵.
13-6|bread|빵|Fresh bread.|신선한 빵.
13-6|jam|잼|Strawberry jam.|딸기 잼.
13-6|meat|고기|Cook the meat.|고기를 요리해라.
13-6|sugar|설탕|Sweet sugar.|달콤한 설탕.
13-6|salt|소금|Pass the salt.|소금을 건네줘.
13-6|soup|수프|Hot soup.|뜨거운 수프.
13-6|fish|생선|Fried fish.|생선 튀김.
13-6|grab|간단히 먹다, 잡다, 붙들다|Let's grab a bite.|간단히 먹자.
13-6|beef|소고기|Roast beef.|구운 소고기.
13-6|steak|스테이크|Rare steak.|덜 익힌 스테이크.
13-6|pork|돼지고기|Pork cutlet.|돈가스(돼지고기 커틀릿).
13-6|pepper|후추, 고추|Black pepper.|후추.
13-6|diet|다이어트, 식이요법|Go on a diet.|다이어트를 하다.
13-6|snack|간식|Have a snack.|간식을 먹다.
13-6|egg|달걀|Boiled egg.|삶은 달걀.
13-6|rice|밥|Steamed rice.|찐 밥(공기밥).
13-6|flour|밀가루|Wheat flour.|밀가루.
13-6|honey|꿀|Sweet as honey.|꿀처럼 달콤한.
13-6|mustard|겨자|Mustard sauce.|겨자 소스.
13-6|noodle|국수|Instant noodles.|라면(즉석 국수).
13-6|pickle|(오이 등을) 절인 것, 피클, 절이다|Cucumber pickle.|오이 피클.
13-6|stew|스튜, 찌개|Beef stew.|소고기 스튜.
13-6|cereal|곡물 식품, 시리얼, 곡물의|Eat cereal.|시리얼을 먹다.
13-6|meal|식사|Enjoy your meal.|식사를 즐겨라.
13-6|side dish|반찬, 주된 요리에 곁들이는 요리|Kimchi is a side dish.|김치는 반찬이다.
13-6|appetizer|애피타이저, 식욕을 돋우는 것|Order an appetizer.|애피타이저를 주문하다.
13-6|powder|가루|Milk powder.|분유(우유 가루).
13-6|set the table|식탁(밥상)을 차리다|Help set the table.|식탁 차리는 것을 도와라.
13-6|eat out|외식하다|Let's eat out tonight.|오늘 밤 외식하자.

13-7|bake|굽다|Bake cookies.|쿠키를 굽다.
13-7|fry|튀기다|Fry chicken.|치킨을 튀기다.
13-7|boil|끓이다|Boil water.|물을 끓이다.
13-7|glass|컵, 유리잔, 한 컵(의 양)|A glass of milk.|우유 한 잔.
13-7|knife|칼|A sharp knife.|날카로운 칼.
13-7|basket|바구니|Fruit basket.|과일 바구니.
13-7|chop|썰다, 다지다|Chop onions.|양파를 썰다.
13-7|lid|뚜껑|Close the lid.|뚜껑을 닫다.
13-7|handle|손잡이|Turn the handle.|손잡이를 돌려라.
13-7|pour|붓다|Pour tea.|차를 붓다.
13-7|roll|밀다|Roll the dough.|반죽을 밀다.
13-7|slice|얇게 썰다|Slice bread.|빵을 얇게 썰다.
13-7|refrigerator|냉장고|Open the refrigerator.|냉장고를 열어라.
13-7|pot|(속이 깊은) 냄비|A soup pot.|수프 냄비.
13-7|bowl|(우묵한) 그릇, 통|A rice bowl.|밥그릇.
13-7|plate|접시|A clean plate.|깨끗한 접시.
13-7|tray|쟁반|Put it on the tray.|그것을 쟁반 위에 놓아라.
13-7|jar|(입구가 넓은) 병, 단지|A cookie jar.|쿠키 단지.
13-7|pan|(납작한) 냄비, 팬|Frying pan.|프라이팬.
13-7|beat|휘저어 섞다 [b]|Beat eggs.|달걀을 휘저어라.
13-7|steam|찌다|Steam potatoes.|감자를 찌다.
13-7|scoop|주걱, 국자 [s]|Ice cream scoop.|아이스크림 주걱.
13-7|grill|(열로) 굽다, 익히다|Grill meat.|고기를 굽다.
13-7|kettle|주전자|Boil the kettle.|주전자를 끓이다.
13-7|opener|따개|Can opener.|캔 따개.
13-7|cabinet|진열대|Kitchen cabinet.|주방 수납장(진열대).
13-7|recipe|요리법|Follow the recipe.|요리법을 따라라.
13-7|blender|부엌용 믹서기 [b]|Use a blender.|믹서기를 사용해라. [b]
13-7|be used for|~에 사용(이용)되다|Knives are used for cutting.|칼은 자르는 데 사용된다.
13-7|keep on ing|계속 ~하다|Keep on trying.|계속 노력해라.

13-8|garden|정원, 정원을 가꾸다|A beautiful garden.|아름다운 정원.
13-8|apartment|아파트|Live in an apartment.|아파트에 살다.
13-8|yard|마당|Front yard.|앞마당.
13-8|knock|노크를 하다, (문 등을) 두드리다|Knock on the door.|문을 두드려라.
13-8|soap|비누|Use soap.|비누를 사용해라.
13-8|towel|타월, 수건|Dry with a towel.|수건으로 닦아라.
13-8|curtain|커튼|Close the curtain.|커튼을 쳐라.
13-8|mirror|거울|Look in the mirror.|거울을 봐라.
13-8|neighbor|이웃(사람)|A good neighbor.|좋은 이웃.
13-8|gate|문|Open the gate.|문을 열어라.
13-8|bedroom|침실|Go to the bedroom.|침실로 가라.
13-8|roof|지붕|Red roof.|빨간 지붕.
13-8|garage|차고|Park in the garage.|차고에 주차해라.
13-8|laundry|세탁물|Do the laundry.|빨래를 하다.
13-8|water|물, 물을 주다|Water the plants.|식물에 물을 주다.
13-8|lawn|잔디|Cut the lawn.|잔디를 깎다.
13-8|floor|마루, 바닥, 층|Sweep the floor.|바닥을 쓸어라.
13-8|feed|먹이를 주다|Feed the dog.|개에게 먹이를 주다.
13-8|bathroom|욕실|Clean bathroom.|깨끗한 욕실.
13-8|ceiling|천장|High ceiling.|높은 천장.
13-8|shelf|선반|Put it on the shelf.|그것을 선반에 놓아라.
13-8|drawer|서랍|Open the drawer.|서랍을 열어라.
13-8|lamp|전기스탠드, 램프|Turn on the lamp.|램프를 켜라.
13-8|sheet|시트, 홑이불|Change the sheet.|시트를 갈아라.
13-8|stair|계단, 층계|Up the stairs.|계단 위로.
13-8|scale|체중계, 저울|Step on the scale.|체중계에 올라가라.
13-8|sink|싱크대, 개수대|Wash in the sink.|싱크대에서 씻다.
13-8|tap|수도꼭지|Turn off the tap.|수도꼭지를 잠가라.
13-8|turn on|(라디오, TV, 전기, 가스 등을 ) 켜다|Turn on the TV.|TV를 켜라.
13-8|in place|제자리에 (있는)|Put it back in place.|제자리에 갖다 놓아라.

13-9|park|주차하다, 공원|Park here.|여기에 주차해라.
13-9|stop|정류장, 정차하다, 그만두다|Bus stop.|버스 정류장.
13-9|drive|운전하다|Drive a car.|차를 운전하다.
13-9|subway|지하철 [s]|Take the subway.|지하철을 타라.
13-9|seat|좌석|Empty seat.|빈 좌석.
13-9|road|길, 도로|Cross the road.|길을 건너라.
13-9|fare|요금|Pay the fare.|요금을 내라.
13-9|bicycle|자전거 [7]|Ride a bicycle.|자전거를 타다.
13-9|limit|한계, 제한, 제한하다|Speed limit.|속도제한.
13-9|route|길, 경로, 루트, (버스, 기차 등의) 노선|Bus route.|버스 노선.
13-9|cross|~을 건너다, 십자가|Cross the street.|거리를 건너다.
13-9|track|철도 선로, 궤도|Train track.|기차 선로.
13-9|rail|철로 [4]|By rail.|철도로(기차로).
13-9|curve|굽이, 커브, 굴곡, 구부러지다|Sharp curve.|급커브.
13-9|sign|표지(판), 서명하다|Traffic sign.|교통 표지판.
13-9|station|역, 정거장, (관공)서, 국|Train station.|기차역.
13-9|wheel|바퀴|Car wheel.|자동차 바퀴.
13-9|license|면허증|Driver's license.|운전면허증.
13-9|accident|사고|Car accident.|자동차 사고.
13-9|traffic|교통(량), 교통의|Traffic jam.|교통 체증.
13-9|forward|앞으로, 앞을 향하여|Move forward.|앞으로 이동해라.
13-9|transfer|옮기다, 환승하다|Transfer to line 2.|2호선으로 환승해라.
13-9|passenger|승객|Many passengers.|많은 승객들.
13-9|harbor|항구|Ships in the harbor.|항구에 있는 배들.
13-9|gas|휘발유, 가솔린 [g]|Gas station.|주유소.
13-9|platform|(역의) 플랫폼, 승강장|Wait on the platform.|승강장에서 기다려라.
13-9|transport|수송하다, 운송하다|Transport goods.|상품을 수송하다.
13-9|crash|충돌, 충돌하다|Cars crash.|차들이 충돌하다.
13-9|get on|(탈 것에) 타다, 승차하다|Get on the bus.|버스에 타라.
13-9|on foot|걸어서, 도보로|Go on foot.|걸어서 가다.

13-10|glue|풀, 풀을 바르다, 접착하다|Stick with glue.|풀로 붙여라.
13-10|scissors|가위|Cut with scissors.|가위로 잘라라.
13-10|eraser|지우개|Use an eraser.|지우개를 사용해라.
13-10|desk|책상|Sit at the desk.|책상에 앉아라.
13-10|chair|의자|A wooden chair.|나무 의자.
13-10|room|방, 실|Classroom.|교실.
13-10|company|회사|Work for a company.|회사에서 일하다.
13-10|interview|면접을 보다, 인터뷰를 하다, 면접, 인터뷰|Job interview.|취업 면접.
13-10|calendar|달력|Check the calendar.|달력을 확인해라.
13-10|printer|인쇄기, 프린터|Color printer.|컬러 프린터.
13-10|envelope|봉투|Put in an envelope.|봉투에 넣어라.
13-10|folder|폴더, 서류철|File folder.|서류철(폴더).
13-10|call|통화, 전화를 걸다|Call me.|나에게 전화해라.
13-10|letter|편지|Write a letter.|편지를 써라.
13-10|seal|도장, 인감, 봉인, 날인하다, 봉하다|Seal the envelope.|봉투를 봉해라.
13-10|clip|클립, 자르다, 깎다|Paper clip.|종이 클립.
13-10|pin|핀, 핀으로 고정하다|Safety pin.|옷핀.
13-10|message|메시지|Leave a message.|메시지를 남겨라.
13-10|bookcase|책장, 책꽂이|Books in the bookcase.|책장 안의 책들.
13-10|manager|관리자|Office manager.|사무실 관리자.
13-10|calculator|계산기|Use a calculator.|계산기를 써라.
13-10|stationery|문구류|Stationery store.|문구점.
13-10|staple|스테이플러로 고정시키다|Staple the papers.|종이들을 스테이플러로 찍어라.
13-10|punch|(표에 구멍을 뚫는) 펀지, 구멍을 뚫다|Punch a hole.|구멍을 뚫다.
13-10|highlighter|형광 컬러 펜|Use a highlighter.|형광펜을 써라.
13-10|document|서류, 문서|Important document.|중요한 서류.
13-10|printout|출력물|Computer printout.|컴퓨터 출력물.
13-10|photocopy|사진 복사물, 사진 복사하다|Photocopy this page.|이 페이지를 복사해라.
13-10|deal with|~을 다루다, 처리하다|Deal with problems.|문제를 다루다.
13-10|fill out|~을 작성하다, 기입하다|Fill out the form.|양식을 작성해라.

13-11|building|건물|A tall building.|높은 건물.
13-11|bakery|제과점|Bread from the bakery.|제과점에서 산 빵.
13-11|fire station|소방서|Call the fire station.|소방서에 전화해라.
13-11|hospital|병원|Go to the hospital.|병원에 가라.
13-11|museum|박물관|Visit the museum.|박물관을 방문하다.
13-11|city hall|시청|Meet at city hall.|시청에서 만나자.
13-11|police station|경찰서|Near the police station.|경찰서 근처에.
13-11|left|왼쪽|Turn left.|왼쪽으로 돌아라.
13-11|trash|쓰레기|Pick up trash.|쓰레기를 주워라.
13-11|village|(시골) 마을, 촌락|A small village.|작은 마을.
13-11|direction|방향|Which direction?|어느 방향이니?
13-11|street|거리|Cross the street.|거리를 건너라.
13-11|avenue|도시의 큰 대로, 넓은 길|Fifth Avenue.|5번가(대로).
13-11|block|(도로의) 블록, 구획, 덩어리, 장애물, 막다, 봉쇄하다|Walk one block.|한 블록 걸어라.
13-11|straight|똑바른, 직선의, 곧장, 일직선으로|Go straight.|곧장 가라.
13-11|corner|모퉁이, 구석|At the corner.|모퉁이에서.
13-11|turn|회전, 방향 전환, 돌다|Turn right.|오른쪽으로 돌아라.
13-11|drugstore|약국 [d]|Go to the drugstore.|약국에 가라.
13-11|pedestrian|보행자|Watch out for pedestrians.|보행자를 조심해라.
13-11|department store|백화점|Shop at a department store.|백화점에서 쇼핑하다.
13-11|sidewalk|인도, 보도 [8]|Walk on the sidewalk.|인도로 걸어라.
13-11|crosswalk|횡단보도|Use the crosswalk.|횡단보도를 이용해라.
13-11|intersection|교차로|Busy intersection.|붐비는 교차로.
13-11|patrol|순찰대, 순찰 경관|Police patrol.|경찰 순찰대.
13-11|signal|신호, 신호기|Traffic signal.|교통 신호.
13-11|highway|고속도로 [h]|Drive on the highway.|고속도로에서 운전하다.
13-11|sewer|하수구|A rat in the sewer.|하수구 속의 쥐.
13-11|give A a ride|A를 태워주다|Give me a ride.|나를 태워줘.
13-11|be known for|~로 알려져 있다, ~로 유명하다|Korea is {known for} Kimchi.|한국은 김치로 유명하다.
13-11|in the middle of|~의 중간(중앙)에, ~의 도중에|In the middle of the night.|한밤중에.

13-12|iron|다리미, 철, 다림질하다|Iron the shirt.|셔츠를 다림질해라.
13-12|lift|올리다, 들어올리다|Lift the box.|상자를 들어 올려라.
13-12|wash|세탁물, 씻다|Do the wash.|빨래를 하다.
13-12|mop|대걸레, 대걸레로 닦다|Mop the floor.|바닥을 대걸레로 닦아라.
13-12|daily|매일의, 나날의|Daily life.|일상생활(매일의 삶).
13-12|hang|걸다, 매달리다|Hang the picture.|그림을 걸어라.
13-12|hammer|망치|Hit with a hammer.|망치로 쳐라.
13-12|switch|스위치|Turn on the switch.|스위치를 켜라.
13-12|dust|먼지, 티끌, 먼지를 털다|Dust the table.|탁자의 먼지를 털어라.
13-12|ladder|사다리|Climb the ladder.|사다리를 올라가라.
13-12|carry|나르다|Carry the bag.|가방을 날라라.
13-12|tool|도구, 연장|A useful tool.|유용한 도구.
13-12|drill|송곳, 구멍을 뚫다|Use a drill.|드릴을 사용해라.
13-12|saw|톱, 톱질하다|Cut with a saw.|톱으로 잘라라.
13-12|bucket|물통, 양동이|A bucket of water.|물 한 양동이.
13-12|housework|가사, 집안일|Help with housework.|집안일을 도와라.
13-12|dig|파다, 파헤치다|Dig a hole.|구멍을 파라.
13-12|sweep|청소하다, 쓸다|Sweep the floor.|바닥을 쓸어라.
13-12|fold|개다, 접다|Fold the paper.|종이를 접어라.
13-12|rake|갈퀴, 긁어모으다|Rake leaves.|낙엽을 갈퀴로 긁어모아라.
13-12|trim|깎아 다듬다|Trim the hair.|머리를 다듬어라.
13-12|polish|닦다, 윤을 내다|Polish the shoes.|구두를 닦아라(윤내라).
13-12|screw|나사, 나사로 죄다, 비틀다|Tighten the screw.|나사를 조여라.
13-12|broom|빗자루|Sweep with a broom.|빗자루로 쓸어라.
13-12|shovel|삽|Dig with a shovel.|삽으로 파라.
13-12|wrench|렌치(너트를 죄를 기구) [w]|Use a wrench.|렌치를 사용해라.
13-12|flashlight|손전등|Shine the flashlight.|손전등을 비춰라.
13-12|outlet|(전기) 콘센트, 출구, 배출구|Plug into the outlet.|콘센트에 꽂아라.
13-12|set up|세우다, 설치(설립)하다|Set up a tent.|텐트를 쳐라(설치해라).
13-12|clean up|치우다, 청소하다|Clean up your room.|방을 치워라.

13-13|bottle|병|A water bottle.|물병.
13-13|package|(포장용) 용기, 상자, 꾸러미, 소포|Send a package.|소포를 보내라.
13-13|can|깡통, 통조림, (음식물을) 통조림으로 만들다|A tin can.|양철 깡통.
13-13|item|항목, 품목|Check the item.|품목을 확인해라.
13-13|pack|꾸러미, 한 상자, (짐을) 사다, 꾸리다|Pack your bags.|가방을 싸라.
13-13|ice|얼음|Cold ice.|차가운 얼음.
13-13|bar|막대기, 막대기 모양의 것|A chocolate bar.|초콜릿 바.
13-13|piece|조각|A piece of cake.|케이크 한 조각.
13-13|counter|계산대|Pay at the counter.|계산대에서 지불해라.
13-13|spray|스프레이, 분무기, 뿌리다|Spray water.|물을 뿌려라.
13-13|bin|(뚜껑 달린) 큰 상자|Trash bin.|쓰레기통.
13-13|smoked|훈제된|Smoked salmon.|훈제 연어.
13-13|fresh|신선한|Fresh fruit.|신선한 과일.
13-13|grain|곡물, 곡류|Whole grain.|통곡물.
13-13|vegetable|채소|Green vegetable.|녹색 채소.
13-13|cart|손수레, 카트|Push the cart.|카트를 밀어라.
13-13|seafood|해산물|Fresh seafood.|신선한 해산물.
13-13|cashier|계산원|Ask the cashier.|계산원에게 물어봐라.
13-13|freezer|냉동고|Put it in the freezer.|그것을 냉동고에 넣어라.
13-13|frozen food|냉동식품|Buy frozen food.|냉동식품을 사다.
13-13|grocery|식료 잡화점, 식품점, 식료품류|Grocery store.|식료품점.
13-13|container|용기|Plastic container.|플라스틱 용기.
13-13|aisle|통로|Walk down the aisle.|통로를 걸어가라.
13-13|dairy|우유의, 유제품의|Dairy products.|유제품.
13-13|bundle|(한 묶음의) 다발, 뭉치|A bundle of sticks.|나뭇가지 다발.
13-13|pile|더미|A pile of books.|책 더미.
13-13|cash register|금전 등록기|Open the cash register.|금전 등록기를 열어라.
13-13|on sale|판매되는, 할인 중인|It is on sale.|그것은 할인 중이다.
13-13|for free|공짜로, 무료로|Get it for free.|그것을 무료로 얻어라.
13-13|line up|줄을 서다|Please line up.|줄을 서 주세요.

13-14|clean|깨끗한, 청소하다, 깨끗이 하다|Clean hands.|깨끗한 손.
13-14|high|높은|A high mountain.|높은 산.
13-14|low|낮은|A low wall.|낮은 벽.
13-14|open|열린, 열다|An open door.|열린 문.
13-14|heavy|무거운|A heavy bag.|무거운 가방.
13-14|full|가득 찬, 배부른|A full cup.|가득 찬 컵.
13-14|flat|평평한, 편평한|A flat tire.|펑크 난(평평해진) 타이어.
13-14|dark|어두운|A dark room.|어두운 방.
13-14|deep|깊은|A deep sea.|깊은 바다.
13-14|round|둥근, 한 바퀴를 도는|A round ball.|둥근 공.
13-14|light|가벼운, (양이) 적은, 빛|A light feather.|가벼운 깃털.
13-14|famous|유명한|A famous star.|유명한 스타.
13-14|colorful|다채로운, 화려한|A colorful bird.|다채로운 색의 새.
13-14|empty|텅 빈|An empty box.|텅 빈 상자.
13-14|metal|금속|A metal spoon.|금속 숟가락.
13-14|plastic|플라스틱의, 비닐의, 성형의|A plastic bag.|비닐봉지(플라스틱 백).
13-14|wide|넓은|A wide river.|넓은 강.
13-14|tight|꽉 조이는|Tight shoes.|꽉 조이는 신발.
13-14|loose|헐렁한|Loose pants.|헐렁한 바지.
13-14|sharp|날카로운|A sharp knife.|날카로운 칼.
13-14|shallow|얕은|Shallow water.|얕은 물.
13-14|oval|달걀 모양, 타원형, 달걀 모양의, 타원형의|An oval face.|달걀형 얼굴.
13-14|square|정사각형, 광장, 정사각형의, 사각의|A square box.|정사각형 상자.
13-14|triangle|삼각형|Draw a triangle.|삼각형을 그려라.
13-14|crack|(갈라진) 틈, 틈새|A crack in the wall.|벽의 틈.
13-14|glitter|빛나다 [g]|Stars glitter.|별들이 빛난다.
13-14|firm|단단한, 굳은, 회사|A firm bed.|단단한 침대.
13-14|wooden|나무로 만든|A wooden chair.|나무 의자.
13-14|be covered with|~으로 덮여 있다|Hills are covered with snow.|언덕이 눈으로 덮여 있다.
13-14|prefer A to B|B보다 A를 더 선호하다|I prefer dogs to cats.|나는 고양이보다 개를 더 좋아한다.

13-15|watch|지켜보다|Watch TV.|TV를 보다.
13-15|look|보다, 바라보다|Look at me.|나를 봐라.
13-15|listen|(주의해서) 듣다 [l]|Listen carefully.|주의 깊게 들어라.
13-15|smell|냄새, 후각, 냄새가 나다, 냄새를 맡다|It smells good.|좋은 냄새가 난다.
13-15|loud|(소리가) 큰, 시끄러운 [l]|A loud noise.|시끄러운 소리.
13-15|bad|불쾌한, 나쁜, (음식이) 상한|A bad dream.|나쁜 꿈.
13-15|feel|(기분이) 들다, 느끼다|I feel happy.|나는 행복하다(행복을 느낀다).
13-15|hard|굳은, 단단한, 어려운|A hard rock.|단단한 바위.
13-15|scream|비명을 지르다, 소리치다, 비명, 절규|Don't scream.|비명 지르지 마라.
13-15|noise|소음|Make a noise.|소음을 내다.
13-15|bitter|쓴, 쓴맛의|Bitter medicine.|쓴 약.
13-15|sweet|달콤한|Sweet candy.|달콤한 사탕.
13-15|sour|신, 신맛의|A sour lemon.|신 레몬.
13-15|juicy|즙이 많은|A juicy orange.|즙이 많은 오렌지.
13-15|touch|촉감, 접촉, 만지다, 건드리다|Don't touch.|만지지 마라.
13-15|rough|거친, 가공하지 않은|Rough skin.|거친 피부.
13-15|soft|부드러운|A soft pillow.|부드러운 베개.
13-15|sense|감각, 감지하다|Five senses.|오감.
13-15|objective|객관적인, 목적, 목표|Be objective.|객관적이 되어라.
13-15|sight|시각, 시력, 보기, 일견|Lost sight.|시력을 잃었다.
13-15|stare|빤히 보다, 응시하다 [s]|Don't stare.|빤히 쳐다보지 마라.
13-15|whisper|속삭임, 속삭이다|Whisper to me.|나에게 속삭여라.
13-15|audio|음의 재생, 오디오, 음성의, 오디오의|Audio file.|오디오 파일.
13-15|flavor|맛, 풍미 [f]|Lemon flavor.|레몬 맛.
13-15|smooth|부드러운, 부드럽게 하다|Smooth surface.|부드러운(매끄러운) 표면.
13-15|notice|주의, 주목, 주의하다, 알아차리다 [n]|Did you notice?|알아차렸니? [n]
13-15|observe|관찰하다, 알아차리다|Observe nature.|자연을 관찰해라.
13-15|discover|발견하다, 알아내다|Discover a treasure.|보물을 발견하다.
13-15|make sense|의미가 통하다, 이해가(말이) 되다|It makes sense.|그건 말이 된다(이해가 된다).
13-15|focus on|~에 집중하다, 초점을 맞추다|Focus on study.|공부에 집중해라.

13-16|cough|기침, 기침하다|He has a bad cough.|그는 기침이 심하다.
13-16|fever|열, 발열|I have a high fever.|나는 열이 높다.
13-16|sore|아픈, 쑤시는|My throat is sore.|목이 아프다.
13-16|cut|베인 상처, 상처를 내다, ~을 베다|I have a cut on my finger.|손가락에 베인 상처가 있다.
13-16|pain|고통|Feel no pain.|고통을 느끼지 마라.
13-16|medicine|약|Take this medicine.|이 약을 먹어라.
13-16|virus|바이러스|A deadly virus.|치명적인 바이러스.
13-16|ache|통증, 아픔, 통증이 있다|My head aches.|머리가 아프다.
13-16|dizzy|어지러운|I feel dizzy.|나는 어지럽다.
13-16|disease|병, 질병|Cure a disease.|병을 치료하다.
13-16|cancer|암|Fight against cancer.|암과 싸우다.
13-16|blind|눈이 먼, 시각 장애의|Love is blind.|사랑은 눈이 멀었다.
13-16|deaf|귀가 먹은, 청각 장애가 있는|He is deaf.|그는 귀가 들리지 않는다.
13-16|patient|환자, 끈기 있는, 참을성 있는|Be patient.|참을성을 가져라.
13-16|cure|치료법, 치료하다|Cure the sick.|병자들을 치료하다.
13-16|relax|쉬게 하다, 편히 쉬다|Just relax.|그냥 편히 쉬어라.
13-16|burn|화상, 화상을 입다[입히다], (햇볕에) 타다|Don't burn yourself.|화상 입지 않게 조심해라.
13-16|symptom|증상|Flu symptoms.|독감 증상들.
13-16|wound|상처, 상처를 내다|Heal the wound.|상처를 치료하다.
13-16|vomit|토하다|I want to vomit.|토하고 싶다.
13-16|sneeze|재채기하다|Sneeze loudly.|크게 재채기하다.
13-16|bruise|멍, 타박상|A blue bruise.|파란 멍.
13-16|examine|진찰하다|Examine the patient.|환자를 진찰하다.
13-16|recover|회복하다|Recover soon.|빨리 회복해라.
13-16|prevent|예방하다, 막다|Prevent fire.|화재를 예방하다.
13-16|medical|의학의|Medical care.|의료(의학적 치료).
13-16|operate|수술하다|Operate on a patient.|환자를 수술하다.
13-16|emergency|비상사태, 응급|In case of emergency.|비상시에.
13-16|catch a cold|감기에 걸리다|Don't catch a cold.|감기 걸리지 마라.
13-16|see a doctor|의사의 진찰을 받다, 병원에 가다|Go see a doctor.|가서 진찰을 받아라.

13-17|trip|여행|School trip.|수학여행.
13-17|journey|(보통 멀리 가는) 여행, 여정|A long journey.|긴 여정.
13-17|sightseeing|관광|Go sightseeing.|관광하러 가다.
13-17|visa|비자, 사증|Get a visa.|비자를 받다.
13-17|flight|비행|Book a flight.|비행기표를 예약하다.
13-17|landscape|풍경|Beautiful landscape.|아름다운 풍경.
13-17|reserve|예약하다|Reserve a room.|방을 예약하다.
13-17|cancel|취소하다, 취소|Cancel the meeting.|회의를 취소하다.
13-17|scenery|풍경|Mountain scenery.|산의 풍경.
13-17|apply|신청하다|Apply for a job.|일자리에 지원하다(신청하다).
13-17|passport|여권|Show your passport.|여권을 보여 주세요.
13-17|insurance|보험|Travel insurance.|여행자 보험.
13-17|reach|도착하다, 도달하다|Reach the top.|정상에 도달하다.
13-17|attendant|안내원, 종업원|Flight attendant.|승무원(비행기 안내원).
13-17|board|탑승하다, 승차하다|Board the plane.|비행기에 탑승하다.
13-17|depart|출발하다|The train departs soon.|기차가 곧 출발한다.
13-17|arrive|도착하다|We arrived safely.|우리는 안전하게 도착했다.
13-17|land|땅, 착륙하다|The plane landed.|비행기가 착륙했다.
13-17|abroad|해외로|Study abroad.|해외 유학하다.
13-17|itinerary|여행 일정표, 여행 일기|Check the itinerary.|여행 일정을 확인해라.
13-17|baggage|짐, 수하물|Lost baggage.|분실 수하물.
13-17|claim|요구, 청구, 주장, 요구하다, 주장하다|Claim your bag.|가방을 찾아라(청구해라).
13-17|check|수표, 점검, 조사하다, 점검하다|Check the list.|목록을 점검해라.
13-17|destination|(여행 등의) 목적지|Final destination.|최종 목적지.
13-17|security|보안, 안전|Security check.|보안 검색.
13-17|delay|지연, 연기, 연기하다|Don't delay.|미루지 마라.
13-17|jet lag|시차증(여행 시차에 의한 피로, 신경 과민)|I have jet lag.|나는 시차 적응이 안 됐다.
13-17|souvenir|기념품|Buy a souvenir.|기념품을 사다.
13-17|all over the world|전 세계에|Famous all over the world.|전 세계적으로 유명한.
13-17|have a good time|즐겁게 보내다, 좋은 시간을 갖다|Have a good time.|즐거운 시간 보내.

13-18|movie|영화|Watch a movie.|영화를 보다.
13-18|puzzle|수수께끼, 퍼즐|Solve a puzzle.|퍼즐을 풀다.
13-18|game|게임, 시합|Play a game.|게임을 하다.
13-18|interest|흥미, 관심|Show interest.|흥미를 보이다.
13-18|picture|사진, 그림|Take a picture.|사진을 찍다.
13-18|musical|음악의, 뮤지컬|See a musical.|뮤지컬을 보다.
13-18|dance|춤, 춤을 추다|Let's dance.|춤추자.
13-18|activity|움직임, 활동|School activity.|학교 활동.
13-18|craft|(수)공예, 공예품을 만들다|Arts and crafts.|미술과 공예.
13-18|collect|모으다|Collect coins.|동전을 모으다.
13-18|chess|체스, 서양 장기|Play chess.|체스를 두다.
13-18|hike|하이킹하다, 도보여행하다|Hike up the hill.|언덕을 하이킹해라.
13-18|comic|희극의, 만화의|Comic book.|만화책.
13-18|camp|야영, 캠프, 야영지, 야영하다|Camp in the woods.|숲에서 야영하다.
13-18|pleasure|기쁨|With pleasure.|기꺼이(기쁨으로).
13-18|stamp|우표, 도장|Stamp collection.|우표 수집.
13-18|jog|조깅하다|Jog every morning.|매일 아침 조깅해라.
13-18|magic|마법, 주술, 마법의|Do a magic trick.|마술을 부리다.
13-18|fix|고치다, 고정시키다|Fix the toy.|장난감을 고쳐라.
13-18|favorite|가장 좋아하는|My favorite color.|내가 가장 좋아하는 색.
13-18|mania|열광|Movie mania.|영화광(열광).
13-18|volunteer|자원 봉사자, 지원자, 자진하여 하다|Work as a volunteer.|자원 봉사자로 일하다.
13-18|chat|수다를 떨다, (인터넷으로) 채팅하다|Chat with friends.|친구들과 수다 떨다.
13-18|model|모형, 모델, 모형의, 모델이 되는|Build a model.|모형을 만들다.
13-18|knit|뜨개질을 하다|Knit a scarf.|스카프를 뜨다.
13-18|leisure|여가, 한가한 시간, 한가한|Leisure time.|여가 시간.
13-18|involve|수반하다, 필요로 하다|Involve everyone.|모두를 참여시켜라(포함해라).
13-18|spend A on ing|~하는 데 A를 쓰다|Spend time on reading.|독서하는 데 시간을 보내라.
13-18|go for a walk|산책하러 가다|Let's go for a walk.|산책하러 가자.
13-18|from time to time|때때로, 가끔|Visit from time to time.|때때로 방문해라.

13-19|stretch|몸을 쭉 뻗다, 쭉 내밀다|Stretch your legs.|다리를 뻗어라.
13-19|swim|수영하다|Learn to swim.|수영을 배워라.
13-19|kick|(걷어) 차기, 발길질, 발로 차다|Kick the ball.|공을 차라.
13-19|outdoor|실외의, 집밖의|Outdoor games.|실외 게임.
13-19|player|경기자, 선수|Soccer player.|축구 선수.
13-19|bowling|볼링|Go bowling.|볼링 치러 가다.
13-19|prize|상, 상품|First prize.|1등 상.
13-19|competition|경쟁, 대회, 시합|Swimming competition.|수영 대회.
13-19|goal|(축구의) 골, 득점, 목적, 목표|Score a goal.|골을 넣다.
13-19|shoot|사격, (총 등을) 쏘다, 슛을 하다|Shoot the ball.|공을 쏴라(슛해라).
13-19|coach|코치, 지도자, 마차, 코치하다, 지도하다|Listen to the coach.|코치의 말을 들어라.
13-19|basketball|농구|Play basketball.|농구를 하다.
13-19|baseball|야구|Watch baseball.|야구를 보다.
13-19|base|(야구의) 루, 토대, 기초|Run to first base.|1루로 달려라.
13-19|match|시합, 경기, 경쟁 상대|Tennis match.|테니스 시합.
13-19|batter|타자|The batter hit a home run.|타자가 홈런을 쳤다.
13-19|throw|투구, 던짐, 던지다|Throw fast.|빨리 던져라.
13-19|catch|잡다, 공을 받다|Catch the ball.|공을 잡아라.
13-19|racket|라켓, 라켓으로 치다|Hold the racket.|라켓을 잡아라.
13-19|athlete|(운동)선수|A trained athlete.|훈련된 운동선수.
13-19|defender|수비수|A strong defender.|강력한 수비수.
13-19|score|(경기) 득점, 점수, 득점하다|What is the score?|점수가 몇이니?
13-19|referee|(운동 경기) 심판, 심판을 보다|Ask the referee.|심판에게 물어봐라.
13-19|champion|챔피언, 우승자|World champion.|세계 챔피언.
13-19|sweat|땀, (땀이 나도록) 힘든 일, 땀을 흘리다|Wipe off sweat.|땀을 닦아라.
13-19|dive|잠수, 잠수하다, 물 속에 뛰어들다|Dive into the pool.|수영장으로 다이빙해라.
13-19|skate|스케이트 구두, 스케이트를 타다|Ice skate.|아이스 스케이트.
13-19|surf|파도, 파도를 타다, 서핑하다|Surf in the ocean.|바다에서 서핑해라.
13-19|warm up|몸을 천천히 풀다, 준비 운동을 하다|Warm up first.|먼저 준비 운동을 해라.
13-19|up and down|위아래로, 이리저리|Jump up and down.|위아래로 펄쩍 뛰어라.

13-20|store|가게, 상점|Grocery store.|식료품 가게.
13-20|gift|선물|Birthday gift.|생일 선물.
13-20|cheap|값싼, 저렴한|It is very cheap.|그것은 매우 싸다.
13-20|expensive|값비싼|Too expensive.|너무 비싸다.
13-20|sale|판매, 염가 판매, 세일|For sale.|판매용.
13-20|sell|팔다|We sell books.|우리는 책을 판다.
13-20|choose|선택하다|Choose one.|하나를 골라라.
13-20|pay|지불하다|I will pay.|내가 낼게.
13-20|business|사업, 상업, 장사|Do business.|사업을 하다.
13-20|tax|세금|Pay tax.|세금을 내다.
13-20|exchange|교환, 거래소, 교환하다|Exchange money.|돈을 환전하다(교환하다).
13-20|select|선발하다, 선택하다, 엄선된, 고급의|Select the best.|최고를 선택해라. [s]
13-20|goods|상품, 물품|Leather goods.|가죽 제품.
13-20|tag|꼬리표, 태그, 정가표|Price tag.|가격표.
13-20|medium|중간, 중간의|Medium size.|중간 사이즈.
13-20|cash|현금|Pay in cash.|현금으로 지불하다.
13-20|change|거스름돈, 변화, 바꾸다|Keep the change.|거스름돈은 가지세요.
13-20|customer|고객|Regular customer.|단골손님.
13-20|display|전시, 진열, 전시하다|On display.|전시 중인.
13-20|stand|노점, 가판대|Fruit stand.|과일 가판대.
13-20|retail|소매|Retail price.|소매 가격.
13-20|discount|할인, 할인하다|Get a discount.|할인을 받다.
13-20|receipt|영수증|Keep the receipt.|영수증을 보관해라.
13-20|brand-name|(유명) 상표가 붙은|Brand-name clothes.|유명 브랜드 옷.
13-20|auction|경매|Buy at an auction.|경매에서 사다.
13-20|reasonable|(가격이) 합리적인, 저렴한, 이치에 맞는|Reasonable price.|합리적인(적당한) 가격.
13-20|catalog|목록, (상품 등의) 카탈로그|Order from a catalog.|카탈로그를 보고 주문하다.
13-20|quality|질, 품질|Good quality.|좋은 품질.
13-20|look around|둘러보다, 구경하다|Just look around.|그냥 둘러보다.
13-20|drop by|잠깐 들르다|Drop by my house.|우리 집에 들러라.

13-21|take|받다|I will take the call.|내가 전화를 받을게.
13-21|order|주문, 주문하다|Take my order.|내 주문을 받아라.
13-21|cook|요리사, 요리하다|A good cook.|훌륭한 요리사.
13-21|chef|요리사, 주방장|The chef cooks well.|그 주방장은 요리를 잘한다.
13-21|buffet|뷔페 식당, 뷔페식 상차림|All-you-can-eat buffet.|뷔페(마음껏 먹을 수 있는).
13-21|waiter|웨이터|Call the waiter.|웨이터를 불러라.
13-21|dessert|디저트, 후식|Sweet dessert.|달콤한 디저트.
13-21|napkin|냅킨|Use a napkin.|냅킨을 사용해라.
13-21|set|놓다, 준비하다|Set the table.|식탁을 차려라.
13-21|deliver|배달하다|Deliver a pizza.|피자를 배달하다.
13-21|wipe|닦다|Wipe your mouth.|입을 닦아라.
13-21|straw|빨대, 지푸라기|Use a straw.|빨대를 사용해라.
13-21|bite|한입, 물다|Take a bite.|한 입 먹어라.
13-21|spill|흘리다, 엎지르다|Don't spill milk.|우유를 흘리지 마라.
13-21|special|특별한 것, 특별 메뉴, 특별한|Today's special.|오늘의 특별 메뉴.
13-21|rare|(고기 등이) 덜 익은, 드문, 희귀한|Rare steak.|덜 익힌 스테이크.
13-21|calorie|칼로리, 열량|High calorie.|높은 칼로리.
13-21|serve|시중들다, 제공하다|Serve the guests.|손님들을 시중들어라.
13-21|tip|팁, (물건, 신체의) 뾰족한 끝|Leave a tip.|팁을 남겨라.
13-21|beverage|음료|Cold beverage.|차가운 음료.
13-21|refill|새 보충물, 다시 채우다, 보충하다|Free refill.|무료 리필.
13-21|wrap|싸다, 포장하다, 포장지|Wrap it up.|그것을 포장해라.
13-21|bill|계산서, 청구서|Ask for the bill.|계산서를 요청해라.
13-21|total|합계, 총액, 전체의, 총계의|The total cost.|총비용.
13-21|ingredient|재료|Fresh ingredients.|신선한 재료들.
13-21|recommend|추천하다|I recommend this.|나는 이것을 추천한다.
13-21|appetite|식욕|Good appetite.|좋은 식욕.
13-21|be ready to|~할 준비가 되다|I am ready to go.|나는 갈 준비가 됐다.
13-21|wait for|~을 기다리다|Wait for me.|나를 기다려라.
13-21|either A or B|A와 B 둘 중 하나|Either you or I.|너 아니면 나.

13-22|sand|모래|White sand.|하얀 모래.
13-22|wave|파도|Big wave.|큰 파도.
13-22|shell|조개|Sea shell.|조개껍데기.
13-22|suntan|선탠, 볕에 그을음|Get a suntan.|선탠을 하다.
13-22|raft|고무 보트, 뗏목|Build a raft.|뗏목을 만들다.
13-22|yacht|요트|Sail a yacht.|요트를 타다.
13-22|sunglasses|선글라스|Wear sunglasses.|선글라스를 써라.
13-22|parasol|파라솔, 양산|Under the parasol.|파라솔 아래에.
13-22|mat|돗자리, 매트|Sit on the mat.|돗자리에 앉아라.
13-22|vacation|방학|Summer vacation.|여름 방학.
13-22|whistle|호각, 호각을 불다|Blow the whistle.|호각을 불어라.
13-22|lifeboat|구명보트|Get on the lifeboat.|구명보트에 타라.
13-22|scuba|스쿠버, 잠수용 호흡 장치|Scuba diving.|스쿠버 다이빙.
13-22|swimsuit|수영복|Put on a swimsuit.|수영복을 입어라.
13-22|sunblock|자외선 차단제|Apply sunblock.|자외선 차단제를 발라라.
13-22|cooler|냉장 박스|Put drinks in the cooler.|음료수를 아이스박스(쿨러)에 넣어라.
13-22|blanket|담요|A warm blanket.|따뜻한 담요.
13-22|shade|그늘|Sit in the shade.|그늘에 앉아라.
13-22|shore|물가, 기슭|Walk along the shore.|물가를 따라 걸어라.
13-22|sunbath|일광욕|Take a sunbath.|일광욕을 하다.
13-22|lifeguard|인명 구조원|Ask the lifeguard.|구조원에게 물어봐라.
13-22|float|물 위에 뜨다, (배 등을) 띄우다|Boats float.|배들은 뜬다.
13-22|flipper|물갈퀴, 오리발|Wear flippers.|오리발을 착용해라.
13-22|binoculars|쌍안경|Look through binoculars.|쌍안경으로 봐라.
13-22|snorkel|스노쿨을 쓰고 잠수하다, 헤엄치다|Use a snorkel.||스노클을 사용해라.
13-22|pebble|조약돌, 자갈|Smooth pebble.|매끄러운 조약돌.
13-22|expose|노출하다|Don't expose to sun.|햇볕에 노출하지 마라.
13-22|all day long|하루 종일|Play all day long.|하루 종일 놀다.
13-22|look forward to ing|~을 고대하다, 손꼽아 기다리다|I {look forward to} seeing you.|너를 보기를 고대한다.
13-22|throw away|(쓰레기 등을) 버리다, (기회 등을) 놓치다, 날리다|Throw away trash.|쓰레기를 버려라.

13-23|festival|축제|Music festival.|음악 축제.
13-23|Valentine|발렌타인|Valentine's Day.|밸런타인데이.
13-23|blow|불다|Blow out candles.|촛불을 불어 꺼라.
13-23|Christmas|크리스마스|Merry Christmas.|메리 크리스마스.
13-23|candy|사탕|Sweet candy.|달콤한 사탕.
13-23|year|해, 년|Happy New Year.|새해 복 많이 받아라.
13-23|wish|소원, 기원하다|Make a wish.|소원을 빌어라.
13-23|mask|가면|Wear a mask.|가면을 써라.
13-23|celebrate|기념하다, 축하하다|Let's celebrate.|축하하자.
13-23|gather|모이다, 모으다|Family gathering.|가족 모임.
13-23|honeymoon|신혼여행|Go on a honeymoon.|신혼여행을 가다.
13-23|Easter|부활절|Easter egg.|부활절 달걀.
13-23|hide|숨기다|Hide and seek.|숨바꼭질.
13-23|invitation|초대, 초대장|Send an invitation.|초대장을 보내라.
13-23|Eve|전날 밤, 이브|Christmas Eve.|크리스마스이브.
13-23|decorate|장식하다|Decorate the tree.|트리를 장식해라.
13-23|witch|마녀|A wicked witch.|사악한 마녀.
13-23|trick|속이다, 속임수|Trick or treat.|과자를 안 주면 장난칠 거야.
13-23|costume|복장, 의상, 분장|Halloween costume.|핼러윈 의상.
13-23|turkey|칠면조, 칠면조 고기|Roast turkey.|칠면조 구이.
13-23|anniversary|기념일|Wedding anniversary.|결혼기념일.
13-23|congratulate|축하하다|I congratulate you.|너를 축하한다.
13-23|Thanksgiving|추수 감사절|Thanksgiving Day.|추수감사절.
13-23|Halloween|할로윈|Happy Halloween.|즐거운 핼러윈.
13-23|reindeer|순록|Santa's reindeer.|산타의 순록.
13-23|lantern|랜턴|Light a lantern.|랜턴을 켜라.
13-23|stuff|채우다, 것, 물건|Stuff the turkey.|칠면조 속을 채워라.
13-23|crowded|붐비는, 혼잡한|A crowded bus.|붐비는 버스.
13-23|take place|열리다, 개최되다|The party takes place here.|파티가 여기서 열린다.
13-23|be similar to|~와 비슷하다, 유사하다|It is similar to mine.|그것은 내 것과 비슷하다.

13-24|seesaw|시소, 시소를 타다|Play on the seesaw.|시소를 타라.
13-24|walk|걷다, 산책하다|Go for a walk.|산책하러 가다.
13-24|ride|탈것, 타다|Enjoy the ride.|타는 것을 즐겨라.
13-24|bench|긴 의자, 벤치|Sit on the bench.|벤치에 앉아라.
13-24|event|사건,  행사|School event.|학교 행사.
13-24|picnic|소풍|Go on a picnic.|소풍 가다.
13-24|zoo|동물원|Visit the zoo.|동물원을 방문하다.
13-24|concert|콘서트, 공연|Rock concert.|록 콘서트.
13-24|visit|방문하다|Visit a friend.|친구를 방문하다.
13-24|rope|줄|Jump rope.|줄넘기.
13-24|backpack|배낭, 배낭을 지고 걷다|Carry a backpack.|배낭을 메라.
13-24|slide|미끄럼틀, 미끄러지다|Go down the slide.|미끄럼틀을 타고 내려가라.
13-24|fountain|분수|Water fountain.|분수대.
13-24|playground|놀이터, 운동장|Play in the playground.|놀이터에서 놀다.
13-24|swing|그네, 그네를 타다|Push the swing.|그네를 밀어라.
13-24|sleeping bag|침낭|Sleep in a sleeping bag.|침낭에서 자다.
13-24|campfire|모닥불|Make a campfire.|모닥불을 피우다.
13-24|fishing rod|낚시대|Hold the fishing rod.|낚싯대를 잡아라.
13-24|sail|요트를 타다, 항해하다, 나아가다|Sail a boat.|배를 타고 항해하다.
13-24|amusement|놀이, 즐거움, 재미|Amusement park.|놀이공원.
13-24|merry-go-round|회전목마|Ride a merry-go-round.|회전목마를 타다.
13-24|flea market|벼룩시장|Buy at a flea market.|벼룩시장에서 사다.
13-24|botanical garden|식물원|Beautiful botanical garden.|아름다운 식물원.
13-24|aquarium|수족관|Fish in the aquarium.|수족관 안의 물고기.
13-24|thermos|보온병|Hot water in a thermos.|보온병 안의 뜨거운 물.
13-24|peak|꼭대기|Mountain peak.|산봉우리.
13-24|rapids|급류, 여울|Dangerous rapids.|위험한 급류.
13-24|get together|모이다, 모으다|Let's get together.|함께 모이자.
13-24|because of|~ 때문에|Because of rain.|비 때문에.
13-24|be filled with|~으로 가득 차다|The cup is filled with water.|컵이 물로 가득 차 있다.

13-25|flood|홍수|A heavy flood.|심한 홍수.
13-25|hurricane|폭풍, 허리케인|A strong hurricane.|강력한 허리케인.
13-25|thunder|천둥, 천둥같이 큰 소리|Loud thunder.|큰 천둥 소리.
13-25|lightning|번개, 번개 같은|Flash of lightning.|번개 불빛.
13-25|creature|창조물, 피조물|Sea creature.|바다 생물.
13-25|valley|계곡, 골짜기|Deep valley.|깊은 계곡.
13-25|polar|북극(남극)의, 극지의|Polar bear.|북극곰.
13-25|breeze|산들바람|Cool breeze.|시원한 산들바람.
13-25|cliff|벼랑, 절벽|High cliff.|높은 절벽.
13-25|volcano|화산|Active volcano.|활화산.
13-25|natural|자연의, 자연스러운|Natural beauty.|자연의 아름다움.
13-25|forest|숲, 삼림|Green forest.|푸른 숲.
13-25|desert|사막|Hot desert.|뜨거운 사막.
13-25|explore|탐험하다|Explore the cave.|동굴을 탐험하다.
13-25|stream|시내, 개울, 흐름|Small stream.|작은 시내.
13-25|lake|호수|Swim in the lake.|호수에서 수영하다.
13-25|waterfall|폭포|Beautiful waterfall.|아름다운 폭포.
13-25|river|강|Cross the river.|강을 건너다.
13-25|ocean|바다, 대양|Blue ocean.|푸른 대양.
13-25|coast|해안, 연안|Along the coast.|해안을 따라서.
13-25|tide|조수, 간만|High tide.|밀물(만조).
13-25|landslide|산사태|Dangerous landslide.|위험한 산사태.
13-25|earthquake|지진|Big earthquake.|큰 지진.
13-25|element|요소, 성분, 원소|Key element.|핵심 요소.
13-25|appear|나타나다|Stars appear.|별들이 나타난다.
13-25|source|원천, 수원|Source of light.|빛의 원천.
13-25|disaster|재난, 재해|Natural disaster.|자연재해.
13-25|food chain|먹이 사슬|The food chain.|먹이 사슬.
13-25|find out|~을 찾아내다, 알아내다|Find out the truth.|진실을 알아내다.
13-25|right away|곧바로, 즉시|Do it right away.|즉시 해라.

13-26|clear|청명한, 깨끗한, 명백한|The sky is clear.|하늘이 맑다.
13-26|sunny|햇빛이 밝은, 화창한|It is sunny today.|오늘은 화창하다.
13-26|cloudy|구름 낀|It's getting cloudy.|구름이 끼고 있다.
13-26|rainy|비가 오는|A rainy day.|비 오는 날.
13-26|windy|바람이 부는|It is very windy.|바람이 많이 분다.
13-26|snowy|눈이 내리는|Snowy weather.|눈 내리는 날씨.
13-26|mild|온화한, 포근한|Mild winter.|온화한 겨울.
13-26|foggy|안개 낀|It was foggy.|안개가 꼈었다.
13-26|freezing|몹시 추운, 얼어붙을 듯한|It is freezing outside.|밖은 몹시 춥다.
13-26|icy|얼음의, 싸늘한|Icy road.|빙판길.
13-26|dry|건조한|Dry skin.|건조한 피부.
13-26|moist|축축한, 습기 있는|Moist cake.|촉촉한 케이크.
13-26|storm|폭풍|A heavy storm.|심한 폭풍.
13-26|rainfall|강우, 강우량|Heavy rainfall.|많은 강우량.
13-26|hail|우박, 싸락눈|Hail fell down.|우박이 떨어졌다.
13-26|snowstorm|눈보라|Stuck in a snowstorm.|눈보라에 갇힌.
13-26|blizzard|강한 눈보라, 블리자드|A fierce blizzard.|맹렬한 눈보라.
13-26|drizzle|이슬비|A light drizzle.|가벼운 이슬비.
13-26|melt|녹다, 녹이다|Snow melts.|눈이 녹는다.
13-26|gale|강풍|A strong gale.|강풍.
13-26|forecast|예측, 예보, 예측하다|Weather forecast.|일기 예보.
13-26|condition|상태, 상황|Good condition.|좋은 상태.
13-26|drought|가뭄|A long drought.|긴 가뭄.
13-26|climate|기후|Change of climate.|기후 변화.
13-26|degree|도|20 degrees.|20도.
13-26|temperature|온도|Low temperature.|낮은 온도.
13-26|humid|습한, 눅눅한|Hot and humid.|덥고 습한.
13-26|sticky|끈적끈적한, 무더운|Sticky weather.|끈적끈적한 날씨.
13-26|up to|~까지|Count up to ten.|열까지 세어라.
13-26|on the way (to)|~로 가는 길에|On the way to school.|학교 가는 길에.

13-27|farm|농장|Work on a farm.|농장에서 일하다.
13-27|field|밭|Corn field.|옥수수밭.
13-27|cowboy|카우보이, 목동|A cowboy rides a horse.|카우보이가 말을 탄다.
13-27|horse|말|Ride a horse.|말을 타다.
13-27|bull|황소|An angry bull.|화난 황소.
13-27|chicken|닭|Feed the chicken.|닭에게 모이를 주다.
13-27|goat|염소|Milk a goat.|염소 젖을 짜다.
13-27|pig|돼지|A fat pig.|뚱뚱한 돼지.
13-27|buffalo|버팔로, 물소, 들소|Wild buffalo.|야생 버팔로.
13-27|crop|농작물, 수확량|Gather crops.|농작물을 거두다.
13-27|meadow|목초지, 초원|Green meadow.|푸른 목초지.
13-27|barn|헛간|A red barn.|빨간 헛간.
13-27|hay|건초|Dry hay.|마른 건초.
13-27|harvest|수확하다|Harvest time.|수확기.
13-27|calf|송아지|A young calf.|어린 송아지.
13-27|cattle|소|Raise cattle.|소를 기르다.
13-27|lay|알을 낳다, ~을 ~에 두다|Hens lay eggs.|암탉은 알을 낳는다.
13-27|cotton|면|Cotton field.|목화밭.
13-27|shepherd|양치기|The shepherd watches sheep.|양치기는 양을 지킨다.
13-27|farmhouse|농가|An old farmhouse.|오래된 농가.
13-27|cultivate|경작하다, 재배하다|Cultivate land.|땅을 경작하다.
13-27|orchard|과수원|Apple orchard.|사과 과수원.
13-27|shed|헛간, 오두막, 창고|Tool shed.|도구 창고.
13-27|ranch|농장, 목축장|Cattle ranch.|소 목장.
13-27|pasture|목장, 방목하다|Sheep in the pasture.|목초지의 양들.
13-27|scarecrow|허수아비|A scarecrow in the field.|들판의 허수아비.
13-27|livestock|가축류|Feed livestock.|가축에게 먹이를 주다.
13-27|vineyard|포도밭, 포도원|Visit a vineyard.|포도밭을 방문하다.
13-27|take care of|~을 돌보다|Take care of pets.|애완동물을 돌보다.
13-27|run away|도망치다, 달아나다|Don't run away.|도망치지 마라.

13-28|bloom|꽃, 개화, 꽃이 피다|Roses bloom.|장미꽃이 핀다.
13-28|fruit|열매, 과일, 결과, 성과|Bear fruit.|열매를 맺다.
13-28|grass|풀, 잔디, 잔디밭|Green grass.|푸른 잔디.
13-28|weed|잡초, ~의 잡초를 뽑다|Pull out weeds.|잡초를 뽑다.
13-28|seed|씨앗, 종자|Plant a seed.|씨앗을 심다.
13-28|sprout|새싹, 발아하다|Green sprouts.|파란 새싹들.
13-28|bud|(식물의) 눈, 봉오리|Flower bud.|꽃봉오리.
13-28|petal|꽃잎|Rose petal.|장미 꽃잎.
13-28|root|뿌리, 뿌리 뽑다|Deep roots.|깊은 뿌리.
13-28|stem|(식물) 줄기, 대; 유래하다|Flower stem.|꽃줄기.
13-28|thorn|가시|Sharp thorn.|날카로운 가시.
13-28|branch|나뭇가지, 분점, 지점|Tree branch.|나뭇가지.
13-28|bough|큰 가지|Hang on a bough.|큰 가지에 매달리다.
13-28|maple|단풍나무|Maple leaf.|단풍잎.
13-28|bamboo|대나무|Bamboo forest.|대나무 숲.
13-28|needle|바늘처럼 뾰족한 잎, 바늘|Pine needle.|솔잎.
13-28|pine tree|소나무|Tall pine tree.|키 큰 소나무.
13-28|cherry tree|벚나무|Cherry tree blossoms.|벚나무 꽃.
13-28|cactus|선인장|Prickly cactus.|가시 많은 선인장.
13-28|trunk|나무의 몸통 부분, 코끼리의 코|Tree trunk.|나무 몸통.
13-28|bark|나무껍질, (개가) 짖다|Rough bark.|거친 나무껍질.
13-28|fertilizer|비료|Use fertilizer.|비료를 사용하다.
13-28|bush|관목, 작은 나무들이 우거진 관목 숲|Hide in the bush.|덤불 속에 숨다.
13-28|palm|야자수, 손바닥|Palm tree.|야자수.
13-28|bulb|구근, 알뿌리, 전구|Tulip bulb.|튤립 알뿌리.
13-28|poisonous|독이 있는|Poisonous mushroom.|독버섯.
13-28|herb|약초, 허브|Fresh herbs.|신선한 허브.
13-28|cut off|잘라내다, 차단하다|Cut off the branch.|가지를 잘라내라.
13-28|little by little|조금씩, 천천히|Learn little by little.|조금씩 배워라.
13-28|day by day|나날이, 서서히|Grow day by day.|나날이 자라다.

13-29|lion|사자|King lion.|사자 왕.
13-29|rat|쥐|A big rat.|큰 쥐.
13-29|bat|박쥐|Bats fly at night.|박쥐는 밤에 난다.
13-29|snake|뱀|Long snake.|긴 뱀.
13-29|fox|여우|Clever fox.|영리한 여우.
13-29|tiger|호랑이|Strong tiger.|힘센 호랑이.
13-29|whale|고래|Huge whale.|거대한 고래.
13-29|bear|곰|Brown bear.|갈색 곰.
13-29|deer|사슴|Run like a deer.|사슴처럼 달리다.
13-29|turtle|거북|Slow turtle.|느린 거북.
13-29|kangaroo|캥거루|Jumping kangaroo.|뛰는 캥거루.
13-29|giraffe|기린|Tall giraffe.|키 큰 기린.
13-29|zebra|얼룩말|Striped zebra.|줄무늬 얼룩말.
13-29|camel|낙타, 낙타색, 황갈색|Ride a camel.|낙타를 타다.
13-29|dolphin|돌고래|Smart dolphin.|똑똑한 돌고래.
13-29|shark|상어|Dangerous shark.|위험한 상어.
13-29|leopard|표범|Fast leopard.|빠른 표범.
13-29|frog|개구리|Green frog.|청개구리.
13-29|dinosaur|공룡|Big dinosaur.|큰 공룡.
13-29|bird cage|새장|Clean the bird cage.|새장을 청소해라.
13-29|fish tank|어항|Goldfish in the fish tank.|어항 속의 금붕어.
13-29|octopus|문어, 낙지|Eight-legged octopus.|다리가 8개인 문어.
13-29|jellyfish|해파리|Stinging jellyfish.|쏘는 해파리.
13-29|sea horse|해마|Tiny sea horse.|작은 해마.
13-29|hippo|하마|Heavy hippo.|무거운 하마.
13-29|rhino|코뿔소|Strong rhino.|힘센 코뿔소.
13-29|crocodile|악어|Big crocodile.|큰 악어.
13-29|lizard|도마뱀|Small lizard.|작은 도마뱀.
13-29|make friends (with)|친구를 사귀다, ~와 친해지다|Make friends with him.|그와 친구가 되어라.
13-29|on one's own|혼자, 혼자 힘으로|Do it on your own.|너 혼자 힘으로 해라.

13-30|insect|곤충|Small insect.|작은 곤충.
13-30|bee|벌|Busy bee.|바쁜 벌.
13-30|wing|날개|Bird's wing.|새의 날개.
13-30|hen|암탉|The hen lays eggs.|암탉이 알을 낳는다.
13-30|spider|거미|Spider web.|거미줄.
13-30|butterfly|나비|Beautiful butterfly.|아름다운 나비.
13-30|beetle|딱정벌레|Black beetle.|검은 딱정벌레.
13-30|ladybug|무당벌레|Red ladybug.|빨간 무당벌레.
13-30|flea|벼룩|Jumping flea.|뛰는 벼룩.
13-30|mosquito|모기|Mosquito bite.|모기 물린 곳.
13-30|swan|백조|White swan.|하얀 백조.
13-30|penguin|펭귄|Cute penguin.|귀여운 펭귄.
13-30|eagle|독수리|Flying eagle.|나는 독수리.
13-30|beak|부리|Sharp beak.|날카로운 부리.
13-30|crow|까마귀|Black crow.|검은 까마귀.
13-30|pigeon|비둘기|Feeding a pigeon.|비둘기에게 먹이 주기.
13-30|parrot|앵무새|Talking parrot.|말하는 앵무새.
13-30|goose|거위|Wild goose.|기러기(야생 거위).
13-30|cuckoo|뻐꾸기|Cuckoo clock.|뻐꾸기시계.
13-30|owl|올빼미|Wise owl.|지혜로운 올빼미.
13-30|peacock|공작새|Colorful peacock.|화려한 공작새.
13-30|ostrich|타조|Fast ostrich.|빠른 타조.
13-30|swallow|제비, 삼키다|Flying swallow.|날아가는 제비.
13-30|moth|나방, 좀벌레|Night moth.|밤 나방.
13-30|cricket|귀뚜라미|Chirping cricket.|우는 귀뚜라미.
13-30|caterpillar|애벌레, 유충|Green caterpillar.|초록색 애벌레.
13-30|hummingbird|벌새|Tiny hummingbird.|아주 작은 벌새.
13-30|such as|~와 같은|Fruits such as apples.|사과 같은 과일들.
13-30|all the time|내내, 줄곧|Smile all the time.|항상(내내) 미소 지어라.
13-30|thanks to|~ 덕분에, ~ 때문에|Thanks to you.|네 덕분에.

13-31|pollution|오염|Air pollution.|대기 오염.
13-31|protect|보호하다|Protect nature.|자연을 보호해라.
13-31|separate|분리하다|Separate the trash.|쓰레기를 분리해라.
13-31|environment|환경|Clean environment.|깨끗한 환경.
13-31|effect|영향, 효과|Good effect.|좋은 영향(효과).
13-31|resource|자원|Natural resources.|천연자원.
13-31|destroy|파괴하다, 부수다|Don't destroy forests.|숲을 파괴하지 마라.
13-31|global warming|지구 온난화|Stop global warming.|지구 온난화를 멈춰라.
13-31|damage|손상, 피해|Heavy damage.|심한 손상.
13-31|garbage|쓰레기|Throw away garbage.|쓰레기를 버려라.
13-31|share|공유하다|Share a room.|방을 같이 쓰다(공유하다).
13-31|cause|야기하다|What caused the fire?|무엇이 화재를 야기했니?
13-31|ruin|파괴, 유적, 파멸시키다|Don't ruin my plan.|내 계획을 망치지 마라.
13-31|raw|날것의, 가공하지 않은|Raw fish.|생선회(날 생선).
13-31|electricity|전기|Save electricity.|전기를 절약해라.
13-31|pure|순수한|Pure water.|순수한 물.
13-31|smog|스모그, 연무|Thick smog.|짙은 스모그.
13-31|fuel|연료|Add fuel.|연료를 더해라.
13-31|fossil|화석|Fossil fuel.|화석 연료.
13-31|acid|산, 산성의|Acid rain.|산성비.
13-31|toxic|유독한|Toxic waste.|유독성 폐기물.
13-31|exhaust|배기가스, 다 써버리다|Car exhaust.|자동차 배기가스.
13-31|shortage|부족, 결핍|Water shortage.|물 부족.
13-31|reduce|줄이다|Reduce waste.|쓰레기를 줄여라.
13-31|endangered|멸종 위기의, 위험에 처한|Endangered animals.|멸종 위기 동물들.
13-31|leak|누출, 새다|The roof leaks.|지붕이 샌다.
13-31|overuse|남용, 남용하다|Don't overuse it.|그것을 남용하지 마라.
13-31|greenhouse|온실|Greenhouse effect.|온실 효과.
13-31|be worried about|~에 대해 걱정하다|I am worried about you.|나는 네가 걱정된다.
13-31|back and forth|앞뒤로, 왔다 갔다|Walk back and forth.|왔다 갔다 걷다.

13-32|electric|전기의|Electric car.|전기 자동차.
13-32|invent|발명하다|Edison invented the bulb.|에디슨은 전구를 발명했다.
13-32|machine|기계|Washing machine.|세탁기.
13-32|data|자료, 정보|Collect data.|자료를 수집하다.
13-32|important|중요한|It is important.|그것은 중요하다.
13-32|cell|세포|Blood cell.|혈액 세포.
13-32|prove|증명하다|Prove it.|그것을 증명해라.
13-32|inform|알리다, 통지하다|Please inform me.|나에게 알려주세요.
13-32|experiment|실험, 실험하다|Science experiment.|과학 실험.
13-32|method|방법|A new method.|새로운 방법.
13-32|chemical|화학의, 화학 약품|Chemical reaction.|화학 반응.
13-32|measure|측정하다|Measure the length.|길이를 측정해라.
13-32|technology|기술|High technology.|첨단 기술.
13-32|inspect|조사하다|Inspect the car.|차를 조사(점검)하다.
13-32|imagine|상상하다|Imagine the future.|미래를 상상해라.
13-32|visible|눈에 보이는|Stars are visible.|별들이 눈에 보인다.
13-32|vacuum|진공, 공백, 청소하다|Vacuum cleaner.|진공청소기.
13-32|react|반응하다|How did he react?|그가 어떻게 반응했니?
13-32|mobile|이동성의, 휴대 전화|Mobile phone.|휴대전화.
13-32|charge|충전하다|Charge the battery.|배터리를 충전해라.
13-32|multiply|곱하다, 증가시키다|Multiply 2 by 3.|2에 3을 곱해라.
13-32|gravity|중력|Zero gravity.|무중력.
13-32|browse|검색하다|Browse the internet.|인터넷을 검색하다.
13-32|device|장치|Electronic device.|전자기기.
13-32|delete|삭제하다|Delete the file.|파일을 삭제해라.
13-32|wireless|무선의|Wireless mouse.|무선 마우스.
13-32|transmit|보내다, 전송하다, 전염시키다|Transmit data.|데이터를 전송하다.
13-32|formula|공식|Math formula.|수학 공식.
13-32|lead to|~로 이어지다, ~을 초래하다|Roads lead to Rome.|길들은 로마로 이어진다.
13-32|come up with|~을 찾아내다, 생각해 내다|Come up with an idea.|아이디어를 생각해 내다.

13-33|earth|지구|Save the earth.|지구를 구하자.
13-33|planet|행성|Red planet.|붉은 행성(화성).
13-33|universe|우주|The vast universe.|광활한 우주.
13-33|solar|태양의|Solar energy.|태양 에너지.
13-33|lunar|달의|Lunar eclipse.|월식.
13-33|crew|승무원|Flight crew.|비행 승무원.
13-33|rocket|로켓, 로켓으로 쏘아 올리다|Launch a rocket.|로켓을 발사하다.
13-33|outer|외부의, 외곽의|Outer space.|우주 공간(대기권 밖).
13-33|surface|표면|Smooth surface.|매끄러운 표면.
13-33|Mercury|수성, 수은|Mercury is hot.|수성은 뜨겁다.
13-33|Venus|금성|Venus is bright.|금성은 밝다.
13-33|Mars|화성|Life on Mars.|화성의 생명체.
13-33|Jupiter|목성|Jupiter is big.|목성은 크다.
13-33|Saturn|토성|Rings of Saturn.|토성의 고리들.
13-33|ring|고리, 반지|A gold ring.|금반지.
13-33|comet|혜성|Halley's Comet.|핼리 혜성.
13-33|telescope|망원경|Look through a telescope.|망원경으로 보다.
13-33|Milky Way|은하수|The Milky Way.|은하수.
13-33|space shuttle|우주 왕복선|Fly a space shuttle.|우주 왕복선을 날리다.
13-33|space station|우주 정거장|Live in a space station.|우주 정거장에서 살다.
13-33|eclipse|식|Solar eclipse.|일식.
13-33|satellite|위성|Artificial satellite.|인공위성.
13-33|orbit|궤도, 궤도를 그리며 돌다|Earth's orbit.|지구의 궤도.
13-33|galaxy|은하|Andromeda Galaxy.|안드로메다은하.
13-33|astronomy|천문학|Study astronomy.|천문학을 공부하다.
13-33|astronomer|천문학자|Famous astronomer.|유명한 천문학자.
13-33|Big Bang|빅뱅|The Big Bang theory.|빅뱅 이론.
13-33|light year|광년|Millions of light years.|수백만 광년.
13-33|far from|~에서 멀리, 전혀 ~이 아닌|Far from home.|집에서 멀리 떨어진.
13-33|by chance|우연히, 뜻밖에|Meet by chance.|우연히 만나다.

13-34|power|힘, 권력, 에너지|Electric power.|전력(전기 에너지).
13-34|produce|생산하다, 만들어 내다|Produce cars.|자동차를 생산하다.
13-34|wind|바람|Wind blows.|바람이 분다.
13-34|coal|석탄|Burn coal.|석탄을 태우다.
13-34|mine|광산, 지뢰, 채굴하다|Gold mine.|금광.
13-34|factory|공장|Shoe factory.|신발 공장.
13-34|dam|댐|Build a dam.|댐을 짓다.
13-34|heat|열, 가열하다|Turn up the heat.|난방을 올려라(열을 높여라).
13-34|battery|배터리|Change the battery.|배터리를 갈아라.
13-34|consume|소모하다|Consume less energy.|에너지를 덜 소모해라.
13-34|generate|생성하다, 발생시키다|Generate electricity.|전기를 생성하다(발전하다).
13-34|nuclear|원자핵의|Nuclear power.|원자력.
13-34|windmill|풍차|Old windmill.|오래된 풍차.
13-34|tidal|조수의|Tidal wave.|해일.
13-34|careless|부주의한|Don't be careless.|부주의하지 마라.
13-34|transform|바꾸다, 변형시키다|Transform energy.|에너지를 변형시키다.
13-34|natural gas|천연가스|Use natural gas.|천연가스를 사용하다.
13-34|abundant|풍족한, 풍부한|Abundant food.|풍부한 식량.
13-34|utility pole|전신주|Climb a utility pole.|전신주에 오르다.
13-34|solar collector|태양열 집열기|Install a solar collector.|태양열 집열기를 설치하다.
13-34|transmission tower|송전탑|High transmission tower.|높은 송전탑.
13-34|radioactive|방사능을 가진|Radioactive waste.|방사능 폐기물.
13-34|power line|송전선|Fallen power line.|떨어진 송전선.
13-34|conserve|보전하다, 아끼다, 절약하다|Conserve water.|물을 아껴라(보전해라).
13-34|efficiency|효율|Energy efficiency.|에너지 효율.
13-34|crisis|위기|Economic crisis.|경제 위기.
13-34|authorized|권한이 부여된|Authorized person.|권한이 있는 사람.
13-34|be made up of|~로 구성되다, 이루어지다|Water is made up of H and O.|물은 수소와 산소로 구성된다.
13-34|turn into|~로 변하다, 바뀌다|Caterpillars turn into butterflies.|애벌레는 나비로 변한다.
13-34|and so on|(기타) 등등|Apples, pears, and so on.|사과, 배 등등.

13-35|exam|시험|Pass the exam.|시험에 합격하다.
13-35|college|단과대학|Go to college.|대학에 가다.
13-35|university|종합대학|Seoul National University.|서울대학교.
13-35|elementary|기초의, 기본이 되는|Elementary school.|초등학교.
13-35|tutor|가정교사, 개인 지도 교사|Math tutor.|수학 가정교사.
13-35|discuss|토론하다|Let's discuss.|토론하자.
13-35|explain|설명하다|Explain the rule.|규칙을 설명해라.
13-35|memorize|암기하다|Memorize words.|단어를 암기해라.
13-35|entrance|입장, 입학|Entrance ceremony.|입학식.
13-35|educate|교육하다, 육성하다|Educate students.|학생들을 교육하다.
13-35|kindergarten|유치원|Go to kindergarten.|유치원에 가다.
13-35|graduate|졸업하다|Graduate from school.|학교를 졸업하다.
13-35|knowledge|지식|Gain knowledge.|지식을 얻다.
13-35|counsel|상담, 상담하다, 권고하다|Counsel a student.|학생을 상담하다.
13-35|admit|받아들이다, 인정하다|I admit my mistake.|나는 내 실수를 인정한다.
13-35|evaluate|평가하다|Evaluate the result.|결과를 평가하다.
13-35|submit|제출하다|Submit homework.|숙제를 제출하다.
13-35|lecture|강의|Give a lecture.|강의하다.
13-35|instruct|교수하다, 가르치다|Instruct a class.|수업을 가르치다.
13-35|absent|결석한|He is absent.|그는 결석했다.
13-35|attend|출석하다, 참석하다|Attend the meeting.|회의에 참석하다.
13-35|semester|학기|First semester.|1학기.
13-35|alternative|대안, 대안의|An alternative plan.|대안 계획.
13-35|academic|학술적인, 학문적인|Academic year.|학년도.
13-35|pupil|학생|A bright pupil.|똑똑한 학생.
13-35|intelligence|지성, 지능|Artificial intelligence.|인공지능.
13-35|scholarship|장학금|Get a scholarship.|장학금을 받다.
13-35|encourage|용기를 북돋우다, 격려하다|Encourage him.|그를 격려해라.
13-35|pay attention to|~에 주의하다, 주목하다|Pay attention to me.|나에게 주목해라.
13-35|play a role (in)|(~에서) 역할을 하다|Play a role in the team.|팀에서 역할을 하다.

13-36|classroom|교실|Clean the classroom.|교실을 청소해라.
13-36|chalk|분필|Write with chalk.|분필로 써라.
13-36|textbook|교과서|Open your textbook.|교과서를 펴라.
13-36|partner|짝, 동료, 협력자|Work with a partner.|짝과 함께 공부해라(일해라).
13-36|homework|숙제|Do your homework.|숙제를 해라.
13-36|math|수학|I like math.|나는 수학을 좋아한다.
13-36|conversation|대화, 회화|English conversation.|영어 회화.
13-36|classmate|급우, 학급 친구|She is my classmate.|그녀는 내 반 친구다.
13-36|senior|선배, 손위의, 최고 학년의|He is a senior.|그는 선배다(최고 학년이다).
13-36|locker|사물함, 로커|Use a locker.|사물함을 사용해라.
13-36|chalk board|칠판|Look at the chalk board.|칠판을 봐라.
13-36|marker|마커펜|Red marker.|빨간 마커펜.
13-36|club|동아리|Join a club.|동아리에 가입해라.
13-36|hall|강당, 부속 회관|Meet in the hall.|강당에서 만나자.
13-36|subject|과목, 주제|Favorite subject.|가장 좋아하는 과목.
13-36|project|계획, 기획, 프로젝트|Science project.|과학 프로젝트.
13-36|library|도서관|Go to the library.|도서관에 가라.
13-36|P.E.|체육|P.E. class.|체육 시간.
13-36|hallway|복도|Walk in the hallway.|복도에서 걸어라.
13-36|principal|교장|School principal.|학교 교장 선생님.
13-36|schoolmate|학교 친구, 동창생|Meet a schoolmate.|학교 친구를 만나다.
13-36|homeroom teacher|담임 선생님|My homeroom teacher.|나의 담임 선생님.
13-36|auditorium|강당|School auditorium.|학교 강당.
13-36|cafeteria|식당, 간이식당, 구내식당|Eat in the cafeteria.|구내식당에서 밥을 먹다.
13-36|assignment|과제, 숙제|Finish the assignment.|과제를 끝내라.
13-36|laboratory|실습실, 연습실|Science laboratory.|과학 실험실.
13-36|bulletin board|게시판|Check the bulletin board.|게시판을 확인해라.
13-36|ask ~ a favor|~에게 부탁을 하다|Can I ask you a favor?|부탁 하나 해도 될까?
13-36|get along with|~와 잘 지내다, 어울리다|Get along with friends.|친구들과 잘 지내라.
13-36|take part in|~에 참여하다|Take part in the game.|게임에 참여해라.

13-37|value|가치, 값, 소중히 여기다|High value.|높은 가치.
13-37|local|지역의, 현지의|Local food.|지역 음식.
13-37|crowd|군중|A large crowd.|많은 군중.
13-37|debt|빚, 부채|Pay off debt.|빚을 갚다.
13-37|salary|급여|Monthly salary.|월급.
13-37|invest|투자하다|Invest money.|돈을 투자하다.
13-37|duty|의무, 임무, 세금|Do your duty.|의무를 다해라.
13-37|status|지위, 상태|Social status.|사회적 지위.
13-37|culture|문화|Korean culture.|한국 문화.
13-37|citizen|시민, 국민|Good citizen.|훌륭한 시민.
13-37|public|대중의, 공공의, 공개된|Public library.|공공 도서관.
13-37|supply|공급, 공급하다|Water supply.|수도 공급.
13-37|demand|수요, 요구하다|Supply and demand.|수요와 공급.
13-37|import|수입, 수입하다|Import goods.|상품을 수입하다.
13-37|export|수출, 수출하다|Export cars.|자동차를 수출하다.
13-37|account|계좌|Bank account.|은행 계좌.
13-37|employ|고용하다|Employ workers.|직원을 고용하다.
13-37|individual|개인, 개인의, 개인적인|Each individual.|각 개인.
13-37|relationship|관계, 사이|Close relationship.|친밀한 관계.
13-37|tradition|전통|Keep tradition.|전통을 지키다.
13-37|consumer|소비자|Smart consumer.|현명한 소비자.
13-37|responsibility|책임|Take responsibility.|책임을 지다.
13-37|influence|영향, 영향을 미치다|Good influence.|좋은 영향.
13-37|obstacle|장애, 장애물|Overcome an obstacle.|장애물을 극복하다.
13-37|property|재산, 소유물|Private property.|사유 재산.
13-37|moral|도덕, 윤리, 도덕적인|Moral lesson.|도덕적 교훈.
13-37|donate|기부하다|Donate money.|돈을 기부하다.
13-37|predict|예측하다, 예언하다|Predict the future.|미래를 예측하다.
13-37|show off|자랑하다, 내세우다|Don't show off.|자랑하지 마라(뽐내지 마라).
13-37|look for|~을 찾다, 구하다|Look for a job.|일자리를 찾다.

13-38|vote|투표, 투표하다|Vote for him.|그에게 투표해라.
13-38|party|정당|Political party.|정당.
13-38|gap|차이, 격차|Generation gap.|세대 차이.
13-38|justice|정의|Fight for justice.|정의를 위해 싸우다.
13-38|crime|범죄|Commit a crime.|범죄를 저지르다.
13-38|murder|살인|Murder case.|살인 사건.
13-38|victim|희생자|Save the victim.|희생자를 구하다.
13-38|argue|논하다, 주장하다|Don't argue.|논쟁하지(주장하지) 마라.
13-38|punish|처벌하다, 벌주다|Punish the bad.|나쁜 사람을 처벌하다.
13-38|policy|정책|New policy.|새로운 정책.
13-38|illegal|불법적인|Illegal act.|불법 행위.
13-38|guilty|유죄의, 죄책감의|Found guilty.|유죄 판결을 받은.
13-38|innocent|무죄의, 결백한|He is innocent.|그는 무죄다.
13-38|majority|대다수, 과반수, 다수의|The majority wins.|다수가 이긴다.
13-38|minority|소수, 소수의|Minority group.|소수 집단.
13-38|suspect|용의자|Arrest the suspect.|용의자를 체포하다.
13-38|witness|목격자, 증인, 목격하다|Eye witness.|목격자.
13-38|arrest|체포, 체포하다|Arrest a thief.|도둑을 체포하다.
13-38|candidate|후보자|Good candidate.|좋은 후보자.
13-38|government|정부, 통치|The government helps.|정부가 돕는다.
13-38|elect|선출하다|Elect a president.|대통령을 선출하다.
13-38|trial|재판, 시행|Fair trial.|공정한 재판.
13-38|sentence|형벌, 문장, 선고하다|Life sentence.|종신형.
13-38|protest|항의, 항의하다|Protest against war.|전쟁에 항의하다.
13-38|compensate|보상하다, 변상하다|Compensate for loss.|손실을 보상하다.
13-38|diplomat|외교관|A skilled diplomat.|노련한 외교관.
13-38|represent|대표하다, 나타내다|Represent the country.|나라를 대표하다.
13-38|democracy|민주주의|Live in a democracy.|민주주의 국가에 살다.
13-38|be supposed to|~하기로 되어 있다, ~해야 한다, ~으로 여겨진다|I am supposed to go.|나는 가기로 되어 있다.
13-38|look into|~을 조사하다, 살펴보다|Look into the case.|사건을 조사하다.

13-39|peace|평화|World peace.|세계 평화.
13-39|war|전쟁|Stop the war.|전쟁을 멈춰라.
13-39|century|세기, 100년|21st century.|21세기.
13-39|age|나이, 시대, 시기|Stone Age.|석기 시대.
13-39|battle|싸움, 전투|Win the battle.|전투에서 이기다.
13-39|pray|기도하다, 기원하다|Pray for peace.|평화를 위해 기도하다.
13-39|soul|정신, 영혼|Pure soul.|순수한 영혼.
13-39|belief|믿음, 신념|Strong belief.|강한 믿음.
13-39|invade|침입하다, 침략하다|Invade a country.|나라를 침략하다.
13-39|attack|공격|Surprise attack.|기습 공격.
13-39|weapon|무기|Nuclear weapon.|핵무기.
13-39|empire|제국|Roman Empire.|로마 제국.
13-39|rule|지배, 통치, 규칙, 지배하다, 통치하다|Follow the rule.|규칙을 따르라.
13-39|religious|종교의|Religious belief.|종교적 믿음.
13-39|charity|자선, 자애|Give to charity.|자선 단체에 기부하다.
13-39|faithful|신실한, 성실한|Faithful servant.|충실한 하인.
13-39|independence|독립|Independence Day.|독립 기념일.
13-39|revolution|혁명|Industrial Revolution.|산업 혁명.
13-39|ancient|고대의, 구식의|Ancient Greece.|고대 그리스.
13-39|Buddhism|불교|Study Buddhism.|불교를 공부하다.
13-39|Christianity|기독교|Believe in Christianity.|기독교를 믿다.
13-39|Hinduism|힌두교|Indian Hinduism.|인도 힌두교.
13-39|Islam|이슬람교|Follow Islam.|이슬람교를 따르다.
13-39|Judaism|유대교|History of Judaism.|유대교의 역사.
13-39|colony|식민지|British colony.|영국 식민지.
13-39|civilization|문명|Ancient civilization.|고대 문명.
13-39|spiritual|정신적인, 영적인|Spiritual leader.|영적 지도자.
13-39|ceremony|의식, 예식|Tea ceremony.|다도(차 의식).
13-39|date back|~까지 거슬러 올라가다|Date back to 1900.|1900년으로 거슬러 올라가다.
13-39|be based on|~에 기초하다, 근거하다|Be based on fact.|사실에 기초하다.

13-40|different|다른|We are different.|우리는 다르다.
13-40|global|세계적인|Global warming.|지구 온난화(세계적인 온난화).
13-40|race|인종, 민족, 경주|Human race.|인류.
13-40|national|국가의|National flag.|국기.
13-40|fund|기금|Raise a fund.|기금을 모으다.
13-40|foreign|외국의|Foreign language.|외국어.
13-40|international|국제적인|International trade.|국제 무역.
13-40|community|주민, 지역 사회, 공동체|Our community.|우리 지역 사회.
13-40|population|인구|Large population.|많은 인구.
13-40|increase|증가, 증가하다|Sales increase.|판매가 증가하다.
13-40|decrease|감소, 감소하다|Price decreases.|가격이 감소하다.
13-40|urban|도시의|Urban area.|도시 지역.
13-40|rural|시골의|Rural life.|시골 생활.
13-40|region|지역, 지방|Cold region.|추운 지역.
13-40|border|국경, 경계|Cross the border.|국경을 넘다.
13-40|aid|원조, 지원, 구조|First aid.|응급 처치.
13-40|suffer|겪다, 당하다|Suffer from pain.|고통을 겪다.
13-40|native|~ 출신자, 토착민, 토착의, 타고난|Native speaker.|원어민.
13-40|orphan|고아|Poor orphan.|불쌍한 고아.
13-40|support|원조, 지원, 원조하다, 지지하다|Support family.|가족을 부양하다(지원하다).
13-40|rescue|구하다|Rescue the team.|팀을 구하다.
13-40|immigrate|이민을 오다|Immigrate to US.|미국으로 이민 가다.
13-40|hunger|배고픔, 기아|Die of hunger.|굶어 죽다.
13-40|ethnic|민족의, 인종의|Ethnic group.|민족 집단.
13-40|organization|기구|World organization.|세계 기구.
13-40|statistic|통계치|Statistics show.|통계가 보여준다.
13-40|agreement|협정, 계약, 동의, 합의|Sign an agreement.|협정에 서명하다.
13-40|mutual|서로의, 상호의|Mutual trust.|상호 신뢰.
13-40|break out|발발하다, 발생하다|War breaks out.|전쟁이 발발하다.
13-40|consist of|~으로 이루어지다, 구성되다|Consist of three parts.|세 부분으로 구성되다.

14-1|generation|(명) 세대, 1대, 같은 시대의 사람들|older generation|기성 세대
14-1|supporter|(명) 지지자, 후원자, 부양자|strong supporter|열렬한 지지자
14-1|niece|(명) 조카딸|my niece|나의 조카딸
14-1|engage|(동) 약혼시키다(to), 약속하다, 계약하다, 종사시키다(in)|engage in activities|활동에 종사하다
14-1|celebrate|(동) 기념하다, 축하하다|celebrate the victory|승리를 축하하다
14-1|anniversary|(명) 기념일|wedding anniversary|결혼 기념일
14-1|fate|(명) 운명, 숙명, 죽음|twist of fate|운명의 장난
14-1|advise|(동) 충고하다, 조언하다|advise the client|고객에게 조언하다
14-1|lifetime|(명) 일생, 생애, (형) 일생의|once in a lifetime|평생에 단 한 번
14-1|elder|(형) 나이가 위인, 선배의, (명) 연장자, 선배|elder brother|형
14-1|parental|(형) 부모의, 부모다운|parental guidance|부모의 지도
14-1|breed|(동) (동물이) 새끼를 낳다, 기르다, (명) 품종|rare dog breed|희귀한 개 품종
14-1|obedient|(형) 순종하는, 말을 잘 듣는|obedient child|말을 잘 듣는 아이
14-1|treat|(동) 다루다, 대우하다, 치료하다|treat with respect|존중하며 대하다
14-1|interact|(동) 상호작용을 하다, 서로 영향을 미치다|interact with others|타인과 상호작용하다
14-1|contact|(명) 연락, 접촉, (동) ~와 연락하다|direct contact|직접적인 접촉
14-1|relationship|(명) 관계, 관련, 연관|build a relationship|관계를 쌓다
14-1|funeral|(명) 장례식|attend a funeral|장례식에 참석하다
14-1|behave|(동) 행동하다, 처신하다|behave well|바르게 행동하다
14-1|sibling|(명) 형제자매|sibling rivalry|형제자매간의 경쟁
14-1|resemble|(동) ~와 닮다|resemble the father|아버지를 닮다
14-1|background|(명) (환경적, 문화적) 배경|family background|가족 배경
14-1|daycare|(형) 탁아소의, 보육의|daycare center|보육 시설
14-1|pregnant|(형) 임신한|pregnant woman|임신한 여성
14-1|nurture|(동) 양육하다, 키우다|nature and nurture|천성과 양육
14-1|accompany|(동) 동행하다, 함께 가다, (악기로) 반주하다|accompany a friend|친구와 동행하다
14-1|mature|(형) 성숙한|mature behavior|성숙한 행동
14-1|spouse|(명) 배우자, 남편, 아내|legal spouse|법적 배우자
14-1|bring up|~을 기르다, 양육하다|bring up children|아이들을 기르다
14-1|break up with|~와 헤어지다, 관계를 끊다|break up with him|그와 헤어지다
14-2|shape|(명) 모양, 꼴, 모습|human shape|인간의 형체
14-2|appearance|(명) 출현, 나타남, 외관, 겉모습|physical appearance|신체적 외관
14-2|personality|(명) 성격, 인성, 개성|bright personality|밝은 성격
14-2|gender|(명) 성별|gender equality|양성 평등
14-2|impression|(명) 인상, 감동, 감명|first impression|첫인상
14-2|typical|(형) 전형적인|typical example|전형적인 예
14-2|capable|(형) 유능한, ~할 능력이 있는|highly capable|매우 유능한
14-2|attractive|(형) 매력적인, 사람을 끄는|attractive features|매력적인 특징
14-2|active|(형) 적극적인, 활동적인|active participation|적극적인 참여
14-2|passive|(형) 소극적인, 수동적인|passive attitude|소극적인 태도
14-2|diligent|(형) 근면 성실한, 부지런한|diligent student|부지런한 학생
14-2|bold|(형) 대담한, 용감한, (문자, 선 등이) 굵은|bold move|대담한 조치
14-2|confident|(형) 자신만만한, 확신하는|feel confident|자신감을 느끼다
14-2|impatient|(형) 성급한, 참을성 없는|become impatient|성급해지다
14-2|ambitious|(형) 야망이 있는, 야심 찬|ambitious plan|야심 찬 계획
14-2|brilliant|(형) 훌륭한, 눈부신, (재능이) 뛰어난, 빛나는|brilliant idea|훌륭한 아이디어
14-2|elegant|(형) 우아한, 품위 있는|elegant dress|우아한 드레스
14-2|humble|(형) 겸손한, 초라한, 소박한|humble origin|비천한 태생
14-2|arrogant|(형) 오만한, 거만한|arrogant behavior|오만한 행동
14-2|aggressive|(형) 공격적인, 매우 적극적인|aggressive behavior|공격적인 행동
14-2|fierce|(형) 사나운, 흉포한, 격렬한|fierce competition|격렬한 경쟁
14-2|kindness|(명) 친절, 다정함|act of kindness|친절한 행위
14-2|oval|(형) 타원형의, 달걀형의, (명) 달걀 모양, 타원체|oval face|달걀형 얼굴
14-2|odd|(형) 이상한, 기묘한, 홀수의|odd number|홀수
14-2|forehead|(명) 이마|high forehead|넓은 이마
14-2|ignorant|(형) 무지한, 무식한, (정보가 없어) 모르는|ignorant of law|법을 모르는
14-2|wrinkle|(명) 주름, (동) 주름지게 하다|facial wrinkles|얼굴 주름
14-2|greed|(명) 욕심, 탐욕|human greed|인간의 탐욕
14-2|take after|~을 닮다|take after mother|어머니를 닮다
14-2|stand out|눈에 띄다, 빼어나다|stand out clearly|명확히 눈에 띄다
14-3|mood|(명) 기분, 분위기|good mood|좋은 기분
14-3|sorrow|(명) 슬픔, 비애|deep sorrow|깊은 슬픔
14-3|emotion|(명) 감정|human emotion|인간의 감정
14-3|anxious|(형) 불안해하는, 걱정하는, 갈망하는|feel anxious|불안해하다
14-3|ashamed|(형) 부끄러워하는|feel ashamed|부끄러워하다
14-3|depression|(명) 우울, 불경기|severe depression|심한 우울증
14-3|weep|(동) 울다|weep silently|소리 없이 울다
14-3|annoy|(동) 짜증 나게 하다, 귀찮게 하다|annoy others|남을 짜증 나게 하다
14-3|relieve|(동) 완화하다, 긴장을 풀게 하다|relieve stress|스트레스를 완화하다
14-3|amaze|(동) 놀라게 하다|amaze everyone|모두를 놀라게 하다
14-3|sentiment|(명) 감정, 정서, 감상|public sentiment|대중의 정서
14-3|envy|(명) 부러움, 질투 (동) 부러워하다|feel envy|부러움을 느끼다
14-3|jealous|(형) 질투하는, 시기하는|feel jealous|질투를 느끼다
14-3|nerve|(명) 신경, 긴장, 용기|keep your nerve|침착함을 유지하다
14-3|temper|(명) 성질, 성미, 기분|bad temper|나쁜 성미
14-3|resent|(동) 분개하다, 화를 내다|resent the decision|결정에 분개하다
14-3|desperate|(형) 자포자기한, 절박한, 필사적인|desperate situation|절박한 상황
14-3|awful|(형) 끔찍한, 지독한|awful smell|지독한 냄새
14-3|miserable|(형) 비참한, 불쌍한|feel miserable|비참함을 느끼다
14-3|disgust|(명) 혐오감, 메스꺼움 (동) 혐오감을 주다|deep disgust|깊은 혐오감
14-3|astound|(동) 몹시 놀라게 하다|astound the audience|관객을 놀라게 하다
14-3|frighten|(동) 겁나게 하다, 놀라게 하다|frighten children|아이들을 겁주다
14-3|panic|(명) 갑작스러운 공포, 패닉 (동) 당황하다|panic attack|공황 발작
14-3|scream|(동) 비명을 지르다 (명) 비명|scream in pain|고통으로 비명 지르다
14-3|sympathy|(명) 동정, 공감|express sympathy|동정심을 표하다
14-3|ridicule|(명) 조롱, 비웃음 (동) 비웃다|public ridicule|공개적인 조롱
14-3|warm-hearted|(형) 마음씨 따뜻한, 친절한|warm-hearted person|마음이 따뜻한 사람
14-3|burst into|갑자기 ~하기 시작하다|burst into tears|울음을 터뜨리다
14-3|be tired of|~에 싫증 나다, ~에 지치다|be tired of waiting|기다리는 것에 지치다
14-3|put up with|~을 참다, 견디다|put up with noise|소음을 참다
14-4|fiber|(명) 섬유, 섬유질|dietary fiber|식이 섬유
14-4|contain|(동) 포함하다, 함유하다|contain water|물을 포함하다
14-4|instant|(형) 즉석의, 즉각적인|instant coffee|인스턴트 커피
14-4|peel|(동) 껍질을 벗기다 (명) 껍질|peel an orange|오렌지 껍질을 벗기다
14-4|nourish|(동) 영양분을 공급하다, 기르다|nourish the body|몸에 영양을 공급하다
14-4|chop|(동) (음식 재료를) 잘게 썰다, 다지다|chop onions|양파를 다지다
14-4|grind|(동) 갈다, 빻다|grind coffee beans|커피 원두를 갈다
14-4|roast|(동) 굽다, 볶다|roast beef|소고기를 굽다
14-4|rotten|(형) 썩은, 부패한|rotten egg|썩은 달걀
14-4|cuisine|(명) 요리, 요리법|local cuisine|지역 요리
14-4|raw|(형) 익히지 않은, 날것의|raw fish|생선회
14-4|grill|(동) 그릴에 굽다 (명) 석쇠|grill meat|고기를 굽다
14-4|edible|(형) 먹을 수 있는, 식용의|edible plants|식용 식물
14-4|nutrition|(명) 영양, 영양분|balanced nutrition|균형 잡힌 영양
14-4|vegetarian|(명) 채식주의자 (형) 채식주의의|vegetarian diet|채식주의 식단
14-4|dairy|(형) 유제품의, 낙농의 (명) 낙농장|dairy products|유제품
14-4|kettle|(명) 주전자|boiling kettle|끓는 주전자
14-4|tray|(명) 쟁반|serving tray|서빙 쟁반
14-4|seasoning|(명) 양념, 조미료|spicy seasoning|매운 양념
14-4|flavor|(명) 맛, 풍미|natural flavor|천연 풍미
14-4|scent|(명) 향기, 냄새|floral scent|꽃 향기
14-4|leftover|(명) 남은 음식 (형) 남은|leftover food|남은 음식
14-4|swallow|(동) 삼키다|swallow a pill|알약을 삼키다
14-4|beverage|(명) 음료|alcoholic beverage|알코올 음료
14-4|squeeze|(동) 짜내다, 쥐어짜다|squeeze a lemon|레몬을 짜다
14-4|ripen|(동) 익다, 숙성하다|ripen slowly|천천히 익다
14-4|paste|(명) 반죽, 페이스트|tomato paste|토마토 페이스트
14-4|blend|(동) 섞다, 혼합하다|blend ingredients|재료를 섞다
14-4|go off|(음식이) 상하다|food goes off|음식이 상하다
14-4|feed on|~을 먹고 살다|feed on grass|풀을 먹고 살다
14-5|uniform|(명) 제복, 유니폼 (형) 일정한|school uniform|학교 교복
14-5|costume|(명) 의상, 복장|stage costume|무대 의상
14-5|collar|(명) (옷의) 깃, 칼라|shirt collar|셔츠 깃
14-5|thread|(명) 실 (동) 실을 꿰다|needle and thread|바늘과 실
14-5|length|(명) 길이|total length|총 길이
14-5|casual|(형) 평상시의, 격식을 차리지 않는|casual clothes|평상복
14-5|fashion|(명) 유행, 패션|latest fashion|최신 유행
14-5|loose|(형) 헐거운, 헐렁한|loose pants|헐렁한 바지
14-5|stripe|(명) 줄무늬|blue stripe|파란 줄무늬
14-5|comfort|(명) 안락, 편안함 (동) 위로하다|maximum comfort|최대한의 편안함
14-5|fade|(색이) 바래다, 시들다|colors fade|색이 바래다
14-5|fold|(동) 접다|fold the paper|종이를 접다
14-5|plain|(형) 무늬가 없는, 명백한, 평이한|plain t-shirt|무늬 없는 티셔츠
14-5|premium|(형) 아주 높은, 고급의 (명) 할증료|premium quality|프리미엄 품질
14-5|formal|(형) 격식을 차린, 공식적인|formal dress|정식 복장
14-5|fancy|(형) 화려한, 장식적인|fancy dress|화려한 드레스
14-5|outfit|(명) 의상 한 벌|complete outfit|완벽한 의상
14-5|sew|(동) 바느질하다, 꿰매다|sew by hand|손으로 바느질하다
14-5|alter|(동) 바꾸다, 수선하다|alter a dress|옷을 수선하다
14-5|trousers|(명) 바지|grey trousers|회색 바지
14-5|suit|(명) 정장 (동) 어울리다|business suit|비즈니스 정장
14-5|vest|(명) 조끼|safety vest|안전 조끼
14-5|fabric|(명) 직물, 천|silk fabric|실크 원단
14-5|cotton|(명) 면, 면화|organic cotton|유기농 면
14-5|fur|(명) 털, 모피|rabbit fur|토끼 털
14-5|laundry|(명) 세탁물, 세탁소|dirty laundry|더러운 세탁물
14-5|detergent|(명) 세제|laundry detergent|세탁 세제
14-5|dress up|정장을 갖춰 입다|dress up formal|정장을 차려입다
14-5|wear out|닳다, 해어지다|shoes wear out|신발이 닳다
14-5|show off|뽐내다, 자랑하다|show off clothes|옷을 뽐내다
14-6|cottage|(명) 작은 집, 오두막집, 작은 별장|cozy cottage|아늑한 오두막
14-6|priceless|(형) 값을 매길 수 없는, 대단히 귀중한|priceless treasure|매우 귀중한 보물
14-6|tap|(명) 수도꼭지, 마개|turn on the tap|수도꼭지를 틀다
14-6|alarm|(명) 경보기, 자명종, 놀람 (동) 놀라게 하다|set the alarm|알람을 맞추다
14-6|mess|(명) 어질러진 것, 쓰레기 더미, 혼잡|make a mess|어지럽히다
14-6|usual|(형) 평소의, 일상의|usual routine|평소의 일과
14-6|routine|(명) 판에 박힌 일, 일과 (형) 일상적인|daily routine|매일의 일과
14-6|rely|(동) 믿다, 의지하다, 의존하다|rely on parents|부모에게 의지하다
14-6|dust|(동) 먼지를 털다 (명) 먼지, 흙|thick dust|두꺼운 먼지
14-6|spread|(동) 펴다, 펼치다, 퍼지다|spread the word|말을 퍼뜨리다
14-6|cleanse|(동) 세척하다, 씻다, 정화하다|cleanse the skin|피부를 세척하다
14-6|wipe|(동) 닦다, 훔치다, 문지르다|wipe the window|창문을 닦다
14-6|mop|(동) 대걸레로 닦다 (명) 대걸레|mop the floor|바닥을 대걸레로 닦다
14-6|drawer|(명) 서랍, 장롱|top drawer|맨 위 서랍
14-6|stair|(명) 계단|climb the stairs|계단을 오르다
14-6|rubbish|(명) 쓰레기, 폐물|throw away rubbish|쓰레기를 버리다
14-6|dispose|(동) 처리하다, 처분하다|dispose of waste|폐기물을 처리하다
14-6|discard|(동) 버리다, 처분하다|discard old clothes|헌 옷을 버리다
14-6|appliance|(명) 기구, 장치, 전기 제품|home appliance|가전제품
14-6|spacious|(형) 넓은, 광대한|spacious living room|넓은 거실
14-6|chore|(명) 자질구레한 일, 허드렛일|household chores|집안일
14-6|polish|(동) 닦다, 광을 내다, 다듬다|polish the shoes|구두를 닦다
14-6|flush|(동) 씻어 내리다, 얼굴을 붉히다|flush the toilet|변기 물을 내리다
14-6|nap|(명) 낮잠, 선잠 (동) 졸다|take a nap|낮잠을 자다
14-6|outlet|(명) 콘센트, 할인점|electrical outlet|전기 콘센트
14-6|trim|(동) 다듬다, 손질하다 (형) 잘 정돈된|trim the garden|정원을 다듬다
14-6|crack|(동) 깨지다, 금이 가다 (명) 갈라진 틈|crack in wall|벽의 균열
14-6|leak|(명) 새어나옴, 누출 (동) 새다|gas leak|가스 누출
14-6|run out of|~을 다 써 버리다, 바닥내다|run out of time|시간이 다 되다
14-6|hang up|~을 걸다, 전화를 끊다|hang up the coat|코트를 걸다
14-7|insight|(명) 통찰력, 간파|gain insight|통찰력을 얻다
14-7|academic|(형) 학업의, 학구적인|academic achievement|학업 성취
14-7|essence|(명) 본질, 기초|essence of beauty|미의 본질
14-7|intelligence|(명) 지능, 이해력, 영리함|artificial intelligence|인공 지능
14-7|solve|(동) 풀다, 해결하다|solve the problem|문제를 풀다
14-7|inspire|(동) 격려하다, 영감을 주다|inspire students|학생들에게 영감을 주다
14-7|refer|(동) 언급하다, 참고하다|refer to notes|필기를 참고하다
14-7|review|(동) 복습하다, 다시 검토하다 (명) 비평|movie review|영화 비평
14-7|linguistics|(명) 언어학|study linguistics|언어학을 공부하다
14-7|improve|(동) 향상시키다, 나아지다|improve skills|기술을 향상시키다
14-7|content|(명) 내용, 목차 (형) 만족하는|table of contents|목차
14-7|figure|(명) 그림, 수치, 모습, 인물|historical figure|역사적 인물
14-7|scholar|(명) 학자, 장학생|classical scholar|고전 학자
14-7|concept|(명) 개념, 발상|basic concept|기본 개념
14-7|principle|(명) 원리, 원칙|moral principle|도덕 원칙
14-7|expose|(동) 노출시키다, 드러내다|expose the truth|진실을 밝히다
14-7|theory|(명) 이론, 학설|scientific theory|과학 이론
14-7|define|(동) 정의하다, 명확히 하다|define the term|용어를 정의하다
14-7|demonstrate|(동) 보여 주다, 증명하다, 설명하다|demonstrate the skill|기술을 시연하다
14-7|conclude|(동) 끝내다, 결론 내리다|conclude the meeting|회의를 끝내다
14-7|statistics|(명) 통계학, 통계 자료|official statistics|공식 통계
14-7|physics|(명) 물리학|laws of physics|물리학 법칙
14-7|geology|(명) 지질학|local geology|지역 지질
14-7|diameter|(명) 지름|outer diameter|외경
14-7|literal|(형) 글자 그대로의, 정확한|literal translation|직역
14-7|literate|(형) 읽고 쓸 줄 아는, 교양 있는|computer literate|컴퓨터 활용 능력이 있는
14-7|fluent|(형) 유창한|fluent in English|영어가 유창한
14-7|go over|~을 점검하다, 주의 깊게 살피다|go over the report|보고서를 검토하다
14-7|look up|찾아보다, 조사하다|look up words|단어를 찾아보다
14-7|dwell on|~을 깊이 생각하다, 자세히 이야기하다|dwell on past|과거에 연연하다
14-8|educate|(동) 교육하다|educate children|아이들을 교육하다
14-8|instruct|(동) 교육하다, 가르치다|instruct the class|학급을 가르치다
14-8|lecture|(명) 강의, 훈계 (동) 강의하다|attend a lecture|강의에 참석하다
14-8|due|(형) 기일이 다 된|due date|마감 기한
14-8|term|(명) 학기, 기간, 용어|technical term|전문 용어
14-8|examine|(동) 시험하다, 검사하다, 진찰하다|examine the patient|환자를 진찰하다
14-8|award|(명) 상 (동) 상을 주다|win an award|상을 받다
14-8|multiply|(동) 곱하다, 증식하다|multiply by ten|10을 곱하다
14-8|calculate|(동) 계산하다|calculate the cost|비용을 계산하다
14-8|memorize|(동) 기억하다, 암기하다|memorize vocabulary|단어를 암기하다
14-8|institute|(명) 협회, 연구소, 대학|research institute|연구소
14-8|laboratory|(명) 실험실, 연구실|science laboratory|과학 실험실
14-8|dormitory|(명) 기숙사|college dormitory|대학 기숙사
14-8|principal|(명) (학교 등의) 장|school principal|교장 선생님
14-8|aisle|(명) 통로, 복도|aisle seat|복도 쪽 좌석
14-8|semester|(명) 학기|fall semester|가을 학기
14-8|absent|(형) 결석한, 불참한|absent from school|학교에 결석한
14-8|attendance|(명) 출석, 참석|check attendance|출석을 확인하다
14-8|motivate|(동) 동기를 부여하다|motivate students|학생들을 격려하다
14-8|attitude|(명) 태도, 마음가짐|positive attitude|긍정적인 태도
14-8|eager|(형) 열성적인, 간절히 원하는|eager to learn|배우기를 갈망하는
14-8|entrance|(명) 입학, 입장, 입구|main entrance|정문
14-8|submit|(동) 제출하다, 굴복하다|submit a report|보고서를 제출하다
14-8|portfolio|(명) 작품 모음, 포트폴리오|design portfolio|디자인 포트폴리오
14-8|peer|(명) 동등한 사람, 또래|peer pressure|또래 압박
14-8|scholarship|(명) 장학금|apply for scholarship|장학금을 신청하다
14-8|grant|(명) 장학금 (동) 주다, 허가하다|research grant|연구 보조금
14-8|get along with|~와 잘 지내다|get along with friends|친구들과 잘 지내다
14-8|catch up with|따라잡다, 만회하다|catch up with studies|공부를 따라잡다
14-8|drop out of|~에서 중퇴하다|drop out of college|대학을 중퇴하다
14-9|manufacture|(동) 제조하다, 지어내다 (명) 생산|manufacture cars|자동차를 제조하다
14-9|manage|(동) 경영하다, 운영하다, 해내다|manage a team|팀을 관리하다
14-9|operate|(동) 관리하다, 작동하다|operate a machine|기계를 작동하다
14-9|expert|(명) 전문가, 숙련가 (형) 숙련된|subject expert|주제 전문가
14-9|senior|(형) 선임의, 선배의 (명) 연장자|senior official|고위 관리
14-9|psychologist|(명) 심리학자|child psychologist|아동 심리학자
14-9|personnel|(명) 전 직원, 인원, 인사과|personnel management|인사 관리
14-9|barber|(명) 이발사|visit the barber|이발소에 가다
14-9|counselor|(명) 지도 교사, 상담역|school counselor|학교 상담 교사
14-9|reward|(명) 보상, 보수 (동) 보답하다|cash reward|현금 보상
14-9|wage|(명) 임금, 급료|minimum wage|최저 임금
14-9|shift|(명) 교체, 교대 (동) 바꾸다|night shift|야간 근무
14-9|retire|(동) 퇴직하다, 은퇴하다|retire from work|직장에서 은퇴하다
14-9|supervise|(동) 감독하다, 관리하다|supervise workers|근로자를 감독하다
14-9|accomplish|(동) 달성하다, 이루다|accomplish a goal|목표를 달성하다
14-9|architect|(명) 건축가, 설계자|famous architect|유명한 건축가
14-9|secretary|(명) 비서, 장관|private secretary|비서
14-9|experienced|(형) 경험이 있는, 숙달한|experienced doctor|숙련된 의사
14-9|vend|(동) 행상하다, 팔다|vending machine|자판기
14-9|requirement|(명) 필요조건, 자격|entry requirement|입학 요건
14-9|superior|(명) 상사, 윗사람 (형) 우수한|superior quality|우수한 품질
14-9|career|(명) 경력, 이력, 직업|career path|진로
14-9|profession|(명) 직업, 전문직|legal profession|법조계
14-9|application|(명) 신청서, 원서, 응모|job application|입사 지원서
14-9|salary|(명) 봉급, 급여|monthly salary|월급
14-9|labor|(명) 노동, 일, 업무|manual labor|육체 노동
14-9|proficient|(형) 익숙한, 능숙한|proficient in English|영어가 능숙한
14-9|prompt|(형) 신속한|prompt response|신속한 응답
14-9|insist on|~을 주장하다, 고집하다|insist on payment|지불을 고집하다
14-9|turn down|거절하다, 거부하다|turn down an offer|제안을 거절하다
14-10|pile|(명) 더미 (동) 쌓아 올리다|pile of books|책더미
14-10|colleague|(명) 동료|office colleague|직장 동료
14-10|attach|(동) 붙이다, 첨부하다|attach a file|파일을 첨부하다
14-10|photocopy|(명) 사진 복사물 (동) 복사하다|make a photocopy|복사하다
14-10|appoint|(동) 임명하다, 약속하다|appoint a manager|매니저를 임명하다
14-10|agency|(명) 대리점, 대행 회사|travel agency|여행사
14-10|basis|(명) 기준, 기초|daily basis|매일 단위로
14-10|index|(명) 지수, 지표, 색인|stock index|주가 지수
14-10|deny|(동) 거절하다, 부인하다|deny the truth|진실을 부인하다
14-10|stationery|(명) 문방구, 문구류|office stationery|사무용 문구
14-10|staple|(명) 스테이플러 침 (동) 고정하다|staple the papers|종이를 철하다
14-10|confirm|(동) 승인하다, 확인하다|confirm the booking|예약을 확인하다
14-10|detail|(명) 세부 사항|minute details|미세한 세부 사항
14-10|classify|(동) 분류하다|classify books|책을 분류하다
14-10|document|(명) 문서, 서류|official document|공식 문서
14-10|misplace|(동) 잘못 두다, 잊다|misplace the keys|열쇠를 잘못 두다
14-10|procedure|(명) 절차, 순서|standard procedure|표준 절차
14-10|firm|(명) 회사 (형) 굳은, 확고한|law firm|법률 회사
14-10|client|(명) 의뢰인, 고객|important client|중요한 고객
14-10|frequent|(형) 자주 일어나는, 빈번한|frequent visits|잦은 방문
14-10|commute|(동) 통근하다, 통학하다|long commute|긴 통근 시간
14-10|division|(명) 부서, 분열|sales division|영업 부서
14-10|notify|(동) 통지하다, 통보하다|notify the winner|우승자에게 통지하다
14- assigning|assign|(동) 할당하다, 임명하다|assign a task|작업을 할당하다
14-10|booth|(명) 부스, 작은 공간|voting booth|기표소
14-10|brochure|(명) 안내 소책자|travel brochure|여행 안내서
14-10|distribute|(동) 분배하다|distribute flyers|전단지를 배포하다
14-10|make up for|~을 만회하다, 보충하다|make up for lost time|잃어버린 시간을 만회하다
14-10|get ahead|성공하다, 출세하다|get ahead in life|인생에서 성공하다
14-10|take over|인계받다, 일을 넘겨받다|take over the business|사업을 인계받다
14-11|report|(동) 보도하다, 전하다 (명) 보도, 보고|report the news|뉴스를 보도하다
14-11|press|(명) 신문, 잡지, 언론|freedom of press|언론의 자유
14-11|article|(명) 기사, 논설, 관사|news article|뉴스 기사
14-11|journal|(명) 잡지, 정기 간행물, 일기|academic journal|학술지
14-11|broadcast|(동) 방송하다, 방영하다|broadcast live|생방송하다
14-11|post|(동) 게시하다, 공고하다|post a notice|공고를 게시하다
14-11|pose|(동) 자세를 취하다 (명) 자세|pose for photos|사진 포즈를 취하다
14-11|scene|(명) 장면, 무대, 현장|crime scene|범죄 현장
14-11|survey|(명) 조사, 측량 (동) 조사하다|online survey|온라인 설문조사
14-11|mass|(명) 대중, 집단 (형) 대중의|mass media|대중 매체
14-11|factual|(형) 사실의, 사실에 입각한|factual information|사실적 정보
14-11|fame|(명) 명성, 평판|international fame|국제적 명성
14-11|poll|(명) 투표, 여론 조사|opinion poll|여론 조사
14-11|channel|(명) 채널, 수로, 해협|news channel|뉴스 채널
14-11|criticize|(동) 비판하다, 혹평하다|criticize the policy|정책을 비판하다
14-11|compliment|(명) 칭찬 (동) 칭찬하다|pay a compliment|칭찬하다
14-11|series|(명) 연속물, 시리즈|tv series|tv 시리즈
14-11|feature|(명) 연재 기사, 특징 (동) 대서특필하다|special feature|특별 기획
14-11|script|(명) 대본, 각본|movie script|영화 대본
14-11|bulletin|(명) 보고, 게시, 뉴스 속보|news bulletin|뉴스 속보
14-11|preview|(명) 시사회, 예고편|movie preview|영화 예고편
14-11|column|(명) 신문의 칸, 기고란|weekly column|주간 칼럼
14-11|release|(동) 발매하다, 개봉하다, 발표하다|release an album|앨범을 발매하다
14-11|announce|(동) 알리다, 공표하다|announce the winner|우승자를 발표하다
14-11|reveal|(동) 드러내다, 폭로하다|reveal the truth|진실을 밝히다
14-11|audience|(명) 청중, 관객|large audience|많은 관객
14-11|panel|(명) 패널, 심사위원단|expert panel|전문가 위원단
14-11|focus|(동) 초점을 맞추다 (명) 초점|focus on study|공부에 집중하다
14-11|argue over|~을 두고 논쟁하다|argue over money|돈 문제로 다투다
14-11|come up with|~을 생각해 내다|come up with idea|아이디어를 내다
14-12|variety|(명) 다양성, 변화|variety of food|다양한 음식
14-12|square|(명) 정사각형, 광장|town square|마을 광장
14-12|delicate|(형) 연약한, 섬세한|delicate skin|섬세한 피부
14-12|flat|(형) 평평한|flat surface|평평한 표면
14-12|broad|(형) 폭 넓은, 광범위한|broad smile|활짝 웃는 웃음
14-12|compact|(형) 소형의, 간편한|compact car|소형차
14-12|brief|(형) 간단한, 짧은|brief introduction|짧은 소개
14-12|sharp|(형) 날카로운, 예리한|sharp knife|날카로운 칼
14-12|precious|(형) 소중한, 값비싼|precious metal|귀금속
14-12|artificial|(형) 인공적인, 가짜의|artificial flavor|인공 향료
14-12|gigantic|(형) 거대한|gigantic wave|거대한 파도
14-12|enormous|(형) 엄청난, 거대한|enormous amount|엄청난 양
14-12|ultimate|(형) 궁극적인, 최후의|ultimate goal|궁극적 목표
14-12|faint|(형) 희미한, 어렴풋한|faint light|희미한 빛
14-12|steep|(형) 가파른|steep hill|가파른 언덕
14-12|fundamental|(형) 근본적인, 기본적인|fundamental rights|기본권
14-12|shallow|(형) 얕은, 얄팍한|shallow water|얕은 물
14-12|symbolic|(형) 상징적인|symbolic meaning|상징적 의미
14-12|appropriate|(형) 적당한, 알맞은|appropriate behavior|적절한 행동
14-12|moderate|(형) 중간 정도의, 적당한|moderate exercise|적당한 운동
14-12|flexible|(형) 유연성 있는, 융통성 있는|flexible hours|유연한 시간
14-12|monotonous|(형) 단조로운, 지루한|monotonous voice|단조로운 목소리
14-12|obscure|(형) 애매한, 분명하지 않은|obscure reason|모호한 이유
14-12|drawback|(명) 결점, 문제점|main drawback|주된 단점
14-12|paradox|(명) 역설, 모순|logical paradox|논리적 역설
14-12|describe|(동) 묘사하다|describe the scene|장면을 묘사하다
14-12|marvel|(명) 놀라운 일 (동) 놀라다|marvel at nature|자연에 경탄하다
14-12|glitter|(동) 반짝이다 (명) 반짝거림|glittering stars|반짝이는 별들
14-12|differ from|~와 다르다|differ from each other|서로 다르다
14-12|stand for|~을 상징하다, 나타내다|stand for peace|평화를 상징하다
14-13|goods|(명) 상품|consumer goods|소비재
14-13|label|(명) 꼬리표, 상표|designer label|유명 브랜드
14-13|tag|(명) 꼬리표|price tag|가격표
14-13|wrap|(동) 감싸다, 포장하다|gift wrap|선물 포장
14-13|bargain|(명) 싼 물건 (형) 값싼|bargain price|저렴한 가격
14-13|purchase|(동) 사다 (명) 구입|online purchase|온라인 구매
14-13|total|(명) 합계 (형) 전체의|total cost|총 비용
14-13|quality|(명) 질, 특성|high quality|높은 품질
14-13|value|(동) 가치 있게 여기다 (명) 가치|cultural value|문화적 가치
14-13|reduce|(동) 줄이다, 낮추다|reduce prices|가격을 낮추다
14-13|trend|(명) 유행, 경향|latest trend|최신 유행
14-13|quantity|(명) 양|large quantity|많은 양
14-13|retail|(명) 소매|retail price|소매 가격
14-13|merchandise|(명) 상품|general merchandise|잡화
14-13|insert|(동) 집어넣다|insert coins|동전을 넣다
14-13|necessity|(명) 필요성, 필수품|daily necessity|생필품
14-13|luxury|(명) 호화, 사치품|luxury brand|명품 브랜드
14-13|auction|(동) 경매에서 팔다 (명) 경매|public auction|공개 경매
14-13|receipt|(명) 영수증|keep the receipt|영수증을 보관하다
14-13|refund|(명) 환불 (동) 환불하다|get a refund|환불받다
14-13|exchange|(동) 교환하다 (명) 교환|exchange students|교환 학생
14-13|claim|(동) 요구하다, 주장하다|claim a refund|환불을 요구하다
14-13|satisfy|(동) 만족시키다|satisfy customers|고객을 만족시키다
14-13|guarantee|(명) 보증 (동) 보증하다|money back guarantee|환불 보증
14-13|exclude|(동) 배제하다|exclude taxes|세금을 제외하다
14-13|reasonable|(형) 합리적인, 적절한|reasonable price|적정한 가격
14-13|steady|(형) 안정된, 꾸준한|steady growth|꾸준한 성장
14-13|pay for|대금을 지불하다|pay for dinner|저녁값을 내다
14-13|leave out|~을 빠뜨리다|leave out details|세부 사항을 빠뜨리다
14-13|add up|합산하다|add up the bill|계산서를 합산하다
14-14|champion|(명) 우승자 (형) 우승한|world champion|세계 챔피언
14-14|match|(명) 경기 (동) 대결하다|football match|축구 경기
14-14|tournament|(명) 토너먼트|tennis tournament|테니스 토너먼트
14-14|rival|(명) 경쟁자 (동) 경쟁하다|bitter rival|숙적
14-14|rank|(동) 순위를 매기다 (명) 순위|top rank|최고 순위
14-14|coach|(명) 코치, 감독 (동) 코치하다|team coach|팀 코치
14-14|serve|(동) 공을 서브하다|serve ball|공을 서브하다
14-14|glide|(동) 미끄러지다 (명) 미끄러짐|glide on ice|얼음 위를 미끄러지다
14-14|beat|(동) 이기다, 박동하다|beat opponent|상대를 이기다
14-14|compete|(동) 경쟁하다, 겨루다|compete in race|경주에 참여하다
14-14|ability|(명) 능력, 할 수 있음|natural ability|타고난 능력
14-14|leisure|(명) 여가, 자유 시간|leisure activity|여가 활동
14-14|pastime|(명) 취미, 오락|favorite pastime|가장 좋아하는 취미
14-14|outdoor|(형) 야외의, 집 밖의|outdoor sport|야외 스포츠
14-14|defeat|(명) 패배 (동) 패배시키다|defeat enemy|적을 패배시키다
14-14|amateur|(명) 아마추어 (형) 비전문가의|amateur golfer|아마추어 골퍼
14-14|mound|(명) (투수의) 마운드|pitcher mound|투수 마운드
14-14|athletic|(형) 운동 경기의|athletic talent|운동적 재능
14-14|opponent|(명) 적수, 반대자|strong opponent|강한 상대
14-14|referee|(명) 심판, 중재자|football referee|축구 심판
14-14|fair|(형) 공평한, 정정당당한|fair play|공정한 경기
14-14|penalty|(명) 벌칙, 처벌|pay penalty|벌금을 내다
14-14|foul|(동) 반칙하다 (형) 반칙인|commit foul|반칙을 범하다
14-14|outstanding|(형) 눈에 띄는, 우수한|outstanding performance|뛰어난 실적
14-14|participate|(동) 참여하다, 참가하다|participate in game|경기에 참가하다
14-14|applaud|(동) 박수 치다|applaud performance|공연에 박수치다
14-14|encourage|(동) 용기를 북돋다, 격려하다|encourage student|학생을 격려하다
14-14|extreme|(형) 극단적인|extreme sport|익스트림 스포츠
14-14|call off|~을 취소하다|call off meeting|회의를 취소하다
14-14|take place|개최되다, 열리다|take place annually|매년 열리다
14-15|transport|(명) 운송, 운송 수단 (동) 운반하다|public transport|대중 교통
14-15|passenger|(명) 승객|train passenger|열차 승객
14-15|underground|(형) 지하의|underground station|지하철역
14-15|aboard|(부) 탑승한, 승선한|all aboard|모두 탑승
14-15|depart|(동) 출발하다|depart early|일찍 출발하다
14-15|sightseeing|(명) 관광, 유람|go sightseeing|관광하러 가다
14-15|downtown|(형) 도심의 (부) 도심지에|downtown area|도심 지역
14-15|ride|(동) 타다 (명) 승차|ride bike|자전거를 타다
14-15|abroad|(부) 해외로|travel abroad|해외 여행을 가다
14-15|baggage|(명) 수하물|check baggage|수하물을 부치다
14-15|cabin|(명) 선실, 객실, 오두막|log cabin|통나무 집
14-15|check-out|(명) 퇴실, 계산대|check-out time|퇴실 시간
14-15|tip|(명) 사례금, 팁, 조언|helpful tip|도움이 되는 조언
14-15|destination|(명) 목적지|final destination|최종 목적지
14-15|available|(형) 이용 가능한|available seat|이용 가능한 좌석
14-15|delay|(동) 지연시키다 (명) 지연|traffic delay|교통 지체
14-15|transfer|(동) 갈아타다, 이동하다|transfer flight|환승편
14-15|vehicle|(명) 탈것, 운송 수단|motor vehicle|자동차
14-15|highway|(명) 고속 도로|main highway|주요 고속도로
14-15|convey|(동) 나르다, 전달하다|convey message|메시지를 전달하다
14-15|accommodate|(동) 수용하다, 숙박시키다|accommodate guest|손님을 수용하다
14-15|cruise|(명) 크루즈 여행 (동) 순항하다|luxury cruise|호화 크루즈
14-15|crew|(명) 승무원|cabin crew|객실 승무원
14-15|navigate|(동) 항해하다, 건너다|navigate sea|바다를 항해하다
14-15|locate|(동) 정하다, 두다|be located|위치하다
14-15|journey|(명) 여행, 여정|long journey|긴 여정
14-15|spectacle|(명) 광경, 구경거리|grand spectacle|장관
14-15|come across|마주치다, 발견하다|come across friend|친구를 우연히 만나다
14-15|head for|~로 향해 가다|head for home|집으로 향하다
14-15|pull over|차를 길 한쪽에 대다|pull over car|차를 길가에 세우다
14-16|appreciate|(동) 감상하다, 평가하다, 감사하다|appreciate art|예술을 감상하다
14-16|craft|(명) 공예, 기술|handicraft|수공예
14-16|exhibit|(동) 전시하다 (명) 전시|exhibit painting|그림을 전시하다
14-16|literature|(명) 문학|english literature|영문학
14-16|version|(명) 각색, 번역서|latest version|최신 버전
14-16|copyright|(명) 판권, 저작권|hold copyright|저작권을 보유하다
14-16|tone|(명) 어조, 음색|voice tone|목소리 톤
14-16|noble|(형) 고귀한, 고상한 (명) 귀족|noble heart|고귀한 마음
14-16|conduct|(동) 지휘하다, 수행하다|conduct orchestra|오케스트라를 지휘하다
14-16|tune|(동) 조율하다 (명) 곡조|catchy tune|기억하기 쉬운 곡조
14-16|director|(명) 감독, 연출자|film director|영화 감독
14-16|theme|(명) 주제, 테마|main theme|주요 테마
14-16|chorus|(명) 합창, 합창단|sing in chorus|합창하다
14-16|interval|(명) 막간, 간격|time interval|시간 간격
14-16|rehearse|(동) 예행연습을 하다|rehearse play|연극을 연습하다
14-16|compose|(동) 작곡하다, 구성하다|compose music|음악을 작곡하다
14-16|sculpture|(명) 조각 (동) 조각하다|stone sculpture|석조각
14-16|masterpiece|(명) 걸작, 명작|artistic masterpiece|예술적 걸작
14-16|classic|(형) 일류의, 고전의 (명) 고전|classic movie|고전 영화
14-16|imitate|(동) 모방하다|imitate voice|목소리를 흉내내다
14-16|tradition|(명) 전통, 관례|follow tradition|전통을 따르다
14-16|exclaim|(동) 외치다|exclaim in surprise|놀라서 외치다
14-16|creature|(명) 생물, 동물|mythical creature|신화 속 생물
14-16|distinct|(형) 다른, 뚜렷한|distinct difference|뚜렷한 차이
14-16|context|(명) 문맥, 주변 상황|social context|사회적 맥락
14-16|monologue|(명) 독백|dramatic monologue|극적 독백
14-16|tragedy|(명) 비극, 재난|human tragedy|인간적 비극
14-16|line up|줄을 서다|line up early|일찍 줄 서다
14-16|live up to|부응하다|live up to expectation|기대에 부응하다
14-16|be into|~에 푹 빠져있다|be into music|음악에 빠져있다
14-17|condition|(명) 건강 상태, 상황|medical condition|의학적 상태
14-17|chemical|(명) 화학 물질 (형) 화학의|chemical reaction|화학 반응
14-17|digest|(동) 소화하다|digest food|음식을 소화하다
14-17|disorder|(명) 병, 장애, 무질서|sleeping disorder|수면 장애
14-17|worsen|(동) 악화되다|situation worsens|상황이 악화되다
14-17|dental|(형) 치아의|dental care|치아 관리
14-17|medical|(형) 의학의|medical insurance|의료 보험
14-17|mental|(형) 정신의|mental health|정신 건강
14-17|recover|(동) 회복하다, 되찾다|recover from flu|독감에서 회복하다
14-17|emergency|(명) 비상사태|emergency exit|비상구
14-17|allergy|(명) 알레르기|pollen allergy|꽃가루 알레르기
14-17|joint|(명) 관절, 접합|knee joint|무릎 관절
14-17|spine|(명) 척추, 등뼈|injured spine|다친 척추
14-17|sightseeing|(명) 시각, 시력|lose sight|시력을 잃다
14-17|pulse|(명) 맥박, 고동|check pulse|맥박을 확인하다
14-17|infection|(명) 감염, 전염병|bacterial infection|세균 감염
14-17|sanitary|(형) 위생의, 깨끗한|sanitary facility|위생 시설
14-17|symptom|(명) 징후, 증상|flu symptom|독감 증상
14-17|disabled|(형) 장애를 입은|disabled person|장애인
14-17|inject|(동) 주사하다, 투여하다|inject insulin|인슐린을 주사하다
14-17|prescribe|(동) 처방하다|prescribe medicine|약을 처방하다
14-17|tablet|(명) 알약, 정제|aspirin tablet|아스피린 한 알
14-17|wound|(명) 상처 (동) 상처를 입히다|clean wound|상처를 소독하다
14-17|injure|(동) 상처를 입히다|injure arm|팔을 다치다
14-17|heal|(동) 치유되다, 고치다|heal quickly|빨리 낫다
14-17|immune|(형) 면역의|immune system|면역 체계
14-17|strain|(명) 긴장, 부담 (동) 긴장시키다|muscle strain|근육 염좌
14-17|bruise|(명) 멍, 타박상|dark bruise|검푸른 멍
14-17|come down with|~의 병에 걸리다|come down with cold|감기에 걸리다
14-17|ease off|누그러지다|pain eases off|통증이 누그러지다
14-18|enrich|(동) 풍부하게 하다|enrich soil|토양을 비옥하게 하다
14-18|barrel|(명) 배럴, 통|oil barrel|석유 배럴
14-18|herd|(명) 떼, 무리|herd of cattle|소 떼
14-18|crisis|(명) 위기|economic crisis|경제 위기
14-18|provide|(동) 공급하다, 준비하다|provide help|도움을 제공하다
14-18|material|(명) 물질, 재료|building material|건축 자재
14-18|export|(동) 수출하다 (명) 수출|export goods|상품을 수출하다
14-18|construct|(동) 건설하다, 조립하다|construct building|건물을 짓다
14-18|pollution|(명) 오염, 공해|air pollution|대기 오염
14-18|agriculture|(명) 농업|modern agriculture|현대 농업
14-18|graze|(동) 풀을 뜯어 먹다|graze in pasture|목초지에서 풀을 뜯다
14-18|pasture|(명) 목초지|green pasture|푸른 목초지
14-18|cattle|(명) 소, 가축|raise cattle|소를 키우다
14-18|cultivate|(동) 경작하다, 재배하다|cultivate land|땅을 일구다
14-18|concrete|(명) 콘크리트 (형) 구체적인|concrete evidence|구체적인 증거
14-18|crane|(명) 기중기|tower crane|타워 크레인
14-18|invest|(동) 투자하다|invest money|돈을 투자하다
14-18|expand|(동) 확장하다, 팽창하다|expand business|사업을 확장하다
14-18|scale|(명) 규모, 저울|large scale|대규모
14-18|proportion|(명) 비율|high proportion|높은 비율
14-18|surpass|(동) 초월하다, 능가하다|surpass expectation|기대를 뛰어넘다
14-18|generate|(동) 발생시키다|generate electricity|전기를 발생시키다
14-18|constant|(형) 일정한, 지속적인|constant pressure|지속적인 압박
14-18|optimistic|(형) 낙관적인|optimistic view|낙관적인 견해
14-18|undertake|(동) 떠맡다, 착수하다|undertake project|프로젝트를 맡다
14-18|assemble|(동) 조립하다, 모으다|assemble car|자동차를 조립하다
14-18|innovative|(형) 획기적인, 혁신적인|innovative idea|혁신적인 아이디어
14-18|enterprise|(명) 기업, 회사, 사업|private enterprise|사기업
14-18|shut down|문을 닫다, 폐쇄하다|shut down factory|공장을 폐쇄하다
14-18|set up|시작하다, 창설하다|set up business|사업을 시작하다
14-19|budget|(명) 예산, 예산안|monthly budget|한 달 예산
14-19|capital|(명) 자본, 수도|venture capital|벤처 자본
14-19|account|(명) 거래, 예금 계좌|bank account|은행 계좌
14-19|expense|(명) 지출, 비용|travel expense|여행 경비
14-19|collapse|(동) 붕괴되다, 폭락하다|market collapse|시장 붕괴
14-19|economic|(형) 경제학의, 경제의|economic growth|경제 성장
14-19|risk|(명) 위험, 모험|take risk|위험을 무릅쓰다
14-19|decline|(명) 하락 (동) 하락하다|decline in price|가격 하락
14-19|stock|(명) 주식, 재고|stock market|주식 시장
14-19|possess|(동) 소유하다, 가지다|possess talent|재능을 갖다
14-19|property|(명) 재산, 소유물, 부동산|private property|사유 재산
14-19|asset|(명) 자산, 재산|valuable asset|가치 있는 자산
14-19|finance|(명) 재정, 재무|personal finance|개인 금융
14-19|loan|(명) 대출, 대여|bank loan|은행 대출
14-19|estimate|(동) 평가하다, 견적하다|cost estimate|비용 견적
14-19|commerce|(명) 상업, 통상|electronic commerce|전자 상거래
14-19|negotiate|(동) 협상하다|negotiate salary|연봉을 협상하다
14-19|currency|(명) 통화, 화폐|foreign currency|외화
14-19|boost|(동) 증대하다 (명) 부양|boost economy|경제를 부양하다
14-19|fortune|(명) 재산, 행운|make fortune|재산을 모으다
14-19|unemployed|(형) 실업의, 무직의|unemployed youth|실업 청년
14-19|income|(명) 수입, 소득|annual income|연간 수입
14-19|annual|(형) 1년의, 해마다의|annual report|연례 보고서
14-19|strategy|(명) 전략, 계획|marketing strategy|마케팅 전략
14-19|temporary|(형) 일시적인, 임시의|temporary job|임시직
14-19|outcome|(명) 결과, 성과|expected outcome|예상된 결과
14-19|potential|(형) 잠재적인|potential customer|잠재 고객
14-19|pay off|다 갚다, 성공하다|pay off debt|빚을 다 갚다
14-19|lay off|~을 해고하다|lay off worker|직원을 해고하다
14-19|in need|어려움에 처한, 궁핍한|people in need|도움이 필요한 사람들
14-20|elect|(동) 선거하다, 선출하다|elect president|대통령을 선출하다
14-20|declare|(동) 선언하다, 공표하다|declare war|전쟁을 선언하다
14-20|democracy|(명) 민주주의, 민주제|liberal democracy|자유 민주주의
14-20|official|(명) 공무원, 관리 (형) 공식의|government official|정부 관리
14-20|candidate|(명) 후보자, 지원자|presidential candidate|대통령 후보
14-20|oppose|(동) 반대하다, 대항하다|strongly oppose|강력히 반대하다
14-20|immediate|(형) 즉각적인, 직접적인|immediate response|즉각적인 응답
14-20|insist|(동) 고집하다, 주장하다|insist on truth|진실을 주장하다
14-20|union|(명) 연합, 조합|labor union|노동 조합
14-20|indifferent|(형) 무관심한|indifferent attitude|무관심한 태도
14-20|campaign|(명) 선거 운동, 캠페인|election campaign|선거 운동
14-20|party|(명) 정당, 파티|political party|정당
14-20|dispute|(명) 논쟁 (동) 논쟁하다|border dispute|국경 분쟁
14-20|postpone|(동) 연기하다, 미루다|postpone event|행사를 연기하다
14-20|convince|(동) 납득시키다, 확신시키다|convince jury|배심원을 설득하다
14-20|persuade|(동) 설득하다|persuade friend|친구를 설득하다
14-20|assume|(동) 추측하다, 가정하다|assume role|역할을 맡다
14-20|approve|(동) 찬성하다, 승인하다|approve plan|계획을 승인하다
14-20|session|(명) 회기, 기간, 수업|training session|교육 시간
14-20|deed|(명) 업적, 행위|good deed|선행
14-20|reputation|(명) 평판, 명성|good reputation|좋은 평판
14-20|conservative|(형) 보수적인|conservative party|보수당
14-20|command|(동) 지휘하다 (명) 명령|at command|명령에 따라
14-20|hostile|(형) 적대적인|hostile environment|적대적인 환경
14-20|authority|(명) 권위, 권한, 당국|local authority|지방 당국
14-20|cabinet|(명) 내각, 장식장|cabinet member|각료
14-20|federal|(형) 연방의, 연방제의|federal government|연방 정부
14-20|unify|(동) 통일하다, 단일화하다|unify nation|나라를 통일하다
14-20|run for|~에 출마하다|run for office|공직에 출마하다
14-20|speak for|~을 대변하다|speak for people|국민을 대변하다
14-21|social|(형) 사회의|social issue|사회 문제
14-21|moral|(형) 도덕적인 (명) 교훈|moral standard|도덕적 기준
14-21|ethic|(명) 윤리, 도덕|work ethic|직업 윤리
14-21|tend|(동) ~하는 경향이 있다|tend to lie|거짓말하는 경향이 있다
14-21|allow|(동) 허락하다, 허가하다|allow entry|입장을 허용하다
14-21|affect|(동) ~에 영향을 미치다|affect health|건강에 영향을 주다
14-21|expire|(동) 만기가 되다|passport expires|여권이 만료되다
14-21|organization|(명) 조직, 단체|nonprofit organization|비영리 단체
14-21|liberty|(명) 자유, 해방|religious liberty|종교의 자유
14-21|factor|(명) 요소, 요인|key factor|핵심 요인
14-21|opportunity|(명) 기회|equal opportunity|평등한 기회
14-21|standard|(명) 표준, 기준|quality standard|품질 기준
14-21|status|(명) 지위, 신분, 상태|social status|사회적 지위
14-21|facility|(명) 편의 시설|public facility|공공 시설
14-21|circumstance|(명) 상황, 환경|difficult circumstance|어려운 상황
14-21|charity|(명) 자선, 자선 단체|charity event|자선 행사
14-21|volunteer|(명) 자원봉사자 (동) 자발적으로 하다|volunteer work|자원봉사 활동
14-21|prospect|(명) 전망, 가능성|future prospect|미래 전망
14-21|advantage|(명) 이익, 유리한 점|unfair advantage|불공평한 이점
14-21|stereotype|(명) 고정 관념|gender stereotype|성 고정관념
14-21|secure|(형) 안전한|secure building|안전한 건물
14-21|complex|(형) 복잡한 (명) 복합 건물|complex problem|복잡한 문제
14-21|inadequate|(형) 부적당한, 불충분한|inadequate supply|불충분한 공급
14-21|proper|(형) 적절한, 알맞은|proper usage|올바른 사용법
14-21|indicate|(동) 나타내다, 가리키다|indicate direction|방향을 가리키다
14-21|deserve|(동) ~할 자격이 있다|deserve reward|보상을 받을 만하다
14-21|acquire|(동) 얻다, 습득하다|acquire skill|기술을 습득하다
14-21|sign up for|등록하다, 신청하다|sign up for class|수업을 신청하다
14-21|contribute to|기여하다, 원인이 되다|contribute to success|성공에 기여하다
14-21|put off|연기하다, 보류하다|put off trip|여행을 미루다
14-22|evident|(형) 분명한, 명백한|self evident|자명한
14-22|arrest|(동) 체포하다, 구속하다|arrest suspect|용의자를 체포하다
14-22|suspect|(명) 용의자 (동) 의심하다|murder suspect|살인 용의자
14-22|guilty|(형) 유죄의|found guilty|유죄로 판결된
14-22|trap|(명) 덫, 속임수 (동) 잡다|mouse trap|쥐덫
14-22|robber|(명) 강도|armed robber|무장 강도
14-22|criminal|(명) 범인 (형) 범죄의|criminal record|범죄 기록
14-22|prevent|(동) 막다, 예방하다|prevent fire|화재를 예방하다
14-22|intentional|(형) 의도적인, 계획된|intentional damage|의도적인 훼손
14-22|restrict|(동) 제한하다|restrict speed|속도를 제한하다
14-22|regulate|(동) 규제하다, 통제하다|regulate traffic|교통을 규제하다
14-22|forbid|(동) 금하다|forbid smoking|흡연을 금하다
14-22|sentence|(명) 판결, 선고 (동) 선고하다|death sentence|사형 선고
14-22|admit|(동) 인정하다|admit mistake|실수를 인정하다
14-22|jury|(명) 배심원단|member of jury|배심원의 일원
14-22|deceive|(동) 속이다, 기만하다|deceive people|사람들을 속이다
14-22|sue|(동) 고소하다|sue for damage|손해 배상을 청구하다
14-22|commit|(동) 범하다, 저지르다|commit crime|범죄를 저지르다
14-22|violate|(동) 위반하다|violate law|법을 위반하다
14-22|offend|(동) 기분 상하게 하다|offend audience|청중을 불쾌하게 하다
14-22|investigate|(동) 조사하다, 수사하다|investigate case|사건을 조사하다
14-22|inquire|(동) 조사하다, 묻다|inquire about price|가격을 문의하다
14-22|insult|(동) 모욕하다 (명) 모욕|public insult|공개적 모욕
14-22|identify|(동) 확인하다, 감정하다|identify body|신원을 확인하다
14-22|confess|(동) 자백하다, 고백하다|confess crime|범죄를 자백하다
14-22|convict|(동) 유죄를 선고하다|convict him|그에게 유죄를 선고하다
14-22|appeal|(동) 항소하다, 간청하다|make an appeal|호소하다
14-22|break down|부수다, 고장 나다|car breaks down|차가 고장 나다
14-22|accuse A of B|A를 B의 혐의로 고소하다|accuse him of theft|그를 절도죄로 기소하다
14-22|get away with|처벌을 모면하다|get away with it|그냥 넘어가다
14-23|gap|(명) 차이, 틈|generation gap|세대 차이
14-23|population|(명) 인구|world population|세계 인구
14-23|crash|(명) 충돌, 사고 (동) 충돌하다|car crash|자동차 사고
14-23|majority|(명) 대다수|vast majority|절대 다수
14-23|temptation|(명) 유혹|resist temptation|유혹을 뿌리치다
14-23|confuse|(동) 혼란시키다, 혼동하다|confuse names|이름을 혼동하다
14-23|aspect|(명) 면, 양상|positive aspect|긍정적인 측면
14-23|violent|(형) 폭력적인, 강렬한|violent movie|폭력적인 영화
14-23|obstacle|(명) 장애, 장애물|overcome obstacle|장애물을 극복하다
14-23|isolate|(동) 고립시키다, 격리시키다|isolate virus|바이러스를 격리하다
14-23|collide|(동) 충돌하다|cars collide|차가 충돌하다
14-23|negative|(형) 부정의, 소극적인|negative impact|부정적인 영향
14-23|abnormal|(형) 비정상적인|abnormal behavior|비정상적 행동
14-23|unite|(동) 통합하다, 단결하다|unite people|사람들을 결집하다
14-23|poverty|(명) 가난, 빈곤|live in poverty|가난하게 살다
14-23|abuse|(명) 남용, 학대 (동) 남용하다|child abuse|아동 학대
14-23|distress|(명) 고통, 고충 (동) 슬프게 하다|mental distress|정신적 고통
14-23|divorce|(명) 이혼 (동) 이혼하다|get divorce|이혼하다
14-23|arise|(동) 일어나다, 나타나다|problem arises|문제가 발생하다
14-23|degenerate|(동) 퇴보하다, 타락하다|degenerate into violence|폭력으로 변질되다
14-23|incident|(명) 사건, 사고|strange incident|이상한 사건
14-23|defect|(명) 결점, 단점|birth defect|선천적 결함
14-23|manipulate|(동) 조종하다, 조작하다|manipulate data|데이터를 조작하다
14-23|mislead|(동) 잘못 인도하다, 속이다|mislead public|대중을 오도하다
14-23|alcohol|(명) 술, 알코올|alcohol abuse|알코올 남용
14-23|addict|(명) 중독자 (동) 빠지게 하다|drug addict|마약 중독자
14-23|premature|(형) 시기상조의, 조급한|premature death|조기 사망
14-23|abandon|(동) 버리다, 포기하다|abandon baby|아기를 버리다
14-23|do away with|없애다, 끝내다|do away with rule|규칙을 없애다
14-23|keep away from|멀리하다, 피하다|keep away from fire|불을 멀리하다
14-24|reserve|(동) 남겨 두다, 예약하다 (명) 비축|reserve seat|좌석을 예약하다
14-24|occasion|(명) 경우, 특별한 일|special occasion|특별한 날
14-24|local|(형) 지역의 (명) 주민|local food|현지 음식
14-24|civil|(형) 시민의, 국내의|civil right|시민권
14-24|inner|(형) 내부의|inner beauty|내면의 미
14-24|tax|(명) 세금|pay tax|세금을 내다
14-24|harbor|(명) 항구, 항만|deep harbor|깊은 항구
14-24|equal|(형) 같은, 평등한|equal right|평등한 권리
14-24|intend|(동) 의도하다|intend to go|갈 생각이다
14-24|exhaust|(동) 소진시키다|exhaust resources|자원을 고갈시키다
14-24|globalize|(동) 세계화하다|globalize business|사업을 세계화하다
14-24|independence|(명) 독립, 자주|national independence|국가 독립
14-24|territory|(명) 영역, 영토|disputed territory|분쟁 영토
14-24|reside|(동) 거주하다|reside in city|도시에 거주하다
14-24|domestic|(형) 국내의, 가정의|domestic flight|국내선 항공편
14-24|immigrate|(동) 이주해 들어오다|immigrate to korea|한국으로 이민 오다
14-24|emigrate|(동) 타국으로 이주하다|emigrate from country|나라를 떠나 이민 가다
14-24|custom|(명) 풍습, 세관|local custom|지역 풍습
14-24|tribe|(명) 부족|african tribe|아프리카 부족
14-24|racial|(형) 인종의|racial discrimination|인종 차별
14-24|trait|(명) 특성, 특색|character trait|성격적 특성
14-24|ethnic|(형) 민족의, 인종의|ethnic minority|소수 민족
14-24|attempt|(명) 시도 (동) 시도하다|make attempt|시도하다
14-24|dominate|(동) 지배하다, 우세하다|dominate market|시장을 지배하다
14-24|resist|(동) 저항하다|resist pressure|압박에 저항하다
14-24|invade|(동) 침입하다, 침해하다|invade privacy|사생활을 침해하다
14-24|cooperate|(동) 협동하다, 협력하다|cooperate with each other|서로 협력하다
14-24|hold on to|고수하다, 계속 보유하다|hold on to belief|신념을 지키다
14-24|long for|갈망하다, 그리워하다|long for peace|평화를 갈구하다
14-24|consist of|~로 구성되다|consist of five parts|다섯 부분으로 구성되다
14-25|suggest|(동) 제안하다, 시사하다|suggest idea|아이디어를 제안하다
14-25|propose|(동) 제안하다, 청혼하다|propose plan|계획을 제안하다
14-25|universal|(형) 보편적인, 일반적인|universal truth|보편적 진리
14-25|vary|(동) 다르다, 바꾸다|vary in size|크기가 다양하다
14-25|conflict|(명) 충돌, 갈등 (동) 충돌하다|inner conflict|내적 갈등
14-25|aware|(형) 알아차리고 있는|be aware of|~을 알고 있다
14-25|approach|(동) 접근하다 (명) 접근|new approach|새로운 접근법
14-25|urge|(동) 촉구하다, 재촉하다|urge him to stay|남으라고 권하다
14-25|associate|(동) 제휴하다, 연합하다 (명) 동료|associate a with b|a를 b와 연관짓다
14-25|interpret|(동) 해석하다, 통역하다|interpret dream|꿈을 해석하다
14-25|alternative|(명) 대안 (형) 대안적인|alternative energy|대체 에너지
14-25|assist|(동) 원조하다, 돕다|assist the poor|가난한 이를 돕다
14-25|affair|(명) 사건, 사무, 직무|foreign affairs|외교 문제
14-25|widespread|(형) 광범위한, 널리 퍼진|widespread rumor| 널리 퍼진 소문
14-25|external|(형) 외부의, 대외적인|external factor|외부 요인
14-25|alien|(형) 외국의, 이질적인|alien culture|이질적인 문화
14-25|famine|(명) 기근, 배고픔|severe famine|심각한 기근
14-25|refuge|(명) 피난처, 도피|seek refuge|피난처를 찾다
14-25|shortage|(명) 부족, 결핍|water shortage|물 부족
14-25|endanger|(동) 위험에 빠뜨리다|endangered species|멸종 위기종
14-25|contaminate|(동) 오염시키다|contaminate water|물을 오염시키다
14-25|preserve|(동) 보존하다, 지키다|preserve environment|환경을 보존하다
14-25|explode|(동) 폭발하다|bomb explodes|폭탄이 터지다
14-25|integrate|(동) 통합하다|integrate system|시스템을 통합하다
14-25|guard|(동) 보호하다 (명) 경비원|security guard|경비원
14-25|remark|(명) 발언 (동) 언급하다|opening remark|개회사
14-25|accord|(명) 일치, 조화 (동) 일치하다|peace accord|평화 협정
14-25|interfere in|간섭하다, 개입하다|interfere in business|남의 일에 참견하다
14-25|keep up with|뒤떨어지지 않게 따라가다|keep up with trend|유행을 따르다
14-25|break off|단절하다, 결렬되다|break off relation|관계를 끊다
14-26|previous|(형) 이전의, 앞의|previous chapter|이전 장
14-26|prior|(형) 이전의, 우선하는|prior notice|사전 통지
14-26|decade|(명) 10년간|last decade|지난 십 년
14-26|biography|(명) 전기, 일대기|write biography|전기를 쓰다
14-26|devote|(동) 바치다, 헌신하다|devote time|시간을 바치다
14-26|faith|(명) 신념, 믿음|have faith|믿음을 갖다
14-26|minority|(명) 소수, 소수 민족|ethnic minority|소수 민족
14-26|mummy|(명) 미라|egyptian mummy|이집트 미라
14-26|remains|(명) 유해, 나머지|human remains|인간의 유해
14-26|rid|(동) 제거하다, 자유롭게 하다|get rid of|~을 제거하다
14-26|origin|(명) 기원, 유래|country of origin|원산지
14-26|civilization|(명) 문명, 문화|ancient civilization|고대 문명
14-26|revolution|(명) 혁명, 변혁|industrial revolution|산업 혁명
14-26|royal|(형) 왕의, 왕실의|royal family|왕족
14-26|heritage|(명) 유산, 전통|cultural heritage|문화 유산
14-26|missionary|(명) 선교사, 전도사|christian missionary|기독교 선교사
14-26|sermon|(명) 설교, 교훈|give sermon|설교하다
14-26|settle|(동) 정착하다, 해결하다|settle dispute|분쟁을 해결하다
14-26|replace|(동) 대신하다, 대체하다|replace part|부품을 교체하다
14-26|signify|(동) 의미하다, 나타내다|signify change|변화를 의미하다
14-26|conserve|(동) 보존하다|conserve energy|에너지를 절약하다
14-26|evaluate|(동) 평가하다|evaluate performance|성과를 평가하다
14-26|descend|(동) 계통을 잇다, 내려가다|descend stairs|계단을 내려가다
14-26|disappear|(동) 사라지다|disappear forever|영원히 사라지다
14-26|sequence|(명) 순서, 연속|logical sequence|논리적 순서
14-26|gradual|(형) 점차적인, 단계적인|gradual increase|점진적 증가
14-26|sacred|(형) 신성한, 성스러운|sacred place|신성한 장소
14-26|break out|발생하다, 발발하다|war breaks out|전쟁이 터지다
14-26|derive from|~에서 유래하다|derive from nature|자연에서 유래하다
14-26|hand down|전하다, 물려주다|hand down knowledge|지식을 전수하다
14-27|biology|(명) 생물학|marine biology|해양 생물학
14-27|chemistry|(명) 화학|organic chemistry|유기 화학
14-27|element|(명) 요소, 성분, 원소|essential element|필수 요소
14-27|acid|(명) 산 (형) 산성의, 신맛의|acid rain|산성비
14-27|storage|(명) 저장, 저장소|data storage|데이터 저장소
14-27|steam|(명) 증기|steam engine|증기 기관
14-27|gene|(명) 유전자|human gene|인간 유전자
14-27|mammal|(명) 포유동물|marine mammal|해양 포유동물
14-27|melt|(동) 녹다, 녹이다 (명) 용해|ice melts|얼음이 녹다
14-27|cell|(명) 세포, 작은 방|nerve cell|신경 세포
14-27|microscope|(명) 현미경|under microscope|현미경 아래에서
14-27|reproduce|(동) 번식하다, 복제하다|reproduce sexually|유성 생식하다
14-27|evolution|(명) 진화|theory of evolution|진화론
14-27|extinct|(형) 멸종된, 사라진|become extinct|멸종되다
14-27|clone|(동) 복제하다 (명) 복제 생물|clone a sheep|양을 복제하다
14-27|identical|(형) 동일한|identical twins|일란성 쌍둥이
14-27|animate|(형) 살아 있는, 생물인|animate beings|살아있는 존재들
14-27|carbon|(명) 탄소|carbon dioxide|이산화탄소
14-27|mixture|(명) 혼합물, 혼합|chemical mixture|화학 혼합물
14-27|substance|(명) 물질|toxic substance|독성 물질
14-27|liquid|(명) 액체 (형) 액체의|liquid state|액체 상태
14-27|filter|(동) 거르다, 여과하다 (명) 여과 장치|water filter|정수 필터
14-27|absorb|(동) 흡수하다, 열중시키다|absorb water|물을 흡수하다
14-27|toxic|(형) 유독한|toxic waste|유독 폐기물
14-27|ray|(명) 빛, 광선|x ray|x선
14-27|compound|(명) 화합물, 복합물|chemical compound|화학 화합물
14-27|detach|(동) 떼어 놓다, 분리하다|detach the label|라벨을 떼다
14-27|turn A into B|A를 B로 바꾸다|turn water into ice|물을 얼음으로 바꾸다
14-27|tell from|~을 구별하다|tell truth from lies|진실과 거짓을 구별하다
14-27|give off|내다, 방출하다, 발산하다|give off smell|냄새를 풍기다
14-28|temperature|(명) 온도, 기온|room temperature|실온
14-28|forecast|(명) 예보 (동) 예상하다|weather forecast|일기 예보
14-28|climate|(명) 기후|climate change|기후 변화
14-28|rubber|(명) 고무 (형) 고무의|rubber band|고무줄
14-28|severe|(형) 극심한, 심각한, 가혹한|severe storm|심한 폭풍
14-28|resource|(명) 자원, 재원|natural resource|천연 자원
14-28|spark|(동) 도화선이 되다 (명) 불꽃|electric spark|전기 불꽃
14-28|Arctic|(명) 북극 지방 (형) 북극의|arctic ocean|북극해
14-28|depth|(명) 심해, 깊이|water depth|수심
14-28|shield|(동) 보호하다 (명) 방패|shield from sun|햇빛으로부터 보호하다
14-28|wildlife|(명) 야생 생물|protect wildlife|야생 동물을 보호하다
14-28|disaster|(명) 재난, 재해, 재앙|natural disaster|자연 재해
14-28|occur|(동) 발생하다, 일어나다|occur naturally|자연적으로 발생하다
14-28|Atlantic|(명) 대서양 (형) 대서양의|atlantic ocean|대서양
14-28|canyon|(명) 협곡|grand canyon|그랜드 캐니언
14-28|swamp|(명) 늪 (동) 늪에 빠져들다|mangrove swamp|망그로브 늪
14-28|moisture|(명) 수분, 습기|soil moisture|토양 수분
14-28|reflect|(동) 반사하다, 반영하다|reflect light|빛을 반사하다
14-28|Celsius|(명) 섭씨|degrees celsius|섭씨 온도
14-28|thermometer|(명) 온도계|mercury thermometer|수은 온도계
14-28|destructive|(형) 파괴적인, 해로운|destructive power|파괴적인 힘
14-28|wreck|(명) 난파, 잔해 (동) 파괴하다|ship wreck|난파선
14-28|peak|(명) 정상, 봉우리, 절정|mountain peak|산봉우리
14-28|erupt|(동) 폭발하다, 분출하다|volcano erupts|화산이 분출하다
14-28|eject|(동) 내뿜다, 배출하다|eject smoke|연기를 내뿜다
14-28|purify|(동) 정화하다, 정제하다|purify water|물을 정화하다
14-28|surround|(동) 둘러싸다, 포위하다|surrounded by mountains|산으로 둘러싸인
14-28|wash away|~을 쓸어 가다|wash away soil|흙을 쓸어가다
14-28|wipe out|~을 완전히 파괴하다|wipe out population|인구를 전멸시키다
14-28|use up|다 써 버리다, 소모하다|use up energy|에너지를 다 쓰다
14-29|astronaut|(명) 우주 비행사|brave astronaut|용감한 우주 비행사
14-29|solar|(형) 태양의|solar system|태양계
14-29|remote|(형) 먼, 외진|remote area|외진 곳
14-29|benefit|(명) 이익|mutual benefit|상호 이익
14-29|efficiency|(명) 효율, 능률|fuel efficiency|연비
14-29|enable|(동) 할 수 있게 하다|enable access|접근을 가능하게 하다
14-29|discover|(동) 발견하다|discover new planet|새 행성을 발견하다
14-29|observe|(동) 관찰하다, 준수하다|observe stars|별을 관찰하다
14-29|digital|(형) 디지털의|digital age|디지털 시대
14-29|shuttle|(명) 우주 왕복선 (동) 왕복하다|space shuttle|우주 왕복선
14-29|astronomer|(명) 천문학자|famous astronomer|유명한 천문학자
14-29|orbit|(명) 궤도|earth's orbit|지구의 궤도
14-29|galaxy|(명) 은하, 은하계|milky way galaxy|우리 은하
14-29|rotate|(동) 회전하다, 교대하다|earth rotates|지구가 자전하다
14-29|satellite|(명) 위성, 인공위성|artificial satellite|인공위성
14-29|launch|(동) 발사하다, 출시하다|launch rocket|로켓을 발사하다
14-29|lunar|(형) 달의|lunar eclipse|월식
14-29|electronic|(형) 전자의|electronic device|전자 장치
14-29|eclipse|(명) 식 (동) 빛을 잃게 하다|solar eclipse|일식
14-29|gravity|(명) 중력|zero gravity|무중력
14-29|automatic|(형) 자동의|automatic system|자동 시스템
14-29|device|(명) 도구, 장치|electronic device|전자 기기
14-29|manual|(형) 손의, 수동의|manual labor|육체 노동
14-29|accurate|(형) 정확한|accurate data|정확한 데이터
14-29|analyze|(동) 분석하다, 분해하다|analyze result|결과를 분석하다
14-29|adjust|(동) 조절하다, 적응하다|adjust volume|볼륨을 조절하다
14-29|accelerate|(동) 가속하다|accelerate growth|성장을 가속하다
14-29|bring about|~을 불러일으키다, 초래하다|bring about change|변화를 초래하다
14-29|sort out|~을 분류하다, 선별하다|sort out problem|문제를 해결하다
14-29|substitute for|~을 대신하다, 대리하다|substitute for sugar|설탕 대용물
14-30|online|(형) 온라인의 (부) 온라인으로|online shopping|온라인 쇼핑
14-30|database|(명) 데이터베이스|access database|데이터베이스에 접속하다
14-30|capture|(동) 포착하다, 붙잡다|capture moment|순간을 포착하다
14-30|tool|(명) 툴, 도구, 연장|useful tool|유용한 도구
14-30|junk|(명) 폐물, 고물|junk mail|스팸 메일
14-30|delete|(동) 삭제하다|delete file|파일을 삭제하다
14-30|communicate|(동) 의사소통하다, 통신하다|communicate well|의사소통을 잘하다
14-30|browse|(동) 검색하다, 열람하다|browse web|웹을 검색하다
14-30|link|(명) 링크, 연결 (동) 연결하다|broken link|끊어진 링크
14-30|oral|(형) 구두의, 구술의|oral exam|구술 시험
14-30|edit|(동) 편집하다, 교정하다|edit video|영상을 편집하다
14-30|warn|(동) 경고하다, 주의를 주다|warn students|학생들에게 경고하다
14-30|dot|(명) 닷, 점|dot com|닷컴
14-30|visual|(형) 시각의, 눈에 보이는|visual aids|시각 자료
14-30|profile|(명) 프로필, 인물 소개|user profile|사용자 프로필
14-30|access|(명) 접근 (동) 접근하다|gain access|접근 권한을 얻다
14-30|circulate|(동) 보급시키다, 유포하다|circulate rumors|소문을 퍼뜨리다
14-30|activate|(동) 활성화하다|activate account|계정을 활성화하다
14-30|surf|(동) 파도타기를 하다|surf the internet|인터넷을 서핑하다
14-30|request|(명) 요청 (동) 요청하다|send request|요청을 보내다
14-30|interrupt|(동) 방해하다, 중단하다|interrupt speech|말을 가로막다
14-30|pause|(명) 중단 (동) 잠시 멈추다|pause the video|영상을 멈추다
14-30|response|(명) 응답, 반응|quick response|빠른 응답
14-30|debate|(명) 토론, 토의 (동) 토론하다|public debate|공개 토론
14-30|illogical|(형) 비논리적인, 불합리한|illogical argument|비논리적인 주장
14-30|hesitate|(동) 주저하다, 망설이다|hesitate to answer|대답을 주저하다
14-30|suppose|(동) 가정하다, 생각하다|suppose that|~라고 가정하다
14-30|combine|(동) 결합시키다|combine efforts|힘을 합치다
14-30|keep in touch with|~와 연락을 유지하다|keep in touch with friends|친구들과 연락하다
14-30|cut in|대화에 끼어들다|cut in on conversation|대화에 끼어들다



20-1|include|(동) 포함하다|include tax|세금을 포함하다
20-1|produce|(동) 생산하다, 만들어 내다, 초래하다 (명) 농산물|produce goods|상품을 생산하다
20-1|belief|(명) 믿음, 신념, 신앙|strong belief|강한 믿음
20-1|similar|(형) 비슷한, 유사한|similar to mine|내 것과 비슷한
20-1|moment|(명) 순간, 중요성|at the moment|바로 지금(그 순간에)
20-1|situation|(명) 상황, 위치|difficult situation|어려운 상황
20-1|improve|(동) 개선하다, 향상하다|improve skills|기술을 향상시키다
20-1|increase|(동) 증가하다, 증가시키다 (명) 증가, 인상|increase in value|가치가 증가하다
20-1|decrease|(동) 감소하다, 감소시키다 (명) 감소, 축소|decrease in number|수가 감소하다
20-1|share|(동) 나누다, 공유하다 (명) 몫|share ideas|아이디어를 공유하다
20-1|emotion|(명) 감정, 정서|express emotion|감정을 표현하다
20-1|common|(형) 흔한, 보통의, 공통의|common sense|상식
20-1|recover|(동) 회복하다, 복구되다|recover from illness|병에서 회복하다
20-1|advanced|(형) 진보한, 상급의|advanced technology|진보된 기술
20-1|reject|(동) 거절하다, 거부하다|reject an offer|제안을 거절하다 [J]
20-1|refuse|(동) 거절하다, 거부하다|refuse to go|가기를 거부하다 [F]
20-1|accept|(동) 받아들이다, 수락하다|accept an invitation|초대를 수락하다
20-1|indifferent|(형) 무관심한|indifferent to politics|정치에 무관심한
20-1|experience|(동) 경험하다 (명) 경험|gain experience|경험을 쌓다
20-1|certain|(형) 확실한, 확신하는, 어떤|certain outcome|확실한 결과
20-1|consider|(동) 고려[숙고]하다, ~으로 여기다|consider a problem|문제를 고려하다
20-1|supply|(동) 공급하다, 제공하다 (명) 공급|supply and demand|수요와 공급
20-1|provide|(동) 공급하다, 제공하다, 대비하다|provide food|음식을 제공하다 [P]
20-1|practical|(형) 실용적인, 실제적인|practical advice|실용적인 조언
20-1|express|(동) 표현하다, 나타내다, 속달로 보내다 (형) 급행의, 신속한 (명) 급행, 속달|express feelings|감정을 표현하다
20-1|quantity|(명) 양, 수량|large quantity|많은 양
20-1|superior|(형) 뛰어난, 우월한, 상급의 (명) 윗사람, 상급자|superior to others|남보다 우월한
20-1|inferior|(형) 열등한, 하위의 (명) 손아랫사람, 하급자|inferior quality|낮은 품질
20-1|seek|(동) 찾다, 추구하다, 청하다|seek advice|조언을 구하다
20-1|aim|(명) 목표, 목적 (동) 목표하다, 겨냥하다|aim at success|성공을 목표로 하다
20-1|fade|(동) 희미해지다, 사라지다|Colors fade.|색이 바래다.
20-1|disappear|(동) 사라지다, 없어지다|Disappear suddenly.|갑자기 사라지다.
20-1|emerge|(동) 나타나다, 나오다|Emerge from darkness.|어둠 속에서 나타나다.
20-1|grief|(명) (깊은) 슬픔, 비탄|deep grief|깊은 슬픔
20-1|slight|(형) 약간의, 하찮은|slight change|약간의 변화
20-1|success|(명) 성공, 성공작|achieve success|성공을 거두다
20-1|failure|(명) 실패, 실패작, 고장|fear of failure|실패에 대한 두려움
20-1|run into|~와 우연히 만나다, ~와 충돌하다|run into a friend|친구와 우연히 마주치다
20-1|depend on|~에 의존[의지]하다, ~에 달려 있다|depend on parents|부모님께 의지하다
20-1|carry out|~을 실행[수행]하다, ~을 완료하다|carry out a plan|계획을 실행하다

20-2|illegal|(형) 불법적인, 위법인|illegal drugs|불법 약물
20-2|local|(형) 지역의, 현지의 (명) 현지인|local news|지역 뉴스
20-2|amount|(명) 총계, 양 (동) 총계가 ~이 되다|large amount|많은 양
20-2|historical|(형) 역사적인, 역사상의|historical event|역사적 사건
20-2|found|(동) 설립하다, 기초를 세우다|found a company|회사를 설립하다 [F]
20-2|establish|(동) 설립하다, 수립하다|establish a rule|규칙을 제정하다 [E]
20-2|process|(명) 과정, 처리 (동) 처리하다, 가공하다|manufacturing process|제조 과정
20-2|expert|(명) 전문가 (형) 숙련된, 전문적인|expert opinion|전문가 의견
20-2|decade|(명) 10년, 10년간|for a decade|10년 동안
20-2|continue|(동) 계속하다, 연장하다|continue to work|일을 계속하다
20-2|dedicate|(동) 바치다, 헌신하다|dedicate oneself to|~에 헌신하다 [8]
20-2|devote|(동) 바치다, 전념하다|devote time to|~에 시간을 쏟다 [6]
20-2|period|(명) 기간, 시기, 시대|short period|짧은 기간
20-2|perceive|(동) 인지[감지]하다, ~으로 여기다|perceive danger|위험을 감지하다 [P]
20-2|recognize|(동) 인식[인지]하다, 인정하다|recognize a face|얼굴을 알아보다 [R]
20-2|exhausted|(형) 지친, 고갈된|Feel exhausted.|지치다.
20-2|crime|(명) 범죄, 범행, 죄악|commit a crime|범죄를 저지르다
20-2|charity|(명) 자선 단체[기금], 자비심|give to charity|자선 단체에 기부하다
20-2|expose|(동) 노출시키다, 폭로하다|expose the truth|진실을 폭로하다 [E]
20-2|reveal|(동) 드러내다, 폭로하다|reveal a secret|비밀을 드러내다 [R]
20-2|conceal|(동) 숨기다, 비밀로 하다|conceal a weapon|무기를 숨기다
20-2|deserve|(동) ~을 받을 만하다, ~할 가치가 있다|deserve praise|칭찬받을 만하다
20-2|unite|(동) 결합[연합]하다, 결속시키다|unite for peace|평화를 위해 단결하다 [U]
20-2|combine|(동) 결합시키다, 겸비하다|combine forces|힘을 합치다 [C]
20-2|separate|(동) 분리하다 (형) 별개의, 각각의|separate rooms|분리된 방
20-2|complete|(동) 완료하다 (형) 완전한|complete the task|과업을 완수하다
20-2|connect|(동) 연결하다, 관련시키다|connect to the internet|인터넷에 연결하다
20-2|overcome|(동) 극복하다, 이기다, 압도하다|overcome difficulties|어려움을 극복하다
20-2|rapid|(형) 빠른, 신속한|rapid growth|빠른 성장
20-2|chase|(동) 쫓다, 추적하다 (명) 추적|chase a thief|도둑을 쫓다
20-2|achieve|(동) 이루다, 성취하다|achieve a goal|목표를 달성하다 [7]
20-2|accomplish|(동) 이루다, 성취하다|accomplish a mission|임무를 완수하다 [10]
20-2|mislead|(동) 잘못 인도하다, 오해하게 하다|mislead the public|대중을 호도하다
20-2|random|(형) 무작위의, 임의의|random choice|무작위 선택
20-2|organ|(명) 장기, 기관|internal organs|내장 기관
20-2|vital|(형) 아주 중요한, 필수적인, 생명 유지에 필요한|vital role|중요한 역할
20-2|reliable|(형) 믿을 수 있는, 의지가 되는|reliable source|믿을 수 있는 소식통
20-2|deal with|~을 처리하다, ~을 다루다|deal with a problem|문제를 다루다
20-2|lead to|~으로 이어지다, ~을 야기[초래]하다|lead to success|성공으로 이끌다
20-2|get along with|~와 잘 지내다|get along with others|다른 사람들과 잘 지내다



20-3|knowledge|(명) 지식, 알고 있음|general knowledge|일반 상식
20-3|encourage|(동) 용기를 북돋우다, 격려하다, 장려하다|encourage students|학생들을 격려하다
20-3|discourage|(동) 낙담 시키다, 방해하다|discourage smoking|흡연을 말리다(낙담시키다)
20-3|detail|(명) 세부 사항, 상세|in detail|상세하게
20-3|resolution|(명) 결심, 결의, 해결|new year's resolution|새해 결심
20-3|probable|(형) 있을 법한, 예상되는|probable cause|개연성 있는 원인
20-3|trait|(명) 특성, 특색|personality trait|성격적 특성
20-3|direct|(동) 감독하다, (길을) 안내하다 (형) 직접적인, 직항의|direct flight|직항편
20-3|distance|(명) 거리, 간격|long distance|먼 거리
20-3|income|(명) 수입, 소득|annual income|연간 수입
20-3|revise|(동) 개정하다, 정정하다|revise a plan|계획을 수정하다 [R]
20-3|mark|(동) 표시하다, 채점하다 (명) 표시, 흔적|mark the date|날짜를 표시하다
20-3|negative|(형) 부정적인|negative attitude|부정적인 태도
20-3|official|(형) 공식적인, 공무의, 정식의|official document|공식 문서
20-3|search|(동) 찾다, 검색하다 (명) 수색, 검색|search for truth|진실을 찾다
20-3|benefit|(명) 혜택, 이익, 자선 행사 (동) 이롭다, 이익을 얻다|mutual benefit|상호 이익
20-3|profit|(명) 이익, 수익, 이윤 (동) 이익을 얻다|net profit|순이익
20-3|damage|(명) 손상, 피해 (동) 손상을 입히다|serious damage|심각한 손상
20-3|amaze|(동) (대단히) 놀라게 하다|amaze the audience|관중을 놀라게 하다
20-3|opportunity|(명) 기회, 가망|golden opportunity|절호의 기회
20-3|ignore|(동) 무시하다, 모르는 체하다|ignore a warning|경고를 무시하다
20-3|contact|(동) 접촉하다, 연락하다 (명) 접촉, 연락|keep in contact|연락을 유지하다
20-3|various|(형) 다양한, 여라 가지의|various kinds|여러 가지 종류 [V]
20-3|diverse|(형) 다양한, 다른|diverse cultures|다양한 문화 [D]
20-3|performance|(명) 공연, 성과, 수행|high performance|고성능
20-3|contain|(동) 포함하다, 억누르다|contain anger|화를 참다(억누르다)
20-3|involve|(동) 포함[수반]하다, 관련시키다|involve risk|위험을 수반하다
20-3|concentrate|(동) 집중하다, 전력을 기울이다|concentrate on work|일에 집중하다
20-3|disturb|(동) 방해하다, 어지럽히다|disturb sleep|수면을 방해하다
20-3|due|(형) 만기가 된, ~을 하기로 되어 있는|due date|마감일
20-3|examine|(동) 조사하다, 검진하다, 시험하다|examine closely|면밀히 조사하다 [E]
20-3|investigate|(동) 조사하다, 수사하다|investigate a crime|범죄를 수사하다 [I]
20-3|research|(동) 연구[조사]하다 (명) 연구, 조사|conduct research|연구를 수행하다 [R]
20-3|material|(명) 재료, 자료, 물질 (형) 물질의, 육체적인|raw material|원자재
20-3|medical|(형) 의학의, 의료의|medical care|의료
20-3|pursue|(동) 추구하다, 추적하다|pursue happiness|행복을 추구하다
20-3|alter|(동) 바꾸다, 변경하다|alter plans|계획을 변경하다 [A]
20-3|according to|~에 따라서, ~에 따르면|according to the rules|규칙에 따르면
20-3|participate in|~에 참여하다, ~에 참가하다|participate in a game|경기에 참가하다
20-3|look into|~을 조사하다, ~을 주의 깊게 살피다|look into the matter|문제를 조사하다 [L]


20-4|circumstance|(명) 환경, 상황, 형편|under no circumstances|어떤 상황에서도 ~않다
20-4|environment|(명) (자연, 주변의) 환경|protect the environment|환경을 보호하다
20-4|active|(형) 활동적인, 적극적인, 활발한|active participation|적극적인 참여
20-4|community|(명) 지역 사회, 공동체|local community|지역 사회
20-4|necessity|(명) 필요(성), 필수품|basic necessity|기본 필수품
20-4|effort|(명) 노력, 수고, 결과|make an effort|노력하다
20-4|participation|(명) 참가, 참여|active participation|활발한 참여
20-4|regular|(형) 규칙적인, 정기적인, 보통의 (명) 단골손님|regular exercise|규칙적인 운동
20-4|development|(명) 발전, 성장, 개발|economic development|경제 발전
20-4|progress|(명) 진전, 진보 (동) 진보[발전]하다, 전진하다|make progress|진전을 보이다
20-4|permit|(동) 허락[허용]하다|permit parking|주차를 허용하다
20-4|forbid|(동) 금지하다|forbid entry|입장을 금지하다
20-4|emission|(명) 배출, 방출, 배출물|carbon emission|탄소 배출
20-4|perspective|(명) 관점, 시각, 원근법|different perspective|다른 관점
20-4|conservative|(형) 보수적인, 보수주의의|conservative view|보수적인 견해
20-4|entire|(형) 전체의, 완전한|entire life|평생
20-4|measure|(동) 측정하다, 재다 (명) 측정, 조치|measure height|키를 재다
20-4|maintain|(동) 유지하다, 지지하다, 부양하다|maintain order|질서를 유지하다
20-4|support|(동) 지지하다, 지원하다, 부양하다 (명) 지지, 후원|support a family|가족을 부양하다
20-4|prevent|(동) 막다, 예방하다|prevent accidents|사고를 예방하다
20-4|occur|(동) 발생하다, 일어나다, 생각나다|Problem [occurred].|문제가 발생했다.
20-4|passion|(명) 열정, 걱정|passion for music|음악에 대한 열정
20-4|determine|(동) 결정하다, 밝혀내다|determine the cause|원인을 밝혀내다
20-4|influence|(명) 영향(력) (동) 영향을 주다|bad influence|나쁜 영향
20-4|impact|(명) 영향, 충격 (동) 영향[충격]을 주다|huge impact|큰 영향
20-4|immediate|(형) 즉각적인, 직접의|immediate action|즉각적인 조치
20-4|military|(명) 군대 (형) 군대의|military service|군 복무
20-4|ancient|(형) 고대의, 옛날의|ancient history|고대사
20-4|emphasize|(동) 강조[역설]하다, 두드러지게 하다|emphasize importance|중요성을 강조하다
20-4|preference|(명) 선호(도), 선호하는 것|personal preference|개인적인 선호
20-4|respect|(동) 존경[존중]하다 (명) 존경, 측면|respect elders|어른을 공경하다
20-4|concern|(명) 염려, 관심 (동) 관련되다|public concern|대중의 관심사
20-4|forecast|(동) 예측하다, 예보하다 (명) 예측, 예보|weather forecast|일기 예보
20-4|predict|(동) 예측하다, 예언하다|predict the future|미래를 예측하다
20-4|tendency|(명) 경향, 추세, 성향|tendency to forget|잊어버리는 경향
20-4|function|(명) 기능, 행사 (동) 작용하다|proper function|적절한 기능
20-4|significant|(형) 중요한, 의미 있는, 상당한|significant change|상당한 변화
20-4|due to|~ 때문에, ~에 기인하는|due to rain|비 때문에
20-4|be aware of|~을 인식하다, ~을 알다, ~을 깨닫다|be aware of danger|위험을 인지하다
20-4|provide A with B|A에게 B를 제공하다|provide people with food|사람들에게 음식을 제공하다


20-5|apologize|(동) 사과하다|apologize for mistake|실수를 사과하다
20-5|confuse|(동) 혼동하다, 혼란 시키다|confuse A with B|A와 B를 혼동하다
20-5|disorder|(명) 무질서, 혼란, 장애|mental disorder|정신 장애
20-5|gather|(동) 모이다, 모으다|gather together|함께 모이다
20-5|accident|(명) 사고, 재난, 우연|car accident|자동차 사고
20-5|suppose|(동) 가정하다, 추정하다|suppose it's true|그것이 사실이라고 가정하다
20-5|recommend|(동) 추천하다, 권장하다|recommend a book|책을 추천하다
20-5|adjust|(동) 조정하다, 조절하다|adjust the volume|볼륨을 조절하다
20-5|aspect|(명) 측면, 양상, 관점|positive aspect|긍정적인 측면
20-5|purchase|(동) 구입하다 (명) 구입, 구입품|purchase goods|상품을 구매하다
20-5|purpose|(명) 목적, 의도, 결심|main purpose|주목적
20-5|organize|(동) 조직하다, 준비하다, 정리하다|organize a team|팀을 조직하다 [O]
20-5|arrange|(동) 정리(배열)하다, 준비하다|arrange a meeting|회의를 마련하다 [A]
20-5|communicate|(동) 의사소통을 하다, (정보를) 전달하다|communicate with people|사람들과 소통하다
20-5|represent|(동) 대표하다, 나타내다, 대변하다|represent a country|나라를 대표하다
20-5|treatment|(명) 치료(법), 대우, 처리|medical treatment|의학적 치료
20-5|approach|(동) 접근하다 (명) 접근|new approach|새로운 접근법
20-5|claim|(동) 주장하다, 요구하다 (명) 주장, 요구, 청구|claim damages|손해 배상을 청구하다
20-5|disappoint|(동) 실망시키다, 낙담 시키다|disappoint parents|부모님을 실망시키다
20-5|observe|(동) 관찰하다, 목격하다, 준수하다|observe nature|자연을 관찰하다
20-5|compare|(동) 비교하다, 비유하다|compare prices|가격을 비교하다
20-5|alarm|(명) 경보, 불안 (동) 불안하게 하다, 경보를 발하다|fire alarm|화재 경보기
20-5|exist|(동) 존재하다, (근근이) 살아가다|cease to exist|존재하지 않게 되다
20-5|attract|(동) (주의, 관심 등을) 끌다, 끌어들이다, 매혹하다|attract attention|주의를 끌다
20-5|crucial|(형) 결정적인, 중대한|crucial decision|중대한 결정
20-5|display|(동) 전시하다, 드러내다 (명) 전시|display talent|재능을 보여주다 [D]
20-5|exhibit|(동) 전시하다, 보이다 (명) 전시품|exhibit paintings|그림을 전시하다 [E]
20-5|describe|(동) 묘사하다, 설명하다|describe the scene|장면을 묘사하다
20-5|general|(형) 일반적인, 보통의, 종합적인 (명) 장군|general idea|대략적인 생각 [G]
20-5|universal|(형) 보편적인, 전 세계의, 우주의|universal truth|보편적인 진리 [U]
20-5|specific|(형) 구체적인, 특정한, 특유의|specific example|구체적인 예시
20-5|reward|(명) 보상, 사례금 (동) 보상하다|offer a reward|보상을 제공하다
20-5|motivate|(동) 동기를 부여하다|motivate students|학생들에게 동기를 부여하다
20-5|fee|(명) 수수료, 요금|entrance fee|입장료
20-5|demand|(동) 요구하다 (명) 요구, 수요|meet the demand|수요를 충족시키다
20-5|handle|(동) 다루다, 처리하다 (명) 손잡이|handle with care|조심해서 다루다 [H]
20-5|manage|(동) 관리하다, 다루다, 용케 해내다|manage time|시간을 관리하다 [M]
20-5|refer to|~을 가리키다, ~을 언급하다, ~을 참고하다|refer to a dictionary|사전을 참조하다
20-5|take on|~을 떠맡다, ~을 고용하다, (특정한 특질을) 띠다|take on a challenge|도전을 받아들이다
20-5|pay attention to|~에 유의하다, ~에 주목하다|pay attention to details|세부 사항에 주의를 기울이다



20-6|category|(명) 범주, 부분|fall into a category|범주에 속하다
20-6|except|(전) ~을 제외하고 (동) 제외하다|everyone except me|나를 제외한 모두
20-6|discuss|(동) 토론하다, 논의하다|discuss the issue|그 문제를 논의하다
20-6|debate|(동) 토론[논의]하다, 숙고하다 (명) 토론, 논쟁|heated debate|열띤 토론
20-6|judgment|(명) 판단, 판결, 의견|make a judgment|판단을 내리다
20-6|consume|(동) 소비[소모]하다, 섭취하다|consume energy|에너지를 소비하다
20-6|alive|(형) 살아있는|stay alive|살아남다
20-6|valuable|(형) 소중한, 값비싼|valuable lesson|소중한 교훈
20-6|complain|(동) 불평[항의]하다, 호소하다|complain about the noise|소음에 대해 불평하다
20-6|replace|(동) 대체[대신]하다, 교체하다|replace A with B|A를 B로 대체하다
20-6|norm|(명) 표준, 기준, 규범|social norms|사회적 규범
20-6|standard|(명) 표준, 기준, 수준, (도덕) 규범|safety standard|안전 기준
20-6|advertise|(동) 광고하다, 알리다|advertise a product|제품을 광고하다
20-6|awareness|(명) 의식, 인식|raise awareness|인식을 높이다
20-6|concept|(명) 개념, 생각|basic concept|기본 개념
20-6|respond|(동) 반응하다, 응답하다|respond to a question|질문에 응답하다
20-6|credit|(명) 신용, 입금, 학점 (동) 신용하다, ~에게 돌리다|give credit to|~에게 공로를 돌리다
20-6|poison|(명) 독, 독약 (동) 독을 넣다, 해치다|deadly poison|치명적인 독
20-6|indicate|(동) 나타내다, 가리키다, 암시하다|indicate the direction|방향을 가리키다
20-6|chemical|(형) 화학의, 화학 작용의 (명) 화학 약품[물질]|chemical reaction|화학 반응
20-6|primary|(형) 주요한, 최초의, 초등의, 근본적인|primary cause|주된 원인
20-6|essential|(형) 필수의, 중요한, 본질적인|essential element|필수 요소
20-6|opinion|(명) 의견, 견해|public opinion|여론
20-6|efficient|(형) 효율적인, 유능한|energy efficient|에너지 효율적인
20-6|welfare|(명) 복지, 행복|social welfare|사회 복지
20-6|eliminate|(동) 없애다, 제거[배제]하다|eliminate waste|낭비를 없애다
20-6|locate|(동) 두다, ~의 위치를 알아내다|locate the store|가게의 위치를 찾다
20-6|invention|(명) 발명, 발명품, 날조|great invention|위대한 발명
20-6|ideal|(형) 이상적인, 상상의 (명) 이상, 공상|ideal partner|이상적인 배우자
20-6|realistic|(형) 현실적인, 사실주의의|realistic goal|현실적인 목표
20-6|conclude|(동) 결론을 내리다, 끝내다|conclude that he is right|그가 옳다고 결론짓다
20-6|struggle|(동) 분투하다, 싸우다, 애쓰다 (명) 싸움, 노력|struggle for survival|생존을 위해 몸부림치다
20-6|unique|(형) 유일한, 독특한|unique style|독특한 스타일
20-6|proper|(형) 적절한, 올바른|proper care|적절한 관리
20-6|appropriate|(형) 적절한, 적합한|appropriate action|적절한 조치
20-6|supplement|(동) 보충하다 (명) 보충(물), 추가(물)|vitamin supplement|비타민 보충제
20-6|trial|(명) 시도, 재판|fair trial|공정한 재판
20-6|infant|(명) 유아, 젖먹이, 아기|infant mortality|영아 사망률
20-6|run out of|~을 다 써 버리다, ~을 바닥내다|run out of gas|기름이 떨어지다
20-6|can afford to do|~할 여유가 있다|can afford to buy a car|차를 살 여유가 있다


20-7|protest|(동) 항의하다, 주장하다 (명) 항의, 시위|protest against the war|전쟁에 반대하여 시위하다
20-7|organic|(형) 유기적인, 유기농의|organic food|유기농 식품
20-7|brilliant|(형) 훌륭한, 뛰어난, 눈부신|brilliant idea|훌륭한 아이디어
20-7|finance|(명) 재정, 재무, 자금 (동) 자금을 대다|ministry of finance|재무부
20-7|incredible|(형) 믿을 수 없는, 놀라운, 대단한|incredible speed|믿을 수 없는 속도
20-7|interest|(명) 관심, 흥미, 이자 (동) ~의 관심을 끌다|show interest in|~에 관심을 보이다
20-7|rare|(형) 드문, 희박한|rare species|희귀종
20-7|employ|(동) 고용하다, 이용하다|employ workers|직원을 고용하다 [E]
20-7|hire|(동) 고용하다|hire a lawyer|변호사를 고용하다 [H]
20-7|define|(동) 정의하다, 규정하다|define the meaning|의미를 정의하다
20-7|donate|(동) 기부[기증]하다|donate money|돈을 기부하다
20-7|average|(명) 평균, 표준 (형) 평균의|above average|평균 이상
20-7|gender|(명) 성, 성별|gender equality|성 평등
20-7|invest|(동) 투자하다, (시간, 노력 등을) 쏟다|invest in stocks|주식에 투자하다
20-7|previous|(형) 이전의, 먼저의|previous experience|이전의 경험
20-7|worth|(전) ~의[할] 가치가 있는 (명) 가치, (얼마) 어치|worth seeing|볼 가치가 있는
20-7|alternative|(명) 대안, 양자택일 (형) 대체의, 양자택일의|alternative energy|대체 에너지
20-7|factor|(명) 요인, 요소|key factor|핵심 요인 [F]
20-7|element|(명) 요소, 성분, 원소, 원리|essential element|필수 요소 [E]
20-7|deadly|(형) 치명적인, 극도의 (부) 죽은 듯이, 극도로|deadly weapon|치명적인 무기
20-7|firm|(형) 단단한, 확고한 (명) 회사 (동) 단단하게 하다|law firm|법률 회사
20-7|independence|(명) 독립, 자립|declaration of independence|독립 선언
20-7|occasion|(명) 때, 경우, 행사|special occasion|특별한 행사
20-7|publish|(동) 출판[발행]하다, 발표하다|publish a book|책을 출판하다
20-7|appearance|(명) 겉모습, 외모, 출현|judge by appearance|외모로 판단하다
20-7|appoint|(동) 지명하다, (시간, 장소 등을) 정하다|appoint a committee|위원회를 임명하다
20-7|blend|(동) 혼합하다, 조화하다, 조화되다 (명) 혼합(물)|blend coffee beans|커피 원두를 섞다
20-7|barrier|(명) 장벽, 장애물, 한계|language barrier|언어 장벽 [B]
20-7|obstacle|(명) 장애(물)|overcome an obstacle|장애물을 극복하다 [O]
20-7|detect|(동) 발견하다, 탐지하다, 감지하다|detect a lie|거짓말을 간파하다
20-7|education|(명) 교육, 훈련|higher education|고등 교육
20-7|enormous|(형) 거대한, 막대한|enormous impact|막대한 영향 [E]
20-7|vast|(형) 거대한, 방대한|vast area|방대한 지역 [V]
20-7|tiny|(형) 아주 작은(적은)|tiny insect|아주 작은 곤충
20-7|ordinary|(형) 평범한, 보통의|ordinary people|평범한 사람들
20-7|application|(명) 적용, 지원, 신청(서)|job application|입사 지원
20-7|reasonable|(형) 합리적인, 분별 있는, (가격이) 적정한|reasonable price|합리적인 가격
20-7|abandon|(동) 버리다, 포기하다|abandon hope|희망을 버리다
20-7|get used to|~에 익숙해지다|get used to the cold|추위에 익숙해지다
20-7|figure out|~을 알아내다, ~을 이해하다|figure out a solution|해결책을 알아내다


20-8|accurate|(형) 정확한, 정밀한|accurate information|정확한 정보 [A]
20-8|precise|(형) 정확한, 정밀한, 꼼꼼한|precise measurement|정밀한 측정 [P]
20-8|estimate|(동) 추정하다, 평가하다 (명) 추정, 견적|estimate the cost|비용을 추정하다
20-8|compete|(동) 경쟁하다, 겨루다|compete with others|타인과 경쟁하다
20-8|submit|(동) 제출하다, 굴복하다|submit a report|보고서를 제출하다
20-8|grab|(동) 붙잡다, 움켜잡다 (명) 움켜잡음|grab a bite|간단히 먹다
20-8|theory|(명) 이론, 학설|evolution theory|진화론
20-8|document|(명) 문서, 서류 (동) 기록하다|official document|공식 문서
20-8|enable|(동) 가능하게 하다|enable him to go|그가 가는 것을 가능하게 하다
20-8|avoid|(동) 피하다, 막다|avoid mistakes|실수를 피하다 [A]
20-8|escape|(동) 달아나다, 탈출하다 (명) 탈출, 도망|escape from reality|현실에서 도피하다 [E]
20-8|innovate|(동) 혁신하다, 쇄신하다|innovate technology|기술을 혁신하다
20-8|insight|(명) 통찰력, 이해|deep insight|깊은 통찰력
20-8|insurance|(명) 보험|health insurance|건강 보험
20-8|infection|(명) 감염, 전염|prevent infection|감염을 예방하다
20-8|vehicle|(명) 차량, 탈것, 운송 수단|electric vehicle|전기차
20-8|belong|(동) 속하다, 제자리에 있다|belong to a club|동아리에 속하다
20-8|celebrate|(동) 기념하다, 축하하다, 찬양하다|celebrate a birthday|생일을 축하하다
20-8|demonstrate|(동) 시범을 보이다, 증명하다|demonstrate ability|능력을 보여주다
20-8|disaster|(명) 재난, 재앙|natural disaster|자연재해
20-8|economic|(형) 경제의, 경제학의|economic growth|경제 성장
20-8|household|(명) 가족, 가정 (형) 가족[가정]의|household chores|집안일
20-8|assign|(동) 할당하다, 임명하다, 지정하다|assign homework|숙제를 내주다
20-8|transfer|(동) 옮기다, 갈아타다 (명) 이동, 이전, 환승|transfer files|파일을 전송하다
20-8|preserve|(동) 보존하다, 지키다, 저장하다|preserve traditions|전통을 보존하다
20-8|opposite|(형) 정반대의, 맞은편의 (명) 정반대의 것|opposite direction|반대 방향
20-8|satisfaction|(명) 만족(감)|customer satisfaction|고객 만족
20-8|comfort|(명) 편안함, 위로 (동) 편하게 하다, 위로하다|seek comfort|안락함을 찾다 [C]
20-8|ease|(명) 편안함, 용이함 (동) 편하게 하다, 덜어 주다|ease the pain|고통을 덜어주다 [E]
20-8|motion|(명) 운동, 움직임, 동작 (동) 몸짓으로 신호하다|slow motion|슬로 모션
20-8|operation|(명) 수술, 운영, 작업|rescue operation|구조 작업
20-8|blame|(동) 비난하다, ~의 책임(탓)으로 돌리다 (명) 비난, 책임|blame oneself|자신을 탓하다
20-8|refreshing|(형) 상쾌하게 하는, 신선한|refreshing drink|상쾌한 음료
20-8|trend|(명) 경향, 추세, 유행|fashion trend|패션 유행
20-8|journal|(명) 신문, 간행물, 일기|keep a journal|일기를 쓰다
20-8|private|(형) 사적인, 사유의, 비밀의|private life|사생활
20-8|sentence|(명) 문장, 판결, 선고 (동) 판결을 내리다|life sentence|종신형
20-8|majority|(명) (대)다수, 대부분|the majority of people|대다수의 사람들
20-8|dozens of|수십의, 많은|dozens of times|수십 번
20-8|rather than|~보다는, ~ 대신에, ~하지 말고|A rather than B|B보다는 A



20-9|punish|(동) 처벌하다|punish severely|엄격하게 처벌하다
20-9|civilization|(명) 문명|ancient civilization|고대 문명
20-9|construct|(동) 건설하다|construct a bridge|다리를 건설하다
20-9|recall|(동) 상기하다|recall a memory|기억을 되살리다
20-9|gradually|(부) 점차|gradually increase|점차 증가하다
20-9|delay|(명) 지연 (동) 미루다, 연기하다|flight delay|비행기 지연
20-9|genetic|(형) 유전적인|genetic engineering|유전 공학
20-9|sustainable|(형) 지속 가능한|sustainable development|지속 가능한 발전
20-9|register|(동) 등록하다|register for a course|수강 신청하다
20-9|rotate|(동) 회전하다|Earth rotates.|지구는 자전한다.
20-9|declare|(동) 선언하다|declare independence|독립을 선언하다
20-9|reputation|(명) 평판|good reputation|좋은 평판
20-9|settle|(동) 정착하다, 해결하다|settle down|정착하다
20-9|agent|(명) 대리인|travel agent|여행사 직원
20-9|crisis|(명) 위기|economic crisis|경제 위기
20-9|guilty|(형) 유죄의|feel guilty|죄책감을 느끼다
20-9|innocent|(형) 무죄의|innocent people|무고한 사람들
20-9|analyze|(동) 분석하다|analyze data|데이터를 분석하다
20-9|commit|(동) 저지르다, 헌신하다|commit suicide|자살하다
20-9|comment|(명) 논평 (동) 비평하다|no comment|할 말 없음
20-9|edit|(동) 편집하다|edit a video|영상을 편집하다
20-9|equip|(동) 갖추다|equip with tools|도구를 갖추다
20-9|genius|(명) 천재|musical genius|음악 천재
20-9|adequate|(형) 적절한|adequate supply|충분한 공급 [AD]
20-9|aggressive|(형) 공격적인|aggressive behavior|공격적인 행동
20-9|load|(명) 짐 (동) 싣다|heavy load|무거운 짐
20-9|manufacture|(동) 제조하다 (명) 제조|manufacture cars|자동차를 제조하다
20-9|acknowledge|(동) 인정하다|acknowledge receipt|수령을 알리다(인정하다) [AC]
20-9|deny|(동) 부인하다|deny the fact|사실을 부인하다
20-9|behavior|(명) 행동|strange behavior|이상한 행동
20-9|mature|(형) 성숙한|mature person|성숙한 사람
20-9|thrust|(동) 밀다 (명) 밀기|thrust forward|앞으로 밀다
20-9|corporate|(형) 기업의|corporate culture|기업 문화
20-9|severe|(형) 심한|severe pain|심한 고통
20-9|alert|(형) 경계하는 (동) 알리다 (명) 경보|Stay alert.|경계를 늦추지 마라.
20-9|violent|(형) 폭력적인|violent movie|폭력적인 영화
20-9|glow|(동) 빛나다 (명) 불빛|glow in the dark|어둠 속에서 빛나다
20-9|guarantee|(동) 보장하다 (명) 보증|guarantee quality|품질을 보장하다
20-9|be based on|~에 근거하다|be based on facts|사실에 근거하다
20-9|remind A of B|A에게 B를 상기시키다|remind me of home|고향을 생각나게 하다


20-10|obvious|(형) 명백한, 분명한|obvious reason|명백한 이유 [O]
20-10|apparent|(형) 분명한, 외관상의|apparent failure|명백한 실패 [A]
20-10|persist|(동) 고집하다, 지속되다|persist in doing|계속하다
20-10|temporary|(형) 일시적인, 임시의|temporary job|임시직
20-10|permanent|(형) 영구적인, 영원한|permanent resident|영주권자
20-10|rescue|(동) 구조하다 (명) 구조, 구출|rescue team|구조대
20-10|embrace|(동) 받아들이다, 수용하다, 포옹하다|embrace change|변화를 받아들이다
20-10|tremble|(동) 떨다, 흔들리다, 걱정하다 (명) 떨림|tremble with fear|공포에 떨다
20-10|ancestor|(명) 조상, 선조|common ancestor|공통 조상
20-10|cautious|(형) 조심스러운, 신중한|Be cautious.|조심해라.
20-10|clarify|(동) 명확히(분명히)하다, 정화하다|clarify the meaning|의미를 명확히 하다
20-10|drag|(동) 끌다, 끌리다 (명) 끌기, 장애물|drag and drop|끌어다 놓다
20-10|horizontal|(형) 수평(선)의, 가로의|horizontal line|수평선
20-10|vertical|(형) 수직의, 세로의|vertical line|수직선
20-10|remarkable|(형) 주목할 만한, 놀랄 만한, 훌륭한|remarkable achievement|놀라운 성취
20-10|individual|(명) 개인 (형) 개개의, 개인적인|individual rights|개인의 권리
20-10|memorize|(동) 암기하다, 기억하다|memorize words|단어를 암기하다
20-10|retire|(동) 퇴직하다, 철수하다|retire from work|직장에서 은퇴하다
20-10|athlete|(명) 운동선수|professional athlete|프로 운동선수
20-10|victim|(명) 희생, 희생자|war victim|전쟁 희생자
20-10|aboard|(부) (배, 항공기 등을) 타고|Welcome aboard.|탑승을 환영합니다.
20-10|departure|(명) 출발, 출항|departure time|출발 시간
20-10|broaden|(동) 넓어지다, 넓히다|broaden horizons|시야를 넓히다 [B]
20-10|extend|(동) 넓히다, 연장하다, 뻗다|extend the deadline|마감을 연장하다 [E]
20-10|sacrifice|(명) 희생, 제물 (동) 희생하다|sacrifice for love|사랑을 위해 희생하다
20-10|devise|(동) 고안하다, 발명하다|devise a plan|계획을 고안하다
20-10|electricity|(명) 전기|generate electricity|전기를 생산하다
20-10|logical|(형) 논리적인, 타당한|logical thinking|논리적 사고
20-10|inherit|(동) 물려받다, 이어받다, 상속받다|inherit a fortune|재산을 상속받다
20-10|length|(명) 길이, 시간|full length|전체 길이
20-10|initial|(형) 처음의, 초기의 (명) 머리글자|initial stage|초기 단계
20-10|qualified|(형) 자격 있는, 적임의|qualified teacher|자격 있는 교사
20-10|reform|(동) 개혁하다, 개선하다 (명) 개혁, 개선|reform the system|시스템을 개혁하다
20-10|regulate|(동) 통제하다, 조절하다|regulate traffic|교통을 통제하다
20-10|delicate|(형) 섬세한, 연약한, 정교한|delicate skin|연약한 피부
20-10|resist|(동) 저항하다, 견디다|resist temptation|유혹에 저항하다
20-10|restrict|(동) 제한하다, 한정하다|restrict access|접근을 제한하다
20-10|possess|(동) 소유하다, 지니다, 사로잡다|possess wisdom|지혜를 소유하다
20-10|be related to|~와 관계가 있다|be related to health|건강과 관련되다
20-10|contribute to|~에 기여하다|contribute to society|사회에 공헌하다

20-11|population|(명) 인구, 주민, 개체군|growing population|증가하는 인구
20-11|foster|(동) 양육하다, 육성하다, 촉진하다|foster creativity|창의성을 육성하다 [F]
20-11|nurture|(동) 양육하다, 육성하다|nurture talent|재능을 키우다(양육하다) [N]
20-11|available|(형) 이용할[얻을] 수 있는, 시간이 있는|Is it available?|이용 가능한가요?
20-11|discover|(동) 발견하다, 알아내다, 발굴하다|discover a planet|행성을 발견하다
20-11|carbon|(명) 탄소|carbon dioxide|이산화탄소
20-11|pressure|(명) 압력, 압박(감)|blood pressure|혈압
20-11|accuse|(동) 고발하다, 비난하다|accuse of theft|절도로 고발하다
20-11|outstanding|(형) 뛰어난, 눈부신, 현저한|outstanding work|뛰어난 작품
20-11|conversation|(명) 대화, 대담|private conversation|사적인 대화
20-11|massive|(형) 거대한, 대량의|massive star|거대한 별
20-11|analogy|(명) 비유, 유사, 유추|use an analogy|비유를 사용하다
20-11|wound|(동) 상처를 입히다, 감정을 상하게 하다 (명) 상처|heal the wound|상처를 치료하다
20-11|cause|(동) 원인이 되다, 야기[초래]하다 (명) 원인|cause and effect|원인과 결과
20-11|consequence|(명) 결과, 영향(력), 중요함|face the consequences|결과를 직면하다
20-11|election|(명) 선거, 당선|win an election|선거에서 이기다
20-11|trace|(동) 추적하다, 추적하여 찾아내다 (명) 흔적|trace the origin|기원을 추적하다
20-11|wire|(명) 철사, 전선 (동) 연결하다|copper wire|구리선
20-11|restore|(동) 회복시키다, 복원하다, 되찾다|restore health|건강을 회복하다
20-11|cognitive|(형) 인식의, 인지의|cognitive ability|인지 능력
20-11|biological|(형) 생물학의, 생(물)체의|biological clock|생체 시계
20-11|ability|(명) 능력, 재능|ability to read|읽는 능력 [A]
20-11|capacity|(명) 용량, 수용력, 능력|memory capacity|기억 용량 [C]
20-11|ingredient|(명) 재료, 성분, 구성 요소|main ingredient|주재료
20-11|adversity|(명) 역경, 불운|overcome adversity|역경을 극복하다
20-11|intelligent|(형) 지적인, 지성을 갖춘|intelligent life|지적 생명체
20-11|multiple|(형) 다수의, 많은, 복합적인|multiple choices|다중 선택
20-11|exotic|(형) 외국의, 이국적인|exotic fruit|이국적인 과일
20-11|reference|(명) 언급, 참조, 추천서, 참고 문헌|for reference|참조용으로
20-11|scatter|(동) 뿌리다, 흩어지다[흩어지게 하다]|scatter seeds|씨를 흩뿌리다
20-11|conflict|(명) 갈등, 충돌 (동) 충돌하다|resolve conflict|갈등을 해결하다 [C]
20-11|friction|(명) 마찰, 갈등|reduce friction|마찰을 줄이다 [F]
20-11|asset|(명) 자산, 재산|valuable asset|귀중한 자산
20-11|professional|(형) 직업의, 전문적인 (명) 전문가|professional player|프로 선수
20-11|disclose|(동) 밝히다, 폭로하다, 드러내다|disclose information|정보를 공개하다
20-11|negotiate|(동) 협상[교섭]하다, 타결하다|negotiate a deal|거래를 협상하다
20-11|split|(동) 나누다[나뉘다], 분열하다, 갈라지다 (명) 분열|split the bill|계산을 나눠서 하다
20-11|have difficulty -ing|~하는 데 어려움을 겪다|have difficulty sleeping|잠자는 데 어려움을 겪다
20-11|go through|~을 겪다, ~을 거치다, ~을 조사하다|go through hard times|힘든 시기를 겪다
20-11|be regarded as|~으로 간주되다[여겨지다]|be regarded as a hero|영웅으로 여겨지다

20-12|modern|(형) 현대의 (명) 현대인|modern society|현대 사회 [M]
20-12|contemporary|(형) 동시대의, 현대의, 당대의|contemporary art|현대 미술 [C]
20-12|urgent|(형) 긴급한, 시급한|urgent matter|긴급한 문제
20-12|relevant|(형) 관련된, 적절한, 유의미한|relevant to the topic|주제와 관련된
20-12|explicit|(형) 분명한, 명백한, 솔직한|explicit instruction|명확한 지시
20-12|approve|(동) 승인하다, 찬성하다, 인가하다|approve the plan|계획을 승인하다
20-12|confront|(동) 맞서다, 직면하게 만들다|confront danger|위험에 직면하다
20-12|poverty|(명) 가난, 빈곤|fight against poverty|빈곤과 싸우다
20-12|wealth|(명) 부, 재산, 풍부|accumulate wealth|부를 축적하다
20-12|integrate|(동) 통합하다, 통합되다|integrate systems|시스템을 통합하다
20-12|destructive|(형) 파괴적인|destructive power|파괴력
20-12|hierarchy|(명) 위계, 계급(제), 지배층|social hierarchy|사회 계급
20-12|expertise|(명) 전문 지식(기술)|tech expertise|기술 전문 지식
20-12|reproduce|(동) 복제하다, 재생하다, 번식하다|reproduce quickly|빠르게 번식하다
20-12|frequency|(명) 빈도, 빈번함, 진동(수), 주파수|high frequency|높은 빈도
20-12|identical|(형) 동일한, 일치하는|identical twins|일란성 쌍둥이
20-12|reinforce|(동) 강화하다, 증강하다, 보강하다|reinforce concrete|콘크리트를 보강하다 [R]
20-12|strengthen|(동) 강화하다, 견고히 하다|strengthen muscles|근육을 강화하다 [S]
20-12|industrial|(형) 산업의, 공업의|industrial revolution|산업 혁명
20-12|classify|(동) 분류하다, 구분하다|classify books|책을 분류하다
20-12|mutual|(형) 상호 간의, 서로의, 공동[공통]의|mutual trust|상호 신뢰
20-12|decorate|(동) 장식하다, 꾸미다|decorate a room|방을 장식하다
20-12|potential|(형) 잠재적인, 가능성 있는|full potential|무한한 잠재력 [PO]
20-12|possibility|(명) 가능성, 실현성, 장래성|no possibility|가능성 없음 [PS]
20-12|implement|(동) 이행하다, 실행하다 (명) 도구|implement a policy|정책을 실행하다
20-12|widespread|(형) 널리 퍼진, 광범위한|widespread belief|널리 퍼진 믿음
20-12|resemble|(동) 닮다, 유사하다|resemble mother|엄마를 닮다
20-12|fundamental|(형) 근본적인, 본질적인, 필수적인|fundamental right|기본 권리
20-12|enthusiastic|(형) 열정적인, 열렬한, 열심인|enthusiastic fan|열성 팬
20-12|consult|(동) 상담하다, 상의하다, 참고하다|consult a doctor|의사와 상담하다
20-12|disadvantage|(명) 단점, 약점, 불이익|weigh the disadvantages|단점을 따져보다 [12]
20-12|drawback|(명) 단점, 결점, 장애|main drawback|주된 결점 [8]
20-12|steady|(형) 꾸준한, 한결같은|steady growth|꾸준한 성장
20-12|primitive|(형) 원시의, 원시적인|primitive man|원시인
20-12|dominant|(형) 우세한, 지배적인|dominant species|지배종
20-12|inhabit|(동) 거주하다, 살다|inhabit the earth|지구에 거주하다
20-12|adolescence|(명) 청소년기|during adolescence|청소년기에
20-12|attach|(동) 붙이다, 첨부하다|attach a file|파일을 첨부하다
20-12|in terms of|~의 관점에서, ~에 관해서|in terms of cost|비용 면에서
20-12|bring about|~을 야기[초래]하다, ~을 유발하다|bring about change|변화를 가져오다


20-13|applause|(명) 박수갈채|Round of applause.|박수갈채.
20-13|glance|(동) 흘긋 보다 (명) 흘긋 봄|glance at a watch|시계를 힐끗 보다
20-13|crawl|(동) 기어가다, 서행하다 (명) 기어가기, 서행|crawl on knees|무릎으로 기어가다
20-13|hesitate|(동) 주저하다, 망설이다|Don't hesitate.|주저하지 마라.
20-13|make sense of|~을 이해하다, ~을 파악하다|Make sense of it.|그것을 이해하다.
20-13|eager|(형) 열망하는, 열심인|eager to learn|배우기를 열망하는
20-13|impatient|(형) 참을 수 없는, 성급한|get impatient|참을성이 없어지다
20-13|frank|(형) 솔직한, 숨김없는|to be frank|솔직히 말해서
20-13|arrogant|(형) 거만한, 오만한|arrogant attitude|거만한 태도
20-13|humble|(형) 겸손한, 비천한|Be humble.|겸손해라.
20-13|awkward|(형) 서투른, 어색한|awkward silence|어색한 침묵
20-13|sincere|(형) 진실된, 진심의|sincere apology|진심 어린 사과
20-13|genuine|(형) 진짜의, 진실한|genuine leather|진짜 가죽
20-13|anticipate|(동) 기대하다, 예상하다|anticipate trouble|문제를 예상하다
20-13|responsible|(형) 책임감 있는, 책임이 있는|be responsible for|~에 책임이 있다
20-13|tolerate|(동) 참다, 견디다, 용인하다|tolerate pain|고통을 참다 [T]
20-13|endure|(동) 견디다, 참다|endure hardship|고난을 견디다 [E]
20-13|put up with|~을 참다, ~을 참고 견디다|put up with noise|소음을 참다 [3]
20-13|depression|(명) 우울(증), 불황|severe depression|심한 우울증
20-13|ashamed|(형) 부끄러워하는|be ashamed of|~을 부끄러워하다
20-13|delight|(명) 기쁨 (동) 기쁘게 하다|with delight|기꺼이(기쁨으로)
20-13|fascinated|(형) 매료된, 매혹된|fascinated by art|예술에 매료된
20-13|resent|(동) 화를 내다, 분개하다|resent the treatment|대우에 분개하다
20-13|irritate|(동) 짜증나게 하다, 거슬리다|irritate skin|피부를 자극하다
20-13|humiliate|(동) 창피를 주다, 굴욕감을 느끼게 하다|feel humiliated|창피함을 느끼다
20-13|impulse|(명) 충동|on impulse|충동적으로
20-13|reluctant|(형) 마음 내키지 않는, 마지못한|reluctant to go|가기를 꺼리는
20-13|astonished|(형) 깜짝 놀란|be astonished at|~에 깜짝 놀라다
20-13|miserable|(형) 비참한, 불쌍한|miserable life|비참한 삶
20-13|arouse|(동) 불러일으키다, 유발하다, 깨우다|arouse interest|흥미를 불러일으키다
20-13|frustrated|(형) 좌절감을 느끼는|feel frustrated|좌절감을 느끼다
20-13|empathy|(명) 감정 이입, 공감|have empathy|공감하다
20-13|offend|(동) 감정을 상하게 하다|offend a friend|친구의 기분을 상하게 하다
20-13|compassion|(명) 동정, 연민|show compassion|연민을 보이다
20-13|despair|(명) 절망 (동) 절망하다|in deep despair|깊은 절망에 빠져
20-13|confident|(형) 자신감 있는, 확신하는|Be confident.|자신감을 가져라.
20-13|jealous|(형) 질투하는|be jealous of|~을 질투하다
20-13|ridiculous|(형) 터무니없는, 어리석은, 우스운|ridiculous idea|터무니없는 생각
20-13|generous|(형) 관대한, 후한|generous donation|후한 기부
20-13|faithful|(형) 충실한|faithful dog|충실한 개


20-14|occupation|(명) 직업, 점유|choosing an occupation|직업 선택
20-14|supervise|(동) 감독하다, 관리하다, 통제하다|supervise work|일을 감독하다
20-14|specialize|(동) 전문적으로 하다, 전공하다|specialize in law|법을 전공하다
20-14|bond|(명) 유대, 결속, 채권|strong bond|강한 유대감
20-14|certificate|(명) 증명서, 자격증|gift certificate|상품권
20-14|chief|(명) (단체의) 장, 우두머리 (형) 주요한, 최고의|chief editor|편집장
20-14|collaborate|(동) 협력하다|collaborate with others|타인과 협력하다
20-14|deprive|(동) 박탈하다|deprive of sleep|잠을 빼앗다
20-14|colleague|(명) (직장) 동료|work colleague|직장 동료
20-14|shift|(동) 바꾸다, 이동하다 (명) 변화, 이동, 교대|night shift|야간 근무
20-14|outcome|(명) 결과, 성과|final outcome|최종 결과
20-14|exceed|(동) 넘어서다, 초과하다|exceed the limit|한도를 초과하다
20-14|procedure|(명) 절차, 수순|safety procedure|안전 절차
20-14|attendant|(명) 종업원, 수행원|flight attendant|승무원
20-14|negotiation|(명) 협상|peace negotiation|평화 협상
20-14|incentive|(명) 동기, 유인, 장려(책)|give an incentive|인센티브를 주다
20-14|strategy|(명) 전략|marketing strategy|마케팅 전략
20-14|challenge|(명) 도전, 난관 (동) 도전하다|face a challenge|도전에 직면하다
20-14|routine|(명) 일과, 늘 하던 방식 (형) 일상적인|daily routine|일과
20-14|shelter|(명) 피난처, 주거지, 보호소 (동) 보호하다, 피하다|find shelter|피난처를 찾다
20-14|withdraw|(동) 인출하다, 철회하다|withdraw money|돈을 인출하다 [W]
20-14|deposit|(동) 예금하다, 맡기다 (명) 예금, 보증금|deposit money|돈을 예금하다 [D]
20-14|secure|(형) 안전한, 안정된 (동) 안전하게 하다|secure job|안정된 직업
20-14|chore|(명) 허드렛일, 집안일|household chores|집안일
20-14|react|(동) 반응하다, 반작용하다|react to stimuli|자극에 반응하다
20-14|urban|(형) 도시의|urban area|도시 지역
20-14|rural|(형) 시골의|rural life|시골 생활
20-14|complicated|(형) 복잡한|complicated problem|복잡한 문제
20-14|resident|(명) 거주자, 레지던트 (형) 거주하는|local resident|지역 주민
20-14|familiar|(형) 익숙한, 친숙한, 잘 아는|familiar face|낯익은 얼굴
20-14|miracle|(명) 기적|it's a miracle|기적이다
20-14|companion|(명) 동반자, 동행, 친구|travel companion|여행 동반자 [C]
20-14|keep up with|~에 뒤처지지 않다, ~을 따라가다|keep up with trends|유행을 따라가다 [3]
20-14|make the most of|~을 최대한 활용하다|make the most of time|시간을 최대한 활용하다 [4]
20-14|exchange|(명) 교환, 환전 (동) 교환하다, 환전하다|exchange gifts|선물을 교환하다
20-14|strain|(명) 긴장, 부담 (동) 긴장시키다, 혹사하다|eye strain|눈의 피로
20-14|adventure|(명) 모험|go on an adventure|모험을 떠나다
20-14|destination|(명) 목적지, 도착지, 목표|final destination|최종 목적지
20-14|accompany|(동) 동행하다, 수반하다|accompany a friend|친구와 동행하다 [A]
20-14|remote|(형) 먼, 외진, 원격의|remote control|원격 조종


20-15|dominate|(동) 지배하다, 우세하다|dominate the market|시장을 장악하다 [D]
20-15|govern|(동) 통치하다, 지배(좌우)하다|govern a country|나라를 통치하다 [G]
20-15|domestic|(형) 국내의, 가정의|domestic flight|국내선 비행기
20-15|territory|(명) 영토, 세력권|enemy territory|적의 영토
20-15|wield|(동) (권력을) 행사하다, (무기를) 휘두르다|wield power|권력을 휘두르다
20-15|region|(명) 지역, 지방, 영역|tropical region|열대 지방
20-15|immigration|(명) 이민, 이주|illegal immigration|불법 이민
20-15|diplomat|(명) 외교관|foreign diplomat|외국 외교관
20-15|candidate|(명) 후보자|presidential candidate|대통령 후보
20-15|compromise|(동) 타협하다, 손상시키다 (명) 타협|reach a compromise|타협에 이르다
20-15|radical|(형) 급진적인, 과격한 (명) 급진주의자|radical change|급진적인 변화
20-15|administration|(명) 관리, 경영, 행정부|Obama administration|오바마 행정부
20-15|executive|(명) 중역, 간부, 경영진 (형) 실행하는|chief executive officer|최고 경영자(ceo)
20-15|refuge|(명) 피난, 은신처, 위안|take refuge|피난하다
20-15|authority|(명) 권위, 당국|moral authority|도덕적 권위
20-15|democracy|(명) 민주주의, 민주 국가|restore democracy|민주주의를 회복하다
20-15|in charge of|~할 책임이 있는, ~을 담당하는|be in charge of|~을 담당하다
20-15|suspect|(동) 의심하다 (명) 용의자|main suspect|유력 용의자
20-15|sue|(동) 고소하다, 소송을 제기하다|sue for damages|손해 배상 청구 소송을 하다
20-15|violate|(동) 위반하다, 침해하다|violate the law|법을 위반하다
20-15|patent|(명) 특허, 특허권 (동) 특허를 받다|apply for a patent|특허를 출원하다
20-15|equivalent|(형) 동동한, 상당하는 (명) 동등한 것|equivalent to money|돈과 동등한
20-15|witness|(명) 목격자, 증인 (동) 목격하다, 증언하다|eye witness|목격자
20-15|priority|(명) 우선 사항, 우선권|top priority|최우선 순위
20-15|ban|(동) 금지하다 (명) 금지|ban smoking|흡연을 금지하다
20-15|imprison|(동) 투옥하다, 감금하다|be imprisoned|투옥되다
20-15|justify|(동) 정당화하다|justify an action|행동을 정당화하다
20-15|privilege|(명) 특권, 특혜 (동) 특권을 주다|special privilege|특권
20-15|dispute|(명) 논쟁, 분쟁 (동) 논쟁하다, 반박하다|border dispute|국경 분쟁
20-15|regardless of|~에 상관없이|regardless of age|나이에 상관없이
20-15|fund|(명) 기금, 자금 (동) 자금을 대다|raise funds|자금을 모으다
20-15|promote|(동) 촉진하다, 홍보하다, 승진시키다|promote health|건강을 증진하다
20-15|owe|(동) 빚지다, 신세지다|owe money|돈을 빚지다
20-15|debt|(명) 빚, 부채|pay off debt|빚을 갚다
20-15|commission|(명) 수수료, 위원회|sales commission|판매 수수료
20-15|refund|(명) 환불 (동) 환불하다|full refund|전액 환불
20-15|distribute|(동) 배포하다, 분배하다|distribute food|음식을 나눠주다
20-15|property|(명) 재산, 특성|private property|사유 재산
20-15|commodity|(명) 상품, 물품, 일용품|basic commodity|생필품
20-15|industrialize|(동) 산업화하다|industrialized nation|산업화된 국가



20-16|mixture|(명) 혼합, 혼합물|complex mixture|복잡한 혼합물
20-16|burst|(동) 폭발하다, 터뜨리다 (명) 파열|burst into tears|왈칵 울음을 터뜨리다
20-16|method|(명) 방법, 수단|scientific method|과학적 방법
20-16|laboratory|(명) 실험실 (형) 실험용의|research laboratory|연구 실험실
20-16|observation|(명) 관찰, 관측, 의견|careful observation|주의 깊은 관찰
20-16|toxic|(형) 독성의, 유독한|toxic waste|유독성 폐기물
20-16|vapor|(명) 증기, 수증기 (동) 증발하다|water vapor|수증기
20-16|gas|(명) 기체|natural gas|천연가스
20-16|fluid|(명) 유체, 유동체 (형) 유동체의|body fluid|체액 [F]
20-16|liquid|(명) 액체 (형) 액체의, 유동체의|liquid state|액체 상태 [L]
20-16|solid|(명) 고체 (형) 고체의, 견고한|solid evidence|확실한 증거
20-16|metal|(명) 금속|precious metal|귀금속
20-16|extract|(동) 추출하다, 뽑아내다 (명) 추출물|extract oil|기름을 추출하다
20-16|hypothesis|(명) 가설, 가정|test a hypothesis|가설을 검증하다
20-16|gravity|(명) 중력, 중대성|law of gravity|중력의 법칙
20-16|particle|(명) 입자, 극소량|tiny particle|아주 작은 입자
20-16|component|(명) 성분, 구성 요소, 부품|key component|핵심 구성 요소
20-16|molecule|(명) 분자, 미량|water molecule|물 분자
20-16|keep A from -ing|~가 ~하는 것을 막다|keep him from going|그가 가는 것을 막다 [4]
20-16|habitat|(명) 서식지, 주거지|natural habitat|자연 서식지
20-16|species|(명) 종, 종류|endangered species|멸종 위기종
20-16|mammal|(명) 포유동물|marine mammal|해양 포유류
20-16|predator|(명) 포식자, 약탈자|top predator|최상위 포식자
20-16|migrate|(동) 이주하다, 이동하다|Birds migrate.|새들이 이동하다.
20-16|survive|(동) 살아남다, 생존하다, 견디다|survive in the wild|야생에서 살아남다
20-16|skeleton|(명) 해골, 뼈대|human skeleton|인간의 뼈대
20-16|nerve|(명) 신경|nerve cell|신경 세포
20-16|stem|(명) 줄기 (동) 유래하다|stem from|~에서 유래하다
20-16|organism|(명) 유기체, 생물|living organism|살아있는 유기체
20-16|branch|(명) 나뭇가지, 지점, 분과|branch office|지점
20-16|tissue|(명) 조직, 화장지|muscle tissue|근육 조직
20-16|come up with|~을 생각해 내다|come up with an idea|아이디어를 생각해 내다 [3]
20-16|volcanic|(형) 화산의, 화산 작용에 의한|volcanic eruption|화산 폭발
20-16|vibrate|(동) 떨다, 진동하다, 울리다|Phone vibrates.|전화기가 진동한다.
20-16|layer|(명) 층 (동) 층층이 쌓다|ozone layer|오존층
20-16|temperature|(명) 온도, 기온, 체온|room temperature|상온(실온)
20-16|glacier|(명) 빙하|melting glaciers|녹는 빙하들
20-16|astronomy|(명) 천문학|study astronomy|천문학을 공부하다
20-16|ray|(명) 빛, 광선|x-ray|엑스선
20-16|consist of|~으로 이루어지다[구성되다]|consist of water|물로 구성되다 [2]


20-17|conquer|(동) 정복하다, 극복하다, 이기다|conquer fear|두려움을 정복하다(극복하다)
20-17|heritage|(명) 유산|cultural heritage|문화 유산
20-17|artificial|(형) 인공의, 인위적인, 인조의|artificial intelligence|인공 지능
20-17|conventional|(형) 전통적인, 관습적인|conventional wisdom|사회적 통념
20-17|colonial|(형) 식민지의|colonial period|식민지 시대
20-17|noble|(형) 귀족의, 고귀한 (명) 귀족|noble deed|고귀한 행위
20-17|ascend|(동) 오르다, 올라가다|ascend the throne|왕위에 오르다
20-17|empower|(동) 권능을 주다, 권한을 주다|empower women|여성에게 권한을 주다
20-17|be derived from|~에서 유래하다, ~에서 파생되다|be derived from Latin|라틴어에서 유래하다 [3]
20-17|take - into account|~을 고려[참작]하다|take it into account|그것을 고려하다 [3]
20-17|philosophy|(명) 철학|moral philosophy|도덕 철학
20-17|profound|(형) 심오한, 깊은|profound effect|심오한 영향
20-17|shallow|(형) 얕은, 피상적인, 천박한|shallow water|얕은 물
20-17|oppose|(동) 반대하다, 방해하다, 대항하다|oppose the plan|계획에 반대하다
20-17|spirit|(명) 정신, 영혼|team spirit|협동심
20-17|ritual|(명) 의식 (형) 의식의, 의례적인|religious ritual|종교 의식
20-17|substance|(명) 물질, 실체, 본질|toxic substance|유독 물질
20-17|prejudice|(명) 편견 (동) 편견을 갖게 하다|racial prejudice|인종적 편견 [P]
20-17|bias|(명) 편견, 편향 (동) 편견[선입견]을 갖게 하다|gender bias|성차별 [B]
20-17|ultimate|(형) 궁극적인, 최후의, 최고의|ultimate goal|궁극적인 목표
20-17|absolute|(형) 절대적인, 완전한|absolute power|절대 권력
20-17|humanity|(명) 인류, 인간성, 인간애|serve humanity|인류에 봉사하다
20-17|draft|(명) 초안, 밑그림 (동) 초안을 작성하다|rough draft|대략적인 초안
20-17|spell|(동) 철자를 말하다 (명) 마법, 한동안|cast a spell|마법을 걸다
20-17|modify|(동) 수정하다, 변형하다|modify the plan|계획을 수정하다
20-17|comic|(형) 희극의, 웃기는|comic book|만화책
20-17|tragic|(형) 비극의, 비참한|tragic ending|비극적인 결말
20-17|simplify|(동) 단순화하다, 간소화하다|simplify the process|과정을 단순화하다
20-17|myth|(명) 신화, 사회적 통념|Greek myth|그리스 신화
20-17|imply|(동) 함축하다, 암시하다|imply a meaning|의미를 암시하다
20-17|context|(명) 맥락, 정황|in this context|이러한 맥락에서
20-17|inherent|(형) 내재하는, 고유의, 타고난|inherent risk|내재적 위험
20-17|outline|(동) 윤곽을 그리다, 개요를 말하다 (명) 개요, 윤곽|outline the plan|계획의 개요를 서술하다
20-17|translate|(동) 번역하다|translate into English|영어로 번역하다
20-17|series|(명) 연속, 시리즈|a series of events|일련의 사건들
20-17|plot|(명) 줄거리, 음모 (동) 음모를 꾸미다|movie plot|영화 줄거리
20-17|paradoxically|(부) 역설적으로|Paradoxically, it helps.|역설적으로, 그것은 도움이 된다. [P]
20-17|ironically|(부) 반어적으로, 역설적으로|Ironically, he lost.|아이러니하게도, 그가 졌다. [I]
20-17|metaphor|(명) 비유, 은유|use a metaphor|은유를 사용하다
20-17|fiction|(명) 소설, 허구|science fiction|공상 과학 소설


20-18|creative|(형) 창의적인|creative thinking|창의적 사고
20-18|abstract|(형) 추상적인 (명) 개요 (동) 추출하다, 요약하다|abstract art|추상 미술
20-18|concrete|(형) 구체적인 (명) 콘크리트|concrete evidence|구체적인 증거
20-18|masterpiece|(명) 걸작, 명작|a true masterpiece|진정한 걸작
20-18|polish|(동) 닦다, 윤(광)내다, 다듬다 (명) 광택제|polish shoes|구두를 닦다
20-18|craft|(명) 공예, 기술 (동) 공들여 만들다|arts and crafts|미술과 공예
20-18|authentic|(형) 진짜의, 진본[진품]인|authentic food|정통(진정한) 음식
20-18|sculpture|(명) 조각 (동) 조각하다|bronze sculpture|청동 조각상
20-18|precious|(형) 귀중한, 소중한|precious stone|보석
20-18|proportion|(명) 비율, 부분, 균형|in proportion to|~에 비례하여
20-18|portrait|(명) 초상화|self-portrait|자화상
20-18|play a role| 역할을 하다|play a role in|~에서 역할을 하다
20-18|elaborate|(형) 정교한, 공들인|elaborate design|정교한 디자인
20-18|external|(형) 외부의|external factor|외부 요인
20-18|internal|(형) 내부의|internal organ|내장 기관
20-18|memorial|(명) 기념물 (형) 기념의, 추도의|war memorial|전쟁 기념비
20-18|differ|(동) 다르다|Opinions differ.|의견이 다르다.
20-18|distinguish|(동) 구별하다|distinguish A from B|A와 B를 구별하다
20-18|contrast|(명) 대조, 대비 (동) 대조를 이루다|in contrast to|~와 대조적으로
20-18|architect|(명) 건축가|famous architect|유명한 건축가
20-18|institute|(명) 연구소, 협회 (동) 설립하다|research institute|연구소
20-18|coordinate|(동) 조정하다 (형) 동등한|coordinate efforts|노력을 조정하다
20-18|collapse|(동) 무너지다, 붕괴하다|Building collapsed.|건물이 붕괴했다.
20-18|entertain|(동) 즐겁게 하다|entertain guests|손님을 즐겁게 하다
20-18|compose|(동) 구성하다, 작곡하다, 조정하다|compose music|음악을 작곡하다
20-18|orchestra|(명) 오케스트라, 관현악단|symphony orchestra|교향악단
20-18|rehearse|(동) 연습(시연)하다, 리허설을 하다|rehearse a play|연극을 연습하다
20-18|popularity|(명) 인기|gain popularity|인기를 얻다
20-18|perform|(동) 공연하다, 실행하다|perform on stage|무대에서 공연하다
20-18|impressive|(형) 인상적인, 감동적인|impressive performance|인상적인 공연
20-18|flash|(동) 번쩍이다 (명) 번쩍임, 플래시|Lightning flashed.|번개가 쳤다.
20-18|harmonize|(동) 조화를 이루다, 화음을 넣다|harmonize with|~와 조화를 이루다
20-18|encounter|(동) 만나다, 마주치다 (명) 마주침|encounter a problem|문제에 부닥치다
20-18|socialize|(동) 사회화하다, 교제하다|socialize with friends|친구들과 어울리다
20-18|imaginative|(형) 상상력이 풍부한, 상상의|imaginative writer|상상력이 풍부한 작가
20-18|magical|(형) 마법의|magical power|마법의 힘
20-18|theme|(명) 주제, 테마|main theme|주요 테마
20-18|entrance|(명) 입장, 입구, 입학|entrance exam|입학 시험
20-18|classical|(형) 고전의, 클래식의|classical music|고전 음악
20-18|be associated with|~와 관련[연관]되다|be associated with risk|위험과 관련되다 [3]


20-19|electronic|(형) 전자의|electronic device|전자기기
20-19|multiply|(동) 곱하다|multiply numbers|수를 곱하다
20-19|upload|(동) 업로드하다 (명) 업로드|upload a file|파일을 업로드하다
20-19|download|(동) 다운로드하다 (명) 다운로드|download music|음악을 다운로드하다
20-19|virtual|(형) 가상의, 사실상의|virtual reality|가상 현실
20-19|activate|(동) 작동시키다, 활성화시키다|activate a system|시스템을 가동하다
20-19|nuclear|(형) 원자력의, 핵의|nuclear energy|핵에너지
20-19|install|(동) 설치하다|install software|소프트웨어를 설치하다
20-19|circuit|(명) 회로, 순환|electric circuit|전기 회로
20-19|maximize|(동) 최대화하다|maximize profit|이익을 극대화하다
20-19|minimize|(동) 최소화하다|minimize risk|위험을 최소화하다
20-19|sort|(명) 종류, 부류 (동) 분류하다|sort by size|크기별로 분류하다
20-19|automatic|(형) 자동의, 무의식적인|automatic door|자동문
20-19|manual|(형) 수동의, 육체노동의 (명) 설명서|manual labor|육체노동
20-19|visual|(형) 시각의, 눈에 보이는 (명) 시각 자료|visual aids|시각 자료
20-19|recharge|(동) 충전하다, 재충전하다|recharge batteries|배터리를 재충전하다
20-19|numerous|(형) 다수의, 수많은|numerous books|수많은 책
20-19|statistics|(명) 통계, 통계 자료, 통계학|according to statistics|통계에 따르면
20-19|angle|(명) 각도|different angle|다른 각도
20-19|equation|(명) 방정식|solve an equation|방정식을 풀다
20-19|ride|(동) (탈것을) 타다, 승마하다 (명) 타고 가기|ride a bike|자전거를 타다
20-19|crash|(동) 추락하다, 충돌하다 (명) 추락, 충돌, 폭락|plane crash|비행기 추락 사고
20-19|rush|(동) 서두르다, 돌진하다|rush hour|혼잡 시간대
20-19|bump|(동) 부딪치다 (명) 혹|bump into|~와 부딪치다
20-19|aircraft|(명) 항공기|military aircraft|군용기
20-19|astronaut|(명) 우주 비행사|become an astronaut|우주 비행사가 되다
20-19|mechanical|(형) 기계의, 역학의, 기계적인|mechanical engineer|기계 공학자
20-19|loosen|(동) 풀다, 느슨하게 하다|loosen the tie|넥타이를 느슨하게 하다
20-19|spare|(형) 여분의, 예비의 (동) 할애하다, 아끼다|spare tire|스페어타이어
20-19|rough|(형) 거친, 대강의|rough surface|거친 표면
20-19|transport|(동) 수송하다, 운반하다 (명) 수송|public transport|대중교통
20-19|passenger|(명) 승객|train passenger|기차 승객
20-19|commute|(동) 통근하다 (명) 통근, 통근 거리(시간)|commute to work|직장으로 통근하다
20-19|inspect|(동) (세밀히) 조사하다|inspect the car|차를 점검하다
20-19|accelerate|(동) 가속하다, 촉진하다|accelerate growth|성장을 가속하다
20-19|navigate|(동) 항해하다, 조종하다, 길을 찾다|navigate the sea|바다를 항해하다
20-19|shipment|(명) 수송, 선적, 수송품|overseas shipment|해외 배송
20-19|assemble|(동) 조립하다, 모으다|assemble a computer|컴퓨터를 조립하다
20-19|have A in common|A를 공통점으로 가지다|have a lot in common|공통점이 많다
20-19|turn A into B|A를 B로 바꾸다|turn water into ice|물을 얼음으로 바꾸다

20-20|physical|(형) 신체의, 물질[물리]적인|physical education|체육
20-20|opponent|(명) 반대자, 경기 상대|defeat an opponent|상대를 물리치다
20-20|target|(명) 목표, 과녁 (동) 목표로 삼다, 겨냥하다|hit the target|과녁을 맞히다
20-20|posture|(명) 자세 (동) 자세를 취하다|good posture|좋은 자세
20-20|track|(명) 트랙, 자국 (동) 추적하다|track location|위치를 추적하다
20-20|row|(명) 줄, 열 (동) 노를 젓다|front row|앞열
20-20|stretch|(동) 늘이다, 뻗다 (명) 스트레칭|stretch muscles|근육을 스트레칭하다
20-20|extreme|(형) 극심한, 극단의 (명) 극도|extreme cold|혹한(극심한 추위)
20-20|flexible|(형) 구부릴 수 있는, 유연한, 융통성 있는|flexible body|유연한 몸
20-20|muscle|(명) 근육, 근력|build muscle|근육을 키우다
20-20|surgery|(명) 수술, 외과|plastic surgery|성형 수술
20-20|cure|(동) 치료하다, 고치다 (명) 치유(법)|cure a disease|병을 치료하다 [C]
20-20|heal|(동) 치유되다, 치료하다|Time heals.|시간이 약이다(치유한다). [H]
20-20|symptom|(명) 증상, 징후|flu symptom|독감 증상
20-20|immune|(형) 면역성의|immune system|면역 체계
20-20|therapy|(명) 치료, 요법|physical therapy|물리 치료
20-20|faint|(동) 기절하다 (형) 희미한|faint hope|희미한 희망
20-20|stroke|(명) 타격, 뇌졸중|heat stroke|열사병
20-20|breath|(명) 숨, 호흡|take a deep breath|심호흡을 하다
20-20|bleed|(동) 피를 흘리다, 출혈하다|Nose bleeds.|코피가 나다.
20-20|diagnose|(동) 진단하다|diagnose cancer|암을 진단하다
20-20|prescribe|(동) 처방하다, 규정하다|prescribe medicine|약을 처방하다
20-20|chronic|(형) 만성적인, 장기간의|chronic pain|만성 통증
20-20|obesity|(명) 비만|childhood obesity|소아 비만
20-20|pregnant|(형) 임신한|pregnant woman|임산부
20-20|fatigue|(명) 피로|chronic fatigue|만성 피로
20-20|digestion|(명) 소화, 소화력|good digestion|소화가 잘 됨
20-20|have an effect on|~에 영향을 미치다|have an effect on health|건강에 영향을 미치다 [4]
20-20|suffer from|~으로 고통받다, ~을 앓다|suffer from a cold|감기로 고생하다 [2]
20-20|scent|(명) 향기, 냄새|scent of flowers|꽃향기
20-20|flavor|(명) 맛, 풍미, 향미(료)|artificial flavor|인공 향료(맛)
20-20|nutrient|(명) 영양소, 영양분|essential nutrient|필수 영양소
20-20|fiber|(명) 섬유, 섬유질|dietary fiber|식이 섬유
20-20|stir|(동) 휘젓다 (명) 휘젓기, 동요|stir the soup|수프를 휘젓다
20-20|edible|(형) 먹을 수 있는, 식용의|edible mushrooms|식용 버섯
20-20|spill|(동) 쏟다, 흘리다 (명) 유출|spill milk|우유를 쏟다
20-20|recipe|(명) 조리법, 비법, 비결|cookie recipe|쿠키 조리법
20-20|portion|(명) 일부, 1인분 (동) 분배하다|small portion|적은 양(부분)
20-20|dietary|(형) 음식물의, 식이요법의 (명) 규정식|dietary habits|식습관
20-20|starve|(동) 굶주리다, 굶기다, 갈망하다|starve to death|굶어 죽다


20-21|instruct|(동) 가르치다, 지시하다|instruct students|학생들을 가르치다
20-21|academic|(형) 학업의, 학구적인|academic performance|학업 성취도
20-21|gratitude|(명) 감사|express gratitude|감사를 표하다
20-21|score|(명) 점수, 악보 (동) 득점하다|high score|높은 점수
20-21|pupil|(명) 학생, 눈동자|dilated pupil|확장된 동공
20-21|enroll|(동) 등록하다|enroll in a course|강좌에 등록하다
20-21|discipline|(동) 훈육하다 (명) 규율, 훈육, 학과|strict discipline|엄격한 훈육
20-21|strict|(형) 엄격한|strict rules|엄격한 규칙
20-21|interact|(동) 상호 작용하다, 교류하다|interact with others|타인과 상호 작용하다
20-21|argue|(동) 주장하다, 논쟁하다|argue that|~라고 주장하다
20-21|bother|(동) 괴롭히다, 성가시게 하다 (명) 성가심|Don't bother me.|나를 괴롭히지 마라.
20-21|guidance|(명) 지도, 안내|under the guidance|지도하에
20-21|collective|(형) 집단의, 공동의 (명) 집단|collective effort|집단적인 노력
20-21|admire|(동) 존경하다, 감탄하다|admire a teacher|선생님을 존경하다
20-21|intellectual|(형) 지적인, 지성의 (명) 지식인|intellectual curiosity|지적 호기심
20-21|result from|~에서 기인하다, ~에서 비롯되다|result from stress|스트레스에서 기인하다
20-21|evaluate|(동) 평가하다|evaluate the result|결과를 평가하다 [E]
20-21|assess|(동) 평가하다, 산정하다|assess the value|가치를 평가하다 [A]
20-21|presentation|(명) 발표, 설명, 제출|oral presentation|구두 발표
20-21|range|(명) 범위, 폭, 영역 (동) 이르다|wide range of|광범위한
20-21|formal|(형) 공식적인, 형식적인, 정규적인|formal education|정규 교육
20-21|intermediate|(형) 중간의, 중급의|intermediate level|중급 수준
20-21|attempt|(동) 시도하다 (명) 시도|attempt to escape|탈출을 시도하다
20-21|assist|(동) 돕다 (명) 조력|assist in learning|학습을 돕다 [AS]
20-21|aid|(동) 돕다, 조력하다 (명) 지원, 도움|financial aid|재정 지원 [AI]
20-21|explanation|(명) 설명, 해명|detailed explanation|자세한 설명
20-21|grant|(동) 수여하다, 인정하다 (명) 보조금|research grant|연구 보조금 [G]
20-21|award|(동) 수여하다 (명) 상, 상금|win an award|상을 받다 [A]
20-21|typical|(형) 전형적인, 보통의|typical example|전형적인 예
20-21|inevitable|(형) 피할 수 없는, 당연한|inevitable result|피할 수 없는 결과
20-21|get rid of|~을 제거하다, ~을 처리하다|get rid of bad habits|나쁜 습관을 없애다
20-21|policy|(명) 정책, 방침|school policy|학교 방침
20-21|trigger|(동) 방아쇠를 당기다, 유발하다 (명) 방아쇠|trigger a response|반응을 유발하다
20-21|disguise|(동) 위장하다, 변장하다 (명) 위장|in disguise|변장하여
20-21|isolate|(동) 고립시키다, 격리하다|isolate oneself|스스로를 고립시키다
20-21|invade|(동) 침략하다, 침입하다|invade privacy|사생활을 침해하다
20-21|captive|(형) 사로잡힌, 감금된 (명) 포로|captive audience|사로잡힌 청중
20-21|command|(동) 명령하다, 지휘하다 (명) 명령, 통솔|command respect|존경을 받다
20-21|recruit|(동) 모집하다, 징집하다 (명) 신병, 신입사원|recruit new members|신입 회원을 모집하다
20-21|voluntary|(형) 자발적인, 자원봉사의|voluntary work|자원봉사 활동


20-22|psychology|(명) 심리학, 심리|child psychology|아동 심리학
20-22|relief|(명) 안도, 구조, 완화|sign of relief|안도의 한숨
20-22|mental|(형) 정신의, 마음의, 지적인|mental health|정신 건강
20-22|manipulate|(동) 조종하다, 다루다|manipulate people|사람들을 조종하다
20-22|uneasy|(형) 불안한, 불편한|feel uneasy|불안함을 느끼다
20-22|frightened|(형) 깜짝 놀란, 겁먹은|be frightened of|~을 무서워하다
20-22|afraid|(형) 두려워하는|be afraid to go|가기를 두려워하다
20-22|illusion|(명) 환영, 환상, 착각|optical illusion|착시 현상
20-22|undergo|(동) 경험하다, 겪다|undergo changes|변화를 겪다
20-22|identify|(동) 확인하다, 식별하다, 동일시하다|identify the problem|문제를 확인하다
20-22|stress|(명) 스트레스, 강조 (동) 강조하다, 압박하다|relieve stress|스트레스를 풀다
20-22|desperate|(형) 절박한, 필사적인, 자포자기한|desperate attempt|필사적인 시도
20-22|stable|(형) 안정된, 견고한|stable condition|안정된 상태
20-22|overwhelm|(동) 압도하다, 사로잡다|be overwhelmed|압도되다
20-22|anxiety|(명) 불안, 걱정, 염려|deep anxiety|깊은 불안
20-22|burden|(명) 짐, 부담 (동) ~에게 짐을 지우다|heavy burden|무거운 짐
20-22|complex|(형) 복잡한 (명) 콤플렉스, 복합체|complex system|복잡한 시스템
20-22|intend|(동) ~할 작정이다, 의도하다|intend to do|~할 작정이다
20-22|sudden|(형) 갑작스러운|sudden change|갑작스러운 변화
20-22|favorable|(형) 호의적인, 우호적인|favorable condition|유리한 조건
20-22|curiosity|(명) 호기심|satisfy curiosity|호기심을 충족시키다
20-22|innate|(형) 타고난, 선천적인, 고유의|innate ability|타고난 능력
20-22|ignorant|(형) 무지한, 무식한|ignorant of the law|법을 모르는
20-22|associate|(동) 연상하다, 연관 짓다 (명) 동료|associate A with B|A와 B를 연관 짓다
20-22|assumption|(명) 가정, 추측, 인수|make an assumption|가정하다
20-22|distraction|(명) 집중을 방해하는 것, 주의 산만|avoid distractions|주의 산만 요소를 피하다
20-22|subjective|(형) 주관적인, 주관의|subjective view|주관적인 견해
20-22|end up -ing|결국 ~이 되다, 결국 ~하다|end up crying|결국 울게 되다
20-22|interfere|간섭하다, 방해하다|interfere in|~에 간섭하다 [F]
20-22|intervene|간섭하다, 개입하다, 중재하다|intervene in a dispute|분쟁에 개입하다 [V]
20-22|exclude|(동) 제외하다, 배제하다|exclude from the list|목록에서 제외하다
20-22|persuade|(동) 설득하다|persuade him|그를 설득하다 [P]
20-22|convince|(동) 설득하다, 확신시키다|convince the jury|배심원을 설득하다 [C]
20-22|ensure|(동) 보장하다, 확보하다|ensure safety|안전을 보장하다
20-22|cheat|(동) 속이다, 부정행위를 하다|cheat on a test|시험 부정행위를 하다
20-22|boost|(동) 북돋우다, 증가시키다 (명) 향상, 격려|boost confidence|자신감을 북돋우다
20-22|attribute|~의 탓[덕분]으로 돌리다|attribute A to B|A를 B의 탓으로 돌리다
20-22|skeptical|(형) 회의적인, 의심 많은|skeptical about|~에 회의적인
20-22|optimistic|(형) 낙관적인, 낙관하는|optimistic outlook|낙관적인 전망
20-22|out of place|상황에 맞지 않은, 제자리에 있지 않은|feel out of place|불편하다(어울리지 않는 느낌)

20-23|column|(명) 칼럼, 기둥|newspaper column|신문 칼럼
20-23|announce|(동) 발표하다, 알리다|announce the news|뉴스를 발표하다
20-23|union|(명) 조합, 연합, 동맹|labor union|노동조합
20-23|convey|(동) 전(달)하다, 운반하다|convey meaning|의미를 전달하다
20-23|leak|(동) 누설하다, 새다 (명) 새는 곳, 누출|leak information|정보를 누설하다
20-23|affair|(명) 일, 문제, 사건|current affairs|시사 문제
20-23|brief|(형) 간결한, 잠시의 (명) 짧은 보고 (동) 요약하다|brief summary|간결한 요약
20-23|enhance|(동) 높이다, 향상시키다|enhance quality|품질을 높이다
20-23|verbal|(형) 말의, 언어의, 구두의|verbal skill|언어 능력
20-23|medium|(명) 매체, 수단, 방법 (형) 중간의|mass medium|대중매체
20-23|signal|(동) 신호를 보내다, 암시하다 (명) 신호|send a signal|신호를 보내다
20-23|transmit|(동) 보내다, 전송하다, 전염시키다|transmit data|데이터를 전송하다
20-23|broadcast|(동) 방송하다, 널리 알리다|live broadcast|생방송
20-23|audience|(명) 청중, 관중, 시청자|large audience|많은 청중
20-23|viewer|(명) 관객, 시청자|TV viewer|TV 시청자
20-23|commercial|(명) 광고 (형) 상업의|TV commercial|TV 광고
20-23|appealing|(형) 매력적인, 흥미를 끄는|appealing offer|매력적인 제안
20-23|evident|(형) 분명한, 눈에 띄는|self-evident|자명한
20-23|obscure|(형) 분명치 않은, 모호한 (동) 모호하게 하다|obscure meaning|모호한 의미
20-23|limitation|(명) 제한, 한계|time limitation|시간 제한
20-23|visible|(형) 눈에 보이는|visible light|가시광선
20-23|compelling|(형) 설득력 있는, 강력한|compelling reason|설득력 있는 이유
20-23|illustrate|(동) 설명하다, 삽화를 넣다|illustrate with examples|예시로 설명하다
20-23|diminish|(동) 감소하다, 약화시키다|diminish pain|고통을 줄이다 [D]
20-23|lessen|(동) 줄다, 완화시키다|lessen the burden|짐을 덜다 [L]
20-23|informative|(형) 정보를 주는, 유익한|informative book|유익한 책
20-23|satellite|(명) 인공위성|artificial satellite|인공위성
20-23|mobile|(형) 움직이기 쉬운, 기동성의|mobile phone|휴대전화 [M]
20-23|portable|(형) 휴대용의, 이동이 쉬운|portable computer|휴대용 컴퓨터 [P]
20-23|collect|(동) 수집하다, 모으다 (부) 수신자 부담의|collect coins|동전을 수집하다
20-23|variable|(명) 변수 (형) 변하기 쉬운|dependent variable|종속 변수
20-23|pile|(명) 더미, 쌓아 놓은 것 (동) 쌓다|a pile of books|책 더미
20-23|wrap|(동) 싸다, 포장하다|wrap a gift|선물을 포장하다
20-23|deliver|(동) 배달하다, 연설하다, 분만하다|deliver a package|소포를 배달하다
20-23|envelope|(명) 봉투|open the envelope|봉투를 열다
20-23|stamp|(명) 우표, 도장 (동) 날인하다, 발을 구르다|postage stamp|우표
20-23|respondent|(명) 응답자|survey respondent|설문 응답자
20-23|transaction|(명) 거래, 매매, 처리(과정)|bank transaction|은행 거래
20-23|feel free to do|자유롭게[마음대로] ~하다|[Feel free to] ask.|편하게 질문하세요.
20-23|get in touch with|~와 연락[접촉]하다|get in touch with him|그와 연락하다

20-24|cherish|(동) 소중히 하다|cherish memories|추억을 소중히 하다
20-24|rainforest|(명) 열대 우림|Amazon rainforest|아마존 열대 우림
20-24|landscape|(명) 풍경, 경치|rural landscape|시골 풍경
20-24|surface|(명) 표면, 외관 (동) 수면으로 올라오다|smooth surface|매끄러운 표면
20-24|peak|(명) 산봉우리, 정상, 정점 (동) 절정에 이르다|reach the peak|정상에 도달하다
20-24|steep|(형) 가파른, 급격한|steep slope|가파른 경사
20-24|incline|(명) 경사 (동) 경사지다, 기울다|incline to agree|동의하는 쪽으로 기울다
20-24|cliff|(명) 절벽|high cliff|높은 절벽
20-24|suitable|(형) 적절한, 적합한|suitable place|적절한 장소
20-24|atmosphere|(명) 대기(권), 분위기|friendly atmosphere|친근한 분위기
20-24|endangered|(형) 멸종 위기에 처한, 위험에 빠진|endangered species|멸종 위기종
20-24|pollution|(명) 오염|air pollution|대기 오염
20-24|fossil|(명) 화석|fossil fuel|화석 연료
20-24|ecosystem|(명) 생태계|marine ecosystem|해양 생태계
20-24|pesticide|(명) 살충제|use pesticides|살충제를 사용하다
20-24|landfill|(명) 쓰레기 매립지|garbage landfill|쓰레기 매립지
20-24|purify|(동) 깨끗이 하다, 정화하다|purify water|물을 정화하다
20-24|sweep|(동) 쓸다, 휩쓸다 (명) 쓸기|sweep the floor|바닥을 쓸다
20-24|litter|(명) 쓰레기 (동) 버리다, 어지럽히다|Don't litter.|쓰레기를 버리지 마라.
20-24|acid|(명) 산 (형) 산성의|acid rain|산성비
20-24|threaten|(동) 위협하다, 협박하다|threaten to leave|떠나겠다고 위협하다
20-24|resource|(명) 자원, 물자|natural resources|천연자원
20-24|raw|(형) 날것의, 가공하지 않은|raw fish|생선회
20-24|wasteful|(형) 낭비하는, 헛된|wasteful spending|낭비하는 지출
20-24|straw|(명) 빨대, 짚, 지푸라기|drinking straw|빨대
20-24|remain|(동) 남아 있다, 여전히 ~인 채로 있다|remain silent|침묵을 지키다
20-24|utilize|(동) 활용하다, 이용하다|utilize solar energy|태양 에너지를 활용하다
20-24|recycle|(동) 재활용하다|recycle paper|종이를 재활용하다
20-24|conserve|(동) 보존[보호]하다, 아끼다|conserve energy|에너지를 아끼다
20-24|filter|(명) 필터, 여과 장치 (동) 여과하다|filter dust|먼지를 거르다
20-24|generate|(동) 발생시키다, 만들어 내다|generate power|전력을 생산하다
20-24|convert|(동) 전환하다, 바꾸다|convert files|파일을 변환하다 [C]
20-24|transform|(동) 변형시키다, 바꾸다|transform society|사회를 변혁하다 [T]
20-24|reduce|(동) 줄이다, 감소시키다|reduce waste|쓰레기를 줄이다
20-24|fragile|(형) 부서지기 쉬운, 취약한|fragile glass|깨지기 쉬운 유리
20-24|fabric|(명) 직물, 천, 구조|cotton fabric|면직물
20-24|accumulate|(동) 축적하다, 축적되다, 모으다|accumulate wealth|부를 축적하다
20-24|discard|(동) 버리다, 폐기하다|discard old clothes|헌 옷을 버리다 [DI]
20-24|dispose of|~을 버리다, ~을 처리하다|dispose of waste|쓰레기를 처리하다 [2]
20-24|chances are|아마 ~일 것이다, ~할 가능성이 충분하다|chances are high|가능성이 높다



20-25|climate|(명) 기후|climate change|기후 변화
20-25|freeze|(동) 얼다, 동결 시키다|Water freezes.|물은 언다.
20-25|melt|(동) 녹다, 녹이다|Ice melts.|얼음이 녹는다.
20-25|wave|(명) 파도, 물결 (동) 파도치다, 흔들다|tidal wave|해일
20-25|humid|(형) 습한, 습기 찬|humid weather|습한 날씨
20-25|temperate|(형) 온화한, 차분한|temperate zone|온대 지방
20-25|sufficient|(형) 충분한|sufficient food|충분한 식량
20-25|tropical|(형) 열대의, 열대 지방의|tropical fruit|열대 과일
20-25|intense|(형) 극심한, 치열한|intense heat|극심한 더위 [I]
20-25|fierce|(형) 사나운, 극심한|fierce storm|사나운 폭폭 [F]
20-25|light|(형) 가벼운, 밝은 (동) 밝히다 (명) 빛|light rain|가벼운 비
20-25|phenomenon|(명) 현상|natural phenomenon|자연 현상
20-25|creature|(명) 창조물, 생물|living creature|살아있는 생물
20-25|tide|(명) 조수, 조류, 흐름|high tide|만조(밀물)
20-25|shadow|(명) 그림자, 그늘 (동) 그늘지게 하다|cast a shadow|그림자를 드리우다
20-25|float|(동) 뜨다, 떠다니다|float on water|물에 뜨다
20-25|earthquake|(명) 지진|massive earthquake|대지진
20-25|eruption|(명) 폭발, 분화|volcanic eruption|화산 폭발
20-25|drought|(명) 가뭄|severe drought|심한 가뭄
20-25|originate|(동) 유래하다, 발생하다, 고안하다|originate from|~에서 유래하다
20-25|hatch|(동) 부화하다|Eggs hatch.|알이 부화하다.
20-25|agriculture|(명) 농업|agriculture industry|농업
20-25|ripe|(형) 익은, 숙성한|ripe tomato|익은 토마토
20-25|cultivate|(동) 경작하다, 재배하다, 기르다|cultivate land|땅을 경작하다
20-25|crop|(명) 농작물, 수확물|harvest a crop|작물을 수확하다
20-25|harvest|(동) 수확하다 (명) 수확, 수확물|good harvest|풍작
20-25|annual|(형) 연례의, 연간의|annual meeting|연례 회의
20-25|folk|(형) 민속의, 민간의 (명) 사람들|folk song|민요
20-25|native|(형) 토착의, 원산의 (명) 원주민|native speaker|원어민
20-25|resistant|(형) 저항력이 있는, 저항하는, 잘 견디는|heat resistant|내열성의
20-25|durable|(형) 내구성이 있는|durable goods|내구재
20-25|transplant|(동) 옮겨 심다, 이식하다 (명) 이식|transplant a tree|나무를 옮겨 심다
20-25|enrich|(동) 비옥하게 하다, 풍요롭게 하다|enrich the soil|토양을 비옥하게 하다
20-25|fertile|(형) 비옥한, 번식력이 있는|fertile land|비옥한 땅
20-25|barren|(형) 척박한, 결실이 없는|barren desert|척박한 사막
20-25|drain|(동) 물을 빼내다, 배수하다, 소모시키다|drain the water|물을 빼다
20-25|pest|(명) 해충, 골칫거리|pest control|해충 방제
20-25|weed|(명) 잡초 (동) 잡초를 제거하다|pull out weeds|잡초를 뽑다
20-25|take over|~을 차지하다, ~을 인계받다, ~을 인수하다|take over a company|회사를 인수하다
20-25|take advantage of|~을 이용하다, ~을 활용하다|take advantage of time|시간을 활용하다


20-26|open an account|계좌를 개설하다|open an account|계좌를 개설하다
20-26|on this account|이런 이유로|on this account|이런 이유로(때문에)
20-26|account for|(동) 설명하다|[account for] the error|오류를 설명하다 
20-26|account for|(동) 차지하다|[account for] 50%|50%를 차지하다 
20-26|correct|(형) 올바른, 정확한|choose the [correct answer]|정답을 고르시오
20-26|correct|(동) 정정하다, 바로잡다|[correct] mistakes|실수를 바로잡다
20-26|charge|(동) 청구하다|charge a fee|요금을 청구하다
20-26|in charge of|~을 담당하는, ~의 책임을 맡은|be [in charge of]|~을 담당하다
20-26|be charged with|~의 혐의로 고발당하다|[be charged with] theft|절도 혐의로 기소되다
20-26|charge|(동) 충전하다|[charge] the phone|전화기를 충전하다
20-26|check|(명) 검사, 점검|regular checks|정기 점검
20-26|check|(명) 수표|pay [by check]|수표로 지불하다
20-26|check|(명) 계산서|Check, please.|계산서 주세요.
20-26|air|(명) 공중, 하늘|up in the air|공중에 뜬(미정인)
20-26|air|(명) 항공, 항공편|send [by air]|항공편으로 보내다
20-26|air|(동) 방송하다[되다]|The show [was aired].|그 쇼가 방송되었다.
20-26|tip|(명) 끝, 끝부분|on the [tip of] my tongue|혀끝에서 맴도는
20-26|tip|(명) 조언, 비결|useful tips|유용한 조언들
20-26|still|(형) 가만히 있는, 정지한|stand still|가만히 서 있다
20-26|still|(부) 훨씬 (비교급 강조)|still better|훨씬 더 좋은
20-26|still|(부) 그럼에도 불구하고|Still, I love you.|그럼에도 불구하고, 널 사랑해.
20-26|still|(형) 잠잠한, 조용한|The wind is still.|바람이 잠잠하다.
20-26|custom|(명) 관습, 풍습|social [customs]|사회적 관습
20-26|customs|(명) 세관, 관세|go through [customs]|세관을 통과하다
20-26|custom|(형) 주문 제작한, 맞춤의|[custom]-made suit|맞춤 양복
20-26|regard|(명) 존중, 배려|[regard for] others|타인에 대한 배려
20-26|regard|(명) 관련, 관계|with [regard] to|~에 관하여
20-26|regards|(명) 안부 (인사)|send my [regards]|안부 전해줘
20-26|be regarded as|~으로 간주되다[여겨지다]|be regarded as a hero|영웅으로 여겨지다
20-26|develop|(동) (병이) 생기다, 나타나다|[develop] symptoms|증상이 나타나다
20-26|develop|(동) 현상하다|[develop] photos|사진을 현상하다
20-26|object|(명) 목표, 목적|main [object]|주된 목표
20-26|object|(명) 물체, 대상|unknown [object]|미확인 물체
20-26|object to|(동) 반대하다|[object to] the plan|계획에 반대하다
20-26|yield|(동) 내다, 산출하다|[yield] a profit|이익을 내다
20-26|yield|(동) 양도하다, 양보하다|[yield] right of way|통행권을 양보하다
20-26|yield to|(동) 굴복하다|[yield to] pressure|압력에 굴복하다


20-27|sacred|(형) 신성한, 성스러운|sacred place|신성한 장소
20-27|scared|(형) 무서워하는|be scared of|~을 무서워하다
20-27|vain|(형) 헛된, 허영심이 많은|in vain|헛되이
20-27|vein|(명) 정맥, 맥락|blood vein|정맥
20-27|cite|(동) 인용하다|cite a source|출처를 인용하다
20-27|site|(명) 장소, 위치, 현장|construction site|공사 현장
20-27|mass|(명) 덩어리, 집단, 부피, 질량 (형) 대량의, 대중의|mass media|대중매체
20-27|mess|(명) 엉망, 혼란 (동) 더럽히다|make a mess|엉망으로 만들다
20-27|expand|(동) 확대하다, 확장하다|expand business|사업을 확장하다
20-27|expend|(동) 소비하다, 쓰다|expend energy|에너지를 소비하다
20-27|literal|(형) 문자 그대로의, 문자상의|literal meaning|문자 그대로의 의미
20-27|literate|(형) 읽고 쓸 수 있는|computer literate|컴퓨터를 다룰 줄 아는
20-27|literary|(형) 문학의, 문학적인|literary work|문학 작품
20-27|considerable|(형) 상당한, 꽤 많은|considerable amount|상당한 양
20-27|considerate|(형) 사려 깊은, 배려하는|be considerate of|~을 배려하다
20-27|optical|(형) 시각적인, 광학의|optical illusion|착시 현상
20-27|optional|(형) 선택적인|optional subject|선택 과목
20-27|optimal|(형) 최적의, 최상의|optimal condition|최적의 조건
20-27|vague|(형) 모호한|vague idea|막연한 생각
20-27|vogue|(명) 유행|in vogue|유행하는
20-27|extinct|(형) 멸종한, 사라진|become extinct|멸종되다
20-27|instinct|(명) 본능|survival instinct|생존 본능
20-27|wander|(동) 돌아다니다, 배회하다|wander around|돌아다니다
20-27|wonder|(동) 궁금해하다, 놀라다|No wonder.|놀랄 일이 아니다(당연하다).
20-27|famine|(명) 기근, 기아|die of famine|기근으로 죽다
20-27|feminine|(형) 여성의, 여성스러운|feminine voice|여성적인 목소리
20-27|be known for|~으로[때문에] 유명하다|Korea is known for Kimchi.|한국은 김치로 유명하다.
20-27|be known as|~으로 알려져 있다|He is known as a poet.|그는 시인으로 알려져 있다.



20-28|bear|(명) 곰 (동) 참다|polar bear|북극곰
20-28|bear|(동) 참다, 견디다|cannot bear the pain|고통을 참을 수 없다
20-28|bear|(동) (결실을) 맺다, (아이를) 낳다|bear fruit|결실을 맺다
20-28|sound|(명) 소리 (형) 건전한, 건강한|strange sound|이상한 소리
20-28|sound|(동) ~하게 들리다|It sounds good.|좋게 들린다.
20-28|sound|(형) 건전한, 믿을 만한|safe and sound|무사히
20-28|sound|(부) 깊게, 푹|sound asleep|깊이 잠든
20-28|bill|(명) 청구서, 지폐|dollar bill|달러 지폐
20-28|bill|(명) 법안|pass a bill|법안을 통과시키다
20-28|bill|(명) (새의) 부리|duck's bill|오리 부리
20-28|count|(동) 세다, 계산하다 (동) 중요하다|count the money|돈을 세다
20-28|count in|~을 포함하다|Don't count me in.|나를 빼줘.
20-28|count as|~로 간주되다 (동) 중요하다|Every vote counts.|모든 표가 중요하다.
20-28|present|(형) 현재의 (명) 선물 (동) 출석한|at present|현재
20-28|present|(동) 제시하다, 주다|present a passport|여권을 제시하다
20-28|grave|(명) 무덤 (형) 심각한, 중대한|dig a grave|무덤을 파다
20-28|grave|(형) 심각한, 중대한|grave concern|심각한 우려
20-28|grave|(형) 중대한, 엄숙한|grave expression|심각한 표정
20-28|subject|(명) 주제, 피실험자, 학과|main subject|주요 주제
20-28|subject|(명) 과목, 학과|school subject|학교 과목
20-28|subject|(명) 피실험자, 대상|experimental subject|실험 대상
20-28|be subject to|~하기 쉬운, ~을 받아야 하는|subject to change|변경될 수 있는
20-28|draw|(동) 그리다, 끌다, 뽑다|draw a picture|그림을 그리다
20-28|draw|(동) 끌다, 당기다, 뽑다|draw a sword|칼을 뽑다
20-28|draw|(동) (관심 등을) 끌다, 도출하다|draw a conclusion|결론을 도출하다
20-28|draw|(명) 무승부 (동) 도출하다|The game ended in a draw.|게임은 무승부로 끝났다.
20-28|contract|(명) 계약(서) (동) 수축하다, (병에) 걸리다|sign a contract|계약서에 서명하다
20-28|contract|(동) 수축하다, 줄어들다|Muscles contract.|근육이 수축하다.
20-28|contract|(동) (병에) 걸리다|[contract] a virus|바이러스에 걸리다
20-28|hold|(동) 잡다, 쥐다, 개최하다|hold a hand|손을 잡다
20-28|hold|(동) 개최하다, 열다|hold a meeting|회의를 열다
20-28|hold|(동) 유지하다, 참다|hold one's breath|숨을 참다
20-28|hold|(동) 수용하다, 담다|can hold water|물을 담을 수 있다
20-28|balance|(명) 균형, 잔고, 저울|lose balance|균형을 잃다
20-28|balance|(명) 잔액, 잔고|check the balance|잔액을 확인하다
20-28|balance|(명) 저울, 천칭|use a balance|천칭(저울)을 사용하다
20-28|character|(명) 성격, 특징, 등장인물, 글자|strong character|강한 성격
20-28|character|(명) 등장인물, 특징|comic character|만화 캐릭터
20-28|character|(명) 글자, 문자|Chinese character|한자


20-29|absorb|(동) 흡수하다|absorb water|물을 흡수하다
20-29|absurd|(형) 터무니없는, 불합리한|absurd idea|터무니없는 생각
20-29|carve|(동) 조각하다, 새기다|carve wood|나무를 조각하다
20-29|curve|(명) 곡선, 커브|dangerous curve|위험한 커브
20-29|complement|(명) 보완, 보충 (동) 보완하다|complement each other|서로 보완하다
20-29|compliment|(명) 칭찬 (동) 칭찬하다|pay a compliment|칭찬하다
20-29|respectable|(형) 존경할 만한|respectable person|존경할 만한 사람
20-29|respective|(형) 각각의|their respective roles|그들의 각각의 역할
20-29|principal|(명) 교장 (형) 주요한, 중요한|principal reason|주된 이유
20-29|principle|(명) 원칙, 원리, 신념|basic principle|기본 원칙
20-29|acquire|(동) 얻다, 획득하다, 습득하다|acquire knowledge|지식을 습득하다
20-29|inquire|(동) 묻다, 문의하다|inquire about|~에 대해 문의하다
20-29|require|(동) 필요로 하다, 요구하다|require help|도움을 필요로 하다
20-29|lie|(동) 거짓말하다, 눕다 (명) 거짓말|Don't lie.|거짓말하지 마라.
20-29|lay|(동) 놓다, 두다, (알을) 낳다|lay eggs|알을 낳다
20-29|imitate|(동) 모방하다, 흉내 내다|imitate a voice|목소리를 흉내 내다
20-29|initiate|(동) 시작하다, 개시하다|initiate a plan|계획을 시작하다
20-29|defeat|(동) 패배시키다 (명) 패배|defeat the enemy|적을 물리치다
20-29|defect|(명) 결함, 결점|birth defect|선천적 결함
20-29|frame|(명) 뼈대, 틀, 액자|picture frame|사진 액자
20-29|flame|(명) 불길, 불꽃|burst into flames|불길에 휩싸이다
20-29|successive|(형) 잇따른, 연속하는|successive wins|연승
20-29|successful|(형) 성공적인|successful career|성공적인 경력
20-29|cooperation|(명) 협동, 협력, 협조|international cooperation|국제 협력
20-29|corporation|(명) 기업, 회사, 법인|multinational corporation|다국적 기업
20-29|call for|~을 요구[요청]하다|call for help|도움을 요청하다
20-29|call off|중지하다, 취소하다|call off the meeting|회의를 취소하다


20-30|rate|(명) 비율, 속도, 요금 (동) 평가하다|birth rate|출생률
20-30|at a rate of|~의 속도로|at a rate of|~의 속도로
20-30|rate|(명) 요금, 이율|interest rate|이자율
20-30|rate|(동) 평가하다|rate a movie|영화를 평가하다
20-30|fine|(명) 벌금 (동) 벌금을 부과하다|pay a fine|벌금을 내다
20-30|fine|(형) 괜찮은, 좋은|I am fine.|난 괜찮아.
20-30|fine|(형) 고운, 미세한|fine dust|미세 먼지
20-30|fine|(형) 맑은|one fine day|어느 맑은 날
20-30|term|(명) 용어, 기간, 학기, 조건, 사이|technical term|전문 용어
20-30|term|(명) 학기, 기간|mid-term exam|중간고사
20-30|in terms of|~의 관점에서|in terms of|~의 관점에서
20-30|be on good terms|~와 사이가 좋다|be on good terms|사이가 좋다
20-30|term|(명) 조건|terms of contract|계약 조건
20-30|press|(동) 누르다, 강요하다 (명) 언론, 신문, 기자단|press the button|버튼을 누르다
20-30|press|(동) 압박하다, 강요하다|hard pressed|압박을 받는
20-30|press|(명) 언론, 보도진|freedom of the press|언론의 자유
20-30|condition|(명) 상태, 환경, 조건|good condition|좋은 상태
20-30|condition|(명) 환경, 상황|living conditions|생활 환경
20-30|on condition that|~라는 조건으로|on condition that|~라는 조건으로
20-30|solution|(명) 해결책, 용액|find a solution|해결책을 찾다
20-30|solution|(명) 용액|saline solution|식염수
20-30|conduct|(동) 수행하다, 지휘하다, 전도하다 (명) 행위, 품행|conduct a survey|조사를 수행하다
20-30|conduct|(동) 지휘하다, 전도하다|conduct electricity|전기를 전도하다
20-30|conduct|(명) 행위, 안내 (동) 안내하다|code of conduct|행동 강령
20-30|conduct|(동) 전도하다|Copper conducts electricity.|구리는 전기를 전도한다.
20-30|conduct|(명) 품행, 행동|professional conduct|직업적 행위
20-30|fair|(형) 공평한, 상당한, 맑은, 아름다운 (명) 박람회|It's not fair.|불공평하다.
20-30|fair|(형) 상당한, 꽤 많은|fair chance|공평한 기회
20-30|fair|(형) 아름다운, 매력적인|my fair lady|나의 아름다운 숙녀
20-30|fair|(형) 맑은, (피부가) 흰|fair skin|흰 피부
20-30|fair|(명) 박람회|job fair|채용 박람회
20-30|book|(명) 책 (동) 예약하다|read a book|책을 읽다
20-30|book|(동) 예약하다, 예매하다|book a ticket|표를 예매하다
20-30|current|(형) 현재의 (명) 흐름, 해류, 기류, 전류|current events|시사
20-30|current|(명) (물, 공기 등의) 흐름|ocean current|해류
20-30|current|(명) 추세, 경향, 흐름|air current|기류
20-30|current|(명) 전류|alternating current|교류
20-30|feature|(명) 특징, 이목구비, 특집 (동) 특징으로 하다|main feature|주요 특징
20-30|features|(명) 이목구비, 얼굴 생김새|facial features|이목구비
20-30|feature|(명) 특집 기사, 장편 영화|feature film|장편 영화
20-30|critical|(형) 비판적인, 중대한, 위독한, 결정적인|critical thinking|비판적 사고
20-30|critical|(형) 위독한, 중대한|critical condition|위독한 상태
20-30|critical|(형) 결정적인, 아주 중요한|highly critical|매우 비판적인



20-31|expire|(동) (기한이) 만료되다|visa expires|비자가 만료되다
20-31|inspire|(동) 고무(격려)하다, 영감을 주다|inspire students|학생들에게 영감을 주다
20-31|loyal|(형) 충성스러운, 충실한|loyal customer|충성스러운 고객
20-31|royal|(형) 왕의, 왕국의|royal family|왕족
20-31|emergency|(명) 비상사태|in case of emergency|비상시에
20-31|emergence|(명) 출현, 발생|emergence of life|생명의 출현
20-31|terrible|(형) 끔찍한, 심한, 지독한|terrible accident|끔찍한 사고
20-31|terrific|(형) 아주 멋진, 훌륭한|terrific job|훌륭한 일(잘했다)
20-31|personal|(형) 개인적인|personal opinion|개인적인 견해
20-31|personnel|(명) 인원, 직원, 인사과|personnel department|인사과
20-31|conscience|(명) 양심|clear conscience|깨끗한 양심
20-31|conscious|(형) 의식하는, 의식이 있는, 의도적인|conscious of|~을 의식하는
20-31|simulate|(동) 모의 실험하다|simulate flight|비행을 시뮬레이션하다
20-31|stimulate|(동) 자극(격려)하다, 관심을 불러일으키다|stimulate growth|성장을 자극하다
20-31|raise|(동) 올리다, 들어올리다|raise a hand|손을 들다
20-31|rise|(동) 오르다, 올라가다|Sun rises.|해가 뜬다.
20-31|confirm|(동) 확인하다, 승인하다, 입증하다|confirm a reservation|예약을 확인하다
20-31|conform|(동) 따르다, 순응하다|conform to rules|규칙에 따르다
20-31|calculate|(동) 계산하다|calculate the cost|비용을 계산하다
20-31|circulate|(동) 순환하다|Blood circulates.|피가 순환한다.
20-31|depend|(동) 의존하다|depend on|~에 의존하다
20-31|defend|(동) 방어(수비)하다, 변호하다|defend against|~에 맞서 방어하다
20-31|neural|(형) 신경 (계통)의|neural network|신경망
20-31|neutral|(형) 중립의, 중성의|neutral position|중립적인 위치
20-31|evolution|(명) 진화, 발전|theory of evolution|진화론
20-31|revolution|(명) 혁명, 회전|industrial revolution|산업 혁명
20-31|be concerned about|~을 염려하다, ~을 걱정하다|be concerned about health|건강을 걱정하다
20-31|be concerned with|~와 관련이 있다, ~에 관심이 있다|be concerned with results|결과와 관련이 있다


20-32|company|(명) 함께 있는 사람들, 친구, 회사|keep company|동행하다(함께 있다)
20-32|company|(명) 동행, 함께 있음|enjoy their company|그들과 함께 있는 것을 즐기다
20-32|company|(명) 회사, 기업|work for a large company|대기업에서 일하다
20-32|article|(명) 기사, 물건, 조항|newspaper article|신문 기사
20-32|article|(명) 물건, 물품|pack toiletry articles|세면용품을 챙기다
20-32|article|(명) 조항|read every article|모든 조항을 읽다
20-32|correspond|(동) 일치하다, 서신을 주고받다, 조화를 이루다|correspond to|~에 해당하다(일치하다)
20-32|correspond|(동) 부합하다, 일치하다|Does it correspond to the idea?|그것이 그 개념에 부합하나요?
20-32|correspond|(동) 서신을 주고받다|correspond with friends|친구들과 펜팔하다
20-32|correspond|(동) 조화를 이루다, 어울리다|Tie corresponds with his suit.|넥타이가 정장과 어울린다.
20-32|reflect|(동) 반사하다, 반영하다, 심사숙고하다|Mirror reflects light.|거울은 빛을 반사한다.
20-32|reflect|(동) 반영하다, 나타내다|Actions reflect our desire.|행동은 우리의 열망을 반영한다.
20-32|reflect on|(동) 회고하다, 심사숙고하다|reflect on his life|그의 삶을 되돌아보다
20-32|post|(명) 기둥, 우편 (동) 게시하다, 발송하다|lamp post|가로등 기둥
20-32|post|(명) 우편, 우편물|send through the post|우편으로 보내다
20-32|post|(동) (온라인에) 게시하다, 올리다|post a video online|영상을 온라인에 올리다
20-32|post|(동) (우편물을) 발송하다, 부치다|post a letter|편지를 부치다
20-32|decline|(동) 감소하다, 거절하다 (명) 하락, 경사|decline an invitation|초대를 거절하다
20-32|decline|(동) 거절하다|decline to join|가입을 거절하다
20-32|decline|(동) 기울다, 내리막이 되다|The road declines steeply.|도로가 가파르게 내려간다.
20-32|suit|(명) 정장, 소송 (동) 맞다, 어울리다|wear a suit|정장을 입다
20-32|suit|(명) 소송|bring a suit against|~에게 소송을 걸다
20-32|suit|(동) (격식, 형편 등에) 맞다, 어울리다|This time suits everyone.|이 시간은 모두에게 맞다.
20-32|figure|(명) 수치, 몸매, 인물, 모양 (동) 이해하다|sales figure|판매 수치
20-32|figure|(명) 몸매, 모습|She has a slim figure.|그녀는 날씬한 몸매를 가졌다.
20-32|figure|(명) 인물|historical figure|역사적 인물
20-32|figure|(명) 모양, 무늬|figures of flowers|꽃무늬
20-32|figure out|(동) 이해하다, 생각해 내다|figure out the answer|답을 알아내다
20-32|case|(명) 경우, 사례, 사건, 소송, 상자|in that case|그 경우에는
20-32|case|(명) 사건|solve the murder case|살인 사건을 해결하다
20-32|case|(명) 소송, 재판|Lawyer wins the case.|변호사가 승소하다.
20-32|case|(명) 상자, 용기|put in the pencil case|필통에 넣다
20-32|dismiss|(동) 해산시키다, 해고하다, 일축하다|dismiss a worker|직원을 해고하다
20-32|dismiss|(동) 해고하다, 내쫓다|be unfairly dismissed|부당 해고당하다
20-32|dismiss|(동) 일축하다, 떨쳐 버리다|dismiss any question|질문을 일축하다
20-32|reserve|(동) 예약하다, 남겨두다 (명) 매장량, 보호 구역|reserve a table|테이블을 예약하다
20-32|reserve|(동) 예약하다, 남겨두다|Seats are reserved.|좌석이 예약되어 있다.
20-32|reserve|(동) (권리 등을) 보유하다, 가지다|We reserve the right.|우리는 권리를 가진다.
20-32|reserve|(명) 매장량, 비축물|vast reserve of natural gas|막대한 천연가스 매장량
20-32|reserve|(명) 보호 구역|visit a wildlife reserve|야생 동물 보호 구역을 방문하다
20-32|appreciate|(동) 진가를 알아보다, 이해하다, 감사하다, 감상하다|appreciate art|예술을 감상하다
20-32|appreciate|(동) 감사하다|We appreciate your business.|거래해 주셔서 감사합니다.
20-32|appreciate|(동) 진가를 알아보다, 가치를 인정하다|appreciate details|세부 사항의 진가를 알아보다



20-33|state|(명) 상태, 국가 (동) 말하다, 진술하다|mental state|정신 상태
20-33|statue|(명) 조각상|bronze statue|청동 조각상
20-33|status|(명) 지위, 신분, 상황|social status|사회적 지위
20-33|explode|(동) 폭발하다, 터뜨리다|Bomb explodes.|폭탄이 폭발하다.
20-33|explore|(동) 탐험하다|explore the world|세계를 탐험하다
20-33|ethical|(형) 윤리적인|ethical issue|윤리적 문제
20-33|ethnic|(형) 민족의, 종족의|ethnic group|민족 집단
20-33|waist|(명) 허리|waist size|허리 치수
20-33|waste|(명) 낭비, 폐기물 (동) 낭비하다|waste time|시간을 낭비하다
20-33|hospitality|(명) 환대, 접대|Thank you for your hospitality.|환대에 감사합니다.
20-33|hostility|(명) 적대감|show hostility|적대감을 보이다
20-33|constant|(형) 불변의, 끊임없는|constant effort|끊임없는 노력
20-33|consistent|(형) 일관된, 일치하는, 모순 없는|consistent behavior|일관된 행동
20-33|brake|(명) 브레이크, 제동 장치|step on the brake|브레이크를 밟다
20-33|break|(명) 휴식 (동) 부서지다, 고장 나다, 쉬다, 어기다|break a glass|유리잔을 깨다
20-33|saw|(명) 톱 (동) 톱질하다|cut with a saw|톱으로 자르다
20-33|sew|(동) 바느질하다, 꿰매다|sew a button|단추를 달다
20-33|sow|(동) 씨를 뿌리다, 심다|sow seeds|씨앗을 뿌리다
20-33|precede|(동) ~에 앞서다(선행하다)|A precedes B.|A가 B보다 앞서다.
20-33|proceed|(동) 나아가다, 진행하다|proceed with the plan|계획을 진행하다
20-33|desert|(명) 사막|Sahara desert|사하라 사막
20-33|dessert|(명) 후식, 디저트|sweet dessert|달콤한 디저트
20-33|addition|(명) 추가, 첨가, 덧셈|in addition|게다가
20-33|addiction|(명) 중독, 열중|drug addiction|약물 중독
20-33|substitute|(동) 대신하다, 교체하다 (명) 대리자, 대용품|substitute teacher|대체 교사
20-33|constitute|(동) 구성하다, ~이 되다|constitute a crime|범죄를 구성하다
20-33|be engaged in|~에 종사하고 있다, ~에 열중하다|be engaged in business|사업에 종사하다
20-33|be engaged to|~와 약혼한 사이다|be engaged to marry|결혼을 약속하다


20-34|address|(명) 주소 (동) 연설하다, 다루다(해결하다)|email address|이메일 주소
20-34|address|(동) 연설하다|He addressed the crowd.|그가 군중에게 연설했다.
20-34|address|(동) 다루다, 해결하다|address the problem|문제를 다루다(해결하다)
20-34|spring|(명) 봄, 온천, 샘, 용수철|hot spring|온천
20-34|spring|(명) 샘, 근원|mountain spring|산속의 샘
20-34|spring|(명) 용수철, 스프링|bed springs|침대 스프링
20-34|board|(명) 판, 이사회, 위원회 (동) 탑승하다, 하숙하다|blackboard|칠판
20-34|board|(명) 이사회, 위원회|school board|교육 위원회
20-34|board|(동) 탑승하다|board a plane|비행기에 탑승하다
20-34|board|(동) 하숙하다 (명) 식사|room and board|식숙(하숙)
20-34|block|(명) 사각형 덩어리, 구획 (동) 차단하다, 가리다|building block|건축 블록
20-34|block|(명) (도시의) 한 구역, 블록|walk a block|한 블록 걷다
20-34|block|(동) 차단하다, 방해하다|block the view|시야를 가리다
20-34|reason|(명) 이유, 이성 (동) 추론하다|for no reason|아무 이유 없이
20-34|reason|(명) 이성, 사고력|listen to reason|이성적으로 행동하다
20-34|reason out|(동) 논리적으로 추론하다|reason out|논리적으로 추론하다
20-34|cover|(동) 덮다, 담당하다, 보도하다 (명) 표지|cover the pot|냄비 뚜껑을 덮다
20-34|cover|(동) (어떤 지역을) 담당하다, 맡다|sales rep covers the area|영업 사원이 그 지역을 담당한다
20-34|cover|(동) 보도하다, 취재하다|media covers the news|언론이 뉴스를 보도하다
20-34|cover|(명) 표지, 덮개|book cover|책 표지
20-34|flat|(형) 평평한, 납작한, 펑크 난 (명) 아파트|flat surface|평평한 표면
20-34|flat|(형) 납작한, 평평한|flat bread|납작한 빵
20-34|flat|(형) (타이어가) 펑크 난|get a flat tire|타이어가 펑크 나다
20-34|flat|(명) 아파트|live in a flat|아파트에 살다
20-34|margin|(명) 차이, 이윤 폭, 가장자리, 여백|profit margin|이윤 폭
20-34|margin|(명) 수익, 이윤|increase margin|수익을 늘리다
20-34|margin|(명) 가장자리, (오차 등의) 범위|margin of error|오차 범위
20-34|issue|(명) 문제, (잡지 등의) 호 (동) 발급하다, 나오다|current issue|시사 문제
20-34|issue|(명) (정기 간행물의) 호, 발행물|back issue|과월 호
20-34|issue|(동) 발급하다, 발행하다|issue a passport|여권을 발급하다
20-34|issue|(동) 나오다, 흘러나오다|Smoke issues from the chimney.|굴뚝에서 연기가 나온다.
20-34|even|(부) 심지어, 훨씬 (형) 평평한, 짝수의, 공정한|even number|짝수
20-34|even|(형) 짝수의|even pages|짝수 페이지들
20-34|even|(형) 공정한, 대등한|get an even deal|공정한 거래를 하다
20-34|even|(부) 심지어 ~조차|even a child knows|심지어 아이도 안다
20-34|even|(부) 훨씬 (비교급 강조)|even better|훨씬 더 좋은
20-34|release|(동) 석방하다, 방출하다, 발표하다, 발매하다|release a prisoner|죄수를 석방하다
20-34|release|(동) 방출하다, 발산하다|release toxic gas|유독 가스를 방출하다
20-34|release|(동) 발표하다, 공개하다 (명) 보도 자료|press release|보도 자료
20-34|release|(동) 발매하다, 개봉하다, 발간하다|release an album|앨범을 발매하다
20-34|content|(명) 내용(물), 함량 (형) 만족하는|table of contents|목차
20-34|content|(명) 내용물|contents of the box|상자의 내용물
20-34|be content with|만족하다|be content with life|삶에 만족하다
20-34|content|(명) 함유량, 함량|high sugar content|높은 당 함량

21-1|provide|(동) 제공하다, 공급하다, 준비하다|provide students with books|학생들에게 책을 제공하다
21-1|develop|(동) 개발하다, 발전하다|develop a new skill|새로운 기술을 개발하다
21-1|cultural|(형) 문화의, 문화적인|cultural heritage|문화 유산
21-1|inform|(동) 알리다, 통지하다|inform us of the result|우리에게 결과를 알리다
21-1|social|(형) 사회의, 사교적인|social interaction|사회적 상호작용
21-1|improve|(동) 향상시키다, 향상하다|improve the quality of life|삶의 질을 향상시키다
21-1|individual|(명) 개인 (형) 개인의, 개인적인|respect individual rights|개인의 권리를 존중하다
21-1|require|(동) 필요로 하다, 요구하다|require patience|인내심을 필요로 하다
21-1|volunteer|(명) 자원봉사 (동) 자원하다|volunteer work|자원봉사 활동
21-1|behave|(동) 행동하다|behave responsibly|책임감 있게 행동하다
21-1|amount|(명) 총액, 총계, 액수, 양|a large amount of data|방대한 양의 데이터
21-1|relationship|(명) 관계|establish a relationship|관계를 맺다
21-1|employ|(동) 고용하다, 쓰다(채택하다)|employ a method|방법을 쓰다(채택하다)
21-1|attitude|(명) 태도, 입장|a positive attitude|긍정적인 태도
21-1|research|(명) 연구 (동) 조사하다|conduct research|연구를 수행하다
21-1|audience|(명) 청중, 관객|attract an audience|청중을 끌어모으다
21-1|challenge|(명) 도전 (동) 도전하다|face a challenge|도전에 직면하다
21-1|influence|(명) 영향 (동) 영향을 끼치다|have an influence on kids|아이들에게 영향을 미치다
21-1|material|(명) 자료, 재료, 물질|raw materials|원자재
21-1|opportunity|(명) 기회|miss an opportunity|기회를 놓치다
21-1|environment|(명) 환경|protect the environment|환경을 보호하다
21-1|expense|(명) 비용, 지출|at the expense of health|건강을 희생하여(대가로)
21-1|local|(형) 지방의, 지역의, 장소의|local residents|지역 주민들
21-1|involve|(동) 포함하다, 관련되다|be [involved] in the project|프로젝트에 참여(관련)하다
21-1|stress|(명) 스트레스 (동) 강조하다|stress the importance|중요성을 강조하다
21-1|therefore|(부) 그러므로, 그 결과|Therefore, it is true.|그러므로 그것은 사실이다.
21-1|contain|(동) 함유하다, 포함하다|contain harmful substances|해로운 물질을 포함하다
21-1|average|(명) 평균 (형) 평균의|above average|평균 이상
21-1|ride|(동) 타다 (명) 타기|give him a ride|그를 태워주다
21-1|encourage|(동) 촉구하다, 격려하다|encourage students to read|학생들이 독서하도록 장려하다
21-1|determine|(동) 결정하다, 결심하다|determine the cause|원인을 결정하다(알아내다)
21-1|international|(형) 국제의, 국제적인|international trade|국제 무역
21-1|consume|(동) 소비하다, 먹다|consume energy|에너지를 소비하다
21-1|impress|(동) 깊은 인상을 주다, 감동시키다|be deeply [impressed]|깊이 감명받다
21-1|object|(명) 물체, 목표 (동) 반대하다|object to the plan|계획에 반대하다
21-1|available|(형) 이용 가능한, 쓸모 있는|readily available|손쉽게 이용 가능한
21-1|positive|(형) 긍정적인, 확신하는|positive effect|긍정적인 효과
21-1|recognize|(동) 인지하다, 인정하다|recognize the value|가치를 알아보다(인정하다)
21-1|commodity|(명) 상품, 물품|basic commodity|생필품
21-1|comfort|(동) 편안하게 하다, 위로하다 (명) 편안, 위로|seek comfort|위안을 찾다
21-1|materialism|(명) 물질(만능)주의|rise of materialism|물질만능주의의 대두
21-1|unemployed|(형) 실직한|the unemployed|실직자들
21-1|employer|(명) 고용주|a fair employer|공정한 고용주
21-1|employee|(명) 고용인, 종업원|a loyal employee|충실한 직원
21-1|objection|(명) 반대|raise an objection|이의(반대)를 제기하다
21-1|pass away|돌아가시다|He [passed away] peacefully.|그는 평온하게 돌아가셨다.
21-1|give away|거저 주다, 누설하다|give away a secret|비밀을 누설하다


21-2|emotion|(명) 정서, 감정|express emotion|감정을 표현하다
21-2|amaze|(동) 놀라게 하다|be [amazed] at the news|소식에 놀라다 [6]
21-2|reduce|(동) 줄이다, 낮추다|reduce pollution|오염을 줄이다
21-2|discover|(동) 발견하다|discover a cure|치료법을 발견하다
21-2|decide|(동) 결심하다, 결정하다|decide to go|가기로 결심하다
21-2|benefit|(명) 이익 (동) 이익이 되다|mutual benefit|상호 이익
21-2|affect|(동) 영향을 미치다|affect the outcome|결과에 영향을 미치다
21-2|level|(명) 수준 (동) 수평으로 만들다 (형) 수평의|high level of anxiety|높은 수준의 불안
21-2|chemistry|(명) 화학|organic chemistry|유기 화학
21-2|immediate|(형) 즉각적인, 가까이에 있는|immediate action|즉각적인 조치
21-2|thus|(부) 그러므로, 따라서|Thus, we concluded.|따라서 우리는 결론 내렸다.
21-2|proper|(형) 적절한, 알맞은|proper treatment|적절한 대우
21-2|performance|(명) 공연, 성적, 성과|academic performance|학업 성취도
21-2|essence|(명) 본질, 정수|the essence of nature|자연의 본질
21-2|economic|(형) 경제의, 경제학의|economic growth|경제 성장
21-2|cell|(명) 세포, 작은 방, 독방|cell division|세포 분열
21-2|focus|(명) 초점 (동) 초점을 맞추다, 집중하다|focus on the problem|문제에 집중하다
21-2|issue|(명) 화제, 문제, 발행(물) (동) 발행하다|environmental issues|환경 문제들
21-2|participate|(동) 참여하다, 참가하다|participate in the event|행사에 참여하다
21-2|demand|(동) 요구하다 (명) 수요|supply and demand|수요와 공급
21-2|occur|(동) 일어나다, 발생하다|An accident [occurred].|사고가 발생했다.
21-2|complex|(형) 복잡한 (명) 복합체|complex structure|복잡한 구조
21-2|define|(동) 정의하다, 한계 짓다, 한정하다|define the term|용어를 정의하다
21-2|proud|(형) 자랑스러워하는|be proud of oneself|자신을 자랑스러워하다
21-2|aware|(형) 인지하는, 알고 있는|be aware of danger|위험을 인지하다
21-2|contact|(명) 접촉 (동) 접촉하다|keep in contact|연락하고 지내다
21-2|profession|(명) 전문직, 직종|medical profession|의료직
21-2|detail|(명) 세부적인 것 (동) 상술하다|in detail|상세하게
21-2|approach|(동) 접근하다 (명) 접근, 접근법|a new approach|새로운 접근법
21-2|career|(명) 직업, 경력|pursue a career|직업을 추구하다
21-2|package|(명) 꾸러미, 포장 (동) 포장하다|package tour|패키지 여행
21-2|disappear|(동) 사라지다|disappear from sight|시야에서 사라지다
21-2|novel|(명) 소설 (형) 참신한|a novel idea|참신한 아이디어
21-2|secure|(형) 안전한 (동) 안전하게 하다, 확보하다|secure a job|일자리를 확보하다
21-2|function|(명) 기능 (동) 기능하다, 작용하다|proper function|적절한 기능
21-2|despite|~에도 불구하고|despite the rain|비에도 불구하고
21-2|background|(명) 배경, 배경 지식|educational background|학력
21-2|solution|(명) 해결, 해결책|find a solution|해결책을 찾다
21-2|generate|(동) 일으키다, 발생시키다|generate electricity|전기를 발생시키다
21-2|eventually|(부) 결국|eventually succeed|결국 성공하다
21-2|astonish|(동) 놀라게 하다|be [astonished]|깜짝 놀라다 [9]
21-2|detect|(동) 탐지하다, 발견하다|detect a change|변화를 감지하다
21-2|beneficial|(형) 유익한|mutually beneficial|상호 유익한
21-2|appropriate|(형) 적절한, 알맞은|appropriate behavior|적절한 행동
21-2|insecure|(형) 불안정한|feel insecure|불안함을 느끼다
21-2|ignorant|(형) 무지한, 모르는|ignorant of the law|법을 모르는
21-2|hold back|억제하다, ~을 말리다|hold back tears|눈물을 참다
21-2|keep back|감추다|keep back the truth|진실을 숨기다


21-3|decrease|(동) 줄다, 줄이다 (명) 감소|decrease the risk|위험을 줄이다
21-3|recycle|(동) 재활용하다|recycle paper|종이를 재활용하다
21-3|desire|(명) 욕망, 욕구 (동) 바라다|a strong desire|강한 욕구
21-3|balance|(명) 균형, 은행 잔고 (동) 균형을 이루다|strike a balance|균형을 맞추다
21-3|negative|(형) 부정적인|negative attitude|부정적인 태도
21-3|follow|(동) 따라가다, 따르다|follow the rules|규칙을 따르다
21-3|account|(명) 은행 계좌, 이야기, 설명 (동) 설명하다|account for the error|오류를 설명하다
21-3|publish|(동) 발표하다, 출판하다|publish a book|책을 출판하다
21-3|occasion|(명) 경우, 특별한 일|on special occasions|특별한 경우에
21-3|replace|(동) 대체하다|replace A with B|A를 B로 대체하다
21-3|constant|(형) 일정한, 불변의|constant effort|꾸준한 노력
21-3|expert|(명) 전문가|an expert in this field|이 분야의 전문가
21-3|term|(명) 용어, 기간, 학기|technical terms|전문 용어들
21-3|relieve|(동) 경감하다, 안도시키다|relieve stress|스트레스를 덜다
21-3|describe|(동) 묘사하다, 표현하다|describe the scene|그 장면을 묘사하다
21-3|congratulate|(동) 축하하다|congratulate him on success|그의 성공을 축하하다
21-3|due|(형) 만기의, ~하기로 되어 있는|The report is due tomorrow.|그 보고서는 내일까지 제출해야 한다.
21-3|equipment|(명) 장치, 장비|protective equipment|보호 장비
21-3|biology|(명) 생물학|molecular biology|분자 생물학
21-3|imagine|(동) 상상하다|can't imagine life without you|너 없는 삶은 상상할 수 없다
21-3|compose|(동) 구성하다, 작곡하다, 작문하다|be [composed] [C] of water|물로 구성되다
21-3|genius|(명) 천재, 천재성|musical genius|음악 천재
21-3|reflect|(동) 반영하다, 반사하다, 숙고하다|reflect on oneself|자신을 되돌아보다
21-3|cause|(동) ~의 원인이 되다, 야기하다 (명) 원인|cause and effect|원인과 결과
21-3|frequent|(형) 빈번한 (동) 자주 가다|frequent visits|잦은 방문
21-3|factor|(명) 요인, 요소|key factor|핵심 요인
21-3|extreme|(형) 극단의, 극단적인 (명) 극단|extreme sports|익스트림 스포츠
21-3|tend|(동) ~하는 경향이 있다|tend to ignore|무시하는 경향이 있다
21-3|politics|(명) 정치, 정치학|discuss politics|정치를 논하다
21-3|insist|(동) 주장하다|insist on going|가겠다고 고집하다
21-3|extend|(동) 연장하다, 넓히다|extend the deadline|마감 기한을 연장하다
21-3|lonely|(형) 외로운|feel lonely|외로움을 느끼다
21-3|habitat|(명) 서식지, 주거지|natural habitat|자연 서식지
21-3|mental|(형) 정신의|mental health|정신 건강
21-3|steady|(형) 안정된, 한결같은, 꾸준한|slow but steady|느리지만 꾸준한
21-3|exchange|(동) 교환하다 (명) 교환|exchange opinions|의견을 교환하다
21-3|active|(형) 활동적인, 적극적인|active participant|적극적인 참여자
21-3|species|(명) 종|endangered species|멸종 위기종
21-3|athletic|(형) 운동의, 운동 경기의|athletic ability|운동 능력
21-3|dental|(형) 치아의|dental care|치아 관리
21-3|decline|(동) 감소하다, 거절하다 (명) 감소, 하락|sharp decline|급격한 감소
21-3|occasionally|(부) 때때로, 가끔|occasionally visit|가끔 방문하다
21-3|substitute|(동) 대체하다 (명) 대리자, 대용품|substitute teacher|대체 교사
21-3|in terms of|~ 면에서, ~의 관점에서|in terms of cost|비용 면에서
21-3|due to|~때문에|delay due to snow|눈으로 인한 지연
21-3|comprise|(동) 구성하다|comprise the majority|다수를 차지하다
21-3|extent|(명) 넓이, 범위|to some extent|어느 정도까지는
21-3|bring up|키우다, 양육하다|[bring up] children|아이들을 기르다
21-3|sum up|요약하다|To [sum up], it is a great movie.|요약하자면, 그것은 훌륭한 영화이다.



21-4|delight|(명) 기쁨 (동) 기쁘게 하다|take delight in learning|배우는 즐거움을 느끼다
21-4|confident|(형) 자신 있는|be confident of success|성공을 확신하다
21-4|gradually|(부) 점차, 서서히|gradually increase|점차 증가하다
21-4|shadow|(명) 그림자 (동) 그늘지게 하다|cast a shadow|그림자를 드리우다
21-4|access|(명) 접근, 입장, 이용 (동) 접근하다|have access to the internet|인터넷에 접속할 수 있다
21-4|announce|(동) 발표하다, 알리다|announce the winner|우승자를 발표하다
21-4|allow|(동) 허락하다, 인정하다|allow him to go|그가 가는 것을 허락하다
21-4|firm|(형) 확고한, 단단한 (명) 회사|a law firm|법률 회사
21-4|vary|(동) 바꾸다, 변하다, 다르다|Opinions vary.|의견이 다양하다.
21-4|injure|(동) 상처를 입히다, 손상시키다|be seriously [injured] [I]|심하게 다치다
21-4|permit|(동) 허용(허락)하다|permit entry|입장을 허용하다
21-4|response|(명) 응답, 반응|quick response|빠른 반응
21-4|increase|(동) 증가하다 (명) 증가, 이자|increase in population|인구 증가
21-4|electricity|(명) 전기|generate electricity|전기를 생산하다
21-4|disabled|(형) 장애를 가진, 무능력하게 된|facilities for the disabled|장애인용 시설
21-4|lack|(명) 부족 (동) ~이 부족하다|lack of sleep|수면 부족
21-4|possibility|(명) 가능성, 가망|future possibility|미래의 가능성
21-4|concentrate|(동) 집중하다|concentrate on study|공부에 집중하다
21-4|emphasize|(동) 강조하다|emphasize the importance|중요성을 강조하다
21-4|astronomy|(명) 천문학|study astronomy|천문학을 공부하다
21-4|flood|(명) 홍수 (동) 범람시키다|flood victims|수해 이재민
21-4|fuel|(명) 연료 (동) 연료를 가하다|fossil fuel|화석 연료
21-4|manufacture|(동) 제조하다 (명) 제조, 제품|manufacture cars|자동차를 제조하다
21-4|movement|(명) 움직임, 운동|political movement|정치적 운동
21-4|capable|(형) 할 수 있는, 유능한|be capable of doing|~할 능력이 있다
21-4|combine|(동) 결합시키다, 겸비하다|combine theory with practice|이론과 실제를 결합하다
21-4|gene|(명) 유전자|gene therapy|유전자 치료
21-4|threat|(명) 위협, 협박|pose a threat|위협을 가하다
21-4|victim|(명) 희생, 희생자|save the victim|희생자를 구하다
21-4|pressure|(명) 압력, 압박 (동) 압력을 가하다|under pressure|압박감을 느끼는
21-4|accompany|(동) 동반하다, 수반하다|accompany a friend|친구와 동행하다
21-4|frustrate|(동) 좌절시키다|feel [frustrated] [F]|좌절감을 느끼다
21-4|construct|(동) 건설하다|construct a building|건물을 짓다
21-4|launch|(동) 발사하다, 시작하다, 출시하다 (명) 발사, 개시, 출시|launch a campaign|캠페인을 시작하다
21-4|commerce|(명) 상업, 교역|e-commerce|전자 상거래
21-4|entertain|(동) 접대하다, 즐겁게 하다|entertain guests|손님을 즐겁게 하다
21-4|predict|(동) 예언하다, 예측하다|predict the weather|날씨를 예측하다
21-4|apologize|(동) 사과하다|apologize for the mistake|실수에 대해 사과하다
21-4|sight|(명) 시야, 광경, 시력|out of sight|시야에서 벗어난
21-4|quantity|(명) 양|quality over quantity|양보다 질

21-5|conclude|(동) 결론짓다, 끝내다|conclude that he is right|그가 옳다고 결론짓다
21-5|donate|(동) 기부하다|donate to charity|자선단체에 기부하다
21-5|personality|(명) 개성, 성격, 특색|strong personality|강한 성격
21-5|struggle|(동) 싸우다, 노력하다 (명) 투쟁, 노력|struggle to survive|살아남으려 애쓰다
21-5|advantage|(명) 유리한 점, 이익|take advantage of|~을 이용하다
21-5|variety|(명) 다양성, 종류|a wide variety of|매우 다양한
21-5|enable|(동) 가능하게 하다|enable him to walk|그가 걷는 것을 가능하게 하다
21-5|instruction|(명) 지시, 설명서, 가르침|follow instructions|지시 사항을 따르다
21-5|assume|(동) 추정하다, (책임을) 떠맡다|assume responsibility|책임을 떠맡다
21-5|attempt|(동) 시도하다 (명) 시도|attempt to escape|탈출을 시도하다
21-5|incredible|(형) 믿을 수 없는, 굉장한|incredible speed|믿을 수 없는 속도
21-5|feature|(명) 특징, 얼굴 생김새 (동) 특징으로 하다, 주연하다|unique feature|독특한 특징
21-5|confuse|(동) 혼동하다, 혼란시키다|confuse A with B|A와 B를 혼동하다
21-5|electronic|(형) 전자의, 전자 공학의|electronic device|전자기기
21-5|absorb|(동) 흡수하다, 열중시키다|absorb knowledge|지식을 흡수하다
21-5|indicate|(동) 가리키다, 나타내다|indicate the direction|방향을 가리키다
21-5|analyze|(동) 분석하다|analyze data|데이터를 분석하다
21-5|stock|(명) 재고품, 저장, 가축 (동) 저장하다|out of stock|재고가 없는
21-5|resident|(형) 거주하는 (명) 거주자, 레지던트|local residents|지역 거주민들
21-5|labor|(명) 노동, 산고 (동) 노동하다|child labor|아동 노동
21-5|remark|(동) 의견을 말하다, 주목하다 (명) 의견, 주목|make a rude remark|무례한 발언을 하다
21-5|moral|(형) 도덕적인|moral duty|도덕적 의무
21-5|embarrassed|(형) 당황한|feel embarrassed|당황스럽다
21-5|claim|(동) 주장하다, 요구하다 (명) 주장, 요구|claim damages|손해배상을 청구하다
21-5|reasonable|(형) 논리적인, 합리적인, 분별력이 있는|reasonable price|합리적인 가격
21-5|interrupt|(동) 방해하다, 중단하다|Don't interrupt me.|나를 방해하지 마라.
21-5|limit|(동) 제한하다, 한정하다 (명) 제한|speed limit|속도제한
21-5|creature|(명) 생물, 피조물|living creatures|살아있는 생물들
21-5|heal|(동) 치료하다, 낫게 하다|Time heals all wounds.|시간이 모든 상처를 치유한다.
21-5|establish|(동) 설립하다, 확립하다, 제정하다|establish a theory|이론을 확립하다
21-5|revolution|(명) 혁명, 갑작스러운 변화, 회전|Industrial Revolution|산업 혁명
21-5|criticize|(동) 비난하다, 비평하다|criticize the policy|정책을 비판하다
21-5|convince|(동) 확신시키다, 납득시키다|convince him of the truth|그에게 진실을 확신시키다
21-5|efficient|(형) 효율적인, 유능한|energy efficient|에너지 효율적인
21-5|stranger|(명) 낯선 사람, 문외한|total stranger|생판 모르는 사람
21-5|tide|(명) 조수, 흐름|The tide turns.|형세가 역전되다.
21-5|obtain|(동) 얻다, 획득하다|obtain permission|허락을 얻다
21-5|assist|(동) 도움을 주다|assist in the work|일을 돕다
21-5|disaster|(명) 재앙, 재난, 재해|natural disaster|자연재해
21-5|terrific|(형) 굉장한, 훌륭한|a terrific idea|아주 훌륭한 아이디어


21-6|specific|(형) 구체적인, 특정한|specific example|구체적인 예시
21-6|react|(동) 반응하다, 반작용하다|react quickly|빠르게 반응하다
21-6|independent|(형) 독립적인|independent study|독립적인 연구(자습)
21-6|theory|(명) 이론|scientific theory|과학 이론
21-6|qualify|(동) 자격을 얻다|qualify for the job|그 일에 자격을 얻다
21-6|consider|(동) 숙고하다, 고려하다|consider it done|그것을 된 것으로 간주하다
21-6|recall|(동) 상기하다, 철회하다, 회수하다 (명) 상기, 철회, 회수|recall a memory|기억을 상기하다
21-6|risk|(명) 위험 (동) 위험을 감수하다|take a risk|위험을 감수하다
21-6|treatment|(명) 취급, 대우, 치료법|medical treatment|의학적 치료
21-6|engage|(동) 관여하다, 약속하다, 약혼하다|engage in politics|정치에 관여하다
21-6|motivate|(동) 동기를 부여하다|motivate students|학생들에게 동기를 부여하다
21-6|clue|(명) 실마리, 단서|find a clue|단서를 찾다
21-6|resource|(명) 자원, 지략|natural resource|천연자원
21-6|probable|(형) 가용한, 개연성이 있는, 그럴싸한|probable cause|개연성 있는 원인
21-6|depress|(동) 우울하게 하다, 의기소침하게 하다|feel [depressed]|우울함을 느끼다
21-6|fascinate|(동) 매료시키다, 마음을 빼앗다|be [fascinated] by art|예술에 매료되다
21-6|violent|(형) 난폭한, 폭력적인|violent crime|폭력 범죄
21-6|alarm|(명) 놀람, 경보|sound the alarm|경보를 울리다
21-6|edge|(명) 가장자리, 날카로움, 우위|have an edge over others|남보다 우위에 있다
21-6|deserve|(동) 받을 만하다|deserve praise|칭찬받을 만하다
21-6|route|(명) 길, 통로, 항로|trade route|무역로
21-6|psychology|(명) 심리학, 심리|child psychology|아동 심리학
21-6|passion|(명) 열정|passion for music|음악에 대한 열정
21-6|import|(동) 수입하다, 의미하다 (명) 수입|import goods|상품을 수입하다
21-6|purchase|(동) 구매하다 (명) 구매|purchase online|온라인으로 구매하다
21-6|conscience|(명) 양심|clear conscience|깨끗한 양심
21-6|pose|(동) 자세를 취하다, 제기하다 (명) 자세|pose a problem|문제를 제기하다
21-6|length|(명) 길이|length of time|시간의 길이
21-6|severe|(형) 심한, 엄격한|severe pain|심한 고통
21-6|decade|(명) 10년, 10년간|over a decade|10년 넘게
21-6|occupy|(동) 차지하다, 전념하다|occupy space|공간을 차지하다
21-6|acquire|(동) 습득하다|acquire knowledge|지식을 습득하다
21-6|interact|(동) 상호 작용하다|interact with peers|또래와 상호 작용하다
21-6|brief|(형) 간단한 (명) 간단한 보고 (동) 간단히 알리다|brief summary|간단한 요약
21-6|observe|(동) 관찰하다, 보다, 준수하다|observe the rules|규칙을 준수하다
21-6|poetry|(명) 시, 운문|write poetry|시를 쓰다
21-6|salary|(명) 급료, 봉급|annual salary|연봉
21-6|grain|(명) 곡물, 낟알|grain production|곡물 생산
21-6|skip|(동) 거르다, 깡충깡충 뛰다|skip lunch|점심을 거르다
21-6|meaningful|(형) 의미 있는, 의미심장한|meaningful life|의미 있는 삶



21-7|survival|(명) 생존|survival of the fittest|적자생존
21-7|comment|(명) 논평 (동) 논평하다|no comment|할 말 없음
21-7|leap|(동) 뛰다, 도약하다 (명) 도약|leap of faith|믿음의 도약
21-7|plain|(형) 평범한, 명백한 (명) 평원, 평야|plain truth|명백한 진실
21-7|typical|(형) 전형적인, 대표적인|typical example|전형적인 예
21-7|mere|(형) 단지 ~에 불과한|a mere child|단지 어린아이에 불과한
21-7|mechanic|(명) 기계공, 정비공|car mechanic|자동차 정비공
21-7|mood|(명) 기분, 분위기|in a good mood|기분이 좋은
21-7|approve|(동) 찬성하다, 승인하다|approve the plan|계획을 승인하다
21-7|rural|(형) 시골의|rural life|시골 생활
21-7|finance|(명) 재정, 재무, 금융 (동) 자금을 조달하다|finance a project|프로젝트에 자금을 대다
21-7|seek|(동) 찾다, 추구하다|seek advice|조언을 구하다
21-7|operation|(명) 작업, 운영, 수술|rescue operation|구조 작업
21-7|crime|(명) 범죄|commit a crime|범죄를 저지르다
21-7|awful|(형) 끔찍한, 지독한|awful smell|끔찍한 냄새
21-7|series|(명) 연속, 시리즈물|a series of choices|일련의 선택들
21-7|exhausted|(형) 고발된, 기진맥진한|feel exhausted|기진맥진하다
21-7|absolute|(형) 완전한, 절대적인|absolute power|절대 권력
21-7|surround|(동) 둘러싸다|be [surrounded] by nature|자연에 둘러싸이다
21-7|display|(동) 전시하다, 나타내다 (명) 전시|display talent|재능을 보여주다
21-7|policy|(명) 정책, 수단, 방법|foreign policy|외교 정책
21-7|mass|(명) 많은 양, 덩어리, 집단, 대중|mass media|대중매체
21-7|committee|(명) 위원회|join a committee|위원회에 가입하다
21-7|accurate|(형) 정확한|accurate data|정확한 데이터
21-7|arrange|(동) 정리하다, 준비하다, 각색하다|arrange a meeting|회의를 마련하다
21-7|facility|(명) 시설, 편의, 재능|sports facility|스포츠 시설
21-7|consult|(동) 상담하다, 참고하다|consult a doctor|의사와 상담하다
21-7|refer|(동) 언급하다, 위탁하다|refer to the map|지도를 참조하다
21-7|attach|(동) 붙이다, 붙다, 첨부하다, 소속시키다|attach a file|파일을 첨부하다
21-7|recover|(동) 회복하다, 되찾다|recover from illness|병에서 회복하다
21-7|reward|(명) 보상 (동) 보답하다|reward for effort|노력에 대한 보상
21-7|enormous|(형) 엄청난, 거대한|enormous impact|막대한 영향
21-7|domestic|(형) 국내의, 가정의|domestic flight|국내선 비행기
21-7|wealth|(명) 부, 재산|accumulate wealth|부를 축적하다
21-7|elementary|(형) 초보의, 기초적인|Elementary level.|기초 수준.
21-7|gap|(명) 격차, 틈|generation gap|세대 차이
21-7|except|~을 제외하고는 (동) 제외하다|everyone except me|나를 제외한 모두
21-7|journey|(명) 여행, 여정|Life is a journey.|인생은 여정이다.
21-7|survey|(명) 설문 조사 (동) 조사하다, 둘러보다|conduct a survey|설문 조사를 실시하다
21-7|downtown|(명) 도심 (형) 도심의 (부) 도심지에|go downtown|시내에 가다


21-8|previous|(형) 앞의, 이전의|previous experience|이전의 경험
21-8|produce|(동) 생산하다, 제조하다|produce results|결과를 낳다
21-8|remain|(동) 여전히 ~이다, 남다|remain silent|침묵을 지키다
21-8|entitle|(동) 자격을 주다, 제목을 붙이다|be [entitled] to vote|투표할 자격이 있다
21-8|slight|(형) 약간의, 경미한|slight difference|약간의 차이
21-8|include|(동) 포함하다|include tax|세금을 포함하다
21-8|delay|(동) 연기하다, 미루다 (명) 지연|delay departure|출발을 연기하다
21-8|file|(명) 서류철, 파일 (동) 파일에 철하다, 제기하다|file a complaint|불만을 제기하다
21-8|ethic|(명) 윤리|work ethic|직업 윤리
21-8|instant|(형) 즉각의, 즉석의 (명) 순간|instant noodle|즉석면(라면)
21-8|reveal|(동) 드러내다, 폭로하다 (명) 출현, 폭로|reveal the truth|진실을 밝히다
21-8|suppose|(동) 가정하다, 추측하다|Suppose that it rains.|비가 온다고 가정해 보자.
21-8|leisure|(명) 여가, 자유시간 (형) 한가한|leisure activity|여가 활동
21-8|urban|(형) 도시의|urban area|도시 지역
21-8|witness|(명) 목격자, 증인 (동) 목격하다|witness a crime|범죄를 목격하다
21-8|admit|(동) 인정하다, 입장을 허락하다|admit defeat|패배를 인정하다
21-8|muscle|(명) 근육, 힘 (동) 강제하다|build muscle|근육을 키우다
21-8|device|(명) 장치, 고안, 방책|safety device|안전장치
21-8|borrow|(동) 빌리다|borrow money|돈을 빌리다
21-8|owe|(동) 빚지고 있다, ~에 돌리다|owe A to B|A는 B 덕분이다
21-8|intend|(동) ~할 작정이다, 의도하다|intend to go|갈 작정이다
21-8|aspect|(명) 관점, 양상, 면|positive aspect|긍정적인 측면
21-8|potential|(형) 잠재적인 (명) 잠재력|full potential|무한한 잠재력
21-8|award|(동) 수여하다 (명) 상|win an award|상을 받다
21-8|preserve|(동) 보존하다, 보호하다|preserve tradition|전통을 보존하다
21-8|spot|(명) 지점, 얼룩 (동) 발견하다, 얼룩지게 하다|spot a difference|차이점을 발견하다
21-8|underground|(형) 지하의, 비밀의 (명) 지하|underground passage|지하 통로
21-8|consequence|(명) 결과, 중요성|face the consequences|결과를 직면하다
21-8|target|(명) 목표, 표적 (동) 목표로 삼다|target audience|목표 청중
21-8|spark|(명) 불꽃, 불똥 (동) 불꽃을 일으키다, 촉발하다|spark a debate|토론을 촉발하다
21-8|accomplish|(동) 이루다, 성취하다|accomplish a goal|목표를 성취하다
21-8|adopt|(동) 채택하다, 입양하다|adopt a method|방법을 채택하다
21-8|unique|(형) 독특한, 유일한|unique style|독특한 스타일
21-8|slip|(동) 미끄러지다, 실수하다 (명) 종이조각|slip on ice|얼음판에 미끄러지다
21-8|civilization|(명) 문명|ancient civilization|고대 문명
21-8|row|(명) 열, 줄 (동) 배를 젓다|in a row|일렬로
21-8|horizon|(명) 수평선, 지평선|expand one's horizon|시야를 넓히다
21-8|atmosphere|(명) 대기, 분위기|friendly atmosphere|친근한 분위기
21-8|label|(명) 꼬리표, 라벨 (동) 라벨을 붙이다|label the bottles|병에 라벨을 붙이다
21-8|decorate|(동) 장식하다, ~에게 훈장을 주다|decorate the room|방을 장식하다


21-9|identify|(동) 확인하다, 식별하다, 동일시하다|identify the problem|문제를 확인하다
21-9|standard|(명) 기준, 표준 (형) 기준의, 표준의|safety standard|안전 기준
21-9|scale|(명) 규모, 저울, 비늘|large scale|대규모
21-9|evident|(형) 명백한|self-evident|자명한
21-9|seldom|(부) 거의 ~ 않은|seldom seen|좀처럼 보기 드문
21-9|secretary|(명) 비서, 서기관, 장관|private secretary|개인 비서
21-9|basis|(명) 기초, 원리, 기준|on a daily basis|매일매일
21-9|automatic|(형) 자동적인, 기계적인|automatic response|자동적인 반응
21-9|region|(명) 지역|tropical region|열대 지역
21-9|empower|(동) 권한을 주다|empower women|여성에게 권한을 주다
21-9|addict|(동) 중독시키다 (명) 중독자|internet addict|인터넷 중독자
21-9|disappoint|(동) 실망시키다|Don't disappoint me.|나를 실망시키지 마라.
21-9|artificial|(형) 인공적인, 인조의|artificial intelligence|인공 지능
21-9|possess|(동) 소유하다, ~의 마음을 사로잡다|possess wisdom|지혜를 소유하다
21-9|get rid of|~을 제거하다|Get rid of it.|그것을 제거해라.
21-9|realistic|(형) 현실적인, 현실주의의|realistic goal|현실적인 목표
21-9|encounter|(동) 만나다 (명) 마주침|encounter difficulties|어려움에 부닥치다
21-9|differ|(동) 다르다, 의견을 달리하다|Opinions differ.|의견이 다르다.
21-9|principle|(명) 원칙, 원리|basic principle|기본 원칙
21-9|memorize|(동) 기억하다, 암기하다|memorize words|단어를 암기하다
21-9|physics|(명) 물리학|laws of physics|물리 법칙
21-9|evaluate|(동) 평가하다|evaluate performance|성과를 평가하다
21-9|tremendous|(형) 굉장한, 무시무시한|tremendous effort|엄청난 노력
21-9|application|(명) 적용, 신청|job application|구직 신청
21-9|vote|(명) 투표 (동) 투표하다|cast a vote|표를 던지다
21-9|spread|(명) 퍼짐, 확산 (동) 퍼지다, 펼치다|spread rumors|소문을 퍼뜨리다
21-9|impact|(명) 충격, 영향 (동) 충격을 주다|environmental impact|환경적 영향
21-9|cooperate|(동) 협력하다|cooperate with others|타인과 협력하다
21-9|emit|(동) 방출하다|emit light|빛을 방출하다
21-9|request|(명) 요청 (동) 요청하다|on request|요청 시에
21-9|guarantee|(동) 보증하다 (명) 보증|satisfaction [guaranteed]|만족 보장
21-9|resist|(동) 저항하다|resist temptation|유혹에 저항하다
21-9|fulfill|(동) 달성하다, 이행하다, 실현하다|fulfill a dream|꿈을 이루다
21-9|stink|(동) 역겹다, 악취를 풍기다 (명) 악취|make a stink|소동을 피우다
21-9|grant|(동) 승인하다, 수여하다|The government [granted] permission.|정부는 허가를 승인했다.
21-9|rely|(동) 의지하다, 믿다|rely on friends|친구에게 의지하다
21-9|permanent|(형) 영원한, 영구적인|permanent job|정규직
21-9|emergency|(명) 비상사태|emergency room|응급실
21-9|substance|(명) 물질, 본질, 실체|toxic substance|유독 물질
21-9|theme|(명) 주제, 화제, 논제|main theme|주요 테마


21-10|hesitate|(동) 주저하다, 망설이다|Don't hesitate.|주저하지 마라.
21-10|location|(명) 장소, 위치|exact location|정확한 위치
21-10|restrict|(동) 제한하다, 한정하다|restrict access|접근을 제한하다
21-10|organism|(명) 유기체, 생물, 생명체|micro-organism|미생물
21-10|interpret|(동) 해석하다, 통역하다|interpret a dream|꿈을 해석하다
21-10|offer|(동) 제공하다, 제안하다 (명) 제공, 제안|offer help|도움을 제공하다
21-10|distribute|(동) 분배하다, 분포시키다|distribute wealth|부를 분배하다
21-10|rainforest|(명) 우림|tropical rainforest|열대 우림
21-10|circumstance|(명) 상황, 환경|under no circumstances|어떤 상황에서도
21-10|resolve|(동) 결심하다, 해결하다, 분해하다|resolve a conflict|갈등을 해결하다
21-10|suitable|(형) 적절한, 적합한|suitable for children|아이들에게 적합한
21-10|curve|(명) 곡선, 속임수|learning curve|학습 곡선
21-10|annoy|(동) 괴롭히다, 귀찮게 하다|get [annoyed]|짜증 나다
21-10|frighten|(동) 겁먹게 하다|be [frightened] of dogs|개를 무서워하다
21-10|estimate|(명) 견적, 평가 (동) 평가하다|estimate the cost|비용을 추산하다
21-10|refuse|(동) 거절하다|refuse an offer|제안을 거절하다
21-10|adventure|(명) 모험 (동) 위험에 빠뜨리다|spirit of adventure|모험심
21-10|entrance|(명) 입장, 입구, 입학|entrance exam|입학 시험
21-10|persuade|(동) 설득하다|persuade him to go|그가 가도록 설득하다
21-10|perceive|(동) 인지하다, 인식하다|perceive danger|위험을 인지하다
21-10|recite|(동) 암송하다|recite a poem|시를 암송하다
21-10|rub|(동) 문질러 닦다, 문지르다|rub one's eyes|눈을 비비다
21-10|cabin|(명) 오두막집, 객실, 선실|log cabin|통나무 오두막
21-10|gear|(명) 장비, 기어 (동) 맞게 조정하다|hiking gear|등산 장비
21-10|ray|(명) 광선|x-ray|엑스선
21-10|release|(동) 놓아주다, 방출하다, 발표하다 (명) 석방, 발표|release stress|스트레스를 풀다
21-10|rank|(명) 등급, 지위 (동) 매기다|rank first|1위를 차지하다
21-10|symphony|(명) 교향곡|symphony orchestra|교향악단
21-10|envy|(명) 부러움 (동) 부러워하다|green with envy|몹시 부러워하는
21-10|corporate|(형) 회사의, 법인의|corporate culture|기업 문화
21-10|alternative|(명) 대안 (형) 대안의|alternative energy|대체 에너지
21-10|retire|(동) 은퇴하다|retire from work|직장에서 은퇴하다
21-10|appeal|(동) 호소하다, 항의하다, 관심을 끌다 (명) 호소, 항의, 매력|appeal to emotions|감정에 호소하다
21-10|identical|(형) 동일한, 일란성의|identical twins|일란성 쌍둥이
21-10|investment|(명) 투자|foreign investment|외국인 투자
21-10|autograph|(명) 서명, 사인 (동) 서명하다|ask for an autograph|사인을 요청하다
21-10|slave|(명) 노예|slave trade|노예 무역
21-10|harm|(명) 손해, 손상 (동) 해치다|do more harm than good|득보다 실이 많다
21-10|authority|(명) 권위, 당국|authority figure|권위자
21-10|innocence|(명) 결백, 무죄, 순진|prove innocence|결백을 증명하다


21-11|receive|(동) 받다|receive a letter|편지를 받다
21-11|infant|(명) 유아 (형) 유아의, 미발달의|infant mortality|영아 사망률
21-11|calculate|(동) 계산하다|calculate the cost|비용을 계산하다
21-11|charity|(명) 자비, 자선 단체, 구호물자|give to charity|자선단체에 기부하다
21-11|accept|(동) 받아들이다|accept an offer|제안을 받아들이다
21-11|depend|(동) 의지하다|depend on parents|부모님께 의지하다
21-11|whereas|~인 반면에|poor whereas happy|가난하지만 행복한
21-11|broad|(형) 넓은, 광범위한|broad shoulders|넓은 어깨
21-11|treat|(동) 여기다, 대우하다, 처리하다, 치료하다|treat with respect|존중하며 대우하다
21-11|ignorant|(형) 무식한, 모르는|ignorant of the fact|사실을 모르는
21-11|pure|(형) 순수한|pure gold|순금
21-11|extinct|(형) 멸종된, 꺼진|become extinct|멸종되다
21-11|household|(명) 가정 (형) 가족의|household chores|집안일
21-11|refund|(명) 반환, 환불 (동) 환불하다|get a refund|환불받다
21-11|continue|(동) 계속하다|continue to grow|계속 성장하다
21-11|institute|(명) 연구소, 협회 (동) 설립하다, 제정하다|research institute|연구소
21-11|lately|(부) 최근에|Have you seen him lately?|최근에 그를 본 적 있니?
21-11|ashamed|(형) 부끄러워하는|be ashamed of oneself|자신을 부끄러워하다
21-11|dense|(형) 조밀한, 밀집한|dense forest|울창한 숲
21-11|rescue|(동) 구조하다 (명) 구조|rescue team|구조대
21-11|destination|(명) 목적지|final destination|최종 목적지
21-11|expand|(동) 확장하다|expand business|사업을 확장하다
21-11|compete|(동) 경쟁하다|compete with others|타인과 경쟁하다
21-11|evolution|(명) 진화|Theory of Evolution|진화론
21-11|hire|(동) 고용하다|hire new staff|새 직원을 고용하다
21-11|genuine|(형) 진짜의, 성실한|genuine leather|진짜 가죽
21-11|status|(명) 상태, 지위, 현상|social status|사회적 지위
21-11|military|(형) 군대의 (명) 군대|military service|군 복무
21-11|logic|(명) 논리, 논리학|simple logic|단순한 논리
21-11|gravity|(명) 중력|Law of Gravity|중력의 법칙
21-11|isolate|(동) 고립시키다|[isolate] the patient|환자를 격리하다
21-11|commit|(동) 저지르다, 전념하다, 맡기다|commit a crime|범죄를 저지르다
21-11|sum|(명) 총합, 합계 (동) 합계하다|the sum of money|돈의 합계
21-11|conserve|(동) 보존하다|conserve energy|에너지를 보존하다
21-11|concept|(명) 개념|basic concept|기본 개념
21-11|swing|(동) 흔들다, 진동하다 (명) 그네|swing back and forth|앞뒤로 흔들다
21-11|sensible|(형) 분별 있는, 현명한|sensible decision|현명한 결정
21-11|marriage|(명) 결혼, 혼인|happy marriage|행복한 결혼 생활
21-11|reproduce|(동) 재생하다, 복제하다, 번식하다|reproduce quickly|빠르게 번식하다
21-11|tone|(명) 어조, 말투, 음 (동) 어떤 어조로 하다|serious tone|진지한 어조


21-12|cancel|(동) 취소하다|cancel the meeting|회의를 취소하다
21-12|return|(동) 돌아오다, 돌려주다 (명) 귀환, 반납, 수익|return home|집으로 돌아오다
21-12|invitation|(명) 초대, 초대장|accept an invitation|초대를 수락하다
21-12|precise|(형) 정확한|precise measurement|정확한 측정
21-12|formal|(형) 공식적인, 정식의|formal dress|정장
21-12|apparent|(형) 분명한, 명백한|It is apparent that|~임이 명백하다
21-12|departure|(명) 출발|departure time|출발 시간
21-12|visual|(형) 시각의|visual aids|시각 자료
21-12|current|(형) 현재의 (명) 해류, 흐름|current situation|현재 상황
21-12|agriculture|(명) 농업|sustainable agriculture|지속 가능한 농업
21-12|leak|(명) 새는 곳, 구멍 (동) 새다, 누설하다|gas leak|가스 누출
21-12|portion|(명) 일부, 부분 (동) 분할하다|a large portion|큰 부분
21-12|trend|(명) 추세, 경향|current trend|현재의 추세
21-12|particle|(명) 입자, 극소량|dust particles|먼지 입자들
21-12|rite|(명) 의식, 의례|rite of passage|통과 의례
21-12|distinct|(형) 별개의, 뚜렷한|distinct difference|뚜렷한 차이
21-12|component|(명) 구성 요소 (형) 구성하는|key component|핵심 구성 요소
21-12|poverty|(명) 빈곤, 가난|live in poverty|빈곤하게 살다
21-12|sculpture|(명) 조각 (동) 조각하다|bronze sculpture|청동 조각상
21-12|descend|(동) 내려오다, 물려주다|descend the stairs|계단을 내려오다
21-12|universal|(형) 보편적인, 우주의|universal truth|보편적인 진리
21-12|surface|(명) 표면, 수면, 지면|smooth surface|매끄러운 표면
21-12|be eager to|간절히 ~하고 싶어 하다|He is [eager] to learn Korean.|그는 한국어를 배우기를 갈망한다.
21-12|legal|(형) 법률의, 합법의|legal action|법적 조치
21-12|annual|(형) 연례의, 1년의, 1년간의|annual report|연차 보고서
21-12|trap|(명) 함정, 덫 (동) 덫을 놓다, 막다|fall into a trap|함정에 빠지다
21-12|demonstrate|(동) 논증하다, 설명하다, 시위하다, 보여 주다|demonstrate ability|능력을 증명하다
21-12|companion|(명) 동료, 동반자|travel companion|여행 동료
21-12|democracy|(명) 민주주의, 민주주의 국가|spread democracy|민주주의를 확산시키다
21-12|mature|(형) 성숙한, 익은 (동) 성숙해지다|mature attitude|성숙한 태도
21-12|brilliant|(형) 훌륭한, 명석한|brilliant idea|훌륭한 아이디어
21-12|faith|(명) 신념, 믿음|have faith in God|신에 대한 믿음을 가지다
21-12|aim|(동) 겨냥하다 (명) 조준, 목표|aim at success|성공을 목표로 하다
21-12|spare|(형) 여분의 (동) 용서하다, 남겨주다|spare time|여가 시간
21-12|transfer|(동) 이동하다, 옮기다, 갈아타다|transfer to another bus|다른 버스로 환승하다
21-12|oppose|(동) 반대하다|oppose the plan|그 계획에 반대하다
21-12|desperate|(형) 필사적인, 절망적인|desperate attempt|필사적인 시도
21-12|remote|(형) 멀리 떨어진, 희박한, 드문|remote control|리모컨
21-12|offend|(동) 기분을 상하게 하다, 저지르다|offend others|남의 기분을 상하게 하다
21-12|awake|(형) 깨어 있는 (동) 깨우다, 깨다|stay awake|깨어 있다


21-13|option|(명) 선택, 선택권|no other option|다른 선택권이 없는
21-13|insight|(명) 통찰, 통찰력|gain insight into|~에 대한 통찰력을 얻다
21-13|achieve|(동) 이루다, 달성하다|achieve a goal|목표를 달성하다
21-13|civil|(형) 시민의, 민간의|civil rights|시민권
21-13|pause|(명) 중단 (동) 중단하다, 잠시 멈추다|pause for a moment|잠시 멈추다
21-13|prove|(동) 입증하다, 판명되다|prove to be true|사실임이 판명되다
21-13|lecture|(명) 강의 (동) 강의하다|give a lecture|강의를 하다
21-13|minor|(형) 사소한 (명) 미성년자, 부전공 (동) 부전공하다|minor problem|사소한 문제
21-13|duty|(명) 의무, 관세|moral duty|도덕적 의무
21-13|vigor|(명) 활력|youthful vigor|젊음의 활력
21-13|organize|(동) 조직하다, 구성하다, 정리하다|organize a team|팀을 조직하다
21-13|chief|(형) 주요한, 우두머리의 (명) 우두머리, 장|chief editor|편집장
21-13|complicated|(형) 복잡한|complicated system|복잡한 시스템
21-13|digest|(동) 소화하다, 이해하다 (명) 요약|digest food|음식을 소화하다
21-13|shortage|(명) 부족, 결함|food shortage|식량 부족
21-13|laboratory|(명) 실험실 (형) 실험의|science laboratory|과학 실험실
21-13|stream|(명) 흐름, 경향, 개울|a steady stream|꾸준한 흐름
21-13|forbid|(동) 금지하다|forbid smoking|흡연을 금지하다
21-13|laundry|(명) 세탁물|do the laundry|빨래를 하다
21-13|transform|(동) 변형시키다, 변환하다|transform A into B|A를 B로 변형시키다
21-13|discipline|(명) 훈련, 규율, 학문 분야|strict discipline|엄격한 훈육
21-13|generous|(형) 관대한, 넉넉한|be generous with money|돈에 후하다
21-13|ultimate|(형) 궁극적인, 최후의|ultimate goal|궁극적인 목표
21-13|thrive|(동) 번영하다, 발전하다|Plants thrive.|식물들이 잘 자란다.
21-13|fiction|(명) 허구, 소설|science fiction|공상 과학 소설
21-13|bet|(동) 돈을 걸다, 장담하다 (명) 내기|I bet he will come.|그가 올 것이라고 장담한다.
21-13|royal|(형) 왕족의, 왕의|royal family|왕족
21-13|ruin|(명) 파멸, 파산 (동) 망치다, 파멸시키다|ruin one's health|건강을 망치다
21-13|worship|(동) 예배하다, 숭배하다 (명) 예배, 숭배|worship God|신을 숭배하다
21-13|evil|(형) 사악한 (명) 악|evil spirit|악령
21-13|scarce|(형) 부족한, 드문|Food is scarce.|식량이 부족하다.
21-13|afterward|(부) 나중에, 그 후에|See you afterward.|나중에 보자.
21-13|client|(명) 고객|meet a client|고객을 만나다
21-13|insure|(동) 보험에 들다, 안전하게 하다|insure against fire|화재 보험에 들다
21-13|fancy|(명) 공상, 기호 (형) 화려한 (동) 공상하다|fancy dress|화려한 드레스
21-13|surgery|(명) 외과 수술|plastic surgery|성형 수술
21-13|assign|(동) 할당하다, 지정하다|assign homework|숙제를 내주다
21-13|regulate|(동) 규제하다, 조절하다|regulate traffic|교통을 통제하다
21-13|mindset|(명) 마음가짐, 사고방식|positive mindset|긍정적인 사고방식
21-13|utility|(명) 유용성, 공익사업|utility bill|공과금 고지서


21-14|necessity|(명) 필수품, 필요, 필연성|daily necessity|생필품
21-14|yield|(동) 생산하다, 양도하다 (명) 수확|yield a profit|이익을 내다
21-14|decline|(명) 감소, 쇠퇴 (동) 감소하다, 거절하다|decline in sales|판매 감소
21-14|apply|(동) 적용하다, 지원하다|apply for a job|일자리에 지원하다
21-14|aside|(부) 한쪽으로, 제쳐 두고|put aside|한쪽으로 치워두다
21-14|contemporary|(형) 동시대의, 현대의|contemporary art|현대 미술
21-14|bless|(동) 축복하다, 감사하다|God bless you.|신의 축복이 있기를.
21-14|explain|(동) 설명하다|explain the reason|이유를 설명하다
21-14|prior|(형) 이전의, 우선하는|prior to departure|출발 이전에
21-14|tolerate|(동) 참다, 용인하다|tolerate pain|고통을 참다
21-14|measure|(동) 측정하다 (명) 측정, 수단|measure the length|길이를 측정하다
21-14|abstract|(형) 추상적인 (명) 추상, 개요|abstract concept|추상적인 개념
21-14|cottage|(명) 오두막집|summer cottage|여름 별장
21-14|correct|(형) 올바른, 정확한 (동) 바로잡다, 정정하다|correct answer|정답
21-14|confirm|(동) 입증하다, 확인하다, 굳게 하다|confirm a reservation|예약을 확인하다
21-14|imitate|(동) 모방하다|imitate a voice|목소리를 흉내 내다
21-14|prey|(명) 먹이, 희생자|birds of prey|맹금류
21-14|defeat|(동) 패배시키다 (명) 패배|defeat the enemy|적을 물리치다
21-14|illustrate|(동) 설명하다, 예증하다, 삽화를 넣다|illustrate with examples|예시로 설명하다
21-14|fuse|(명) 퓨즈, 도화선 (동) 융합하다|fuse together|함께 융합되다
21-14|pupil|(명) 학생, 눈동자|bright pupil|똑똑한 학생
21-14|intellect|(명) 지성|man of intellect|지성인
21-14|spice|(명) 향신료, 양념|add spice|향신료를 더하다
21-14|tempt|(동) 유혹하다, 끌다|be [tempted] to eat|먹고 싶은 유혹을 받는
21-14|inspire|(동) 영감을 주다, 고무시키다|inspire others|타인에게 영감을 주다
21-14|dine|(동) 만찬을 대접하다, 식사하다|dine out|외식하다
21-14|literally|(부) 문자 그대로|literally true|말 그대로 사실인
21-14|appropriate|(형) 적절한|appropriate action|적절한 조치
21-14|resort|(명) 휴양지, 의지 (동) 의지하다, 자주 가다|resort to violence|폭력에 의지하다
21-14|grab|(동) 움켜쥐다 (명) 움켜쥠|grab a bite|간단히 먹다
21-14|propose|(동) 제안하다|propose a plan|계획을 제안하다
21-14|wreck|(명) 난파선, 사고 (동) 난파시키다|ship wreck|난파선
21-14|document|(명) 문서, 서류 (동) 기록하다|official document|공식 문서
21-14|suspect|(동) 의심하다 (명) 용용의자|main suspect|유력 용의자
21-14|alien|(명) 외국인, 외계인 (형) 외국의, 이질적인|alien life|외계 생명체
21-14|prohibit|(동) 금지하다|prohibit smoking|흡연을 금지하다
21-14|install|(동) 설치하다|install software|소프트웨어를 설치하다
21-14|triumph|(명) 승리 (동) 승리하다|shout in triumph|승리의 함성을 지르다
21-14|scholarship|(명) 학문, 장학금|win a scholarship|장학금을 받다
21-14|execute|(동) 실행하다, 처형하다|execute a plan|계획을 실행하다

21-15|ensure|(동) 확실하게 하다, 보증하다|ensure safety|안전을 보장하다
21-15|receipt|(명) 영수증|keep the receipt|영수증을 보관하다
21-15|defect|(명) 결점, 결함|birth defect|선천적 결함
21-15|trait|(명) 특성, 특징|personality trait|성격적 특성
21-15|modest|(형) 겸손한, 알맞은|Be modest.|겸손해라.
21-15|virtual|(형) 가상의, 사실상의|virtual reality|가상 현실
21-15|compare|(동) 비교하다|compare A with B|A와 B를 비교하다
21-15|address|(동) 연설하다 (명) 연설, 인사말|address the audience|청중에게 연설하다
21-15|inner|(형) 내부의|inner beauty|내면의 아름다움
21-15|contrary|(형) 반대의, 불리한 (명) 반대의 것|on the contrary|그와는 반대로
21-15|split|(동) 찢다, 쪼개다 (명) 틈, 분열|split the bill|각자 내다
21-15|supervise|(동) 감독하다, 관리하다, 통제하다|supervise workers|근로자들을 감독하다
21-15|inhabit|(동) 살다, 거주하다|inhabit the island|그 섬에 거주하다
21-15|appear|(동) 나타나다, ~인 것 같다|appear to be happy|행복해 보인다
21-15|commute|(명) 통근 (동) 통근하다|commute to work|직장으로 통근하다
21-15|earthquake|(명) 지진|massive earthquake|대지진
21-15|enroll|(동) 입학하다, 등록하다|enroll in a course|강좌에 등록하다
21-15|debate|(명) 토론 (동) 토론하다|heated debate|열띤 토론
21-15|abandon|(동) 버리다, 포기하다|abandon hope|희망을 버리다
21-15|conquer|(동) 정복하다, 극복하다|conquer fear|두려움을 정복하다
21-15|nevertheless|(부) 그럼에도 불구하고|Nevertheless, I tried.|그럼에도 불구하고 나는 시도했다.
21-15|seal|(명) 도장, 봉인 (동) 봉인하다, 봉하다|seal the envelope|봉투를 봉하다
21-15|greed|(명) 탐욕|driven by greed|탐욕에 눈이 먼
21-15|contract|(동) 계약하다, 수축하다 (명) 계약서|sign a contract|계약서에 서명하다
21-15|nutrition|(명) 영양|poor nutrition|나쁜 영양 상태
21-15|retail|(명) 소매 (동) 소매하다|retail price|소매 가격
21-15|prejudice|(명) 편견, 선입관|racial prejudice|인종적 편견
21-15|register|(동) 등록하다, 기재하다 (명) 등록|register for class|수업을 신청하다
21-15|agency|(명) 대리점, 대행사|travel agency|여행사
21-15|nurture|(동) 양육하다, 교육하다 (명) 양육, 교육|nurture talent|재능을 키우다
21-15|priest|(명) 성직자, 신부|parish priest|교구 신부
21-15|elegant|(형) 고상한, 우아한|elegant dress|우아한 드레스
21-15|impose|(동) 부과하다, 강요하다|impose a tax|세금을 부과하다
21-15|arise|(동) 발생하다, 생겨나다|Problems arise.|문제가 발생하다.
21-15|attack|(동) 공격하다 (명) 공격, 발작|heart attack|심장 마비
21-15|masterpiece|(명) 명작, 대작|a true masterpiece|진정한 명작
21-15|harsh|(형) 거친, 가혹한|harsh reality|냉혹한 현실
21-15|drought|(명) 가뭄|severe drought|심한 가뭄
21-15|criteria|(명) 기준, 표준|selection criteria|선발 기준
21-15|extraordinary|(형) 비범한, 놀라운|extraordinary talent|비범한 재능


21-16|general|(형) 일반적인 (명) 장군, 대장|general opinion|일반적인 견해
21-16|spill|(동) 엎지르다 (명) 엎질러짐|spill the water|물을 엎지르다
21-16|usual|(형) 보통의, 통상의|as usual|평소처럼
21-16|routine|(명) 일상적인 일, 일과 (형) 일상적인|daily routine|하루 일과
21-16|eliminate|(동) 제거하다, 배제하다|eliminate waste|낭비를 제거하다
21-16|deny|(동) 부인하다, 거절하다|deny the fact|사실을 부인하다
21-16|scream|(동) 절규하다, 소리치다 (명) 비명, 절규|scream for help|도와달라고 소리치다
21-16|sensitive|(형) 민감한, 예민한|sensitive skin|민감한 피부
21-16|swallow|(동) 삼키다 (명) 삼킴, 제비|hard to swallow|삼키기 힘든
21-16|glare|(동) 노려보다, 번쩍이다 (명) 눈부신 빛|glare at someone|누군가를 노려보다
21-16|tragic|(형) 비극의, 비참한|tragic accident|비극적인 사고
21-16|deprive|(동) 박탈하다|deprive A of B|A에게서 B를 박탈하다
21-16|conscious|(형) 의식하고 있는, 의도적인|be conscious of|~을 의식하다
21-16|interfere|(동) 방해하다, 간섭하다|interfere with work|일을 방해하다
21-16|temporary|(형) 일시적인, 임시의|temporary shelter|임시 거처
21-16|council|(명) 협의회, 회의, 의회|city council|시의회
21-16|adolescent|(명) 청소년 (형) 청소년기의|adolescent period|청소년기
21-16|associate|(동) 연관 짓다, 교제하다 (명) 동료|associate A with B|A와 B를 연관 짓다
21-16|arctic|(형) 북극의|Arctic Ocean|북극해
21-16|capture|(동) 붙잡다, 포획하다 (명) 포획|capture attention|관심을 사로잡다
21-16|dilute|(형) 묽은 (동) 희석시키다|dilute with water|물로 희석하다
21-16|figure|(동) 생각하다, 계산하다 (명) 수치, 형체, 인물|key figure|주요 인물
21-16|dim|(형) 흐릿한, 어두운 (동) 흐려지다|dim light|흐릿한 불빛
21-16|neighbor|(형) 이웃의 (명) 이웃|next-door neighbor|옆집 이웃
21-16|crew|(명) 승무원, 선원|flight crew|비행 승무원
21-16|barrier|(명) 장벽, 장애물|trade barrier|무역 장벽
21-16|tradition|(명) 전통, 관습|follow tradition|전통을 따르다
21-16|pedestrian|(명) 보행자 (형) 보행자의|pedestrian crossing|횡단보도
21-16|glance|(동) 흘긋 보다 (명) 흘긋 봄|glance at a watch|시계를 흘긋 보다
21-16|irritate|(동) 짜증 나게 하다, 화나게 하다, 자극하다|irritate the skin|피부를 자극하다
21-16|cruel|(형) 잔인한, 고통을 주는|cruel treatment|잔인한 대우
21-16|fold|(동) 접다, 포개다 (명) 주름|fold paper|종이를 접다
21-16|trial|(명) 재판, 실험, 시도|trial and error|시행착오
21-16|tribe|(명) 부족, 종족|native tribe|원주민 부족
21-16|profound|(형) 깊은, 심오한|profound effect|심오한 영향
21-16|distinguish|(동) 구별하다, 식별하다|distinguish A from B|A와 B를 구별하다
21-16|errand|(명) 심부름, 잡일|run an errand|심부름을 하다
21-16|welfare|(명) 복지|social welfare|사회 복지
21-16|statement|(명) 진술, 성명서|official statement|공식 성명서
21-16|prevail|(동) 우세하다, 만연하다, 승리하다|Justice will prevail.|정의가 승리할 것이다.

21-17|widespread|널리 퍼진|widespread belief|널리 퍼진 믿음
21-17|result|결과, 생기다|result in failure|실패를 초래하다
21-17|fade|희미해지다, 사라지다|Memories fade.|기억이 희미해지다.
21-17|progress|진보하다, 전진하다, 진전, 진보|make progress|진보하다(발전하다)
21-17|weapon|무기, 병기|nuclear weapon|핵무기
21-17|drastic|격렬한, 과감한|drastic change|급격한 변화
21-17|reinforcement|강화, 보강|positive reinforcement|긍정적 강화
21-17|wonder|궁금해하다, 놀라다, 경탄, 경이|wonder why|왜인지 궁금하다
21-17|pile|쌓아 올린 더미, 쌓아 올리다, 축적하다|a pile of books|책 더미
21-17|protect|보호하다|protect the environment|환경을 보호하다
21-17|infection|감염, 전염|virus infection|바이러스 감염
21-17|stiffen|굳어지다|Muscles stiffen.|근육이 굳어지다.
21-17|endanger|위험에 빠뜨리다|endanger species|멸종 위기종을 만들다
21-17|adjust|조절하다, 조정하다|adjust to change|변화에 적응하다
21-17|peer|동료, 또래|peer pressure|또래 압력
21-17|renew|새롭게 하다, 갱신하다|renew a contract|계약을 갱신하다
21-17|germ|미생물, 세균|kill germs|세균을 죽이다
21-17|atom|원자|split an atom|원자를 분열시키다
21-17|realize|깨닫다, 실현하다|realize a dream|꿈을 실현하다
21-17|enrich|풍성하게 하다, 부유하게 하다|enrich the soil|토양을 비옥하게 하다
21-17|noble|귀족의, 고결한|noble act|고귀한 행동
21-17|repair|수선하다, 회복하다, 수선, 회복|repair a car|차를 수리하다
21-17|candidate|후보자|presidential candidate|대통령 후보
21-17|ideal|이상적인, 이상|ideal partner|이상적인 파트너
21-17|crop|작물, 수확|harvest a crop|작물을 수확하다
21-17|ethnic|인종의, 민족의|ethnic group|민족 집단
21-17|foretell|예언하다, 예고하다|foretell the future|미래를 예언하다
21-17|wholesale|도매, 도매의|wholesale price|도매가
21-17|debt|빚, 부채|pay off debt|빚을 갚다
21-17|representative|대표, 대표하는|representative of the group|그룹의 대표
21-17|shift|변화, 이동, 교대, 바꾸다, 이동하다|shift gears|기어를 바꾸다
21-17|fame|명성|rise to fame|명성을 얻다
21-17|strict|엄한, 엄격한|strict rules|엄격한 규칙
21-17|appliance|기구, 장치|home appliance|가전제품
21-17|furthermore|게다가, 더욱이|Furthermore, it is cheap.|게다가, 그것은 싸다.
21-17|command|명령, 지배력, 명령하다, 지휘하다|command an army|군대를 지휘하다
21-17|ecosystem|생태계|damage the ecosystem|생태계를 훼손하다
21-17|excess|초과, 초과량, 초과한, 여분의|excess baggage|초과 수하물
21-17|oral|구두의, 구술의|oral test|구술 시험
21-17|drift|표류, 표류하다|drift apart|사이가 멀어지다(표류하다)


21-18|solar|(형) 태양의, 태양열을 이용한|solar energy|태양 에너지
21-18|outstanding|(형) 뛰어난, 두드러진|outstanding performance|뛰어난 성과
21-18|mislead|(동) 잘못 인도하다, 오해하게 하다|mislead the public|대중을 호도하다
21-18|dedicate|(동) 헌납하다, 바치다|dedicate oneself to|~에 헌신하다
21-18|crush|(동) 으깨다, 밀어 넣다|crush grapes|포도를 으깨다
21-18|sink|(동) 가라앉다|sink into the sea|바다로 가라앉다
21-18|entire|(형) 전체의, 완전한 (명) 전부, 전체|entire world|전 세계
21-18|confront|(동) 직면하다|confront a problem|문제에 직면하다
21-18|beard|(명) 턱수염|grow a beard|턱수염을 기르다
21-18|haste|(명) 급함, 서두름|make haste|서두르다
21-18|initial|(형) 처음의, 초기의 (명) 머리글자|initial stage|초기 단계
21-18|destiny|(명) 운명|accept destiny|운명을 받아들이다
21-18|hardship|(명) 고난, 어려움|overcome hardship|고난을 극복하다
21-18|escape|(동) 탈출하다, 벗어나다 (명) 탈출, 도망|escape from prison|감옥에서 탈출하다
21-18|valid|(형) 타당한, 유효한|valid reason|타당한 이유
21-18|dispose|(동) 배치하다, 처리하다|dispose of waste|쓰레기를 처리하다
21-18|exist|(동) 존재하다, 살아가다|cease to exist|존재하지 않게 되다
21-18|optimal|(형) 최상의, 최적의|optimal condition|최적의 조건
21-18|hydrogen|(명) 수소|hydrogen bomb|수소 폭탄
21-18|perspective|(명) 관점, 견해|different perspective|다른 관점
21-18|thread|(명) 실 (동) 실을 꿰다|needle and thread|바늘과 실
21-18|dynasty|(명) 왕조, 왕가|Joseon Dynasty|조선 왕조
21-18|scatter|(동) 흩뿌리다|scatter seeds|씨를 흩뿌리다
21-18|gamble|(동) 도박하다, 모험하다 (명) 도박, 모험|gamble with money|돈으로 도박하다
21-18|temper|(명) 성질, 기질 (동) 완화시키다|lose one's temper|화를 내다
21-18|undoubtedly|(부) 의심할 여지 없이, 확실히|undoubtedly true|의심할 여지 없이 사실인
21-18|raft|(명) 뗏목, 고무보트|life raft|구명 뗏목
21-18|minimal|(형) 최소의, 아주 적은|minimal effort|최소한의 노력
21-18|soak|(동) 적시다, 젖다|soak in water|물에 담그다
21-18|craft|(명) 공예, 기술|traditional craft|전통 공예
21-18|cease|(동) 그만두다, 중지하다|cease fire|사격 중지
21-18|review|(명) 재검토, 논평 (동) 재검토하다|review a book|책을 비평하다
21-18|ceiling|(명) 천장, 상한선|glass ceiling|유리 천장
21-18|unify|(동) 통합하다, 통일하다|unify the country|나라를 통일하다
21-18|combat|(동) 싸우다 (명) 전투|combat disease|질병과 싸우다
21-18|bump|(동) 부딪치다 (명) 충돌|bump into a friend|친구와 우연히 마주치다
21-18|primary|(형) 주요한, 최초의|primary school|초등학교
21-18|genre|(명) 장르, 유형, 형식|music genre|음악 장르
21-18|erase|(동) 지우다, 없애다|erase memories|기억을 지우다
21-18|doom|(동) 운명이다 (명) 운명|[doomed] to fail|실패할 운명인


21-19|vital|(형) 필수적인, 중요한|vital role|필수적인 역할
21-19|incident|(명) 일어난 일, 사건 (형) 일어나기 쉬운|shooting incident|총격 사건
21-19|session|(명) 시간, 기간, 회의|training session|훈련 시간
21-19|obvious|(형) 명백한, 분명한|obvious mistake|명백한 실수
21-19|moderate|(형) 온건한, 적당한|moderate exercise|적당한 운동
21-19|budget|(명) 예산, 예산안|low budget|적은 예산
21-19|graze|(동) 풀을 뜯다, 방목하다|Cattle graze.|소들이 풀을 뜯는다.
21-19|fragile|(형) 부서지기 쉬운|fragile glass|깨지기 쉬운 유리
21-19|myth|(명) 신화|Greek myth|그리스 신화
21-19|ingredient|(명) 재료, 성분|key ingredient|핵심 재료
21-19|indifferent|(형) 무관심한|indifferent to politics|정치에 무관심한
21-19|strain|(동) 긴장시키다, 잡아당기다 (명) 긴장, 압박|muscle strain|근육통
21-19|nutrient|(명) 영양소, 영양분|essential nutrients|필수 영양소
21-19|dismiss|(동) 해고하다, 해산시키다, 묵살하다|dismiss an idea|아이디어를 묵살하다
21-19|geometry|(명) 기하학|study geometry|기하학을 공부하다
21-19|glacier|(명) 빙하|melting glaciers|녹는 빙하들
21-19|urge|(동) 촉구하다, 강요하다 (명) 충동, 욕구|urge to eat|먹고 싶은 욕구
21-19|celebrity|(명) 명성, 유명 인사|TV celebrity|TV 유명 인사
21-19|antique|(형) 옛날의, 고대의 (명) 골동품|antique shop|골동품 가게
21-19|profit|(명) 이익, 이윤 (동) 이익을 얻다|make a profit|이익을 내다
21-19|sphere|(명) 구체, 구, 영역|public sphere|공적 영역
21-19|inherit|(동) 상속하다, 물려받다|inherit a fortune|재산을 상속받다
21-19|editorial|(명) 사설, 논설 (형) 편집자의|editorial staff|편집진
21-19|crawl|(동) 기어가다, 서행하다|crawl on hands|손으로 기어가다
21-19|scratch|(동) 긁다, 할퀴다 (명) 긁힌 자국, 찰과상|scratch one's head|머리를 긁다
21-19|diabetes|(명) 당뇨병|type 2 diabetes|제2형 당뇨병
21-19|congestion|(명) 밀집, 혼잡|traffic congestion|교통 혼잡
21-19|constitute|(동) 구성하다, 제정하다, 설립하다|constitute a crime|범죄를 구성하다
21-19|flow|(동) 흐르다 (명) 흐름|flow of river|강의 흐름
21-19|investigate|(동) 조사하다, 수사하다|investigate a case|사건을 조사하다
21-19|barter|(동) 물물 교환하다 (명) 물물 교환, 교역품|barter system|물물 교환 시스템
21-19|circular|(형) 원의, 순환의|circular motion|원운동
21-19|chilly|(형) 쌀쌀한, 냉담한|chilly wind|쌀쌀한 바람
21-19|ancestor|(명) 조상, 선조|common ancestor|공통 조상
21-19|fierce|(형) 사나운, 맹렬한|fierce competition|치열한 경쟁
21-19|vague|(형) 막연한, 모호한|vague answer|모호한 대답
21-19|rough|(형) 거친, 난폭한|rough skin|거친 피부
21-19|content|(형) 만족하는 (명) 내용, 목차|be content with|~에 만족하다
21-19|obstacle|(명) 장애물, 방해가 되는 것|overcome an obstacle|장애물을 극복하다
21-19|disgrace|(명) 불명예, 수치|social disgrace|사회적 망신


21-20|abolish|(동) 폐지하다|abolish slavery|노예제를 폐지하다
21-20|assure|(동) 보증하다, 확실하게 하다|assure safety|안전을 보장하다
21-20|form|(명) 형태, 종류 (동) 형성하다|form a habit|습관을 형성하다
21-20|gender|(명) 성, 성별|gender equality|성 평등
21-20|innovation|(명) 혁신|technical innovation|기술 혁신
21-20|opponent|(명) 반대자, 상대 (형) 반대하는|defeat an opponent|상대를 물리치다
21-20|present|(명) 현재, 선물 (형) 현재의 (동) 제출하다, 발표하다|present a paper|논문을 제출하다
21-20|fertile|(형) 비옥한, 기름진|fertile land|비옥한 땅
21-20|emperor|(명) 황제|Roman Emperor|로마 황제
21-20|dwell|(동) 살다, 거주하다|dwell in the city|도시에 거주하다
21-20|chore|(명) 집안일, 허드렛일|household chores|집안일
21-20|grateful|(형) 고마워하는, 감사하는|be grateful for|~에 감사하다
21-20|fossil|(명) 화석|fossil fuel|화석 연료
21-20|glitter|(동) 반짝이다 (명) 반짝임|all that glitters|반짝이는 모든 것
21-20|miserable|(형) 비참한, 불쌍한|miserable life|비참한 삶
21-20|portray|(동) 묘사하다, 설명하다, 초상을 그리다|portray a character|인물을 묘사하다
21-20|protein|(명) 단백질|protein source|단백질원
21-20|backward|(부) 후방에, 뒤쪽으로, 거꾸로 (형) 뒤쪽의|look backward|뒤를 돌아보다
21-20|translate|(동) 번역하다, 옮기다|translate into English|영어로 번역하다
21-20|refresh|(동) 상쾌하게 하다, 새롭게 하다|refresh memory|기억을 되살리다
21-20|tissue|(명) 조직|muscle tissue|근육 조직
21-20|lord|(명) 군주, 주님|Lord of the Rings|반지의 제왕
21-20|remove|(동) 제거하다|remove the cover|덮개를 제거하다
21-20|scan|(동) 정밀 검사하다, 유심히 쳐다보다 (명) 정밀 검사|scan the document|문서를 훑어보다
21-20|pottery|(명) 도자기, 도예|make pottery|도자기를 빚다
21-20|layer|(명) 층, 겹|ozone layer|오존층
21-20|property|(명) 재산, 소유물, 부동산|intellectual property|지적 재산
21-20|justify|(동) 정당화하다|justify an action|행동을 정당화하다
21-20|polish|(동) 닦다, 윤을 내다, 다듬다 (명) 광택제|polish shoes|구두를 닦다
21-20|flavor|(명) 맛 (동) 맛을 내다|artificial flavor|인공 조미료
21-20|ceremony|(명) 의식, 식, 의례|wedding ceremony|결혼식
21-20|relate|(동) 관련시키다, 관련이 있다|relate A to B|A와 B를 관련시키다
21-20|strive|(동) 노력하다, 애쓰다, 투쟁하다|strive for success|성공을 위해 분투하다
21-20|radiant|(형) 빛나는, 아주 밝은|radiant smile|환한 미소
21-20|exclaim|(동) 외치다|exclaim in surprise|놀라서 소리치다
21-20|asset|(명) 자산, 재산|valuable asset|귀중한 자산
21-20|decay|(동) 부패하다, 쇠퇴하다 (명) 부패, 쇠퇴|tooth decay|충치
21-20|administer|(동) 관리하다, 집행하다|administer the law|법을 집행하다
21-20|wage|(명) 임금, 급료|minimum wage|최저 임금
21-20|subscribe|(동) 구독하다, 가입하다|subscribe to a magazine|잡지를 구독하다



21-21|merit|(명) 장점, 공로 (동) 받을 만하다|based on merit|능력에 따라
21-21|dwindle|(동) 점점 줄어들다, 저하되다|dwindle away|점차 사라지다
21-21|conference|(명) 회담, 회의|press conference|기자 회견
21-21|accuse|(동) 고발하다, 비난하다|accuse A of B|A를 B라는 이유로 비난하다
21-21|enhance|(동) 향상하다|enhance performance|성능을 향상하다
21-21|intimate|(형) 친밀한|intimate relationship|친밀한 관계
21-21|reception|(명) 환영회, 접수|warm reception|따뜻한 환영
21-21|overwhelm|(동) 압도하다, 당황하게 하다|be [overwhelmed]|압도되다
21-21|coincidence|(명) 우연의 일치, 동시에 일어난 사건|strange coincidence|기묘한 우연
21-21|majesty|(명) 위엄, 장엄|Her Majesty|여왕 폐하
21-21|shrug|(동) (어깨를) 으쓱하다|shrug one's shoulders|어깨를 으쓱하다
21-21|vicious|(형) 사악한, 악의 있는|vicious circle|악순환
21-21|cherish|(동) 소중히 하다|cherish a memory|추억을 소중히 하다
21-21|eternal|(형) 영원한|eternal life|영생
21-21|shrink|(동) 축소하다, 수축하다|shrink in size|크기가 줄어들다
21-21|colleague|(명) 동료|work colleague|직장 동료
21-21|transmit|(동) 전달하다|transmit a signal|신호를 전달하다
21-21|discard|(동) 버리다, 처분하다|discard old habits|낡은 습관을 버리다
21-21|copper|(명) 구리 (형) 구리의, 구릿빛의|copper wire|구리선
21-21|orbit|(명) 궤도 (동) 궤도를 그리며 돌다|orbit the earth|지구 궤도를 돌다
21-21|famine|(명) 굶주림, 기아|die of famine|굶어 죽다
21-21|pill|(명) 알약|sleeping pill|수면제
21-21|immune|(형) 면역성의, 면제된|immune system|면역 체계
21-21|raw|(형) 날것의|raw material|원자재
21-21|superior|(형) 우월한 (명) 상사|superior to others|남보다 우월한
21-21|string|(명) 끈, 줄, 일련|a string of pearls|진주 목걸이
21-21|cope|(동) 대처하다, 잘 처리하다|cope with stress|스트레스에 대처하다
21-21|loan|(명) 대출, 대출금 (동) 대출하다|bank loan|은행 대출
21-21|obedient|(형) 순종하는, 유순한|obedient child|순종적인 아이
21-21|procedure|(명) 절차, 과정|safety procedure|안전 절차
21-21|bond|(명) 유대, 결속, 속박|strong bond|강한 유대감
21-21|angle|(명) 각도, 모서리|from a different angle|다른 관점에서
21-21|subtle|(형) 미묘한, 교묘한|subtle difference|미묘한 차이
21-21|depict|(동) 묘사하다, 그리다|depict reality|현실을 묘사하다
21-21|radical|(형) 과격한, 급진적인 (명) 급진주의자|radical change|급진적인 변화
21-21|caution|(명) 조심, 주의 (동) 주의를 주다|with caution|조심스럽게
21-21|persist|(동) 고집하다, 지속하다|persist in doing|계속하다
21-21|reverse|(명) 역, 반대 (형) 역의, 반대의 (동) 뒤바뀌다|in reverse order|역순으로
21-21|stuff|(명) 것, 물건 (동) 채워 넣다|pack one's stuff|짐을 싸다
21-21|therapy|(명) 치료, 요법|physical therapy|물리치료



21-22|skeleton|(명) 골격, 뼈대|human skeleton|인간의 골격
21-22|strategy|(명) 전략|marketing strategy|마케팅 전략
21-22|attract|(동) 끌다, 유인하다|attract attention|관심을 끌다
21-22|hence|(부) 그러므로, 지금부터|Hence, the result.|그러므로 그 결과.
21-22|architecture|(명) 건축, 건축물|modern architecture|현대 건축
21-22|handle|(동) 다루다, 취급하다 (명) 손잡이|handle with care|조심해서 다루다
21-22|wilderness|(명) 황무지, 황야|in the wilderness|황야에서
21-22|category|(명) 범주|fall into a category|범주에 속하다
21-22|funeral|(명) 장례식 (형) 장례의|funeral service|장례식
21-22|prefer|(동) 선호하다|prefer A to B|B보다 A를 선호하다
21-22|outcome|(명) 결과|final outcome|최종 결과
21-22|humiliation|(명) 창피함, 굴욕|suffered humiliation|굴욕을 겪었다
21-22|ban|(동) 금지하다 (명) 금지|ban smoking|흡연을 금지하다
21-22|flush|(동) 붉어지다, 물로 씻어 내리다 (명) 홍조|face [flushed]|얼굴이 붉어졌다
21-22|omit|(동) 생략하다, 빼다|omit a word|단어를 생략하다
21-22|despair|(명) 절망 (동) 절망하다|in deep despair|깊은 절망에 빠져
21-22|alert|(형) 기민한, 경계하는 (명) 경계 (동) 경계하다|Stay alert.|경계를 늦추지 마라.
21-22|compact|(형) 소형의, 조밀한 (동) 꽉 채우다|compact car|소형차
21-22|likewise|(부) 마찬가지로, 게다가|Do likewise.|똑같이 해라.
21-22|astonish|(동) 놀라게 하다|be [astonished] at|~에 놀라다
21-22|panic|(명) 갑작스러운 공포, 공황 (형) 공황적인|panic attack|공황 발작
21-22|optimistic|(형) 낙관적인, 낙천적인|optimistic view|낙관적인 견해
21-22|murder|(명) 살인 (동) 살인하다|commit murder|살인을 저지르다
21-22|fundamental|(형) 근본적인, 기본적인 (명) 근본|fundamental rule|기본 규칙
21-22|loyal|(형) 충성스러운, 성실한|loyal friend|충실한 친구
21-22|humid|(형) 습기 있는, 눅눅한|hot and humid|덥고 습한
21-22|pretend|(동) ~인 척하다, 주장하다|pretend to sleep|자는 척하다
21-22|graduate|(동) 졸업하다 (명) 졸업생, 대학원생|graduate from college|대학을 졸업하다
21-22|delicate|(형) 섬세한, 미묘한|delicate balance|미묘한 균형
21-22|inflate|(동) 부풀리다, 과장하다, 인상하다|inflate a balloon|풍선을 부풀리다
21-22|adequate|(형) 적당한, 충분한|adequate supply|충분한 공급
21-22|physician|(명) 의사, 내과 의사|consult a physician|내과의사와 상담하다
21-22|joint|(형) 공동의, 연합의 (명) 이음매, 관절|joint effort|공동의 노력
21-22|via|~을 거쳐, ~을 통해|via email|이메일을 통해서
21-22|passage|(명) 통로, 구절, 경과|narrow passage|좁은 통로
21-22|vessel|(명) 용기, 배, 선박, 혈관|blood vessel|혈관
21-22|restore|(동) 회복하다, 복구하다, 돌려주다|restore order|질서를 회복하다
21-22|passive|(형) 수동적인, 수동형의|passive smoking|간접흡연
21-22|marble|(명) 대리석, 구슬 (형) 대리석의|marble floor|대리석 바닥
21-22|classify|(동) 분류하다|classify books|책을 분류하다

21-23|prepare|(동) 준비하다|prepare for the exam|시험을 준비하다
21-23|transaction|(명) 거래, 처리|business transaction|상거래
21-23|sufficient|(형) 충분한|sufficient time|충분한 시간
21-23|stable|(형) 안정된 (명) 마구간|stable job|안정된 직업
21-23|concern|(동) 관련되다, 걱정시키다 (명) 걱정, 관심사|public concern|대중의 관심사
21-23|sympathy|(명) 동정, 공감|feel sympathy for|~을 동정하다
21-23|principal|(형) 주요한, 제1의 (명) 교장, 장|principal reason|주된 이유
21-23|by-product|(명) 부산물|a useless by-product|쓸모없는 부산물
21-23|anxiety|(명) 걱정, 불안|reduce anxiety|불안을 줄이다
21-23|edible|(형) 먹을 수 있는, 식용의|edible mushrooms|식용 버섯
21-23|federal|(형) 연방의, 연합의|federal government|연방 정부
21-23|suffer|(동) 고통받다, 겪다|suffer from illness|병으로 고생하다
21-23|casual|(형) 우연한, 격식을 차리지 않는, 평상시의|casual clothes|평상복
21-23|tablet|(명) 정제, 알약, 판|take a tablet|알약을 먹다
21-23|trade|(동) 거래하다 (명) 무역, 거래|free trade|자유 무역
21-23|liquid|(명) 액체 (형) 액체의|liquid state|액체 상태
21-23|characteristic|(명) 특징, 특색 (형) 독특한, 특징적인|unique characteristic|독특한 특징
21-23|anticipate|(동) 예상하다, 기대하다|anticipate trouble|문제를 예상하다
21-23|outlook|(명) 전망, 조망|economic outlook|경제 전망
21-23|desert|(명) 사막 (형) 사막의, 불모의 (동) 버리다|Sahara Desert|사하라 사막
21-23|infinite|(형) 무한한|infinite space|무한한 우주
21-23|roam|(동) 배회하다, 돌아다니다|roam the streets|거리를 배회하다
21-23|decent|(형) 제대로 된, 품위 있는, 괜찮은|decent job|괜찮은 직업
21-23|behalf|(명) 이익, 자기편|on behalf of|~을 대신하여
21-23|distortion|(명) 왜곡, 찌그러뜨림|distortion of facts|사실 왜곡
21-23|bud|(명) 싹, 꽃봉오리 (동) 싹트다|flower bud|꽃봉오리
21-23|symbolic|(형) 상징적인|symbolic meaning|상징적 의미
21-23|municipal|(형) 지방의, 시의|municipal library|시립 도서관
21-23|phenomenon|(명) 현상, 사건|natural phenomenon|자연 현상
21-23|devote|(동) 바치다, 헌신하다|devote time to|~에 시간을 바치다
21-23|peasant|(명) 농민, 소작농|poor peasant|가난한 소작농
21-23|diminish|(동) 감소하다, 줄이다|diminish in value|가치가 떨어지다
21-23|jealous|(형) 질투하는|be jealous of|~을 질투하다
21-23|exclude|(동) 배제하다, 제외하다|exclude from the list|목록에서 제외하다
21-23|flexible|(형) 융통성 있는, 유연한|flexible schedule|유동적인 일정
21-23|tenant|(명) 세입자, 주민|finding a tenant|세입자 구하기
21-23|worthwhile|(형) ~할 가치가 있는|worthwhile effort|가치 있는 노력
21-23|pavement|(명) 보도, 포장도로|walk on the pavement|보도를 걷다
21-23|nominate|(동) 지명하다, 임명하다|nominate a candidate|후보를 지명하다
21-23|sacred|(형) 신성한, 성스러운|sacred cow|신성한 소


21-24|support|(동) 지지하다, 받치다, 부양하다 (명) 지지, 지탱|support a family|가족을 부양하다
21-24|revise|(동) 변경하다, 개정하다|revise a plan|계획을 수정하다
21-24|suggest|(동) 암시하다, 제안하다|suggest an idea|아이디어를 제안하다
21-24|control|(동) 지배하다, 제어하다 (명) 지배, 제어|under control|통제하에 있는
21-24|mammal|(명) 포유동물|marine mammal|해양 포유류
21-24|internal|(형) 내부의|internal organ|내장 기관
21-24|resent|(동) 분개하다, 화를 내다|resent being treated like a child|아이 취급받는 것에 분개하다
21-24|abrupt|(형) 갑작스러운|abrupt change|갑작스러운 변화
21-24|diverse|(형) 다른, 다양한|diverse culture|다양한 문화
21-24|refine|(동) 정제하다, 개선하다|refine oil|기름을 정제하다
21-24|dynamic|(형) 동적인, 활동적인 (명) 역학|dynamic personality|활동적인 성격
21-24|nerve|(명) 신경|nerve cell|신경 세포
21-24|prompt|(형) 즉각적인, 신속한 (동) 촉구하다, 자극하다|prompt response|신속한 응답
21-24|suspend|(동) 매달다, 중지하다, 유보하다|suspend judgment|판단을 유보하다
21-24|industry|(명) 산업, 공업|auto industry|자동차 산업
21-24|iceberg|(명) 빙산|tip of the iceberg|빙산의 일각
21-24|monetary|(형) 화폐의, 통화의|monetary policy|통화 정책
21-24|judge|(동) 판단하다 (명) 재판관, 판사|Don't judge a book by its cover.|겉만 보고 판단하지 마라.
21-24|gloom|(명) 어둠, 우울|doom and gloom|절망적인 상태
21-24|distraction|(명) 주의 산만, 산만하게 하는 것|Avoid distractions.|주의 산만 요소를 피해라.
21-24|collapse|(동) 무너지다, 붕괴하다 (명) 붕괴|The building [collapsed].|건물이 붕괴했다.
21-24|trigger|(동) 촉발하다, 유발하다 (명) 방아쇠, 계기|trigger an allergy|알레르기를 유발하다
21-24|martial|(형) 전쟁의, 군대의|martial arts|무술
21-24|monologue|(명) 독백|dramatic monologue|극적 독백
21-24|deliberate|(형) 의도적인, 신중한 (동) 숙고하다|deliberate attempt|의도적인 시도
21-24|plot|(명) 줄거리, 음모 (동) 음모를 꾸미다|movie plot|영화 줄거리
21-24|rod|(명) 막대기, 회초리|fishing rod|낚싯대
21-24|partial|(형) 부분적인, 편파적인|partial success|부분적인 성공
21-24|mutual|(형) 서로의, 상호적인|mutual understanding|상호 이해
21-24|priceless|(형) 대단히 귀중한|priceless treasure|귀중한 보물
21-24|fate|(명) 운명|decide one's fate|운명을 결정하다
21-24|pursue|(동) 추구하다, 쫓다|pursue happiness|행복을 추구하다
21-24|Atlantic|(명) 대서양 (형) 대서양의|Atlantic Ocean|대서양
21-24|weird|(형) 이상한, 기묘한|weird noise|기이한 소리
21-24|booth|(명) 칸막이 부스, 노점|phone booth|공중전화 부스
21-24|prescribe|(동) 규정하다, 처방하다|prescribe medicine|약을 처방하다
21-24|erupt|(동) 분출하다, 폭발하다|Volcano [erupted].|화산이 폭발했다.
21-24|insult|(동) 모욕하다 (명) 모욕|insult someone|누군가를 모욕하다
21-24|gaze|(동) 뚫어지게 보다, 응시하다 (명) 응시|gaze at the stars|별을 응시하다
21-24|supreme|(형) 최고의|Supreme Court|대법원


21-25|context|(명) 전후 관계, 맥락, 문맥|in this context|이러한 맥락에서
21-25|complete|(형) 완전한 (동) 완료하다, 작성하다|complete the form|양식을 작성하다
21-25|race|(동) 경주하다 (명) 경주, 경쟁, 인종|human race|인류
21-25|dominate|(동) 지배하다|dominate the market|시장을 지배하다
21-25|vehicle|(명) 탈것, 수단, 매개체|electric vehicle|전기 자동차
21-25|complain|(동) 불평하다|complain about the noise|소음에 대해 불평하다
21-25|brochure|(명) 소책자, 브로슈어|travel brochure|여행 안내 책자
21-25|force|(명) 힘, 영향력 (동) 강요하다|force him to go|그가 가도록 강요하다
21-25|nest|(명) 둥지 (동) 둥지를 틀다|bird's nest|새 둥지
21-25|gain|(동) 얻다 (명) 이익|gain weight|체중이 늘다
21-25|curriculum|(명) 교육 과정, 커리큘럼|school curriculum|학교 교육 과정
21-25|sew|(동) 꿰매다, 바느질하다|sew a button|단추를 달다
21-25|masculine|(형) 남자의, 남자다운|masculine voice|남성적인 목소리
21-25|frown|(동) 눈살을 찌푸리다 (명) 찡그린 얼굴|frown at someone|누군가에게 얼굴을 찌푸리다
21-25|astound|(동) 놀라게 하다|astound the audience|관중을 놀라게 하다
21-25|dictator|(명) 독재자|cruel dictator|잔인한 독재자
21-25|assessment|(명) 평가, 판단|risk assessment|위험 평가
21-25|crucial|(형) 중대한, 중요한|crucial role|중대한 역할
21-25|paralysis|(명) 마비|sleep paralysis|가위눌림
21-25|deck|(명) 갑판|on deck|갑판 위에
21-25|cheer|(명) 환호, 갈채 (동) 환호하다|cheer up|기운 내다
21-25|carve|(동) 조각하다, 새기다|carve wood|나무를 조각하다
21-25|tease|(동) 괴롭히다, 약 올리다|Don't tease.|놀리지 마라.
21-25|aggressive|(형) 공격적인, 적극적인|aggressive behavior|공격적인 행동
21-25|cure|(동) 치료하다 (명) 치유, 회복|cure a disease|병을 치료하다
21-25|attribute|(동) ~의 결과로 여기다 (명) 속성, 특성|attribute A to B|A를 B의 탓으로 돌리다
21-25|foster|(동) 육성하다, 촉진하다 (형) 수양의, 위탁의|foster a child|아이를 위탁 양육하다
21-25|psychologist|(명) 심리학자|clinical psychologist|임상 심리학자
21-25|postpone|(동) 연기하다, 뒤로 미루다|postpone the meeting|회의를 연기하다
21-25|rob|(동) 훔치다, 강탈하다|rob a bank|은행을 털다
21-25|abuse|(명) 남용 (동) 남용하다|drug abuse|약물 남용
21-25|bystander|(명) 방관자, 행인|innocent bystander|무고한 구경꾼
21-25|breakdown|(명) 고장, 쇠약|nervous breakdown|신경 쇠약
21-25|disguise|(동) 변장하다 (명) 변장|in disguise|변장하여
21-25|blueprint|(명) 청사진|blueprint for success|성공을 위한 청사진
21-25|rear|(명) 뒤, 후방 (형) 뒤의 (동) 기르다|rear view mirror|백미러
21-25|output|(명) 생산, 산출|increase output|생산량을 늘리다
21-25|sermon|(명) 설교|give a sermon|설교하다
21-25|sprout|(동) 싹이 트다, 자라나다 (명) 싹|Seeds sprout.|씨앗이 싹트다.
21-25|tin|(명) 양철, 주석|tin can|양철 깡통


21-26|reform|(명) 개혁 (동) 개혁하다|reform the system|시스템을 개혁하다
21-26|deal|(동) 다루다, 대처하다 (명) 거래|deal with problems|문제를 다루다(대처하다)
21-26|recruit|(동) 모집하다, 징집하다 (명) 신병, 신입 사원|recruit new members|새 회원을 모집하다
21-26|maintain|(동) 유지하다, 지지하다|maintain order|질서를 유지하다
21-26|workshop|(명) 워크숍|attend a workshop|워크숍에 참석하다
21-26|patient|(명) 환자 (형) 인내심 있는|be patient with others|타인에게 인내심을 가져라
21-26|convention|(명) 집회, 총회, 관습|social convention|사회적 관습
21-26|devastate|(동) 황폐시키다|devastate the land|땅을 황폐화하다
21-26|reap|(동) 수확하다|reap the harvest|수확물을 거두다
21-26|overlook|(동) 간과하다, 너그럽게 봐주다, 내려다보다|overlook a mistake|실수를 눈감아주다(간과하다)
21-26|deliver|(동) 배달하다, 전달하다|deliver a speech|연설하다
21-26|reject|(동) 거부하다, 거절하다|reject an offer|제안을 거절하다
21-26|nourish|(동) 영양분을 주다, 기르다|nourish the body|몸에 영양을 공급하다
21-26|bay|(명) 만|San Francisco Bay|샌프란시스코 만
21-26|stun|(동) 놀라게 하다, 기절시키다|be [stunned] by the news|뉴스에 깜짝 놀라다
21-26|particular|(형) 특정한, 개개의 (명) 사항, 상세|in particular|특히
21-26|bulletin|(명) 게시, 게시물|bulletin board|게시판
21-26|fluid|(명) 유동체 (형) 유동체의, 유동적인|body fluid|체액
21-26|affair|(명) 사건, 일|foreign affairs|외무(외국 문제)
21-26|dawn|(명) 새벽 (동) 날이 새다, 이해되기 시작하다|before dawn|동트기 전에
21-26|hostile|(형) 적대적인|hostile attitude|적대적인 태도
21-26|contend|(동) 싸우다, 주장하다, 경쟁하다|contend with difficulties|어려움과 싸우다
21-26|respect|(동) 존중하다 (명) 존경, 관련|in this respect|이런 측면(점)에서
21-26|await|(동) 기다리다|await results|결과를 기다리다
21-26|concrete|(형) 구체적인 (명) 콘크리트|concrete evidence|구체적인 증거
21-26|satisfy|(동) 만족시키다, 충족시키다|satisfy needs|욕구를 충족시키다
21-26|literate|(형) 읽고 쓸 수 있는|computer literate|컴퓨터를 다룰 줄 아는
21-26|variable|(명) 변수 (형) 변하기 쉬운, 변덕스러운|independent variable|독립 변수
21-26|lease|(명) 임대 (동) 임대하다|sign a lease|임대 계약을 맺다
21-26|rule|(명) 지배, 규칙 (동) 지배하다, 통치하다|rule the country|나라를 통치하다
21-26|perseverance|(명) 인내심|patience and perseverance|끈기와 인내
21-26|fatal|(형) 치명적인|fatal error|치명적인 오류
21-26|substitute|(명) 대리자, 대체물 (동) 대체하다|substitute A for B|B 대신 A를 쓰다
21-26|invert|(동) 거꾸로 하다, 뒤집다|invert the order|순서를 뒤집다
21-26|tension|(명) 긴장, 불안 (동) 긴장시키다|relieve tension|긴장을 풀다
21-26|reign|(명) 통치 기간, 치세 (동) 군림하다|during the reign of|~의 통치 기간에
21-26|crack|(명) 갈라진 틈 (동) 금 가다|crack in the wall|벽의 틈
21-26|startle|(동) 깜짝 놀라게 하다|be [startled] by a noise|소리에 깜짝 놀라다
21-26|discourage|(동) 낙담시키다|discourage him from going|그가 가는 것을 말리다(낙담시키다)
21-26|compensate|(동) 보상하다|compensate for the loss|손실을 보상하다



21-27|convert|(동) 전환하다, 바꾸다|convert sunlight into energy|햇빛을 에너지로 전환하다
21-27|strike|(동) 치다, 떠오르다 (명) 치기, 동맹 파업|go on strike|파업하다
21-27|suppress|(동) 억압하다, 참다|suppress anger|화를 억누르다
21-27|core|(명) 핵심 (형) 핵심의|core value|핵심 가치
21-27|contribute|(동) 기여하다, 기부하다|contribute to success|성공에 기여하다
21-27|spear|(명) 창|throw a spear|창을 던지다
21-27|renowned|(형) 유명한, 명성 있는|renowned artist|저명한 예술가
21-27|era|(명) 시대|digital era|디지털 시대
21-27|withdraw|(동) 철수하다, 철회하다, 인출하다|withdraw money|돈을 인출하다
21-27|separate|(동) 분리하다 (형) 갈라진, 개개의|separate room|별개의 방
21-27|dignity|(명) 존엄성|human dignity|인간의 존엄성
21-27|notify|(동) 통지하다, 알리다|notify the police|경찰에 알리다
21-27|animate|(동) 생기 있게 하다 (형) 살아 있는|[animated] movie|애니메이션 영화
21-27|prevent|(동) 막다, 예방하다|prevent accidents|사고를 예방하다
21-27|bilingual|(형) 2개 국어의|bilingual education|이중 언어 교육
21-27|mischief|(명) 장난, 해악|make mischief|장난치다
21-27|discriminate|(동) 구별하다, 차별하다|discriminate against minorities|소수자를 차별하다
21-27|exemplify|(동) 예시하다, 예증하다|exemplify the theory|이론을 예증하다
21-27|adhere|(동) 고수하다, 들러붙다|adhere to the rules|규칙을 고수하다
21-27|superb|(형) 최고의, 훌륭한|superb performance|훌륭한 공연
21-27|peculiar|(형) 독특한|peculiar habit|독특한 습관
21-27|sake|(명) 위함, 목적|for the sake of|~을 위하여
21-27|choke|(동) 질식시키다, 숨이 막히다|choke on food|음식에 목이 메다
21-27|folktale|(명) 민간 설화, 전설|Korean folktale|한국 전래 동화
21-27|simultaneously|(부) 동시에|happen simultaneously|동시에 발생하다
21-27|range|(명) 범위 (동) 정렬시키다|mountain range|산맥
21-27|groom|(명) 신랑 (동) 손질하다|bride and groom|신부와 신랑
21-27|supernatural|(형) 초자연적인|supernatural power|초자연적인 힘
21-27|tender|(형) 부드러운 (동) 입찰하다 (명) 입찰|tender meat|연한 고기
21-27|instinct|(명) 본능|survival instinct|생존 본능
21-27|gigantic|(형) 거대한|gigantic structure|거대한 구조물
21-27|meditate|(동) 명상하다|meditate on life|인생에 대해 명상하다
21-27|mow|(동) 베다|mow the lawn|잔디를 깎다
21-27|evolve|(동) 진화하다, 발전하다|evolve from apes|유인원으로부터 진화하다
21-27|chase|(동) 쫓다, 추적하다|chase a thief|도둑을 쫓다
21-27|afflict|(동) 괴롭히다|be [afflicted] with disease|병으로 고통받다
21-27|empirical|(형) 경험적인, 실증적인|empirical evidence|실증적 증거
21-27|coherent|(형) 통일성 있는, 조리 있는|coherent argument|논리 정연한 주장
21-27|intolerable|(형) 참을 수 없는|intolerable pain|참을 수 없는 고통
21-27|fountain|(명) 분수, 근원|fountain of youth|젊음의 샘




21-28|bold|(형) 대담한, 선이 굵은|bold decision|대담한 결정
21-28|compliment|(명) 칭찬 (동) 칭찬하다|pay a compliment|칭찬하다
21-28|summit|(명) 꼭대기, 정상|summit meeting|정상 회담
21-28|troop|(명) 무리, 떼|send troops|군대를 파견하다
21-28|alter|(동) 바꾸다, 변경하다|alter the plan|계획을 변경하다
21-28|conceive|(동) 생각해 내다, 마음속에 그리다|conceive an idea|아이디어를 구상하다
21-28|durability|(명) 내구성|test durability|내구성을 시험하다
21-28|destroy|(동) 파괴하다|destroy a building|건물을 파괴하다
21-28|shallow|(형) 얇은, 얕은|shallow water|얕은 물
21-28|face|(동) 직면하다 (명) 얼굴, 표면|face a challenge|도전에 직면하다
21-28|promote|(동) 증진하다, 승진시키다|promote health|건강을 증진하다
21-28|weep|(동) 울다|weep for joy|기뻐서 울다
21-28|grasp|(동) 붙잡다 (명) 꽉 쥐기|grasp the meaning|의미를 파악하다
21-28|overall|(형) 전반적인, 전체의 (명) 작업복|overall performance|전반적인 성과
21-28|superstition|(명) 미신|believe in superstition|미신을 믿다
21-28|colony|(명) 식민지, 집단|ant colony|개미 군집(식민지)
21-28|absurd|(형) 불합리한, 우스꽝스러운|absurd idea|터무니없는(우스꽝스러운) 생각
21-28|conduct|(동) 수행하다, 실시하다 (명) 행위, 안내|conduct a survey|설문 조사를 수행하다
21-28|dormitory|(명) 기숙사|live in a dormitory|기숙사에 살다
21-28|prone|(형) ~하는 경향이 있는|accident-prone|사고를 잘 내는
21-28|conceal|(동) 숨기다|conceal the truth|진실을 숨기다
21-28|retreat|(동) 후퇴하다, 물러서다 (명) 퇴각, 후퇴|retreat from battle|전투에서 후퇴하다
21-28|compulsive|(형) 강제적인, 강박의|compulsive eating|강박적 폭식
21-28|clinic|(명) 전문 병원, 개인 병원|dental clinic|치과 의원
21-28|banner|(명) 깃발, 현수막|hang a banner|현수막을 걸다
21-28|formulate|(동) 만들어 내다, 공식화하다|formulate a theory|이론을 정립하다
21-28|vow|(명) 맹세 (동) 맹세하다|make a vow|맹세하다
21-28|malnutrition|(명) 영양실조|suffer from malnutrition|영양실조를 겪다
21-28|heritage|(명) 유산, 세습 재산|cultural heritage|문화 유산
21-28|undergo|(동) 겪다|undergo surgery|수술을 받다
21-28|boast|(동) 자랑하다, 떠벌리다|boast about wealth|부를 자랑하다
21-28|neutral|(형) 중립의, 공평한|neutral position|중립적인 위치
21-28|stain|(명) 얼룩 (동) 얼룩지게 하다|remove a stain|얼룩을 제거하다
21-28|incentive|(명) 자극, 장려책 (형) 격려하는, 자극하는|give an incentive|인센티브를 주다
21-28|float|(동) 뜨다, 떠다니다 (명) 부유물|float on water|물에 뜨다
21-28|tendency|(명) 경향, 추세|tendency to forget|잊어버리는 경향
21-28|applause|(명) 박수갈채|round of applause|박수갈채
21-28|wrestle|(동) 싸우다, 씨름하다|wrestle with a problem|문제와 씨름하다
21-28|sensation|(명) 감각, 느낌|burning sensation|타는 듯한 느낌
21-28|confucian|(형) 공자의, 유교의|Confucian tradition|유교적 전통



21-29|draft|(명) 원고, 초안 (동) 초안을 그리다|first draft|초안
21-29|crude|(형) 가공하지 않은|crude oil|원유
21-29|supplement|(명) 보충, 보충물 (동) 보충하다|vitamin supplement|비타민 보충제
21-29|velocity|(명) 속도|high velocity|빠른 속도
21-29|tame|(동) 길들이다 (형) 길들여진|tame a wild animal|야생 동물을 길들이다
21-29|adapt|(동) 적응하다, 적응시키다|adapt to the environment|환경에 적응하다
21-29|manage|(동) 잘 해내다, 다루다|manage to survive|간신히 살아남다
21-29|dismay|(동) 실망시키다, 낙담시키다 (명) 걱정, 실망|to my dismay|실망스럽게도
21-29|diagnose|(동) 진단하다|diagnose a disease|병을 진단하다
21-29|molecule|(명) 분자|water molecule|물 분자
21-29|reservoir|(명) 저장소, 저수지|water reservoir|급수장
21-29|conform|(동) 순응하다, 일치하다|conform to rules|규칙에 따르다
21-29|spacious|(형) 넓은, 훤히 트인|spacious room|널찍한 방
21-29|weave|(동) 엮다, 짜다, 엮어 넣다|weave a basket|바구니를 짜다
21-29|boundary|(명) 경계, 경계선|national boundary|국경
21-29|motive|(명) 동기|ulterior motive|숨은 동기
21-29|tangible|(형) 유형적인, 유형의, 만질 수 있는|tangible asset|유형 자산
21-29|prominent|(형) 현저한, 저명한|prominent figure|저명인사
21-29|rigid|(형) 엄격한, 융통성이 없는|rigid rules|엄격한 규칙
21-29|archaeology|(명) 고고학|study archaeology|고고학을 공부하다
21-29|subtract|(동) 빼다|subtract cost|비용을 빼다
21-29|breed|(동) 낳다, 양육하다|breed cattle|소를 사육하다
21-29|utmost|(형) 최대한의, 최고의 (명) 최대한도|utmost importance|최고의 중요성
21-29|proficient|(형) 숙달된|proficient in English|영어에 능숙한
21-29|accumulate|(동) 모으다, 축적하다|accumulate wealth|부를 축적하다
21-29|embody|(동) 구현하다, 구체화하다|embody an idea|아이디어를 구현하다
21-29|equity|(명) 공평|brand equity|브랜드 자산
21-29|violate|(동) 위반하다, 침해하다|violate the law|법을 위반하다
21-29|ambitious|(형) 야심 있는|ambitious plan|야심 찬 계획
21-29|intact|(형) 온전한, 손상되지 않은|remain intact|온전하게 남다
21-29|impulse|(명) 충동, 추진|on impulse|충동적으로
21-29|attend|(동) 출석하다, 보살피다|attend to business|업무를 처리하다
21-29|trim|(동) 다듬다, 잘라 내다|trim the budget|예산을 삭감하다
21-29|navigate|(동) 길을 찾다, 항해하다|navigate the web|인터넷을 탐색하다
21-29|remedy|(명) 치료, 요법|folk remedy|민간요법
21-29|consist|(동) 이루어지다|consist of|~로 구성되다
21-29|imprint|(동) 찍다, 감명시키다 (명) 찍은 자국|imprint on memory|기억에 각인시키다
21-29|modify|(동) 변형하다, 수정하다|modify the plan|계획을 수정하다
21-29|confine|(동) 제한하다, 가두다 (명) 한계|be [confined] to bed|병상에 있다
21-29|dispatch|(동) 급파하다, 발송하다 (명) 급파, 발송|dispatch troops|군대를 파병하다


21-30|diameter|(명) 지름, 직경|measure the diameter|지름을 측정하다
21-30|anecdote|(명) 일화, 비화|tell an anecdote|일화를 이야기하다
21-30|spatial|(형) 공간의, 공간적인|spatial awareness|공간 지각 능력
21-30|blame|(동) 비난하다, ~의 탓으로 돌리다 (명) 비난, 책망|blame A for B|B에 대해 A를 비난하다
21-30|geology|(명) 지질학|study geology|지질학을 연구하다
21-30|pledge|(명) 약속, 맹세 (동) 약속하다, 맹세하다|make a pledge|서약하다
21-30|cost|(동) (비용이) 들다 (명) 비용, 대가|at all costs|무슨 수를 써서라도
21-30|earn|(동) 얻다, 벌다|earn a living|생계를 꾸리다
21-30|detect|(동) 발견하다, 감지하다|detect a flaw|결함을 발견하다
21-30|temperate|(형) 온화한, 절제하는|temperate zone|온대 지방
21-30|soar|(동) 높이 치솟다|Prices [soar].|가격이 치솟다.
21-30|mock|(동) 조롱하다 (형) 가짜의|mock test|모의고사
21-30|disclose|(동) 드러내다, 폭로하다|disclose information|정보를 공개하다
21-30|exhibit|(동) 전시하다, 보여 주다 (명) 전시, 전시품|exhibit paintings|그림을 전시하다
21-30|symptom|(명) 증상|flu symptoms|독감 증상
21-30|invent|(동) 발명하다|invent a device|장치를 발명하다
21-30|awkward|(형) 어색한, 서투른|awkward silence|어색한 침묵
21-30|grind|(동) 갈다, 빻다|grind coffee beans|커피 원두를 갈다
21-30|expose|(동) 드러내다, 폭로하다|expose to danger|위험에 노출시키다
21-30|closet|(명) 벽장|skeleton in the closet|숨기고 싶은 비밀
21-30|damp|(형) 축축한 (명) 습기|damp weather|눅눅한 날씨
21-30|script|(명) 손으로 쓰기, 대본|movie script|영화 대본
21-30|signify|(동) 의미하다, 중요하다|signify success|성공을 의미하다
21-30|discuss|(동) 토론하다|discuss the matter|그 문제를 논의하다
21-30|sibling|(명) 형제자매, 동기|sibling rivalry|형제간의 경쟁
21-30|lay|(동) 놓다, (알을) 낳다|lay eggs|알을 낳다
21-30|surveillance|(명) 감시|surveillance camera|감시 카메라
21-30|discharge|(명) 배출, 내보냄 (동) 배출하다, 내보내다|discharge from hospital|퇴원시키다
21-30|thorough|(형) 철저한|thorough investigation|철저한 조사
21-30|undertake|(동) 수행하다, 떠맡다, 착수하다|undertake a task|과업에 착수하다
21-30|panel|(명) 토론자단, 패널|solar panel|태양 전지판
21-30|linguistic|(형) 언어의, 언어학의|linguistic ability|언어 능력
21-30|flourish|(동) 번영하다, 번창하다|business flourishes|사업이 번창하다
21-30|feed|(동) 먹이를 주다, 부양하다|feed on grass|풀을 먹고 살다
21-30|sophomore|(명) 2학년생|college sophomore|대학교 2학년
21-30|remind|(동) 생각나게 하다, 상기시키다|Remind A of B.|A에게 B를 상기시키다.
21-30|sole|(형) 유일한|sole purpose|유일한 목적
21-30|pillar|(명) 기둥|stone pillar|돌기둥
21-30|explode|(동) 폭발하다|Bomb [exploded].|폭탄이 폭발했다.
21-30|illusion|(명) 환상, 착각|optical illusion|착시 현상

21-31|regret|(동) 후회하다, 한탄하다 (명) 유감, 후회|regret a decision|결정을 후회하다
21-31|submit|(동) 복종시키다, 복종하다, 제출하다|submit a report|보고서를 제출하다
21-31|divine|(형) 신의, 신성한|divine will|신의 뜻
21-31|revenue|(명) 수입, 수익|tax revenue|세수
21-31|corrupt|(형) 부정한, 부패한 (동) 타락시키다|corrupt politician|부패한 정치인
21-31|mention|(동) 언급하다 (명) 언급|don't mention it|천만에요
21-31|factual|(형) 실제의|factual error|사실적 오류
21-31|swamp|(명) 늪, 습지|drained the swamp|늪을 배수했다
21-31|expedition|(명) 탐험|scientific expedition|과학 탐험
21-31|abnormal|(형) 비정상적인|abnormal behavior|비정상적인 행동
21-31|storage|(명) 저장, 저장고|data storage|데이터 저장
21-31|revive|(동) 되살아나다|revive memories|기억을 되살리다
21-31|equator|(명) 적도|cross the equator|적도를 지나다
21-31|motion|(명) 운동, 움직임, 몸짓 (동) 몸짓으로 지시하다|slow motion|슬로 모션
21-31|patent|(명) 특허, 특허권 (동) ~의 특허를 얻다|apply for a patent|특허를 출원하다
21-31|virtue|(명) 미덕|virtue and vice|미덕과 악덕
21-31|arithmetic|(명) 산수, 연산|basic arithmetic|기초 산수
21-31|consistent|(형) 일관된, 모순이 없는|consistent effort|일관된 노력
21-31|cognitive|(형) 인식의, 인지력 있는|cognitive development|인지 발달
21-31|hinder|(동) 방해하다|hinder progress|발전을 저해하다
21-31|humble|(형) 겸손한, 비천한|be humble|겸손해라
21-31|bounce|(동) 튀다, 뛰어오르다|bounce a ball|공을 튀기다
21-31|imprison|(동) 투옥하다|be [imprisoned]|투옥되다
21-31|enlist|(동) 모집하다, 도움을 얻다|enlist help|도움을 요청하다
21-31|carbon|(명) 탄소|carbon dioxide|이산화탄소
21-31|upcoming|(형) 다가오는|upcoming event|다가오는 행사
21-31|trace|(명) 흔적 (동) 흔적을 쫓다|trace the origin|기원을 추적하다
21-31|pulse|(명) 맥박|feel a pulse|맥박을 느끼다
21-31|locate|(동) ~에 위치하다, 찾아내다|locate the store|가게 위치를 찾다
21-31|controversy|(명) 논란, 논쟁|cause a controversy|논란을 일으키다
21-31|flattery|(명) 아첨|empty flattery|빈말
21-31|regard|(동) ~으로 여기다 (명) 관계, 고려|regard A as B|A를 B로 여기다
21-31|convenience|(명) 편의, 편리|for your convenience|당신의 편의를 위해
21-31|hygiene|(명) 위생, 위생학|personal hygiene|개인위생
21-31|rush|(동) 돌진하다 (명) 돌진, 황급한 움직임|rush hour|혼잡 시간대
21-31|contaminate|(동) 오염시키다|contaminate water|물을 오염시키다
21-31|external|(형) 외부의 (명) 외부|external factor|외부 요인
21-31|herd|(명) 떼|herd of cows|소 떼
21-31|allocate|(동) 할당하다, 분배하다|allocate resources|자원을 할당하다
21-31|gorgeous|(형) 아주 멋진, 화려한|gorgeous dress|화려한 드레스

21-32|confess|(동) 고백하다|confess a sin|죄를 고백하다
21-32|subjective|(형) 주관적인, 주격의|subjective view|주관적인 견해
21-32|trivial|(형) 사소한|trivial matter|사소한 문제
21-32|acknowledge|(동) 인정하다|acknowledge defeat|패배를 인정하다
21-32|accord|(동) 일치하다, 주다 (명) 일치, 협정|in accord with|~와 일치하여
21-32|immense|(형) 막대한|immense pleasure|막대한 기쁨
21-32|extract|(동) 추출하다 (명) 추출물|extract juice|즙을 짜내다
21-32|sewage|(명) 하수|sewage treatment|하수 처리
21-32|reconciliation|(명) 화해|seek reconciliation|화해를 모색하다
21-32|explore|(동) 탐험하다, 탐구하다|explore possibilities|가능성을 탐구하다
21-32|warrant|(명) 보증 (동) 보증하다|search warrant|수색 영장
21-32|complement|(동) 보완하다 (명) 보충물|complement each other|서로 보완하다
21-32|ceramic|(명) 도자기 (형) 도자기의|ceramic tile|도자기 타일
21-32|license|(명) 면허, 인가 (동) 면허를 내주다|driver's license|운전면허증
21-32|emerge|(동) 나타나다, 드러나다|emerge from poverty|가난에서 벗어나다
21-32|halt|(명) 정지, 일시 멈춤 (동) 정지하다, 정지시키다|come to a halt|멈추다
21-32|pierce|(동) 꿰뚫다, 구멍을 뚫다|pierce ears|귀를 뚫다
21-32|ponder|(동) 심사숙고하다|ponder over a question|질문을 깊이 생각하다
21-32|burglar|(명) 강도|catch a burglar|강도를 잡다
21-32|stroke|(명) 뇌졸중, 강타|heat stroke|열사병
21-32|lottery|(명) 복권, 추첨|win the lottery|복권에 당첨되다
21-32|certificate|(명) 증명서, 자격증|birth certificate|출생 증명서
21-32|transplant|(명) 이식 (동) 이식하다|heart transplant|심장 이식
21-32|cluster|(명) 무리, 송이|cluster of stars|별 무리
21-32|plea|(명) 탄원, 간청, 변명|make a plea|탄원하다
21-32|derive|(동) 이끌어 내다, 비롯되다|derive pleasure from|~에서 즐거움을 얻다
21-32|plague|(명) 전염병|the plague|흑사병
21-32|ultrasound|(명) 초음파|ultrasound image|초음파 영상
21-32|deluxe|(형) 호화로운, 사치스러운|deluxe room|특실
21-32|convey|(동) 전달하다, 나르다|convey meaning|의미를 전달하다
21-32|depth|(명) 깊이|in depth|깊이 있게
21-32|evaporate|(동) 증발하다|Water [evaporates].|물이 증발하다.
21-32|lame|(형) 다리를 저는|lame excuse|서투른 변명
21-32|intelligence|(명) 지능, 지성|artificial intelligence|인공지능
21-32|sour|(형) 신맛이 나는|go sour|상하다
21-32|repetitive|(형) 반복성의|repetitive task|반복적인 업무
21-32|oppress|(동) 억압하다|oppress the weak|약자를 억압하다
21-32|leftover|(형) 나머지의, 남은 (명) 나머지, 남은 음식|leftover food|남은 음식
21-32|embrace|(명) 포옹 (동) 포옹하다, 받아들이다|embrace change|변화를 받아들이다
21-32|blade|(명) 칼날|sharp blade|날카로운 칼날

21-33|abundant|(형) 풍부한|abundant resources|풍부한 자원
21-33|duplicate|(명) 복제품 (형) 이중의 (동) 이중으로 하다, 복제하다|duplicate a file|파일을 복제하다
21-33|spoil|(동) 망치다, 상하게 하다|spoil a child|아이를 버릇없게 키우다
21-33|altitude|(명) 고도, 높이|high altitude|높은 고도
21-33|glimpse|(명) 흘긋 봄 (동) 흘긋 보다|catch a glimpse of|~을 힐끗 보다
21-33|blend|(명) 혼합 (동) 섞다, 혼합하다|blend well|잘 섞다
21-33|swell|(동) 부풀다, 팽창하다 (명) 팽창|feet [swell]|발이 붓다
21-33|grief|(명) 큰 슬픔|overcome grief|슬픔을 극복하다
21-33|beverage|(명) 음료|alcoholic beverage|주류
21-33|warrior|(명) 전사, 용사|brave warrior|용감한 전사
21-33|shrub|(명) 관목|plant a shrub|관목을 심다
21-33|slice|(명) 얇은 조각 (동) 얇게 썰다|slice bread|빵을 얇게 썰다
21-33|exotic|(형) 이국적인|exotic fruit|이국적인 과일
21-33|arrogant|(형) 거만한|arrogant attitude|거만한 태도
21-33|vanish|(동) 사라지다|vanish into thin air|감쪽같이 사라지다
21-33|outbreak|(명) 발발, 폭동|outbreak of war|전쟁 발발
21-33|accommodate|(동) 수용하다, 숙박시키다|accommodate guests|손님을 수용하다
21-33|cozy|(형) 아늑한|cozy room|아늑한 방
21-33|recommend|(동) 추천하다|recommend a book|책을 추천하다
21-33|auction|(명) 경매 (동) 경매에 부치다|sell at auction|경매로 팔다
21-33|obsess|(동) 강박 관념을 갖다|be [obsessed] with|~에 집착하다
21-33|suitor|(명) 소송인, 구혼자|rejection of a suitor|구혼자에 대한 거절
21-33|rational|(형) 이성적인, 합리적인|rational decision|합리적인 결정
21-33|discreet|(형) 분별 있는, 사려 깊은|be discreet|신중해라
21-33|pioneer|(명) 개척자, 선구자 (형) 개척자의 (동) 개척하다|space pioneer|우주 개척자
21-33|assert|(동) 주장하다, 행사하다|assert oneself|자기주장을 하다
21-33|undo|(동) 원상태로 돌리다, 풀다|undo a button|단추를 풀다
21-33|inevitable|(형) 피할 수 없는|inevitable result|피할 수 없는 결과
21-33|elaborate|(형) 정교한, 공들인 (동) 정교하게 만들다|elaborate design|정교한 디자인
21-33|toss|(동) 던지다|toss a coin|동전을 던지다
21-33|retain|(동) 유지하다|retain moisture|수분을 유지하다
21-33|maximize|(동) 최대화하다|maximize profit|이익을 극대화하다
21-33|buildup|(명) 축적|military buildup|군비 증강
21-33|machinery|(명) 기계|heavy machinery|중장비
21-33|sacrifice|(동) 희생하다, 희생시키다 (명) 희생, 제물|sacrifice for others|남을 위해 희생하다
21-33|auditorium|(명) 강당|school auditorium|학교 강당
21-33|linger|(동) 오래 머물다, 계속되다|linger on|계속 남아있다
21-33|neglect|(동) 무시하다 (명) 소홀, 무시|neglect duty|의무를 소홀히 하다
21-33|feedback|(명) 반응, 피드백|positive feedback|긍정적인 피드백
21-33|radioactive|(형) 방사성의|radioactive waste|방사성 폐기물


21-34|impair|(동) 손상하다|impair vision|시력을 손상시키다
21-34|metaphor|(명) 은유, 은유법|use a metaphor|은유를 사용하다
21-34|predominant|(형) 뛰어난, 우세한|predominant color|주된 색상
21-34|bruise|(명) 타박상, 멍 (동) 타박상을 입히다, 멍들게 하다|get a bruise|멍이 들다
21-34|attorney|(명) 변호사|defense attorney|피고측 변호사
21-34|sanitation|(명) 위생|sanitation facility|위생 시설
21-34|heredity|(명) 유전, 유전 형질|influence of heredity|유전의 영향
21-34|naive|(형) 순진한|naive belief|순진한 믿음
21-34|shed|(동) 흘리다, 발산하다, 떨어뜨리다|shed tears|눈물을 흘리다
21-34|metropolitan|(형) 수도권의, 대도시의|metropolitan area|대도시 지역
21-34|shield|(명) 방패, 보호물 (동) 보호하다|shield from sun|햇볕으로부터 보호하다
21-34|ecology|(명) 생태학|deep ecology|심층 생태학
21-34|coverage|(명) 범위, 보도|media coverage|언론 보도
21-34|expel|(동) 쫓아내다|expel from school|퇴학시키다
21-34|plow|(명) 쟁기 (동) 쟁기질하다|plow the field|밭을 갈다
21-34|prolong|(동) 연장하다|prolong life|수명을 연장하다
21-34|fluent|(형) 유창한|fluent in English|영어가 유창한
21-34|margin|(명) 가장자리|profit margin|이윤 폭
21-34|induce|(동) 유도하다, 설득하다|induce sleep|잠을 유도하다
21-34|interior|(명) 내부 (형) 내부의|interior design|실내 디자인
21-34|ornament|(명) 장식품 (동) 장식하다|Christmas ornament|크리스마스 장식
21-34|probe|(동) 조사하다 (명) 탐사선|space probe|우주 탐사선
21-34|vibrate|(동) 진동하다, 흔들다|phone [vibrates]|전화기가 진동한다
21-34|speculate|(동) 사색하다, 투기하다|speculate on the future|미래를 추측하다
21-34|versus|~ 대, ~과 대비하여|Korea versus Japan|한국 대 일본
21-34|pregnant|(형) 임신한|pregnant woman|임산부
21-34|epidemic|(명) 전염병, 유행병|flu epidemic|독감 유행
21-34|precede|(동) ~에 앞서다, 먼저 일어나다|A precedes B|A가 B보다 앞서다
21-34|breathtaking|(형) 아슬아슬한, 숨 막히는|breathtaking view|숨 막히는 절경
21-34|foundation|(명) 기초, 토대, 재단|lay the foundation|기초를 놓다
21-34|stimulate|(동) 자극하다, 고무하다|stimulate economy|경기를 부양하다
21-34|fabric|(명) 구조, 조직, 직물|social fabric|사회 구조
21-34|overturn|(동) 전복시키다 (명) 전복|overturn a decision|결정을 뒤집다
21-34|ripe|(형) 익은|ripe tomato|익은 토마토
21-34|framework|(명) 뼈대, 틀, 체제|legal framework|법적 체제
21-34|urgent|(형) 긴급한, 다급한|urgent matter|긴급한 문제
21-34|settle|(동) 정착하다, 정착시키다|settle a dispute|분쟁을 해결하다
21-34|conflict|(동) 충돌하다 (명) 갈등, 충돌|resolve conflict|갈등을 해결하다
21-34|vapor|(명) 증기 (동) 증발하다|water vapor|수증기
21-34|tuition|(명) 수업료|college tuition|대학 등록금

21-35|literature|(명) 문학, 문예|english literature|영문학
21-35|compound|(명) 화합물 (형) 합성의 (동) 혼합하다|chemical compound|화학 화합물
21-35|quote|(동) 인용하다|quote a poem|시를 인용하다
21-35|inhale|(동) 들이쉬다|inhale smoke|연기를 들이마시다
21-35|prospect|(명) 가능성, 전망|job prospects|취업 전망
21-35|anchor|(명) 뗏목, 닻, 앵커 (동) 닻을 내리다|drop anchor|닻을 내리다
21-35|asymmetry|(명) 비대칭, 불균형|facial asymmetry|안면 비대칭
21-35|loop|(명) 고리|endless loop|무한 루프
21-35|withstand|(동) 견디다|withstand pressure|압력을 견디다
21-35|implement|(명) 도구 (동) 실행하다|implement a policy|정책을 시행하다
21-35|anonymous|(형) 익명의|anonymous donor|익명의 기부자
21-35|collide|(동) 충돌하다|collide with a car|차와 충돌하다
21-35|memorial|(명) 기념물, 기념관|war memorial|전쟁 기념비
21-35|vacant|(형) 빈, 비어 있는|vacant seat|빈 좌석
21-35|technical|(형) 기술의, 전문적인|technical term|전문 용어
21-35|thrill|(명) 스릴, 전율 (동) 몹시 신나게 하다, 감동시키다|seek thrills|스릴을 추구하다
21-35|wander|(동) 돌아다니다 (명) 유랑, 방랑|wander around|여기저기 돌아다니다
21-35|proportion|(명) 비율, 부분|in proportion to|~에 비례하여
21-35|antibiotic|(명) 항생 물질, 항생제|take antibiotics|항생제를 복용하다
21-35|overtake|(동) 따라잡다|overtake a car|차를 추월하다
21-35|resemble|(동) 닮다, 비슷하다|resemble parents|부모를 닮다
21-35|orchard|(명) 과수원|apple orchard|사과 과수원
21-35|compassion|(명) 연민, 동정|feel compassion|연민을 느끼다
21-35|preoccupation|(명) 몰두, 집착, 선취|preoccupation with death|죽음에 대한 집착
21-35|paste|(명) 풀, 반죽 (동) 풀칠하다, 붙이다|copy and paste|복사해서 붙이다
21-35|provoke|(동) 선동하다, 자극하다|provoke anger|화를 돋우다
21-35|wicked|(형) 사악한|wicked witch|사악한 마녀
21-35|sprain|(동) 삐다|[sprain] an ankle|발목을 삐다
21-35|sequence|(명) 순서, 결과, 연속|in sequence|순서대로
21-35|stool|(명) 의자, 변기|sit on a stool|스툴에 앉다
21-35|disrupt|(동) 혼란에 빠뜨리다, 방해하다|disrupt sleep|수면을 방해하다
21-35|solitary|(형) 혼자의, 외로운, 고독한|solitary life|고독한 삶
21-35|bury|(동) 파묻다|bury the dead|죽은 자를 매장하다
21-35|rust|(명) 녹 (동) 녹슬다, 녹이 슬게 하다|Iron [rusts].|철은 녹슨다.
21-35|fad|(명) 일시적 유행|passing fad|일시적인 유행
21-35|referee|(명) 심판 (동) 심판하다|football referee|축구 심판
21-35|sector|(명) 분야, 지역, 부채꼴|public sector|공공 부문
21-35|boost|(명) 상승, 밀어 올림 (동) 밀어 올리다|boost morale|사기를 북돋우다
21-35|gymnastics|(명) 체육, 체조|rhythmic gymnastics|리듬 체조
21-35|gross|(형) 엄청난, 총합의 (명) 총합 (동) ~의 총이익을 올리다|gross profit|총이익

21-36|last|(동) 계속되다|last forever|영원히 계속되다
21-36|tariff|(명) 관세 (동) 관세를 부과하다|impose a tariff|관세를 부과하다
21-36|beloved|(형) 사랑스러운|beloved friend|사랑하는 친구
21-36|lyric|(명) 노래 가사, 서정시 (형) 서정적인|song lyrics|노래 가사
21-36|yeast|(명) 효모 (동) 발효하다|baker's yeast|빵 효모
21-36|skyscraper|(명) 마천루, 고층 건물|tall skyscraper|높은 고층 건물
21-36|inquire|(동) 묻다, 조사하다|inquire about the price|가격을 문의하다
21-36|spade|(명) 삽|dig with a spade|삽으로 파다
21-36|vacuum|(명) 진공, 진공청소기 (동) 진공청소기로 청소하다|vacuum cleaner|진공청소기
21-36|migrate|(동) 이동하다, 이주하다|Birds [migrate].|새들이 이동하다.
21-36|spectacle|(명) 광경|grand spectacle|웅장한 광경
21-36|surplus|(명) 과잉, 나머지 (형) 과잉의, 나머지의|budget surplus|예산 흑자
21-36|simulate|(동) 가장하다, 모의 실험하다|simulate flight|비행을 모의 실험하다
21-36|integration|(명) 통합, 적분|social integration|사회 통합
21-36|hypothesis|(명) 가설|test a hypothesis|가설을 검증하다
21-36|affirm|(동) 단언하다|affirm loyalty|충성을 맹세하다
21-36|fortress|(명) 요새|build a fortress|요새를 짓다
21-36|reed|(명) 갈대 (형) 갈대의|thinking reed|생각하는 갈대
21-36|cue|(명) 단서, 신호|take a cue|단서를 얻다
21-36|mole|(명) 사마귀, 점|mole on the face|얼굴의 점
21-36|divide|(동) 나누다, 분리하다, 나누어지다 (명) 분할|divide into groups|그룹으로 나누다
21-36|inborn|(형) 타고난|inborn talent|타고난 재능
21-36|overlap|(동) 겹치다 (명) 중복|Interests [overlap].|이해관계가 겹치다.
21-36|fatigue|(명) 피로 (동) 피곤하게 하다|chronic fatigue|만성 피로
21-36|clone|(명) 복제 생물, 클론 (동) 복제하다|clone a sheep|양을 복제하다
21-36|peel|(동) 껍질을 벗기다 (명) 껍질|peel an apple|사과 껍질을 벗기다
21-36|ease|(동) 진정시키다 (명) 편함, 용이함|at ease|편안한
21-36|overcome|(동) 극복하다, 압도하다|overcome difficulties|어려움을 극복하다
21-36|fund|(명) 기금 (동) 자금을 제공하다|raise a fund|기금을 모으다
21-36|bias|(명) 편견|gender bias|성차별
21-36|vaccine|(명) 백신|flu vaccine|독감 백신
21-36|tread|(동) 밟다, 걷다 (명) 밟음|tread lightly|발소리를 죽이다
21-36|vomit|(동) 토하다 (명) 구토|feel like vomiting|토할 것 같다
21-36|prophecy|(명) 예언|fulfill a prophecy|예언을 실현하다
21-36|correspond|(동) 일치하다, 서신 왕래하다|correspond with|~와 일치하다
21-36|cling|(동) 달라붙다, 집착하다|cling to hope|희망에 매달리다
21-36|mutation|(명) 돌연변이, 변화|genetic mutation|유전자 돌연변이
21-36|obscure|(형) 불분명한, 이해하기 어려운|obscure meaning|모호한 의미
21-36|tyrant|(명) 폭군, 전제 군주|cruel tyrant|잔인한 폭군
21-36|odd|(형) 이상한, 홀수의|odd number|홀수


21-37|intriguing|(형) 아주 흥미로운|intriguing question|흥미로운 질문
21-37|constrict|(동) 죄다, 위축시키다|Blood vessels [constrict].|혈관이 수축하다.
21-37|bundle|(명) 묶음, 꾸러미|a bundle of wood|나무 한 묶음
21-37|enclose|(동) 동봉하다, 에워싸다|enclose a check|수표를 동봉하다
21-37|insert|(동) 삽입하다|insert a coin|동전을 넣다
21-37|keen|(형) 날카로운, 예민한, 간절히 ~하고 싶은|keen sense of smell|예민한 후각
21-37|restrain|(동) 억제하다, 구속하다|restrain anger|화를 억누르다
21-37|aid|(동) 돕다 (명) 도움, 조력|first aid|응급 처치
21-37|reputation|(명) 평판, 명성|good reputation|좋은 평판
21-37|measurement|(명) 측정, 측량, 치수|accurate measurement|정확한 측정
21-37|originate|(동) 시작되다, 비롯하다|originate from|~에서 유래하다
21-37|flour|(명) 밀가루|wheat flour|밀가루
21-37|manipulate|(동) 조종하다, 조작하다|manipulate public opinion|여론을 조작하다
21-37|experiment|(명) 실험 (동) 실험하다|conduct an experiment|실험을 수행하다
21-37|patriot|(명) 애국자|true patriot|진정한 애국자
21-37|interchange|(명) 교환, 교차점 (동) 교환하다|interchange ideas|아이디어를 교환하다
21-37|intuitive|(형) 직관적인, 직관에 의한|intuitive understanding|직관적인 이해
21-37|garment|(명) 의복|cotton garment|면 의류
21-37|spontaneous|(형) 자발적인, 자연히 일어나는|spontaneous reaction|자발적인 반응
21-37|vertical|(형) 수직의|vertical line|수직선
21-37|testify|(동) 검증하다, 증명하다, 증언하다|testify in court|법정에서 증언하다
21-37|mentor|(명) 조언자|wise mentor|현명한 멘토
21-37|vivid|(형) 생생한|vivid memory|생생한 기억
21-37|pasture|(명) 목초지, 목장|green pasture|푸른 목초지
21-37|crust|(명) 껍질, 지각|earth's crust|지각
21-37|comprehend|(동) 이해하다, 포함하다|comprehend the meaning|의미를 이해하다
21-37|plunge|(동) 뛰어들다, 던져 넣다|plunge into water|물속으로 뛰어들다
21-37|nasty|(형) 더러운, 불쾌한|nasty smell|고약한 냄새
21-37|appreciate|(동) 이해하다, 감상하다, 고맙게 생각하다|appreciate help|도움에 감사하다
21-37|strip|(동) 박탈하다, 벗기다|strip off clothes|옷을 벗다
21-37|deed|(명) 행위, 업적|good deed|선행
21-37|skinny|(형) 피골이 상접한, 마른|skinny jeans|딱 붙는 청바지
21-37|grill|(명) 석쇠 (동) 석쇠로 굽다, 심문하다|grill meat|고기를 굽다
21-37|canal|(명) 수로, 운하|Suez Canal|수에즈 운하
21-37|curse|(명) 저주 (동) 저주하다|under a curse|저주에 걸린
21-37|adverse|(형) 거스르는, 반대의, 부정적인|adverse effect|역효과
21-37|censorship|(명) 검열|media censorship|언론 검열
21-37|leverage|(동) 이용하다 (명) 지레의 작용, 영향력|leverage technology|기술을 이용하다
21-37|appetite|(명) 식욕, 욕망, 욕구|loss of appetite|식욕 부진
21-37|flaw|(명) 결점, 흠|fatal flaw|치명적인 결점



21-38|outgoing|(형) 외향적인|outgoing personality|외향적인 성격
21-38|verbal|(형) 말의, 구두의|verbal communication|언어 소통
21-38|liberate|(동) 해방하다, 자유롭게 하다|liberate slaves|노예를 해방하다
21-38|academic|(형) 학문적인, 학구적인|academic achievement|학업 성취
21-38|advance|(동) 나아가게 하다, 진척시키다 (명) 전진, 증진|technological advance|기술적 진보
21-38|contemplate|(동) 숙고하다, 응시하다|contemplate the future|미래를 숙고하다
21-38|underlying|(형) 밑에 놓인, 근본적인|underlying cause|근본적인 원인
21-38|segregation|(명) 인종 차별, 분리|racial segregation|인종 차별
21-38|stem|(동) 생기다, 일어나다 (명) 줄기, 대|stem from|~에서 기인하다
21-38|irrigation|(명) 관개, 물 대기|irrigation system|관개 수로 시스템
21-38|consecutive|(형) 연속적인, 일관된|consecutive days|연이은 날들
21-38|superficial|(형) 표면상의, 피상적인|superficial knowledge|얕은 지식
21-38|refuge|(명) 피난, 피난처|seek refuge|피난처를 찾다
21-38|swear|(동) 맹세하다, 욕하다|swear to tell the truth|진실을 말할 것을 맹세하다
21-38|allergy|(명) 알레르기|food allergy|식품 알레르기
21-38|norm|(명) 규범, 기준, 표준|social norms|사회 규범
21-38|endeavor|(명) 노력 (동) 노력하다|endeavor to succeed|성공하려고 노력하다
21-38|erect|(동) 세우다 (형) 똑바로 선|erect a monument|기념비를 세우다
21-38|feminine|(형) 여성의, 여성스러운|feminine voice|여성적인 목소리
21-38|drowsy|(형) 졸리는|feel drowsy|졸음이 오다
21-38|inspect|(동) 검사하다, 점검하다|inspect the car|차를 점검하다
21-38|carriage|(명) 마차, 탈것|horse-drawn carriage|말이 끄는 마차
21-38|primitive|(형) 원시의, 초기의, 미개의|primitive man|원시인
21-38|compress|(동) 압축하다|compress air|공기를 압축하다
21-38|steep|(형) 가파른, 경사가 급한|steep hill|가파른 언덕
21-38|cemetery|(명) 공동묘지|national cemetery|국립 묘지
21-38|transport|(동) 수송하다 (명) 수송|public transport|대중교통
21-38|exaggerate|(동) 과장하다, 과장해서 말하다|Don't exaggerate.|과장하지 마라.
21-38|random|(형) 무작위의, 임의의|random choice|무작위 선택
21-38|feast|(동) 즐겁게 하다 (명) 축제, 잔치|wedding feast|결혼 잔치
21-38|commemorate|(동) 기념하다|commemorate the day|그날을 기념하다
21-38|govern|(동) 통치하다, 지배하다|govern a country|나라를 통치하다
21-38|multitask|(동) 다중 작업을 하다|ability to multitask|멀티태스킹 능력
21-38|toxic|(형) 유독한, 중독의|toxic waste|유독성 폐기물
21-38|stare|(동) 응시하다, 노려보다|stare at|~을 빤히 쳐다보다
21-38|chronic|(형) 만성적인, 장기간의|chronic disease|만성 질환
21-38|designate|(동) 지정하다, 가리키다|designate a place|장소를 지정하다
21-38|dramatic|(형) 연극의, 극적인|dramatic change|극적인 변화
21-38|intense|(형) 강렬한|intense heat|강렬한 열기
21-38|propaganda|(명) 선전 활동, 선전|political propaganda|정치 선전


21-39|numerous|(형) 다수의, 수많은|numerous attempts|수많은 시도
21-39|shiver|(명) 떨림 (동) 떨다|shiver with cold|추위에 떨다
21-39|retarded|(형) 발달이 뒤진|mentally retarded|지능 발달이 늦은
21-39|belonging|(명) 소유물, 소지품|personal belongings|개인 소지품
21-39|improvise|(동) 즉흥적으로 하다, 즉석에서 하다|improvise a speech|즉석 연설을 하다
21-39|executive|(형) 집행의, 경영의 (명) 임원, 경영진|chief executive officer|최고 경영자
21-39|chaos|(명) 혼돈, 무질서|total chaos|대혼란
21-39|microscope|(명) 현미경|electron microscope|전자 현미경
21-39|ongoing|(형) 계속되는, 진행 중인|ongoing project|진행 중인 프로젝트
21-39|vulnerable|(형) 취약한, 상처 입기 쉬운|vulnerable to attack|공격에 취약한
21-39|implication|(명) 함축, 암시|political implication|정치적 함의
21-39|alley|(명) 오솔길, 골목길|blind alley|막다른 골목
21-39|authentic|(형) 진짜의, 진정한|authentic food|정통 음식
21-39|compel|(동) 강요하다, ~하게 만들다|compel obedience|복종을 강요하다
21-39|transition|(명) 변천, 과도기|transition period|과도기
21-39|mobility|(명) 이동성, 가동성|social mobility|사회적 이동성
21-39|incline|(동) 내키게 하다, 기울이다 (명) 경사|incline to agree|동의하는 쪽으로 기울다
21-39|attain|(동) 달성하다|attain a goal|목표를 달성하다
21-39|innate|(형) 천부적인, 본질적인|innate ability|타고난 능력
21-39|ingenuity|(명) 솜씨, 독창력|human ingenuity|인간의 독창성
21-39|upset|(형) 마음이 상한, 당황한 (동) 뒤엎다 (명) 전복, 혼란|upset stomach|배탈
21-39|stretch|(동) 늘이다, 뻗다 (명) 신축성|stretch out|쭉 뻗다
21-39|seize|(동) 붙잡다, 포착하다|seize the opportunity|기회를 잡다
21-39|screw|(명) 나사 (동) 나사로 고정하다|tighten a screw|나사를 조이다
21-39|shelter|(동) 피난하다, 보호하다 (명) 피난처|taking shelter|피난하다
21-39|province|(명) 주, 분야, 영역|Gangwon Province|강원도
21-39|coordinate|(동) 조정하다 (형) 동등한|coordinate efforts|노력을 조정하다
21-39|deficient|(형) 부족한, 불완전한|deficient in vitamins|비타민이 부족한
21-39|privilege|(명) 특권 (동) 특권을 주다|special privilege|특권
21-39|preview|(명) 미리 보기, 예고편, 시사회|sneak preview|깜짝 시사회
21-39|slogan|(명) 선전 문구, 슬로건|campaign slogan|선거 구호
21-39|savage|(형) 야만적인, 잔인한 (명) 야만인|savage beast|야수
21-39|throughout|(부) 도처에, 처음부터 끝까지|throughout the world|전 세계 도처에
21-39|outlaw|(동) 금지하다, 법적으로 무효화하다 (명) 무법자|outlaw guns|총기를 불법화하다
21-39|squeeze|(동) 짜내다|squeeze a lemon|레몬을 짜다
21-39|breakthrough|(명) 비약적 발전, 돌파, 타개|scientific breakthrough|과학적 획기적 발견
21-39|consent|(명) 동의, 허락 (동) 동의하다|parental consent|부모의 동의
21-39|orphan|(명) 고아|war orphan|전쟁 고아
21-39|negotiate|(동) 협상하다|negotiate a deal|거래를 협상하다
21-39|nuisance|(명) 귀찮은 사람, 성가신 것|public nuisance|공적 불법 방해


21-40|recipe|(명) 조리법, 비법|recipe for success|성공의 비결
21-40|deceive|(동) 속이다|deceive oneself|자신을 속이다
21-40|sweep|(동) 휩쓸다, 청소하다|sweep the floor|바닥을 쓸다
21-40|profile|(명) 옆모습, 인물 소개|low profile|저자세
21-40|enterprise|(명) 기업, 사업|private enterprise|사기업
21-40|successive|(형) 연속되는, 상속의|successive victories|연승
21-40|paradox|(명) 역설, 패러독스|it is a paradox|그것은 역설이다
21-40|surpass|(동) 능가하다|surpass expectations|기대를 뛰어넘다
21-40|correlation|(명) 상관관계, 상호 관련|high correlation|높은 상관관계
21-40|magnitude|(명) 거대함, 중요성, 진도|order of magnitude|자릿수
21-40|aesthetics|(명) 미학|aesthetics of art|예술 미학
21-40|earnest|(형) 진지한 (명) 진심|earnest desire|간절한 소망
21-40|tremble|(동) 떨다|tremble with fear|공포에 떨다
21-40|slaughter|(동) 도살하다 (명) 도살, 대학살|slaughter house|도살장
21-40|surrender|(동) 넘겨주다, 포기하다, 항복하다|surrender to the enemy|적에게 항복하다
21-40|philosophy|(명) 철학|moral philosophy|도덕 철학
21-40|deplete|(동) 고갈시키다, 격감시키다|deplete resources|자원을 고갈시키다
21-40|admire|(동) 감탄하다, 높이 평가하다|admire nature|자연에 감탄하다
21-40|starvation|(명) 아사, 기아, 궁핍|die of starvation|굶어 죽다
21-40|summon|(동) 소집하다, 소환하다|summon a witness|증인을 소환하다
21-40|afford|(동) ~할 여유가 있다|can't afford to buy|살 여유가 없다
21-40|blunt|(형) 무뚝뚝한, 퉁명스러운, 둔감한, 무딘|blunt knife|무딘 칼
21-40|sprint|(명) 단거리 경주, 전력 질주 (동) 전력 질주하다|sprint to the finish|결승선까지 전력 질주하다
21-40|passerby|(명) 통행인, 지나가는 사람|innocent passerby|무고한 행인
21-40|tense|(형) 팽팽한, 긴장한 (동) 긴장시키다|tense atmosphere|긴장된 분위기
21-40|boil|(동) 끓다, 삶다|Water [boils].|물이 끓다.
21-40|timber|(명) 목재|timber industry|목재 산업
21-40|collaborate|(동) 협력하다|collaborate with others|타인과 협력하다
21-40|stance|(명) 서 있는 자세, 태도|political stance|정치적 입장
21-40|blow|(동) 불다, 바람에 날리다|Wind [blows].|바람이 분다.
21-40|ballot|(명) 투표, 투표용지 (동) 투표하다|cast a ballot|투표하다
21-40|resilience|(명) 회복력|mental resilience|정신적 회복력
21-40|acquaintance|(명) 아는 사이, 교제|casual acquaintance|그냥 아는 사이
21-40|amplify|(동) 확대하다, 증폭시키다|amplify sound|소리를 증폭하다
21-40|contradict|(동) 부정하다, 반박하다, 모순하다|contradict oneself|자가당착에 빠지다
21-40|burst|(동) 터지다, 터뜨리다, 꽉 차다 (명) 파열, 폭발|burst into tears|왈칵 울음을 터뜨리다
21-40|cast|(동) 내던지다, 보내다, 드리우다|cast a shadow|그림자를 드리우다
21-40|falsify|(동) 잘못을 입증하다, 위조하다|falsify records|기록을 위조하다
21-40|psychic|(형) 초능력이 있는, 초자연적인 (명) 무당, 영매|psychic power|초능력
21-40|paddle|(명) 노 (동) 노를 젓다|paddle a canoe|카누의 노를 젓다


23-1|evidence|(명) 증거, 흔적 (동) 입증하다|empirical evidence|실증적인 증거
23-1|beneficial|(형) 유익한, 이로운|beneficial effect|유익한 효과
23-1|value|(명) 가치 (동) 중시하다|intrinsic value|내재적 가치
23-1|pandemic|(명) 대규모 유행병|global pandemic|세계적인 유행병
23-1|public|(형) 대중의, 공공의|public awareness|대중의 인식
23-1|ingredient|(명) 성분, 요소, 재료|essential ingredient|필수 성분
23-1|enhance|(동) 높이다, 향상시키다|enhance the quality|질을 향상시키다
23-1|innocent|(형) 결백한, 무죄인|innocent victim|무고한 희생자
23-1|statistic|(명) 통계치, 통계량|reliable statistics|신뢰할 만한 통계
23-1|donate|(동) 기부하다, 기증하다|donate money|돈을 기부하다
23-1|struggle|(동) 애쓰다 (명) 노력|struggle to survive|살아남으려 애쓰다
23-1|rapid|(형) 빠른, 신속한|rapid economic growth|빠른 경제 성장
23-1|trigger|(동) 유발하다 (명) 계기|trigger a reaction|반응을 유발하다
23-1|debate|(명) 토론, 논쟁 (동) 토론하다|heated debate|열띤 토론
23-1|constant|(형) 끊임없는, 한결같은|constant pressure|끊임없는 압박
23-1|raw data|(명) 원재료, 가공 전 데이터|analyze raw data|원자료를 분석하다
23-1|grant|(동) 주다, 승인하다|take for granted|당연하게 여기다
23-1|capacity|(명) 용량, 능력|storage capacity|저장 용량
23-1|abrupt|(형) 갑작스러운, 돌연한|abrupt change|갑작스러운 변화
23-1|landscape|(명) 풍경, 경치|natural landscape|자연 경관
23-1|instrument|(명) 기구, 도구, 악기|musical instrument|악기
23-1|authorize|(동) 인가하다, 권한을 주다|authorize the use|사용을 인가하다
23-1|desirable|(형) 바람직한, 호감이 가는|desirable outcome|바람직한 결과
23-1|germ|(명) 세균, 병원균, 싹|spread of germs|세균의 확산
23-1|density|(명) 밀도, 농도|population density|인구 밀도
23-1|intangible|(형) 실체가 없는, 무형의|intangible cultural heritage|무형 문화 유산
23-1|monitor|(동) 감시하다 (명) 화면|monitor the condition|상태를 모니터링하다
23-1|budget|(명) 예산 (형) 저렴한|stay within budget|예산 내에 머물다
23-1|mission|(명) 임무, 사명|accomplish a mission|임무를 완수하다
23-1|mixture|(명) 혼합, 혼합물|complex mixture|복잡한 혼합물
23-1|illegal|(형) 불법의, 불법적인|illegal hunting|불법 사냥
23-1|disregard|(동) 무시하다 (명) 무관심|disregard the rules|규칙을 무시하다
23-1|criterion|(명) 기준, 척도|main criterion|주요 기준
23-1|pros and cons|(명) 찬반양론, 장단점|weigh pros and cons|장단점을 따져보다
23-1|majority|(명) 대다수, 과반수|majority of people|사람들의 대다수
23-1|forecast|(명) 예측, 예보|weather forecast|일기 예보
23-1|luxury|(명) 사치 (형) 호화로운|luxury goods|사치품
23-1|median|(형) 중간의 (명) 중앙값|median income|중앙값 소득
23-1|patience|(명) 인내, 참을성|lose one's patience|인내심을 잃다
23-1|reveal|(동) 드러내다, 폭로하다|reveal the truth|진실을 드러내다



23-2|healthcare|(명) 의료, 건강 관리 (형) 의료의|quality healthcare service|양질의 의료 서비스
23-2|hardwired|(형) 타고나는, 내장된|hardwired human behavior|타고난 인간 행동
23-2|self-esteem|(명) 자존감, 자부심|build high self-esteem|높은 자존감을 쌓다
23-2|assume|(동) 가정하다, 떠맡다|assume full responsibility|모든 책임을 떠맡다
23-2|gene|(명) 유전자|specific gene sequence|특정 유전자 서열
23-2|physical|(형) 신체의, 물리적인|physical and mental health|신체와 정신의 건강
23-2|conservation|(명) 보존, 보호|nature conservation effort|자연 보존 노력
23-2|sympathize|(동) 동정하다, 공감하다|sympathize with others|타인에게 공감하다
23-2|metaphor|(명) 은유, 비유|use a metaphor|은유를 사용하다
23-2|acute|(형) 심각한, 급성의|acute shortage of water|심각한 물 부족
23-2|component|(명) 요소, 성분 (형) 구성하는|essential component|필수적인 요소
23-2|survive|(동) 살아남다, 생존하다|survive harsh conditions|가혹한 환경에서 살아남다
23-2|cognitive|(형) 인지의, 인식의|cognitive development process|인지 발달 과정
23-2|proportion|(명) 비율, 할당|direct proportion|정비례
23-2|consistent|(형) 일관된, 일치하는|consistent results|일관된 결과
23-2|branch|(명) 나뭇가지, 분야|branch of science|과학의 분야
23-2|promote|(동) 촉진하다, 홍보하다|promote healthy habits|건강한 습관을 촉진하다
23-2|priority|(명) 우선순위, 우선 사항|top priority task|최우선 과제
23-2|neural|(형) 신경의|neural network system|신경망 시스템
23-2|blossom|(동) 꽃이 피다 (명) 꽃|blossom in spring|봄에 꽃이 피다
23-2|admiration|(명) 감탄, 존경|filled with admiration|감탄으로 가득 찬
23-2|enthusiastic|(형) 열렬한, 열광적인|enthusiastic supporters|열광적인 지지자들
23-2|span|(명) 기간 (동) 가로지르다|long time span|긴 시간의 폭
23-2|unfold|(동) 펼쳐지다, 밝히다|events unfold slowly|사건이 서서히 펼쳐지다
23-2|stereotype|(명) 고정 관념 (동) 정형화하다|break the stereotype|고정 관념을 깨다
23-2|irrelevant|(형) 무관한, 부적절한|irrelevant information|무관한 정보
23-2|institution|(명) 기관, 제도|educational institution|교육 기관
23-2|enforce|(동) 집행하다, 실시하다|enforce the law|법을 집행하다
23-2|biodiversity|(명) 생물 다양성|protect biodiversity|생물 다양성을 보호하다
23-2|disbelief|(명) 불신|shake head in disbelief|불신으로 고개를 젓다
23-2|heritage|(명) 유산, 전통|cultural heritage site|문화 유산 유적지
23-2|costume|(명) 의상 (동) 의상을 입히다|traditional costume|전통 의상
23-2|empire|(명) 제국|roman empire|로마 제국
23-2|crop|(명) 농작물 (동) 수확하다|main food crop|주요 식량 작물
23-2|pollen|(명) 꽃가루|pollen allergy symptoms|꽃가루 알레르기 증상
23-2|net profit|(명) 순이익|annual net profit|연간 순이익
23-2|modern|(형) 현대의, 근대의|modern society|현대 사회
23-2|collaboration|(명) 협력, 공동 작업|international collaboration|국제적인 협력
23-2|attentive|(형) 주의를 기울이는|attentive listener|경청하는 청취자
23-2|condition|(명) 상태, 조건 (동) 조절하다|medical condition|의학적 상태


23-3|entitle|(동) 자격을 주다, 제목을 붙이다|entitle to a refund|환불 자격을 주다
23-3|souvenir|(명) 기념품, 선물|buy a souvenir|기념품을 사다
23-3|coverage|(명) 보상 범위, 보도|wide media coverage|폭넓은 언론 보도
23-3|scientific|(형) 과학의, 과학적인|scientific evidence|과학적 증거
23-3|monopoly|(명) 독점, 독점권|government monopoly|정부 독점
23-3|legend|(명) 전설, 전설적인 인물|urban legend|도시 전설
23-3|disposition|(명) 기질, 성향, 배치|cheerful disposition|쾌활한 기질
23-3|traditional|(형) 전통의, 전통적인|traditional costume|전통 의상
23-3|audience|(명) 청중, 관객|attract an audience|청중을 끌어모으다
23-3|confidence|(명) 자신감, 확신, 신뢰|build self confidence|자신감을 쌓다
23-3|decade|(명) 10년|past few decades|지난 수십 년
23-3|advance|(명) 진보, 전진 (동) 나아가다|technological advance|기술적 진보
23-3|fossil|(명) 화석|fossil fuel usage|화석 연료 사용
23-3|department|(명) 부서, 학과|department store|백화점
23-3|maximum|(명) 최고 (형) 최대의|maximum speed limit|최고 속도 제한
23-3|impair|(동) 손상시키다, 해치다|impair brain function|뇌 기능을 손상시키다
23-3|sudden|(형) 갑작스러운, 뜻밖의|sudden power outage|갑작스러운 정전
23-3|implement|(동) 실행하다 (명) 도구|implement a plan|계획을 실행하다
23-3|chemical|(형) 화학의 (명) 화학물질|chemical compound|화학 화합물
23-3|old-fashioned|(형) 구식의, 고풍의|old fashioned idea|구식 생각
23-3|entrepreneur|(명) 기업가, 사업가|successful entrepreneur|성공한 기업가
23-3|ultimate|(형) 궁극적인, 최후의|ultimate source|궁극적인 근원
23-3|ban|(동) 금지하다 (명) 금지|strict smoking ban|엄격한 흡연 금지
23-3|plunge|(동) 급락하다, 거꾸러지다|temperature plunge|기온 급락
23-3|extraordinary|(형) 비범한, 보통이 아닌|extraordinary effort|비범한 노력
23-3|mastery|(명) 숙달, 통달|language mastery|언어 숙달
23-3|collapse|(동) 붕괴하다 (명) 붕괴|building collapse|건물 붕괴
23-3|tax|(명) 세금 (동) 과세하다|pay income tax|소득세를 내다
23-3|reliable|(형) 신뢰할 수 있는|reliable information|신뢰할 수 있는 정보
23-3|recommendation|(명) 권고, 추천|expert recommendation|전문가 추천
23-3|side effect|(명) 부작용|common side effect|흔한 부작용
23-3|morality|(명) 도덕, 도덕성|sense of morality|도덕관
23-3|evaluate|(동) 평가하다, 어림하다|evaluate the risk|위험을 평가하다
23-3|empathy|(명) 공감, 감정 이입|show empathy|공감을 보이다
23-3|magnificent|(형) 장대한, 화려한|magnificent architecture|장대한 건축물
23-3|utilize|(동) 활용하다, 이용하다|utilize solar energy|태양 에너지를 활용하다
23-3|scenery|(명) 경치, 풍경|mountain scenery|산의 경치
23-3|moist|(형) 습한, 축축한|moist soil|습한 토양
23-3|merchant|(명) 상인|wealthy merchant|부유한 상인
23-3|domesticate|(동) 길들이다, 가축화하다|domesticate farm animals|가축을 길들이다


23-4|contrast|(동) 대조하다 (명) 대조|sharp contrast|뚜렷한 대조
23-4|life expectancy|(명) 평균 수명|increase life expectancy|평균 수명을 늘리다
23-4|relieved|(형) 안심한, 안도한|feel relieved|안도감을 느끼다
23-4|imply|(동) 암시하다, 함축하다|imply a meaning|의미를 암시하다
23-4|fund|(명) 기금 (동) 자금을 대다|raise a fund|기금을 모으다
23-4|portion|(명) 일부, 부분|large portion|큰 부분
23-4|analyze|(동) 분석하다|analyze the data|데이터를 분석하다
23-4|eventual|(형) 최종의, 최후의|eventual success|최종적인 성공
23-4|recent|(형) 최근의|recent study|최근의 연구
23-4|frame|(명) 틀, 구조 (동) 틀에 넣다|window frame|창문 틀
23-4|probable|(형) 가능성이 있는|probable cause|있을 법한 원인
23-4|refer|(동) 언급하다, 참조하다|refer to books|책을 참조하다
23-4|hypothesis|(명) 가설, 추측|test a hypothesis|가설을 검증하다
23-4|insulate|(동) 절연하다, 격리하다|insulate the house|집을 단열하다
23-4|phenomenon|(명) 현상|natural phenomenon|자연 현상
23-4|conceal|(동) 감추다, 숨기다|conceal the truth|진실을 숨기다
23-4|globalization|(명) 세계화|process of globalization|세계화 과정
23-4|commonplace|(형) 아주 흔한|become commonplace|흔해지다
23-4|witness|(명) 목격자 (동) 목격하다|eye witness|눈으로 본 목격자
23-4|desperate|(형) 필사적인, 절망적인|desperate effort|필사적인 노력
23-4|assign|(동) 배정하다, 임명하다|assign a task|업무를 배정하다
23-4|frequency|(명) 빈도, 주파수|high frequency|높은 빈도
23-4|widespread|(형) 광범위한, 널리 퍼진|widespread use|광범위한 사용
23-4|specialize|(동) 전문화하다, 전공하다|specialize in medicine|의학을 전공하다
23-4|companion|(명) 동료, 반려자|loyal companion|충실한 동료
23-4|scarce|(형) 부족한, 드문|scarce resources|부족한 자원
23-4|intuition|(명) 직관(력)|human intuition|인간의 직관
23-4|minimize|(동) 최소화하다|minimize the risk|위험을 최소화하다
23-4|curiosity|(명) 호기심|natural curiosity|타고난 호기심
23-4|offensive|(형) 불쾌한, 공격적인|offensive smell|불쾌한 냄새
23-4|archaeologist|(명) 고고학자|famous archaeologist|유명한 고고학자
23-4|archive|(명) 기록 보관소|digital archive|디지털 보관소
23-4|costly|(형) 많은 돈이 드는|costly mistake|비용이 많이 드는 실수
23-4|divorce|(명) 이혼 (동) 이혼하다|divorce rate|이혼율
23-4|disclosure|(명) 폭로, 밝혀진 사실|full disclosure|완전한 공개
23-4|facilitate|(동) 가능하게 하다, 촉진하다|facilitate learning|학습을 촉진하다
23-4|caregiver|(명) 돌보는 사람|primary caregiver|주요 간병인
23-4|takeoff|(명) 도약, 이륙|sudden takeoff|갑작스러운 이륙
23-4|existence|(명) 존재, 실제|human existence|인간의 존재
23-4|arrest|(동) 체포하다 (명) 체포|under arrest|체포된 상태


23-5|time-consuming|(형) 시간이 걸리는, 시간을 낭비하는|time consuming task|시간이 많이 걸리는 과업
23-5|simplify|(동) 단순화하다, 간단히 하다|simplify the process|과정을 단순화하다
23-5|defense|(명) 방어, 수비, 변명, 변호|national defense system|국가 방위 체계
23-5|awareness|(명) 인식, 자각, 알고 있음|raise public awareness|대중의 인식을 높이다
23-5|significant|(형) 중요한, 의미 있는|significant research finding|중요한 연구 결과
23-5|convince|(동) 확신시키다, 설득하다|convince the jury|배심원을 설득하다
23-5|potential|(형) 잠재적인 (명) 잠재력, 가능성|fulfill potential|잠재력을 실현하다
23-5|disposal|(명) 처리, 처분, 폐기, 배치|waste disposal site|폐기물 처리장
23-5|realm|(명) 영역, 범위|realm of possibility|가능성의 영역
23-5|static|(형) 정적인, 변화가 없는 (명) 정전기|static images|정지된 이미지들
23-5|publish|(동) 출판하다, 발표하다, 게재하다|publish a paper|논문을 발표하다
23-5|identity|(명) 정체성, 신원, 동일함|establish identity|정체성을 확립하다
23-5|straightforward|(형) 간단한, 솔직한|straightforward answer|간단한 대답
23-5|appearance|(명) 외양, 겉모습, 나타남, 출현|physical appearance|신체적 외양
23-5|detect|(동) 탐지하다, 찾아내다, 간파하다|detect errors|오류를 찾아내다
23-5|strategy|(명) 전략, 계획|marketing strategy|마케팅 전략
23-5|independent|(형) 독립된, 독자적인|independent study|독립적 연구
23-5|resolution|(명) 결의(안), 해결, 결심|new year resolution|새해 결심
23-5|occasional|(형) 가끔의, 임시의|occasional visits|가끔 하는 방문
23-5|embrace|(동) 포용하다, 포괄하다, 감싸다|embrace diversity|다양성을 포용하다
23-5|aesthetic|(형) 미학적, 미적인 (명) 미학|aesthetic value|미적 가치
23-5|ethnic|(형) 민족의, 인종의|ethnic minority|소수 민족
23-5|reinforce|(동) 강화하다, 충원하다|reinforce learning|학습을 강화하다
23-5|pioneer|(명) 개척자, 선구자 (동) 개척하다|pioneer a field|분야를 개척하다
23-5|lifelong|(형) 일생의, 평생의|lifelong friendship|평생의 우정
23-5|virtual|(형) 가상의, 사실상의|virtual reality|가상 현실
23-5|digest|(동) 소화하다, 이해하다 (명) 요약|digest information|정보를 이해하다
23-5|intrinsic|(형) 본질적인, 고유한, 내재성의|intrinsic motivation|내재적 동기
23-5|vegetation|(명) 식물, 초목|natural vegetation|천연 식생
23-5|impression|(명) 인상, 느낌, 감명, 감동|first impression|첫인상
23-5|distort|(동) 왜곡하다, 비틀다|distort reality|현실을 왜곡하다
23-5|manure|(명) 거름, 비료 (동) 기름을 주다|organic manure|유기농 거름
23-5|rational|(형) 합리적인, 이성적인|rational choice|합리적인 선택
23-5|location|(명) 위치, 장소, 지정 구역|current location|현재 위치
23-5|aggressive|(형) 공격적인|aggressive behavior|공격적인 행동
23-5|politician|(명) 정치인, 정치가|honest politician|정직한 정치인
23-5|goods|(명) 상품, 제품, 재산|consumer goods|소비재
23-5|mineral|(명) 광물(질), 미네랄|essential minerals|필수 미네랄
23-5|insurance|(명) 보험, 보호 수단|health insurance|의료 보험
23-5|interpretation|(명) 해석, 해설, 통역|interpretation of text|텍스트의 해석


23-6|economy|(명) 경제, 경제 활동|stable national economy|안정적인 국가 경제
23-6|integrate|(동) 통합하다|integrate different cultures|서로 다른 문화를 통합하다
23-6|emission|(명) 배출, 배기가스|carbon dioxide emission|이산화탄소 배출
23-6|regular|(형) 정기적인, 보통의|regular physical exercise|정기적인 신체 운동
23-6|bravery|(명) 용기, 용감함|show great bravery|큰 용기를 보여주다
23-6|isolate|(동) 고립시키다, 분리하다|isolate the virus|바이러스를 분리하다
23-6|habitat|(명) 서식지|natural wildlife habitat|천연 야생동물 서식지
23-6|minister|(명) 장관, 성직자|foreign minister|외교부 장관
23-6|entity|(명) 실체, 독립체|separate legal entity|별개의 법적 독립체
23-6|reluctant|(형) 꺼리는, 주저하는|be reluctant to help|도와주기를 꺼리다
23-6|prevent|(동) 막다, 예방하다|prevent disease spread|질병 확산을 막다
23-6|trade-off|(명) 균형, 교환|clear trade-off|명확한 상호 절충
23-6|sedentary|(형) 앉아 있는, 정착한|sedentary lifestyle|앉아서 지내는 생활 방식
23-6|principle|(명) 원리, 원칙|basic scientific principle|기본적인 과학 원리
23-6|appendix|(명) 맹장, 부록|appendix of the book|책의 부록
23-6|organism|(명) 유기체, 생물|living organism|살아있는 유기체
23-6|mindless|(형) 무분별한, 어리석은|mindless violence|무분별한 폭력
23-6|responsibility|(명) 책임(감), 책무|take full responsibility|모든 책임을 지다
23-6|sustain|(동) 지탱하다, 유지하다|sustain economic growth|경제 성장을 유지하다
23-6|direction|(명) 방향, 지도, 지시|opposite direction|반대 방향
23-6|guilty|(형) 유죄의, 가책을 느끼는|feel guilty about|~에 대해 죄책감을 느끼다
23-6|confront|(동) 직면하다, 맞서다|confront the problem|문제에 직면하다
23-6|regional|(형) 지역의, 지방의|regional development plan|지역 개발 계획
23-6|breakthrough|(명) 돌파구, 비약적 발전|scientific breakthrough|과학적 비약적 발전
23-6|intrigue|(동) 호기심을 자극하다|intrigue the reader|독자의 호기심을 자극하다
23-6|psychology|(명) 심리(학)|educational psychology|교육 심리학
23-6|sophisticated|(형) 세련된, 정교한|sophisticated computer system|정교한 컴퓨터 시스템
23-6|glacier|(명) 빙하|melting of glaciers|빙하의 녹음
23-6|calculate|(동) 계산하다, 추정하다|calculate the average|평균을 계산하다
23-6|antibiotic|(명) 항생제|overuse of antibiotics|항생제 남용
23-6|crucial|(형) 대단히 중대한|crucial factor|결정적인 요인
23-6|peak|(명) 산꼭대기, 최고점|peak of the mountain|산의 정상
23-6|categorize|(동) 분류하다|categorize by size|크기별로 분류하다
23-6|religion|(명) 종교|freedom of religion|종교의 자유
23-6|runoff|(명) 넘쳐흐름, 결선 투표|surface water runoff|지표수 유출
23-6|industrial|(형) 산업의, 공업의|industrial revolution|산업 혁명
23-6|radiation|(명) 방사선, 복사|solar radiation|태양 복사
23-6|manufacture|(동) 제조하다 (명) 제품|manufacture electronic goods|전자 제품을 제조하다
23-6|expenditure|(명) 지출, 경비|total annual expenditure|총 연간 지출
23-6|academic|(형) 학업의, 학문의|academic achievement|학업 성취


23-7|purify|(동) 정화하다, 정제하다|purify drinking water|음용수를 정화하다
23-7|planet|(명) 행성|protect our planet|우리의 행성을 보호하다
23-7|jury|(명) 배심원단, 심사위원단|member of the jury|배심원단의 일원
23-7|vendor|(명) 노점 상인, 행상인|street food vendor|길거리 음식 노점상
23-7|convenient|(형) 편리한, 가까운|convenient public transportation|편리한 대중교통
23-7|inactive|(형) 무기력한, 활동하지 않는|physically inactive lifestyle|신체적으로 비활동적인 생활
23-7|associate|(동) 연관시키다 (명) 동료|associate a with b|a와 b를 연관시키다
23-7|impart|(동) 알리다, 전하다, 주다|impart knowledge|지식을 전하다
23-7|reality|(명) 현실, 사실|virtual reality|가상 현실
23-7|primary|(형) 주된, 주요한, 초등의|primary source|주요 근거
23-7|capture|(동) 붙잡다, 포착하다|capture the moment|순간을 포착하다
23-7|resident|(명) 거주자, 주민 (형) 거주하는|local residents|지역 주민들
23-7|rare|(형) 보기 드문, 희귀한|rare species|희귀종
23-7|conflict|(명) 갈등, 충돌 (동) 대립하다|resolve the conflict|갈등을 해결하다
23-7|reference point|(명) 기준점|common reference point|공통의 기준점
23-7|achievement|(명) 성취, 업적|academic achievement|학업 성취
23-7|motivate|(동) 동기를 부여하다|motivate students|학생들에게 동기를 부여하다
23-7|stability|(명) 안정(성)|economic stability|경제적 안정
23-7|equivalent|(형) 맞먹는, 동등한 (명) 대응물|equivalent amount|동등한 양
23-7|immune|(형) 면역의, 면제된|immune system|면역 체계
23-7|manipulate|(동) 조종하다, 다루다|manipulate the data|데이터를 조종하다
23-7|well-being|(명) 행복, 복지|improve well-being|웰빙을 향상시키다
23-7|ecological|(형) 생태계의, 생태학의|ecological balance|생태계의 균형
23-7|register|(동) 등록하다 (명) 등록부|register for classes|수업에 등록하다
23-7|foundation|(명) 토대, 기초, 재단|solid foundation|탄탄한 토대
23-7|restriction|(명) 제한, 규제|legal restriction|법적 제한
23-7|accelerate|(동) 가속하다, 촉진하다|accelerate the process|과정을 가속하다
23-7|repetition|(명) 반복, 되풀이|constant repetition|끊임없는 반복
23-7|controversial|(형) 논란이 많은|controversial issue|논란이 많은 사안
23-7|arithmetic|(명) 산수, 계산|basic arithmetic|기초 산수
23-7|coexist|(동) 공존하다|coexist peacefully|평화롭게 공존하다
23-7|hierarchy|(명) 계급, 서열|social hierarchy|사회적 계급
23-7|spatial|(형) 공간의, 공간적인|spatial awareness|공간 지각력
23-7|genome|(명) 유전체, 게놈|human genome project|인간 게놈 프로젝트
23-7|pension|(명) 연금, 수당|old age pension|노령 연금
23-7|orient|(동) 지향하게 하다|goal oriented|목표 지향적인
23-7|classification|(명) 분류, 구분|scientific classification|과학적 분류
23-7|solitary|(형) 혼자의, 고독한|solitary lifestyle|혼자 사는 생활 방식
23-7|accommodation|(명) 숙박 시설, 합의|tourist accommodation|관광객 숙박 시설
23-7|adore|(동) 흠모하다, 아주 좋아하다|adore children|아이들을 아주 좋아하다

23-8|citizen|(명) 시민, 주민|good citizen|선량한 시민
23-8|sacrifice|(동) 희생하다 (명) 희생|noble sacrifice|고귀한 희생
23-8|crave|(동) 갈망하다, 열망하다|crave attention|관심을 갈망하다
23-8|retailer|(명) 소매업자, 소매업|online retailer|온라인 소매업체
23-8|behind the scenes|막후에서, 무대 뒤에서|work behind the scenes|막후에서 일하다
23-8|starve|(동) 굶주리다, 굶어 죽다|starve for food|굶주림에 허덕이다
23-8|confirmation|(명) 확인, 확증|booking confirmation|예약 확인
23-8|thesis|(명) 논지, 논문|master's thesis|석사 논문
23-8|admission|(명) 입장, 시인|college admission|대학 입학
23-8|precious|(형) 소중한, 귀중한|precious memories|소중한 기억
23-8|content|(명) 함량, 내용 (형) 만족한|high fat content|높은 지방 함량
23-8|classical|(형) 고전의, 고전적인|classical music|고전 음악
23-8|split|(동) 쪼개다, 나누다|split the bill|비용을 분담하다
23-8|reproduction|(명) 번식, 복제|digital reproduction|디지털 복제
23-8|pursue|(동) 추구하다, 추적하다|pursue a career|경력을 추구하다
23-8|administration|(명) 관리, 행정|business administration|경영학
23-8|invisible|(형) 보이지 않는|invisible ink|투명 잉크
23-8|concentration|(명) 집중, 농도|salt concentration|소금 농도
23-8|retire|(동) 은퇴하다, 퇴직하다|retire from work|직장에서 은퇴하다
23-8|adversity|(명) 역경, 불행|overcome adversity|역경을 극복하다
23-8|remarkable|(형) 놀라운, 주목할 만한|remarkable achievement|놀라운 업적
23-8|verbal|(형) 말의, 언어의|verbal communication|언어적 소통
23-8|offspring|(명) 자녀(들), 후손|producing offspring|새끼를 낳기
23-8|ecosystem|(명) 생태계|aquatic ecosystem|수생 생태계
23-8|territory|(명) 영토, 영역|disputed territory|분쟁 영토
23-8|spectacular|(형) 장관을 이루는, 장엄한|spectacular view|장관인 경치
23-8|compassion|(명) 연민, 동정심|feel compassion|연민을 느끼다
23-8|quote|(동) 인용하다, 예시하다|quote a source|출처를 인용하다
23-8|capability|(명) 능력, 역량|physical capability|신체적 능력
23-8|unemployment|(명) 실업(률), 실직|unemployment rate|실업률
23-8|portray|(동) 그리다, 묘사하다|portray a character|인물을 묘사하다
23-8|metabolism|(명) 신진대사, 물질대사|boost metabolism|신진대사를 높이다
23-8|district|(명) 구역, 지역|business district|상업 지구
23-8|immerse|(동) 몰두하게 하다|immerse in study|공부에 몰두하다
23-8|intact|(형) 온전한, 완전한|remain intact|온전하게 남다
23-8|fallacy|(명) 오류, 잘못된 생각|logical fallacy|논리적 오류
23-8|apologize|(동) 사과하다, 사죄하다|apologize for mistakes|실수에 대해 사과하다
23-8|crescent|(명) 초승달|crescent moon|초승달
23-8|concrete|(형) 구체적인 (명) 콘크리트|concrete evidence|구체적인 증거
23-8|flexibility|(명) 유연성, 융통성|psychological flexibility|심리적 유연성


23-9|decision|(명) 결정, 판단|make a decision|결정을 내리다
23-9|release|(동) 풀어 주다 (명) 방출|release energy|에너지를 방출하다
23-9|mobile|(형) 이동성의, 모바일의|mobile phone|휴대전화
23-9|assess|(동) 평가하다, 부과하다|assess the risk|위험을 평가하다
23-9|solar|(형) 태양의, 태양열의|solar energy|태양 에너지
23-9|migration|(명) 이동, 이주|bird migration|새의 이동
23-9|accidental|(형) 우연한, 돌발적인|accidental discovery|우연한 발견
23-9|distribution|(명) 분포, 분배, 유통|wealth distribution|부의 분배
23-9|camouflage|(동) 위장하다 (명) 위장|natural camouflage|천연 위장
23-9|architecture|(명) 건축, 건축학|modern architecture|현대 건축
23-9|depict|(동) 그리다, 묘사하다|depict a scene|장면을 묘사하다
23-9|reciprocity|(명) 상호 의존, 호혜|social reciprocity|사회적 호혜성
23-9|splendid|(형) 화려한, 빛나는|splendid palace|화려한 궁전
23-9|variation|(명) 변화, 차이|seasonal variation|계절적 변화
23-9|investigate|(동) 조사하다, 수사하다|investigate the case|사건을 조사하다
23-9|predator|(명) 포식자, 육식 동물|natural predator|천적
23-9|consumption|(명) 소비|mass consumption|대량 소비
23-9|nurture|(동) 양육하다 (명) 양육|nurture talent|재능을 키우다
23-9|urgent|(형) 긴급한, 절박한|urgent message|긴급한 메시지
23-9|custom|(명) 관습, 습관|local custom|지역 관습
23-9|embed|(동) 끼워 넣다, 심다|embedded system|내장형 시스템
23-9|nutrient|(명) 영양소, 영양분|essential nutrient|필수 영양소
23-9|conclusion|(명) 결론|draw a conclusion|결론을 도출하다
23-9|organic|(형) 유기농의, 유기체의|organic farming|유기농법
23-9|distinction|(명) 차이, 구별|clear distinction|명확한 차이
23-9|routine|(명) 일상 (형) 일상적인|daily routine|일과
23-9|reputation|(명) 명성, 평판|global reputation|세계적 명성
23-9|crack|(명) 균열 (동) 갈라지다|crack in wall|벽의 균열
23-9|friction|(명) 마찰, 알력|reduce friction|마찰을 줄이다
23-9|edible|(형) 먹을 수 있는, 식용의|edible plant|식용 식물
23-9|renovate|(동) 개조하다, 수선하다|renovate the building|건물을 개조하다
23-9|toxin|(명) 독소|environmental toxin|환경 독소
23-9|tactic|(명) 전술, 전략|marketing tactic|마케팅 전술
23-9|alternative|(형) 대체의 (명) 대안|alternative energy|대체 에너지
23-9|ambassador|(명) 대사, 특사|brand ambassador|브랜드 대사
23-9|official|(형) 공식의 (명) 공무원|official announcement|공식 발표
23-9|photosynthesis|(명) 광합성|perform photosynthesis|광합성을 하다
23-9|boredom|(명) 지루함, 권태|relieve boredom|지루함을 달래다
23-9|deliberate|(형) 고의의, 신중한|deliberate choice|신중한 선택
23-9|temptation|(명) 유혹(물)|resist temptation|유혹에 저항하다


23-10|tropical|(형) 열대성의, 열대 지방의|tropical rainforest|열대 우림
23-10|preference|(명) 선호(도), 기호|consumer preference|소비자 선호
23-10|crash|(동) 충돌하다 (명) 충돌|car crash|자동차 사고
23-10|vitality|(명) 생명력, 활력|full of vitality|활력이 넘치는
23-10|random|(형) 무작위의, 임의의|random sampling|무작위 추출
23-10|segregate|(동) 분리하다, 차별하다|segregate students|학생들을 분리하다
23-10|notion|(명) 생각, 개념|common notion|일반적인 생각
23-10|nuclear|(형) 핵의, 원자력의|nuclear power|원자력
23-10|proposal|(명) 제안, 제의|submit a proposal|제안서를 제출하다
23-10|voluntary|(형) 자발적인|voluntary participation|자발적 참여
23-10|eliminate|(동) 제거하다, 배제하다|eliminate waste|폐기물을 제거하다
23-10|species|(명) 종|endangered species|멸종 위기종
23-10|resource|(명) 자원, 재원|natural resources|천연 자원
23-10|critical|(형) 비판적인, 중대한|critical thinking|비판적 사고
23-10|biology|(명) 생물학|marine biology|해양 생물학
23-10|oxygen|(명) 산소|provide oxygen|산소를 공급하다
23-10|occupy|(동) 차지하다, 사용하다|occupy space|공간을 차지하다
23-10|equality|(명) 평등, 동등|gender equality|양성 평등
23-10|vulnerable|(형) 취약한, 상처받기 쉬운|vulnerable groups|취약 계층
23-10|decoration|(명) 장식, 장식품|interior decoration|내부 장식
23-10|theatrical|(형) 극적인, 연극의|theatrical performance|연극 공연
23-10|livestock|(명) 가축|raise livestock|가축을 기르다
23-10|imitate|(동) 모방하다, 흉내 내다|imitate human speech|인간의 말을 흉내내다
23-10|ignorance|(명) 무지, 무식|total ignorance|완전한 무지
23-10|mutual|(형) 상호 간의, 서로의|mutual understanding|상호 이해
23-10|facility|(명) 시설, 설비|public facility|공공 시설
23-10|carbon credit|(명) 탄소 배출권|buy carbon credits|탄소 배출권을 사다
23-10|convey|(동) 전달하다, 나르다|convey messages|메시지를 전달하다
23-10|boundary|(명) 경계, 한계|boundary between nations|국가 간 경계
23-10|molecule|(명) 분자|water molecule|물 분자
23-10|stumble|(동) 비틀거리다, 발이 걸리다|stumble over stone|돌에 걸려 비틀거리다
23-10|measles|(명) 홍역|contract measles|홍역에 걸리다
23-10|clinical|(형) 임상의, 분석적인|clinical trial|임상 시험
23-10|nourish|(동) 영양을 주다, 기르다|nourish the skin|피부에 영양을 주다
23-10|circuit|(명) 회로, 순환|electrical circuit|전기 회로
23-10|bankrupt|(형) 파산한 (동) 파산시키다|go bankrupt|파산하다
23-10|retrospect|(명) 회상, 회고|in retrospect|되돌아보면
23-10|disgust|(명) 혐오 (동) 역겹게 하다|feel deep disgust|깊은 혐오를 느끼다
23-10|luggage|(명) 짐, 수하물|carry luggage|짐을 옮기다
23-10|deforestation|(명) 삼림 벌채, 산림 파괴|prevent deforestation|산림 파괴를 막다


23-11|stimulate|(동) 자극하다, 활발하게 하다|stimulate growth|성장을 자극하다
23-11|ritual|(명) 의식, 제식|daily ritual|매일의 의례
23-11|embassy|(명) 대사관|visit the embassy|대사관을 방문하다
23-11|gradual|(형) 점진적인, 서서히 일어나는|gradual change|점진적인 변화
23-11|internalize|(동) 내면화하다|internalize values|가치를 내면화하다
23-11|complicated|(형) 복잡한|complicated problem|복잡한 문제
23-11|maintenance|(명) 유지, 보수|system maintenance|시스템 유지보수
23-11|operate|(동) 작동하다, 작용하다|operate machinery|기계를 작동하다
23-11|paradox|(명) 역설|environmental paradox|환경적 역설
23-11|parental|(형) 부모의|parental guidance|부모의 지도
23-11|connection|(명) 연관, 연결|Internet connection|인터넷 연결
23-11|equip|(동) 갖추다, 장비하다|equip with tools|도구를 갖추다
23-11|wildlife|(명) 야생 동물|protect wildlife|야생 동물을 보호하다
23-11|worthwhile|(형) 가치 있는, 보람 있는|worthwhile experience|보람 있는 경험
23-11|republic|(명) 공화국|democratic republic|민주 공화국
23-11|abandon|(동) 버리다, 포기하다|abandon a project|프로젝트를 포기하다
23-11|ownership|(명) 소유(권)|private ownership|사적 소유권
23-11|prominent|(형) 두드러진, 저명한|prominent figure|저명한 인물
23-11|sphere|(명) 영역, 범위|public sphere|공공 영역
23-11|notable|(형) 주목할 만한|notable difference|주목할 만한 차이
23-11|regulation|(명) 규제, 규정|environmental regulation|환경 규제
23-11|haul|(동) 운반하다, 세게 끌다|haul heavy loads|무거운 짐을 나르다
23-11|discipline|(명) 규율, 학문|academic discipline|학문 분야
23-11|moderate|(형) 중간의, 적당한|moderate exercise|적당한 운동
23-11|diabetes|(명) 당뇨병|prevent diabetes|당뇨병을 예방하다
23-11|flourish|(동) 번성하다, 성장하다|arts flourish|예술이 번창하다
23-11|feasible|(형) 실현 가능한|feasible plan|실행 가능한 계획
23-11|evacuation|(명) 대피, 피난|emergency evacuation|비상 대피
23-11|duplicate|(동) 복제하다 (명) 사본|duplicate the file|파일을 복사하다
23-11|deterioration|(명) 악화, 저하|economic deterioration|경제적 악화
23-11|deadly|(형) 치명적인|deadly weapon|치명적인 무기
23-11|entail|(동) 수반하다, 필요로 하다|entail risks|위험을 수반하다
23-11|complement|(동) 보완하다 (명) 보완물|complement each other|서로 보완하다
23-11|cause and effect|원인과 결과|law of cause and effect|원인과 결과의 법칙
23-11|comprehend|(동) 이해하다, 파악하다|fully comprehend|완전히 이해하다
23-11|acceptable|(형) 용인되는|socially acceptable|사회적으로 용인되는
23-11|surveillance|(명) 감시, 감독|mass surveillance|대중 감시
23-11|boost|(동) 촉진하다, 밀어 올리다|boost confidence|자신감을 높이다
23-11|focal|(형) 초점의|focal point|초점
23-11|Antarctica|(명) 남극 대륙|expedition to Antarctica|남극 탐험



23-12|distance|(명) 거리, 간격|long distance|먼 거리
23-12|financial|(형) 재정의, 금융의|financial crisis|금융 위기
23-12|demonstrate|(동) 보여 주다, 입증하다|demonstrate skills|기술을 보여 주다
23-12|assistant|(명) 조수 (형) 보조의|personal assistant|개인 비서
23-12|logical|(형) 논리적인, 타당한|logical thinking|논리적 사고
23-12|philosopher|(명) 철학자|Greek philosopher|그리스 철학자
23-12|federal|(형) 연방의|federal government|연방 정부
23-12|devote|(동) 바치다, 헌신하다|devote time|시간을 바치다
23-12|refuge|(명) 피난처, 쉼터|seek refuge|피난처를 구하다
23-12|ego|(명) 자아|fragile ego|연약한 자아
23-12|criminal|(명) 범죄자 (형) 범죄의|criminal record|범죄 기록
23-12|tug of war|줄다리기|tug of war|줄다리기
23-12|debit card|(명) 직불카드|pay by debit card|직불카드로 결제하다
23-12|mature|(형) 성숙한 (동) 성숙하다|mature behavior|성숙한 행동
23-12|dependence|(명) 의존(성), 의지|psychological dependence|심리적 의존
23-12|authentic|(형) 진짜의, 진품의|authentic taste|정통의 맛
23-12|spoil|(동) 망치다, 해치다|spoil the mood|분위기를 망치다
23-12|elaborate|(형) 정교한 (동) 공들여 만들다|elaborate design|정교한 디자인
23-12|enzyme|(명) 효소|digestive enzyme|소화 효소
23-12|breeding|(명) 사육, 번식|selective breeding|선택적 번식
23-12|domain|(명) 영역, 분야|public domain|공공 영역
23-12|currency|(명) 통화, 통용|foreign currency|외환
23-12|socialize|(동) 사귀다, 교제하다|socialize with friends|친구들과 어울리다
23-12|analogy|(명) 유사점, 유추|draw an analogy|유추하다
23-12|dominant|(형) 지배적인, 우세한|dominant culture|지배적인 문화
23-12|strain|(명) 압박, 긴장 (동) 잡아당기다|extreme strain|극도의 긴장
23-12|distress|(명) 고통 (동) 괴롭히다|mental distress|정신적 고통
23-12|staple|(형) 주요한 (명) 주식|staple food|주식
23-12|normative|(형) 규범적인|normative social influence|규범적 사회 영향
23-12|evasion|(명) 회피, 모면|tax evasion|탈세
23-12|coordinate|(동) 조정하다, 조직화하다|coordinate activities|활동을 조정하다
23-12|discrimination|(명) 차별, 구별|racial discrimination|인종 차별
23-12|habitual|(형) 습관적인|habitual behavior|습관적인 행동
23-12|fatigue|(명) 피로, 피곤|muscle fatigue|근육 피로
23-12|elusive|(형) 이해하기 어려운|elusive concept|파악하기 힘든 개념
23-12|coincidence|(명) 우연의 일치|pure coincidence|순수한 우연
23-12|captivate|(동) 매혹하다|captivate audience|청중을 매혹하다
23-12|casual|(형) 무심한, 평상시의|casual clothes|평상복
23-12|aviation|(명) 항공(술)|civil aviation|민간 항공
23-12|democratic|(형) 민주적인|democratic society|민주주의 사회

23-13|interaction|(명) 상호 작용[영향]|social interaction|사회적 상호작용
23-13|eco-friendly|(형) 환경 친화적인|eco-friendly products|친환경 제품
23-13|parliament|(명) 의회, 국회|member of parliament|국회 의원
23-13|private|(형) 사적인, 비공식의, 사유의|private information|개인 정보
23-13|charity|(명) 자선 (단체)|local charity organization|지역 자선 단체
23-13|protein|(명) 단백질, 단백질의|high protein diet|고단백 식단
23-13|neutral|(형) 중립의, 중립적인|neutral position|중립적인 입장
23-13|endanger|(동) 위험에 빠뜨리다|endangered species|멸종 위기종
23-13|spacecraft|(명) 우주선|manned spacecraft|유인 우주선
23-13|naïve|(형) 순진한, 경험이 없는|naive assumption|순진한 가정
23-13|carve|(동) 조각하다, 새기다|carve a statue|동상을 조각하다
23-13|election|(명) 선거, 선정|presidential election|대통령 선거
23-13|liberal|(형) 자유주의의, 진보적인|liberal arts education|교양 교육
23-13|substance|(명) 물질, 본질|toxic substance|독성 물질
23-13|brutal|(형) 잔혹한, 잔인한|brutal honesty|냉혹한 정직함
23-13|ethics|(명) 윤리학, 도덕|work ethics|직업 윤리
23-13|strip|(동) 벗기다, 빼앗다|strip off clothes|옷을 벗다
23-13|landfill|(명) 쓰레기 매립지|waste landfill|쓰레기 매립지
23-13|integral|(형) 필수적인, 내장된|integral part|필수적인 부분
23-13|duration|(명) 지속 기간|for the duration|지속 기간 동안
23-13|discard|(동) 버리다, 폐기하다|discard old clothes|헌 옷을 버리다
23-13|narrative|(명) 이야기, 서술|historical narrative|역사적 서사
23-13|wearable|(형) 착용형의|wearable technology|웨어러블 기술
23-13|parasite|(명) 기생충, 기생 동물|social parasite|사회적 기생충
23-13|terrify|(동) 무섭게 하다|be terrified of|~을 무서워하다
23-13|fungus|(명) 균류, 곰팡이류|edible fungus|식용 버섯
23-13|available|(형) 이용할 수 있는|readily available|쉽게 이용 가능한
23-13|initiate|(동) 시작하다, 개시하다|initiate a conversation|대화를 시작하다
23-13|discourse|(명) 담론, 담화|political discourse|정치적 담론
23-13|constraint|(명) 제약, 제한|financial constraint|재정적 제약
23-13|induce|(동) 유도하다, 유발하다|induce sleep|잠을 유도하다
23-13|carbohydrate|(명) 탄수화물|low carbohydrate diet|저탄수화물 식단
23-13|racism|(명) 인종 차별주의|systemic racism|구조적 인종주의
23-13|endeavor|(동) 노력하다 (명) 시도|human endeavor|인간의 노력
23-13|bribery|(명) 뇌물 수수|political bribery|정치적 뇌물 수수
23-13|cite|(동) 인용하다, 언급하다|cite a source|출처를 인용하다
23-13|adolescent|(명) 청소년 (형) 청소년기의|adolescent behavior|청소년기 행동
23-13|sovereign|(형) 주권이 있는 (명) 군주|sovereign nation|주권 국가
23-13|stubborn|(형) 완고한, 고집 센|stubborn resistance|완강한 저항
23-13|contestant|(명) 참가자, 경기자|contest contestant|대회 참가자





23-14|organization|(명) 조직(체), 단체|international organization|국제 기구
23-14|inevitable|(형) 불가피한, 필연적인|inevitable result|필연적인 결과
23-14|disguise|(동) 변장하다, 숨기다|disguise the truth|진실을 숨기다
23-14|unmanned|(형) 무인의, 승무원이 없는|unmanned aircraft|무인 항공기
23-14|minority|(명) 소수, 소수 집단|ethnic minority|소수 민족
23-14|machinery|(명) 기계(류), 조직|industrial machinery|산업 기계
23-14|intense|(형) 극심한, 강렬한|intense competition|치열한 경쟁
23-14|ancestor|(명) 조상, 선조|common ancestor|공통 조상
23-14|devise|(동) 창안하다, 고안하다|devise a plan|계획을 짜다
23-14|agent|(명) 대리인, 중개인|real estate agent|부동산 중개인
23-14|enroll|(동) 등록하다, 기재하다|enroll in school|학교에 등록하다
23-14|arrangement|(명) 배열, 준비|seating arrangement|좌석 배치
23-14|temporal|(형) 시간의, 현세의|temporal sequence|시간적 순서
23-14|extent|(명) 정도, 범위|to some extent|어느 정도까지
23-14|thrive|(동) 번창하다, 잘 자라다|thrive in business|사업에서 번창하다
23-14|famine|(명) 기근, 부족|severe food famine|심각한 식량 기근
23-14|offend|(동) 기분 상하게 하다|offend the audience|청중의 기분을 상하게 하다
23-14|consensus|(명) 일치, 합의|reach a consensus|합의에 도달하다
23-14|lateral|(형) 옆의, 측면의|lateral thinking|수평적 사고
23-14|localized|(형) 현지의, 국지적인|localized rain shower|국지적 소나기
23-14|asset|(명) 자산, 재산|valuable asset|가치 있는 자산
23-14|suspend|(동) 매달다, 유예하다|suspend the license|면허를 정지하다
23-14|primate|(명) 영장류|study of primates|영장류 연구
23-14|empirical|(형) 경험적인, 실증적인|empirical evidence|실증적 증거
23-14|license|(명) 면허, 허가|driver's license|운전 면허증
23-14|assault|(명) 공격, 폭행|sexual assault|성폭행
23-14|justification|(명) 정당화, 변명|without justification|정당한 이유 없이
23-14|breathtaking|(형) 숨이 막히는|breathtaking view|숨 막히는 절경
23-14|diplomacy|(명) 외교(술)|international diplomacy|국제 외교
23-14|revise|(동) 수정하다, 개정하다|revise the draft|초안을 수정하다
23-14|appoint|(동) 임명하다, 정하다|appoint a leader|리더를 임명하다
23-14|cathedral|(명) 대성당|gothic cathedral|고딕 대성당
23-14|invoke|(동) 발동하다, 불러일으키다|invoke the law|법을 발동하다
23-14|physiological|(형) 생리학의, 생리적인|physiological response|생리적 반응
23-14|anniversary|(명) 기념일|wedding anniversary|결혼 기념일
23-14|extraterrestrial|(형) 외계의 (명) 외계인|extraterrestrial life|외계 생명체
23-14|diagnosis|(명) 진단, 진찰|medical diagnosis|의학적 진단
23-14|imprint|(동) 각인시키다 (명) 각인|leave an imprint|자국을 남기다
23-14|allocate|(동) 배당하다, 할당하다|allocate resources|자원을 할당하다
23-14|notice|(명) 공지, 알림 (동) 깨닫다|short notice|갑작스러운 통보



23-15|origin|(명) 기원, 근원|country of origin|원산지
23-15|neglect|(동) 방치하다, 무시하다|neglect duties|의무를 소홀히 하다
23-15|perpetual|(형) 끊임없이 계속되는|perpetual motion|무한 동력
23-15|pollution|(명) 공해, 오염|air pollution|대기 오염
23-15|ruin|(동) 망치다 (명) 폐허|ruin the surprise|놀라움을 망치다
23-15|limitation|(명) 국한, 한계|physical limitation|신체적 한계
23-15|prompt|(동) 촉발하다 (형) 즉각적인|prompt response|즉각적인 응답
23-15|particle|(명) 입자, 미립자|dust particle|먼지 입자
23-15|renewable|(형) 재생 가능한|renewable energy|재생 가능 에너지
23-15|qualify|(동) 자격을 얻다[주다]|qualify for the final|결승 진출 자격을 얻다
23-15|immigration|(명) 이민, 이주|immigration policy|이민 정책
23-15|circulate|(동) 순환하다, 유포되다|circulate blood|혈액을 순환시키다
23-15|division|(명) 분할, 부분|division of labor|분업
23-15|vertical|(형) 수직의, 세로의|vertical line|수직선
23-15|privilege|(명) 특권, 특혜|special privilege|특별한 특권
23-15|accumulate|(동) 모으다, 축적하다|accumulate wealth|부를 축적하다
23-15|attendant|(명) 종업원, 안내원|flight attendant|항공 승무원
23-15|trustworthy|(형) 신뢰할 수 있는|trustworthy source|신뢰할 만한 출처
23-15|alert|(형) 경계하는 (명) 경보|on high alert|고도의 경계 상태
23-15|regard|(동) 여기다 (명) 고려|with regard to|~에 관하여
23-15|mainstream|(명) 주류, 대세|mainstream media|주류 매체
23-15|monotonous|(형) 단조로운, 지루한|monotonous work|단조로운 일
23-15|illusion|(명) 착각, 환상|optical illusion|착시 현상
23-15|celebrate|(동) 기념하다, 축하하다|celebrate the victory|승리를 축하하다
23-15|border|(명) 국경, 경계|cross the border|국경을 넘다
23-15|finite|(형) 한정된, 유한한|finite resources|유한한 자원
23-15|corruption|(명) 부패, 타락|political corruption|정치적 부패
23-15|enclose|(동) 둘러싸다, 동봉하다|enclose a photo|사진을 동봉하다
23-15|righteous|(형) 도덕적으로 옳은|righteous anger|의로운 분노
23-15|subsistence|(명) 생존, 생계|subsistence level|최저 생계 수준
23-15|negotiation|(명) 협상, 교섭|peace negotiation|평화 협상
23-15|cautious|(형) 조심스러운, 신중한|cautious approach|신중한 접근
23-15|whip|(동) 채찍질하다 (명) 채찍|whip the cream|크림을 휘젓다
23-15|behavior|(명) 행동, 태도|human behavior|인간의 행동
23-15|departure|(명) 출발, 떠남|time of departure|출발 시간
23-15|greenhouse gas|(명) 온실가스|greenhouse gas emission|온실가스 배출
23-15|chronic|(형) 만성적인|chronic disease|만성 질환
23-15|Celsius|(형) 섭씨의|degrees Celsius|섭씨 온도
23-15|specify|(동) 구체화하다, 명시하다|specify the conditions|조건을 명시하다
23-15|approval|(명) 승인, 허가|official approval|공식 승인




23-16|typical|(형) 전형적인, 일반적인|typical example|전형적인 예
23-16|circumstance|(명) 환경, 상황|under any circumstances|어떤 상황에서도
23-16|ethical|(형) 윤리적인, 도덕적인|ethical standards|윤리적 기준
23-16|contemporary|(형) 현대의, 동시대의|contemporary art|현대 미술
23-16|candidate|(명) 후보, 지원자|presidential candidate|대통령 후보
23-16|conventional|(형) 전형적인, 전통적인|conventional wisdom|일반적인 통념
23-16|niche|(명) 적소, 틈새|niche market|틈새 시장
23-16|govern|(동) 통치하다, 지배하다|govern a country|국가를 통치하다
23-16|impulse|(명) 충동, 자극|buy on impulse|충동구매하다
23-16|normal|(형) 보통의, 정상의|normal distribution|정규 분포
23-16|despair|(명) 절망 (동) 절망하다|deep despair|깊은 절망
23-16|modest|(형) 겸손한, 보통의|modest income|적당한 수입
23-16|diminish|(동) 줄어들다, 약화시키다|diminish the value|가치를 떨어뜨리다
23-16|refrigeration|(명) 냉장 (보관)|refrigeration system|냉장 시스템
23-16|hands-on|(형) 직접 해 보는|hands-on experience|직접적인 경험
23-16|inquiry|(명) 질문, 조사, 탐구|scientific inquiry|과학적 탐구
23-16|contaminate|(동) 오염시키다|contaminate the water|물을 오염시키다
23-16|function|(명) 기능, 작용 (동) 기능하다|essential function|필수적인 기능
23-16|monetary|(형) 통화의, 재정적인|monetary policy|통화 정책
23-16|sue|(동) 고소하다, 소송을 제기하다|sue for damages|손해 배상 청구 소송을 하다
23-16|peril|(명) 위험, 위난|at your peril|위험을 감수하고
23-16|compound|(명) 복합체, 화합물|chemical compound|화학 화합물
23-16|multiply|(동) 곱하다, 증가시키다|multiply the effect|효과를 배가시키다
23-16|adequate|(형) 충분한, 적절한|adequate supply|충분한 공급
23-16|celebrity|(명) 유명 인사, 명성|local celebrity|지역 유명 인사
23-16|erode|(동) 침식하다, 약화시키다|erode the soil|토양을 침식하다
23-16|magnetic|(형) 자석의, 매력이 있는|magnetic field|자기장
23-16|plausible|(형) 타당한 것 같은|plausible explanation|그럴듯한 설명
23-16|disrupt|(동) 방해하다, 지장을 주다|disrupt the class|수업을 방해하다
23-16|legislation|(명) 법률 제정, 법률|new legislation|새로운 법안
23-16|correspond|(동) 일치하다, 부합하다|correspond with reality|현실과 일치하다
23-16|kinship|(명) 친족, 연대감|kinship system|친족 체계
23-16|botanical|(형) 식물의, 식물학의|botanical garden|식물원
23-16|compromise|(명) 타협, 절충 (동) 타협하다|reach a compromise|타협에 이르다
23-16|deceit|(명) 속임수, 기만|practice deceit|기만행위를 하다
23-16|informal|(형) 비공식적인, 일상적인|informal meeting|비공식적인 회의
23-16|assert|(동) 주장하다, 확고히 하다|assert the right|권리를 주장하다
23-16|scheme|(명) 계획, 책략|pension scheme|연금 계획
23-16|aspire|(동) 추구하다, 열망하다|aspire to greatness|위대해지기를 갈망하다
23-16|conversion|(명) 전환, 개조|energy conversion|에너지 전환

23-17|fundamental|(형) 근본적인, 핵심적인|fundamental right|근본적인 권리
23-17|civilization|(명) 문명, 문명사회|ancient civilization|고대 문명
23-17|render|(동) 만들다, 주다|render help|도움을 주다
23-17|disorder|(명) 무질서, 장애|eating disorder|섭식 장애
23-17|harsh|(형) 가혹한, 혹독한|harsh reality|혹독한 현실
23-17|sufficient|(형) 충분한|sufficient evidence|충분한 증거
23-17|stem|(명) 줄기|plant stem|식물 줄기
23-17|approximate|(형) 대략적인|approximate value|근사값
23-17|sip|(동) 조금씩 마시다|sip coffee|커피를 한 모금 마시다
23-17|sensor|(명) 센서, 감지기|motion sensor|동작 감지 센서
23-17|tension|(명) 긴장 상태|social tension|사회적 긴장
23-17|crisis|(명) 위기, 고비|economic crisis|경제 위기
23-17|punish|(동) 처벌하다, 벌주다|punish the crime|범죄를 처벌하다
23-17|intimacy|(명) 친밀함|emotional intimacy|정서적 친밀감
23-17|massive|(형) 막대한, 거대한|massive flood|대홍수
23-17|modify|(동) 수정하다, 변경하다|modify the behavior|행동을 수정하다
23-17|disadvantage|(명) 불리한 점, 약점|competitive disadvantage|경쟁적 불리함
23-17|bulletin|(명) 고시, 공고, 속보|news bulletin|뉴스 속보
23-17|exert|(동) 행사하다, 노력하다|exert influence|영향력을 행사하다
23-17|validity|(명) 유효함, 타당성|question the validity|타당성을 의심하다
23-17|unbiased|(형) 선입견이 없는|unbiased opinion|편견 없는 의견
23-17|confess|(동) 고백하다, 자백하다|confess the crime|범죄를 자백하다
23-17|suspicion|(명) 혐의, 의혹|under suspicion|의심을 받는
23-17|legitimate|(형) 합법적인, 타당한|legitimate reason|정당한 이유
23-17|regime|(명) 정권, 체제|military regime|군사 정권
23-17|advent|(명) 출현, 도래|advent of technology|기술의 도래
23-17|monument|(명) 기념비, 유물|historic monument|역사적 기념물
23-17|conservative|(형) 보수적인|conservative party|보수당
23-17|penetrate|(동) 뚫고 들어가다|penetrate the market|시장에 침투하다
23-17|horizon|(명) 수평선, 지평선|broaden the horizon|시야를 넓히다
23-17|heredity|(명) 유전, 세습|laws of heredity|유전 법칙
23-17|esteem|(명) 존경, 존중|self esteem|자존감
23-17|committee|(명) 위원회|steering committee|운영 위원회
23-17|erupt|(동) 분출하다, 폭발시키다|volcano erupt|화산이 분출하다
23-17|verse|(명) 운문, 절|blank verse|무운시
23-17|applaud|(동) 박수를 치다|applaud the performance|공연에 박수를 보내다
23-17|leftover|(명) 남은 음식|leftover food|남은 음식
23-17|keystone|(명) 핵심, 쐐기돌|keystone species|핵심종
23-17|frontier|(명) 국경, 경계, 한계|new frontier|새로운 영역
23-17|vain|(형) 헛된, 자만심이 강한|in vain|헛되이

23-18|account for|(동) 차지하다, 설명하다|account for 30%|30퍼센트를 차지하다
23-18|be dedicated to|(동) ~에 전념하다|be dedicated to teaching|가르치는 데 헌신하다
23-18|go over|(동) 검토하다, 조사하다|go over notes|필기를 검토하다
23-18|at one's disposal|(부) 마음대로 이용할 수 있게|information at one's disposal|마음대로 이용 가능한 정보
23-18|scale up|(동) 확대하다, 늘리다|scale up production|생산을 확대하다
23-18|hold on|(동) 계속 잡고 있다, 기다리다|hold on tight|꽉 잡다
23-18|make ends meet|(동) 수입과 지출을 맞추다|struggle to make ends meet|겨우 먹고살려고 애쓰다
23-18|let off|(동) 내뿜다, 발사하다|let off steam|화(또는 증기)를 내뿜다
23-18|make sense|(동) 말이 되다, 타당하다|it makes sense|말이 된다
23-18|sign up for|(동) 등록하다, 가입하다|sign up for classes|수업을 신청하다
23-18|do without|(동) ~없이 지내다|do without coffee|커피 없이 지내다
23-18|come into contact|(동) ~와 접촉하다|come into contact with|~와 접촉하다
23-18|straighten out|(동) 바로잡다, 해결하다|straighten out misunderstandings|오해를 바로잡다
23-18|put off|(동) 연기하다|put off the meeting|회의를 미루다
23-18|be in charge of|(동) ~을 담당하다|be in charge of sales|판매를 담당하다
23-18|reflect on|(동) 되돌아보다, 반성하다|reflect on past experiences|과거의 경험을 되돌아보다
23-18|enroll in|(동) ~에 등록하다|enroll in a course|강좌에 등록하다
23-18|rob A of B|(동) A에게서 B를 앗아가다|rob him of chance|그에게서 기회를 앗아가다
23-18|be obsessed with|(동) ~에 집착하다|be obsessed with success|성공에 집착하다
23-18|correspond to|(동) ~와 일치하다|correspond to reality|현실에 부합하다
23-18|compensate for|(동) ~을 보상하다|compensate for the loss|손실을 보상하다
23-18|give in (to)|(동) 굴복하다, 항복하다|give in to pressure|압박에 굴복하다
23-18|lag behind|(동) ~보다 뒤처지다|lag behind competitors|경쟁자들에게 뒤처지다
23-18|keep in mind|(동) 기억하다, 염두에 두다|keep that in mind|그것을 명심하다
23-18|stand for|(동) 상징하다, 대표하다|stand for freedom|자유를 상징하다
23-18|set up|(동) 설립하다, 준비하다|set up a business|사업을 시작하다
23-18|in a vacuum|(부) 외부와 단절된 상태에서|thinking in a vacuum|고립된 상태에서의 사고
23-18|feel free to|(동) 마음 놓고 ~하다|feel free to ask|부담 없이 물어보다
23-18|take advantage of|(동) ~을 이용하다|take advantage of opportunities|기회를 이용하다
23-18|consist of|(동) ~로 구성되다|consist of three parts|세 부분으로 구성되다
23-18|take over|(동) 이어받다, 인수하다|take over the company|회사를 인수하다
23-18|squeeze in|(동) 짬을 내다|squeeze in an appointment|약속 시간을 억지로 내다
23-18|work out|(동) 운동하다, 해결하다|work out the solution|해결책을 찾아내다
23-18|sum up|(동) 요약하다|sum up the points|핵심을 요약하다
23-18|set aside|(동) 곁에 두다, 확보하다|set aside some time|시간을 내어두다
23-18|keep up with|(동) 뒤지지 않다, 따라가다|keep up with technology|기술을 따라잡다
23-18|get over|(동) 극복하다, 회복되다|get over the cold|감기에서 회복되다
23-18|answer for|(동) ~에 대해 책임지다|answer for the consequences|결과에 책임을 지다
23-18|bump into|(동) ~와 우연히 마주치다|bump into an old friend|옛 친구와 우연히 마주치다
23-18|read between the lines|(동) 속뜻을 읽다|read between the lines|행간을 읽다

23-19|turn down|(동) 거절하다, 낮추다|turn down the offer|제안을 거절하다
23-19|yield to|(동) 양보하다, 굴복하다|yield to pressure|압박에 굴복하다
23-19|under the cover of darkness|(부) 어둠을 틈타|escape under darkness|어둠을 틈타 탈출하다
23-19|ward off|(동) 물리치다, 피하다|ward off insects|벌레를 쫓아버리다
23-19|set forth|(동) 출발하다, 발표하다|set forth an opinion|의견을 발표하다
23-19|take away ~ from|(동) ~에게서 ~을 빼앗다|take away rights|권리를 빼앗다
23-19|carry out|(동) 수행하다, 완수하다|carry out research|연구를 수행하다
23-19|adhere to|(동) 고수하다, 지키다|adhere to rules|규칙을 고수하다
23-19|rule out|(동) 제외하다, 배제하다|rule out possibility|가능성을 배제하다
23-19|shy away from|(동) ~을 피하다|shy away from conflict|갈등을 피하다
23-19|hold true|(동) 유효하다, 적용되다|hold true for all|모두에게 적용되다
23-19|figure out|(동) 이해하다, 계산하다|figure out the answer|정답을 찾아내다
23-19|come up with|(동) 만들어내다, 제안하다|come up with idea|아이디어를 제안하다
23-19|level off|(동) 안정되다|prices level off|물가가 안정되다
23-19|result in|(동) 야기하다, 결과가 되다|result in failure|실패를 초래하다
23-19|make the most of|(동) 최대한 활용하다|make the most of time|시간을 최대한 활용하다
23-19|rush out of|(동) 달려 나오다|rush out of room|방에서 달려 나오다
23-19|cut down on|(동) ~을 줄이다|cut down on sugar|설탕을 줄이다
23-19|give away to|(동) ~에게 항복하다|give away to despair|절망에 굴복하다
23-19|take ~ into account|(동) ~을 고려하다|take feelings into account|감정을 고려하다
23-19|contribute to|(동) 기여하다, 기부하다|contribute to society|사회에 기여하다
23-19|give rise to|(동) 유발하다|give rise to problems|문제를 일으키다
23-19|dwell on|(동) 곰곰이 생각하다|dwell on the past|과거를 곰곰이 생각하다
23-19|refrain from|(동) 삼가다|refrain from smoking|흡연을 삼가다
23-19|show off|(동) 뽐내다, 자랑하다|show off skills|기술을 뽐내다
23-19|stand out|(동) 두각을 나타내다|stand out from crowd|군계일학이다
23-19|be engaged in|(동) ~에 몰두하다|be engaged in research|연구에 종사하다
23-19|get rid of|(동) 제거하다|get rid of waste|쓰레기를 제거하다
23-19|make for|(동) 도움이 되다, 향하다|make for better future|더 나은 미래에 기여하다
23-19|in nature|(부) 사실상, 현실적으로|identical in nature|본질적으로 동일한
23-19|let go of|(동) 놓다|let go of anger|노여움을 풀다
23-19|keep in touch|(동) 연락하다|keep in touch with|~와 연락하며 지내다
23-19|dispose of|(동) 처리하다|dispose of chemicals|화학 물질을 처리하다
23-19|put out|(동) (불을) 끄다, 생산하다|put out the fire|불을 끄다
23-19|go through|(동) 겪다, 조사하다|go through hardship|어려움을 겪다
23-19|hit the mark|(동) 적중하다|hit the mark exactly|정확히 적중하다
23-19|attribute to|(동) ~의 덕분으로 돌리다|attribute success to hard work|성공을 노력 덕으로 돌리다
23-19|specialize in|(동) 전문으로 하다|specialize in biology|생물학을 전공하다
23-19|blow up|(동) 폭파하다, 화내다|blow up a balloon|풍선을 불다
23-19|break down|(동) 고장나다, 분해하다|break down food|음식을 분해하다
23-20|slip into|(동) 들어가다|slip into the room|방으로 살짝 들어가다


23-20|lie in|(동) ~에 있다|beauty lies in simplicity|아름다움은 단순함에 있다
23-20|be obliged to|(동) 하는 수 없이 ~하다|be obliged to follow|따를 수밖에 없다
23-20|take charge of|(동) ~을 떠맡다|take charge of project|프로젝트를 맡다
23-20|make up|(동) 구성하다, 지어내다|make up the team|팀을 구성하다
23-20|engage with|(동) 다루다, 관계 맺다|engage with the public|대중과 관계를 맺다
23-20|add up to|(동) 결국 ~이 되다|add up to total|합계가 ~이 되다
23-20|in a nutshell|(부) 아주 간결하게|explain in a nutshell|간단히 설명하다
23-20|show up|(동) 나타나다|show up late|늦게 나타나다
23-20|take ~ for granted|(동) 당연하게 여기다|take life for granted|삶을 당연하게 여기다
23-20|lay down|(동) 내려놓다, 정하다|lay down the law|법을 정하다
23-20|settle in|(동) 적응하다|settle in new house|새 집에 적응하다
23-20|keep track of|(동) 기록하다|keep track of expenses|지출을 기록하다
23-20|have to do with|(동) ~와 관계가 있다|have to do with health|건강과 관계가 있다
23-20|do away with|(동) 폐기하다|do away with old rules|옛 규칙을 없애다
23-20|wipe out|(동) 말살시키다|wipe out the population|인구를 전멸시키다
23-20|be covered with|(동) ~로 덮이다|be covered with snow|눈으로 덮이다
23-20|run for|(동) 출마하다|run for president|대통령에 출마하다
23-20|get in the way of|(동) ~에 방해가 되다|get in the way|방해가 되다
23-20|make out|(동) 이해하다, 작성하다|make out the meaning|의미를 이해하다
23-20|refer to|(동) 언급하다, 참조하다|refer to the notes|필기를 참조하다
23-20|cope with|(동) 대처하다, 다루다|cope with stress|스트레스에 대처하다
23-20|rush through|(동) 서둘러 처리하다|rush through the task|업무를 서둘러 끝내다
23-20|amount to|(동) ~에 이르다|amount to a fortune|거액에 달하다
23-20|identify with|(동) 동질감을 갖다|identify with the hero|영웅과 동질감을 느끼다
23-20|bring ~ to life|(동) 활기를 불어넣다|bring the story to life|이야기에 활기를 주다
23-20|turn to|(동) 의지하다|turn to parents|부모님께 의지하다
23-20|cut off|(동) 잘라내다, 차단하다|cut off the power|전기를 차단하다
23-20|stem from|(동) 비롯되다|stem from fear|두려움에서 비롯되다
23-20|rip away|(동) 떼내다|rip away the cover|덮개를 떼어내다
23-20|make a point of|(동) 꼭 하기로 하다|make a point of exercise|꼭 운동을 하다
23-20|go off|(동) 울리다, 폭발하다|alarm goes off|알람이 울리다
23-20|concentrate on|(동) 집중하다|concentrate on study|공부에 집중하다
23-20|set out|(동) 출발하다, 시작하다|set out on journey|여행을 시작하다
23-20|get through|(동) 통과하다, 끝내다|get through the exam|시험에 합격하다
23-20|bring about|(동) 야기하다|bring about change|변화를 일으키다
23-20|in retrospect|(부) 돌이켜 보면|wise in retrospect|돌이켜보면 현명한
23-20|hit upon|(동) 생각해내다|hit upon a solution|해결책을 생각해내다
23-20|catch up with|(동) 따라잡다|catch up with trends|유행을 따라잡다
23-20|at odds with|(부) ~와 불화하여|at odds with reality|현실과 상충하는


23-21|derive|(동) 끌어내다, 유래하다|derive from nature|자연에서 유래하다
23-21|depression|(명) 우울증, 불경기|economic depression|경제 불황
23-21|definite|(형) 분명한, 확실한|definite answer|확실한 대답
23-21|declare|(동) 선언하다, 신고하다|declare independence|독립을 선언하다
23-21|desolate|(형) 황량한, 외로운|desolate landscape|황량한 풍경
23-21|deviant|(형) 일탈한 (명) 일탈자|deviant behavior|일탈 행동
23-21|destructive|(형) 파괴적인|destructive power|파괴적인 힘
23-21|descendant|(명) 후손, 자손|direct descendant|직계 후손
23-21|deprive|(동) 빼앗다, 박탈하다|deprive of sleep|잠을 빼앗다
23-21|deposit|(동) 두다, 예금하다|bank deposit|은행 예금
23-21|deficit|(명) 부족액, 적자|budget deficit|예산 적자
23-21|occur|(동) 일어나다, 발생하다|occur naturally|자연적으로 발생하다
23-21|current|(형) 현재의 (명) 흐름|current events|시사 문제
23-21|curriculum|(명) 교육 과정|school curriculum|학교 교육 과정
23-21|microbe|(명) 미생물|harmful microbe|해로운 미생물
23-21|microscope|(명) 현미경|under the microscope|현미경 아래에서
23-21|microclimate|(명) 미기후|local microclimate|지역 미기후
23-21|hesitate|(동) 주저하다|hesitate to ask|묻기를 주저하다
23-21|inherent|(형) 내재하는, 본질적인|inherent risk|내재된 위험
23-21|coherent|(형) 일관성 있는|coherent argument|일관성 있는 주장
23-21|recognize|(동) 인식하다|recognize the faces|얼굴을 알아보다
23-21|reflect|(동) 반사하다, 반영하다|reflect the light|빛을 반사하다
23-21|rebuild|(동) 재건하다|rebuild the city|도시를 재건하다
23-21|reclaim|(동) 되찾다, 개간하다|reclaim the land|땅을 개간하다
23-21|resign|(동) 사임하다|resign from office|직위에서 물러나다
23-21|resilience|(명) 회복력|psychological resilience|심리적 회복력
23-21|recharge|(동) 재충전하다|recharge the battery|배터리를 충전하다
23-21|recollection|(명) 기억, 회상|clear recollection|명확한 기억
23-21|recipient|(명) 받는 사람|award recipient|수상자
23-21|permanent|(형) 영구적인|permanent damage|영구적인 손상
23-21|pervasive|(형) 만연한|pervasive influence|만연한 영향
23-21|perplex|(동) 당혹하게 하다|perplex the mind|정신을 혼란스럽게 하다
23-21|symptom|(명) 증상, 조짐|early symptoms|초기 증상
23-21|symbolism|(명) 상징성|religious symbolism|종교적 상징성
23-21|synthetic|(형) 합성의|synthetic fiber|합성 섬유
23-21|syndrome|(명) 증후군|metabolic syndrome|대사 증후군
23-21|actual|(형) 실제의|actual size|실제 크기
23-21|transaction|(명) 거래|financial transaction|금융 거래
23-21|activate|(동) 활성화하다|activate the system|시스템을 가동하다
23-21|colonize|(동) 식민지로 만들다|colonize Mars|화성을 식민지화하다


23-22|cultivate|(동) 경작하다, 기르다|cultivate the soil|땅을 경작하다
23-22|agriculture|(명) 농업, 농사|modern agriculture|현대 농업
23-22|submit|(동) 제출하다, 복종하다|submit the paper|논문을 제출하다
23-22|substantial|(형) 상당한, 견고한|substantial amount|상당한 양
23-22|substitute|(명) 대신하는 것 (동) 대신하다|sugar substitute|설탕 대용물
23-22|suppress|(동) 억누르다, 진압하다|suppress emotions|감정을 억누르다
23-22|suburb|(명) 교외, 근교|live in suburb|교외에 살다
23-22|subconscious|(형) 잠재의식의|subconscious mind|잠재의식
23-22|subtle|(형) 미묘한, 교묘한|subtle difference|미묘한 차이
23-22|subordinate|(형) 하위의 (명) 부하|subordinate role|하위 역할
23-22|underlie|(동) 기저를 이루다|underlie the theory|이론의 기초가 되다
23-22|undergo|(동) 겪다|undergo surgery|수술을 받다
23-22|undermine|(동) 손상시키다|undermine confidence|자신감을 손상시키다
23-22|fragile|(형) 부서지기 쉬운|fragile glass|깨지기 쉬운 유리
23-22|fragment|(명) 조각, 파편|bone fragment|뼈 조각
23-22|fracture|(명) 골절 (동) 부러뜨리다|stress fracture|피로 골절
23-22|transform|(동) 변형시키다|transform the energy|에너지를 변형하다
23-22|transportation|(명) 운송, 교통 수단|public transportation|대중교통
23-22|transplant|(동) 이식하다|heart transplant|심장 이식
23-22|transmit|(동) 전달하다, 전염시키다|transmit signals|신호를 전달하다
23-22|transparent|(형) 투명한|transparent window|투명한 창문
23-22|transcribe|(동) 베껴 쓰다|transcribe a speech|연설을 받아쓰다
23-22|transit|(명) 운송, 통과|mass transit|대중교통
23-22|astronaut|(명) 우주 비행사|brave astronaut|용감한 우주 비행사
23-22|disastrous|(형) 처참한, 재앙의|disastrous consequences|재앙적인 결과
23-22|astrology|(명) 점성술|believe in astrology|점성술을 믿다
23-22|asteroid|(명) 소행성|asteroid impact|소행성 충돌
23-22|overestimate|(동) 과대평가하다|overestimate the cost|비용을 과대평가하다
23-22|overflow|(동) 넘치다 (명) 범람|overflow with joy|기쁨으로 넘치다
23-22|overstate|(동) 과장하다|overstate the facts|사실을 과장하다
23-22|overlap|(동) 겹치다 (명) 중복|overlap in time|시간이 겹치다


23-23|common|(형) 흔한, 공통의|common interest|공통의 관심사
23-23|combine|(동) 결합하다|combine the forces|힘을 합치다
23-23|commercial|(형) 상업의 (명) 광고|commercial purpose|상업적 목적
23-23|comment|(명) 논평 (동) 언급하다|leave a comment|의견을 남기다
23-23|commitment|(명) 약속, 전념|lifetime commitment|평생의 헌신
23-23|competent|(형) 능숙한, 유능한|competent leader|유능한 리더
23-23|compensate|(동) 보상하다|compensate for loss|손실을 보상하다
23-23|commodity|(명) 상품, 물품|basic commodity|기초 생필품
23-23|compress|(동) 압축하다|compress the file|파일을 압축하다
23-23|commission|(명) 위원회, 수수료|planning commission|계획 위원회
23-23|combat|(명) 전투 (동) 싸우다|combat crime|범죄와 싸우다
23-23|compulsory|(형) 의무적인, 필수의|compulsory education|의무 교육
23-23|comprise|(동) 구성하다|comprise many layers|여러 층으로 구성되다
23-23|compliant|(형) 순응하는|compliant with regulations|규정을 준수하는
23-23|extract|(동) 추출하다, 발췌하다|extract the oil|오일을 추출하다
23-23|distract|(동) 산만하게 하다|distract attention|주의를 산만하게 하다
23-23|contract|(명) 계약 (동) 줄어들다|sign a contract|계약서에 서명하다
23-23|subtract|(동) 빼다|subtract ten|10을 빼다
23-23|incredible|(형) 믿을 수 없는|incredible news|믿기 힘든 소식
23-23|credibility|(명) 신뢰성|lack of credibility|신뢰성 부족
23-23|credential|(명) 자격증, 신임장|academic credentials|학문적 자격
23-23|indicate|(동) 가리키다, 나타내다|indicate the direction|방향을 가리키다
23-23|dedicate|(동) 바치다, 전념하다|dedicate one's life|삶을 바치다
23-23|contradict|(동) 모순되다, 반박하다|contradict the statement|진술을 반박하다
23-23|dictate|(동) 지시하다, 명령하다|dictate terms|조건을 지시하다
23-23|instance|(명) 경우, 실례|for instance|예를 들어
23-23|inspire|(동) 영감을 주다|inspire students|학생들에게 영감을 주다
23-23|income|(명) 수입, 소득|annual income|연간 수입
23-23|intake|(명) 섭취|calorie intake|칼로리 섭취
23-23|instinct|(명) 본능|natural instinct|타고난 본능
23-23|inhabit|(동) 살다, 거주하다|inhabit the island|섬에 거주하다
23-23|incorporate|(동) 포함하다, 통합하다|incorporate new ideas|새 아이디어를 포함하다
23-23|invade|(동) 침입하다, 침해하다|invade privacy|사생활을 침해하다
23-23|intensify|(동) 격렬해지다|intensify the search|수색을 강화하다
23-23|innate|(형) 타고난, 본질적인|innate ability|타고난 능력
23-23|infect|(동) 감염시키다|infect with virus|바이러스로 감염시키다
23-23|invest|(동) 투자하다|invest money|돈을 투자하다
23-23|innovate|(동) 혁신하다|innovate the industry|산업을 혁신하다


23-24|surface|(명) 표면 (동) 나타나다|smooth surface|매끄러운 표면
23-24|superior|(형) 우수한, 뛰어난|superior quality|우수한 품질
23-24|superficial|(형) 피상적인|superficial knowledge|피상적인 지식
23-24|supervisor|(명) 관리자|field supervisor|현장 감독관
23-24|superb|(형) 최고의, 훌륭한|superb performance|최고의 공연
23-24|surplus|(명) 잉여, 흑자|budget surplus|예산 흑자
23-24|surpass|(동) 능가하다|surpass expectations|기대를 능가하다
23-24|pesticide|(명) 살충제, 농약|use of pesticides|살충제 사용
23-24|precise|(형) 정확한|precise measurement|정확한 측정
23-24|suicide|(명) 자살|commit suicide|자살하다
23-24|concise|(형) 간결한|concise summary|간결한 요약
23-24|exploit|(동) 이용하다, 착취하다|exploit resources|자원을 개발하다
23-24|extinction|(명) 멸종, 소멸|species extinction|종의 멸종
23-24|explicit|(형) 명시적인, 명백한|explicit instructions|명시적인 지침
23-24|exclude|(동) 배제하다, 제외하다|exclude from study|연구에서 제외하다
23-24|exclaim|(동) 소리치다|exclaim in surprise|놀라서 외치다
23-24|exaggerate|(동) 과장하다|exaggerate the story|이야기를 과장하다
23-24|extensive|(형) 광대한, 폭넓은|extensive research|폭넓은 연구
23-24|excessive|(형) 지나친, 과도한|excessive noise|과도한 소음
23-24|executive|(명) 임원 (형) 행정의|chief executive|최고 경영자
23-24|exhaust|(동) 다 써버리다, 기진맥진하게 하다|exhaust the supplies|공급품을 다 쓰다
23-24|excel|(동) 뛰어나다, 능가하다|excel in sports|스포츠에 뛰어나다
23-24|excavate|(동) 파다, 발굴하다|excavate ruins|유적을 발굴하다
23-24|suffer|(동) 겪다, 당하다|suffer from pain|통증을 겪다
23-24|transfer|(동) 옮기다, 이동하다|transfer files|파일을 옮기다
23-24|infer|(동) 추측하다, 추론하다|infer the meaning|의미를 추론하다
23-24|fertile|(형) 비옥한, 기름진|fertile land|비옥한 땅
23-24|succeed|(동) 성공하다, 뒤를 잇다|succeed in life|인생에서 성공하다
23-24|procedure|(명) 절차, 순서|legal procedure|법적 절차
23-24|exceed|(동) 넘다, 초과하다|exceed the limit|한도를 넘다
23-24|unprecedented|(형) 전례 없는|unprecedented event|전례 없는 사건
23-24|proceed|(동) 나아가다, 진행되다|proceed with caution|신중히 진행하다
23-24|precede|(동) 선행하다, 앞서다|precede the meeting|회의에 앞서다
23-24|geography|(명) 지리학, 지형|physical geography|자연 지리학
23-24|geometry|(명) 기하학|basic geometry|기초 기하학
23-24|geology|(명) 지질학|study of geology|지질학 연구


23-25|preserve|(동) 보존하다, 지키다|preserve nature|자연을 보존하다
23-25|predict|(동) 예언하다, 예보하다|predict the future|미래를 예측하다
23-25|presence|(명) 존재, 출석|physical presence|실제 존재
23-25|previous|(형) 이전의|previous experience|이전의 경험
23-25|prejudice|(명) 편견 (동) 편견을 갖게 하다|racial prejudice|인종적 편견
23-25|prevail|(동) 만연하다, 우세하다|justice prevails|정의가 승리하다
23-25|preoccupy|(동) 마음을 사로잡다|preoccupied with work|업무에 몰두한
23-25|presuppose|(동) 예상하다, 전제로 하다|presuppose knowledge|지식을 전제로 하다
23-25|prehistory|(명) 선사 시대|ancient prehistory|고대 선사 시대
23-25|precaution|(명) 예방책, 조심|safety precaution|안전 예방책
23-25|obvious|(형) 명백한|obvious mistake|명백한 실수
23-25|opposite|(형) 정반대의 (명) 반대|opposite direction|반대 방향
23-25|obstacle|(명) 장애물|remove obstacles|장애물을 제거하다
23-25|obsess|(동) 사로잡다, 집착하게 하다|obsessed with beauty|미에 집착하는
23-25|oblige|(동) 의무를 지우다, 강요하다|feel obliged|의무감을 느끼다
23-25|obscure|(형) 모호한 (동) 가리다|obscure view|가려진 시야
23-25|structure|(명) 구조, 체계|social structure|사회 구조
23-25|infrastructure|(명) 기반 시설|urban infrastructure|도시 기반 시설
23-25|reconstruct|(동) 재건하다, 복원하다|reconstruct the past|과거를 복원하다
23-25|obstruct|(동) 막다, 방해하다|obstruct the road|길을 막다
23-25|outcome|(명) 결과, 성과|favorable outcome|유리한 결과
23-25|outdated|(형) 구식의|outdated technology|구식 기술
23-25|outstanding|(형) 뛰어난, 두드러진|outstanding performance|뛰어난 실적
23-25|outlet|(명) 출구, 발산 수단|emotional outlet|감정 발산 수단
23-25|outrageous|(형) 터무니없는|outrageous behavior|터무니없는 행동
23-25|refine|(동) 정제하다, 개선하다|refine the skill|기술을 개선하다
23-25|confine|(동) 국한하다, 가두다|confine to bed|침대에 누워 있다
23-25|infinite|(형) 무한한|infinite loop|무한 루프
23-25|generate|(동) 발생시키다|generate electricity|전기를 발생시키다
23-25|genetic|(형) 유전의|genetic engineering|유전 공학
23-25|indigenous|(형) 토착의|indigenous people|토착민
23-25|generosity|(명) 너그러움, 관대|act of generosity|관대한 행위
23-25|universal|(형) 보편적인|universal truth|보편적 진리
23-25|union|(명) 결합, 조합|labor union|노동 조합
23-25|reunion|(명) 재회, 동창회|family reunion|가족 모임


23-26|influence|(명) 영향 (동) 영향을 미치다|under the influence|영향을 받는
23-26|fluid|(명) 액체 (형) 유동적인|fluid motion|부드러운 움직임
23-26|fluctuate|(동) 변동하다|fluctuate wildly|심하게 변동하다
23-26|affluent|(형) 부유한|affluent neighborhood|부유한 동네
23-26|produce|(동) 생산하다 (명) 농산물|produce fresh food|신선 식품을 생산하다
23-26|progress|(명) 발전 (동) 진보하다|scientific progress|과학적 발전
23-26|professional|(형) 전문적인 (명) 전문가|professional athlete|직업 선수
23-26|profit|(명) 이익 (동) 수익을 얻다|make a profit|이익을 내다
23-26|profound|(형) 심오한, 엄청난|profound effect|심오한 효과
23-26|prosper|(동) 번영하다|prosper in business|사업이 번창하다
23-26|prolonged|(형) 오래 계속되는|prolonged exposure|장기 노출
23-26|prodigy|(명) 천재, 신동|child prodigy|신동
23-26|protest|(명) 항의 (동) 이의를 제기하다|peaceful protest|평화적 시위
23-26|prophet|(명) 예언자|biblical prophet|성경의 예언자
23-26|prospect|(명) 전망, 가망|future prospects|미래 전망
23-26|absorb|(동) 흡수하다|absorb knowledge|지식을 흡수하다
23-26|absolute|(형) 절대적인|absolute power|절대 권력
23-26|abstract|(형) 추상적인 (명) 요약|abstract painting|추상화
23-26|abuse|(동) 남용하다, 학대하다|child abuse|아동 학대
23-26|abundance|(명) 풍부, 풍요|in abundance|풍부하게
23-26|absurd|(형) 불합리한, 어리석은|absurd idea|터무니없는 아이디어
23-26|discourage|(동) 낙담시키다, 방해하다|discourage from smoking|흡연을 못하게 하다
23-26|core|(명) 핵심, 중심|core values|핵심 가치
23-26|accord|(동) 일치하다 (명) 합의|of one's own accord|자진해서
23-26|upcycling|(명) 업사이클링|upcycling projects|업사이클링 프로젝트
23-26|upload|(동) 업로드하다|upload the video|영상을 올리다
23-26|upright|(형) 똑바른, 정직한|stand upright|똑바로 서다
23-26|upcoming|(형) 다가오는|upcoming election|다가오는 선거
23-26|uphold|(동) 유지시키다, 지지하다|uphold the law|법을 수호하다
23-26|security|(명) 보안, 안전|national security|국가 안보
23-26|curious|(형) 궁금한, 호기심 많은|curious child|호기심 많은 아이
23-26|cure|(명) 치료 (동) 치료하다|natural cure|천연 치료제
23-26|accurate|(형) 정확한|accurate data|정확한 데이터
23-26|artificial|(형) 인공의, 인조의|artificial light|인공 조명
23-26|artwork|(명) 미술품|valuable artwork|가치 있는 예술품
23-26|artistic|(형) 예술의, 예술적인|artistic talent|예술적 재능
23-26|artifact|(명) 인공물, 인공 유물|ancient artifact|고대 유물


23-27|share|(동) 공유하다 (명) 몫|share ideas|아이디어를 공유하다
23-27|object|(명) 물건, 목적 (동) 반대하다|object to the plan|계획에 반대하다
23-27|practice|(명) 연습, 관행 (동) 실행하다|common practice|일반적인 관행
23-27|issue|(명) 문제, 발행 (동) 발행하다|current issue|현안 문제
23-27|represent|(동) 대표하다, 나타내다|represent the company|회사를 대표하다
23-27|favor|(명) 호의, 지지 (동) 더 좋아하다|in favor of|~에 찬성하여
23-27|degree|(명) 정도, 학위|college degree|대학 학위
23-27|property|(명) 재산, 부동산, 특성|private property|사유 재산
23-27|match|(명) 시합 (동) 어울리다|perfect match|완벽한 짝
23-27|article|(명) 기사, 물품|news article|뉴스 기사
23-27|yield|(동) 낳다, 항복하다 (명) 수확량|crop yield|농작물 수확량
23-27|lean|(동) 기대다 (형) 마른|lean against wall|벽에 기대다
23-27|overcome|(동) 극복하다|overcome fear|공포를 극복하다
23-27|overtake|(동) 추월하다|overtake the car|차를 추월하다
23-27|expedition|(명) 탐험, 원정|scientific expedition|과학 탐험
23-27|exception|(명) 예외|with few exceptions|거의 예외 없이
23-27|expose|(동) 노출시키다, 폭로하다|expose the truth|진실을 밝히다
23-27|impose|(동) 부과하다, 강요하다|impose taxes|세금을 부과하다
23-27|violation|(명) 위반, 침해|traffic violation|교통 위반
23-27|violence|(명) 폭력|domestic violence|가정 폭력
23-27|resist|(동) 저항하다, 견디다|resist the temptation|유혹에 저항하다
23-27|persist|(동) 지속하다, 계속 주장하다|persist in errors|계속 실수하다
23-27|imaginary|(형) 상상의, 가상의|imaginary friend|상상의 친구
23-27|imaginative|(형) 상상력이 풍부한|imaginative writer|상상력이 풍부한 작가
23-27|considerable|(형) 상당한, 많은|considerable amount|상당한 양
23-27|considerate|(형) 배려하는, 사려 깊은|be considerate of|~을 배려하다
23-27|hostility|(명) 적의, 적대|open hostility|공공연한 적대감
23-27|hospitality|(명) 환대, 후한 대접|show hospitality|환대를 베풀다
23-27|appliance|(명) 기기, 전기 제품|home appliance|가전 제품
23-27|compliance|(명) 승낙, 준수|strict compliance|엄격한 준수
23-27|withdraw|(동) 빼내다, 인출하다|withdraw cash|현금을 인출하다
23-27|withstand|(동) 견디다, 저항하다|withstand heat|열을 견디다


23-28|feature|(명) 특징 (동) 특징으로 하다|main feature|주요 특징
23-28|direct|(동) 향하다, 지휘하다|direct flight|직항편
23-28|matter|(명) 문제, 물질 (동) 중요하다|no matter what|무슨 일이 있어도
23-28|account|(명) 기술, 계좌 (동) 설명하다|bank account|은행 계좌
23-28|ground|(명) 지면, 근거|solid ground|확실한 근거
23-28|constitution|(명) 구성, 헌법|national constitution|국가 헌법
23-28|board|(명) 판자, 위원회 (동) 탑승하다|on board|탑승 중인
23-28|stock|(명) 재고, 주식|in stock|재고가 있는
23-28|spring|(명) 봄, 용수철 (동) 튀어나오다|hot spring|온천
23-28|mean|(동) 의미하다 (형) 인색한, 평균의|mean score|평균 점수
23-28|balance|(명) 균형, 잔고|check balance|잔고 확인
23-28|cover|(동) 덮다, 다루다|cover the costs|비용을 충당하다
23-28|project|(명) 프로젝트 (동) 계획하다|research project|연구 프로젝트
23-28|reject|(동) 거절하다|reject the plan|계획을 거절하다
23-28|perspective|(명) 시각, 관점|broad perspective|넓은 관점
23-28|respective|(형) 각자의|respective roles|각자의 역할
23-28|objective|(형) 객관적인 (명) 목적|objective goal|객관적인 목표
23-28|subjective|(형) 주관적인|subjective view|주관적인 견해
23-28|emergency|(명) 비상 사태|emergency call|비상 전화
23-28|emergence|(명) 발생, 출현|emergence of internet|인터넷의 출현
23-28|oppose|(동) 반대하다, 저항하다|strongly oppose|강력히 반대하다
23-28|compose|(동) 구성하다, 작곡하다|compose a song|노래를 작곡하다
23-28|sensitive|(형) 민감한, 예민한|sensitive skin|민감한 피부
23-28|sensible|(형) 분별 있는, 현명한|sensible choice|현명한 선택
23-28|consciousness|(명) 의식, 자각|lose consciousness|의식을 잃다
23-28|conscience|(명) 양심|guilty conscience|죄책감
23-28|interrupt|(동) 방해하다, 중단시키다|interrupt the speech|연설을 방해하다
23-28|interfere|(동) 간섭하다, 방해하다|interfere in affairs|업무에 간섭하다
23-28|consume|(동) 소비하다, 먹다|consume energy|에너지를 소비하다
23-28|resume|(동) 재개하다, 되찾다|resume the game|경기를 재개하다
23-28|extrovert|(명) 외향적인 사람|extrovert personality|외향적 성격
23-28|introvert|(명) 내성적인 사람|introvert student|내성적인 학생


23-29|character|(명) 성질, 특성, 인물|main character|주인공
23-29|appreciate|(동) 감사하다, 감상하다|appreciate the help|도움에 감사하다
23-29|party|(명) 모임, 정당, 당사자|political party|정당
23-29|capital|(명) 수도, 자본, 대문자|capital city|수도
23-29|plain|(형) 분명한, 평이한 (명) 평원|plain paper|빈 종이
23-29|scale|(명) 규모, 축척, 눈금|large scale|대규모
23-29|attribute|(동) ~의 탓으로 돌리다 (명) 특성|key attribute|주요 특성
23-29|mass|(명) 덩어리, 다수, 질량|mass production|대량 생산
23-29|company|(명) 회사, 동료|global company|세계적 기업
23-29|rate|(명) 속도, 비율, 요금|exchange rate|환율
23-29|order|(명) 정돈, 명령, 주문|law and order|법과 질서
23-29|command|(동) 명령하다, 지배하다 (명) 명령|at command|명령에 따라
23-29|involve|(동) 관련되다, 포함하다|be involved in|~에 관련되다
23-29|evolve|(동) 발달하다, 진화하다|evolve over time|시간에 따라 진화하다
23-29|addition|(명) 추가, 부가, 덧셈|in addition|게다가
23-29|addiction|(명) 중독, 탐닉|internet addiction|인터넷 중독
23-29|comparative|(형) 비교의, 상대적인|comparative study|비교 연구
23-29|comparable|(형) 비교할 수 있는, 비슷한|comparable quality|대등한 품질
23-29|intention|(명) 의도, 목적|good intentions|좋은 의도
23-29|intervention|(명) 개입, 간섭|military intervention|군사적 개입
23-29|population|(명) 인구, 개체 수|dense population|밀집된 인구
23-29|popularity|(명) 인기|gain popularity|인기를 얻다
23-29|collect|(동) 모으다, 수집하다|collect stamps|우표를 수집하다
23-29|correct|(형) 정확한 (동) 고치다|correct answer|정답
23-29|personnel|(명) 전 직원, 인사과|personnel department|인사부
23-29|personal|(형) 개인의, 사적인|personal computer|개인용 컴퓨터
23-29|announce|(동) 발표하다, 알리다|announce the news|뉴스를 발표하다
23-29|pronounce|(동) 발음하다, 선언하다|pronounce clearly|명확히 발음하다
23-29|diverse|(형) 다양한|diverse cultures|다양한 문화
23-29|reverse|(동) 뒤집다 (형) 반대의|reverse the decision|결정을 뒤집다
23-29|explosion|(명) 폭발, 폭발적 증가|population explosion|인구 폭발
23-29|expansion|(명) 팽창, 확장|business expansion|사업 확장


23-30|save|(동) 구하다, 모으다, 저장하다|save the data|데이터를 저장하다
23-30|figure|(명) 수치, 인물, 도표|public figure|공인
23-30|measure|(동) 측정하다 (명) 수단, 척도|take measures|조치를 취하다
23-30|subject|(명) 주제, 학과, 대상|main subject|주요 주제
23-30|period|(명) 기간, 시대|trial period|수습 기간
23-30|stuff|(명) 물건, 재료 (동) 채우다|cool stuff|멋진 물건
23-30|fine|(형) 훌륭한 (명) 벌금|pay a fine|벌금을 내다
23-30|term|(명) 용어, 기간, 조건|in technical terms|전문 용어로
23-30|spot|(명) 장소, 점 (동) 발견하다|scenic spot|명승지
23-30|sentence|(명) 문장, 판결 (동) 선고하다|complete sentence|완전한 문장
23-30|passage|(명) 통로, 구절|reading passage|독해 지문
23-30|minute|(명) 분 (형) 미세한, 상세한|minute detail|미세한 세부 사항
23-30|adapt|(동) 적응하다, 순응시키다|adapt to change|변화에 적응하다
23-30|adopt|(동) 채택하다, 입양하다|adopt a pet|반려동물을 입양하다
23-30|literal|(형) 문자의, 글자 그대로의|literal meaning|글자 그대로의 의미
23-30|literate|(형) 읽고 쓸 수 있는|computer literate|컴퓨터 활용 능력이 있는
23-30|construct|(동) 건설하다, 구성하다|construct a building|건물을 짓다
23-30|instruct|(동) 알려주다, 가르치다|instruct the class|학급을 지도하다
23-30|prohibit|(동) 금지하다|prohibit smoking|흡연을 금지하다
23-30|inhibit|(동) 억제하다, 저해하다|inhibit growth|성장을 저해하다
23-30|suspect|(동) 의심하다 (명) 용용자|murder suspect|살인 용의자
23-30|inspect|(동) 검사하다, 조사하다|inspect the goods|제품을 검사하다
23-30|cooperation|(명) 협력, 협동|international cooperation|국제적 협력
23-30|corporation|(명) 기업, 회사|multinational corporation|다국적 기업
23-30|displace|(동) 대체하다, 옮기다|displace local workers|현지 노동자를 대체하다
23-30|disperse|(동) 분산시키다, 흩어지다|disperse the seeds|씨앗을 퍼뜨리다
23-30|destination|(명) 목적지, 도착지|final destination|최종 목적지
23-30|destiny|(명) 운명|manifest destiny|명백한 운명
23-30|medication|(명) 약물 (치료)|take medication|약을 복용하다
23-30|meditation|(명) 명상, 묵상|daily meditation|매일의 명상
23-30|subsequent|(형) 차후의, 이후의|subsequent events|그 이후의 사건들
23-30|consequent|(형) 결과로 일어나는|consequent loss|그 결과로 생긴 손실


  `;
  // 👆 여기까지가 네가 앞으로 수정·추가할 영역

  // 파싱해서 전역 객체에 올리기
  window.WORD_DB = buildDB(RAW_WORDS);

})();

















