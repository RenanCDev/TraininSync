CREATE VIEW agendamentos_por_local AS
SELECT 
    a.localidadeDesejada,
    COUNT(a.id) AS total_agendamentos,
    SUM(CASE WHEN a.horario < CURRENT_TIMESTAMP THEN 1 ELSE 0 END) AS realizados,
    SUM(CASE WHEN a.horario >= CURRENT_TIMESTAMP THEN 1 ELSE 0 END) AS pendentes
FROM 
    Contrato_de_servico a
LEFT JOIN 
    Agenda ag ON a.horario = ag.id
WHERE 
    a.localidadeDesejada IS NOT NULL
GROUP BY 
    a.localidadeDesejada;

SELECT * FROM agendamentos_por_local;