'use restrict';

// function sayHello() {
//   console.log('이름과 나이를 출력해주세요');
//   console.log('이름 : 김다은, 나이 : 22살');
// }

// 함수 표현식 - 위와 차이점은 호이스팅. 표현식은 호이스팅X
// const sayHello = function (name, age) {
//   console.log('이름과 나이를 출력해주세요');
//   console.log(`이름 : ${name}, 나이 : ${age}살`);
// };
// sayHello('김다은', 22);

// // 값이 할당되지 않은 경우 undefined
// function sum(a = 0, b = 0) {
//   return a + b;
// }
// let result = sum(3, 5);
// console.log(result);
// let result2 = sum(5);
// console.log(result2);
// // 값을 하나만 넣으면 NaN

// console.log('-------------------');

// function aFunc() {
//   let name = '짐코딩';
//   let age = 20;
//   function bFunc() {
//     let job = '개발자';
//     console.log('name: ', name);
//     console.log('age: ', age);
//     console.log('job: ', job);
//   }
//   bFunc();
//   console.log('name: ', name);
//   console.log('age: ', age);
//   // console.log('job: ', job);
// }
// aFunc();
// console.log('-----------------');
// (function () {
//   console.log('hello');
// })();

// 파라메타가 1개인 경우 괄호 생략 가능 & 명령문이 1줄인 경우 {} 생략 가능 & return 생략 가능
const hello = (name) => {
  console.log(`Hello ${name}`);
};
hello('김다은');

const sayHello = (name, age) => {
  console.log('이름과 나이를 출력해주세요');
  console.log(`이름 : ${name}, 나이 : ${age}살`);
};
sayHello('김다은', 22);

const sum = (a = 0, b = 0) => a + b;
let result = sum(3, 5);
console.log(result);

let fruits = ['사과', '바나나', '딸기'];
// fruits.forEach(function (item, index) {
//   console.log('item : ', item);
// });

// fruits.forEach(printItem);
// function printItem(item, index) {
//   console.log('item', item);
// }

fruits.forEach((item, index) => {
  console.log('item :', item);
});
