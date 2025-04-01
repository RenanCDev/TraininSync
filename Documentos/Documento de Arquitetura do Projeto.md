# Projeto Arquitetural do Software

Documento construído a partido do **Modelo BSI - Doc 005 - Documento de Projeto Arquitetual do Software** que pode ser encontrado no
link:https://docs.google.com/document/d/1i80vPaInPi5lSpI7rk4QExnO86iEmrsHBfmYRy6RDSM/edit?usp=sharing

## Descrição da Arquitetura do Projeto

A arquitetura do projeto segue um **modelo monolítico** baseado no **Django Framework** para o backend e **React com TypeScript** para o frontend. O sistema é estruturado como uma aplicação cliente-servidor que utiliza APIs REST para a comunicação entre o frontend e o backend.  

**Estrutura Geral:**  
- **Frontend:** Implementado com **React e TypeScript**, responsável por consumir as APIs REST e fornecer a interface do usuário.  
- **Backend:** Construído em **Django**, utilizando um padrão **MVC (Model-View-Controller)**, com **Serializers do Django Rest Framework (DRF)** para transformar os dados em JSON.  
- **Banco de Dados:** Suporte para **PostgreSQL e MySQL**, utilizando o **ORM do Django** para abstração do banco.  
- **Serviços:** Camada intermediária que centraliza a lógica de negócio e orquestra a comunicação entre as views e o ORM.  

**Cloud e Infraestrutura:**  
   - Pode ser hospedado em provedores como **AWS, Azure ou Google Cloud**, utilizando serviços como **Elastic Beanstalk ou Kubernetes** para gerenciar a escalabilidade.  

**Conexão com outros módulos e sistemas:**  
   - A API REST pode ser consumida por diferentes clientes, incluindo aplicações web e móveis.  
   - Possível integração com sistemas externos via **APIs de terceiros, webhooks ou mensagens assíncronas** (ex: RabbitMQ, Kafka).  

A estrutura do projeto permite futuras migrações para um modelo **baseado em microsserviços**, caso haja necessidade de modularização e escalabilidade mais granular.  

## Visão Geral da Arquitetura

Imagem com a organização geral dos componentes da arquitetura do projeto. Segue um exemplo da **Arquitetura Geral** de um Projeto usando **Django Framework** Integrado a um Frontend com **React e TypeScript**:

![Arquitetura Django Projeto](../Imagens/arquiteturaproj.png)

## Requisitos Não-Funcionais  

| **Requisito**        | **Detalhes** |
|----------------------|-------------|
| **Desempenho**       | 1. A página principal deve carregar em no máximo **3 segundos**.<br /> 2. Consultas ao banco de dados devem responder em até **2 segundos**.<br /> 3. O sistema deve suportar múltiplas conexões simultâneas sem perda significativa de desempenho. |
| **Interoperabilidade** | 1. O sistema deve rodar em **Linux** e ser distribuído via **Docker**.<br /> 2. O banco de dados será **PostgreSQL 16** ou **MySQL 8**. |
| **Escalabilidade**   | 1. O sistema deve permitir expansão para suportar mais usuários quando necessário.<br /> 2. O backend deve permitir a adição de novos serviços sem grandes mudanças na arquitetura. |
| **Disponibilidade**  | 1. O sistema deve ficar disponível **99% do tempo**, com possíveis manutenções agendadas.<br /> 2. Deve haver um **backup periódico** dos dados. |
| **Usabilidade**      | 1. O frontend deve ser **responsivo**, funcionando bem em celulares, tablets e desktops.<br /> 2. A interface deve ser intuitiva e de fácil navegação. |
| **Segurança**        | 1. O sistema deve utilizar **HTTPS** para comunicação segura.<br /> 2. Implementação de um sistema de **autenticação segura** com usuários e senhas criptografadas. |
| **Manutenção**       | 1. Atualizações e correções devem ser feitas sem impacto significativo para os usuários.<br /> 2. O código deve ser organizado para facilitar futuras modificações. |

## Mecanismos Arquiteturais  

Nesta seção, listamos os principais mecanismos arquiteturais do sistema para garantir uma implementação viável dentro do contexto acadêmico.  

| **Mecanismo de Análise** | **Mecanismo de Design**         | **Mecanismo de Implementação**    |
|-------------------------|--------------------------------|----------------------------------|
| **Persistência**       | Banco de dados relacional      | PostgreSQL 16 / SQLite (para testes) |
| **Camada de Dados**    | Mapeamento OR                  | Django ORM |
| **Frontend**          | Interface do Usuário           | React com TypeScript, CSS Modules |
| **Backend**           | API REST                       | Django REST Framework (DRF) |
| **Autenticação**      | Login com senha                | Django Authentication padrão |
| **Build**            | Execução local                  | Ambiente virtual com venv (Python) |
| **Deploy**           | Hospedagem simples              | Render, Railway ou Heroku (gratuito) |
| **Infraestrutura**   | Ambiente de desenvolvimento     | Docker (Opcional), rodando localmente |
| **Cache**           | Melhorar desempenho              | Uso de cache básico com Django |
