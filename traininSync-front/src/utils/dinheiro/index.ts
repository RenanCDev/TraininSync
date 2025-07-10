export function formatCurrencyString(value: string): string {
  const numeric = value.replace(/[^\d]/g, "");
  const formatted = (Number(numeric) / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return formatted;
}

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};
