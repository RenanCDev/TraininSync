import { ReactNode } from "react";

interface NavBarProps {
  children?: ReactNode;
}

export function NavBar({ children }: NavBarProps) {
  return (
    <div className="flex justify-center items-center py-8 px-14 border-b border-midGray top-0 sm:justify-between relative z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent pointer-events-none"></div>
      <div className="text-4xl font-extrabold">TraininSync</div>
      <div className="hidden gap-7 text-2xl md:flex">
        <p className="cursor-pointer transition-colors duration-300 hover:text-midPurple animate-fade-in-up">
          Home
        </p>
        <p className="cursor-pointer transition-colors duration-300 hover:text-midPurple animate-fade-in-up">
          Sobre
        </p>
        <p className="cursor-pointer transition-colors duration-300 hover:text-midPurple animate-fade-in-up">
          Contato
        </p>
      </div>
      <div className="hidden sm:flex">{children}</div>
    </div>
  );
}
