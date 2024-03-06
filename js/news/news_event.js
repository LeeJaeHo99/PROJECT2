//탭
/* ===== 변수 ===== */
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const leftBox = document.querySelector('.sec2_box_left');
const midBox = document.querySelector('.sec2_box_mid');
const rightBox = document.querySelector('.sec2_box_right');
/* ===== 변수 ===== */

btn1.addEventListener('click', function(){
    leftBox.style.display = 'block';
    midBox.style.display = 'block';
    rightBox.style.display = 'block';
    
    btn1.style.backgroundColor = 'black';
    btn1.style.color = 'white';
    btn2.style.backgroundColor = 'transparent';
    btn2.style.color = '#4B4B4B';
    btn3.style.backgroundColor = 'transparent';
    btn3.style.color = '#4B4B4B';
})

btn2.addEventListener('click', function(){
    leftBox.style.display = 'block';
    midBox.style.display = 'block';
    rightBox.style.display = 'none';
    
    btn1.style.backgroundColor = 'transparent';
    btn1.style.color = '#4B4B4B';
    btn2.style.backgroundColor = 'black';
    btn2.style.color = 'white';
    btn3.style.backgroundColor = 'transparent';
    btn3.style.color = '#4B4B4B';
})

btn3.addEventListener('click', function(){
    leftBox.style.display = 'none';
    midBox.style.display = 'none';
    rightBox.style.display = 'block';
    
    btn1.style.backgroundColor = 'transparent';
    btn1.style.color = '#4B4B4B';
    btn2.style.backgroundColor = 'transparent';
    btn2.style.color = '#4B4B4B';
    btn3.style.backgroundColor = 'black';
    btn3.style.color = 'white';
})


//탭 기본설정
btn1.style.backgroundColor = 'black';
btn1.style.color = 'white';
btn2.style.backgroundColor = 'transparent';
btn2.style.color = '#4B4B4B';
btn3.style.backgroundColor = 'transparent';
btn3.style.color = '#4B4B4B';

leftBox.style.display = 'block';
midBox.style.display = 'block';
rightBox.style.display = 'block';