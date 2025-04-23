CREATE OR REPLACE VIEW vw_AlunosProgresso AS
SELECT 
    a.nome AS nome_aluno,
    a.CPF AS cpf_aluno,
    r.data AS data_registro,
    r.bioimpedancia->>'peso' AS peso,
    r.bioimpedancia->>'altura' AS altura
FROM Aluno a
LEFT JOIN Registro_de_progresso r ON a.id = r.aluno;

-- Consulta à VIEW criada
SELECT * FROM vw_AlunosProgresso ORDER BY data_registro DESC;
