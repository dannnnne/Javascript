// promise.resolve()

const myPromise = Promise.resolve(100);

console.log(myPromise);
myPromise
  .then((value) => value / 2)
  .then((value) => value / 10)
  .then(console.log);
// 5가 출력됨

// promise.reject
const myPromise = Promise.reject('error message');
myPromise.catch(console.error);

function fetchData() {
  return fetch('https://jsonplaceholder.typicode.com/todos?-limit=5')
    .then((response) => response.json())
    .then((data) => {
      if (data.length === 0) {
        return Promise.reject('데이터가 없습니다.');
      }
      return data;
    });
}
fetchData()
  .then(console.log)
  .catch((error) => console.log('### error', error));

// promise.all()

const promise1 = Promise.resolve(1000);
const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(3000);
  }, 3000);
});
const promise3 = fetch(
  'https://jsonplaceholder.typicode.com/todos?-limit=5_delay=2000'
).then((response) => response.json());
const promise4 = Promise.reject('Fail!');

Promise.all([promise1, promise2, promise3, promise4])
  .then(console.log)
  // 배열로 반환
  .catch(console.error);

// promise.allSettled()
Promise.allSettled([promise1, promise2, promise3, promise4]).then(console.log);

// promise.any()
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(3000);
  }, 3000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(500);
  }, 500);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(1000);
  }, 1000);
});

Promise.race([promise1, promise2, promise3])
  .then(console.log)
  .catch(console.error);
