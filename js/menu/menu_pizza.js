//피자 메뉴 생성
const pizzaMenu = [
    {
        class : 'qcp',
        nameKo : '쿼터치즈벅피자',
        nameEn : 'Quater Cheesebuck Pizza',
        backCon : `꾸덕한 체다치즈와 육즙폭발 고기,<br>아삭한 피클, 신선한 야채와 토마토까지!`,
        backPM  : '17,900원',
        backPL  : '22,900원',
    },
    {
        class : 'gsp',
        nameKo : '갈릭쉬림플렉스피자',
        nameEn : 'Garlic Shrimflex Pizza',
        backCon : `풍미를 한껏 끌어올린 갈릭소스와<br>스위트칠리소스에 탱글탱글 통새우까지!`,
        backPM  : '23,900원',
        backPL  : '27,900원',
    },
    {
        class : 'mdp',
        nameKo : '메가디럭스피자',
        nameEn : 'Mega Deluxe Pizza',
        backCon : `미트x미트x미트, 극강의 미트 토핑!<br>육즙 가득한 고기와 신선한 야채의 조화`,
        backPM  : '19,900원',
        backPL  : '23,900원',
    },
    {
        class : 'ppp',
        nameKo : '페퍼로니피자',
        nameEn : 'Pepperoni Pizza',
        backCon : `프레드 BEST 메뉴<br>최상급 페퍼로니+100% 자연산 모짜렐라`,
        backPM  : '15,900원',
        backPL  : '18,900원',
    },
    {
        class : 'sfp',
        nameKo : '쉬림플렉스피자',
        nameEn : 'Shrimflex Pizza',
        backCon : `스파이시한 스리라차 소스에 탱글탱글한<br>통새우를 빈틈없이 넣은 시그니처!`,
        backPM  : '24,900원',
        backPL  : '28,900원',
    },
    {
        class : 'dbp',
        nameKo : '더블불고기피자',
        nameEn : 'Double Bulgogi Pizza',
        backCon : `불고기 맛과 양이 업그레이드 된<br>전국민 취향저격 스테디셀러피자`,
        backPM  : '17,900원',
        backPL  : '20,900원',
    },
    {
        class : 'bpmp',
        nameKo : '베이컨포테마요피자',
        nameEn : 'Bacon Potato Mayo Pizza',
        backCon : `포슬포슬 웨지감자가 한가득<br>짭짤한 베이컨과 고소한 마요네즈의 완벽 케미`,
        backPM  : '17,900원',
        backPL  : '21,900원',
    },
    {
        class : 'scp',
        nameKo : '슈퍼콤비네이션피자',
        nameEn : 'Super Combination Pizza',
        backCon : `프레쉬하고 다양한 토핑이 듬뿍<br>피자의 대명사 클래식의 정석`,
        backPM  : '16,900원',
        backPL  : '19,900원',
    },
    {
        class : 'bbcp',
        nameKo : '바질버터관자피자',
        nameEn : 'Basil Butter Scallop Pizza',
        backCon : `매콤함 한스푼 들어간 바질크림에<br>버터에 빠진 관자가 듬~뿍`,
        backPM  : '23,900원',
        backPL  : '27,900원',
    },
    {
        class : 'hwp',
        nameKo : '하와이안피자',
        nameEn : 'Hawaiian Pizza',
        backCon : `짭짤한 베이컨에 상큼한 파인애플<br>기분좋은 단짠단짠`,
        backPM  : '16,900원',
        backPL  : '19,900원',
    },
    {
        class : 'bdcp',
        nameKo : '베이컨딥체다치즈피자',
        nameEn : 'Bacon Deep Cheddar Cheese Pizza',
        backCon : `베이컨과 100% 자연산 모짜렐라치즈<br>깊은 풍미, 체다치즈의 완벽한 만남`,
        backPM  : '16,900원',
        backPL  : '19,900원',
    },
    {
        class : 'rmp',
        nameKo : '리얼미트피자',
        nameEn : 'Real Meat Pizza',
        backCon : `무한대로 올라간 포크토핑 대란<br>리얼포크토핑과 토마토소스의 환상적 만남`,
        backPM  : '16,900원',
        backPL  : '19,900원',
    },
    {
        class : 'spcp',
        nameKo : '매버라치킨피자',
        nameEn : 'Spicy Chicken Pizza',
        backCon : `맵다의 경상도 사투리ver. 매버라<br>더 강력해진 맵소스와 치킨의 완벽조합`,
        backPM  : '18,900원',
        backPL  : '21,900원',
    },
    {
        class : 'wpp',
        nameKo : '화이트포테이토피자',
        nameEn : 'White Potato Pizza',
        backCon : `소프트한 고구마 샐러드와 짭짤한<br>베이컨, 감자까지 담백함의 정석`,
        backPM  : '19,900원',
        backPL  : '22,900원',
    },
    {
        class : 'jpp',
        nameKo : '할라로니피자',
        nameEn : 'Jalapenos Pepperoni Pizza',
        backCon : `최상급 페퍼로니 + 자연산 모짜렐라에<br>매콤한 할라피뇨가 듬뿍`,
        backPM  : '16,900원',
        backPL  : '19,900원',
    },
    {
        class : 'cp',
        nameKo : '치즈피자',
        nameEn : 'Cheese Pizza',
        backCon : `100% 자연모짜렐라 치즈와 체다치즈<br>프레드 특제 피자소스 기본의 정석`,
        backPM  : '15,900원',
        backPL  : '18,900원',
    },
    {
        class : 'ksp',
        nameKo : '킬바사소세지피자',
        nameEn : 'Kielbasa Sausage pizza',
        backCon : `통통한 BIG 소세지가 한 입에<br>비주얼에 반하고, 식감에 美치다`,
        backPM  : '20,900원',
        backPL  : '24,900원',
    },
    {
        class : 'spp',
        nameKo : '스위트고구마피자',
        nameEn : 'Sweet Potato Pizza',
        backCon : `단짠단짠 끝판왕 달콤한 고구마무스 가득<br>짭짤한 베이컨과 완벽한 조화의 피자`,
        backPM  : '17,900원',
        backPL  : '20,900원',
    },
    {
        class : 'jbp',
        nameKo : '할라불고기피자',
        nameEn : 'Jalapenos bulgogi Pizza',
        backCon : `더욱 맛있어진 더블불고기피자에<br>할라피뇨의 매콤함이 더해졌다`,
        backPM  : '18,900원',
        backPL  : '21,900원',
    },
    {
        class : 'mpp',
        nameKo : '마이PICK피자',
        nameEn : 'My Pick Pizza',
        backCon : `원하는대로 4 PICK !<br>토핑과 엣지를 내맘대로 골라먹는 나만의 피자`,
        backPM  : '18,900원',
        backPL  : '24,900원',
    },
];

pizzaMenu.map((el, i) => {
    $('.pizza_menu').append(`
        <li class="pr ${ pizzaMenu[i].class }">
            <div class="front">
                <img src="./img/subpage/menu/pizza/pizza_img${ i + 1 }.png" alt="">
                <div class="front_ko">${ pizzaMenu[i].nameKo }</div>
                <div class="front_en">${ pizzaMenu[i].nameEn }</div>
            </div>
            <div class="back pa">
                <div class="back_title">${ pizzaMenu[i].nameKo }</div>
                <div class="back_content">${ pizzaMenu[i].backCon }</div>
                <div class="back_price df">
                    <div class="m">
                        <span>M</span>
                        <span>${ pizzaMenu[i].backPM }</span>
                    </div>
                    <div class="l">
                        <span>L</span>
                        <span>${ pizzaMenu[i].backPL }</span>
                    </div>
                </div>
            </div>
        </li>
    `);
});

//new 1, 2, 3
///best 4, 5, 8


//스크롤 애니메이션
window.onscroll = function(){
    let height = window.pageYOffset;

    /* ===== 변수 ===== */
    const fixedBtn = document.querySelector('.fixed_button');
    /* ===== 변수 ===== */

    //fixed_button
    if(height >= 500){
        fixedBtn.style.opacity = 1;
        fixedBtn.style.transform = 'translate(-50%)';
    }else{
        fixedBtn.style.opacity = 0;
        fixedBtn.style.transform = 'translate(50%)';
    }
}

//마우스 인, 아웃 함수
function mouseOn(front, back){
    front.css({
        opacity : 0,
        transform : 'translate(0, -20%)',
    })
    back.css({
        opacity : 1,
        transform : 'scale(1)',
    })
}

function mouseOut(front, back){
    front.css({
        opacity : 1,
        transform : 'translate(0)',
    })
    back.css({
        opacity : 0,
        transform : 'scale(0)',
    })
}

//쿼터치즈벅피자
$('.qcp').on('mouseenter', function(){
    mouseOn($('.qcp .front'), $('.qcp .back'));
});
$('.qcp').on('mouseleave', function(){
    mouseOut($('.qcp .front'), $('.qcp .back'));
});

//갈릭쉬림플렉스피자
$('.gsp').on('mouseenter', function(){
    mouseOn($('.gsp .front'), $('.gsp .back'));
});
$('.gsp').on('mouseleave', function(){
    mouseOut($('.gsp .front'), $('.gsp .back'));
});

//메가디럭스피자
$('.mdp').on('mouseenter', function(){
    mouseOn($('.mdp .front'), $('.mdp .back'));
});
$('.mdp').on('mouseleave', function(){
    mouseOut($('.mdp .front'), $('.mdp .back'));
});

//페퍼로니피자
$('.ppp').on('mouseenter', function(){
    mouseOn($('.ppp .front'), $('.ppp .back'));
});
$('.ppp').on('mouseleave', function(){
    mouseOut($('.ppp .front'), $('.ppp .back'));
});

//쉬림플렉스피자
$('.sfp').on('mouseenter', function(){
    mouseOn($('.sfp .front'), $('.sfp .back'));
});
$('.sfp').on('mouseleave', function(){
    mouseOut($('.sfp .front'), $('.sfp .back'));
});

//더블불고기피자
$('.dbp').on('mouseenter', function(){
    mouseOn($('.dbp .front'), $('.dbp .back'));
});
$('.dbp').on('mouseleave', function(){
    mouseOut($('.dbp .front'), $('.dbp .back'));
});

//베이컨포테마요피자
$('.bpmp').on('mouseenter', function(){
    mouseOn($('.bpmp .front'), $('.bpmp .back'));
});
$('.bpmp').on('mouseleave', function(){
    mouseOut($('.bpmp .front'), $('.bpmp .back'));
});

//슈퍼콤비네이션피자
$('.scp').on('mouseenter', function(){
    mouseOn($('.scp .front'), $('.scp .back'));
});
$('.scp').on('mouseleave', function(){
    mouseOut($('.scp .front'), $('.scp .back'));
});

//바질버터관자피자
$('.bbcp').on('mouseenter', function(){
    mouseOn($('.bbcp .front'), $('.bbcp .back'));
});
$('.bbcp').on('mouseleave', function(){
    mouseOut($('.bbcp .front'), $('.bbcp .back'));
});

//하와이안피자
$('.hwp').on('mouseenter', function(){
    mouseOn($('.hwp .front'), $('.hwp .back'));
});
$('.hwp').on('mouseleave', function(){
    mouseOut($('.hwp .front'), $('.hwp .back'));
});

//베이컨딥체다치즈피자
$('.bdcp').on('mouseenter', function(){
    mouseOn($('.bdcp .front'), $('.bdcp .back'));
});
$('.bdcp').on('mouseleave', function(){
    mouseOut($('.bdcp .front'), $('.bdcp .back'));
});

//리얼미트피자
$('.rmp').on('mouseenter', function(){
    mouseOn($('.rmp .front'), $('.rmp .back'));
});
$('.rmp').on('mouseleave', function(){
    mouseOut($('.rmp .front'), $('.rmp .back'));
});

//매버라치킨피자
$('.spcp').on('mouseenter', function(){
    mouseOn($('.spcp .front'), $('.spcp .back'));
});
$('.spcp').on('mouseleave', function(){
    mouseOut($('.spcp .front'), $('.spcp .back'));
});

//화이트포테이토피자
$('.wpp').on('mouseenter', function(){
    mouseOn($('.wpp .front'), $('.wpp .back'));
});
$('.wpp').on('mouseleave', function(){
    mouseOut($('.wpp .front'), $('.wpp .back'));
});

//할라로니피자
$('.jpp').on('mouseenter', function(){
    mouseOn($('.jpp .front'), $('.jpp .back'));
});
$('.jpp').on('mouseleave', function(){
    mouseOut($('.jpp .front'), $('.jpp .back'));
});

//치즈피자
$('.cp').on('mouseenter', function(){
    mouseOn($('.cp .front'), $('.cp .back'));
});
$('.cp').on('mouseleave', function(){
    mouseOut($('.cp .front'), $('.cp .back'));
});

//킬바사소세지피자
$('.ksp').on('mouseenter', function(){
    mouseOn($('.ksp .front'), $('.ksp .back'));
});
$('.ksp').on('mouseleave', function(){
    mouseOut($('.ksp .front'), $('.ksp .back'));
});

//스위트고구마피자
$('.spp').on('mouseenter', function(){
    mouseOn($('.spp .front'), $('.spp .back'));
});
$('.spp').on('mouseleave', function(){
    mouseOut($('.spp .front'), $('.spp .back'));
});

//할라불고기피자
$('.jbp').on('mouseenter', function(){
    mouseOn($('.jbp .front'), $('.jbp .back'));
});
$('.jbp').on('mouseleave', function(){
    mouseOut($('.jbp .front'), $('.jbp .back'));
});

//마이PICK피자
$('.mpp').on('mouseenter', function(){
    mouseOn($('.mpp .front'), $('.mpp .back'));
});
$('.mpp').on('mouseleave', function(){
    mouseOut($('.mpp .front'), $('.mpp .back'));
});


//탑 버튼 생기는 함수
$('.topbutton').click(function(){
    window.scroll({
        top : 0,
        behavior : 'smooth',
    })
})