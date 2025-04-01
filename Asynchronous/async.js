function syncFunction() {
  console.log('첫 번째 작업');
  console.log('두 번째 작업');
  console.log('세 번째 작업');
}

syncFunction();

function asyncFunction() {
  console.log('첫 번째 작업');

  setTimeout(() => {
    console.log('두 번째 작업');
  }, 1000);
  // 콜백함수란 다른 함수의 파라미터로 넘겨지는 함수

  console.log('세 번째 작업');
}
asyncFunction();
