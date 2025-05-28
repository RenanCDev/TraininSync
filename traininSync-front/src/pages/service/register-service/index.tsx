import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/button";
import { NavBar } from "../../../components/navbar";

export function RegisterService() {
  const navigate = useNavigate();

  function handleLoginClick() {
    navigate("/login");
  }

  return (
    <div className="flex flex-col">
      <NavBar>
        <Button onClick={handleLoginClick} title="Login" />
      </NavBar>

      <form className="p-8">
        <div className="flex justify-center gap-1.5 text-3xl sm:text-5xl font-black md:justify-start md:px-6 pb-6">
          <h1>Serviço</h1>
        </div>

        <div className="flex flex-col gap-6">
          <div className="border border-midPurple rounded-3xl flex flex-col gap-4 pt-6 px-6 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-lowGray">
              <div className="flex flex-col gap-2 col-span-1 md:col-span-3">
                <h2>Tipo de Serviço</h2>
                <input
                  type="text"
                  className="h-11 bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                />
              </div>
              <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
                <h2>Descrição</h2>
                <textarea className="h-36 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none resize-none" />
              </div>
              <div className="flex flex-col gap-2 col-span-1">
                <h2>Valor</h2>
                <input
                  type="text"
                  placeholder="R$"
                  className="h-11 bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:gap-5 md:flex-row">
          <div className="mt-7">
            <Button
              type="submit"
              width="w-full md:min-w-[342px]"
              title="Salvar"
            />
          </div>

          <div className="mt-7">
            <Button
              width="w-full md:min-w-[342px]"
              title="Descartar"
              bgColor="bg-midGray"
              hover="hover:bg-midGray"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
