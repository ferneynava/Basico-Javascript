var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";



function juego (user,compu){
   if(user != compu){
      if(user === op1 && compu === op3){
         console.log("Gano el usuario");
        } else if(user === op2 && compu === op1){
         console.log("Gana el usuario");
        }else if(user === op3 && compu === op2){
         console.log("Gana el usuario");
        } else{
            console.log("Gano el pc");
        }
    }

    if(user == compu){
        console.log("Empate");
    }
}

juego(op2,op1);

