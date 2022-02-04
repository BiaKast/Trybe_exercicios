//exercise.js
//Questao 1
/* let fatorial = 10;
let retorno = 1;

for (let index = 1; index < fatorial; index+=1) {
    retorno *= index;
}
console.log(retorno); */

//Questao 2
let word = 'Banana'.toLowerCase();
let restruturar = '';

for (let l = 0; l < word.length; l +=1) {
    restruturar = word[l] + restruturar;
}
console.log(restruturar);
