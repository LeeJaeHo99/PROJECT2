

$(window).scroll(function(){
    let height = $(window).scrollTop();
    console.log(`스크롤 높이 확인 : ` + height);

    //sec3
    if(height >= 500 && height <= 2000){
        $('.sec3_left_top').css({
            'opacity' : '1',
            'transform' : 'translate(0)',
        });
        $('.sec3_left_bottom').css({
            'opacity' : '1',
            'transform' : 'translate(0)',
        });
        $('.sec3_right').css({
            'opacity' : '1',
            'transform' : 'translate(0)',
        });
    }else{
        $('.sec3_left_top').css({
            'opacity' : '0',
            'transform' : 'translate(-10%)',
        });
        $('.sec3_left_bottom').css({
            'opacity' : '0',
            'transform' : 'translate(-10%)',
        });
        $('.sec3_right').css({
            'opacity' : '0',
            'transform' : 'translate(10%)',
        });
    }

    //sec4
    if(height >= 1100 && height <= 2600){
        $('.sec4_left').css({
            'opacity' : '1',
            'transform' : 'translate(0)',
        });
        $('.sec4_right_top').css({
            'opacity' : '1',
            'transform' : 'translate(0)',
        });
        $('.sec4_right_bottom').css({
            'opacity' : '1',
            'transform' : 'translate(0)',
        });
    }else{
        $('.sec4_left').css({
            'opacity' : '0',
            'transform' : 'translate(-10%)',
        });
        $('.sec4_right_top').css({
            'opacity' : '0',
            'transform' : 'translate(10%)',
        });
        $('.sec4_right_bottom').css({
            'opacity' : '0',
            'transform' : 'translate(10%)',
        });
    }

    //sec5
    if(height >= 1800 && height <= 3200){
        $('.sec5_left_top').css({
            'opacity' : '1',
            'transform' : 'translate(0)',
        });
        $('.sec5_left_bottom').css({
            'opacity' : '1',
            'transform' : 'translate(0)',
        });
        $('.sec5_right').css({
            'opacity' : '1',
            'transform' : 'translate(0)',
        });
    }else{
        $('.sec5_left_top').css({
            'opacity' : '0',
            'transform' : 'translate(-10%)',
        });
        $('.sec5_left_bottom').css({
            'opacity' : '0',
            'transform' : 'translate(-10%)',
        });
        $('.sec5_right').css({
            'opacity' : '0',
            'transform' : 'translate(10%)',
        });
    }

    //sec6_banner
    if(height >= 2400 && height <= 3800){
        $('.sec6_banner').css('opacity', '1');
        $('.sec6_banner').css('transform', 'translate(0)');
    }else{
        $('.sec6_banner').css('opacity', '0');
        $('.sec6_banner').css('transform', 'translate(0, -30%)');
    }
    //sec6_text
    if(height >= 3000 && height <= 4000){
        $('.sec6_text').css('opacity', '1');
        $('.sec6_text').css('transform', 'translate(0)');
    }else{
        $('.sec6_text').css('opacity', '0');
        $('.sec6_text').css('transform', 'translate(0, 30%)');
    }

    //sec7_text
    if(height >= 3400 && height <= 5200){
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
    if(height >= 3900 && height <= 5800){
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

    //sec9 title
    if(height >= 4800 && height <= 6400){
        $('.sec9_title').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
        });
    }else{
        $('.sec9_title').css({
            'opacity' : 0,
            'transform' : 'translate(0, 50%)',
        });
    }
    //sec9_textbox
    if(height >= 4950){
        $('.textbox_title').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
        });
        $('.textbox_content').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
        });
    }else{
        $('.textbox_title').css({
            'opacity' : 0,
            'transform' : 'translate(0, 50%)',
        });
        $('.textbox_content').css({
            'opacity' : 0,
            'transform' : 'translate(0, 50%)',
        });
    }

    //sec10_title
    if(height >= 5650){
        $('.sec10_title').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
        });
    }else{
        $('.sec10_title').css({
            'opacity' : 0,
            'transform' : 'translate(0, 50%)',
        });
    }
    //sec10_logo_title
    if(height >= 5850){
        $('.sec10_logo_title').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
        });
    }else{
        $('.sec10_logo_title').css({
            'opacity' : 0,
            'transform' : 'translate(0, 50%)',
        });
    }
    //sec10_logo_content
    if(height >= 5900){
        $('.sec10_logo_content').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
        });
    }else{
        $('.sec10_logo_content').css({
            'opacity' : 0,
            'transform' : 'translate(0, 50%)',
        });
    }
    //sec10_logo_img
    if(height >= 6000){
        $('.sec10_logo_img').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
        });
    }else{
        $('.sec10_logo_img').css({
            'opacity' : 0,
            'transform' : 'translate(0, 50%)',
        });
    }
    //sec10_color_title
    if(height >= 6400){
        $('.sec10_color_title').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
        });
    }else{
        $('.sec10_color_title').css({
            'opacity' : 0,
            'transform' : 'translate(0, 50%)',
        });
    }
    //sec10_color_content
    if(height >= 6450){
        $('.sec10_color_content').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
        });
    }else{
        $('.sec10_color_content').css({
            'opacity' : 0,
            'transform' : 'translate(0, 50%)',
        });
    }
    //sec10_color_img
    if(height >= 6550){
        $('.sec10_colorbox').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
        });
    }else{
        $('.sec10_colorbox').css({
            'opacity' : 0,
            'transform' : 'translate(0, 50%)',
        });
    }

    //fixed_button
    if(height >= 0){
        $('.fixed_button').css({
            'opacity' : 1,
            'transform' : 'translate(-50%)',
        });
    }else{
        $('.fixed_button').css({
            'opacity' : 0,
            'transform' : 'translate(50%)',
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