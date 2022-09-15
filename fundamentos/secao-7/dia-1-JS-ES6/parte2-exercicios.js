// Exercicio 1:

// const fatorialCalc = (num) => {
//   let result = num;
//   for (let index = (num-1); index > 0; index -=1) {
//     result = result * index 
//   } return result;
// }

// console.log(`Esse é o fatorial ${fatorialCalc(7)}`);

// const reversiveFactorial = number => number > 1 ? number * reversiveFactorial(number - 1) : 1;

// console.log(reversiveFactorial(5))


// Exercicio 2 

const longestWord = (frase) => {
  let longestWord = '';
  let fraseArray = frase.split(' ');
  for (let index =0; index < fraseArray.length; index +=1) {
    longestWord = fraseArray[index].length > longestWord.length? 
      longestWord = fraseArray[index]:
      longestWord = longestWord
  
  }
  return longestWord
}



console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'));





