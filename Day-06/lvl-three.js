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
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

// Ordena el array webTechs y el array mernStack
webTechs.sort();
mernStack.sort();

console.log(webTechs); // ['CSS', 'HTML', 'JavaScript', 'MongoDB', 'Node.js', 'React', 'Express']
console.log(mernStack); // ['Express', 'MongoDB', 'Node.js', 'React']

// Extrae todos los países que contengan la palabra 'land' del array countries e imprimela como un array
const includesLand = () => {
  const land = [];
  for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes("land")) {
      land.push(countries[i]);
    }
  }
  return land;
};

console.log(includesLand()); // Finland, Ireland

// Encuentra el país que contiene la mayor cantidad de caracteres en el array countries
const longestCountry = countries.reduce((max, country) => {
  return country.length > max.length ? country : max;
});
console.log(longestCountry); // Ethiopia

// Extrae todos los países que contengan solo cuatro caracters del array countries e impremela como un array
const countryWith4Characters = countries.filter(
  (country) => country.length === 4
);
console.log(countryWith4Characters); // Ninguno

// Extrae todos los paíse que contengan dos o más palabras del array countries e imprimela como un array
const twoWords = () => {
  const two = [];
  for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes(" ")) {
      two.push(countries[i]);
    }
  }
  return two;
};

console.log(twoWords()); // Otra vez, ninguno

// Invertir el array countries y poner en mayúscula cada país y almacenalo en un array
const reverseCountries = []
for (let i = 0; i < countries.length; i++) {
    reverseCountries.unshift(countries[i].toUpperCase())
}
console.log(reverseCountries) 