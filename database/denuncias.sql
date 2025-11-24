-- Tabela de numeros_risco
CREATE TABLE numeros_risco (
  id SERIAL PRIMARY KEY,
  numero_telefone VARCHAR(15) UNIQUE NOT NULL,
  quantidade_denuncias INT DEFAULT 1,
  risco VARCHAR(10) DEFAULT 'baixo',
  ultima_denuncia TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de denuncias
CREATE TABLE denuncias (
  id SERIAL PRIMARY KEY,
  numero_telefone VARCHAR(15) NOT NULL,
  instituicao VARCHAR(100),
  descricao TEXT,
  regiao VARCHAR(100),
  data_denuncia TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(10) DEFAULT 'ativa',
  numero_risco_id INT,
  CONSTRAINT fk_numero_risco
    FOREIGN KEY (numero_risco_id)
    REFERENCES numeros_risco(id)
);

-- Tabela de usuarios
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  senha_hash VARCHAR(255)
);
