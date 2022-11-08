// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const listContainer = document.querySelector('#list');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const itemInput = form.elements.product;
  const quantityInput = form.elements.qty;
  addItem(itemInput.value, quantityInput.value);
  itemInput.value = '';
  quantityInput.value = '';
});

const addItem = (product, quantity) => {
  const newItem = document.createElement('li');
  newItem.innerText = `${product} ${quantity}`;
  listContainer.appendChild(newItem);
};
