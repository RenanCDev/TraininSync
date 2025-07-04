# ✅ Relatório de Testes de Aceitação — Módulo **Aluno**

## 📅 Data de Teste: 03/07/2025

## 👤 Responsável: Renan Missias

---

## 🧩 Recurso Testado: **/aluno/**

### Descrição Geral:

Este módulo expõe um conjunto de endpoints para gerenciamento de registros do recurso **Aluno**, incluindo listagem, criação, leitura, atualização e exclusão lógica de dados.

---

## 🔍 Endpoints Testados Detalhadamente:

### 1. `GET /aluno/` — **Listar todos os alunos**

- **Objetivo:** Verificar se o endpoint retorna corretamente a lista de alunos cadastrados.
- **Resultado Esperado:** Resposta HTTP 200 com um array de objetos no formato correto.
- **Resultado Obtido:** ✅ Aprovado — Lista retornada corretamente com dados consistentes.

---

### 2. `POST /aluno/` — **Criar novo aluno**

- **Objetivo:** Verificar se é possível cadastrar um novo aluno com dados válidos.
- **Dados enviados:** JSON com campos obrigatórios (ex.: nome, matrícula, curso, etc.).
- **Resultado Esperado:** Resposta HTTP 201 com os dados criados e ID atribuído.
- **Resultado Obtido:** ✅ Aprovado — Aluno cadastrado com sucesso.

---

### 3. `POST /aluno/` — **Cadastro com dados incompletos**

- **Objetivo:** Testar a validação de campos obrigatórios ao tentar cadastrar com dados ausentes.
- **Resultado Esperado:** Resposta HTTP 400 com mensagem: “Erro: Campos obrigatórios não preenchidos.”
- **Resultado Obtido:** ✅ Aprovado — Mensagem de erro exibida corretamente.

---

### 4. `GET /aluno/{id}/` — **Consultar aluno específico**

- **Objetivo:** Verificar se é possível recuperar os dados de um aluno pelo ID.
- **Resultado Esperado:** Resposta HTTP 200 com os dados do aluno.
- **Resultado Obtido:** ✅ Aprovado — Dados retornados corretamente.

---

### 5. `PUT /aluno/{id}/` — **Atualização total dos dados**

- **Objetivo:** Testar se é possível substituir todos os dados de um aluno.
- **Resultado Esperado:** Resposta HTTP 200 com os dados atualizados.
- **Resultado Obtido:** ✅ Aprovado — Alterações salvas com sucesso.

---

### 6. `PATCH /aluno/{id}/` — **Atualização parcial dos dados**

- **Objetivo:** Verificar se é possível atualizar um ou mais campos individualmente.
- **Resultado Esperado:** Resposta HTTP 200 com os dados modificados.
- **Resultado Obtido:** ✅ Aprovado — Campos atualizados com sucesso.

---

### 7. `PATCH /aluno/{id}/` — **Atualização com dados incompletos**

- **Objetivo:** Validar o sistema ao tentar atualizar com dados ausentes.
- **Resultado Esperado:** Resposta HTTP 400 com mensagem: “Erro: Campos obrigatórios não preenchidos.”
- **Resultado Obtido:** ✅ Aprovado — Validação funcionando corretamente.

---

### 8. `DELETE /aluno/{id}/` — **Exclusão lógica de aluno**

- **Objetivo:** Verificar se o sistema realiza a exclusão lógica do registro.
- **Resultado Esperado:** Resposta HTTP 204 e remoção do aluno das listagens.
- **Resultado Obtido:** ✅ Aprovado — Aluno excluído com sucesso.

---

### 9. `DELETE /aluno/{id}/` — **Exclusão com pendências ativas**

- **Objetivo:** Impedir exclusão de aluno com vínculos pendentes.
- **Resultado Esperado:** Resposta HTTP 400 com mensagem: “Erro: Não é possível excluir, existem pendências associadas.”
- **Resultado Obtido:** ✅ Aprovado — Restrição aplicada corretamente.

---

## 🧪 Critérios de Aceitação Verificados:

- ✅ Validação de campos obrigatórios e estrutura dos dados.
- ✅ Tratamento adequado de erros e respostas com mensagens claras.
- ✅ Respostas com status HTTP apropriados para cada ação.
- ✅ Funcionalidade completa dos endpoints em ambiente controlado.
- ✅ Coerência entre os dados persistidos e os exibidos.

---

## 📌 Considerações Técnicas:

- Os testes foram realizados via Swagger, Postman e Front-end com autenticação válida.
- Não foram detectadas falhas de fluxo ou inconsistência de dados.
- A performance dos endpoints foi considerada satisfatória.

---

## ✅ Conclusão Final:

O módulo **/aluno/** foi **testado com sucesso** e cumpre todos os critérios de aceitação estabelecidos. Está apto para implantação em ambiente de homologação ou produção.
