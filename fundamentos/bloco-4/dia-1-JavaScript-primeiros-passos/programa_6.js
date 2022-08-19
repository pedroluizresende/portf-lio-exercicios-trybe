// Programa 6
let pecaXadrez= 'Bispo';

switch (pecaXadrez.toLowerCase()) {
    case 'Peão':
        console.log('Anda 1 para frente e como na diagonal')
        break;
    case 'Torre':
        console.log('Movimenta-se na horizontal e vertical número de casas ilimitados')
        break
    case 'Cavalo':
        console.log('Movimenta-se em L 3 para frente e 1 para o lado')
        break
    case 'bispo':
        console.log('Movimenta-se nas diagonais, número de casas ilimitado')
        break
    case 'Rainha':
        console.log('Movimenta-se em todas as direções, número de casas ilimitado')
        break
    case 'rei':
        console.log('Movimenta-se em todas direções, apenas 1 casa por rodada')

}