// Ejercicio 1: Pedir un número mayor que 10
let numero;
do {
    numero = parseInt(prompt("Ingresa un número mayor que 10:"));
} while (numero <= 10);
console.log("¡Correcto! Ingresaste:", numero);

// Ejercicio 2: Imprimir números del 1 al 5
let contador = 1;
do {
    console.log(contador);
    contador++;
} while (contador <= 5);        

//crear el juego de adivinar un número utilizando do while
let numeroSecreto = Math.floor(Math.random() * 100) + 1; // Número aleatorio entre 1 y 100
let intento;        
do {
    intento = parseInt(prompt("Adivina el número secreto (entre 1 y 100):"));
    if (intento < numeroSecreto) {
        console.log("Demasiado bajo. Intenta de nuevo.");
    } else if (intento > numeroSecreto) {
        console.log("Demasiado alto. Intenta de nuevo.");
    } else {
        console.log("¡Felicidades! Adivinaste el número secreto:", numeroSecreto);
    }
}