import { Payments } from "./classes/Payments.js";
import { Invoice } from "./classes/Invoice.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplates } from "./classes/ListTemplates.js";

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice("yoshi", "web work", 250);
// docTwo = new Payments("mario", "plumbing work", 200);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// const invOne = new Invoice("mario", "work on the mario website", 250);
// const invTwo = new Invoice("luigi", "work on the luigi website", 300);

// const invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach((inv) => {
//   console.log(inv.client, inv.amount, inv.format());
// });

// console.log(invoices);

const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector(".item-list") as HTMLUListElement;
const list = new ListTemplates(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;

  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payments(...values);
  }

  list.render(doc, type.value, "end");
});

//Tuples
let arr = ["ryu", 25, true];
arr[0] = false;
arr[1] = "yoshi";
arr = [30, false, "yoshi"];

const tup: [string, number, boolean] = ["ryu", 25, true];

let student: [string, number];
student = ["chun-li", 223423];
