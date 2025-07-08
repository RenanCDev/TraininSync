# ✅ Relatório de Testes de Aceitação — Módulo **Pagamento**

## 📅 Data de Teste: 04/07/2025

## 👤 Responsável: José Alves dos Anjos Paiva

---

## 🧩 Recurso Testado: **/pagamento/**

### Descrição Geral:

Este módulo fornece uma API RESTful para operações relacionadas a pagamentos realizados por alunos, vinculados a contratos de serviço. Os endpoints permitem listar, cadastrar, visualizar, atualizar e excluir registros de pagamento.

---

## 🔍 Endpoints Testados Detalhadamente:

### 1. `GET /pagamento/` — **Listar todos os pagamentos**

- **Objetivo:** Verificar se a listagem de pagamentos retorna corretamente os registros existentes.
- **Resultado Esperado:** HTTP 200 com array de objetos JSON representando os pagamentos.
- **Resultado Obtido:** ✅ Aprovado — Listagem retornada com sucesso.

---

### 2. `POST /pagamento/` — **Criar novo pagamento**

- **Objetivo:** Verificar se é possível registrar um novo pagamento com dados válidos.
- **Dados Enviados:** ID de `aluno`, ID de `contrato`, `valor`, `descricao`.
- **Resultado Esperado:** HTTP 201 com os dados criados (incluindo campos read-only como `data_pagamento`).
- **Resultado Obtido:** ✅ Aprovado — Pagamento registrado com sucesso.

---

### 3. `GET /pagamento/{id}/` — **Consultar um pagamento específico**

- **Objetivo:** Verificar se os dados de um pagamento podem ser consultados via ID.
- **Resultado Esperado:** HTTP 200 com os dados completos do pagamento.
- **Resultado Obtido:** ✅ Aprovado — Dados retornados corretamente.

---

### 4. `PUT /pagamento/{id}/` — **Atualização total**

- **Objetivo:** Validar se a substituição completa dos dados funciona corretamente.
- **Resultado Esperado:** HTTP 200 com os dados atualizados (sem alterar campos imutáveis como `data_pagamento`).
- **Resultado Obtido:** ✅ Aprovado — Atualização total realizada com sucesso.

---

### 5. `PATCH /pagamento/{id}/` — **Atualização parcial**

- **Objetivo:** Atualizar campos específicos, como `valor` ou `descricao`.
- **Resultado Esperado:** HTTP 200 com os dados refletindo as alterações.
- **Resultado Obtido:** ✅ Aprovado — Alterações aplicadas com sucesso.

---

### 6. `DELETE /pagamento/{id}/` — **Exclusão de pagamento**

- **Objetivo:** Testar se o sistema permite a remoção de um pagamento.
- **Resultado Esperado:** HTTP 204 com remoção lógica do recurso.
- **Resultado Obtido:** ✅ Aprovado — Pagamento removido corretamente.

---

## 🧪 Critérios de Aceitação Verificados:

- ✅ Validação de campos obrigatórios (valor, contrato, aluno).
- ✅ Rejeição de campos inválidos (ex.: valor negativo, contrato inexistente).
- ✅ Campos read-only protegidos (`data_pagamento`, `created_at`).
- ✅ Serialização correta e compatibilidade com o modelo.
- ✅ Testes interativos via Swagger, Postman e interface front-end.
- ✅ Comportamento adequado em cenários de sucesso e erro.

---

## 📌 Considerações Técnicas:

- Os testes foram realizados com autenticação JWT ativa e usuários válidos.
- A associação entre `Aluno` e `ContratoDeServico` foi validada com registros reais.
- O campo `data_pagamento` é corretamente atribuído automaticamente.
- Tentativas de inserir dados inconsistentes foram corretamente rejeitadas com mensagens claras.

---

## ✅ Conclusão Final:

O módulo **/pagamento/** está **funcional e validado** conforme os critérios de aceitação definidos. Todos os testes passaram com sucesso, garantindo integridade dos dados e robustez das operações. Está pronto para ser promovido ao ambiente de homologação ou produção.
