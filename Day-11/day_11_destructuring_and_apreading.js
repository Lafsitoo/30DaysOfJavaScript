/* LEVEL ONE */

const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

// Desestructurar y asignar los elementos del array de constantes para e, pi, gravedad, humanBodyTemp, waterBoilingTemp.
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

// Desestructurar y asignar los elementos del array de países a fin, est, sw, den, nor
const [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor);

// Desestructurar el objeto rectángulo por sus propiedades o keys.
const { width, height, area, perimeter } = rectangle;
console.log(width, height, area, perimeter);

/* LEVEL TWO */

// Iterar a través del array de usuarios y obtener todas las keys del objeto utilizando la desestructuración
for (const { name, scores, skills, age } of users) {
  console.log(name, scores, skills, age);
}

// Encuentra las personas que tienen menos de dos habilidades
for (const { name, scores, skills, age } of users) {
  if (skills.length < 2) {
    console.log(name, scores, skills, age);
  }
}

/* LEVEL THREE */

const países = [
  {
    nombre: "Argentina",
    capital: "Buenos Aires",
    población: 45.123,
    idiomas: ["español", "italiano", "inglés"],
  },
  {
    nombre: "Brasil",
    capital: "Brasilia",
    población: 212.559,
    idiomas: ["portugués"],
  },
  {
    nombre: "Colombia",
    capital: "Bogotá",
    población: 50.379,
    idiomas: ["español", "inglés"],
  },
  {
    nombre: "México",
    capital: "Ciudad de México",
    población: 128.932,
    idiomas: ["español", "náhuatl", "maya"],
  },
  {
    nombre: "Estados Unidos",
    capital: "Washington, D.C.",
    población: 332.405,
    idiomas: ["inglés", "español", "chino"],
  },
];

// Desestructurar el objeto países imprimir nombre, capital, población e idiomas de todos los países
for (const { nombre, capital, población, idiomas } of países) {
  console.log(nombre, capital, población, idiomas);
}

// Un desarrollador junior estructura el nombre del estudiante, las habilidades y la puntuación en un array de arrays que puede no ser fácil de leer. Desestructure la siguiente matriz nombre a nombre, array de habilidades a habilidades, array de puntuaciones a puntuaciones, puntuación de JavaScript a jsScore y puntuación de React a reactScore variable en una línea.
const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
const [name, skills, scores] = student;
const [htmScore, cssScore, jsScore, reactScore] = scores;
console.log(name, skills, scores);

// Escribe una función llamada convertArrayToObject que pueda convertir el array en un objeto estructurado.
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];
const convertArrayToObject = (students) => {
  const obj = {};
  for (const [name, skills, scores] of students) {
    obj[name] = { skills, scores };
  }
  return obj;
};
console.log(convertArrayToObject(students));

// Copie el objeto estudiante a newStudent sin mutar el objeto original. En el nuevo objeto añade lo siguiente
const student1 = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};
const newStudent = { ...student1 };

// Añadir Bootstrap con el nivel 8 a los conjuntos de habilidades de front end
newStudent.skills.frontEnd.push({ skill: "Bootstrap", level: 8 });
console.log(newStudent.skills.frontEnd);

// Añadir Express con nivel 9 a los conjuntos de habilidades del back end
newStudent.skills.backEnd.push({ skill: "Express", level: 9 });
console.log(newStudent.skills.backEnd);

// Añadir SQL con nivel 8 a los conjuntos de habilidades de la base de datos
newStudent.skills.dataBase.push({ skill: "SQL", level: 8 });
console.log(newStudent.skills.dataBase);

// Añadir SQL sin nivel a los conjuntos de habilidades de ciencia de datos
newStudent.skills.dataScience.push("SQL");
console.log(newStudent.skills.dataScience);

console.log(newStudent)
