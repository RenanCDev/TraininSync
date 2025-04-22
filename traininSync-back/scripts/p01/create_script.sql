-- =========================
-- Tabela: Pessoa
-- =========================
CREATE TABLE Pessoa (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    RG_CNH VARCHAR(20) UNIQUE NOT NULL,
    CPF VARCHAR(14) UNIQUE NOT NULL,
    dataDeNascimento DATE NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    numeroDeCelular VARCHAR(15) NOT NULL,
    sexo VARCHAR(50) NOT NULL,
    orientacaoSexual VARCHAR(50),
    nomeSocial VARCHAR(150),
    etnia VARCHAR(50),
    estadoCivil VARCHAR(50)
);

-- =========================
-- Tabela: Aluno
-- =========================
CREATE TABLE Aluno (
    id SERIAL PRIMARY KEY,
    pessoa_id INT REFERENCES Pessoa(id) ON DELETE CASCADE,
    status BOOLEAN NOT NULL DEFAULT TRUE,
    bioimpedancia VARCHAR(15) UNIQUE NOT NULL,
    altura FLOAT NOT NULL,
    idade INT NOT NULL,
    sexo VARCHAR(50) NOT NULL,
    dataDoExame DATE NOT NULL,
    horaDoExame TIME NOT NULL,
    aguaCorporalTotal FLOAT,
    proteinas FLOAT,
    minerais FLOAT,
    massaGordura FLOAT,
    peso FLOAT NOT NULL,
    massaMusculaEsqueletica FLOAT,
    imc FLOAT,
    pgc FLOAT,
    taxaMetabolicaBasal FLOAT
);

-- =========================
-- Tabela: Personal
-- =========================
CREATE TABLE Personal (
    id SERIAL PRIMARY KEY,
    pessoa_id INT REFERENCES Pessoa(id) ON DELETE CASCADE,
    status BOOLEAN NOT NULL DEFAULT TRUE,
    CREF VARCHAR(15) UNIQUE NOT NULL,
    especialidades VARCHAR(150) NOT NULL,
    experienciaProfissional VARCHAR(250),
    dadosBancarios VARCHAR(250),
    numeroConta VARCHAR(50),
    agencia VARCHAR(50),
    horariosDisponiveis TEXT,
    locaisDisponiveis TEXT
);

-- =========================
-- Tabela: Servicos
-- =========================
CREATE TABLE Servicos (
    id SERIAL PRIMARY KEY,
    tipoDeServico VARCHAR(150) UNIQUE NOT NULL,
    descricaoDoServico TEXT NOT NULL,
    valorDoServico FLOAT NOT NULL
);

-- =========================
-- Tabela: Agenda
-- =========================
CREATE TABLE Agenda (
    id SERIAL PRIMARY KEY,
    horariosAgendados TIME UNIQUE NOT NULL,
    dias VARCHAR(100) NOT NULL
);

-- =========================
-- Tabela: Contrato_de_Servico
-- =========================
CREATE TABLE Contrato_de_Servico (
    id SERIAL PRIMARY KEY,
    personal_id INT REFERENCES Personal(id) ON DELETE CASCADE,
    aluno_id INT REFERENCES Aluno(id) ON DELETE CASCADE,
    horario_id INT REFERENCES Agenda(id) ON DELETE SET NULL,
    servicoDesejado_id INT REFERENCES Servicos(id) ON DELETE CASCADE,
    localidadeDesejada VARCHAR(150) NOT NULL
);

-- =========================
-- Tabela: Pagamento
-- =========================
CREATE TABLE Pagamento (
    id SERIAL PRIMARY KEY,
    contrato_id INT REFERENCES Contrato_de_Servico(id) ON DELETE CASCADE,
    metodoDePagamento VARCHAR(50) NOT NULL,
    comprovanteDePagamento BOOLEAN NOT NULL DEFAULT FALSE,
    dataDePagamento DATE NOT NULL,
    horaDoPagamento TIME NOT NULL,
    valorPago FLOAT NOT NULL
);

-- =========================
-- Tabela: Registro_de_Progresso
-- =========================
CREATE TABLE Registro_de_Progresso (
    id SERIAL PRIMARY KEY,
    aluno_id INT REFERENCES Aluno(id) ON DELETE CASCADE,
    data DATE NOT NULL,
    massaGorda FLOAT,
    massaMagra FLOAT,
    massaMuscular FLOAT,
    hidratacao FLOAT,
    densidadeOssea FLOAT,
    gorduraVisceral FLOAT,
    taxaDeMetabolismoBasal FLOAT,
    altura FLOAT NOT NULL,
    peso FLOAT NOT NULL
);

-- =========================
-- Tabela: Servicos_de_Contrato
-- =========================
CREATE TABLE Servicos_de_Contrato (
    servico SERIAL PRIMARY KEY,
    contrato VARCHAR(15) UNIQUE NOT NULL
);
