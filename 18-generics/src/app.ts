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

  let doc: HasFormatter;

  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payments(tofrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, "end");
});

type Person = {
  name: string;
  age: number;
};

// GENERICS
const addUID = <T extends Person>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

// const addUID = <T extends object>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };

let docOne = addUID({ name: "yoshi", age: 40 });

console.log(docOne);

//with interfaces
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docTwo: Resource<string> = {
  uid: 3,
  resourceName: "person",
  data: "shaun",
};

const docThree: Resource<object> = {
  uid: 1,
  resourceName: "person",
  data: { name: "shaun" },
};

const docFour: Resource<string[]> = {
  uid: 2,
  resourceName: "shoppingList",
  data: ["bread", "milk", "toilet roll"],
};

console.log(docTwo, docThree, docFour);
