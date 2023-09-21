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

/* LEVEL TWO */

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Arab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// Encuentra a la persona que tiene muchas habilidades en el objeto de los usuarios.
let maxSkills = 0;
let userMaxSkills = "";
for (const user in users) {
  if (users[user].skills.length > maxSkills) {
    maxSkills = users[user].skills.length;
    userMaxSkills = user;
  }
}
console.log(
  `El usuario con más habilidades es ${userMaxSkills} con ${maxSkills} habilidades.`
);

// Contar los usuarios conectados, contar los usuarios que tienen más de 50 puntos del siguiente objeto.
let usersConnected = 0;
let usersMoreThan50Points = 0;
for (const user in users) {
  if (users[user].isLoggedIn) {
    usersConnected++;
  }
  if (users[user].points >= 50) {
    usersMoreThan50Points++;
  }
}
console.log(
  `Hay ${usersConnected} usuarios conectados y ${usersMoreThan50Points} usuarios con más de 50 puntos.`
);

// Encontrar personas que sean desarrolladores MERN stack del objeto de los usuarios
let mernStackUsers = [];
for (const user in users) {
  if (
    users[user].skills.includes("MongoDB") &&
    users[user].skills.includes("Express") &&
    users[user].skills.includes("React") &&
    users[user].skills.includes("Node")
  ) {
    mernStackUsers.push(user);
  }
}
console.log(
  `Los usuarios que son desarrolladores MERN stack son: ${mernStackUsers.join(
    ", "
  )}.`
);

// Establezca su nombre en el objeto usuarios sin modificar el objeto usuarios original
const copyUsers = Object.assign({}, users);
copyUsers["Leandro"] = {
  email: "leandro@leandro.com",
  skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
  age: 21,
  isLoggedIn: true,
  points: 50,
};
console.log(copyUsers);

// Obtener todas las claves o propiedades del objeto usuarios
console.log(Object.keys(users));

// Obtener todos los valores del objeto usuarios
console.log(Object.values(users));

// Utilice el objeto países para imprimir el nombre del país, la capital, la población y los idiomas.
const countries = [
  {
    nombre: "Argentina",
    población: 45123000,
    capital: "Buenos Aires",
    idiomas: ["español", "italiano", "inglés"],
  },
  {
    nombre: "Brasil",
    población: 212559000,
    capital: "Brasilia",
    idiomas: ["portugués"],
  },
  {
    nombre: "Colombia",
    población: 50379000,
    capital: "Bogotá",
    idiomas: ["español", "inglés"],
  },
  {
    nombre: "México",
    población: 128932000,
    capital: "Ciudad de México",
    idiomas: ["español", "náhuatl", "maya"],
  },
  {
    nombre: "Estados Unidos",
    población: 332405000,
    capital: "Washington, D.C.",
    idiomas: ["inglés", "español", "chino"],
  },
];

for (const country of countries) {
  console.log(
    `País: ${country.nombre}, Capital: ${country.capital}, Población: ${
      country.población
    }, Idiomas: ${country.idiomas.join(", ")}`
  );
}

/* LEVEL THREE */

// Crea un objeto literal llamado personAccount. Tiene las propiedades firstName, lastName, incomes, expenses y tiene los métodos totalIncome, totalExpense, accountInfo,addIncome, addExpense y accountBalance. Incomes es un conjunto de ingresos y su descripción y expenses es un conjunto de ingresos y su descripción.

const personAccount = {
  firstName: "Leandro",
  lastName: "Frette",
  incomes: [
    { description: "Sueldo", amount: 1000 },
    { description: "Freelance", amount: 500 },
  ],
  expenses: [
    { description: "Alquiler", amount: 500 },
    { description: "Comida", amount: 200 },
  ],
  totalIncome: function () {
    let total = 0;
    for (const income of this.incomes) {
      total += income.amount;
    }
    return total;
  },
  totalExpense: function () {
    let total = 0;
    for (const expense of this.expenses) {
      total += expense.amount;
    }
    return total;
  },
  accountInfo: function () {
    return `Nombre: ${this.firstName} ${
      this.lastName
    }, Ingresos: ${this.totalIncome()}, Gastos: ${this.totalExpense()}`;
  },
  addIncome: function (description, amount) {
    this.incomes.push({ description, amount });
  },
  addExpense: function (description, amount) {
    this.expenses.push({ description, amount });
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  },
};

// Imagina que estás obteniendo la colección de usuarios anterior de una base de datos MongoDB

const allUsers = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Arab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "befar",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "gweduc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

// Crear una función llamada signUp que permita al usuario añadirse a la colección. Si el usuario existe, informar al usuario que ya tiene una cuenta.
const signUp = (username, email, password) => {
  for (const user of allUsers) {
    if (user.username === username) {
      return "El usuario ya existe.";
    }
  }
  allUsers.push({
    _id: Math.random().toString(36).substr(2, 9),
    username,
    email,
    password,
    createdAt: new Date().toLocaleString(),
    isLoggedIn: false,
  });
  return "Usuario creado con éxito.";
};
console.log(signUp("Leandro", "leandro@leandro.com", "12345")); // "Usuario creado con éxito."

// Crear una función llamada signIn que permita al usuario iniciar sesión en la aplicación
const signIn = (username, password) => {
  for (const user of allUsers) {
    if (user.username === username && user.password === password) {
      user.isLoggedIn = true;
      return "Sesión iniciada con éxito.";
    }
  }
  return "Usuario o contraseña incorrectos.";
};
console.log(signIn("Alex", "123123")); // "Sesión iniciada con éxito."

// El array de productos tiene tres elementos y cada uno de ellos tiene seis propiedades

const products = [
  {
    _id: "eff",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "algal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "heck",
    name: "TV",
    description: "Smart TV:Procter",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

// Crear una función llamada rateProduct que califique el producto
const rateProduct = (productId, userId, rate) => {
  for (const product of products) {
    if (product._id === productId) {
      product.ratings.push({ userId, rate });
      return "Producto calificado con éxito.";
    }
    return "Producto no encontrado.";
  }
};
console.log(rateProduct("eff", "ab12ex", 5)); // "Producto calificado con éxito."

// Crear una función llamada averageRating que calcule la valoración media de un producto
const averageRating = (productId) => {
  for (const product of products) {
    if (product._id === productId) {
      let total = 0;
      for (const rating of product.ratings) {
        total += rating.rate;
      }
      return total / product.ratings.length;
    }
  }
  return "Producto no encontrado.";
}
console.log(averageRating("eff")); // 4.83

// Crear una función llamada likeProduct. Esta función ayuda a dar un like al producto. Si no le gusta eliminar el like y si le gusta darle like
const likeProduct = (productId, userId) => {
  for (const product of products) {
    if (product._id === productId) {
      if (product.likes.includes(userId)) {
        product.likes.splice(product.likes.indexOf(userId), 1);
        return "Like eliminado.";
      }
      product.likes.push(userId);
      return "Like agregado.";
    }
  }
  return "Producto no encontrado.";
}
console.log(likeProduct("eff", "ab12ex")); // "Like agregado."
