## Funções

### 1. Função calcularIMC
**Descrição:** Calcula o Índice de Massa Corporal (IMC) de um cliente com base em peso (kg) e altura (m).
**Parâmetros:**
- `p_peso` NUMERIC: peso do cliente em quilogramas.
- `p_altura` NUMERIC: altura do cliente em metros.

**Retorno:**
- NUMERIC: valor do IMC.

```sql
CREATE OR REPLACE FUNCTION calcularIMC(
    p_peso NUMERIC,
    p_altura NUMERIC
) RETURNS NUMERIC AS $$
BEGIN
    RETURN ROUND(p_peso / (p_altura * p_altura), 2);
END;
$$ LANGUAGE plpgsql;
