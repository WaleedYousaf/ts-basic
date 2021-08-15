"use strict";
/***============== Functions ==============**/
let greet = () => {
    console.log('Hello, world');
};
// greet = 'hello';
greet = () => console.log('Hello, again');
/***-------------- Optional Params -----------------**/
const add = (a, b, c) => {
    console.log('Sum is: ', a + b);
    console.log('C is: ', c);
};
add(5, 10, 'sum');
// Either use `myParam?` to make it optional or give a default value
// The type of this method is `void` as its not returning anything
const sub = (a, b, c = 'sub') => {
    console.log('Sum is: ', a - b);
    console.log('C is: ', c);
};
sub(15, 10, 'sum');
/***-------------- Return Values -----------------**/
const minus = (a, b) => {
    return a - b;
};
// result will infer the type of returned value
let result = minus(15, 5);
/***-------------- Explicit Return Values -----------------**/
const plus = (a, b) => {
    return a + b;
};
// result will infer the type of returned value
let resultForPlus = plus(15, 5);
