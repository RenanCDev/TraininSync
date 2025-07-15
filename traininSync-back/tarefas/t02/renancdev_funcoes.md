### Função 1: `calcular_percentual_gordura`

**Descrição:** Esta função estima o percentual de gordura corporal de um aluno com base em medidas antropométricas. É utilizada por personal trainers para avaliar a composição corporal e evolução do aluno.

```sql
CREATE FUNCTION calcular_percentual_gordura (
    medida_abdomen DECIMAL(5,2),
    medida_pescoco DECIMAL(5,2),
    altura DECIMAL(5,2)
)
RETURNS DECIMAL(5,2)
BEGIN
    DECLARE percentual DECIMAL(5,2);
    SET percentual = (86.010 * LOG10(medida_abdomen - medida_pescoco)) - (70.041 * LOG10(altura)) + 36.76;
    RETURN ROUND(percentual, 2);
END;
```

---

### Função 2: `media_avaliacoes_personal`

**Descrição:** Esta função calcula a média das avaliações recebidas por um personal trainer. Isso ajuda a mensurar a qualidade do atendimento oferecido e serve de base para recomendações no sistema.

```sql
CREATE FUNCTION media_avaliacoes_personal (id_personal INT)
RETURNS DECIMAL(3,2)
BEGIN
    DECLARE media DECIMAL(3,2);
    SELECT AVG(avaliacao) INTO media
    FROM feedbacks
    WHERE personal_id = id_personal;
    RETURN ROUND(media, 2);
END;
```
