import { useNavigate } from "react-router-dom";
import { Button } from "./components/button";
import { NavBar } from "./components/navbar";

function App() {
  const navigate = useNavigate();

  function handleRegisterClick() {
    navigate("/register/personal");
  }

  return (
    <>
      <div
        id="Home"
        className="bg-[url('/landing-page-bg.png')] bg-[position:38%_center] bg-cover h-screen text-white sm:bg-center"
      >
        <NavBar>
          <Button onClick={handleRegisterClick} title="Cadastre-se" />
        </NavBar>

        <div className="flex flex-col justify-center items-end inset-0 p-3 mt-28 sm:mt-56 sm:mr-40">
          <div className="flex gap-7 flex-col">
            <div className="flex flex-col">
              <p className="text-4xl md:text-5xl font-bold">CHEGOU A HORA DE</p>
              <p className="text-midPurple text-4xl md:text-5xl font-bold">
                TRANSFORMAR SEU CORPO
              </p>
              <p className="text-2xl font-semibold">O app de treino que vai</p>
              <p className="text-2xl font-semibold">mudar a sua vida</p>
            </div>
            <div className="flex justify-baseline">
              <Button onClick={handleRegisterClick} title="Cadastre-se" />
            </div>
          </div>
        </div>
      </div>

      <div
        id="Sobre"
        className="h-screen bg-darkGray flex flex-col justify-center p-11 md:p-24 "
      >
        <h1 className="font-extrabold mb-3 text-4xl md:text-9xl">Sobre</h1>
        <p className="md:text-2xl">
          Esta é uma plataforma desenvolvida para personal trainers e alunos,
          com foco no acompanhamento de treinos e na organização da rotina de
          exercícios. A proposta é tornar a experiência mais interativa por meio
          de elementos de gamificação, como desafios, metas e registros de
          progresso. Além de facilitar a comunicação entre treinador e aluno, a
          plataforma busca oferecer um ambiente simples e funcional, que possa
          ser usado tanto no dia a dia quanto em planejamentos de médio e longo
          prazo. Ainda em constante evolução, o projeto segue sendo ajustado com
          base nas necessidades reais de quem treina e de quem orienta.
        </p>
      </div>

      <div
        id="Contato"
        className="h-screen flex flex-col gap-7 xl:flex-row xl:justify-center bg-darkGray px-11 md:px-24"
      >
        <div className="flex flex-col justify-center xl:w-1/2">
          <h1 className="font-extrabold text-4xl md:text-9xl">Entrar em</h1>
          <h1 className="font-extrabold text-midPurple text-4xl mb-3 md:text-9xl">
            Contato
          </h1>
          <p className="md:text-2xl">
            Se você tem dúvidas, sugestões ou gostaria de saber mais sobre a
            plataforma, este é o espaço para isso. O canal de contato está
            disponível para quem deseja conversar, entender melhor como funciona
            o sistema ou simplesmente deixar uma mensagem. Seja você um personal
            trainer, aluno ou interessado no projeto, ficamos à disposição para
            ouvir e responder dentro do possível.
          </p>
        </div>

        <div className="flex flex-col justify-center xl:w-1/2">
          <div className="border border-midPurple rounded-3xl text-lowGray flex flex-col gap-4 p-5 mb-8">
            <div className="">
              <h1>Nome *</h1>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  placeholder="Primeiro nome"
                  className="h-11 w-full bg-midGray rounded-xl p-2 pr-10 focus:border text-white focus:border-lowGray outline-none"
                />
                <input
                  placeholder="Último nome"
                  className="h-11 w-full bg-midGray rounded-xl p-2 pr-10 focus:border text-white focus:border-lowGray outline-none"
                />
              </div>
            </div>

            <div>
              <h1>Email *</h1>
              <input
                placeholder="Email"
                className="h-11 w-full bg-midGray rounded-xl p-2 pr-10 focus:border text-white focus:border-lowGray outline-none"
              />
            </div>

            <div>
              <h1>Mensagem *</h1>
              <textarea className="h-44 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none resize-none" />
            </div>
          </div>
          <Button type="submit" width="w-full md:w-64" title="Enviar" />
        </div>
      </div>

      <div className="bottom-0 h-20 w-full bg-[url('/landing-page-bg.png')] bg-[position:20%_bottom] flex flex-col py-14 md:flex-row justify-center items-center gap-6 mt-56 md:bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent pointer-events-none"></div>
        <h1 className="text-3xl font-extrabold">TraininSync</h1>
        <p className="text-center">
          © Copyright 2025 . Todos os direitos reservados.
        </p>
      </div>
    </>
  );
}

export default App;
