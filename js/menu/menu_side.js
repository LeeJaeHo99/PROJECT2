//사이드 메뉴 생성
const sideMenu = [
    {
        class : 'RoseCheeseBall',
        nameKo : '로제치즈볼',
        nameEn : 'Rose Cheese Ball',
        backCon : `달콤매콤 로제소스가 입안가득<br>쫀~득한 찹쌀 속 로제 가득 치즈볼!`,
        backP  : '5,000원',
    },
];

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

//사이드 호버
//로제치즈볼
/* ========== 변수 ========== */
let roseCheeseBall = document.querySelector('.side_menu > .RoseCheeseBall');
let roseCheeseBallF = document.querySelector('.side_menu > .RoseCheeseBall > .front');
let roseCheeseBallB = document.querySelector('.side_menu > .RoseCheeseBall > .back');
/* ========== 변수 ========== */
roseCheeseBall.addEventListener('mouseover', function(){
    roseCheeseBallF.style.opacity = 0;
    roseCheeseBallF.style.transform = 'translate(0, -20%)',
    roseCheeseBallB.style.opacity = 1;
    roseCheeseBallB.style.transform = 'scale(1)';
});
roseCheeseBall.addEventListener('mouseout', function(){
    roseCheeseBallF.style.opacity = 1;
    roseCheeseBallF.style.transform = 'translate(0)',
    roseCheeseBallB.style.opacity = 0;
    roseCheeseBallB.style.transform = 'scale(0)';
});

//모짜치즈볼
/* ========== 변수 ========== */
let mozzarellaCheeseBall = document.querySelector('.side_menu > .MozzarellaCheeseBall');
let mozzarellaCheeseBallF = document.querySelector('.side_menu > .MozzarellaCheeseBall > .front');
let mozzarellaCheeseBallB = document.querySelector('.side_menu > .MozzarellaCheeseBall > .back');
/* ========== 변수 ========== */
mozzarellaCheeseBall.addEventListener('mouseover', function(){
    mozzarellaCheeseBallF.style.opacity = 0;
    mozzarellaCheeseBallF.style.transform = 'translate(0, -20%)',
    mozzarellaCheeseBallB.style.opacity = 1;
    mozzarellaCheeseBallB.style.transform = 'scale(1)';
});
mozzarellaCheeseBall.addEventListener('mouseout', function(){
    mozzarellaCheeseBallF.style.opacity = 1;
    mozzarellaCheeseBallF.style.transform = 'translate(0)',
    mozzarellaCheeseBallB.style.opacity = 0;
    mozzarellaCheeseBallB.style.transform = 'scale(0)';
});

//반반치즈볼
/* ========== 변수 ========== */
let halfCheeseBall = document.querySelector('.side_menu > .HalfCheeseBall');
let halfCheeseBallF = document.querySelector('.side_menu > .HalfCheeseBall > .front');
let halfCheeseBallB = document.querySelector('.side_menu > .HalfCheeseBall > .back');
/* ========== 변수 ========== */
halfCheeseBall.addEventListener('mouseover', function(){
    halfCheeseBallF.style.opacity = 0;
    halfCheeseBallF.style.transform = 'translate(0, -20%)',
    halfCheeseBallB.style.opacity = 1;
    halfCheeseBallB.style.transform = 'scale(1)';
});
halfCheeseBall.addEventListener('mouseout', function(){
    halfCheeseBallF.style.opacity = 1;
    halfCheeseBallF.style.transform = 'translate(0)',
    halfCheeseBallB.style.opacity = 0;
    halfCheeseBallB.style.transform = 'scale(0)';
});

//미니찰도그
/* ========== 변수 ========== */
let miniHotDog = document.querySelector('.side_menu > .MiniHotDog');
let miniHotDogF = document.querySelector('.side_menu > .MiniHotDog > .front');
let miniHotDogB = document.querySelector('.side_menu > .MiniHotDog > .back');
/* ========== 변수 ========== */
miniHotDog.addEventListener('mouseover', function(){
    miniHotDogF.style.opacity = 0;
    miniHotDogF.style.transform = 'translate(0, -20%)',
    miniHotDogB.style.opacity = 1;
    miniHotDogB.style.transform = 'scale(1)';
});
miniHotDog.addEventListener('mouseout', function(){
    miniHotDogF.style.opacity = 1;
    miniHotDogF.style.transform = 'translate(0)',
    miniHotDogB.style.opacity = 0;
    miniHotDogB.style.transform = 'scale(0)';
});

//골드킹 닭다리
/* ========== 변수 ========== */
let goldKingChickenDrumStick = document.querySelector('.side_menu > .GoldKingChickenDrumStick');
let goldKingChickenDrumStickF = document.querySelector('.side_menu > .GoldKingChickenDrumStick > .front');
let goldKingChickenDrumStickB = document.querySelector('.side_menu > .GoldKingChickenDrumStick > .back');
/* ========== 변수 ========== */
goldKingChickenDrumStick.addEventListener('mouseover', function(){
    goldKingChickenDrumStickF.style.opacity = 0;
    goldKingChickenDrumStickF.style.transform = 'translate(0, -20%)',
    goldKingChickenDrumStickB.style.opacity = 1;
    goldKingChickenDrumStickB.style.transform = 'scale(1)';
});
goldKingChickenDrumStick.addEventListener('mouseout', function(){
    goldKingChickenDrumStickF.style.opacity = 1;
    goldKingChickenDrumStickF.style.transform = 'translate(0)',
    goldKingChickenDrumStickB.style.opacity = 0;
    goldKingChickenDrumStickB.style.transform = 'scale(0)';
});

//레드킹 닭다리
/* ========== 변수 ========== */
let redHotChickenDrumStick = document.querySelector('.side_menu > .RedHotChickenDrumStick');
let redHotChickenDrumStickF = document.querySelector('.side_menu > .RedHotChickenDrumStick > .front');
let redHotChickenDrumStickB = document.querySelector('.side_menu > .RedHotChickenDrumStick > .back');
/* ========== 변수 ========== */
redHotChickenDrumStick.addEventListener('mouseover', function(){
    redHotChickenDrumStickF.style.opacity = 0;
    redHotChickenDrumStickF.style.transform = 'translate(0, -20%)',
    redHotChickenDrumStickB.style.opacity = 1;
    redHotChickenDrumStickB.style.transform = 'scale(1)';
});
redHotChickenDrumStick.addEventListener('mouseout', function(){
    redHotChickenDrumStickF.style.opacity = 1;
    redHotChickenDrumStickF.style.transform = 'translate(0)',
    redHotChickenDrumStickB.style.opacity = 0;
    redHotChickenDrumStickB.style.transform = 'scale(0)';
});

//치즈 오븐 스파게티
/* ========== 변수 ========== */
let cheeseOvenSpaghetti = document.querySelector('.side_menu > .CheeseOvenSpaghetti');
let cheeseOvenSpaghettiF = document.querySelector('.side_menu > .CheeseOvenSpaghetti > .front');
let cheeseOvenSpaghettiB = document.querySelector('.side_menu > .CheeseOvenSpaghetti > .back');
/* ========== 변수 ========== */
cheeseOvenSpaghetti.addEventListener('mouseover', function(){
    cheeseOvenSpaghettiF.style.opacity = 0;
    cheeseOvenSpaghettiF.style.transform = 'translate(0, -20%)',
    cheeseOvenSpaghettiB.style.opacity = 1;
    cheeseOvenSpaghettiB.style.transform = 'scale(1)';
});
cheeseOvenSpaghetti.addEventListener('mouseout', function(){
    cheeseOvenSpaghettiF.style.opacity = 1;
    cheeseOvenSpaghettiF.style.transform = 'translate(0)',
    cheeseOvenSpaghettiB.style.opacity = 0;
    cheeseOvenSpaghettiB.style.transform = 'scale(0)';
});

//베이컨 크림 스파게티
/* ========== 변수 ========== */
let baconCreamSpaghetti = document.querySelector('.side_menu > .BaconCreamSpaghetti');
let baconCreamSpaghettiF = document.querySelector('.side_menu > .BaconCreamSpaghetti > .front');
let baconCreamSpaghettiB = document.querySelector('.side_menu > .BaconCreamSpaghetti > .back');
/* ========== 변수 ========== */
baconCreamSpaghetti.addEventListener('mouseover', function(){
    baconCreamSpaghettiF.style.opacity = 0;
    baconCreamSpaghettiF.style.transform = 'translate(0, -20%)',
    baconCreamSpaghettiB.style.opacity = 1;
    baconCreamSpaghettiB.style.transform = 'scale(1)';
});
baconCreamSpaghetti.addEventListener('mouseout', function(){
    baconCreamSpaghettiF.style.opacity = 1;
    baconCreamSpaghettiF.style.transform = 'translate(0)',
    baconCreamSpaghettiB.style.opacity = 0;
    baconCreamSpaghettiB.style.transform = 'scale(0)';
});

//쉬림프 로제 스파게티
/* ========== 변수 ========== */
let shrimpRoseSpaghetti = document.querySelector('.side_menu > .ShrimpRoseSpaghetti');
let shrimpRoseSpaghettiF = document.querySelector('.side_menu > .ShrimpRoseSpaghetti > .front');
let shrimpRoseSpaghettiB = document.querySelector('.side_menu > .ShrimpRoseSpaghetti > .back');
/* ========== 변수 ========== */
shrimpRoseSpaghetti.addEventListener('mouseover', function(){
    shrimpRoseSpaghettiF.style.opacity = 0;
    shrimpRoseSpaghettiF.style.transform = 'translate(0, -20%)',
    shrimpRoseSpaghettiB.style.opacity = 1;
    shrimpRoseSpaghettiB.style.transform = 'scale(1)';
});
shrimpRoseSpaghetti.addEventListener('mouseout', function(){
    shrimpRoseSpaghettiF.style.opacity = 1;
    shrimpRoseSpaghettiF.style.transform = 'translate(0)',
    shrimpRoseSpaghettiB.style.opacity = 0;
    shrimpRoseSpaghettiB.style.transform = 'scale(0)';
});

//불고기 크림 스파게티
/* ========== 변수 ========== */
let bulgogiCreamSpaghetti = document.querySelector('.side_menu > .BulgogiCreamSpaghetti');
let bulgogiCreamSpaghettiF = document.querySelector('.side_menu > .BulgogiCreamSpaghetti > .front');
let bulgogiCreamSpaghettiB = document.querySelector('.side_menu > .BulgogiCreamSpaghetti > .back');
/* ========== 변수 ========== */
bulgogiCreamSpaghetti.addEventListener('mouseover', function(){
    bulgogiCreamSpaghettiF.style.opacity = 0;
    bulgogiCreamSpaghettiF.style.transform = 'translate(0, -20%)',
    bulgogiCreamSpaghettiB.style.opacity = 1;
    bulgogiCreamSpaghettiB.style.transform = 'scale(1)';
});
bulgogiCreamSpaghetti.addEventListener('mouseout', function(){
    bulgogiCreamSpaghettiF.style.opacity = 1;
    bulgogiCreamSpaghettiF.style.transform = 'translate(0)',
    bulgogiCreamSpaghettiB.style.opacity = 0;
    bulgogiCreamSpaghettiB.style.transform = 'scale(0)';
});

//감자튀김
/* ========== 변수 ========== */
let frenchFries = document.querySelector('.side_menu > .FrenchFries');
let frenchFriesF = document.querySelector('.side_menu > .FrenchFries > .front');
let frenchFriesB = document.querySelector('.side_menu > .FrenchFries > .back');
/* ========== 변수 ========== */
frenchFries.addEventListener('mouseover', function(){
    frenchFriesF.style.opacity = 0;
    frenchFriesF.style.transform = 'translate(0, -20%)',
    frenchFriesB.style.opacity = 1;
    frenchFriesB.style.transform = 'scale(1)';
});
frenchFries.addEventListener('mouseout', function(){
    frenchFriesF.style.opacity = 1;
    frenchFriesF.style.transform = 'translate(0)',
    frenchFriesB.style.opacity = 0;
    frenchFriesB.style.transform = 'scale(0)';
});

//윙봉
/* ========== 변수 ========== */
let wingBong = document.querySelector('.side_menu > .WingBong');
let wingBongF = document.querySelector('.side_menu > .WingBong > .front');
let wingBongB = document.querySelector('.side_menu > .WingBong > .back');
/* ========== 변수 ========== */
wingBong.addEventListener('mouseover', function(){
    wingBongF.style.opacity = 0;
    wingBongF.style.transform = 'translate(0, -20%)',
    wingBongB.style.opacity = 1;
    wingBongB.style.transform = 'scale(1)';
});
wingBong.addEventListener('mouseout', function(){
    wingBongF.style.opacity = 1;
    wingBongF.style.transform = 'translate(0)',
    wingBongB.style.opacity = 0;
    wingBongB.style.transform = 'scale(0)';
});

//순살치킨
/* ========== 변수 ========== */
let chickenTender = document.querySelector('.side_menu > .ChickenTender');
let chickenTenderF = document.querySelector('.side_menu > .ChickenTender > .front');
let chickenTenderB = document.querySelector('.side_menu > .ChickenTender > .back');
/* ========== 변수 ========== */
chickenTender.addEventListener('mouseover', function(){
    chickenTenderF.style.opacity = 0;
    chickenTenderF.style.transform = 'translate(0, -20%)',
    chickenTenderB.style.opacity = 1;
    chickenTenderB.style.transform = 'scale(1)';
});
chickenTender.addEventListener('mouseout', function(){
    chickenTenderF.style.opacity = 1;
    chickenTenderF.style.transform = 'translate(0)',
    chickenTenderB.style.opacity = 0;
    chickenTenderB.style.transform = 'scale(0)';
});

//치킨텐더
/* ========== 변수 ========== */
let chickenTenderT = document.querySelector('.side_menu > .ChickenTender_2');
let chickenTenderTF = document.querySelector('.side_menu > .ChickenTender_2 > .front');
let chickenTenderTB = document.querySelector('.side_menu > .ChickenTender_2 > .back');
/* ========== 변수 ========== */
chickenTenderT.addEventListener('mouseover', function(){
    chickenTenderTF.style.opacity = 0;
    chickenTenderTF.style.transform = 'translate(0, -20%)',
    chickenTenderTB.style.opacity = 1;
    chickenTenderTB.style.transform = 'scale(1)';
});
chickenTenderT.addEventListener('mouseout', function(){
    chickenTenderTF.style.opacity = 1;
    chickenTenderTF.style.transform = 'translate(0)',
    chickenTenderTB.style.opacity = 0;
    chickenTenderTB.style.transform = 'scale(0)';
});

//훈제치킨
/* ========== 변수 ========== */
let smokedChicken = document.querySelector('.side_menu > .SmokedChicken');
let smokedChickenF = document.querySelector('.side_menu > .SmokedChicken > .front');
let smokedChickenB = document.querySelector('.side_menu > .SmokedChicken > .back');
/* ========== 변수 ========== */
smokedChicken.addEventListener('mouseover', function(){
    smokedChickenF.style.opacity = 0;
    smokedChickenF.style.transform = 'translate(0, -20%)',
    smokedChickenB.style.opacity = 1;
    smokedChickenB.style.transform = 'scale(1)';
});
smokedChicken.addEventListener('mouseout', function(){
    smokedChickenF.style.opacity = 1;
    smokedChickenF.style.transform = 'translate(0)',
    smokedChickenB.style.opacity = 0;
    smokedChickenB.style.transform = 'scale(0)';
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