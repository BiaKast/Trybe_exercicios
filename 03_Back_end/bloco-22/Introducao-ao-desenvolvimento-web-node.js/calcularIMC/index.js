const redline = require("readline-sync");

const qualNpm = () => {
  const ask = redline.questionInt(
    "Escolha as opcoes abaixo: Sorteio = 1, Massa Corporal = 2 e Velocidade = 3 ? "
  );
  return ask;
};

const main = () => {
  const npm = qualNpm();

  switch (npm) {
    case 1:
      require("./indexA");
      break;
    case 2:
      require("./indexM");
      break;
    case 3:
      require("./indexV");
      break;
    default: console.log('Voce escolheu uma opcao não encontrada ou o numero foi incorreto')
      break;
  }
};

main();
