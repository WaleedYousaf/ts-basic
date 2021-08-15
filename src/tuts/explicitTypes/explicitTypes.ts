/***============== Explicit Types ==============**/

/***-------------- Basic types -----------------**/
let character2: string;
let age2: number;
let isBlackBelt2: boolean;

// age2 = 'max'; TS dont allow cuz var age2 has an explicit type number
isBlackBelt2 = true;

/***-------------- Arrays -----------------**/
// let users: string[]; // not initialized, just defined type
let users: string[] = [];
users.push('adam');

/***-------------- Union -----------------**/
let mixed2: (string|number)[] = [];
mixed2.push(20);
mixed2.push('ema');
// mixed2.push(false); // TS dont allow

// union on basic types (no need of `()`)
let uid: number|string;
uid = 123;
uid = 'maxie';
// uid = false; // TS dont allow

// union on object
let userOne: object;
userOne = { name: 'damian', age2: 30 };

let userTwo: {
  name: string,
  age2: number,
  beltColor: string,
};

userTwo = { name: 'matt', age2: 19, beltColor: 'black' };
