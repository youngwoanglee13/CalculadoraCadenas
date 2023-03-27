class CalculadoraDeCadenas{
    calcular(cadena){
        let resultado = 0;
        let numero="";
        for (let i = 0; i < cadena.length; i++) {
            numero += cadena[i];
            if(cadena[i] == "," || i == cadena.length-1 || cadena[i] == "-"){
                resultado += parseInt(numero);
                numero = "";
            }  
        }
        return resultado;
    }
}
export default CalculadoraDeCadenas;