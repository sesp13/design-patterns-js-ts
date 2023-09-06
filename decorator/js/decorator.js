// Component
class ProductComponent {
  constructor(name) {
    this.name = name;
  }

  getDetail() {
    return `${this.name}`;
  }
}

// Decorator
class ProductDecorator {
  constructor(productComponent) {
    this.productComponent = productComponent;
  }

  getDetail() {
    return this.productComponent.getDetail();
  }
}

class ComercialInfoProductDecorator extends ProductDecorator {
  constructor(productComponent, tradename, brand) {
    super(productComponent);
    this.tradename = tradename;
    this.brand = brand;
  }

  // Extra functionality here!
  getDetail() {
    return `${this.tradename} ${this.brand} ${super.getDetail()}`;
  }
}

class StoreProductDecorator extends ProductDecorator {
  constructor(productComponent, price) {
    super(productComponent);
    this.price = price;
  }

  getDetail() {
    return `${super.getDetail()} $${this.price}`;
  }
}

class HtmlProductDecorator extends ProductDecorator {
  getDetail() {
    return `
      <h1>Product info</h1>
      <p>${super.getDetail()}</p>
    `;
  }
}

// Execution
const productComponent = new ProductComponent('Beer');
console.log(productComponent.getDetail()); // Base functionality

// Decorator 1 on component
const commercialInfoComponent = new ComercialInfoProductDecorator(
  productComponent,
  'London Potter',
  'Fuller'
);
// This has extra functionality thanks to decorator
console.log(commercialInfoComponent.getDetail());

const storeProductComponent = new StoreProductDecorator(productComponent, 50);
console.log(storeProductComponent.getDetail());

// decorator 2 with 1
const product = new StoreProductDecorator(commercialInfoComponent, 50);
console.log(product.getDetail());

// decorator html mixed
const htmlProduct = new HtmlProductDecorator(product);
myDiv.innerHTML =  htmlProduct.getDetail();
