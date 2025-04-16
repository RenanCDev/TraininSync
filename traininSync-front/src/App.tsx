import { NavBar } from "./components/navbar";
import { RegisterButton } from "./components/register-button";

function App() {
  return (
    <div className="bg-[url('/landing-page-bg.png')] bg-[position:38%_center] bg-cover h-screen text-white sm:bg-center">
      
      <NavBar/>
      
      <div className="flex flex-col justify-center items-end inset-0 p-3 mt-28 sm:mt-56 sm:mr-40">
        <div className="flex gap-7 flex-col">
          <div className="flex flex-col">
            <p className="text-5xl font-bold">CHEGOU A HORA DE</p>
            <p className="text-midPurple text-5xl font-bold">
              TRANSFORMAR SEU CORPO
            </p>
            <p className="text-2xl font-semibold">O app de treino que vai</p>
            <p className="text-2xl font-semibold">mudar a sua vida</p>
          </div>
          <div className="flex justify-baseline">
            <RegisterButton/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
