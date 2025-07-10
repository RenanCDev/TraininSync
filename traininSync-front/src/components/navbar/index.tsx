import { ReactNode, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { X, Menu } from "lucide-react";

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
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPath, setSelectedPath] = useState<string>("");

  const homeNavItems: NavBarItem[] = [
    { label: "Home", path: "#Home" },
    { label: "Sobre", path: "#Sobre" },
    { label: "Contato", path: "#Contato" },
  ];

  const secondaryNavItems: NavBarItem[] = [
    { label: "Contratar Serviço ", path: "/services" },
    { label: "Alunos ", path: "/student" },
    { label: "Pagamentos", path: "/payments" },
    { label: "Contatos", path: "/contatos" },
    { label: "Agendamento", path: "/agendamento" },
    { label: "Serviços", path: "/service" },
  ];

  const navItems =
    variant === "home"
      ? homeNavItems
      : variant === "secondary"
        ? secondaryNavItems
        : [];

  const filteredNavItems =
    variant === "home"
      ? navItems
      : navItems.filter((item) => item.path !== location.pathname);

  function handleLogoClick() {
    navigate("/");
    setIsOpen(false);
    setSelectedPath("");
  }

  function handleItemClick(path: string) {
    setSelectedPath(path);
    if (variant === "home" && path.startsWith("#")) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(path);
    }
    setIsOpen(false);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="flex justify-between items-center py-8 px-6 lg:px-14 border-b border-midGray top-0 relative z-50">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent pointer-events-none"></div>

        <div
          className="text-4xl font-extrabold cursor-pointer z-50"
          onClick={handleLogoClick}
        >
          TraininSync
        </div>

        <div className="hidden xl:flex gap-7 xl:text-lg xl:font-black">
          {filteredNavItems.map(({ label, path }) => (
            <p
              key={path}
              onClick={() => handleItemClick(path)}
              className={`cursor-pointer hover:text-midPurple ${
                selectedPath === path ? "text-midPurple font-extrabold" : ""
              }`}
            >
              {label}
            </p>
          ))}
        </div>

        <div className="hidden xl:flex">{children}</div>

        <button
          className="xl:hidden z-50 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden bg-black flex flex-col items-center justify-center text-white text-3xl gap-10 z-40 transition-all duration-300">
          {filteredNavItems.map(({ label, path }) => (
            <p
              key={path}
              onClick={() => handleItemClick(path)}
              className="cursor-pointer hover:text-midPurple"
            >
              {label}
            </p>
          ))}
          <div className="mt-10">{children}</div>
        </div>
      )}
    </>
  );
}
