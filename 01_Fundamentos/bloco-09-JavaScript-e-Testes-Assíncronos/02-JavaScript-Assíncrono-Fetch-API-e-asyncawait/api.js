const listar = (array) => {
  let moedas;
  const i = array.forEach((element, index) => {
      const valorEmDOlar = Number(element.priceUsd)
    if (index < 10) {
      moedas = `${element.name} (${element.symbol}) ${valorEmDOlar.toFixed(2)}`;
      const lista = document.createElement("li");
      const pai = document.getElementById("qualquercoisa");
      lista.innerText = moedas;
      pai.appendChild(lista);
    }
  });
};

const funcao = () => {
  const url = "https://api.coincap.io/v2/assets";
  fetch(url)
    .then((response) => response.json())
    .then((data) => listar(data.data));
};
funcao();
