const aleatorio = () => {
  const numero = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
  return numero;
}

module.exports = { aleatorio };