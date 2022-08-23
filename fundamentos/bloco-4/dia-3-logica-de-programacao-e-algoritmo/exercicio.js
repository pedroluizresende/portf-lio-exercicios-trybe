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

// for (let index = 2; index <= 50; index +=1){
//     let divisor = 0;
//     for(let index2 = 2; index2 < index; index2 +=1){
//         if (index % index2 === 0) {
//             divisor += 1;
//         }
//     }
//     if (divisor % index == 0){
//     numerosPrimos.push(index)
//     }
// } console.log(numerosPrimos[numerosPrimos.length-1]);


// Exercicio Bonus 1:

// let n = 5;
// let asteristico = ''
// for (let linha = 1; linha <= n; linha +=1){
//     for(let coluna = 1; coluna <= n; coluna +=1){
//                 asteristico +=  '*';
//     }
//     console.log(asteristico)
//     asteristico = '';
//  }


// Exercício bonus 22:

// n = 5
// let asteristico = '';

// for(let linha = 1; linha <= n; linha += 1) {
//     for( let coluna =1; coluna <= n; coluna +=1){
//         if(linha === coluna) {
//             asteristico += '*'
//         }
//     }
//     console.log(asteristico)
// }

// Exercicio bonus 3:

// let n = 5;
// let espacos = '';
// let asteristico = '';


// for (let linha = 1; linha <= n; linha += 1) {
//     for (let space = n - linha; space >= 1; space -= 1) {
//         espacos += ' ';
//     }
//     for (let coluna = 1; coluna <= n; coluna += 1) {
//         if(linha === coluna) {
//             asteristico += '*';
//         }
//     }
//     console.log(espacos, asteristico)
//     espacos = '';
// }

// exercicio bonus 4;

let n = 5;
let direita = '';
let esquerda = '';
let asteristico = '';

for (let linha = 1; linha <= n - 2; linha += 1) {
    for (let ie = 1 ; ie <=n-2; ie += 1) {
        if (linha <= ie)
        esquerda += ' ';
    }
    for (let coluna = 1; coluna <= n-2; coluna += 1) {
        if (linha === coluna) {
            asteristico += '*';
        }
    }
    console.log(esquerda, asteristico, direita)
    asteristico += '*'
    esquerda = '';
}