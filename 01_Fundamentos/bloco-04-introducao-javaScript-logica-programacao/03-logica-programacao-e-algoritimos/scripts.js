//exercise.js
//Questao 1
/* let fatorial = 10;
let retorno = 1;

for (let index = 1; index < fatorial; index+=1) {
    retorno *= index;
}
console.log(retorno); */

//Questao 2
/* let word = 'Banana' //.toLowerCase(); caso quisesse imprimir minusculo
let restruturar = '';

for (let l = 0; l < word.length; l +=1) {
    restruturar = word[l] + restruturar;
}
console.log(restruturar); */

//Questao 3
/* let array = ['java', 'javascript', 'python', 'html', 'css'];

let menorPalavra = array[0];
let maiorPalavra = array[0];

for (let index = 0; index < array.length; index +=1 ){
    if(array[index].length > maiorPalavra.length){
        maiorPalavra = array[index];
    }
    if(array[index].length < menorPalavra.length){
        menorPalavra = array[index];
    }
}   
console.log(maiorPalavra);
console.log(menorPalavra); */

//Questao 4
/* let numero = 50;

let numerosPrimos = [];
for (let i = 1; i <= numero; i +=1) {
    let procurando = 0;

    for(let a = 1; a <= i; a +=1){
        if (i % a == 0){
        procurando +=1;
        }
    }
    if (procurando == 2) {
        numerosPrimos.push(i);
        }
}
console.log(numerosPrimos); */

//Questao bonus 1
/* let n = 7;
let resultado = '';
let final = 0;

for (let a = 0; a <  n; a +=1){
    resultado += '*';
}
for (let i = 1; i <= n; i +=1){
    console.log(resultado)*n;
}
 */
// Questao bonus 2
/* let n = 7;
let resultado = '';
for (let a = 1; a <= n; a +=1){
    resultado += '*';
    console.log(resultado);
} */

//Questao bonus 3
/* let n = 5;
let resultado = '';
let final = '';
for (let a = 1; a <= n; a +=1){
    let espaco = '';
    let asteristico = '';
    for (let b = a; b < n; b+=1){
        espaco += ' ';
         }
    
    for (let u = 1; u <= a; u +=1){
        asteristico += '*';
    }
    resultado = espaco + asteristico;
    console.log(resultado);
} */
// questao bonus 4
/* let n = 5;
let resultado = '';
let final = '';
for (let a = 1; a <= n; a +=2){
    let espaco = '';
    let asteristico = '';
    for (let b = a ; b <= n; b+=2){
        espaco += ' ';
         }
    
    for (let u = 1; u <= a; u +=1){
        asteristico += '*';
    }
    resultado = espaco + asteristico;
    console.log(resultado);
} */
//questao 5
let n = 7;
let resultado = "";

for (let a = 1; a <= n; a += 2) {
  let espaco = "";
  let asteristico = "";
  let espacoMeio = "";
  for (let numeroEspaco = a; numeroEspaco <= n; numeroEspaco += 2) {
    espaco += " ";
  }
  if (n !== a) {
    for (
      let numeroAsteristico = 2;
      numeroAsteristico <= a;
      numeroAsteristico += 1
    ) {
      asteristico += "*";
      for (; numeroAsteristico < a; numeroAsteristico += 1) {
        asteristico += " ";
      }
    }
  }
  for (let percorrer = 1; percorrer < n; percorrer += 1) {
    if (n == a) {
      asteristico += "*";
    }
  }
  asteristico += "*";
  resultado = espaco + asteristico;
  console.log(resultado);
}
