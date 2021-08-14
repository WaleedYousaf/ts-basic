"use strict";
/***============== Functions ==============**/
var greet = function () {
    console.log('Hello, world');
};
// greet = 'hello';
greet = function () { return console.log('Hello, again'); };
/***-------------- Optional Params -----------------**/
var add = function (a, b, c) {
    console.log('Sum is: ', a + b);
    console.log('C is: ', c);
};
add(5, 10, 'sum');
// Either use `myParam?` to make it optional or give a default value
// The type of this method is `void` as its not returning anything
var sub = function (a, b, c) {
    if (c === void 0) { c = 'sub'; }
    console.log('Sum is: ', a - b);
    console.log('C is: ', c);
};
sub(15, 10, 'sum');
/***-------------- Return Values -----------------**/
var minus = function (a, b) {
    return a - b;
};
// result will infer the type of returned value
var result = minus(15, 5);
/***-------------- Explicit Return Values -----------------**/
var plus = function (a, b) {
    return a + b;
};
// result will infer the type of returned value
var resultForPlus = plus(15, 5);
