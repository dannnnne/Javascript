'use strict';

// 1. 숫자
let number = 2;
let number2 = 1.2;
console.log(number);
console.log(5 / 0);
console.log(-5 / 0);
let nan = 'hello' / 5;
console.log(nan);
console.log(typeof nan);

// 2. 문자
const name1 = '홍길동';
const name2 = '홍길동';
const name3 = '홍길동';
const name = '홍길동';
const age = 25;

console.log(
  '안녕하세요 제 이름은 ' + name + '입니다. 나이는 ' + age + '살 이에요.'
);
console.log('----------------------');
console.log(`안녕하세요 제 이름은 ${name}입니다. 나이는 ${age}살 이에요.`);
const message = `안녕하세요

이렇게 표현도 됩니다.`;
console.log(message);
const hello = "안녕하세요\n제 이름은 '홍길동'입니다.";
console.log(hello);

// 3. 불리언
const isProgrammer = true;
const isDesign = false;
console.log('isProgrammer : ', isProgrammer);
console.log('isDesign : ', isDesign);
if (isProgrammer) {
  console.log('프로그래머 입니다.');
} else {
  console.log('디자이너 입니다.');
}

// 4. null, undefined
const username = null;
let message2;
console.log(username);
console.log(message2);

// 5. object, arr
const person = {
  name: '홍길동',
  age: 25,
  isProgrammer: true,
  say() {
    console.log('hello');
  },
};

const arr = [1, 2, 3, 4, 5];
console.log(arr.length);
arr.push(88);
console.log(arr);
