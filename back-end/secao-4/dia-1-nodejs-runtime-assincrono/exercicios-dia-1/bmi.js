const readLineSync = require('readline-sync')

function calculeteBMI() {
  const weight = readLineSync.questionFloat("What's your weight?")
  const height = readLineSync.questionInt("What's your height?")
  const result = weight / ((height/100) ** 2)
  console.log(`Your BMI is: ${result.toFixed(2)}`)
  return result;
}

const classification = () => {
  const bmi = calculeteBMI();
  if (bmi < 18.5) {
    console.log('Status: Underweight (thin)');
    return;
  }

  if (bmi >= 18.5 && bmi < 25) {
    console.log('Status: Normal weight');
    return;
  }

  if (bmi >= 25 && bmi < 30) {
    console.log('Status: Overweight');
    return;
  }

  if (bmi >= 30 && bmi < 35) {
    console.log('Status: Grade I obesity');
    return;
  }

  if (bmi >= 35 && bmi < 40) {
    console.log('Status: Grade II obesity');
    return;
  }
}

classification()