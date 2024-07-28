//피자 메뉴 생성
const pizzaMenu = [
    {
        class : 'qcp',
        nameKo : '쿼터치즈벅피자',
        nameEn : 'Quater Cheesebuck Pizza',
        backCon : `꾸덕한 체다치즈와 육즙폭발 고기,<br>아삭한 피클, 신선한 야채와 토마토까지!`,
        backPM  : '17,900원',
        backPL  : '22,900원',
    },
    {
        class : 'gsp',
        nameKo : '갈릭쉬림플렉스피자',
        nameEn : 'Garlic Shrimflex Pizza',
        backCon : `풍미를 한껏 끌어올린 갈릭소스와<br>스위트칠리소스에 탱글탱글 통새우까지!`,
        backPM  : '23,900원',
        backPL  : '27,900원',
    },
    {
        class : 'mdp',
        nameKo : '메가디럭스피자',
        nameEn : 'Mega Deluxe Pizza',
        backCon : `미트x미트x미트, 극강의 미트 토핑!<br>육즙 가득한 고기와 신선한 야채의 조화`,
        backPM  : '19,900원',
        backPL  : '23,900원',
    },
    {
        class : 'ppp',
        nameKo : '페퍼로니피자',
        nameEn : 'Pepperoni Pizza',
        backCon : `프레드 BEST 메뉴<br>최상급 페퍼로니+100% 자연산 모짜렐라`,
        backPM  : '15,900원',
        backPL  : '18,900원',
    },
    {
        class : 'sfp',
        nameKo : '쉬림플렉스피자',
        nameEn : 'Shrimflex Pizza',
        backCon : `스파이시한 스리라차 소스에 탱글탱글한<br>통새우를 빈틈없이 넣은 시그니처!`,
        backPM  : '24,900원',
        backPL  : '28,900원',
    },
    {
        class : 'dbp',
        nameKo : '더블불고기피자',
        nameEn : 'Double Bulgogi Pizza',
        backCon : `불고기 맛과 양이 업그레이드 된<br>전국민 취향저격 스테디셀러피자`,
        backPM  : '17,900원',
        backPL  : '20,900원',
    },
    {
        class : 'bpmp',
        nameKo : '베이컨포테마요피자',
        nameEn : 'Bacon Potato Mayo Pizza',
        backCon : `포슬포슬 웨지감자가 한가득<br>짭짤한 베이컨과 고소한 마요네즈의 완벽 케미`,
        backPM  : '17,900원',
        backPL  : '21,900원',
    },
    {
        class : 'scp',
        nameKo : '슈퍼콤비네이션피자',
        nameEn : 'Super Combination Pizza',
        backCon : `프레쉬하고 다양한 토핑이 듬뿍<br>피자의 대명사 클래식의 정석`,
        backPM  : '16,900원',
        backPL  : '19,900원',
    },
    {
        class : 'bbcp',
        nameKo : '바질버터관자피자',
        nameEn : 'Basil Butter Scallop Pizza',
        backCon : `매콤함 한스푼 들어간 바질크림에<br>버터에 빠진 관자가 듬~뿍`,
        backPM  : '23,900원',
        backPL  : '27,900원',
    },
    {
        class : 'hwp',
        nameKo : '하와이안피자',
        nameEn : 'Hawaiian Pizza',
        backCon : `짭짤한 베이컨에 상큼한 파인애플<br>기분좋은 단짠단짠`,
        backPM  : '16,900원',
        backPL  : '19,900원',
    },
    {
        class : 'bdcp',
        nameKo : '베이컨딥체다치즈피자',
        nameEn : 'Bacon Deep Cheddar Cheese Pizza',
        backCon : `베이컨과 100% 자연산 모짜렐라치즈<br>깊은 풍미, 체다치즈의 완벽한 만남`,
        backPM  : '16,900원',
        backPL  : '19,900원',
    },
    {
        class : 'rmp',
        nameKo : '리얼미트피자',
        nameEn : 'Real Meat Pizza',
        backCon : `무한대로 올라간 포크토핑 대란<br>리얼포크토핑과 토마토소스의 환상적 만남`,
        backPM  : '16,900원',
        backPL  : '19,900원',
    },
    {
        class : 'spcp',
        nameKo : '매버라치킨피자',
        nameEn : 'Spicy Chicken Pizza',
        backCon : `맵다의 경상도 사투리ver. 매버라<br>더 강력해진 맵소스와 치킨의 완벽조합`,
        backPM  : '18,900원',
        backPL  : '21,900원',
    },
    {
        class : 'wpp',
        nameKo : '화이트포테이토피자',
        nameEn : 'White Potato Pizza',
        backCon : `소프트한 고구마 샐러드와 짭짤한<br>베이컨, 감자까지 담백함의 정석`,
        backPM  : '19,900원',
        backPL  : '22,900원',
    },
    {
        class : 'jpp',
        nameKo : '할라로니피자',
        nameEn : 'Jalapenos Pepperoni Pizza',
        backCon : `최상급 페퍼로니 + 자연산 모짜렐라에<br>매콤한 할라피뇨가 듬뿍`,
        backPM  : '16,900원',
        backPL  : '19,900원',
    },
    {
        class : 'cp',
        nameKo : '치즈피자',
        nameEn : 'Cheese Pizza',
        backCon : `100% 자연모짜렐라 치즈와 체다치즈<br>프레드 특제 피자소스 기본의 정석`,
        backPM  : '15,900원',
        backPL  : '18,900원',
    },
    {
        class : 'ksp',
        nameKo : '킬바사소세지피자',
        nameEn : 'Kielbasa Sausage pizza',
        backCon : `통통한 BIG 소세지가 한 입에<br>비주얼에 반하고, 식감에 美치다`,
        backPM  : '20,900원',
        backPL  : '24,900원',
    },
    {
        class : 'spp',
        nameKo : '스위트고구마피자',
        nameEn : 'Sweet Potato Pizza',
        backCon : `단짠단짠 끝판왕 달콤한 고구마무스 가득<br>짭짤한 베이컨과 완벽한 조화의 피자`,
        backPM  : '17,900원',
        backPL  : '20,900원',
    },
    {
        class : 'jbpgsp',
        nameKo : '할라불고기피자',
        nameEn : 'Jalapenos bulgogi Pizza',
        backCon : `더욱 맛있어진 더블불고기피자에<br>할라피뇨의 매콤함이 더해졌다`,
        backPM  : '18,900원',
        backPL  : '21,900원',
    },
    {
        class : 'mpp',
        nameKo : '마이PICK피자',
        nameEn : 'My Pick Pizza',
        backCon : `원하는대로 4 PICK !<br>토핑과 엣지를 내맘대로 골라먹는 나만의 피자`,
        backPM  : '18,900원',
        backPL  : '24,900원',
    },
];

pizzaMenu.map((el, i) => {
    $('.pizza_menu').append(`
        <li class="pr ${ pizzaMenu[i].class }">
            <div class="front">
                <img src="./img/subpage/menu/pizza/pizza_img${ i + 1 }.png" alt="">
                <div class="front_ko">${ pizzaMenu[i].nameKo }</div>
                <div class="front_en">${ pizzaMenu[i].nameEn }</div>
            </div>
            <div class="back pa">
                <div class="back_title">${ pizzaMenu[i].nameKo }</div>
                <div class="back_content">${ pizzaMenu[i].backCon }</div>
                <div class="back_price df">
                    <div class="m">
                        <span>M</span>
                        <span>${ pizzaMenu[i].backPM }</span>
                    </div>
                    <div class="l">
                        <span>L</span>
                        <span>${ pizzaMenu[i].backPL }</span>
                    </div>
                </div>
            </div>
        </li>
    `);
});

//new 1, 2, 3
///best 4, 5, 8


//스크롤 애니메이션
window.onscroll = function(){
    let height = window.pageYOffset;

    /* ===== 변수 ===== */
    const fixedBtn = document.querySelector('.fixed_button');
    /* ===== 변수 ===== */

    //fixed_button
    if(height >= 500){
        fixedBtn.style.opacity = 1;
        fixedBtn.style.transform = 'translate(-50%)';
    }else{
        fixedBtn.style.opacity = 0;
        fixedBtn.style.transform = 'translate(50%)';
    }
}


//피자 호버

//쿼터치즈벅피자
/* ========== 변수 ========== */
let qcp = document.querySelector('.pizza_menu > .qcp');
let qcpF = document.querySelector('.pizza_menu > .qcp > .front');
let qcpB = document.querySelector('.pizza_menu > .qcp > .back');
/* ========== 변수 ========== */
qcp.addEventListener('mouseover', function(){
    qcpF.style.opacity = 0;
    qcpF.style.transform = 'translate(0, -20%)',
    qcpB.style.opacity = 1;
    qcpB.style.transform = 'scale(1)';
});
qcp.addEventListener('mouseout', function(){
    qcpF.style.opacity = 1;
    qcpF.style.transform = 'translate(0)',
    qcpB.style.opacity = 0;
    qcpB.style.transform = 'scale(0)';
});
$('')

//갈릭쉬림플렉스피자
/* ========== 변수 ========== */
let gsp = document.querySelector('.pizza_menu > .gsp');
let gspF = document.querySelector('.pizza_menu > .gsp > .front');
let gspB = document.querySelector('.pizza_menu > .gsp > .back');
/* ========== 변수 ========== */
gsp.addEventListener('mouseover', function(){
    gspF.style.opacity = 0;
    gspF.style.transform = 'translate(0, -20%)',
    gspB.style.opacity = 1;
    gspB.style.transform = 'scale(1)';
});
gsp.addEventListener('mouseout', function(){
    gspF.style.opacity = 1;
    gspF.style.transform = 'translate(0)',
    gspB.style.opacity = 0;
    gspB.style.transform = 'scale(0)';
});

//메가디럭스피자
/* ========== 변수 ========== */
let mdp = document.querySelector('.pizza_menu > .mdp');
let mdpF = document.querySelector('.pizza_menu > .mdp > .front');
let mdpB = document.querySelector('.pizza_menu > .mdp > .back');
/* ========== 변수 ========== */
mdp.addEventListener('mouseover', function(){
    mdpF.style.opacity = 0;
    mdpF.style.transform = 'translate(0, -20%)',
    mdpB.style.opacity = 1;
    mdpB.style.transform = 'scale(1)';
});
mdp.addEventListener('mouseout', function(){
    mdpF.style.opacity = 1;
    mdpF.style.transform = 'translate(0)',
    mdpB.style.opacity = 0;
    mdpB.style.transform = 'scale(0)';
});

//페퍼로니피자
/* ========== 변수 ========== */
let ppp = document.querySelector('.pizza_menu > .ppp');
let pppF = document.querySelector('.pizza_menu > .ppp > .front');
let pppB = document.querySelector('.pizza_menu > .ppp > .back');
/* ========== 변수 ========== */
ppp.addEventListener('mouseover', function(){
    pppF.style.opacity = 0;
    pppF.style.transform = 'translate(0, -20%)',
    pppB.style.opacity = 1;
    pppB.style.transform = 'scale(1)';
});
ppp.addEventListener('mouseout', function(){
    pppF.style.opacity = 1;
    pppF.style.transform = 'translate(0)',
    pppB.style.opacity = 0;
    pppB.style.transform = 'scale(0)';
});

//쉬림플렉스피자
/* ========== 변수 ========== */
let sfp = document.querySelector('.pizza_menu > .sfp');
let sfpF = document.querySelector('.pizza_menu > .sfp > .front');
let sfpB = document.querySelector('.pizza_menu > .sfp > .back');
/* ========== 변수 ========== */
sfp.addEventListener('mouseover', function(){
    sfpF.style.opacity = 0;
    sfpF.style.transform = 'translate(0, -20%)',
    sfpB.style.opacity = 1;
    sfpB.style.transform = 'scale(1)';
});
sfp.addEventListener('mouseout', function(){
    sfpF.style.opacity = 1;
    sfpF.style.transform = 'translate(0)',
    sfpB.style.opacity = 0;
    sfpB.style.transform = 'scale(0)';
});

//더블불고기피자
/* ========== 변수 ========== */
let dbp = document.querySelector('.pizza_menu > .dbp');
let dbpF = document.querySelector('.pizza_menu > .dbp > .front');
let dbpB = document.querySelector('.pizza_menu > .dbp > .back');
/* ========== 변수 ========== */
dbp.addEventListener('mouseover', function(){
    dbpF.style.opacity = 0;
    dbpF.style.transform = 'translate(0, -20%)',
    dbpB.style.opacity = 1;
    dbpB.style.transform = 'scale(1)';
});
dbp.addEventListener('mouseout', function(){
    dbpF.style.opacity = 1;
    dbpF.style.transform = 'translate(0)',
    dbpB.style.opacity = 0;
    dbpB.style.transform = 'scale(0)';
});

//베이컨포테마요피자
/* ========== 변수 ========== */
let bpmp = document.querySelector('.pizza_menu > .bpmp');
let bpmpF = document.querySelector('.pizza_menu > .bpmp > .front');
let bpmpB = document.querySelector('.pizza_menu > .bpmp > .back');
/* ========== 변수 ========== */
bpmp.addEventListener('mouseover', function(){
    bpmpF.style.opacity = 0;
    bpmpF.style.transform = 'translate(0, -20%)',
    bpmpB.style.opacity = 1;
    bpmpB.style.transform = 'scale(1)';
});
bpmp.addEventListener('mouseout', function(){
    bpmpF.style.opacity = 1;
    bpmpF.style.transform = 'translate(0)',
    bpmpB.style.opacity = 0;
    bpmpB.style.transform = 'scale(0)';
});

//슈퍼콤비네이션피자
/* ========== 변수 ========== */
let scp = document.querySelector('.pizza_menu > .scp');
let scpF = document.querySelector('.pizza_menu > .scp > .front');
let scpB = document.querySelector('.pizza_menu > .scp > .back');
/* ========== 변수 ========== */
scp.addEventListener('mouseover', function(){
    scpF.style.opacity = 0;
    scpF.style.transform = 'translate(0, -20%)',
    scpB.style.opacity = 1;
    scpB.style.transform = 'scale(1)';
});
scp.addEventListener('mouseout', function(){
    scpF.style.opacity = 1;
    scpF.style.transform = 'translate(0)',
    scpB.style.opacity = 0;
    scpB.style.transform = 'scale(0)';
});

//바질버터관자피자
/* ========== 변수 ========== */
let bbcp = document.querySelector('.pizza_menu > .bbcp');
let bbcpF = document.querySelector('.pizza_menu > .bbcp > .front');
let bbcpB = document.querySelector('.pizza_menu > .bbcp > .back');
/* ========== 변수 ========== */
bbcp.addEventListener('mouseover', function(){
    bbcpF.style.opacity = 0;
    bbcpF.style.transform = 'translate(0, -20%)',
    bbcpB.style.opacity = 1;
    bbcpB.style.transform = 'scale(1)';
});
bbcp.addEventListener('mouseout', function(){
    bbcpF.style.opacity = 1;
    bbcpF.style.transform = 'translate(0)',
    bbcpB.style.opacity = 0;
    bbcpB.style.transform = 'scale(0)';
});

//하와이안피자
/* ========== 변수 ========== */
let hwp = document.querySelector('.pizza_menu > .hwp');
let hwpF = document.querySelector('.pizza_menu > .hwp > .front');
let hwpB = document.querySelector('.pizza_menu > .hwp > .back');
/* ========== 변수 ========== */
hwp.addEventListener('mouseover', function(){
    hwpF.style.opacity = 0;
    hwpF.style.transform = 'translate(0, -20%)',
    hwpB.style.opacity = 1;
    hwpB.style.transform = 'scale(1)';
});
hwp.addEventListener('mouseout', function(){
    hwpF.style.opacity = 1;
    hwpF.style.transform = 'translate(0)',
    hwpB.style.opacity = 0;
    hwpB.style.transform = 'scale(0)';
});

//베이컨딥체다치즈피자
/* ========== 변수 ========== */
let bdcp = document.querySelector('.pizza_menu > .bdcp');
let bdcpF = document.querySelector('.pizza_menu > .bdcp > .front');
let bdcpB = document.querySelector('.pizza_menu > .bdcp > .back');
/* ========== 변수 ========== */
bdcp.addEventListener('mouseover', function(){
    bdcpF.style.opacity = 0;
    bdcpF.style.transform = 'translate(0, -20%)',
    bdcpB.style.opacity = 1;
    bdcpB.style.transform = 'scale(1)';
});
bdcp.addEventListener('mouseout', function(){
    bdcpF.style.opacity = 1;
    bdcpF.style.transform = 'translate(0)',
    bdcpB.style.opacity = 0;
    bdcpB.style.transform = 'scale(0)';
});

//리얼미트피자
/* ========== 변수 ========== */
let rmp = document.querySelector('.pizza_menu > .rmp');
let rmpF = document.querySelector('.pizza_menu > .rmp > .front');
let rmpB = document.querySelector('.pizza_menu > .rmp > .back');
/* ========== 변수 ========== */
rmp.addEventListener('mouseover', function(){
    rmpF.style.opacity = 0;
    rmpF.style.transform = 'translate(0, -20%)',
    rmpB.style.opacity = 1;
    rmpB.style.transform = 'scale(1)';
});
rmp.addEventListener('mouseout', function(){
    rmpF.style.opacity = 1;
    rmpF.style.transform = 'translate(0)',
    rmpB.style.opacity = 0;
    rmpB.style.transform = 'scale(0)';
});

//매버라치킨피자
/* ========== 변수 ========== */
let spcp = document.querySelector('.pizza_menu > .spcp');
let spcpF = document.querySelector('.pizza_menu > .spcp > .front');
let spcpB = document.querySelector('.pizza_menu > .spcp > .back');
/* ========== 변수 ========== */
spcp.addEventListener('mouseover', function(){
    spcpF.style.opacity = 0;
    spcpF.style.transform = 'translate(0, -20%)',
    spcpB.style.opacity = 1;
    spcpB.style.transform = 'scale(1)';
});
spcp.addEventListener('mouseout', function(){
    spcpF.style.opacity = 1;
    spcpF.style.transform = 'translate(0)',
    spcpB.style.opacity = 0;
    spcpB.style.transform = 'scale(0)';
});

//화이트포테이토피자
/* ========== 변수 ========== */
let wpp = document.querySelector('.pizza_menu > .wpp');
let wppF = document.querySelector('.pizza_menu > .wpp > .front');
let wppB = document.querySelector('.pizza_menu > .wpp > .back');
/* ========== 변수 ========== */
wpp.addEventListener('mouseover', function(){
    wppF.style.opacity = 0;
    wppF.style.transform = 'translate(0, -20%)',
    wppB.style.opacity = 1;
    wppB.style.transform = 'scale(1)';
});
wpp.addEventListener('mouseout', function(){
    wppF.style.opacity = 1;
    wppF.style.transform = 'translate(0)',
    wppB.style.opacity = 0;
    wppB.style.transform = 'scale(0)';
});

//할라로니피자
/* ========== 변수 ========== */
let jpp = document.querySelector('.pizza_menu > .jpp');
let jppF = document.querySelector('.pizza_menu > .jpp > .front');
let jppB = document.querySelector('.pizza_menu > .jpp > .back');
/* ========== 변수 ========== */
jpp.addEventListener('mouseover', function(){
    jppF.style.opacity = 0;
    jppF.style.transform = 'translate(0, -20%)',
    jppB.style.opacity = 1;
    jppB.style.transform = 'scale(1)';
});
jpp.addEventListener('mouseout', function(){
    jppF.style.opacity = 1;
    jppF.style.transform = 'translate(0)',
    jppB.style.opacity = 0;
    jppB.style.transform = 'scale(0)';
});

//치즈피자
/* ========== 변수 ========== */
let cp = document.querySelector('.pizza_menu > .cp');
let cpF = document.querySelector('.pizza_menu > .cp > .front');
let cpB = document.querySelector('.pizza_menu > .cp > .back');
/* ========== 변수 ========== */
cp.addEventListener('mouseover', function(){
    cpF.style.opacity = 0;
    cpF.style.transform = 'translate(0, -20%)',
    cpB.style.opacity = 1;
    cpB.style.transform = 'scale(1)';
});
cp.addEventListener('mouseout', function(){
    cpF.style.opacity = 1;
    cpF.style.transform = 'translate(0)',
    cpB.style.opacity = 0;
    cpB.style.transform = 'scale(0)';
});

//킬바사소세지피자
/* ========== 변수 ========== */
let ksp = document.querySelector('.pizza_menu > .ksp');
let kspF = document.querySelector('.pizza_menu > .ksp > .front');
let kspB = document.querySelector('.pizza_menu > .ksp > .back');
/* ========== 변수 ========== */
ksp.addEventListener('mouseover', function(){
    kspF.style.opacity = 0;
    kspF.style.transform = 'translate(0, -20%)',
    kspB.style.opacity = 1;
    kspB.style.transform = 'scale(1)';
});
ksp.addEventListener('mouseout', function(){
    kspF.style.opacity = 1;
    kspF.style.transform = 'translate(0)',
    kspB.style.opacity = 0;
    kspB.style.transform = 'scale(0)';
});

//스위트고구마피자
/* ========== 변수 ========== */
let spp = document.querySelector('.pizza_menu > .spp');
let sppF = document.querySelector('.pizza_menu > .spp > .front');
let sppB = document.querySelector('.pizza_menu > .spp > .back');
/* ========== 변수 ========== */
spp.addEventListener('mouseover', function(){
    sppF.style.opacity = 0;
    sppF.style.transform = 'translate(0, -20%)',
    sppB.style.opacity = 1;
    sppB.style.transform = 'scale(1)';
});
spp.addEventListener('mouseout', function(){
    sppF.style.opacity = 1;
    sppF.style.transform = 'translate(0)',
    sppB.style.opacity = 0;
    sppB.style.transform = 'scale(0)';
});

//할라불고기피자
/* ========== 변수 ========== */
let jbp = document.querySelector('.pizza_menu > .jbp');
let jbpF = document.querySelector('.pizza_menu > .jbp > .front');
let jbpB = document.querySelector('.pizza_menu > .jbp > .back');
/* ========== 변수 ========== */
jbp.addEventListener('mouseover', function(){
    jbpF.style.opacity = 0;
    jbpF.style.transform = 'translate(0, -20%)',
    jbpB.style.opacity = 1;
    jbpB.style.transform = 'scale(1)';
});
jbp.addEventListener('mouseout', function(){
    jbpF.style.opacity = 1;
    jbpF.style.transform = 'translate(0)',
    jbpB.style.opacity = 0;
    jbpB.style.transform = 'scale(0)';
});

//마이PICK피자
/* ========== 변수 ========== */
let mpp = document.querySelector('.pizza_menu > .mpp');
let mppF = document.querySelector('.pizza_menu > .mpp > .front');
let mppB = document.querySelector('.pizza_menu > .mpp > .back');
/* ========== 변수 ========== */
mpp.addEventListener('mouseover', function(){
    mppF.style.opacity = 0;
    mppF.style.transform = 'translate(0, -20%)',
    mppB.style.opacity = 1;
    mppB.style.transform = 'scale(1)';
});
mpp.addEventListener('mouseout', function(){
    mppF.style.opacity = 1;
    mppF.style.transform = 'translate(0)',
    mppB.style.opacity = 0;
    mppB.style.transform = 'scale(0)';
});


//탑 버튼 생기는 함수
/* ===== 변수 ===== */
const topBtn = document.querySelector('.topbutton');
/* ===== 변수 ===== */

topBtn.addEventListener('click', function(){
    window.scroll({
        top : 0,
        behavior : 'smooth',
    })
});