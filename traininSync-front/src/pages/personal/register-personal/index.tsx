import { useNavigate } from "react-router-dom";
import { CreatePersonal } from "./zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { toast } from "react-toastify";

import { Button } from "../../../components/button";
import { NavBar } from "../../../components/navbar";
import { createPersonal } from "../../../api/personal/createPersonal";
import { formatCPF, removeCPFFormatting } from "../../../utils/cpf/format";
import {
  formatPhoneNumber,
  unformatPhoneNumber,
} from "../../../utils/celular/format";

type PersonalFormData = z.infer<typeof CreatePersonal>;

export function RegisterPersonal() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<PersonalFormData>({
    resolver: zodResolver(CreatePersonal),
  });

  function handleLoginClick() {
    navigate("/login");
  }

  function resetForm() {
    reset();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const onSubmit = async (data: PersonalFormData) => {
    const cleanData = {
      dados_bancarios: {
        numero_conta: data.numero_conta,
        agencia: data.agencia,
      },
      nome: data.nome,
      cpf: removeCPFFormatting(data.cpf),
      data_de_nascimento: data.data_de_nascimento,
      email: data.email,
      numero_de_celular: unformatPhoneNumber(data.numero_de_celular),
      sexo: data.sexo,
      nome_social: data.nome_social || null,
      etnia: data.etnia,
      estado_civil: data.estado_civil,
      status: true,
      cref: data.cref,
      especialidades: data.especialidades,
      experiencia_profissional: data.experiencia_profissional,
      horarios_disponiveis: data.horarios_disponiveis,
      locais_disponiveis: data.locais_disponiveis,
    };

    try {
      setIsLoading(true);
      await createPersonal(cleanData);
      toast.success("Personal cadastrado com sucesso!", {
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

  return (
    <div className="flex flex-col">
      <NavBar>
        <Button onClick={handleLoginClick} title="Login" />
      </NavBar>

      <form onSubmit={handleSubmit(onSubmit)} className="p-8">
        <div className="flex justify-center gap-1.5 text-3xl sm:text-5xl font-black md:justify-start md:px-6 pb-6">
          <h1>Cadastro de</h1>
          <h1 className="text-midPurple">Personal</h1>
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
                <h2>Nome Social</h2>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="col-span-1 flex flex-col gap-2">
                    <h2>Estado Civil</h2>
                    <select
                      {...register("estado_civil")}
                      className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                    >
                      <option value="nao_informado">Não informado</option>
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
                  <div className="col-span-1 flex flex-col gap-2">
                    <h2>CREF</h2>
                    <input
                      type="text"
                      {...register("cref")}
                      className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                    />
                    {errors.cref && (
                      <span className="text-red-500">
                        {errors.cref.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-midPurple rounded-3xl flex flex-col gap-4 pt-6 px-6 pb-10">
            <div className="flex gap-1.5 text-2xl font-black">
              <h1>Dados</h1>
              <h1 className="text-midPurple">Bancários</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-lowGray">
              <div className="flex flex-col gap-2 col-span-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="col-span-1 flex flex-col gap-2">
                    <h2>Número da Conta</h2>
                    <input
                      type="number"
                      {...register("numero_conta")}
                      className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                    />
                    {errors.numero_conta && (
                      <span className="text-red-500">
                        {errors.numero_conta.message}
                      </span>
                    )}
                  </div>
                  <div className="col-span-1 flex flex-col gap-2">
                    <h2>Agência</h2>
                    <input
                      type="number"
                      {...register("agencia")}
                      className="h-11 w-full bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none"
                    />
                    {errors.agencia && (
                      <span className="text-red-500">
                        {errors.agencia.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-midPurple rounded-3xl flex flex-col gap-4 pt-6 px-6 pb-10">
            <div className="flex gap-1.5 text-2xl font-black">
              <h1>Formação</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-lowGray">
              <div className="flex flex-col gap-2 col-span-2">
                <h2>Especialidades</h2>
                <textarea
                  {...register("especialidades")}
                  className="h-24 bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none resize-none"
                />
                {errors.especialidades && (
                  <span className="text-red-500">
                    {errors.especialidades.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2 col-span-2">
                <h2>Experiência Profissional</h2>
                <textarea
                  {...register("experiencia_profissional")}
                  className="h-24 bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none resize-none"
                />
                {errors.experiencia_profissional && (
                  <span className="text-red-500">
                    {errors.experiencia_profissional.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-4 col-span-2 md:flex-row">
                <div className="flex flex-col gap-2 col-span-2 md:col-span-1 md:w-1/2">
                  <h2>Horários Disponíveis</h2>
                  <textarea
                    {...register("horarios_disponiveis")}
                    className="h-24 bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none resize-none"
                  />
                  {errors.horarios_disponiveis && (
                    <span className="text-red-500">
                      {errors.horarios_disponiveis.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2 col-span-2 md:col-span-1 md:w-1/2">
                  <h2>Locais Disponíveis</h2>
                  <textarea
                    {...register("locais_disponiveis")}
                    className="h-24 bg-midGray rounded-xl p-2 focus:border text-white focus:border-lowGray outline-none resize-none"
                  />
                  {errors.locais_disponiveis && (
                    <span className="text-red-500">
                      {errors.locais_disponiveis.message}
                    </span>
                  )}
                </div>
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
