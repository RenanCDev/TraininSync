## Funções

### 1. Função calcularIdade
**Descrição:** Calcula a idade atual de um cliente com base na data de nascimento informada. Essa função é útil para personal trainers ajustarem treinos e planos alimentares conforme a faixa etária do aluno.
**Parâmetros:**
- `p_data_nascimento` DATE: data de nascimento do cliente.

**Retorno:**
- INTEGER: idade em anos.

```sql
CREATE OR REPLACE FUNCTION calcularIdade(
    p_data_nascimento DATE
) RETURNS INTEGER AS $$
BEGIN
    RETURN DATE_PART('year', AGE(CURRENT_DATE, p_data_nascimento));
END;
$$ LANGUAGE plpgsql;
```

---

### 2. Função calcularTMB
**Descrição:** Calcula a Taxa de Metabolismo Basal (TMB) com base no sexo, peso, altura e idade. Isso ajuda o personal a entender quantas calorias o cliente gasta em repouso.
**Parâmetros:**
- `p_sexo` CHAR: 'M' para masculino, 'F' para feminino.
- `p_peso` NUMERIC: peso em kg.
- `p_altura` NUMERIC: altura em cm.
- `p_idade` INTEGER: idade em anos.

**Retorno:**
- NUMERIC: valor da TMB.

```sql
CREATE OR REPLACE FUNCTION calcularTMB(
    p_sexo CHAR,
    p_peso NUMERIC,
    p_altura NUMERIC,
    p_idade INTEGER
) RETURNS NUMERIC AS $$
BEGIN
    IF p_sexo = 'M' THEN
        RETURN ROUND(88.36 + (13.4 * p_peso) + (4.8 * p_altura) - (5.7 * p_idade), 2);
    ELSIF p_sexo = 'F' THEN
        RETURN ROUND(447.6 + (9.2 * p_peso) + (3.1 * p_altura) - (4.3 * p_idade), 2);
    ELSE
        RAISE EXCEPTION 'Sexo inválido. Use "M" ou "F".';
    END IF;
END;
$$ LANGUAGE plpgsql;
```
