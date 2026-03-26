console.log("hi typescript");

class Drink {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }

  info(): string {
    return this.name;
  }
}

const drink = new Drink("fanta");
console.log(drink.info());

// interfaz
// permite categorizar objetos
interface Product {
  price: number;
  getPrice(): string;
}

// herencia
class Beer extends Drink implements Product {
  private alcohol: number;
  price: number;

  constructor(name: string, alcohol: number, price: number) {
    super(name);
    this.alcohol = alcohol;
    this.price = price;
  }

  info(): string {
    return super.info() + " " + this.alcohol;
  }

  getPrice(): string {
    return "$ " + this.price;
  }
}

const beer = new Beer("corona", 2.1, 10);
console.log(beer.info());

class Snack implements Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getPrice(): string {
    return "El precio es: $" + this.price;
  }
}

const products: Product[] = [
  new Beer("heineken", 4.5, 7),
  new Snack("papas", 0.5),
  new Beer("coors", 7.3, 13),
];

function getPrices(items: Product[]) {
  for (const item of items) {
    console.log(item.getPrice());
  }
}

getPrices(products);
