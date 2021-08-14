/***============== Explicit Types ==============**/

/***-------------- Basic types -----------------**/
let character: string;
let age: number;
let isBlackBelt: boolean;

// age = 'max'; TS dont allow cuz var age has an explicit type number
isBlackBelt = true;

/***-------------- Arrays -----------------**/
// let ninjas: string[]; // not initialized, just defined type
let ninjas: string[] = [];
ninjas.push('adam');

/***-------------- Union -----------------**/
let mixed: (string|number)[] = [];
mixed.push(20);
mixed.push('ema');
// mixed.push(false); // TS dont allow

// union on basic types (no need of `()`)
let uid: number|string;
uid = 123;
uid = 'maxie';
// uid = false; // TS dont allow

// union on object
let ninjaOne: object;
ninjaOne = { name: 'damian', age: 30 };

let ninjaTwo: {
  name: string,
  age: number,
  beltColor: string,
};

ninjaTwo = { name: 'matt', age: 19, beltColor: 'black' };
