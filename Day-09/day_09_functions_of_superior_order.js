/* LEVEL ONE */

const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asben", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// Explique la diferencia entre forEach, map, filter, and reduce.

/*
- forEach: itera sobre un array y ejecuta una función de devolución de llamada para cada elemento del array.
- map: itera sobre un array y devuelve un nuevo array.
- filter: itera sobre un array y devuelve un nuevo array que contiene elementos que pasan la condición de prueba.
- reduce: itera sobre un array y devuelve un solo valor.
*/

// Defina una función callback antes de utilizarla en forEach, map, filter o reduce.
const callback = (element) => {
  console.log(element);
};
callback("Hola Mundo");

// Utiliza forEach para mostrar con console.log cada país del array de países.
countries.forEach((countries) => console.log(countries));

// Utiliza forEach para mostrar con console.log cada nombre del array de nombres.
names.forEach((names) => console.log(names));

// Utiliza forEach para mostrar con console.log cada número del array de números.
numbers.forEach((numbers) => console.log(numbers));

// Utiliza map para crear un nuevo array cambiando cada país a mayúsculas en el array de países.
const countriesToUpperCase = countries.map((countries) =>
  countries.toUpperCase()
);
console.log(countriesToUpperCase);

// Utilice map para crear un array de longitudes de países a partir del array de países.
const countriesLength = countries.map((countries) => countries.length);
console.log(countriesLength);

// Usa map para crear un nuevo array cambiando cada número al cuadrado en el array de números.
const numbersToSquare = numbers.map((numbers) => numbers * numbers);
console.log(numbersToSquare);

// Utilice map para cambiar cada nombre a mayúsculas en el array de nombres.
const namesToUpperCase = names.map((names) => names.toUpperCase());
console.log(namesToUpperCase);

// Utilice map para asignar el array de productos a sus correspondientes precios.
const productsPrice = products.map((products) => products.price);
console.log(productsPrice);

// Utilice filter para filtrar los países que contienen land.
const countriesWithLand = countries.filter((countries) => {
  return countries.includes("land");
});
console.log(countriesWithLand);

// Utilice filter para filtrar los países que tienen seis caracteres.
const countriesWithSixLetters = countries.filter((countries) => {
  return countries.length === 6;
});
console.log(countriesWithSixLetters);

// Utilice filter para filtrar los países que contengan seis letras o más en el array de países.
const countriesWithSixOrMoreLetters = countries.filter((countries) => {
  return countries.length >= 6;
});
console.log(countriesWithSixOrMoreLetters);

// Utilice filter para filtrar los países que empiezan por "I";
const countriesStartsWithE = countries.filter((countries) => {
  return countries.startsWith("I");
});
console.log(countriesStartsWithE);

// Utilice filter para filtrar sólo los precios con valores.
const productsWithPrice = products.filter((products) => {
  return products.price !== "";
});
console.log(productsWithPrice);

// Declara una función llamada getStringLists que toma un array como parámetro y devuelve un array sólo con elementos string.
const getStringLists = (array) => {
  return array.filter((element) => typeof element === "string");
};
console.log(getStringLists([1, 2, 3, "Hola", "Mundo"]));

// Usa reduce para sumar todos los números del array de números.
const sumNumbers = numbers.reduce((acc, cur) => acc + cur);
console.log(sumNumbers);

// Utiliza reduce para concatenar todos los países y producir esta frase: Estonia, Finland, Sweden, Denmark, Norway, y IceLand son países del norte de Europa
const countriesToConcat = countries.reduce((acc, cur) => {
  return `${acc}, ${cur}`;
});
console.log(`${countriesToConcat} son países del norte de Europa`);

// Explique la diferencia entre some y every

/*
- some: comprueba si al menos un elemento del array cumple la condición de prueba.
- every: comprueba si todos los elementos del array cumplen la condición de prueba.
*/

// Utilice some para comprobar si la longitud de algunos nombres es superior a siete en el array de nombres.
const someNamesLength = names.some((names) => {
  return names.length > 7;
});
console.log(someNamesLength);

// Utilice every para comprobar si todos los países contienen la palabra land.
const everyCountriesWithLand = countries.every((countries) => {
  return countries.includes("land");
});
console.log(everyCountriesWithLand);

// Explique la diferencia entre find y findIndex.

/*
- find: devuelve el primer elemento que cumple la condición de prueba.
- findIndex: devuelve el índice del primer elemento que cumple la condición de prueba.
*/

// Utilice find para encontrar el primer país que contenga sólo seis letras en el array de países.
const findCountriesWithSixLetters = countries.find((countries) => {
  return countries.length === 6;
});
console.log(findCountriesWithSixLetters);

// Utilice findIndex para encontrar la posición del primer país que contenga sólo seis letras en el array de países.
const findIndexCountriesWithSixLetters = countries.findIndex((countries) => {
  return countries.length === 6;
});
console.log(findIndexCountriesWithSixLetters);

// Utilice findIndex para encontrar la posición de Norway si no existe en el array obtendrá -1.
const findIndexNorway = countries.findIndex((countries) => {
  return countries === "Norway";
});
console.log(findIndexNorway);

// Utilice findIndex para encontrar la posición de Russia si no existe en el array obtendrá -1.
const findIndexRussia = countries.findIndex((countries) => {
  return countries === "Russia";
});
console.log(findIndexRussia);

/* LEVEL TWO */

// Encuentre el precio total de los productos encadenando dos o más iteradores de matrices (por ejemplo, arr.map(callback).filter(callback).reduce(callback)).
const totalPrice = products
  .map((products) => products.price)
  .filter((products) => products !== "")
  .reduce((acc, cur) => acc + cur);
console.log(totalPrice);

// Encuentre la suma del precio de los productos usando sólo reduce(callback)).
const totalPriceReduce = products.reduce((acc, cur) => {
  return acc + cur.price;
}, 0);
console.log(totalPriceReduce);

// Declara una función llamada categorizeCountries que retorna un array de países que tienen algún patrón común (encuentras el array de países en este repositorio como countries.js(ej 'land', 'ia', 'island','stan')).
const allCountries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Iceland",
  "Japan",
  "Kenya",
];
const categorizeCountries = (array, pattern) => {
  return array.filter((element) => element.includes(pattern));
};
console.log(categorizeCountries(allCountries, "land"));

// Cree una función que retorne un array de objetos, que es la letra y el número de veces que la letra usa para empezar el nombre de un país.
const countriesWithLetter = (array, letter) => {
  return array.filter((element) => element.startsWith(letter)).length;
};
console.log(countriesWithLetter(allCountries, "I"));

// Declara una función getFirstTenCountries y retorna un array de diez países. Utiliza diferente programación funcional para trabajar en el array countries.js.
const getFirstTenCountries = (array) => {
  return array.slice(0, 10);
};
console.log(getFirstTenCountries(allCountries));

// Declara una función getLastTenCountries que devuelve los últimos diez países del array de países.
const getLastTenCountries = (array) => {
  return array.slice(-10);
};
console.log(getLastTenCountries(allCountries));

// Encuentre qué letra se utiliza muchas veces como inicial de un nombre de país del array de países (ej. Finland, Fiji, France etc)
const mostUsedLetter = (array) => {
  const letters = [];
  array.forEach((element) => {
    letters.push(element[0]);
  });
  const mostUsed = letters.reduce((acc, cur) => {
    return acc > cur ? acc : cur;
  });
  return mostUsed;
};
console.log(mostUsedLetter(allCountries));


/* LEVEL THREE */


// Utiliza la información de los países, en la carpeta de datos. Ordena los países por nombre, por capital, por población
