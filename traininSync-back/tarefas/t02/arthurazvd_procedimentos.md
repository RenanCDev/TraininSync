## Procedimentos

### 1. Procedimento agendarAula
**Descrição:** Agenda uma aula para um aluno com um personal trainer em uma data e horário específicos.  
**Parâmetros:**
- `p_aluno_id` INT: ID do aluno.
- `p_personal_id` INT: ID do personal trainer.
- `p_data_hora` TIMESTAMP: data e hora da aula agendada.
- `p_duracao` INT: duração da aula em minutos.

```sql
CREATE OR REPLACE PROCEDURE agendarAula(
    p_aluno_id INT,
    p_personal_id INT,
    p_data_hora TIMESTAMP,
    p_duracao INT
)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO aulas_agendadas (aluno_id, personal_id, data_hora, duracao)
    VALUES (p_aluno_id, p_personal_id, p_data_hora, p_duracao);
END;
$$;
```

### 2. Procedimento gerarRelatorioAlunosAtivos
**Descrição:** Gera um relatório com a quantidade de alunos ativos cadastrados no sistema.  
**Parâmetros:** Nenhum parâmetro.

```sql
CREATE OR REPLACE PROCEDURE gerarRelatorioAlunosAtivos()
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO relatorios_ativos (data_geracao, total_alunos_ativos)
    SELECT NOW()::DATE,
           COUNT(*)
    FROM alunos
    WHERE status = 'ativo';
END;
$$;
```
