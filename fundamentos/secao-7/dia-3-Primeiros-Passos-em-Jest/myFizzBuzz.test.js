const myFizzBuzz = require('./myFizzBuzz.js');

it ('verifica se, se de acor com o parametro, retorna valor esperado', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
  expect(myFizzBuzz(9)).toBe('fizz');
  expect(myFizzBuzz(10)).toBe('buzz');
  expect(myFizzBuzz(4)).toBe(4);
  expect(myFizzBuzz('não é número')).toBe(false);
})