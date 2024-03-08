//스크롤 애니메이션
window.onscroll = function() {
    let height = window.pageYOffset;
    console.log(`스크롤 높이 : ` + height);

    /* ========== 변수 ========== */
    const sec2Cnt = document.querySelector('.sec2_content');
    const sec2Box = document.querySelectorAll('.sec2_box');
    const fixedBtn = document.querySelector('.fixed_button');
    /* ========== 변수 ========== */

    if(height >= 350){
        sec2Cnt.style.opacity = 1;
        sec2Cnt.style.transform = 'translate(0)';
    }else{
        sec2Cnt.style.opacity = 0;
        sec2Cnt.style.transform = 'translate(0, 50%)';
    }

    sec2Box.forEach((box) => {
        if(height >= 500){
            box.style.opacity = 1;
            box.style.transform = 'translate(0)';
        }else{
            box.style.opacity = 0;
            box.style.transform = 'translate(0, 50%)';
        }
    })

        //fixed_button
        if(height >= 1){
            fixedBtn.style.opacity = 1;
            fixedBtn.style.transform = 'translate(-50%)';
        }else{
            fixedBtn.style.opacity = 0;
            fixedBtn.style.transform = 'translate(50%)';
        }
}

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