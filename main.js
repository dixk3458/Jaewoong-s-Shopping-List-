const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');
const resetBtn = document.querySelector('.reset');

function onAdd() {
  // 1. 사용자가 입력한 텍스트를 받아옴
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }
  // 2.새로운 아이템을 만듬(텍스트 + 삭제버튼)
  const item = createItem(text);
  // 3.items 컨테이너안에 새로 만든 아이템을 추가한다.
  items.appendChild(item);
  item.scrollIntoView();
  // 4.인풋을 초기화한다.
  input.value = '';
  input.focus();
}

function createItem(text) {
  const item = document.createElement('li');
  item.setAttribute('class', 'item');

  const name = document.createElement('span');
  name.setAttribute('class', 'item__name');
  name.innerText = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'item__delete');
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can">';

  deleteBtn.addEventListener('click', () => {
    items.removeChild(item);
  });

  item.appendChild(name);
  item.appendChild(deleteBtn);

  return item;
}

addBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    onAdd();
  }
});

function reset() {
  const allItem = document.querySelectorAll('.item');
  allItem.forEach(item => {
    item.remove();
  });
}

resetBtn.addEventListener('click', () => {
  resetBtn.classList.add('reset--clicked');
  reset();
  setTimeout(() => {
    resetBtn.classList.remove('reset--clicked');
  }, 400);
});
