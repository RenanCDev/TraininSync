import { RegisterButton } from "../register-button";

export function NavBar() {
  return (
    <div className="flex justify-center items-center py-8 px-14 border-b border-midGray top-0 sm:justify-between">
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
      <div className="hidden sm:flex">
        <RegisterButton />
      </div>
    </div>
  );
}
