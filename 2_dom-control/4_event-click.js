let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');

// console.log(btn1);

btn1.onclick = function () {
  alert('Hello 프로퍼티 리스터');
};

btn2.addEventListener('click', helloEvent1);
function helloEvent1() {
  alert('Hello addEvenListener1');
}

//addEventListener는 해당 이벤트의 2개의 핸들러 함수 등록 가능
btn2.addEventListener('click', helloEvent2);
function helloEvent2() {
  alert('Hello addEvenListener2');
}

//remove
btn2.removeEventListener('click', helloEvent1);
// btn2.removeEventListener('click', helloEvent2);
