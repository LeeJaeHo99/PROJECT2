//스크롤 애니메이션
window.onscroll = function() {
    let height = window.pageYOffset;
    console.log(`스크롤 높이 : ` + height);

    /* ========== 변수 ========== */
    const fixedBtn = document.querySelector('.fixed_button');

    //sec3
    const sec3LeftTop = document.querySelector('.sec3_left_top');
    const sec3LeftBot = document.querySelector('.sec3_left_bottom');
    const sec3Right = document.querySelector('.sec3_right');

    //sec4
    const sec4Left = document.querySelector('.sec4_left');
    const sec4RightTop = document.querySelector('.sec4_right_top');
    const sec4RightBot = document.querySelector('.sec4_right_bottom');

    //sec5
    const sec5LeftTop = document.querySelector('.sec5_left_top');
    const sec5LeftBot = document.querySelector('.sec5_left_bottom');
    const sec5Right = document.querySelector('.sec5_right');

    //sec6
    const sec6Banner = document.querySelector('.sec6_banner');
    const sec6Text = document.querySelector('.sec6_text');

    //sec7
    const sec7Text = document.querySelector('.sec7_text');

    //sec8
    const sec8Title = document.querySelector('.sec8_title');
    const sec8LeftTitle = document.querySelector('.content1_title');
    const sec8LeftText = document.querySelector('.content1_text');
    const sec8RightTitle = document.querySelector('.content2_title');
    const sec8RightText = document.querySelector('.content2_text');

    //sec9
    const sec9Title = document.querySelector('.sec9_title');
    const sec9BoxTitle = document.querySelectorAll('.textbox_title');
    const sec9BoxText = document.querySelectorAll('.textbox_content');
    
    //sec10
    const sec10Title = document.querySelector('.sec10_title');
    const logoTitle = document.querySelector('.sec10_logo_title');
    const logoCnt = document.querySelector('.sec10_logo_content');
    const logoImg = document.querySelector('.sec10_logo_img');
    const colorTitle = document.querySelector('.sec10_color_title');
    const colorCnt = document.querySelector('.sec10_color_content');
    const colorBox = document.querySelector('.sec10_colorbox');
    
    /* ========== 변수 ========== */


    /* ========== sec3 ========== */
    if(height >= 500 && height <= 2000){
        sec3LeftTop.style.opacity = 1;
        sec3LeftTop.style.transform = 'translate(0)';
        sec3LeftBot.style.opacity = 1;
        sec3LeftBot.style.transform = 'translate(0)';
        sec3Right.style.opacity = 1;
        sec3Right.style.transform = 'translate(0)';
    }else{
        sec3LeftTop.style.opacity = 0;
        sec3LeftTop.style.transform = 'translate(-10%)';
        sec3LeftBot.style.opacity = 0;
        sec3LeftBot.style.transform = 'translate(-10%)';
        sec3Right.style.opacity = 0;
        sec3Right.style.transform = 'translate(10%)';
    }
    /* ========== sec3 ========== */


    /* ========== sec4 ========== */
    if(height >= 1100 && height <= 2600){
        sec4Left.style.opacity = 1;
        sec4Left.style.transform = 'translate(0)';
        sec4RightTop.style.opacity = 1;
        sec4RightTop.style.transform = 'translate(0)';
        sec4RightBot.style.opacity = 1;
        sec4RightBot.style.transform = 'translate(0)';
    }else{
        sec4Left.style.opacity = 0;
        sec4Left.style.transform = 'translate(-10%)';
        sec4RightTop.style.opacity = 0;
        sec4RightTop.style.transform = 'translate(10%)';
        sec4RightBot.style.opacity = 0;
        sec4RightBot.style.transform = 'translate(10%)';
    }
    /* ========== sec4 ========== */


    /* ========== sec5 ========== */
    if(height >= 1800 && height <= 3200){
        sec5LeftTop.style.opacity = 1;
        sec5LeftTop.style.transform = 'translate(0)';
        sec5LeftBot.style.opacity = 1;
        sec5LeftBot.style.transform = 'translate(0)';
        sec5Right.style.opacity = 1;
        sec5Right.style.transform = 'translate(0)';
    }else{
        sec5LeftTop.style.opacity = 0;
        sec5LeftTop.style.transform = 'translate(-10%)';
        sec5LeftBot.style.opacity = 0;
        sec5LeftBot.style.transform = 'translate(-10%)';
        sec5Right.style.opacity = 0;
        sec5Right.style.transform = 'translate(10%)';
    }
    /* ========== sec5 ========== */

    /* ========== sec6 ========== */
    //banner
    if(height >= 2400 && height <= 3800){
        sec6Banner.style.opacity = 1;
        sec6Banner.style.transform = 'translate(0)';
    }else{
        sec6Banner.style.opacity = 0;
        sec6Banner.style.transform = 'translate(0, -30%)';
    }
    //text
    if(height >= 3000 && height <= 4000){
        sec6Text.style.opacity = 1;
        sec6Text.style.transform = 'translate(0)';
    }else{
        sec6Text.style.opacity = 0;
        sec6Text.style.transform = 'translate(0, 30%)';
    }
    /* ========== sec6 ========== */


    /* ========== sec7 ========== */
    if(height >= 3400 && height <= 5200){
        sec7Text.style.opacity = 1;
        sec7Text.style.transform = 'translate(-50%, -50%)';
    }else{
        sec7Text.style.opacity = 0;
        sec7Text.style.transform = 'translate(-50%, -20%)';
    }
    /* ========== sec7 ========== */


    /* ========== sec8 ========== */
    if(height >= 3550 && height <= 5800){
        sec8Title.style.opacity = 1;
        sec8Title.style.transform = 'translate(0)';
    }else{
        sec8Title.style.opacity = 0;
        sec8Title.style.transform = 'translate(0, 20%))';
    }
    if(height >= 3900 && height <= 5800){
        sec8LeftTitle.style.opacity = 1;
        sec8LeftTitle.style.transform = 'translate(0)';
        sec8LeftText.style.opacity = 1;
        sec8LeftText.style.transform = 'translate(-50%, -50%)';
    }else{
        sec8LeftTitle.style.opacity = 0;
        sec8LeftTitle.style.transform = 'translate(0, 30%)';
        sec8LeftText.style.opacity = 0;
        sec8LeftText.style.transform = 'translate(-50%, 50%)';
    }
    if(height >= 4000 && height <= 5800){
        sec8RightTitle.style.opacity = 1;
        sec8RightTitle.style.transform = 'translate(0)';
        sec8RightText.style.opacity = 1;
        sec8RightText.style.transform = 'translate(-50%, -50%)';
    }else{
        sec8RightTitle.style.opacity = 0;
        sec8RightTitle.style.transform = 'translate(0, 30%)';
        sec8RightText.style.opacity = 0;
        sec8RightText.style.transform = 'translate(-50%, 50%)';
    }
    /* ========== sec8 ========== */

    sec9BoxTitle
    /* ========== sec9 ========== */
    //title
    if(height >= 4800 && height <= 6400){
        sec9Title.style.opacity = 1;
        sec9Title.style.transform = 'translate(0)';
    }else{
        sec9Title.style.opacity = 0;
        sec9Title.style.transform = 'translate(0, 50%)';
    }
    //boxTitle
    sec9BoxTitle.forEach((boxTitle) => {
        if(height >= 4950){
            boxTitle.style.opacity = 1;
            boxTitle.style.transform = 'translate(0)';
        }else{
            boxTitle.style.opacity = 0;
            boxTitle.style.transform = 'translate(0, 50%)';
        }
    });
    //boxText
    sec9BoxText.forEach((boxText) => {
        if(height >= 4950){
            boxText.style.opacity = 1;
            boxText.style.transform = 'translate(0)';
        }else{
            boxText.style.opacity = 0;
            boxText.style.transform = 'translate(0, 50%)';
        }
    });
    /* ========== sec9 ========== */


    /* ========== sec10 ========== */
    //title
    if(height >= 5650){
        sec10Title.style.opacity = 1;
        sec10Title.style.transform = 'translate(0)';
    }else{
        sec10Title.style.opacity = 0;
        sec10Title.style.transform = 'translate(0, 50%)';
    }
    //logo_title
    if(height >= 5850){
        logoTitle.style.opacity = 1;
        logoTitle.style.transform = 'translate(0)';
    }else{
        logoTitle.style.opacity = 0;
        logoTitle.style.transform = 'translate(0, 50%)';
    }
    //logo_text
    if(height >= 5900){
        logoCnt.style.opacity = 1;
        logoCnt.style.transform = 'translate(0)';
    }else{
        logoCnt.style.opacity = 0;
        logoCnt.style.transform = 'translate(0, 50%)';
    }
    //logo_img
    if(height >= 6000){
        logoImg.style.opacity = 1;
        logoImg.style.transform = 'translate(0)';
    }else{
        logoImg.style.opacity = 0;
        logoImg.style.transform = 'translate(0, 50%)';
    }
    //color_title
    if(height >= 6400){
        colorTitle.style.opacity = 1;
        colorTitle.style.transform = 'translate(0)';
    }else{
        colorTitle.style.opacity = 0;
        colorTitle.style.transform = 'translate(0, 50%)';
    }
    //color_text
    if(height >= 6450){
        colorCnt.style.opacity = 1;
        colorCnt.style.transform = 'translate(0)';
    }else{
        colorCnt.style.opacity = 0;
        colorCnt.style.transform = 'translate(0, 50%)';
    }
    //color_img
    if(height >= 6550){
        colorBox.style.opacity = 1;
        colorBox.style.transform = 'translate(0)';
    }else{
        colorBox.style.opacity = 0;
        colorBox.style.transform = 'translate(0, 50%)';
    }
    /* ========== sec10 ========== */

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