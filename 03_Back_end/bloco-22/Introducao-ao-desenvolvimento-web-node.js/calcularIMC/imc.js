const calculadora =  (peso, altura) => {
  const valor = peso / Math.pow(altura, 2)
  return valor.toFixed(2);
}

module.exports = { calculadora };