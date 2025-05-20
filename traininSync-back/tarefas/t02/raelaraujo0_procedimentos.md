### 4. Procedimento listarAlunosComContratoAtivoPorPersonal
**Descrição:**
Lista todos os alunos que possuem contratos ativos com um determinado personal. Útil para acompanhamento de clientes ativos vinculados ao profissional.

**Parâmetros:**
- `p_id_personal` INTEGER: ID do personal para a consulta.
- `p_cursor` OUT REFCURSOR: cursor para retornar os dados.

```sql
CREATE OR REPLACE PROCEDURE listarAlunosComContratoAtivoPorPersonal(
    p_id_personal INTEGER,
    OUT p_cursor REFCURSOR
)
AS $$
BEGIN
    OPEN p_cursor FOR
    SELECT a.id AS id_aluno,
           p.nome AS nome_aluno,
           s.tipo_de_servico,
           c.created_at AS data_contrato
    FROM contrato_de_servico c
    JOIN aluno a ON a.id = c.aluno_id
    JOIN pessoa p ON p.id = a.pessoa_id
    JOIN servico s ON s.id = c.servico_desejado_id
    WHERE c.personal_id = p_id_personal
      AND c.status = TRUE
    ORDER BY c.created_at DESC;
END;
$$ LANGUAGE plpgsql;
