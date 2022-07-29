const fs = require('fs').promises;

const criarEEscrever = (arquivo, conteudo) => {
  fs.writeFile(arquivo, conteudo);

  return 'ok';
}

module.exports = { criarEEscrever };