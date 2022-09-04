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
  let doc;
  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payments(tofrom.value, details.value, amount.valueAsNumber);
  }
  list.render(doc, type.value, "end");
});
//Enums
var ResourceType;
(function (ResourceType) {
  ResourceType[(ResourceType["BOOK"] = 0)] = "BOOK";
  ResourceType[(ResourceType["AUTHOR"] = 1)] = "AUTHOR";
  ResourceType[(ResourceType["FILM"] = 2)] = "FILM";
  ResourceType[(ResourceType["DIRECTOR"] = 3)] = "DIRECTOR";
  ResourceType[(ResourceType["PERSON"] = 4)] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docOne = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { title: "name of the wind" },
};
const docTwo = {
  uid: 10,
  resourceType: ResourceType.PERSON,
  data: { title: "name of the wind" },
};
console.log(docOne);
console.log(docTwo);
