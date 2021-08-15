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

const InvoiceOne = new Invoice('Ema', 'work on the website', 500);
const InvoiceTwo = new Invoice('Carl', 'work on sales', 300);
const InvoiceThree = new Payment('Carl', 'work on sales', 300);

console.log(InvoiceOne, InvoiceTwo);

// inferring the class type object's array
let Invoices: Invoice[] = [];
// Invoices.push('Jill'); // TS dont allow cuz type inferred is Invoice
Invoices.push(InvoiceOne);
Invoices.push(InvoiceTwo);

/***------------ Access Modifiers ------------**/
// all the properties of the class are public by default, we can change their "instance's" values, BUT we cant change their types
InvoiceOne.client = 'Jill';
// InvoiceOne.details = 200; // TS dont allow changing type

Invoices.forEach((Invoice) => {
  // Invoice.id = 202; // TS dont allow cuz the property 'id' is `readonly`. Cant even update inside the class
  // console.log(Invoice.identity); // TS dont allow cuz property 'identity' is private and is only access-able inside the class
  console.log(Invoice.client, Invoice.details, Invoice.amount, Invoice.format());
});
