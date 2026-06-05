// V3 — "Coluna Editorial" — inspirado no astro-sienna, mantendo estética do Noite Acadêmica
// Layout: single-column centrado, nav topo, bio compacta, lista de projetos editorial.

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

const PaletteCtx = React.createContext(PALETTES.noite);
const useDS = () => React.useContext(PaletteCtx);

const useViewport = () => {
  const get = () => {
    if (typeof window === 'undefined') return { isMobile: false, isTablet: false };
    const w = window.innerWidth;
    return { isMobile: w < 640, isTablet: w < 900 };
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
    date: '2026',
  },
  {
    id: 'p02', mu: '50+', sigma: 'arq',
    title: 'Pipeline ETL de Dados Médicos',
    body: 'Consolidação de mais de 50 arquivos Excel com DuckDB para processamento analítico de alta velocidade e Regex para padronização diagnóstica. Dados integralmente anonimizados.',
    tags: [['stack', 'Python'], ['lib', 'DuckDB'], ['lib', 'Pandas'], ['method', 'Regex'], ['method', 'Anonimização']],
    link: 'Ver Notebook',
    href: 'https://github.com/o-hugo/portfolio/blob/main/01_SQL_Python_ETL.ipynb',
    chart: 'flow',
    date: '2025',
  },
  {
    id: 'p03', mu: '24', sigma: 'meses',
    title: 'AED de Séries Temporais Processuais',
    body: 'Inventários de 24 meses analisados com STL, testes de estacionariedade (ADF, KPSS), autocorrelação (Ljung-Box), tendência (Mann-Kendall) e CEP via I-MR e CUSUM. Dados sintéticos.',
    tags: [['stack', 'Python'], ['lib', 'DuckDB'], ['lib', 'Statsmodels'], ['method', 'STL'], ['method', 'CEP']],
    link: 'Ver Notebook',
    href: 'https://github.com/o-hugo/portfolio/blob/main/03_AED_inventario_estatistica_aplicada.ipynb',
    chart: 'cusum',
    date: '2025',
  },
  {
    id: 'p04', mu: 'acc', sigma: '↑',
    title: 'Previsão de Evasão Escolar',
    body: 'Disciplina de Introdução à Ciência de Dados (UFAM). Classificação com Scikit-learn para prever sucesso ou risco de evasão sobre dados públicos da educação.',
    tags: [['stack', 'Python'], ['lib', 'Scikit-learn'], ['lib', 'Seaborn'], ['method', 'EDA'], ['ctx', 'Open Data']],
    link: 'Ver Notebook',
    href: 'https://github.com/o-hugo/portfolio/blob/main/02_Python_Sklearn_Classification.ipynb',
    chart: 'bars',
    date: '2025',
  },
];

// ─────────────────────────────────────────────────────────
// Keyframes globais
// ─────────────────────────────────────────────────────────
if (typeof document !== 'undefined' && !document.getElementById('portfolio-keyframes')) {
  const __style = document.createElement('style');
  __style.id = 'portfolio-keyframes';
  __style.textContent = `
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
    @keyframes fade-up {
      from { opacity: 0; transform: translateY(16px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes nav-underline {
      from { width: 0; }
      to   { width: 100%; }
    }
    @media (prefers-reduced-motion: reduce) {
      .rn-anim { animation: none !important; }
    }
  `;
  document.head.appendChild(__style);
}

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

function BellCurve({ w = 200, h = 52 }) {
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
// Vitória-régia — folha de vitória-régia com monograma HM
// ─────────────────────────────────────────────────────────
function VitoriaRegia({ size = 290, label = 'HM' }) {
  const r = size / 2;
  const veinCount = 28;
  const veins = [];
  for (let i = 0; i < veinCount; i++) {
    const angle = (i / veinCount) * Math.PI * 2 - Math.PI / 2;
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
      <ellipse cx="0" cy={r * 0.20} rx={r * 1.02} ry={r * 0.15} fill="rgba(0,0,0,0.55)" style={{ filter: 'blur(10px)' }}/>
      <circle cx="0" cy="0" r={r - 2} fill="#0e2418"/>
      <circle cx="0" cy="0" r={r - 7} fill={`url(#${gradId})`}/>
      <g>{veins}</g>
      <circle cx="0" cy="0" r={r - 14} fill="none" stroke="#0d2719" strokeWidth="1.5" opacity="0.65"/>
      <circle cx="0" cy="0" r={r - 24} fill="none" stroke="#0d2719" strokeWidth="0.7"  opacity="0.4"/>
      <path d={`M -2.5 ${-(r - 3)} L 0 -3 L 2.5 ${-(r - 3)} Q 0 ${-(r - 1)} -2.5 ${-(r - 3)} Z`} fill="#06090d"/>
      <ellipse cx={-r * 0.22} cy={-r * 0.28} rx={r * 0.55} ry={r * 0.28} fill="rgba(210, 225, 190, 0.08)"/>
      <circle cx={r * 0.58} cy={r * 0.52} r={r * 0.055} fill="#f0ede4" opacity="0.7"/>
      <circle cx={r * 0.58} cy={r * 0.52} r={r * 0.025} fill="#e2a45a" opacity="0.9"/>
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

// ─────────────────────────────────────────────────────────
// NavBar — inspirado no astro-sienna: simples, links claros
// ─────────────────────────────────────────────────────────
function NavBar({ DS, isMobile }) {
  const [hovered, setHovered] = React.useState(null);

  const navLinks = [
    { id: 'projetos', label: 'projetos', href: '#projetos' },
    { id: 'sobre',    label: 'sobre',    href: '#sobre' },
    { id: 'contato',  label: 'contato',  href: '#contato' },
  ];

  const linkBase = {
    fontFamily: '"JetBrains Mono", monospace',
    fontSize: 12,
    letterSpacing: '0.12em',
    textTransform: 'lowercase',
    color: DS.inkSoft,
    textDecoration: 'none',
    padding: '4px 0',
    position: 'relative',
    transition: 'color 0.2s',
  };

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      background: DS.dark
        ? 'rgba(20, 23, 28, 0.88)'
        : 'rgba(250, 250, 247, 0.88)',
      borderBottom: `1px solid ${DS.rule}`,
    }}>
      <div style={{
        maxWidth: 760,
        margin: '0 auto',
        padding: isMobile ? '0 20px' : '0 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 52,
      }}>
        {/* Logo / nome */}
        <a href="#" style={{
          fontFamily: '"Newsreader", Georgia, serif',
          fontStyle: 'italic',
          fontSize: 17,
          color: DS.ink,
          textDecoration: 'none',
          letterSpacing: '-0.01em',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', transform: 'scale(0.85)', transformOrigin: 'center' }}>
            <VitoriaRegia size={28} label="HM"/>
          </span>
          <span>Hugo Matheus</span>
        </a>

        {/* Links */}
        <div style={{ display: 'flex', gap: isMobile ? 16 : 28, alignItems: 'center' }}>
          {navLinks.map(({ id, label, href }) => (
            <a
              key={id}
              href={href}
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                ...linkBase,
                color: hovered === id ? DS.red : DS.inkSoft,
              }}
            >
              {label}
              <span style={{
                position: 'absolute',
                bottom: 0, left: 0,
                height: 1,
                width: hovered === id ? '100%' : '0%',
                background: DS.red,
                transition: 'width 0.2s ease',
              }}/>
            </a>
          ))}
          <a
            href="https://github.com/o-hugo/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...linkBase,
              color: hovered === 'gh' ? DS.red : DS.inkFaint,
            }}
            onMouseEnter={() => setHovered('gh')}
            onMouseLeave={() => setHovered(null)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}

// ─────────────────────────────────────────────────────────
// Hero — bloco "água" compacto, centrado, editorial
// ─────────────────────────────────────────────────────────
function Hero({ DS, isMobile, isTablet }) {
  const lilySize = isMobile ? 110 : 140;

  return (
    <header style={{
      maxWidth: 760,
      margin: '0 auto',
      padding: isMobile ? '48px 20px 40px' : '64px 32px 56px',
      animation: 'fade-up 0.6s ease both',
    }}>
      {/* Bloco de água */}
      <div style={{
        position: 'relative',
        borderRadius: 16,
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 30% 35%, #1a2733 0%, #0c1218 55%, #06090d 100%)',
        padding: isMobile ? '28px 24px 28px' : '32px 48px',
        boxShadow: 'inset 0 0 80px rgba(0,0,0,0.5), 0 8px 28px rgba(0,0,0,0.35)',
        border: '1px solid rgba(90, 120, 145, 0.16)',
        marginBottom: 40,
      }}>
        {/* Turbulência da água */}
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

        {/* Reflexos */}
        <div className="rn-anim" style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: `
            radial-gradient(ellipse 460px 90px at 22% 18%, rgba(140, 175, 200, 0.11) 0%, transparent 70%),
            radial-gradient(ellipse 340px 70px at 78% 78%, rgba(110, 145, 170, 0.08) 0%, transparent 70%)
          `,
          animation: 'rn-shimmer 14s ease-in-out infinite alternate',
        }}/>

        {/* Folhinhas derivando */}
        {!isMobile && (
          <React.Fragment>
            <div className="rn-anim" style={{ position: 'absolute', top: '11%',  left: '3%',  animation: 'rn-drift-a 11s ease-in-out infinite' }}>
              <MiniLily size={28} opacity={0.75}/>
            </div>
            <div className="rn-anim" style={{ position: 'absolute', bottom: '18%', left: '6%', animation: 'rn-drift-b 14s ease-in-out infinite' }}>
              <MiniLily size={18} opacity={0.6}/>
            </div>
            <div className="rn-anim" style={{ position: 'absolute', bottom: '12%', right: '4%',  animation: 'rn-drift-a 17s ease-in-out infinite' }}>
              <MiniLily size={22} opacity={0.55}/>
            </div>
          </React.Fragment>
        )}

        {/* Marca d'água — coordenadas */}
        <div style={{ position: 'absolute', top: 12, right: 16, fontFamily: '"JetBrains Mono", monospace', fontSize: 9, color: 'rgba(232,230,223,0.35)', letterSpacing: '0.16em', whiteSpace: 'nowrap' }}>
          manaus · −3.10°, −60.02°
        </div>

        {/* Conteúdo do hero — layout flex */}
        <div style={{
          position: 'relative', zIndex: 2,
          display: 'flex',
          flexDirection: (isMobile || isTablet) ? 'column' : 'row',
          alignItems: 'center',
          gap: isMobile ? 20 : 32,
        }}>
          {/* Vitória-régia + curva */}
          <div className="rn-anim" style={{ animation: 'rn-float-lily 9s ease-in-out infinite', flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <VitoriaRegia size={lilySize}/>
            <BellCurve w={lilySize + 40} h={38}/>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 9, color: 'rgba(232,230,223,0.4)', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>
              fig. 0 — N(μ, σ²)
            </div>
          </div>

          {/* Texto */}
          <div className="rn-anim" style={{ animation: 'rn-float-name 7s ease-in-out infinite', textAlign: (isMobile || isTablet) ? 'center' : 'left' }}>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.22em', color: DS.red, textTransform: 'uppercase', marginBottom: 14 }}>
              ▌ bacharelando · estatística · ufam
            </div>
            <h1 style={{
              fontWeight: 700, fontSize: isMobile ? 30 : 44,
              lineHeight: 0.95, margin: '0 0 16px',
              letterSpacing: '-0.035em',
              color: '#f1eee5',
              textShadow: '0 6px 28px rgba(0,0,0,0.65)',
            }}>
              Hugo Matheus<br/>Rocha<span style={{ color: DS.red }}>.</span>
            </h1>
            <p style={{ fontSize: isMobile ? 13.5 : 15, color: 'rgba(232, 230, 223, 0.78)', maxWidth: 380, lineHeight: 1.55, margin: '0 0 16px' }}>
              Estatístico em formação. Transformo ruído em sinal com pipelines reprodutíveis, controle de processo e séries temporais.
            </p>
            {/* Teorema de Bayes */}
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: isMobile ? 10 : 11, color: 'rgba(232,230,223,0.4)', letterSpacing: '0.08em' }}>
              P(A|B) = P(B|A)·P(A) / P(B)
            </div>
          </div>
        </div>
      </div>

      {/* Bio editorial abaixo do bloco — estilo astro-sienna */}
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 20 : 40, alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: 15.5, lineHeight: 1.72, color: DS.inkSoft, margin: 0 }}>
            Bacharelando em <span style={{ color: DS.ink, fontWeight: 500 }}>Estatística</span> na UFAM, focado em transformar dados brutos em insights acionáveis para decisões baseadas em evidência.
            Uno rigor estatístico ao desenvolvimento de pipelines ETL e BI, priorizando clareza técnica e segurança da informação.
          </p>
        </div>
        {/* Links rápidos */}
        <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 6, minWidth: 120 }}>
          {[
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hugo-matheus-637bb0350/', icon: '↗' },
            { label: 'E-mail', href: 'mailto:hugo-matheus.rocha@ufam.edu.br', icon: '↗' },
            { label: 'GitHub', href: 'https://github.com/o-hugo/portfolio', icon: '↗' },
          ].map(({ label, href, icon }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{
              fontFamily: '"JetBrains Mono", monospace', fontSize: 12,
              color: DS.red, textDecoration: 'none',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              gap: 12, padding: '5px 0',
              borderBottom: `1px dotted ${DS.rule}`,
            }}>
              <span>{label}</span><span style={{ opacity: 0.6 }}>{icon}</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

// ─────────────────────────────────────────────────────────
// Divider editorial
// ─────────────────────────────────────────────────────────
function SectionTitle({ label, DS, isMobile }) {
  return (
    <div style={{
      maxWidth: 760,
      margin: '0 auto',
      padding: isMobile ? '0 20px' : '0 32px',
      marginBottom: 24,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10.5, letterSpacing: '0.22em', color: DS.red, textTransform: 'uppercase' }}>
          § {label}
        </span>
        <div style={{ flex: 1, height: 1, background: DS.rule }}/>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// ProjectCard — estilo "post list" do astro-sienna
// ─────────────────────────────────────────────────────────
function ProjectCard({ p, DS, isMobile }) {
  const [hovered, setHovered] = React.useState(false);

  const TAG_KIND = {
    stack:  { dot: DS.red      },
    lib:    { dot: DS.accent   },
    method: { dot: DS.amber    },
    ctx:    { dot: DS.inkFaint },
  };

  const chartLabel = {
    line:  'I-MR control',
    flow:  'pipeline ETL',
    cusum: 'decomposição STL',
    bars:  'classes (treino)',
  };

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        padding: isMobile ? '24px 0' : '28px 0',
        borderBottom: `1px solid ${DS.rule}`,
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 140px',
        gap: isMobile ? 16 : 32,
        transition: 'background 0.2s',
      }}
    >
      {/* Stripe de cor na esquerda */}
      <div style={{
        position: 'absolute', left: -32, top: 0, bottom: 0, width: 2,
        background: hovered ? DS.red : 'transparent',
        transition: 'background 0.2s',
      }}/>

      {/* Conteúdo principal */}
      <div>
        {/* Meta linha */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10.5, color: DS.red, letterSpacing: '0.06em' }}>
            {p.id}
          </span>
          <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, color: DS.inkFaint }}>
            μ = {p.mu} · σ = {p.sigma}
          </span>
          <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, color: DS.inkFaint, marginLeft: 'auto' }}>
            {p.date}
          </span>
        </div>

        {/* Título */}
        <h2 style={{
          fontSize: isMobile ? 18 : 21, fontWeight: 600,
          margin: '0 0 10px', color: DS.ink,
          letterSpacing: '-0.015em', lineHeight: 1.2,
          transition: 'color 0.2s',
          color: hovered ? DS.red : DS.ink,
        }}>
          {p.title}
        </h2>

        <p style={{ fontSize: 13.5, lineHeight: 1.65, color: DS.inkSoft, margin: '0 0 14px' }}>
          {p.body}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 14 }}>
          {p.tags.map(([kind, label]) => {
            const k = TAG_KIND[kind];
            return (
              <span key={label} style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 10.5, padding: '3px 8px 3px 6px',
                background: DS.chipBg, color: DS.inkSoft,
                border: `1px solid ${DS.rule}`,
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: k.dot, display: 'inline-block', flexShrink: 0 }}/>
                {label}
              </span>
            );
          })}
        </div>

        {/* Link */}
        <a href={p.href} target={p.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{
          fontFamily: '"JetBrains Mono", monospace', fontSize: 11.5,
          color: DS.red, fontWeight: 600, letterSpacing: '0.04em',
          textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6,
        }}>
          <span style={{ borderBottom: `1.5px solid ${DS.red}`, paddingBottom: 1 }}>{p.link}</span>
          <span>→</span>
        </a>
      </div>

      {/* Mini viz — coluna direita */}
      <div style={{
        borderLeft: isMobile ? 'none' : `1px dashed ${DS.rule}`,
        borderTop: isMobile ? `1px dashed ${DS.rule}` : 'none',
        paddingLeft: isMobile ? 0 : 20,
        paddingTop: isMobile ? 12 : 0,
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', gap: 8,
      }}>
        <Sparkline kind={p.chart}/>
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 9.5, color: DS.inkFaint, letterSpacing: '0.06em' }}>
          fig. {p.id.slice(-1)} — {chartLabel[p.chart]}
        </div>
      </div>
    </article>
  );
}

// ─────────────────────────────────────────────────────────
// Sidebar de tecnologias (inline, compacta)
// ─────────────────────────────────────────────────────────
function TechSection({ DS, isMobile }) {
  const TECH_GROUPS = [
    { label: 'linguagens & dados', color: DS.red,    items: ['Python', 'SQL', 'JavaScript', 'HTML/CSS'] },
    { label: 'bibliotecas',         color: DS.accent, items: ['DuckDB', 'Pandas', 'Statsmodels', 'Scikit-learn', 'Seaborn', 'Chart.js'] },
    { label: 'métodos',             color: DS.amber,  items: ['CEP', 'STL', 'Séries Temporais', 'EDA', 'Regex'] },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 24, flexWrap: 'wrap' }}>
      {TECH_GROUPS.map((group) => (
        <div key={group.label} style={{ flex: 1, minWidth: 180 }}>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 9.5, letterSpacing: '0.14em', color: DS.inkFaint, textTransform: 'uppercase', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
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
  );
}

// ─────────────────────────────────────────────────────────
// Componente principal
// ─────────────────────────────────────────────────────────
function DistribuicaoVariant({ paletteId = 'noite' }) {
  const DS = PALETTES[paletteId] || PALETTES.noite;
  const { isMobile, isTablet } = useViewport();

  const contentPad = isMobile ? '0 20px' : '0 32px';

  return (
    <PaletteCtx.Provider value={DS}>
      {/* Fundo com grade */}
      <div style={{
        minHeight: '100vh',
        backgroundColor: DS.bg,
        backgroundImage: `
          linear-gradient(${DS.grid} 1px, transparent 1px),
          linear-gradient(90deg, ${DS.grid} 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        fontFamily: '"Manrope", system-ui, sans-serif',
        color: DS.ink,
      }}>

        {/* NAV */}
        <NavBar DS={DS} isMobile={isMobile}/>

        {/* HERO */}
        <Hero DS={DS} isMobile={isMobile} isTablet={isTablet}/>

        {/* PROJETOS */}
        <section id="projetos" style={{ maxWidth: 760, margin: '0 auto', padding: contentPad, paddingBottom: 0 }}>
          <SectionTitle label="projetos selecionados" DS={DS} isMobile={isMobile}/>
          <div style={{ padding: contentPad, paddingTop: 0, borderLeft: isMobile ? 'none' : `1px solid ${DS.rule}`, marginLeft: isMobile ? 0 : 32, paddingLeft: isMobile ? 0 : 32 }}>
            {DSProjects.map((p, idx) => (
              <div key={p.id} style={{ animation: `fade-up 0.5s ease ${0.1 + idx * 0.08}s both` }}>
                <ProjectCard p={p} DS={DS} isMobile={isMobile}/>
              </div>
            ))}
            <div style={{ paddingTop: 16, fontFamily: '"JetBrains Mono", monospace', fontSize: 10, color: DS.inkFaint }}>
              n = 4 · ordem cronológica
            </div>
          </div>
        </section>

        {/* SOBRE + TECNOLOGIAS */}
        <section id="sobre" style={{ maxWidth: 760, margin: '0 auto', padding: contentPad, paddingTop: 56, paddingBottom: 0 }}>
          <SectionTitle label="sobre" DS={DS} isMobile={isMobile}/>
          <div style={{ padding: isMobile ? '0 0 0 0' : '0 0 0 0' }}>
            <p style={{ fontSize: 15, lineHeight: 1.72, color: DS.inkSoft, margin: '0 0 32px', maxWidth: 600 }}>
              Bacharelando em <span style={{ color: DS.ink }}>Estatística</span> na UFAM, com interesse em inferência bayesiana, séries temporais e comunicação de dados. Acredito que boas análises são tão importantes quanto boas visualizações.
            </p>
            <TechSection DS={DS} isMobile={isMobile}/>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" style={{ maxWidth: 760, margin: '0 auto', padding: contentPad, paddingTop: 56, paddingBottom: 0 }}>
          <SectionTitle label="contato" DS={DS} isMobile={isMobile}/>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 24 }}>
            {[
              { label: 'linkedin', sub: 'hugo-matheus-637bb0350', href: 'https://www.linkedin.com/in/hugo-matheus-637bb0350/' },
              { label: 'e-mail', sub: 'hugo-matheus.rocha@ufam.edu.br', href: 'mailto:hugo-matheus.rocha@ufam.edu.br' },
              { label: 'github', sub: 'o-hugo/portfolio', href: 'https://github.com/o-hugo/portfolio' },
            ].map(({ label, sub, href }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{
                flex: 1, display: 'flex', flexDirection: 'column', gap: 4,
                padding: '16px 20px', background: DS.panel, border: `1px solid ${DS.rule}`,
                textDecoration: 'none', borderRadius: 8,
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = DS.red}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = DS.rule}
              >
                <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10.5, letterSpacing: '0.12em', color: DS.red, textTransform: 'lowercase' }}>
                  {label} →
                </span>
                <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: DS.inkFaint, marginTop: 2 }}>
                  {sub}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{
          maxWidth: 760,
          margin: '0 auto',
          padding: isMobile ? '48px 20px 36px' : '64px 32px 40px',
          display: 'flex', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap',
          borderTop: `1px solid ${DS.rule}`,
          marginTop: 64,
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: isMobile ? 9.5 : 10.5,
          color: DS.inkFaint,
        }}>
          <span>hugo matheus rocha · estatística ufam · 2026</span>
          <span>p ≪ 0.001 · built with care</span>
        </footer>
      </div>
    </PaletteCtx.Provider>
  );
}

window.DistribuicaoVariant = DistribuicaoVariant;
