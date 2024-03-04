$(window).scroll(function(){
    let height = $(window).scrollTop();
    console.log(`스크롤 높이 확인 : ` + height);

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

//세트 호버
//비비 플렉스 세트
$('.set_menu > .BIBIFlexSet').on('mouseenter', function(){
    $('.set_menu > .BIBIFlexSet > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.set_menu > .BIBIFlexSet > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.set_menu > .BIBIFlexSet').on('mouseleave', function(){
    $('.set_menu > .BIBIFlexSet > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.set_menu > .BIBIFlexSet > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//비비 베이직 세트
$('.set_menu > .BIBIBasicSet').on('mouseenter', function(){
    $('.set_menu > .BIBIBasicSet > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.set_menu > .BIBIBasicSet > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.set_menu > .BIBIBasicSet').on('mouseleave', function(){
    $('.set_menu > .BIBIBasicSet > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.set_menu > .BIBIBasicSet > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//비비 메가 세트
$('.set_menu > .BIBIMegaSet').on('mouseenter', function(){
    $('.set_menu > .BIBIMegaSet > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.set_menu > .BIBIMegaSet > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.set_menu > .BIBIMegaSet').on('mouseleave', function(){
    $('.set_menu > .BIBIMegaSet > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.set_menu > .BIBIMegaSet > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//올인원세트
$('.set_menu > .AllInOneSet').on('mouseenter', function(){
    $('.set_menu > .AllInOneSet > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.set_menu > .AllInOneSet > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.set_menu > .AllInOneSet').on('mouseleave', function(){
    $('.set_menu > .AllInOneSet > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.set_menu > .AllInOneSet > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//사이드세트
$('.set_menu > .SideSet').on('mouseenter', function(){
    $('.set_menu > .SideSet > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.set_menu > .SideSet > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.set_menu > .SideSet').on('mouseleave', function(){
    $('.set_menu > .SideSet > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.set_menu > .SideSet > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//1+1 세트
$('.set_menu > .opoSet').on('mouseenter', function(){
    $('.set_menu > .opoSet > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.set_menu > .opoSet > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.set_menu > .opoSet').on('mouseleave', function(){
    $('.set_menu > .opoSet > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.set_menu > .opoSet > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
// 2인 세트 A
$('.set_menu > .tPersonsetA').on('mouseenter', function(){
    $('.set_menu > .tPersonsetA > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.set_menu > .tPersonsetA > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.set_menu > .tPersonsetA').on('mouseleave', function(){
    $('.set_menu > .tPersonsetA > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.set_menu > .tPersonsetA > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//2인 세트 B
$('.set_menu > .tPersonsetB').on('mouseenter', function(){
    $('.set_menu > .tPersonsetB > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.set_menu > .tPersonsetB > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.set_menu > .tPersonsetB').on('mouseleave', function(){
    $('.set_menu > .tPersonsetB > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.set_menu > .tPersonsetB > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//2인 세트 C
$('.set_menu > .tPersonsetC').on('mouseenter', function(){
    $('.set_menu > .tPersonsetC > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.set_menu > .tPersonsetC > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.set_menu > .tPersonsetC').on('mouseleave', function(){
    $('.set_menu > .tPersonsetC > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.set_menu > .tPersonsetC > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//3-4인 세트A
$('.set_menu > .tfPersonsetA').on('mouseenter', function(){
    $('.set_menu > .tfPersonsetA > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.set_menu > .tfPersonsetA > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.set_menu > .tfPersonsetA').on('mouseleave', function(){
    $('.set_menu > .tfPersonsetA > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.set_menu > .tfPersonsetA > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//3~4인 세트 B
$('.set_menu > .tfPersonsetB').on('mouseenter', function(){
    $('.set_menu > .tfPersonsetB > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.set_menu > .tfPersonsetB > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.set_menu > .tfPersonsetB').on('mouseleave', function(){
    $('.set_menu > .tfPersonsetB > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.set_menu > .tfPersonsetB > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});


//탑버튼
$('.topbutton').on('click', function(){
    window.scroll({
        'top' : 0,
        'behavior' : 'smooth',
    })
});