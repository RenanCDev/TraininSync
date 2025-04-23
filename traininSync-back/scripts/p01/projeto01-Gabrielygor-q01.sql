WITH ultimos_progresso AS (
  SELECT *,
         ROW_NUMBER() OVER (PARTITION BY aluno_id ORDER BY data DESC) AS rn
  FROM Registro_de_Progresso
)
SELECT up.aluno_id,
       p.nome       AS nome_aluno,
       up.data,
       up.peso,
       up.massaMuscular
FROM ultimos_progresso up
INNER JOIN Aluno a
  ON up.aluno_id = a.id
INNER JOIN Pessoa p
  ON a.pessoa_id = p.id
WHERE up.rn = 1;


-- Último registro de progresso de cada aluno