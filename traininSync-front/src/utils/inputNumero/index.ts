export function inputNumber(e: React.KeyboardEvent<HTMLInputElement>) {
  const {
    key,
    currentTarget: { value },
  } = e;
  const controlKeys = [
    "Backspace",
    "Delete",
    "ArrowLeft",
    "ArrowRight",
    "Enter",
  ];
  if (controlKeys.includes(key)) {
    return;
  }
  if (!/[0-9.]/.test(key)) {
    e.preventDefault();
    return;
  }
  if (key === "." && value.includes(".")) {
    e.preventDefault();
  }
}
