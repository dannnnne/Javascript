'use restrict';

// // 1. 배열 생성
// const fruits = ['사과', '바나나', '딸기'];
// // console.log(fruits);
// // const fruits = new Array('사과', '바나나', '딸기');
// console.log(fruits);
// console.log(fruits[0]);
// fruits[2] = '복숭아';
// console.log(fruits);

// // 2. 자주 사용하는 배열 API
// //length
// console.log('fruits.length : ', fruits.length);
// console.log('마지막 값 : ', fruits[fruits.length - 1]);

// //push
// fruits.push('귤');
// console.log(fruits);

// //forEach
// fruits.forEach(function (item, index) {
//   console.log(index, item);
// });

// //pop()
// // fruits.pop();
// // let removedItem = fruits.pop();
// // console.log(removedItem);
// // console.log('제거 완료 : ', fruits);

// //shift - 값을 앞에서부터 제거
// fruits.shift();
// console.log('제거 완료 : ', fruits);

// // unshift - 값을 앞에서부터 추가
// fruits.unshift('수박');
// console.log(fruits);

// //indexOf - 찾는게 없으면 -1 반환
// let index = fruits.indexOf('수박');
// console.log('index : ', index);

// // //splice(index, 개수)
// const index1 = fruits.indexOf('복숭아');
// fruits.splice(index1, 1);
// console.log('fruits : ', fruits);

// // 3. 구조 분해 할당
// let fruits = ['사과', '바나나', '딸기'];
// let [apple, banana, straberry, ...others] = [
//   '사과',
//   '바나나',
//   '딸기',
//   'a',
//   'b',
//   'c',
// ];
// console.log(apple); // a부터는 할당 안됨.
// console.log(others);

// 4. 전개구문
// let fruits = ['사과', '바나나', '딸기'];
// let items = ['ABC', ...fruits, '파인애플', '복숭아'];
// console.log(items);

// let fruits1 = ['복숭아', '산딸기'];
// let fruits2 = ['키위', '메론'];
// let items1 = [...fruits1, ...fruits2];
// console.log(items1);

// 5. Rest parameter
// print('a', 'b', 'c', 'd', 'e', 'f');
// function print(...values) {
//   // console.log(values); //배열
//   // console.log(value[0]);
//   // console.log(value[1]);
//   // console.log(value[2]);
//   values.forEach(function (value, index) {
//     console.log(index, value);
//   });
// }

// 얕은 복사(shallow copy)
// let source = ['사과', '바나나', '딸기'];
// let target = source;
// target[0] = '파인애플'; // 참조값때문에 둘 다 바뀜
// console.log(source);
// console.log(target);

// 깊은 복사(deep copy)
let source = ['사과', '바나나', '딸기'];
// let target = [...source];
// let target = Array.from(source);
let target = source.slice();
target[0] = '파인애플';
console.log(source);
console.log(target);
