
## Procedimentos

### 1. Procedimento gerarRelatorioMensal
**Descrição:** Gera um relatório mensal de aulas ministradas e receita total.
**Parâmetros:**
- `p_mes` INT: número do mês (1-12).
- `p_ano` INT: ano do relatório.

```sql
CREATE OR REPLACE PROCEDURE gerarRelatorioMensal(
    p_mes INT,
    p_ano INT
)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO relatorios_mensais(mes, ano, total_aulas, receita)
    SELECT p_mes, p_ano,
           COUNT(*) AS total_aulas,
           SUM(valor) AS receita
    FROM aulas_agendadas
    WHERE EXTRACT(MONTH FROM data_hora) = p_mes
      AND EXTRACT(YEAR FROM data_hora) = p_ano;
END;
$$;
