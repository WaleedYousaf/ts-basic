/***============== Basic Inference ==============**/

/***-------------- Basic types and methods inference -----------------**/
let character = 'mario';
let age = 'mario';
let isBlackBelt = false;

// character = 20; // TS dont allow type change
character = 'luigi';

// define type of a param with `myParam: number`
const circumference = (diameter: number) => diameter * Math.PI;

console.log('circumference is: ', circumference(30));


/***-------------- Array inference -----------------**/
let names = ['max', 'ema'];
names.push('dave');
// names.push(20); // TS dont allow

names[0] = 'shawn';
// names[0] = 20; // TS dont allow
// name = 'dave'; // TS dont allow

// at the time of declaration, if the array has
let mixed = ['kim', 20, 'ann'];
mixed.push(30);
mixed[1] = 'mac';
// mixed[0] = false; // TS dont allow cuz array inference is string|number

/***-------------- Object inference -----------------**/
let knight = {
  name: 'jason',
  belt: 'black',
  age: 19,
};

knight.age = 20;
// knight.name = 30; // TS dont allow
// knight.skill = 'mma'; // TS dont allow

knight = {
  name: 'gordan',
  belt: 'white',
  age: 43,
};

// knight = {
//   name: 'gordan',
//   myBelt: 'white',
//   skill: 'ji-jitsu'
// }; // TS dont allow adding or changing keys, signature/schema has to be the same
