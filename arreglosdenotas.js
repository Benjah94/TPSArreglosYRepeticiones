let calificaciones = [
    {
        nombre: 'Benja',
        apellido: 'Reinhardt',
        examen1: [7, 5, 7]
    },
    {
        nombre: 'Anto',
        apellido: 'Lattandi',
        examen1: [5, 6, 5]
    },
    {
        nombre: 'Valentino',
        apellido: 'Mazzone',
        examen1: [8, 8, 9]
    },
    {
        nombre: 'Juana',
        apellido: 'Datri',
        examen1: [7, 4, 8]
    },
    {
        nombre: 'Alejo',
        apellido: 'Paglino',
        examen1: [7, 6, 8]
    }
];

let sumaCalificaciones = 0;
for (let i = 0; i < calificaciones.length; i++) {
    let sumaEstudiante = 0;
    for (let j = 0; j < calificaciones[i].examen1.length; j++) {
        sumaEstudiante += calificaciones[i].examen1[j];
    }
    let promedioEstudiante = sumaEstudiante / calificaciones[i].examen1.length;
    console.log(`${calificaciones[i].nombre} ${calificaciones[i].apellido} tiene un promedio de: ${promedioEstudiante}`);
}


