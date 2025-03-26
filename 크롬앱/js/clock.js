const clock = document.querySelector('h2#clock');
function getClock() {
  const date = new Date();
  clock.innerText = `${String(date.getHours()).padStart(2, '0')} : ${String(
    date.getMinutes()
  ).padStart(2, '0')} : ${String(date.getSeconds()).padStart(2, '0')}`;
}
getClock(); // 안 적으면 처음에 로딩 안됨. 호출하면 바로 시간 볼 수 있음
setInterval(getClock, 1000);
