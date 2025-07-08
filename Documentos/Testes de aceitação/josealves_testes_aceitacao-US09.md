# ✅ Relatório de Testes de Aceitação — Módulo **Pessoa**

## 📅 Data de Teste: 04/07/2025

## 👤 Responsável: José Alves

---

## 🧩 Recurso Testado: **/pessoa/**

### Descrição Geral:

Este módulo é responsável por manter os dados de pessoas que podem representar alunos, personal trainers ou outras entidades relacionadas. Os endpoints permitem cadastrar, visualizar, editar e excluir dados pessoais, com validações de unicidade e integridade dos dados sensíveis como CPF e email.

---

## 🔍 Endpoints Testados Detalhadamente:

### 1. `GET /pessoa/` — **Listar todas as pessoas**

- **Objetivo:** Verificar se a listagem de pessoas retorna todos os registros corretamente.
- **Resultado Esperado:** HTTP 200 com lista de objetos.
- **Resultado Obtido:** ✅ Aprovado — Lista retornada com sucesso.

---

### 2. `POST /pessoa/` — **Criar nova pessoa**

- **Objetivo:** Validar o cadastro de uma nova pessoa com dados válidos.
- **Dados Enviados:** nome, CPF, email, data de nascimento, sexo, estado civil, etnia, etc.
- **Resultado Esperado:** HTTP 201 com o objeto criado.
- **Resultado Obtido:** ✅ Aprovado — Pessoa cadastrada com sucesso.

---

### 3. `POST /pessoa/` com CPF ou Email duplicado — **Erro de validação**

- **Objetivo:** Testar se o sistema rejeita CPF e email duplicados.
- **Resultado Esperado:** HTTP 400 com mensagens de erro informativas.
- **Resultado Obtido:** ✅ Aprovado — Erro retornado com mensagem: *"Pessoa com este CPF/email já existe."*

---

### 4. `GET /pessoa/{id}/` — **Consultar pessoa específica**

- **Objetivo:** Verificar se os dados de uma pessoa específica podem ser recuperados.
- **Resultado Esperado:** HTTP 200 com dados corretos.
- **Resultado Obtido:** ✅ Aprovado — Dados retornados com sucesso.

---

### 5. `PUT /pessoa/{id}/` — **Atualização total**

- **Objetivo:** Verificar se é possível substituir todos os dados de uma pessoa.
- **Resultado Esperado:** HTTP 200 com os dados atualizados.
- **Resultado Obtido:** ✅ Aprovado — Atualização completa realizada com sucesso.

---

### 6. `PATCH /pessoa/{id}/` — **Atualização parcial**

- **Objetivo:** Testar atualizações parciais (ex.: alteração apenas do número de celular).
- **Resultado Esperado:** HTTP 200 com alteração refletida.
- **Resultado Obtido:** ✅ Aprovado — Atualização parcial concluída com sucesso.

---

### 7. `PATCH /pessoa/{id}/` com CPF/Email de outro usuário — **Erro de validação**

- **Objetivo:** Garantir que CPF e email permaneçam únicos durante edição.
- **Resultado Esperado:** HTTP 400 com mensagens de erro.
- **Resultado Obtido:** ✅ Aprovado — Violação de unicidade detectada e rejeitada.

---

### 8. `DELETE /pessoa/{id}/` — **Excluir pessoa**

- **Objetivo:** Testar se é possível excluir uma pessoa sem vínculos ativos.
- **Resultado Esperado:** HTTP 204 sem conteúdo.
- **Resultado Obtido:** ✅ Aprovado — Pessoa removida com sucesso.

---

### 9. `DELETE /pessoa/{id}/` com vínculos ativos (Aluno ou Personal) — **Bloqueio**

- **Objetivo:** Validar que o sistema impede exclusão de pessoas com vínculos.
- **Resultado Esperado:** HTTP 400 com mensagem de erro.
- **Resultado Obtido:** ✅ Aprovado — Exclusão bloqueada por vínculo ativo.

---

## 🧪 Critérios de Aceitação Verificados:

| Código     | Descrição                                                                                   | Status   |
|------------|---------------------------------------------------------------------------------------------|----------|
| TA09.01    | Cadastro com dados válidos                                                                  | ✅ Aprovado |
| TA09.02    | Cadastro com dados inválidos (ex.: CPF duplicado)                                           | ✅ Aprovado |
| TA09.03    | Edição com dados válidos                                                                    | ✅ Aprovado |
| TA09.04    | Edição com dados inválidos                                                                  | ✅ Aprovado |
| TA09.05    | Exclusão de pessoa sem vínculos                                                              | ✅ Aprovado |
| TA09.06    | Tentativa de exclusão de pessoa com vínculo (Aluno ou Personal)                              | ✅ Aprovado |
| TA09.07    | Listagem correta de pessoas                                                                 | ✅ Aprovado |

---

## 📌 Considerações Técnicas:

- Os testes foram realizados com autenticação válida em ambiente de desenvolvimento.
- O serializer implementa verificação customizada para evitar duplicidade de CPF e email ao atualizar.
- Campos sensíveis foram validados com sucesso (ex.: número de celular, email).
- O campo `idade` funciona corretamente como propriedade calculada (não persistida).

---

## ✅ Conclusão Final:

O módulo **/pessoa/** está **totalmente funcional e validado**. Todos os testes de aceitação foram realizados com sucesso, garantindo confiabilidade e integridade na manipulação dos dados pessoais. O módulo está pronto para ser implantado em ambiente de homologação ou produção.
