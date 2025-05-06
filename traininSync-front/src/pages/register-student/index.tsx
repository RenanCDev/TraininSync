import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/button';
import { NavBar } from '../../components/navbar';

export function RegisterStudent() {
  const navigate = useNavigate();

  function handleLoginClick() {
    navigate('/login');
  }

  return (
    <div className="flex flex-col">
      <NavBar>
        <Button onClick={handleLoginClick} title="Login" />
      </NavBar>

      <div className="p-8">
        <div className="flex justify-center gap-1.5 text-3xl sm:text-5xl font-black md:justify-start md:px-6 pb-6">
          <h1>Cadastro de</h1>
          <h1 className="text-midPurple">Aluno</h1>
        </div>

        <div className="flex flex-col gap-6">
          <div className="border border-midPurple rounded-3xl flex flex-col gap-4 pt-6 px-6 pb-10">
            <div className="flex gap-1.5 text-2xl font-black">
              <h1>Dados</h1>
              <h1 className="text-midPurple">Pessoais</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-lowGray">
              <div className="flex flex-col gap-2 col-span-4 md:col-span-2">
                <h2>Nome completo</h2>
                <input
                  type="text"
                  className="h-11 bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                />
              </div>

              <div className="flex flex-col gap-2 col-span-4 md:col-span-2">
                <h2>Nome social</h2>
                <input
                  type="text"
                  className="h-11 bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                />
              </div>

              <div className="flex flex-col gap-2 col-span-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="col-span-1 flex flex-col gap-2">
                    <h2>CPF</h2>
                    <input
                      type="text"
                      className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                    />
                  </div>
                  <div className="col-span-1 flex flex-col gap-2">
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
                  <div className="col-span-1 flex flex-col gap-2">
                    <h2>Sexo</h2>
                    <select className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none">
                      <option value="N">Não informado</option>
                      <option value="F">Feminino</option>
                      <option value="M">Masculino</option>
                      <option value="O">Outro</option>
                    </select>
                  </div>
                  <div className="col-span-1 flex flex-col gap-2">
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
                  <div className="col-span-1 flex flex-col gap-2">
                    <h2>E-mail</h2>
                    <input
                      type="text"
                      className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                    />
                  </div>
                  <div className="col-span-1 flex flex-col gap-2">
                    <h2>Celular</h2>
                    <input
                      type="text"
                      className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 col-span-4">
                <div className="col-span-1 flex flex-col gap-2">
                  <h2>Estado Civil</h2>
                  <select className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none">
                    <option value="casado">Casado</option>
                    <option value="divorciado">Divorciado</option>
                    <option value="solteiro">Solteiro</option>
                    <option value="uniao_estavel">União estável</option>
                    <option value="viuvo">Viúvo</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-midPurple rounded-3xl flex flex-col gap-4 pt-6 px-6 pb-10">
            <div className="flex gap-1.5 text-2xl font-black">
              <h1>Dados de</h1>
              <h1 className="text-midPurple">Saúde</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-lowGray">
              <div className="col-span-1 flex flex-col gap-2">
                <h2>Idade</h2>
                <input
                  type="text"
                  className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                />
              </div>
              <div className="col-span-1 flex flex-col gap-2">
                <h2>Altura</h2>
                <input
                  type="text"
                  className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                />
              </div>
              <div className="col-span-1 flex flex-col gap-2">
                <h2>Peso</h2>
                <input
                  type="text"
                  className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                />
              </div>
              <div className="col-span-1 flex flex-col gap-2">
                <h2>Bioimpedancia</h2>
                <input
                  type="text"
                  className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                />
              </div>
              <div className="col-span-1 flex flex-col gap-2">
                <h2>IMC</h2>
                <input
                  type="text"
                  className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                />
              </div>
              <div className="col-span-1 flex flex-col gap-2">
                <h2>Data do Exame</h2>
                <input
                  type="text"
                  placeholder="dd/mm/aa"
                  className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                />
              </div>
              <div className="col-span-1 flex flex-col gap-2">
                <h2>Hora do Exame</h2>
                <input
                  type="text"
                  placeholder="hh/mm"
                  className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                />
              </div>
              <div className="col-span-1 flex flex-col gap-2">
                <h2>Água Corporal Total</h2>
                <input
                  type="text"
                  className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                />
              </div>
              <div className="col-span-1 flex flex-col gap-2">
                <h2>Massa Muscular Esqueletica</h2>
                <input
                  type="text"
                  className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                />
              </div>
              <div className="col-span-1 flex flex-col gap-2">
                <h2>Taxa Metabolica Basal</h2>
                <input
                  type="text"
                  className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                />
              </div>
              <div className="md:col-span-2 flex flex-col gap-2">
                <h2>PGC</h2>
                <input
                  type="text"
                  className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                />
              </div>
              <div className="md:col-span-2 flex flex-col gap-2">
                <h2>Proteina</h2>
                <input
                  type="text"
                  className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                />
              </div>
              <div className="md:col-span-2 flex flex-col gap-2">
                <h2>Minerais</h2>
                <input
                  type="text"
                  className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7">
          <Button
            type="submit"
            width="w-full md:max-w-[342px]"
            title="Salvar"
          />
        </div>
      </div>
    </div>
  );
}
