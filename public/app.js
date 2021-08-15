import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs - `as` typecasting
// const type = document.querySelector('#type')!; // throws an error cuz TS gets that element but dont now what it actually is, we have to specify its type using `TypeCasting`
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // let values = [toFrom.value, details.value, amount.valueAsNumber];
    // cant directly use this array to pass in our constructor by spreading array cuz it dont know the types so we can use tuples 
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
