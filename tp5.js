/*
Ejercicio 1
Se crea un arreglo "frutas" con varias frutas, y luego se cuenta cuántas veces aparece la palabra 'Manzana' en el arreglo.
El resultado se guarda en la variable "contador".
Al final se muestra por consola la cantidad total de elementos en el arreglo (frutas.length).
*/

let frutas = ['Manzana','Banana','Pera','Manzana','Mango','Manzana'];
let contador = 0;
for (let j = 0; j < frutas.length; j++) {
  if(frutas[j] == 'Manzana') {
    contador = contador + 1;
  }
}
console.log('La cantidad de Manzanas es ' + contador);
console.log('El total de frutas es ' + frutas.length);
//(hay 3 'Manzana'), el arreglo no se modifica.

/*
Ejercicio 2
Se crea un arreglo "numeros" con distintos valores.
Se recorre el arreglo con un bucle, y en cada interacción se muestra por consola el valor del elemento actual.
*/

let numeros = [10, 20, 30, 40];
for (let i = 0; i < numeros.length; i++) {
  console.log("El número es " + numeros[i]);
}

/*
Ejercicio 3:
Se crea un arreglo "numeros" y se inicia la variable "suma" en cero.
El bucle recorre cada elemento del arreglo y va sumando cada uno a la variable "suma".
Al finalizar el bucle "suma" tiene el total.
*/

let numeros2 = [5, 8, 12, 20, 33];
let suma = 0;
for (let i = 0; i < numeros2.length; i++) {
  suma += numeros2[i];
}
console.log("La suma total es " + suma);
// Mensaje en consola: La suma total es 78

/*
Ejercicio 4
Se crea un arreglo "nombres".
Se recorre con un bucle y cada nombre se convierte a mayúscula usando el método toUpperCase().
El arreglo queda completamente en mayúsculas al finalizar.
*/

let nombres = ["lucas", "ana", "maría"];
for (let i = 0; i < nombres.length; i++) {
  nombres[i] = nombres[i].toUpperCase();
}
console.log(nombres);
// El arreglo queda como ["LUCAS", "ANA", "MARÍA"]