const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
  ];

// En el array webTechs, verifique si Sass existe en el array y si existe, imprima 'Sass es un preproceso de CSS'. Si no existe, agregue Sass al array e imprima el array.

const existsSass = webTechs.includes("Sass");

if (existsSass) {
  console.log("Sass es un preproceso de CSS");
} else {
  webTechs.push("Sass");
  console.log(webTechs); // ["HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB", "Sass"]
}

// Concatene las siguientes dos variables y guardelas en una variable fullStack.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd)

console.log(fullStack); // ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
