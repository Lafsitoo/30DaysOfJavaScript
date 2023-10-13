/* LEVEL ONE */

// Mostrar la matriz de países como una tabla
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
console.table(countries);

// Mostrar el objeto países como una tabla
const countriesObj = {
  Finland: "Helsinki",
  Sweden: "Stockholm",
  Norway: "Oslo",
};
console.table(countriesObj);

// Utilice console.group() para agrupar los registros
console.group("Countries");


/* LEVEL TWO */


// 10 > 2 * 10 use console.assert()
console.assert(10 > 2 * 10, "10 is greater than 2 * 10");

// Escribe un mensaje de advertencia utilizando console.warn()
console.warn("This is a warning");

// Escribe un mensaje de error utilizando console.error()
console.error("This is an error");


/* LEVEL THREE */


// Comprueba la diferencia de velocidad entre los siguientes bucles: while, for, for of, forEach
const arrayCountries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
console.time("for");
for (let i = 0; i < arrayCountries.length; i++) {
  console.log(arrayCountries[i].toUpperCase());
}
console.timeEnd("for");
