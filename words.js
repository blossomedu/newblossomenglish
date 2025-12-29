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

4-1	father	아버지	This is my father.	이 분은 나의 아버지이다.
4-1	dad	아빠	I like my dad.	나는 나의 아빠를 좋아한다.
4-1	mother	어머니	She is my mother.	그녀는 나의 어머니이다.
4-1	mom	엄마	My mom is pretty.	나의 엄마는 예쁘다.
4-1	brother	남자 형제	He is my brother.	그는 나의 남자 형제이다.
4-1	sister	여자 형제	I have a sister.	나는 여자 형제가 한 명 있다.
4-1	family	가족	We love our family.	우리는 우리의 가족을 사랑한다.
4-1	parents	부모	My parents are here.	나의 부모님들이 여기에 계신다.
4-1	daughter	딸	She is my daughter.	그녀는 나의 딸이다.
4-1	son	아들	I am a good son.	나는 착한 아들이다.
4-1	grandparents	조부모	I call my grandparents.	나는 나의 조부모님께 전화한다.
4-1	grandfather	할아버지	My grandfather is old.	나의 할아버지는 나이가 많으시다.
4-1	grandmother	할머니	I see my grandmother.	나는 나의 할머니를 뵌다.
4-1	uncle	삼촌	My uncle has a car.	나의 삼촌은 차를 한 대 가지고 계신다.
4-1	aunt	이모, 고모	I play with my aunt.	나는 나의 이모/고모와 함께 논다.
4-1	cousin	사촌	He is my cousin.	그는 나의 사촌이다.
4-2	Sunday	일요일	Today is Sunday.	오늘은 일요일이다.
4-2	Monday	월요일	I go to school on Monday.	나는 월요일에 학교에 간다.
4-2	Tuesday	화요일	We have P.E. on Tuesday.	우리는 화요일에 체육 수업이 있다.
4-2	Wednesday	수요일	I eat lunch on Wednesday.	나는 수요일에 점심을 먹는다.
4-2	Thursday	목요일	Do you like Thursday?	너는 목요일을 좋아하니?
4-2	Friday	금요일	Let's meet next Friday.	다음 주 금요일에 만나자.
4-2	Saturday	토요일	We play soccer on Saturday.	우리는 토요일에 축구를 한다.
4-2	today	오늘	What is the date today?	오늘 날짜는 언제니?
4-2	morning	아침	I eat breakfast in the morning.	나는 아침에 아침밥을 먹는다.
4-2	afternoon	오후	Let's play in the afternoon.	오후에 놀자.
4-2	evening	저녁	I watch TV in the evening.	나는 저녁에 TV를 본다.
4-2	night	밤	I sleep at night.	나는 밤에 잠을 잔다.
4-2	tonight	오늘밤	I will study tonight.	나는 오늘밤에 공부할 것이다.
4-2	yesterday	어제	I was sick yesterday.	나는 어제 아팠다.
4-2	tomorrow	내일	We will meet tomorrow.	우리는 내일 만날 것이다.
4-2	week	일주일, 주	There are seven days in a week.	한 주에는 7일이 있다.
4-3	weather	날씨	The weather is nice today.	오늘 날씨는 좋다.
4-3	sunny	화창한	It is a sunny day.	오늘은 화창한 날이다.
4-3	cloudy	구름이 낀	It is cloudy now.	지금은 구름이 끼어 있다.
4-3	rainy	비가 오는	Don't forget your umbrella on a rainy day.	비 오는 날에 우산을 잊지 마라.
4-3	snowy	눈이 오는	Let's make a snowman on a snowy day.	눈 오는 날에 눈사람을 만들자.
4-3	foggy	안개가 낀	It is foggy outside.	밖은 안개가 끼어 있다.
4-3	windy	바람이 부는	The windy day is cold.	바람 부는 날은 춥다.
4-3	warm	따뜻한	The room is warm.	방이 따뜻하다.
4-3	cold	추운	I feel cold now.	나는 지금 춥다.
4-3	cool	시원한	The drink is cool.	음료수가 시원하다.
4-3	hot	더운	It is very hot outside.	밖이 매우 덥다.
4-3	season	계절	What is your favorite season?	네가 가장 좋아하는 계절은 무엇이니?
4-3	spring	봄	I like spring flowers.	나는 봄꽃을 좋아한다.
4-3	summer	여름	Let's swim in the summer.	여름에 수영하자.
4-3	fall	가을	Fall is a beautiful season.	가을은 아름다운 계절이다.
4-3	winter	겨울	Winter is very cold.	겨울은 매우 춥다.
4-4	taste	맛이 나다, 맛보다	I taste the sweet cake.	나는 달콤한 케이크 맛을 본다.
4-4	sweet	달콤한	The candy is sweet.	그 사탕은 달콤하다.
4-4	sour	신맛이 나는	I don't like sour lemons.	나는 신 레몬을 좋아하지 않는다.
4-4	feel	느끼다	I feel happy today.	나는 오늘 행복함을 느낀다.
4-4	wet	젖은, 축축한	My shoes are wet.	나의 신발이 젖었다.
4-4	dry	마른, 건조한	Please use a dry towel.	마른 수건을 사용해 주세요.
4-4	soft	부드러운	The pillow is very soft.	그 베개는 매우 부드럽다.
4-4	hard	딱딱한	The rock is very hard.	그 돌은 매우 딱딱하다.
4-4	hear	듣다	Can you hear the music?	음악을 들을 수 있니?
4-4	look	보이다, 보다	You look happy.	너는 행복해 보인다.
4-4	smell	냄새가 나다, 냄새 맡다	I can smell the food.	나는 그 음식 냄새를 맡을 수 있다.
4-4	delicious	맛있는	This cake is delicious.	이 케이크는 맛있다.
4-4	sound	~하게 들리다	It sounds like a bird.	새 소리처럼 들린다.
4-4	loud	시끄러운	The music is too loud.	음악이 너무 시끄럽다.
4-4	quiet	조용한	Please be quiet.	조용히 해 주세요.
4-4	nice	좋은	Have a nice day.	좋은 하루 보내세요.
4-5	number	숫자	What is your favorite number?	네가 가장 좋아하는 숫자는 무엇이니?
4-5	one	1, 하나	I have one dog.	나는 개를 한 마리 가지고 있다.
4-5	two	2, 둘	We have two brothers.	우리는 두 명의 남자 형제가 있다.
4-5	three	3, 셋	I eat three cookies.	나는 쿠키 세 개를 먹는다.
4-5	four	4, 넷	A cat has four legs.	고양이는 다리가 네 개 있다.
4-5	five	5, 다섯	I count to five.	나는 다섯까지 센다.
4-5	six	6, 여섯	There are six chairs.	의자가 여섯 개 있다.
4-5	seven	7, 일곱	Today is day seven.	오늘은 일곱 번째 날이다.
4-5	eight	8, 여덟	I have eight pencils.	나는 연필을 여덟 자루 가지고 있다.
4-5	nine	9, 아홉	He is nine years old.	그는 아홉 살이다.
4-5	ten	10, 열	Let's count to ten.	열까지 세어 보자.
4-5	eleven	11, 열하나	I see eleven birds.	나는 새 열한 마리를 본다.
4-5	twelve	12, 열 둘	There are twelve months.	열두 달이 있다.
4-5	thirteen	13, 열 셋	My sister is thirteen.	나의 여동생은 열세 살이다.
4-5	fourteen	14, 열 넷	I wear fourteen stickers.	나는 스티커 열네 개를 붙인다.
4-5	fifteen	15, 열 다섯	I can see fifteen cars.	나는 차 열다섯 대를 볼 수 있다.
4-6	how	얼마나, 어떻게	How old are you?	너는 나이가 얼마나 되니?
4-6	long	긴	That ruler is long.	저 자는 길다.
4-6	quick	빠른	Be quick!	빠르게 해라!
4-6	large	큰, 넓은	My school has a large gym.	나의 학교는 넓은 체육관이 있다.
4-6	big	큰	That house is very big.	저 집은 매우 크다.
4-6	small	작은	I have a small pencil.	나는 작은 연필을 가지고 있다.
4-6	heavy	무거운	This box is heavy.	이 상자는 무겁다.
4-6	light	가벼운	My bag is light.	나의 가방은 가볍다.
4-6	dirty	더러운	The floor is dirty.	바닥이 더럽다.
4-6	clean	깨끗한	My hands are clean.	나의 손은 깨끗하다.
4-6	high	높은	The bird flies high.	그 새는 높이 난다.
4-6	low	낮은	The fence is low.	울타리가 낮다.
4-6	wide	넓은	The road is wide.	그 도로는 넓다.
4-6	narrow	좁은	This street is narrow.	이 길은 좁다.
4-6	thick	두꺼운	This book is thick.	이 책은 두껍다.
4-6	thin	얇은	I wear a thin jacket.	나는 얇은 재킷을 입는다.
4-7	body	몸	Take care of your body.	너의 몸을 돌보아라.
4-7	muscle	근육	Running builds your muscle.	달리기는 너의 근육을 만든다.
4-7	bone	뼈	My leg bone is strong.	나의 다리 뼈는 튼튼하다.
4-7	foot	발	I wear shoes on my foot.	나는 나의 발에 신발을 신는다.
4-7	feet	발 (복수)	I have two feet.	나는 두 발을 가지고 있다.
4-7	toe	발가락	I wiggle my toe.	나는 나의 발가락을 꼼지락거린다.
4-7	hand	손	Wash your hand.	너의 손을 씻어라.
4-7	finger	손가락	I have ten fingers.	나는 열 개의 손가락이 있다.
4-7	heart	심장	My heart beats fast.	나의 심장이 빠르게 뛴다.
4-7	brain	뇌	The brain helps me think.	뇌는 내가 생각하는 것을 돕는다.
4-7	shoulder	어깨	He taps my shoulder.	그는 나의 어깨를 두드린다.
4-7	back	등	I carry a bag on my back.	나는 나의 등에 가방을 멘다.
4-7	leg	다리	I run with my leg.	나는 나의 다리로 달린다.
4-7	knee	무릎	He fell on his knee.	그는 무릎을 꿇고 넘어졌다.
4-7	arm	팔	I hold the bag with my arm.	나는 나의 팔로 가방을 잡는다.
4-7	elbow	팔꿈치	I hurt my elbow.	나는 나의 팔꿈치를 다쳤다.
4-8	face	얼굴	I wash my face.	나는 나의 얼굴을 씻는다.
4-8	cheek	볼, 뺨	My cheek is soft.	나의 볼은 부드럽다.
4-8	chin	턱	He has a big chin.	그는 큰 턱을 가지고 있다.
4-8	skin	피부	My skin is dry.	나의 피부는 건조하다.
4-8	head	머리	I wash my head.	나는 나의 머리를 감는다.
4-8	hair	머리카락	My hair is black.	나의 머리카락은 검은색이다.
4-8	neck	목	I wear a scarf around my neck.	나는 나의 목에 스카프를 두른다.
4-8	throat	목구멍	I have a sore throat.	나는 목구멍이 아프다.
4-8	eye	눈	I have two eyes.	나는 두 개의 눈이 있다.
4-8	eyebrow	눈썹	My eyebrow is thick.	나의 눈썹은 두껍다.
4-8	ear	귀	I hear with my ear.	나는 나의 귀로 듣는다.
4-8	nose	코	I smell with my nose.	나는 나의 코로 냄새를 맡는다.
4-8	mouth	입	I open my mouth.	나는 나의 입을 벌린다.
4-8	lip	입술	My lips are red.	나의 입술은 빨갛다.
4-8	tooth	치아, 이	I brush my tooth.	나는 나의 이를 닦는다.
4-8	teeth	tooth의 복수형	I brush my teeth.	나는 나의 이들을 닦는다.
4-9	good	좋은	This movie is good.	이 영화는 좋다.
4-9	bad	나쁜	He is a bad person.	그는 나쁜 사람이다.
4-9	sad	슬픈	I feel sad today.	나는 오늘 슬프다.
4-9	happy	행복한	I am happy to see you.	나는 너를 만나서 행복하다.
4-9	lonely	외로운	The dog looks lonely.	그 개는 외로워 보인다.
4-9	angry	화난	Don't be angry with me.	나에게 화내지 마라.
4-9	tired	피곤한	I am tired after school.	나는 방과 후에 피곤하다.
4-9	nervous	불안해하는	I feel nervous before the test.	나는 시험 전에 불안해한다.
4-9	upset	속상한, 짜증 난	She is upset about the game.	그녀는 그 게임 때문에 속상해한다.
4-9	glad	기쁜	I am glad you came.	나는 네가 와서 기쁘다.
4-9	mad	몹시 화난	He is mad at his brother.	그는 그의 남동생에게 몹시 화가 났다.
4-9	worried	걱정하는	My mom is worried about me.	나의 엄마는 나에 대해 걱정하신다.
4-9	scared	무서워하는	I am scared of the dark.	나는 어둠을 무서워한다.
4-9	surprised	놀란	I was surprised by the noise.	나는 그 소음에 놀랐다.
4-9	excited	신이 난	The kids are excited to play.	아이들은 놀 생각에 신이 났다.
4-9	bored	지루해 하는	I am bored with this lesson.	나는 이 수업이 지루하다.
4-10	house	집	I live in a big house.	나는 큰 집에 산다.
4-10	bedroom	침실	I sleep in my bedroom.	나는 나의 침실에서 잠을 잔다.
4-10	living room	거실	We watch TV in the living room.	우리는 거실에서 TV를 본다.
4-10	bathroom	욕실, 화장실	I wash my hands in the bathroom.	나는 욕실에서 손을 씻는다.
4-10	garden	정원	We have many flowers in the garden.	우리는 정원에 많은 꽃을 가지고 있다.
4-10	backyard	뒷마당	I play soccer in the backyard.	나는 뒷마당에서 축구를 한다.
4-10	kitchen	부엌	My mom is in the kitchen.	나의 엄마는 부엌에 계신다.
4-10	where	어디에	Where is my book?	나의 책은 어디에 있니?
4-10	gate	대문	Open the gate, please.	대문을 열어 주세요.
4-10	bell	종, 초인종	Ring the bell to enter.	들어오려면 초인종을 눌러라.
4-10	door	문	Close the door.	문을 닫아라.
4-10	roof	지붕	The rain falls on the roof.	비가 지붕 위에 떨어진다.
4-10	sofa	소파	I sit on the sofa.	나는 소파에 앉는다.
4-10	table	탁자	Put the pen on the table.	펜을 탁자 위에 놓아라.
4-10	carpet	카펫	The carpet is soft.	카펫이 부드럽다.
4-10	stairs	계단	I walk up the stairs.	나는 계단을 걸어 올라간다.
4-11	raise	키우다, 기르다	I raise a dog.	나는 개를 키운다.
4-11	pet	애완동물	I have a cute pet.	나는 귀여운 애완동물이 있다.
4-11	animal	동물	A dog is an animal.	개는 동물이다.
4-11	dog	개	I play with my dog.	나는 나의 개와 함께 논다.
4-11	puppy	강아지	The puppy is small.	그 강아지는 작다.
4-11	cat	고양이	My cat likes to sleep.	나의 고양이는 자는 것을 좋아한다.
4-11	kitten	새끼 고양이	The kitten is tiny.	그 새끼 고양이는 아주 작다.
4-11	turtle	거북이	The turtle moves slowly.	거북이는 느리게 움직인다.
4-11	feed	먹이를 주다	I feed my cat.	나는 나의 고양이에게 먹이를 준다.
4-11	cage	우리, 새장	The bird is in the cage.	새가 새장 안에 있다.
4-11	fish	물고기	I have a fish tank.	나는 어항을 가지고 있다.
4-11	rabbit	토끼	A rabbit eats carrots.	토끼는 당근을 먹는다.
4-11	hamster	햄스터	My hamster is running.	나의 햄스터가 달리고 있다.
4-11	snake	뱀	A snake is long.	뱀은 길다.
4-11	bird	새	A bird is singing.	새가 노래하고 있다.
4-11	spider	거미	A spider has eight legs.	거미는 여덟 개의 다리를 가지고 있다.
4-12	color	색깔, 색칠하다	What is your favorite color?	네가 가장 좋아하는 색깔은 무엇이니?
4-12	favorite	가장 좋아하는	My favorite color is red.	내가 가장 좋아하는 색깔은 빨간색이다.
4-12	red	빨간색	The apple is red.	그 사과는 빨간색이다.
4-12	orange	주황색	I eat an orange.	나는 주황색 오렌지를 먹는다.
4-12	yellow	노란색	I draw a yellow sun.	나는 노란색 태양을 그린다.
4-12	green	초록색	The grass is green.	잔디는 초록색이다.
4-12	blue	파란색	The sky is blue.	하늘은 파란색이다.
4-12	purple	보라색	She wears a purple hat.	그녀는 보라색 모자를 쓴다.
4-12	black	검은색	My dog is black.	나의 개는 검은색이다.
4-12	white	흰색	The cloud is white.	구름은 흰색이다.
4-12	brown	갈색	My shoes are brown.	나의 신발은 갈색이다.
4-12	gray	회색	The rock is gray.	그 돌은 회색이다.
4-12	pink	분홍색	I like pink flowers.	나는 분홍색 꽃을 좋아한다.
4-12	gold	금색	I found a gold coin.	나는 금색 동전을 찾았다.
4-12	silver	은색	The ring is silver.	그 반지는 은색이다.
4-12	paint	칠하다, 그리다	Let's paint the wall blue.	벽을 파란색으로 칠하자.
4-13	age	나이	What is your age?	너의 나이는 몇 살이니?
4-13	who	누구	Who is that boy?	저 소년은 누구니?
4-13	young	어린, 젊은	She is a young student.	그녀는 어린 학생이다.
4-13	old	늙은, 나이가 많은	My grandfather is old.	나의 할아버지는 나이가 많으시다.
4-13	child	아이	I am a happy child.	나는 행복한 아이이다.
4-13	adult	성인, 어른	My parents are adults.	나의 부모님은 어른이다.
4-13	boy	소년, 남자아이	He is a clever boy.	그는 똑똑한 소년이다.
4-13	girl	소녀, 여자아이	She is a nice girl.	그녀는 착한 소녀이다.
4-13	man	(성인) 남자	That man is tall.	저 남자는 키가 크다.
4-13	woman	(성인) 여자	That woman is a teacher.	저 여자는 선생님이다.
4-13	gentleman	신사	He is a kind gentleman.	그는 친절한 신사이다.
4-13	lady	숙녀, 여성	She is a beautiful lady.	그녀는 아름다운 숙녀이다.
4-13	Mr.	(남성의 성, 이름 앞에) ~씨	Mr. Kim is my teacher.	김 씨는 나의 선생님이다.
4-13	Ms.	(여성의 성, 이름 앞에) ~씨	Ms. Park works here.	박 씨는 여기서 일한다.
4-13	Mrs.	(결혼한 여성) ~부인	Mrs. Lee is my friend's mom.	이 부인은 나의 친구 엄마다.
4-13	know	알다	I know the answer.	나는 그 답을 안다.
4-14	want	원하다	I want a new book.	나는 새 책을 원한다.
4-14	hope	희망, 바라다	I hope to see you soon.	나는 곧 너를 보기를 바란다.
4-14	dream	꿈, 꿈꾸다	I have a great dream.	나는 대단한 꿈을 가지고 있다.
4-14	become	~가 되다	I want to become a pilot.	나는 조종사가 되고 싶다.
4-14	doctor	의사	The doctor helps sick people.	의사는 아픈 사람들을 돕는다.
4-14	nurse	간호사	The nurse is very kind.	간호사는 매우 친절하다.
4-14	scientist	과학자	A scientist studies nature.	과학자는 자연을 연구한다.
4-14	firefighter	소방관	A firefighter stops the fire.	소방관은 불을 끈다.
4-14	job	직업	What is your job?	너의 직업은 무엇이니?
4-14	work	일하다	My parents work hard.	나의 부모님은 열심히 일하신다.
4-14	actor	배우	He is a famous actor.	그는 유명한 배우이다.
4-14	artist	예술가, 화가	My friend is a great artist.	나의 친구는 훌륭한 예술가이다.
4-14	teacher	선생님	My teacher is smart.	나의 선생님은 똑똑하시다.
4-14	police officer	경찰관	The police officer is driving a car.	경찰관이 차를 운전하고 있다.
4-14	pilot	조종사	A pilot flies a plane.	조종사는 비행기를 조종한다.
4-14	engineer	기술자	My uncle is an engineer.	나의 삼촌은 기술자이다.
4-15	handsome	잘생긴	My brother is very handsome.	나의 오빠는 아주 잘생겼다.
4-15	ugly	못생긴	I saw an ugly duck.	나는 못생긴 오리를 보았다.
4-15	tall	키가 큰	The basketball player is tall.	그 농구 선수는 키가 크다.
4-15	short	키가 작은	I am short for my age.	나는 내 나이에 비해 키가 작다.
4-15	fat	살찐	The cat is getting fat.	그 고양이는 살이 찌고 있다.
4-15	slim	날씬한	She has a slim figure.	그녀는 날씬한 몸매를 가지고 있다.
4-15	strong	강한	He is very strong.	그는 매우 강하다.
4-15	weak	약한	I feel weak when I am sick.	나는 아플 때 약하게 느낀다.
4-15	beautiful	아름다운	The flower is beautiful.	그 꽃은 아름답다.
4-15	wonderful	아주 멋진	We had a wonderful time.	우리는 아주 멋진 시간을 보냈다.
4-15	pretty	예쁜	The doll is very pretty.	그 인형은 매우 예쁘다.
4-15	cute	귀여운	The puppy is so cute.	그 강아지는 정말 귀엽다.
4-15	hungry	배고픈	I am hungry now.	나는 지금 배고프다.
4-15	thirsty	목마른	I am thirsty after running.	나는 달린 후에 목마르다.
4-15	honest	정직한	He is an honest person.	그는 정직한 사람이다.
4-15	curious	호기심이 많은	I am curious about the world.	나는 세상에 대해 호기심이 많다.
4-16	clever	영리한	He is a clever student.	그는 영리한 학생이다.
4-16	smart	똑똑한	My teacher is very smart.	나의 선생님은 아주 똑똑하시다.
4-16	wise	현명한	My grandmother is wise.	나의 할머니는 현명하시다.
4-16	stupid	어리석은	Don't do stupid things.	어리석은 짓을 하지 마라.
4-16	foolish	어리석은	It was a foolish mistake.	그것은 어리석은 실수였다.
4-16	calm	차분한	Be calm before the test.	시험 전에 차분하게 있어라.
4-16	shy	수줍어하는	She is a little shy.	그녀는 조금 수줍어한다.
4-16	funny	재미있는	That movie is very funny.	저 영화는 매우 재미있다.
4-16	polite	예의 바른	He is a very polite boy.	그는 아주 예의 바른 소년이다.
4-16	rude	예의 없는	Don't be rude to others.	다른 사람들에게 예의 없게 굴지 마라.
4-16	gentle	상냥한, 순한	The cat is very gentle.	그 고양이는 매우 순하다.
4-16	kind	친절한	She is a kind person.	그녀는 친절한 사람이다.
4-16	selfish	이기적인	Don't be selfish with your toys.	너의 장난감에 대해 이기적으로 굴지 마라.
4-16	brave	용감한	The brave knight saved the princess.	그 용감한 기사가 공주를 구했다.
4-16	careful	주의 깊은	Be careful when you cross the road.	길을 건널 때 주의 깊게 해라.
4-16	lazy	게으른	The lazy boy didn't clean his room.	그 게으른 소년은 그의 방을 청소하지 않았다.
4-17	bring	가져오다	Please bring a gift.	선물을 가져와 주세요.
4-17	invite	초대하다	I will invite my friends.	나는 나의 친구들을 초대할 것이다.
4-17	need	필요하다	I need a cake for the party.	나는 파티를 위해 케이크가 필요하다.
4-17	snack	간식	We eat a lot of snacks.	우리는 많은 간식을 먹는다.
4-17	balloon	풍선	The balloons are red and blue.	풍선들은 빨갛고 파랗다.
4-17	toy	장난감	I play with my new toy.	나는 나의 새 장난감으로 논다.
4-17	birthday	생일	Today is my birthday.	오늘은 나의 생일이다.
4-17	party	파티	We have a fun party.	우리는 재미있는 파티를 한다.
4-17	make	만들다	I make a card for my mom.	나는 나의 엄마를 위해 카드를 만든다.
4-17	give	주다	I give a gift to my friend.	나는 나의 친구에게 선물을 준다.
4-17	congratulate	축하하다	Congratulate him on his win.	그의 승리를 축하해 줘라.
4-17	card	카드	I wrote a letter on the card.	나는 카드에 편지를 썼다.
4-17	cake	케이크	We eat the cake together.	우리는 케이크를 함께 먹는다.
4-17	doll	인형	My sister loves her new doll.	나의 여동생은 그녀의 새 인형을 매우 좋아한다.
4-17	gift	선물	This gift is for you.	이 선물은 너를 위한 것이다.
4-17	present	선물	I got a nice present.	나는 멋진 선물을 받았다.
4-18	what	무엇	What is your name?	너의 이름은 무엇이니?
4-18	year	해, 년	This year is 2025.	올해는 2025년이다.
4-18	date	날짜	What is the date today?	오늘 날짜는 언제니?
4-18	month	달, 월	There are twelve months in a year.	1년은 열두 달이다.
4-18	January	1월	My birthday is in January.	나의 생일은 1월이다.
4-18	February	2월	February is the shortest month.	2월은 가장 짧은 달이다.
4-18	March	3월	School starts in March.	학교는 3월에 시작한다.
4-18	April	4월	I like the weather in April.	나는 4월의 날씨를 좋아한다.
4-18	May	5월	We have Children's Day in May.	우리는 5월에 어린이날이 있다.
4-18	June	6월	We go swimming in June.	우리는 6월에 수영하러 간다.
4-18	July	7월	July is a hot month.	7월은 더운 달이다.
4-18	August	8월	We have summer vacation in August.	우리는 8월에 여름 방학이 있다.
4-18	September	9월	School starts again in September.	학교는 9월에 다시 시작한다.
4-18	October	10월	I see red leaves in October.	나는 10월에 빨간 나뭇잎을 본다.
4-18	November	11월	It starts getting cold in November.	11월에 추워지기 시작한다.
4-18	December	12월	We celebrate Christmas in December.	우리는 12월에 크리스마스를 기념한다.
4-19	wake up	잠에서 깨다	I wake up at 7 o'clock.	나는 7시에 잠에서 깬다.
4-19	get up	일어나다	I get up from my bed.	나는 나의 침대에서 일어난다.
4-19	go to school	학교에 가다	I go to school by bus.	나는 버스를 타고 학교에 간다.
4-19	come home	집에 오다	I come home after school.	나는 방과 후에 집에 온다.
4-19	take a shower	샤워를 하다	I take a shower in the morning.	나는 아침에 샤워를 한다.
4-19	wash hands	손을 씻다	Always wash hands before eating.	먹기 전에 항상 손을 씻어라.
4-19	brush teeth	양치질을 하다	I brush teeth twice a day.	나는 하루에 두 번 양치질을 한다.
4-19	go to bed	잠자리에 들다	I go to bed at ten.	나는 10시에 잠자리에 든다.
4-19	read a book	책을 읽다	I read a book every night.	나는 매일 밤 책을 읽는다.
4-19	keep a diary	일기를 쓰다	I keep a diary about my day.	나는 나의 하루에 대해 일기를 쓴다.
4-19	watch television	텔레비전을 보다	We watch television in the living room.	우리는 거실에서 텔레비전을 본다.
4-19	cook	요리하다	My dad likes to cook.	나의 아빠는 요리하는 것을 좋아하신다.
4-19	take a bath	목욕하다	I take a bath on Sunday.	나는 일요일에 목욕한다.
4-19	rest	쉬다	You should rest when you are tired.	너는 피곤할 때 쉬어야 한다.
4-19	do homework	숙제를 하다	I must do homework now.	나는 지금 숙제를 해야 한다.
4-19	soon	곧	I will finish soon.	나는 곧 끝낼 것이다.
4-20	go	가다	I go to the park.	나는 공원에 간다.
4-20	build	짓다	They will build a new school.	그들은 새 학교를 지을 것이다.
4-20	company	회사	My father works at a company.	나의 아버지는 회사에서 일하신다.
4-20	office	사무실	The doctor is in his office.	의사는 그의 사무실에 있다.
4-20	post office	우체국	I send a letter at the post office.	나는 우체국에서 편지를 보낸다.
4-20	bank	은행	I save money in the bank.	나는 은행에 돈을 저금한다.
4-20	store	가게	Let's buy some candy at the store.	가게에서 사탕을 좀 사자.
4-20	church	교회	We go to church on Sunday.	우리는 일요일에 교회에 간다.
4-20	place	장소	This is a beautiful place.	이곳은 아름다운 장소이다.
4-20	library	도서관	I read books in the library.	나는 도서관에서 책을 읽는다.
4-20	bookstore	서점	I buy a comic book at the bookstore.	나는 서점에서 만화책을 산다.
4-20	bakery	빵집	I smell bread from the bakery.	나는 빵집에서 빵 냄새를 맡는다.
4-20	supermarket	슈퍼마켓	My mom goes to the supermarket.	나의 엄마는 슈퍼마켓에 가신다.
4-20	restaurant	식당	We eat dinner at the restaurant.	우리는 식당에서 저녁을 먹는다.
4-20	café	카페	I drink juice at the café.	나는 카페에서 주스를 마신다.
4-20	department store	백화점	I bought a shirt at the department store.	나는 백화점에서 셔츠를 샀다.
4-21	come	오다	Come to the park with me.	나랑 같이 공원에 와라.
4-21	jump	뛰다, 점프하다	The frog can jump high.	개구리는 높이 뛸 수 있다.
4-21	run	달리다	I run in the morning.	나는 아침에 달린다.
4-21	sit	앉다	Sit here, please.	여기에 앉아 주세요.
4-21	wait	기다리다	Wait for me at the bus stop.	버스 정류장에서 나를 기다려라.
4-21	sleep	잠자다	I sleep for 8 hours.	나는 8시간 동안 잠을 잔다.
4-21	move	움직이다	Please move the chair.	의자를 움직여 주세요.
4-21	put	놓다, 두다	Put the toys in the box.	장난감을 상자 안에 놓아라.
4-21	do	하다	I do my homework every day.	나는 매일 숙제를 한다.
4-21	cut	자르다	Cut the paper with scissors.	가위로 종이를 잘라라.
4-21	drop	떨어뜨리다	Be careful not to drop the glass.	유리잔을 떨어뜨리지 않도록 조심해라.
4-21	forget	잊다	Don't forget my name.	나의 이름을 잊지 마라.
4-21	open	열다	Open the window for fresh air.	신선한 공기를 위해 창문을 열어라.
4-21	close	닫다	Close the door quietly.	문을 조용히 닫아라.
4-21	blow	불다	I blow out the candle.	나는 촛불을 분다.
4-21	show	보여주다	Show me your new pencil.	너의 새 연필을 나에게 보여 줘.
4-22	park	공원	I play soccer in the park.	나는 공원에서 축구를 한다.
4-22	field	들판	We saw many flowers in the field.	우리는 들판에서 많은 꽃을 보았다.
4-22	ground	땅	The ball rolled on the ground.	공이 땅 위에서 굴러갔다.
4-22	grass	풀, 잔디	We sit on the soft grass.	우리는 부드러운 잔디 위에 앉는다.
4-22	sand	모래	I build a castle with sand.	나는 모래로 성을 만든다.
4-22	bench	벤치	Let's sit on the bench.	벤치에 앉자.
4-22	flower	꽃	This flower smells sweet.	이 꽃은 달콤한 냄새가 난다.
4-22	rose	장미	The red rose is beautiful.	빨간 장미는 아름답다.
4-22	find	찾다	I need to find my lost key.	나는 잃어버린 열쇠를 찾아야 한다.
4-22	ride	타다	Can you ride a bike?	너는 자전거를 탈 수 있니?
4-22	bicycle	자전거	I have a new bicycle.	나는 새 자전거를 가지고 있다.
4-22	jump rope	줄넘기, 줄넘기를 하다	We jump rope during break time.	우리는 쉬는 시간에 줄넘기를 한다.
4-22	camera	카메라	I take pictures with my camera.	나는 나의 카메라로 사진을 찍는다.
4-22	map	지도	Look at the map to find the way.	길을 찾기 위해 지도를 보아라.
4-22	stone	돌	I picked up a small stone.	나는 작은 돌 하나를 주웠다.
4-22	plant	식물	My mom waters the plant.	나의 엄마는 식물에 물을 주신다.
4-23	many	(수가) 많은	There are many people here.	여기에 많은 사람들이 있다.
4-23	much	(양이) 많은	I don't have much time.	나는 시간이 많지 않다.
4-23	few	(수가) 거의 없는	He has few friends.	그는 친구가 거의 없다.
4-23	little	(양이) 거의 없는	There is little water left.	남은 물이 거의 없다.
4-23	more	더 많은	I want more cake.	나는 케이크를 더 많이 원한다.
4-23	enough	충분한	I have enough money for the ticket.	나는 티켓을 살 충분한 돈이 있다.
4-23	some	조금, 약간의	Do you want some juice?	주스 좀 마실래?
4-23	both	둘 다	Both my parents are here.	나의 부모님 두 분 다 여기 계시다.
4-23	all	모든, 모두	All students must be quiet.	모든 학생들은 조용해야 한다.
4-23	most	대부분의	Most of the work is done.	일의 대부분이 끝났다.
4-23	a lot of	많은	We saw a lot of birds.	우리는 많은 새를 보았다.
4-23	any	어느, 어떤	Do you have any questions?	질문이 있니?
4-23	full	가득 찬	The basket is full of apples.	바구니는 사과로 가득 차 있다.
4-23	empty	비어 있는	The box is empty.	그 상자는 비어 있다.
4-23	another	또 하나의	Please give me another chance.	나에게 또 하나의 기회를 주세요.
4-23	only	오직, 겨우	I have only one cookie left.	나에게는 오직 하나의 쿠키만 남아 있다.
4-24	country	나라, 국가	I love my country, Korea.	나는 나의 나라, 한국을 매우 사랑한다.
4-24	world	세계, 세상	There are many places in the world.	세상에는 많은 장소가 있다.
4-24	culture	문화	I want to learn about different cultures.	나는 다양한 문화에 대해 배우고 싶다.
4-24	Korea	한국	Korea is in Asia.	한국은 아시아에 있다.
4-24	China	중국	China is a very big country.	중국은 아주 큰 나라이다.
4-24	America	미국	My uncle lives in America.	나의 삼촌은 미국에 사신다.
4-24	Japan	일본	I want to travel to Japan.	나는 일본으로 여행하고 싶다.
4-24	Canada	캐나다	Canada is famous for maple syrup.	캐나다는 메이플 시럽으로 유명하다.
4-24	grow up	성장하다, 자라다	I will grow up to be a kind person.	나는 자라서 친절한 사람이 될 것이다.
4-24	live	살다	I live in Seoul with my family.	나는 나의 가족과 함께 서울에 산다.
4-24	island	섬	Jeju is a famous island.	제주는 유명한 섬이다.
4-24	town	소도시	I visited a small quiet town.	나는 작고 조용한 소도시를 방문했다.
4-24	city	도시	Seoul is a very busy city.	서울은 매우 바쁜 도시이다.
4-24	village	마을	My grandparents live in a small village.	나의 할아버지와 할머니는 작은 마을에 사신다.
4-24	countryside	시골, 지방	We went to the countryside for a trip.	우리는 여행을 위해 시골에 갔다.
4-24	downtown	시내에	Let's meet downtown this weekend.	이번 주말에 시내에서 만나자.
4-25	zoo	동물원	We go to the zoo to see animals.	우리는 동물들을 보기 위해 동물원에 간다.
4-25	lion	사자	The lion is the king of the jungle.	사자는 정글의 왕이다.
4-25	tiger	호랑이	The tiger has black stripes.	호랑이는 검은 줄무늬를 가지고 있다.
4-25	giraffe	기린	The giraffe has a long neck.	기린은 목이 길다.
4-25	monkey	원숭이	The monkey likes to eat bananas.	원숭이는 바나나 먹는 것을 좋아한다.
4-25	elephant	코끼리	The elephant is a big animal.	코끼리는 큰 동물이다.
4-25	fox	여우	The fox is a smart animal.	여우는 영리한 동물이다.
4-25	dolphin	돌고래	The dolphin can jump very high.	돌고래는 아주 높이 점프할 수 있다.
4-25	jungle	밀림 지대, 정글	We explored the dense jungle.	우리는 빽빽한 정글을 탐험했다.
4-25	wolf	늑대	I heard a wolf howling at night.	나는 밤에 늑대가 우는 소리를 들었다.
4-25	hippo	하마	The hippo stays in the water.	하마는 물 속에 머문다.
4-25	bear	곰	The bear likes to eat honey.	곰은 꿀 먹는 것을 좋아한다.
4-25	cheetah	치타	The cheetah runs very fast.	치타는 매우 빠르게 달린다.
4-25	zebra	얼룩말	The zebra has black and white stripes.	얼룩말은 검은색과 흰색 줄무늬를 가지고 있다.
4-25	panda	판다	The panda eats bamboo.	판다는 대나무를 먹는다.
4-25	bat	박쥐	The bat flies only at night.	박쥐는 밤에만 난다.
4-26	farm	농장	My grandfather works on the farm.	나의 할아버지는 농장에서 일하신다.
4-26	cow	소	The cow gives us milk.	소는 우리에게 우유를 준다.
4-26	horse	말	I like to ride a horse.	나는 말을 타는 것을 좋아한다.
4-26	sheep	양	The sheep is eating grass.	양이 풀을 먹고 있다.
4-26	chicken	닭	We feed the chickens every day.	우리는 매일 닭들에게 먹이를 준다.
4-26	hen	암탉	The hen laid an egg this morning.	암탉이 오늘 아침에 알을 낳았다.
4-26	pig	돼지	The pig is sleeping in the mud.	돼지가 진흙 속에서 자고 있다.
4-26	deer	사슴	We saw a wild deer in the forest.	우리는 숲에서 야생 사슴을 보았다.
4-26	goat	염소	The goat is climbing the rock.	염소가 바위를 오르고 있다.
4-26	duck	오리	The duck is swimming on the pond.	오리가 연못 위에서 수영하고 있다.
4-26	frog	개구리	The frog jumps very high.	개구리는 아주 높이 점프한다.
4-26	mouse	쥐	A small mouse ran into the hole.	작은 쥐가 구멍으로 뛰어 들어갔다.
4-26	mice	(mouse의 복수형) 쥐들	There are three mice under the sofa.	소파 밑에 쥐 세 마리가 있다.
4-26	bug	벌레	I found a green bug on the leaf.	나는 나뭇잎 위에서 초록색 벌레를 발견했다.
4-26	bee	벌	The bee is making honey.	벌이 꿀을 만들고 있다.
4-26	ant	개미	An ant is carrying a piece of food.	개미 한 마리가 먹이 조각을 운반하고 있다.
4-27	market	시장	I buy fresh vegetables at the market.	나는 시장에서 신선한 채소를 산다.
4-27	plastic bag	비닐봉지	I put apples in a plastic bag.	나는 사과를 비닐봉지에 넣는다.
4-27	shopping bag	쇼핑 백, 장바구니	Please bring a shopping bag.	쇼핑 백을 가져와 주세요.
4-27	cart	카트, 수레	I push the cart in the store.	나는 가게에서 카트를 민다.
4-27	shop	가게	I found a nice gift at the shop.	나는 가게에서 좋은 선물을 찾았다.
4-27	customer	손님, 고객	The customer is buying a shirt.	그 손님은 셔츠를 사고 있다.
4-27	clerk	점원	The clerk helped me find the item.	점원이 내가 물건을 찾는 것을 도와주었다.
4-27	sell	팔다	The bakery sells fresh bread.	그 빵집은 신선한 빵을 판다.
4-27	look for	~을 찾다	I will look for my lost wallet.	나는 잃어버린 지갑을 찾을 것이다.
4-27	buy	사다	I want to buy a new toy.	나는 새 장난감을 사고 싶다.
4-27	spend	(돈을) 쓰다	I spend money on books.	나는 책에 돈을 쓴다.
4-27	pay	지불하다	I will pay with cash.	나는 현금으로 지불할 것이다.
4-27	cost	값, 비용	The cost of the pen is 1,000 won.	그 펜의 값은 1,000원이다.
4-27	price	가격	What is the price of this candy?	이 사탕의 가격은 얼마입니까?
4-27	cheap	(값이) 싼	This snack is very cheap.	이 과자는 매우 싸다.
4-27	expensive	비싼	That necklace is too expensive.	저 목걸이는 너무 비싸다.
4-28	fruit	과일	I eat fruit every morning.	나는 매일 아침 과일을 먹는다.
4-28	banana	바나나	A banana is a yellow fruit.	바나나는 노란색 과일이다.
4-28	apple	사과	I like red apples.	나는 빨간 사과를 좋아한다.
4-28	orange	오렌지	I drink orange juice.	나는 오렌지 주스를 마신다.
4-28	lemon	레몬	Lemons are sour.	레몬은 시큼하다.
4-28	grape	포도	I like purple grapes.	나는 보라색 포도를 좋아한다.
4-28	strawberry	딸기	I bought sweet strawberryies.	나는 달콤한 딸기를 샀다.
4-28	watermelon	수박	Watermelon is a summer fruit.	수박은 여름 과일이다.
4-28	vegetable	채소	We should eat more vegetables.	우리는 채소를 더 많이 먹어야 한다.
4-28	tomato	토마토	A tomato is red and round.	토마토는 빨갛고 둥글다.
4-28	carrot	당근	Rabbits eat carrots.	토끼는 당근을 먹는다.
4-28	corn	옥수수	I like roasted corn.	나는 구운 옥수수를 좋아한다.
4-28	onion	양파	Onions can make you cry.	양파는 너를 울게 만들 수 있다.
4-28	garlic	마늘	Garlic has a strong smell.	마늘은 강한 냄새가 난다.
4-28	potato	감자	We make french fries from a potato.	우리는 감자로 감자튀김을 만든다.
4-28	fresh	신선한	I buy fresh fruit at the market.	나는 시장에서 신선한 과일을 산다.
4-29	time	시간	What time is it now?	지금 몇 시니?
4-29	second	초	The light lasts for ten seconds.	빛이 10초 동안 지속된다.
4-29	minute	분	Wait for five minutes.	5분 동안 기다려라.
4-29	hour	한 시간	I study for one hour.	나는 한 시간 동안 공부한다.
4-29	day	하루	There are seven days in a week.	일주일에는 7일이 있다.
4-29	ago	(지금부터) ~전에	I saw him two days ago.	나는 그를 이틀 전에 보았다.
4-29	last	지난, 마지막의	Last week I went camping.	지난주에 나는 캠핑을 갔다.
4-29	when	언제	When will the movie start?	영화는 언제 시작할까?
4-29	before	전에, 앞에	I brush my teeth before bed.	나는 잠자기 전에 양치질을 한다.
4-29	after	후에, 뒤에	We will eat cake after dinner.	우리는 저녁 식사 후에 케이크를 먹을 것이다.
4-29	then	그때	I was playing outside then.	나는 그때 밖에서 놀고 있었다.
4-29	now	지금	We should leave now.	우리는 지금 떠나야 한다.
4-29	early	일찍	I wake up early on weekdays.	나는 평일에 일찍 일어난다.
4-29	late	늦은, 늦게	Don't be late for school.	학교에 늦지 마라.
4-29	busy	바쁜	My mom is busy today.	나의 엄마는 오늘 바쁘시다.
4-29	next	다음의	Next week is my birthday.	다음 주는 나의 생일이다.
4-30	sky	하늘	The sky is clear and blue today.	오늘 하늘은 맑고 파랗다.
4-30	sun	해, 태양	The sun sets in the west.	해는 서쪽으로 진다.
4-30	moon	달	We can see the full moon tonight.	우리는 오늘 밤 보름달을 볼 수 있다.
4-30	star	별	I saw a shooting star.	나는 별똥별을 보았다.
4-30	cloud	구름	The airplane is flying above the clouds.	비행기가 구름 위를 날고 있다.
4-30	shine	빛나다, 반짝이다	The diamonds shine brightly.	다이아몬드가 밝게 빛난다.
4-30	bright	밝은	The light is too bright.	빛이 너무 밝다.
4-30	dark	어두운	It gets dark very fast in winter.	겨울에는 해가 아주 빨리 진다.
4-30	rain	비	The rain stopped this morning.	비가 오늘 아침에 멈췄다.
4-30	snow	눈	I like the soft white snow.	나는 부드러운 하얀 눈을 좋아한다.
4-30	storm	폭풍우	A big storm is coming soon.	큰 폭풍우가 곧 올 것이다.
4-30	fog	안개	The fog made it hard to see the road.	안개 때문에 길을 보기 어려웠다.
4-30	air	공기	We need clean air to breathe.	우리는 숨 쉬기 위해 깨끗한 공기가 필요하다.
4-30	light	빛	The sun gives off warm light.	태양은 따뜻한 빛을 내뿜는다.
4-30	earth	지구	The earth is round.	지구는 둥글다.
4-30	space	우주	There are many stars in outer space.	외부 우주에는 많은 별들이 있다.

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
5-1|look at|~을 보다|look at the stars|별을 바라보다
5-1|look for|~을 찾다|look for jeans|청바지를 찾다
5-1|look like|~을 닮다|look like his father|그의 아버지처럼 보이다
5-1|look after|~을 돌보다|look after my cat|나의 고양이를 돌보다

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
5-40|bored|[형] 지루한|feel bored|지루함을 느끼다
5-40|boring|[형] 지루한|boring class|지루한 수업
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

  `;
  // 👆 여기까지가 네가 앞으로 수정·추가할 영역

  // 파싱해서 전역 객체에 올리기
  window.WORD_DB = buildDB(RAW_WORDS);

})();

