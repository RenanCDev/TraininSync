// import { useNavigate } from "react-router-dom";

export function LoginButton() {
//   const navigate = useNavigate();

  const handleClick = () => {
    // navigate("/register");
    console.log("login");
  };

  return (
    <div
      onClick={handleClick}
      className="bg-midPurple cursor-pointer flex justify-center items-center p-3 text-2xl rounded-2xl transition duration-300 ease-in-out hover:scale-105 hover:bg-darkPurple z-20"
    >
      Login
    </div>
  );
}
