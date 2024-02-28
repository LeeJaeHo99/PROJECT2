$(window).scroll(function(){
    let height = $(window).scrollTop();
    console.log(`스크롤 높이 확인 : ` + height);


//fixed_button
    if(height >= 0){
        $('.fixed_button').css('opacity', 1);
        $('.fixed_button').css('transform', 'translate(-50%)');
    }else{
        $('.fixed_button').css('opacity', 0);
        $('.fixed_button').css('transform', 'translate(50%)');
    }
});

$(window).scroll(function(){
    let height = $(window).scrollTop();
    console.log(`스크롤 높이 확인 : ` + height);

    //sec3
    if(height >= 200 && height <= 2000){
        $('.sec3_left').css('opacity', '1');
        $('.sec3_left').css('transform', 'translate(0)');
        $('.sec3_right').css('opacity', '1');
        $('.sec3_right').css('transform', 'translate(0)');
    }else{
        $('.sec3_left').css('opacity', '0');
        $('.sec3_left').css('transform', 'translate(-30%)');
        $('.sec3_right').css('opacity', '0');
        $('.sec3_right').css('transform', 'translate(30%)');
    }

    //sec4
    if(height >= 850 && height <= 2600){
        $('.sec4_left').css('opacity', '1');
        $('.sec4_left').css('transform', 'translate(0)');
        $('.sec4_right').css('opacity', '1');
        $('.sec4_right').css('transform', 'translate(0)');
    }else{
        $('.sec4_left').css('opacity', '0');
        $('.sec4_left').css('transform', 'translate(-30%)');
        $('.sec4_right').css('opacity', '0');
        $('.sec4_right').css('transform', 'translate(30%)');
    }

    //sec5
    if(height >= 1400 && height <= 3200){
        $('.sec5_left').css('opacity', '1');
        $('.sec5_left').css('transform', 'translate(0)');
        $('.sec5_right').css('opacity', '1');
        $('.sec5_right').css('transform', 'translate(0)');
    }else{
        $('.sec5_left').css('opacity', '0');
        $('.sec5_left').css('transform', 'translate(-30%)');
        $('.sec5_right').css('opacity', '0');
        $('.sec5_right').css('transform', 'translate(30%)');
    }

    //sec6_banner
    if(height >= 2100 && height <= 3800){
        $('.sec6_banner').css('opacity', '1');
        $('.sec6_banner').css('transform', 'translate(0)');
    }else{
        $('.sec6_banner').css('opacity', '0');
        $('.sec6_banner').css('transform', 'translate(0, -30%)');
    }
    //sec6_text
    if(height >= 2850 && height <= 4000){
        $('.sec6_text').css('opacity', '1');
        $('.sec6_text').css('transform', 'translate(0)');
    }else{
        $('.sec6_text').css('opacity', '0');
        $('.sec6_text').css('transform', 'translate(0, 30%)');
    }

    //sec7_text
    if(height >= 3200 && height <= 5200){
        $('.sec7_text').css('opacity', '1');
        $('.sec7_text').css('transform', 'translate(-50%, -50%)');
    }else{
        $('.sec7_text').css('opacity', '0');
        $('.sec7_text').css('transform', 'translate(-50%, -20%)');
    }

    //sec8
    if(height >= 3550 && height <= 5800){
        $('.sec8_title').css('opacity', '1');
        $('.sec8_title').css('transform', 'translate(0)');
    }else{
        $('.sec8_title').css('opacity', '0');
        $('.sec8_title').css('transform', 'translate(0, 20%)');
    }
    //content1_title
    if(height >= 3750 && height <= 5800){
        $('.content1_title').css('opacity', '1');
        $('.content1_title').css('transform', 'translate(0)');
        $('.content1_text').css('opacity', '1');
        $('.content1_text').css('transform', 'translate(-50%, -50%)');
    }else{
        $('.content1_title').css('opacity', '0');
        $('.content1_title').css('transform', 'translate(0, 30%)');
        $('.content1_text').css('opacity', '0');
        $('.content1_text').css('transform', 'translate(-50%, 50%)');
    }
    //content2_title
    if(height >= 4000 && height <= 5800){
        $('.content2_title').css('opacity', '1');
        $('.content2_title').css('transform', 'translate(0)');
        $('.content2_text').css('opacity', '1');
        $('.content2_text').css('transform', 'translate(-50%, -50%)');
    }else{
        $('.content2_title').css('opacity', '0');
        $('.content2_title').css('transform', 'translate(0, 30%)');
        $('.content2_text').css('opacity', '0');
        $('.content2_text').css('transform', 'translate(-50%, 50%)');
    }
});