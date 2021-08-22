//Ejemplos de Coerción:

//Coerción implicita 
var a = 4 + "7";//Convierte a 4 en un string y lo concatena con el "7", por 
                //esto regresa un string de calor "47"

var b = 4 * "7";// Convierte al "7" en un número y realiza la operación, por
               // esto devuelve 28

//Coerción explicita 

var a = 20;
var b = a + ""; //Aqui concatenamos para convertir la variable a string (coerción implicita)

console.log(b);

var c = String(a);//Aqui obligamos a la variable a convertirse en string(coerción explícita)

console.log(c);

var d = Number(c); //Aqui obligamos a la variable a convertirse en número (coerción explícita)