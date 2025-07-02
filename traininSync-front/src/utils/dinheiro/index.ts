export function formatCurrency(value: number | string): string {
  const num =
    typeof value === "number"
      ? value
      : parseFloat(value.replace(/\D/g, "")) / 100;
  return isNaN(num)
    ? ""
    : num.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
}

export function parseCurrency(value: string): number {
  const clean = value.replace(/\D/g, "");
  return parseFloat(clean) / 100 || 0;
}

export function formatCurrencyString(value: string): string {
  const numeric = value.replace(/[^\d]/g, "");
  const formatted = (Number(numeric) / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return formatted;
}
