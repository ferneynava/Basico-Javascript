
function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
    //this es una variable que hace referencia al objeto(auto)
}

var autos = [];
for(var i = 0; i < 30; i++){
    var marca = prompt("Ingrese la marca del auto");
    var modelo = prompt("Ingrese modelo del auto");
    var annio = prompt("Ingrese el año del auto");
    autos.push(new auto(marca, modelo, annio));
}

for (var i= 0; i < autos.length; i++){
    console.log(autos[i]);
}
