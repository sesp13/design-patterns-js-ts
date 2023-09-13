interface ListImplementor {
  elements: number[];
  add(n: number): void;
  getElements(): number[];
}

class OrderedList implements ListImplementor {
  elements: number[] = [];

  public add(n: number): void {
    this.elements.push(n);
    this.elements.sort();
  }

  public getElements(): number[] {
    return this.elements;
  }
}

class UniqueList implements ListImplementor {
  elements: number[] = [];

  add(n: number): void {
    if (!this.elements.includes(n)) {
      this.elements.push(n);
    }
  }

  getElements(): number[] {
    return this.elements;
  }
}

interface DataAbstraction {
  implementor: ListImplementor;
  add(n: number): void;
  get(): number[];
  operation(fn: (n: number) => number): number[];
}

class DataRefinedAbstraction implements DataAbstraction {
  implementor: ListImplementor;

  constructor(implementor: ListImplementor) {
    this.implementor = implementor;
  }

  add(n: number): void {
    this.implementor.add(n);
  }

  get(): number[] {
    return this.implementor.getElements();
  }

  operation(fn: (n: number) => number): number[] {
    return this.implementor.getElements().map(fn);
  }
}

const uniqueData = new DataRefinedAbstraction(new UniqueList());
const orderedData = new DataRefinedAbstraction(new OrderedList());

uniqueData.add(3);
uniqueData.add(3);
uniqueData.add(2);
uniqueData.add(1);
console.log(uniqueData.get());

orderedData.add(3);
orderedData.add(3);
orderedData.add(2);
orderedData.add(1);
console.log(orderedData.get());

const uniqueItems = uniqueData.operation((n: number) => n * 2);
const orderedItems = orderedData.operation((n: number) => n*5)
console.log(uniqueItems);
console.log(orderedItems);