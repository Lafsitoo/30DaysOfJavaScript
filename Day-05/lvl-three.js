const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Ordene el array y encuentre la edad mínima y máxima
ages.sort();
const minAges = ages.reduce((a, b) => Math.min(a, b));
const maxAges = ages.reduce((a, b) => Math.max(a, b));
console.log(minAges); // 19
console.log(maxAges); // 26

// Encuentre la edad media (un elemento intermedio o dos elementos intermedios divididos por dos)
const middleAges = ages.find((age) => age > minAges && age < maxAges);
console.log(middleAges); // 20

// Encuentre la edad promedio (todos los elementos divididos por el número de elementos)
const ageAverage = ages.reduce((a, b) => a + b) / ages.length
console.log(ageAverage) // 22.8

// Encuentre el rango de las edades (max menos min)
const rangeAge = maxAges - minAges
console.log(rangeAge) // 7

// Compare el valor de (mín - promedio) y (máx - promedio), use el método _abs()_
const minAverage = Math.abs(minAges - ageAverage)
const maxAverage = Math.abs(maxAges - ageAverage)
const distance = Math.max(minAverage - maxAverage)
console.log(distance)
