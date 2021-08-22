var miAuto = {
    //Propiedades
    marca: "Toyota", 
    modelo: "Corolla",
    annio: 2020

};

//Acceder a los valores de un objeto
miAuto.marca
miAuto.annio

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
