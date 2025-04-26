import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { NavBar } from "../../components/navbar";

export function RegisterPersonal() {
  const navigate = useNavigate();

  function handleLoginClick() {
    navigate("/login");
  }

  function handleSaveClick() {
    console.log("Save");
  }

  return (
    <div className="flex flex-col">
      <NavBar>
        <Button onClick={handleLoginClick} title="Login" />
      </NavBar>

      <div className="p-8">
        <div className="flex justify-center gap-1.5 text-5xl font-black md:justify-start md:px-6 pb-6">
          <h1>Personal</h1>
          <h1 className="text-midPurple">List</h1>
        </div>

        <div className="flex flex-col gap-6">
          <div className="border border-midPurple rounded-3xl flex flex-col gap-4 pt-6 px-6 pb-10">
            <div className="flex gap-1.5 text-2xl font-black">
              <h1>Dados</h1>
              <h1 className="text-midPurple">Pessoais</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-lowGray">
              <div className="flex flex-col gap-2 col-span-4">
                <h2>Nome completo</h2>
                <div className="h-11 bg-midGray rounded-xl"></div>
              </div>

              <div className="flex flex-col gap-2 col-span-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="col-span-1">
                    <h2>Estado</h2>
                    <div className="h-11 bg-midGray rounded-xl"></div>
                  </div>
                  <div className="col-span-1">
                    <h2>Cidade</h2>
                    <div className="h-11 bg-midGray rounded-xl"></div>
                  </div>
                  <div className="col-span-1">
                    <h2>Bairro</h2>
                    <div className="h-11 bg-midGray rounded-xl"></div>
                  </div>
                  <div className="col-span-1">
                    <h2>Data de nascimento</h2>
                    <div className="h-11 bg-midGray rounded-xl"></div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 col-span-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="col-span-1">
                    <h2>E-mail</h2>
                    <div className="h-11 bg-midGray rounded-xl"></div>
                  </div>
                  <div className="col-span-1">
                    <h2>Celular</h2>
                    <div className="h-11 bg-midGray rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-midPurple rounded-3xl flex flex-col gap-4 pt-6 px-6 pb-10">
            <div className="flex gap-1.5 text-2xl font-black">
              <h1>Dados</h1>
              <h1 className="text-midPurple">Bancários</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-lowGray">
              <div className="flex flex-col gap-2 col-span-4">
                <h2>Nome Impresso</h2>
                <div className="h-11 bg-midGray rounded-xl"></div>
              </div>

              <div className="flex flex-col gap-2 col-span-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="col-span-1">
                    <h2>Número da Conta</h2>
                    <div className="h-11 bg-midGray rounded-xl"></div>
                  </div>
                  <div className="col-span-1">
                    <h2>Agencia</h2>
                    <div className="h-11 bg-midGray rounded-xl"></div>
                  </div>
                  <div className="col-span-1">
                    <h2>CPF</h2>
                    <div className="h-11 bg-midGray rounded-xl"></div>
                  </div>
                  <div className="col-span-1">
                    <h2>Data de Vencimento</h2>
                    <div className="h-11 bg-midGray rounded-xl"></div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 col-span-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="col-span-1">
                    <h2>E-mail</h2>
                    <div className="h-11 bg-midGray rounded-xl"></div>
                  </div>
                  <div className="col-span-1">
                    <h2>Telefone</h2>
                    <div className="h-11 bg-midGray rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-midPurple rounded-3xl flex flex-col gap-4 pt-6 px-6 pb-10">
            <div className="flex gap-1.5 text-2xl font-black">
              <h1>Especialidades</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-lowGray">
              <div className="flex flex-col gap-2 col-span-2">
                <h2>Especialidades</h2>
                <div className="h-24 bg-midGray rounded-xl"></div>
              </div>

              <div className="flex flex-col gap-2 col-span-2">
                <h2>Experiencia Profissional</h2>
                <div className="h-24 bg-midGray rounded-xl"></div>
              </div>

              <div className="flex flex-col gap-4 col-span-2 md:flex-row">
                <div className="flex flex-col gap-2 col-span-2 md:col-span-1 md:w-1/2">
                  <h2>Horários Disponíveis</h2>
                  <div className="h-24 bg-midGray rounded-xl"></div>
                </div>

                <div className="flex flex-col gap-2 col-span-2 md:col-span-1 md:w-1/2">
                  <h2>Locais Disponíveis</h2>
                  <div className="h-24 bg-midGray rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7">
          <Button
            onClick={handleSaveClick}
            height="max-w-[342px]"
            title="Salvar"
          />
        </div>
      </div>
    </div>
  );
}
