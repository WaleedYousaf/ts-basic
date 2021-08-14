"use strict";
/***============== Explicit Types ==============**/
/***-------------- Basic types -----------------**/
let character2;
let age2;
let isBlackBelt2;
// age2 = 'max'; TS dont allow cuz var age2 has an explicit type number
isBlackBelt2 = true;
/***-------------- Arrays -----------------**/
// let users: string[]; // not initialized, just defined type
let users = [];
users.push('adam');
/***-------------- Union -----------------**/
let mixed2 = [];
mixed2.push(20);
mixed2.push('ema');
// mixed2.push(false); // TS dont allow
// union on basic types (no need of `()`)
let uid;
uid = 123;
uid = 'maxie';
// uid = false; // TS dont allow
// union on object
let userOne;
userOne = { name: 'damian', age2: 30 };
let userTwo;
userTwo = { name: 'matt', age2: 19, beltColor: 'black' };
