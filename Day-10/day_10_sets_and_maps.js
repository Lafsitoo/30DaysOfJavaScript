/* LEVEL ONE */


const countries = ["Finland", "Sweden", "Norway"];

// Crear un set vacío
const emptySet = new Set();
console.log(emptySet);

// Crear un set que contenga de 0 a 10 utilizando el bucle
const set = new Set();
for (let i = 0; i <= 10; i++) {
    set.add(i);
}
console.log(set);

// Eliminar un elemento de set
set.delete(5);
console.log(set);

// Limpia set
set.clear();
console.log(set);

// Crear un set de 5 elementos string a partir de un array
const array = ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
const setFive = new Set(array.slice(0, 5));
console.log(setFive);

// Crear un map de países y el número de caracteres de un país
const map = new Map();
for (let i = 0; i < countries.length; i++) {
    map.set(countries[i], countries[i].length);
}
console.log(map);


/* LEVEL TWO */


const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

// Encontrar a unión b
const union = new Set([...a, ...b]);
console.log(union);

// Encontrar a intersección b
const intersección = new Set(a.filter(x => b.includes(x)));
console.log(intersección);

// Encontrar a con b
const diferencia = new Set(a.filter(x => !b.includes(x)));
console.log(diferencia);
