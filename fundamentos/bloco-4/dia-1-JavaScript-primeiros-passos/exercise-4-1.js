// Programa 1

const a = 10;
const b = 0;

let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

console.log(adicao)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)
console.log(modulo)

// Programa 2

const n1 = 1000;
const n2 = 2000;

if (n1 > n2) {
    console.log(n1);
} else {
    console.log(n2)
}

// Programa 3

const v1 = 200;
const v2 = 99;
const v3 = 201;

if (v1 > v2 && v1 > v3) {
    console.log(v1);    
}else if (v2 > v1 && v2 > v3) {
    console.log(v2);
} else {
    console.log(v3)
}

// programa 4

let result = 'positivo';

switch (result) {
    case 'positivo':
        console.log('positive');
    break;
    case 'negativo':
        console.log('negative');
    break;
 default:
    console.log('inconclusivo')
}

// Programa 5

let ang1 = 100;
let ang2 = 40;
let ang3 = 40;
let triangulo = true;

if (ang1 + ang2 + ang3 === 180){
    console.log(triangulo);
} else {
    console.log(!triangulo);
}

// Programa 6





// programa 7

let nota = 0;

if (nota >= 90 && nota <=100) {
    console.log('A');
} else if (nota >= 80 && nota < 90) {
    console.log('B')
}else if (nota >= 70 && nota < 80) {
    console.log('C')
}else if (nota >= 60 && nota < 70) {
    console.log('D')
}else if (nota >= 50 && nota < 60) {
    console.log('E')
} else if (nota >= 0 && nota < 50) {
    console.log('F')
} else {
    console.log('ERRO')
}

// Programa 8

const num1 = 1;
const num2 = 1;
const num3 = 7;
const par = true;
if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    console.log(par)
} else {
    console.log(!par)
}