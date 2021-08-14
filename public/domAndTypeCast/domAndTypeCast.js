"use strict";
/***============== DOM ==============**/
var anchorTag = document.querySelector('a');
// if we try to use `anchorTag` or access a property of anchorTag, TS throws error as it dont have access to index.html during development
// so try using conditional or operation chaining
console.log('anchor', anchorTag === null || anchorTag === void 0 ? void 0 : anchorTag.href);
// otherwise we can use `!` if we are certain that our DOM has that element, like
var divElement = document.querySelector('div');
console.log('div: ', divElement.className);
var form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs - `as` typecasting
// const type = document.querySelector('#type')!; // throws an error cuz TS gets that element but dont now what it actually is, we have to specify its type using `TypeCasting`
var type = document.querySelector('#type');
var toFrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("\n    Type: " + type.value + ",\n    To/From: " + toFrom.value + ",\n    Details: " + details.value + ",\n    Amount: " + amount.valueAsNumber + ",\n  ");
});
