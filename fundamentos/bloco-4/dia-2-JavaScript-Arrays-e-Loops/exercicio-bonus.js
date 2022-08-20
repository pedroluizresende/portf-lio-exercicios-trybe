let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let largestNumber = [0,0,0,0];
for(let numbersIndex = 0; numbersIndex < numbers.length; numbersIndex += 1) {
 for(let subNumbersIndex = 0; subNumbersIndex < numbersIndex[numbersIndex].length; subNumbersIndex += 1) {
    if(numbers[numbersIndex][subNumbersIndex] > largestNumber[numbersIndex]) {         
       largestNumber[numbersIndex] = numbers[numbersIndex][subNumbersIndex];
     }
 }
}
console.log(largestNumber);