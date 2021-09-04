function addList() {
  const li = document.createElement('li');
  li.classList.add('list-item');
  const inputValue = document.getElementById('myinput').value;
  const text = document.createTextNode(inputValue);

  li.appendChild(text);

  if (inputValue.length == 0) alert('You must write something');
  else document.getElementById('mylist').appendChild(li);

  document.getElementById('myinput').value = '';
  const element = document.createElement('span');
  const txt = document.createTextNode('x');
  element.appendChild(txt);
  element.classList.add('close');
  li.appendChild(element);
}

const myNodelist = document.getElementsByClassName('list-item');
for (let i = 0; i < myNodelist.length; i++) {
  const element = document.createElement('span');
  const text = document.createTextNode('x');
  element.classList.add('close');
  element.appendChild(text);
  myNodelist[i].appendChild(element);
}

document.querySelector('.addbtn').addEventListener('click', addList);
document.querySelector('#myinput').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addList();
  }
});

var close = document.getElementsByClassName('close');

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    this.parentElement.style.display = 'none';
  };
}
