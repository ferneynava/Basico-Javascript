//Los Arrays es un tipo objeto, lsita de datos que va a guardar valores(numero, string, objetos...)

var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

console.log(frutas);

console.log(frutas.length); //conocer la longitud del array(cuantos elementos tiene el array) 

console.log(frutas[0]); //Manzanas acceder a un elemento determinado del array

////// Metodos ayudan a poder generar cosas en el Array (Modificar o mutar Array)
var masFrutas = frutas.push("Uvas"); // Agrega uno o mas dato (elementos) a la parte final del Array 
var ultimo = frutas.pop("Uvas"); //Elimina el ultimo dato del array

var nuevaLongitud = frutas.unshift("Uvas");//Agrega un dato a la parte inicial del array 
var borrarFruta = frutas.shift("Uvas"); //Elimina el primer dato del array
var posicion = frutas.indexOf("Cereza"); //Nos regala la posicion en el indice del dato indicado 


//.push() : nos permite agrgar uno o mas elementos al final de un array

let numArray = [1,2,3,4,5]

function nuwNum(){
    // Agrego elementos
    numArray.push(6,7);
    // Reviso el array que ahora tiene los numeros agregados 
    console.log(numArray);
}

nuwNum();
/// -- Ejemplos con strings 

let txtArray = ["Ana", "Juan", "Diego", "Lautaro"]

function addCharacters(){
    /// Agrego elementos
    txtArray.push("Chris", "Maria");
    /// Reviso el array que ahota tiene los numeros agregados
    console.log(txtArray);
}

addCharacters();

//.shift() eliminar el primer elemento de un array, es decir, elimina el elemento que este en el indice

let array = [1,2,3,4,5];
console.log(array);

// Aplicamos .shift()
let shiftArray = array.shift()
//revisamos. El output debe de ser [2,3,4,5]
console.log(array)

// .pop() eliminara el ultimo elemento de un array

let array = [1,2,3,4,5]
console.log(array)

//aplicamos .pop()
let shiftArray = array.pop()

//revisamos. EL output debe ser [1,2,3,4]
console.log(array)
