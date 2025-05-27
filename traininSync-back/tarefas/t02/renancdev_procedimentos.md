### Procedimento 1: `registrar_feedback`

**Descrição:** Este procedimento permite que um aluno registre um feedback para o serviço prestado por um personal trainer. O feedback inclui uma nota de 1 a 5 e um comentário textual opcional.

```sql
CREATE PROCEDURE registrar_feedback (
    IN aluno_id INT,
    IN personal_id INT,
    IN avaliacao INT,
    IN comentario TEXT
)
BEGIN
    INSERT INTO feedbacks (aluno_id, personal_id, avaliacao, comentario, data_envio)
    VALUES (aluno_id, personal_id, avaliacao, comentario, NOW());
END;
```

---

### Procedimento 2: `cancelar_sessao_agendada`

**Descrição:** Este procedimento permite que um personal trainer ou aluno cancele uma sessão previamente agendada. A ação é registrada no histórico do sistema com a justificativa do cancelamento.

```sql
CREATE PROCEDURE cancelar_sessao_agendada (
    IN id_sessao INT,
    IN justificativa TEXT
)
BEGIN
    UPDATE agenda
    SET status = 'cancelada', justificativa_cancelamento = justificativa, data_cancelamento = NOW()
    WHERE id = id_sessao;
END;
```
