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

// En el array de países, verifique si 'Ethiopia' existe en el array si existe, imprima 'ETHIOPIA'. Si no existe agregar a la lista de países.
const existsEthiopia = countries.includes("Ethiopia");
const countriesWithEthiopia = existsEthiopia
  ? "ETHIOPIA"
  : countries.push("Ethiopia");
console.log(countriesWithEthiopia); // "ETHIOPIA"

// Cortar los diez primeros países
console.log(countries.slice(0, 10));

// Encuentre el país o países de en medio
const middleCountries = countries[Math.floor(countries.length / 2)];
console.log(middleCountries); // Finland

// Divide el array de países en dos arrays iguales si es par. Si el array de países no es par, agregue un país más para la primera mitad.
if (countries.length % 2 === 0) {
  const firstHalf = countries.slice(0, countries.length / 2);
  const secondHalf = countries.slice(countries.length / 2);

  console.log(firstHalf);
  console.log(secondHalf);
} else {
  const countrieExtra = "Argentina";
  countries.splice(Math.ceil(countries.length / 2), 0, countrieExtra);

  const firstHalf = countries.slice(0, countries.length / 2);
  const secondHalf = countries.slice(countries.length / 2);

  console.log(firstHalf);
  console.log(secondHalf);
}
