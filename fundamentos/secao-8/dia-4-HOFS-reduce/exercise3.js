const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

function containsA(arrNames) {
  let result = 0;
  arrNames.forEach((name) => {
    const lettersFromName = name.split('');
    result += lettersFromName.reduce((lettersAInName, currentLetter) =>
(currentLetter.toLowerCase() === 'a') ? lettersAInName + 1 : lettersAInName
  , 0)
  })
  return result
}

console.log(containsA(names));