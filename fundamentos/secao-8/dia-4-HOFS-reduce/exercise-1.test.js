const flatten = require('./exercise-1.js');

describe('Testa a função flatten', () => {
  it('Testa se é uma função', () => {
    expect(typeof flatten).toBe('function')
  })
  it ('Testa se retorna um array', () {
    expect([
      ['1', '2', '3'],
      [true],
      [4, 5, 6],
    ]).toEqual(['1', '2', '3', true, 4, 5 , 6])
  })
})