// Desarrolla un pequeño script que genera un id con cualquier número de caracteres aleatorios
const idRandomCharacters = (num) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let idCharacter = "";
  for (let i = 0; i <= num; i++) {
    idCharacter += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return idCharacter;
};
console.log(idRandomCharacters(19));

// Escribe un script que genere un número hexadecimal aleatorio.
const hexCharacters = "0123456789ABCDEF";
let idHexa = "#";
for (let i = 0; i <= 5; i++) {
  idHexa += hexCharacters.charAt(
    Math.floor(Math.random() * hexCharacters.length)
  );
}

console.log(idHexa);

// Escribe un script que genere un número de color rgb aleatorio.
let rgbNum = "";
for (let i = 0; i <= 2; i++) {
  random = Math.floor(Math.random() * 255);
  if (i < 2) {
    rgbNum += random + ", ";
  } else {
    rgbNum += random;
  }
}
const rgb = `rgb(${rgbNum})`;
console.log(rgb);

// Usando el array countries anterior, crea un array como el siguiente
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
const countries = [
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

const countriesMayus = [];
for (let i = 0; i < countries.length; i++) {
  countriesMayus.push(countries[i].toUpperCase());
}
console.log(countriesMayus);

// Usando el array countries anterior, crea un array para saber la longitud de cada país.
const countriesLength = [];
for (let i = 0; i < countries.length; i++) {
  countriesLength.push(countries[i].length);
}
console.log(countriesLength);

// Utiliza el array countries para crear la siguiente array de arrays
// [
//     ['Albania', 'ALB', 7],
//     ['Bolivia', 'BOL', 7],
//     ['Canada', 'CAN', 6],
//     ['Denmark', 'DEN', 7],
//     ['Ethiopia', 'ETH', 8],
//     ['Finland', 'FIN', 7],
//     ['Germany', 'GER', 7],
//     ['Hungary', 'HUN', 7],
//     ['Ireland', 'IRE', 7],
//     ['Iceland', 'ICE', 7],
//     ['Japan', 'JAP', 5],
//     ['Kenya', 'KEN', 5]
//   ]

const arrayCountries = [];
for (let i = 0; i < countries.length; i++) {
  const map = [];
  map.push(countries[i]);
  map.push(countries[i].slice(0, 3).toUpperCase());
  map.push(countries[i].length);
  arrayCountries.push(map);
}
console.log(arrayCountries);

// En el array countries anterior, verifica si hay un país que contenga la palabra 'land'. Si hay países que contienen 'land', imprimelo cono array. Si no hay ningún país que contenga la palabra'land', imprima 'Todos estos países no tienen la palabra land'.

const includesLand = () => {
  const land = [];
  for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes("land")) {
      land.push(countries[i]);
    }
  }
  return land.length >= 1
    ? land
    : "Todos estos países no tienen la palabra land";
};

console.log(includesLand()); // Finland, Ireland, Iceland

// En el array countries anterior, verifica si hay un país que termina con una subcadena (substring) 'ia'. Si hay países que terminan con 'ia', imprimelo como un array. Si no hay ningún país que contenga la palabra 'ia', imprime 'Estos países no terminan con ia'.

const includesIa = () => {
  const ia = [];
  for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes("ia")) {
      ia.push(countries[i]);
    }
  }
  return ia.length >= 1 ? ia : "Estos países no terminan con ia";
};
console.log(includesIa()); // ['Albania', 'Bolivia','Ethiopia']

// Usando el array countries anterior, encuentre el país que contiene la mayor cantidad de caracteres.
const longestCountry = countries.reduce((max, country) => {
  return country.length > max.length ? country : max;
});
console.log(longestCountry); // Ethiopia

// Usando el array countries anterior, encuentre el país que contiene sólo 5 caracteres.
const countryWith5Characters = countries.filter(
  (country) => country.length === 5
);
console.log(countryWith5Characters); // Japan, Kenya

// Encuentra la palabra más larga en el array webTechs
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
const longestWebTechs = webTechs.reduce((max, webTechs) => {
  return webTechs.length > max.length ? webTechs : max;
});
console.log(longestWebTechs); // JavaScript

// Utiliza el array de webTechs para crear la el siguiente array de arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

const arrayWebs = [];
for (let i = 0; i < webTechs.length; i++) {
  const map = [];
  map.push(webTechs[i]);
  map.push(webTechs[i].length);
  arrayWebs.push(map);
}
console.log(arrayWebs);

// Una aplicación creada con MongoDB, Express, React y Node se denomina MERN stack app. Crea el acrónimo MERN usando el array mernStack
const mernStack = ["MongoDB", "Express", "React", "Node"];

let mern = "";
for (let i = 0; i < mernStack.length; i++) {
  mern += mernStack[i][0];
}
console.log(mern); // MERN

// Iterar a través del array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] usando el bucle for o el bucle for of e imprime los elementos.

for (let i = 0; i < webTechs.length; i++) {
  console.log(webTechs[i]);
}

// Este es un array de frutas, ['banana', 'orange', 'mango', 'lemon'] invierte el orden usando un bucle sin usar el método reverse().
const fruts = ['banana', 'orange', 'mango', 'lemon']
const reverseFruts = []
for (let i = 0; i < fruts.length; i++) {
  reverseFruts.unshift(fruts[i])
}
console.log(reverseFruts) // ["lemon", "mango", "orange", "banana"]

// Imprime todos los elementos del array como se muestra a continuación:
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
for (let i = 0; i < fullStack.length; i++) {
  for (let j = 0; j < fullStack[i].length; j++) {
    console.log(fullStack[i][j]); //   HTML, CSS, JS, REACT, NODE, EXPRESS, MONGODB
  }
}