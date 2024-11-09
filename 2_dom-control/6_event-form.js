let inputBox = document.querySelector('#input-box');
let img = document.querySelector('img');

// inputBox.addEventListener('keypress', function (event) {
//   console.log('keypress');
// });

// inputBox.addEventListener('keydown', function (event) {
//   console.log('keydown');
// });

// inputBox.addEventListener('keyup', function (event) {
//   console.log('keyup');
// });

// inputBox.addEventListener('keyup', function (event) {
//   console.log('event.key : ', event.key);
//   console.log('event.keyCode : ', event.keyCode);
// });

//click 했을 때
// inputBox.addEventListener('focus', function (event) {
//   alert('focus!!');
// });

// focus가 사라졌을 때
// inputBox.addEventListener('blur', function (event) {
//   alert('blur!!');
// });

// //값이 변경 되었을 때
// inputBox.addEventListener('change', function (event) {
//   console.log('change!!');
// });

img.addEventListener('error', function (event) {
  console.log('error!!');
  event.target.src = '../../img/apple.jpeg';
});
