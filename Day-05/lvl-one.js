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

// Declara un array vacío
const emptyArray = [];

// Declara un array com mas de 5 elementos
const moreThanFive = [1, 2, 3, 4, 5, 6]

// Encuentra la longitud de tu array
console.log(moreThanFive.length) // 6

// Obtenga el primer elemento, el elemento del medio y el último elemento de un array
const firstElement = moreThanFive[0]
console.log(firstElement) // 1

const middleElement = moreThanFive[Math.floor(moreThanFive.length / 2)]
console.log(middleElement) // 4

const lastElement = moreThanFive[moreThanFive.length - 1]
console.log(lastElement) // 6

// Declara un array llamado mixedDataTypes, coloque diferentes tipos de datos en el array y encuentre la longitud del array. El tamaño del array debe ser mayor que 5
const mixedDataTypes = [1, 'two', true, null, undefined, {name: 'Jose'}]
console.log(mixedDataTypes.length) // 6

// Declare un variable array de nombre itCompanies y asignarles valores iniciales Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// Imprima el array usando console.log()
console.log(itCompanies) // [ 'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon' ]

// Imprima el número de empresas en el array
console.log(itCompanies.length) // 7

// Imprime la primer empresa, la intermedia y la última empresa
console.log(itCompanies[0]) // Facebook
console.log(itCompanies[Math.floor(itCompanies.length / 2)]) // Apple
console.log(itCompanies[itCompanies.length - 1]) // Amazon

// Imprime cada empresa
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i])
}

// Cambie el nombre de cada empresa a mayúsculas uno por uno e imprímalos
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase())
}

// Imprime el array como una oración: Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon son grandes empresas de TI
console.log(itCompanies.join(', ') + ' son grandes empresas de TI')

// Compruebe si existe una determinada empresa en el array itCompanies. Si existe, retorna la empresa; de lo contrario, retorna la empresa no existe
const companyExists = (company) => {
    if (itCompanies.includes(company)) {
        return company
    } else {
        return 'La empresa no existe'
    }
}

console.log(companyExists('Facebook')) // Facebook
console.log(companyExists('Twitter')) // La empresa no existe

// Filtre las empresas que tienen más de una 'o' sin el método filter()
const companiesWithMoreThanOneO = []
for (let i = 0; i < itCompanies.length; i++) {
    if (itCompanies[i].split('o').length - 1 > 1) {
        companiesWithMoreThanOneO.push(itCompanies[i])
    }
}

console.log(companiesWithMoreThanOneO) // [ 'Google', 'Microsoft', 'Facebook' ]

// Ordene el array usando el método sort()
console.log(itCompanies.sort()) // [ 'Amazon', 'Apple', 'Facebook', 'Google', 'IBM', 'Microsoft', 'Oracle' ]

// Invierte la array usando el método reverse()
console.log(itCompanies.reverse()) // [ 'Oracle', 'IBM', 'Apple', 'Microsoft', 'Google', 'Facebook', 'Amazon' ]

// Cortar las primeras 3 empresas del array
console.log(itCompanies.slice(3)) // [ 'Google', 'Facebook', 'Apple', 'Amazon' ]

// Cortar las últimas 3 empresas del array
console.log(itCompanies.slice(0, itCompanies.length - 3)) // [ 'Oracle', 'Microsoft' , 'IBM', 'Google']

// Cortar la empresa o empresas intermedias de TI del array
console.log(itCompanies[Math.floor(itCompanies.length / 2)]) // [ 'Google']

// Eliminar la primera empresa de TI del array
const firstCompany = itCompanies.shift()
console.log(firstCompany) // Oracle

// Eliminar la última empresa de TI del array
const lastCompany = itCompanies.pop()
console.log(lastCompany) // Amazon

// Eliminar la empresa o empresas intermedias de TI del array
const middleCompany = itCompanies[Math.floor(itCompanies.length / 2)]
console.log(middleCompany) // [ 'Google' ]

// Eliminar todas las empresas de TI del array
const cleanArray = itCompanies.splice(0, itCompanies.length)
console.log(cleanArray) // [ 'Microsoft', 'IBM', 'Google', 'Facebook', 'Apple' ]