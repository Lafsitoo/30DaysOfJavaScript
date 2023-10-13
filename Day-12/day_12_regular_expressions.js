/* LEVEL ONE */

// Calcula los ingresos anuales totales de la persona a partir del siguiente texto. 'Gana 4000 euros de sueldo al mes, 10000 euros de bonificación anual, 5500 euros de cursos online al mes'.
const text =
  "Gana 4000 euros de sueldo al mes, 10000 euros de bonificación anual, 5500 euros de cursos online al mes";
// Usamos una expresión regular para encontrar números seguidos de "euros" y "al mes" o "anual"
const regExp =
  /(\d+)\s+euros\s+de\s+(sueldo|bonificación|cursos online)\s+(al mes|anual)/g;
let totalAnual = 0;
// Usamos un bucle para procesar cada coincidencia encontrada
let match;
while ((match = regExp.exec(text)) !== null) {
  const valor = parseInt(match[1]); // El número encontrado
  const frecuencia = match[3]; // Si es "al mes" o "anual"

  if (frecuencia === "al mes") {
    totalAnual += valor * 12; // Si es mensual, multiplicamos por 12 para obtener el total anual
  } else {
    totalAnual += valor; // Si es anual, lo sumamos directamente
  }
}
console.log(totalAnual);

const regex = /b\w+/;
const str = "A brown fox jumped over a lazy dog";
let m;


// La posición de algunas partículas en el eje horizontal x -12, -4, -3 y -1 en la dirección negativa, 0 en el origen, 4 y 8 en la dirección positiva. Extrae estos números y encuentra la distancia entre las dos partes más lejanas.
points = ["-1", "2", "-4", "-3", "-1", "0", "4", "8"];
sortedPoints = [-4, -3, -1, -1, 0, 2, 4, 8];
distance = 12;
const regExp2 = /(-?\d+)/g;
let match2;
let max = -Infinity;
let min = Infinity;
while ((match2 = regExp2.exec(points)) !== null) {
  const valor = parseInt(match2[1]);
  if (valor > max) {
    max = valor;
  }
  if (valor < min) {
    min = valor;
  }
}
console.log(max - min);

// Escribir un patrón que identifique si una cadena es una variable JavaScript válida
const regExp3 = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
console.log(regExp3.test("myVariable"));


/* LEVEL TWO */


// Escriba una función llamada tenMostFrequentWords que obtenga las diez palabras más frecuentes de una cadena?
const tenMostFrequentWords = (text) => {
  const regExp = /\w+/g;
  const words = text.match(regExp);
  const frequency = {};
  for (let word of words) {
    if (frequency[word]) {
      frequency[word]++;
    } else {
      frequency[word] = 1;
    }
  }
  const sortedWords = Object.keys(frequency).sort(
    (a, b) => frequency[b] - frequency[a]
  );
  return sortedWords.slice(0, 10);
};
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
console.log(tenMostFrequentWords(paragraph));


/* LEVEL THREE */


// Escribe una función que limpie el texto. Limpia el siguiente texto. Después de la limpieza, cuente tres palabras más frecuentes en la cadena.
const cleanText = (text) => {
  const regExp = /[^a-zA-Z0-9\s]/g;
  return text.replace(regExp, "");
};
sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
console.log(cleanText(sentence));
