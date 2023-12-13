/*
https://www.linkedin.com/learning/level-up-javascript/movie-object?resume=false
*/

class Movie {
	constructor(title, director, genre, releaseYear, rating) {
		this.title = title;
		this.director = director;
		this.genre = genre;
		this.releaseYear = releaseYear;
		this.rating = rating;
	}

	// getOverview() {
	// 	return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`;
	// }
}

Movie.prototype.getOverview = function () {
	return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`;
};

const movie1 = new Movie('A', 'gura', 'idol', 2023, 10);
console.log(movie1.getOverview());
