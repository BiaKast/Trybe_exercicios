const { calculadoraV } = require("./velocidade");
const readline = require("readline-sync");

const pergNome = () => {
  const answer = readline.question("Qual o seu nome? ");

  return answer;
};

const pergDistancia = () => {
  const answer = readline.questionInt("Qual a sua distancia percorrida? ");

  return answer;
};

const pergTempo = () => {
  const answer = readline.questionInt("Qual foi o tempo? ");

  return answer;
};

const velocidadeMedia = () => {
  const nome = pergNome();
  const distancia = pergDistancia();
  const tempo = pergTempo();

  const calcV = calculadoraV(distancia, tempo);

  console.log(`A velocidade media do carro de ${nome} é ${calcV}`);
}

velocidadeMedia();