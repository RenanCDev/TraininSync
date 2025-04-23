-- Criando uma visão para facilitar reutilização
CREATE OR REPLACE VIEW V_ContratosDetalhados AS
SELECT 
  cs.personal_id,
  cs.aluno_id,
  s.tipoDeServico,
  s.valorDoServico
FROM Contrato_de_Servico cs
INNER JOIN Servicos s ON cs.servicoDesejado_id = s.id;

-- Consulta final com LEFT JOIN para incluir todos os Personais, mesmo os sem alunos
SELECT 
  p.nome AS nome_personal,
  pe.CREF,
  COUNT(vcd.aluno_id) AS total_alunos,
  GROUP_CONCAT(DISTINCT vcd.tipoDeServico SEPARATOR ', ') AS servicos_contratados
FROM Personal pe
INNER JOIN Pessoa p ON pe.pessoa_id = p.id
LEFT JOIN V_ContratosDetalhados vcd ON pe.id = vcd.personal_id
GROUP BY pe.id, p.nome, pe.CREF
ORDER BY total_alunos DESC;
