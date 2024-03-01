//스크롤 애니메이션
$(window).scroll(function(){
    let height = $(window).scrollTop();
    console.log(`스크롤 높이 확인 : ` + height);

    //sec2
    if(height >= 350){
        $('.sec2_content').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
    });
    }else{
        $('.sec2_content').css({
            'opacity' : 0,
            'transform'  : 'translate(0, 50%)',
    });
    }
    if(height >= 500){
        $('.sec2_box').css({
            'opacity' : 1,
            'transform' : 'translate(0)',
    });
    }else{
        $('.sec2_box').css({
            'opacity' : 0,
            'transform'  : 'translate(0, 50%)',
    });
    }

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