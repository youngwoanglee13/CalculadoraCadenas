import CalculadoraDeCadenas from "./CalculadoraDeCadenas.js";

describe("Calcular", () => {
  it("deberia devolver 0 al enviar una cadena vacia", () => {
    const calculadora = new CalculadoraDeCadenas();
    expect(calculadora.calcular("")).toEqual(0);
  });
});
