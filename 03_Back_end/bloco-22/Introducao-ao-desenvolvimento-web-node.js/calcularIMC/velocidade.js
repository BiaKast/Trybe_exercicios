const calculadoraV =  (distancia, tempo) => {
  const valor = distancia / tempo
  return valor.toFixed(2);
}

module.exports = { calculadoraV };