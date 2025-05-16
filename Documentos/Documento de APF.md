# Sistema de Apoio à Contagem por Ponto de Função

## Descrição do Projeto

O projeto consiste em um sistema para auxiliar academias e personal trainers a gerenciar o relacionamento com seus alunos. O sistema permitirá o cadastro e manutenção de personal trainers, alunos, serviços oferecidos, contratos firmados, registros de progresso físico, geração de pagamentos, relatórios e agendamentos de sessões. A partir dessas funcionalidades, pode-se realizar uma Análise de Pontos de Função considerando:

- **ALI (Arquivo Lógico Interno)**
- **AIE (Arquivo de Interface Externa)**
- **EE (Entrada Externa)**
- **CE (Consulta Externa)**
- **SE (Saída Externa)**

---

## Siglas

| Sigla | Significado                      |
|-------|----------------------------------|
| PF    | Pontos de Função                 |
| APF   | Análise de Pontos de Função      |
| ALI   | Arquivos Lógicos Internos        |
| AIE   | Arquivos de Interface Externa    |
| EE    | Entrada Externa (External Input) |
| CE    | Consulta Externa (External Inquiry) |
| SE    | Saída Externa (External Output)  |

---

## Lista de User Stories

*(Mantida como fornecida por você)*

---

## Tipos de Contagem

---

### Contagem Indicativa (Ci)

- **ALI:** 35 PF cada
- **AIE:** 15 PF cada

| Nome                       | Tipo | Entidades Relacionadas         | PF |
|----------------------------|------|--------------------------------|----|
| ALI Personal Trainer       | ALI  | PersonalTrainer                | 35 |
| ALI Aluno                  | ALI  | Aluno                          | 35 |
| ALI Serviço                | ALI  | Servico                        | 35 |
| ALI Contrato de Serviço    | ALI  | Contrato                       | 35 |
| ALI Registro de Progresso  | ALI  | Progresso                      | 35 |
| ALI Pagamento              | ALI  | Pagamento                      | 35 |
| ALI Relatórios de Alunos   | ALI  | RelatorioAluno                 | 35 |
| ALI Agenda de Sessões      | ALI  | Agendamento                    | 35 |
| ALI Pessoa                 | ALI  | Pessoa                         | 35 |

**Total Contagem Indicativa:** `315 PF`  
**Fator de Ajuste Mínimo (65%)**: `204,75 PF`  
**Fator de Ajuste Máximo (135%)**: `425,25 PF`

---

### Contagem Estimativa (Ce)

- **ALI (Baixa):** 7 PF  
- **AIE (Baixa):** 5 PF  
- **EE (Média):** 4 PF  
- **CE (Média):** 4 PF  
- **SE (Média):** 5 PF  

#### ALIs

| Nome | Tipo | PF |
|------|------|----|
| Personal Trainer       | ALI | 7 |
| Aluno                  | ALI | 7 |
| Serviço                | ALI | 7 |
| Contrato               | ALI | 7 |
| Registro de Progresso  | ALI | 7 |
| Pagamento              | ALI | 7 |
| Relatório de Aluno     | ALI | 7 |
| Agenda                 | ALI | 7 |
| Pessoa                 | ALI | 7 |

#### Transações

- Cadastro, edição, exclusão → **EE = 4 PF**
- Visualização, pesquisa → **CE = 4 PF**
- Geração de relatórios, notificações → **SE = 5 PF**

Total estimado de transações:

| Tipo | Quantidade Aproximada | Total PF |
|------|------------------------|----------|
| EE   | 27 (3 por US × 9 US)   | 108      |
| CE   | 9                      | 36       |
| SE   | 5                      | 25       |

**Total Contagem Estimativa (não ajustada):** `63 (ALI) + 108 + 36 + 25 = 232 PF`  
**Fator de Ajuste Mínimo (65%)**: `150,8 PF`  
**Fator de Ajuste Máximo (135%)**: `313,2 PF`

---

### Contagem Detalhada (Cd)

#### Tabela de Contribuições

| Tipo | Baixa | Média | Alta |
|------|-------|-------|------|
| ALI  | 7     | 10    | 15   |
| AIE  | 5     | 7     | 10   |
| EE   | 3     | 4     | 6    |
| CE   | 3     | 4     | 6    |
| SE   | 4     | 5     | 7    |

#### ALIs

| Nome                      | DER | RLR | Complexidade | PF |
|---------------------------|-----|-----|---------------|----|
| Personal Trainer          | 8   | 2   | Baixa         | 7  |
| Aluno                     | 8   | 2   | Baixa         | 7  |
| Serviço                   | 6   | 1   | Baixa         | 7  |
| Contrato de Serviço       | 10  | 2   | Média         | 10 |
| Registro de Progresso     | 6   | 1   | Baixa         | 7  |
| Pagamento                 | 8   | 2   | Média         | 10 |
| Relatórios de Alunos      | 10  | 2   | Média         | 10 |
| Agenda                    | 12  | 2   | Média         | 10 |
| Pessoa                    | 8   | 2   | Baixa         | 7  |

**Subtotal ALIs:** `75 PF`

#### Transações (exemplos por tipo)

| Nome                        | Tipo | DER/ALR       | Complexidade | PF |
|-----------------------------|------|---------------|--------------|----|
| Cadastrar Aluno             | EE   | DER=5, ALR=2  | Média        | 4  |
| Editar Serviço              | EE   | DER=4, ALR=2  | Média        | 4  |
| Visualizar Agenda           | CE   | DER=4, ALR=2  | Média        | 4  |
| Gerar Relatório do Aluno    | SE   | DER=10, ALR=2 | Média        | 5  |
| Sincronizar com Calendário  | SE   | DER=12, ALR=3 | Alta         | 7  |
| Notificar Agendamento       | SE   | DER=6, ALR=1  | Média        | 5  |

**Estimativa total de transações:**  
- EE: 15 × 4 PF = 60  
- CE: 8 × 4 PF = 32  
- SE: 6 × média (5.5 PF) = 33  

**Subtotal Transações:** `125 PF`

---

### Resumo Contagem Detalhada

**Total Detalhada (Cd):** `75 (ALI) + 125 (Transações) = 200 PF`  
**Fator de Ajuste Mínimo (65%)**: `130 PF`  
**Fator de Ajuste Máximo (135%)**: `270 PF`

---

## Observações Finais

Este documento apresenta a Análise de Pontos de Função baseada nas **User Stories US01 a US09**, representando funcionalidades de um sistema de gestão para academias e personal trainers. Foram aplicadas as três abordagens de contagem (indicativa, estimativa e detalhada), utilizando práticas padrão da técnica de APF.