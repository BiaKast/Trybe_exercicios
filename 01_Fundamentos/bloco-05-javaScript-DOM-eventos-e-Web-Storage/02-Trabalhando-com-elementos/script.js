function inserirBody(valor) {
  let novaTag = document.createElement("h1");
  novaTag.innerText = "Exercício 5.2 - JavaScript DOM";
 
  valor.appendChild(novaTag);

  let segundaTag = document.createElement("main");
  segundaTag.className = "main-content";
  
  valor.appendChild(segundaTag);
}
let body = document.getElementsByTagName("body")[0];
console.log(inserirBody(body));

//questão3
function inserirMain(valor2) {
  for (let index = 0; index < valor2.length; index += 1) {
    let element = valor2[index];
    let creatMain = document.createElement("section");
    creatMain.className = "center-content";

    element.appendChild(creatMain);
  }
}
let main = document.getElementsByClassName("main-content");
console.log(inserirMain(main));
