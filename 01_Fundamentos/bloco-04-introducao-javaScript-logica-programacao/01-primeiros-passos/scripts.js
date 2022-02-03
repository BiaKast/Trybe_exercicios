/* //Operações aritméticas: Questão 1
const a = 40;
const b = 5;

//Adição
const adi = a + b ;
console.log (adi);

//Subtração
const sub = a - b;
console.log (sub);

//Multiplicação
const multi = a * b;
console.log (multi);

//Divisão
const div = a / b;
console.log (div);

//Módulo
const mod = a % b
console.log (mod); */

//Retorne o maior de dois: Questão 2
/* const x = 16;
const y = 37;

if (x > y) {
    console.log ('X é maior que y.');
}
else{
    console.log ('Y é maior que x.');
} */

//Retorne o maior de três: Questão 3
/* const valor1 = 45;
const valor2 = 69;
const valor3 = 58;

if (valor1 > valor2 && valor1 > valor3) {
    console.log (' valor1 é o maior número dos três');
}
else if (valor2 > valor1 && valor2 > valor3) {
    console.log ('valor2 é o maior número entre os três');
} 
else if (valor3 > valor1 && valor3 > valor2) {
    console.log (' valor3 é o maior número');
}
else {
    console.log ('todos os valores são iguais');
} */

//Questão 4
/* const inserir = 0 ;

if (inserir > 0) {
    console.log ('positivo');
}
else if (inserir < 0) {
    console.log ('negativo');
}
else {
    console.log ('zero');
} */

//Questão 5
/* const lado1 = 63;
const lado2 = 100;
const lado3 = 17;

let soma 

if (lado1 >= 0 && lado2 >= 0 && lado3 >= 0) {
    soma =  lado1 + lado2 + lado3;
}

if ( lado1 < 0 || lado2 < 0 || lado3 < 0){
   return console.log ('erro');
}

if (soma === 180 ){
   return console.log ('true');
}
else {
   return console.log ('false');
} */

// Questão 6
const peca = 'Torre';

let nameMinuscula = peca.toLowerCase('')

if (nameMinuscula === 'peão' || nameMinuscula === 'torre' || nameMinuscula === 'bispo' || nameMinuscula == 'rainha' || nameMinuscula === 'rei'){
    console.log ('Todas as peças, exceto o cavalo movem-se em linha reta: horizontal, vertical ou diagonal');
}
else if (nameMinuscula === 'cavalo') {
    console.log ('O cavalo se move em L maiúsculo, duas casas na vertical e uma na horizontal ou duas casas na horizontal e uma na vertical ')
}
else {
    console.log ('Erro! Este nome não corresponde a uma peça ou não está escrita devidamente.')
}

//Questão 7

