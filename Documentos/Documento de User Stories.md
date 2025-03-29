# Documento Lista de User Stories

Este documento fragmenta e detalha cada etapa das histórias de usuário, dividindo funcionalidades anteriormente agrupadas em partes menores e específicas. O foco está na separação de ações de criação, validação, priorização, edição/atualização, exclusão/remoção e nos aspectos de colaboração entre stakeholders e rastreamento do progresso.

---

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 15px; margin-bottom: 15px; background: #f9f9f9;">

## Histórico de revisões

| Data       | Versão  | Descrição                          | Autor                          |
| :--------- | :-----: | :--------------------------------: | :----------------------------- |
| 04/12/2024 | 0.0.1   | Documento inicial  | José Alves dos Anjos Paiva |
| 29/03/2025 | 0.0.2   |  | Arthur José dos Santos Azevêdo |

</div>

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 15px; margin-bottom: 15px; background: #f9f9f9;">

### User Story US01 - Manter Personal Trainer

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deverá exigir a entrada, e realizar quando necessário a consulta, edição, exclusão lógica e física dos dados. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- |
| RF01          | Cadastrar Personal |
| RF02          | Alterar Personal |
| RF03          | Consultar Personal |
| RF04          | Excluir Personal |
| RF05          | Vizualizar detalhes do Personal |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade**            | Essencial                           | 
| **Estimativa**            | 8 h                                 | 
| **Tempo Gasto (real):**   |                                     | 
| **Tamanho Funcional**     | 7 PF                                | 
| **Analista**              | Luiz Miguel (Responsável pela descrição, especificação e detalhamento da US).                             | 
| **Desenvolvedor**         | Gabriel Ygor (responsável por implementar e realizar testes de unidadee estilização do front-end).Rael Araujo(responsável por implementar e realizar testes deintegração, análise e implementação no banco de dados.)                                  | 
| **Revisor**               | Renan Missias (responsável por avaliar a implementação e executar ostestes de unidade e testes de integração).                              | 
| **Testador**              | Gabriel Azevedo(Responsável pela execução dos testes de aceitação e da criação do relatório de testes).                                | 


| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA01.01** | O usuário informa os dados completos no formulário de cadastro depersonal e clica em salvar. O sistema exibe a mensagem: "Personalcadastrado com sucesso." |
| **TA01.02** | O usuário tenta salvar o formulário com dados incompletos e o sistemaexibe a mensagem de erro: "Erro: Campos obrigatórios nãopreenchidos." |
| **TA01.03** | O usuário edita os dados de um personal previamente cadastrado, salvaas alterações, e o sistema exibe a mensagem: "Alterações salvas comsucesso." |
| **TA01.04** | O usuário tenta salvar alterações com dados incompletos e o sistemaexibe a mensagem de erro: "Erro: Campos obrigatórios nãopreenchidos." |
| **TA01.05** | O usuário solicita a exclusão de um personal, e o sistema realiza aexclusão lógica exibindo a mensagem: "Personal excluído comsucesso." |
| **TA01.06** | O usuário tenta excluir um personal associado a sessões ativas, e o sistema exibe a mensagem de erro: "Erro: Não é possível excluir, existem sessões associadas." |
| **TA01.07** | O usuário consulta a lista de personals e o sistema exibe os dadoscorretamente. |

</div>

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 15px; margin-bottom: 15px; background: #f9f9f9;">

### User Story US02 - Manter Aluno

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deverá exigir a entrada, e realizar quando necessário a edição, exclusão lógica e física, dos dados. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- |
| RF01          | Cadastrar Aluno |
| RF02          | Alterar Aluno |
| RF03          | Consultar Aluno |
| RF04          | Excluir Aluno |
| RF05          | Vizualizar detalhes do Aluno |


|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade**            | Essencial                           | 
| **Estimativa**            | 2h                                  | 
| **Tempo Gasto (real):**   |                                     | 
| **Tamanho Funcional**     |                                     | 
| **Analista**              | Luiz Miguel (Responsável pela descrição, especificação e detalhamento da US).                             | 
| **Desenvolvedor**         | Gabriel Ygor (responsável por implementar e realizar testes de unidade e estilização do front-end).<br>José Alves (responsável por implementar e realizar testes de integração, análise e implementação no banco de dados.)                                  | 
| **Revisor**               | Renan Missias (responsável por avaliar a implementação e executar os testes de unidade e testes de integração).                              | 
| **Testador**              | Gabriel Azevedo (Responsável pela execução dos testes de aceitação e da criação do relatório de testes).                                | 

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA03.01** | O usuário informa os dados completos no formulário de cadastro de aluno e clica em salvar. O sistema exibe a mensagem: "Aluno cadastrado com sucesso." |
| **TA03.02** | O usuário tenta salvar o formulário com dados incompletos e o sistema exibe a mensagem de erro: "Erro: Campos obrigatórios não preenchidos." |
| **TA03.03** | O usuário edita os dados de um aluno previamente cadastrado, salva as alterações, e o sistema exibe a mensagem: "Alterações salvas com sucesso." |
| **TA03.04** | O usuário tenta salvar alterações com dados incompletos e o sistema exibe a mensagem de erro: "Erro: Campos obrigatórios não preenchidos." |
| **TA03.05** | O usuário solicita a exclusão de um aluno, e o sistema realiza a exclusão lógica exibindo a mensagem: "Aluno excluído com sucesso." |
| **TA03.06** | O usuário tenta excluir um aluno com pendências ativas, e o sistema exibe a mensagem de erro: "Erro: Não é possível excluir, existem pendências associadas." |
| **TA03.07** | O usuário consulta a lista de alunos e o sistema exibe os dados corretamente. |

</div>

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 15px; margin-bottom: 15px; background: #f9f9f9;">

### User Story US03 - Manter Serviço

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deverá cadastrar alguns tipos de serviços/pacotes que estarão pré-preparados para a melhor negociação entre personal e aluno. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- |
| RF01          | Cadastrar Serviço |
| RF02          | Alterar Serviço |
| RF03          | Consultar Serviço |
| RF04          | Excluir Serviço |
| RF05          | Vizualizar detalhes do Serviço |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade**            | Essencial                           | 
| **Estimativa**            |                                     | 
| **Tempo Gasto (real):**   |                                     | 
| **Tamanho Funcional**     |                                     | 
| **Analista**              | Luiz Miguel (Responsável pela descrição, especificação e detalhamento da US).                             | 
| **Desenvolvedor**         | Arthur Azevedo (responsável por implementar e realizar testes de unidade e estilização do front-end).<br>José Alves (responsável por implementar e realizar testes de integração, análise e implementação no banco de dados.)                                  | 
| **Revisor**               | Renan Missias (responsável por avaliar a implementação e executar os testes de unidade e testes de integração).                              | 
| **Testador**              | Gabriel Azevedo (Responsável pela execução dos testes de aceitação e da criação do relatório de testes).                                | 

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA02.01** | O usuário informa os dados do formulário de cadastro de serviço/pacote corretamente, clica em salvar e o sistema exibe a mensagem: "Serviço cadastrado com sucesso." |
| **TA02.02** | O usuário tenta salvar o formulário com dados incompletos e o sistema exibe a mensagem de erro: "Erro: Campos obrigatórios não preenchidos." |
| **TA02.03** | O usuário edita um serviço previamente cadastrado, salva e o sistema exibe a mensagem: "Alteração salva com sucesso." |
| **TA02.04** | O usuário tenta salvar alterações em um serviço com dados incompletos e o sistema exibe a mensagem de erro: "Erro: Campos obrigatórios não preenchidos." |
| **TA02.05** | O usuário tenta excluir um serviço/pacote, confirma a exclusão e o sistema exibe a mensagem: "Serviço excluído com sucesso." |
| **TA02.06** | O usuário tenta excluir um serviço associado a contratos ativos, e o sistema exibe a mensagem de erro: "Erro: Não é possível excluir, existem contratos associados." |
| **TA02.07** | O usuário consulta a lista de serviços cadastrados e o sistema exibe os dados corretamente. |

</div>

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 15px; margin-bottom: 15px; background: #f9f9f9;">

### User Story US04 - Manter Agenda

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | Permitir que o personal cadastre no sistema horários disponíveis para agendamentos de serviços. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- |
| RF01          | Cadastrar Horário |
| RF02          | Alterar Horário |
| RF03          | Consultar Horário |
| RF04          | Excluir Horário |
| RF05          | Vizualizar detalhes do Horário |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade**            | Essencial                           | 
| **Estimativa**            | 3h                                  | 
| **Tempo Gasto (real):**   |                                     | 
| **Tamanho Funcional**     |                                     | 
| **Analista**              | Luiz Miguel (Responsável pela descrição, especificação e detalhamento da US).                             | 
| **Desenvolvedor**         | Arthur Azevedo (responsável por implementar e realizar testes de unidade e estilização do front-end).<br>Luiz Miguel (responsável por implementar e realizar testes de integração, análise e implementação no banco de dados.)                                  | 
| **Revisor**               | Renan Missias (responsável por avaliar a implementação e executar os testes de unidade e testes de integração).                              | 
| **Testador**              | Gabriel Azevedo (Responsável pela execução dos testes de aceitação e da criação do relatório de testes).                                | 

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA04.01** | O personal informa os horários disponíveis na agenda e clica em salvar. O sistema exibe a mensagem: "Agenda salva com sucesso." |
| **TA04.02** | O personal tenta salvar horários conflitantes, e o sistema exibe a mensagem de erro: "Erro: Horários conflitantes detectados." |
| **TA04.03** | O personal edita um horário previamente salvo e clica em salvar. O sistema exibe a mensagem: "Alterações salvas com sucesso." |
| **TA04.04** | O personal edita um horário previamente salvo e clica em salvar. O sistema exibe a mensagem: "Alterações salvas com sucesso." |
| **TA04.05** | O personal remove um horário previamente cadastrado e o sistema exibe a mensagem: "Horário removido com sucesso." |
| **TA04.06** | O personal consulta a agenda e o sistema exibe os horários disponíveis corretamente. |

</div>

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 15px; margin-bottom: 15px; background: #f9f9f9;">

### User Story US05 - Manter registro de progresso

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | Permitir o acompanhamento do progresso dos alunos ao longo do tempo, registrando medidas corporais, resultados de testes de aptidão física e desempenho em exercícios. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- |
| RF01          | Registrar Progresso |
| RF02          | Editar Registro de Progresso |
| RF03          | Consultar Registros de Progresso |
| RF04          | Excluir Registro de Progresso |
| RF05          | Vizualizar detalhes do Horário |


|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade**            | Essencial                           | 
| **Estimativa**            | 8h                                  | 
| **Tempo Gasto (real):**   |                                     | 
| **Tamanho Funcional**     |                                     | 
| **Analista**              | Luiz Miguel (Responsável pela descrição, especificação e detalhamento da US).                             | 
| **Desenvolvedor**         | Arthur Azevedo (responsável por implementar e realizar testes de unidade e estilização do front-end).<br>José Alves (responsável por implementar e realizar testes de integração, análise e implementação no banco de dados.)                                  | 
| **Revisor**               | Renan Missias (responsável por avaliar a implementação e executar os testes de unidade e testes de integração).                              | 
| **Testador**              | Gabriel Azevedo (Responsável pela execução dos testes de aceitação e da criação do relatório de testes).                                | 

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA05.01** | O usuário informa os dados de progresso (medidas corporais, resultados de testes) e clica em salvar. O sistema exibe a mensagem: "Progresso registrado com sucesso." |
| **TA05.02** | O usuário tenta salvar registros de progresso com dados incompletos, e o sistema exibe a mensagem de erro: "Erro: Campos obrigatórios não preenchidos." |
| **TA05.03** | O usuário edita registros de progresso previamente salvos e clica em salvar. O sistema exibe a mensagem: "Alterações salvas com sucesso." |
| **TA05.04** | O usuário tenta salvar alterações em registros de progresso com dados incompletos e o sistema exibe a mensagem de erro: "Erro: Campos obrigatórios não preenchidos." |
| **TA05.05** | O usuário solicita a exclusão de um registro de progresso, e o sistema realiza a exclusão lógica exibindo a mensagem: "Registro excluído com sucesso." |
| **TA05.06** | O usuário consulta os registros de progresso e o sistema exibe os dados corretamente. |

</div>

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 15px; margin-bottom: 15px; background: #f9f9f9;">

### User Story US06 - Manter contrato de serviço

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | Capacidade de marcar e gerenciar as sessões de treinamento com os clientes ao longo do tempo.<br>● Nome completo;<br>● CPF;<br>● RG ou CNH;<br>● Serviço desejado;<br>● Horários contratados;<br>● Localidade desejada;<br>● Número de celular;<br>● E-mail;<br>● Comprovante de pagamento. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- |
| RF01          | Cadastrar Contrato de Serviço |
| RF02          | Editar Contrato de Serviço |
| RF03          | Consultar Contratos de Serviço |
| RF04          | Excluir Contrato de Serviço |
| RF05          | Vizualizar detalhes do Contrato de Serviço |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade**            | Essencial                           | 
| **Estimativa**            | 8h                                  | 
| **Tempo Gasto (real):**   |                                     | 
| **Tamanho Funcional**     |                                     | 
| **Analista**              | Luiz Miguel (Responsável pela descrição, especificação e detalhamento da US).                             | 
| **Desenvolvedor**         | Gabriel Ygor (responsável por implementar e realizar testes de unidade e estilização do front-end).<br>Rael Araujo (responsável por implementar e realizar testes de integração, análise e implementação no banco de dados.)                                  | 
| **Revisor**               | Renan Missias (responsável por avaliar a implementação e executar os testes de unidade e testes de integração).                              | 
| **Testador**              | Gabriel Azevedo (Responsável pela execução dos testes de aceitação e da criação do relatório de testes).                                | 

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA06.01** | O usuário cadastra um contrato de serviço preenchendo todos os campos corretamente e clica em salvar. O sistema exibe a mensagem: "Contrato cadastrado com sucesso.” e é gerada uma conta a pagar. |
| **TA06.02** | O usuário tenta salvar um contrato com campos obrigatórios em branco, e o sistema exibe a mensagem de erro: "Erro: Campos obrigatórios não preenchidos." |
| **TA06.03** | O usuário edita um contrato existente e clica em salvar. O sistema exibe a mensagem: "Alterações salvas com sucesso." |
| **TA06.04** | O usuário tenta salvar alterações em um contrato com dados incompletos ou relevantes no pagamento e o sistema exibe a mensagem de erro: "Erro: Você tentou alterar informações relevantes no pagamento ou os campos obrigatórios não foram preenchidos." |
| **TA06.05** | O usuário solicita a exclusão de um contrato de serviço, e o sistema realiza a exclusão lógica exibindo a mensagem: "Contrato excluído com sucesso." |
| **TA06.06** | O usuário tenta excluir um contrato vinculado a serviços ativos, e o sistema exibe a mensagem de erro: "Erro: Não é possível excluir, existem serviços associados." |
| **TA06.07** | O usuário consulta a lista de contratos e o sistema exibe os dados corretamente. |

</div>

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 15px; margin-bottom: 15px; background: #f9f9f9;">

### User Story US07 - Gerar pagamento

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | Capacidade de manter relatórios de pagamentos realizados. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- |
| RF01          | Registrar Pagamento |
| RF02          | Editar Relatório de Pagamentos |
| RF03          | Consultar Relatórios de Pagamentos |
| RF04          | Excluir Relatório de Pagamentos |
| RF05          | Vizualizar detalhes do Relatório de Pagamentos |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade**            | Essencial                           | 
| **Estimativa**            | 3h                                  | 
| **Tempo Gasto (real):**   |                                     | 
| **Tamanho Funcional**     |                                     | 
| **Analista**              | Luiz Miguel (Responsável pela descrição, especificação e detalhamento da US).                             | 
| **Desenvolvedor**         |                                     | 
| **Revisor**               | Renan Missias (responsável por avaliar a implementação e executar os testes de unidade e testes de integração).                              | 
| **Testador**              | Gabriel Azevedo (Responsável pela execução dos testes de aceitação e da criação do relatório de testes).                                | 

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA07.01** | O usuário gera um pagamento com todos os dados preenchidos corretamente. O sistema exibe a mensagem: "Pagamento registrado com sucesso." |
| **TA07.02** | O usuário tenta gerar um pagamento com dados incompletos, e o sistema exibe a mensagem de erro: "Erro: Campos obrigatórios não preenchidos." |
| **TA07.03** | O usuário visualiza o relatório de pagamentos realizados e o sistema exibe os dados corretamente. |
| **TA07.04** | O usuário solicita a exportação do relatório de pagamentos e o sistema gera o arquivo com sucesso. |
| **TA07.05** | O usuário consulta os detalhes de um pagamento específico e o sistema exibe os dados corretamente. |

</div>

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 15px; margin-bottom: 15px; background: #f9f9f9;">

### User Story US08 - Manter relatório alunos

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | Capacidade de manter relatórios dos alunos. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- |
| RF01          | Gerar Relatórios de Alunos |
| RF02          | Editar Relatórios de Alunos |
| RF03          | Consultar Relatórios de Alunos |
| RF04          | Excluir Relatórios de Alunos |
| RF05          | Vizualizar detalhes do Relatórios de Alunos |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade**            | Essencial                           | 
| **Estimativa**            | 3h                                  | 
| **Tempo Gasto (real):**   | 0h                                  | 
| **Tamanho Funcional**     |                                     | 
| **Analista**              | Luiz Miguel (Responsável pela descrição, especificação e detalhamento da US).                             | 
| **Desenvolvedor**         | Gabriel Ygor (responsável por implementar e realizar testes de unidade e estilização do front-end).<br>Rael Araujo (responsável por implementar e realizar testes de integração, análise e implementação no banco de dados.)                                  | 
| **Revisor**               | Renan Missias (responsável por avaliar a implementação e executar os testes de unidade e testes de integração).                              | 
| **Testador**              | Renan Missias (Responsável pela execução dos testes de aceitação e da criação do relatório de testes).                                | 

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA08.01** | O usuário gera um relatório de alunos com filtros aplicados corretamente. O sistema exibe o relatório gerado com sucesso. |
| **TA08.02** | O usuário tenta gerar um relatório sem especificar filtros obrigatórios, e o sistema exibe a mensagem de erro: "Erro: Campos obrigatórios não preenchidos." |
| **TA08.03** | O usuário edita um relatório salvo previamente e clica em salvar. O sistema exibe a mensagem: "Relatório atualizado com sucesso." |
| **TA08.04** | O usuário tenta salvar um relatório com campos obrigatórios em branco, e o sistema exibe a mensagem de erro: "Erro: Campos obrigatórios não preenchidos." |
| **TA08.05** | O usuário solicita a exclusão de um relatório de alunos, e o sistema exibe a mensagem: "Relatório excluído com sucesso." |
| **TA08.06** | O usuário tenta excluir um relatório inexistente, e o sistema exibe a mensagem de erro: "Erro: Relatório não encontrado." |
| **TA08.07** | O usuário consulta a lista de relatórios e o sistema exibe os dados corretamente. |
| **TA08.08** | O usuário tenta consultar um relatório inexistente e o sistema exibe a mensagem de erro: "Erro: Relatório não encontrado." |
| **TA08.09** | O usuário solicita a exportação de um relatório de alunos, e o sistema gera o relatório do aluno em questão. |

</div>

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 15px; margin-bottom: 15px; background: #f9f9f9;">

### User Story US09 - Manter agenda

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | Permitir que o personal cadastre no sistema horários e dias disponíveis para agendamentos de serviço. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- |
| RF01          | Cadastrar Horários e Dias |
| RF01          | Gerar Horários e Dias |
| RF02          | Editar Horários e Dias |
| RF03          | Consultar Horários e Dias |
| RF04          | Excluir Horários e Dias |
| RF05          | Vizualizar detalhes dos Horários e Dias |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade**            | Essencial                           | 
| **Estimativa**            | 8h                                  | 
| **Tempo Gasto (real):**   |                                     | 
| **Tamanho Funcional**     |                                     | 
| **Analista**              | Luiz Miguel (Responsável pela descrição, especificação e detalhamento da US).                             | 
| **Desenvolvedor**         | Gabriel Ygor (responsável por implementar e realizar testes de unidade e estilização do front-end).<br>Rael Araujo (responsável por implementar e realizar testes de integração, análise e implementação no banco de dados.)                                  | 
| **Revisor**               | Renan Missias (responsável por avaliar a implementação e executar os testes de unidade e testes de integração).                              | 
| **Testador**              | Gabriel Azevedo (Responsável pela execução dos testes de aceitação e da criação do relatório de testes).                                | 

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA09.01** | O personal informa os horários e dias disponíveis na agenda e clica em salvar. O sistema exibe a mensagem: "Agenda salva com sucesso." |
| **TA09.02** | O personal tenta salvar horários e dias conflitantes, e o sistema exibe a mensagem de erro: "Erro: Horários e dias conflitantes detectados." |
| **TA09.03** | O personal tenta salvar um horário e dias sem especificar todos os campos obrigatórios, e o sistema exibe a mensagem de erro: "Erro: Campos obrigatórios não preenchidos." |
| **TA09.04** | O personal edita um horário e dia previamente salvo e clica em salvar. O sistema exibe a mensagem: "Alterações salvas com sucesso." |
| **TA09.05** | O personal tenta editar um horário e dias sem especificar todos os campos obrigatórios, e o sistema exibe a mensagem de erro: "Erro: Campos obrigatórios não preenchidos." |
| **TA09.06** | O personal remove um horário e dia previamente cadastrado e o sistema exibe a mensagem: "Horário e dia removido com sucesso." |
| **TA09.07** | O personal tenta remover um horário e dia inexistente, e o sistema exibe a mensagem de erro: "Erro: Horário e dia não encontrado." |
| **TA09.08** | O personal consulta a agenda e o sistema exibe os horários e dias disponíveis corretamente. |
| **TA09.09** | O personal tenta consultar um horário e dia inexistente e o sistema exibe a mensagem de erro: "Erro: Horário e dia não encontrado." |

</div>