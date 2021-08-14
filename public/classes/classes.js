"use strict";
/***============== Classes ==============**/
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount, id, identity) {
        var _this = this;
        if (id === void 0) { id = 101; }
        if (identity === void 0) { identity = 'secret'; }
        this.format = function () { return _this.client + " owes $" + _this.amount + " for " + _this.details; };
        this.client = client;
        this.details = details;
        this.amount = amount;
        this.id = id;
        this.identity = identity;
    }
    return Invoice;
}());
var invoiceOne = new Invoice('Ema', 'work on the website', 500);
var invoiceTwo = new Invoice('Carl', 'work on sales', 300);
// console.log(invoiceOne, invoiceTwo);
// inferring the class type object's array
var invoices = [];
// invoices.push('Jill'); // TS dont allow cuz type inferred is Invoice
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
/***------------ Access Modifiers ------------**/
// all the properties of the class are public by default, we can change their "instance's" values, BUT we cant change their types
invoiceOne.client = 'Jill';
// invoiceOne.details = 200; // TS dont allow changing type
invoices.forEach(function (invoice) {
    // invoice.id = 202; // TS dont allow cuz the property 'id' is `readonly`. Cant even update inside the class
    // console.log(invoice.identity); // TS dont allow cuz property 'identity' is private and is only access-able inside the class
    console.log(invoice.client, invoice.details, invoice.amount, invoice.format());
});
var InvoiceUpdated = /** @class */ (function () {
    // if using access modifiers with all the params, we can use shorthand like
    function InvoiceUpdated(client, id, identity) {
        if (id === void 0) { id = 101; }
        if (identity === void 0) { identity = 'secret'; }
        this.client = client;
        this.id = id;
        this.identity = identity;
        this.client = client;
        this.id = id;
        this.identity = identity;
    }
    return InvoiceUpdated;
}());
