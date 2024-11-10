'use strict';

// console.log('Hello' + 'world!');
// console.log('3' + 3); //number->string
// console.log(typeof ('3' + 3)); //number -> string
// console.log('3' + 5 + 8);
// console.log(3 + 5 + '8');

// let x = 10;
// let y = 20;
// // console.log(x + y);
// // console.log(x - y);
// // console.log(x * y);
// // console.log(x / y);
// // console.log(x % y);

// // let number = prompt('숫자를 입력해주세요!');
// // if (number % 2 === 0) {
// //   //===는 비교 연산자
// //   alert('짝수입니다!');
// // } else {
// //   alert('홀수입니다.');
// // }

// // let result = x++ + y;
// // console.log('x : ', x);
// // console.log('y : ', y);
// // console.log('result : ', result);

// let a = 30;
// let b = '30';
// console.log(a === b);
// // ===는 엄격한 비교 ! 데이터타입까지
// console.log(a == b); // b가 숫자로 변환되기 때문에 true

// x += y;
// console.log(x);

// let sum = 0;
// for (let i = 0; i <= 10; i++) {
//   sum += i;
// }
// console.log(sum);

let btn = document.querySelector('#btn');
let emailEl = document.querySelector('[name=email]');
let passwordEl = document.querySelector('[name=password]');
btn.addEventListener('click', function () {
  let email = emailEl.value;
  let password = passwordEl.value;
  // null 오류 피하기 위해 password 있는지부터
  // if (password && password.length === 8) {
  //   console.log('성공');
  // } else {
  //   console.log('실패');
  // }
  if (email === '' || email.includes('@') === false) {
    alert('이메일을 유효하지 않습니다.!');
  } else if (!password) {
    alert('비밀번호를 입력해주세요.');
  } else if (password.length >= 8 && password.length <= 16 === false) {
    alert('비밀번호는 8~16자 이내 입니다.');
  } else {
    alert('로그인 성공!');
  }
  //' '=> false
});

let number = 10;
let message = number % 2 === 0 ? '짝수입니다.' : '홀수입니다.';
console.log(message);
