var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes (estudiante){
    console.log(`Hola ${estudiante}`);
}

while(estudiantes.length > 0){ // mientras la longitud del array sea menor a cero lo que este dentro del while va a pasar
    console.log(estudiantes);
    var estudiante = estudiantes.shift(); // Cada se cumpla un loop va sacando un array 
    saludarEstudiantes(estudiante);
}

//do-while
do {
    saludarEstudiante(estudiantes[i]);
    i++;
} while (i < estudiantes.length)
