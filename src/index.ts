import { sorter } from "./sorter";
import { NumberCollection } from "./NumbersCollections";
import { CharacterCollection } from "./CharacterCollection";
import { LinkedList } from "./LinkedList";

// const numberCollection = new NumberCollection([1000,-9,5,0,-2])
// const Sorter = new sorter(numberCollection)
// Sorter.sort();
// console.log(numberCollection.data);

// const characterCollection = new CharacterCollection("ZYjdgV");
// const Sorter = new sorter(characterCollection);
// Sorter.sort();
// console.log(characterCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-200);
linkedList.add(4);
linkedList.add(7);
linkedList.add(90);

linkedList.sort()
linkedList.print();
