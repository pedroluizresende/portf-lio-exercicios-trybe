const {encode, decode} = require('./encode.js');

describe('Teste de funções encode decode', () => {
it ('Testa se é uma função', () => {
  expect(typeof encode).toBe('function');
  expect(typeof decode).toBe('function')
})
it ('Teste se as vogais a, e, i, o, u retornam seus respectivos números', () => {
  expect(encode('a')).toBe('1');
  expect(encode('e')).toBe('2');
  expect(encode('i')).toBe('3');
  expect(encode('o')).toBe('4');
  expect(encode('u')).toBe('5');
})
it('testa se os números 1,2,3,4 e 5 retornam suas respectivas vogais', () => {
  expect(decode('1')).toBe ('a');
  expect(decode('2')).toBe ('e');
  expect(decode('3')).toBe ('i');
  expect(decode('4')).toBe ('o');
  expect(decode('5')).toBe ('u');
})
})