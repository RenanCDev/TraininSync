interface ButtonProps {
  title: string;
  height?: string;
  width?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

export function Button({
  title,
  type = "button",
  height = "h-auto",
  width = "w-auto",
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-midPurple cursor-pointer flex justify-center items-center p-3 text-2xl rounded-2xl transition duration-300 ease-in-out hover:scale-105 hover:bg-darkPurple z-20 ${height} ${width}`}
      type={type}
    >
      {title}
    </button>
  );
}
