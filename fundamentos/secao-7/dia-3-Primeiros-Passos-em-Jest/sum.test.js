// sum.test.js
const sum = require('./sum.js');

describe('testa a função sum', () => {
  it('soma 4 + 5 deve ser 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('soma 0 + 0 deve ser 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('Lança erro quando digitada uma string', () =>{
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  }) 
})
