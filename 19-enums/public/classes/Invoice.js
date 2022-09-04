export class Invoice {
  // public client: string;
  // private details: string;
  // readonly amount: number;
  constructor(client, details, amount) {
    this.client = client;
    this.details = details;
    this.amount = amount;
    // this.client = c;
    // this.details = d;
    // this.amount = a;
  }
  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
