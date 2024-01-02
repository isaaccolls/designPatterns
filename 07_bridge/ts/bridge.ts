// IMPLEMENTATION PART
// Implementor
interface ListImplementor {
  elements: number[];

  add(number: number): void;
  getElements(): number[];
}

// Concrete Implementor 1
class OrderedList implements ListImplementor {
  elements: number[] = [];

  public add(number: number): void {
    this.elements.push(number);
    this.elements.sort();
  }

  public getElements(): number[] {
    return this.elements;
  }
}

// Concrete Implementor 2
class UniqueList implements ListImplementor {
  elements: number[] = [];

  public add(number: number): void {
    if (!this.elements.includes(number)) {
      this.elements.push(number);
    }
  }

  public getElements(): number[] {
    return this.elements;
  }
}

// ABSTRACTION PART
// IAbstraction
interface DataAbstraction {
  implementor: ListImplementor;
  add(number: number): void;
  get(): number[];
  operation(fn: (n: number) => number): number[];
}

// Refined Abstraction
class DataRefinedAbstraction implements DataAbstraction {
  implementor: ListImplementor;

  constructor(implementor: ListImplementor) {
    this.implementor = implementor;
  }

  public add(number: number): void {
    this.implementor.add(number);
  }

  public get(): number[] {
    return this.implementor.getElements();
  }

  public operation(fn: (n: number) => number): number[] {
    return this.implementor.getElements().map(fn);
  }
}

// test
//
const uniqueData = new DataRefinedAbstraction(new UniqueList());
uniqueData.add(3);
uniqueData.add(3);
uniqueData.add(1);
uniqueData.add(1);
uniqueData.add(2);
console.log("👉 uniqueData:", uniqueData.get()); // [3, 1, 2]
const uniqueItems = uniqueData.operation((e: number) => e * 2);
console.log("👉 uniqueItems:", uniqueItems); // [6, 2, 4]
//
const orderedData = new DataRefinedAbstraction(new OrderedList());
orderedData.add(3);
orderedData.add(3);
orderedData.add(1);
orderedData.add(1);
orderedData.add(2);
console.log("👉 orderedData:", orderedData.get());
const orderedItems = orderedData.operation((e: number) => e * 2);
console.log("👉 orderedItems:", orderedItems);
