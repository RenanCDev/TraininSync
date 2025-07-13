import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../../components/button";
import { NavBar } from "../../../components/navbar";
import { CreateRegisterProgress } from "../register-progress/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateRegistroDeProgresso } from "../../../api/progress/updateProgresso";
import { getRegistroDeProgressoById } from "../../../api/progress/getProgresso";
import { getAllAluno } from "../../../api/aluno/getAluno";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { formatCPF } from "../../../utils/cpf/format";

type ProgressFormData = z.infer<typeof CreateRegisterProgress>;

interface Aluno {
  id: number;
  nome: string;
  cpf: string;
}

export function EditProgress() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [selectedAluno, setSelectedAluno] = useState<number | "">("");

  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProgressFormData>({
    resolver: zodResolver(CreateRegisterProgress),
    defaultValues: {
      aluno: undefined,
      data: "",
    },
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const [alunosResponse, progressoResponse] = await Promise.all([
          getAllAluno(),
          getRegistroDeProgressoById(Number(id)),
        ]);

        const alunosFormatados = alunosResponse.map((item: any) => ({
          id: item.id,
          nome: item.nome,
          cpf: formatCPF(item.cpf),
        }));
        setAlunos(alunosFormatados);

        setSelectedAluno(progressoResponse.aluno);
        Object.entries(progressoResponse).forEach(([key, value]) => {
          if (
            typeof value === "string" ||
            typeof value === "number" ||
            value === null ||
            value === undefined
          ) {
            setValue(key as keyof ProgressFormData, value ?? "");
          } else {
            console.warn(`Campo ignorado no setValue: ${key} =`, value);
          }
        });
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
        toast.error("Erro ao carregar dados do progresso!", {
          position: "bottom-right",
          theme: "dark",
        });
      }
    }
    fetchData();
  }, [id, setValue]);

  const onSubmit = async (data: ProgressFormData) => {
    const cleanData = {
      ...data,
      aluno: String(data.aluno),
      massa_gorda: data.massa_gorda ?? undefined,
      massa_magra: data.massa_magra ?? undefined,
      massa_muscular: data.massa_muscular ?? undefined,
      hidratacao: data.hidratacao ?? undefined,
      densidade_ossea: data.densidade_ossea ?? undefined,
      gordura_visceral: data.gordura_visceral ?? undefined,
      imc: data.imc ?? undefined,
    };

    try {
      setIsLoading(true);
      await updateRegistroDeProgresso(Number(id), cleanData);
      toast.success("Progresso atualizado com sucesso!", {
        position: "bottom-right",
        theme: "dark",
      });
      navigate("/progress");
    } catch (err) {
      console.error(err);
      toast.error("Erro ao atualizar progresso!", {
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
          <h1 className="text-midPurple">Progresso</h1>
        </div>

        <div className="flex flex-col gap-6">
          <div className="border border-midPurple rounded-3xl flex flex-col gap-4 pt-6 px-6 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-lowGray">
              <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
                <h2>Selecionar Aluno</h2>
                <select
                  {...register("aluno", { valueAsNumber: true })}
                  value={selectedAluno}
                  onChange={(e) => setSelectedAluno(Number(e.target.value))}
                  className="h-11 bg-midGray rounded-xl p-2 text-white focus:border-lowGray outline-none"
                  disabled
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
              </div>

              <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
                <h2>Data do Exame</h2>
                <input
                  type="date"
                  {...register("data")}
                  className="h-11 bg-midGray rounded-xl p-2 text-white focus:border-lowGray outline-none"
                />
                {errors.data && (
                  <span className="text-red-500">{errors.data.message}</span>
                )}
              </div>

              {[
                ["Massa Magra", "massa_magra"],
                ["Gordura Corporal", "massa_gorda"],
                ["Massa Muscular", "massa_muscular"],
                ["Hidratação", "hidratacao"],
                ["Densidade Óssea", "densidade_ossea"],
                ["Gordura Visceral", "gordura_visceral"],
                ["Taxa Metabólica Basal", "taxa_de_metabolismo_basal"],
                ["Altura", "altura"],
                ["Peso", "peso"],
                ["IMC", "imc"],
              ].map(([label, field]) => (
                <div className="flex flex-col gap-2 col-span-1" key={field}>
                  <h2>{label}</h2>
                  <input
                    type="text"
                    {...register(field as keyof ProgressFormData)}
                    className="h-11 bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                  />
                  {errors[field as keyof ProgressFormData] && (
                    <span className="text-red-500">
                      {errors[field as keyof ProgressFormData]?.message}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-7 flex flex-col md:gap-5 md:flex-row">
          <Button
            loading={isLoading}
            type="submit"
            width="w-full md:max-w-[342px]"
            title="Salvar Alterações"
          />
          <Button
            loading={isLoading}
            width="w-full md:max-w-[342px]"
            title="Descartar"
            bgColor="bg-midGray"
            hover="hover:bg-midGray"
            onClick={reset}
          />
        </div>
      </form>
    </div>
  );
}
