
const checkResult = (num1, num2) => {
  let mensagem = '';
  (num1 === num2) ? mensagem = 'Parabens você ganhou!!' : mensagem = 'Tente novamente'
  return mensagem
}

const resultado = (num, callback) => {
const sorteio = Math.ceil(Math.random() * 5);
const mensagem = callback(sorteio, num);
return mensagem;
};

console.log(resultado(2, checkResult))