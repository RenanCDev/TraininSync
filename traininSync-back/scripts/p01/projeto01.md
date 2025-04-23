
[📌 Link para os Scripts de criação do Banco de Dados](https://github.com/RenanCDev/TraininSync/blob/dev/traininSync-back/scripts/p01/create_script.sql)

[📌 Link para os Scripts de povoamento do Banco de Dados](https://github.com/RenanCDev/TraininSync/blob/dev/traininSync-back/scripts/p01/create_script.sql)

### Modelo de dados (Entidade-Relacionamento)

```mermaid
erDiagram
    PESSOA ||--o{ PERSONAL : possui
    PESSOA ||--o{ ALUNO : possui
    PERSONAL ||--o{ CONTRATO_DE_SERVICO : oferece
    ALUNO ||--o{ CONTRATO_DE_SERVICO : contrata
    CONTRATO_DE_SERVICO ||--|| SERVICOS : inclui
    CONTRATO_DE_SERVICO ||--o{ AGENDA : agenda
    CONTRATO_DE_SERVICO ||--o{ PAGAMENTO : possui
    ALUNO ||--o{ REGISTRO_DE_PROGRESSO : tem

    PESSOA {
        int id
        string nome
        string CPF
        string email
        string telefone
        string sexo
        string estado_civil
    }

    PERSONAL {
        int id
        string CREF
        string especialidades
        string experiencia
        int agencia_bancaria
        int numero_conta
        float horarios_disponiveis
    }

    ALUNO {
        int id
        string biotipo
        float gordura
        float massa_muscular
        float altura
    }

    SERVICOS {
        int id
        string tipo
        string descricao
        float valor
    }

    CONTRATO_DE_SERVICO {
        int id
        int personal_id
        int aluno_id
        int servico_id
        string horario
        string local
    }

    AGENDA {
        int id
        float horario
        string dias
    }

    PAGAMENTO {
        int id
        int contrato_id
        string metodo
        boolean comprovante
        date data_pagamento
        float valor_pago
    }

    REGISTRO_DE_PROGRESSO {
        int id
        int aluno_id
        float gordura
        float massa_muscular
        float altura
    }
```
