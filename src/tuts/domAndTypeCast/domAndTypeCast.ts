/***============== DOM ==============**/

const anchorTag = document.querySelector('a');

// if we try to use `anchorTag` or access a property of anchorTag, TS throws error as it dont have access to index.html during development
// so try using conditional or operation chaining
console.log('anchor', anchorTag?.href);

// otherwise we can use `!` if we are certain that our DOM has that element, like
const divElement = document.querySelector('div')!;
console.log('div: ', divElement.className);

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// inputs - `as` typecasting
// const type = document.querySelector('#type')!; // throws an error cuz TS gets that element but dont now what it actually is, we have to specify its type using `TypeCasting`
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  console.log(`
    Type: ${type.value},
    To/From: ${toFrom.value},
    Details: ${details.value},
    Amount: ${amount.valueAsNumber},
  `);
});
