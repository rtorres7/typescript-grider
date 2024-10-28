import { User } from './models/User';
// import axios from 'axios';

const user8 = User.buildUser({ id: 'b1c7' });

user8.on('change', () => {
  console.log(user8);
});
user8.fetch();

// // 180. Setting Data While Triggering
// const user5 = new User({ id: '7tm3', name: 'Chloe', age: 24 });
// console.log(user5.get('name'));
// user5.on('change', () => {
//   console.log('user was changed');
// });
// user5.set({ age: 25 });
// console.log(user5);

// // 181. Fetching User Data
// const user6 = new User({ id: 'ba87' });
// user6.fetch();
// user6.on('change', () => {
//   console.log('change to user: ', user6);
// });

// // 182. Saving Data
// const user7 = new User({ id: 'a931', name: 'Xander', age: 33 });
// user7.save();
// user7.on('save', () => {
//   console.log('saved user: ', user7);
// });

// user5.on('booBoo', () => {
//   console.log('ehello ther!!!');
// });

// // a reminder about accessors
// class Person {
//   constructor(public firstName: string, public lastName: string) {}

//   // "get" is the accessor
//   get fullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
// const person = new Person('Fiona', 'Jenkins');
// console.log(person.fullName);

// // a reminder about how "this" works in javascript
// const colors = {
//   color: 'red',
//   // "this" in this function refers to (see below)...
//   printColor() {
//     console.log(this.color);
//   },
// };
// // what is to the left when invoked, in this case "colors"
// colors.printColor();

// // create instance of class User providing it
// // a type UserProps
// const user1 = new User({ name: 'Jack', age: 12 });

// // invoke class setter and getter
// user1.set({ age: 55, name: 'aNewNewName' });
// console.log(user1.get('name'));
// console.log(user1.get('age'));

// // check to see if events are registering
// user1.events.on('change', () => {});
// user1.events.on('change', () => {});
// user1.events.on('anotherChange', () => {});
// // verify in console that events are registering
// console.log(user1);

// // check to see if events trigger callback(s)
// user1.events.on('change', () => {
//   console.log('change #1 triggered!');
// });
// user1.events.on('change', () => {
//   console.log('change #2 triggered!!');
// });
// user1.events.on('anotherChange', () => {
//   console.log('anotherChange triggered!!!');
// });
// // verify in console events trigger callback(s)
// user1.events.trigger('change');
// user1.events.trigger('anotherChange');
// // should not see anything in console
// user1.events.trigger('caseWhereNoEventIsSpecified');

// // test http methods
// // creates new user
// axios.post('http://localhost:3000/users', { name: 'nameForAxios', age: 45 });
// // gets user with specified 'id'
// axios.get('http://localhost:3000/users/0214');

// // create a user using existing record of a user, understanding
// // that we may not know the 'id' of a user ahead of time
// const user2 = new User({ id: '10aa' });

// user2.fetch();

// setTimeout(() => {
//   console.log(user2);
// }, 4000);

// // update an existing user - user with existing 'id'
// const user3 = new User({ id: 'b1c7' });
// user3.set({ name: 'Fernando', age: 50 });
// user3.save();

// // create new user
// const user4 = new User({ name: 'Alonzo', age: 51 });
// user4.save();
