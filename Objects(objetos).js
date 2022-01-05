var miAuto = {
    //Propiedades
    marca: "Toyota", 
    modelo: "Corolla",
    annio: 2020

};

//Acceder a los valores de un objeto con . o se puede utilizar ?.
miAuto.marca
miAuto.annio
 //?. permite leer el valor de una propiedad ubicada dentro de una cadena de objetos conectados sin tener que validar expresamente que cada referenica en la cadena sea válida
//// Metodos (funciones como valor del objeto)

var miAuto = {
    //Propiedades
    marca: "Toyota", 
    modelo: "Corolla",
    annio: 2020,
    destalleDelAuto: function(){ // Metodos que son funciones o capacidades que tiene el objeto. 
        console.log(`Auto ${this.modelo} ${this.annio}`) //this es miAuto.modelo -- this hace referencia su padre(miAuto) this hace referencia la objeto
        //this es una variable que hace referencia al objeto
        // this se refiere al obejto global. 
        // this como referencia a miAuto.modelo 
        // this como referencia a miAuto.annio
    }
};

miAuto.destalleDelAuto();

//?.  Encadenamiento opcional (
