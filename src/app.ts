import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

// can initiate from Invoice or Payment cuz they both `has` `HasFormatter`
docOne = new Invoice('Neymar', 'barca to psg', 200);
docTwo = new Payment('Ronaldo', 'madrid to juventus', 250);

let docs: HasFormatter[] = [];
// both have type `HasFormatter`
docs.push(docOne);
docs.push(docTwo);

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

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
  }


  console.log('Doc is: ', doc);
});
