interface Component {
  getDetail(): string;
}

class ProductComponent implements Component {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  getDetail(): string {
    return `${this.name}`;
  }
}

abstract class ProductDecorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  getDetail(): string {
    return this.component.getDetail();
  }
}

class CommercialInfoProductDecorator extends ProductDecorator {
  private tradename: string;
  private brand: string;

  constructor(component: Component, tradename: string, brand: string) {
    super(component);
    this.tradename = tradename;
    this.brand = brand;
  }

  public getDetail(): string {
    return `${this.tradename} ${this.brand} ${super.getDetail()}`;
  }
}

class StoreProductDecorator extends ProductDecorator {
  private price: number;

  constructor(component: Component, price: number) {
    super(component);
    this.price = price;
  }

  getDetail(): string {
    return `${super.getDetail()} $${this.price}`;
  }
}

class HtmlProductDecorator extends ProductDecorator {
  getDetail(): string {
    return `<h1>Product Information</h1>
      <p>
          ${super.getDetail()}      
      </p>
      `;
  }
}

const productComponent = new ProductComponent('beer');
console.log(productComponent.getDetail());

// Decorator 1 on component
const commercialInfoProduct = new CommercialInfoProductDecorator(
  productComponent,
  'London Poter',
  "Fuller's"
);
console.log(commercialInfoProduct.getDetail());

// Decorator 2 on component
const storeProduct = new StoreProductDecorator(commercialInfoProduct, 50);
console.log(storeProduct.getDetail());

// Decorator 3 on 2 on 1
const htmlProductDecorator = new HtmlProductDecorator(storeProduct);
console.log(htmlProductDecorator.getDetail());