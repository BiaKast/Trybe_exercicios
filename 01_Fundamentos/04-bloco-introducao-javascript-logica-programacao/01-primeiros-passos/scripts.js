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
const valor1 = 45;
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
}
