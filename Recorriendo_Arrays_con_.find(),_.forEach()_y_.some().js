///// Metodo find: Nos permite buscar algun elemento dentro del array
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

var encuentraArticulo = articulos.find(function(articulo){ ///parametro articulo  que vaya find (buscar un articulo)
    return articulo.nombre === "Bici"; //Palabara que quiero que el articulo busque (regresame de tus articulos el .nombre que se estrictamente igual a Bici )
    // si tiene un articulo que se igual a Bici regresamelo si no no me regreses nada 
});

//// Metodo forEach: No genera un nuevo array simplemente realiza el filtrado 
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

articulos.forEach(function(articulo){
    console.log(articulo.nombre); //imprime los articulos nombre
});

////// Metodo some: Solo Regresa una validacion de verdadero o falso de los articulos que cumplan esa validadicion Genera un nuevo array 
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

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;//true (si existen articulos del costo que sean menor o igual 700 )
});


