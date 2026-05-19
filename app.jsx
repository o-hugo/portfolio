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

// ─────────────────────────────────────────────────────────
// Rio Negro hero — vitória-régia + nome flutuante
// ─────────────────────────────────────────────────────────
if (typeof document !== 'undefined' && !document.getElementById('rio-negro-keyframes')) {
  const __rnStyle = document.createElement('style');
  __rnStyle.id = 'rio-negro-keyframes';
  __rnStyle.textContent = `
    @keyframes rn-float-lily {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50%      { transform: translateY(-8px) rotate(0.6deg); }
    }
    @keyframes rn-float-name {
      0%, 100% { transform: translateY(0); }
      50%      { transform: translateY(-3px); }
    }
    @keyframes rn-drift-a {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      50%      { transform: translate(-4px, -5px) rotate(2deg); }
    }
    @keyframes rn-drift-b {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      50%      { transform: translate(5px, -4px) rotate(-1.5deg); }
    }
    @keyframes rn-shimmer {
      0%, 100% { opacity: 0.45; transform: translateX(0); }
      50%      { opacity: 0.75; transform: translateX(10px); }
    }
    @keyframes rn-glint {
      0%, 100% { opacity: 0.4; }
      50%      { opacity: 0.8; }
    }
    @keyframes rn-float-bayes {
      0%, 100% { transform: translateX(-50%) translateY(0); }
      50%      { transform: translateX(-50%) translateY(-3px); }
    }
    @media (prefers-reduced-motion: reduce) {
      .rn-anim { animation: none !important; }
    }
  `;
  document.head.appendChild(__rnStyle);
}

// Vitória-régia vista de cima, com "HM" itálico no centro.
function VitoriaRegia({ size = 290, label = 'HM' }) {
  const r = size / 2;
  const veinCount = 28;
  const veins = [];
  for (let i = 0; i < veinCount; i++) {
    const angle = (i / veinCount) * Math.PI * 2 - Math.PI / 2;
    // pula a nervura onde está a fenda (topo)
    if (Math.abs(((angle + Math.PI / 2) + Math.PI) % (Math.PI * 2) - Math.PI) < 0.12) continue;
    const x2 = Math.cos(angle) * (r * 0.86);
    const y2 = Math.sin(angle) * (r * 0.86);
    veins.push(
      <line key={i} x1="0" y1="0" x2={x2} y2={y2} stroke="#0a1e12" strokeWidth="0.7" opacity="0.6"/>
    );
  }
  const gradId = `leafGrad-${label}`;
  return (
    <svg width={size} height={size} viewBox={`${-r} ${-r} ${size} ${size}`} style={{ overflow: 'visible', display: 'block' }} aria-label="Vitória-régia com monograma HM">
      <defs>
        <radialGradient id={gradId} cx="38%" cy="30%">
          <stop offset="0%"  stopColor="#456a52"/>
          <stop offset="55%" stopColor="#264a34"/>
          <stop offset="100%" stopColor="#13301f"/>
        </radialGradient>
      </defs>
      {/* sombra na água */}
      <ellipse cx="0" cy={r * 0.20} rx={r * 1.02} ry={r * 0.15} fill="rgba(0,0,0,0.55)" style={{ filter: 'blur(10px)' }}/>
      {/* lábio externo */}
      <circle cx="0" cy="0" r={r - 2} fill="#0e2418"/>
      {/* superfície principal */}
      <circle cx="0" cy="0" r={r - 7} fill={`url(#${gradId})`}/>
      {/* nervuras radiais */}
      <g>{veins}</g>
      {/* anéis internos (borda dobrada característica) */}
      <circle cx="0" cy="0" r={r - 14} fill="none" stroke="#0d2719" strokeWidth="1.5" opacity="0.65"/>
      <circle cx="0" cy="0" r={r - 24} fill="none" stroke="#0d2719" strokeWidth="0.7"  opacity="0.4"/>
      {/* fenda característica (V da folha) */}
      <path d={`M -2.5 ${-(r - 3)} L 0 -3 L 2.5 ${-(r - 3)} Q 0 ${-(r - 1)} -2.5 ${-(r - 3)} Z`} fill="#06090d"/>
      {/* highlight no canto superior esquerdo (reflexo) */}
      <ellipse cx={-r * 0.22} cy={-r * 0.28} rx={r * 0.55} ry={r * 0.28} fill="rgba(210, 225, 190, 0.08)"/>
      {/* botão de flor sutil na borda inferior-direita */}
      <circle cx={r * 0.58} cy={r * 0.52} r={r * 0.055} fill="#f0ede4" opacity="0.7"/>
      <circle cx={r * 0.58} cy={r * 0.52} r={r * 0.025} fill="#e2a45a" opacity="0.9"/>
      {/* HM no centro */}
      <text
        x="0" y={r * 0.04}
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="'Newsreader', Georgia, serif"
        fontSize={r * 0.68}
        fontStyle="italic"
        fontWeight="500"
        fill="#f1eee5"
        letterSpacing="-2"
        style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.55))' }}
      >
        {label}
      </text>
    </svg>
  );
}

// Folhinha menor, decorativa, derivando ao fundo
function MiniLily({ size = 32, opacity = 1 }) {
  const r = size / 2;
  return (
    <svg width={size} height={size} viewBox={`${-r} ${-r} ${size} ${size}`} aria-hidden="true">
      <ellipse cx="0" cy={r * 0.22} rx={r * 0.95} ry={r * 0.15} fill="rgba(0,0,0,0.45)" style={{ filter: 'blur(2px)' }}/>
      <circle r={r - 1} fill="#162e1f" opacity={opacity}/>
      <circle r={r - 4} fill="#26442f" opacity={opacity}/>
      <circle r={r - 8} fill="none" stroke="#0d2719" strokeWidth="0.6" opacity={opacity * 0.7}/>
      <path d={`M 0 0 L -1 ${-(r - 2)} L 1 ${-(r - 2)} Z`} fill="#06090d"/>
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
  const heroTitleSize = isMobile ? 32 : isTablet ? 44 : 56;
  const heroTitleLine = isMobile ? 1.02 : 0.95;
  const sectionGap = isMobile ? 36 : isTablet ? 44 : 56;
  const lilyPadSize = isMobile ? 100 : isTablet ? 120 : 134;
  const bellW = isMobile ? 140 : 170;
  const bellH = isMobile ? 34 : 42;

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
      {/* HERO — Rio Negro · vitória-régia · flutuante (compacto) */}
      <header style={{
        marginTop: isMobile ? 8 : 12,
        marginBottom: isMobile ? 28 : 40,
        position: 'relative',
      }}>
        <div style={{
          position: 'relative',
          borderRadius: isMobile ? 12 : 18,
          overflow: 'hidden',
          background: 'radial-gradient(ellipse at 30% 35%, #1a2733 0%, #0c1218 55%, #06090d 100%)',
          padding: isMobile ? '22px 20px 22px' : isTablet ? '22px 32px 24px' : '22px 44px 24px',
          boxShadow: 'inset 0 0 80px rgba(0,0,0,0.5), 0 8px 28px rgba(0,0,0,0.35)',
          border: '1px solid rgba(90, 120, 145, 0.16)',
        }}>
          {/* Turbulência da água (somente desktop — feTurbulence é pesado) */}
          {!isMobile && (
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.55 }} aria-hidden="true">
              <defs>
                <filter id="rnWater" x="0%" y="0%" width="100%" height="100%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.008 0.022" numOctaves="2" seed="5">
                    <animate attributeName="baseFrequency" dur="50s"
                      values="0.008 0.022;0.014 0.030;0.008 0.022" repeatCount="indefinite"/>
                  </feTurbulence>
                  <feColorMatrix values="0 0 0 0 0.40
                                         0 0 0 0 0.55
                                         0 0 0 0 0.68
                                         0 0 0 0.09 0"/>
                </filter>
              </defs>
              <rect width="100%" height="100%" filter="url(#rnWater)"/>
            </svg>
          )}

          {/* Reflexos de luz na água */}
          <div className="rn-anim" style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: `
              radial-gradient(ellipse 460px 90px at 22% 18%, rgba(140, 175, 200, 0.11) 0%, transparent 70%),
              radial-gradient(ellipse 340px 70px at 78% 78%, rgba(110, 145, 170, 0.08) 0%, transparent 70%)
            `,
            animation: 'rn-shimmer 14s ease-in-out infinite alternate',
          }}/>

          {/* Folhinhas derivando (decoração) */}
          {!isMobile && (
            <React.Fragment>
              <div className="rn-anim" style={{ position: 'absolute', top: '11%',  left: '7%',  animation: 'rn-drift-a 11s ease-in-out infinite' }}>
                <MiniLily size={38} opacity={0.85}/>
              </div>
              <div className="rn-anim" style={{ position: 'absolute', bottom: '22%', left: '11%', animation: 'rn-drift-b 14s ease-in-out infinite' }}>
                <MiniLily size={22} opacity={0.7}/>
              </div>
              <div className="rn-anim" style={{ position: 'absolute', bottom: '10%', right: '8%',  animation: 'rn-drift-a 17s ease-in-out infinite' }}>
                <MiniLily size={26} opacity={0.65}/>
              </div>
              <div className="rn-anim" style={{ position: 'absolute', top: '20%',   right: '18%', animation: 'rn-drift-b 19s ease-in-out infinite' }}>
                <MiniLily size={16} opacity={0.5}/>
              </div>
            </React.Fragment>
          )}
          {isMobile && (
            <React.Fragment>
              <div className="rn-anim" style={{ position: 'absolute', top: '8%',  left: '8%',  animation: 'rn-drift-a 11s ease-in-out infinite' }}>
                <MiniLily size={22} opacity={0.7}/>
              </div>
              <div className="rn-anim" style={{ position: 'absolute', bottom: '14%', right: '10%', animation: 'rn-drift-b 14s ease-in-out infinite' }}>
                <MiniLily size={18} opacity={0.6}/>
              </div>
            </React.Fragment>
          )}

          {/* Marca d'água — coordenadas de Manaus (canto sup. direito) */}
          <div style={{ position: 'absolute', top: isMobile ? 10 : 12, right: isMobile ? 16 : 20, fontFamily: '"JetBrains Mono", monospace', fontSize: isMobile ? 9 : 10, color: 'rgba(232,230,223,0.38)', letterSpacing: '0.16em', whiteSpace: 'nowrap' }}>
            manaus · −3.10°, −60.02°
          </div>

          {/* Conteúdo */}
          <div style={{
            position: 'relative', zIndex: 2,
            display: 'grid',
            gridTemplateColumns: (isMobile || isTablet) ? '1fr' : '1fr auto',
            gridTemplateAreas: (isMobile || isTablet)
              ? '"lily" "bayes" "name"'
              : '"name lily" "bayes bayes"',
            alignItems: 'center',
            justifyItems: (isMobile || isTablet) ? 'center' : 'stretch',
            rowGap: isMobile ? 18 : isTablet ? 22 : 18,
            columnGap: isMobile ? 0 : isTablet ? 0 : 40,
          }}>
            {/* Bayes flutuando no meio (entre folha e nome em mobile; abaixo na desktop) */}
            <div
              className="rn-anim"
              style={{
                gridArea: 'bayes',
                justifySelf: 'center',
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: isMobile ? 10 : 11.5,
                color: 'rgba(232,230,223,0.45)',
                letterSpacing: '0.10em',
                whiteSpace: 'nowrap',
                animation: 'rn-float-name 8s ease-in-out infinite',
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            >
              P(A|B) = P(B|A)·P(A) / P(B)
            </div>
            {/* Nome flutuante (lado esquerdo / abaixo no mobile) */}
            <div
              className="rn-anim"
              style={{
                gridArea: 'name',
                animation: 'rn-float-name 7s ease-in-out infinite',
                textAlign: (isMobile || isTablet) ? 'center' : 'left',
                width: '100%',
              }}
            >
              <div style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: isMobile ? 10 : 11,
                letterSpacing: '0.22em',
                color: DS.red,
                textTransform: 'uppercase',
                marginBottom: isMobile ? 10 : 12,
              }}>
                ▌ bacharelando · estatística · ufam
              </div>

              <div style={{ position: 'relative', display: 'inline-block' }}>
                <h1 style={{
                  fontWeight: 700,
                  fontSize: heroTitleSize,
                  lineHeight: heroTitleLine,
                  margin: 0,
                  letterSpacing: '-0.035em',
                  color: '#f1eee5',
                  textShadow: '0 6px 28px rgba(0,0,0,0.65)',
                  position: 'relative',
                  zIndex: 2,
                }}>
                  Hugo Matheus<br/>Rocha<span style={{ color: DS.red }}>.</span>
                </h1>
              </div>

              <p style={{
                marginTop: isMobile ? 12 : 16,
                fontSize: isMobile ? 14 : 15.5,
                color: 'rgba(232, 230, 223, 0.78)',
                maxWidth: 480,
                marginLeft: (isMobile || isTablet) ? 'auto' : 0,
                marginRight: (isMobile || isTablet) ? 'auto' : 0,
                lineHeight: 1.55,
              }}>
                Estatístico em formação. Transformo ruído em sinal com pipelines reprodutíveis,
                controle de processo e séries temporais.
              </p>
            </div>

            {/* Vitória-régia com HM + curva normal (lado direito / topo no mobile) */}
            <div
              className="rn-anim"
              style={{
                gridArea: 'lily',
                animation: 'rn-float-lily 9s ease-in-out infinite',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <VitoriaRegia size={lilyPadSize}/>
              <div style={{ marginTop: 2 }}>
                <BellCurve w={bellW} h={bellH}/>
              </div>
              <div style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: isMobile ? 9 : 10,
                color: 'rgba(232, 230, 223, 0.45)',
                letterSpacing: '0.08em',
                textAlign: 'center',
                marginTop: -2,
                whiteSpace: 'nowrap',
              }}>
                fig. 0 — N(μ, σ²)
              </div>
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
