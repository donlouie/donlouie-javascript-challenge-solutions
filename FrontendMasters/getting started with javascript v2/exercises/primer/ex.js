// TODO: define addFavoriteBook(..) function
function addFavoriteBook(bookName) {
	if (!bookName.includes('Great')) {
		favoriteBooks.push(bookName);
	}
}

// TODO: define printFavoriteBooks() function

var favoriteBooks = [];

printFavoriteBooks = function () {
	console.log(`Favorite Books: ${favoriteBooks.length}`);
	while (favoriteBooks.length > 0) {
		var bookName = favoriteBooks.pop();
		console.log(bookName);
	}
};

// Other Solution
/*
function printFavoriteBooks() {
	console.log(`Favorite Books: ${favoriteBooks.length}`);
	for (let bookName of favoriteBooks) {
		console.log(bookName);
	}
}
*/

addFavoriteBook('A Song of Ice and Fire');
addFavoriteBook('The Great Gatsby');
addFavoriteBook('Crime & Punishment');
addFavoriteBook('Great Expectations');
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books
printFavoriteBooks();
