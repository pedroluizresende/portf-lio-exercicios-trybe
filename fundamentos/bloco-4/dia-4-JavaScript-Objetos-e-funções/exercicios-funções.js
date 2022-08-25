// exercicio 1:

// function verificaPalindrome(word) {
//     for(index in word) {
//       if(word[index] != word[(word.length - 1) - index]) {
//         return false;
//       }
//     }
//     return true;
//   }

//   console.log(verificaPalindrome('ana'))


// Exercicio 2:

// function indexMaior(numeros) {
//     let numeroIndex = 0;
//     for (let index = 0; index < numeros.length; index += 1){
//         for (let compara = 0; compara < numeros.length; compara +=1 )
//         if (numeros[index] > numeros[compara]) {
//             numeroIndex = index
//         }
//     }
//     return numeroIndex;
// }

// console.log(indexMaior([2, 3, 6, 7, 10, 1]))


// Exercicio 3:

// function indexMenor(numeros) {
//     let numeroIndex = 0;
//     for (let index = 0; index < numeros.length; index += 1){
//         for (let compara = 0; compara < numeros.length; compara +=1 )
//         if (numeros[index] < numeros[compara]) {
//             numeroIndex = index
//         }
//     }
//     return numeroIndex;
// }

// console.log(indexMenor([2, 4, 6, 7, 10, 0, -3]))

// function maiorNome(nomes) {
//     let nome = nomes[0];
//     for (let index = 1; index < nomes.length; index += 1) {
//         if (nomes[index].length > nome.length) {
//             nome = nomes[index]
//         }
//     } return nome

// }
// console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))


// Exercicio 5:

function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let numMaisRepetido = 0;
    for(let index in numeros) {
        let verificaNumero = numeros[index];
        for(let index2 in numeros) {
            if (verificaNumero === numeros[index2]) {
                contNumero += 1;
            }
        }
        if (contNumero > contRepetido) {
            contRepetido = contNumero;
            numMaisRepetido = numeros[index];
        }
        contNumero = 0
    }
    return numeros[numMaisRepetido]
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]))


// Exercicio 6: 

// function somaAteNumero(num) {
//     let soma = 0;
//     for(let index = 1; index <= num; index +=1) {
//         soma += index
        
//     }
//     return soma;
// }

// console.log(somaAteNumero(5))


// Exercicio 7:

function verificaFimPalavra(word, ending){
    let reverseword = word.split('').reverse().join('');
    let reverseending = ending.split('').reverse().join('')
    let controle = true;

    for(let index = 0; index < reverseending.length; index +=1){
        if(reverseword[index] !== reverseending[index]) {
            controle = false;
            break
        }

    }
    return controle;
}

console.log(verificaFimPalavra('trybe', 'be'))
console.log(verificaFimPalavra('amoras', 'uvas'))