## Funções

As funções (também conhecidas como stored functions ou procedures) são blocos de código executáveis armazenados no próprio banco de dados. Elas permitem automatizar operações, encapsular lógicas complexas e retornar resultados reutilizáveis — tudo isso com performance e integridade.

No projeto Trainin Sync, utilizamos funções para:

Simplificar consultas repetitivas

Encapsular regras de negócio diretamente no banco

Otimizar filtros de agendamento e controle de sessões

Centralizar cálculos como bioimpedância, evolução, ou total pago

As funções são escritas em PL/pgSQL, a linguagem procedural do PostgreSQL, e podem retornar valores únicos, múltiplos registros (tabelas), ou até executar ações sem retorno.

📌 Benefícios de usar funções no banco:
🔄 Reutilizáveis: chamadas por múltiplos sistemas (API, admin, relatório...)

🔐 Seguras: rodam com controle de permissões

⚡ Rápidas: evitam múltiplas chamadas da aplicação para lógica simples

📊 Ideais para relatórios e dashboards no sistema

📦 Convenções usadas neste projeto:
Todas as funções têm prefixos claros como pegar, listar, verificar, calcular, etc.

Os nomes seguem o padrão camelCase para facilitar leitura no backend

As funções são criadas com CREATE OR REPLACE FUNCTION, permitindo fácil atualização



### ✅Função: listar_servicos_do_aluno
**Descrição** Retorna todos os serviços contratados por um aluno específico, com informações detalhadas sobre o serviço, o personal responsável, e a data/hora do agendamento.
**Parâmetros:**
- aluno_id (INTEGER): ID do aluno

**Retorno**
- Tabela com:

nome do serviço

valor

data

hora

nome do personal

```sql
CREATE OR REPLACE FUNCTION listarServicosDoAluno(aluno_id INTEGER)
RETURNS TABLE (
    servico TEXT,
    valor FLOAT,
    data_agendamento DATE,
    hora_agendamento TIME,
    personal TEXT
) AS $$
BEGIN
    RETURN QUERY
    SELECT
        s.tipoDeServico,
        s.valorDoServico,
        ag.data,
        ag.hora,
        p.nome
    FROM contrato_de_servico cs
    INNER JOIN servicos s ON cs.servicoDesejado_id = s.id
    INNER JOIN agenda ag ON cs.horario_id = ag.id
    INNER JOIN personal pers ON cs.personal_id = pers.id
    INNER JOIN pessoa p ON pers.pessoa_id = p.id
    WHERE cs.aluno_id = aluno_id;
END;
$$ LANGUAGE plpgsql;
```

# Exemplo de Uso

```sql
SELECT * FROM listarServicosDoAluno(3);
```
