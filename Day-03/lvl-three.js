// Cree un formato de hora legible por humanos usando el objeto Date. La hora y el minuto deben ser siempre dos dígitos (7 horas deben ser 07 y 5 minutos deben ser 05)
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05

const date = new Date()
const year = date.getFullYear()
const month = date.getMonth() + 1
const day = date.getDate()
const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()

const humanReadableDate = () => {
    return (`${year}-${month}-${day} ${hours}:${minutes}`)
}

console.log(humanReadableDate()) // 2023-7-18 23:42