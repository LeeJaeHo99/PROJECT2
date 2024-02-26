/* ===== 변수  ===== */
//베너 fadeinout
const slide = $('slide > div[class*="slide1"], div[class*="slide2"]');
let idx = 0;

//배너 텍스트 fadeinout

const slideText = $('.header_bg_text > div[class*="bg_textbox_1"], .header_bg_text > div[class*="bg_textbox_2"]');
let idx2 = slideText.index($('.show'));

//스크롤 애니메이션

/* ===== 변수  ===== */


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

    //sec1 타이틀
    if(height >= 300 && height <= 1000){
        $('.sec1_title').css('opacity', 1);
        $('.sec1_title').css('transform', 'translate(0, 0)');
    }else{
        $('.sec1_title').css('opacity', 0);
        $('.sec1_title').css('transform', 'translate(0, -60%)');
    };
    //sec1 피자
    if(height >= 300 && height <=2100){
        $('.sec1_pizza_wrap').css('opacity', 1);
        $('.sec1_pizza_wrap').css('transform', 'translate(0, 0)')
    }else{
        $('.sec1_pizza_wrap').css('opacity', 0);
        $('.sec1_pizza_wrap').css('transform', 'translate(0, 60%)')
    }
    
    //iframe
    if(height >= 1300 && height <= 2900){
        $('.youtube_iframe').css('opacity', 1);
        $('.youtube_iframe').css('transform', 'translate(0, 0)')
    }else{
        $('.youtube_iframe').css('opacity', 0);
        $('.youtube_iframe').css('transform', 'translate(0, -10%)')
    }

    ////marguee
    if(height >= 2200 && height <=3500){
        $('.marquee_box').eq(0).css('opacity', 1);
    }else{
        $('.marquee_box').eq(0).css('opacity', 0);
    }

    //sec6_title
    if(height >= 4500 && height <= 6200){
        $('.sec6_title, .sec6_content').css('opacity', 1);
        $('.sec6_title, .sec6_content').css('transform', 'translate(0, 0)');
    }else{
        $('.sec6_title, .sec6_content').css('opacity', 0);
        $('.sec6_title, .sec6_content').css('transform', 'translate(0, -20%)');
    }
    
    //sec6 box
    if(height >= 4400){
        $('.sec6_box > div').css('opacity', 1);
        $('.sec6_box > div').css('transform', 'translate(0, 0)')
    }else{
        $('.sec6_box > div').css('opacity', 0);
        $('.sec6_box > div').css('transform', 'translate(0, -20%)')
    }

    //sec7 box
    if(height >= 5500){
        $('.sec7_left, .sec7_right').css('opacity', 1);
        $('.sec7_left, .sec7_right').css('transform', 'translate(0, 0');
    }else{
        $('.sec7_left, .sec7_right').css('opacity', 0);
        $('.sec7_left, .sec7_right').css('transform', 'translate(0, -40%');
    }

    //fixed_button
    if(height >= 800){
        $('.fixed_button').css('opacity', 1);
        $('.fixed_button').css('transform', 'translate(-50%)');
    }else{
        $('.fixed_button').css('opacity', 0);
        $('.fixed_button').css('transform', 'translate(50%)');
    }
});

//자세히보기 버튼:before
$('.black_button::before').on({
    'mouseover' : function(){
        $('.black_button::before').css("transform" , 'translate(100%, 0)');
    }
});

//

$('arrow_next').on('click' , function(){
    let pizzaIdx = 0;
    pizzaIdx++;
    if(pizzaIdx >= 1){
        $('sec1_pizza_wrap').css('transform', 'translate(10%, 0)')
    }
    pizzaIdx = 0;
    console.log('pizzaIdx: ', pizzaIdx);
})



