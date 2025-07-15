import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/button";
import { NavBar } from "../../../components/navbar";
import { CreateContratoDeServico } from "./zod";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createContratoDeServico } from "../../../api/contract/createContract";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { formatCurrency } from "../../../utils/dinheiro";
import { getAllAluno } from "../../../api/aluno/getAluno";
import { formatCPF } from "../../../utils/cpf/format";

type ContratoFormData = z.infer<typeof CreateContratoDeServico>;

interface Aluno {
  id: string;
  nome: string;
  cpf: string;
}

export function RegisterContract() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [selectedAluno, setSelectedAluno] = useState("");

  const {
    register,
    control,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContratoFormData>({
    resolver: zodResolver(CreateContratoDeServico),
    defaultValues: {
      aluno: "",
      personal: "",
      localidade_desejada: "",
      horario: {
        dia: "",
        hora_inicio: "",
        hora_fim: "",
        local: "",
      },
      servico_desejado: {
        tipo_de_servico: "",
        descricao_do_servico: "",
        valor_do_servico: 0,
      },
    },
  });

  useEffect(() => {
    async function fetchAlunos() {
      try {
        const response = await getAllAluno();
        const alunosFormatados = response.map((item: any) => ({
          id: item.id.toString(),
          nome: item.nome,
          cpf: formatCPF(item.cpf),
        }));
        setAlunos(alunosFormatados);
      } catch (error) {
        console.error("Erro ao buscar alunos:", error);
      }
    }
    fetchAlunos();
  }, []);

  function resetForm() {
    reset();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const onSubmit = async (data: ContratoFormData) => {
    const cleanData = {
      horario: {
        personal: data.personal,
        dia: data.horario.dia,
        hora_inicio: data.horario.hora_inicio,
        hora_fim: data.horario.hora_fim,
        local: data.horario.local,
        disponivel: true,
      },
      servico_desejado: {
        tipo_de_servico: data.servico_desejado.tipo_de_servico,
        descricao_do_servico: data.servico_desejado.descricao_do_servico,
        valor_do_servico: data.servico_desejado.valor_do_servico,
      },
      status: true,
      localidade_desejada: data.localidade_desejada,
      personal: data.personal,
      aluno: data.aluno,
    };

    try {
      setIsLoading(true);
      await createContratoDeServico(cleanData);
      toast.success("Contrato cadastrado com sucesso!", {
        position: "bottom-right",
        theme: "dark",
      });
      reset();
    } catch (err) {
      console.log(err);
      toast.error("Contrato não cadastrado!", {
        position: "bottom-right",
        theme: "dark",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col">
      <NavBar variant="secondary">
        <Button title="Voltar" onClick={() => navigate(-1)} />
      </NavBar>

      <form onSubmit={handleSubmit(onSubmit)} className="p-8">
        <div className="flex justify-center gap-1.5 text-3xl sm:text-5xl font-black md:justify-start md:px-6 pb-6">
          <h1>Cadastro de</h1>
          <h1 className="text-midPurple">Contrato</h1>
        </div>

        <div className="flex flex-col gap-6">
          <div className="border border-midPurple rounded-3xl flex flex-col gap-4 pt-6 px-6 pb-10">
            <div className="flex gap-1.5 text-2xl font-black">
              <h1>Dados do</h1>
              <h1 className="text-midPurple">Contrato</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lowGray">
              <div className="flex flex-col gap-2">
                <h2>Selecionar Aluno</h2>
                <select
                  {...register("aluno")}
                  value={selectedAluno}
                  onChange={(e) => {
                    setSelectedAluno(e.target.value);
                    setValue("aluno", e.target.value, { shouldValidate: true });
                  }}
                  className="h-11 bg-midGray rounded-xl p-2 text-white focus:border-lowGray outline-none"
                >
                  <option value="" disabled>
                    Selecione um aluno
                  </option>
                  {alunos.map((aluno) => (
                    <option key={aluno.id} value={aluno.id}>
                      {aluno.nome} ({aluno.cpf})
                    </option>
                  ))}
                </select>
                {errors.aluno && (
                  <span className="text-red-500">{errors.aluno.message}</span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <h2>Personal ID</h2>
                <input
                  type="text"
                  {...register("personal")}
                  className="h-11 bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                />
                {errors.personal && (
                  <span className="text-red-500">
                    {errors.personal.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <h2>Localidade Desejada</h2>
                <input
                  type="text"
                  {...register("localidade_desejada")}
                  className="h-11 bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                />
                {errors.localidade_desejada && (
                  <span className="text-red-500">
                    {errors.localidade_desejada.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <h2>Valor do Serviço (R$)</h2>
                <Controller
                  control={control}
                  name="servico_desejado.valor_do_servico"
                  render={({ field }) => (
                    <input
                      type="text"
                      value={formatCurrency(field.value)}
                      onChange={(e) => {
                        const rawValue = e.target.value.replace(/\D/g, "");
                        const numericValue = Number(rawValue) / 100;
                        setValue(
                          "servico_desejado.valor_do_servico",
                          numericValue,
                          { shouldValidate: true }
                        );
                      }}
                      placeholder="R$"
                      className="h-11 bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                    />
                  )}
                />
                {errors.servico_desejado?.valor_do_servico && (
                  <span className="text-red-500">
                    {errors.servico_desejado.valor_do_servico.message}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="border border-midPurple rounded-3xl flex flex-col gap-4 pt-6 px-6 pb-10">
            <div className="flex gap-1.5 text-2xl font-black">
              <h1>Horário e</h1>
              <h1 className="text-midPurple">Serviço</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lowGray">
              <div className="flex flex-col gap-2">
                <h2>Dia</h2>
                <input
                  type="date"
                  {...register("horario.dia")}
                  className="h-11 bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                />
                {errors.horario?.dia && (
                  <span className="text-red-500">
                    {errors.horario.dia.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <h2>Hora Início</h2>
                <input
                  type="time"
                  {...register("horario.hora_inicio")}
                  className="h-11 bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                />
                {errors.horario?.hora_inicio && (
                  <span className="text-red-500">
                    {errors.horario.hora_inicio.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <h2>Hora Fim</h2>
                <input
                  type="time"
                  {...register("horario.hora_fim")}
                  className="h-11 bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                />
                {errors.horario?.hora_fim && (
                  <span className="text-red-500">
                    {errors.horario.hora_fim.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <h2>Local</h2>
                <input
                  type="text"
                  {...register("horario.local")}
                  className="h-11 bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                />
                {errors.horario?.local && (
                  <span className="text-red-500">
                    {errors.horario.local.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <h2>Tipo de Serviço</h2>
                <input
                  type="text"
                  {...register("servico_desejado.tipo_de_servico")}
                  className="h-11 bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                />
                {errors.servico_desejado?.tipo_de_servico && (
                  <span className="text-red-500">
                    {errors.servico_desejado.tipo_de_servico.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <h2>Descrição do Serviço</h2>
                <textarea
                  {...register("servico_desejado.descricao_do_servico")}
                  className="h-24 bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                ></textarea>
                {errors.servico_desejado?.descricao_do_servico && (
                  <span className="text-red-500">
                    {errors.servico_desejado.descricao_do_servico.message}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7">
          <Button
            loading={isLoading}
            type="submit"
            width="w-full md:max-w-[342px]"
            title="Salvar"
          />
        </div>

        <div className="mt-7">
          <Button
            loading={isLoading}
            width="w-full md:max-w-[342px]"
            title="Descartar"
            bgColor="bg-midGray"
            hover="hover:bg-midGray"
            onClick={resetForm}
          />
        </div>
      </form>
    </div>
  );
}
