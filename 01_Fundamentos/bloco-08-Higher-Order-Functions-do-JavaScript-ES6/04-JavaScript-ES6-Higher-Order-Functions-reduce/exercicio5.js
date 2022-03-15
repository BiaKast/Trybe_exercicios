// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

  const  containsA  = (letra) => {
    let a = letra;
    return names.reduce((valorAtual, palavraAtual) => valorAtual + palavraAtual.toLowerCase().split('').reduce((acumulador, element) => { if (element === a || element === a) return acumulador + 1
        return acumulador}, 0 ), 0 )
  }
  console.log(containsA('A'.toLowerCase()));