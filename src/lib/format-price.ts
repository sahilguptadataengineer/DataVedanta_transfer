// Indian number format with the rupee sign: 35000 -> "₹35,000", 150000 -> "₹1,50,000".
// No "+ GST" for now (user decision, 18 Oct 2026).
export function formatRupees(amount: number): string {
  return `₹${new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(amount)}`;
}

// "– ₹15,000". The early bird offer is shown as an amount taken off, never as a percentage.
export function formatDiscount(amount: number): string {
  return `– ${formatRupees(amount)}`;
}
