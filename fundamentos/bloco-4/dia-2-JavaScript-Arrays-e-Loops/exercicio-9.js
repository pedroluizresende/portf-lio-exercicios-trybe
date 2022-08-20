let listaDeNumeros = [];

for (let i = 0; i < 25; i += 1) {
    listaDeNumeros.push(i + 1)
}

let resultado = [];
 for (let i = 0;i < listaDeNumeros.length; i +=1) {
    resultado.push(listaDeNumeros[i] / 2)
 }

 console.log(resultado);