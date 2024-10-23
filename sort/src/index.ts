import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedListCollection } from './LinkedListCollection';

const numbersCollection = new NumbersCollection([17, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Xaayb');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedListCollection = new LinkedListCollection();
linkedListCollection.add(500);
linkedListCollection.add(-10);
linkedListCollection.add(-3);
linkedListCollection.add(4);
linkedListCollection.sort();
linkedListCollection.print();
