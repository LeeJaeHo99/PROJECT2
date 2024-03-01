/* ===== 변수  ===== */
//베너 fadeinout
const slide = $('slide > div[class*="slide1"], div[class*="slide2"]');
let idx = 0;

//배너 텍스트 fadeinout

const slideText = $('.header_bg_text > div[class*="bg_textbox_1"], .header_bg_text > div[class*="bg_textbox_2"]');
let idx2 = slideText.index($('.show'));

//스크롤 애니메이션

/* ===== 변수  ===== */

//팝업창 닫기
$('.close').on('click', function(){
    $('.popup').fadeOut(800);
})

///배너 fadeinout
function slideFn(){
    slide.removeClass('on');
    slide.eq(idx).addClass('on');
    idx++;
    if(idx > slide.length){
        idx = 0;
    }
}
setInterval(() => {
    slideFn();
}, 4000);


//배너 텍스트 fadeinout
function textFn(){
    slideText.removeClass('show');
    idx2 = (idx2 + 1) % slideText.length;
    slideText.eq(idx2).addClass('show');
}
setInterval(textFn, 4000);

//스크롤 애니메이션
$(window).scroll(function(){
    let height = $(window).scrollTop();
    console.log(`스크롤 높이 확인 : ` + height);

    //gnb
    // if(height > 1100){
    //     $('.red_logo').show();
    // }

    //sec1 타이틀
    if(height >= 300 && height <= 1500){
        $('.sec1_title').css({
            'opacity' : 1,
            'transform' : 'translate(0, 0)',
        });
    }else{
        $('.sec1_title').css({
            'opacity' : 0,
            'transform' : 'translate(0, -60%)',
        });
    };
    //sec1 피자
    if(height >= 500 && height <=2100){
        $('.swiper').css({
            'opacity' : 1,
            'transform' : 'translate(0, 0)',
        });
    }else{
        $('.swiper').css({
            'opacity' : 0,
            'transform' : 'translate(0, 30%)',
        });
    }
    
    //iframe
    if(height >= 1300 && height <= 2900){
        $('.youtube_iframe').css({
            'opacity' : 1,
            'transform' : 'translate(0, 0)',
    });
    }else{
        $('.youtube_iframe').css({
            'opacity' : 0,
            'transform' : 'translate(0, -10%)',
    });
    }

    //marguee
    if(height >= 2100 && height <=3500){
        $('.marquee_box').eq(0).css('opacity', 1);
    }else{
        $('.marquee_box').eq(0).css('opacity', 0);
    }

    //sec5_title
    if(height >=3400 && height <= 5000){
        $('.sec5_title').css({
            'opacity' : 1,
            'transform' : 'translate(0, 0)',
    });
        $('.sec5_content').css({
            'opacity' : 1,
            'transform' : 'translate(0, 0)',
    });
    }else{
        $('.sec5_title').css({
            'opacity' : 0,
            'transform' : 'translate(0, -20%)',
    });
    $('.sec5_content').css({
        'opacity' : 0,
        'transform' : 'translate(0, -20%)',
});
    }

    //sec5_search
    if(height >= 3800 && height <= 5000){
        $('.sec5_search').css({
            'opacity' : 1,
            'transform' : 'translate(0, 0)',
            'max-width' : '84rem'
        });
        $('.search_bar > span').css({
            'opacity' : 1,
            'transform' : 'translate(0, 0)',
            'max-width' : '84rem'
        });
        }else{
            $('.sec5_search').css({
            'opacity' : 1,
            'transform' : 'translate(0, 100%)',
            'max-width' : '7.2rem'
    });
            $('.search_bar > span').css({
            'opacity' : 0,
            'transform' : 'translate(0, 100%)',
            'max-width' : '7.2rem'
    });
    }

    //sec6_title
    if(height >= 4100 && height <= 6200){
        $('.sec6_title, .sec6_content').css({
            'opacity' : 1,
            'transform' : 'translate(0, 0)'
        });
    }else{
        $('.sec6_title, .sec6_content').css({
            'opacity' : 0,
            'transform' : 'translate(0, -20%)',
        });
    }
    
    //sec6 box
    if(height >= 4200){
        $('.sec6_box > div').css({
            'opacity' : 1,
            'transform' : 'translate(0, 0)',
        });
    }else{
        $('.sec6_box > div').css({
            'opacity' : 0,
            'transform' : 'translate(0, -20%)'
        });
    }

    //sec7 box
    if(height >= 5300){
        $('.sec7_left, .sec7_right').css({
            'opacity' : 1,
            'transform' : 'translate(0, 0)',
    });
    }else{
        $('.sec7_left, .sec7_right').css({
            'opacity' : 0,
            'transform' : 'translate(0, -40%)',
        });
    }

    //fixed_button
    if(height >= 500){
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