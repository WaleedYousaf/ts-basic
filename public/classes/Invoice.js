export class Invoice {
    constructor(client, details, amount, id = 101, identity = 'secret') {
        this.format = () => `${this.client} owes $${this.amount} for ${this.details}`;
        this.client = client;
        this.details = details;
        this.amount = amount;
        this.id = id;
        this.identity = identity;
    }
}
