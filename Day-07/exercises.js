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
    if(a > b && a > c) {
        return a
    }
    if(b > a && b > c) {
        return b
    }
    return c
}
console.log(findMax(32, 156, 21))