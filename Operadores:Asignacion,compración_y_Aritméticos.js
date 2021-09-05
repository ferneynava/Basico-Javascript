//Operadores Binarios 
3 + 2; 
50 - 10;
10 * 20; 
20 / 2;

//Tambien sirve para concatenar 
//String:
"Ferney" + "Nava";
//operador de negación:
!true; //devolverá false;
!false; //devolverá true
//Operador de asignación
var a = 1; //= asignando el valor a la variable 

//operador de comparadión: 
3 == "3"; // va a comparar el valor mas no el tipo 
3 === "3"; //Compara que el valor y el tipo sean iguales
5 > 3; // 5 es mayor que 3 es true
5 < 3; // 5 es menor que 3 es false

5 >= 6; //5 es mayor o igual que 6 es false
5 <= 6; //5 es menor o igual que 6 es true

a && b; // va a validar que a y b son verdad se cumple esa condición

a || b; // va a validar que solo a o b sea verdad para que se cumpla esa condición

//operador de incremento: 
var edad = 40;
edad++; // el valor de edad se va incrementar en uno
edad += 2; //el valor de dad va incrementar en dos. 

//operador de asignación de anulación lógica
null ?? 5 // => 5 // ?? Operador coalescente nulo (??) Es un operador lógico que devuelve su operando del lado 
                  // derecho cuando su operando del lado izquiero es null o undefined, y de lo contrario devuelve 
                  // su operador del lado izquierdo. 
const nullValue = null;
const emptyText = ""; // falsy
const someNumber = 42;

const valA = nullValue ?? "default for A";
const valB = emptyText ?? "default for B";
const valC = someNumber ?? 0;

console.log(valA); // "default for A"
console.log(valB); // "" (as the empty string is not null or undefined)
console.log(valC); // 42


null ??= 5 // => 5 // ??= Es un operador lógico que devuelve su operando del lado 
                   // derecho cuando su operando del lado izquiero es null o undefined
