# Atomização e Detalhamento dos Processos do Projeto de Gestão para Personal Trainers

Este documento fragmenta e detalha cada etapa dos processos do projeto, dividindo atividades anteriormente agrupadas em partes menores e específicas. O foco está na separação de ações de gerenciamento, monitoramento, edição/atualização, exclusão/cancelamento e nos aspectos de escalabilidade e capacidade.

---

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 15px; margin-bottom: 15px; background: #f9f9f9;">

## 1. Histórico de Revisões

**Objetivo:** Manter o controle e a documentação de todas as alterações do projeto.

| Data       | Versão | Descrição         | Autor                   |
|------------|--------|-------------------|-------------------------|
| 04/12/2024 | 1.0    | Documento inicial | Gabriel Ygor Canuto     |

**Atividades Atomizadas:**
- Coleta de feedback.
- Reunião para revisão.
- Atualização e registro das mudanças.
- Distribuição da nova versão para a equipe.

</div>

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 15px; margin-bottom: 15px; background: #f9f9f9;">

## 2. Equipe e Definição de Papéis

**Objetivo:** Assegurar que cada membro da equipe tenha funções bem definidas e que haja clareza na comunicação.

| Equipe                               | Papel                             | E-mail                           |
|-------------------------------------|-----------------------------------|----------------------------------|
| Arthur José dos Santos Azevedo      | Desenvolvedor front-end, designer | arthur.azevedo.700@ufrn.edu.br    |
| Gabriel Ygor Canuto                 | Desenvolvedor front-end           | gabriel.canuto.037@ufrn.edu.br    |
| José Alves dos Anjos Paiva          | Desenvolvedor Full-Stack          | jose.alves.092@ufrn.edu.br        |
| Luiz Miguel Santos Silva            | Desenvolvedor back-end, Analista  | luiz.santos.090@ufrn.edu.br       |
| Raul Araújo Silva                   | Desenvolvedor back-end            | rael.araujo.706@ufrn.edu.br       |
| Renan Messias Rodrigues Alves da Costa | Gerente, Testador, Desenvolvedor back-end | renan.costa.117@ufrn.edu.br |

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

### RF01 – Manter Personal Trainer

- **Cadastro:**
  - Criar tela com campos obrigatórios.
  - Validar dados (ex.: email, campos não nulos).
  - Persistir informações no banco de dados.

- **Visualização:**
  - Desenvolver tela para listar personal trainers.
  - Implementar filtros e visualização detalhada.

- **Edição/Atualização:**
  - Interface para modificar dados já cadastrados.
  - Validar alterações e atualizar registros.

- **Exclusão/Cancelamento:**
  - Confirmar ação de exclusão.
  - Remover dados e registrar a ação (log).

- **Monitoramento:**
  - Acompanhar métricas do desempenho (ex.: número de atendimentos, feedbacks).

### RF02 – Manter Aluno

- **Cadastro:**
  - Formulário com informações pessoais e de saúde.
  - Validação dos dados e persistência.

- **Visualização:**
  - Tela para listar alunos e visualizar detalhes, incluindo histórico de progresso.

- **Edição/Atualização:**
  - Interface para atualizar informações do aluno.
  - Validação e atualização no banco.

- **Exclusão/Cancelamento:**
  - Processo de remoção com confirmação, preservando dados históricos relevantes.

- **Monitoramento:**
  - Acompanhar evolução dos alunos com registros e feedback.

### RF03 – Manter Serviço

- **Cadastro:**
  - Tela para inserção de novo serviço (nome, descrição, preço, duração).
  - Validação dos dados e persistência.

- **Visualização:**
  - Listar serviços cadastrados com filtros por categoria.
  - Exibir detalhes de cada serviço.

- **Edição/Atualização:**
  - Interface para modificar informações do serviço.
  - Atualizar dados e persistir mudanças.

- **Exclusão/Cancelamento:**
  - Confirmar e remover serviço, com registro da ação.

- **Monitoramento:**
  - Acompanhar métricas (ex.: número de contratações, feedback de clientes).

### RF04 – Manter Contrato de Serviço

- **Cadastro:**
  - Interface para criação de contrato (termos, condições, valores, duração).
  - Geração de documento digital (ex.: PDF).

- **Visualização:**
  - Listar contratos ativos e históricos.
  - Exibir detalhes e status do contrato.

- **Edição/Atualização:**
  - Interface para atualizar termos e condições.
  - Persistir alterações no contrato.

- **Exclusão/Cancelamento:**
  - Processo de encerramento de contrato, com registro da ação.

- **Monitoramento:**
  - Acompanhar vencimentos, uploads de comprovantes e envio de notificações.

### RF05 – Manter Registro de Progresso

- **Cadastro:**
  - Tela para inserir métricas físicas (peso, medidas, etc.) com registro de data/hora.
  
- **Visualização:**
  - Exibição do histórico em forma de lista e gráficos.
  - Ferramenta para comparação de métricas.

- **Edição/Atualização:**
  - Interface para corrigir registros.
  - Atualizar dados conforme feedback do personal trainer.

- **Exclusão/Cancelamento:**
  - Remoção de registros incorretos com confirmação.
  
- **Monitoramento:**
  - Armazenar e atualizar feedback continuamente.

### RF06 – Gerar Pagamento

- **Cadastro:**
  - Registro dos pagamentos realizados.
  - Integração com gateway de pagamento.

- **Visualização:**
  - Tela para listar o histórico de transações.
  - Detalhamento de cada pagamento (data, valor, status).

- **Edição/Atualização:**
  - Interface para correção de dados de pagamento, se necessário.

- **Exclusão/Cancelamento:**
  - Processo para remover registros de pagamento com verificação.
  
- **Monitoramento:**
  - Acompanhar inadimplência e histórico financeiro com relatórios.

### RF07 – Manter Relatórios de Alunos

- **Geração:**
  - Módulo para criar relatórios com filtros (por período, serviço, tipo de aluno).
  - Opções de exportação (PDF, Excel).

- **Visualização:**
  - Tela para listar e visualizar relatórios gerados.
  - Ferramenta para comparação de dados em diferentes períodos.

- **Edição/Atualização:**
  - Interface para atualizar dados de relatórios.
  - Persistência das alterações.

- **Exclusão/Cancelamento:**
  - Processo para remover relatórios desatualizados com confirmação.
  
- **Monitoramento:**
  - Organização e armazenamento contínuo para análises futuras.

### RF08 – Manter Agenda

- **Cadastro de Horários:**
  - Tela para inserir novas sessões de treino com data, hora e duração.

- **Visualização:**
  - Calendário integrado com visualização por dia, semana ou mês.
  - Filtros para localizar sessões específicas.

- **Edição/Atualização:**
  - Interface para atualizar os detalhes das sessões agendadas.
  - Persistência das alterações.

- **Exclusão/Cancelamento:**
  - Processo de cancelamento com confirmação e registro.
  
- **Monitoramento:**
  - Sincronização com calendários externos (ex.: Google Calendar) e envio automático de lembretes.

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
