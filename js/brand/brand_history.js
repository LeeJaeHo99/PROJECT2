//스크롤 애니메이션
$(window).scroll(function(){
    let height = $(window).scrollTop();
    console.log(`스크롤 높이 확인 : ` + height);

    //medal
    if(height >= 500 && height <= 1700){
        $('.sec3_medal > div').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
    });
    }else{
        $('.sec3_medal > div').css({
            'opacity' : 0,
            'transform'  : 'translate(0, 50%)',
    });
    }

    ///text_bg
    if(height >= 1300){
        $('.text_bg').css({
            'opacity' : 0.05,
            'transform' : 'translate(-50%, -50%)',
    });
    }else{
        $('.text_bg').css({
            'opacity' : 0,
            'transform'  : 'translate(0 ,-50%)',
    });
    }

    //sec4
    /* ===== 2024 ===== */
    if(height >= 777){
        $('.year1').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
    });
    }else{
        $('.year1').css({
            'opacity' : 0,
            'transform'  : 'translate(-30%)',
    });
    }
    if(height >= 1000){
        $('.sec4_2024 > .year_content1').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
    });
}else{
        $('.sec4_2024 > .year_content1').css({
            'opacity' : 0,
            'transform'  : 'translate(0, 30%)',
    });
    }
    if(height >= 1100){
        $('.sec4_2024 > .year_content2').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
    });
}else{
        $('.sec4_2024 > .year_content2').css({
            'opacity' : 0,
            'transform'  : 'translate(0, 30%)',
    });
    }
    /* ===== 2024 ===== */
    /* ===== 2023 ===== */
    if(height >= 1200){
        $('.year2').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
    });
    }else{
        $('.year2').css({
            'opacity' : 0,
            'transform'  : 'translate(30%)',
    });
    }
    if(height >= 1300){
        $('.sec4_2023 > .year_content1').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
    });
}else{
        $('.sec4_2023 > .year_content1').css({
            'opacity' : 0,
            'transform'  : 'translate(0, 30%)',
    });
    }
    if(height >= 1400){
        $('.sec4_2023 > .year_content2').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
    });
}else{
        $('.sec4_2023 > .year_content2').css({
            'opacity' : 0,
            'transform'  : 'translate(0, 30%)',
    });
    }
    if(height >= 1500){
        $('.sec4_2023 > .year_content3').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
    });
}else{
        $('.sec4_2023 > .year_content3').css({
            'opacity' : 0,
            'transform'  : 'translate(0, 30%)',
    });
    }
    if(height >= 1600){
        $('.sec4_2023 > .year_content4').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
    });
}else{
        $('.sec4_2023 > .year_content4').css({
            'opacity' : 0,
            'transform'  : 'translate(0, 30%)',
    });
    }
    if(height >= 1700){
        $('.sec4_2023 > .year_content5').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
    });
}else{
        $('.sec4_2023 > .year_content5').css({
            'opacity' : 0,
            'transform'  : 'translate(0, 30%)',
    });
    }
    if(height >= 1800){
        $('.sec4_2023 > .year_content6').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
    });
}else{
        $('.sec4_2023 > .year_content6').css({
            'opacity' : 0,
            'transform'  : 'translate(0, 30%)',
    });
    }
    /* ===== 2023 ===== */
    /* ===== 2022 ===== */
    if(height >= 1900){
        $('.year3').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
    });
    }else{
        $('.year3').css({
            'opacity' : 0,
            'transform'  : 'translate(-30%)',
    });
    }
    if(height >= 1990){
        $('.sec4_2022 > .year_content1').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
    });
}else{
        $('.sec4_2022 > .year_content1').css({
            'opacity' : 0,
            'transform'  : 'translate(0, 30%)',
    });
    }
    if(height >= 2100){
        $('.sec4_2022 > .year_content2').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
    });
}else{
        $('.sec4_2022 > .year_content2').css({
            'opacity' : 0,
            'transform'  : 'translate(0, 30%)',
    });
    }
    if(height >= 2200){
        $('.sec4_2022 > .year_content3').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
    });
}else{
        $('.sec4_2022 > .year_content3').css({
            'opacity' : 0,
            'transform'  : 'translate(0, 30%)',
    });
    }
    if(height >= 2300){
        $('.sec4_2022 > .year_content4').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
    });
}else{
        $('.sec4_2022 > .year_content4').css({
            'opacity' : 0,
            'transform'  : 'translate(0, 30%)',
    });
    }
    /* ===== 2022 ===== */
    /* ===== 2021 ===== */
    if(height >= 2450){
        $('.year4').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
    });
    }else{
        $('.year4').css({
            'opacity' : 0,
            'transform'  : 'translate(30%)',
    });
    }
    if(height >= 2550){
        $('.sec4_2021 > .year_content1').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
    });
}else{
        $('.sec4_2021 > .year_content1').css({
            'opacity' : 0,
            'transform'  : 'translate(0, 30%)',
    });
    }
    if(height >= 2650){
        $('.sec4_2021 > .year_content2').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
    });
}else{
        $('.sec4_2021 > .year_content2').css({
            'opacity' : 0,
            'transform'  : 'translate(0, 30%)',
    });
    }
    if(height >= 2750){
        $('.sec4_2021 > .year_content3').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
    });
}else{
        $('.sec4_2021 > .year_content3').css({
            'opacity' : 0,
            'transform'  : 'translate(0, 30%)',
    });
    }
    if(height >= 2850){
        $('.sec4_2021 > .year_content4').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
    });
}else{
        $('.sec4_2021 > .year_content4').css({
            'opacity' : 0,
            'transform'  : 'translate(0, 30%)',
    });
    }
    /* ===== 2021 ===== */
    /* ===== 2020 ===== */
    if(height >= 2950){
        $('.year5').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
    });
    }else{
        $('.year5').css({
            'opacity' : 0,
            'transform'  : 'translate(-20%)',
    });
    }
    if(height >= 3050){
        $('.sec4_2020 > .year_content1').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
    });
}else{
        $('.sec4_2020 > .year_content1').css({
            'opacity' : 0,
            'transform'  : 'translate(0, 30%)',
    });
    }
    if(height >= 3150){
        $('.sec4_2020 > .year_content2').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
    });
}else{
        $('.sec4_2020 > .year_content2').css({
            'opacity' : 0,
            'transform'  : 'translate(0, 30%)',
    });
    }
    if(height >= 3250){
        $('.sec4_2020 > .year_content3').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
    });
}else{
        $('.sec4_2020 > .year_content3').css({
            'opacity' : 0,
            'transform'  : 'translate(0, 30%)',
    });
    }
    if(height >= 3350){
        $('.sec4_2020 > .year_content4').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
    });
}else{
        $('.sec4_2020 > .year_content4').css({
            'opacity' : 0,
            'transform'  : 'translate(0, 30%)',
    });
    }
    if(height >= 3450){
        $('.sec4_2020 > .year_content5').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
    });
}else{
        $('.sec4_2020 > .year_content5').css({
            'opacity' : 0,
            'transform'  : 'translate(0, 30%)',
    });
    }
    if(height >= 3550){
        $('.sec4_2020 > .year_content6').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
    });
}else{
        $('.sec4_2020 > .year_content6').css({
            'opacity' : 0,
            'transform'  : 'translate(0, 30%)',
    });
    }
    if(height >= 3650){
        $('.sec4_2020 > .year_content7').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
    });
}else{
        $('.sec4_2020 > .year_content7').css({
            'opacity' : 0,
            'transform'  : 'translate(0, 30%)',
    });
    }
    /* ===== 2020 ===== */

    //fixed_button
    if(height >= 1){
        $('.fixed_button').css({
            'opacity' : 1,
            'transform' : 'translate(-50%)',
    });
    }else{
        $('.fixed_button').css({
            'opacity' : 0,
            'transform'  : 'translate(50%)',
    });
    }

});


//탑버튼
$('.topbutton').on('click', function(){
    window.scroll({
        'top' : 0,
        'behavior' : 'smooth',
    })
});