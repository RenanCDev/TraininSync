# ✅ Relatório de Testes de Aceitação — Módulo **Personal**

## 📅 Data de Teste: 04/07/2025

## 👤 Responsável: Gabriel Ygor Canuto

---

## 🧩 Recurso Testado: **/personal/**

### Descrição Geral:

Este módulo expõe um conjunto de endpoints para gerenciamento de registros do recurso **Personal**, incluindo listagem, criação, leitura, atualização e exclusão de dados.

---

## 🔍 Endpoints Testados Detalhadamente:

### 1. `GET /personal/` — **Listar todos os registros**

- **Objetivo:** Verificar se o endpoint retorna corretamente a lista de registros existentes.
- **Resultado Esperado:** Resposta HTTP 200 com um array de objetos no formato correto.
- **Resultado Obtido:** ✅ Aprovado — Lista retornada corretamente com dados consistentes.

---

### 2. `POST /personal/` — **Criar novo registro**

- **Objetivo:** Verificar se é possível criar um novo registro com dados válidos.
- **Dados enviados:** JSON com campos obrigatórios (ex.: nome, cargo, etc.).
- **Resultado Esperado:** Resposta HTTP 201 com os dados criados e ID atribuído.
- **Resultado Obtido:** ✅ Aprovado — Registro criado com sucesso e persistido.

---

### 3. `GET /personal/{id}/` — **Ler detalhes de um registro**

- **Objetivo:** Verificar se é possível recuperar os dados de um registro específico pelo ID.
- **Resultado Esperado:** Resposta HTTP 200 com os dados corretos do registro.
- **Resultado Obtido:** ✅ Aprovado — Dados retornados conforme esperado.

---

### 4. `PUT /personal/{id}/` — **Atualização total**

- **Objetivo:** Testar a substituição completa dos dados de um registro existente.
- **Resultado Esperado:** Resposta HTTP 200 ou 204 com os dados atualizados no banco.
- **Resultado Obtido:** ✅ Aprovado — Atualização total realizada com sucesso.

---

### 5. `PATCH /personal/{id}/` — **Atualização parcial**

- **Objetivo:** Testar se é possível atualizar parcialmente um ou mais campos do registro.
- **Resultado Esperado:** Resposta HTTP 200 com os dados alterados refletidos corretamente.
- **Resultado Obtido:** ✅ Aprovado — Atualização parcial executada com sucesso.

---

### 6. `DELETE /personal/{id}/` — **Exclusão de registro**

- **Objetivo:** Verificar se o endpoint remove corretamente um registro existente.
- **Resultado Esperado:** Resposta HTTP 204 e remoção do recurso.
- **Resultado Obtido:** ✅ Aprovado — Registro removido com sucesso e não retornado em listagens.

---

## 🧪 Critérios de Aceitação Verificados:

- ✅ Validação de campos obrigatórios e estrutura dos dados.
- ✅ Tratamento adequado de erros e respostas com mensagens claras.
- ✅ Respostas com status HTTP apropriados para cada ação.
- ✅ Funcionalidade completa dos endpoints em ambiente controlado.
- ✅ Coerência entre os dados persistidos e os exibidos.
- ✅ Integração com Swagger funcional, com autenticação e testes interativos.

---

## 📌 Considerações Técnicas:

- Os testes foram realizados diretamente via Swagger, Postman e Front-end com autenticação válida.
- Não foram detectadas falhas de segurança ou inconsistência de dados.
- A performance dos endpoints foi considerada satisfatória.

---

## ✅ Conclusão Final:

O módulo **/personal/** foi **testado com sucesso** e cumpre todos os critérios de aceitação estabelecidos. Está apto para implantação em ambiente de homologação ou produção.
