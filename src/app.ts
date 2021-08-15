import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// inputs - `as` typecasting
// const type = document.querySelector('#type')!; // throws an error cuz TS gets that element but dont now what it actually is, we have to specify its type using `TypeCasting`
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  // let values = [toFrom.value, details.value, amount.valueAsNumber];
  // cant directly use this array to pass in our constructor by spreading array cuz it dont know the types so we can use tuples 

  let values: [string, string, number];
  values = [toFrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }

  list.render(doc, type.value, 'end');
});
