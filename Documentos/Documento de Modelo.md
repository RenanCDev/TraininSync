# Documento de Modelos

Modelo conceitual UML e modelo entidade-relacionamento

## Modelo Conceitual

### Diagrama de Classe

```mermaid
classDiagram
  class Pessoa {
    -id : int
    -nome : string
    -RG_CNH : long
    -CPF : long
    -dataDeNascimento : date
    -Email : string
    -numeroDeCelular : long
    -sexo : string
    -orientaçãoSexual : string
    -nomeSocial : string
    -etnia : string
    -estadoCivil : string
  }
  class Aluno {
    -status : bollean
    -bioimpedancia :
      -altura : float
      -idade : float
      -sexo : string
      -dataDoExame : date
      -horaDoExame : float
      -aguaCorporalTotal : float
      -proteina : float
      -minerais : float
      -massaGordura : float
      -peso : float
      -massaMusculaEsqueletica : float
      -imc : float
      -pgc : float
      -taxaMetabolicaBasal : float
    + cadastrarAluno(dados : Aluno) : void
    + editarAluno(dados : Aluno) : void
    + excluirAluno(dados : Aluno) : void
    + desativarAluno(dados : Aluno) : void
    + reativarAluno(dados : Aluno) : void
    + consultarAluno(CPF : long) : Aluno
  }
  class Personal {
    -status : bollean
    -CREF : string
    -especialidades : string
    -ExperienciaProfissional : string
    -dadosBancarios :
      -numeroConta : long
      -agencia : long
    -horariosDisponiveis : float
    -locaisDisponiveis : string
    + getCREF() : string
    + setCREF(CREF : string) : void
    + getEspecialidades() : string
    + setEspecialidades(especialidades : string) : void
    + getExperienciaProfissional() : string
    + setExperienciaProfissional(experienciaProfissional : string) : void
    + getDadosBancarios() : DadosBancarios
    + setDadosBancarios(dadosBancarios : DadosBancarios) : void
    + getNumeroConta() : long
    + setNumeroConta(NumeroConta : long) : void
    + getAgencia() : long
    + setAgencia(agencia : long) : void
    + getHorariosDisponiveis() : float
    + setHorariosDisponiveis(horariosDisponiveis : float) : void
    + getLocaisDisponiveis() : string
    + setLocaisDisponiveis(locaisDisponiveis : string) : void
    + cadastrarPersonal(dados : Personal) : void
    + editarPersonal(dados : Personal) : void
    + desativarPersonal(dados : Personal) : void
    + reativarPersonal(dados : Personal) : void
    + consultarPersonal(CPF : long) : Personal
  }
  class Servicos {
    -id : int
    -tiposDeServicos : string
    -descricaoDosServicos : string
    -valoresDosServicos : float
    + cadastrarServicos(dados, Servicos) : void
    + consultarServicos(id : int) : Servicos
    + editarServicos(dados : Servicos) : void
    + excluirServicos(dados : Servicos) : void
    + monitorarContServicos(dados : Servicos) : void
  }
  class Contrato_de_servico {
    -id : int
    -personal : Personal
    -aluno : Aluno
    -horario : Agenda
    -servicoDesejado : Servicos
    -localidadeDesejada : string
    + cadastrarContrato(dados : Contrato_de_servico) : void
    + consultarContrato(id : int) : Contrato_de_servico
    + editarContrato(dados : Contrato_de_servico) : void
    + suspenderContrato(dados : Contrato_de_servico) : void
    + reativarContrato(dados : Contrato_de_servico) : void
    + incluirServicodeContrato(dados : Contrato_de_servico) : void
  }
  class Agenda {
    -id : int
    -horariosAgendados : float
    -dias : string
    + agendarHorario(dados : Agenda) : void
    + consultarHorario(id : date) : Agenda
    + consultarHorariosDisponiveis(dados : Agenda) : void
    + editarHorario(dados : Agenda) : void
    + excluirHorario(dados : Agenda) : void
    + filtrarSessão(dados : Agenda) : void
    + cancelarSessão(dados : Agenda) : void
    + gerarRelatoriosdeAtendimento(dados : Agenda) : void
    + notificarAgendamentos(dados : Agenda) : void
  }
  class Pagamento {
    -contrato : Contrato_de_servico
    -metodoDePagamento : string
    -comprovanteDePagamento : bollean
    -dataDoPagamento : date
    -horaDoPagamento : float
    -valorPago : float
    + criarRelatorioFinanceiro(dados : Pagamento) : void
    + excluirRelatorioFinanceiro(dados : Pagamento) : void
    + pesquisarRelatorioFinanceiro(CPF : long) : Pagamento
    + monitorarinadimplencia(dados : Pagamento) : void
  }
  class Registro_de_progresso {
    -aluno : Aluno
    -bioimpedancia :
      -massaGorda : float
      -massaMagra : float
      -massaMuscular : float
      -hidratacao : float
      -densidadeOssea : float
      -gorduraVisceral : float
      -taxaDeMetabolismoBasal : float
      -altura : float
      -peso : float
    -data : date
    + criarRegistroDeProgresso(dados : Registro_de_progresso) : void
    + consultarRegistroDeProgresso(CPFDoAluno : long) : Registro_de_progresso
    + excluirRegistroDeProgresso(dados : Registro_de_progresso) : void
    + editarRegistroDeProgresso(CPFDoAluno : long) : Registro_de_progresso
  }

  Pessoa <|-- Aluno
  Pessoa <|-- Personal
  Contrato_de_servico "1" -- "1" Personal : personal
  Contrato_de_servico "1" -- "1" Aluno : aluno
  Contrato_de_servico "1" -- "1" Servicos : servicoDesejado
  Contrato_de_servico "1" -- "1" Agenda : horario
  Pagamento "1" -- "1" Contrato_de_servico : contrato
  Registro_de_progresso "1" -- "1" Aluno : aluno
```
      

### Descrição das Entidades

Descrição breve das entidades que o sistema contém.

| Entidade | Descrição   |
|----------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| Personal   | O sistema deverá exigir a entrada, e realizar quando necessário a
consulta, edição, exclusão lógica e física dos dados. |

| Aluno     | O sistema deverá exigir a entrada, e realizar quando necessário a edição,
exclusão lógica e física, dos dados. |

| Pessoa     | Entidade aux.  |

| Servico   | O sistema deverá cadastrar alguns tipos de serviços/pacotes que estarão
pré-preparados para a melhor negociação entre personal e aluno.   |

| Agenda   | Permitir que o personal cadastre no sistema horários disponíveis para
agendamentos de serviços.  |

| Gerar Pagamento   | Capacidade de manter relatórios de pagamentos realizados.       |

| Registro_de_progresso   | Permitir o acompanhamento do progresso dos alunos ao longo do tempo,
registrando medidas corporais, resultados de testes de aptidão física e desempenho
em exercícios. |

| Servicos_de_contrato   | Entidade aux. |

| Contrato_de_servico   | Capacidade de marcar e gerenciar as sessões de treinamento com os
clientes ao longo do tempo.     |

### Modelo de dados (Entidade-Relacionamento)

```mermaid
erDiagram
    PESSOA ||--o{ PERSONAL : possui
    PESSOA ||--o{ ALUNO : possui
    PERSONAL ||--o{ CONTRATO_DE_SERVICO : oferece
    ALUNO ||--o{ CONTRATO_DE_SERVICO : contrata
    CONTRATO_DE_SERVICO ||--|| SERVICOS : inclui
    CONTRATO_DE_SERVICO ||--o{ AGENDA : agenda
    CONTRATO_DE_SERVICO ||--o{ PAGAMENTO : possui
    ALUNO ||--o{ REGISTRO_DE_PROGRESSO : tem

    PESSOA {
        int id
        string nome
        string CPF
        string email
        string telefone
        string sexo
        string estado_civil
    }

    PERSONAL {
        int id
        string CREF
        string especialidades
        string experiencia
        int agencia_bancaria
        int numero_conta
        float horarios_disponiveis
    }

    ALUNO {
        int id
        string biotipo
        float gordura
        float massa_muscular
        float altura
    }

    SERVICOS {
        int id
        string tipo
        string descricao
        float valor
    }

    CONTRATO_DE_SERVICO {
        int id
        int personal_id
        int aluno_id
        int servico_id
        string horario
        string local
    }

    AGENDA {
        int id
        float horario
        string dias
    }

    PAGAMENTO {
        int id
        int contrato_id
        string metodo
        boolean comprovante
        date data_pagamento
        float valor_pago
    }

    REGISTRO_DE_PROGRESSO {
        int id
        int aluno_id
        float gordura
        float massa_muscular
        float altura
    }
```

|   Tabela   | Laboratório |
| ---------- | ----------- |
| Servicos_de_Contrato  | Armazena as informações daquela classe. |

|  Nome         | Descrição                        | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------- | -------------------------------- | ------------ | ------- | --------------------- |
| servico        | base  | SERIAL       | ---     | PK / Identity |
| contrato         | base    | VARCHAR      | 15      | Unique / Not Null |

---

|   Tabela   | Laboratório |
| ---------- | ----------- |
| Pessoa  | Armazena as informações daquela classe. |

| Nome  | Tipo de Dado | Restrições de Domínio |
| ----- | ------------ | --------------------- |
| id  | SERIAL | PK |
| nome | VARCHAR(150) | NOT NULL |
| RG_CNH | VARCHAR(20) | UNIQUE, NOT NULL |
| CPF | VARCHAR(14) | UNIQUE, NOT NULL |
| dataDeNascimento | DATE | NOT NULL |
| email | VARCHAR(150) | UNIQUE, NOT NULL |
| numeroDeCelular | VARCHAR(15) | NOT NULL |
| sexo | VARCHAR(50) | NOT NULL |
| orientacaoSexual | VARCHAR(50) | --- |
| nomeSocial | VARCHAR(150) | --- |
| etnia | VARCHAR(50) | --- |
| estadoCivil | VARCHAR(50) | --- |

---

|   Tabela   | Laboratório |
| ---------- | ----------- |
| Aluno  | Armazena as informações daquela classe. |

| Nome  | Tipo de Dado | Restrições de Domínio |
| ----- | ------------ | --------------------- |
| id | SERIAL | PK |
| pessoa_id | INT | FK → Pessoa(id) ON DELETE CASCADE |
| status | BOOLEAN | NOT NULL DEFAULT TRUE |
| bioimpedancia | VARCHAR(15) | UNIQUE, NOT NULL |
| altura | FLOAT | NOT NULL |
| idade | INT | NOT NULL |
| sexo | VARCHAR(50) | NOT NULL |
| dataDoExame | DATE | NOT NULL |
| horaDoExame | TIME | NOT NULL |
| aguaCorporalTotal | FLOAT | --- |
| proteinas | FLOAT | --- |
| minerais | FLOAT | --- |
| massaGordura | FLOAT | --- |
| peso | FLOAT | NOT NULL |
| massaMusculaEsqueletica | FLOAT | --- |
| imc | FLOAT | --- |
| pgc | FLOAT | --- |
| taxaMetabolicaBasal | FLOAT | --- |

---

|   Tabela   | Laboratório |
| ---------- | ----------- |
| Personal  | Armazena as informações daquela classe. |

| Nome  | Tipo de Dado | Restrições de Domínio |
| ----- | ------------ | --------------------- |
| id | SERIAL | PK |
| pessoa_id | INT | FK → Pessoa(id) ON DELETE CASCADE |
| status | BOOLEAN | NOT NULL DEFAULT TRUE |
| CREF | VARCHAR(15) | UNIQUE, NOT NULL |
| especialidades | VARCHAR(150) | NOT NULL |
| experienciaProfissional | VARCHAR(250) | --- |
| dadosBancarios | VARCHAR(250) | --- |
| numeroConta | VARCHAR(50) | --- |
| agencia | VARCHAR(50) | --- |
| horariosDisponiveis | TEXT | --- |
| locaisDisponiveis | TEXT | --- |

---

|   Tabela   | Laboratório |
| ---------- | ----------- |
| Servicos  | Armazena as informações daquela classe. |

| Nome  | Tipo de Dado | Restrições de Domínio |
| ----- | ------------ | --------------------- |
| id | SERIAL | PK |
| tipoDeServico | VARCHAR(150) | UNIQUE, NOT NULL |
| descricaoDoServico | TEXT | NOT NULL |
| valorDoServico | FLOAT | NOT NULL |

---

|   Tabela   | Laboratório |
| ---------- | ----------- |
| Agenda  | Armazena as informações daquela classe. |

| Nome  | Tipo de Dado | Restrições de Domínio |
| ----- | ------------ | --------------------- |
| id | SERIAL | PK |
| horariosAgendados | TIME | UNIQUE, NOT NULL |
| dias | VARCHAR(100) | NOT NULL |

---

|   Tabela   | Laboratório |
| ---------- | ----------- |
| Contrato_de_Servico  | Armazena as informações daquela classe. |

| Nome  | Tipo de Dado | Restrições de Domínio |
| ----- | ------------ | --------------------- |
| id | SERIAL | PK |
| personal_id | INT | FK → Personal(id) ON DELETE CASCADE |
| aluno_id | INT | FK → Aluno(id) ON DELETE CASCADE |
| horario_id | INT | FK → Agenda(id) ON DELETE SET NULL |
| servicoDesejado_id | INT | FK → Servicos(id) ON DELETE CASCADE |
| localidadeDesejada | VARCHAR(150) | NOT NULL |

---

|   Tabela   | Laboratório |
| ---------- | ----------- |
| Pagamento  | Armazena as informações daquela classe. |

| Nome  | Tipo de Dado | Restrições de Domínio |
| ----- | ------------ | --------------------- |
| id | SERIAL | PK |
| contrato_id | INT | FK → Contrato_de_Servico(id) ON DELETE CASCADE |
| metodoDePagamento | VARCHAR(50) | NOT NULL |
| comprovanteDePagamento | BOOLEAN | NOT NULL DEFAULT FALSE |
| dataDePagamento | DATE | NOT NULL |
| horaDoPagamento | TIME | NOT NULL |
| valorPago | FLOAT | NOT NULL |

---

|   Tabela   | Laboratório |
| ---------- | ----------- |
| Registro_de_Progresso  | Armazena as informações daquela classe. |

| Nome  | Tipo de Dado | Restrições de Domínio |
| ----- | ------------ | --------------------- |
| id | SERIAL | PK |
| aluno_id | INT | FK → Aluno(id) ON DELETE CASCADE |
| data | DATE | NOT NULL |
| massaGorda | FLOAT | --- |
| massaMagra | FLOAT | --- |
| massaMuscular | FLOAT | --- |
| hidratacao | FLOAT | --- |
| densidadeOssea | FLOAT | --- |
| gorduraVisceral | FLOAT | --- |
| taxaDeMetabolismoBasal | FLOAT | --- |
| altura | FLOAT | NOT NULL |
| peso | FLOAT | NOT NULL |

