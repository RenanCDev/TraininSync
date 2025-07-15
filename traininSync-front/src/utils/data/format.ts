export function formatData(dataStr: string): string {
  const data = new Date(dataStr);
  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const ano = String(data.getFullYear()).padStart(4, "0"); // aqui o padStart

  return `${dia}/${mes}/${ano}`;
}
