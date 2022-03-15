const sum = (...numeros) =>
  numeros.reduce((valorInicial, valorAtual) => valorInicial + valorAtual);

console.log(sum(2, 5, 8, 10));
