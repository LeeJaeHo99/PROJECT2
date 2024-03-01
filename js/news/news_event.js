//탭
$('.btn1').on('click', function(){
    $('.sec2_box_left').show();
    $('.sec2_box_mid').show();
    $('.sec2_box_right').show();
    $('.btn1').css({
        'backgroundColor' : 'black',
        'color' : 'white',
    });
    $('.btn2').css({
        'backgroundColor' : 'transparent',
        'color' : '#4B4B4B',
    })
    $('.btn3').css({
        'backgroundColor' : 'transparent',
        'color' : '#4B4B4B',
    })
})

$('.btn2').on('click', function(){
    $('.sec2_box_left').show();
    $('.sec2_box_mid').show();
    $('.sec2_box_right').hide();
    $('.btn1').css({
        'backgroundColor' : 'transparent',
        'color' : '#4B4B4B',
    })
    $('.btn2').css({
        'backgroundColor' : 'black',
        'color' : 'white',
    });
    $('.btn3').css({
        'backgroundColor' : 'transparent',
        'color' : '#4B4B4B',
    })
})
$('.btn3').on('click', function(){
    $('.sec2_box_left').hide();
    $('.sec2_box_mid').hide();
    $('.sec2_box_right').show();
    $('.btn1').css({
        'backgroundColor' : 'transparent',
        'color' : '#4B4B4B',
    })
    $('.btn2').css({
        'backgroundColor' : 'transparent',
        'color' : '#4B4B4B',
    })
    $('.btn3').css({
        'backgroundColor' : 'black',
        'color' : 'white',
    });
})
//탭 기본설정
$('.btn1').css('backgroundColor', 'black');
$('.btn2').css({
    'backgroundColor' : 'transparent',
    'color' : '#4B4B4B',
})
$('.btn3').css({
    'backgroundColor' : 'transparent',
    'color' : '#4B4B4B',
})
$('.sec2_box_left').show();
$('.sec2_box_mid').show();
$('.sec2_box_right').show();