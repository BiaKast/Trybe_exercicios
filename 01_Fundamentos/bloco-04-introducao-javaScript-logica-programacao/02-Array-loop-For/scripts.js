//Array da questão 1 ao 7:
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//Questão: 1 
/* for (let index = 0; index <10; index +=1){
    console.log(numbers[index]);
} */

//Questão: 2
/* let resultado = 0;

for (let soma of numbers){
    resultado += soma 
}
console.log (resultado); */

//Questão 3
/* let resultado = 0;
let divisao = 0;

for (let index2 = 0; index2 < numbers.length; index2 +=1){
    resultado += numbers[index2]
    divisao = resultado / numbers.length;
    } */
/* console.log (divisao); */
//Questão 4
/* if (divisao > 20) {
    console.log ( divisao + ' valor maior que 20');
}else {
    console.log (divisao + ' valor menor que 20');
} */
//Questão 5
/* let valor = 0;
for (let verificar = 0; verificar < numbers.length; verificar +=1){
    if (numbers[verificar] > valor){
        valor = numbers[verificar]
    }
}
console.log(valor); */
//Questão 6
/* let resto = 0;
let impar = 0;
let par = 0 ;

for (let div of numbers) {
    resto = div % 2;
    if (resto == 0) {
        par += 1;
    }
    else if (resto !== 0) {
        impar += 1; 
    } else {
        console.log('nenhum valor ímpar encontrado');
    }
}
console.log (impar + ': números ímpares encontrados; ' + par + ': números pares encontrados;'); */
//Questão 7
/* let valor = numbers[0];
for (let i = 0; i < numbers.length; i +=1){
  if (numbers[i] < valor){
    valor = numbers[i];
  }
}
console.log(valor); */

//Questão 8
let armArray = [];
for (let b= 1; b <= 25; b +=1){
  armArray.push(b);
}
console.log(armArray);

//Questão 9
let resultado = [];
let calculo = 0;
for (let index = 0; index < armArray.length; index +=1){
  calculo = armArray[index] / 2;
  resultado.push (calculo)
}
console.log(resultado);