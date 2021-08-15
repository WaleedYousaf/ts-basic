"use strict";
/***============== Tuples ==============**/
// Its also a built in type
// They are a little bit as arrays as we define them in square brackets and use array methods
// One major diff is the type of data in each position is fixed once its being initialized
// In JS or TS, we can do this, because its boolean was there at the time of initialization of array
let arr = ['messi', 25, true];
arr[0] = false;
// In tuples
let tup = ['messi', 30, false];
// let tupTwo: [string, number, boolean] = ['messi', 30, 'silva']; // not allowed
// tup[0] = false // cant do this
tup[0] = 'neymar'; // allowed
let player;
player = ['Ronaldo', 30];
// player = ['Ronaldo', 'Messi']; // not allowed
