/* LEVEL ONE */


// Crear un objeto vacío llamado dog
const dog = {};

// Imprimir el objeto dog en la consola
console.log(dog);

// Añade las propiedades name, legs, color, age y bark para el objeto dog. La propiedad bark es un método que devuelve woof woof
dog.name = "Firulais";
dog.legs = 4;
dog.color = "brown";
dog.age = 5;
dog.bark = function () {
  return "woof woof";
};

// Obtener name, legs, color, age y el valor de bark del objeto dog
console.log(
  `Nombre: ${dog.name}, Patas: ${dog.legs}, Color: ${dog.color}, Edad: ${
    dog.age
  }, Ladrar: ${dog.bark()}`
);

// Establecer nuevas propiedades al objeto dog: breed, getDogInfo
dog.breed = "Pastor Alemán";
dog.getDogInfo = function () {
  return `Nombre: ${dog.name}, Patas: ${dog.legs}, Color: ${dog.color}, Edad: ${
    dog.age
  }, Ladrar: ${dog.bark()}, Raza: ${dog.breed}`;
};


