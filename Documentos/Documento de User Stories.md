# Documento Lista de User Stories

Este documento fragmenta e detalha cada etapa das histórias de usuário, dividindo funcionalidades anteriormente agrupadas em partes menores e específicas. O foco está na separação de ações de criação, validação, priorização, edição/atualização, exclusão/remoção e nos aspectos de colaboração entre stakeholders e rastreamento do progresso.

---

## Histórico de Revisões

| Data       | Versão | Descrição                          | Autor                           |
| ---------- | ------ | ---------------------------------- | ------------------------------- |
| 04/12/2024 | 0.0.1  | Documento inicial                  | José Alves dos Anjos Paiva       |
| 29/03/2025 | 0.0.2  | Alterações nos requisitos envolvidos | Arthur José dos Santos Azevêdo |

---

## User Story US01 - Manter Personal Trainer

|                               |                                                                                             |
| ----------------------------- | ------------------------------------------------------------------------------------------- |
| **Descrição** | O sistema deverá exigir a entrada, e realizar quando necessário a consulta, edição, exclusão lógica e física dos dados. |
| **Requisitos envolvidos** |                                                                                             |
| RF01.01                       | Cadastro de Personal Trainer                                                                |
| RF01.02                       | Visualizar Personal Trainer                                                                |
| RF01.03                       | Editar Dados do Personal Trainer                                                            |
| RF01.04                       | Excluir Personal Trainer                                                                    |
| RF01.05                       | Monitorar Desempenho do Personal Trainer                                                    |
| **Prioridade** | Essencial                                                                                   |
| **Estimativa** |                                                                                          |
| **Tempo Gasto (real):** |                                                                                             |
| **Tamanho Funcional** |                                                                                         |
| **Analistas** | Luiz Miguel (Responsável pela descrição, especificação e detalhamento da US).                |
| **Desenvolvedores** | Gabriel Ygor (responsável por implementar e realizar testes de unidade e estilização do front-end).<br>José Alves (responsável por implementar e realizar testes de integração, análise e implementação no banco de dados.) |
| **Revisores** | Renan Missias (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testadores** | Rael Araujo (Responsável pela execução dos testes de aceitação e da criação do relatório de testes). |

| Testes de Aceitação (TA) |          |
| ------------------------ | -------- |
| **Código** | **Descrição** |
| TA01.01                  | O usuário informa os dados completos no formulário de cadastro de personal e clica em salvar. O sistema exibe a mensagem: "Personal cadastrado com sucesso." |
| TA01.02                  | O usuário tenta salvar o formulário com dados incompletos e o sistema exibe a mensagem de erro: "Erro: Campos obrigatórios não preenchidos." |
| TA01.03                  | O usuário edita os dados de um personal previamente cadastrado, salva as alterações, e o sistema exibe a mensagem: "Alterações salvas com sucesso." |
| TA01.04                  | O usuário tenta salvar alterações com dados incompletos e o sistema exibe a mensagem de erro: "Erro: Campos obrigatórios não preenchidos." |
| TA01.05                  | O usuário solicita a exclusão de um personal, e o sistema realiza a exclusão lógica exibindo a mensagem: "Personal excluído com sucesso." |
| TA01.06                  | O usuário tenta excluir um personal associado a sessões ativas, e o sistema exibe a mensagem de erro: "Erro: Não é possível excluir, existem sessões associadas." |
| TA01.07                  | O usuário consulta a lista de personals e o sistema exibe os dados corretamente. |

---

## User Story US02 - Manter Aluno

|                               |                                                                                             |
| ----------------------------- | ------------------------------------------------------------------------------------------- |
| **Descrição** | O sistema deverá exigir a entrada, e realizar quando necessário a edição, exclusão lógica e física, dos dados. |
| **Requisitos envolvidos** |                                                                                             |
| RF02.01                       | Cadastro de Aluno                                                                           |
| RF02.02                       | Visualizar Aluno                                                                            |
| RF02.03                       | Editar Dados do Aluno                                                                       |
| RF02.04                       | Excluir Aluno                                                                               |
| RF02.05                       | Monitorar Evolução do Aluno                                                                 |
| **Prioridade** | Essencial                                                                                   |
| **Estimativa** |                                                                                           |
| **Tempo Gasto (real):** |                                                                                             |
| **Tamanho Funcional** |                                                                                             |
| **Analista** | Luiz Miguel (Responsável pela descrição, especificação e detalhamento da US).                |
| **Desenvolvedor** | Gabriel Ygor (responsável por implementar e realizar testes de unidade e estilização do front-end).<br>José Alves (responsável por implementar e realizar testes de integração, análise e implementação no banco de dados.) |
| **Revisor** | Renan Missias (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Rael Araújo (Responsável pela execução dos testes de aceitação e da criação do relatório de testes). |

| Testes de Aceitação (TA) |          |
| ------------------------ | -------- |
| **Código** | **Descrição** |
| TA02.01                  | O usuário informa os dados completos no formulário de cadastro de aluno e clica em salvar. O sistema exibe a mensagem: "Aluno cadastrado com sucesso." |
| TA02.02                  | O usuário tenta salvar o formulário com dados incompletos e o sistema exibe a mensagem de erro: "Erro: Campos obrigatórios não preenchidos." |
| TA02.03                  | O usuário edita os dados de um aluno previamente cadastrado, salva as alterações, e o sistema exibe a mensagem: "Alterações salvas com sucesso." |
| TA02.04                  | O usuário tenta salvar alterações com dados incompletos e o sistema exibe a mensagem de erro: "Erro: Campos obrigatórios não preenchidos." |
| TA02.05                  | O usuário solicita a exclusão de um aluno, e o sistema realiza a exclusão lógica exibindo a mensagem: "Aluno excluído com sucesso." |
| TA02.06                  | O usuário tenta excluir um aluno com pendências ativas, e o sistema exibe a mensagem de erro: "Erro: Não é possível excluir, existem pendências associadas." |
| TA02.07                  | O usuário consulta a lista de alunos e o sistema exibe os dados corretamente. |

---

## User Story US03 - Manter Serviço

|                               |                                                                                             |
| ----------------------------- | ------------------------------------------------------------------------------------------- |
| **Descrição** | O sistema deverá cadastrar alguns tipos de serviços/pacotes que estarão pré-preparados para a melhor negociação entre personal e aluno. |
| **Requisitos envolvidos** |                                                                                             |
| RF03.01                       | Cadastro de Serviço                                                                         |
| RF03.02                       | Visualizar Serviços Cadastrados                                                              |
| RF03.03                       | Editar Serviço                                                                              |
| RF03.04                       | Excluir Serviço                                                                             |
| RF03.05                       | Monitorar Contratações de Serviços                                                            |
| **Prioridade** | Essencial                                                                                   |
| **Estimativa** |                                                                                             |
| **Tempo Gasto (real):** |                                                                                             |
| **Tamanho Funcional** |                                                                                             |
| **Analista** | Luiz Miguel (Responsável pela descrição, especificação e detalhamento da US).                |
| **Desenvolvedor** | Arthur Azevedo (responsável por implementar e realizar testes de unidade e estilização do front-end).<br>José Alves (responsável por implementar e realizar testes de integração, análise e implementação no banco de dados.) |
| **Revisor** | Renan Missias (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Rael Araújo (Responsável pela execução dos testes de aceitação e da criação do relatório de testes). |

| Testes de Aceitação (TA) |          |
| ------------------------ | -------- |
| **Código** | **Descrição** |
| TA03.01                  | O usuário informa os dados do formulário de cadastro de serviço/pacote corretamente, clica em salvar e o sistema exibe a mensagem: "Serviço cadastrado com sucesso." |
| TA03.02                  | O usuário tenta salvar o formulário com dados incompletos e o sistema exibe a mensagem de erro: "Erro: Campos obrigatórios não preenchidos." |
| TA03.03                  | O usuário edita um serviço previamente cadastrado, salva e o sistema exibe a mensagem: "Alteração salva com sucesso." |
| TA03.04                  | O usuário tenta salvar alterações em um serviço com dados incompletos e o sistema exibe a mensagem de erro: "Erro: Campos obrigatórios não preenchidos." |
| TA03.05                  | O usuário tenta excluir um serviço/pacote, confirma a exclusão e o sistema exibe a mensagem: "Serviço excluído com sucesso." |
| TA03.06                  | O usuário tenta excluir um serviço associado a contratos ativos, e o sistema exibe a mensagem de erro: "Erro: Não é possível excluir, existem contratos associados." |
| TA03.07                  | O usuário consulta a lista de serviços cadastrados e o sistema exibe os dados corretamente. |

---

## User Story US04 - Manter contrato de serviço

|                               |                                                                                             |
| ----------------------------- | ------------------------------------------------------------------------------------------- |
| **Descrição** | Capacidade de marcar e gerenciar as sessões de treinamento com os clientes ao longo do tempo.<br>● Nome completo;<br>● CPF;<br>● RG ou CNH;<br>● Serviço desejado;<br>● Horários contratados;<br>● Localidade desejada;<br>● Número de celular;<br>● E-mail;<br>● Comprovante de pagamento. |
| **Requisitos envolvidos** |                                                                                             |
| RF04.01                       | Cadastro de Contrato                                                                        |
| RF04.02                       | Visualizar Contratos                                                                        |
| RF04.03                       | Editar Contrato                                                                             |
| RF04.04                       | Excluir Contrato                                                                            |
| RF04.05                       | Monitorar Vencimentos e Comprovantes                                                         |
| **Prioridade** | Essencial                                                                                   |
| **Estimativa** |                                                                                           |
| **Tempo Gasto (real):** |                                                                                             |
| **Tamanho Funcional** |                                                                                             |
| **Analista** | Luiz Miguel (Responsável pela descrição, especificação e detalhamento da US).                |
| **Desenvolvedor** | Gabriel Ygor (responsável por implementar e realizar testes de unidade e estilização do front-end).<br>José Alves (responsável por implementar e realizar testes de integração, análise e implementação no banco de dados.) |
| **Revisor** | Renan Missias (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Rael Araújo (Responsável pela execução dos testes de aceitação e da criação do relatório de testes). |

| Testes de Aceitação (TA) |          |
| ------------------------ | -------- |
| **Código** | **Descrição** |
| TA04.01                  | O usuário cadastra um contrato de serviço preenchendo todos os campos corretamente e clica em salvar. O sistema exibe a mensagem: "Contrato cadastrado com sucesso.” e é gerada uma conta a pagar. |
| TA04.02                  | O usuário tenta salvar um contrato com campos obrigatórios em branco, e o sistema exibe a mensagem de erro: "Erro: Campos obrigatórios não preenchidos." |
| TA04.03                  | O usuário edita um contrato existente e clica em salvar. O sistema exibe a mensagem: "Alterações salvas com sucesso." |
| TA04.04                  | O usuário tenta salvar alterações em um contrato com dados incompletos ou relevantes no pagamento e o sistema exibe a mensagem de erro: "Erro: Você tentou alterar informações relevantes no pagamento ou os campos obrigatórios não foram preenchidos." |
| TA04.05                  | O usuário solicita a exclusão de um contrato de serviço, e o sistema realiza a exclusão lógica exibindo a mensagem: "Contrato excluído com sucesso." |
| TA04.06                  | O usuário tenta excluir um contrato vinculado a serviços ativos, e o sistema exibe a mensagem de erro: "Erro: Não é possível excluir, existem serviços associados." |
| TA04.07                  | O usuário consulta a lista de contratos e o sistema exibe os dados corretamente. |

---

## User Story US05 - Manter registro de progresso

|                               |                                                                                             |
| ----------------------------- | ------------------------------------------------------------------------------------------- |
| **Descrição** | Permitir o acompanhamento do progresso dos alunos ao longo do tempo, registrando medidas corporais, resultados de testes de aptidão física e desempenho em exercícios. |
| **Requisitos envolvidos** |                                                                                             |
| RF05.01                       | Cadastro de Métricas                                                                        |
| RF05.02                       | Visualizar Histórico de Progresso                                                           |
| RF05.03                       | Editar Registros de Progresso                                                               |
| RF05.04                       | Excluir Registro de Progresso                                                               |
| **Prioridade** | Essencial                                                                                   |
| **Estimativa** |                                                                                           |
| **Tempo Gasto (real):** |                                                                                             |
| **Tamanho Funcional** |                                                                                             |
| **Analista** | Luiz Miguel (Responsável pela descrição, especificação e detalhamento da US).                |
| **Desenvolvedor** | Arthur Azevedo (responsável por implementar e realizar testes de unidade e estilização do front-end).<br>José Alves (responsável por implementar e realizar testes de integração, análise e implementação no banco de dados.) |
| **Revisor** | Renan Missias (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Rael Araújo (Responsável pela execução dos testes de aceitação e da criação do relatório de testes). |

| Testes de Aceitação (TA) |          |
| ------------------------ | -------- |
| **Código** | **Descrição** |
| TA05.01                  | O usuário informa os dados de progresso (medidas corporais, resultados de testes) e clica em salvar. O sistema exibe a mensagem: "Progresso registrado com sucesso." |
| TA05.02                  | O usuário tenta salvar registros de progresso com dados incompletos, e o sistema exibe a mensagem de erro: "Erro: Campos obrigatórios não preenchidos." |
| TA05.03                  | O usuário edita registros de progresso previamente salvos e clica em salvar. O sistema exibe a mensagem: "Alterações salvas com sucesso." |
| TA05.04                  | O usuário tenta salvar alterações em registros de progresso com dados incompletos e o sistema exibe a mensagem de erro: "Erro: Campos obrigatórios não preenchidos." |
| TA05.05                  | O usuário solicita a exclusão de um registro de progresso, e o sistema realiza a exclusão lógica exibindo a mensagem: "Registro excluído com sucesso." |
| TA05.06                  | O usuário consulta os registros de progresso e o sistema exibe os dados corretamente. |

---

## User Story US06 - Gerar pagamento

|                               |                                                                                             |
| ----------------------------- | ------------------------------------------------------------------------------------------- |
| **Descrição** | Capacidade de manter relatórios de pagamentos realizados. |
| **Requisitos envolvidos** |                                                                                             |
| RF06.01                       | Registro de Relatório de Pagamento                                                          |
| RF06.02                       | Visualizar Relatório de Pagamentos                                                          |
| RF06.03                       | Excluir Relatório de Pagamento                                                              |
| RF06.04                       | Monitorar Inadimplência                                                                     |
| **Prioridade** | Essencial                                                                                   |
| **Estimativa** |                                                                                           |
| **Tempo Gasto (real):** |                                                                                             |
| **Tamanho Funcional** |                                                                                             |
| **Analista** | Luiz Miguel (Responsável pela descrição, especificação e detalhamento da US).                |
| **Desenvolvedor** | Arthur Azevedo (responsável por implementar e realizar testes de unidade e estilização do front-end).<br>José Alves (responsável por implementar e realizar testes de integração, análise e implementação no banco de dados.)                                                                                            |
| **Revisor** | Renan Missias (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Rael Araújo (Responsável pela execução dos testes de aceitação e da criação do relatório de testes). |

| Testes de Aceitação (TA) |          |
| ------------------------ | -------- |
| **Código** | **Descrição** |
| TA06.01                  | O usuário gera um pagamento com todos os dados preenchidos corretamente. O sistema exibe a mensagem: "Pagamento registrado com sucesso." |
| TA06.02                  | O usuário tenta gerar um pagamento com dados incompletos, e o sistema exibe a mensagem de erro: "Erro: Campos obrigatórios não preenchidos." |
| TA06.03                  | O usuário visualiza o relatório de pagamentos realizados e o sistema exibe os dados corretamente. |
| TA06.04                  | O usuário solicita a exportação do relatório de pagamentos e o sistema gera o arquivo com sucesso. |
| TA06.05                  | O usuário consulta os detalhes de um pagamento específico e o sistema exibe os dados corretamente. |

---

## User Story US07 - Manter relatório alunos

|                               |                                                                                             |
| ----------------------------- | ------------------------------------------------------------------------------------------- |
| **Descrição** | Capacidade de manter relatórios dos alunos. |
| **Requisitos envolvidos** |                                                                                             |
| RF07.01                       | Gerar Relatórios                                                                            |
| RF07.02                       | Visualizar Relatórios Gerados                                                               |
| RF07.03                       | Editar Relatórios                                                                           |
| RF07.04                       | Excluir Relatório                                                                           |
| RF07.05                       | Monitorar Armazenamento de Relatórios                                                       |
| **Prioridade** | Essencial                                                                                   |
| **Estimativa** |                                                                                           |
| **Tempo Gasto (real):** |                                                                                           |
| **Tamanho Funcional** |                                                                                             |
| **Analista** | Luiz Miguel (Responsável pela descrição, especificação e detalhamento da US).                |
| **Desenvolvedor** | Gabriel Ygor (responsável por implementar e realizar testes de unidade e estilização do front-end).<br>Luiz Miguel (responsável por implementar e realizar testes de integração, análise e implementação no banco de dados.) |
| **Revisor** | Renan Missias (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Rael Araújo (Responsável pela execução dos testes de aceitação e da criação do relatório de testes). |

| Testes de Aceitação (TA) |          |
| ------------------------ | -------- |
| **Código** | **Descrição** |
| TA07.01                  | O usuário gera um relatório de alunos com filtros aplicados corretamente. O sistema exibe o relatório gerado com sucesso. |
| TA07.02                  | O usuário tenta gerar um relatório sem especificar filtros obrigatórios, e o sistema exibe a mensagem de erro: "Erro: Campos obrigatórios não preenchidos." |
| TA07.03                  | O usuário edita um relatório salvo previamente e clica em salvar. O sistema exibe a mensagem: "Relatório atualizado com sucesso." |
| TA07.04                  | O usuário tenta salvar um relatório com campos obrigatórios em branco, e o sistema exibe a mensagem de erro: "Erro: Campos obrigatórios não preenchidos." |
| TA07.05                  | O usuário solicita a exclusão de um relatório de alunos, e o sistema exibe a mensagem: "Relatório excluído com sucesso." |
| TA07.06                  | O usuário tenta excluir um relatório inexistente, e o sistema exibe a mensagem de erro: "Erro: Relatório não encontrado." |
| TA07.07                  | O usuário consulta a lista de relatórios e o sistema exibe os dados corretamente. |
| TA07.08                  | O usuário tenta consultar um relatório inexistente e o sistema exibe a mensagem de erro: "Erro: Relatório não encontrado." |
| TA07.09                  | O usuário solicita a exportação de um relatório de alunos, e o sistema gera o relatório do aluno em questão. |

---

## User Story US08 - Manter agenda

|                               |                                                                                             |
| ----------------------------- | ------------------------------------------------------------------------------------------- |
| **Descrição** | Permitir que o personal cadastre no sistema horários e dias disponíveis para agendamentos de serviço. |
| **Requisitos envolvidos** |                                                                                             |
| RF08.01                       | Cadastrar Horários                                                                          |
| RF08.02                       | Visualizar Agenda                                                                           |
| RF08.03                       | Editar Sessão Agendada                                                                      |
| RF08.04                       | Excluir Sessão Agendada                                                                     |
| RF08.05                       | Agendar Sessão                                                                             |
| RF08.06                       | Filtrar Sessão                                                                              |
| RF08.07                       | Cancelar Sessão                                                                             |
| RF08.08                       | Gerar Relatórios de Atendimentos                                                            |
| RF08.09                       | Notificar Agendamentos                                                                      |
| RF08.10                       | Sincronizar com Calendário Externo                                                          |
| **Prioridade** | Essencial                                                                                   |
| **Estimativa** |                                                                                           |
| **Tempo Gasto (real):** |                                                                                             |
| **Tamanho Funcional** |                                                                                             |
| **Analista** | Luiz Miguel (Responsável pela descrição, especificação e detalhamento da US).                |
| **Desenvolvedor** | Gabriel Ygor (responsável por implementar e realizar testes de unidade e estilização do front-end).<br>Luiz Miguel (responsável por implementar e realizar testes de integração, análise e implementação no banco de dados.) |
| **Revisor** | Renan Missias (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Rael Araújo (Responsável pela execução dos testes de aceitação e da criação do relatório de testes). |

| Testes de Aceitação (TA) |          |
| ------------------------ | -------- |
| **Código** | **Descrição** |
| TA08.01                  | O personal informa os horários e dias disponíveis na agenda e clica em salvar. O sistema exibe a mensagem: "Agenda salva com sucesso." |
| TA08.02                  | O personal tenta salvar horários e dias conflitantes, e o sistema exibe a mensagem de erro: "Erro: Horários e dias conflitantes detectados." |
| TA08.03                  | O personal tenta salvar um horário e dias sem especificar todos os campos obrigatórios, e o sistema exibe a mensagem de erro: "Erro: Campos obrigatórios não preenchidos." |
| TA08.04                  | O personal edita um horário e dia previamente salvo e clica em salvar. O sistema exibe a mensagem: "Alterações salvas com sucesso." |
| TA08.05                  | O personal tenta editar um horário e dias sem especificar todos os campos obrigatórios, e o sistema exibe a mensagem de erro: "Erro: Campos obrigatórios não preenchidos." |
| TA08.06                  | O personal remove um horário e dia previamente cadastrado e o sistema exibe a mensagem: "Horário e dia removido com sucesso." |
| TA08.07                  | O personal tenta remover um horário e dia inexistente, e o sistema exibe a mensagem de erro: "Erro: Horário e dia não encontrado." |
| TA08.08                  | O personal consulta a agenda e o sistema exibe os horários e dias disponíveis corretamente. |
| TA08.09                  | O personal tenta consultar um horário e dia inexistente e o sistema exibe a mensagem de erro: "Erro: Horário e dia não encontrado." |

## User Story US09 - Manter Pessoa

|                               |                                                                                             |
| ----------------------------- | ------------------------------------------------------------------------------------------- |
| **Descrição** | O sistema deverá permitir o cadastro, visualização, edição e exclusão lógica de dados pessoais, servindo de base para entidades como Aluno e Personal. |
| **Requisitos envolvidos** | RF09.01, RF09.02, RF09.03, RF09.04, RF09.05 |
| **Prioridade** | Essencial |
| **Analistas** | Luiz Miguel |
| **Desenvolvedores** | José Alves |
| **Revisores** | Renan Missias |
| **Testadores** | Rael Araújo |

| Testes de Aceitação (TA) | Descrição |
| ------------------------ | --------- |
| TA09.01 | O usuário informa dados válidos no formulário e o sistema exibe "Pessoa cadastrada com sucesso." |
| TA09.02 | O usuário tenta salvar o formulário com dados inválidos (ex.: CPF duplicado) e o sistema exibe "Erro: dados inválidos." |
| TA09.03 | O usuário edita uma pessoa e salva as alterações com sucesso. |
| TA09.04 | O usuário tenta editar com dados inválidos e recebe uma mensagem de erro. |
| TA09.05 | O usuário solicita a exclusão de uma pessoa não vinculada a outras entidades e o sistema exibe "Pessoa excluída com sucesso." |
| TA09.06 | O sistema impede exclusão de pessoa associada a um Aluno ou Personal, exibindo: "Erro: vínculo ativo." |
| TA09.07 | O usuário consulta a lista de pessoas e o sistema exibe os dados corretamente. |
