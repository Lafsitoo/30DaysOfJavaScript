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
const countriesWithEthiopia = existsEthiopia ? "ETHIOPIA" : countries.push("Ethiopia");
console.log(countriesWithEthiopia) // "ETHIOPIA"

// 
