# Atomização e Detalhamento dos Processos do Projeto de Gestão para Personal Trainers

Este documento fragmenta e detalha cada etapa dos processos do projeto, dividindo atividades anteriormente agrupadas em partes menores e específicas. O foco está na separação de ações de gerenciamento, monitoramento, edição/atualização, exclusão/cancelamento e nos aspectos de escalabilidade e capacidade.

---

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 15px; margin-bottom: 15px; background: #f9f9f9;">

## 1. Histórico de Revisões

**Objetivo:** Manter o controle e a documentação de todas as alterações do projeto.

| Data       | Versão | Descrição         | Autor                       |
|------------|--------|-------------------|-----------------------------|
| 04/12/2024 | 1.0    | Documento inicial | Gabriel Ygor Canuto         |
| 27/03/2025 | 1.1    | Documento inicial | José Alves dos Anjos Paiva  |

**Atividades Atomizadas:**
- Coleta de feedback.
- Reunião para revisão.
- Atualização e registro das mudanças.
- Distribuição da nova versão para a equipe.

</div>

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 15px; margin-bottom: 15px; background: #f9f9f9;">

## 2. Equipe e Definição de Papéis

**Objetivo:** Assegurar que cada membro da equipe tenha funções bem definidas e que haja clareza na comunicação.

| Equipe                                 | Papel                                     | E-mail                           |
|----------------------------------------|-------------------------------------------|----------------------------------|
| Arthur José dos Santos Azevedo         | Desenvolvedor front-end, designer         | arthur.azevedo.700@ufrn.edu.br   |
| Gabriel Ygor Canuto                    | Desenvolvedor front-end                   | gabriel.canuto.037@ufrn.edu.br   |
| José Alves dos Anjos Paiva             | Desenvolvedor back-end                    | jose.alves.092@ufrn.edu.br       |
| Luiz Miguel Santos Silva               | Desenvolvedor back-end, Analista          | luiz.santos.090@ufrn.edu.br      |
| Raul Araújo Silva                      | Desenvolvedor back-end                    | rael.araujo.706@ufrn.edu.br      |
| Renan Messias Rodrigues Alves da Costa | Gerente, Testador, Desenvolvedor back-end | renan.costa.117@ufrn.edu.br      |

- **Mapeamento de Habilidades:**
  - Listar integrantes com suas competências técnicas e comportamentais.
  
- **Definição e Distribuição de Responsabilidades:**
  - **Cadastro:** Responsável por inserir novos dados.
  - **Visualização:** Responsável por exibir informações.
  - **Edição/Atualização:** Responsável por modificar dados existentes.
  - **Exclusão/Cancelamento:** Responsável pela remoção ou cancelamento com registro.
  - **Monitoramento:** Responsável por acompanhar métricas e desempenho.

**Atividades Atomizadas:**
- Levantamento das habilidades dos membros.
- Distribuição de tarefas específicas (ex.: front-end, back-end, testes, monitoramento).
- Estabelecimento de reuniões de feedback e atualizações de papéis.

</div>

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 15px; margin-bottom: 15px; background: #f9f9f9;">

## 3. Descrição do Projeto

**Objetivo:** Definir claramente o escopo e os objetivos do sistema.

- **Contexto:**
  - Sistema para gestão de clientes para personal trainers, abrangendo métricas corporais, evolução, finanças, contratos e agendamento.

- **Escopo:**
  - Administração de dados dos alunos.
  - Gestão de serviços com funcionalidades de cadastro, visualização, edição/atualização, exclusão/cancelamento e monitoramento.
  - Geração e acompanhamento de relatórios.

**Atividades Atomizadas:**
- Levantamento dos requisitos do negócio.
- Mapeamento dos fluxos de trabalho.
- Validação do escopo com os stakeholders.

</div>

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 15px; margin-bottom: 15px; background: #f9f9f9;">

## 4. Perfis dos Usuários

**Objetivo:** Definir os perfis de usuários e as funcionalidades específicas para cada um.

- **Perfil Personal Trainer:**
  - **Cadastro:** Inserir e validar dados do profissional.
  - **Visualização:** Listar e detalhar perfis de personal trainers.
  - **Edição/Atualização:** Atualizar informações cadastrais.
  - **Exclusão/Cancelamento:** Remover perfis com confirmação e registro.
  - **Monitoramento:** Acompanhar performance e feedback (ex.: número de serviços contratados, avaliações).

- **Perfil Aluno:**
  - **Cadastro:** Inserir dados pessoais e de saúde.
  - **Visualização:** Listar e detalhar perfis de alunos, incluindo histórico de progresso.
  - **Edição/Atualização:** Atualizar dados dos alunos.
  - **Exclusão/Cancelamento:** Remoção dos dados com preservação do histórico.
  - **Monitoramento:** Acompanhar evolução física e interações.

**Atividades Atomizadas:**
- Identificar os tipos de usuário.
- Documentar as necessidades e funções específicas.
- Validar com testes de usabilidade.

</div>

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 15px; margin-bottom: 15px; background: #f9f9f9;">

## 5. Requisitos Funcionais – Detalhamento e Fragmentação

**Objetivo:** Especificar cada funcionalidade do sistema em ações atômicas e separadas.

### **RF01 – Manter Personal Trainer**

- **RF01.01 – Cadastro de Personal Trainer**  
**Ator:** Personal Trainer  
O sistema deverá permitir o cadastro de novos personal trainers, com campos obrigatórios para informações básicas (nome, email, etc.), e validação dos dados (ex.: email válido, campos não nulos).  

- **RF01.02 – Visualizar Personal Trainer**  
**Ator:** Personal Trainer  
O sistema deverá listar os personal trainers cadastrados, com a possibilidade de exibir informações detalhadas sobre cada um deles, com filtros de busca para facilitar a visualização.  

- **RF01.03 – Editar Dados do Personal Trainer**  
**Ator:** Personal Trainer  
O sistema deverá permitir que o personal trainer edite seus dados, como informações de contato, especializações, etc., e atualize essas informações no banco de dados após validação.  

- **RF01.04 – Excluir Personal Trainer**  
**Ator:** Personal Trainer  
O sistema deverá permitir a exclusão de um personal trainer, solicitando confirmação antes da remoção e registrando essa ação no log de atividades.  

- **RF01.05 – Monitorar Desempenho do Personal Trainer**  
**Ator:** Personal Trainer  
O sistema deverá fornecer métricas sobre o desempenho do personal trainer, como número de atendimentos realizados, feedbacks de alunos, etc.  

---

### **RF02 – Manter Aluno**

- **RF02.01 – Cadastro de Aluno**  
**Ator:** Aluno  
O sistema deverá permitir que os alunos se cadastrem, preenchendo informações pessoais e de saúde, com validação de dados (ex.: campos obrigatórios, email válido) e persistência no banco de dados.  

- **RF02.02 – Visualizar Aluno**  
**Ator:** Aluno  
O sistema deverá exibir uma lista de alunos cadastrados, com a possibilidade de acessar informações detalhadas, incluindo histórico de progresso físico.  

- **RF02.03 – Editar Dados do Aluno**  
**Ator:** Aluno  
O sistema deverá permitir que o aluno edite suas informações de cadastro, como dados pessoais, preferências, etc., e atualizar essas informações no banco de dados após validação.  

- **RF02.04 – Excluir Aluno**  
**Ator:** Aluno  
O sistema deverá permitir que o aluno exclua seu próprio cadastro, com confirmação antes da remoção e registro da ação no log, mantendo dados históricos preservados.  

- **RF02.05 – Monitorar Evolução do Aluno**  
**Ator:** Aluno  
O sistema deverá acompanhar o progresso do aluno, registrando métricas físicas e feedbacks contínuos para análise do desenvolvimento.  

---

### **RF03 – Manter Serviço**

- **RF03.01 – Cadastro de Serviço**  
**Ator:** Personal Trainer  
O sistema deverá permitir que o personal trainer cadastre novos serviços oferecidos, com informações sobre nome, descrição, preço e duração, validando dados e persistindo as informações.  

- **RF03.02 – Visualizar Serviços Cadastrados**  
**Ator:** Aluno  
O sistema deverá exibir uma lista de serviços cadastrados, permitindo a filtragem por categoria e exibição detalhada das características de cada serviço.  

- **RF03.03 – Editar Serviço**  
**Ator:** Personal Trainer  
O sistema deverá permitir que o personal trainer edite os dados de um serviço, como nome, descrição, preço e duração, validando as alterações antes de persistir as mudanças.  

- **RF03.04 – Excluir Serviço**  
**Ator:** Personal Trainer  
O sistema deverá permitir que o personal trainer exclua um serviço, com confirmação da ação e registro no log de atividades.  

- **RF03.05 – Monitorar Contratações de Serviços**  
**Ator:** Personal Trainer  
O sistema deverá monitorar o número de contratações de cada serviço e o feedback recebido de alunos, apresentando essas métricas para análise do personal trainer.  

---

### **RF04 – Manter Contrato de Serviço**

- **RF04.01 – Cadastro de Contrato**  
**Ator:** Aluno  
O sistema deverá permitir a criação de contratos de serviços, com termos e condições, valores e duração, gerando um documento digital (como PDF) ao final do processo.  

- **RF04.02 – Visualizar Contratos**  
**Ator:** Aluno  
O sistema deverá listar todos os contratos ativos e históricos, com a possibilidade de exibir os detalhes e o status atual de cada contrato.  

- **RF04.03 – Editar Contrato**  
**Ator:** Aluno  
O sistema deverá permitir a edição dos termos e condições de um contrato, registrando as alterações e mantendo a versão atualizada.  

- **RF04.04 – Excluir Contrato**  
**Ator:** Aluno  
O sistema deverá permitir o encerramento de contratos, com confirmação da ação e registro no log de atividades.  

- **RF04.05 – Monitorar Vencimentos e Comprovantes**  
**Ator:** Aluno  
O sistema deverá acompanhar os vencimentos de contratos, os uploads de comprovantes de pagamento e enviar notificações aos envolvidos.  

---

### **RF05 – Manter Registro de Progresso**

- **RF05.01 – Cadastro de Métricas**  
**Ator:** Personal Trainer  
O sistema deverá permitir o registro de métricas físicas dos alunos (peso, medidas, etc.), associando a data e hora do registro.  

- **RF05.02 – Visualizar Histórico de Progresso**  
**Ator:** Aluno  
O sistema deverá exibir o histórico de progresso físico do aluno em uma lista ou gráficos comparativos.  

- **RF05.03 – Editar Registros de Progresso**  
**Ator:** Personal Trainer  
O sistema deverá permitir que o personal trainer corrija registros de progresso, atualizando os dados conforme novas medições ou feedbacks.  

- **RF05.04 – Excluir Registros de Progresso**  
**Ator:** Personal Trainer  
O sistema deverá permitir a remoção de registros de progresso incorretos, com confirmação da ação.  

---

### **RF06 – Gerar Pagamento**

- **RF06.01 – Registro de Relatório de Pagamento**  
**Ator:** Aluno  
O sistema deverá registrar os pagamentos realizados pelos alunos, integrando com um gateway de pagamento para processamento.  

- **RF06.02 – Visualizar Relatório de Pagamentos**  
**Ator:** Aluno  
O sistema deverá exibir um histórico de transações financeiras realizadas, com detalhes como data, valor, e status do pagamento.  

- **RF06.03 – Excluir Relatório de Pagamento**  
**Ator:** Aluno  
O sistema deverá permitir a exclusão de relatórios de pagamentos, porém mantendo os pagamentos registrados, não permitindo assim sua exclusão, apenas do relatório, com confirmação da ação e verificação de integridade dos dados.  

- **RF06.04 – Monitorar Inadimplência**  
**Ator:** Aluno  
O sistema deverá fornecer métricas sobre inadimplência, com relatórios financeiros detalhados para monitoramento.  

---

### **RF07 – Manter Relatórios de Alunos**

- **RF07.01 – Gerar Relatórios**  
**Ator:** Personal Trainer  
O sistema deverá permitir a geração de relatórios detalhados sobre o desempenho dos alunos, com filtros por período, serviço, e tipo de aluno, além de opções de exportação (PDF, Excel).  

- **RF07.02 – Visualizar Relatórios Gerados**  
**Ator:** Personal Trainer  
O sistema deverá exibir a lista de relatórios gerados, permitindo visualização de dados e comparação de informações de diferentes períodos.  

- **RF07.03 – Editar Relatórios**  
**Ator:** Personal Trainer  
O sistema deverá permitir que o personal trainer edite dados de um relatório gerado, persistindo as alterações realizadas.  

- **RF07.04 – Excluir Relatório**  
**Ator:** Aluno  
O sistema deverá permitir que o aluno exclua relatórios desatualizados ou desnecessários, com confirmação da ação.  

- **RF07.05 – Monitorar Armazenamento de Relatórios**  
**Ator:** Personal Trainer  
O sistema deverá organizar e armazenar relatórios para futuras análises, mantendo registros contínuos de relatórios gerados.  

---

### **RF08 – Manter Agenda**

- **RF08.01 – Cadastrar Horários**  
**Ator:** Personal Trainer  
O sistema deverá permitir que o personal trainer cadastre novos horários para sessões de treino, definindo a data, hora e duração da sessão.  

- **RF08.02 – Visualizar Agenda**  
**Ator:** Personal Trainer  
O sistema deverá fornecer uma interface que exiba um calendário com as sessões agendadas, permitindo visualização por dia, semana ou mês.  

- **RF08.03 – Editar Sessão Agendada**  
**Ator:** Personal Trainer  
O sistema deverá permitir que o personal trainer edite dados de um relatório gerado, persistindo as alterações realizadas.  

- **RF08.04 – Excluir Sessão Agendada**  
**Ator:** Aluno  
O sistema deverá permitir que o aluno exclua relatórios desatualizados ou desnecessários, com confirmação da ação.  

- **RF08.05 – Agendar Sessão**  
**Ator:** Aluno  
O sistema deverá organizar e armazenar relatórios para futuras análises, mantendo registros contínuos de relatórios gerados.   

- **RF08.06 – Filtrar Sessão**  
**Ator:** Personal Trainer  
O sistema deverá permitir a busca e filtragem das sessões agendadas por data, tipo de treino e status da sessão.

- **RF08.07 – Cancelar Sessão**  
**Ator:** Personal Trainer  
O sistema deverá permitir que tanto o personal trainer quanto o aluno possam cancelar sessões agendadas, registrando a ação no histórico do sistema.

- **RF08.08 – Gerar Relatórios de Atendimentos**  
**Ator:** Personal Trainer  
OO sistema deverá permitir que o personal trainer confirme a presença do aluno na sessão agendada, registrando o comparecimento.

- **RF08.09 – Notificar Agendamentos**  
**Ator:** Sistema  
OO sistema deverá enviar notificações automáticas de confirmação e lembrete das sessões agendadas para os alunos e personal trainers.   

- **RF08.10 – Sincronizar com Calendário Externo**  
**Ator:** Sistema  
O sistema deverá oferecer integração com serviços de calendário externo (ex.: Google Calendar) para sincronizar automaticamente os horários agendados.


---
**Processo Atomizado dos Requisitos Funcionais:**
- Cada requisito é dividido em componentes menores (cadastro, visualização, edição/atualização, exclusão/cancelamento, monitoramento).
- Desenvolvimento iterativo com TDD (Test-Driven Development).
- Revisões de código e integração contínua para cada módulo.

</div>

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 15px; margin-bottom: 15px; background: #f9f9f9;">

## 6. Requisitos Não-Funcionais – Detalhamento e Fragmentação

**Objetivo:** Assegurar que o sistema seja robusto, escalável, seguro e de fácil uso.

### RNF01 – Estrutura de Hardware e Acessibilidade

- **Compatibilidade:**
  - Funcionar em navegadores principais (Chrome, Firefox, Safari, Edge).
  - Suporte a dispositivos móveis, tablets e desktops.

- **Infraestrutura:**
  - Servidores com alta disponibilidade.
  - Estratégias de backup, redundância e recuperação de desastres.

### RNF02 – Desempenho: Escalabilidade e Capacidade

- **Escalabilidade:**
  - Suporte a múltiplos usuários simultâneos.
  - Definir capacidade máxima e planos para expansão.
  
- **Capacidade e Tempo de Resposta:**
  - Tempo de resposta definido (ex.: consultas em menos de 2 segundos).
  - Implementação de caching e otimização de consultas.
  - Monitoramento contínuo com alertas e métricas.

### RNF03 – Disponibilidade e Manutenção

- **Confiabilidade:**
  - Uptime mínimo de 99,5%.
  - Plano de contingência com redundância automática.
  
- **Manutenção:**
  - Janela de manutenção programada com aviso prévio.
  - Mecanismos de failover e recuperação rápida.

### RNF04 – Usabilidade e Experiência do Usuário

- **Interface:**
  - Design intuitivo, responsivo e com layout limpo.
  - Acessibilidade para leitores de tela e requisitos de contraste.
  
- **Feedback:**
  - Mensagens de confirmação, alertas e instruções claras.
  - Documentação, tutoriais e FAQs integrados ao sistema.

### RNF05 – Conformidade e Segurança

- **Proteção de Dados:**
  - Criptografia em trânsito (SSL/TLS) e em repouso.
  - Conformidade com LGPD e outras normas de privacidade.

- **Segurança:**
  - Autenticação robusta (incluindo 2FA).
  - Monitoramento de segurança com firewalls e prevenção contra DDoS.
  - Registros (logs) detalhados para auditoria e análise de incidentes.

**Processo Atomizado dos Requisitos Não-Funcionais:**
- Definir métricas e benchmarks específicos para desempenho, disponibilidade e usabilidade.
- Selecionar tecnologias e frameworks que suportem escalabilidade e segurança.
- Configurar ambientes de teste para validação dos critérios.
- Realizar revisões e atualizações periódicas de segurança e conformidade.

</div>

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 15px; margin-bottom: 15px; background: #f9f9f9;">

## 7. Processos de Desenvolvimento – Fragmentação Detalhada

**Objetivo:** Segmentar cada fase do desenvolvimento para maior clareza e controle.

### 7.1 Elicitação de Requisitos

- Realizar reuniões com stakeholders.
- Utilizar técnicas (entrevistas, workshops, prototipagem).
- Documentar as necessidades iniciais.

### 7.2 Análise dos Requisitos

- Revisar e analisar as necessidades identificadas.
- Definir critérios de aceitação e restrições.
- Validar com a equipe técnica e de negócios.

### 7.3 Especificação dos Requisitos

- Redigir documentação detalhada dos requisitos funcionais e não funcionais.
- Estabelecer rastreabilidade com os objetivos do cliente.
- Revisar e validar a especificação com os stakeholders.

### 7.4 Projeto de Arquitetura

- Definir a arquitetura de alto nível (ex.: modular, microserviços).
- Identificar componentes de hardware, software e integrações.
- Documentar padrões e métodos de projeto.

### 7.5 Implementação

- Desenvolver os módulos individualmente.
- Escrever código conforme especificações.
- Executar testes unitários para cada módulo.

### 7.6 Integração

- Integrar os módulos desenvolvidos.
- Realizar testes de integração para assegurar a comunicação entre componentes.
- Resolver conflitos e realizar ajustes conforme necessário.

### 7.7 Testes e Validação

- Executar testes de aceitação, regressão e usabilidade.
- Validar a conformidade com os requisitos especificados.
- Documentar resultados e realizar ajustes.

### 7.8 Deploy e Instalação

- Automatizar o deploy por meio de pipelines de CI/CD.
- Realizar instalação em ambientes de produção.
- Configurar monitoramento e estratégias de rollback.

### 7.9 Operação e Manutenção

- Monitorar performance e disponibilidade.
- Aplicar atualizações e patches de segurança.
- Manter logs e documentação para suporte contínuo.

**Processo Atomizado:**
- Dividir cada fase em tarefas menores.
- Utilizar ferramentas colaborativas para monitoramento e revisão.
- Realizar revisões constantes para garantir a aderência aos requisitos.

</div>

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 15px; margin-bottom: 15px; background: #f9f9f9;">

## 8. Processos de Gestão e Automação

**Objetivo:** Otimizar a execução e o monitoramento dos processos do projeto.

- **Metodologia Ágil (Scrum/Kanban):**
  - Planejamento de sprints.
  - Reuniões diárias e retrospectivas.

- **Automação de Processos:**
  - Configurar pipelines de CI/CD para testes e deploy automatizados.
  - Utilizar ferramentas de BPM para mapear e monitorar processos.

- **Monitoramento e Feedback:**
  - Implementar dashboards com métricas de performance.
  - Realizar revisões periódicas e ajustes com base no feedback.

**Processo Atomizado:**
- Fragmentar atividades em ciclos curtos e iterativos.
- Definir responsáveis e prazos para cada tarefa.
- Estabelecer comunicação contínua entre as equipes.

</div>

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 15px; background: #f9f9f9;">

## 9. Conclusão

A fragmentação e a atomização dos processos – dividindo claramente as ações de gerenciamento, monitoramento, edição/atualização, exclusão/cancelamento e detalhando os aspectos de escalabilidade e capacidade – proporcionam:

- **Redução da Complexidade:** Tarefas menores e independentes facilitam a implementação e manutenção.
- **Clareza e Comunicação:** Responsabilidades e funções são bem definidas para cada equipe.
- **Flexibilidade e Adaptabilidade:** Facilidade para incorporar mudanças e novas tecnologias.
- **Automação Eficiente:** Implementação de testes automatizados e deploy contínuo.

Esta abordagem garante um sistema robusto, escalável e seguro, preparado para atender às necessidades dos personal trainers e de seus alunos, promovendo entregas de alta qualidade.

</div>