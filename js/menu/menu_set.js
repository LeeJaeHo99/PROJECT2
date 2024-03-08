//스크롤 애니메이션
window.onscroll = function(){
    let height = window.pageYOffset;
    console.log(`스크롤 높이 : ` + height);

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

//세트 호버
//비비 플렉스 세트
/* ========== 변수 ========== */
let bibiFlexSet = document.querySelector('.set_menu > .BIBIFlexSet');
let bibiFlexSetF = document.querySelector('.set_menu > .BIBIFlexSet > .front');
let bibiFlexSetB = document.querySelector('.set_menu > .BIBIFlexSet > .back');
/* ========== 변수 ========== */
bibiFlexSet.addEventListener('mouseover', function(){
    bibiFlexSetF.style.opacity = 0;
    bibiFlexSetF.style.transform = 'translate(0, -20%)',
    bibiFlexSetB.style.opacity = 1;
    bibiFlexSetB.style.transform = 'scale(1)';
});
bibiFlexSet.addEventListener('mouseout', function(){
    bibiFlexSetF.style.opacity = 1;
    bibiFlexSetF.style.transform = 'translate(0)',
    bibiFlexSetB.style.opacity = 0;
    bibiFlexSetB.style.transform = 'scale(0)';
});

//비비 베이직 세트
/* ========== 변수 ========== */
let bibiBasicSet = document.querySelector('.set_menu > .BIBIBasicSet');
let bibiBasicSetF = document.querySelector('.set_menu > .BIBIBasicSet > .front');
let bibiBasicSetB = document.querySelector('.set_menu > .BIBIBasicSet > .back');
/* ========== 변수 ========== */
bibiBasicSet.addEventListener('mouseover', function(){
    bibiBasicSetF.style.opacity = 0;
    bibiBasicSetF.style.transform = 'translate(0, -20%)',
    bibiBasicSetB.style.opacity = 1;
    bibiBasicSetB.style.transform = 'scale(1)';
});
bibiBasicSet.addEventListener('mouseout', function(){
    bibiBasicSetF.style.opacity = 1;
    bibiBasicSetF.style.transform = 'translate(0)',
    bibiBasicSetB.style.opacity = 0;
    bibiBasicSetB.style.transform = 'scale(0)';
});

//비비 메가 세트
/* ========== 변수 ========== */
let bibiMegaSet = document.querySelector('.set_menu > .BIBIMegaSet');
let bibiMegaSetF = document.querySelector('.set_menu > .BIBIMegaSet > .front');
let bibiMegaSetB = document.querySelector('.set_menu > .BIBIMegaSet > .back');
/* ========== 변수 ========== */
bibiMegaSet.addEventListener('mouseover', function(){
    bibiMegaSetF.style.opacity = 0;
    bibiMegaSetF.style.transform = 'translate(0, -20%)',
    bibiMegaSetB.style.opacity = 1;
    bibiMegaSetB.style.transform = 'scale(1)';
});
bibiMegaSet.addEventListener('mouseout', function(){
    bibiMegaSetF.style.opacity = 1;
    bibiMegaSetF.style.transform = 'translate(0)',
    bibiMegaSetB.style.opacity = 0;
    bibiMegaSetB.style.transform = 'scale(0)';
});

//올인원세트
/* ========== 변수 ========== */
let allInOneSet = document.querySelector('.set_menu > .AllInOneSet');
let allInOneSetF = document.querySelector('.set_menu > .AllInOneSet > .front');
let allInOneSetB = document.querySelector('.set_menu > .AllInOneSet > .back');
/* ========== 변수 ========== */
allInOneSet.addEventListener('mouseover', function(){
    allInOneSetF.style.opacity = 0;
    allInOneSetF.style.transform = 'translate(0, -20%)',
    allInOneSetB.style.opacity = 1;
    allInOneSetB.style.transform = 'scale(1)';
});
allInOneSet.addEventListener('mouseout', function(){
    allInOneSetF.style.opacity = 1;
    allInOneSetF.style.transform = 'translate(0)',
    allInOneSetB.style.opacity = 0;
    allInOneSetB.style.transform = 'scale(0)';
});

//사이드세트
/* ========== 변수 ========== */
let sideSet = document.querySelector('.set_menu > .SideSet');
let sideSetF = document.querySelector('.set_menu > .SideSet > .front');
let sideSetB = document.querySelector('.set_menu > .SideSet > .back');
/* ========== 변수 ========== */
sideSet.addEventListener('mouseover', function(){
    sideSetF.style.opacity = 0;
    sideSetF.style.transform = 'translate(0, -20%)',
    sideSetB.style.opacity = 1;
    sideSetB.style.transform = 'scale(1)';
});
sideSet.addEventListener('mouseout', function(){
    sideSetF.style.opacity = 1;
    sideSetF.style.transform = 'translate(0)',
    sideSetB.style.opacity = 0;
    sideSetB.style.transform = 'scale(0)';
});

//1+1 세트
/* ========== 변수 ========== */
let opoSet = document.querySelector('.set_menu > .opoSet');
let opoSetF = document.querySelector('.set_menu > .opoSet > .front');
let opoSetB = document.querySelector('.set_menu > .opoSet > .back');
/* ========== 변수 ========== */
opoSet.addEventListener('mouseover', function(){
    opoSetF.style.opacity = 0;
    opoSetF.style.transform = 'translate(0, -20%)',
    opoSetB.style.opacity = 1;
    opoSetB.style.transform = 'scale(1)';
});
opoSet.addEventListener('mouseout', function(){
    opoSetF.style.opacity = 1;
    opoSetF.style.transform = 'translate(0)',
    opoSetB.style.opacity = 0;
    opoSetB.style.transform = 'scale(0)';
});

// 2인 세트 A
/* ========== 변수 ========== */
let tPersonSetA = document.querySelector('.set_menu > .tPersonsetA');
let tPersonSetAF = document.querySelector('.set_menu > .tPersonsetA > .front');
let tPersonSetAB = document.querySelector('.set_menu > .tPersonsetA > .back');
/* ========== 변수 ========== */
tPersonSetA.addEventListener('mouseover', function(){
    tPersonSetAF.style.opacity = 0;
    tPersonSetAF.style.transform = 'translate(0, -20%)',
    tPersonSetAB.style.opacity = 1;
    tPersonSetAB.style.transform = 'scale(1)';
});
tPersonSetA.addEventListener('mouseout', function(){
    tPersonSetAF.style.opacity = 1;
    tPersonSetAF.style.transform = 'translate(0)',
    tPersonSetAB.style.opacity = 0;
    tPersonSetAB.style.transform = 'scale(0)';
});

//2인 세트 B
/* ========== 변수 ========== */
let tPersonSetB = document.querySelector('.set_menu > .tPersonsetB');
let tPersonSetBF = document.querySelector('.set_menu > .tPersonsetB > .front');
let tPersonSetBB = document.querySelector('.set_menu > .tPersonsetB > .back');
/* ========== 변수 ========== */
tPersonSetB.addEventListener('mouseover', function(){
    tPersonSetBF.style.opacity = 0;
    tPersonSetBF.style.transform = 'translate(0, -20%)',
    tPersonSetBB.style.opacity = 1;
    tPersonSetBB.style.transform = 'scale(1)';
});
tPersonSetB.addEventListener('mouseout', function(){
    tPersonSetBF.style.opacity = 1;
    tPersonSetBF.style.transform = 'translate(0)',
    tPersonSetBB.style.opacity = 0;
    tPersonSetBB.style.transform = 'scale(0)';
});

//2인 세트 C
/* ========== 변수 ========== */
let tPersonSetC = document.querySelector('.set_menu > .tPersonsetC');
let tPersonSetCF = document.querySelector('.set_menu > .tPersonsetC > .front');
let tPersonSetCB = document.querySelector('.set_menu > .tPersonsetC > .back');
/* ========== 변수 ========== */
tPersonSetC.addEventListener('mouseover', function(){
    tPersonSetCF.style.opacity = 0;
    tPersonSetCF.style.transform = 'translate(0, -20%)',
    tPersonSetCB.style.opacity = 1;
    tPersonSetCB.style.transform = 'scale(1)';
});
tPersonSetC.addEventListener('mouseout', function(){
    tPersonSetCF.style.opacity = 1;
    tPersonSetCF.style.transform = 'translate(0)',
    tPersonSetCB.style.opacity = 0;
    tPersonSetCB.style.transform = 'scale(0)';
});

//3-4인 세트A
/* ========== 변수 ========== */
let tfPersonSetA = document.querySelector('.set_menu > .tfPersonsetA');
let tfPersonSetAF = document.querySelector('.set_menu > .tfPersonsetA > .front');
let tfPersonSetAB = document.querySelector('.set_menu > .tfPersonsetA > .back');
/* ========== 변수 ========== */
tfPersonSetA.addEventListener('mouseover', function(){
    tfPersonSetAF.style.opacity = 0;
    tfPersonSetAF.style.transform = 'translate(0, -20%)',
    tfPersonSetAB.style.opacity = 1;
    tfPersonSetAB.style.transform = 'scale(1)';
});
tfPersonSetA.addEventListener('mouseout', function(){
    tfPersonSetAF.style.opacity = 1;
    tfPersonSetAF.style.transform = 'translate(0)',
    tfPersonSetAB.style.opacity = 0;
    tfPersonSetAB.style.transform = 'scale(0)';
});

//3~4인 세트 B
/* ========== 변수 ========== */
let tfPersonSetB = document.querySelector('.set_menu > .tfPersonsetB');
let tfPersonSetBF = document.querySelector('.set_menu > .tfPersonsetB > .front');
let tfPersonSetBB = document.querySelector('.set_menu > .tfPersonsetB > .back');
/* ========== 변수 ========== */
tfPersonSetB.addEventListener('mouseover', function(){
    tfPersonSetBF.style.opacity = 0;
    tfPersonSetBF.style.transform = 'translate(0, -20%)',
    tfPersonSetBB.style.opacity = 1;
    tfPersonSetBB.style.transform = 'scale(1)';
});
tfPersonSetB.addEventListener('mouseout', function(){
    tfPersonSetBF.style.opacity = 1;
    tfPersonSetBF.style.transform = 'translate(0)',
    tfPersonSetBB.style.opacity = 0;
    tfPersonSetBB.style.transform = 'scale(0)';
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