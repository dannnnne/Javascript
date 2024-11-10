'use strict';

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// let fruit = ['사과', '배', '바나나', '포도', '딸기'];
// for (let i = 0; i < 5; i++) {
//   console.log(fruit[i]);
// }

let person={
  name:'홍길동',
  age:25,
  job:'개발자',
}
// console.log(person['name']);
// let key=prompt("어떤 값을 출력할까요? 키를 입력해주세요");
// console.log(person[key])

let keys=Object.keys(person);
console.log(keys)

for (let i=0;i<keys.length;i++){
  // console.log(keys[i])
  // let key=keys[i];
  console.log(person[keys[i]])
}
console.log("------------------")
// in 은 key 값 & of 는 value 값
for(let key in person){
  console.log(person[key])
}
console.log("------------------")
let fruits=['사과', '배', '바나나', '포도', '딸기'];
for(let fruit of fruits){
  console.log(fruit);
}