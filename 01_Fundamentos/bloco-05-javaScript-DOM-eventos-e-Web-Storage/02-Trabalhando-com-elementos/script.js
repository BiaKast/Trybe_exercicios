let body = document.getElementsByTagName("body")[0];
function inserirBody(valor) {
  let novaTag = document.createElement("h1");
  novaTag.innerText = "Exercício 5.2 - JavaScript DOM";
    valor.appendChild(novaTag)

    let segundaTag = document.createElement("main");
    segundaTag.className = 'main-content';
    valor.appendChild(segundaTag);
}
console.log(inserirBody(body));