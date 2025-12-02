let animales = ["perro", "gato", "conejo", "loro"];
for (let i = 0; i < animales.length; i++) {
  console.log(animales[i]);
}

for (let i = 0; i < animales.length; i += 2) {
  console.log(animales[i]);
}

let numeros = [4, 7, 2, 9, 5];
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}
console.log("La suma es", suma);

let datos = [3, 6, 1, 8];
let multiplicados = [];
for (let i = 0; i < datos.length; i++) {
  multiplicados.push(datos[i] * 2);
}
console.log(multiplicados);

let alumnos = ["Sofía", "Carlos", "Bruno", "Lucía", "Carla"];
let nombreBuscado = prompt("Ingresá un nombre para buscar:");
if (alumnos.includes(nombreBuscado)) {
  console.log("Se encontró el nombre:", nombreBuscado);
} else {
  console.log("No se encontró el nombre:", nombreBuscado);
}

let valores = [5, 0, 8, 0, 2];
for (let i = 0; i < valores.length; i++) {
  if (valores[i] === 0) {
    valores[i] = 100;
  }
}
console.log(valores);

let notas = [8, 7, 9, 10, 6];
let sumaNotas = 0;
for (let i = 0; i < notas.length; i++) {
  sumaNotas += notas[i];
}
let promedio = sumaNotas / notas.length;
console.log("El promedio es", promedio);