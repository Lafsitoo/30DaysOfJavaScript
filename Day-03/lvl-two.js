// Escriba un script que solicite al usuario que ingrese la base y la altura del triángulo y calcule el área de un triángulo (área = 0,5 x b x h).
const areaOfTriangle = (base, height) => {
    const area = (base * height) / 2
    return (`El area del triangulo es: ${area}`)
}

console.log(areaOfTriangle(10, 10)) // 50

// Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y calcule el perímetro del triángulo (perímetro = a + b + c)

const perimeterOfTriangle = (a, b, c) => {
    const perimeter = a + b + c
    return (`El perimetro del triangulo es: ${perimeter}`)
}

console.log(perimeterOfTriangle(8, 12, 10)) // 30

// Obtenga el largo y el ancho usando prompt y calcule el área del rectángulo (área = largo x ancho y el perímetro del rectángulo (perímetro = 2 x (largo + ancho))

const areaAndPerimeterOfRectangle = (length, width) => {
    const area = length * width
    const perimeter = 2 * (length + width)
    return (`El area del rectangulo es: ${area} y el perimetro es: ${perimeter}`)
}

console.log(areaAndPerimeterOfRectangle(10, 5)) // 50, 30

// Obtenga el radio usando prompt y calcule el área de un círculo (área = pi x r x r) y la circunferencia de un círculo (c = 2 x pi x r) donde pi = 3.14.

const areaAndCircumferenceOfCircle = (radius) => {
    const area = Math.PI * radius * radius
    const circumference = 2 * Math.PI * radius
    return (`El area del circulo es: ${area} y la circunferencia es: ${circumference}`)
}

console.log(areaAndCircumferenceOfCircle(10)) // 314.15, 62.83

// Calcule la pendiente, la intersección X y la intersección Y de y = 2x -2

const slopeAndIntersections = (x, y) => {
    const slope = 2
    const intersectionX = (y + 2) / 2
    const intersectionY = 2 * x - 2
    return (`La pendiente es: ${slope}, la interseccion X es: ${intersectionX} y la interseccion Y es: ${intersectionY}`)
}

console.log(slopeAndIntersections(2, 2)) // 2, 2, 2

// La pendiente es m = (y2-y1)/(x2-x1). Encuentra la pendiente entre el punto (2, 2) y el punto (6,10)

const slope = (x1, y1, x2, y2) => {
    const m = (y2 - y1) / (x2 - x1)
    return (`La pendiente es: ${m}`)
}

console.log(slope(2, 2, 6, 10)) // 2

// Calcula el valor de y (y = x2 + 6x + 9). Trate de usar diferentes valores de x y averigüe en qué valor de x y es 0.

const valueOfY = (x) => {
    const y = x * x + 6 * x + 9
    return (`El valor de Y es: ${y}`)
}

console.log(valueOfY(2)) // 25

// Escriba un script con prompt que solicite al usuario que ingrese las horas y la tarifa por hora. ¿Calcular el salario de la persona?

const salary = (hours, rate) => {
    const salary = hours * rate
    return (`El salario es: ${salary}`)
}

console.log(salary(40, 10)) // 400

// Si la longitud de su nombre es mayor que 7, diga que su nombre es largo; de lo contrario, diga que su nombre es corto.

const nameLength = (name) => {
    return name.length > 7 ? "Tu nombre es largo" : "Tu nombre es corto";
}

console.log(nameLength('Juan')) // Tu nombre es corto
console.log(nameLength('Juan Carlos')) // Tu nombre es largo

// Compare la longitud de su nombre y la longitud de su apellido y debería obtener este resultado.
// let firstName = "Asabeneh";
// let lastName = "Yetayeh";
// Tu primer nombre, Asabeneh, es más largo que tu apellido, Yetayeh.

const compareLength = (firstName, lastName) => {
    return firstName.length > lastName.length ? `Tu primer nombre, ${firstName}, es más largo que tu apellido, ${lastName}` : `Tu apellido, ${lastName}, es más largo que tu primer nombre, ${firstName}`
}

console.log(compareLength('Juan', 'Carlos')) // Tu apellido, Carlos, es más largo que tu primer nombre, Juan

// Declare dos variables myAge y yourAge y asignarles los valores iniciales y myAge y yourAge.
// let myAge = 250;
// let yourAge = 25;
// Soy 225 años mayor que tú.

const ageDifference = (myAge, yourAge) => {
    return myAge > yourAge ? `Soy ${myAge - yourAge} años mayor que tú` : `Soy ${yourAge - myAge} años menor que tú`
}

console.log(ageDifference(250, 25)) // Soy 225 años mayor que tú

// Usando prompt, obtenga el año en que nació el usuario y, si el usuario tiene 18 años o más, permita que el usuario conduzca, si no dígale que espere una cierta cantidad de años.

const ageToDrive = (year) => {
    const ageNow = new Date().getFullYear() - year
    return ageNow >= 18 ? `Puedes conducir` : `Debes esperar ${18 - ageNow} años para conducir`
}

console.log(ageToDrive(2005)) // Puedes conducir

// Escriba un script que solicite por prompt al usuario que ingrese el número de años. Calcular el número de segundos que puede vivir una persona. Supongamos que alguien vive solo cien años

const secondsToLive = (years) => {
    const seconds = years * 365 * 24 * 60 * 60
    return (`Puedes vivir ${seconds} segundos`)
}

console.log(secondsToLive(100)) // Puedes vivir 3153600000 segundos

// Cree un formato de hora legible por humanos usando el objeto Date.

const date = new Date()
const year = date.getFullYear()
const month = date.getMonth() + 1
const day = date.getDate()
const hours = date.getHours()
const minutes = date.getMinutes()

// Con YYYY-MM-DD HH:mm

const humanReadableDate = () => {
    return (`${year}-${month}-${day} ${hours}:${minutes}`)
}
console.log(humanReadableDate()) // 2023-7-18 23:42

// Con DD-MM-YYYY HH:mm

const humanReadableDate2 = () => {
    return (`${day}-${month}-${year} ${hours}:${minutes}`)
}
console.log(humanReadableDate2()) // 18-7-2023 23:42
