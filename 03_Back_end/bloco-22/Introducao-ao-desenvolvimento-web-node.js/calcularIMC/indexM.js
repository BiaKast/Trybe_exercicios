const { calculadora } = require("./imc");
const readline = require("readline-sync");
const fs = require("fs");

const pergNome = () => {
  const answer = readline.question("Qual o seu nome? ");

  return answer;
};

const pergAltura = () => {
  const answer = readline.questionFloat("Qual a sua altura? ");

  return answer;
};

const pergPeso = () => {
  const answer = readline.questionFloat("Qual o seu peso? ");

  return answer;
};

const massaCorporal = () => {
  const nome = pergNome();
  const altura = pergAltura();
  const peso = pergPeso();

  const calcImc = calculadora(peso, altura);

  if (calcImc < 18.5) {
    console.log("Situação: Abaixo do peso (magreza)");
    fs.appendFileSync("imc.txt", "Abaixo do peso (magreza)\n");
    return;
  }

  if (calcImc >= 18.5 && calcImc < 25) {
    console.log("Situação: Peso normal");
    fs.appendFileSync("imc.txt", "Peso normal\n");
    return;
  }

  if (calcImc >= 25 && calcImc < 30) {
    console.log("Situação: Acima do peso (sobrepeso)");
    fs.appendFileSync("imc.txt", "Situação: Acima do peso (sobrepeso)\n");
    return;
  }

  if (calcImc >= 30 && calcImc < 35) {
    console.log("Situação: Obesidade grau I");
    fs.appendFileSync("imc.txt", "Situação: Obesidade grau I\n");
    return;
  }

  if (calcImc >= 35 && calcImc < 40) {
    console.log("Situação: Obesidade grau II");
    fs.appendFileSync("imc.txt", "Situação: Obesidade grau II\n");
    return;
  }

  console.log("Situação: Obesidade graus III e IV");
};

massaCorporal();
