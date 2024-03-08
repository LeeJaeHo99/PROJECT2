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