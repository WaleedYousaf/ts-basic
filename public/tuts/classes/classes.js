"use strict";
/***============== Classes ==============**/
class MyInvoice {
    constructor(client, details, amount, id = 101, identity = 'secret') {
        this.format = () => `${this.client} owes $${this.amount} for ${this.details}`;
        this.client = client;
        this.details = details;
        this.amount = amount;
        this.id = id;
        this.identity = identity;
    }
}
const MyInvoiceOne = new MyInvoice('Ema', 'work on the website', 500);
const MyInvoiceTwo = new MyInvoice('Carl', 'work on sales', 300);
// console.log(MyInvoiceOne, MyInvoiceTwo);
// inferring the class type object's array
let MyInvoices = [];
// MyInvoices.push('Jill'); // TS dont allow cuz type inferred is MyInvoice
MyInvoices.push(MyInvoiceOne);
MyInvoices.push(MyInvoiceTwo);
/***------------ Access Modifiers ------------**/
// all the properties of the class are public by default, we can change their "instance's" values, BUT we cant change their types
MyInvoiceOne.client = 'Jill';
// MyInvoiceOne.details = 200; // TS dont allow changing type
MyInvoices.forEach((MyInvoice) => {
    // MyInvoice.id = 202; // TS dont allow cuz the property 'id' is `readonly`. Cant even update inside the class
    // console.log(MyInvoice.identity); // TS dont allow cuz property 'identity' is private and is only access-able inside the class
    console.log(MyInvoice.client, MyInvoice.details, MyInvoice.amount, MyInvoice.format());
});
class MyInvoiceUpdated {
    // if using access modifiers with all the params, we can use shorthand like
    constructor(client, id = 101, identity = 'secret') {
        this.client = client;
        this.id = id;
        this.identity = identity;
        this.client = client;
        this.id = id;
        this.identity = identity;
    }
}
