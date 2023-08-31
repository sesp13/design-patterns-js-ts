console.log('Hello from TS');

class Drink {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  info(): string {
    return this.name;
  }
}

const drink = new Drink('Aguila');
console.log(drink.info());

interface Product {
  price: number;
  getPrice(): string;
}

class Beer extends Drink implements Product {
  private alcohol: number;
  price: number;

  constructor(name: string, alcohol: number) {
    super(name);
    this.alcohol = alcohol;
  }

  getPrice(): string {
    return `$${this.price}`;
  }

  info(): string {
    return super.info() + ' Beeer';
  }
}

class Snack implements Product {
  price: number;
  name: string;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getPrice(): string {
    return `The price is ${this.price}`;
  }
}

const products: Product[] = [
  new Beer('Corona', 4),
  new Snack('Botana', 0.5),
  new Beer('Heineken', 1.2),
];

function getPrices(items: Product[]) {
  for (const item of items) {
    console.log(item.getPrice());
  }
}

getPrices(products);