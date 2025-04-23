CREATE VIEW vw_alunos_ativos AS
SELECT
  a.id         AS aluno_id,
  p.nome       AS nome_aluno,
  a.dataDoExame,
  a.peso,
  a.imc
FROM Aluno a
INNER JOIN Pessoa p
  ON a.pessoa_id = p.id
WHERE a.status = TRUE;

SELECT *
FROM vw_alunos_ativos
ORDER BY nome_aluno;

-- Lista todos os alunos com status ativo