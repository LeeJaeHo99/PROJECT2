//팝업창 닫기
document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.popup').style.display = 'none';
})

//gsap header 고정
// if(window.innerWidth >= 900){
//     const panel = document.querySelector('header');
//     ScrollTrigger.create({
//         trigger : panel,
//         start : 'top top',
//         pin : true,
//         pinSpacing : false,
//     });
// }else{
//     const panel = document.querySelector('header');
//     ScrollTrigger.create({
//         trigger : panel,
//         start : 'top top',
//         pin : false,
//         pinSpacing : false,
//     });
// }


//스와이퍼
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView : 5,
    spaceBetween: 300,
    pagination: {
    el: '.swiper-pagination',
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    scrollbar: {
    el: '.swiper-scrollbar',
    },
    breakpoints: {
        500: {
            slidesPerView: 2,
            spaceBetween: 240,
        },
        550: {
            slidesPerView: 2,
            spaceBetween: 180,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 120,
        },
        650: {
            slidesPerView: 2,
            spaceBetween: 300,
        },
        770: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1290: {
            slidesPerView: 5,
            spaceBetween: 300
        }
    }
});


//베너 fadeinout
const slide = $('slide > div[class*="slide1"], div[class*="slide2"]');
let idx = 0;

//배너 텍스트 fadeinout

const slideText = $('.header_bg_text > div[class*="bg_textbox_1"], .header_bg_text > div[class*="bg_textbox_2"]');
let idx2 = slideText.index($('.show'));

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



//스티키 메뉴뉴
const gnb = document.querySelector('.gnb.df');
let gnbStickyContainer = document.createElement('div');
gnbStickyContainer.className = 'gnb_sticky';
//gnb 복제

const cloneEl = () => {
	const gnbClone = gnb.cloneNode(true);
	gnbStickyContainer.appendChild(gnbClone);
	document.querySelector('body').appendChild(gnbStickyContainer);
	document.querySelector('.gnb_sticky .logo img').setAttribute('src', './img/logo/red_logo.png');
    document.querySelector('.gnb_sticky .logo img').className = 'red_logo';
};
cloneEl();
//gnb 복제 후 할당


//스크롤 애니메이션
window.onscroll = function() {
    let height = window.pageYOffset;
    let width = window.innerWidth;
    console.log(`스크롤 높이 : ` + height);

    /* ===== 변수 ===== */
    const sec1Title = document.querySelector('.sec1_title');
    const swiper = document.querySelector('.swiper');
    const iframe = document.querySelector('.youtube_iframe');
    const marquee = document.querySelector('.marquee_box');
    const sec5Title = document.querySelector('.sec5_title');
    const sec5Cnt = document.querySelector('.sec5_content');
    const sec5Search = document.querySelector('.sec5_search');
    const searchBar = document.querySelector('.search_bar > span');
    const sec6Title = document.querySelector('.sec6_title');
    const sec6Cnt = document.querySelector('.sec6_content');
    const sec6Box = document.querySelectorAll('.sec6_box > div');
    const sec7Left = document.querySelector('.sec7_left');
    const sec7Right = document.querySelector('.sec7_right');
    const fixedBtn = document.querySelector('.fixed_button');
    /* ===== 변수 ===== */

    //스티키 메뉴
    if(height >= 1100){
        gnbStickyContainer.style.top = 0;
        gnbStickyContainer.style.opacity = 1;
    }else{
        gnbStickyContainer.style.top = '-50%';
        gnbStickyContainer.style.opacity = 0;
    }

    //slide 사진 변경
    // if(width <= 700){
    //     document.querySelector('.slide1').style.backgroundImage = 'url(../img/mainpage/main/main_banner_m1.png)';
    //     document.querySelector('.slide2').style.backgroundImage = 'url(../img/mainpage/main/main_banner_m2.png)';
    // }else{
    //     document.querySelector('.slide1').style.backgroundImage = 'url(../img/mainpage/main/main_banner_pc1.png)';
    //     document.querySelector('.slide2').style.backgroundImage = 'url(../img/mainpage/main/main_banner_pc2.jpg)';
    // }

    //sec1 타이틀
    if(height >= 300 && height <= 1500 && width >= 1100){
        sec1Title.style.opacity = 1;
        sec1Title.style.transform = 'translate(0, 0)';
    }else if(height < 300 && height > 1500 && width >= 1100){
        sec1Title.style.opacity = 0;
        sec1Title.style.transform = 'translate(0, -60%)';
    }else if(height >= 150 && height <= 1500 && width < 1100){
        sec1Title.style.opacity = 1;
        sec1Title.style.transform = 'translate(0, 0)';
    }else{
        sec1Title.style.opacity = 0;
        sec1Title.style.transform = 'translate(0, -60%)';
    };

    //sec1 피자
    if(height >= 500 && height <= 2100 && width >= 1100){
        swiper.style.opacity = 1;
        swiper.style.transform = 'translate(0, 0)';
    }else if(height < 500 && height > 2100 && width >= 1100){
        swiper.style.opacity = 0;
        swiper.style.transform = 'translate(0, 30%)';
    }else if(height >= 250 && height <= 1600 && width < 1100){
        swiper.style.opacity = 1;
        swiper.style.transform = 'translate(0, 0)';
    }else{
        swiper.style.opacity = 0;
        swiper.style.transform = 'translate(0, 30%)';
    };
    
    //iframe
    if(height >= 1300 && height <= 2900 && width >= 1100){
        iframe.style.opacity = 1;
        iframe.style.transform = 'translate(0, 0)';
    }else if(height < 1300 && height > 2900 && width >= 1100){
        iframe.style.opacity = 0;
        iframe.style.transform = 'translate(0, -10%)';
    }else if(height >= 900 && height <= 2000 && width < 1100){
        iframe.style.opacity = 1;
        iframe.style.transform = 'translate(0, 0)';
    }else{
        iframe.style.opacity = 0;
        iframe.style.transform = 'translate(0, -10%)';
    };

    //marquee
    if(height >= 2100 && height <= 3500 && width >= 1100){
        marquee.style.opacity = 1;
    }else if(height < 2100 && height > 3500 && width >= 1100){
        marquee.style.opacity = 0;
    }else if(height >= 1200 && height <= 2500 && width < 1100){
        marquee.style.opacity = 1;
    }else{
        marquee.style.opacity = 0;
    }

    //sec5_title, content
    if(height >= 3400 && height <= 5000 && width >= 1100){
        sec5Title.style.opacity = 1;
        sec5Title.style.transform = 'translate(0, 0)';
        sec5Cnt.style.opacity = 1;
        sec5Cnt.style.transform = 'translate(0, 0)';
    }else if(height < 3400 && height > 5000 && width >= 1100){
        sec5Title.style.opacity = 0;
        sec5Title.style.transform = 'translate(0, -20%)';
        sec5Cnt.style.opacity = 0;
        sec5Cnt.style.transform = 'translate(0, -20%)';
    }else if(height >=2000 && height <= 4500 && width < 1100){
        sec5Title.style.opacity = 1;
        sec5Title.style.transform = 'translate(0, 0)';
        sec5Cnt.style.opacity = 1;
        sec5Cnt.style.transform = 'translate(0, 0)';
    }else{
        sec5Title.style.opacity = 0;
        sec5Title.style.transform = 'translate(0, -20%)';
        sec5Cnt.style.opacity = 0;
        sec5Cnt.style.transform = 'translate(0, -20%)';
    }

    //sec5_search
    if(height >= 4000 && height <= 5000 && width >= 1100){
        sec5Search.style.opacity = 1;
        sec5Search.style.transform = 'translate(0, 0)';
        sec5Search.style.maxWidth = '84rem';
        searchBar.style.opacity = 1;
        searchBar.style.transform = 'translate(0, 0)';
        searchBar.style.maxWidth = '84rem';
    }else if(height < 4000 && height > 5000 && width >= 1100){
        sec5Search.style.opacity = 1;
        sec5Search.style.transform = 'translate(0, 100%)';
        sec5Search.style.maxWidth = '7.2rem';
        searchBar.style.opacity = 0;
        searchBar.style.transform = 'translate(0, 100%)';
        searchBar.style.maxWidth = '7.2rem';
    }else if(height >= 3000 && height <= 5000 && width < 1100 && width > 900){
        sec5Search.style.opacity = 1;
        sec5Search.style.transform = 'translate(0, 0)';
        sec5Search.style.maxWidth = '84rem';
        searchBar.style.opacity = 1;
        searchBar.style.transform = 'translate(0, 0)';
        searchBar.style.maxWidth = '84rem';
    }else if(height < 3000 && height > 5000 && width < 1100){
        sec5Search.style.opacity = 1;
        sec5Search.style.transform = 'translate(0, 100%)';
        sec5Search.style.maxWidth = '7.2rem';
        searchBar.style.opacity = 0;
        searchBar.style.transform = 'translate(0, 100%)';
        searchBar.style.maxWidth = '7.2rem';
    }else if(height >= 2200 && height <= 4000 && width <= 900){
        sec5Search.style.opacity = 1;
        sec5Search.style.transform = 'translate(0, 0)';
        sec5Search.style.maxWidth = '55rem';
        searchBar.style.opacity = 1;
        searchBar.style.transform = 'translate(0, 0)';
        searchBar.style.maxWidth = '55rem';
    }else{
        sec5Search.style.opacity = 1;
        sec5Search.style.transform = 'translate(0, 100%)';
        sec5Search.style.maxWidth = '7.2rem';
        searchBar.style.opacity = 0;
        searchBar.style.transform = 'translate(0, 100%)';
        searchBar.style.maxWidth = '7.2rem';
    }

    //sec6_title
    if(height >= 4100 && height <= 6200 && width >= 1100){
        sec6Title.style.opacity = 1;
        sec6Title.style.transform = 'translate(0, 0)';
        sec6Cnt.style.opacity = 1;
        sec6Cnt.style.transform = 'translate(0, 0)';
    }else if(height < 4100 && height > 6200 && width >= 1100){
        sec6Title.style.opacity = 0;
        sec6Title.style.transform = 'translate(0, -20%)';
        sec6Cnt.style.opacity = 0;
        sec6Cnt.style.transform = 'translate(0, -20%)';
    }else if(height >= 2650 && height <= 6200 && width < 1100){
        sec6Title.style.opacity = 1;
        sec6Title.style.transform = 'translate(0, 0)';
        sec6Cnt.style.opacity = 1;
        sec6Cnt.style.transform = 'translate(0, 0)';
    }else{
        sec6Title.style.opacity = 0;
        sec6Title.style.transform = 'translate(0, -20%)';
        sec6Cnt.style.opacity = 0;
        sec6Cnt.style.transform = 'translate(0, -20%)';
    };
    
    //sec6 box
    if(height >= 4200 && width >= 1100){
        sec6Box.forEach((box) => {
            box.style.opacity = 1;
            box.style.transform = 'translate(0, 0)';
        });
    }else if(height < 4200 && width >= 1100){
        sec6Box.forEach((box) => {
            box.style.opacity = 0;
            box.style.transform = 'translate(0, -20%)';
        });
    }else if(height >= 2550 && width < 1100){
        sec6Box.forEach((box) => {
            box.style.opacity = 1;
            box.style.transform = 'translate(0, 0)';
        });
    }else{
        sec6Box.forEach((box) => {
            box.style.opacity = 0;
            box.style.transform = 'translate(0, -20%)';
        });
    };

    //sec7 box
    if(height >= 5000 && width >= 1100){
        sec7Left.style.opacity = 1;
        sec7Left.style.transform = 'translate(0, 0)';
        sec7Right.style.opacity = 1;
        sec7Right.style.transform = 'translate(0, 0)';
    }else if(height < 5000 && width >= 1100){
        sec7Left.style.opacity = 0;
        sec7Left.style.transform = 'translate(0, -40%)';
        sec7Right.style.opacity = 0;
        sec7Right.style.transform = 'translate(0, -40%)';
    }else if(height >= 3250 && width < 1100){
        sec7Left.style.opacity = 1;
        sec7Left.style.transform = 'translate(0, 0)';
        sec7Right.style.opacity = 1;
        sec7Right.style.transform = 'translate(0, 0)';
    }else{
        sec7Left.style.opacity = 0;
        sec7Left.style.transform = 'translate(0, -40%)';
        sec7Right.style.opacity = 0;
        sec7Right.style.transform = 'translate(0, -40%)';
    };

    //fixed_button
    if(height >= 500){
        fixedBtn.style.opacity = 1;
        fixedBtn.style.transform = 'translate(-50%)';
    }else{
        fixedBtn.style.opacity = 0;
        fixedBtn.style.transform = 'translate(50%)';
    }
};

//탑버튼
/* ===== 변수 ===== */
const topBtn = document.querySelector('.topbutton');
/* ===== 변수 ===== */

topBtn.addEventListener('click', function(){
    window.scroll({
        top : 0,
        behavior : 'smooth',
    })
});