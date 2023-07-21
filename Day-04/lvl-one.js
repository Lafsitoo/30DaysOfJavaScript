// Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). Si el usuario tiene 18 años o más, muestre el mensaje: 'Tiene la edad suficiente para conducir', pero si no tiene 18 años, brinde otro mensaje que indique que debe esperar la cantidad de años que necesita para cumplir 18.

const acceptedAge = (age) => {
    return age >= 18 ? 'Tiene la edad suficiente para conducir' : `Debe esperar ${18 - age} años para conducir`
}

console.log(acceptedAge(18)) // Tiene la edad suficiente para conducir
console.log(acceptedAge(13)) // Debe esperar 5 años para conducir

// Compara los valores de myAge y yourAge usando if... else. Según la comparación, registre el resultado en la consola indicando quién es mayor (tú o yo). Utilice prompt(“Ingrese su edad:”) para obtener la edad como entrada.

const compareAges = (myAge, yourAge) => {
    return myAge > yourAge ? `${myAge} años es mayor a ${yourAge} años` : `${yourAge} años es mayor a ${myAge} años`
}

console.log(compareAges(13, 20)) // 20 años es mayor a 13 años
console.log(compareAges(24, 15)) // 24 años es mayor a 15 años

// Los números pares son divisibles por 2 y el resto es cero. ¿Cómo verificar si un número es par o no usando JavaScript?

const isEven = (number) => {
    return number % 2 === 0 ? `${number} es par` : `${number} es impar`
}

console.log(isEven(2)) // 2 es par
console.log(isEven(9)) // 3 es impar