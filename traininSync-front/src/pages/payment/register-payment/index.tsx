import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/button";
import { NavBar } from "../../../components/navbar";
import { useEffect, useState } from "react";
import { getAllAluno } from "../../../api/aluno/getAluno";
import { formatCPF } from "../../../utils/cpf/format";
import { z } from "zod";
import { CreatePayment } from "./zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formatCurrencyString } from "../../../utils/dinheiro";
import { createPayment } from "../../../api/payment/createPayment";
import { toast } from "react-toastify";

interface Aluno {
  id: string;
  nome: string;
  cpf: string;
}

type PaymentFormData = z.infer<typeof CreatePayment>;

export function RegisterPayment() {
  const navigate = useNavigate();
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [selectedAluno, setSelectedAluno] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<PaymentFormData>({
    resolver: zodResolver(CreatePayment),
    defaultValues: {
      valor: "",
    },
  });

  function handleLoginClick() {
    navigate("/login");
  }

  const valor = watch("valor");

  const handleValorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCurrencyString(e.target.value);
    setValue("valor", formatted);
  };

  const onSubmit = async (data: PaymentFormData) => {
    const cleanData = {
      aluno: data.aluno,
      contrato: data.contrato,
      descricao: data.descricao,
      valor: data.valor,
    };

    try {
      setIsLoading(true);
      await createPayment(cleanData);
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

  useEffect(() => {
    async function fetchAlunos() {
      try {
        const response = await getAllAluno();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const alunosFormatados = response.map((item: any) => ({
          id: item.pessoa.id.toString(),
          nome: item.pessoa.nome,
          cpf: formatCPF(item.pessoa.cpf),
        }));

        setAlunos(alunosFormatados);
        console.log(alunosFormatados);
      } catch (error) {
        console.error("Erro ao buscar alunos:", error);
      }
    }
    fetchAlunos();
  }, []);

  useEffect(() => {
    if (selectedAluno) {
      console.log("Aluno selecionado:", selectedAluno);
    }
  }, [selectedAluno]);

  return (
    <div className="flex  flex-col">
      <NavBar>
        <Button onClick={handleLoginClick} title="Login" />
      </NavBar>

      <form onSubmit={handleSubmit(onSubmit)} className="p-8">
        <div className="flex justify-center gap-1.5 text-3xl sm:text-5xl font-black md:justify-start md:px-6 pb-6">
          <h1>Pagamento</h1>
        </div>

        <div className="flex flex-col gap-6">
          <div className="border border-midPurple rounded-3xl flex flex-col gap-4 pt-6 px-6 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-lowGray">
              <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
                <h2>Selecionar Aluno</h2>
                <select
                  {...register("aluno")}
                  value={selectedAluno}
                  onChange={(e) => setSelectedAluno(e.target.value)}
                  className="h-11 bg-midGray rounded-xl p-2 text-white focus:border-lowGray outline-none"
                >
                  <option value="" disabled>
                    Selecione um aluno
                  </option>
                  {alunos.map((aluno) => (
                    <option
                      className="flex gap-10"
                      key={aluno.id}
                      value={aluno.id}
                    >
                      {aluno.nome} <> . </> ({aluno.cpf})
                    </option>
                  ))}
                </select>
                {errors.aluno && (
                  <span className="text-red-500">{errors.aluno.message}</span>
                )}
              </div>

              <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
                <h2>Contrato</h2>
                <input
                  type="number"
                  {...register("contrato")}
                  className="h-11 bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                />
                {errors.contrato && (
                  <span className="text-red-500">
                    {errors.contrato.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2 col-span-1 md:col-span-3">
                <h2>Descrição</h2>
                <textarea
                  {...register("descricao")}
                  className="h-36 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none resize-none"
                />
                {errors.descricao && (
                  <span className="text-red-500">
                    {errors.descricao.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2 col-span-1">
                <h2>Valor</h2>
                <input
                  type="text"
                  {...register("valor")}
                  placeholder="R$"
                  value={valor}
                  onChange={handleValorChange}
                  className="h-11 bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                />
                {errors.valor && (
                  <span className="text-red-500">{errors.valor.message}</span>
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
