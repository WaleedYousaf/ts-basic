"use strict";
/***============== Explicit Types ==============**/
/***-------------- Basic types -----------------**/
var character2;
var age2;
var isBlackBelt2;
// age2 = 'max'; TS dont allow cuz var age2 has an explicit type number
isBlackBelt2 = true;
/***-------------- Arrays -----------------**/
// let users: string[]; // not initialized, just defined type
var users = [];
users.push('adam');
/***-------------- Union -----------------**/
var mixed2 = [];
mixed2.push(20);
mixed2.push('ema');
// mixed2.push(false); // TS dont allow
// union on basic types (no need of `()`)
var uid;
uid = 123;
uid = 'maxie';
// uid = false; // TS dont allow
// union on object
var userOne;
userOne = { name: 'damian', age2: 30 };
var userTwo;
userTwo = { name: 'matt', age2: 19, beltColor: 'black' };
