/***============== Explicit Types ==============**/
/***-------------- Basic types -----------------**/
var character;
var age;
var isBlackBelt;
// age = 'max'; TS dont allow cuz var age has an explicit type number
isBlackBelt = true;
/***-------------- Arrays -----------------**/
// let ninjas: string[]; // not initialized, just defined type
var ninjas = [];
ninjas.push('adam');
/***-------------- Union -----------------**/
var mixed = [];
mixed.push(20);
mixed.push('ema');
// mixed.push(false); // TS dont allow
// union on basic types (no need of `()`)
var uid;
uid = 123;
uid = 'maxie';
// uid = false; // TS dont allow
// union on object
var ninjaOne;
ninjaOne = { name: 'damian', age: 30 };
var ninjaTwo;
ninjaTwo = { name: 'matt', age: 19, beltColor: 'black' };
