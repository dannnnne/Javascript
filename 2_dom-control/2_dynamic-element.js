let addBtn = document.getElementById('button');
let addBeforeBtn = document.getElementById('before');
let inputBox = document.querySelector('input');
let removeTargetBtn = document.querySelector('#target-remove');
let removeBtn = document.querySelector('.remove-btn');

addBtn.addEventListener('click', function () {
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  li.textContent = inputBox.value;
  let button = document.createElement('button');
  // button.setAttribute('class', 'remove-btn');
  button.classList.add('remove=btn');
  button.textContent = 'X';
  button.addEventListener('click', removeParentNode);
  li.appendChild(button);
  ul.appendChild(li);
  // 입력한 후 빈칸으로 만들기
  inputBox.value = ' ';
  // 추가 후 커서 올리기
  inputBox.focus();
});

addBeforeBtn.addEventListener('click', function () {
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  //어디에 넣을래?
  let targetLi = document.querySelector('li#target');
  li.textContent = inputBox.value;
  ul.insertBefore(li, targetLi);
});

removeTargetBtn.addEventListener('click', function () {
  let targetLi = document.querySelector('li#target');
  targetLi.remove();
});

removeBtn.addEventListener('click', removeParentNode);

function removeParentNode(event) {
  event.target.parentNode.remove();
  // 입력한 후 빈칸으로 만들기
  inputBox.value = ' ';
  // 추가 후 커서 올리기
  inputBox.focus();
}
