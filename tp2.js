let frutas = ["manzana", "banana", "naranja"];
frutas.push("pera");
frutas.unshift("kiwi");
frutas.pop();
frutas.shift();
console.log(frutas);

let nombres = ["Juan", "Sofía", "Lucas"];
console.log(nombres.length);
nombres.push("Marta");
nombres.push("Pedro");
console.log(nombres.length);

let numeros = [1, 5, 8, 3, 9];
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

let valores = [10, 5, 7, 2, 6];
let total = 0;
for (let i = 0; i < valores.length; i++) {
  total += valores[i];
}
console.log(total);

let palabras = [];
for (let i = 1; i <= 5; i++) {
  let palabra = prompt("Ingresá la palabra #" + i + ":");
  palabras.push(palabra);
}
console.log(palabras);