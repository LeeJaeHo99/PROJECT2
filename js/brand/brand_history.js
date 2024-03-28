//스크롤 애니메이션
window.onscroll = function() {
    let height = window.pageYOffset;
    
    /* ===== 변수 ===== */
    const medal = document.querySelectorAll('.sec3_medal > div');
    const textBg = document.querySelector('.text_bg');
    const fixedBtn = document.querySelector('.fixed_button');

    const yearTitle1 = document.querySelector('.year1');
    const y1table1 = document.querySelector('.sec4_2024 > .year_content1');
    const y1table2 = document.querySelector('.sec4_2024 > .year_content2');

    const yearTitle2 = document.querySelector('.year2');
    const y2table1 = document.querySelector('.sec4_2023 > .year_content1');
    const y2table2 = document.querySelector('.sec4_2023 > .year_content2');
    const y2table3 = document.querySelector('.sec4_2023 > .year_content3');
    const y2table4 = document.querySelector('.sec4_2023 > .year_content4');
    const y2table5 = document.querySelector('.sec4_2023 > .year_content5');
    const y2table6 = document.querySelector('.sec4_2023 > .year_content6');

    const yearTitle3 = document.querySelector('.year3');
    const y3table1 = document.querySelector('.sec4_2022 > .year_content1');
    const y3table2 = document.querySelector('.sec4_2022 > .year_content2');
    const y3table3 = document.querySelector('.sec4_2022 > .year_content3');
    const y3table4 = document.querySelector('.sec4_2022 > .year_content4');

    const yearTitle4 = document.querySelector('.year4');
    const y4table1 = document.querySelector('.sec4_2021 > .year_content1');
    const y4table2 = document.querySelector('.sec4_2021 > .year_content2');
    const y4table3 = document.querySelector('.sec4_2021 > .year_content3');
    const y4table4 = document.querySelector('.sec4_2021 > .year_content4');

    const yearTitle5 = document.querySelector('.year5');
    const y5table1 = document.querySelector('.sec4_2020 > .year_content1');
    const y5table2 = document.querySelector('.sec4_2020 > .year_content2');
    const y5table3 = document.querySelector('.sec4_2020 > .year_content3');
    const y5table4 = document.querySelector('.sec4_2020 > .year_content4');
    const y5table5 = document.querySelector('.sec4_2020 > .year_content5');
    const y5table6 = document.querySelector('.sec4_2020 > .year_content6');
    const y5table7 = document.querySelector('.sec4_2020 > .year_content7');
    /* ===== 변수 ===== */

    //medal
    medal.forEach((medal) => {
        if(height >= 500 && height <= 1700){
            medal.style.opacity = 1;
            medal.style.transform = 'translate(0)';
        }else{
            medal.style.opacity = 0;
            medal.style.transform = 'translate(0, 50%)';
        }
    });

    //text_bg
    if(height >= 1300){
        textBg.style.opacity = 0.05;
        textBg.style.transform = 'translate(-50%, -50%)';
    }else{
        textBg.style.opacity = 0;
        textBg.style.transform = 'translate(0, -50%)';
    }

    /* ===== 2024 ===== */
    if(height >= 777){
        yearTitle1.style.opacity = 1;
        yearTitle1.style.transform = 'translate(0)';
    }else{
        yearTitle1.style.opacity = 0;
        yearTitle1.style.transform = 'translate(-30%)';
    }
    if(height >= 1000){
        y1table1.style.opacity = 1;
        y1table1.style.transform = 'translate(0)';
    }else{
        y1table1.style.opacity = 0;
        y1table1.style.transform = 'translate(0, 30%)';
    }
    if(height >= 1100){
        y1table2.style.opacity = 1;
        y1table2.style.transform = 'translate(0)';
    }else{
        y1table2.style.opacity = 0;
        y1table2.style.transform = 'translate(0, 30%)';
    }
    /* ===== 2024 ===== */

     /* ===== 2023 ===== */
    if(height >= 1200){
        yearTitle2.style.opacity = 1;
        yearTitle2.style.transform = 'translate(0)';
    }else{
        yearTitle2.style.opacity = 0;
        yearTitle2.style.transform = 'translate(30%)';
    }
    if(height >= 1300){
        y2table1.style.opacity = 1;
        y2table1.style.transform = 'translate(0)';
    }else{
        y2table1.style.opacity = 0;
        y2table1.style.transform = 'translate(0, 30%)';
    }
    if(height >= 1400){
        y2table2.style.opacity = 1;
        y2table2.style.transform = 'translate(0)';
    }else{
        y2table2.style.opacity = 0;
        y2table2.style.transform = 'translate(0, 30%)';
    }
    if(height >= 1500){
        y2table3.style.opacity = 1;
        y2table3.style.transform = 'translate(0)';
    }else{
        y2table3.style.opacity = 0;
        y2table3.style.transform = 'translate(0, 30%)';
    }
    if(height >= 1600){
        y2table4.style.opacity = 1;
        y2table4.style.transform = 'translate(0)';
    }else{
        y2table4.style.opacity = 0;
        y2table4.style.transform = 'translate(0, 30%)';
    }
    if(height >= 1700){
        y2table5.style.opacity = 1;
        y2table5.style.transform = 'translate(0)';
    }else{
        y2table5.style.opacity = 0;
        y2table5.style.transform = 'translate(0, 30%)';
    }
    if(height >= 1800){
        y2table6.style.opacity = 1;
        y2table6.style.transform = 'translate(0)';
    }else{
        y2table6.style.opacity = 0;
        y2table6.style.transform = 'translate(0, 30%)';
    }
    /* ===== 2023 ===== */

    /* ===== 2022 ===== */
    if(height >= 1800){
        yearTitle3.style.opacity = 1;
        yearTitle3.style.transform = 'translate(0)';
    }else{
        yearTitle3.style.opacity = 0;
        yearTitle3.style.transform = 'translate(-30%)';
    }
    if(height >= 1900){
        y3table1.style.opacity = 1;
        y3table1.style.transform = 'translate(0)';
    }else{
        y3table1.style.opacity = 0;
        y3table1.style.transform = 'translate(0, 30%)';
    }
    if(height >= 2100){
        y3table2.style.opacity = 1;
        y3table2.style.transform = 'translate(0)';
    }else{
        y3table2.style.opacity = 0;
        y3table2.style.transform = 'translate(0, 30%)';
    }
    if(height >= 2200){
        y3table3.style.opacity = 1;
        y3table3.style.transform = 'translate(0)';
    }else{
        y3table3.style.opacity = 0;
        y3table3.style.transform = 'translate(0, 30%)';
    }
    if(height >= 2300){
        y3table4.style.opacity = 1;
        y3table4.style.transform = 'translate(0)';
    }else{
        y3table4.style.opacity = 0;
        y3table4.style.transform = 'translate(0, 30%)';
    }
    /* ===== 2022 ===== */

    /* ===== 2021 ===== */
    if(height >= 2450){
        yearTitle4.style.opacity = 1;
        yearTitle4.style.transform = 'translate(0)';
    }else{
        yearTitle4.style.opacity = 0;
        yearTitle4.style.transform = 'translate(30%)';
    }
    if(height >= 2550){
        y4table1.style.opacity = 1;
        y4table1.style.transform = 'translate(0)';
    }else{
        y4table1.style.opacity = 0;
        y4table1.style.transform = 'translate(0, 30%)';
    }
    if(height >= 2650){
        y4table2.style.opacity = 1;
        y4table2.style.transform = 'translate(0)';
    }else{
        y4table2.style.opacity = 0;
        y4table2.style.transform = 'translate(0, 30%)';
    }
    if(height >= 2750){
        y4table3.style.opacity = 1;
        y4table3.style.transform = 'translate(0)';
    }else{
        y4table3.style.opacity = 0;
        y4table3.style.transform = 'translate(0, 30%)';
    }
    if(height >= 2850){
        y4table4.style.opacity = 1;
        y4table4.style.transform = 'translate(0)';
    }else{
        y4table4.style.opacity = 0;
        y4table4.style.transform = 'translate(0, 30%)';
    }
    /* ===== 2021 ===== */

     /* ===== 2020 ===== */
    if(height >= 2950){
        yearTitle5.style.opacity = 1;
        yearTitle5.style.transform = 'translate(0)';
    }else{
        yearTitle5.style.opacity = 0;
        yearTitle5.style.transform = 'translate(-20%)';
    }
    if(height >= 3050){
        y5table1.style.opacity = 1;
        y5table1.style.transform = 'translate(0)';
    }else{
        y5table1.style.opacity = 0;
        y5table1.style.transform = 'translate(0, 30%)';
        }
    if(height >= 3150){
        y5table2.style.opacity = 1;
        y5table2.style.transform = 'translate(0)';
    }else{
        y5table2.style.opacity = 0;
        y5table2.style.transform = 'translate(0, 30%)';
        }
    if(height >= 3250){
        y5table3.style.opacity = 1;
        y5table3.style.transform = 'translate(0)';
    }else{
        y5table3.style.opacity = 0;
        y5table3.style.transform = 'translate(0, 30%)';
        }
    if(height >= 3350){
        y5table4.style.opacity = 1;
        y5table4.style.transform = 'translate(0)';
    }else{
        y5table4.style.opacity = 0;
        y5table4.style.transform = 'translate(0, 30%)';
        }
    if(height >= 3450){
        y5table5.style.opacity = 1;
        y5table5.style.transform = 'translate(0)';
    }else{
        y5table5.style.opacity = 0;
        y5table5.style.transform = 'translate(0, 30%)';
        }
    if(height >= 3550){
        y5table6.style.opacity = 1;
        y5table6.style.transform = 'translate(0)';
    }else{
        y5table6.style.opacity = 0;
        y5table6.style.transform = 'translate(0, 30%)';
        }
    if(height >= 3650){
        y5table7.style.opacity = 1;
        y5table7.style.transform = 'translate(0)';
    }else{
        y5table7.style.opacity = 0;
        y5table7.style.transform = 'translate(0, 30%)';
        }

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