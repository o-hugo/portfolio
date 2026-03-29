# Data Science & Engenharia de Dados - Portfolio

> Bem-vindo ao meu repositório de projetos em **Engenharia de Dados** e **Ciência de Dados**. Aqui você encontrará soluções reais para problemas de ETL, análise exploratória, limpeza de dados e insights baseados em dados.

---

## 👋 Sobre Mim

Sou **bacharelando em Estatística** na Universidade Federal do Amazonas - **UFAM**, apaixonado por transformar dados brutos em insights acionáveis, com isso trabalho na divulgação da importância da estatística e análise de dados para tomadas de decisão baseadas em evidência.

### 📚 Formação Acadêmica
- **Bacharelando em Estatística** (em andamento)
- **Vice-Presidente do Centro Acadêmico de Estatística** (2025)
- Formação contínua em ferramentas de dados e análise

### 🎯 Interesses Profissionais
- ✅ Engenharia de Dados (ETL, pipelines, qualidade de dados)
- ✅ Ciência de Dados (análise exploratória, modelagem, insights)
- ✅ Business Intelligence (dashboards, relatórios, visualização)
- ✅ Python, SQL e ferramentas de Big Data
- ✅ Anonimização e privacidade de dados (LGPD/GDPR)

---

## 🛠️ Habilidades Técnicas

### Linguagens de Programação
- **Python** (Pandas, NumPy, DuckDB, Matplotlib, Seaborn)
- **SQL** (DuckDB, PostgreSQL, queries otimizadas)
- **R** (análise estatística, ggplot2)

### Ferramentas & Tecnologias
- **Processamento de Dados**: Pandas, DuckDB
- **Visualização**: Matplotlib, Seaborn, Plotly
- **Estatística**: análise exploratória, testes de hipótese, regressão
- **Versionamento**: Git/GitHub
- **Notebooks**: Jupyter, Google Colab

### Methodologias
- ✅ ETL (Extração, Transformação, Carga)
- ✅ Data Cleaning & Validation
- ✅ Exploratory Data Analysis (EDA)
- ✅ Boas práticas em qualidade de dados

---

## 📁 Estrutura do Repositório

```
data-science-portfolio/
│
├── 📓 01_SQL_Python_ETL.ipynb
│   └── ETL de dados médicos: extração, transformação e limpeza
│
├── 02_Python_Sklearn_Classification.ipynb
│   └── Classificação e previsão de evasão e permanência de alunos baseados em dados comportamentais
│
├── 03_Dashboard_BI_[PROJECT_NAME]/ (em desenvolvimento)
│   └── Visualizações interativas
│
└── README.md (você está aqui)
```

---

## 🔍 Detalhamento dos Projetos

### 📌 Projeto 01: ETL de Dados Médicos - Extração, Transformação e Limpeza

**Nome do arquivo**: `01_SQL_Python_ETL.ipynb`

#### O Que Faz?
Pipeline completo de ETL para consolidar dados de múltiplos arquivos Excel, aplicando filtros inteligentes e removendo duplicatas.

#### Dataset
- **Estrutura Original**: 57 arquivos Excel com dados de registros médicos
- **Registros Iniciais**: ~1.138 registros brutos
- **Registros Finais**: 307 registros únicos e limpos

#### Processo de Anonimização

Todos os dados foram **completamente anonimizados** para garantir privacidade:

| Campo Original | Método de Anonimização | Exemplo |
|---|---|---|
| **Nomes completos** | ✅ Substituído por ID numérico | `João Silva` → `PAT_01_042` |
| **Data de nascimento** | ✅ Convertida para faixa etária | `1979-09-11` → `71-80` |
| **Número de prontuário** | ✅ Mascarado com padrão genérico | `1015361-00` → `PRN_3542187` |
| **Dados de localização** | ✅ Removidos | Removido |
| **Informações de contato** | ✅ Removidas | Removido |

> ⚠️ **Nota de Segurança**: Este é um dataset **sintético** criado para fins de portfólio. A estrutura e o processo de limpeza replicam um caso real, mas todos os dados foram gerados sinteticamente para garantir 100% de anonimidade.

#### Tecnologias Utilizadas
- 🐍 **Python**: automação e orquestração
- 🔍 **DuckDB**: consultas SQL eficientes
- 📊 **Pandas**: manipulação de DataFrames
- 📝 **Regex**: filtering avançado

#### Etapas do Pipeline

| Etapa | Ação | Entrada | Saída |
|-------|------|---------|-------|
| 1 | Extração | Leitura de 57 arquivos Excel | 1.138 registros brutos (1.107 após inserção proposital de duplicatas para demo) [file:1] |
| 2 | Consolidação | Junção em DataFrame único via Pandas | 1 DataFrame consolidado com todos os registros [file:1] |
| 3 | Filtro Inicial | Apenas registros com NEWCASESCOUNT = 0 (SQL DuckDB) | 764 registros filtrados [file:1] |
| 4 | Filtro Diagnóstico | Regex para LL*LM*ALLC/LMC (SQL DuckDB: regexp_matches(DIAGNOSIS, ?iLLALMALLCLMC)) | 389 registros com diagnósticos alvo (LLA, LMA, LLC, LMC e variações) [file:1] |
| 5 | Detecção Duplicatas | Identificação por PATIENTID duplicado (SQL DuckDB com GROUP BY/HAVING) | 14 registros duplicados encontrados (de 23 duplicatas totais inseridas) [file:1] |
| 6 | Deduplicação | ROW_NUMBER() OVER (PARTITION BY PATIENTID ORDER BY RECORDDATE) = 1 (SQL DuckDB) | 382 registros únicos (remoção de 7 duplicatas nos diagnósticos alvo) [file:1] |
| 7 | Validação | Verificação de integridade final (tipos, nulos, distribuição) | 382 registros válidos e limpos [file:1] |
| 8 | Exportação | Salvar em CSV e Excel via Pandas | healthcaredatacleaned.csv e .xlsx (382 registros prontos para análise) [file:1] |

#### Análises Incluídas
- 📊 Distribuição de diagnósticos
- 👥 Distribuição por faixa etária
- 🏥 Relação diagnóstico vs. tipo de convênio
- 🔍 Identificação e remoção de duplicatas

#### Insights Gerados
- ✅ Contagem e proporção de cada diagnóstico
- ✅ Taxa de duplicação entre arquivos
- ✅ Distribuição etária dos pacientes
- ✅ Cobertura por tipo de convênio

#### Output
- 📊 `healthcare_data_cleaned.csv`
- 📈 `healthcare_data_cleaned.xlsx`

---

## 🚀 Como Usar Este Repositório

### Pré-requisitos
```bash
Python 3.8+
pip install pandas duckdb jupyter numpy
```

### Rodando os Notebooks
```bash
jupyter notebook 01_SQL_Python_ETL.ipynb
```

### Estrutura de Dados de Entrada
Os projetos esperam arquivos no formato:
- 📁 `data/` - pasta com arquivos .xls
- 📝 Colunas esperadas: PATIENT_ID, RECORD_DATE, DIAGNOSIS, etc.

---
```

---

## 📈 Próximos Projetos (em desenvolvimento)

### 02 - Análise Exploratória de Vendas
- Análise de tendências temporais
- Segmentação de clientes
- Identificação de padrões sazonais

### 03 - Dashboard Interativo
- Visualizações em Plotly
- KPIs em tempo real
- Filtros dinâmicos

---

## 🤝 Conecte-se Comigo

- 📧 Email: hugo-matheus.rocha@ufam.edu.br
- 💼 LinkedIn: https://www.linkedin.com/in/hugo-matheus-637bb0350/

---

## 📜 Licença

Este repositório é público e pode ser usado para fins educacionais e de portfólio.

> ⚠️ **Aviso de Privacidade**: Todos os dados neste repositório foram anonimizados ou gerados sinteticamente. Nenhuma informação pessoal real é compartilhada.

---

**Última atualização**: Janeiro 2026

**Status**: 🟢 Em ativo desenvolvimento

