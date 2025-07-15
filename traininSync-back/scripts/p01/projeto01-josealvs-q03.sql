SELECT
    cs.id AS contrato_id,
    pa.nome AS aluno,
    pe.nome AS personal,
    s.tipoDeServico,
    pg.metodoDePagamento,
    pg.comprovanteDePagamento
FROM Contrato_de_Servico cs
INNER JOIN Aluno a ON cs.aluno_id = a.id
INNER JOIN Pessoa pa ON a.pessoa_id = pa.id
INNER JOIN Personal p ON cs.personal_id = p.id
INNER JOIN Pessoa pe ON p.pessoa_id = pe.id
LEFT JOIN Pagamento pg ON pg.contrato_id = cs.id
INNER JOIN Servicos s ON cs.servicoDesejado_id = s.id
WHERE pg.comprovanteDePagamento IS DISTINCT FROM TRUE;

-- Consulta mostra todos os contratos que ainda não possue um pagamento confirmado
-- IS DISTINCT FROM trata NULL como diferente de TRUE (melhor que !=)