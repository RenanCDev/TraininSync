interface ButtonProps {
  title: string;
  height?: string;
  width?: string;
  onClick?: () => void;
}

export function Button({
  title,
  height = "h-auto",
  width = "w-auto",
  onClick,
}: ButtonProps) {
  return (
    <div
      onClick={onClick}
      className={`bg-midPurple cursor-pointer flex justify-center items-center p-3 text-2xl rounded-2xl transition duration-300 ease-in-out hover:scale-105 hover:bg-darkPurple z-20 ${height} ${width}`}
    >
      {title}
    </div>
  );
}
