var numero = 1;

switch (numero){ // con true todos los casos van a pasar 
    case 1:
        console.log("Soy uno!");
        break; //no pasa a los siguientes casos (termina) y sale del switch
    case 10:
        console.log("Soy un Diez");
        break;
    case 100:
        console.log("Soy un Cien");
        break;
    default: //en el caso de que los anteriores casos no se cumplan entra al default
        console.log("No soy nada");
    }