function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();


function creaTeDaysofMounth() {

  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let ol = document.getElementById('days');
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let day = decemberDaysList[index];
    const dayMounthItem = document.createElement('li');
    dayMounthItem.classList.add('day')
    dayMounthItem.innerHTML = day;
    ol.appendChild(dayMounthItem);
    if (day === 24 || day === 25 || day === 31) {
      dayMounthItem.classList.add('holiday')
    }
    if (day === 4 || day === 11 || day === 18 || day === 25) {
      dayMounthItem.classList.add('friday')
    }
  }


}
creaTeDaysofMounth();

let buttonsContainer = document.querySelector('.buttons-container')
let button = document.createElement('button');

function createButton(parent, text) {
  button.innerText = text;
  parent.appendChild(button)
  button.classList.add('btn-holiday')
}

createButton(buttonsContainer, 'Feriados')

button.addEventListener('click', function () {
  let hollidayDays = document.querySelectorAll('.holiday')
  for (let index = 0; index < hollidayDays.length; index += 1) {
    if (hollidayDays[index].style.backgroundColor === 'lightgreen') {
      hollidayDays[index].style.backgroundColor = 'unset';
    } else {
      hollidayDays[index].style.backgroundColor = 'lightgreen'
    }
  }
}
)
let button2 = document.createElement('button');

function createButton2(parent, text) {
  button2.innerText = text;
  parent.appendChild(button2);
  button2.classList.add('btn-friday')
}
createButton2(buttonsContainer, 'Sexta-Feira');



function displayFridays(fridaysArray) {
  let fridays = document.getElementsByClassName('friday');
  let newFridayText = 'SEXTOU o/';

  button2.addEventListener('click', function () {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
      } else {
        fridays[index].innerHTML = fridaysArray[index];
      }
    }
  });
}
displayFridays([4, 11, 18, 25]);

let days = document.querySelector('.day');

function dayMouseOver() {
  let days = document.querySelectorAll('.day');
  for( let index = 0; index < days.length; index +=1){
  days[index].addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';}
  )
}
}
dayMouseOver();

function dayMouseOut() {
  let days = document.querySelectorAll('.day');
  for( let index = 0; index < days.length; index +=1){
  days[index].addEventListener('mouseout', function (event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';}
  )
}
}
dayMouseOut();

function newTaskSpan(task) {
  let newTask = document.createElement('span');
  newTask.innerHTML = task;
  document.querySelector('.my-tasks').appendChild(newTask);
}

newTaskSpan('Cozinhar');

function newTaskDiv(color) {
  let taskContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');
  newTask.className = 'task'
  newTask.style.backgroundColor = color;
  taskContainer.appendChild(newTask)

}
newTaskDiv('red')

function selectDiv() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTask = document.querySelector('.task');
  myTask.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected'
    } else {
      event.target.className = 'task'
    }
  })
}
selectDiv()

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor; // Pega a cor de fundo do primeiro elemento salvo na variável "selectedTask" e salva na variável "color"
      event.target.style.color = color; // atribui a cor salva na variável "color" ao evento alvo
    } else if (eventTargetColor === taskColor) {
      event.target.style.color = 'rgb(119,119,119)';  // Altera a cor de fundo do evento alvo para "rgb(119, 119, 119)"
    }
  });
}
setDayColor()
  // function mounthDays() {
  //   for(let index in decemberDaysList) {
  //     let elementList = ol.createElement('li');
  //   }
  // }

  // mounthDays();
  // Escreva seu código abaixo.