function daquiA2Anos(inserir) {
  for (let index = 0; index < inserir.length; index += 1) {
    if (index === 1) {
      inserir[index].innerText =
        "Espero que daqui a 2 anos eu possa estar trabalhando como dev e com uma boa vida, saúde e em harmonia.";
    }
  }
}
let texto = document.getElementsByTagName("p");
console.log(daquiA2Anos(texto));
