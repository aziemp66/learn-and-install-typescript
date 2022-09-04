import { Payments } from "./classes/Payments.js";
import { Invoice } from "./classes/Invoice.js";
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
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector(".item-list");
const list = new ListTemplates(ul);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let values;
  values = [tofrom.value, details.value, amount.valueAsNumber];
  let doc;
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
const tup = ["ryu", 25, true];
let student;
student = ["chun-li", 223423];
