// V2 — "Distribuição" — versão responsiva
// Mantém a estética original em desktop e adapta layout em mobile.

const PALETTES = {
  ufam: {
    name: 'UFAM Crimson',
    sub: 'vinho · mata · âmbar',
    bg: '#fafaf7', panel: '#ffffff', chipBg: '#fafaf7',
    ink: '#0e1116', inkSoft: '#5b6470', inkFaint: '#a8aeb8',
    red: '#7e141a', redSoft: '#b9636a',
    accent: '#1f6b4a', amber: '#c87f1a',
    rule: 'rgba(15,17,22,0.08)', grid: 'rgba(15,17,22,0.05)',
    dark: false,
  },
  rio: {
    name: 'Rio Negro',
    sub: 'azul-rio · vinho · ocre',
    bg: '#f6f8fa', panel: '#ffffff', chipBg: '#f6f8fa',
    ink: '#0a1018', inkSoft: '#52617a', inkFaint: '#a0aac0',
    red: '#2d4f6e', redSoft: '#7088a0',
    accent: '#7e141a', amber: '#b8862c',
    rule: 'rgba(10,16,24,0.08)', grid: 'rgba(10,16,24,0.05)',
    dark: false,
  },
  mata: {
    name: 'Mata Atlântica',
    sub: 'verde-mata · vinho · ouro',
    bg: '#f4f6f1', panel: '#ffffff', chipBg: '#f4f6f1',
    ink: '#0c1410', inkSoft: '#536059', inkFaint: '#a6b0a4',
    red: '#1f5a3d', redSoft: '#6c9684',
    accent: '#7e141a', amber: '#b88212',
    rule: 'rgba(12,20,16,0.09)', grid: 'rgba(12,20,16,0.05)',
    dark: false,
  },
  ceramica: {
    name: 'Cerâmica',
    sub: 'terracota · mata · vinho',
    bg: '#faf2e8', panel: '#fffaf2', chipBg: '#faf2e8',
    ink: '#2a1a10', inkSoft: '#6a5040', inkFaint: '#b0998a',
    red: '#a8482c', redSoft: '#d08766',
    accent: '#2d5a3d', amber: '#7e141a',
    rule: 'rgba(42,26,16,0.10)', grid: 'rgba(42,26,16,0.06)',
    dark: false,
  },
  ipe: {
    name: 'Ipê',
    sub: 'amarelo-ipê · tinta · vinho',
    bg: '#fbf8ec', panel: '#fffdf3', chipBg: '#fbf8ec',
    ink: '#1a1505', inkSoft: '#5c533a', inkFaint: '#b0a98a',
    red: '#a8770e', redSoft: '#d2a958',
    accent: '#0e1116', amber: '#7e141a',
    rule: 'rgba(26,21,5,0.10)', grid: 'rgba(26,21,5,0.06)',
    dark: false,
  },
  noite: {
    name: 'Noite Acadêmica',
    sub: 'modo escuro · acentos quentes',
    bg: '#14171c', panel: '#1c2027', chipBg: '#15181d',
    ink: '#e8e6df', inkSoft: '#a0a4ac', inkFaint: '#5c6068',
    red: '#e08982', redSoft: '#a85045',
    accent: '#6db589', amber: '#e2a45a',
    rule: 'rgba(232,230,223,0.10)', grid: 'rgba(232,230,223,0.05)',
    dark: true,
  },
};
window.V2_PALETTES = PALETTES;

const PaletteCtx = React.createContext(PALETTES.ufam);
const useDS = () => React.useContext(PaletteCtx);

// Hook responsivo. Dois breakpoints:
//   mobile  < 640px
//   tablet  < 980px (entre desktop e mobile)
const useViewport = () => {
  const get = () => {
    if (typeof window === 'undefined') return { isMobile: false, isTablet: false };
    const w = window.innerWidth;
    return { isMobile: w < 640, isTablet: w < 980 };
  };
  const [vp, setVp] = React.useState(get);
  React.useEffect(() => {
    let raf = 0;
    const onResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setVp(get()));
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return vp;
};

const DSProjects = [
  {
    id: 'p01', mu: '0.92', sigma: '0.04',
    title: 'Monitoramento de Produtividade Pública',
    body: 'Dashboard interativo aplicando Controle Estatístico de Processo (CEP) para detecção de anomalias e decomposição STL para análise de tendências em métricas processuais.',
    tags: [['stack', 'HTML/CSS'], ['stack', 'JavaScript'], ['lib', 'Chart.js'], ['method', 'CEP'], ['method', 'STL']],
    link: 'Acessar Dashboard',
    href: './dashboard-ministerio-publico.html',
    chart: 'line',
  },
  {
    id: 'p02', mu: '50+', sigma: 'arq',
    title: 'Pipeline ETL de Dados Médicos',
    body: 'Consolidação de mais de 50 arquivos Excel com DuckDB para processamento analítico de alta velocidade e Regex para padronização diagnóstica. Dados integralmente anonimizados.',
    tags: [['stack', 'Python'], ['lib', 'DuckDB'], ['lib', 'Pandas'], ['method', 'Regex'], ['method', 'Anonimização']],
    link: 'Ver Notebook',
    href: 'https://github.com/o-hugo/portfolio/blob/main/01_SQL_Python_ETL.ipynb',
    chart: 'flow',
  },
  {
    id: 'p03', mu: '24', sigma: 'meses',
    title: 'AED de Séries Temporais Processuais',
    body: 'Inventários de 24 meses analisados com STL, testes de estacionariedade (ADF, KPSS), autocorrelação (Ljung-Box), tendência (Mann-Kendall) e CEP via I-MR e CUSUM. Dados sintéticos.',
    tags: [['stack', 'Python'], ['lib', 'DuckDB'], ['lib', 'Statsmodels'], ['method', 'STL'], ['method', 'CEP']],
    link: 'Ver Notebook',
    href: 'https://github.com/o-hugo/portfolio/blob/main/03_AED_inventario_estatistica_aplicada.ipynb',
    chart: 'cusum',
  },
  {
    id: 'p04', mu: 'acc', sigma: '↑',
    title: 'Previsão de Evasão Escolar',
    body: 'Disciplina de Introdução à Ciência de Dados (UFAM). Classificação com Scikit-learn para prever sucesso ou risco de evasão sobre dados públicos da educação.',
    tags: [['stack', 'Python'], ['lib', 'Scikit-learn'], ['lib', 'Seaborn'], ['method', 'EDA'], ['ctx', 'Open Data']],
    link: 'Ver Notebook',
    href: 'https://github.com/o-hugo/portfolio/blob/main/02_Python_Sklearn_Classification.ipynb',
    chart: 'bars',
  },
];

// ─────────────────────────────────────────────────────────
// Tiny inline SVG decorations
// ─────────────────────────────────────────────────────────
function Sparkline({ kind, w = 160, h = 56 }) {
  const DS = useDS();
  const color = DS.red;
  if (kind === 'line') {
    const pts = [10, 18, 14, 26, 22, 30, 28, 24, 38, 32, 44, 36, 30, 42].map((v, i) => `${(i * (w-10)) / 13 + 5},${h - v}`).join(' ');
    return (
      <svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMidYMid meet" style={{ maxWidth: w, display: 'block' }}>
        <line x1="0" y1="8" x2={w} y2="8" stroke={DS.rule} strokeDasharray="3 3"/>
        <line x1="0" y1={h-6} x2={w} y2={h-6} stroke={DS.rule} strokeDasharray="3 3"/>
        <line x1="0" y1={h/2} x2={w} y2={h/2} stroke={DS.grid}/>
        <polyline fill="none" stroke={color} strokeWidth="1.5" points={pts}/>
        <circle cx={w-12} cy={h-42} r="2.5" fill={color}/>
      </svg>
    );
  }
  if (kind === 'flow') {
    return (
      <svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMidYMid meet" style={{ maxWidth: w, display: 'block' }}>
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={i * 50 + 4} y={h/2 - 10} width="36" height="20" fill="none" stroke={color} strokeWidth="1.2" rx="2"/>
            {i < 2 && <line x1={i * 50 + 40} y1={h/2} x2={i * 50 + 54} y2={h/2} stroke={color} strokeWidth="1.2"/>}
            {i < 2 && <polygon points={`${i*50+54},${h/2-3} ${i*50+58},${h/2} ${i*50+54},${h/2+3}`} fill={color}/>}
          </g>
        ))}
        <text x="22" y={h/2+3} fontSize="8" fontFamily="JetBrains Mono" fill={color} textAnchor="middle">XLSX</text>
        <text x="72" y={h/2+3} fontSize="8" fontFamily="JetBrains Mono" fill={color} textAnchor="middle">ETL</text>
        <text x="122" y={h/2+3} fontSize="8" fontFamily="JetBrains Mono" fill={color} textAnchor="middle">DB</text>
      </svg>
    );
  }
  if (kind === 'cusum') {
    const wave = (amp, phase, y) => {
      let d = `M 0 ${y}`;
      for (let x = 0; x <= w; x += 4) {
        d += ` L ${x} ${y + Math.sin((x + phase) * 0.12) * amp}`;
      }
      return d;
    };
    return (
      <svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMidYMid meet" style={{ maxWidth: w, display: 'block' }}>
        <path d={wave(4, 0, 12)} fill="none" stroke={DS.inkFaint} strokeWidth="1"/>
        <path d={wave(7, 30, 28)} fill="none" stroke={color} strokeWidth="1.2"/>
        <path d={wave(2.5, 60, 44)} fill="none" stroke={DS.accent} strokeWidth="1"/>
      </svg>
    );
  }
  if (kind === 'bars') {
    const heights = [38, 22, 12, 8, 6, 14, 28, 34, 42, 30, 18, 10];
    return (
      <svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMidYMid meet" style={{ maxWidth: w, display: 'block' }}>
        {heights.map((bh, i) => (
          <rect key={i} x={i * 12 + 6} y={h - bh - 4} width="9" height={bh} fill={i === 8 ? color : DS.inkFaint} opacity={i === 8 ? 1 : 0.55}/>
        ))}
      </svg>
    );
  }
  return null;
}

function BellCurve({ w = 280, h = 80 }) {
  const DS = useDS();
  const color = DS.red;
  let d = `M 0 ${h-4}`;
  for (let x = 0; x <= w; x += 2) {
    const z = (x - w/2) / (w/6);
    const y = h - 4 - (h - 12) * Math.exp(-(z*z)/2);
    d += ` L ${x} ${y}`;
  }
  d += ` L ${w} ${h-4} Z`;
  return (
    <svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMidYMid meet" style={{ display: 'block', maxWidth: w }}>
      <path d={d} fill={color} opacity="0.10"/>
      <path d={d.replace(' Z', '')} fill="none" stroke={color} strokeWidth="1.5"/>
      <line x1={w/2} y1="6" x2={w/2} y2={h-4} stroke={color} strokeDasharray="3 3" opacity="0.5"/>
      <text x={w/2 + 6} y="14" fontSize="10" fontFamily="JetBrains Mono" fill={color}>μ</text>
    </svg>
  );
}

function DistribuicaoVariant({ paletteId = 'ufam' }) {
  const DS = PALETTES[paletteId] || PALETTES.ufam;
  const { isMobile, isTablet } = useViewport();

  const TAG_KIND = {
    stack:  { dot: DS.red,      fg: DS.ink },
    lib:    { dot: DS.accent,   fg: DS.ink },
    method: { dot: DS.amber,    fg: DS.ink },
    ctx:    { dot: DS.inkFaint, fg: DS.ink },
  };

  const TECH_GROUPS = [
    { label: 'linguagens & dados', color: DS.red,    items: ['Python', 'SQL', 'JavaScript', 'HTML/CSS'] },
    { label: 'bibliotecas',         color: DS.accent, items: ['DuckDB', 'Pandas', 'Statsmodels', 'Scikit-learn', 'Seaborn', 'Chart.js'] },
    { label: 'métodos',             color: DS.amber,  items: ['CEP', 'STL', 'Séries Temporais', 'EDA', 'Regex'] },
  ];

  // ─── responsive tokens ───
  const pagePadV = isMobile ? 64 : 64;
  const pagePadH = isMobile ? 18 : isTablet ? 36 : 72;
  const heroTitleSize = isMobile ? 44 : isTablet ? 60 : 76;
  const heroTitleLine = isMobile ? 1.02 : 0.95;
  const sectionGap = isMobile ? 36 : isTablet ? 44 : 56;
  const bellW = isMobile ? 180 : 240;
  const bellH = isMobile ? 56 : 72;
  const shieldW = isMobile ? 72 : 96;
  const shieldH = isMobile ? 84 : 110;

  return (
    <PaletteCtx.Provider value={DS}>
    <div style={{
      minHeight: '100%',
      backgroundColor: DS.bg,
      backgroundImage: `
        linear-gradient(${DS.grid} 1px, transparent 1px),
        linear-gradient(90deg, ${DS.grid} 1px, transparent 1px)
      `,
      backgroundSize: '40px 40px, 40px 40px',
      fontFamily: '"Manrope", system-ui, sans-serif',
      color: DS.ink,
      padding: `${pagePadV}px ${pagePadH}px`,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* corner ticks — escondidos em mobile pra não amontoar */}
      {!isMobile && (
        <React.Fragment>
          <div style={{ position: 'absolute', top: 24, left: 24, fontFamily: '"JetBrains Mono", monospace', fontSize: 10, color: DS.inkFaint, letterSpacing: '0.1em' }}>
            ◇ portfolio.v2026
          </div>
          <div style={{ position: 'absolute', top: 24, right: 24, fontFamily: '"JetBrains Mono", monospace', fontSize: 10, color: DS.inkFaint, letterSpacing: '0.1em' }}>
            manaus · −3.10°, −60.02°
          </div>
        </React.Fragment>
      )}
      {isMobile && (
        <div style={{ position: 'absolute', top: 18, left: 18, right: 18, display: 'flex', justifyContent: 'space-between', fontFamily: '"JetBrains Mono", monospace', fontSize: 9, color: DS.inkFaint, letterSpacing: '0.08em' }}>
          <span>◇ portfolio.v2026</span>
          <span>−3.10°, −60.02°</span>
        </div>
      )}

      {/* HERO */}
      <header style={{
        marginTop: isMobile ? 24 : 32,
        marginBottom: isMobile ? 40 : 60,
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr auto',
        alignItems: isMobile ? 'start' : 'end',
        gap: isMobile ? 28 : 32,
      }}>
        <div style={{ order: isMobile ? 2 : 1 }}>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: isMobile ? 10 : 11, letterSpacing: '0.18em', color: DS.red, textTransform: 'uppercase', marginBottom: isMobile ? 14 : 18 }}>
            ▌ bacharelando · estatística · ufam
          </div>
          <h1 style={{ fontWeight: 700, fontSize: heroTitleSize, lineHeight: heroTitleLine, margin: 0, letterSpacing: '-0.035em', color: DS.ink }}>
            Hugo Matheus<br/>Rocha<span style={{ color: DS.red }}>.</span>
          </h1>
          <p style={{ marginTop: 20, fontSize: isMobile ? 15 : 17, color: DS.inkSoft, maxWidth: 520, lineHeight: 1.55 }}>
            Estatístico em formação. Transformo ruído em sinal com pipelines reprodutíveis,
            controle de processo e séries temporais.
          </p>
        </div>

        <div style={{
          order: isMobile ? 1 : 2,
          textAlign: isMobile ? 'left' : 'right',
          display: 'flex',
          flexDirection: isMobile ? 'row' : 'column',
          alignItems: isMobile ? 'center' : 'flex-end',
          justifyContent: isMobile ? 'space-between' : 'flex-start',
          gap: isMobile ? 16 : 18,
          width: '100%',
        }}>
          {/* HM shield monogram */}
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <svg width={shieldW} height={shieldH} viewBox="0 0 80 92">
              <path d="M 8 6 L 72 6 L 72 50 Q 72 78 40 88 Q 8 78 8 50 Z"
                fill={DS.panel} stroke={DS.red} strokeWidth="2"/>
              <ellipse cx="40" cy="34" rx="18" ry="9" fill={DS.accent} opacity="0.85" transform="rotate(-18 40 34)"/>
              <line x1="22" y1="38" x2="58" y2="30" stroke={DS.panel} strokeWidth="1.2"/>
              <ellipse cx="40" cy="48" rx="18" ry="9" fill={DS.red} opacity="0.85" transform="rotate(18 40 48)"/>
              <line x1="22" y1="44" x2="58" y2="52" stroke={DS.panel} strokeWidth="1.2"/>
              <text x="40" y="76" textAnchor="middle" fontFamily="Newsreader, serif" fontSize="18" fill={DS.red} fontStyle="italic">HM</text>
            </svg>
            <div style={{
              fontFamily: '"JetBrains Mono", monospace', fontSize: 9,
              color: DS.redSoft, letterSpacing: '0.18em',
              textAlign: 'center', marginTop: 2,
            }}>
              EST · UFAM
            </div>
          </div>
          <div style={{ flexShrink: 1, minWidth: 0, maxWidth: isMobile ? 200 : '100%' }}>
            <BellCurve w={bellW} h={bellH} />
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, color: DS.inkFaint, marginTop: 4, textAlign: isMobile ? 'center' : 'left' }}>
              fig. 0 — N(μ, σ²)
            </div>
          </div>
        </div>
      </header>

      {/* Two-col → empilha em tablet/mobile */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isTablet ? '1fr' : '300px 1fr',
        gap: sectionGap,
        alignItems: 'start',
      }}>
        {/* SIDEBAR */}
        <aside>
          <div style={{ background: DS.panel, border: `1px solid ${DS.rule}`, padding: isMobile ? 20 : 24 }}>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10.5, letterSpacing: '0.18em', color: DS.red, marginBottom: 14, textTransform: 'uppercase' }}>
              § sobre
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.62, margin: '0 0 12px', color: DS.ink }}>
              Bacharelando em Estatística na UFAM, focado em transformar dados brutos em insights acionáveis para decisões baseadas em evidência.
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.62, margin: 0, color: DS.inkSoft }}>
              Uno rigor estatístico ao desenvolvimento de pipelines (ETL) e BI, priorizando clareza técnica e segurança da informação.
            </p>
          </div>

          <div style={{ background: DS.panel, border: `1px solid ${DS.rule}`, padding: isMobile ? 20 : 24, marginTop: 16 }}>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10.5, letterSpacing: '0.18em', color: DS.red, marginBottom: 14, textTransform: 'uppercase' }}>
              § tecnologias
            </div>

            {TECH_GROUPS.map((group) => (
              <div key={group.label} style={{ marginBottom: 12 }}>
                <div style={{
                  fontFamily: '"JetBrains Mono", monospace', fontSize: 9.5,
                  letterSpacing: '0.14em', color: DS.inkFaint,
                  textTransform: 'uppercase', marginBottom: 7,
                  display: 'flex', alignItems: 'center', gap: 6,
                }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: group.color, display: 'inline-block' }}/>
                  {group.label}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                  {group.items.map((t) => (
                    <span key={t} style={{
                      fontFamily: '"JetBrains Mono", monospace', fontSize: 10.5,
                      padding: '3px 9px', borderRadius: 999,
                      color: group.color, border: `1px solid ${group.color}40`,
                      background: group.color + (DS.dark ? '22' : '14'),
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: DS.panel, border: `1px solid ${DS.rule}`, padding: isMobile ? 18 : 20, marginTop: 16 }}>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10.5, letterSpacing: '0.18em', color: DS.red, marginBottom: 12, textTransform: 'uppercase' }}>
              § contato
            </div>
            <a href="https://www.linkedin.com/in/hugo-matheus-637bb0350/" style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', fontSize: 13, color: DS.ink, borderBottom: `1px dotted ${DS.rule}`, textDecoration: 'none', fontFamily: '"JetBrains Mono", monospace' }}>
              <span>linkedin</span><span style={{ color: DS.red }}>→</span>
            </a>
            <a href="mailto:hugo-matheus.rocha@ufam.edu.br" style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', fontSize: 13, color: DS.ink, textDecoration: 'none', fontFamily: '"JetBrains Mono", monospace' }}>
              <span>e-mail</span><span style={{ color: DS.red }}>→</span>
            </a>
          </div>
        </aside>

        {/* PROJECTS */}
        <main style={{ minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 28, paddingBottom: 14, borderBottom: `1px solid ${DS.ink}`, gap: 12, flexWrap: 'wrap' }}>
            <h2 style={{ fontSize: isMobile ? 12 : 13, fontFamily: '"JetBrains Mono", monospace', letterSpacing: '0.2em', color: DS.ink, margin: 0, textTransform: 'uppercase', fontWeight: 600 }}>
              § projetos selecionados
            </h2>
            <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: isMobile ? 10 : 11, color: DS.inkFaint }}>
              n = 4 · ordem cronológica
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {DSProjects.map((p) => (
              <article key={p.id} style={{
                background: DS.panel,
                border: `1px solid ${DS.rule}`,
                padding: isMobile ? '22px 22px 22px 24px' : '24px 28px',
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 180px',
                gap: isMobile ? 20 : 28,
                position: 'relative',
                minWidth: 0,
              }}>
                {/* id stripe */}
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: DS.red }}/>

                <div style={{ minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 10, flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: DS.red, letterSpacing: '0.06em' }}>
                      {p.id}
                    </span>
                    <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10.5, color: DS.inkFaint, letterSpacing: '0.04em' }}>
                      μ = {p.mu} · σ = {p.sigma}
                    </span>
                  </div>

                  <h3 style={{ fontSize: isMobile ? 19 : 21, fontWeight: 600, margin: '0 0 10px', color: DS.ink, letterSpacing: '-0.015em', lineHeight: 1.2, textWrap: 'pretty' }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: 13.5, lineHeight: 1.6, color: DS.inkSoft, margin: '0 0 16px' }}>
                    {p.body}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                    {p.tags.map(([kind, label]) => {
                      const k = TAG_KIND[kind];
                      return (
                        <span key={label} style={{
                          fontFamily: '"JetBrains Mono", monospace',
                          fontSize: 10.5, padding: '3px 8px 3px 6px',
                          background: DS.chipBg, color: k.fg,
                          border: `1px solid ${DS.rule}`,
                          display: 'inline-flex', alignItems: 'center', gap: 6,
                        }}>
                          <span style={{ width: 5, height: 5, borderRadius: '50%', background: k.dot, display: 'inline-block' }}/>
                          {label}
                        </span>
                      );
                    })}
                  </div>

                  <a href={p.href} style={{
                    fontFamily: '"JetBrains Mono", monospace', fontSize: 11.5,
                    color: DS.red, fontWeight: 600, letterSpacing: '0.04em',
                    textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6,
                  }}>
                    <span style={{ borderBottom: `1.5px solid ${DS.red}`, paddingBottom: 1 }}>{p.link}</span>
                    <span>→</span>
                  </a>
                </div>

                {/* mini viz */}
                <div style={{
                  borderLeft: isMobile ? 'none' : `1px dashed ${DS.rule}`,
                  borderTop: isMobile ? `1px dashed ${DS.rule}` : 'none',
                  paddingLeft: isMobile ? 0 : 20,
                  paddingTop: isMobile ? 16 : 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: isMobile ? 8 : 0,
                  minWidth: 0,
                }}>
                  <Sparkline kind={p.chart}/>
                  <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 9.5, color: DS.inkFaint, letterSpacing: '0.06em' }}>
                    fig. {p.id.slice(-1)} — {p.chart === 'line' ? 'I-MR control' : p.chart === 'flow' ? 'pipeline ETL' : p.chart === 'cusum' ? 'decomposição STL' : 'classes (treino)'}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>

      <div style={{
        marginTop: isMobile ? 48 : 64,
        paddingTop: 18,
        borderTop: `1px solid ${DS.rule}`,
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: isMobile ? 9.5 : 10.5,
        color: DS.inkFaint,
        display: 'flex',
        justifyContent: 'space-between',
        gap: 8,
        flexWrap: 'wrap',
      }}>
        <span>hugo matheus rocha · estatística ufam · 2026</span>
        <span>p ≪ 0.001 · built with care</span>
      </div>
    </div>
    </PaletteCtx.Provider>
  );
}

window.DistribuicaoVariant = DistribuicaoVariant;
