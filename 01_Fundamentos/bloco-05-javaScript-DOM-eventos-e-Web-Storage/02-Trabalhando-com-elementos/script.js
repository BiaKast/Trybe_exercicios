function inserirNoBody(valor) {
  let novaTag = document.createElement("h1");
  novaTag.innerText = "Exercício 5.2 - JavaScript DOM";
  novaTag.className = "title";

  valor.appendChild(novaTag);

  let segundaTag = document.createElement("main");
  segundaTag.className = "main-content";

  valor.appendChild(segundaTag);
}
let body = document.getElementsByTagName("body")[0];
inserirNoBody(body);

//questão3 e 5 e 6
function filhosDeMain(valor2) {
  for (let index = 0; index < valor2.length; index += 1) {
    let element = valor2[index];

    let criandoSection0 = document.createElement("section");
    criandoSection0.className = "center-content";
    criandoSection0.style.backgroundColor = "green";
    element.appendChild(criandoSection0);

    if ((index += 1)) {
      let criandoSection1 = document.createElement("section");
      criandoSection1.className = "left-content";
      element.appendChild(criandoSection1);
    }

    if ((index += 1)) {
      let criandoSection2 = document.createElement("section");
      criandoSection2.className = "right-content";
      criandoSection2.style.marginRight = "auto";
      element.appendChild(criandoSection2);
    }
  }
}
let main = document.getElementsByClassName("main-content");
filhosDeMain(main);

//questão 4
function paragrafoSection(p) {
  for (let index = 0; index < p.length; index += 1) {
    let element = p[index];
    let creatParagrafo = document.createElement("p");
    creatParagrafo.innerText = "Adineretion dendi won a cant dragadu.";

    element.appendChild(creatParagrafo);
  }
}
let pText = document.getElementsByClassName("center-content");
paragrafoSection(pText);

//Questão 7
function imgFilhoDeLefetContent(i) {
  for (let index = 0; index < i.length; index += 1) {
    let element = i[index];

    let criandoImg = document.createElement("img");
    criandoImg.src = "https://picsum.photos/200";
    criandoImg.className = "small-image";
    element.appendChild(criandoImg);
  }
}
let section1 = document.getElementsByClassName("left-content");
imgFilhoDeLefetContent(section1);

//Questão 8
let list = [
  "um",
  "dois",
  "três",
  "quatro",
  "cinco",
  "seis",
  "sete",
  "oito",
  "nove",
  "dez",
];
function filhoDeRightContent(section, ii) {
  let criandoList = document.createElement("ul");
  section.appendChild(criandoList);

  for (let index = 0; index < ii.length; index += 1) {
    let element = ii[index];
    let criandoFilhosList = document.createElement("li");
    criandoFilhosList.innerText = element;
    criandoList.appendChild(criandoFilhosList);
  }
}
let section2 = document.getElementsByClassName("right-content")[0];
filhoDeRightContent(section2, list);

//Questão 9
function repetirH3(pai) {
  for (let index = 1; index <= 3; index += 1) {
    let criandoH3 = document.createElement("h3");
    criandoH3.className = "description ";
    pai[0].appendChild(criandoH3);
  }
}
repetirH3(main);

// function removerMain(array) {
//   for (let index = 0; index < array.length; index += 1) {
//     let element = index;
//     if (element === 1) {
//       array.removeChild(element);
//     }
//   }
// removerMain(main);
