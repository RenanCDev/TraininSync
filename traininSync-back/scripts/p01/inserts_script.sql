-- Inserção: Pessoa
INSERT INTO Pessoa (nome, RG_CNH, CPF, dataDeNascimento, email, numeroDeCelular, sexo, orientacaoSexual, nomeSocial, etnia, estadoCivil)
VALUES
('João Silva', 'MG1234567', '111.111.111-11', '1990-05-20', 'joao@email.com', '31988887777', 'Masculino', 'Heterossexual', NULL, 'Branco', 'Solteiro'),
('Maria Oliveira', 'MG2345678', '222.222.222-22', '1985-11-15', 'maria@email.com', '31988886666', 'Feminino', 'Heterossexual', NULL, 'Parda', 'Casada'),
('Carlos Pereira', 'MG3456789', '333.333.333-33', '1992-03-10', 'carlos@email.com', '31977775555', 'Masculino', 'Heterossexual', NULL, 'Preto', 'Solteiro'),
('Ana Costa', 'MG4567890', '444.444.444-44', '1988-07-22', 'ana@email.com', '31977776666', 'Feminino', 'Heterossexual', NULL, 'Branco', 'Casada'),
('Lucas Mendes', 'MG5678901', '555.555.555-55', '1995-02-17', 'lucas@email.com', '31999998888', 'Masculino', 'Heterossexual', NULL, 'Pardo', 'Solteiro'),
('Patrícia Rocha', 'MG6789012', '666.666.666-66', '1993-09-12', 'patricia@email.com', '31999997777', 'Feminino', 'Heterossexual', NULL, 'Branco', 'Solteira'),
('Fernanda Souza', 'MG7890123', '777.777.777-77', '1991-06-28', 'fernanda@email.com', '31911112222', 'Feminino', 'Heterossexual', NULL, 'Indígena', 'Casada'),
('Gabriel Lima', 'MG8901234', '888.888.888-88', '1994-12-04', 'gabriel@email.com', '31911113333', 'Masculino', 'Heterossexual', NULL, 'Branco', 'Solteiro'),
('Juliana Martins', 'MG9012345', '999.999.999-99', '1987-01-09', 'juliana@email.com', '31922224444', 'Feminino', 'Heterossexual', NULL, 'Negro', 'Viúva'),
('Renato Braga', 'MG0123456', '000.000.000-00', '1996-04-03', 'renato@email.com', '31933335555', 'Masculino', 'Heterossexual', NULL, 'Pardo', 'Solteiro');

-- Inserção: Aluno (ID de Pessoa: 1–5)
INSERT INTO Aluno (pessoa_id, status, bioimpedancia, altura, idade, sexo, dataDoExame, horaDoExame, aguaCorporalTotal, proteinas, minerais, massaGordura, peso, massaMusculaEsqueletica, imc, pgc, taxaMetabolicaBasal)
VALUES
(1, TRUE, 'BIA001', 1.75, 34, 'Masculino', '2024-01-01', '09:00', 60.0, 15.2, 4.8, 18.5, 72.0, 30.1, 23.5, 18.2, 1600),
(2, TRUE, 'BIA002', 1.60, 38, 'Feminino', '2024-01-05', '10:00', 55.0, 13.0, 4.5, 22.0, 62.0, 25.0, 24.2, 25.0, 1500),
(3, TRUE, 'BIA003', 1.82, 31, 'Masculino', '2024-01-10', '11:00', 62.0, 16.0, 5.0, 19.8, 78.0, 32.2, 23.5, 19.9, 1650),
(4, TRUE, 'BIA004', 1.65, 35, 'Feminino', '2024-01-15', '08:30', 58.0, 14.2, 4.6, 21.0, 65.0, 26.8, 23.9, 24.0, 1550),
(5, TRUE, 'BIA005', 1.78, 29, 'Masculino', '2024-01-20', '09:15', 59.0, 15.5, 4.9, 20.5, 75.0, 30.0, 23.7, 20.0, 1620),
(6, TRUE, 'BIA006', 1.62, 30, 'Feminino', '2024-01-25', '07:45', 56.0, 13.8, 4.4, 23.0, 63.0, 25.5, 24.0, 26.1, 1490),
(7, TRUE, 'BIA007', 1.70, 33, 'Feminino', '2024-01-30', '10:30', 57.5, 14.0, 4.5, 22.0, 67.0, 27.0, 23.2, 24.7, 1520),
(8, TRUE, 'BIA008', 1.80, 28, 'Masculino', '2024-02-02', '11:45', 61.0, 15.8, 4.9, 18.8, 74.0, 31.0, 22.8, 18.5, 1630),
(9, TRUE, 'BIA009', 1.58, 36, 'Feminino', '2024-02-05', '09:00', 54.0, 12.7, 4.3, 23.5, 61.0, 24.2, 24.5, 26.5, 1480),
(10, TRUE, 'BIA010', 1.75, 27, 'Masculino', '2024-02-10', '08:15', 60.5, 15.1, 4.8, 19.5, 73.0, 29.9, 23.8, 19.1, 1610);

-- Inserção: Personal (ID de Pessoa: 6–10)
INSERT INTO Personal (pessoa_id, status, CREF, especialidades, experienciaProfissional, dadosBancarios, numeroConta, agencia, horariosDisponiveis, locaisDisponiveis)
VALUES
(6, TRUE, 'CREF001', 'Musculação', '5 anos', 'Banco X', '12345-6', '0001', '08:00–12:00', 'Academia A'),
(7, TRUE, 'CREF002', 'Funcional', '7 anos', 'Banco Y', '23456-7', '0002', '13:00–17:00', 'Academia B'),
(8, TRUE, 'CREF003', 'HIIT', '6 anos', 'Banco Z', '34567-8', '0003', '14:00–18:00', 'Academia C'),
(9, TRUE, 'CREF004', 'Pilates', '10 anos', 'Banco X', '45678-9', '0004', '09:00–13:00', 'Academia D'),
(10, TRUE, 'CREF005', 'Crossfit', '4 anos', 'Banco Y', '56789-0', '0005', '15:00–19:00', 'Academia E');

-- Inserção: Servicos
INSERT INTO Servicos (tipoDeServico, descricaoDoServico, valorDoServico)
VALUES
('Musculação', 'Treinamento com pesos e aparelhos.', 120.0),
('Funcional', 'Treinamento com peso corporal e acessórios.', 100.0),
('HIIT', 'Treinamento de alta intensidade.', 130.0),
('Pilates', 'Exercícios com bola e cama elástica.', 150.0),
('Crossfit', 'Treino de alta intensidade com pesos.', 140.0),
('Yoga', 'Aulas de yoga para flexibilidade.', 110.0),
('Alongamento', 'Aulas específicas para alongamento.', 90.0),
('Treino em Casa', 'Treinamento personalizado em casa.', 160.0),
('Boxe', 'Treinamento de boxe e defesa pessoal.', 170.0),
('Reabilitação', 'Treinos para recuperação física.', 180.0);

-- Inserção: Agenda
INSERT INTO Agenda (horariosAgendados, dias)
VALUES
('08:00', 'Segunda'),
('09:00', 'Terça'),
('10:00', 'Quarta'),
('11:00', 'Quinta'),
('12:00', 'Sexta'),
('13:00', 'Sábado'),
('14:00', 'Domingo'),
('15:00', 'Segunda'),
('16:00', 'Terça'),
('17:00', 'Quarta');

-- Inserção: Contrato_de_Servico
INSERT INTO Contrato_de_Servico (personal_id, aluno_id, horario_id, servicoDesejado_id, localidadeDesejada)
VALUES
(6, 1, 1, 1, 'Academia A'),
(7, 2, 2, 2, 'Academia B'),
(8, 3, 3, 3, 'Academia C'),
(9, 4, 4, 4, 'Academia D'),
(10, 5, 5, 5, 'Academia E'),
(6, 6, 6, 6, 'Residência X'),
(7, 7, 7, 7, 'Residência Y'),
(8, 8, 8, 8, 'Residência Z'),
(9, 9, 9, 9, 'Boxe Arena'),
(10, 10, 10, 10, 'Clínica R');

-- Inserção: Pagamento
INSERT INTO Pagamento (contrato_id, metodoDePagamento, comprovanteDePagamento, dataDePagamento, horaDoPagamento, valorPago)
VALUES
(1, 'PIX', TRUE, '2024-03-01', '10:00', 120.0),
(2, 'Cartão', TRUE, '2024-03-02', '11:00', 100.0),
(3, 'Boleto', FALSE, '2024-03-03', '09:30', 130.0),
(4, 'PIX', TRUE, '2024-03-04', '08:45', 150.0),
(5, 'Cartão', TRUE, '2024-03-05', '12:00', 140.0),
(6, 'PIX', TRUE, '2024-03-06', '13:15', 110.0),
(7, 'Cartão', FALSE, '2024-03-07', '14:00', 90.0),
(8, 'Boleto', TRUE, '2024-03-08', '15:00', 160.0),
(9, 'PIX', TRUE, '2024-03-09', '16:00', 170.0),
(10, 'Cartão', TRUE, '2024-03-10', '17:00', 180.0);

-- Inserção: Registro_de_Progresso
INSERT INTO Registro_de_Progresso (aluno_id, data, massaGorda, massaMagra, massaMuscular, hidratacao, densidadeOssea, gorduraVisceral, taxaDeMetabolismoBasal, altura, peso)
VALUES
(1, '2024-03-01', 18.0, 54.0, 30.0, 60.0, 3.2, 10.0, 1600, 1.75, 72),
(2, '2024-03-01', 20.0, 42.0, 25.0, 55.0, 2.8, 12.0, 1500, 1.60, 62),
(3, '2024-03-02', 19.5, 58.0, 32.0, 62.0, 3.5, 11.0, 1650, 1.82, 78),
(4, '2024-03-02', 21.0, 44.0, 26.5, 58.0, 2.9, 13.0, 1550, 1.65, 65),
(5, '2024-03-03', 19.0, 56.0, 30.5, 61.0, 3.4, 10.5, 1620, 1.78, 75),
(6, '2024-03-03', 22.0, 41.0, 24.5, 57.0, 2.7, 14.0, 1490, 1.62, 63),
(7, '2024-03-04', 21.5, 43.5, 27.0, 59.0, 3.0, 13.5, 1520, 1.70, 67),
(8, '2024-03-04', 18.2, 55.5, 31.0, 63.0, 3.3, 10.2, 1630, 1.80, 74),
(9, '2024-03-05', 23.0, 40.0, 24.0, 54.0, 2.6, 14.5, 1480, 1.58, 61),
(10, '2024-03-06', 18.8, 53.0, 29.9, 60.5, 3.1, 10.8, 1610, 1.75, 73);

-- Inserção: Servicos_de_Contrato
INSERT INTO Servicos_de_Contrato (contrato)
VALUES
('CT001'),
('CT002'),
('CT003'),
('CT004'),
('CT005'),
('CT006'),
('CT007'),
('CT008'),
('CT009'),
('CT010');
