let colores = ["rojo", "azul", "verde", "amarillo", "morado"];
console.log("Arreglo inicial de colores:", colores);

console.log("Primer color:", colores[0]);
console.log("Último color:", colores[colores.length - 1]);

console.log("Cantidad de colores:", colores.length);

colores.push("naranja");
console.log("Después de agregar un color al final:", colores);

colores.unshift("blanco");
console.log("Después de agregar un color al inicio:", colores);

colores.pop();
console.log("Después de eliminar el último color:", colores);

colores.shift();
console.log("Después de eliminar el primer color:", colores);

colores[1] = "celeste";
console.log("Después de reemplazar el segundo color:", colores);

console.log("Recorriendo el arreglo:");
for (let i = 0; i < colores.length; i++) {
  console.log(colores[i]);
}

let nuevosColores = [];
for (let i = 1; i <= 3; i++) {
  let color = prompt("Ingresá el color #" + i + ":");
  nuevosColores.push(color);
}
console.log("Nuevos colores ingresados:", nuevosColores);