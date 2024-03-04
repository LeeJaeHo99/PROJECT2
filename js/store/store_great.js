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


//탑버튼
$('.topbutton').on('click', function(){
    window.scroll({
        'top' : 0,
        'behavior' : 'smooth',
    })
});