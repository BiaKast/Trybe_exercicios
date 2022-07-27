const { aleatorio }= require('./sorteio');
const readline = require('readline-sync')

const qualNumeroAleatorio = () => {
  const answer = readline.questionInt("Diga, qual e o numero aleatorio de 0 a 10:)? ");

  return answer;
};

const jogarNovamente = () => {
  const answer = readline.question("Gostaria de jogar novamente, tecle s para sim e qualquer outra coisa para nao? ");
  return answer;
}

const sorteio = () => {
  let respostaPerson = qualNumeroAleatorio();

  const respostaSorteio = aleatorio();

  if (respostaPerson === respostaSorteio) {
    console.log('Parabéns, número correto!')
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${respostaSorteio}`)
  }

  const jogar = jogarNovamente();

  if(jogar !== 's') return console.log('Obrigado, ate a proxima');

  sorteio();
}

sorteio();