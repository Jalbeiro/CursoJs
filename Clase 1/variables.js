// js utiliza tres formas de declarar variables: var, let y const. Cada una tiene sus propias características y usos recomendados.
// Aquí hay una breve descripción de cada una:  
// 1. var: Se utiliza para declarar variables que pueden ser reasignadas y tienen un alcance global o de función.
// 2. let: Se utiliza para declarar variables que pueden ser reasignadas y tienen un alcance de bloque. 
// 3. const: Se utiliza para declarar variables que no pueden ser reasignadas y tienen un alcance de bloque.
// Es recomendable utilizar let y const en lugar de var para evitar problemas de alcance y reasign  ación de variables. 
// Además, es importante recordar que las variables en JavaScript son dinámicamente tipadas, lo que significa que pueden contener diferentes tipos de datos en diferentes momentos.
// Aquí hay un ejemplo de cómo declarar variables en JavaScript:
console.log("Bienvenido a la clase 1 de JavaScript");
console.log("Hoy aprenderemos sobre Tipos de declaración de variables en JavaScript:");
console.log("*** variables y tipos de datos ****");       
console.log("Vamos a empezar con los tipos de declaración de variables: var, let y const");
console.log("declarar variables con var")
var nombreVar = "Albeiro";
console.log(`La variable var se ha declarado como: ${nombreVar}`);  
console.log("declarar variables con let")
let nombreLet = "Albeiro";  
console.log("una variable declarada como var se puede declarar nuevamente con var");
var nombreVar = "Juan";
console.log("***********************************************************************")
console.log("Una variable declarada como let no se puede declarar nuevamente con let porque generaría un error  ");
console.log("declarar variables con const")
const nombreConst = "Albeiro";
console.log("***********************************************************************")
console.log("las variables declaradas con const no pueden ser reasignadas");
console.log("Si intentamos reasignar una variable const, obtendremos un error");
console.log("Por ejemplo, si intentamos hacer lo siguiente:");
