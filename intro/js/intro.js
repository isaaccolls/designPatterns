// paradigma funcional
console.log("hi");
// funciones de primer orden 👈️
// En JavaScript, todas las funciones son funciones de primera clase.
// Eso significa que pueden tratarse como cualquier otra variable.
// Las funciones de primera clase son funciones que pueden asignarse como valores a variables,
// devolverse desde otras funciones y pasarse como argumentos a otras funciones.

function sum(a, b) {
  return a + b;
}

let res = sum(1, 2);
console.log(res);

const fSum = sum;
res = fSum(5, 6);
console.log(res);

// Las funciones de orden superior 👈️
// en Java Script o cualquier otro lenguaje son aquellas
// que reciben o retornan otras funciones

function operation(fn, a, b) {
  console.log("se hace algo");
  console.log(fn(a, b));
}

operation(sum, 10, 20);

// arrow function
operation((a, b) => a * b, 5, 5);
operation(
  (a, b) => {
    const c = a + b;
    return c * 2;
  },
  1,
  2
);

// foreach
const names = ["Beau", "Alena", "Tania", "Ana"];
names.forEach((name) => console.log("👉️ name:", name));
// inmutable: no altera el valor
// ejem: aplicar foreach a "names" usando toUpperCase no altera el valor
console.log("👉️ names:", names);
names.forEach((name) => console.log("👉️ name:", name.toUpperCase()));
// mutable: altera el valor
// ejem: el metodo sort al ser aplicado a "names" altera su valor
names.sort();
console.log("👉️ names:", names);

// map (inmutable)
const namesUpper = names.map((name) => name.toUpperCase());
console.log("👉️ namesUpper:", namesUpper);
console.log("👉️ names:", names);

// reduce (inmutable)
const numbers = [5, 4, 7, 1, 10];
// reduce recibe una funcion de primer order como primer parametro
const total = numbers.reduce((ac, number) => {
  return ac + number;
}, 0);
console.log("👉️ total:", total);
console.log("👉️ numbers:", numbers);

// POO
// clase <- recomendado
class Drink {
  constructor(name) {
    this.name = name;
  }

  info() {
    return `La bebida es: ${this.name}`;
  }
}

const drink = new Drink("agua");
console.log(drink.info());

// (clase) funcional
function Drink2(name) {
  this.name = name;
  this.info = function () {
    return `La bebida es: ${this.name}`;
  };
}

const drink2 = new Drink2("coca");
console.log(drink2.info());
