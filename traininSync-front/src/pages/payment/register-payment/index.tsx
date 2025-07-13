import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/button";
import { NavBar } from "../../../components/navbar";
import { useEffect, useState } from "react";
import { getAllAluno } from "../../../api/aluno/getAluno";
import { getContratosByAlunoId } from "../../../api/contract/getContract";
import { formatCPF } from "../../../utils/cpf/format";
import { z } from "zod";
import { CreatePayment } from "./zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPagamento } from "../../../api/payment/createPayment";
import { toast } from "react-toastify";

interface Aluno {
  id: string;
  nome: string;
  cpf: string;
}

interface Contrato {
  id: number;
  servico_desejado: {
    tipo_de_servico: string;
    descricao_do_servico: string;
    valor_do_servico: number;
  };
}

type PaymentFormData = z.infer<typeof CreatePayment>;

export function RegisterPayment() {
  const navigate = useNavigate();
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [contratos, setContratos] = useState<Contrato[]>([]);
  const [selectedAluno, setSelectedAluno] = useState("");
  const [selectedContrato, setSelectedContrato] = useState<number | "">("");
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

  const valor = watch("valor");

  const handleValorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("valor", e.target.value);
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

  useEffect(() => {
    async function fetchContratos() {
      if (!selectedAluno) {
        setContratos([]);
        setSelectedContrato("");
        setValue("contrato", Number(""));
        setValue("valor", "");
        return;
      }

      try {
        const alunoId = parseInt(selectedAluno);
        const contratosDoAluno = await getContratosByAlunoId(alunoId);

        setContratos(contratosDoAluno);
        setSelectedContrato("");
        setValue("contrato", Number(""));
        setValue("valor", "");
      } catch (error) {
        console.error("Erro ao buscar contratos do aluno:", error);
        setContratos([]);
      }
    }
    fetchContratos();
  }, [selectedAluno, setValue]);

  const handleContratoChange = (contratoId: string) => {
    const id = Number(contratoId);
    setSelectedContrato(id);
    setValue("contrato", id, { shouldValidate: true });

    const contratoSelecionado = contratos.find((c) => c.id === id);
    if (contratoSelecionado) {
      const valor = contratoSelecionado.servico_desejado.valor_do_servico.toFixed(2).replace(".", ",");
      setValue("valor", `R$ ${valor}`);
    }
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
      await createPagamento(cleanData);
      toast.success("Pagamento cadastrado com sucesso!", {
        position: "bottom-right",
        theme: "dark",
      });
      reset();
      setContratos([]);
      setSelectedContrato("");
    } catch (err) {
      toast.error("Erro ao cadastrar pagamento!", {
        position: "bottom-right",
        theme: "dark",
      });
    } finally {
      setIsLoading(false);
    }
  };

  function resetForm() {
    reset();
    setContratos([]);
    setSelectedContrato("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="flex flex-col">
      <NavBar>
        <Button onClick={() => navigate(-1)} title="Voltar" />
      </NavBar>

      <form onSubmit={handleSubmit(onSubmit)} className="p-8">
        <div className="flex justify-center gap-1.5 text-3xl sm:text-5xl font-black md:justify-start md:px-6 pb-6">
          <h1>Cadastro de</h1>
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
                  onChange={(e) => setSelectedAluno(e.target.value)}
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
                <select
                  {...register("contrato", { valueAsNumber: true })}
                  value={selectedContrato}
                  onChange={(e) => handleContratoChange(e.target.value)}
                  className="h-11 bg-midGray rounded-xl p-2 text-white focus:border-lowGray outline-none"
                  disabled={contratos.length === 0}
                >
                  <option value="" disabled>
                    {contratos.length === 0
                      ? "Nenhum contrato disponível"
                      : "Selecione um contrato"}
                  </option>
                  {contratos.map((contrato) => (
                    <option key={contrato.id} value={contrato.id}>
                      {contrato.servico_desejado.tipo_de_servico}
                    </option>
                  ))}
                </select>
                {errors.contrato && (
                  <span className="text-red-500">{errors.contrato.message}</span>
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
              onClick={resetForm}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
