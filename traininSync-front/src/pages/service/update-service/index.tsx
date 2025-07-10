import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import { Button } from "../../../components/button";
import { NavBar } from "../../../components/navbar";
import { updateServico } from "../../../api/service/updateService";
import { toast } from "react-toastify";
import { CreateServico } from "../register-service/zod";
import { formatCurrency } from "../../../utils/dinheiro";

type EditServiceFormData = z.infer<typeof CreateServico>;

export function EditService() {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const servico = state?.servico;

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EditServiceFormData>({
    resolver: zodResolver(CreateServico),
    defaultValues: {
      tipo_de_servico: servico?.tipo_de_servico ?? "",
      descricao_do_servico: servico?.descricao_do_servico ?? "",
      valor_do_servico: servico?.valor_do_servico ?? 0,
    },
  });

  const onSubmit = async (data: EditServiceFormData) => {
    try {
      setIsLoading(true);
      await updateServico(Number(id), data);
      toast.success("Serviço atualizado com sucesso!", {
        position: "bottom-right",
        theme: "dark",
      });
      navigate("/service/");
    } catch (err) {
      console.error(err);
      toast.error("Erro ao atualizar serviço.", {
        position: "bottom-right",
        theme: "dark",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col">
      <NavBar>
        <Button title="Voltar" onClick={() => navigate(-1)} />
      </NavBar>

      <form onSubmit={handleSubmit(onSubmit)} className="p-8">
        <div className="flex justify-center gap-1.5 text-3xl sm:text-5xl font-black md:justify-start md:px-6 pb-6">
          <h1>Editar</h1>
          <h1 className="text-midPurple">Serviço</h1>
        </div>

        <div className="border border-midPurple rounded-3xl flex flex-col gap-4 pt-6 px-6 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lowGray">
            <div className="flex flex-col gap-2">
              <label htmlFor="tipo_de_servico">Tipo de Serviço</label>
              <input
                type="text"
                {...register("tipo_de_servico")}
                className="h-11 bg-midGray rounded-xl p-2 text-white focus:border focus:border-lowGray outline-none"
              />
              {errors.tipo_de_servico && (
                <span className="text-red-500">
                  {errors.tipo_de_servico.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="valor_do_servico">Valor do Serviço (R$)</label>
              <Controller
                control={control}
                name="valor_do_servico"
                render={({ field }) => (
                  <input
                    type="text"
                    value={formatCurrency(field.value)}
                    onChange={(e) => {
                      const rawValue = e.target.value.replace(/\D/g, "");
                      const numericValue = Number(rawValue) / 100;
                      field.onChange(numericValue);
                    }}
                    className="h-11 bg-midGray rounded-xl p-2 text-white focus:border focus:border-lowGray outline-none"
                  />
                )}
              />
              {errors.valor_do_servico && (
                <span className="text-red-500">
                  {errors.valor_do_servico.message}
                </span>
              )}
            </div>

            <div className="md:col-span-2 flex flex-col gap-2">
              <label htmlFor="descricao_do_servico">Descrição do Serviço</label>
              <textarea
                {...register("descricao_do_servico")}
                rows={4}
                className="bg-midGray rounded-xl p-2 text-white focus:border focus:border-lowGray outline-none"
              />
              {errors.descricao_do_servico && (
                <span className="text-red-500">
                  {errors.descricao_do_servico.message}
                </span>
              )}
            </div>
          </div>

          <div className="pt-6">
            <Button
              type="submit"
              title="Salvar Alterações"
              loading={isLoading}
              width="w-full md:max-w-[342px]"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
