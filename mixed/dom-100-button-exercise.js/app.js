// WRITE YOUR CODE IN HERE:

let pContainer = document.querySelector('#container');

for (let i = 0; i < 100; i++) {
  let btn = document.createElement('button');
  btn.innerHTML = 'btn';
  pContainer.appendChild(btn);
}
