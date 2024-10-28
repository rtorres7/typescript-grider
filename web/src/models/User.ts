import { Model } from './Model';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';

export interface UserProps {
  id?: number | string;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

// using inheritance vs composition
export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new ApiSync<UserProps>(rootUrl),
      new Eventing()
    );
  }
}

// // MEGA USER CLASS
// import axios, { AxiosResponse } from 'axios';

// interface UserProps {
//   id?: number | string;
//   name?: string;
//   age?: number;
// }

// // use as a type annotation
// type Callback = () => void;

// export class User {
//   events: { [key: string]: Callback[] } = {};

//   // value for class property 'data' of type UserProps
//   // is provided when this class is instantiated
//   constructor(private data: UserProps) {}

//   get(propName: string): string | number {
//     return this.data[propName];
//   }

//   set(update: UserProps): void {
//     Object.assign(this.data, update);
//   }

//   on(eventName: string, callback: Callback): void {
//     // building an array of callbacks for some event
//     const handlers = this.events[eventName] || [];
//     handlers.push(callback);
//     this.events[eventName] = handlers;
//   }

//   trigger(eventName: string): void {
//     const handlers = this.events[eventName];
//     // check to see if handlers has a value
//     if (!handlers || handlers.length === 0) {
//       return;
//     }
//     handlers.forEach((callback) => {
//       callback();
//     });
//   }

//   fetch(): void {
//     axios
//       .get(`http://localhost:3000/users/${this.get('id')}`)
//       .then((response: AxiosResponse): void => {
//         this.set(response.data);
//       });
//   }

//   save(): void {
//     const id = this.get('id');
//     if (id) {
//       axios.put(`http://localhost:3000/users/${id}`, this.data);
//     } else {
//       axios.post('http://localhost:3000/users', this.data);
//     }
//   }
// }
