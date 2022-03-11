// const emailListInData = [
//     'roberta@email.com',
//     'paulo@email.com',
//     'anaroberta@email.com',
//     'fabiano@email.com',
//   ];

//   const showEmailList = (email) => {
//     console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
//   };

//   emailListInData.forEach(showEmailList);

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = (number) => number % 3 === 0 && number % 5 === 0;

// console.log(numbers.find(findDivisibleBy3And5));

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = (nome) => nome.length === 5;

// console.log(names.find(findNameWithFiveLetters));

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = () => 
//   names.find((element) => 
//     element.length === 5
//   )

// console.log(findNameWithFiveLetters());

// const musicas = [
//   { id: '31031685', title: 'Partita in C moll BWV 997' },
//   { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//   { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// ]

// const findMusic = (id) => {
//   let resp = musicas.find((element) => {
//    return element.id === id
//   })
//   if (resp === undefined) {
//     return `${id} não encontrada`
//   }
//   return resp;
// }
// console.log(findMusic('31031685'))

// const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

// console.log(verifyFirstLetter('J', listNames)); 
// console.log(verifyFirstLetter('x', listNames)); 

// const grades = {
//   portugues: 'Aprovado',
//   matematica: 'Reprovado',
//   ingles: 'Aprovado',
// };

// const verifyGrades = (studentGrades) => (
//   Object.values(studentGrades).every((grade) => grade === 'Aprovado')
// );

// console.log(verifyGrades(grades));

// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//  return arr.some((arrayName) => arrayName === name);
// }

// console.log(hasName(names, 'Ana'))

// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

// const verifyAges = (arr, minimumAge) => {
//   return arr.every((pessoa) => pessoa.age >= minimumAge);
// }

// console.log(verifyAges(people, 18));

// var stringArray = ['Blue', 'Humpback', 'Beluga'];
// var numericStringArray = ['80', '9', '700'];
// var numberArray = [40, 1, 5, 200];
// var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

// function compararNumeros(a, b) {
//   return a - b;
// }

// console.log('stringArray:', stringArray.join());
// console.log('Ordenada:', stringArray.sort());

// console.log('novoArray:', numberArray.join());
// console.log('Ordenada sem função de comparação:', numberArray.sort());
// console.log('Ordenada com compararNumeros:', numberArray.sort(compararNumeros));

// console.log('numericStringArray:', numericStringArray.join());
// console.log('Ordenada sem função de comparação:', numericStringArray.sort());
// console.log('Ordenada com compararNumeros:', numericStringArray.sort(compararNumeros));

// console.log('mixedNumericArray:', mixedNumericArray.join());
// console.log('Ordenada sem função de comparação:', mixedNumericArray.sort());
// console.log('Ordenada com compararNumeros:', mixedNumericArray.sort(compararNumeros));

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const ordernarNumero = (a,b) => a.age - b.age;
people.sort(ordernarNumero)
  // let arm = people[0].age;
  // console.log(arm);
  

console.log(people);
