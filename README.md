# Data Science & Engenharia de Dados - Portfolio

> Bem-vindo ao meu repositório de projetos em **Engenharia de Dados** e **Ciência de Dados**. Aqui você encontrará soluções reais para problemas de ETL, análise exploratória, limpeza de dados e insights baseados em dados.

---

## 👋 Sobre Mim

Sou **bacharel em Estatística** apaixonado por transformar dados brutos em insights acionáveis. Atualmente sou **Vice-Presidente do Centro Acadêmico do Curso de Estatística (2025)**, onde trabalho na divulgação da importância da estatística e análise de dados para tomadas de decisão baseadas em evidência.

### 📚 Formação Acadêmica
- **Bacharelado em Estatística** (em andamento)
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
- **Processamento de Dados**: Pandas, Polars, DuckDB
- **Visualização**: Matplotlib, Seaborn, Plotly
- **Estatística**: análise exploratória, testes de hipótese, regressão
- **Versionamento**: Git/GitHub
- **Notebooks**: Jupyter, Google Colab

### Methodologias
- ✅ ETL (Extração, Transformação, Carga)
- ✅ Data Cleaning & Validation
- ✅ Exploratory Data Analysis (EDA)
- ✅ Boas práticas em qualidade de dados
- ✅ Anonimização e segurança de dados

---

## 📁 Estrutura do Repositório

```
data-science-portfolio/
│
├── 📓 01_SQL_Python_ETL.ipynb
│   └── ETL de dados médicos: extração, transformação e limpeza
│
├── 02_Analise_Exploratoria_[PROJECT_NAME]/ (em desenvolvimento)
│   └── Análise detalhada e insights
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
- **Estrutura Original**: 11 arquivos Excel com dados de registros médicos
- **Registros Iniciais**: ~265 registros brutos
- **Registros Finais**: 87 registros únicos e limpos

#### Processo de Anonimização

Todos os dados foram **completamente anonimizados** para garantir privacidade:

| Campo Original | Método de Anonimização | Exemplo |
|---|---|---|
| **Nomes completos** | ✅ Substituído por ID numérico | `Hirailton Alves Batista` → `PAT_01_042` |
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
| 1 | **Extração** | Leitura de 11 arquivos Excel | 11 .xlsx | 265 registros |
| 2 | **Consolidação** | Junção em DataFrame único | 11 DataFrames | 1 DataFrame |
| 3 | **Filtro Inicial** | Apenas registros com `NEW_CASES_COUNT > 0` | 265 | 180 |
| 4 | **Filtro Diagnóstico** | Regex para `LLA\|LMA\|LLC\|LMC` | 180 | 92 |
| 5 | **Detecção Duplicatas** | Identifica pacientes duplicados | 92 | 5 duplicatas |
| 6 | **Deduplicação** | ROW_NUMBER() OVER PARTITION | 92 | 87 |
| 7 | **Validação** | Verificação de integridade | 87 | ✅ 87 válidos |
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

## 📊 Exemplo de Dados Anonimizados

Antes (Confidencial):
```
| NOME                    | DATA_NASCIMENTO | PRONTUÁRIO | CONVÊNIO |
|-------------------------|-----------------|------------|----------|
| Hirailton Alves Batista | 1979-09-11      | 1015361-00 | SUS      |
| Izeilson Lima Silva     | 1998-02-23      | 1015356-00 | SUS      |
```

Depois (Anonimizado):
```
| PATIENT_ID  | BIRTH_AGE_GROUP | RECORD_NUMBER | MEDICAL_INSURANCE |
|-------------|-----------------|---------------|-------------------|
| PAT_01_042  | 71-80           | PRN_3542187   | SUS               |
| PAT_02_015  | 21-30           | PRN_8761245   | SUS               |
```

✅ **Resultado**: 100% anonimizado, mantendo a estrutura para análise

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

