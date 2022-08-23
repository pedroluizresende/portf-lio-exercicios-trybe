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

function maiorNome(nomes) {
    let nome = '';
    for (let index = 0; index < nomes.length; index += 1) {
        for (let compara = 0; compara < nomes.length; compara += 1) {
            if (nomes[index].length > nomes[compara].length && nomes[index] > nome) {
                nome = nomes[index];
            }
        }
    }
    return nome;
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))