console.log('Hello!');
console.log('Hello', ' Study!');

// 주석
// alert("Hello javascript!");
/* console.log("hello");
console.log("hi"); */

// 변수
let str = 'Hello Javasc vript';
let number = 30;
console.log('문자열: ', str);
console.log('number: ', number);

//함수
function sayHello() {
  console.log('Hello1');
  console.log('Hello2');
  console.log('Hello3');
}

sayHello();
console.log('------');
sayHello();

let obj = {
  number: 30, //property(속성)-객체가 가진 변수
  sayHello: function () {
    console.log('obj > Hello1');
    console.log('obj > Hello2');
    console.log('obj > Hello3');
  },
};

console.log(obj.number);
obj.sayHello();
