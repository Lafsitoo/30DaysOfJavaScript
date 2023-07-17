const firstName = "";
const lastName = "";
const country = "";
const city = "";
const age = 0;
const isMarried = false;
const year = 2023;

console.log(typeof firstName); // string
console.log(typeof lastName); // string
console.log(typeof country); // string
console.log(typeof city); // string
console.log(typeof age); // number
console.log(typeof isMarried); // boolean
console.log(typeof year); // number

console.log(typeof "10" == 10); // false
console.log(parseInt("9.8") == 10); // false

let x = 10;
console.log(x > 5); // true
let y = "Hello";
console.log(Boolean(y)); // true
let z = [1, 2, 3];
console.log(z.length > 0); // true

let a = false;
console.log(a); // false
let b = 0;
console.log(Boolean(b)); // false
let c = "";
console.log(Boolean(c)); // false

console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != '4'); // false
console.log(4 == '4'); // true
console.log(4 === '4'); // false
console.log("Python".length != "jargon".length); // false

console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!(false)); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4')); // true
console.log(!('dragon'.includes('on') || 'python'.includes('on'))); // true

// Obtener el año actual
const yearNow = new Date().getFullYear();
console.log("Año actual:", yearNow);

// Obtener el mes actual (con un número, donde enero es 0 y diciembre es 11)
const month = new Date().getMonth();
console.log("Mes actual:", month);

// Obtener la fecha actual
const date = new Date().getDate();
console.log("Fecha actual:", date);

// Obtener el día actual (con un número, donde domingo es 0 y sábado es 6)
const day = new Date().getDay();
console.log("Día actual:", day);

// Obtener la hora actual
const hours = new Date().getHours();
console.log("Hora actual:", hours);

// Obtener los minutos actuales
const minutes = new Date().getMinutes();
console.log("Minutos actuales:", minutes);

// Extra
const formattedHours = hours < 10 ? `0${hours}` : hours;
const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
const currentTime = `${formattedHours}:${formattedMinutes}`;
console.log("Actualmente son las " + currentTime);

// Obtener el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora
const secondsSince1970 = Math.floor(Date.now() / 1000);
console.log("Segundos desde 01/01/1970:", secondsSince1970);


