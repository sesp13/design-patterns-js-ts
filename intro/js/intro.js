function sum(a, b) {
  return a + b;
}

let res = sum(1, 2);
console.log(res);

// Función de primer orden
const fsum = sum;
res = fsum(5, 6);
console.log(res);

// Función de orden superior
function operation(fn, a, b) {
  console.log('Se hace algo');
  console.log(fn(a, b));
}
operation(fsum, 5, 5);

// arrow function
let fA = () => {
  console.log('Arrow');
};
operation((a, b) => a * b, 5, 89);
operation(
  (a, b) => {
    const c = a - b;
    return c * 2;
  },
  1,
  2
);

//foreach
console.log('For each!');
const names = ['juan', 'valentina', 'jonas'];
names.forEach((name) => console.log(name));
names.forEach((name) => console.log(name.toUpperCase()));

// map
console.log('Map');
const namesUpper = names.map((name) => name.toUpperCase());
console.log(names);
console.log(namesUpper);

// reduce
console.log('Reduce');
const numbers = [5, 4, 6, 8, 2];
const total = numbers.reduce((acum, number) => acum + number, 0);
console.log(total);

// Programación orientada a objetos
// Classes

class Drink {
  constructor(name) {
    this.name = name;
  }

  info() {
    return `The drink is ${this.name}`;
  }
}

const drink = new Drink('water');
console.log(drink.name);
console.log(drink.info());

// functional classes
function Drink2(name) {
  this.name = name;
  this.info = function () {
    return `The drink is ${this.name}`;
  };
}

// Herencia
class Beer extends Drink {
  constructor(name, alcohol) {
    super(name);
    this.alcohol = alcohol;
  }

  info() {
    return super.info() + ' Hi from beer';
  }
}
const beer = new Beer('erdinger', 8.5);
console.log(beer.info());
