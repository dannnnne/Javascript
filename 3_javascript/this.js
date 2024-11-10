// let person = {
//   fullname: '김다은',
//   age: 22,
//   printThis: function () {
//     console.log(this);
//     console.log(this === person);
//     // console.log(this.fullname);
//   },
// };
// // person.printThis();
// // this는 호출한 놈
// let printThis = person.printThis;
// printThis();

function printThis() {
  console.log(this); //default this => window
}
printThis();

let person1 = {
  name: '홍길동',
  printThis: printThis,
};
person1.printThis();

let person2 = {
  name: '홍길동2',
  printThis: printThis,
};
person2.printThis();

let person3 = {
  name: '홍길동3',
  printThis: printThis,
};
person3.printThis();
