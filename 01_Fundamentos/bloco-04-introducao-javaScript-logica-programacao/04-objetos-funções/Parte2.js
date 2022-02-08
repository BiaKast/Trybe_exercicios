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
// let arrayNumeros = [2, 3, 6, 7, 10, 1];
// function descobrirMaiorNumero(numeros) {
//     let maiorNumero = 0;
//     let indiceDoMaiorNumero = 0;
//     for (let index = 0; index < numeros.length; index +=1){
//         if(maiorNumero < numeros[index]){
//             maiorNumero = numeros[index]
//             if(maiorNumero){
//                 indiceDoMaiorNumero = [index]
//             }
//         }
//     }
//     return indiceDoMaiorNumero;
// }
// console.log(descobrirMaiorNumero(arrayNumeros));

//Questao 3
// let arrayNumeros = [2, 4, 6, 7, 10, 0, -3];
// function descobrirMenorNumero(numeros) {
//     let menorNumero = 0 ;
//     let indiceDoMenorNumero = 0;
//     for (let array = numeros[0]; array < numeros.length; array +=1){
//         if(numeros[array] <= menorNumero){
//             menorNumero = numeros[array]
//         }
//         if(menorNumero){
//             indiceDoMenorNumero = [array]
//          }
//     }
//     return indiceDoMenorNumero;
// }
// console.log(descobrirMenorNumero(arrayNumeros));
let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function nomeComMaisCaracteres (array){
    let palavra = '';
    let verificar = 0;
    let  resultado = '';
    for(let index = 0; index < array.length; index += 1){
        palavra = array[index];
        let tamanhoPalavra = 0;
        for (let index2 = 1; index2 <= palavra.length; index2 += 1){
            tamanhoPalavra = [index2];
            if (tamanhoPalavra > verificar){
                verificar = tamanhoPalavra;
                if(verificar){
                    resultado = palavra;
                }
            }
        }
    }
    // console.log(resultado);
    return resultado;
}
console.log(nomeComMaisCaracteres(nomes));

// function verificarTamanhoNome(string) {
// }
// console.log(verificarTamanhoNome(palavra));