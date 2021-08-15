"use strict";
/***============== DOM ==============**/
const anchorTag = document.querySelector('a');
// if we try to use `anchorTag` or access a property of anchorTag, TS throws error as it dont have access to index.html during development
// so try using conditional or operation chaining
console.log('anchor', anchorTag === null || anchorTag === void 0 ? void 0 : anchorTag.href);
// otherwise we can use `!` if we are certain that our DOM has that element, like
const divElement = document.querySelector('div');
console.log('div: ', divElement.className);
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs - `as` typecasting
// const type = document.querySelector('#type')!; // throws an error cuz TS gets that element but dont now what it actually is, we have to specify its type using `TypeCasting`
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(`
    Type: ${type.value},
    To/From: ${toFrom.value},
    Details: ${details.value},
    Amount: ${amount.valueAsNumber},
  `);
});
