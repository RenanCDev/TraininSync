CREATE OR REPLACE VIEW vw_contratos_detalhados AS
SELECT
    cs.id AS contrato_id,
    pa.nome AS nome_aluno,
    pe.nome AS nome_personal,
    s.tipoDeServico,
    ag.dias,
    ag.horariosAgendados,
    cs.localidadeDesejada
FROM Contrato_de_Servico cs
INNER JOIN Aluno a ON cs.aluno_id = a.id
INNER JOIN Pessoa pa ON a.pessoa_id = pa.id
INNER JOIN Personal p ON cs.personal_id = p.id
INNER JOIN Pessoa pe ON p.pessoa_id = pe.id
LEFT JOIN Agenda ag ON cs.horario_id = ag.id
LEFT JOIN Servicos s ON cs.servicoDesejado_id = s.id;

-- Aqui eu crio uma view persistente, com os detalhes mais importantes
-- de cada contrato entre aluno e personal, facilitando assim possíveis
-- futuras consultas como: SELECT * FROM vw_contratos_detalhados WHERE dias = 'Segunda';
