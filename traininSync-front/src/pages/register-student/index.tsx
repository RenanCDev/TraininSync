import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { NavBar } from "../../components/navbar";
import { CreateAluno } from "./zod";
import { z } from "zod";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formatCPF, removeCPFFormatting } from "../../utils/cpf/format";
import {
  formatPhoneNumber,
  unformatPhoneNumber,
} from "../../utils/celular/format";
import { createAluno } from "../../api/aluno/createAluno";
import { toast } from "react-toastify";
import { getAllAluno } from "../../api/aluno/getAluno";
import { useEffect, useState } from "react";
import { DataAtual } from "../../utils/dia-atual";

type AlunoFormData = z.infer<typeof CreateAluno>;

export function RegisterStudent() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors },
  } = useForm<AlunoFormData>({
    resolver: zodResolver(CreateAluno),
    defaultValues: {
      data_do_exame: DataAtual,
    },
  });

  const altura = useWatch({ control, name: "altura" });
  const peso = useWatch({ control, name: "peso" });

  useEffect(() => {
    const timeout = setTimeout(() => {
      const altNum = parseFloat(String(altura || 0));
      const pesoNum = parseFloat(String(peso || 0));
      if (altNum > 0 && pesoNum > 0) {
        const imcValue = pesoNum / (altNum * altNum);
        const rounded = Number(imcValue.toFixed(2));
        setValue("imc", rounded);
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [altura, peso, setValue]);

  function handleLoginClick() {
    navigate("/login");
  }

  const onSubmit = async (data: AlunoFormData) => {
    const cleanData = {
      pessoa: {
        nome: data.nome,
        cpf: removeCPFFormatting(data.cpf),
        data_de_nascimento: data.data_de_nascimento,
        email: data.email,
        numero_de_celular: unformatPhoneNumber(data.numero_de_celular),
        sexo: data.sexo,
        nome_social: data.nome_social,
        etnia: data.etnia,
        estado_civil: data.estado_civil,
      },
      status: true,
      bioimpedancia: data.bioimpedancia,
      altura: data.altura,
      data_do_exame: data.data_do_exame,
      hora_do_exame: data.hora_do_exame,
      agua_corporal_total: data.agua_corporal_total,
      proteinas: data.proteinas,
      minerais: data.minerais,
      gordura_corporal: data.gordura_corporal,
      peso: data.peso,
      massa_muscular_esqueletica: data.massa_muscular_esqueletica,
      imc: data.imc,
      taxa_metabolica_basal: data.taxa_metabolica_basal,
    };

    try {
      setIsLoading(true);
      await createAluno(cleanData);
      toast.success("Aluno cadastrado com sucesso!", {
        position: "bottom-right",
        theme: "dark",
      });
      reset();
    } catch (err) {
      console.log(err);
      toast.error("Aluno não cadastrado!", {
        position: "bottom-right",
        theme: "dark",
      });
    } finally {
      setIsLoading(false);
    }
  };

  async function getAlunos() {
    try {
      setIsLoading(true);
      const dados = await getAllAluno();
      toast.success("Aluno GET!", {
        position: "bottom-right",
        theme: "dark",
      });
      console.log("Alunos: ", dados);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col">
      <NavBar>
        <Button onClick={handleLoginClick} title="Login" />
      </NavBar>

      <form onSubmit={handleSubmit(onSubmit)} className="p-8">
        <div className="flex justify-center gap-1.5 text-3xl sm:text-5xl font-black md:justify-start md:px-6 pb-6">
          <h1>Cadastro de</h1>
          <h1 className="text-midPurple">Aluno</h1>
        </div>

        <div className="flex flex-col gap-6">
          <div className="border border-midPurple rounded-3xl flex flex-col gap-4 pt-6 px-6 pb-10">
            <div className="flex gap-1.5 text-2xl font-black">
              <h1>Dados</h1>
              <h1 className="text-midPurple">Pessoais</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-lowGray">
              <div className="flex flex-col gap-2 col-span-4 md:col-span-2">
                <h2>Nome completo</h2>
                <input
                  type="text"
                  {...register("nome")}
                  className="h-11 bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                />
                {errors.nome && (
                  <span className="text-red-500">{errors.nome.message}</span>
                )}
              </div>

              <div className="flex flex-col gap-2 col-span-4 md:col-span-2">
                <h2>Nome social</h2>
                <input
                  type="text"
                  {...register("nome_social")}
                  className="h-11 bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                />
                {errors.nome_social && (
                  <span className="text-red-500">
                    {errors.nome_social.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2 col-span-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="col-span-1 flex flex-col gap-2">
                    <h2>CPF</h2>
                    <input
                      type="text"
                      {...register("cpf")}
                      className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                      onChange={(e) => {
                        const formattedCPF = formatCPF(e.target.value);
                        setValue("cpf", formattedCPF);
                      }}
                    />
                    {errors.cpf && (
                      <span className=" text-red-500">
                        {errors.cpf.message}
                      </span>
                    )}
                  </div>
                  <div className="col-span-1 flex flex-col gap-2">
                    <h2>Etnia</h2>
                    <select
                      {...register("etnia")}
                      className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                    >
                      <option value="nao_informado">Não informado</option>
                      <option value="amarela">Amarela</option>
                      <option value="branca">Branca</option>
                      <option value="indigena">Indigena</option>
                      <option value="parda">Parda</option>
                      <option value="preta">Preta</option>
                    </select>
                    {errors.etnia && (
                      <span className="text-red-500">
                        {errors.etnia.message}
                      </span>
                    )}
                  </div>
                  <div className="col-span-1 flex flex-col gap-2">
                    <h2>Sexo</h2>
                    <select
                      {...register("sexo")}
                      className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                    >
                      <option value="N">Não informado</option>
                      <option value="F">Feminino</option>
                      <option value="M">Masculino</option>
                      <option value="O">Outro</option>
                    </select>
                    {errors.sexo && (
                      <span className="text-red-500">
                        {errors.sexo.message}
                      </span>
                    )}
                  </div>
                  <div className="col-span-1 flex flex-col gap-2">
                    <h2>Data de nascimento</h2>
                    <input
                      type="date"
                      {...register("data_de_nascimento")}
                      className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                    />
                    {errors.data_de_nascimento && (
                      <span className="text-red-500">
                        {errors.data_de_nascimento.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 col-span-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="col-span-1 flex flex-col gap-2">
                    <h2>E-mail</h2>
                    <input
                      type="text"
                      {...register("email")}
                      className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                    />
                    {errors.email && (
                      <span className="text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className="col-span-1 flex flex-col gap-2">
                    <h2>Celular</h2>
                    <input
                      type="text"
                      {...register("numero_de_celular")}
                      className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                      onChange={(e) => {
                        const formattedPhone = formatPhoneNumber(
                          e.target.value
                        );
                        setValue("numero_de_celular", formattedPhone);
                      }}
                    />
                    {errors.numero_de_celular && (
                      <span className="text-red-500">
                        {errors.numero_de_celular.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 col-span-4">
                <div className="col-span-1 flex flex-col gap-2">
                  <h2>Estado Civil</h2>
                  <select
                    {...register("estado_civil")}
                    className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                  >
                    <option value="nao_informado">Não Informado</option>
                    <option value="casado">Casado</option>
                    <option value="divorciado">Divorciado</option>
                    <option value="solteiro">Solteiro</option>
                    <option value="uniao_estavel">União estável</option>
                    <option value="viuvo">Viúvo</option>
                  </select>
                  {errors.estado_civil && (
                    <span className="text-red-500">
                      {errors.estado_civil.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="border border-midPurple rounded-3xl flex flex-col gap-4 pt-6 px-6 pb-10">
            <div className="flex gap-1.5 text-2xl font-black">
              <h1>Dados de</h1>
              <h1 className="text-midPurple">Saúde</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-lowGray">
              <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
                <h2>Altura</h2>
                <input
                  type="number"
                  {...register("altura", {
                    required: "Altura é obrigatória",
                    pattern: {
                      value: /^\d+(\.\d{1,2})?$/,
                      message: "Use apenas ponto e até duas casas decimais",
                    },
                  })}
                  placeholder="M"
                  className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                  step="0.01"
                />
                {errors.altura && (
                  <span className="text-red-500">{errors.altura.message}</span>
                )}
              </div>
              <div className="col-span-1 flex flex-col gap-2">
                <h2>Peso</h2>
                <input
                  type="number"
                  {...register("peso")}
                  placeholder="Kg"
                  className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                  step="000.001"
                />
                {errors.peso && (
                  <span className="text-red-500">{errors.peso.message}</span>
                )}
              </div>
              <div className="col-span-1 flex flex-col gap-2">
                <h2>Bioimpedancia</h2>
                <input
                  type="number"
                  {...register("bioimpedancia")}
                  max={1500}
                  className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                  step="0.01"
                />
                {errors.bioimpedancia && (
                  <span className="text-red-500">
                    {errors.bioimpedancia.message}
                  </span>
                )}
              </div>
              <div className="col-span-1 flex flex-col gap-2">
                <h2>IMC</h2>
                <input
                  type="number"
                  {...register("imc")}
                  className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                  step="0.01"
                />
                {errors.imc && (
                  <span className="text-red-500">{errors.imc.message}</span>
                )}
              </div>
              <div className="col-span-1 flex flex-col gap-2">
                <h2>Data do Exame</h2>
                <input
                  type="date"
                  {...register("data_do_exame")}
                  placeholder="dd/mm/aaaa"
                  className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                />
                {errors.data_do_exame && (
                  <span className="text-red-500">
                    {errors.data_do_exame.message}
                  </span>
                )}
              </div>
              <div className="col-span-1 flex flex-col gap-2">
                <h2>Hora do Exame</h2>
                <input
                  type="time"
                  {...register("hora_do_exame")}
                  placeholder="hh:mm"
                  className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                />
                {errors.hora_do_exame && (
                  <span className="text-red-500">
                    {errors.hora_do_exame.message}
                  </span>
                )}
              </div>
              <div className="col-span-1 flex flex-col gap-2">
                <h2>Água Corporal Total</h2>
                <input
                  type="number"
                  {...register("agua_corporal_total")}
                  placeholder="L"
                  className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                  step="0.01"
                />
                {errors.agua_corporal_total && (
                  <span className="text-red-500">
                    {errors.agua_corporal_total.message}
                  </span>
                )}
              </div>
              <div className="col-span-1 flex flex-col gap-2">
                <h2>Gordura Corporal</h2>
                <input
                  type="number"
                  {...register("gordura_corporal")}
                  placeholder="Kg"
                  className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                  step="0.01"
                />
                {errors.gordura_corporal && (
                  <span className="text-red-500">
                    {errors.gordura_corporal.message}
                  </span>
                )}
              </div>
              <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
                <h2>Massa Muscular Esqueletica</h2>
                <input
                  type="number"
                  {...register("massa_muscular_esqueletica")}
                  placeholder="Kg"
                  className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                  step="0.01"
                />
                {errors.massa_muscular_esqueletica && (
                  <span className="text-red-500">
                    {errors.massa_muscular_esqueletica.message}
                  </span>
                )}
              </div>
              <div className="col-span-1 flex flex-col gap-2">
                <h2>Taxa Metabolica Basal</h2>
                <input
                  type="number"
                  {...register("taxa_metabolica_basal")}
                  placeholder="Kcal/dia"
                  className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                  step="0.01"
                />
                {errors.taxa_metabolica_basal && (
                  <span className="text-red-500">
                    {errors.taxa_metabolica_basal.message}
                  </span>
                )}
              </div>
              <div className="md:col-span-2 flex flex-col gap-2">
                <h2>Proteina</h2>
                <input
                  type="number"
                  {...register("proteinas")}
                  placeholder="Kg"
                  className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                  step="0.01"
                />
                {errors.proteinas && (
                  <span className="text-red-500">
                    {errors.proteinas.message}
                  </span>
                )}
              </div>
              <div className="md:col-span-2 flex flex-col gap-2">
                <h2>Minerais</h2>
                <input
                  type="number"
                  {...register("minerais")}
                  placeholder="Kg"
                  className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                  step="0.01"
                />
                {errors.minerais && (
                  <span className="text-red-500">
                    {errors.minerais.message}
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
            onClick={getAlunos}
            width="w-full md:max-w-[342px]"
            title="log Alunos teste"
          />
        </div>
      </form>
    </div>
  );
}
