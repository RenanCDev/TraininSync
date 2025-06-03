import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface NavBarProps {
  children?: ReactNode;
  variant?: "home" | "secondary" | "clean";
}

interface NavBarItem {
  label: string;
  path: string;
}

export function NavBar({ children, variant = "clean" }: NavBarProps) {
  const navigate = useNavigate();

  const homeNavItems: NavBarItem[] = [
    { label: "Home", path: "#Home" },
    { label: "Sobre", path: "#Sobre" },
    { label: "Contato", path: "#Contato" },
  ];

  const secondaryNavItems: NavBarItem[] = [
    { label: "Contratar Serviço ", path: "/services" },
    { label: "Pagamentos", path: "/pagamentos" },
    { label: "Contatos", path: "/contatos" },
    { label: "Agendamento", path: "/agendamento" },
    { label: "Serviços", path: "/servicos" },
  ];

  const navItems =
    variant === "home"
      ? homeNavItems
      : variant === "secondary"
        ? secondaryNavItems
        : [];

  function handleLogoClick() {
    navigate("/");
  }

  return (
    <nav className="flex justify-center items-center py-8 px-14 border-b border-midGray top-0 sm:justify-between relative z-50">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent pointer-events-none"></div>
      <div
        className="text-4xl font-extrabold cursor-pointer"
        onClick={handleLogoClick}
      >
        TraininSync
      </div>

      <div className="hidden gap-7 text-2xl md:flex">
        {navItems.map(({ label, path }) => (
          <p
            key={path}
            onClick={() => {
              if (variant === "home" && path.startsWith("#")) {
                const element = document.querySelector(path);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              } else {
                navigate(path);
              }
            }}
            className="cursor-pointer transition-colors duration-300 hover:text-midPurple animate-fade-in-up"
          >
            {label}
          </p>
        ))}
      </div>

      <div className="hidden sm:flex">{children}</div>
    </nav>
  );
}
