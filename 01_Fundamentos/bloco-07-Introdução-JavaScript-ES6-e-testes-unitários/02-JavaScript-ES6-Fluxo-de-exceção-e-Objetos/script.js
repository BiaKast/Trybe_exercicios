const verificarError = (value1 , value2) => {
  if (!value1) {
    throw new Error("Valor 1 não identificado");
  }
  if (!value2) {
    throw new Error("Valor 2 não identificado");
  }
};
const naoNumerico = (x , b) => {
  if(isNaN(x)){
    throw new Error ('Valor 1 não é um número')
  }
  if (isNaN(b)) {
    throw new Error ('Valor 2 não é um número')
  }
}

function sum() {
  try {
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;
    verificarError(value1, value2);
    naoNumerico (value1 , value2);
    const result = parseInt(value1) + parseInt(value2);
    document.getElementById("result").innerHTML = `Resultado: ${result}`;
  } catch (e) {
    document.getElementById("result").innerHTML = `Error: ${e.message}`;
    alert (`Error ${n.message}`);
  } finally {
    document.getElementById("value1").value = "";
    document.getElementById("value2").value = "";
  }
}

window.onload = () => {
  const button = document.getElementById("button");
  button.addEventListener("click", sum);
};
