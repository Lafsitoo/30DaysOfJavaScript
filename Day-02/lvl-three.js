const prayer = "El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor"
const separation = prayer.split(" ")
let count = 0
for (let i = 0; i < separation.length; i++) {
    if (separation[i] === "amor") {
        count++
    }
}
console.log(count)

const phrase = "No puedes terminar una oración con porque porque porque es una conjunción"
console.log(phrase.match(/porque/g).length)

const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
const clean = sentence.replace(/[^a-zA-Z0-9 ]/g, "")
console.log(clean)

const text = "Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes."
const sum = text.match(/\d+/g)
let total = 0
for (let i = 0; i < sum.length; i++) {
    total += parseInt(sum[i])
}
console.log(total)
