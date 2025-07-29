//ingresar un nurmero e imprimir la tabla de multiplicar iterar 10 con for
let numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));
console.log(`Tabla de multiplicar del ${numero}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
// Fin del código


// ingresar N cantidad de numeros e inprimir el siguente informe: Cuantos positivos, cuantos negativos, cuantos ceros, ademas sumar los positivos, sumar los negativos, contar los pares e impares
let cantidad = parseInt(prompt("¿Cuántos números desea ingresar?"));    
let positivos = 0, negativos = 0, ceros = 0;
let sumaPositivos = 0, sumaNegativos = 0, pares = 0, impares = 0;
for (let i = 0; i < cantidad; i++) {    
    let numero = parseInt(prompt(`Ingrese el número ${i + 1}:`));
    if (numero > 0) {
        positivos++;
        sumaPositivos += numero;
            
        } else if (numero < 0) {
        negativos++;
        sumaNegativos += numero;
        
    } else {
        ceros++;
    }
}
console.log("Informe de numeros ingresados:");
console.log(`Cantidad de números positivos: ${positivos}`);     
console.log(`Cantidad de números negativos: ${negativos}`);
console.log(`Cantidad de ceros: ${ceros}`);
console.log(`Suma de números positivos: ${sumaPositivos}`);
console.log(`Suma de números negativos: ${sumaNegativos}`);



