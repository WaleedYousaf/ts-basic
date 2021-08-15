// now this class must have a method `format`
export class Payment {
    constructor(recipient, details, amount, id = 101, identity = 'secret') {
        this.format = () => `${this.recipient} is owed $${this.amount} for ${this.details}`;
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
        this.id = id;
        this.identity = identity;
    }
}
