// import { UserProps } from "./User";

export class Attributes<T extends object> {
  // value for class property 'data' of type UserProps
  // is provided when this class is instantiated
  constructor(private data: T) {}

  //   // converted to arrow (bind) function that has its "this"
  //   // value permanently set to a specific object (attributes)
  //   get<K extends keyof T>(key: K): T[K] {
  //     return this.data[key];
  //   }
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key]; // same as attributes.data[key]
  };

  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}

// // see how generic constraints "<K extends keyof t>(key: K): T[K]"
// // works - hover over name to see correct type
// const attrs = new Attributes<UserProps>({name: 'Louis', age: 28, id: 'w3si'})
// const name = attrs.get('name')
// const age = attrs.get('age')
// const id = attrs.get('id')
