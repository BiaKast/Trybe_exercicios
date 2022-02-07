/* let player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
};
console.log(
  "A jogadora " + player.name + " " + player.lastName + " tem " + player.age + ' anos de idade'
); */

//2
/* let player = {
    name: "Marta",
    lastName: "Silva",
    age: 34,
    medals: {
      golden: 2,
      silver: 3,
    },
};
player. bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]
player. fullName = 'Marta Silva';

console.log('A jogadora ' + player.fullName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes');

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');
 */

/* let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};
for (let index in names) {
    console.log('Olá ' + names[index])
} */ 
//Olá João
//Olá Maria
//Olá Jorge

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  for (let keyValor in car) {
      console.log(keyValor + ': ' + car[keyValor]);
  }