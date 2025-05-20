## Procedimentos
Os procedimentos armazenados são blocos de instruções SQL que ficam salvos no banco de dados e podem ser executados sob demanda. Eles são especialmente úteis quando precisamos realizar operações complexas, multi-etapas ou com controle transacional diretamente no backend do PostgreSQL.

Ao contrário das funções (FUNCTION), os procedimentos (PROCEDURE) não retornam valores diretamente, mas podem:

Retornar dados via cursos (OUT REFCURSOR)

Executar comandos de inserção, atualização e deleção

Controlar transações completas (COMMIT, ROLLBACK)

Ser chamados por eventos externos (jobs, triggers, ou APIs)

### 🎯 Por que usamos procedimentos no Trainin Sync?
No contexto da aplicação Trainin Sync, usamos procedimentos para:

Gerar relatórios customizados para alunos e personais

Consultar sessões e agendamentos com lógica detalhada

Automatizar tarefas administrativas

Oferecer dados prontos para dashboards


### ✅ Procedimento: listarAgendamentosDoPersonal
**Descrição:** Retorna todos os agendamentos futuros de um personal específico, incluindo:

o nome do aluno,

o tipo de serviço contratado,

a data e hora do agendamento,

e o local desejado.

Ideal para o dashboard do personal ou geração de relatórios operacionais.


**Parâmetros:**
`p_id_personal INTEGER`: ID do personal a ser consultado

`p_cursor OUT REFCURSOR`: cursor de saída com os agendamentos encontrados

```sql
CREATE OR REPLACE PROCEDURE listarAgendamentosDoPersonal(
    p_id_personal INTEGER,
    OUT p_cursor REFCURSOR
)
AS $$
BEGIN
    OPEN p_cursor FOR
    SELECT
        ag.data AS data_agendada,
        ag.hora AS hora_agendada,
        alunop.nome AS nome_aluno,
        serv.tipoDeServico AS servico,
        cs.localidadeDesejada AS local,
        cs.id AS contrato_id
    FROM contrato_de_servico cs
    INNER JOIN agenda ag ON cs.horario_id = ag.id
    INNER JOIN servicos serv ON cs.servicoDesejado_id = serv.id
    INNER JOIN aluno a ON cs.aluno_id = a.id
    INNER JOIN pessoa alunop ON a.pessoa_id = alunop.id
    WHERE cs.personal_id = p_id_personal
      AND ag.data >= CURRENT_DATE
    ORDER BY ag.data, ag.hora;
END;
$$ LANGUAGE plpgsql;
```

### ✅ Exemplo de execução:

```sql
BEGIN;
CALL listarAgendamentosDoPersonal(2, 'agenda_cursor');
FETCH ALL FROM agenda_cursor;
COMMIT;
```
