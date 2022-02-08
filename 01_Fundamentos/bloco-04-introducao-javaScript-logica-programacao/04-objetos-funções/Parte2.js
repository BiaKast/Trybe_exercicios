let palavra = 'arara';
function verificacaoPalindromo(polindromo) {
let verificar = '';
    for (let index = 0; index < polindromo.length; index +=1){
        verificar = polindromo[index] + verificar;
    };
    if (verificar === palavra){
        return true;
    } else {
        return false;
    }
}
console.log(verificacaoPalindromo(palavra));
