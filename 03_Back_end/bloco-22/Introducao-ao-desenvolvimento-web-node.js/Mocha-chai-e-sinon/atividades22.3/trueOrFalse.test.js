const { trueOrFalse } = require("./trueOrFalse");
const { expect } = require("chai");

describe("Testando função de positivo, negativo, neutro", () => {
  describe("retorna positivo", () => {
    it("numero maior que zero", () => {
      const func = trueOrFalse(2);

      expect(func).to.be.equal("positivo");
    });
  });

  describe("retorna negativo", () => {
    it("numero menor que zero", () => {
      const func = trueOrFalse(-2);

      expect(func).to.be.equal("negativo");
    });
  });

  describe("retorna neutro", () => {
    it("numero igual a zero", () => {
      const func = trueOrFalse(0);

      expect(func).to.be.equal("neutro");
    });
  });

  describe("retorna mensagem de aviso", () => {
    it("caso o valor passado não seja um numero", () => {
      const func = trueOrFalse('olá');

      expect(func).to.be.equal("o valor deve ser um número");
    });
  });
});
