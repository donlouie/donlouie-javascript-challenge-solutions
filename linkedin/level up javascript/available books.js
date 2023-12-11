/*
https://www.linkedin.com/learning/level-up-javascript/available-books?autoSkip=true&resume=false

 1. Create Book Class
    1. Title
    2. Author
    3. ISBN
    4. numCopies

  2. Get a way to get each book's availability
    getAvailability() => "out of stock" if 0 available copies
    getAvailability() => "low stock" if < 10 
    else getAvailability() => "in stock"

  3. Create func for selling a book
    sell(numSold) => Subtract total sold to total number of copies
    else default to 1 sold

  4. Create number of copies to restock and add to total number of copies
    else default to 5 restock
    restock(numCopies)

  Use Javascript classes
  Use a getter method
*/

class Book {
	constructor(title, author, isbn, numCopies) {
		this.title = title;
		this.author = author;
		this.isbn = isbn;
		this._numCopies = numCopies;
	}

	get numCopies() {
		return this._numCopies;
	}

	getAvailability() {
		if (this.numCopies >= 10) {
			return 'in stock';
		} else if (this.numCopies > 0) {
			return 'low stock';
		} else {
			return 'out of stock';
		}
	}

	sell(numSold) {
		if (numSold < 0 || numSold > this._numCopies) {
			return 'invalid value';
		} else if (numSold > 1) {
			return (this._numCopies -= numSold);
		} else {
			return (this._numCopies -= 1);
		}
	}

	restock(numStock) {
		if (numStock <= 0) {
			return 'invalid value';
		} else if (numStock > 1) {
			return (this._numCopies += numStock);
		} else {
			return (this._numCopies += 1);
		}
	}
}

const book1 = new Book('hi', 'la+', '1234', 10);

console.log(book1.numCopies);
console.log(book1.getAvailability());

console.log(book1.sell(5));

console.log(book1.restock(3));

const book2 = new Book('A', 'gura', '1234', 5);

console.log(book2.numCopies);
console.log(book2.getAvailability());

console.log(book2.restock(3));

console.log(book2.sell(5));
