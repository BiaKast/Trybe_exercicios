const { criarEEscrever } = require("./criarEEscrever");
const { expect } = require("chai");
const fs = require("fs").promises;
const sinon = require('sinon')

const CONTEUDO_DO_ARQUIVO = 'como você vai ?'

describe("Testa a função que escreverá um conteúdo em um arquivo específico", () => {
  before(() => {
    sinon.stub(fs, "writeFile").returns(CONTEUDO_DO_ARQUIVO);
    sinon.stub(fs, "readFile").returns(CONTEUDO_DO_ARQUIVO);
  });

  after(() => {
    fs.writeFile.restore();
    fs.readFile.restore();
  });

  describe("testa se a função faz o que pede", () => {
    it("verifica se a função cria e escreve no arquivo", async () => {
      criarEEscrever("arquivo.txt", CONTEUDO_DO_ARQUIVO);
      const arquivo = await fs.readFile("./arquivo.txt", "utf-8");

      expect(arquivo).equal(CONTEUDO_DO_ARQUIVO);
    });

    it("verifica se a função retorna ok ao finalizar", () => {
      const func = criarEEscrever("arquivo.txt", "ela fez");

      expect(func).equal("ok");
    });
  });
});
