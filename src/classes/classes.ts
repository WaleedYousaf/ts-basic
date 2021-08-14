/***============== Classes ==============**/
class Invoice {
  // properties
  // public client: string; // can avoid public as by default its public
  client: string;
  details: string;
  amount: number;
  readonly id: number;
  private identity: string;

  constructor(client: string, details: string, amount: number, id: number = 101, identity: string = 'secret') {
    this.client = client;
    this.details = details;
    this.amount = amount;
    this.id = id;
    this.identity = identity;
  }

  format = () => `${this.client} owes $${this.amount} for ${this.details}`;
}

const invoiceOne = new Invoice('Ema', 'work on the website', 500);
const invoiceTwo = new Invoice('Carl', 'work on sales', 300);

// console.log(invoiceOne, invoiceTwo);

// inferring the class type object's array
let invoices: Invoice[] = [];
// invoices.push('Jill'); // TS dont allow cuz type inferred is Invoice
invoices.push(invoiceOne);
invoices.push(invoiceTwo);

/***------------ Access Modifiers ------------**/
// all the properties of the class are public by default, we can change their "instance's" values, BUT we cant change their types
invoiceOne.client = 'Jill';
// invoiceOne.details = 200; // TS dont allow changing type

invoices.forEach((invoice) => {
  // invoice.id = 202; // TS dont allow cuz the property 'id' is `readonly`. Cant even update inside the class
  // console.log(invoice.identity); // TS dont allow cuz property 'identity' is private and is only access-able inside the class
  console.log(invoice.client, invoice.details, invoice.amount, invoice.format());
});

class InvoiceUpdated {
  // if using access modifiers with all the params, we can use shorthand like
  constructor(
    public client: string,
    readonly id: number = 101,
    private identity: string = 'secret'
  ) {
    this.client = client;
    this.id = id;
    this.identity = identity;
  }
}
