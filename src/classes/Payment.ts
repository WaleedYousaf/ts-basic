import { HasFormatter } from '../interfaces/HasFormatter.js';

// now this class must have a method `format`
export class Payment implements HasFormatter {
  recipient: string;
  details: string;
  amount: number;
  readonly id: number;
  private identity: string;

  constructor(recipient: string, details: string, amount: number, id: number = 101, identity: string = 'secret') {
    this.recipient = recipient;
    this.details = details;
    this.amount = amount;
    this.id = id;
    this.identity = identity;
  }

  format = () => `${this.recipient} is owed $${this.amount} for ${this.details}`;
}
