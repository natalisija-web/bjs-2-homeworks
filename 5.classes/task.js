class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
	}

	_state = 100;
	type = null;

	fix() {
		this.state *= 1.5;
	}

	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	type = "magazine";
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
	}

	type = "book";
}

class NovelBook extends Book {
	type = "novel";
}

class FantasticBook extends Book {
	type = "fantastic";
}

class DetectiveBook extends Book {
	type = "detective";
}

class Library {
	constructor(name) {
		this.name = name;
	}

	books = [];

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		return this.books.find((element) => element[type] === value) || null;
	}

	giveBookByName(bookName) {
		const index = this.books.findIndex((element) => element.name === bookName);
		if (index !== -1) {
			return this.books.splice(index, 1)[0];
		}
		return null;
	}
}

class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	addMark(mark, subject) {
		if (mark < 2 || mark > 5) {
			return;
		}

		if (!(subject in this.marks)) {
			this.marks[subject] = [mark];
		} else {
			this.marks[subject].push(mark);
		}
	}

	getAverageBySubject(subject) {
		if (!(subject in this.marks)) {
			return 0;
		}
		const sum = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
		return sum / this.marks[subject].length;
	}

	getAverage() {
		const subjects = Object.keys(this.marks);
		if (subjects.length === 0) {
			return 0;
		}
		const totalAverage = subjects.reduce(
			(acc, subject) => acc + this.getAverageBySubject(subject),
			0
		);
		return totalAverage / subjects.length;
	}
}