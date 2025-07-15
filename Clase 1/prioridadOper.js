//prioridad de operadores en JavaScript
// En JavaScript, los operadores tienen una prioridad que determina el orden en que se evalúan en una expresión.
// Aquí hay una lista de los operadores en orden de prioridad, desde el más alto al más bajo:
// 1. Paréntesis: () - Se utilizan para agrupar expresiones y forzar un orden de evaluación específico.
// 2. Exponenciación: ** - Eleva un número a la potencia de otro.
// 3. Negación lógica: ! - Invierte el valor booleano de una expresión                              
// 4. Multiplicación, división y módulo: *, /, % - Realizan operaciones aritméticas básicas.
// 5. Suma y resta: +, - - Realizan operaciones de suma y
//   resta.
// 6. Desplazamiento a la izquierda y a la derecha: <<, >>
// 7. Comparación: <, <=, >, >= - Compara dos valores y devuelve un booleano.
// 8. Igualdad: ==, !=, ===, !== - Compara dos valores para igualdad o desigualdad, considerando o no el tipo.
// 9. Bitwise AND: & - Realiza una operación AND a nivel de bits.
// 10. Bitwise XOR: ^ - Realiza una operación XOR a nivel de bits.
// 11. Bitwise OR: | - Realiza una operación OR a nivel de bits.
// 12. Lógica AND: && - Devuelve true si ambas expresiones son verdaderas.
// 13. Lógica OR: || - Devuelve true si al menos una de las expresiones es verdadera.
// 14. Asignación: =, +=, -=, *=, /=, %= - Asigna un valor a una variable o realiza una operación y asigna el resultado.
// 15. Coma: , - Se utiliza para separar expresiones y evaluar varias a la vez, devolviendo el valor de la última expresión.
// 16. Operadores ternarios: ? : - Permite evaluar una condición y devolver uno de dos valores según el resultado.

// Ejemplo de uso de operadores con diferentes prioridades
let a = 10;     
let b = 5;
let c = 2;  
let resultado = (a + b) * c; // Los paréntesis tienen la mayor prioridad
console.log("Resultado de (a + b) * c:", resultado); // 30
let resultado2 = a + b * c; // La multiplicación tiene mayor prioridad que la suma
console.log("Resultado de a + b * c:", resultado2); // 20
let resultado3 = a > b && b < c; // La comparación se evalúa antes que la lógica
console.log("Resultado de a > b && b < c:", resultado3); // false

// Ejemplo de uso de operadores lógicos
let x = true;       
let y = false;
let resultadoLogico = x && y; // AND lógico
console.log("Resultado de x && y:", resultadoLogico); // false

// Ejemplo de uso de operadores de asignación
let z = 10;
z += 5; // Equivalente a z = z + 5
console.log("Resultado de z += 5:", z); // 15
