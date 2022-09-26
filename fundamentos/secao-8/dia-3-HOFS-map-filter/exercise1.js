const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const booksDescribe = (arrBooks) => {
  return arrBooks.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`)
};

const authorList = (arrBooks) => {
  const authorList = arrBooks.map((book) => {
    return {
      age: book.releaseYear - book.author.birthYear,
      author: book.author.name
    }
  })
  return authorList.sort((book1, book2) => book1.age - book2.age)
};


const makeArrayFiccaoCientifica = (arrBooks) => arrBooks.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');

const ageOfBook = (arrBooks) => {
  const newArray = arrBooks.filter((book) => (2020 - book.releaseYear) >= 60)
  return newArray.sort((book1, book2) => (2020 - book2.releaseYear) - (2020 - book1.releaseYear));
};

const authorNameList = (arrBooks) => {
  const names = makeArrayFiccaoCientifica(arrBooks).map((book) => book.author.name);
  return names.sort();
};

const moreOf60Yeares = ageOfBook(books).map((book) => book.name);

const authorWith3DotsOnName = (arrBooks) => {
 return arrBooks.find((book) => (
    book.author.name[1] === '.'
    && book.author.name[4] === '.'
    && book.author.name[7] === '.'
  )).name
}
console.log(authorWith3DotsOnName(books))
module.exports = { booksDescribe, authorList, makeArrayFiccaoCientifica, ageOfBook, authorNameList, authorWith3DotsOnName };



