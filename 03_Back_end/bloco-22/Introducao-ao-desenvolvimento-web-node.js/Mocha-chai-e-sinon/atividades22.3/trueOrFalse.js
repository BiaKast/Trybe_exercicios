const trueOrFalse = (value) => {
  if (value > 0) {
    return 'positivo';
  } else if (value < 0) {
    return 'negativo';
  } else if (value === 0) {
    return 'neutro';
  } else {
    return "o valor deve ser um número"
  }
}

module.exports = { trueOrFalse };