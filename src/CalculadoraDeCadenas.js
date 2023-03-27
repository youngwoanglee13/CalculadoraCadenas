class CalculadoraDeCadenas{
    calcular(cadena){
        if(cadena != ""){
            if(cadena.length == 1){
                return parseInt(cadena);
            }else{
                return parseInt(cadena[0]) + parseInt(cadena[2]);
            }
        }
        return 0;
    }
}
export default CalculadoraDeCadenas;