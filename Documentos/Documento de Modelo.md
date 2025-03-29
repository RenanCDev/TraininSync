# Documento de Modelos

Modelo conceitual UML e modelo entidade-relacionamento

## Modelo Conceitual

### Diagrama de Classe

```mermaid
classDiagram
      class Peronsal{
          +String base
          +String base()
      }
      class Pessoa{
          +String base
          +String base()
      }
      class Aluno{
          +String base
          +String base()
      }
      class Servicos{
          +String base
          +String base()
      }
      class Agenda{
          +String base
          +String base()
      }
      class Pagamento{
          +String base
          +String base()
      }
      class Registro_de_Pagamento{
          +String base
          +String base()
      }
      class Servicos_de_contrato{
          +String base
          +String base()
      }
      class Contrato_de_servico{
          +String base
          +String base()
      }
```
      

### Descrição das Entidades

Descrição breve das entidades que o sistema contém.

| Entidade | Descrição   |
|----------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| Personal   | Entidade .                                                  |
| Aluno     | Entidade . |
| Pessoa     | Entidade .                                                                   |
| Servicos   | Entidade .                                                  |
| Agenda   | Entidade .                                                  |
| Pagamento   | Entidade .                                                  |
| Registro_de_Pagamento    | Entidade .  |
| Servicos_de_contrato   | Entidade .                                                  |
| Contrato_de_servico   | Entidade .                                                  |

### Modelo de dados (Entidade-Relacionamento)

|   Tabela   | Laboratório |
| ---------- | ----------- |
| Descrição  | Armazena as informações daquela classe. |

|  Nome         | Descrição                        | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------- | -------------------------------- | ------------ | ------- | --------------------- |
| base        | identificador gerado pelo SGBD   | SERIAL       | ---     | PK / Identity |
| base         | representação em sigla do lab    | VARCHAR      | 15      | Unique / Not Null |
| base          | nome do laboratório              | VARCHAR      | 150     | Not Null |
| base     | detalhes sobre o laboratório     | VARCHAR      | 250     | --- |