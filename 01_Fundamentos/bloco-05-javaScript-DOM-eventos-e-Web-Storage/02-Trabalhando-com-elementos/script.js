function inserirNoBody(valor) {
  let novaTag = document.createElement("h1");
  novaTag.innerText = "Exercício 5.2 - JavaScript DOM";

  valor.appendChild(novaTag);

  let segundaTag = document.createElement("main");
  segundaTag.className = "main-content";

  valor.appendChild(segundaTag);
}
let body = document.getElementsByTagName("body")[0];
console.log(inserirNoBody(body));

//questão3 e 5 e 6
function filhosDeMain(valor2) {
  for (let index = 0; index < valor2.length; index += 1) {
    let element = valor2[index];

    let criandoSection0 = document.createElement("section");
    criandoSection0.className = "center-content";
    element.appendChild(criandoSection0);

    if (index += 1) {
      let criandoSection1 = document.createElement("section");
      criandoSection1.className = "left-content ";
      element.appendChild(criandoSection1);
    }

    if (index += 1) {
        let criandoSection2 = document.createElement("section");
        criandoSection2.className = "right-content";
        element.appendChild(criandoSection2);
      }
  }
}
let main = document.getElementsByClassName("main-content");
console.log(filhosDeMain(main));

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
console.log(paragrafoSection(pText));

