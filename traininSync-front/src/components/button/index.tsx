import { Loader2 } from "lucide-react";

interface ButtonProps {
  title: string;
  height?: string;
  width?: string;
  loading?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

export function Button({
  title,
  loading = false,
  type = "button",
  height = "h-auto",
  width = "w-auto",
  onClick,
}: ButtonProps) {
  return (
    <button
      disabled={loading}
      onClick={onClick}
      className={`bg-midPurple cursor-pointer flex justify-center items-center p-3 text-2xl rounded-2xl transition duration-300 ease-in-out hover:scale-105 hover:bg-darkPurple z-20 ${
        loading ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      } ${height} ${width}`}
      type={type}
    >
      {loading ? <Loader2 className="h-8 w-8 animate-spin" /> : title}
    </button>
  );
}
