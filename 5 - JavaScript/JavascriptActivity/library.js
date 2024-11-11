const library = [
  {
    title: "The Maze Runner",
    author: "James Dashner",
    isAvailable: true,
  },
  {
    title: "Ready Player One",
    author: "Ernest Cline",
    isAvailable: true,
  },
  {
    title: "Ender's Game",
    author: "Orson Scott Card",
    isAvailable: true,
  },
];

function displayAvailableBooks() {
  console.log("Available Books:");
  library.forEach((book) => {
    if (book.isAvailable) {
      console.log(`- ${book.title} by ${book.author}`);
    }
  });
}

function borrowBook(title) {
  const book = library.find((book) => book.title === title);
  if (book) {
    if (book.isAvailable) {
      book.isAvailable = false;
      console.log(`You have borrowed "${book.title}".`);
    } else {
      console.log(`Sorry, "${book.title}" is already borrowed.`);
    }
  } else {
    console.log(`Sorry, we don't have "${title}" in our library.`);
  }
}

displayAvailableBooks();

borrowBook("1984");
borrowBook("Ender's Game");
borrowBook("Ready Player One");
borrowBook("The Maze Runner");

displayAvailableBooks();
