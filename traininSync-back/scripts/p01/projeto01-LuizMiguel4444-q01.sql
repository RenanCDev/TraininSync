SELECT
  ag.horariosAgendados,
  ag.dias,
  p.nome AS nome_personal
FROM Contrato_de_Servico cs
RIGHT JOIN Agenda ag
  ON cs.horario_id = ag.id
LEFT JOIN Personal per
  ON cs.personal_id = per.id
LEFT JOIN Pessoa p
  ON per.pessoa_id = p.id
ORDER BY ag.horariosAgendados;

-- Lista todos os horários cadastrados em Agenda