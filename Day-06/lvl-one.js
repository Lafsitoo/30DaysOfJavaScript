// Itera de 0 a 10 usando el bucle for, haga lo mismo usando los bucles while y do while

for (let i = 0; i <= 10; i++) {
  console.log(i); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}

let i = 0;
while (i < 10) {
  i++;
  console.log(i); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}

let x = 0;
do {
  console.log(x); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  x++;
} while (x <= 10);

// Itera 10 a 0 usando el bucle for, haga lo mismo usando los bucles while y do while

for (let i = 10; i >= 0; i--) {
  console.log(i); // 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
}

let u = 11;
while (u > 0) {
  u--;
  console.log(u); // 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
}

let z = 10;
do {
  console.log(z); // 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
  z--;
} while (z >= 0);

// Escribe un bucle que haga el siguiente patrón usando console.log():
// #
// ##
// ###
// ####
// #####
// ######
// #######
let character = "#";

for (let i = 1; i <= 7; i++) {
  console.log(character);
  character += "#";
}

// Usa un bucle para imprimir el siguiente patrón:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
let table = 0;
for (let i = 0; i <= 10; i++) {
  let multiplicate = table * table;
  console.log(`${table} x ${table} = ${multiplicate}`);
  table++;
}

// Usando un bucle imprime el siguiente patrón:
// i    i^2   i^3
// 0    0     0
// 1    1     1
// 2    4     8
// 3    9     27
// 4    16    64
// 5    25    125
// 6    36    216
// 7    49    343
// 8    64    512
// 9    81    729
// 10   100   1000
let elevate = 0;
for (let i = 0; i <= 10; i++) {
  let cuadrate = elevate ** 2;
  let cube = elevate ** 3;
  console.log(`${elevate} ${cuadrate} ${cube}`);
  elevate++;
}

// Usa el bucle for para iterar de 0 a 100 e imprima solo números pares
const par = [];
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    par.push(i);
  }
  console.log(par);
}

// Usa el bucle for para iterar de 0 a 100 e imprima solo números impares
const impar = [];
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 1) {
    impar.push(i);
  }
  console.log(impar);
}

// Usa el bucle for para iterar de 0 a 100 e imprima los solo números primos
const primes = [];
for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    primes.push(i);
  }
}
console.log(primes);

// Usa el bucle for para iterar de 0 a 100 e imprima la suma de todos los números.
let total = 0;
for (let i = 0; i <= 100; i++) {
  total += i;
}
console.log(total); // 5050

// Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares.
let parTotal = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    parTotal += i;
  }
}
console.log(parTotal); // 2550

// Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares. Imprimir suma de pares y suma de impares como un array

let totalPar = 0;
let totalImpar = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    totalPar += i;
  }
  if (i % 2 == 1) {
    totalImpar += i;
  }
}
console.log(`${totalPar} ${totalImpar}`); // 2550 2500

// Desarrolla un pequeño script que genera una matriz de 5 números aleatorios
let fiveNumbersRandom = [];
for (let i = 0; i <= 4; i++) {
    fiveNumbersRandom.push(Math.floor(Math.random() * 100))
}
console.log(fiveNumbersRandom)

// Desarrolla un pequeño script que genera una matriz de 5 números aleatorios. Los números debe ser únicos
const fiveNumbersRandomUniques = [];
while (fiveNumbersRandomUniques.length < 5) {
  const randomNumber = Math.floor(Math.random() * 100);
  if (!fiveNumbersRandomUniques.includes(randomNumber)) {
    fiveNumbersRandomUniques.push(randomNumber);
  }
}
console.log(fiveNumbersRandomUniques);

// Desarrolla un pequeño script que genera un id aleatorio de seis caracteres:
const idSixCharacter = [];
for (let i = 0; i <= 6; i++) {
  idSixCharacter.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
}
const randomId = idSixCharacter.join("");
console.log(randomId); // "azsxfcd"
