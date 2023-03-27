class CalculadoraDeCadenas{
    calcular(cadena){
        this.delimitadorPersonalizado = "-";
        if(cadena[0] == "/" && cadena[1] == "/" && cadena[2] == "[" && cadena[4] == "]") {
            this.delimitadorPersonalizado = cadena[3];
            cadena = cadena.substring(5);
        }
        return this.sumar(cadena);
    }
    sumar(cadena){
        let resultado = 0;
        let numero="";
        for (let i = 0; i < cadena.length; i++) {
            numero += cadena[i];
            if(cadena[i] == "," || i == cadena.length-1 || cadena[i] == "-" || cadena[i] == this.delimitadorPersonalizado){
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