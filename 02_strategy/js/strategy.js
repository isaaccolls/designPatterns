// contexto 👇️
class SaleContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  calculate(amount) {
    return this.strategy.calculate(amount);
  }
}

// estrategia 1 👇️
class RegularSaleStrategy {
  constructor(tax) {
    this.tax = tax;
  }

  calculate(amount) {
    return amount + amount * this.tax;
  }
}

// estrategia 2 👇️
class DiscountSaleStrategy {
  constructor(tax, discount) {
    this.tax = tax;
    this.discount = discount;
  }

  calculate(amount) {
    return amount + amount * this.tax - this.discount;
  }
}

// estrategia 3 👇️
class ForeignSaleStrategy {
  calculate(amount) {
    return amount * this.getDollarPrice();
  }

  getDollarPrice() {
    return 20;
  }
}

const regularSale = new RegularSaleStrategy(0.16); // mexico tax 0.16
const discountSale = new DiscountSaleStrategy(0.16, 3);
const foreignSale = new ForeignSaleStrategy();

const sale = new SaleContext(regularSale);

// usando calculate de la primera estrategia 👇️
console.log("👉️ sale calculate 10:", sale.calculate(10));

// cambio de estrategia 👇️
sale.setStrategy(discountSale);

// usando calculate de la segunda estrategia 👇️
console.log("👉️ sale calculate 10:", sale.calculate(10));

// cambio de estrategia 👇️
sale.setStrategy(foreignSale);

// usando calculate de la tercera estrategia 👇️
console.log("👉️ sale calculate 10:", sale.calculate(10));
