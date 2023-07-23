// Primero elimine todos los signos de puntuación y cambie de string a array y cuente el número de palabras en el array
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
console.log(text.split(" ")); // ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
console.log(text.split(" ").length);

// En el siguiente carrito de compras agregue, elimine, edite artículos
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// Agregue 'Meat' al comienzo de su carrito de compras si aún no se ha agregado
const addMeat = shoppingCart.unshift("Meat");
console.log(shoppingCart); // ["Meat", "Milk", "Coffee", "Tea", "Honey"]

// Agregue 'Sugar' al final de su carrito de compras si aún no se ha agregado
const addSugar = shoppingCart.push("Sugar");
console.log(shoppingCart); // ["Meat", "Milk", "Coffee", "Tea", "Honey", "Sugar"]

// Elimine 'Honey' si es alérgico a la miel (honey)
const removeHoney = shoppingCart.filter((x) => x !== "Honey");
console.log(removeHoney); // ["Meat", "Milk", "Coffee", "Tea", "Sugar"]

// Modificar Tea a 'Green Tea' 
shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
console.log(shoppingCart); // ["Meat", "Milk", "Coffee", "Green Tea", "Sugar"]


