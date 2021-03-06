export default function formatCurrency(num) {
  return "$" + Number(parseFloat(num).toLocaleString() + " ");
}
