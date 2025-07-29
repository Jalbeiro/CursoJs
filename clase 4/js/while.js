// ingresar una respuesta si la respuesta es 1 ejecutar el ciclo while, de lo contrario finalizar el programa
let respuesta = parseInt(prompt("Ingrese 1 para continuar o cualquier otro número para salir:"));
while (respuesta === 1) {
    console.log(object`Usted ha ingresado: ${respuesta}`);
    respuesta = parseInt(prompt("Ingrese 1 para continuar o cualquier otro número para salir:"));
}
console.log("Programa finalizado.");


// user = "Paco"; pasw = 1234 crear un ciclo while que permita ingresar un usuario y contraseña, si el usuario es correcto y la contraseña es correcta mostrar un mensaje de bienvenida, de lo contrario mostrar un mensaje de error colocar un contador que permita ingresar 3 veces el usuario y contraseña
let user = "Paco";
let pasw = 1234;    
let intentos = 0;
let usuarioIngresado, contrasenaIngresada;
while (intentos < 3) {
    usuarioIngresado = prompt("Ingrese su usuario:");
    contrasenaIngresada = parseInt(prompt("Ingrese su contraseña:"));
    
    if (usuarioIngresado === user && contrasenaIngresada === pasw) {
        console.log("¡Bienvenido!");
        break; // Salir del ciclo si las credenciales son correctas
    } else {
        console.log("Usuario o contraseña incorrectos. Intente nuevamente.");
        intentos++;
    }
}