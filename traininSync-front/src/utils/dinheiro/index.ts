export function formatToRealMoney(valor: string | number): string {
  const numero =
    typeof valor === "number" ? valor : Number(valor.replace(/\D/g, "")) / 100;
  return numero.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function removerFormatacaoReal(valorFormatado: string): string {
  return valorFormatado
    .replace(/\s/g, "")
    .replace("R$", "")
    .replace(/\./g, "")
    .replace(",", ".")
    .trim();
}
