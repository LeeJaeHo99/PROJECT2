//팝업창 닫기
document.querySelector('.close').addEventListener('click', () => {
	document.querySelector('.popup').style.display = 'none';
});

//스와이퍼
const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	loop: true,
	slidesPerView: 5,
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
			spaceBetween: 20,
		},
		1290: {
			slidesPerView: 5,
			spaceBetween: 300,
		},
	},
});


//베너 fadeinout
const slide = $('slide > div[class*="slide1"], div[class*="slide2"]');
let idx = 0;
const slideText = $('.header_bg_text > div[class*="bg_textbox_1"], .header_bg_text > div[class*="bg_textbox_2"]');
let idx2 = slideText.index($('.show'));

function slideFn() {
	slide.removeClass('on');
	slide.eq(idx).addClass('on');
	idx++;
	if (idx > slide.length) {
		idx = 0;
	}
}
setInterval(() => {
	slideFn();
}, 4000);

function textFn() {
	slideText.removeClass('show');
	idx2 = (idx2 + 1) % slideText.length;
	slideText.eq(idx2).addClass('show');
}
setInterval(textFn, 4000);


/* ========== 스티키 메뉴 ========== */
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

/* ===== DOM 요소 상수 초기화 ===== */
const el = {
	sec1: document.querySelector('.sec1').offsetTop * 0.5,
	sec2: document.querySelector('.sec2').offsetTop * 0.8,
	sec4: document.querySelector('.sec4').offsetTop * 0.5,
	sec5: document.querySelector('.sec5').offsetTop * 0.85,
	sec5T: document.querySelector('.sec5').offsetTop * 0.925,
	sec6: document.querySelector('.sec6').offsetTop * 0.3,
	sec7: document.querySelector('.sec7').offsetTop * 0.9,

	//slide
    slide1 : document.querySelector('.slide1'),
    slide2 : document.querySelector('.slide2'),
	
	//sec1
	sec1Title: document.querySelector('.sec1_title'),
	swiper: document.querySelector('.swiper'),

	//sec2
	iframe: document.querySelector('.youtube_iframe'),
	marquee: document.querySelector('.marquee_box'),

	//sec5
	sec5Title: document.querySelector('.sec5_title'),
	sec5Cnt: document.querySelector('.sec5_content'),
	sec5Search: document.querySelector('.sec5_search'),
	searchBar: document.querySelector('.search_bar > span'),

	//sec6
	sec6Title: document.querySelector('.sec6_title'),
	sec6Cnt: document.querySelector('.sec6_content'),
	sec6Box: document.querySelectorAll('.sec6_box > div'),

	//sec7
	sec7Left: document.querySelector('.sec7_left'),
	sec7Right: document.querySelector('.sec7_right'),

	//fixBtn
	fixedBtn: document.querySelector('.fixed_button'),

	style: function (el, opacity, transform, maxWidth = null) {
		el.style.top = top;
		el.style.opacity = opacity;
		el.style.transform = transform;
		el.style.maxWidth = maxWidth;
	}, 
};
/* ===== DOM 요소 상수 초기화 끝 ===== */

//스크롤거리
const scrollFn = function () {
	let scrollHeight = window.scrollY;
	let width = window.innerWidth;
	console.log(scrollHeight, width);
	breakPointFn(scrollHeight, width);
};

//스크롤이벤트바인딩
window.addEventListener('scroll', scrollFn);

//화면분기 조건문
const breakPointFn = (height, width) => {
	//sticky
	if(height >= 1100 && width >= 1100){
		stickyFn(0, 1);
	}else{
		stickyFn('-50%', 0);
	}

	//slide 사진 변경
    // if(height >= 1100 && width <= 700){
    //     slide1.style.backgroundImage = 'url(../img/mainpage/main/main_banner_pc1.png)';
    //     slide2.style.backgroundImage = 'url(../img/mainpage/main/main_banner_pc2.jpg)';
	// }else{
    //     slide1.style.backgroundImage = 'url(../img/mainpage/main/main_banner_m1.png)';
    //     slide2.style.backgroundImage = 'url(../img/mainpage/main/main_banner_m2.png)';
    // }


	//sec1
	if(width >= 1100){
		if (height >= el.sec1) {
			el.style(el.swiper, 1, 'translate(0, 0)');
			el.style(el.sec1Title, 1, 'translate(0, 0)');
		}else{
			el.style(el.sec1Title, 0, 'translate(0, -60%)');
			el.style(el.swiper, 0, 'translate(0, 30%)');
		}
	}else {
		if (height >= el.sec1) {
			el.style(el.sec1Title, 1, 'translate(0, 0)');
			el.style(el.swiper, 1, 'translate(0, 0)');
		}else {
			el.style(el.sec1Title, 0, 'translate(0, -60%)');
			el.style(el.swiper, 0, 'translate(0, 30%)');
		}
	}
	//sec1

	//sec2
	if(width >= 1100){
		if (height >= el.sec2) {
			el.style(el.iframe, 1, 'translate(0, 0)');
			el.style(el.marquee, 1, 'translate(0, 0)');
		}else{
			el.style(el.iframe, 0, 'translate(0, -30%)');
			el.style(el.marquee, 0, 'translate(0, 0)');
		}
	}else {
		if (height >= el.sec2) {
			el.style(el.iframe, 1, 'translate(0, 0)');
			el.style(el.marquee, 1, 'translate(0, 0)');
		}else {
			el.style(el.iframe, 0, 'translate(0, -30%)');
			el.style(el.marquee, 0, 'translate(0, 0)');
		}
	}
	//sec2

	//sec5
	if(width >= 1100){
		if (height >= el.sec5) {
			el.style(el.sec5Title, 1, 'translate(0, 0)');
			el.style(el.sec5Cnt, 1, 'translate(0, 0)');
		}else{
			el.style(el.sec5Title, 0, 'translate(0, -20%)');
			el.style(el.sec5Cnt, 0, 'translate(0, -20%)');
		}
	}else {
		if (height >= el.sec5) {
			el.style(el.sec5Title, 1, 'translate(0, 0)');
			el.style(el.sec5Cnt, 1, 'translate(0, 0)');
		}else{
			el.style(el.sec5Title, 0, 'translate(0, -20%)');
			el.style(el.sec5Cnt, 0, 'translate(0, -20%)');
		}
	} //타이틀
	if(width >= 1100){
		if (height >= el.sec5T) {
			el.style(el.searchBar, 1, 'translate(0, 0)', '84rem');
			el.style(el.sec5Search, 1, 'translate(0, 0)', '84rem');
		}else{
			el.style(el.searchBar, 0, 'translate(0, 100%)', '7.2rem');
			el.style(el.sec5Search, 1, 'translate(0, 100%)', '7.2rem');
		}
	}else {
		if (height >= el.sec5T) {
			el.style(el.searchBar, 1, 'translate(0, 0)', '84rem');
			el.style(el.sec5Search, 1, 'translate(0, 0)', '84rem');
		}else{
			el.style(el.searchBar, 0, 'translate(0, 100%)', '7.2rem');
			el.style(el.sec5Search, 1, 'translate(0, 100%)', '7.2rem');
		}
	} //서치바
	//sec5

	//sec6
	if(width >= 1100){
		if (height >= el.sec6) {
			el.style(el.sec6Title, 1, 'translate(0, 0)');
			el.style(el.sec6Cnt, 1, 'translate(0, 0)');
			el.style(el.sec6Box, 1, 'translate(0, 0)');
		}else{
			el.style(el.sec6Title, 0, 'translate(0, -20%)');
			el.style(el.sec6Cnt, 0, 'translate(0, -20%)');
			el.style(el.sec6Box, 0, 'translate(0, -20%)');
		}
	}else {
		if (height >= el.sec6) {
			el.style(el.sec6Title, 1, 'translate(0, 0)');
			el.style(el.sec6Cnt, 1, 'translate(0, 0)');
			el.style(el.sec6Box, 1, 'translate(0, 0)');
		}else{
			el.style(el.sec6Title, 0, 'translate(0, -20%)');
			el.style(el.sec6Cnt, 0, 'translate(0, -20%)');
			el.style(el.sec6Box, 0, 'translate(0, -20%)');
		}
	}
	//!! 수정해야함
	//sec6

	//sec7
	if(width >= 1100){
		if (height >= el.sec7) {
			el.style(el.sec7Left, 1, 'translate(0, 0)');
			el.style(el.sec7Right, 1, 'translate(0, 0)');
		}else{
			el.style(el.sec7Left, 0, 'translate(0, -40%)');
			el.style(el.sec7Right, 0, 'translate(0, -40%)');
		}
	}else {
		if (height >= el.sec7) {
			el.style(el.sec7Left, 1, 'translate(0, 0)');
			el.style(el.sec7Right, 1, 'translate(0, 0)');
		}else{
			el.style(el.sec7Left, 0, 'translate(0, -40%)');
			el.style(el.sec7Right, 0, 'translate(0, -40%)');
		}
	}
	//sec6
};

//스티키메뉴
const stickyFn = (top, opacity) => {
	gnbStickyContainer.style.top = top;
	gnbStickyContainer.style.opacity = opacity;
};



//탑버튼
/* ===== 변수 ===== */
const topBtn = document.querySelector('.topbutton');
/* ===== 변수 ===== */
topBtn.addEventListener('click', function(){
	window.scroll({
		top: 0,
		behavior: 'smooth',
	});
});
