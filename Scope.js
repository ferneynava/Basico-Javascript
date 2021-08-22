//El alcance (scope) de una variable pueder ser:
//1-Global:

var miNombre = "Ferney";

//2- Local 
function nombre(){
    var miApellido = "Nava";
    console.log(miNombre + " " + miApellido);
}

nombre(); //Devuelve "Ferney Nava"

//En todo el código podemos utilizar la variable global.
//Las variables locales sólo pueden ser accedidas dentro de la función en la que fueron declaradas. 
