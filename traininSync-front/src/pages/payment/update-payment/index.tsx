import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Button } from "../../../components/button";
import { NavBar } from "../../../components/navbar";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { CreatePayment } from "../register-payment/zod";
import { updatePagamento } from "../../../api/payment/updatePayment";
import { getAllAluno } from "../../../api/aluno/getAluno";
import { formatCPF } from "../../../utils/cpf/format";
import { formatCurrencyString } from "../../../utils/dinheiro";

type PaymentFormData = z.infer<typeof CreatePayment>;

interface Aluno {
  id: string;
  nome: string;
  cpf: string;
}

export function EditPayment() {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const pagamento = state?.pagamento;

  const [isLoading, setIsLoading] = useState(false);
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [selectedAluno, setSelectedAluno] = useState(
    String(pagamento?.aluno) ?? ""
  );

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<PaymentFormData>({
    resolver: zodResolver(CreatePayment),
    defaultValues: {
      aluno: String(pagamento?.aluno) ?? "",
      contrato: pagamento?.contrato ?? "",
      descricao: pagamento?.descricao ?? "",
      valor: pagamento
        ? formatCurrencyString((pagamento.valor * 100).toFixed(0))
        : "",
    },
  });

  const valor = watch("valor");

  const handleValorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCurrencyString(e.target.value);
    setValue("valor", formatted, { shouldValidate: true });
  };

  const onSubmit = async (data: PaymentFormData) => {
    const cleanData = {
      aluno: data.aluno,
      contrato: data.contrato,
      descricao: data.descricao,
      valor: String(
        Number(data.valor.replace(/[^\d,-]/g, "").replace(",", ".")).toFixed(2)
      ),
    };

    try {
      setIsLoading(true);
      await updatePagamento(Number(id), cleanData);
      toast.success("Pagamento atualizado com sucesso!", {
        position: "bottom-right",
        theme: "dark",
      });
      navigate(`/payment/`);
    } catch (err) {
      console.error(err);
      toast.error("Erro ao atualizar pagamento!", {
        position: "bottom-right",
        theme: "dark",
      });
    } finally {
      setIsLoading(false);
    }
  };

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

  return (
    <div className="flex flex-col">
      <NavBar>
        <Button title="Voltar" onClick={() => navigate(-1)} />
      </NavBar>

      <form onSubmit={handleSubmit(onSubmit)} className="p-8">
        <div className="flex justify-center gap-1.5 text-3xl sm:text-5xl font-black md:justify-start md:px-6 pb-6">
          <h1>Editar</h1>
          <h1 className="text-midPurple">Pagamento</h1>
        </div>

        <div className="flex flex-col gap-6">
          <div className="border border-midPurple rounded-3xl flex flex-col gap-4 pt-6 px-6 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-lowGray">
              <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
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
            onClick={resetForm}
          />
        </div>
      </form>
    </div>
  );
}
