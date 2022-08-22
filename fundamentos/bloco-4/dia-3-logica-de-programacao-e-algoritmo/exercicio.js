// Exercicio 1:
// let fatorialDe10 = 10;

// for (let index = 9; index > 0ca ; index -= 1){
//     fatorialDe10 =  fatorialDe10 * index;
// }
// console.log(fatorialDe10)

// Exercicio 2:

// let word = 'tryber';
// let newWord = '';

// for(let index = word.length -1; index >= 0; index -=1){
// newWord += word[index];
// }

// console.log(newWord);

// Exercicio 3:

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maiorPalavra= '';
// for(let index = 0; index < array.length; index +=1) {
//     if (array[index].length > maiorPalavra.length){
//         maiorPalavra = array[index];
//     }
// }
// console.log(maiorPalavra)

// Exercicio 4:

// let numerosPrimos = [];

for (let index = 2; index <= 50; index +=1){
    let divisor = 0;
    for(let index2 = 2; index2 < index; index2 +=1){
        if (index % index2 === 0) {
            divisor += 1;
        }
    }
    if (divisor % index == 0){
    numerosPrimos.push(index)
    }
} console.log(numerosPrimos[numerosPrimos.length-1]);
    