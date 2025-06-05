import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/button";
import { NavBar } from "../../../components/navbar";
import { CreateServico } from "./zod";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { createServico } from "../../../api/service/createService";
import { toast } from "react-toastify";
import { formatCurrency, parseCurrency } from "../../../utils/dinheiro";

type ServiceFormData = z.infer<typeof CreateServico>;

export function RegisterService() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ServiceFormData>({
    resolver: zodResolver(CreateServico),
    defaultValues: {
      valor_do_servico: 0,
    },
  });

  function handleLoginClick() {
    navigate("/login");
  }

  const onSubmit = async (data: ServiceFormData) => {
    const cleanData = {
      descricao_do_servico: data.descricao_do_servico,
      tipo_de_servico: data.tipo_de_servico,
      valor_do_servico: data.valor_do_servico,
    };

    try {
      setIsLoading(true);
      await createServico(cleanData);
      toast.success("Serviço cadastrado com sucesso!", {
        position: "bottom-right",
        theme: "dark",
      });
      reset();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  function resetForm() {
    reset();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="flex flex-col">
      <NavBar>
        <Button onClick={handleLoginClick} title="Login" />
      </NavBar>

      <form onSubmit={handleSubmit(onSubmit)} className="p-8">
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
                  {...register("tipo_de_servico")}
                  className="h-11 bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                />
                {errors.tipo_de_servico && (
                  <span className="text-red-500">
                    {errors.tipo_de_servico.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
                <h2>Descrição</h2>
                <textarea
                  {...register("descricao_do_servico")}
                  className="h-36 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none resize-none"
                />
                {errors.descricao_do_servico && (
                  <span className="text-red-500">
                    {errors.descricao_do_servico.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2 col-span-1">
                <h2>Valor</h2>
                <Controller
                  control={control}
                  name="valor_do_servico"
                  render={({ field }) => (
                    <input
                      type="text"
                      value={formatCurrency(field.value)}
                      onChange={(e) => {
                        const parsed = parseCurrency(e.target.value);
                        field.onChange(parsed);
                      }}
                      placeholder="R$"
                      className="h-11 bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                    />
                  )}
                />
                {errors.valor_do_servico && (
                  <span className="text-red-500">
                    {errors.valor_do_servico.message}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:gap-5 md:flex-row">
          <div className="mt-7">
            <Button
              loading={isLoading}
              type="submit"
              width="w-full md:min-w-[342px]"
              title="Salvar"
            />
          </div>

          <div className="mt-7">
            <Button
              loading={isLoading}
              onClick={resetForm}
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
