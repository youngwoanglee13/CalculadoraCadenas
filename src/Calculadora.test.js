import CalculadoraDeCadenas from "./CalculadoraDeCadenas.js";

describe("Calcular", () => {
  it("deberia devolver 0 al enviar una cadena vacia", () => {
    const calculadora = new CalculadoraDeCadenas();
    expect(calculadora.calcular("")).toEqual(0);
  });
  it("Toma en encuenta un solo numero y devuelve el mismo numero", () => {
    const calculadora = new CalculadoraDeCadenas();
    expect(calculadora.calcular("3")).toEqual(3);
  });
  it("Toma en cuenta una cadena con dos numeros", () => {
    const calculadora = new CalculadoraDeCadenas();
    expect(calculadora.calcular("2,3")).toEqual(5);
  });
  
});
