'use restrict';

//객체 리터럴 문법
// const person = {
//   name: '김다은',
//   age: 22,
// };
// person.job = '학생';

//객체 생성자 문법
// const person = new Object();
// person.name = '김다은';
// person.age = 22;
// person.job = '학생';

// const person = {
//   name: ['Bob', 'Smith'],
//   age: 32,
//   gender: 'male',
//   interests: ['music', 'health'],
//   hello: function () {
//     alert('Hello!');
//   },
//   greeting: function () {
//     alert('Hi!');
//   },
//   hobby: {
//     name: 'programing',
//     alert: function () {
//       alert('programing');
//     },
//   },
// };
// console.log(person.name[0]);
// // person.hello();
// console.log(person.hobby.name);
// console.log(person.hobby.alert());
// console.log(person['name'][0]);
// // person['hello']();
// console.log(person['hobby']['name']);
// // person['hobby']['alert']();
// delete person.name;
// delete person['age'];
// console.log(person);

function printPerson(person) {
  console.log(
    `제 이름은 ${person.name}이며, 나이는 ${person.age}살 입니다.그리고 취미는 ${person.hobby} 입니다.`
  );
}

function createPerson(name, age, hobby) {
  return {
    name,
    age,
    hobby, // 값과 키가 같은 경우 한 번만 사용
  };
  // return을 객체로 함.
}

//ES5
// function Person(name, age, hobby) {
//   this.name = name;
//   this.age = age;
//   this.hobby = hobby;
// }
// const person1 = new Person('김다은', 22, '아무거나');

//ES6
class Person {
  constructor(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
  }
}
const person1 = new Person('김다은', 22, '아무거나');

// const person0 = createPerson('김다은0', 22, '아무거나');
// const person1 = createPerson('김다은1', 22, '아무거나');
// const person2 = createPerson('김다은2', 22, '아무거나');
// const person3 = createPerson('김다은3', 22, '아무거나');
// const person4 = createPerson('김다은4', 22, '아무거나');
// const person5 = createPerson('김다은5', 22, '아무거나');
// printPerson(person0);
// printPerson(person1);
// printPerson(person2);
// printPerson(person3);

// const person = {
//   name: '김다은',
//   age: 22,
//   hobby: 'music',
// };
// printPerson(person);

// const { name, age } = person;
// console.log('name : ', name);
// console.log('age : ', age);

// const fruit3 = ['사과', '복숭아', '딸기'];
// const [a, b] = fruit3;
// console.log(a);
// console.log(b);

// function printPerson({hobby, name, age}) {
//   console.log(
//     `제 이름은 ${name}이며, 나이는 ${age}살 입니다.그리고 취미는 ${hobby} 입니다.`
//   );
// } 도 가능

// let username = '김다은';
// console.log(username);
// changeName(username);
// console.log(username);

// function changeName(name) {
//   name = '홍길동';
//   console.log(name);
// }

const person11 = {
  name: '김다은',
  age: 22,
};

if ('name' in person11) {
  console.log('존재합니다.');
} else {
  console.log('존재하지 않습니다.');
}
// let person2 = person11;
// let person2 = { ...person11 };
// let person2 = Object.assign({}, person11);

// person2.name = '홍길동';
// person11.name = '김길동'; // 는 가능
// person11={age : 23} 이렇게는 불가능

// console.log(person11);
// console.log(person2);

// console.log(person);
// changePersonName(person);
// console.log(person);
// function changePersonName(people) {
//   people.name = '홍길동';
//   people.age = 33;
// }

const person = {
  name: '짐코딩',
};
console.log(person.hasOwnProperty('name')); // true
console.log(Object.hasOwn(person, 'name')); // true

console.log(person.name2);
if (person.name2) {
  console.log('true');
}
