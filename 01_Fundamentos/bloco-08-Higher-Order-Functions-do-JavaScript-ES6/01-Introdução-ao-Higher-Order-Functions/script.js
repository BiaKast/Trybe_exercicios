// const newEmployees = (callback) => {
//   const employees = {
//     id1: callback("Pedro Guerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: callback("Luiza Drumond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: callback("Carla Paiva"), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   };
//   return employees;
// };
// const pessoaContratada = (nomeCompleto) => {
//     let email = `${nomeCompleto.toLowerCase().replace(/ /g, "_")}@trybe.com`;
//     return {nomeCompleto, email};
  
// };
// console.log(newEmployees(pessoaContratada));

// const numeroAleatorio = (numeroApostado, callback) => {
//   return callback (numeroApostado, Math.floor((Math.random()*5) + 1));
// }
// const sorteio = (numero, aleatorio) => numero === aleatorio ? ganhou = 'Parabéns você ganhou! :)' : 'Tente novamente! :(';

// console.log(numeroAleatorio(5 , sorteio));

const contagens = (callback, arrayCorreto, arrayVerificar) => callback(arrayCorreto, arrayVerificar);

const analisarResp = (gabarito, respostaAluno) => {
  let contagem = 0;
  respostaAluno.forEach((element, index) => {
    if (element === gabarito[index]) {
      contagem += 1;
    } 
    if (element !== gabarito[index] && element !== 'N.A') {
      contagem -= 0.5;
    }
  });
  return contagem;
}
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
console.log(contagens(analisarResp,RIGHT_ANSWERS,STUDENT_ANSWERS));
