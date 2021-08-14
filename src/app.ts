import { Invoice } from "./classes/Invoice.js";

const InvoiceOne = new Invoice('Ema', 'work on the website', 500);
const InvoiceTwo = new Invoice('Carl', 'work on sales', 300);

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
