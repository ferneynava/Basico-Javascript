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

/// Metodo reduce ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

 const sumaLista = lista.reduce(//Ejecuta una funcion reductora sobre cada elemento de un array, Suma, multiplica, resta o divide cada uno de los elementos. 
                                  //devolviendo como resultado un unico valor. Eje: Reduce suma cada uno de los elementos, recibe el primer elemento y lo sumamos con el segundo luego el segundo con el tercero 
        function (valorAcumulado = 0, nuevoElemento ){
            return valorAcumulado + nuevoElemento;
        }
    );
//La función reductora(reduce) recibe cuatro argumentos:

//Acumulador (acc)
//Valor Actual (cur)
//Índice Actual (idx)
//Array (src)

const numbers = [2,4,6,8,10];

// acc = Acumulador (Acumula cada operación que se realice se almacena en la variable acc) Valor Anterior 
// item = Elemento Actual (Elemento actual que esta haciendo recorrido por la función Reduce)
// index = Indice del elemento actual 
// Arreglo que estamos iterando 
numbers.reduce((acc, item, index, arr) => {  
    console.log(acc, item); 
// acc=2 item=4
// acc=6 item=6
// acc=12 item=8
// acc=20 item=10
    return acc + item;
})

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

// validar (verdadero o falso)

array.includes(); // Nos permite validar (verdadero o falso) si un elemento ha sido almacenado en el array. 

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true


//splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
     //Agrega elementos  
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2, 0, 'drum');

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed

    // Elimina elementos y esos elementos eliminados se guardan en un array
var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);

// removed is ["mandarin"]
// myFish is ["angel", "clown", "drum", "sturgeon"]

//flat es un metodo que lo que hace es aplanar un array 

const flat = [1, 2, 3, [4, 5,] 6].flat(); 
console.log(flat); // resultado consola [1, 2, 3, 4, 5, 6]  // El array que esta dentro del array es eliminar el array anidado e incorporar los elementos al array superior. ( Solo elimina un nivel del array  si queremos eliminar mas niveles del array anidados debemos colocar el numero )
//var newArray = arr.flat([depth]);
//depth (Optional): El nivel de profundidad que especifica qué tan profunda debe aplanarse una estructura de matriz anidada. El valor predeterminado es 1.


//El método flatMap() primero mapea cada elemento usando una función de mapeo, luego aplana el resultado en una nueva matriz.

//El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
const fruits = [
  { id: 1, name: 'Lime', quantity: 5 },
  { id: 2, name: 'Apple', quantity: 30 },
  { id: 3, name: 'Pineapple', quantity: 3 },
];

const count = fruits.some((fruit) => fruit.quantity > 5);


