//? Get sum of array using reduce method

const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

const total = prices.reduce((total, price) => {
  return total + price;
});

//? Return minimum price using reduce method

const minPrice = prices.reduce((min, price) => {
  if (price < min) {
    return price;
  }
  return min;
});

console.log(total);
console.log(minPrice);
