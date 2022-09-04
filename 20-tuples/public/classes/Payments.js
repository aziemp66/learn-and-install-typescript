export class Payments {
  // public client: string;
  // private details: string;
  // readonly amount: number;
  constructor(recipient, details, amount) {
    this.recipient = recipient;
    this.details = details;
    this.amount = amount;
    // this.client = c;
    // this.details = d;
    // this.amount = a;
  }
  format() {
    return `${this.recipient} is owed $${this.amount} for ${this.details}`;
  }
}
