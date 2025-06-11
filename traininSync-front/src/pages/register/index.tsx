import { useNavigate } from "react-router-dom";
import { ArrowBack } from "../../components/arrow-back";
import { Button } from "../../components/button";
import { useState } from "react";
import { EyeOff, Eye } from "lucide-react";
import { useForm } from "react-hook-form";
import { RegisterZod } from "./zod";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type RegisterFormData = z.infer<typeof RegisterZod>;

export function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterZod),
  });

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);

    const cleanData = {
      user: data.usuario,
      senha: data.senha,
    };

    console.log(cleanData);
    setIsLoading(false);
  };

  function handleRedirectToLogin() {
    navigate("/login");
  }

  function togglePasswordVisibility() {
    setShowPassword((prev) => !prev);
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="hidden bg-[url('/login-image.png')] bg-[position:45%_center] bg-cover h-screen text-white sm:block w-2/3"></div>

      <div className="flex justify-center items-center w-full h-full relative">
        <div>
          <ArrowBack />
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full m-10 md:max-w-1/2"
        >
          <h1 className="text-5xl font-black">Cadastro</h1>
          <div className="border border-midPurple rounded-3xl text-lowGray flex flex-col gap-4 p-5">
            <div className="flex flex-col gap-2">
              <h2>Email</h2>
              <input
                type="text"
                {...register("email")}
                className="h-11 bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <h2>Usuário</h2>
              <input
                type="text"
                {...register("usuario")}
                className="h-11 bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
              />
              {errors.usuario && (
                <span className="text-red-500">{errors.usuario.message}</span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <h2>Senha</h2>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("senha")}
                  className="h-11 w-full bg-midGray rounded-xl p-2 pr-10 focus:border text-white focus:border-lowGray outline-none"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center text-lowGray hover:text-darkPurple transition-colors duration-300 ease-in-out"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.senha && (
                <span className="text-red-500">{errors.senha.message}</span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <h2>Confirmar Senha</h2>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("confirmarSenha")}
                  className="h-11 w-full bg-midGray rounded-xl p-2 pr-10 focus:border text-white focus:border-lowGray outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute inset-y-0 right-3 flex items-center text-lowGray hover:text-darkPurple transition-colors duration-300"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.confirmarSenha && (
                <span className="text-red-500">
                  {errors.confirmarSenha.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <Button
              loading={isLoading}
              type="submit"
              width="w-64"
              title="Criar Conta"
            />
            <p
              className="text-lowGray cursor-pointer hover:text-darkPurple transition-colors duration-300 ease-in-out"
              onClick={handleRedirectToLogin}
            >
              Já tenho uma conta
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
