///// Metodo filter: filtarar cosas especificasde nuestro Array genera objetos
var articulos = [
    ///para poder abrir un objeto ocupamos las llavas
    {nombre: "Bici", costo: 3000},
    {nombre: "TV", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 2500},
    {nombre: "Audifonos", costo: 1700},
];

// genere un nuevo array de solo los articulos que cumplieron la validacion que esta dentro de la funcion
var articulosFiltrados = articulos.filter(function(articulo){ ///parametro articulo  que vaya filtrando
 return articulo.costo <= 500;
});
 

////Opicon 2 filter

var articulos = [
    ///para poder abrir un objeto ocupamos las llavas
    {nombre: "Bici", costo: 3000},
    {nombre: "TV", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 2500},
    {nombre: "Audifonos", costo: 1700},
];

function menoresA500 (articulo){
    return articulo.costo <= 500;
}
var articulosFiltrados = articulos.filter(menoresA500);
 
//Metodo Map: mapear todo el contenido del array 

var articulos = [
    ///para poder abrir un objeto ocupamos las llavas
    {nombre: "Bici", costo: 3000},
    {nombre: "TV", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 2500},
    {nombre: "Audifonos", costo: 1700},
];

var nombreArticulos = articulos.map(function(articulo){//parametro articulo  que vaya a mapear
     return articulo.nombre;  // regrese de todos los articulos el nombre de los articulos
});

//metodo sort(): Ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. arr.sort([compareFunction])
var frutas = ['guindas', 'manzanas', 'bananas'];
frutas.sort(); // ['bananas', 'guindas', 'manzanas']

var puntos = [1, 10, 2, 21];
puntos.sort(); // [1, 10, 2, 21]

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers); // [1, 2, 3, 4. 5]

