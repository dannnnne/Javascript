// Promise : 비동기 작업을 처리하는 객체
// resolve : 정상적인 결과 값을 반환(이행)
// reject : 정상적이지 않았던 값을 반환(거부)

const myPromise = new Promise((resolve, reject) => {
  // 비동기 작업 처리~!
  setTimeout(() => {
    const text = prompt('Hello를 입력해줘! 그러면 선물을 줄게');
    if (text === 'Hello') {
      resoleve('노트북');
    } else {
      reject('error message!');
    }
  }, 2000);
});

// 상태
// 대기 (pending) : 비동기 작업을 처리하는 중..
// 이행 (fulfilled) : 비동기 작업이 정상적으로 처리가 된 경우
// 거부 (rejected) : 비동기 작업이 정상적으로 처리되지 않은 경우

// 메서드
// then() : 이행되었을 때 결과값을 얻을 수 있음
// catch() : 거부되었을 때
// finally() : 이행되거나 거부되더라도 항상!

myPromise
  .then((result) => {
    console.log('result:', result);
    return `선물은 : ${result}`;
    // return 값이 다음 then의 매개변수로 들어감
  })
  .then((result) => {
    console.log('result:', result); // 선물은~ 출력됨
  })
  .catch((err) => {
    console.log('err:', err);
  })
  .fincally(() => {
    console.log('finally~!');
  });
