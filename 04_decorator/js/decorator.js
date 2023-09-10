// component
class ProductComponent {
  constructor(name) {
    this.name = name;
  }

  getDetail() {
    return `${this.name}`;
  }
}

// decorator base
class ProductDecorator {
  constructor(productComponent) {
    this.productComponent = productComponent;
  }

  getDetail() {
    return this.productComponent.getDetail();
  }
}

// decorator 1
class CommercialInfoProductDecorator extends ProductDecorator {
  constructor(productComponent, tradeName, brand) {
    super(productComponent);
    this.tradeName = tradeName;
    this.brand = brand;
  }

  getDetail() {
    return `${this.tradeName} - ${this.brand}, ` + super.getDetail();
  }
}

// decorator 2
class StoreProductDecorator extends ProductDecorator {
  constructor(productComponent, price) {
    super(productComponent);
    this.price = price;
  }

  getDetail() {
    return super.getDetail() + `: $${this.price}`;
  }
}

// decorator 3
class HTMLProductDecorator extends ProductDecorator {
  getDetail() {
    return `<h1>Informacion del producto</h1>
    <p>
    ${super.getDetail()}
    </p>`;
  }
}

// ejecucion
// component
const productComponent = new ProductComponent("cerveza");
console.log("productComponent detail:", productComponent.getDetail());

// decorator 1 con component
const commercialInfoProduct = new CommercialInfoProductDecorator(
  productComponent,
  "london porter",
  "fuller's"
);
console.log("commercialInfoProduct detail:", commercialInfoProduct.getDetail());

// decorator 2 con component
const storeProduct = new StoreProductDecorator(productComponent, 420);
console.log("storeProduct:", storeProduct.getDetail());

// decorator 2 con decorator 1
const product = new StoreProductDecorator(commercialInfoProduct, 666);
console.log("product:", product.getDetail());

// decorator 3 con decorator 2 con decorator 1
const htmlProductDecorator = new HTMLProductDecorator(product);
myDiv.innerHTML = htmlProductDecorator.getDetail();
