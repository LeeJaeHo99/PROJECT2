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

//사이드 호버
//로제치즈볼
$('.side_menu > .RoseCheeseBall').on('mouseenter', function(){
    $('.side_menu > .RoseCheeseBall > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.side_menu > .RoseCheeseBall > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.side_menu > .RoseCheeseBall').on('mouseleave', function(){
    $('.side_menu > .RoseCheeseBall > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.side_menu > .RoseCheeseBall > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//모짜치즈볼
$('.side_menu > .MozzarellaCheeseBall').on('mouseenter', function(){
    $('.side_menu > .MozzarellaCheeseBall > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.side_menu > .MozzarellaCheeseBall > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.side_menu > .MozzarellaCheeseBall').on('mouseleave', function(){
    $('.side_menu > .MozzarellaCheeseBall > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.side_menu > .MozzarellaCheeseBall > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//반반치즈볼
$('.side_menu > .HalfCheeseBall').on('mouseenter', function(){
    $('.side_menu > .HalfCheeseBall > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.side_menu > .HalfCheeseBall > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.side_menu > .HalfCheeseBall').on('mouseleave', function(){
    $('.side_menu > .HalfCheeseBall > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.side_menu > .HalfCheeseBall > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//미니찰도그
$('.side_menu > .MiniHotDog').on('mouseenter', function(){
    $('.side_menu > .MiniHotDog > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.side_menu > .MiniHotDog > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.side_menu > .MiniHotDog').on('mouseleave', function(){
    $('.side_menu > .MiniHotDog > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.side_menu > .MiniHotDog > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//골드킹 닭다리
$('.side_menu > .GoldKingChickenDrumStick').on('mouseenter', function(){
    $('.side_menu > .GoldKingChickenDrumStick > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.side_menu > .GoldKingChickenDrumStick > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.side_menu > .GoldKingChickenDrumStick').on('mouseleave', function(){
    $('.side_menu > .GoldKingChickenDrumStick > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.side_menu > .GoldKingChickenDrumStick > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//레드킹 닭다리
$('.side_menu > .RedHotChickenDrumStick').on('mouseenter', function(){
    $('.side_menu > .RedHotChickenDrumStick > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.side_menu > .RedHotChickenDrumStick > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.side_menu > .RedHotChickenDrumStick').on('mouseleave', function(){
    $('.side_menu > .RedHotChickenDrumStick > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.side_menu > .RedHotChickenDrumStick > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//치즈 오븐 스파게티
$('.side_menu > .CheeseOvenSpaghetti').on('mouseenter', function(){
    $('.side_menu > .CheeseOvenSpaghetti > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.side_menu > .CheeseOvenSpaghetti > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.side_menu > .CheeseOvenSpaghetti').on('mouseleave', function(){
    $('.side_menu > .CheeseOvenSpaghetti > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.side_menu > .CheeseOvenSpaghetti > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//베이컨 크림 스파게티
$('.side_menu > .BaconCreamSpaghetti').on('mouseenter', function(){
    $('.side_menu > .BaconCreamSpaghetti > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.side_menu > .BaconCreamSpaghetti > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.side_menu > .BaconCreamSpaghetti').on('mouseleave', function(){
    $('.side_menu > .BaconCreamSpaghetti > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.side_menu > .BaconCreamSpaghetti > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//쉬림프 로제 스파게티
$('.side_menu > .ShrimpRoseSpaghetti').on('mouseenter', function(){
    $('.side_menu > .ShrimpRoseSpaghetti > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.side_menu > .ShrimpRoseSpaghetti > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.side_menu > .ShrimpRoseSpaghetti').on('mouseleave', function(){
    $('.side_menu > .ShrimpRoseSpaghetti > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.side_menu > .ShrimpRoseSpaghetti > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//불고기 크림 스파게티
$('.side_menu > .BulgogiCreamSpaghetti').on('mouseenter', function(){
    $('.side_menu > .BulgogiCreamSpaghetti > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.side_menu > .BulgogiCreamSpaghetti > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.side_menu > .BulgogiCreamSpaghetti').on('mouseleave', function(){
    $('.side_menu > .BulgogiCreamSpaghetti > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.side_menu > .BulgogiCreamSpaghetti > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//감자튀김
$('.side_menu > .FrenchFries').on('mouseenter', function(){
    $('.side_menu > .FrenchFries > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.side_menu > .FrenchFries > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.side_menu > .FrenchFries').on('mouseleave', function(){
    $('.side_menu > .FrenchFries > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.side_menu > .FrenchFries > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//윙봉
$('.side_menu > .WingBong').on('mouseenter', function(){
    $('.side_menu > .WingBong > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.side_menu > .WingBong > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.side_menu > .WingBong').on('mouseleave', function(){
    $('.side_menu > .WingBong > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.side_menu > .WingBong > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//순살치킨
$('.side_menu > .ChickenTender').on('mouseenter', function(){
    $('.side_menu > .ChickenTender > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.side_menu > .ChickenTender > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.side_menu > .ChickenTender').on('mouseleave', function(){
    $('.side_menu > .ChickenTender > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.side_menu > .ChickenTender > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//치킨텐더
$('.side_menu > .ChickenTender_2').on('mouseenter', function(){
    $('.side_menu > .ChickenTender_2 > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.side_menu > .ChickenTender_2 > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.side_menu > .ChickenTender_2').on('mouseleave', function(){
    $('.side_menu > .ChickenTender_2 > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.side_menu > .ChickenTender_2 > .back').css({
        'opacity' : 0,
        'transform'  : 'scale(0)',
    });
});
//훈제치킨
$('.side_menu > .SmokedChicken').on('mouseenter', function(){
    $('.side_menu > .SmokedChicken > .front').css({
        'opacity' : 0,
        'transform'  : 'translate(0, -20%)',
    });
    $('.side_menu > .SmokedChicken > .back').css({
        'opacity' : 1,
        'transform'  : 'scale(1)',
    });
});
$('.side_menu > .SmokedChicken').on('mouseleave', function(){
    $('.side_menu > .SmokedChicken > .front').css({
        'opacity' : 1,
        'transform'  : 'translate(0)',
    });
    $('.side_menu > .SmokedChicken > .back').css({
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