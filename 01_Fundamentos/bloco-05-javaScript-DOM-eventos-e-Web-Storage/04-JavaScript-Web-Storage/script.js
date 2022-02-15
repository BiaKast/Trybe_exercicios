let body = document.getElementById("corpo");
window.onload = function () {
  function corDeFundo(local) {
    let buttonColor = document.createElement("button");
    buttonColor.innerText = "Fundo";
    buttonColor.className = "butao";
    local.appendChild(buttonColor);
  }
  let divContainer = document.querySelector(".pai");
  corDeFundo(divContainer);

  let listaColor = ["Azul", "Vermelho", "Amarelo", "Padrão"];
  function menuSuspenso(valor1, valor2) {
    let creatDiv = document.createElement("div");
    creatDiv.id = "paiDeLi";
    valor1.appendChild(creatDiv);
    for (let index = 0; index < valor2.length; index += 1) {
      let paiLi = document.querySelector("#paiDeLi");

      let creatLi = document.createElement("button");
      creatLi.style.display = "none";
      creatLi.className = "styleLi";
      creatLi.innerText = valor2[index];
      paiLi.appendChild(creatLi);

      let butaoAdd = document.querySelector(".butao");

      butaoAdd.addEventListener("click", function () {
        if (creatLi.style.display == "none") {
          creatLi.style.display = "block";
        } else {
          creatLi.style.display = "none";
        }
      });
    }
  }
  let butao = document.querySelector(".pai");
  menuSuspenso(butao, listaColor);

  let li = document.querySelectorAll(".styleLi");
  for (let index = 0; index < li.length; index += 1) {
    li[index].addEventListener("click", function (event) {
      if (index == 0) {
        localStorage.setItem("backgroundColor", "blue");
        body.style.backgroundColor = "blue";
      }
      if (index == 1) {
        localStorage.setItem("backgroundColor", "red");
        body.style.backgroundColor = "red";
      }
      if (index == 2) {
        localStorage.setItem("backgroundColor", "yellow");
        body.style.backgroundColor = "yellow";
      }
      if (index == 3) {
        localStorage.setItem("backgroundColor", "white");
        body.style.backgroundColor = "white";
      }
    });
  }
};

if(localStorage.backgroundColor){
  body.style.backgroundColor = localStorage.getItem("backgroundColor")
}
