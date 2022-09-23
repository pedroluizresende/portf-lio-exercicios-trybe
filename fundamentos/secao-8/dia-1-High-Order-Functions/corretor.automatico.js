const rigthAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (array1, array2) => {
  let pontuacaoFinal = 0;
  for(let index = 0; index < array2.length; index +=1) {
    if(array1[index] === array2[index]) {
      pontuacaoFinal += 1;
    } else if (array2[index] === 'N.A') {
      pontuacaoFinal = pontuacaoFinal;
    } else {
      pontuacaoFinal -= 0.5;
    }
  }
  return pontuacaoFinal
}

const corretorAutomatico = (answer, student, callback) => {
  const mensagem = callback(answer, student);
  return mensagem
}

const result = corretorAutomatico(rigthAnswers, studentAnswers, compareAnswers)
console.log(result)

