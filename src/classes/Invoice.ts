export class Invoice {
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
