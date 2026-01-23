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

| # | Etapa | Ação | Entrada | Saída |
|---|-------|------|---------|-------|
| 1 | **Extração** | Leitura de 57 arquivos Excel | 57 .xls | 1.138 registros |
| 2 | **Consolidação** | Junção em DataFrame único | 57 DataFrames → 1 DataFrame |
| 3 | **Filtro Inicial** | Apenas registros com `NEW_CASES_COUNT > 0` | 769 |
| 4 | **Filtro Diagnóstico** | Regex para `LLA\|LMA\|LLC\|LMC` | 312 |
| 5 | **Detecção Duplicatas** | Identifica pacientes duplicados |
| 6 | **Deduplicação** | ROW_NUMBER() OVER PARTITION |
| 7 | **Validação** | Verificação de integridade | ✅ 307 válidos |
| 8 | **Exportação** | CSV + Excel | 87 | `healthcare_data_cleaned.*` |

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
- 📁 `data/` - pasta com arquivos .xlsx ou .csv
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

- 📧 Email: [seu email]
- 💼 LinkedIn: [seu perfil]
- 🐙 GitHub: [seu perfil]

---

## 📜 Licença

Este repositório é público e pode ser usado para fins educacionais e de portfólio.

> ⚠️ **Aviso de Privacidade**: Todos os dados neste repositório foram anonimizados ou gerados sinteticamente. Nenhuma informação pessoal real é compartilhada.

---

**Última atualização**: Janeiro 2026

**Status**: 🟢 Em ativo desenvolvimento

