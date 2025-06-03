export function formatCurrency(value: number | string): string {
  const number =
    typeof value === "string"
      ? parseFloat(value.replace(/[^\d,]/g, "").replace(",", "."))
      : value;
  if (isNaN(number)) return "";
  return number.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function unformatCurrency(value: string): number {
  const numeric = value.replace(/[^\d,]/g, "").replace(",", ".");
  return parseFloat(numeric);
}
