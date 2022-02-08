// let palavra = 'arara';
// function verificacaoPalindromo(polindromo) {
// let verificar = '';
//     for (let index = 0; index < polindromo.length; index +=1){
//         verificar = polindromo[index] + verificar;
//     };
//     if (verificar === palavra){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(verificacaoPalindromo(palavra));

//Questao 2
let arrayNumeros = [2, 3, 6, 7, 10, 1];
function descobrirMaiorNumero(numeros) {
    let maiorNumero = 0;
    let indiceDoMaiorNumero = 0;
    for (let index = 0; index < numeros.length; index +=1){
        if(maiorNumero < numeros[index]){
            maiorNumero = numeros[index]
            if(maiorNumero){
                indiceDoMaiorNumero = [index]
            }
        }
    }
    return indiceDoMaiorNumero;
}
console.log(descobrirMaiorNumero(arrayNumeros));
// function indiceDoMaiorNumero(numero) {
//     for (let index of numeros){

//     }
//     }
// }
// console.log(indiceDoMaiorNumero(descobrirMaiorNumero));