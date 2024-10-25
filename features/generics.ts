class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

// use ArrayOfAnything class with strings
const arrayOfAnything = new ArrayOfAnything<string>(['a', 'b', 'c']);

// generics type inference - hover over elements... typescript knows!
const arr = new ArrayOfAnything(['x', 'y', 'z']);

// example of generics with functions

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// use printAnything function with strings
printAnything<string>(['l', 'm', 'n', 'o']);

// generics type inference - hover over elements... typescript knows!
printAnything(['e', 'f', 'g']);

// generic constraints

class aCar {
  print() {
    console.log('i am a car');
  }
}

class aHouse {
  print() {
    console.log('i am a house');
  }
}

interface Printable {
  print(): void;
}

// "extends Printable" is the generic constraint, we are promising
// that the function "print" will be available
function printCarsOrHouses<T extends Printable>(carsOrHouses: T[]): void {
  for (let i = 0; i < carsOrHouses.length; i++) {
    carsOrHouses[i].print();
  }
}

// invoke function above
printCarsOrHouses<aHouse>([new aHouse(), new aHouse()]);
printCarsOrHouses<aCar>([new aCar(), new aCar()]);
