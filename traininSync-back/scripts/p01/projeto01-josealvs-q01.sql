WITH ultimo_progresso AS (
    SELECT DISTINCT ON (aluno_id)
        aluno_id,
        data,
        massaMuscular,
        massaGorda,
        peso,
        altura
    FROM Registro_de_Progresso
    ORDER BY aluno_id, data DESC
)
SELECT
    a.id AS aluno_id,
    p.nome AS nome_aluno,
    up.data,
    up.massaMuscular,
    up.massaGorda,
    up.peso,
    up.altura
FROM Aluno a
RIGHT JOIN Pessoa p ON a.pessoa_id = p.id
LEFT JOIN ultimo_progresso up ON a.id = up.aluno_id
ORDER BY p.nome;


--Lista todos os alunos, mesmo que esses alunos ainda não tenham registro de progresso 

