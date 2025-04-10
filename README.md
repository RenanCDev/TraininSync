# Trainin Sync

## Visão Geral
Trainin Sync é uma plataforma que integra a gestão de alunos para personal trainers, abrangendo desde o controle de treinos e progresso físico até a administração financeira e incentivos gamificados. Este repositório contém a implementação do back-end, responsável pela lógica de negócio, integração com o banco de dados e disponibilização de APIs que alimentam o front-end.

## Estrutura do Projeto
O repositório está organizado de forma modular, separando claramente:
- *Lógica de negócio* – Camada responsável pelas regras e processos do sistema.
- *Integração com o banco de dados* – Módulos que gerenciam conexões e operações com o PostgreSQL.
- *APIs* – Rotas e endpoints que comunicam o back-end com o front-end.

## Como Contribuir
1. Faça um fork deste repositório.
2. Crie uma branch específica para sua alteração (`feature/nome-da-feature` ou `bugfix/nome-do-bug`).
3. Realize as modificações e adicione testes, se necessário.
4. Envie um pull request com uma descrição completa das alterações.
5. Siga as diretrizes de commit e revisão estabelecidas pela equipe.

## 📌 Projeto na Disciplina
**Título:** Trainin Sync
**Descrição:** Trainin Sync é uma plataforma que integra a gestão de alunos para personal trainers, abrangendo desde o controle de treinos e progresso físico até a administração financeira e incentivos gamificados.


| **Equipe**                              | **Função e GitHub**                                                        |
|-------------------------------------|--------------------------------------------------------------------------------|
| Arthur José dos Santos Azevedo      | [GitHub](https://github.com/arthurazvd) – Desenvolvedor Front-end              |
| Gabriel Ygor Canuto                 | [GitHub](https://github.com/gabrielygor) – Desenvolvedor Front-end             |
| José Alves dos Anjos Paiva          | [GitHub](https://github.com/josealvs) – Desenvolvedor Back-end                 |
| Luiz Miguel Santos Silva            | [GitHub](https://github.com/luizmiguel4444) – Desenvolvedor Back-end           |
| Rael Araújo Silva                   | [GitHub](https://github.com/raelaraujo0) – QA                                  |
| Renan Messias Rodrigues Alves da Costa | [GitHub](https://github.com/renancdev) – Tech Lead & Desenvolvedor Back-end |


**Repositório do Projeto:**

 Back: https://github.com/RenanCDev/TraininSync-Back-end
 Front: https://github.com/RenanCDev/TraininSync-Front-end

## 💻 Linguagem de Programação
O projeto utilizará **Python com Django** no backend e **React com TypeScript** no frontend.

A equipe possui experiência intermediária com essas tecnologias e está aprimorando suas habilidades ao longo do projeto.

## 🚀 Framework Utilizado
- **Python (Django):** Framework web robusto e escalável, ideal para aplicações seguras e bem estruturadas.
- **React com TypeScript:** Combina a flexibilidade do React com a tipagem forte do TypeScript, aumentando a segurança do código e a produtividade da equipe.

## 📚 Tutorial CRUD
Para desenvolver uma aplicação CRUD utilizando **Django** no backend e **React** com **TypeScript** no frontend, recomendo os seguintes recursos:

1. **Tutorial: Construindo uma Aplicação CRUD com Django e React**

   Este tutorial, publicado na *DEV Community*, orienta na criação de uma API REST com Django e Django Rest Framework, além de uma SPA (Single Page Application) com React para realizar operações CRUD. Embora o tutorial utilize JavaScript no frontend, os conceitos podem ser adaptados para TypeScript. [Link para o tutorial](https://dev.to/koladev/build-a-crud-application-using-django-and-react-5389)

2. **Artigo: Configuração de Produção com Django, Django-Restframework e React em TypeScript**

   Este artigo detalha a configuração de um ambiente de produção integrando Django no backend com React em TypeScript no frontend. Embora não seja um tutorial passo a passo, oferece insights valiosos sobre a integração dessas tecnologias. [Link para o artigo](https://medium.com/@Jangascodingplace/django-django-restframework-typescript-react-production-setup-7ac11de14969)

3. **Vídeo: Aprenda React e Django em 1 Hora | Para Iniciantes**

   Este vídeo apresenta um tutorial prático para iniciantes, abordando a configuração de ambos os frameworks e a construção de uma aplicação full-stack. Embora o foco seja em JavaScript, os conceitos podem ser aplicados ao uso de TypeScript.

   [![Aprenda React e Django em 1 Hora | Para Iniciantes](https://img.youtube.com/vi/xldTxXtNiuk/0.jpg)](https://www.youtube.com/watch?v=xldTxXtNiuk)

**Resumo do Conteúdo:**

- **Backend com Django:**
  - Configuração do ambiente virtual e instalação do Django.
  - Criação de um projeto e aplicação Django.
  - Definição de modelos (*models*) para representar os dados.
  - Configuração de *serializers* e *viewsets* utilizando Django Rest Framework.
  - Configuração de rotas para expor a API REST.

- **Frontend com React e TypeScript:**
  - Configuração do ambiente React com TypeScript.
  - Criação de componentes funcionais para listar, adicionar, editar e excluir itens.
  - Utilização de bibliotecas como Axios para realizar requisições HTTP para a API Django.
  - Gerenciamento de estado e efeitos colaterais com *hooks* como `useState` e `useEffect`.

Ao seguir esses recursos, você obterá uma compreensão sólida de como integrar Django com React e TypeScript para construir aplicações CRUD eficientes.

## Licença
Este projeto está licenciado sob a licença MIT.