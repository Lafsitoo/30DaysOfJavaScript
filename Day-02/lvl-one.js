const challenge = "30 días de JavaScript"
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substr(0, 2))
console.log(challenge.substr(3, 21))
console.log(challenge.includes("Script"))
console.log(challenge.split())
console.log(challenge.split(" "))

const networks = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(networks.split(", "))

console.log(challenge.replace("JavaScript", "Python"))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt("j"))
console.log(challenge.indexOf("a"))
console.log(challenge.lastIndexOf("a"))

const array = "No puedes terminar una oración con porque porque porque es una conjunción "
console.log(array.indexOf("porque"))
console.log(array.lastIndexOf("porque"))
console.log(array.includes("porque"))
console.log(array.trim(" "))

console.log(challenge.startsWith("30"))
console.log(challenge.endsWith("Script"))
console.log(challenge.match("a"))

const days = "30 Days de"
const js = " JavaScript"
console.log(days.concat(js))
console.log(challenge.repeat(2))