const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener('input', function () {
  input.value.length > 0
    ? (h1.innerText = `Welcome, ${input.value}`)
    : (h1.innerText = 'Enter Your Username');
});

/**
 ** Other solution
 ** Solution #1
const heading = document.querySelector('h1');
const input = document.querySelector('input');
 
input.addEventListener('input', function (e) {
    if (!this.value) {
        heading.innerText = `Enter Your Username`;
    } else {
        heading.innerText = `Welcome, ${this.value}`;
    }
});

*/
