import { calculateTip, calculateTotal, splitBill } from "./calculator.js";

const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip-percent");
const peopleInput = document.getElementById("people");
const calcBtn = document.getElementById("calc-btn");
const message = document.getElementById("message");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-amount");
const perPerson = document.getElementById("per-person");

calcBtn.addEventListener("click", () => {
  const bill = Number(billInput.value);
  const percent = Number(tipInput.value);
  const people = Number(peopleInput.value);

  if (Number.isNaN(bill) || bill <= 0) {
    message.textContent = "Sahi bill amount likho.";
    return;
  }

  message.textContent = "";
  const total = calculateTotal(bill, percent);
  tipAmount.textContent = calculateTip(bill, percent).toFixed(2);
  totalAmount.textContent = total.toFixed(2);
  perPerson.textContent = splitBill(total, people).toFixed(2);
});
