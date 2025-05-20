## Funções

### 1. Função pegar todos os personais
**Descrição** Retorna todos os horários disponíveis de agendamento no sistema, considerando a tabela de horários e eventuais bloqueios ou agendamentos já existentes.
**Parâmetros:**
- Nenhum

**Retorno**
- SETOF TIMESTAMP: lista de horários disponíveis para agendamento.

```sql
CREATE OR REPLACE FUNCTION pegarHorariosDisponiveis()
RETURNS SETOF TIMESTAMP AS $$
BEGIN
    RETURN QUERY
    SELECT h.horario
    FROM horarios h
    WHERE NOT EXISTS (
        SELECT 1
        FROM agendamentos a
        WHERE a.horario = h.horario
    );
END;
$$ LANGUAGE plpgsql;
