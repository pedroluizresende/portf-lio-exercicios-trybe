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
  for (let index =0; index < decemberDaysList.length; index += 1) {
    let day = decemberDaysList[index];
    const dayMounthItem = document.createElement('li');
    dayMounthItem.classList.add('day')
    dayMounthItem.innerHTML = day;
    ol.appendChild(dayMounthItem);
    if(day === 24 || day === 25 || day === 31) {
      dayMounthItem.classList.add('holiday')
    }
    if(day === 4 || day === 11 ||day === 18 ||day === 25){
      dayMounthItem.classList.add('friday')
    }
  }


}
creaTeDaysofMounth();

let buttonsContainer = document.querySelector('.buttons-container')
function createButton(parenter, text){
    let button = document.createElement('button');
    button.innerText = text;
    buttonsContainer.appendChild(button)
 console.log(button)   
 }



 createButton(buttonsContainer, 'Feriados')
  // function mounthDays() {
  //   for(let index in decemberDaysList) {
  //     let elementList = ol.createElement('li');
  //   }
  // }

  // mounthDays();
  // Escreva seu código abaixo.