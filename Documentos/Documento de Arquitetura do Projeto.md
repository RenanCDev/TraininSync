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
