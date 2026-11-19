// Tip calculator ka logic (pure functions, tests inhi ko check karte hain)

export function calculateTip(bill, percent) {
  return (bill * percent) / 100;
}

export function calculateTotal(bill, percent) {
  return bill + calculateTip(bill, percent);
}

export function splitBill(total, people) {
  if (people < 1) {
    return total;
  }
  return Math.round((total / people) * 100) / 100;
}
