let rectangle = document.querySelector('#rectangle');
let body = document.querySelector('body');

rectangle.addEventListener('mousedown', function (event) {
  //rectangle을 가져옴
  //console.log(event.target);
  // console.log(event.target.getBoundingClientRect());
  //page는 전체 페이지 기준, client는 보고 있는 화면 기준
  // console.log('clientX : ', event.clientX, 'clientY : ', event.clientY);
  // console.log('pageX : ', event.pageX, 'pageY : ', event.pageY);
});

// body.addEventListener('click', function (event) {
//   console.log('pageX : ', event.pageX, 'pageY : ', event.pageY);
//   let div = document.createElement('div');
//   div.classList.add('circle');
//   div.style.left = event.pageX - 25 + 'px';
//   div.style.top = event.pageY - 25 + 'px';
//   body.appendChild(div);
// });
// rectangle.addEventListener('mouseup', function (event) {
//   console.log('mouse up');
// });
// rectangle.addEventListener('mouseenter', function (event) {
//   console.log('mouse enter');
// });
// rectangle.addEventListener('mouseleave', function (event) {
//   console.log('mouse leave');
// });
// rectangle.addEventListener('mousemove', function (event) {
//   console.log('mouse move');
// });
