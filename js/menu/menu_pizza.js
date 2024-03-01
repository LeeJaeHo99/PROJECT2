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

//피자 호버
//쿼터치즈벅피자
$('.pizza_menu > .qcp').on('mouseenter', function(){
    $('.pizza_menu > .qcp > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.pizza_menu > .qcp > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.pizza_menu > .qcp').on('mouseleave', function(){
    $('.pizza_menu > .qcp > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.pizza_menu > .qcp > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//갈릭쉬림플렉스피자
$('.pizza_menu > .gsp').on('mouseenter', function(){
    $('.pizza_menu > .gsp > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.pizza_menu > .gsp > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.pizza_menu > .gsp').on('mouseleave', function(){
    $('.pizza_menu > .gsp > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.pizza_menu > .gsp > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//메가디럭스피자
$('.pizza_menu > .mdp').on('mouseenter', function(){
    $('.pizza_menu > .mdp > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.pizza_menu > .mdp > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.pizza_menu > .mdp').on('mouseleave', function(){
    $('.pizza_menu > .mdp > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.pizza_menu > .mdp > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//페퍼로니피자
$('.pizza_menu > .ppp').on('mouseenter', function(){
    $('.pizza_menu > .ppp > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.pizza_menu > .ppp > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.pizza_menu > .ppp').on('mouseleave', function(){
    $('.pizza_menu > .ppp > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.pizza_menu > .ppp > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//쉬림플렉스피자
$('.pizza_menu > .sfp').on('mouseenter', function(){
    $('.pizza_menu > .sfp > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.pizza_menu > .sfp > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.pizza_menu > .sfp').on('mouseleave', function(){
    $('.pizza_menu > .sfp > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.pizza_menu > .sfp > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//더블불고기피자
$('.pizza_menu > .dbp').on('mouseenter', function(){
    $('.pizza_menu > .dbp > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.pizza_menu > .dbp > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.pizza_menu > .dbp').on('mouseleave', function(){
    $('.pizza_menu > .dbp > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.pizza_menu > .dbp > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//베이컨포테마요피자
$('.pizza_menu > .bpmp').on('mouseenter', function(){
    $('.pizza_menu > .bpmp > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.pizza_menu > .bpmp > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.pizza_menu > .bpmp').on('mouseleave', function(){
    $('.pizza_menu > .bpmp > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.pizza_menu > .bpmp > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//슈퍼콤비네이션피자
$('.pizza_menu > .scp').on('mouseenter', function(){
    $('.pizza_menu > .scp > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.pizza_menu > .scp > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.pizza_menu > .scp').on('mouseleave', function(){
    $('.pizza_menu > .scp > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.pizza_menu > .scp > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//바질버터관자피자
$('.pizza_menu > .bbcp').on('mouseenter', function(){
    $('.pizza_menu > .bbcp > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.pizza_menu > .bbcp > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.pizza_menu > .bbcp').on('mouseleave', function(){
    $('.pizza_menu > .bbcp > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.pizza_menu > .bbcp > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//하와이안피자
$('.pizza_menu > .hwp').on('mouseenter', function(){
    $('.pizza_menu > .hwp > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.pizza_menu > .hwp > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.pizza_menu > .hwp').on('mouseleave', function(){
    $('.pizza_menu > .hwp > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.pizza_menu > .hwp > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//베이컨딥체다치즈피자
$('.pizza_menu > .bdcp').on('mouseenter', function(){
    $('.pizza_menu > .bdcp > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.pizza_menu > .bdcp > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.pizza_menu > .bdcp').on('mouseleave', function(){
    $('.pizza_menu > .bdcp > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.pizza_menu > .bdcp > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//리얼미트피자
$('.pizza_menu > .rmp').on('mouseenter', function(){
    $('.pizza_menu > .rmp > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.pizza_menu > .rmp > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.pizza_menu > .rmp').on('mouseleave', function(){
    $('.pizza_menu > .rmp > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.pizza_menu > .rmp > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//매버라치킨피자
$('.pizza_menu > .scp').on('mouseenter', function(){
    $('.pizza_menu > .scp > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.pizza_menu > .scp > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.pizza_menu > .scp').on('mouseleave', function(){
    $('.pizza_menu > .scp > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.pizza_menu > .scp > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//화이트포테이토피자
$('.pizza_menu > .wpp').on('mouseenter', function(){
    $('.pizza_menu > .wpp > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.pizza_menu > .wpp > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.pizza_menu > .wpp').on('mouseleave', function(){
    $('.pizza_menu > .wpp > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.pizza_menu > .wpp > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//할라로니피자
$('.pizza_menu > .jpp').on('mouseenter', function(){
    $('.pizza_menu > .jpp > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.pizza_menu > .jpp > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.pizza_menu > .jpp').on('mouseleave', function(){
    $('.pizza_menu > .jpp > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.pizza_menu > .jpp > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//치즈피자
$('.pizza_menu > .cp').on('mouseenter', function(){
    $('.pizza_menu > .cp > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.pizza_menu > .cp > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.pizza_menu > .cp').on('mouseleave', function(){
    $('.pizza_menu > .cp > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.pizza_menu > .cp > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//킬바사소세지피자
$('.pizza_menu > .ksp').on('mouseenter', function(){
    $('.pizza_menu > .ksp > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.pizza_menu > .ksp > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.pizza_menu > .ksp').on('mouseleave', function(){
    $('.pizza_menu > .ksp > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.pizza_menu > .ksp > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//스위트고구마피자
$('.pizza_menu > .spp').on('mouseenter', function(){
    $('.pizza_menu > .spp > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.pizza_menu > .spp > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.pizza_menu > .spp').on('mouseleave', function(){
    $('.pizza_menu > .spp > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.pizza_menu > .spp > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//할라불고기피자
$('.pizza_menu > .jbp').on('mouseenter', function(){
    $('.pizza_menu > .jbp > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.pizza_menu > .jbp > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.pizza_menu > .jbp').on('mouseleave', function(){
    $('.pizza_menu > .jbp > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.pizza_menu > .jbp > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//마이PICK피자
$('.pizza_menu > .mpp').on('mouseenter', function(){
    $('.pizza_menu > .mpp > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.pizza_menu > .mpp > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.pizza_menu > .mpp').on('mouseleave', function(){
    $('.pizza_menu > .mpp > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.pizza_menu > .mpp > .back').css({
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