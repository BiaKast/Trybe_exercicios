function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();
//Questão 1
const paiUl = document.querySelector("ul");
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
function diasDoCalendario(array, pai) {
  for (let index = 0; index < array.length; index += 1) {
    const element = array[index];

    let dias = document.createElement("li");
    dias.innerText = element;
    dias.className = "days";
    pai.appendChild(dias);
    if(element === 4 || element === 11 || element === 18 || element === 25){
        dias.className += (' friday');
    }
    if (element === 24 || element === 25 || element === 31) {
      dias.className += (' holiday');
    }
  }
}
diasDoCalendario(dezDaysList, paiUl);

//Questão 2
function criandoFeriados(nome, pai2) {
    let buttonCreat = document.createElement('button');
    buttonCreat.innerText = nome;
    buttonCreat.className = 'btn-holiday';
    pai2.appendChild(buttonCreat);
}
let paiDiv = document.querySelector('.buttons-container');
criandoFeriados("Feriados", paiDiv);