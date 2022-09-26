const { booksDescribe, authorList, makeArrayFiccaoCientifica, ageOfBook, authorNameList, authorWith3DotsOnName } = require('./exercise1');
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
  }];
const books2 = [
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
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  }];
describe('Testa a função booksDescribe', () => {

  it('Testa se é uma função', () => {
    expect(typeof booksDescribe).toBe('function')
  })
  it('Testa se a função a ser chamada retorna a seguinte frase: NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA', () => {
    expect(booksDescribe(books)).toEqual(['As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
      'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien']);
  })
})

describe('Testa a função authorList', () => {
  it('Testa se é uma função', () => {
    expect(typeof authorList).toBe('function')
  })
  it('Testa se retorna um array de objetos com nome do autor e ordenado pela idade', () => {
    expect(authorList(books)).toEqual([{
      age: 43,
      author: 'George R. R. Martin',
    },
    {
      age: 62,
      author: 'J. R. R. Tolkien',
    }])
  })
})

describe('Testa a função makeArray...', () => {
  it('Testa se é uma função', () => {
    expect(typeof makeArrayFiccaoCientifica).toBe('function')
  })
  it('Testa se retorna um array com livros de ficção cientifica ou fantasia', () => {
    expect(makeArrayFiccaoCientifica(books2)).toEqual([
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
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
          name: 'Frank Herbert',
          birthYear: 1920,
        },
        releaseYear: 1965,
      }])
  })
})

describe('Testa a função ageOfBook', () => {
  const books3 = [
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
  it('Testa se é uma função', () => {
    expect(typeof ageOfBook).toBe('function')
  })
  it('Testa se retorna lista dos livros com mais de 60 anos ordenada', () => {
    expect(ageOfBook(books3)).toEqual([
      {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: { name: 'H. P. Lovecraft', birthYear: 1890 },
        releaseYear: 1928
      },
      {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: { name: 'Isaac Asimov', birthYear: 1920 },
        releaseYear: 1951
      },
      {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
        releaseYear: 1954
      }
    ]
    )
  })
})

describe('Testa função authorNameList', () => {
  it('Testa se é uma função', () => {
    expect(typeof authorNameList).toBe('function');
  })
  it('Testa se retorna um array em ordem alfabetica com nomes dos autores', () => {
    expect(authorNameList(books2)).toEqual(['Frank Herbert', 'George R. R. Martin', 'J. R. R. Tolkien'])
  })
})

describe('testa a função authoWith3...', () => {
  it('Testa se é uma função', () => {
    expect(typeof authorWith3DotsOnName).toBe('function')
  })
  it('Testa se retorna o nome do livro do autor com 3 pontos no nome', () => {
    expect(authorWith3DotsOnName(books)).toBe('O Senhor dos Anéis')
  })
})