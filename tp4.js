// Suma 3 a cada elemento del arreglo
let numeros1 = [4,10,3,9,13];
for (let indice = 0; indice < numeros1.length; indice++) {
    numeros1[indice] = numeros1[indice] + 3;
}
console.log(numeros1); // El resultado final sera: 7, 13, 6, 12, 16

// Reemplaza cada elemento con el índice + 3
let numeros2 = [4,10,3,9,13];
for (let indice = 0; indice < numeros2.length; indice++) {
    numeros2[indice] = indice + 3;
}
console.log(numeros2); // El resultado final sera: 3, 4, 5, 6, 7 por que se suma 3 al indice (indice 0+3, indice 1+3,etc)

// Multiplica por 5 todos los elementos menos el último
let numeros3 = [4,10,3,9,13];
for (let indice = 0; indice < numeros3.length - 1; indice++) {
    numeros3[indice] = numeros3[indice] * 5;
}
console.log(numeros3); // Esto quedara asi: 20, 50, 15, 45, 13

// Muestra distintos mensajes. Si el estudiante es Raul, la consola mostrara estas aprobado. Si los estudiantes son Ramiro, Benja, Juan y Marti, la consola mostrara Estas aprobaado/a
let estudiantes = ['Ramiro', 'Juan', 'Marti', 'Benja', 'Raul'];
for (let indice = 0; indice < estudiantes.length; indice++) {
    if(estudiantes[indice] == 'Raul') {
        console.log('Estas aprobado');
    } else {
        console.log('Estas aprobado/a');
    }
}
// Resultado en consola:
// Estas aprobado/a
// Estas aprobado/a
// Estas aprobado/a
// Estas aprobado/a
// Estas aprobado