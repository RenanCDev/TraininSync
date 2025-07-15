-- Criando uma VIEW consolidada com contrato + pagamento
CREATE OR REPLACE VIEW vw_contratos_pagamentos AS
SELECT
  cs.id AS contrato_id,
  cs.aluno_id,
  s.tipoDeServico,
  cs.localidadeDesejada,
  p.metodoDePagamento,
  p.valorPago,
  p.comprovanteDePagamento
FROM Contrato_de_Servico cs
INNER JOIN Servicos s ON cs.servicoDesejado_id = s.id
LEFT JOIN Pagamento p ON cs.id = p.contrato_id;

-- Consulta usando a view
SELECT 
  pe.nome AS aluno_nome,
  pe.email,
  v.tipoDeServico,
  v.localidadeDesejada,
  v.metodoDePagamento,
  v.valorPago,
  CASE 
    WHEN v.comprovanteDePagamento THEN 'Pago'
    ELSE 'Pendente'
  END AS status_pagamento
FROM Aluno a
INNER JOIN Pessoa pe ON a.pessoa_id = pe.id
LEFT JOIN vw_contratos_pagamentos v ON a.id = v.aluno_id;
