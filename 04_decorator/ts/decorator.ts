// interface Component
interface Component {
  getDetail(): string;
}

// ConcreteComponent
class ProductComponent implements Component {
  // este viene siendo el funcionamiento central
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getDetail(): string {
    return `${this.name}`;
  }
}

// Decorator (ComponentDecorator)
abstract class ProductDecorator implements Component {
  // 👆️ abstract: permite que no se puedean crear
  // objeto de esta clase aunque de sus hijos si
  // en este caso se comporta como una envoltura
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  getDetail(): string {
    return this.component.getDetail();
  }
}

// decorator 1
class CommercialInfoProductDecorator extends ProductDecorator {
  private tradename: string;
  private brand: string;

  constructor(component: Component, tradename: string, brand: string) {
    super(component);
    this.tradename = tradename;
    this.brand = brand;
  }

  getDetail(): string {
    return `${this.tradename} ${this.brand}` + super.getDetail();
  }
}

// decorator 2
class StoreProductDecorator extends ProductDecorator {
  private price: number;

  constructor(component: Component, price: number) {
    super(component);
    this.price = price;
  }

  getDetail(): string {
    return super.getDetail() + ` $${this.price}`;
  }
}

// decorator 3
class HTMLProductDecorator extends ProductDecorator {
  getDetail(): string {
    return `<h1>Informacion del producto:</h1>
      <p>${super.getDetail()}</p>
    `;
  }
}

// ejecucion
// usando (concrete) component
const productComponent = new ProductComponent("Cerveza");
console.log("productComponent getDetail:", productComponent.getDetail());

// decorator 1 con component
const commercialInfoProduct = new CommercialInfoProductDecorator(
  productComponent,
  "London Porter",
  "Fuller's"
);
console.log(
  "commercialInfoProduct getDetail:",
  commercialInfoProduct.getDetail()
);

// decorator 2 con component
const storeProduct = new StoreProductDecorator(productComponent, 15.5);
console.log("storeProduct getDetail:", storeProduct.getDetail());

// decorator 2 con decorator 1
const storeProduct2 = new StoreProductDecorator(commercialInfoProduct, 7);
console.log("storeProduct2 getDetail:", storeProduct2.getDetail());

// decorator 3 con decorator 2 con decorator 1
const htmlProductDecorator = new HTMLProductDecorator(storeProduct2);
console.log(
  "htmlProductDecorator getDetail:",
  htmlProductDecorator.getDetail()
);
