var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

////// for
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var i=0; i<estudiantes.length; i++){
   // console.log(estudiantes[i]);
   saludarEstudiantes(estudiantes[i]);
}

///// for of

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var estudiante of estudiantes){ /// LLamar cada estudiante del array estudiantes - of cada elemento - in cada pocision del elemento (0,1,2,3,4)
    saludarEstudiantes(estudiante); // cada elemento del array 
}