// $('.ac_dep1 > li').on('click', function(e){
//     e.preventDefault();
//     let tg = $(this);
//     let depT = $('.ac_dep2 > li').innerHeight();
//     let depTLen = tg.find('.ac_dep2 > li').length;
//     let totalH = depT * depTLen;

//     if(tg.find('.ac_dep2').outerHeight() == 0){
//         tg.find('.ac_dep2').outerHeight(totalH); // 메뉴를 열기
//     }else{
//         tg.find('.ac_dep2').outerHeight(0); // 메뉴를 닫기
//     }
// });

// $('.ac_dep2 > li').on('click', function(e){
//     e.stopPropagation(); // 이벤트 버블링을 막기
// });

$(() => {
    $('.ac_dep1 > li').on('click', function(e){
        e.preventDefault();
        console.log("클릭 이벤트 발생"); // 디버깅을 위한 로그
        let tg = $(this);
        let depT = $('.ac_dep2 > li').innerHeight();
        console.log("각 항목의 높이: ", depT); // 디버깅을 위한 로그
        let depTLen = tg.find('.ac_dep2 > li').length;
        console.log("항목의 개수: ", depTLen); // 디버깅을 위한 로그
        let totalH = depT * depTLen;
        console.log("총 높이: ", totalH); // 디버깅을 위한 로그
    
        if(tg.find('.ac_dep2').outerHeight() == 0){
            tg.find('.ac_dep2').outerHeight(totalH); // 메뉴를 열기
            console.log("메뉴 열기"); // 디버깅을 위한 로그
        }else{
            tg.find('.ac_dep2').outerHeight(0); // 메뉴를 닫기
            console.log("메뉴 닫기"); // 디
        }
    })
});
