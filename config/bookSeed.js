const starterBooks = [
  {
    bookName: "To Kill a Mockingbird",
    isbn: "9780446310789",
    author: "Harper Lee",
    category: "Fiction",
    stock: 5,
    imageUrl:
      "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1",
  },
  {
    bookName: "1984",
    isbn: "9780451524935",
    author: "George Orwell",
    category: "Fiction",
    stock: 3,
    imageUrl:
      "http://books.google.com/books/content?id=kotPYEqx7kMC&printsec=frontcover&img=1&zoom=1",
  },
  {
    bookName: "Pride and Prejudice",
    isbn: "9780141439518",
    author: "Jane Austen",
    category: "Fiction",
    stock: 4,
    imageUrl:
      "http://books.google.com/books/content?id=dZ7fDwAAQBAJ&printsec=frontcover&img=1&zoom=1",
  },
  {
    bookName: "The Hobbit",
    isbn: "9780547928227",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    stock: 2,
    imageUrl:
      "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1",
  },
  {
    bookName: "Harry Potter and the Sorcerer's Stone",
    isbn: "9780590353427",
    author: "J.K. Rowling",
    category: "Fantasy",
    stock: 6,
    imageUrl:
      "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1",
  },
  {
    bookName: "The Great Gatsby",
    isbn: "9780743273565",
    author: "F. Scott Fitzgerald",
    category: "Fiction",
    stock: 4,
    imageUrl:
      "http://books.google.com/books/content?id=iXn5U2IzVH0C&printsec=frontcover&img=1&zoom=1",
  },
  {
    bookName: "The Catcher in the Rye",
    isbn: "9780316769488",
    author: "J.D. Salinger",
    category: "Fiction",
    stock: 3,
    imageUrl:
      "http://books.google.com/books/content?id=LQzY_k6UnpQC&printsec=frontcover&img=1&zoom=1",
  },
  {
    bookName: "Lord of the Flies",
    isbn: "9780399501487",
    author: "William Golding",
    category: "Fiction",
    stock: 5,
    imageUrl:
      "http://books.google.com/books/content?id=r6eoCwAAQBAJ&printsec=frontcover&img=1&zoom=1",
  },
  {
    bookName: "The Adventures of Huckleberry Finn",
    isbn: "9780486280615",
    author: "Mark Twain",
    category: "Fiction",
    stock: 4,
    imageUrl:
      "http://books.google.com/books/content?id=7RYpq6TOe7QC&printsec=frontcover&img=1&zoom=1",
  },
  {
    bookName: "Brave New World",
    isbn: "9780060850524",
    author: "Aldous Huxley",
    category: "Fiction",
    stock: 3,
    imageUrl:
      "http://books.google.com/books/content?id=zyePPwAACAAJ&printsec=frontcover&img=1&zoom=1",
  },
  {
    bookName: "The Alchemist",
    isbn: "9780062315007",
    author: "Paulo Coelho",
    category: "Fiction",
    stock: 5,
    imageUrl:
      "http://books.google.com/books/content?id=FzVjBgAAQBAJ&printsec=frontcover&img=1&zoom=1",
  },
  {
    bookName: "The Da Vinci Code",
    isbn: "9780307474278",
    author: "Dan Brown",
    category: "Mystery",
    stock: 4,
    imageUrl:
      "http://books.google.com/books/content?id=TQzqAwAAQBAJ&printsec=frontcover&img=1&zoom=1",
  },
  {
    bookName: "The Chronicles of Narnia",
    isbn: "9780007117307",
    author: "C.S. Lewis",
    category: "Fantasy",
    stock: 3,
    imageUrl:
      "http://books.google.com/books/content?id=f_0m7WiulUMC&printsec=frontcover&img=1&zoom=1",
  },
  {
    bookName: "Gone with the Wind",
    isbn: "9781451635621",
    author: "Margaret Mitchell",
    category: "Fiction",
    stock: 2,
    imageUrl:
      "http://books.google.com/books/content?id=VXv_94DGIrYC&printsec=frontcover&img=1&zoom=1",
  },
  {
    bookName: "The Kite Runner",
    isbn: "9781594631931",
    author: "Khaled Hosseini",
    category: "Fiction",
    stock: 4,
    imageUrl:
      "http://books.google.com/books/content?id=wHlDPgAACAAJ&printsec=frontcover&img=1&zoom=1",
  },
  {
    bookName: "The Girl with the Dragon Tattoo",
    isbn: "9780307454546",
    author: "Stieg Larsson",
    category: "Mystery",
    stock: 3,
    imageUrl:
      "http://books.google.com/books/content?id=kz_ZAF3YXwYC&printsec=frontcover&img=1&zoom=1",
  },
  {
    bookName: "The Road",
    isbn: "9780307387899",
    author: "Cormac McCarthy",
    category: "Fiction",
    stock: 5,
    imageUrl:
      "http://books.google.com/books/content?id=TH1cfB8njYQC&printsec=frontcover&img=1&zoom=1",
  },
  {
    bookName: "The Hunger Games",
    isbn: "9780439023481",
    author: "Suzanne Collins",
    category: "Young Adult",
    stock: 6,
    imageUrl:
      "http://books.google.com/books/content?id=_zSzAwAAQBAJ&printsec=frontcover&img=1&zoom=1",
  },
  {
    bookName: "The Fault in Our Stars",
    isbn: "9780525478812",
    author: "John Green",
    category: "Young Adult",
    stock: 4,
    imageUrl:
      "http://books.google.com/books/content?id=QiLaCwAAQBAJ&printsec=frontcover&img=1&zoom=1",
  },
  {
    bookName: "Life of Pi",
    isbn: "9780156027328",
    author: "Yann Martel",
    category: "Fiction",
    stock: 3,
    imageUrl:
      "http://books.google.com/books/content?id=XQYrDQAAQBAJ&printsec=frontcover&img=1&zoom=1",
  },
];

module.exports = starterBooks;
