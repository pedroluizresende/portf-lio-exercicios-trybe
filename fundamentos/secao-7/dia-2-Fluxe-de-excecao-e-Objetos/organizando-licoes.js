const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addKey  = (objeto, turno, value) => {
  objeto.turno = value;
}

addKey(lesson2, 'turno', 'noite');

const listKeys = (objeto) => console.log(Object.keys(objeto));

const objLength = (objeto) => {
  console.log(Object.keys(objeto).length)
}

const listValues = (objeto) => console.log(Object.values(objeto));

// listValues(lesson1);

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// console.log(allLessons);

const getNumberOfStudents = (obj) => {
  let total = 0;
  const keys = Object.keys(obj)
  for (index in keys) {
    total += obj[keys[index]].numeroEstudantes;
  } 

  return total
};
// console.log(getNumberOfStudents(allLessons));
 

const getValueByNumber = (obj,number) => Object.values(obj)[number];

const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Pedro'));


