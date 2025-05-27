## Funções

### 2. Função verificarDisponibilidadeHorario
**Descrição:**
Verifica se um determinado horário está disponível para agendamento, ou seja, se não há conflitos com agendamentos existentes.

**Parâmetros:**
- `p_horario` TIMESTAMP: horário que se deseja verificar.

**Retorno:**
- BOOLEAN: `TRUE` se o horário estiver disponível, `FALSE` caso contrário.

```sql
CREATE OR REPLACE FUNCTION verificarDisponibilidadeHorario(
    p_data DATE,
    p_hora_inicio TIME,
    p_id_personal INTEGER
) RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1
        FROM agenda
        WHERE dia = p_data
          AND hora_inicio = p_hora_inicio
          AND personal_id = p_id_personal
          AND disponivel = TRUE
          AND reserva_id IS NULL
    );
END;
$$ LANGUAGE plpgsql;
