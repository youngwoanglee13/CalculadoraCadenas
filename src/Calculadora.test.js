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
  it("Toma en cuenta cadena con varios números", () => {
    const calculadora = new CalculadoraDeCadenas();
    expect(calculadora.calcular("1,2,3,4")).toEqual(10);
  });
  it("Ahora el guion es un delimitador", () => {
    const calculadora = new CalculadoraDeCadenas();
    expect(calculadora.calcular("1-2-3-4")).toEqual(10);
  });
  it("Ahora se acepta un delimitador personalizado", () => {
    const calculadora = new CalculadoraDeCadenas();
    expect(calculadora.calcular("//[;]1;2;3;4-1,9")).toEqual(20);
  });
  it("Ahora se ignoran los numeros mayores a 1000", () => {
    const calculadora = new CalculadoraDeCadenas();
    expect(calculadora.calcular("1001,2")).toEqual(2);
  });


});
