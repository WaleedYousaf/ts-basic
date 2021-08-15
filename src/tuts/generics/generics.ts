/***============== Generics ==============**/
// They allow us to create reusable blocks of code which can be used with different types

const addUid = (obj: object) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
}

let docOne = addUid({ name: 'Ema', age: '40' });
console.log('init ', docOne);
// console.log('init ', docOne.name); // TS dont allow cuz it doesnt know the schema of the object passed

// To cater this, we'll use generics
// Can be other than `T` but notmally `T` is used
// This captures whatever object we pass to this function
// Now it knows what properties are on that object
const appendUid = <T>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
}

let docTwo = appendUid({ name: 'Ema', age: '40' });
console.log('init ', docTwo.name);

// Now in method, we are not specifying the type of the parameter, we are just saying it would be what is passed
let docThree = appendUid('hahaha');

// To take care of this, we can do something like

const appendUidUpdated = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
}

const appendUidUpdatedMore = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
}

// with interfaces
interface Player<T> {
  uid: number;
  name: string;
  data: T;
}

const docFour: Player<object> = {
  uid: 1,
  name: 'villa',
  data: { fName: 'david' }
};

const docFive: Player<string[]> = {
  uid: 2,
  name: 'Silva',
  data: ['dribble', 'passing']
};

console.log(docFour, docFive);
