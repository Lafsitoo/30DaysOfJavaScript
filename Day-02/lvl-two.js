console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

console.log(typeof "10" === 10)

const num = parseFloat('9.8')
console.log(Math.round(num) === 10)

const py = "Pyton"
console.log(py.includes("on"))

const array = "Espero que este curso no esté lleno de jerga"
console.log(array.includes("jerga"))

const random = (min, max) => Math.floor(Math.random() * (max - min) + min)
console.log(random(0, 100));
console.log(random(50, 100));
console.log(random(0, 255));

const js = "JavaScript"
const indexRandom = Math.floor(Math.random() * js.length)
console.log(js[indexRandom])

for (var i = 1; i <= 5; i++) {
    var line = '';
    for (var j = 1; j <= 5; j++) {
      if (j === 1) {
        line += i + ' ';
      } else {
        line += Math.pow(i, j) + ' ';
      }
    }
    console.log(line);
  }

const prayer = "No puedes terminar una oración con porque porque porque es una conjunción"
const fix = "porque porque porque"
const startIndex = prayer.indexOf(fix)
console.log(prayer.substr(startIndex, fix.length))
  