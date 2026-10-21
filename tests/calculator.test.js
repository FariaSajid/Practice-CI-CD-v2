import { test } from "node:test";
import assert from "node:assert/strict";
import { calculateTip, calculateTotal, splitBill } from "../public/calculator.js";

test("calculateTip(): 10% of 1000 is 100", () => {
  assert.equal(calculateTip(1000, 10), 100);
});

test("calculateTip(): 20% of 500 is 100", () => {
  assert.equal(calculateTip(500, 20), 100);
});

test("calculateTotal(): 1000 with 10% tip is 1100", () => {
  assert.equal(calculateTotal(1000, 10), 1100);
});

test("calculateTotal(): 0% tip keeps the bill same", () => {
  assert.equal(calculateTotal(200, 0), 200);
});

test("splitBill(): 1100 between 4 people is 275", () => {
  assert.equal(splitBill(1100, 4), 275);
});

test("splitBill(): 100 between 3 people is rounded to 33.33", () => {
  assert.equal(splitBill(100, 3), 33.33);
});

test("splitBill(): 0 people does not crash", () => {
  assert.equal(splitBill(100, 0), 100);
});
