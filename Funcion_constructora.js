function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
    //this es una variable que hace referencia al objeto(auto)
}

var AUTONuevo = new auto("Tesla", "Molde 3", 2020);  // new genera una nueva instancia de nuestra funcion constructora(genera un nuevo objeto con relación al templete auto)
                      //instancia generar un objeto que deriva de otro objeto.- 

var autoNuevo2 = new auto("Tesla", "Modelo X", 2018);
var autoNuevo3 = new auto("Totoya", "Corola", 2020);

///// segunda forma de construir una funcion constructora 
class auto{
    constructor(marca, modelo, annio){
        this.marca = marca;
        this.modelo = modelo;
        this.annio = annio;
    }
}

var AUTONuevo = new auto("Tesla", "Molde 3", 2020);