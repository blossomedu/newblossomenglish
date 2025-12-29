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

4-1|father|아버지|This is my father.|이 분은 나의 아버지이다.,
4-1|dad|아빠|I like my dad.|나는 나의 아빠를 좋아한다.,
4-1|mother|어머니|She is my mother.|그녀는 나의 어머니이다.,
4-1|mom|엄마|My mom is pretty.|나의 엄마는 예쁘다.,
4-1|brother|남자 형제|He is my brother.|그는 나의 남자 형제이다.,
4-1|sister|여자 형제|I have a sister.|나는 여자 형제가 한 명 있다.,
4-1|family|가족|We love our family.|우리는 우리의 가족을 사랑한다.,
4-1|parents|부모|My parents are here.|나의 부모님들이 여기에 계신다.,
4-1|daughter|딸|She is my daughter.|그녀는 나의 딸이다.,
4-1|son|아들|I am a good son.|나는 착한 아들이다.,
4-1|grandparents|조부모|I call my grandparents.|나는 나의 조부모님께 전화한다.,
4-1|grandfather|할아버지|My grandfather is old.|나의 할아버지는 나이가 많으시다.,
4-1|grandmother|할머니|I see my grandmother.|나는 나의 할머니를 뵌다.,
4-1|uncle|삼촌|My uncle has a car.|나의 삼촌은 차를 한 대 가지고 계신다.,
4-1|aunt|이모, 고모|I play with my aunt.|나는 나의 이모/고모와 함께 논다.,
4-1|cousin|사촌|He is my cousin.|그는 나의 사촌이다.,
4-2|Sunday|일요일|Today is Sunday.|오늘은 일요일이다.,
4-2|Monday|월요일|I go to school on Monday.|나는 월요일에 학교에 간다.,
4-2|Tuesday|화요일|We have P.E. on Tuesday.|우리는 화요일에 체육 수업이 있다.,
4-2|Wednesday|수요일|I eat lunch on Wednesday.|나는 수요일에 점심을 먹는다.,
4-2|Thursday|목요일|Do you like Thursday?|너는 목요일을 좋아하니?,
4-2|Friday|금요일|Let's meet next Friday.|다음 주 금요일에 만나자.,
4-2|Saturday|토요일|We play soccer on Saturday.|우리는 토요일에 축구를 한다.,
4-2|today|오늘|What is the date today?|오늘 날짜는 언제니?,
4-2|morning|아침|I eat breakfast in the morning.|나는 아침에 아침밥을 먹는다.,
4-2|afternoon|오후|Let's play in the afternoon.|오후에 놀자.,
4-2|evening|저녁|I watch TV in the evening.|나는 저녁에 TV를 본다.,
4-2|night|밤|I sleep at night.|나는 밤에 잠을 잔다.,
4-2|tonight|오늘밤|I will study tonight.|나는 오늘밤에 공부할 것이다.,
4-2|yesterday|어제|I was sick yesterday.|나는 어제 아팠다.,
4-2|tomorrow|내일|We will meet tomorrow.|우리는 내일 만날 것이다.,
4-2|week|일주일, 주|There are seven days in a week.|한 주에는 7일이 있다.,
4-3|weather|날씨|The weather is nice today.|오늘 날씨는 좋다.,
4-3|sunny|화창한|It is a sunny day.|오늘은 화창한 날이다.,
4-3|cloudy|구름이 낀|It is cloudy now.|지금은 구름이 끼어 있다.,
4-3|rainy|비가 오는|Don't forget your umbrella on a rainy day.|비 오는 날에 우산을 잊지 마라.,
4-3|snowy|눈이 오는|Let's make a snowman on a snowy day.|눈 오는 날에 눈사람을 만들자.,
4-3|foggy|안개가 낀|It is foggy outside.|밖은 안개가 끼어 있다.,
4-3|windy|바람이 부는|The windy day is cold.|바람 부는 날은 춥다.,
4-3|warm|따뜻한|The room is warm.|방이 따뜻하다.,
4-3|cold|추운|I feel cold now.|나는 지금 춥다.,
4-3|cool|시원한|The drink is cool.|음료수가 시원하다.,
4-3|hot|더운|It is very hot outside.|밖이 매우 덥다.,
4-3|season|계절|What is your favorite season?|네가 가장 좋아하는 계절은 무엇이니?,
4-3|spring|봄|I like spring flowers.|나는 봄꽃을 좋아한다.,
4-3|summer|여름|Let's swim in the summer.|여름에 수영하자.,
4-3|fall|가을|Fall is a beautiful season.|가을은 아름다운 계절이다.,
4-3|winter|겨울|Winter is very cold.|겨울은 매우 춥다.,
4-4|taste|맛이 나다, 맛보다|I taste the sweet cake.|나는 달콤한 케이크 맛을 본다.,
4-4|sweet|달콤한|The candy is sweet.|그 사탕은 달콤하다.,
4-4|sour|신맛이 나는|I don't like sour lemons.|나는 신 레몬을 좋아하지 않는다.,
4-4|feel|느끼다|I feel happy today.|나는 오늘 행복함을 느낀다.,
4-4|wet|젖은, 축축한|My shoes are wet.|나의 신발이 젖었다.,
4-4|dry|마른, 건조한|Please use a dry towel.|마른 수건을 사용해 주세요.,
4-4|soft|부드러운|The pillow is very soft.|그 베개는 매우 부드럽다.,
4-4|hard|딱딱한|The rock is very hard.|그 돌은 매우 딱딱하다.,
4-4|hear|듣다|Can you hear the music?|음악을 들을 수 있니?,
4-4|look|보이다, 보다|You look happy.|너는 행복해 보인다.,
4-4|smell|냄새가 나다, 냄새 맡다|I can smell the food.|나는 그 음식 냄새를 맡을 수 있다.,
4-4|delicious|맛있는|This cake is delicious.|이 케이크는 맛있다.,
4-4|sound|~하게 들리다|It sounds like a bird.|새 소리처럼 들린다.,
4-4|loud|시끄러운|The music is too loud.|음악이 너무 시끄럽다.,
4-4|quiet|조용한|Please be quiet.|조용히 해 주세요.,
4-4|nice|좋은|Have a nice day.|좋은 하루 보내세요.,
4-5|number|숫자|What is your favorite number?|네가 가장 좋아하는 숫자는 무엇이니?,
4-5|one|1, 하나|I have one dog.|나는 개를 한 마리 가지고 있다.,
4-5|two|2, 둘|We have two brothers.|우리는 두 명의 남자 형제가 있다.,
4-5|three|3, 셋|I eat three cookies.|나는 쿠키 세 개를 먹는다.,
4-5|four|4, 넷|A cat has four legs.|고양이는 다리가 네 개 있다.,
4-5|five|5, 다섯|I count to five.|나는 다섯까지 센다.,
4-5|six|6, 여섯|There are six chairs.|의자가 여섯 개 있다.,
4-5|seven|7, 일곱|Today is day seven.|오늘은 일곱 번째 날이다.,
4-5|eight|8, 여덟|I have eight pencils.|나는 연필을 여덟 자루 가지고 있다.,
4-5|nine|9, 아홉|He is nine years old.|그는 아홉 살이다.,
4-5|ten|10, 열|Let's count to ten.|열까지 세어 보자.,
4-5|eleven|11, 열하나|I see eleven birds.|나는 새 열한 마리를 본다.,
4-5|twelve|12, 열 둘|There are twelve months.|열두 달이 있다.,
4-5|thirteen|13, 열 셋|My sister is thirteen.|나의 여동생은 열세 살이다.,
4-5|fourteen|14, 열 넷|I wear fourteen stickers.|나는 스티커 열네 개를 붙인다.,
4-5|fifteen|15, 열 다섯|I can see fifteen cars.|나는 차 열다섯 대를 볼 수 있다.,
4-6|how|얼마나, 어떻게|How old are you?|너는 나이가 얼마나 되니?,
4-6|long|긴|That ruler is long.|저 자는 길다.,
4-6|quick|빠른|Be quick!|빠르게 해라!,
4-6|large|큰, 넓은|My school has a large gym.|나의 학교는 넓은 체육관이 있다.,
4-6|big|큰|That house is very big.|저 집은 매우 크다.,
4-6|small|작은|I have a small pencil.|나는 작은 연필을 가지고 있다.,
4-6|heavy|무거운|This box is heavy.|이 상자는 무겁다.,
4-6|light|가벼운|My bag is light.|나의 가방은 가볍다.,
4-6|dirty|더러운|The floor is dirty.|바닥이 더럽다.,
4-6|clean|깨끗한|My hands are clean.|나의 손은 깨끗하다.,
4-6|high|높은|The bird flies high.|그 새는 높이 난다.,
4-6|low|낮은|The fence is low.|울타리가 낮다.,
4-6|wide|넓은|The road is wide.|그 도로는 넓다.,
4-6|narrow|좁은|This street is narrow.|이 길은 좁다.,
4-6|thick|두꺼운|This book is thick.|이 책은 두껍다.,
4-6|thin|얇은|I wear a thin jacket.|나는 얇은 재킷을 입는다.,
4-7|body|몸|Take care of your body.|너의 몸을 돌보아라.,
4-7|muscle|근육|Running builds your muscle.|달리기는 너의 근육을 만든다.,
4-7|bone|뼈|My leg bone is strong.|나의 다리 뼈는 튼튼하다.,
4-7|foot|발|I wear shoes on my foot.|나는 나의 발에 신발을 신는다.,
4-7|feet|발 (복수)|I have two feet.|나는 두 발을 가지고 있다.,
4-7|toe|발가락|I wiggle my toe.|나는 나의 발가락을 꼼지락거린다.,
4-7|hand|손|Wash your hand.|너의 손을 씻어라.,
4-7|finger|손가락|I have ten fingers.|나는 열 개의 손가락이 있다.,
4-7|heart|심장|My heart beats fast.|나의 심장이 빠르게 뛴다.,
4-7|brain|뇌|The brain helps me think.|뇌는 내가 생각하는 것을 돕는다.,
4-7|shoulder|어깨|He taps my shoulder.|그는 나의 어깨를 두드린다.,
4-7|back|등|I carry a bag on my back.|나는 나의 등에 가방을 멘다.,
4-7|leg|다리|I run with my leg.|나는 나의 다리로 달린다.,
4-7|knee|무릎|He fell on his knee.|그는 무릎을 꿇고 넘어졌다.,
4-7|arm|팔|I hold the bag with my arm.|나는 나의 팔로 가방을 잡는다.,
4-7|elbow|팔꿈치|I hurt my elbow.|나는 나의 팔꿈치를 다쳤다.,
4-8|face|얼굴|I wash my face.|나는 나의 얼굴을 씻는다.,
4-8|cheek|볼, 뺨|My cheek is soft.|나의 볼은 부드럽다.,
4-8|chin|턱|He has a big chin.|그는 큰 턱을 가지고 있다.,
4-8|skin|피부|My skin is dry.|나의 피부는 건조하다.,
4-8|head|머리|I wash my head.|나는 나의 머리를 감는다.,
4-8|hair|머리카락|My hair is black.|나의 머리카락은 검은색이다.,
4-8|neck|목|I wear a scarf around my neck.|나는 나의 목에 스카프를 두른다.,
4-8|throat|목구멍|I have a sore throat.|나는 목구멍이 아프다.,
4-8|eye|눈|I have two eyes.|나는 두 개의 눈이 있다.,
4-8|eyebrow|눈썹|My eyebrow is thick.|나의 눈썹은 두껍다.,
4-8|ear|귀|I hear with my ear.|나는 나의 귀로 듣는다.,
4-8|nose|코|I smell with my nose.|나는 나의 코로 냄새를 맡는다.,
4-8|mouth|입|I open my mouth.|나는 나의 입을 벌린다.,
4-8|lip|입술|My lips are red.|나의 입술은 빨갛다.,
4-8|tooth|치아, 이|I brush my tooth.|나는 나의 이를 닦는다.,
4-8|teeth|tooth의 복수형|I brush my teeth.|나는 나의 이들을 닦는다.,
4-9|good|좋은|This movie is good.|이 영화는 좋다.,
4-9|bad|나쁜|He is a bad person.|그는 나쁜 사람이다.,
4-9|sad|슬픈|I feel sad today.|나는 오늘 슬프다.,
4-9|happy|행복한|I am happy to see you.|나는 너를 만나서 행복하다.,
4-9|lonely|외로운|The dog looks lonely.|그 개는 외로워 보인다.,
4-9|angry|화난|Don't be angry with me.|나에게 화내지 마라.,
4-9|tired|피곤한|I am tired after school.|나는 방과 후에 피곤하다.,
4-9|nervous|불안해하는|I feel nervous before the test.|나는 시험 전에 불안해한다.,
4-9|upset|속상한, 짜증 난|She is upset about the game.|그녀는 그 게임 때문에 속상해한다.,
4-9|glad|기쁜|I am glad you came.|나는 네가 와서 기쁘다.,
4-9|mad|몹시 화난|He is mad at his brother.|그는 그의 남동생에게 몹시 화가 났다.,
4-9|worried|걱정하는|My mom is worried about me.|나의 엄마는 나에 대해 걱정하신다.,
4-9|scared|무서워하는|I am scared of the dark.|나는 어둠을 무서워한다.,
4-9|surprised|놀란|I was surprised by the noise.|나는 그 소음에 놀랐다.,
4-9|excited|신이 난|The kids are excited to play.|아이들은 놀 생각에 신이 났다.,
4-9|bored|지루해 하는|I am bored with this lesson.|나는 이 수업이 지루하다.,
4-10|house|집|I live in a big house.|나는 큰 집에 산다.,
4-10|bedroom|침실|I sleep in my bedroom.|나는 나의 침실에서 잠을 잔다.,
4-10|living room|거실|We watch TV in the living room.|우리는 거실에서 TV를 본다.,
4-10|bathroom|욕실, 화장실|I wash my hands in the bathroom.|나는 욕실에서 손을 씻는다.,
4-10|garden|정원|We have many flowers in the garden.|우리는 정원에 많은 꽃을 가지고 있다.,
4-10|backyard|뒷마당|I play soccer in the backyard.|나는 뒷마당에서 축구를 한다.,
4-10|kitchen|부엌|My mom is in the kitchen.|나의 엄마는 부엌에 계신다.,
4-10|where|어디에|Where is my book?|나의 책은 어디에 있니?,
4-10|gate|대문|Open the gate, please.|대문을 열어 주세요.,
4-10|bell|종, 초인종|Ring the bell to enter.|들어오려면 초인종을 눌러라.,
4-10|door|문|Close the door.|문을 닫아라.,
4-10|roof|지붕|The rain falls on the roof.|비가 지붕 위에 떨어진다.,
4-10|sofa|소파|I sit on the sofa.|나는 소파에 앉는다.,
4-10|table|탁자|Put the pen on the table.|펜을 탁자 위에 놓아라.,
4-10|carpet|카펫|The carpet is soft.|카펫이 부드럽다.,
4-10|stairs|계단|I walk up the stairs.|나는 계단을 걸어 올라간다.,
4-11|raise|키우다, 기르다|I raise a dog.|나는 개를 키운다.,
4-11|pet|애완동물|I have a cute pet.|나는 귀여운 애완동물이 있다.,
4-11|animal|동물|A dog is an animal.|개는 동물이다.,
4-11|dog|개|I play with my dog.|나는 나의 개와 함께 논다.,
4-11|puppy|강아지|The puppy is small.|그 강아지는 작다.,
4-11|cat|고양이|My cat likes to sleep.|나의 고양이는 자는 것을 좋아한다.,
4-11|kitten|새끼 고양이|The kitten is tiny.|그 새끼 고양이는 아주 작다.,
4-11|turtle|거북이|The turtle moves slowly.|거북이는 느리게 움직인다.,
4-11|feed|먹이를 주다|I feed my cat.|나는 나의 고양이에게 먹이를 준다.,
4-11|cage|우리, 새장|The bird is in the cage.|새가 새장 안에 있다.,
4-11|fish|물고기|I have a fish tank.|나는 어항을 가지고 있다.,
4-11|rabbit|토끼|A rabbit eats carrots.|토끼는 당근을 먹는다.,
4-11|hamster|햄스터|My hamster is running.|나의 햄스터가 달리고 있다.,
4-11|snake|뱀|A snake is long.|뱀은 길다.,
4-11|bird|새|A bird is singing.|새가 노래하고 있다.,
4-11|spider|거미|A spider has eight legs.|거미는 여덟 개의 다리를 가지고 있다.,
4-12|color|색깔, 색칠하다|What is your favorite color?|네가 가장 좋아하는 색깔은 무엇이니?,
4-12|favorite|가장 좋아하는|My favorite color is red.|내가 가장 좋아하는 색깔은 빨간색이다.,
4-12|red|빨간색|The apple is red.|그 사과는 빨간색이다.,
4-12|orange|주황색|I eat an orange.|나는 주황색 오렌지를 먹는다.,
4-12|yellow|노란색|I draw a yellow sun.|나는 노란색 태양을 그린다.,
4-12|green|초록색|The grass is green.|잔디는 초록색이다.,
4-12|blue|파란색|The sky is blue.|하늘은 파란색이다.,
4-12|purple|보라색|She wears a purple hat.|그녀는 보라색 모자를 쓴다.,
4-12|black|검은색|My dog is black.|나의 개는 검은색이다.,
4-12|white|흰색|The cloud is white.|구름은 흰색이다.,
4-12|brown|갈색|My shoes are brown.|나의 신발은 갈색이다.,
4-12|gray|회색|The rock is gray.|그 돌은 회색이다.,
4-12|pink|분홍색|I like pink flowers.|나는 분홍색 꽃을 좋아한다.,
4-12|gold|금색|I found a gold coin.|나는 금색 동전을 찾았다.,
4-12|silver|은색|The ring is silver.|그 반지는 은색이다.,
4-12|paint|칠하다, 그리다|Let's paint the wall blue.|벽을 파란색으로 칠하자.,
4-13|age|나이|What is your age?|너의 나이는 몇 살이니?,
4-13|who|누구|Who is that boy?|저 소년은 누구니?,
4-13|young|어린, 젊은|She is a young student.|그녀는 어린 학생이다.,
4-13|old|늙은, 나이가 많은|My grandfather is old.|나의 할아버지는 나이가 많으시다.,
4-13|child|아이|I am a happy child.|나는 행복한 아이이다.,
4-13|adult|성인, 어른|My parents are adults.|나의 부모님은 어른이다.,
4-13|boy|소년, 남자아이|He is a clever boy.|그는 똑똑한 소년이다.,
4-13|girl|소녀, 여자아이|She is a nice girl.|그녀는 착한 소녀이다.,
4-13|man|(성인) 남자|That man is tall.|저 남자는 키가 크다.,
4-13|woman|(성인) 여자|That woman is a teacher.|저 여자는 선생님이다.,
4-13|gentleman|신사|He is a kind gentleman.|그는 친절한 신사이다.,
4-13|lady|숙녀, 여성|She is a beautiful lady.|그녀는 아름다운 숙녀이다.,
4-13|Mr.|(남성의 성, 이름 앞에) ~씨|Mr. Kim is my teacher.|김 씨는 나의 선생님이다.,
4-13|Ms.|(여성의 성, 이름 앞에) ~씨|Ms. Park works here.|박 씨는 여기서 일한다.,
4-13|Mrs.|(결혼한 여성) ~부인|Mrs. Lee is my friend's mom.|이 부인은 나의 친구 엄마다.,
4-13|know|알다|I know the answer.|나는 그 답을 안다.,
4-14|want|원하다|I want a new book.|나는 새 책을 원한다.,
4-14|hope|희망, 바라다|I hope to see you soon.|나는 곧 너를 보기를 바란다.,
4-14|dream|꿈, 꿈꾸다|I have a great dream.|나는 대단한 꿈을 가지고 있다.,
4-14|become|~가 되다|I want to become a pilot.|나는 조종사가 되고 싶다.,
4-14|doctor|의사|The doctor helps sick people.|의사는 아픈 사람들을 돕는다.,
4-14|nurse|간호사|The nurse is very kind.|간호사는 매우 친절하다.,
4-14|scientist|과학자|A scientist studies nature.|과학자는 자연을 연구한다.,
4-14|firefighter|소방관|A firefighter stops the fire.|소방관은 불을 끈다.,
4-14|job|직업|What is your job?|너의 직업은 무엇이니?,
4-14|work|일하다|My parents work hard.|나의 부모님은 열심히 일하신다.,
4-14|actor|배우|He is a famous actor.|그는 유명한 배우이다.,
4-14|artist|예술가, 화가|My friend is a great artist.|나의 친구는 훌륭한 예술가이다.,
4-14|teacher|선생님|My teacher is smart.|나의 선생님은 똑똑하시다.,
4-14|police officer|경찰관|The police officer is driving a car.|경찰관이 차를 운전하고 있다.,
4-14|pilot|조종사|A pilot flies a plane.|조종사는 비행기를 조종한다.,
4-14|engineer|기술자|My uncle is an engineer.|나의 삼촌은 기술자이다.,
4-15|handsome|잘생긴|My brother is very handsome.|나의 오빠는 아주 잘생겼다.,
4-15|ugly|못생긴|I saw an ugly duck.|나는 못생긴 오리를 보았다.,
4-15|tall|키가 큰|The basketball player is tall.|그 농구 선수는 키가 크다.,
4-15|short|키가 작은|I am short for my age.|나는 내 나이에 비해 키가 작다.,
4-15|fat|살찐|The cat is getting fat.|그 고양이는 살이 찌고 있다.,
4-15|slim|날씬한|She has a slim figure.|그녀는 날씬한 몸매를 가지고 있다.,
4-15|strong|강한|He is very strong.|그는 매우 강하다.,
4-15|weak|약한|I feel weak when I am sick.|나는 아플 때 약하게 느낀다.,
4-15|beautiful|아름다운|The flower is beautiful.|그 꽃은 아름답다.,
4-15|wonderful|아주 멋진|We had a wonderful time.|우리는 아주 멋진 시간을 보냈다.,
4-15|pretty|예쁜|The doll is very pretty.|그 인형은 매우 예쁘다.,
4-15|cute|귀여운|The puppy is so cute.|그 강아지는 정말 귀엽다.,
4-15|hungry|배고픈|I am hungry now.|나는 지금 배고프다.,
4-15|thirsty|목마른|I am thirsty after running.|나는 달린 후에 목마르다.,
4-15|honest|정직한|He is an honest person.|그는 정직한 사람이다.,
4-15|curious|호기심이 많은|I am curious about the world.|나는 세상에 대해 호기심이 많다.,
4-16|clever|영리한|He is a clever student.|그는 영리한 학생이다.,
4-16|smart|똑똑한|My teacher is very smart.|나의 선생님은 아주 똑똑하시다.,
4-16|wise|현명한|My grandmother is wise.|나의 할머니는 현명하시다.,
4-16|stupid|어리석은|Don't do stupid things.|어리석은 짓을 하지 마라.,
4-16|foolish|어리석은|It was a foolish mistake.|그것은 어리석은 실수였다.,
4-16|calm|차분한|Be calm before the test.|시험 전에 차분하게 있어라.,
4-16|shy|수줍어하는|She is a little shy.|그녀는 조금 수줍어한다.,
4-16|funny|재미있는|That movie is very funny.|저 영화는 매우 재미있다.,
4-16|polite|예의 바른|He is a very polite boy.|그는 아주 예의 바른 소년이다.,
4-16|rude|예의 없는|Don't be rude to others.|다른 사람들에게 예의 없게 굴지 마라.,
4-16|gentle|상냥한, 순한|The cat is very gentle.|그 고양이는 매우 순하다.,
4-16|kind|친절한|She is a kind person.|그녀는 친절한 사람이다.,
4-16|selfish|이기적인|Don't be selfish with your toys.|너의 장난감에 대해 이기적으로 굴지 마라.,
4-16|brave|용감한|The brave knight saved the princess.|그 용감한 기사가 공주를 구했다.,
4-16|careful|주의 깊은|Be careful when you cross the road.|길을 건널 때 주의 깊게 해라.,
4-16|lazy|게으른|The lazy boy didn't clean his room.|그 게으른 소년은 그의 방을 청소하지 않았다.,
4-17|bring|가져오다|Please bring a gift.|선물을 가져와 주세요.,
4-17|invite|초대하다|I will invite my friends.|나는 나의 친구들을 초대할 것이다.,
4-17|need|필요하다|I need a cake for the party.|나는 파티를 위해 케이크가 필요하다.,
4-17|snack|간식|We eat a lot of snacks.|우리는 많은 간식을 먹는다.,
4-17|balloon|풍선|The balloons are red and blue.|풍선들은 빨갛고 파랗다.,
4-17|toy|장난감|I play with my new toy.|나는 나의 새 장난감으로 논다.,
4-17|birthday|생일|Today is my birthday.|오늘은 나의 생일이다.,
4-17|party|파티|We have a fun party.|우리는 재미있는 파티를 한다.,
4-17|make|만들다|I make a card for my mom.|나는 나의 엄마를 위해 카드를 만든다.,
4-17|give|주다|I give a gift to my friend.|나는 나의 친구에게 선물을 준다.,
4-17|congratulate|축하하다|Congratulate him on his win.|그의 승리를 축하해 줘라.,
4-17|card|카드|I wrote a letter on the card.|나는 카드에 편지를 썼다.,
4-17|cake|케이크|We eat the cake together.|우리는 케이크를 함께 먹는다.,
4-17|doll|인형|My sister loves her new doll.|나의 여동생은 그녀의 새 인형을 매우 좋아한다.,
4-17|gift|선물|This gift is for you.|이 선물은 너를 위한 것이다.,
4-17|present|선물|I got a nice present.|나는 멋진 선물을 받았다.,
4-18|what|무엇|What is your name?|너의 이름은 무엇이니?,
4-18|year|해, 년|This year is 2025.|올해는 2025년이다.,
4-18|date|날짜|What is the date today?|오늘 날짜는 언제니?,
4-18|month|달, 월|There are twelve months in a year.|1년은 열두 달이다.,
4-18|January|1월|My birthday is in January.|나의 생일은 1월이다.,
4-18|February|2월|February is the shortest month.|2월은 가장 짧은 달이다.,
4-18|March|3월|School starts in March.|학교는 3월에 시작한다.,
4-18|April|4월|I like the weather in April.|나는 4월의 날씨를 좋아한다.,
4-18|May|5월|We have Children's Day in May.|우리는 5월에 어린이날이 있다.,
4-18|June|6월|We go swimming in June.|우리는 6월에 수영하러 간다.,
4-18|July|7월|July is a hot month.|7월은 더운 달이다.,
4-18|August|8월|We have summer vacation in August.|우리는 8월에 여름 방학이 있다.,
4-18|September|9월|School starts again in September.|학교는 9월에 다시 시작한다.,
4-18|October|10월|I see red leaves in October.|나는 10월에 빨간 나뭇잎을 본다.,
4-18|November|11월|It starts getting cold in November.|11월에 추워지기 시작한다.,
4-18|December|12월|We celebrate Christmas in December.|우리는 12월에 크리스마스를 기념한다.,
4-19|wake up|잠에서 깨다|I wake up at 7 o'clock.|나는 7시에 잠에서 깬다.,
4-19|get up|일어나다|I get up from my bed.|나는 나의 침대에서 일어난다.,
4-19|go to school|학교에 가다|I go to school by bus.|나는 버스를 타고 학교에 간다.,
4-19|come home|집에 오다|I come home after school.|나는 방과 후에 집에 온다.,
4-19|take a shower|샤워를 하다|I take a shower in the morning.|나는 아침에 샤워를 한다.,
4-19|wash hands|손을 씻다|Always wash hands before eating.|먹기 전에 항상 손을 씻어라.,
4-19|brush teeth|양치질을 하다|I brush teeth twice a day.|나는 하루에 두 번 양치질을 한다.,
4-19|go to bed|잠자리에 들다|I go to bed at ten.|나는 10시에 잠자리에 든다.,
4-19|read a book|책을 읽다|I read a book every night.|나는 매일 밤 책을 읽는다.,
4-19|keep a diary|일기를 쓰다|I keep a diary about my day.|나는 나의 하루에 대해 일기를 쓴다.,
4-19|watch television|텔레비전을 보다|We watch television in the living room.|우리는 거실에서 텔레비전을 본다.,
4-19|cook|요리하다|My dad likes to cook.|나의 아빠는 요리하는 것을 좋아하신다.,
4-19|take a bath|목욕하다|I take a bath on Sunday.|나는 일요일에 목욕한다.,
4-19|rest|쉬다|You should rest when you are tired.|너는 피곤할 때 쉬어야 한다.,
4-19|do homework|숙제를 하다|I must do homework now.|나는 지금 숙제를 해야 한다.,
4-19|soon|곧|I will finish soon.|나는 곧 끝낼 것이다.,
4-20|go|가다|I go to the park.|나는 공원에 간다.,
4-20|build|짓다|They will build a new school.|그들은 새 학교를 지을 것이다.,
4-20|company|회사|My father works at a company.|나의 아버지는 회사에서 일하신다.,
4-20|office|사무실|The doctor is in his office.|의사는 그의 사무실에 있다.,
4-20|post office|우체국|I send a letter at the post office.|나는 우체국에서 편지를 보낸다.,
4-20|bank|은행|I save money in the bank.|나는 은행에 돈을 저금한다.,
4-20|store|가게|Let's buy some candy at the store.|가게에서 사탕을 좀 사자.,
4-20|church|교회|We go to church on Sunday.|우리는 일요일에 교회에 간다.,
4-20|place|장소|This is a beautiful place.|이곳은 아름다운 장소이다.,
4-20|library|도서관|I read books in the library.|나는 도서관에서 책을 읽는다.,
4-20|bookstore|서점|I buy a comic book at the bookstore.|나는 서점에서 만화책을 산다.,
4-20|bakery|빵집|I smell bread from the bakery.|나는 빵집에서 빵 냄새를 맡는다.,
4-20|supermarket|슈퍼마켓|My mom goes to the supermarket.|나의 엄마는 슈퍼마켓에 가신다.,
4-20|restaurant|식당|We eat dinner at the restaurant.|우리는 식당에서 저녁을 먹는다.,
4-20|café|카페|I drink juice at the café.|나는 카페에서 주스를 마신다.,
4-20|department store|백화점|I bought a shirt at the department store.|나는 백화점에서 셔츠를 샀다.,
4-21|come|오다|Come to the park with me.|나랑 같이 공원에 와라.,
4-21|jump|뛰다, 점프하다|The frog can jump high.|개구리는 높이 뛸 수 있다.,
4-21|run|달리다|I run in the morning.|나는 아침에 달린다.,
4-21|sit|앉다|Sit here, please.|여기에 앉아 주세요.,
4-21|wait|기다리다|Wait for me at the bus stop.|버스 정류장에서 나를 기다려라.,
4-21|sleep|잠자다|I sleep for 8 hours.|나는 8시간 동안 잠을 잔다.,
4-21|move|움직이다|Please move the chair.|의자를 움직여 주세요.,
4-21|put|놓다, 두다|Put the toys in the box.|장난감을 상자 안에 놓아라.,
4-21|do|하다|I do my homework every day.|나는 매일 숙제를 한다.,
4-21|cut|자르다|Cut the paper with scissors.|가위로 종이를 잘라라.,
4-21|drop|떨어뜨리다|Be careful not to drop the glass.|유리잔을 떨어뜨리지 않도록 조심해라.,
4-21|forget|잊다|Don't forget my name.|나의 이름을 잊지 마라.,
4-21|open|열다|Open the window for fresh air.|신선한 공기를 위해 창문을 열어라.,
4-21|close|닫다|Close the door quietly.|문을 조용히 닫아라.,
4-21|blow|불다|I blow out the candle.|나는 촛불을 분다.,
4-21|show|보여주다|Show me your new pencil.|너의 새 연필을 나에게 보여 줘.,
4-22|park|공원|I play soccer in the park.|나는 공원에서 축구를 한다.,
4-22|field|들판|We saw many flowers in the field.|우리는 들판에서 많은 꽃을 보았다.,
4-22|ground|땅|The ball rolled on the ground.|공이 땅 위에서 굴러갔다.,
4-22|grass|풀, 잔디|We sit on the soft grass.|우리는 부드러운 잔디 위에 앉는다.,
4-22|sand|모래|I build a castle with sand.|나는 모래로 성을 만든다.,
4-22|bench|벤치|Let's sit on the bench.|벤치에 앉자.,
4-22|flower|꽃|This flower smells sweet.|이 꽃은 달콤한 냄새가 난다.,
4-22|rose|장미|The red rose is beautiful.|빨간 장미는 아름답다.,
4-22|find|찾다|I need to find my lost key.|나는 잃어버린 열쇠를 찾아야 한다.,
4-22|ride|타다|Can you ride a bike?|너는 자전거를 탈 수 있니?,
4-22|bicycle|자전거|I have a new bicycle.|나는 새 자전거를 가지고 있다.,
4-22|jump rope|줄넘기, 줄넘기를 하다|We jump rope during break time.|우리는 쉬는 시간에 줄넘기를 한다.,
4-22|camera|카메라|I take pictures with my camera.|나는 나의 카메라로 사진을 찍는다.,
4-22|map|지도|Look at the map to find the way.|길을 찾기 위해 지도를 보아라.,
4-22|stone|돌|I picked up a small stone.|나는 작은 돌 하나를 주웠다.,
4-22|plant|식물|My mom waters the plant.|나의 엄마는 식물에 물을 주신다.,
4-23|many|(수가) 많은|There are many people here.|여기에 많은 사람들이 있다.,
4-23|much|(양이) 많은|I don't have much time.|나는 시간이 많지 않다.,
4-23|few|(수가) 거의 없는|He has few friends.|그는 친구가 거의 없다.,
4-23|little|(양이) 거의 없는|There is little water left.|남은 물이 거의 없다.,
4-23|more|더 많은|I want more cake.|나는 케이크를 더 많이 원한다.,
4-23|enough|충분한|I have enough money for the ticket.|나는 티켓을 살 충분한 돈이 있다.,
4-23|some|조금, 약간의|Do you want some juice?|주스 좀 마실래?,
4-23|both|둘 다|Both my parents are here.|나의 부모님 두 분 다 여기 계시다.,
4-23|all|모든, 모두|All students must be quiet.|모든 학생들은 조용해야 한다.,
4-23|most|대부분의|Most of the work is done.|일의 대부분이 끝났다.,
4-23|a lot of|많은|We saw a lot of birds.|우리는 많은 새를 보았다.,
4-23|any|어느, 어떤|Do you have any questions?|질문이 있니?,
4-23|full|가득 찬|The basket is full of apples.|바구니는 사과로 가득 차 있다.,
4-23|empty|비어 있는|The box is empty.|그 상자는 비어 있다.,
4-23|another|또 하나의|Please give me another chance.|나에게 또 하나의 기회를 주세요.,
4-23|only|오직, 겨우|I have only one cookie left.|나에게는 오직 하나의 쿠키만 남아 있다.,
4-24|country|나라, 국가|I love my country, Korea.|나는 나의 나라, 한국을 매우 사랑한다.,
4-24|world|세계, 세상|There are many places in the world.|세상에는 많은 장소가 있다.,
4-24|culture|문화|I want to learn about different cultures.|나는 다양한 문화에 대해 배우고 싶다.,
4-24|Korea|한국|Korea is in Asia.|한국은 아시아에 있다.,
4-24|China|중국|China is a very big country.|중국은 아주 큰 나라이다.,
4-24|America|미국|My uncle lives in America.|나의 삼촌은 미국에 사신다.,
4-24|Japan|일본|I want to travel to Japan.|나는 일본으로 여행하고 싶다.,
4-24|Canada|캐나다|Canada is famous for maple syrup.|캐나다는 메이플 시럽으로 유명하다.,
4-24|grow up|성장하다, 자라다|I will grow up to be a kind person.|나는 자라서 친절한 사람이 될 것이다.,
4-24|live|살다|I live in Seoul with my family.|나는 나의 가족과 함께 서울에 산다.,
4-24|island|섬|Jeju is a famous island.|제주는 유명한 섬이다.,
4-24|town|소도시|I visited a small quiet town.|나는 작고 조용한 소도시를 방문했다.,
4-24|city|도시|Seoul is a very busy city.|서울은 매우 바쁜 도시이다.,
4-24|village|마을|My grandparents live in a small village.|나의 할아버지와 할머니는 작은 마을에 사신다.,
4-24|countryside|시골, 지방|We went to the countryside for a trip.|우리는 여행을 위해 시골에 갔다.,
4-24|downtown|시내에|Let's meet downtown this weekend.|이번 주말에 시내에서 만나자.,
4-25|zoo|동물원|We go to the zoo to see animals.|우리는 동물들을 보기 위해 동물원에 간다.,
4-25|lion|사자|The lion is the king of the jungle.|사자는 정글의 왕이다.,
4-25|tiger|호랑이|The tiger has black stripes.|호랑이는 검은 줄무늬를 가지고 있다.,
4-25|giraffe|기린|The giraffe has a long neck.|기린은 목이 길다.,
4-25|monkey|원숭이|The monkey likes to eat bananas.|원숭이는 바나나 먹는 것을 좋아한다.,
4-25|elephant|코끼리|The elephant is a big animal.|코끼리는 큰 동물이다.,
4-25|fox|여우|The fox is a smart animal.|여우는 영리한 동물이다.,
4-25|dolphin|돌고래|The dolphin can jump very high.|돌고래는 아주 높이 점프할 수 있다.,
4-25|jungle|밀림 지대, 정글|We explored the dense jungle.|우리는 빽빽한 정글을 탐험했다.,
4-25|wolf|늑대|I heard a wolf howling at night.|나는 밤에 늑대가 우는 소리를 들었다.,
4-25|hippo|하마|The hippo stays in the water.|하마는 물 속에 머문다.,
4-25|bear|곰|The bear likes to eat honey.|곰은 꿀 먹는 것을 좋아한다.,
4-25|cheetah|치타|The cheetah runs very fast.|치타는 매우 빠르게 달린다.,
4-25|zebra|얼룩말|The zebra has black and white stripes.|얼룩말은 검은색과 흰색 줄무늬를 가지고 있다.,
4-25|panda|판다|The panda eats bamboo.|판다는 대나무를 먹는다.,
4-25|bat|박쥐|The bat flies only at night.|박쥐는 밤에만 난다.,
4-26|farm|농장|My grandfather works on the farm.|나의 할아버지는 농장에서 일하신다.,
4-26|cow|소|The cow gives us milk.|소는 우리에게 우유를 준다.,
4-26|horse|말|I like to ride a horse.|나는 말을 타는 것을 좋아한다.,
4-26|sheep|양|The sheep is eating grass.|양이 풀을 먹고 있다.,
4-26|chicken|닭|We feed the chickens every day.|우리는 매일 닭들에게 먹이를 준다.,
4-26|hen|암탉|The hen laid an egg this morning.|암탉이 오늘 아침에 알을 낳았다.,
4-26|pig|돼지|The pig is sleeping in the mud.|돼지가 진흙 속에서 자고 있다.,
4-26|deer|사슴|We saw a wild deer in the forest.|우리는 숲에서 야생 사슴을 보았다.,
4-26|goat|염소|The goat is climbing the rock.|염소가 바위를 오르고 있다.,
4-26|duck|오리|The duck is swimming on the pond.|오리가 연못 위에서 수영하고 있다.,
4-26|frog|개구리|The frog jumps very high.|개구리는 아주 높이 점프한다.,
4-26|mouse|쥐|A small mouse ran into the hole.|작은 쥐가 구멍으로 뛰어 들어갔다.,
4-26|mice|(mouse의 복수형) 쥐들|There are three mice under the sofa.|소파 밑에 쥐 세 마리가 있다.,
4-26|bug|벌레|I found a green bug on the leaf.|나는 나뭇잎 위에서 초록색 벌레를 발견했다.,
4-26|bee|벌|The bee is making honey.|벌이 꿀을 만들고 있다.,
4-26|ant|개미|An ant is carrying a piece of food.|개미 한 마리가 먹이 조각을 운반하고 있다.,
4-27|market|시장|I buy fresh vegetables at the market.|나는 시장에서 신선한 채소를 산다.,
4-27|plastic bag|비닐봉지|I put apples in a plastic bag.|나는 사과를 비닐봉지에 넣는다.,
4-27|shopping bag|쇼핑 백, 장바구니|Please bring a shopping bag.|쇼핑 백을 가져와 주세요.,
4-27|cart|카트, 수레|I push the cart in the store.|나는 가게에서 카트를 민다.,
4-27|shop|가게|I found a nice gift at the shop.|나는 가게에서 좋은 선물을 찾았다.,
4-27|customer|손님, 고객|The customer is buying a shirt.|그 손님은 셔츠를 사고 있다.,
4-27|clerk|점원|The clerk helped me find the item.|점원이 내가 물건을 찾는 것을 도와주었다.,
4-27|sell|팔다|The bakery sells fresh bread.|그 빵집은 신선한 빵을 판다.,
4-27|look for|~을 찾다|I will look for my lost wallet.|나는 잃어버린 지갑을 찾을 것이다.,
4-27|buy|사다|I want to buy a new toy.|나는 새 장난감을 사고 싶다.,
4-27|spend|(돈을) 쓰다|I spend money on books.|나는 책에 돈을 쓴다.,
4-27|pay|지불하다|I will pay with cash.|나는 현금으로 지불할 것이다.,
4-27|cost|값, 비용|The cost of the pen is 1,000 won.|그 펜의 값은 1,000원이다.,
4-27|price|가격|What is the price of this candy?|이 사탕의 가격은 얼마입니까?,
4-27|cheap|(값이) 싼|This snack is very cheap.|이 과자는 매우 싸다.,
4-27|expensive|비싼|That necklace is too expensive.|저 목걸이는 너무 비싸다.,
4-28|fruit|과일|I eat fruit every morning.|나는 매일 아침 과일을 먹는다.,
4-28|banana|바나나|A banana is a yellow fruit.|바나나는 노란색 과일이다.,
4-28|apple|사과|I like red apples.|나는 빨간 사과를 좋아한다.,
4-28|orange|오렌지|I drink orange juice.|나는 오렌지 주스를 마신다.,
4-28|lemon|레몬|Lemons are sour.|레몬은 시큼하다.,
4-28|grape|포도|I like purple grapes.|나는 보라색 포도를 좋아한다.,
4-28|strawberry|딸기|I bought sweet strawberryies.|나는 달콤한 딸기를 샀다.,
4-28|watermelon|수박|Watermelon is a summer fruit.|수박은 여름 과일이다.,
4-28|vegetable|채소|We should eat more vegetables.|우리는 채소를 더 많이 먹어야 한다.,
4-28|tomato|토마토|A tomato is red and round.|토마토는 빨갛고 둥글다.,
4-28|carrot|당근|Rabbits eat carrots.|토끼는 당근을 먹는다.,
4-28|corn|옥수수|I like roasted corn.|나는 구운 옥수수를 좋아한다.,
4-28|onion|양파|Onions can make you cry.|양파는 너를 울게 만들 수 있다.,
4-28|garlic|마늘|Garlic has a strong smell.|마늘은 강한 냄새가 난다.,
4-28|potato|감자|We make french fries from a potato.|우리는 감자로 감자튀김을 만든다.,
4-28|fresh|신선한|I buy fresh fruit at the market.|나는 시장에서 신선한 과일을 산다.,
4-29|time|시간|What time is it now?|지금 몇 시니?,
4-29|second|초|The light lasts for ten seconds.|빛이 10초 동안 지속된다.,
4-29|minute|분|Wait for five minutes.|5분 동안 기다려라.,
4-29|hour|한 시간|I study for one hour.|나는 한 시간 동안 공부한다.,
4-29|day|하루|There are seven days in a week.|일주일에는 7일이 있다.,
4-29|ago|(지금부터) ~전에|I saw him two days ago.|나는 그를 이틀 전에 보았다.,
4-29|last|지난, 마지막의|Last week I went camping.|지난주에 나는 캠핑을 갔다.,
4-29|when|언제|When will the movie start?|영화는 언제 시작할까?,
4-29|before|전에, 앞에|I brush my teeth before bed.|나는 잠자기 전에 양치질을 한다.,
4-29|after|후에, 뒤에|We will eat cake after dinner.|우리는 저녁 식사 후에 케이크를 먹을 것이다.,
4-29|then|그때|I was playing outside then.|나는 그때 밖에서 놀고 있었다.,
4-29|now|지금|We should leave now.|우리는 지금 떠나야 한다.,
4-29|early|일찍|I wake up early on weekdays.|나는 평일에 일찍 일어난다.,
4-29|late|늦은, 늦게|Don't be late for school.|학교에 늦지 마라.,
4-29|busy|바쁜|My mom is busy today.|나의 엄마는 오늘 바쁘시다.,
4-29|next|다음의|Next week is my birthday.|다음 주는 나의 생일이다.,
4-30|sky|하늘|The sky is clear and blue today.|오늘 하늘은 맑고 파랗다.,
4-30|sun|해, 태양|The sun sets in the west.|해는 서쪽으로 진다.,
4-30|moon|달|We can see the full moon tonight.|우리는 오늘 밤 보름달을 볼 수 있다.,
4-30|star|별|I saw a shooting star.|나는 별똥별을 보았다.,
4-30|cloud|구름|The airplane is flying above the clouds.|비행기가 구름 위를 날고 있다.,
4-30|shine|빛나다, 반짝이다|The diamonds shine brightly.|다이아몬드가 밝게 빛난다.,
4-30|bright|밝은|The light is too bright.|빛이 너무 밝다.,
4-30|dark|어두운|It gets dark very fast in winter.|겨울에는 해가 아주 빨리 진다.,
4-30|rain|비|The rain stopped this morning.|비가 오늘 아침에 멈췄다.,
4-30|snow|눈|I like the soft white snow.|나는 부드러운 하얀 눈을 좋아한다.,
4-30|storm|폭풍우|A big storm is coming soon.|큰 폭풍우가 곧 올 것이다.,
4-30|fog|안개|The fog made it hard to see the road.|안개 때문에 길을 보기 어려웠다.,
4-30|air|공기|We need clean air to breathe.|우리는 숨 쉬기 위해 깨끗한 공기가 필요하다.,
4-30|light|빛|The sun gives off warm light.|태양은 따뜻한 빛을 내뿜는다.,
4-30|earth|지구|The earth is round.|지구는 둥글다.,
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

6-1|study|공부하다|I study English every day.|나는 매일 영어를 공부한다.,
6-1|remember|기억하다|I cannot remember the name.|나는 그 이름을 기억할 수 없다.,
6-1|subject|과목|My favorite subject is art.|내가 가장 좋아하는 과목은 미술이다.,
6-1|math|수학|Math is a difficult subject.|수학은 어려운 과목이다.,
6-1|science|과학|We learn about animals in science.|우리는 과학 시간에 동물에 대해 배운다.,
6-1|art|미술|She is good at art.|그녀는 미술을 잘한다.,
6-1|history|역사|We read a book about history.|우리는 역사에 대한 책을 읽는다.,
6-1|English|영어|I want to speak English well.|나는 영어를 잘 말하고 싶다.,
6-1|exam|시험[e]|I must prepare for the exam.|나는 시험을 준비해야 한다.,
6-1|test|시험[t]|We will have a test tomorrow.|우리는 내일 시험을 볼 것이다.,
6-1|write|쓰다|Please write your name here.|여기에 당신의 이름을 써 주세요.,
6-1|ask|묻다|Don't be afraid to ask.|묻는 것을 두려워하지 마라.,
6-1|question|질문, 문제|I have one question.|나는 질문이 하나 있다.,
6-1|answer|답, 답하다|I know the answer.|나는 답을 안다.,
6-1|easy|쉬운|This game is very easy.|이 게임은 매우 쉽다.,
6-1|difficult|어려운|The final exam was difficult.|기말고사는 어려웠다.,
6-2|school|학교|I go to school.|나는 학교에 간다.,
6-2|student|학생|I am a student.|나는 학생이다.,
6-2|classmate|반 친구|I study with my classmate.|나는 반 친구와 공부한다.,
6-2|group|그룹, 단체|Let's work in a group.|그룹으로 일하자.,
6-2|dictionary|사전|I use the dictionary.|나는 사전을 사용한다.,
6-2|textbook|교과서|I read the textbook.|나는 교과서를 읽는다.,
6-2|teach|가르치다|The teacher can teach well.|선생님은 잘 가르치실 수 있다.,
6-2|introduce|소개하다|I introduce my family.|나는 나의 가족을 소개한다.,
6-2|playground|놀이터, 운동장|We play in the playground.|우리는 놀이터에서 논다.,
6-2|classroom|교실|Our classroom is large.|우리의 교실은 크다.,
6-2|lesson|수업|I like this lesson.|나는 이 수업이 좋다.,
6-2|class|수업, 학급|My class is fun.|나의 학급은 재미있다.,
6-2|name|이름|My name is long.|나의 이름은 길다.,
6-2|desk|책상|My desk is clean.|나의 책상은 깨끗하다.,
6-2|chair|의자|Please sit on the chair.|의자에 앉으세요.,
6-2|learn|배우다|I learn new words.|나는 새로운 단어를 배운다.,
6-3|use|사용하다|Can I use this pen?|이 펜을 사용해도 되니?,
6-3|borrow|빌리다|I want to borrow a book.|나는 책을 빌리고 싶다.,
6-3|lose|잃어버리다|Don't lose your money.|돈을 잃어버리지 마라.,
6-3|eraser|지우개|Use an eraser to clean it.|지우개로 지워라.,
6-3|ruler|자|The ruler is straight.|그 자는 곧다.,
6-3|tape|테이프|I need some tape.|나는 테이프가 좀 필요하다.,
6-3|scissors|가위|The scissors cut paper.|가위는 종이를 자른다.,
6-3|glue|풀|Stick it with glue.|풀로 그것을 붙여라.,
6-3|paper|종이|Write on the paper.|종이에 써라.,
6-3|notebook|공책|Open your notebook.|공책을 펼쳐라.,
6-3|sketchbook|스케치북|I draw in my sketchbook.|나는 스케치북에 그림을 그린다.,
6-3|pen|펜|This is a red pen.|이것은 빨간 펜이다.,
6-3|pencil|연필|Sharpen your pencil.|연필을 깎아라.,
6-3|pencil case|필통|Put the pen in the pencil case.|펜을 필통에 넣어라.,
6-3|crayon|크레파스, 크레용|Use a yellow crayon.|노란색 크레용을 사용해라.,
6-3|brush|붓|Wash the brush.|붓을 씻어라.,
6-4|grade|학년, 성적|I am in the first grade.|나는 1학년이다.,
6-4|line|선|Draw a straight line.|직선을 그려라.,
6-4|page|페이지, 쪽|Open page ten.|10페이지를 펴라.,
6-4|second|두 번째의|This is the second time.|이번이 두 번째다.,
6-4|fourth|네 번째의|He came in fourth.|그는 4등으로 들어왔다.,
6-4|first|첫 번째의|She is the first student.|그녀는 첫 번째 학생이다.,
6-4|third|세 번째의|It is the third door.|세 번째 문이다.,
6-4|fifth|다섯 번째의|Today is the fifth day.|오늘은 5일째다.,
6-4|floor|바닥, 층|Sit on the floor.|바닥에 앉아라.,
6-4|level|수준, 정도|What is your level?|너의 수준은 무엇이니?,
6-4|list|목록|Make a shopping list.|쇼핑 목록을 만들어라.,
6-4|sixth|여섯 번째의|It is the sixth month.|6번째 달이다.,
6-4|seventh|일곱 번째의|This is the seventh book.|이것은 7번째 책이다.,
6-4|eighth|여덟 번째의|It is my eighth birthday.|나의 8번째 생일이다.,
6-4|ninth|아홉 번째의|He is the ninth player.|그는 9번째 선수다.,
6-4|tenth|열 번째의|It is the tenth question.|10번째 질문이다.,
6-5|wear|입다|I wear a hat.|나는 모자를 쓴다.,
6-5|shirt|셔츠|He wears a white shirt.|그는 흰 셔츠를 입는다.,
6-5|blouse|블라우스|She likes her blouse.|그녀는 자신의 블라우스를 좋아한다.,
6-5|sweater|스웨터|It is warm sweater.|따뜻한 스웨터이다.,
6-5|clothes|옷|Put on your clothes.|옷을 입어라.,
6-5|pajamas|잠옷|I sleep in my pajamas.|나는 잠옷을 입고 잔다.,
6-5|size|크기, 치수|What is your size?|너의 사이즈는 몇이니?,
6-5|new|새로운|I bought new shoes.|나는 새 신발을 샀다.,
6-5|put on|입다, 쓰다, 신다|Put on your coat.|코트를 입어라.,
6-5|take off|벗다|Take off your shoes.|신발을 벗어라.,
6-5|jacket|재킷|Wear a jacket outside.|밖에서는 재킷을 입어라.,
6-5|coat|코트, 외투|It is cold, so wear a coat.|추우니까 코트를 입어라.,
6-5|dress|원피스, 드레스|The dress is pretty.|그 드레스는 예쁘다.,
6-5|skirt|치마|She wears a pink skirt.|그녀는 분홍색 치마를 입는다.,
6-5|pants|바지|My pants are blue.|나의 바지는 파란색이다.,
6-5|jeans|청바지|I like wearing jeans.|나는 청바지 입는 것을 좋아한다.,
6-6|pair|쌍, 짝|I have a pair of gloves.|나는 장갑 한 켤레가 있다.,
6-6|socks|양말|Put on your socks.|양말을 신어라.,
6-6|gloves|장갑, 글러브|Wear gloves in winter.|겨울에는 장갑을 껴라.,
6-6|earrings|귀걸이|Her earrings shine.|그녀의 귀걸이가 빛난다.,
6-6|shoes|신발|My shoes are old.|나의 신발은 낡았다.,
6-6|boots|부츠, 장화|Use rain boots today.|오늘은 장화를 신어라.,
6-6|necklace|목걸이|The necklace is gold.|그 목걸이는 금이다.,
6-6|ring|반지|He gave her a ring.|그는 그녀에게 반지를 주었다.,
6-6|hat|모자|The hat covers my head.|모자가 내 머리를 덮는다.,
6-6|cap|모자(챙 있는)|He wears a baseball cap.|그는 야구 모자를 쓴다.,
6-6|belt|벨트|Fasten your belt.|벨트를 매라.,
6-6|watch|손목시계|Look at your watch.|너의 시계를 봐라.,
6-6|tie|넥타이|Dad wears a tie.|아빠는 넥타이를 매신다.,
6-6|ribbon|리본|The gift has a ribbon.|선물에 리본이 있다.,
6-6|button|단추|Push the button.|단추를 눌러라.,
6-6|pocket|주머니|My pocket is empty.|내 주머니는 비었다.,
6-7|eat|먹다|Let's eat lunch.|점심 먹자.,
6-7|breakfast|아침 식사|I eat breakfast at 7.|나는 7시에 아침을 먹는다.,
6-7|lunch|점심 식사|What is for lunch?|점심 메뉴가 뭐니?,
6-7|dinner|저녁 식사|We cook dinner together.|우리는 저녁을 함께 요리한다.,
6-7|pizza|피자|I love cheese pizza.|나는 치즈 피자를 좋아한다.,
6-7|hamburger|햄버거|The hamburger is big.|그 햄버거는 크다.,
6-7|salad|샐러드|Salad is healthy.|샐러드는 건강에 좋다.,
6-7|soup|수프|The soup is hot.|수프가 뜨겁다.,
6-7|food|음식|Do you like Korean food?|한국 음식을 좋아하니?,
6-7|bread|빵|I bake bread.|나는 빵을 굽는다.,
6-7|cookie|쿠키|This cookie is sweet.|이 쿠키는 달콤하다.,
6-7|drink|마시다|Drink some water.|물을 좀 마셔라.,
6-7|water|물|Give me cold water.|찬물을 주세요.,
6-7|milk|우유|Milk is white.|우유는 하얗다.,
6-7|juice|주스|I want orange juice.|나는 오렌지 주스를 원한다.,
6-7|tea|차|Do you drink tea?|차를 마시니?,
6-8|in|~ 안에|The ball is in the box.|공이 상자 안에 있다.,
6-8|out|~ 밖으로|Go out and play.|나가서 놀아라.,
6-8|on|~ 위에|The cup is on the table.|컵이 탁자 위에 있다.,
6-8|into|~ 안으로|Come into the room.|방 안으로 들어와라.,
6-8|under|~ 아래에, ~ 밑에|The cat is under the chair.|고양이가 의자 아래에 있다.,
6-8|below|~ 아래에|Look at the picture below.|아래 그림을 봐라.,
6-8|by|~ 옆에|Stand by me.|내 옆에 서라.,
6-8|over|~ 너머, ~ 위쪽에|Jump over the fence.|울타리를 넘어 점프해라.,
6-8|bottom|맨 아래|Look at the bottom of the page.|페이지의 맨 아래를 봐라.,
6-8|top|맨 위, 꼭대기|He is at the top.|그는 꼭대기에 있다.,
6-8|middle|가운데, 중간|Sit in the middle.|가운데에 앉아라.,
6-8|center|중앙|It is in the center.|그것은 중앙에 있다.,
6-8|side|옆, 측면|Move to the side.|옆으로 이동해라.,
6-8|above|~ 위에, ~ 위로|The bird is above the tree.|새가 나무 위에 있다.,
6-8|up|위로|Look up at the sky.|하늘을 올려다봐라.,
6-8|down|아래로|Sit down, please.|앉아 주세요.,
6-9|room|방|This is my room.|여기는 나의 방이다.,
6-9|wall|벽|The wall is white.|벽은 하얀색이다.,
6-9|window|창문|Open the window.|창문을 열어라.,
6-9|closet|벽장|My clothes are in the closet.|내 옷은 벽장에 있다.,
6-9|bed|침대|I sleep in my bed.|나는 내 침대에서 잔다.,
6-9|pillow|베개|The pillow is soft.|베개는 부드럽다.,
6-9|fan|선풍기|Turn on the fan.|선풍기를 켜라.,
6-9|lamp|램프, 등|The lamp is bright.|램프가 밝다.,
6-9|computer|컴퓨터|I use a computer.|나는 컴퓨터를 사용한다.,
6-9|bag|가방|My bag is heavy.|내 가방은 무겁다.,
6-9|basket|바구니|The basket is full.|바구니가 가득 찼다.,
6-9|box|상자|What is in the box?|상자 안에 무엇이 있니?,
6-9|umbrella|우산|Take an umbrella.|우산을 가져가라.,
6-9|mirror|거울|Look in the mirror.|거울을 봐라.,
6-9|telephone|전화기|The telephone is ringing.|전화기가 울리고 있다.,
6-9|key|열쇠|I lost my key.|나는 열쇠를 잃어버렸다.,
6-10|nature|자연|We love nature.|우리는 자연을 사랑한다.,
6-10|mountain|산|The mountain is high.|산은 높다.,
6-10|forest|숲|Animals live in the forest.|동물들은 숲에 산다.,
6-10|valley|계곡|The valley is deep.|계곡은 깊다.,
6-10|lake|호수|Let's swim in the lake.|호수에서 수영하자.,
6-10|desert|사막|The desert is hot.|사막은 덥다.,
6-10|wind|바람|The wind blows strongly.|바람이 강하게 분다.,
6-10|rock|바위|This rock is hard.|이 바위는 단단하다.,
6-10|ocean|대양, 바다|The ocean is blue.|바다는 파랗다.,
6-10|sea|바다|I see the sea.|나는 바다를 본다.,
6-10|beach|해변|We play on the beach.|우리는 해변에서 논다.,
6-10|river|강|The river is long.|강은 길다.,
6-10|land|땅, 육지|The land is dry.|땅이 말랐다.,
6-10|hill|언덕|Go up the hill.|언덕을 올라가라.,
6-10|tree|나무|The tree is green.|나무는 초록색이다.,
6-10|leaf|나뭇잎|A leaf falls down.|나뭇잎이 떨어진다.,
6-11|in front of|~ 앞에|Stand in front of me.|내 앞에 서라.,
6-11|behind|~ 뒤에|Look behind you.|네 뒤를 봐라.,
6-11|beside|~ 옆에|Sit beside me.|내 옆에 앉아라.,
6-11|next to|~ 옆에|I am next to him.|나는 그의 옆에 있다.,
6-11|across|건너서, 가로질러|Walk across the street.|길을 건너가라.,
6-11|at|~에|I am at home.|나는 집에 있다.,
6-11|here|여기에|Come here.|이리로 와라.,
6-11|there|거기에|Go there.|거기로 가라.,
6-11|west|서쪽|The sun sets in the west.|해는 서쪽으로 진다.,
6-11|north|북쪽|The north is cold.|북쪽은 춥다.,
6-11|east|동쪽|The sun rises in the east.|해는 동쪽에서 뜬다.,
6-11|south|남쪽|Birds fly south.|새들은 남쪽으로 날아간다.,
6-11|through|~을 통해|Go through the door.|문을 통과해 가라.,
6-11|between|~ 사이에|Sit between us.|우리 사이에 앉아라.,
6-11|around|~ 주위에|Look around.|주위를 둘러봐라.,
6-11|among|~에 둘러싸인|I am among friends.|나는 친구들 사이에 있다.,
6-12|always|항상, 늘|I always smile.|나는 항상 웃는다.,
6-12|usually|보통, 대개|I usually wake up early.|나는 보통 일찍 일어난다.,
6-12|often|종종, 자주|I often visit the park.|나는 종종 공원에 간다.,
6-12|sometimes|때때로, 가끔|Sometimes I eat pizza.|가끔 나는 피자를 먹는다.,
6-12|never|절대 ~ 않다|I never tell a lie.|나는 절대 거짓말을 하지 않는다.,
6-12|festival|축제|We enjoy the festival.|우리는 축제를 즐긴다.,
6-12|schedule|일정, 스케줄|Check the schedule.|일정을 확인해라.,
6-12|ready|준비가 된|Are you ready?|준비됐니?,
6-12|start|시작하다|Let's start the game.|게임을 시작하자.,
6-12|begin|시작하다|Class will begin soon.|수업이 곧 시작될 것이다.,
6-12|finish|끝나다, 끝내다|I finish my work.|나는 내 일을 끝낸다.,
6-12|end|끝나다, 끝|This is the end.|이것이 끝이다.,
6-12|contest|대회|He won the contest.|그는 대회에서 우승했다.,
6-12|again|다시|Try again.|다시 시도해라.,
6-12|once|한 번|I met him once.|나는 그를 한 번 만났다.,
6-12|twice|두 번|I checked it twice.|나는 그것을 두 번 확인했다.,
6-13|hobby|취미|My hobby is reading.|내 취미는 독서다.,
6-13|walk|걷다|Let's walk together.|함께 걷자.,
6-13|climb|오르다|Monkeys climb trees.|원숭이는 나무를 오른다.,
6-13|exercise|운동하다|I exercise every day.|나는 매일 운동한다.,
6-13|dance|춤추다|Do you like to dance?|너는 춤추는 것을 좋아하니?,
6-13|sing|노래하다|She loves to sing.|그녀는 노래하는 것을 좋아한다.,
6-13|bake|굽다|I bake cookies.|나는 쿠키를 굽는다.,
6-13|draw|그리다|I can draw a cat.|나는 고양이를 그릴 수 있다.,
6-13|free time|여가 시간|What do you do in your free time?|너는 여가 시간에 무엇을 하니?,
6-13|listen|듣다|Listen to the music.|음악을 들어라.,
6-13|music|음악|I enjoy listening to music.|나는 음악 듣는 것을 즐긴다.,
6-13|radio|라디오|Turn on the radio.|라디오를 켜라.,
6-13|practice|연습하다|You must practice piano.|너는 피아노를 연습해야 한다.,
6-13|piano|피아노|She plays the piano.|그녀는 피아노를 친다.,
6-13|violin|바이올린|He has a violin.|그는 바이올린을 가지고 있다.,
6-13|guitar|기타|My dad plays the guitar.|우리 아빠는 기타를 치신다.,
6-14|left|왼쪽|Turn left.|왼쪽으로 돌아라.,
6-14|right|오른쪽|Turn right.|오른쪽으로 돌아라.,
6-14|straight|곧은, 똑바로|Go straight.|똑바로 가라.,
6-14|way|길, 방법|This is the way.|이쪽 길이다.,
6-14|far|멀리|Is it far?|그것은 머니?,
6-14|near|가까이|The park is near.|공원은 가깝다.,
6-14|turn|돌다|Turn around.|뒤로 돌아라.,
6-14|corner|모퉁이|It is at the corner.|그것은 모퉁이에 있다.,
6-14|road|도로|The road is wide.|도로는 넓다.,
6-14|street|길, 거리|Walk down the street.|거리를 따라 걸어가라.,
6-14|bridge|다리|Cross the bridge.|다리를 건너라.,
6-14|address|주소|What is your address?|너의 주소는 무엇이니?,
6-14|return|되돌아가다|Return to your seat.|자리로 돌아가라.,
6-14|cross|건너다|Cross the road carefully.|길을 조심해서 건너라.,
6-14|along|~을 따라|Walk along the river.|강을 따라 걸어라.,
6-14|away|떨어져|Go away.|저리 떨어져.,
6-15|travel|여행하다|I like to travel.|나는 여행하는 것을 좋아한다.,
6-15|trip|여행|How was your trip?|여행 어땠니?,
6-15|visit|방문하다|I will visit my grandma.|나는 할머니를 방문할 것이다.,
6-15|stay|머물다|Stay here.|여기에 머물러라.,
6-15|nation|국가|Korea is a nation.|한국은 국가이다.,
6-15|arrive|도착하다|When did you arrive?|언제 도착했니?,
6-15|leave|떠나다|Don't leave me.|나를 떠나지 마라.,
6-15|hotel|호텔|We stay at a hotel.|우리는 호텔에 머문다.,
6-15|vacation|방학, 휴가|Summer vacation is coming.|여름 방학이 오고 있다.,
6-15|holiday|휴일, 휴가|Today is a holiday.|오늘은 휴일이다.,
6-15|during|~ 동안|I slept during the class.|나는 수업 시간 동안 잤다.,
6-15|plan|계획, 계획하다|What is your plan?|너의 계획은 무엇이니?,
6-15|tour guide|여행 가이드|The tour guide is kind.|여행 가이드는 친절하다.,
6-15|airport|공항|I go to the airport.|나는 공항에 간다.,
6-15|album|사진첩|Show me your album.|네 사진첩을 보여줘.,
6-15|photo|사진|Take a photo.|사진을 찍어라.,
6-16|take|타다, 가져가다|Take a bus.|버스를 타라.,
6-16|drive|운전하다|Can you drive?|운전할 줄 아니?,
6-16|fast|빠른|The car is fast.|그 차는 빠르다.,
6-16|slow|느린|Turtles are slow.|거북이는 느리다.,
6-16|carrot|당근|Rabbits eat a carrot.|토끼는 당근을 먹는다.,
6-16|bus|버스|The bus is coming.|버스가 오고 있다.,
6-16|taxi|택시|I call a taxi.|나는 택시를 부른다.,
6-16|subway|지하철|I take the subway.|나는 지하철을 탄다.,
6-16|plane|비행기|Look at the plane.|비행기를 봐라.,
6-16|ship|배|The ship is big.|그 배는 크다.,
6-16|boat|배, 보트|We ride a boat.|우리는 보트를 탄다.,
6-16|train|기차|The train is long.|기차는 길다.,
6-16|truck|트럭|A truck carries boxes.|트럭이 상자들을 나른다.,
6-16|station|역|Meet me at the station.|역에서 만나자.,
6-16|ticket|표, 티켓|Do you have a ticket?|너는 표를 가지고 있니?,
6-16|seat|자리, 좌석|Take a seat.|자리에 앉아라.,
6-17|play|놀다, (운동 경기를) 하다|Let's play soccer.|축구를 하자.,
6-17|sports|운동, 스포츠|I like sports.|나는 운동을 좋아한다.,
6-17|soccer|축구|He plays soccer well.|그는 축구를 잘한다.,
6-17|baseball|야구|Do you like baseball?|너는 야구를 좋아하니?,
6-17|basketball|농구|I play basketball.|나는 농구를 한다.,
6-17|tennis|테니스|Tennis is fun.|테니스는 재미있다.,
6-17|badminton|배드민턴|We play badminton.|우리는 배드민턴을 친다.,
6-17|volleyball|배구|The net is for volleyball.|그 네트는 배구용이다.,
6-17|shoot|(슛을) 쏘다, 던지다|Shoot the ball.|공을 쏴라(던져라).,
6-17|throw|던지다|Throw me the ball.|나에게 공을 던져라.,
6-17|kick|차다|Kick the ball hard.|공을 세게 차라.,
6-17|catch|잡다|Catch the ball.|공을 잡아라.,
6-17|pass|패스하다, 건네주다|Pass to me.|나에게 패스해라.,
6-17|ball|공|I have a round ball.|나는 둥근 공을 가지고 있다.,
6-17|team|팀|We are a good team.|우리는 좋은 팀이다.,
6-17|gym|체육관|Let's go to the gym.|체육관에 가자.,
6-18|win|이기다|I want to win.|나는 이기고 싶다.,
6-18|lose|지다|I don't want to lose.|나는 지고 싶지 않다.,
6-18|winner|승자|He is the winner.|그는 승자이다.,
6-18|loser|패자|There is no loser.|패자는 없다.,
6-18|game|경기, 게임|Let's play a game.|게임을 하자.,
6-18|match|경기, 시합|The match starts now.|경기가 지금 시작된다.,
6-18|race|경주, 달리기|We ran a race.|우리는 경주를 했다.,
6-18|join|함께하다, 가입하다|Come and join us.|와서 우리와 함께해라.,
6-18|medal|메달|She got a gold medal.|그녀는 금메달을 땄다.,
6-18|prize|상|I won the first prize.|나는 1등 상을 탔다.,
6-18|try|노력하다, 시도하다|Try your best.|최선을 다해라.,
6-18|rule|규칙|Follow the rules.|규칙을 따르라.,
6-18|score|득점, 점수|What is the score?|점수가 몇이니?,
6-18|point|점수, 요점|I got one point.|나는 1점을 얻었다.,
6-18|goal|골, 득점|He scored a goal.|그는 골을 넣었다.,
6-18|captain|주장|Who is the captain?|주장이 누구니?,
6-19|relax|휴식을 취하다|Sit down and relax.|앉아서 쉬어라.,
6-19|see a doctor|진찰을 받다|You should see a doctor.|너는 병원(의사)에 가봐야 한다.,
6-19|take medicine|약을 먹다|Take medicine with water.|물과 함께 약을 먹어라.,
6-19|hospital|병원|Go to the hospital.|병원에 가라.,
6-19|disease|질병|Wash hands to stop disease.|질병을 막기 위해 손을 씻어라.,
6-19|sick|아픈|I am sick.|나는 아프다.,
6-19|ill|아픈|He feels ill.|그는 몸이 좋지 않다.,
6-19|healthy|건강한|Eat healthy food.|건강한 음식을 먹어라.,
6-19|fever|열|I have a fever.|나는 열이 있다.,
6-19|pain|통증|I feel pain here.|나는 여기에 통증을 느낀다.,
6-19|cough|기침|He has a bad cough.|그는 기침이 심하다.,
6-19|headache|두통|I have a headache.|나는 두통이 있다.,
6-19|stomachache|복통|She has a stomachache.|그녀는 배가 아프다.,
6-19|toothache|치통|I have a toothache.|나는 치통이 있다.,
6-19|die|죽다|Flowers will die without water.|물이 없으면 꽃은 죽을 것이다.,
6-19|dead|죽은|The tree is dead.|그 나무는 죽었다.,
6-20|butter|버터|I like butter on bread.|나는 빵에 버터 바르는 것을 좋아한다.,
6-20|cheese|치즈|Cheese is yellow.|치즈는 노란색이다.,
6-20|egg|달걀|I eat an egg for breakfast.|나는 아침으로 달걀을 먹는다.,
6-20|oil|기름|Put some oil in the pan.|팬에 기름을 좀 둘러라.,
6-20|meat|고기|Do you like meat?|너는 고기를 좋아하니?,
6-20|rice|쌀, 밥|We eat rice every day.|우리는 매일 밥을 먹는다.,
6-20|salt|소금|Pass me the salt.|소금 좀 건네줘.,
6-20|sugar|설탕|Sugar is sweet.|설탕은 달다.,
6-20|fork|포크|Use a fork.|포크를 사용해라.,
6-20|knife|칼|The knife is sharp.|칼이 날카롭다.,
6-20|spoon|숟가락|Eat soup with a spoon.|숟가락으로 수프를 먹어라.,
6-20|chopsticks|젓가락|I use chopsticks.|나는 젓가락을 사용한다.,
6-20|bowl|그릇, 사발|A bowl of rice.|밥 한 공기.,
6-20|dish|접시|Wash the dish.|접시를 씻어라.,
6-20|bottle|병|Open the bottle.|병을 열어라.,
6-20|cup|컵|A cup of milk.|우유 한 컵.,
6-21|money|돈|I need some money.|나는 돈이 좀 필요하다.,
6-21|dollar|달러|It costs one dollar.|그것은 1달러이다.,
6-21|coin|동전|I have a gold coin.|나는 금화(동전)를 가지고 있다.,
6-21|count|세다, 계산하다|Can you count to ten?|10까지 셀 수 있니?,
6-21|twenty|20|He is twenty years old.|그는 20살이다.,
6-21|thirty|30|It is thirty dollars.|그것은 30달러이다.,
6-21|forty|40|My dad is forty.|나의 아빠는 40살이다.,
6-21|fifty|50|There are fifty stars.|별이 50개 있다.,
6-21|sixty|60|Wait sixty seconds.|60초를 기다려라.,
6-21|seventy|70|My grandma is seventy.|나의 할머니는 70세이시다.,
6-21|eighty|80|Read page eighty.|80페이지를 읽어라.,
6-21|ninety|90|I got ninety points.|나는 90점을 받았다.,
6-21|hundred|100, 백|I want a hundred candies.|나는 사탕 100개를 원한다.,
6-21|thousand|1000, 천|It is two thousand won.|그것은 2,000원이다.,
6-21|poor|가난한|He helps poor people.|그는 가난한 사람들을 돕는다.,
6-21|rich|부유한|The king is rich.|왕은 부유하다.,
6-22|dangerous|위험한|Fire is dangerous.|불은 위험하다.,
6-22|safe|안전한|This place is safe.|이 장소는 안전하다.,
6-22|strange|이상한|That is a strange sound.|저것은 이상한 소리다.,
6-22|happen|발생하다, 일어나다|What happened?|무슨 일이 일어났니?,
6-22|bomb|폭탄|The bomb is scary.|폭탄은 무섭다.,
6-22|accident|사고|I saw a car accident.|나는 자동차 사고를 목격했다.,
6-22|fire|불|Do not play with fire.|불장난하지 마라.,
6-22|fact|사실|Is that a fact?|그것이 사실이니?,
6-22|news|뉴스|I watch the news.|나는 뉴스를 본다.,
6-22|break|깨다, 부수다|Don't break the glass.|유리를 깨지 마라.,
6-22|fix|수리하다|Can you fix this?|이것을 고칠 수 있니?,
6-22|burn|타다, 태우다|Paper burns easily.|종이는 쉽게 탄다.,
6-22|hit|치다, 때리다|He hit the ball.|그가 공을 쳤다.,
6-22|hurt|다치게 하다, 아프다|Did you hurt your leg?|다리를 다쳤니?,
6-22|kill|죽이다|Do not kill bugs.|벌레를 죽이지 마라.,
6-22|help|돕다|Please help me.|나를 도와주세요.,
6-23|camping|캠핑|We go camping today.|우리는 오늘 캠핑을 간다.,
6-23|hiking|하이킹 (걷는 여행)|I like hiking.|나는 하이킹을 좋아한다.,
6-23|fishing|낚시|Let's go fishing.|낚시하러 가자.,
6-23|swimming|수영|Swimming is fun.|수영은 재미있다.,
6-23|skiing|스키 타기|I enjoy skiing.|나는 스키 타기를 즐긴다.,
6-23|jogging|조깅|My dad likes jogging.|나의 아빠는 조깅을 좋아하신다.,
6-23|picnic|소풍|We have a picnic.|우리는 소풍을 간다.,
6-23|outside|바깥, 밖에|Let's play outside.|밖에서 놀자.,
6-23|spend|(시간을) 쓰다|I spend time with mom.|나는 엄마와 시간을 보낸다.,
6-23|meet|만나다|Nice to meet you.|만나서 반가워.,
6-23|pool|수영장|The pool is big.|수영장은 크다.,
6-23|museum|박물관|We visit the museum.|우리는 박물관을 방문한다.,
6-23|tent|텐트|I sleep in a tent.|나는 텐트에서 잔다.,
6-23|amusement park|놀이공원|I love the amusement park.|나는 놀이공원을 좋아한다.,
6-23|baseball stadium|야구장|Go to the baseball stadium.|야구장에 가라.,
6-23|weekend|주말|Have a nice weekend.|즐거운 주말 보내.,
6-24|shout|소리치다|Don't shout.|소리치지 마라.,
6-24|cry|울다|Why do you cry?|왜 우니?,
6-24|lie|거짓말하다|Do not lie.|거짓말하지 마라.,
6-24|fight|싸우다|Friends shouldn't fight.|친구끼리는 싸우면 안 된다.,
6-24|hide|숨다, 숨기다|I hide behind the tree.|나는 나무 뒤에 숨는다.,
6-24|friend|친구|She is my best friend.|그녀는 나의 가장 친한 친구다.,
6-24|together|함께|Let's study together.|함께 공부하자.,
6-24|sorry|미안한|I am sorry.|미안해.,
6-24|fault|잘못|It is my fault.|그것은 내 잘못이다.,
6-24|mistake|실수|I made a mistake.|나는 실수를 했다.,
6-24|matter|문제, 일|What is the matter?|무슨 일이니? (무엇이 문제니?),
6-24|problem|문제|Solve the problem.|문제를 풀어라.,
6-24|peace|평화|We want peace.|우리는 평화를 원한다.,
6-24|hate|싫어하다|I hate bugs.|나는 벌레를 싫어한다.,
6-24|understand|이해하다|Do you understand?|이해하니?,
6-24|promise|약속하다|I promise you.|너에게 약속한다.,
6-25|wedding|결혼식, 결혼|The wedding is today.|결혼식은 오늘이다.,
6-25|hall|홀, 큰방이나 건물|The hall is big.|홀은 크다.,
6-25|person|사람|He is a nice person.|그는 좋은 사람이다.,
6-25|people|사람들|Many people are here.|많은 사람들이 여기에 있다.,
6-25|chat|수다를 떨다|We chat together.|우리는 함께 수다를 떤다.,
6-25|clap|박수를 치다|Everyone claps.|모두 박수를 친다.,
6-25|laugh|웃다|We laugh loudly.|우리는 크게 웃는다.,
6-25|smile|미소를 짓다|She smiles at me.|그녀는 나에게 미소를 짓는다.,
6-25|wife|아내|She is his wife.|그녀는 그의 아내이다.,
6-25|baby|아기|The baby sleeps.|아기가 잔다.,
6-25|husband|남편|He is her husband.|그는 그녀의 남편이다.,
6-25|marry|결혼하다|Will you marry me?|나와 결혼해 줄래?,
6-25|love|사랑하다|I love my family.|나는 나의 가족을 사랑한다.,
6-25|gather|모이다|Let's gather here.|여기로 모이자.,
6-25|married couple|부부|They are a married couple.|그들은 부부이다.,
6-25|band|밴드, 악단|The band plays music.|밴드가 음악을 연주한다.,
6-26|shape|모양|What shape is this?|이것은 무슨 모양이니?,
6-26|circle|동그라미, 원|Draw a circle.|원을 그려라.,
6-26|round|둥근|The ball is round.|공은 둥글다.,
6-26|oval|계란형, 계란형의|An egg is oval.|달걀은 계란형이다.,
6-26|square|정사각형 (네모)|The box is a square.|상자는 정사각형이다.,
6-26|rectangle|직사각형 (네모)|A book is a rectangle.|책은 직사각형이다.,
6-26|triangle|삼각형 (세모)|This is a triangle.|이것은 삼각형이다.,
6-26|cone|원뿔|An ice cream cone.|아이스크림 콘.,
6-26|glass|유리잔, 유리|Be careful with glass.|유리를 조심해라.,
6-26|board|판자|Look at the board.|칠판(판자)을 봐라.,
6-26|chalk|분필|Use white chalk.|흰 분필을 사용해라.,
6-26|soap|비누|Wash with soap.|비누로 씻어라.,
6-26|candle|양초|Light the candle.|양초에 불을 켜라.,
6-26|wallet|지갑|I lost my wallet.|나는 지갑을 잃어버렸다.,
6-26|clock|시계|The clock ticks.|시계가 똑딱거린다.,
6-26|bat|(야구) 방망이|Swing the bat.|방망이를 휘둘러라.,
6-27|king|왕|The king is strong.|왕은 힘이 세다.,
6-27|queen|왕비|The queen is kind.|왕비는 친절하다.,
6-27|prince|왕자|The prince rides a horse.|왕자는 말을 탄다.,
6-27|princess|공주|The princess is pretty.|공주는 예쁘다.,
6-27|story|이야기|Tell me a story.|나에게 이야기를 해줘.,
6-27|god|신|Thank god.|신에게 감사합니다.,
6-27|angel|천사|You are an angel.|너는 천사야.,
6-27|crown|왕관|The crown is gold.|왕관은 금이다.,
6-27|castle|성|Look at the castle.|성을 봐라.,
6-27|palace|성, 궁전|The palace is huge.|궁전은 거대하다.,
6-27|heaven|천국|Heaven is beautiful.|천국은 아름답다.,
6-27|hell|지옥|It is hot like hell.|지옥처럼 뜨겁다.,
6-27|giant|거인|A giant is very tall.|거인은 매우 키가 크다.,
6-27|ghost|유령, 귀신|I saw a ghost.|나는 유령을 보았다.,
6-27|monster|괴물|The monster is scary.|괴물은 무섭다.,
6-27|hero|영웅|He is my hero.|그는 나의 영웅이다.,
6-28|interesting|재미있는, 흥미로운|The book is interesting.|그 책은 재미있다.,
6-28|exciting|신나는|The game is exciting.|그 게임은 신난다.,
6-28|fantastic|환상적인|You look fantastic.|너 환상적으로 보인다.,
6-28|excellent|훌륭한|Good job, excellent!|잘했어, 훌륭해!,
6-28|terrible|끔찍한|The weather is terrible.|날씨가 끔찍하다.,
6-28|famous|유명한|He is a famous singer.|그는 유명한 가수이다.,
6-28|concert|콘서트|We go to a concert.|우리는 콘서트에 간다.,
6-28|picture|그림, 사진|Take a picture.|사진을 찍어라.,
6-28|enjoy|즐기다|Enjoy your trip.|여행을 즐겨라.,
6-28|song|노래|Sing a song.|노래를 불러라.,
6-28|singer|가수|Who is your favorite singer?|네가 가장 좋아하는 가수는 누구니?,
6-28|musician|음악가|She is a musician.|그녀는 음악가이다.,
6-28|movie|영화|I like this movie.|나는 이 영화를 좋아한다.,
6-28|theater|극장|Let's go to the theater.|극장에 가자.,
6-28|director|감독|He is a movie director.|그는 영화 감독이다.,
6-28|why|왜|Why are you here?|너는 왜 여기에 있니?,
6-29|idea|생각, 의견|I have a good idea.|나에게 좋은 생각이 있다.,
6-29|opinion|의견|What is your opinion?|너의 의견은 무엇이니?,
6-29|example|예, 보기|Give me an example.|예를 들어 줘.,
6-29|great|위대한, 훌륭한|That is great!|그거 훌륭하다!,
6-29|correct|맞는, 정확한|The answer is correct.|답이 맞다.,
6-29|wrong|틀린, 잘못된|It is wrong.|그것은 틀렸다.,
6-29|same|같은|We have the same bag.|우리는 같은 가방을 가지고 있다.,
6-29|different|다른|They are different.|그들은 다르다.,
6-29|tell|말하다|Tell me the truth.|진실을 말해줘.,
6-29|discuss|토론하다|Let's discuss it.|그것을 토론하자.,
6-29|think|생각하다|Think about it.|그것에 대해 생각해 봐.,
6-29|guess|추측하다|Guess what?|뭔지 맞춰봐?,
6-29|change|바뀌다, 바꾸다|Change your clothes.|옷을 갈아입어라.,
6-29|decide|결정하다|You must decide.|너는 결정해야 한다.,
6-29|agree|동의하다|I agree with you.|나는 너에게 동의한다.,
6-29|because|왜냐하면|I cry because I am sad.|나는 슬퍼서 운다.,
6-30|mail|우편물|Check the mail.|우편물을 확인해라.,
6-30|letter|편지|I write a letter.|나는 편지를 쓴다.,
6-30|postcard|엽서|Send a postcard.|엽서를 보내라.,
6-30|call|전화, 전화하다|Call me now.|지금 전화해.,
6-30|get|받다, 얻다|Did you get it?|너 그거 받았니?,
6-30|receive|받다|I receive an email.|나는 이메일을 받는다.,
6-30|send|보내다|Send it to me.|그것을 나에게 보내라.,
6-30|deliver|배달하다|Please deliver this.|이것을 배달해 주세요.,
6-30|talk|말하다, 이야기하다|Don't talk loudly.|크게 말하지 마라.,
6-30|speak|말하다|Can you speak English?|영어를 할 줄 아니?,
6-30|say|말하다|Say yes.|'네'라고 말해라.,
6-30|repeat|반복하다|Repeat after me.|나를 따라 해라.,
6-30|voice|목소리|I hear a voice.|나는 목소리를 듣는다.,
6-30|dialogue|대화|Listen to the dialogue.|대화를 들어라.,
6-30|stamp|우표, 도장|Buy a stamp.|우표를 사라.,
6-30|envelope|봉투|Put it in the envelope.|그것을 봉투에 넣어라.


10-1|name|이름|My name is Tom.|내 이름은 톰이다.,
10-1|boy|소년, 남자아이|The boy runs fast.|그 소년은 빨리 달린다.,
10-1|girl|소녀, 여자아이|The girl is pretty.|그 소녀는 예쁘다.,
10-1|baby|아기|The baby sleeps.|아기가 잔다.,
10-1|man|남자, 남성|He is a strong man.|그는 힘센 남자다.,
10-1|woman|여자, 여성|The woman is kind.|그 여자는 친절하다.,
10-1|age|나이|What is your age?|너의 나이는 몇이니?,
10-1|dear|사랑하는, 소중한|My dear friend.|나의 소중한 친구.,
10-1|child|아이, 어린이|The child plays.|아이가 논다.,
10-1|teenager|십 대|My brother is a teenager.|나의 형은 십 대다.,
10-1|adult|성인, 어른|Acts like an adult.|어른처럼 행동해라.,
10-1|someone|누군가, 어떤 사람|Someone is here.|누군가가 여기에 있다.,
10-1|everyone|모두, 모든 사람|Hello, everyone.|여러분(모두), 안녕.,
10-1|lady|여성, 부인|She is a nice lady.|그녀는 멋진 여성(숙녀)이다.,
10-1|gentleman|신사, 양반|Be a gentleman.|신사가 되어라.,
10-1|person|사람, 개인|He is a good person.|그는 좋은 사람이다.,
10-1|people|사람들|Many people came.|많은 사람들이 왔다.,
10-1|own|자기 자신의|Use your own pen.|너 자신의 펜을 사용해라.,
10-1|each other|서로|Help each other.|서로 도와라.,
10-1|be from|~출신이다|I am from Korea.|나는 한국 출신이다.,
10-2|family|가족|I love my family.|나는 나의 가족을 사랑한다.,
10-2|father|아버지|My father works hard.|나의 아버지는 열심히 일하신다.,
10-2|mother|어머니|My mother cooks well.|나의 어머니는 요리를 잘 하신다.,
10-2|son|아들|He is my son.|그는 나의 아들이다.,
10-2|daughter|딸|She is my daughter.|그녀는 나의 딸이다.,
10-2|brother|형, 오빠, 남동생|Do you have a brother?|너는 남자 형제가 있니?,
10-2|sister|언니, 누나, 여동생|My sister is cute.|내 여동생은 귀엽다.,
10-2|marry|결혼하다|Will you marry me?|나와 결혼해 줄래?,
10-2|husband|남편|Her husband is tall.|그녀의 남편은 키가 크다.,
10-2|wife|아내, 부인|His wife is kind.|그의 아내는 친절하다.,
10-2|parent|부모|Ask your parents.|부모님께 여쭤봐라.,
10-2|uncle|삼촌|My uncle is funny.|나의 삼촌은 재미있다.,
10-2|aunt|고모, 이모, 숙모|My aunt gave me a gift.|나의 이모가 나에게 선물을 주셨다.,
10-2|grandparent|조부모|I visit my grandparents.|나는 조부모님을 방문한다.,
10-2|cousin|사촌|My cousin lives nearby.|내 사촌은 근처에 산다.,
10-2|member|구성원, 일원|I am a member of the club.|나는 그 클럽의 일원이다.,
10-2|pet|반려동물|I have a pet dog.|나는 반려견을 키운다.,
10-2|relative|친척|Many relatives came.|많은 친척들이 왔다.,
10-2|be born|태어나다|I was born in 2012.|나는 2012년에 태어났다.,
10-2|take care of|~을 돌보다|I take care of my sister.|나는 내 동생을 돌본다.,
10-3|friend|친구|We are good friends.|우리는 좋은 친구다.,
10-3|together|함께, 같이|Let's play together.|함께 놀자.,
10-3|club|동아리, 클럽|Join the book club.|독서 클럽에 가입해라.,
10-3|join|가입하다, 함께하다|Can I join you?|너와 함께해도 되니?,
10-3|fight|싸우다|Don't fight with friends.|친구들과 싸우지 마라.,
10-3|group|무리, 집단, 그룹|A group of students.|학생들의 무리(그룹).,
10-3|classmate|급우, 반 친구|He is my classmate.|그는 나의 반 친구다.,
10-3|partner|파트너, 짝|Who is your partner?|너의 짝은 누구니?,
10-3|alone|혼자|I am home alone.|나는 집에 혼자 있다.,
10-3|friendship|우정|Our friendship is strong.|우리의 우정은 강하다.,
10-3|share|함께 쓰다, 나누다|Share your toys.|장난감을 함께 써라.,
10-3|neighbor|이웃|My neighbor is kind.|나의 이웃은 친절하다.,
10-3|favor|호의, 부탁|Do me a favor.|부탁 하나만 들어줘.,
10-3|introduce|소개하다|Let me introduce myself.|내 소개를 할게.,
10-3|harmony|조화, 화합|Live in harmony.|조화롭게 살아라.,
10-3|nickname|별명|My nickname is Speedy.|내 별명은 스피디다.,
10-3|welcome|환영하다|Welcome to my house.|우리 집에 온 것을 환영해.,
10-3|strange|이상한, 낯선|That is strange.|저것은 이상하다.,
10-3|hang out|~와 시간을 보내다|I hang out with friends.|나는 친구들과 어울려 논다.,
10-3|make fun of|~을 놀리다|Don't make fun of him.|그를 놀리지 마라.,
10-4|body|몸, 신체|Move your body.|몸을 움직여라.,
10-4|ear|귀|I have two ears.|나는 두 개의 귀가 있다.,
10-4|eye|눈|Close your eyes.|눈을 감아라.,
10-4|nose|코|Touch your nose.|코를 만져라.,
10-4|mouth|입|Open your mouth.|입을 벌려라.,
10-4|skin|피부|My skin is soft.|내 피부는 부드럽다.,
10-4|tooth|이, 치아|Brush your tooth.|이를 닦아라. (보통 teeth 사용),
10-4|tongue|혀|Stick out your tongue.|혀를 내밀어라.,
10-4|head|머리|Shake your head.|머리를 흔들어라.,
10-4|hair|머리카락, 털|Comb your hair.|머리를 빗어라.,
10-4|arm|팔|Raise your arm.|팔을 들어라.,
10-4|shoulder|어깨|Tap your shoulder.|어깨를 두드려라.,
10-4|hand|손|Wash your hands.|손을 씻어라.,
10-4|finger|손가락|Use your finger.|손가락을 사용해라.,
10-4|leg|다리|My leg is long.|내 다리는 길다.,
10-4|knee|무릎|Bend your knees.|무릎을 굽혀라.,
10-4|foot|발|Stamp your foot.|발을 굴러라.,
10-4|toe|발가락|Touch your toes.|발가락을 만져라.,
10-4|grow up|성장하다, 자라다|I want to grow up fast.|나는 빨리 자라고 싶다.,
10-4|watch out|조심하다|Watch out for cars.|차를 조심해라.,
10-5|old|늙은, 오래된|My bike is old.|내 자전거는 오래되었다.,
10-5|young|어린, 젊은|She is young.|그녀는 어리다.,
10-5|short|키가 작은, 짧은|The pencil is short.|연필은 짧다.,
10-5|tall|키가 큰, 높은|The tree is tall.|나무는 키가 크다.,
10-5|long|긴|The snake is long.|뱀은 길다.,
10-5|pretty|예쁜, 귀여운|You look pretty.|너 예뻐 보인다.,
10-5|ugly|못생긴, 보기 싫은|The monster is ugly.|괴물은 못생겼다.,
10-5|handsome|잘생긴|He is handsome.|그는 잘생겼다.,
10-5|face|얼굴|Your face is red.|네 얼굴이 빨갛다.,
10-5|thin|날씬한, 얇은|The book is thin.|책은 얇다.,
10-5|fat|뚱뚱한, 살찐|The pig is fat.|돼지는 뚱뚱하다.,
10-5|curly|곱슬곱슬한|She has curly hair.|그녀는 곱슬머리다.,
10-5|blond|금발인|He has blond hair.|그는 금발이다.,
10-5|change|바꾸다, 변하다|Leaves change color.|나뭇잎은 색이 변한다.,
10-5|lovely|사랑스러운|What a lovely day.|정말 사랑스러운 날이다.,
10-5|cute|귀여운|The puppy is cute.|강아지는 귀엽다.,
10-5|normal|평범한, 정상적인|It is a normal day.|평범한 날이다.,
10-5|beautiful|아름다운|The flower is beautiful.|꽃은 아름답다.,
10-5|look like|~처럼 보이다|You look like your mom.|너는 엄마를 닮았다.,
10-5|show up|나타나다|He didn't show up.|그는 나타나지 않았다.,
10-6|kind|친절한|She is very kind.|그녀는 매우 친절하다.,
10-6|funny|웃기는, 재미있는|The clown is funny.|광대는 웃기다.,
10-6|quiet|조용한|Be quiet in the library.|도서관에서는 조용히 해라.,
10-6|careful|주의 깊은, 조심하는|Be careful with the knife.|칼을 조심해라.,
10-6|shy|수줍음을 많이 타는|The boy is shy.|그 소년은 수줍음이 많다.,
10-6|stupid|어리석은, 멍청한|Don't do stupid things.|어리석은 짓을 하지 마라.,
10-6|lazy|게으른|Don't be lazy.|게으르지 마라.,
10-6|calm|차분한, 침착한|Stay calm.|침착해라.,
10-6|smart|똑똑한, 영리한|You are smart.|너는 똑똑하다.,
10-6|clever|영리한, 똑똑한|The fox is clever.|여우는 영리하다.,
10-6|wise|지혜로운, 현명한|My grandpa is wise.|우리 할아버지는 지혜로우시다.,
10-6|honest|정직한, 솔직한|An honest person tells the truth.|정직한 사람은 진실을 말한다.,
10-6|polite|예의 바른, 공손한|He is polite.|그는 예의 바르다.,
10-6|friendly|친절한, 우호적인|My dog is friendly.|내 개는 친절하다.,
10-6|active|활동적인|She is very active.|그녀는 매우 활동적이다.,
10-6|brave|용감한|Be brave.|용감해져라.,
10-6|curious|호기심이 많은|I am curious about it.|나는 그것이 궁금하다.,
10-6|character|성격, 특징|He has a good character.|그는 좋은 성격을 가졌다.,
10-6|on time|시간을 어기지 않고|Please be on time.|제시간에 와라.,
10-6|on my own|나 혼자 힘으로|I did it on my own.|나는 나 혼자 힘으로 그것을 했다.,
10-7|job|일, 직장|What is your job?|너의 직업은 무엇이니?,
10-7|firefighter|소방관|The firefighter is brave.|소방관은 용감하다.,
10-7|librarian|사서|The librarian loves books.|사서는 책을 사랑한다.,
10-7|pilot|조종사, 비행사|A pilot flies a plane.|조종사는 비행기를 조종한다.,
10-7|want|원하다, ~하고 싶다|I want some water.|나는 물을 좀 원한다.,
10-7|police officer|경찰관|The police officer helps people.|경찰관은 사람들을 돕는다.,
10-7|scientist|과학자|A scientist studies science.|과학자는 과학을 연구한다.,
10-7|worker|노동자, 근로자|He is a hard worker.|그는 열심히 일하는 노동자다.,
10-7|become|~이 되다|I want to become a singer.|나는 가수가 되고 싶다.,
10-7|reporter|기자|The reporter writes news.|기자는 뉴스를 쓴다.,
10-7|farmer|농부, 농장주|The farmer grows rice.|농부는 벼를 재배한다.,
10-7|writer|작가|She is a famous writer.|그녀는 유명한 작가이다.,
10-7|engineer|기사, 기술자|My dad is an engineer.|우리 아빠는 기술자이시다.,
10-7|work|일하다, 근무하다|They work hard.|그들은 열심히 일한다.,
10-7|company|회사, 동료|It is a big company.|그것은 큰 회사이다.,
10-7|director|감독, 연출자|Who is the movie director?|영화 감독이 누구니?,
10-7|future|미래|Think about the future.|미래에 대해 생각해라.,
10-7|experience|경험|It was a good experience.|좋은 경험이었다.,
10-7|be interested in|~에 관심이 있다|I am interested in music.|나는 음악에 관심이 있다.,
10-7|come true|이루어지다|Dreams come true.|꿈은 이루어진다.,
10-8|play|놀다|Let's play together.|함께 놀자.,
10-8|walk|걷다|We walk to school.|우리는 학교에 걸어간다.,
10-8|run|달리다, 뛰다|Can you run fast?|너는 빨리 달릴 수 있니?,
10-8|kick|차다|Kick the ball.|공을 차라.,
10-8|jump|뛰다, 도약하다|Jump high.|높이 뛰어라.,
10-8|throw|던지다|Throw the stone.|돌을 던져라.,
10-8|use|쓰다, 사용하다|Use a fork.|포크를 사용해라.,
10-8|close|닫다|Close the door.|문을 닫아라.,
10-8|cry|울다|Don't cry.|울지 마라.,
10-8|act|연기하다, 행동하다|Act nicely.|멋지게 행동해라.,
10-8|move|움직이다, 이사하다|Don't move.|움직이지 마라.,
10-8|shout|소리치다|Never shout.|절대 소리치지 마라.,
10-8|carry|나르다|Carry this box.|이 상자를 날라라.,
10-8|drop|떨어뜨리다|Don't drop it.|그것을 떨어뜨리지 마라.,
10-8|try|노력하다, 시도하다|Try again.|다시 시도해라.,
10-8|check|확인하다|Check the time.|시간을 확인해라.,
10-8|bring|가져오다|Bring me water.|물을 가져와라.,
10-8|laugh|웃다|We laugh loud.|우리는 크게 웃는다.,
10-8|have a seat|자리에 앉다|Please have a seat.|자리에 앉으세요.,
10-8|get out of|~에서 나가다|Get out of the car.|차에서 내려라(나가라).,
10-9|sad|슬픈|I feel sad.|나는 슬프다.,
10-9|happy|행복한|I am happy.|나는 행복하다.,
10-9|afraid|무서워하는, 겁내는|Don't be afraid.|무서워하지 마라.,
10-9|angry|화난, 성난|He is angry.|그는 화가 났다.,
10-9|glad|기쁜, 반가운|I am glad to see you.|너를 봐서 기쁘다.,
10-9|lonely|외로운, 쓸쓸한|I feel lonely.|나는 외롭다.,
10-9|serious|심각한, 진지한|Are you serious?|너 진심이니?,
10-9|nervous|불안해하는, 긴장한|I am nervous.|나는 긴장된다.,
10-9|scared|무서워하는|I am scared of ghosts.|나는 유령이 무섭다.,
10-9|upset|속상한, 화난|Don't get upset.|속상해하지 마라.,
10-9|surprised|놀란|I was surprised.|나는 놀랐다.,
10-9|bored|지루해 하는|I am bored.|나는 지루하다.,
10-9|pleased|기쁜, 만족해하는|I am pleased.|나는 기쁘다.,
10-9|excited|신이 난, 흥분한|I am excited.|나는 신이 난다.,
10-9|worry|걱정하다|Don't worry.|걱정하지 마라.,
10-9|miss|그리워하다|I miss you.|나는 네가 그립다.,
10-9|excuse|용서하다, 변명|Excuse me.|실례합니다. (용서하세요.),
10-9|complain|불평하다|Don't complain.|불평하지 마라.,
10-9|be proud of|~을 자랑스러워하다|I am proud of you.|나는 네가 자랑스럽다.,
10-9|would like to|~하고 싶다|I would like to go.|나는 가고 싶다.,
10-10|idea|발상, 생각|Good idea.|좋은 생각이다.,
10-10|dream|꿈|I have a dream.|나는 꿈이 있다.,
10-10|believe|믿다|Believe in yourself.|너 자신을 믿어라.,
10-10|think|생각하다|What do you think?|너는 어떻게 생각하니?,
10-10|know|알다|I know him.|나는 그를 안다.,
10-10|need|필요로 하다|I need help.|나는 도움이 필요하다.,
10-10|hope|바라다, 희망하다|I hope so.|나도 그러길 바란다.,
10-10|wish|원하다, 소원|Make a wish.|소원을 빌어라.,
10-10|decide|결정하다|You decide.|네가 결정해라.,
10-10|guess|추측하다|Guess what?|뭔지 맞춰봐?,
10-10|forget|잊다|Don't forget.|잊지 마라.,
10-10|remember|기억하다|I remember that.|나는 그것을 기억한다.,
10-10|wonder|궁금하다|I wonder why.|왜 그런지 궁금하다.,
10-10|keep|유지하다, 지키다|Keep it secret.|비밀을 지켜라.,
10-10|understand|이해하다|I understand.|나는 이해한다.,
10-10|plan|계획|What is the plan?|계획이 무엇이니?,
10-10|mind|마음, 정신|Change your mind.|마음을 바꿔라.,
10-10|question|질문, 문제|Ask a question.|질문을 해라.,
10-10|feel like|~하고 싶다|I feel like dancing.|나는 춤추고 싶다.,
10-10|give up|포기하다|Don't give up.|포기하지 마라.,
10-11|talk|말하다, 이야기하다|Let's talk.|이야기하자.,
10-11|speak|말하다, 이야기하다|Can you speak English?|영어를 할 줄 아니?,
10-11|call|부르다, 전화하다|Call me later.|나중에 전화해.,
10-11|tell|알리다, 말하다|Tell me the truth.|진실을 말해줘.,
10-11|say|말하다|Say yes.|'네'라고 말해라.,
10-11|ask|묻다, 질문하다|Can I ask you?|너에게 물어봐도 될까?,
10-11|answer|답하다, 대답|I know the answer.|나는 답을 안다.,
10-11|show|보여 주다, 공연|Show me your bag.|네 가방을 보여줘.,
10-11|express|나타내다, 표현하다|Express your feelings.|너의 감정을 표현해라.,
10-11|message|메시지, 전갈|I got a message.|나는 메시지를 받았다.,
10-11|mean|의미하다|What do you mean?|무슨 뜻이니?,
10-11|discuss|상의하다, 논의하다|Let's discuss it.|그것을 논의하자.,
10-11|explain|설명하다|Please explain this.|이것을 설명해 주세요.,
10-11|problem|문제, 어려움|I have a problem.|나는 문제가 있다.,
10-11|agree|동의하다, 찬성하다|I agree with you.|나는 너에게 동의한다.,
10-11|allow|허락하다, 허용하다|My mom allows it.|엄마는 그것을 허락하신다.,
10-11|accept|받아들이다, 수락하다|Accept my gift.|내 선물을 받아줘.,
10-11|promise|약속하다, 약속|Keep your promise.|약속을 지켜라.,
10-11|find out|알아내다, 발견하다|I will find out.|내가 알아낼 것이다.,
10-11|say hello to|~에게 안부를 전하다|Say hello to your dad.|너의 아빠에게 안부를 전해줘.,
10-12|hear|듣다, 들리다|Can you hear me?|내 말이 들리니?,
10-12|listen|듣다, 귀 기울이다|Listen carefully.|주의 깊게 들어라.,
10-12|see|보다|I see a bird.|나는 새를 본다.,
10-12|watch|보다, 지켜보다|I watch TV.|나는 TV를 본다.,
10-12|look|~해 보이다, 보다|You look happy.|너는 행복해 보인다.,
10-12|voice|목소리, 음성|Your voice is nice.|너의 목소리는 좋다.,
10-12|feel|느끼다|I feel cold.|나는 춥게 느낀다.,
10-12|smell|냄새가 나다, 냄새|It smells good.|좋은 냄새가 난다.,
10-12|sound|~하게 들리다, 소리|It sounds fun.|재미있게 들린다.,
10-12|taste|맛이 나다, 맛|This tastes sweet.|이것은 단맛이 난다.,
10-12|loud|큰, 시끄러운|The music is loud.|음악 소리가 크다.,
10-12|touch|만지다|Don't touch it.|그것을 만지지 마라.,
10-12|soft|부드러운, 푹신한|The cat is soft.|고양이는 부드럽다.,
10-12|hard|단단한, 열심히|The rock is hard.|바위는 단단하다.,
10-12|sweet|달콤한, 단|Candy is sweet.|사탕은 달콤하다.,
10-12|sharp|날카로운, 뾰족한|The knife is sharp.|칼이 날카롭다.,
10-12|same|같은, 동일한|We are the same.|우리는 같다.,
10-12|color|색, 색깔|What color is it?|그것은 무슨 색이니?,
10-12|be good at|~을 잘하다|I am good at math.|나는 수학을 잘한다.,
10-12|make a noise|시끄럽게 하다|Don't make a noise.|시끄럽게 하지 마라.,
10-13|visit|방문하다|I visit my grandma.|나는 할머니를 방문한다.,
10-13|zoo|동물원|Let's go to the zoo.|동물원에 가자.,
10-13|bank|은행|Where is the bank?|은행이 어디니?,
10-13|park|공원|I run in the park.|나는 공원에서 달린다.,
10-13|airport|공항|The airport is busy.|공항은 바쁘다.,
10-13|place|장소|This is a nice place.|이곳은 좋은 장소다.,
10-13|town|(소)도시, 마을|I live in a small town.|나는 작은 마을에 산다.,
10-13|village|마을, 부락|My grandpa lives in a village.|할아버지는 시골 마을에 사신다.,
10-13|city|도시|Seoul is a big city.|서울은 큰 도시다.,
10-13|bookstore|서점|I buy books at the bookstore.|나는 서점에서 책을 산다.,
10-13|market|시장|Mom goes to the market.|엄마는 시장에 가신다.,
10-13|square|광장, 정사각형|Meet me at the square.|광장에서 만나자.,
10-13|theater|극장|We watch a movie at the theater.|우리는 극장에서 영화를 본다.,
10-13|bakery|빵집, 제과점|The bakery smells good.|빵집에서 좋은 냄새가 난다.,
10-13|space|공간, 우주|There is no space.|공간이 없다.,
10-13|station|역, 정류장|Go to the bus station.|버스 정류장으로 가라.,
10-13|museum|박물관, 미술관|We learn history at the museum.|우리는 박물관에서 역사를 배운다.,
10-13|gallery|미술관, 화랑|The gallery has pictures.|미술관에는 그림들이 있다.,
10-13|line up|줄을 서다|Please line up.|줄을 서 주세요.,
10-13|stop by|~에 잠시 들르다|I will stop by your house.|너희 집에 잠시 들를게.,
10-14|wall|담, 벽|The wall is high.|담이 높다.,
10-14|garden|정원, 뜰|I water the garden.|나는 정원에 물을 준다.,
10-14|bathroom|욕실, 화장실|Where is the bathroom?|화장실이 어디니?,
10-14|stair|계단|Walk up the stairs.|계단을 걸어 올라가라.,
10-14|wash|씻다, 빨래하다|Wash your face.|세수해라.,
10-14|gate|문, 출입구|Close the gate.|대문을 닫아라.,
10-14|umbrella|우산|Take an umbrella.|우산을 가져가라.,
10-14|roof|지붕|The roof is red.|지붕은 빨간색이다.,
10-14|kitchen|부엌, 주방|Mom is in the kitchen.|엄마는 부엌에 계신다.,
10-14|refrigerator|냉장고|The milk is in the refrigerator.|우유는 냉장고에 있다.,
10-14|floor|바닥, 층|Clean the floor.|바닥을 청소해라.,
10-14|living room|거실|We watch TV in the living room.|우리는 거실에서 TV를 본다.,
10-14|bedroom|침실|I sleep in the bedroom.|나는 침실에서 잔다.,
10-14|address|주소|What is your address?|너의 주소는 무엇이니?,
10-14|stay|머무르다|Stay here.|여기에 머물러라.,
10-14|garbage|쓰레기|Throw away the garbage.|쓰레기를 버려라.,
10-14|housework|가사, 집안일|I help with housework.|나는 집안일을 돕는다.,
10-14|comfortable|편안한, 쾌적한|The chair is comfortable.|그 의자는 편안하다.,
10-14|turn off|~을 끄다|Turn off the light.|불을 꺼라.,
10-14|go to bed|잠자리에 들다|I go to bed at 9.|나는 9시에 잠자리에 든다.,
10-15|salt|소금|Pass me the salt.|소금 좀 건네줘.,
10-15|sugar|설탕|Sugar is sweet.|설탕은 달다.,
10-15|meat|고기|Do you like meat?|너는 고기를 좋아하니?,
10-15|snack|간단한 식사, 간식|Let's have a snack.|간식 먹자.,
10-15|fresh|신선한, 상쾌한|This fruit is fresh.|이 과일은 신선하다.,
10-15|sauce|소스, 양념|The sauce is spicy.|소스가 맵다.,
10-15|rice|쌀, 밥|We eat rice.|우리는 밥을 먹는다.,
10-15|bottle|병|Open the bottle.|병을 열어라.,
10-15|heat|가열하다, 열기|Heat the soup.|수프를 데워라.,
10-15|bake|굽다|I bake cookies.|나는 쿠키를 굽는다.,
10-15|meal|식사, 끼니|Enjoy your meal.|식사 맛있게 하세요.,
10-15|cook|요리하다, 요리사|My dad cooks well.|우리 아빠는 요리를 잘하신다.,
10-15|mix|섞다, 혼합하다|Mix it well.|잘 섞어라.,
10-15|pour|붓다, 따르다|Pour the milk.|우유를 부어라.,
10-15|melt|녹다, 녹이다|The ice melts.|얼음이 녹는다.,
10-15|delicious|아주 맛있는|It is delicious.|그것은 아주 맛있다.,
10-15|freeze|얼다, 얼리다|Water freezes in winter.|겨울에는 물이 언다.,
10-15|recipe|요리법, 레시피|Follow the recipe.|요리법을 따라라.,
10-15|such as|~와 같은|I like fruit such as apples.|나는 사과 같은 과일을 좋아한다.,
10-15|do the dishes|설거지를 하다|I do the dishes.|나는 설거지를 한다.,
10-16|eat|먹다|Let's eat lunch.|점심을 먹자.,
10-16|drink|마시다|Drink some water.|물을 좀 마셔라.,
10-16|knife|칼|The knife is sharp.|칼이 날카롭다.,
10-16|cup|컵, 잔|A cup of tea.|차 한 잔.,
10-16|dish|접시, 요리|Wash the dish.|접시를 씻어라.,
10-16|juice|주스, 즙|I like orange juice.|나는 오렌지 주스를 좋아한다.,
10-16|soup|수프, 국|The soup is hot.|수프가 뜨겁다.,
10-16|salad|샐러드|Salad is healthy.|샐러드는 건강에 좋다.,
10-16|seafood|해산물|I love seafood.|나는 해산물을 사랑한다.,
10-16|menu|메뉴, 식단표|Look at the menu.|메뉴를 봐라.,
10-16|hungry|배고픈|I am hungry.|나는 배가 고프다.,
10-16|thirsty|목이 마른|I am thirsty.|나는 목이 마르다.,
10-16|open|열다, 열린|The shop is open.|가게가 열려 있다.,
10-16|order|주문하다|Can I order now?|지금 주문해도 될까요?,
10-16|chef|요리사, 주방장|The chef cooks well.|그 요리사는 요리를 잘한다.,
10-16|serve|제공하다, 차려 내다|They serve pizza.|그들은 피자를 제공한다.,
10-16|dessert|디저트, 후식|I want dessert.|나는 디저트를 원한다.,
10-16|restaurant|식당, 레스토랑|Go to a restaurant.|식당에 가라.,
10-16|eat out|외식하다|We eat out today.|우리는 오늘 외식한다.,
10-16|wait for|~을 기다리다|Wait for me.|나를 기다려라.,
10-17|pants|바지|My pants are blue.|내 바지는 파란색이다.,
10-17|belt|벨트, 허리띠|Wear a belt.|벨트를 매라.,
10-17|shirt|셔츠|Iron your shirt.|셔츠를 다림질해라.,
10-17|skirt|치마|She wears a skirt.|그녀는 치마를 입는다.,
10-17|socks|양말|Put on your socks.|양말을 신어라.,
10-17|shoes|신발|New shoes.|새 신발.,
10-17|hat|(테가 있는) 모자|I have a big hat.|나는 큰 모자를 가지고 있다.,
10-17|cap|(챙이 달린) 모자|He wears a cap.|그는 모자를 쓴다.,
10-17|sweater|스웨터|A warm sweater.|따뜻한 스웨터.,
10-17|jacket|재킷, 상의|Take your jacket.|재킷을 챙겨라.,
10-17|gloves|장갑|Wear gloves in winter.|겨울에는 장갑을 껴라.,
10-17|pocket|주머니|My pocket is empty.|내 주머니는 비었다.,
10-17|clothes|옷, 의복|Wash your clothes.|옷을 빨아라.,
10-17|wear|입다, 쓰다, 신다|I wear glasses.|나는 안경을 쓴다.,
10-17|fashion|패션|I like fashion.|나는 패션을 좋아한다.,
10-17|design|디자인하다, 디자인|Design a dress.|드레스를 디자인해라.,
10-17|popular|인기 있는|He is popular.|그는 인기가 있다.,
10-17|style|스타일, 방식|Nice style!|멋진 스타일이다!,
10-17|put on|~을 입다(신다/쓰다)|Put on your coat.|코트를 입어라.,
10-17|take off|~을 벗다|Take off your shoes.|신발을 벗어라.,
10-18|subway|지하철|Take the subway.|지하철을 타라.,
10-18|bike|자전거|Ride a bike.|자전거를 타라.,
10-18|airplane|비행기|Look at the airplane.|비행기를 봐라.,
10-18|truck|트럭|A big truck.|큰 트럭.,
10-18|boat|보트, 배|Row the boat.|배를 저어라.,
10-18|ride|타다, 몰다|I can ride a horse.|나는 말을 탈 수 있다.,
10-18|street|거리, 도로|Walk down the street.|거리를 따라 걸어라.,
10-18|road|도로, 길|Cross the road.|길을 건너라.,
10-18|drive|운전하다|Drive safely.|안전하게 운전해라.,
10-18|right|오른쪽, 오른쪽의|Turn right.|오른쪽으로 돌아라.,
10-18|left|왼쪽, 왼쪽의|Turn left.|왼쪽으로 돌아라.,
10-18|block|구역, 막다|Walk one block.|한 블록 걸어라.,
10-18|straight|곧은, 똑바른|Go straight.|똑바로 가라.,
10-18|bridge|다리|Cross the bridge.|다리를 건너라.,
10-18|across|가로질러, 맞은편에|Walk across the street.|길을 건너라.,
10-18|sign|표지판, 서명하다|Read the sign.|표지판을 읽어라.,
10-18|corner|모퉁이, 구석|At the corner.|모퉁이에서.,
10-18|stop|멈추다, 정류장|Stop here.|여기서 멈춰라.,
10-18|get on|~에 타다|Get on the bus.|버스에 타라.,
10-18|hurry up|서두르다|Hurry up!|서둘러!,
10-19|teacher|교사, 선생|My teacher is nice.|나의 선생님은 좋으시다.,
10-19|student|학생|I am a student.|나는 학생이다.,
10-19|test|시험, 실험|We have a test.|우리는 시험이 있다.,
10-19|library|도서관|Go to the library.|도서관에 가라.,
10-19|playground|운동장, 놀이터|Play in the playground.|운동장에서 놀아라.,
10-19|gym|체육관|Meet at the gym.|체육관에서 만나자.,
10-19|contest|대회, 콘테스트|Win the contest.|대회에서 우승해라.,
10-19|follow|따르다, 따라가다|Follow me.|나를 따라와라.,
10-19|school uniform|교복|Wear a school uniform.|교복을 입어라.,
10-19|hall|복도, 홀|Don't run in the hall.|복도에서 뛰지 마라.,
10-19|cafeteria|구내식당, 급식실|Eat in the cafeteria.|급식실에서 먹어라.,
10-19|locker|사물함|Open your locker.|사물함을 열어라.,
10-19|homeroom|홈룸, 출석 반|Go to homeroom.|홈룸(교실)으로 가라.,
10-19|grade|성적, 학년|Good grades.|좋은 성적.,
10-19|teach|가르치다|Can you teach me?|나를 가르쳐 줄 수 있니?,
10-19|learn|배우다|We learn English.|우리는 영어를 배운다.,
10-19|subject|과목|What is your favorite subject?|네가 가장 좋아하는 과목은 뭐니?,
10-19|borrow|빌리다|Borrow a book.|책을 빌려라.,
10-19|make friends with|(~와) 친구가 되다|Make friends with him.|그와 친구가 되어라.,
10-19|after school|방과 후에|See you after school.|방과 후에 보자.,
10-20|homework|숙제, 과제|Do your homework.|숙제를 해라.,
10-20|lesson|수업, 교훈|The lesson starts at 9.|수업은 9시에 시작한다.,
10-20|study|공부하다|Study hard.|열심히 공부해라.,
10-20|difficult|어려운|Math is difficult.|수학은 어렵다.,
10-20|classroom|교실|Clean the classroom.|교실을 청소해라.,
10-20|review|복습하다, 검토하다|Review the lesson.|수업을 복습해라.,
10-20|write|쓰다|Write your name.|이름을 써라.,
10-20|solve|해결하다, 풀다|Solve the problem.|문제를 풀어라.,
10-20|correct|옳은, 맞는|The answer is correct.|답이 맞다.,
10-20|wrong|틀린, 잘못된|It is wrong.|그것은 틀렸다.,
10-20|diary|일기|Write a diary.|일기를 써라.,
10-20|report|보고서, 보고하다|Write a report.|보고서를 써라.,
10-20|fail|실패하다, 떨어지다|Don't fail the test.|시험에 떨어지지 마라.,
10-20|note|필기, 쪽지|Take notes.|필기를 해라.,
10-20|speech|연설|Make a speech.|연설을 해라.,
10-20|finish|끝내다, 끝나다|Finish your work.|일을 끝내라.,
10-20|mistake|실수, 잘못|It's a mistake.|그것은 실수다.,
10-20|absent|결석한|He is absent.|그는 결석했다.,
10-20|take a break|휴식을 취하다|Let's take a break.|휴식을 취하자.,
10-20|get up|일어나다|Get up early.|일찍 일어나라.,
10-21|date|날짜|What is the date?|날짜가 어떻게 되니?,
10-21|week|주, 일주일|See you next week.|다음 주에 보자.,
10-21|from|~에서, ~부터|I am from Seoul.|나는 서울에서 왔다.,
10-21|month|달, 월|Next month is May.|다음 달은 5월이다.,
10-21|year|한 해, 1년|Happy New Year!|새해 복 많이 받아!,
10-21|early|일찍, 이른|I get up early.|나는 일찍 일어난다.,
10-21|today|오늘|Today is Friday.|오늘은 금요일이다.,
10-21|yesterday|어제|It rained yesterday.|어제 비가 왔다.,
10-21|tomorrow|내일|I will go tomorrow.|나는 내일 갈 것이다.,
10-21|past|과거, 지난날|Don't live in the past.|과거에 살지 마라.,
10-21|tonight|오늘 밤, 오늘 밤에|See you tonight.|오늘 밤에 보자.,
10-21|hour|시간, 시각|I study for an hour.|나는 한 시간 동안 공부한다.,
10-21|minute|(시간 단위) 분|Wait a minute.|잠시만(1분만) 기다려.,
10-21|soon|곧, 머지않아|See you soon.|곧 보자.,
10-21|calendar|달력|Look at the calendar.|달력을 봐라.,
10-21|during|~ 동안, ~중에|Be quiet during the test.|시험 동안에는 조용히 해라.,
10-21|until|~까지, ~할 때까지|Wait until 5 o'clock.|5시까지 기다려라.,
10-21|moment|순간, 잠시|Wait a moment.|잠시만 기다려.,
10-21|be late for|~에 늦다|Don't be late for school.|학교에 늦지 마라.,
10-21|at the same time|동시에|They arrived at the same time.|그들은 동시에 도착했다.,
10-22|first|첫 번째의|Who is the first?|첫 번째는 누구니?,
10-22|second|두 번째의|This is the second time.|이번이 두 번째다.,
10-22|third|세 번째의|He won the third prize.|그는 3등 상을 탔다.,
10-22|again|한 번 더, 다시|Try again.|다시 시도해라.,
10-22|before|~전에|Wash hands before eating.|먹기 전에 손을 씻어라.,
10-22|after|~후에(뒤에)|Let's play after school.|방과 후에 놀자.,
10-22|never|절대 ~ 않다|I never tell a lie.|나는 절대 거짓말하지 않는다.,
10-22|sometimes|때때로, 가끔|Sometimes I swim.|가끔 나는 수영한다.,
10-22|often|자주, 종종|I often visit the park.|나는 종종 공원에 간다.,
10-22|usually|보통, 대개|I usually wake up at 7.|나는 보통 7시에 일어난다.,
10-22|always|항상, 언제나|I always love you.|나는 항상 너를 사랑한다.,
10-22|once|한 번|I met him once.|나는 그를 한 번 만났다.,
10-22|final|마지막의|This is the final game.|이것이 마지막 게임이다.,
10-22|last|마지막의, 지난|Last week was fun.|지난주는 재미있었다.,
10-22|next|다음의|See you next time.|다음에 보자.,
10-22|step|단계, 걸음|Watch your step.|발밑을 조심해라.,
10-22|repeat|반복하다, 되풀이하다|Please repeat that.|다시 말씀해 주세요.,
10-22|suddenly|갑자기|It stopped suddenly.|그것이 갑자기 멈췄다.,
10-22|all the time|항상, 줄곧, 내내|He smiles all the time.|그는 항상 미소 짓는다.,
10-22|from time to time|가끔, 때때로|I see her from time to time.|나는 가끔 그녀를 본다.,
10-23|clean|깨끗한|My room is clean.|내 방은 깨끗하다.,
10-23|dirty|더러운|Your hands are dirty.|네 손은 더럽다.,
10-23|busy|바쁜|I am busy today.|나는 오늘 바쁘다.,
10-23|poor|가난한|He helps poor people.|그는 가난한 사람들을 돕는다.,
10-23|slow|느린|The turtle is slow.|거북이는 느리다.,
10-23|fast|빠른, 빨리|The car is fast.|그 차는 빠르다.,
10-23|quickly|빨리, 빠르게|Do it quickly.|빨리 해라.,
10-23|sleepy|졸린, 졸음이 오는|I am so sleepy.|나는 너무 졸리다.,
10-23|heavy|무거운|This box is heavy.|이 상자는 무겁다.,
10-23|light|가벼운, 밝은|A feather is light.|깃털은 가볍다.,
10-23|safe|안전한|This place is safe.|이곳은 안전하다.,
10-23|wet|젖은|My hair is wet.|내 머리카락은 젖었다.,
10-23|ready|준비가 된|Are you ready?|준비됐니?,
10-23|dark|어두운, 캄캄한|It is dark outside.|밖은 어둡다.,
10-23|bright|밝은, 빛나는|The sun is bright.|태양은 밝다.,
10-23|perfect|완벽한|It is perfect.|그것은 완벽하다.,
10-23|different|다른|We are different.|우리는 다르다.,
10-23|terrible|끔찍한, 형편없는|The food was terrible.|그 음식은 끔찍했다.,
10-23|be full of|~로 가득 차다|The box is full of toys.|상자는 장난감으로 가득 차 있다.,
10-23|for a while|잠시 동안|Rest for a while.|잠시 동안 쉬어라.,
10-24|huge|엄청난, 거대한|The elephant is huge.|코끼리는 거대하다.,
10-24|small|작은, 소규모의|The ant is small.|개미는 작다.,
10-24|narrow|좁은|The road is narrow.|길은 좁다.,
10-24|wide|넓은|The river is wide.|강은 넓다.,
10-24|round|둥근, 동그란|The ball is round.|공은 둥글다.,
10-24|part|부분, 일부|It is part of the game.|그것은 게임의 일부다.,
10-24|line|줄, 선|Draw a line.|선을 그려라.,
10-24|side|쪽, 면; 옆|Look at the other side.|다른 쪽을 봐라.,
10-24|shape|모양, 형태|What shape is it?|그것은 무슨 모양이니?,
10-24|size|크기; 치수|What is your size?|너의 사이즈는 몇이니?,
10-24|type|종류, 유형|What type do you like?|어떤 종류를 좋아하니?,
10-24|large|큰, 넓은|I want a large pizza.|나는 큰 피자를 원한다.,
10-24|high|높은|The mountain is high.|산은 높다.,
10-24|low|낮은|The wall is low.|벽은 낮다.,
10-24|deep|깊은|The sea is deep.|바다는 깊다.,
10-24|thick|두꺼운, 두툼한|The book is thick.|그 책은 두껍다.,
10-24|flat|평평한, 납작한|The table is flat.|탁자는 평평하다.,
10-24|object|물체, 물건|What is that object?|저 물체는 무엇이니?,
10-24|for example|예를 들어|Fruits, for example, apples.|과일들, 예를 들어 사과.,
10-24|a kind of|일종의|It is a kind of fruit.|그것은 일종의 과일이다.,
10-25|number|수, 숫자, 번호|Pick a number.|숫자를 골라라.,
10-25|some|몇몇의, 약간의|I want some water.|나는 물을 좀 원한다.,
10-25|each|각각의|Each student has a book.|각각의 학생은 책을 가지고 있다.,
10-25|every|모든|I study every day.|나는 매일 공부한다.,
10-25|all|모든|All students are here.|모든 학생이 여기에 있다.,
10-25|only|유일한, 단지, 오직|I have only one pen.|나는 펜이 오직 하나 있다.,
10-25|many|(수가) 많은|I have many books.|나는 많은 책을 가지고 있다.,
10-25|much|(양이) 많은|Thank you very much.|대단히 감사합니다.,
10-25|half|반, 절반|Give me half.|나에게 절반을 줘.,
10-25|add|추가하다; 더하다|Add sugar to the tea.|차에 설탕을 넣어라.,
10-25|empty|빈, 비어 있는|The box is empty.|상자가 비어 있다.,
10-25|fill|채우다|Fill the cup.|컵을 채워라.,
10-25|count|(수를) 세다|Count to ten.|10까지 세어라.,
10-25|enough|충분한, 충분히|I have enough money.|나는 충분한 돈이 있다.,
10-25|total|전체의, 합계|What is the total?|합계가 얼마니?,
10-25|piece|조각, 한 개|A piece of cake.|케이크 한 조각.,
10-25|nothing|아무것도 ~ 아니다|I have nothing.|나는 아무것도 없다.,
10-25|a lot of|(수, 양이) 많은|I have a lot of toys.|나는 많은 장난감을 가지고 있다.,
10-25|a few|(수가) 약간의|I have a few friends.|나는 친구가 몇 명 있다.,
10-25|a little|(양이) 약간의|I speak a little English.|나는 영어를 조금 한다.,
10-26|south|남쪽, 남쪽의|Birds fly south.|새들은 남쪽으로 날아간다.,
10-26|east|동쪽, 동쪽의|The sun rises in the east.|해는 동쪽에서 뜬다.,
10-26|west|서쪽, 서쪽의|The sun sets in the west.|해는 서쪽으로 진다.,
10-26|north|북쪽, 북쪽의|The north is cold.|북쪽은 춥다.,
10-26|under|~아래에|Look under the bed.|침대 아래를 봐라.,
10-26|below|(~보다) 아래에|See the picture below.|아래 그림을 봐라.,
10-26|behind|~ 뒤에|Don't hide behind me.|내 뒤에 숨지 마라.,
10-26|between|~ 사이에|Sit between us.|우리 사이에 앉아라.,
10-26|center|중심, 중앙|Stand in the center.|중앙에 서라.,
10-26|around|~ 주위(둘레)에|Run around the park.|공원 주위를 달려라.,
10-26|toward|~ 쪽으로|Walk toward the door.|문쪽으로 걸어가라.,
10-26|above|(~보다) 위에|Look above your head.|네 머리 위를 봐라.,
10-26|over|~ 위에|Jump over the box.|상자를 넘어 뛰어라.,
10-26|far|먼, 멀리|My school is far.|우리 학교는 멀다.,
10-26|inside|안에(서)|Let's go inside.|안으로 들어가자.,
10-26|outside|밖에(서)|It is cold outside.|밖은 춥다.,
10-26|top|맨 위, 정상|Climb to the top.|정상으로 올라가라.,
10-26|bottom|맨 아래, 바닥|It sank to the bottom.|그것은 바닥으로 가라앉았다.,
10-26|next to|~ 옆에|Sit next to me.|내 옆에 앉아라.,
10-26|in front of|~ 앞에|Meet in front of the school.|학교 앞에서 만나자.,
10-27|map|지도|I need a map.|나는 지도가 필요하다.,
10-27|vacation|방학|Winter vacation starts.|겨울 방학이 시작된다.,
10-27|beach|해변, 바닷가|Let's go to the beach.|해변으로 가자.,
10-27|trip|여행|How was your trip?|여행 어땠니?,
10-27|tour|여행, 관광|We went on a bus tour.|우리는 버스 여행을 갔다.,
10-27|travel|여행하다|I want to travel.|나는 여행하고 싶다.,
10-27|backpack|배낭|Pack your backpack.|배낭을 싸라.,
10-27|climb|오르다|Can you climb the tree?|너는 나무에 오를 수 있니?,
10-27|leave|떠나다, 놓고 가다|Don't leave me.|나를 떠나지 마라.,
10-27|arrive|도착하다|When do we arrive?|우리는 언제 도착하니?,
10-27|return|돌아오다|I will return soon.|나는 곧 돌아올 것이다.,
10-27|guide|안내하다, 안내원|He is our guide.|그는 우리의 안내원이다.,
10-27|tourist|관광객|There are many tourists.|관광객들이 많이 있다.,
10-27|view|전망, 견해|The view is great.|전망이 훌륭하다.,
10-27|memory|기억, 추억|Good memory.|좋은 추억.,
10-27|exciting|신나는|It was an exciting day.|신나는 하루였다.,
10-27|adventure|모험|I like adventure.|나는 모험을 좋아한다.,
10-27|pack|짐을 싸다|Pack your bag.|가방을 싸라.,
10-27|get to|~에 도착하다|How do I get to the station?|역에 어떻게 가나요?,
10-27|take a walk|산책을 하다|Let's take a walk.|산책하자.,
10-28|sport|스포츠, 운동|I like sports.|나는 스포츠를 좋아한다.,
10-28|race|경주, 경기|I won the race.|나는 경주에서 이겼다.,
10-28|baseball|야구|We play baseball.|우리는 야구를 한다.,
10-28|basketball|농구|He is good at basketball.|그는 농구를 잘한다.,
10-28|soccer|축구|Let's play soccer.|축구하자.,
10-28|catch|잡다, 받다|Catch the ball.|공을 잡아라.,
10-28|win|이기다|I want to win.|나는 이기고 싶다.,
10-28|lose|지다, 잃어버리다|Don't lose hope.|희망을 잃지 마라.,
10-28|stadium|경기장|The stadium is big.|경기장은 크다.,
10-28|cheer|환호하다, 응원하다|Cheer for our team.|우리 팀을 응원해라.,
10-28|practice|연습하다|You must practice.|너는 연습해야 한다.,
10-28|rule|규칙|Follow the rules.|규칙을 따라라.,
10-28|player|선수|He is a soccer player.|그는 축구 선수이다.,
10-28|teamwork|팀워크, 협동|Teamwork is important.|팀워크는 중요하다.,
10-28|match|경기, 시합|Watch the match.|경기를 봐라.,
10-28|hold|개최하다, 잡다|Hold my hand.|내 손을 잡아라.,
10-28|score|득점, 점수|What is the score?|점수가 몇이니?,
10-28|possible|가능한|Is it possible?|그것이 가능한가요?,
10-28|work|일하다|I work hard.|나는 열심히 일한다.,
10-28|work out|운동하다|I work out every day.|나는 매일 운동한다.,
10-29|gift|선물|This is a gift.|이것은 선물이다.,
10-29|weekend|주말|Have a nice weekend.|즐거운 주말 보내.,
10-29|birthday|생일|Happy birthday!|생일 축하해!,
10-29|photo|사진|Take a photo.|사진을 찍어라.,
10-29|special|특별한|You are special.|너는 특별하다.,
10-29|prize|상, 상품|I won a prize.|나는 상을 탔다.,
10-29|festival|축제|The festival is fun.|축제는 재미있다.,
10-29|firework|폭죽, 불꽃놀이|Look at the fireworks.|불꽃놀이를 봐라.,
10-29|wonderful|멋진, 훌륭한|It is wonderful.|그것은 멋지다.,
10-29|holiday|휴가, 휴일|Today is a holiday.|오늘은 휴일이다.,
10-29|fair|박람회, 공정한|The game was fair.|그 게임은 공정했다.,
10-29|party|파티|Let's have a party.|파티를 열자.,
10-29|guest|손님|We have a guest.|손님이 계시다.,
10-29|invite|초대하다|I invite you.|너를 초대한다.,
10-29|meeting|회의|The meeting is at 2.|회의는 2시다.,
10-29|present|선물|A birthday present.|생일 선물.,
10-29|volunteer|자원봉사자|He is a volunteer.|그는 자원봉사자다.,
10-29|interview|인터뷰|I have an interview.|나는 인터뷰가 있다.,
10-29|be going to|~할 것이다|I am going to study.|나는 공부할 것이다.,
10-29|take place|(행사가) 열리다|The contest takes place here.|대회가 여기서 열린다.,
10-30|swim|수영하다|I can swim.|나는 수영할 수 있다.,
10-30|read|읽다|Read a book.|책을 읽어라.,
10-30|draw|그리다|I draw a picture.|나는 그림을 그린다.,
10-30|hobby|취미|My hobby is cooking.|내 취미는 요리다.,
10-30|dance|춤추다|Let's dance.|춤추자.,
10-30|free|자유로운, 무료의|It is free.|그것은 무료다.,
10-30|collect|모으다, 수집하다|I collect stamps.|나는 우표를 모은다.,
10-30|paint|칠하다, 그리다|Paint the wall.|벽을 칠해라.,
10-30|game|게임, 경기|Play a game.|게임을 해라.,
10-30|favorite|가장 좋아하는|My favorite color.|내가 가장 좋아하는 색깔.,
10-30|enjoy|즐기다|Enjoy your meal.|식사를 즐겨라.,
10-30|exercise|운동하다|Exercise daily.|매일 운동해라.,
10-30|activity|활동|Outdoor activity.|야외 활동.,
10-30|hiking|하이킹|I go hiking.|나는 하이킹을 간다.,
10-30|fishing|낚시|I like fishing.|나는 낚시를 좋아한다.,
10-30|camping|캠핑|We went camping.|우리는 캠핑을 갔다.,
10-30|outdoor|야외의|Outdoor sports.|야외 스포츠.,
10-30|interesting|재미있는|That is interesting.|그것은 재미있다.,
10-30|have fun|즐기다|Have fun!|즐거운 시간 보내!,
10-30|take a picture of|~의 사진을 찍다|Take a picture of me.|내 사진을 찍어줘.,
10-31|art|미술, 예술|I like art class.|나는 미술 수업을 좋아한다.,
10-31|music|음악|Listen to the music.|음악을 들어라.,
10-31|singer|가수|He is a great singer.|그는 훌륭한 가수다.,
10-31|ticket|표, 입장권|I have a movie ticket.|나는 영화표를 가지고 있다.,
10-31|film|영화|We watched a funny film.|우리는 재미있는 영화를 봤다.,
10-31|story|이야기|Tell me a story.|나에게 이야기를 해줘.,
10-31|famous|유명한|She is a famous actor.|그녀는 유명한 배우다.,
10-31|band|악단, 밴드|The band plays loudly.|밴드가 크게 연주한다.,
10-31|actor|(남자) 배우|He is a handsome actor.|그는 잘생긴 배우다.,
10-31|actress|(여자) 배우|The actress cried.|여배우가 울었다.,
10-31|painting|(물감으로 그린) 그림|Look at that painting.|저 그림을 봐라.,
10-31|stage|무대; 단계|He is on the stage.|그는 무대 위에 있다.,
10-31|artist|화가, 예술가|My mom is an artist.|나의 엄마는 예술가시다.,
10-31|magic|마법, 마술, 마술의|It is like magic.|그것은 마법 같다.,
10-31|novel|소설|I read a novel.|나는 소설을 읽는다.,
10-31|concert|콘서트, 연주회|Let's go to the concert.|콘서트에 가자.,
10-31|role|역할|What is your role?|너의 역할은 무엇이니?,
10-31|main|주된|This is the main idea.|이것이 주된 생각이다.,
10-31|be over|끝나다|The game is over.|게임이 끝났다.,
10-31|go to the movies|영화를 보러 가다|I go to the movies.|나는 영화를 보러 간다.,
10-32|buy|사다, 구입하다|I will buy a toy.|나는 장난감을 살 것이다.,
10-32|sell|팔다, 팔리다|They sell fruit.|그들은 과일을 판다.,
10-32|spend|(돈을) 쓰다, 소비하다|Don't spend too much.|너무 많이 쓰지 마라.,
10-32|list|목록|Make a shopping list.|쇼핑 목록을 만들어라.,
10-32|item|물품, 품목|Choose one item.|한 가지 물품을 골라라.,
10-32|sale|판매; 할인 판매|It is on sale.|그것은 할인 판매 중이다.,
10-32|store|가게, 상점|Go to the store.|가게로 가라.,
10-32|mall|쇼핑몰, 쇼핑센터|The mall is big.|쇼핑몰은 크다.,
10-32|choose|선택하다, 고르다|Choose a color.|색깔을 골라라.,
10-32|pay|지불하다|I will pay for it.|내가 낼게. (지불할게.),
10-32|coupon|쿠폰, 할인권|Use this coupon.|이 쿠폰을 사용해라.,
10-32|waste|낭비하다, 낭비|Don't waste water.|물을 낭비하지 마라.,
10-32|price|값, 가격|What is the price?|가격이 얼마입니까?,
10-32|expensive|비싼|That car is expensive.|저 차는 비싸다.,
10-32|cheap|값싼, 저렴한|This pen is cheap.|이 펜은 싸다.,
10-32|customer|손님, 고객|The customer is happy.|손님이 행복해한다.,
10-32|discount|할인, 할인하다|Can I get a discount?|할인받을 수 있나요?,
10-32|useful|유용한|This tool is useful.|이 도구는 유용하다.,
10-32|try on|~을 입어(신어) 보다|Can I try on this hat?|이 모자를 써봐도 될까요?,
10-32|look around|(주위를) 둘러보다|Let's look around.|둘러보자.,
10-33|nurse|간호사|The nurse helps me.|간호사가 나를 돕는다.,
10-33|sick|아픈, 병든|I feel sick.|나는 몸이 아프다.,
10-33|weak|약한, 힘이 없는|He is too weak.|그는 너무 약하다.,
10-33|strong|튼튼한, 건강한|My dad is strong.|우리 아빠는 튼튼하시다.,
10-33|fever|열|I have a fever.|나는 열이 있다.,
10-33|cough|기침, 기침하다|He has a bad cough.|그는 기침이 심하다.,
10-33|pain|고통, 통증|I feel pain in my leg.|나는 다리에 통증을 느낀다.,
10-33|hospital|병원|Go to the hospital.|병원에 가라.,
10-33|headache|두통|I have a headache.|나는 두통이 있다.,
10-33|medicine|약, 약물|Take this medicine.|이 약을 먹어라.,
10-33|weight|무게, 체중|Watch your weight.|체중을 조심해라.,
10-33|tired|피곤한, 지친|I am very tired.|나는 매우 피곤하다.,
10-33|hurt|다치게 하다; 아프다|Did you hurt yourself?|다쳤니?,
10-33|treat|치료하다; 다루다|Doctors treat patients.|의사들은 환자를 치료한다.,
10-33|relax|휴식을 취하다, 쉬다|Sit down and relax.|앉아서 쉬어라.,
10-33|advice|조언, 충고|Give me some advice.|나에게 조언을 좀 해줘.,
10-33|health|건강|Health is important.|건강은 중요하다.,
10-33|stomach|위, 배|My stomach hurts.|배가 아프다.,
10-33|see a doctor|병원에 가다, 진찰을 받다|You should see a doctor.|너는 병원에 가봐야 한다.,
10-33|catch a cold|감기에 걸리다|Don't catch a cold.|감기 걸리지 마라.,
10-34|grass|풀, 잔디|Sit on the grass.|잔디에 앉아라.,
10-34|flower|꽃|The flower is red.|꽃이 빨갛다.,
10-34|tree|나무|Climb the tree.|나무에 올라라.,
10-34|leaf|잎, 나뭇잎|A green leaf.|초록색 잎.,
10-34|stone|돌|Throw a stone.|돌을 던져라.,
10-34|wood|나무, 목재; 숲|It is made of wood.|그것은 나무로 만들어졌다.,
10-34|fruit|과일, 열매|Eat fresh fruit.|신선한 과일을 먹어라.,
10-34|branch|나뭇가지|The bird is on the branch.|새가 나뭇가지 위에 있다.,
10-34|ground|땅, 토양|Sit on the ground.|땅에 앉아라.,
10-34|soil|토양, 흙|Plant seeds in the soil.|흙에 씨앗을 심어라.,
10-34|field|들판, 밭; 경기장|Run in the field.|들판에서 달려라.,
10-34|farm|농장, 농원|Animals live on a farm.|동물들은 농장에 산다.,
10-34|water|물, 물을 주다|Water the plants.|식물에 물을 줘라.,
10-34|dig|파다, 캐내다|Dogs dig holes.|개들은 구멍을 판다.,
10-34|grow|재배하다; 자라다|Plants grow fast.|식물들은 빨리 자란다.,
10-34|plant|식물, 심다|Plant a tree.|나무를 심어라.,
10-34|bean|콩|I like bean soup.|나는 콩 수프를 좋아한다.,
10-34|vegetable|채소|Eat your vegetables.|채소를 먹어라.,
10-34|right away|즉시, 곧바로|Do it right away.|즉시 그것을 해라.,
10-34|pick up|~을 집다|Pick up the trash.|쓰레기를 주워라.,
10-35|bee|벌|A bee makes honey.|벌은 꿀을 만든다.,
10-35|fly|파리, 날다|A fly is on the wall.|파리가 벽에 있다.,
10-35|wolf|늑대|The wolf howls.|늑대가 울부짖는다.,
10-35|monkey|원숭이|The monkey eats a banana.|원숭이가 바나나를 먹는다.,
10-35|elephant|코끼리|An elephant has a long nose.|코끼리는 긴 코를 가졌다.,
10-35|zebra|얼룩말|A zebra has stripes.|얼룩말은 줄무늬가 있다.,
10-35|whale|고래|The whale is huge.|고래는 거대하다.,
10-35|chicken|닭|The chicken runs.|닭이 달린다.,
10-35|snake|뱀|The snake is long.|뱀은 길다.,
10-35|mouse|쥐, 생쥐|The mouse is small.|쥐는 작다.,
10-35|sheep|양|Sheep eat grass.|양은 풀을 먹는다.,
10-35|giraffe|기린|The giraffe is tall.|기린은 키가 크다.,
10-35|wild|야생의|Lions are wild animals.|사자는 야생 동물이다.,
10-35|animal|동물|I like animals.|나는 동물을 좋아한다.,
10-35|hunt|사냥하다|Tigers hunt for food.|호랑이는 먹이를 위해 사냥한다.,
10-35|tail|꼬리|The dog wags its tail.|개가 꼬리를 흔든다.,
10-35|colorful|알록달록한|The bird is colorful.|그 새는 알록달록하다.,
10-35|feed|먹이를 주다|Feed the dog.|개에게 먹이를 줘라.,
10-35|by the way|그런데, 그나저나|By the way, who are you?|그런데, 너는 누구니?,
10-35|look for|~을 찾다|I look for my key.|나는 내 열쇠를 찾는다.,
10-36|hill|언덕|Go up the hill.|언덕을 올라가라.,
10-36|land|육지, 땅|The ship reached land.|배가 육지에 닿았다.,
10-36|river|강|The river is long.|강은 길다.,
10-36|lake|호수|Swim in the lake.|호수에서 수영해라.,
10-36|desert|사막|The desert is hot.|사막은 덥다.,
10-36|forest|숲|Walk in the forest.|숲속을 걸어라.,
10-36|valley|계곡, 골짜기|The valley is deep.|계곡은 깊다.,
10-36|island|섬|Jeju is an island.|제주는 섬이다.,
10-36|jungle|밀림, 정글|Tigers live in the jungle.|호랑이는 정글에 산다.,
10-36|mountain|산|Climb the mountain.|산을 올라라.,
10-36|pond|연못|Fish live in the pond.|물고기는 연못에 산다.,
10-36|ocean|대양, 바다|The ocean is blue.|대양은 파랗다.,
10-36|cave|동굴|A bear is in the cave.|곰이 동굴 안에 있다.,
10-36|polar|북극(남극)의|A polar bear is white.|북극곰은 하얗다.,
10-36|nature|자연|We love nature.|우리는 자연을 사랑한다.,
10-36|mystery|미스터리, 불가사의|It is a mystery.|그것은 미스터리다.,
10-36|wave|파도, 물결|The wave is high.|파도가 높다.,
10-36|discover|발견하다|Discover new places.|새로운 장소를 발견해라.,
10-36|look at|~을 보다|Look at the sky.|하늘을 봐라.,
10-36|take turns|교대로 하다|Let's take turns.|교대로 하자.,
10-37|warm|따뜻한|It is warm today.|오늘은 따뜻하다.,
10-37|cold|추운, 차가운|Winter is cold.|겨울은 춥다.,
10-37|cool|시원한; 멋진|The wind is cool.|바람이 시원하다.,
10-37|hot|더운, 뜨거운|Summer is hot.|여름은 덥다.,
10-37|rain|비가 오다, 비|It will rain soon.|곧 비가 올 것이다.,
10-37|snow|눈이 오다, 눈|Snow falls in winter.|겨울에는 눈이 내린다.,
10-37|clear|(날씨가) 맑은|The sky is clear.|하늘이 맑다.,
10-37|sunny|화창한|It is a sunny day.|화창한 날이다.,
10-37|windy|바람이 많이 부는|It is very windy.|바람이 많이 분다.,
10-37|cloudy|흐린, 구름 낀|It is cloudy.|날이 흐리다.,
10-37|spring|봄|Flowers bloom in spring.|봄에는 꽃이 핀다.,
10-37|summer|여름|I swim in summer.|나는 여름에 수영한다.,
10-37|fall|가을|Leaves fall in fall.|가을에는 낙엽이 진다.,
10-37|winter|겨울|I ski in winter.|나는 겨울에 스키를 탄다.,
10-37|season|계절; 시기, 철|Four seasons.|사계절.,
10-37|blow|(바람이) 불다|The wind blows.|바람이 분다.,
10-37|weather|날씨, 기상|How is the weather?|날씨가 어떠니?,
10-37|forecast|예측, 예보|Check the weather forecast.|일기 예보를 확인해라.,
10-37|at first|처음에|At first, I was scared.|처음에 나는 무서웠다.,
10-37|all day long|하루 종일|I played all day long.|나는 하루 종일 놀았다.,
10-38|event|사건, 행사|It is a big event.|그것은 큰 행사다.,
10-38|start|시작하다, 시작|Let's start now.|지금 시작하자.,
10-38|end|끝나다, 끝|This is the end.|이것이 끝이다.,
10-38|enter|들어가다; 참가하다|Enter the room.|방으로 들어가라.,
10-38|luck|행운, 운|Good luck!|행운을 빌어!,
10-38|important|중요한|It is important.|그것은 중요하다.,
10-38|building|건물|That building is tall.|저 건물은 높다.,
10-38|law|법|Follow the law.|법을 따라라.,
10-38|history|역사|Study history.|역사를 공부해라.,
10-38|hometown|고향|This is my hometown.|이곳은 나의 고향이다.,
10-38|local|지역의, 현지의|I like local food.|나는 지역 음식을 좋아한다.,
10-38|create|창조하다, 만들다|Create a new file.|새 파일을 만들어라.,
10-38|project|계획; 연구 과제|Finish the project.|과제를 끝내라.,
10-38|citizen|시민, 국민|I am a citizen of Seoul.|나는 서울 시민이다.,
10-38|president|대통령; 회장|Who is the president?|대통령은 누구니?,
10-38|information|정보, 자료|Get information.|정보를 얻어라.,
10-38|program|(TV 등의) 프로그램|Watch a TV program.|TV 프로그램을 봐라.,
10-38|traditional|전통적인|Look at traditional clothes.|전통 의상을 봐라.,
10-38|ask for|~을 요청하다|Ask for help.|도움을 요청해라.,
10-38|these days|요즘|I am busy these days.|나는 요즘 바쁘다.,
10-39|air|공기|Fresh air is good.|신선한 공기는 좋다.,
10-39|fire|불; 화재|Fire is hot.|불은 뜨겁다.,
10-39|sand|모래|Play with sand.|모래를 가지고 놀아라.,
10-39|rock|바위, 암석|The rock is hard.|바위는 단단하다.,
10-39|earth|지구|The earth is round.|지구는 둥글다.,
10-39|power|힘; 동력|Solar power.|태양열 동력.,
10-39|glass|유리; 유리잔|Be careful with glass.|유리를 조심해라.,
10-39|reuse|재사용하다|Reuse bottles.|병을 재사용해라.,
10-39|recycle|재활용하다|Recycle paper.|종이를 재활용해라.,
10-39|plastic|플라스틱|Don't use plastic.|플라스틱을 사용하지 마라.,
10-39|trash|쓰레기|Pick up trash.|쓰레기를 주워라.,
10-39|save|구하다; 절약하다|Save water.|물을 절약해라.,
10-39|energy|에너지|Save energy.|에너지를 절약해라.,
10-39|bill|청구서; 지폐|Pay the bill.|요금(청구서)을 내라.,
10-39|protect|보호하다, 지키다|Protect nature.|자연을 보호해라.,
10-39|dangerous|위험한|It is dangerous.|그것은 위험하다.,
10-39|float|(물 위에) 뜨다|Wood floats.|나무는 뜬다.,
10-39|environment|환경|Clean environment.|깨끗한 환경.,
10-39|throw away|버리다|Don't throw away food.|음식을 버리지 마라.,
10-39|be worried about|~에 대해 걱정하다|I am worried about you.|나는 네가 걱정된다.,
10-40|help|돕다, 도움|Can you help me?|나를 도와줄 수 있니?,
10-40|human|인간, 사람|We are humans.|우리는 인간이다.,
10-40|country|나라; 시골|Which country?|어느 나라이니?,
10-40|peace|평화|We want peace.|우리는 평화를 원한다.,
10-40|war|전쟁|Stop the war.|전쟁을 멈춰라.,
10-40|website|웹사이트|Visit the website.|웹사이트를 방문해라.,
10-40|spread|퍼지다; 퍼뜨리다|News spreads fast.|뉴스는 빨리 퍼진다.,
10-40|chat|수다 떨다, 채팅하다|Let's chat.|채팅하자.,
10-40|post|(웹사이트에) 올리다|Post a photo.|사진을 올려라.,
10-40|online|온라인의|Play games online.|온라인으로 게임을 해라.,
10-40|explore|탐험하다, 답사하다|Explore the world.|세상을 탐험해라.,
10-40|palace|궁전|The king lives in a palace.|왕은 궁전에 산다.,
10-40|actually|사실은; 실제로|Actually, I am busy.|사실은, 나는 바쁘다.,
10-40|science|과학|I like science.|나는 과학을 좋아한다.,
10-40|culture|문화|Learn about Korean culture.|한국 문화에 대해 배워라.,
10-40|universe|우주|The universe is big.|우주는 크다.,
10-40|language|언어, 말|I speak two languages.|나는 두 가지 언어를 말한다.,
10-40|foreigner|외국인|He is a foreigner.|그는 외국인이다.,
10-40|believe in|~을 믿다|Believe in yourself.|너 자신을 믿어라.,
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
12-3|TRUE|[형] 진실한, 진짜의|It is true.|그것은 사실이다.
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
12-13|normal|[형] 정상의|A normal day.|평범한 날.
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
13-11|be known for|~로 알려져 있다, ~로 유명하다|Korea is known for Kimchi.|한국은 김치로 유명하다.
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
13-22|look forward to ing|~을 고대하다, 손꼽아 기다리다|I look forward to seeing you.|너를 보기를 고대한다.
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



  `;
  // 👆 여기까지가 네가 앞으로 수정·추가할 영역

  // 파싱해서 전역 객체에 올리기
  window.WORD_DB = buildDB(RAW_WORDS);

})();

