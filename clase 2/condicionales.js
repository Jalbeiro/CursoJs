//condicionales en javaScript
// uso del condicional if
let edad = 18;  
if (edad >= 18) {
    console.log("Eres mayor de edad.");
}       

else {
    console.log("Eres menor de edad.");
}   

// uso del condicional if-else
let temperatura = 30;   
if (temperatura > 25) {
    console.log("Hace calor.");
}   
else {
    console.log("Hace frío.");
}
// uso del condicional if-else if-else
let calificacion = 85;
if (calificacion >= 90) {   
    console.log("Excelente.");
}   
else if (calificacion >= 75) {
    console.log("Bueno.");
}   
else if (calificacion >= 60) {
    console.log("Regular.");
}   
else {
    console.log("Insuficiente.");
}
// uso del condicional switch
let dia = 3;    
switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Día inválido.");
}
// uso del operador ternario
let esMayorDeEdad = (edad >= 18) ? "Sí" : "No";
console.log("¿Eres mayor de edad?", esMayorDeEdad); // Sí
// uso del operador lógico AND
let tieneLicencia = true;
let puedeConducir = (edad >= 18) && tieneLicencia;
console.log("¿Puede conducir?", puedeConducir); // true
// uso del operador lógico OR
let tienePermiso = false;   
let puedeEntrar = (edad >= 18) || tienePermiso;
console.log("¿Puede entrar al evento?", puedeEntrar); // true
// uso del operador lógico NOT
let esEstudiante = false;
let noEsEstudiante = !esEstudiante; 
console.log("¿No es estudiante?", noEsEstudiante); // true  
// uso del operador de igualdad estricta
let numero = "5";
if (numero === 5) { 
    console.log("El número es igual a 5 (igualdad estricta).");
}
else {
    console.log("El número no es igual a 5 (igualdad estricta).");
}
// uso del operador de igualdad no estricta
let numero2 = "5";
if (numero2 == 5) { 
    console.log("El número es igual a 5 (igualdad no estricta).");
}
else {
    console.log("El número no es igual a 5 (igualdad no estricta).");
}
// uso del operador de desigualdad estricta
let numero3 = "5";  
if (numero3 !== 5) { 
    console.log("El número no es igual a 5 (desigualdad estricta).");
}   

else {
    console.log("El número es igual a 5 (desigualdad estricta).");
}   
// uso del operador de desigualdad no estricta
let numero4 = "5";
if (numero4 != 5) { 
    console.log("El número no es igual a 5 (desigualdad no estricta).");
}   
else {
    console.log("El número es igual a 5 (desigualdad no estricta).");
}   
// uso del operador de pertenencia  
let frutas = ["manzana", "banana", "naranja"];
if (frutas.includes("banana")) {
    console.log("La fruta está en la lista.");
}
else {
    console.log("La fruta no está en la lista.");
}
    