// Programa 10

const custo = 30;
const valorDeVenda = 40;
let custoTotal = custo + custo * 0.2;
let lucro = valorDeVenda - custoTotal;
let lucroTotal = lucro * 1000;

if (custo === 0 || valorDeVenda === 0){
    console.log('Erro')
    } else {
    console.log(lucroTotal)
}