// import { UserProps } from "./User";

export class Attributes<T extends object> {
  // value for class property 'data' of type UserProps
  // is provided when this class is instantiated
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}

// // see how generic constraints work - hover over name to see correct type
// const attrs = new Attributes<UserProps>({name: 'Louis', age: 28, id: 'w3si'})
// const name = attrs.get('age')
