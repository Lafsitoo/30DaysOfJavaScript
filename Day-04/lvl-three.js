// Escribe un programa que diga el número de días en un mes.

const daysInMonth = (month) => {
  switch (month) {
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
      return 31;
    case "abril":
    case "junio":
    case "septiembre":
    case "noviembre":
      return 30;
    case "febrero":
      return 28;
    default:
      throw new Error("Mes no válido");
  }
};

console.log(daysInMonth("enero")); // 31
console.log(daysInMonth("febrero")); // 28

// Escribe un programa que diga el número de días en un mes, ahora considera un año bisiesto.

const daysInMonthLeapYear = (year, month) => {
  switch (month) {
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
      return 31;
    case "abril":
    case "junio":
    case "septiembre":
    case "noviembre":
      return 30;
    case "febrero":
      if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return 29;
      } else {
        return 28;
      }
    default:
      throw new Error("Mes no válido");
  }
};

console.log(daysInMonthLeapYear(2020, "febrero")); // 29