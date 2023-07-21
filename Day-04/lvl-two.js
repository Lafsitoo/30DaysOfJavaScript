// Escriba un código que pueda calificar a los estudiantes de acuerdo con sus puntajes:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

function gradeStudent(score) {
  if (score >= 80 && score <= 100) {
    return "Su calificacion es: A";
  } else if (score >= 70 && score < 80) {
    return "Su calificacion es: B";
  } else if (score >= 60 && score < 70) {
    return "Su calificacion es: C";
  } else if (score >= 50 && score < 60) {
    return "Su calificacion es: D";
  } else {
    return "Su calificacion es: F";
  }
}

console.log(gradeStudent(98)); // Su calificacion es: A
console.log(gradeStudent(55)); // Su calificacion es: D

// Consulta si la temporada es Otoño, Invierno, Primavera o Verano. Si la entrada del usuario es :
// Septiembre, Octubre o Noviembre, la temporada es Otoño.
// Diciembre, Enero o Febrero, la temporada es Invierno.
// Marzo, Abril o Mayo, la temporada es Primavera
// Junio, Julio o Agosto, la temporada es Verano

const months = {
  septiembre: "Otoño",
  octubre: "Otoño",
  noviembre: "Otoño",
  diciembre: "Invierno",
  enero: "Invierno",
  febrero: "Invierno",
  marzo: "Primavera",
  abril: "Primavera",
  mayo: "Primavera",
  junio: "Verano",
  julio: "Verano",
  agosto: "Verano",
};

const season = (month) => {
  return months[month];
};

console.log(season("septiembre")); // Otoño
console.log(season("diciembre")); // Invierno

// Compruebe si un día es un día de fin de semana o un día laborable. Su script tomará el día como entrada.

const days = {
    lunes: "Dia laboral",
    martes: "Dia laboral",
    miercoles: "Dia laboral",
    jueves: "Dia laboral",
    viernes: "Dia laboral",
    sabado: "Dia de fin de semana",
    domingo: "Dia de fin de semana",
}

const day = (day) => {
    return days[day];
}

console.log(day("lunes")); // Dia laboral
console.log(day("sabado")); // Dia de fin de semana
