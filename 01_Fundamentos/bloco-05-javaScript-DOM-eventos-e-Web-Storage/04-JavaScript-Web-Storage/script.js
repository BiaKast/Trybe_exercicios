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

  let listaColor = ["Azul", "Roxo", "Verde", "Padrão"];
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
    li[index].addEventListener("click", function () {
      if (index == 0) {
        localStorage.setItem("backgroundColor", "#095169");
        body.style.backgroundColor = "#095169";
      }
      if (index == 1) {
        localStorage.setItem("backgroundColor", "#4d002b");
        body.style.backgroundColor = "#4d002b";
      }
      if (index == 2) {
        localStorage.setItem("backgroundColor", "#429867");
        body.style.backgroundColor = "#429867";
      }
      if (index == 3) {
        localStorage.setItem("backgroundColor", "#fad9a6");
        body.style.backgroundColor = "#fad9a6";
      }
    });
  }
};

if (localStorage.backgroundColor) {
  body.style.backgroundColor = localStorage.getItem("backgroundColor");
}

//2
function corDeTexto(paiButaoTexto) {
  let buttonText = document.createElement("button");
  buttonText.innerHTML = "Cor Texto";
  buttonText.className = "butao2";
  paiButaoTexto.appendChild(buttonText);
}
let paiButaoTexto = document.querySelector(".pai");
corDeTexto(paiButaoTexto);

let corTextoList = ["Azul", "Vermelho", "Amarelo", "Padrão"];
function filhosDePaiTexto(neutro, array) {
  let div2 = document.createElement("div");
  div2.id = "paiDeFonte";
  neutro.appendChild(div2);

  for (let index = 0; index < array.length; index += 1) {
    let paiFonte = document.querySelector("#paiDeFonte");

    let creatFontButton = document.createElement("button");
    creatFontButton.style.display = "none";
    creatFontButton.className = "fontButton";
    creatFontButton.innerText = array[index];
    paiFonte.appendChild(creatFontButton);

    let buttonFont = document.querySelector(".butao2");
    buttonFont.addEventListener("click", function () {
      if (creatFontButton.style.display == "none") {
        creatFontButton.style.display = "block";
      } else {
        creatFontButton.style.display = "none";
      }
    });
  }
}
let paiDeDivFonte = document.querySelector(".pai");
filhosDePaiTexto(paiDeDivFonte, corTextoList);

let mudarCorTexto = document.querySelectorAll(".conteudo");
for (let index = 0; index < mudarCorTexto.length; index += 1) {
  let font = document.querySelectorAll(".fontButton");
  let tagColor = mudarCorTexto[index];
  for (let index = 0; index < font.length; index += 1) {
    font[index].addEventListener("click", function (event) {
      if (index == 0) {
        localStorage.setItem("color", "#ffffff");
        tagColor.style.color = "#ffffff";
      }
      if (index == 1) {
        localStorage.setItem("color", "#991818");
        tagColor.style.color = "#991818";
      }
      if (index == 2) {
        localStorage.setItem("color", "#5d4157");
        tagColor.style.color = "#5d4157";
      }
      if (index == 3) {
        localStorage.setItem("color", "#000000");
        tagColor.style.color = "#000000";
      }
    });
  }
  if (localStorage.color) {
  tagColor.style.color = localStorage.getItem("color");
}
}

