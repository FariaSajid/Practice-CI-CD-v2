import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../public/index.html", import.meta.url), "utf8");

test("index.html has the page title", () => {
  assert.match(html, /<title>Tip Calculator<\/title>/);
});

test("index.html links the CSS and JS files", () => {
  assert.match(html, /href="style\.css"/);
  assert.match(html, /src="script\.js"/);
});

test("index.html has all required inputs and result fields", () => {
  for (const id of ["bill", "tip-percent", "people", "calc-btn", "tip-amount", "total-amount", "per-person"]) {
    assert.ok(html.includes(`id="${id}"`), `id="${id}" is missing`);
  }
});
