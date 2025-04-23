WITH servicos_contratados AS (
    SELECT 
        s.id,
        s.tiposDeServicos AS servico,
        COUNT(c.id) AS total_contratos,
        SUM(s.valoresDosServicos) AS faturamento_total
    FROM 
        Servicos s
    INNER JOIN 
        Contrato_de_servico c ON s.id = c.servicoDesejado
    GROUP BY 
        s.id, s.tiposDeServicos
)
SELECT 
    servico,
    total_contratos,
    faturamento_total
FROM 
    servicos_contratados
ORDER BY 
    total_contratos DESC;