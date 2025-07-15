WITH ContratosAtivos AS (
    SELECT 
        c.id AS contrato_id,
        a.nome AS nome_aluno,
        a.CPF AS cpf_aluno,
        s.tiposDeServicos,
        s.valoresDosServicos,
        p.nome AS nome_personal
    FROM Contrato_de_servico c
    INNER JOIN Aluno a ON c.aluno = a.id
    INNER JOIN Personal p ON c.personal = p.id
    INNER JOIN Servicos s ON c.servicoDesejado = s.id
    WHERE a.status = TRUE AND p.status = TRUE
)
SELECT * FROM ContratosAtivos;
