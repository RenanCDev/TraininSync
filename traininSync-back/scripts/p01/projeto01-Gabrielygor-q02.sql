WITH receita_por_metodo AS (
  SELECT metodoDePagamento,
         SUM(valorPago) AS total_recebido
  FROM Pagamento
  GROUP BY metodoDePagamento
)
SELECT *
FROM receita_por_metodo
ORDER BY total_recebido DESC;


-- Último registro de progresso de cada aluno