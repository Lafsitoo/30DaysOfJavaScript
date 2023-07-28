// LEVEL 01

// Declare una función fullName e imprima su nombre completo.
// const fullName = (name) => {
//     console.log(name)
// }

// Declare una función fullName y ahora toma firstName, lastName como parámetro y retorna su nombre completo.
const fullName = (firstName, lastName) => {
  return firstName + " " + lastName;
};
console.log(fullName("Leandro", "Frette"));

// Declare una función addNumbers que toma dos parámetros y retorna la suma de ambos.
const addNumbers = (a, b) => {
  return a + b;
};
console.log(addNumbers(5, 7));

// El área de un rectángulo se calcula de la siguiente manera: area = length x width. Escribe una función areaOfRectangle que calcule el área de un rectángulo.
const areaOfRectangle = (a, b) => {
  return a * b;
};
console.log(areaOfRectangle(4, 6));

// El perímetro de un rectángulo se calcula de la siguiente manera: perimeter= 2x(length + width). Escribe una función perimeterOfRectangle que calcule el perímetro de un rectángulo.
const perimeterOfRectangle = (a, b) => {
  return 2 * (a + b);
};
console.log(perimeterOfRectangle(9, 3));

// El volumen de un prisma rectangular se calcula de la siguiente manera: volume = length x width x height. Escribe una función volumeOfRectPrism que calcule el volumen de un prisma.
const volumeOfRectPrism = (a, b, c) => {
  return a * b * c;
};
console.log(volumeOfRectPrism(4, 2, 5));

// El área de un círculo se calcula de la siguiente manera: area = π x r x r. Escribe una función areaOfCircle que calcule el área de un círculo.
const areaOfCircle = (r) => {
  return Math.PI * r * r;
};
console.log(areaOfCircle(5));

// La circunferencia de un círculo se calcula de la siguiente manera: circumference = 2πr. Escribe una función circumOfCircle que calcule la circunferencia de un círculo.
const circumOfCircle = (r) => {
  return 2 * Math.PI * r;
};
console.log(circumOfCircle(3));

// La densidad de una sustancia se calcula de la siguiente manera:density= mass/volume. Escribe una función density que calcule la densidad de una sustancia.
const density = (m, v) => {
  return m / v;
};
console.log(density(3, 5));

// La velocidad se calcula dividiendo el total de la distancia recorrida por un objeto en movimiento entre el tiempo total. Escribe una función que calcule la velocidad de un objeto en movimiento, speed.
const speed = (d, t) => {
  return d / t;
};
console.log(speed(34, 7));

// El peso de una sustancia se calcula de la siguiente manera: weight = mass x gravity. Escribe una función weight que calcule el peso de una sustancia.
const weight = (m, g) => {
  return m * g;
};
console.log(weight(45, 9));

// La temperatura en °C se puede convertir a °F usando esta fórmula: °F = (°C x 9/5) + 32. Escribe una función convertCelsiusToFahrenheit que convierta °C a °F.
const convertCelsiusToFahrenheit = (c) => {
  return `°F ${c * 9.5 + 32}`;
};
console.log(convertCelsiusToFahrenheit(19));

// El índice de masa corporal (IMC) se calcula de la siguiente manera: imc = peso en Kg / (altura x altura) en m2. Escribe una función que calcule imc. El IMC se utiliza para definir de forma amplia diferentes grupos de peso en adultos de 20 años o más. Compruebe si una persona tiene un peso bajo, peso normal, con sobrepeso u obeso según la información que se proporciona a continuación.
// Se aplican los mismos parámetros de grupos tanto a hombres como a mujeres.
// Peso bajo: IMC inferior a 18,5
// Peso normal: IMC de 18,5 a 24,9
// Sobrepeso: IMC de 25 a 29,9
// Obeso: IMC es 30 o más
const imcCalculate = (w, h) => {
  let heightInMeters = h / 100;
  let imc = w / (heightInMeters * heightInMeters);

  if (imc < 18.5) {
    return "Peso bajo";
  } else if (imc >= 18.5 && imc <= 24.9) {
    return "Peso normal";
  } else if (imc >= 25 && imc <= 29.9) {
    return "Sobrepeso";
  } else {
    return "Obeso";
  }
};
console.log(imcCalculate(85, 175));

// Escribe una función llamada checkSeason, toma un parámetro de mes y retorna la estación: Otoño, Invierno, Primavera o Verano.
const checkSeason = (month) => {
  switch (month) {
    case 1:
    case 2:
    case 3:
      return "Invierno";
    case 4:
    case 5:
    case 6:
      return "Primavera";
    case 7:
    case 8:
    case 9:
      return "Verano";
    case 10:
    case 11:
    case 12:
      return "Otoño";
    default:
      return "Mes inválido";
  }
};
console.log(checkSeason(11));

// Math.max retorna su argumento más grande. Escriba una función findMax que tome tres argumentos y devuelva su máximo sin usar el método Math.max.
const findMax = (a, b, c) => {
  if (a > b && a > c) {
    return a;
  }
  if (b > a && b > c) {
    return b;
  }
  return c;
};
console.log(findMax(32, 156, 21));

// LEVEL TWO

// La ecuación lineal se calcula de la siguiente manera: ax + by + c = 0. Escribe una función que calcule el valor de una ecuación lineal, solveLinEquation.
const solveLinEquation = (a, b, c) => {
  let x = -c / (a + b);
  let y = -c / (a - b);
  return { x, y };
};
console.log(solveLinEquation(3, 5, 9));

// La ecuación cuadrática se calcula de la siguiente manera: ax2 + bx + c = 0. Escribe una función que calcule el valor o los valores de una ecuación cuadrática, solveQuadEquation.
function solveQuadEquation(a, b, c) {
  let d = b ** 2 - 4 * a * c;
  if (d < 0) {
    return [];
  } else if (d == 0) {
    return [-b / (2 * a)];
  } else {
    return [(-b - Math.sqrt(d)) / (2 * a), (-b + Math.sqrt(d)) / (2 * a)];
  }
}
console.log(solveQuadEquation(1, -1, -2));

// Declare una función llamada printArray. Toma un array como parámetro e imprime cada valor del array.
const printArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};
printArray("elefante");

// Declare una función llamada showDateTime que muestre la hora en este formato: 01/08/2020 04:08 usando el objeto Date.
const showDateTime = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const formattedDays = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const currentTime = `${formattedHours}:${formattedMinutes}`;
  console.log(`${formattedDays}/${formattedMonth}/${year} ${currentTime}`);
};
showDateTime();

// Declare una función llamada swapValues. Esta función intercambia el valor de x a y.
// swapValues(3, 4); // x => 4, y=>3
// swapValues(4, 5); // x = 5, y = 4
const swapValues = (x, y) => {
  const temp = x;
  x = y;
  y = temp;
  console.log(x, y);
};
swapValues(3, 4);

// Declare una función llamada reverseArray. Toma un array como parámetro y retorna el array invertido (no use el método reverse())
const reverseArray = (array) => {
  let temp = [];
  for (let i = 0; i <= array.length - 1; i++) {
    temp.unshift(array[i]);
  }
  array = temp;
  return array;
};
console.log(reverseArray([1, 2, 3, 4, 5, "A", "B", "C"]));

// Declare una función llamada capitalizeArray. Toma un array como parámetro y retorna el array - capitalizedarray
const capitalizeArray = (array) => {
  const capitalizedArray = array.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalizedArray;
};
console.log(capitalizeArray(["hola", "mundo"]));

// Declare una función llamada addItem. Toma un elemento de paŕametro y retorna un array después de agregar el un elemento.
function addItem(array, item) {
  array.push(item);
  return array;
}
const arrayAdd = [1, 2, 3, 4];
console.log(addItem(arrayAdd, 5));

// Declare una función llamada removeItem. Toma como parámetro un index y retorna un array después de eleminar el elemento con ese index.
function removeItem(array, item) {
  array.splice(item, 1);
  return array;
}
const arrayRemove = [1, 2, 3, 4, 5];
console.log(removeItem(arrayRemove, 2));

// Declare una función llamada sumOfNumbers. Toma un número como parámetro y suma todos los números en ese rango.
const sumOfNumbers = (num) => {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
};
console.log(sumOfNumbers(10));

// Declare una función llamada sumOfOdds. Toma un parámetro numérico y suma todos los números impares en ese rango.
const sumOfOdds = (num) => {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 == 1) {
      sum += i;
    }
  }
  return sum;
};
console.log(sumOfOdds(10));

// Declare una función llamada sumOfEven. Toma un parámetro numérico y suma todos los números pares en ese rango.
const sumOfEven = (num) => {
  let sum = 0;
  for (let i = 0; i <= num; i += 2) {
    sum += i;
  }
  return sum;
};
console.log(sumOfEven(10));

// Declare una función llamada evensAndOdds . Toma un entero positivo como parámetro y cuenta el número de pares e impares.
const evensAndOdds = (num) => {
  let evens = 0;
  let odds = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      evens++;
    } else {
      odds++;
    }
  }
  console.log(`Contiene ${evens} números pares y ${odds} números impares`);
};
evensAndOdds(100);

// Escriba una función que tome cualquier número de argumentos y retorne la suma de los argumentos
const sumOfAll = (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  console.log(sum);
};
sumOfAll([50, 6, 19]);

// Escriba una función randomUserIp que genere una ip de usuario aleatoria.
const randomUserIp = () => {
  const octet = () => Math.floor(Math.random() * 256);
  const ip = `${octet()}.${octet()}.${octet()}.${octet()}`;
  console.log(ip);
};
randomUserIp();

// Escriba una función randomMacAddress que genere una dirección mac aleatoria.
function randomMacAddress() {
  const hexDigits = "0123456789ABCDEF";
  let macAddress = "";
  for (let i = 0; i < 6; i++) {
    const digit = hexDigits[Math.floor(Math.random() * 16)];
    macAddress += digit;
    if (i < 5) {
      macAddress += ":";
    }
  }
  console.log(macAddress);
}
randomMacAddress();

// Declare una función llamada randomHexaNumberGenerator. Cuando se llama a esta función, genera un número hexadecimal aleatorio. La función retorna el número hexadecimal.
const randomHexaNumberGenerator = () => {
  const hexCharacters = "0123456789ABCDEF";
  let idHexa = "#";
  for (let i = 0; i <= 5; i++) {
    idHexa += hexCharacters.charAt(
      Math.floor(Math.random() * hexCharacters.length)
    );
  }
  console.log(idHexa);
};
randomHexaNumberGenerator();

// Declare una función llamada userIdGenerator. Cuando se llama a esta función, genera un id de siete caracteres. La función devuelve el id.
const userIdGenerator = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let idCharacter = "";
  for (let i = 0; i <= 6; i++) {
    idCharacter += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  console.log(idCharacter)
}
userIdGenerator()
