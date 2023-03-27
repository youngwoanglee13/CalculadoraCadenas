class CalculadoraDeCadenas{
    calcular(cadena){
        let resultado = 0;
        let numero="";
        let delimitadorPersonalizado = "-";
        if(cadena[0] == "/" && cadena[1] == "/" && cadena[2] == "[" && cadena[4] == "]") {
            delimitadorPersonalizado = cadena[3];
            cadena = cadena.substring(5);
        }
        for (let i = 0; i < cadena.length; i++) {
            numero += cadena[i];
            if(cadena[i] == "," || i == cadena.length-1 || cadena[i] == "-" || cadena[i] == delimitadorPersonalizado){
                if(parseInt(numero)<=1000){
                    resultado +=parseInt(numero) ;
                }
                numero = "";
            }  
        }
        return resultado;
    }
}
export default CalculadoraDeCadenas;