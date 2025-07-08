# ✅ Relatório de Testes de Aceitação — Módulo **Serviço**

## 📅 Data de Teste: 04/07/2025

## 👤 Responsável: Arthur José dos Santos Azevêdo

---

## 🧩 Recurso Testado: **/servico/**

### Descrição Geral:

Este módulo é responsável pelo gerenciamento de dados relacionados ao modelo **Serviço**, incluindo a criação e consulta de serviços oferecidos. Os testes visam validar o correto funcionamento das operações básicas do modelo.

---

## 🔍 Funcionalidades Testadas Detalhadamente:

### 1. **Criação de Serviço**

- **Objetivo:** Verificar se uma instância do modelo `Servico` pode ser criada com sucesso.
- **Dados Utilizados:** tipo de serviço, descrição e valor.
- **Resultado Esperado:** Serviço criado corretamente com os dados persistidos no banco.
- **Resultado Obtido:** ✅ Aprovado — Instância criada com os valores esperados.

---

### 2. **Consulta de Serviço**

- **Objetivo:** Validar se é possível recuperar um serviço previamente cadastrado utilizando filtros.
- **Operação Realizada:** Consulta por `tipo_de_servico` com valor "Treino Personalizado".
- **Resultado Esperado:** Serviço localizado corretamente no banco de dados.
- **Resultado Obtido:** ✅ Aprovado — Consulta retornou o serviço correspondente ao criado.

---

## 🧪 Critérios de Aceitação Verificados:

- ✅ Persistência de dados ao criar novos serviços.
- ✅ Capacidade de consulta com filtros específicos.
- ✅ Dados consistentes entre criação e recuperação.
- ✅ Execução sem falhas em ambiente de testes.
- ✅ Cobertura de testes automatizados via `TestCase` do Django.

---

## 📌 Considerações Técnicas:

- Os testes foram implementados utilizando o framework de testes padrão do Django (`unittest` com `TestCase`).
- O banco de dados de teste foi utilizado para garantir isolamento do ambiente real.
- Os testes cobrem os comportamentos fundamentais do modelo `Servico`, garantindo que os dados são salvos e consultados corretamente.

---

## ✅ Conclusão Final:

O módulo **/servico/** foi **testado com sucesso** por Arthur José dos Santos Azevêdo e cumpre os critérios de aceitação estabelecidos. Está pronto para ser integrado aos ambientes de homologação ou produção.
