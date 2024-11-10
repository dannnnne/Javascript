'use strict';
// let subject = 'HTML';
// switch (subject) {
//   case 'Javascript':
//     console.log('Javascript 안녕');
//     let result = 1 + 2;
//     console.log(result);
//     break;
//   case 'HTML':
//     console.log('HTML 안녕');
//     break;
//   case 'CSS':
//     console.log('CSS 안녕');
//     break;
//   default:
//     console.log('default 수행문입니다.');
// }

// console.log('switch문 종료');

/**
 * 수학 점수를 입력 받아서
 * 90점 이상이면 'A 학점 입니다.'
 * 70점 이상이면 'B 학점 입니다.'
 * 50점 이상이면 'C 학점 입니다.'
 * 그 외 'D 학점 입니다.'
 */

let score = prompt('수학 점수를 입력하시오.');
let value = Math.floor(score / 10);
//math.floor : 양수에선, 소수점 이하 버림. 음수인 경우 -5.5이면 -6 나옴  
switch (value) {
  case 10:
  case 9: // if랑 달리 값이 일치해야 함.
    console.log('A 학점 입니다.');
    break;
  case 8:
  case 7:
    console.log('B 학점 입니다.');
    break;
  case 6:
  case 5:
    console.log('C 학점 입니다.');
    break;
  default:
    console.log('D 학점 입니다.');
    break;
}
