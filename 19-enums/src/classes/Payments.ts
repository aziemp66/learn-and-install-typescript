import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payments implements HasFormatter {
  // public client: string;
  // private details: string;
  // readonly amount: number;
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {
    // this.client = c;
    // this.details = d;
    // this.amount = a;
  }

  format() {
    return `${this.recipient} is owed $${this.amount} for ${this.details}`;
  }
}
