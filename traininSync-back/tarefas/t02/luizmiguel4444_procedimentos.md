## Procedimentos

### 1. Procedimento listarAgendamentosPorAluno
**Descrição:** Gera um relatório mensal de aulas ministradas e receita total.
**Parâmetros:**
- `p_id_aluno` INTEGER: ID do aluno para consulta.
- `p_cursor` OUT REFCURSOR: cursor para retornar os dados.

```sql
CREATE OR REPLACE PROCEDURE listarAgendamentosPorAluno(
    p_id_aluno INTEGER,
    OUT p_cursor REFCURSOR
)
AS $$
BEGIN
    OPEN p_cursor FOR
    SELECT a.id AS agendamento_id,
           a.horario,
           a.servico,
           a.status
    FROM agendamentos a
    WHERE a.id_aluno = p_id_aluno
    ORDER BY a.horario;
END;
$$ LANGUAGE plpgsql;
