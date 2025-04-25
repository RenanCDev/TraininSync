import { useNavigate } from "react-router-dom";
import { ArrowBack } from "../../components/arrow-back";
import { Button } from "../../components/button";

export function Register() {
  const navigate = useNavigate();

  function handleRedirectToLogin() {
    navigate("/login");
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="hidden bg-[url('/login-image.png')] bg-[position:45%_center] bg-cover h-screen text-white sm:block w-2/3"></div>

      <div className="flex justify-center items-center w-full h-full relative">
        <div>
          <ArrowBack />
        </div>

        <div className="flex flex-col gap-5 w-full m-10 md:max-w-1/2">
          <h1 className="text-5xl font-black">Cadastro</h1>
          <div className="border border-midPurple rounded-3xl text-lowGray flex flex-col gap-4 p-5">
            <div className="flex flex-col gap-2">
              <h2>Usuário</h2>
              <div className="h-11 bg-midGray rounded-xl"></div>
            </div>
            <div className="flex flex-col gap-2">
              <h2>Senha</h2>
              <div className="h-11 bg-midGray rounded-xl"></div>
            </div>
            <div className="flex flex-col gap-2">
              <h2>Confirmar Senha</h2>
              <div className="h-11 bg-midGray rounded-xl"></div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <Button title="Criar Conta" width="w-64" />
            <p
              className="text-lowGray cursor-pointer hover:text-darkPurple transition-colors duration-300 ease-in-out"
              onClick={handleRedirectToLogin}
            >
              Já tenho uma conta
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
