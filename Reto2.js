var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";
var validacion;

function juego (user,compu){
    if (user != compu){
       validacion = true;
    }
    
    switch(validacion){
        case user == compu:
            console.log("Empate");
        break;
        case user === op1 && compu === op3: 
            console.log("Gano el usuario");
            break;
        case user === op2 && compu === op1:
             console.log("Gano el usuario");
             break;
        case user === op3 && compu === op2:
             console.log("Gano el usuario");
             break;
        default:
            console.log("Gano el pc");
    }
}

juego(op2,op1);