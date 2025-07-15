console.log("Bienvenido a la clase 1 de JavaScript");
console.log("Hoy aprenderemos sobre variables y tipos de datos");       
console.log("Vamos a empezar con los string, que son cadenas de texto y se definen con comillas simples o dobles");
console.log("Por ejemplo: 'Hola, mundo' o \"Hola, mundo\" son strings");
console.log("También tenemos los números, que pueden ser enteros o decimales, como 42 o 3.14");
console.log("Los booleanos son valores lógicos, que pueden ser true o false");  
console.log("Además, existen los arrays, que son listas de elementos, como [1, 2, 3] o ['a', 'b', 'c']");
console.log("Los objetos son colecciones de propiedades, como {nombre: 'Juan', edad: 30}");
console.log("Finalmente, tenemos los null y undefined, que representan la ausencia de valor");                  
console.log("¡Eso es todo por hoy! Practiquen creando sus propias variables y tipos de datos.");
console.log("Recuerden que la práctica es clave para aprender JavaScript"); 
console.log("¡Nos vemos en la próxima clase!");
console.log("No olviden revisar la documentación oficial de JavaScript para más información");              
console.log("Pueden encontrar recursos útiles en MDN Web Docs y W3Schools");
console.log("¡Hasta luego!");   
console.log("Si tienen preguntas, no duden en preguntar en el foro del curso");
console.log("Espero que hayan disfrutado de esta clase introductoria");             
console.log("¡Sigan practicando y explorando el mundo de JavaScript!");
console.log("Recuerden que la programación es un proceso de aprendizaje continuo");

console.log("iniciamos con lo tipos de string y las formas de concatenar");
console.log("Para concatenar podemos utilizar varios métodos, + , o con comillas invertidas");
console.log("-----------------------------------------------------------------------------")
console.log("Ejemplo de concatenación con + m ` :");
let nameEst = "Albeiro";
let module = "JavaScript";
console.log("Hola, " + nameEst + ", bienvenido al módulo de " + module + "!");
console.log("Hola, " , nameEst + ", bienvenido al módulo de " , module , "!");
console.log(`Hola ${nameEst},  bienvenido al módulo de ${module}  "!"`);
console.log("-----------------------------------------------------------------------------")

console.log("metodos mas utilizados para el manejo de strings");
console.log("1. length: Devuelve la longitud de la cadena");        
console.log(`La cantidad de caracteres en el nombre es: ${nameEst.length}`);
console.log("2. toUpperCase(): Convierte la cadena a mayúsculas");          
console.log(`El nombre en mayúsculas es: ${nameEst.toUpperCase()}`);
console.log("3. toLowerCase(): Convierte la cadena a minúsculas");  
console.log(`El nombre en minúsculas es: ${nameEst.toLowerCase()}`);
console.log("4. indexOf(): Devuelve la posición de la primera aparición de un carácter o subcadena");
console.log(`La posición de la letra 'b' en el nombre es: ${nameEst.indexOf('b')}`);
console.log("5. substring(): Extrae una parte de la cadena entre dos índices");
console.log(`Una subcadena del nombre es: ${nameEst.substring(0, 4)}`);
console.log("6. replace(): Reemplaza una parte de la cadena por otra");         
console.log(`Reemplazando 'Albeiro' por 'Juan': ${nameEst.replace('Albeiro', 'Juan')}`);
console.log("7. split(): Divide la cadena en un array de subcadenas");      
console.log(`Dividiendo el nombre en caracteres: ${nameEst.split('')}`);
console.log("8. trim(): Elimina los espacios en blanco al inicio y al final de la cadena");
console.log(`El nombre sin espacios es: ${nameEst.trim()}`);
