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
