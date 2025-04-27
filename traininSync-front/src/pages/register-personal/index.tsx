import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { NavBar } from "../../components/navbar";
import { getAllPersonal } from "../../api/personal/getPersonal";

export function RegisterPersonal() {
  const navigate = useNavigate();

  function handleLoginClick() {
    navigate("/login");
  }

  function handleSaveClick() {
    console.log("Save");
  }

  async function getPersonais() {
    try {
      const dados = await getAllPersonal();
      console.log("Personais: ", dados);
    } catch (err) {
      console.error("Falha ao carregar personal:", err);
    }
  }

  return (
    <div className="flex flex-col">
      <NavBar>
        <Button onClick={handleLoginClick} title="Login" />
      </NavBar>

      <form className="p-8">
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
              <div className="flex flex-col gap-2 col-span-2">
                <h2>Nome completo</h2>
                <input className="h-11 bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none" />
              </div>

              <div className="flex flex-col gap-2 col-span-2">
                <h2>Nome Social</h2>
                <input className="h-11 bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none" />
              </div>

              <div className="flex flex-col gap-2 col-span-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="col-span-1">
                    <h2>CPF</h2>
                    <input className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none" />
                  </div>
                  <div className="col-span-1">
                    <h2>Etnia</h2>
                    <select className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none">
                      <option value="nao_informado">Não informado</option>
                      <option value="amarela">Amarela</option>
                      <option value="branca">Branca</option>
                      <option value="indigena">Indigena</option>
                      <option value="parda">Parda</option>
                      <option value="preta">Preta</option>
                    </select>
                  </div>
                  <div className="col-span-1">
                    <h2>Sexo</h2>
                    <select className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none">
                      <option value="N">Não informado</option>
                      <option value="F">Feminino</option>
                      <option value="M">Masculino</option>
                      <option value="O">Outro</option>
                    </select>
                  </div>
                  <div className="col-span-1">
                    <h2>Data de nascimento</h2>
                    <input
                      type="date"
                      className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 col-span-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="col-span-1">
                    <h2>E-mail</h2>
                    <input className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none" />
                  </div>
                  <div className="col-span-1">
                    <h2>Celular</h2>
                    <input className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 col-span-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="col-span-1">
                    <h2>Estado Civil</h2>
                    <select className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none">
                      <option value="casado">Casado</option>
                      <option value="divorciado">Divorciado</option>
                      <option value="solteiro">Solteiro</option>
                      <option value="uniao_estavel">União estável</option>
                      <option value="viuvo">Viúvo</option>
                    </select>
                  </div>
                  <div className="col-span-1">
                    <h2>CREF</h2>
                    <input className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none" />
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="col-span-1">
                    <h2>Número da Conta</h2>
                    <input className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none" />
                  </div>
                  <div className="col-span-1">
                    <h2>Agencia</h2>
                    <input className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none" />
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
                <textarea className="h-24 bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none resize-none" />
              </div>

              <div className="flex flex-col gap-2 col-span-2">
                <h2>Experiencia Profissional</h2>
                <textarea className="h-24 bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none resize-none" />
              </div>

              <div className="flex flex-col gap-4 col-span-2 md:flex-row">
                <div className="flex flex-col gap-2 col-span-2 md:col-span-1 md:w-1/2">
                  <h2>Horários Disponíveis</h2>
                  <textarea className="h-24 bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none resize-none" />
                </div>

                <div className="flex flex-col gap-2 col-span-2 md:col-span-1 md:w-1/2">
                  <h2>Locais Disponíveis</h2>
                  <textarea className="h-24 bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none resize-none" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7">
          <Button
            onClick={handleSaveClick}
            width="w-full max-w-[342px]"
            title="Salvar"
          />
        </div>

        <div className="mt-7">
          <Button
            onClick={getPersonais}
            width="w-full max-w-[342px]"
            title="log Personais teste"
          />
        </div>
      </form>
    </div>
  );
}
