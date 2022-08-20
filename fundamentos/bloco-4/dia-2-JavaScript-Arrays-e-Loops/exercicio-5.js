let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maisAlto = [0]
 
for (let indexAlto = 0; indexAlto < numbers.length; indexAlto += 1) {
    for (let indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1){
        if (numbers[indexAlto] > numbers[indexNumbers]) {
           maisAlto[0] = numbers[indexAlto];
         } else {
            numbers.shift();
            break
         }
    }
    
}
console.log(maisAlto[0]);