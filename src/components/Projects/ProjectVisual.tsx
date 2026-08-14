interface ProjectVisualProps {
  variant: 'reel-framework' | 'reel-slot' | 'techtube' | 'civic'
  className?: string
}

const SEVEN = { y: 50 }

function ReelSymbol({
  type,
  x,
  y,
  color,
}: {
  type: 'seven' | 'bar' | 'cherry' | 'diamond'
  x: number
  y: number
  color: string
}) {
  return (
    <g transform={`translate(${x} ${y})`} opacity="0.95">
      {type === 'seven' && (
        <text textAnchor="middle" y="22" fontSize="30" fontWeight="700" fill={color} fontFamily="Space Grotesk, sans-serif">
          7
        </text>
      )}
      {type === 'bar' && (
        <>
          <rect x="-22" y="-9" width="44" height="24" rx="4" fill={color} />
          <text textAnchor="middle" y="10" fontSize="10" fontWeight="700" fill="#0a0a0c" fontFamily="JetBrains Mono, monospace">
            BAR
          </text>
        </>
      )}
      {type === 'cherry' && (
        <>
          <circle cx="-7" cy="3" r="8" fill="#ef4444" />
          <circle cx="6" cy="6" r="8" fill="#ef4444" />
          <line x1="-2" y1="-4" x2="-5" y2="-14" stroke="#22c55e" strokeWidth="2" />
          <circle cx="5" cy="-13" r="4" fill="#22c55e" />
        </>
      )}
      {type === 'diamond' && (
        <>
          <polygon points="0,-11 11,0 0,11 -11,0" fill={color} />
          <polygon points="0,-4 4,0 0,4 -4,0" fill="#0a0a0c" />
        </>
      )}
    </g>
  )
}

function ReelColumn({ x, color }: { x: number; color: string }) {
  const symbols: Array<'seven' | 'bar' | 'cherry' | 'diamond'> = ['seven', 'bar', 'cherry', 'diamond', 'seven']
  return (
    <g>
      <rect x={x} y="10" width="64" height="140" rx="8" fill="#0d0d12" stroke={color} strokeOpacity="0.35" />
      {symbols.map((s, i) => (
        <ReelSymbol key={i} type={s} x={x + 32} y={SEVEN.y + i * 26} color={color} />
      ))}
    </g>
  )
}

function ReelScene({ accent, secondary }: { accent: string; secondary: string }) {
  return (
    <svg viewBox="0 0 360 170" className="h-full w-full" role="img" aria-hidden="true">
      <defs>
        <linearGradient id={`reelBg-${accent.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#121218" />
          <stop offset="1" stopColor="#0a0a0c" />
        </linearGradient>
        <pattern id={`grid-${accent.replace('#', '')}`} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke={accent} strokeOpacity="0.06" />
        </pattern>
      </defs>
      <rect width="360" height="170" fill={`url(#reelBg-${accent.replace('#', '')})`} />
      <rect width="360" height="170" fill={`url(#grid-${accent.replace('#', '')})`} />
      <rect x="0" y="58" width="360" height="44" fill={accent} opacity="0.05" />
      <ReelColumn x={24} color={accent} />
      <ReelColumn x={100} color={secondary} />
      <ReelColumn x={176} color={accent} />
      <ReelColumn x={252} color={secondary} />
      <rect x="14" y="52" width="332" height="56" rx="8" fill="none" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="2" />
    </svg>
  )
}

function TechTubeScene() {
  return (
    <svg viewBox="0 0 360 170" className="h-full w-full" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="ttBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#121218" />
          <stop offset="1" stopColor="#0a0a0c" />
        </linearGradient>
      </defs>
      <rect width="360" height="170" fill="url(#ttBg)" />
      <circle cx="180" cy="72" r="34" fill="#8b5cf6" opacity="0.12" />
      <rect x="152" y="52" width="56" height="40" rx="10" fill="#ff0000" opacity="0.9" />
      <polygon points="172,62 172,82 188,72" fill="#ffffff" />
      <g>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
          const h = 8 + ((i * 13) % 26)
          return (
            <rect
              key={i}
              x={60 + i * 30}
              y={128 - h}
              width="8"
              height={h}
              rx="2"
              fill="#8b5cf6"
              fillOpacity={i % 2 === 0 ? 0.95 : 0.5}
            />
          )
        })}
      </g>
      {[0, 1, 2].map((i) => (
        <rect key={i} x={230} y={48 + i * 26} width="90" height="10" rx="5" fill="#ffffff" opacity="0.18" />
      ))}
    </svg>
  )
}

function CivicScene() {
  return (
    <svg viewBox="0 0 360 170" className="h-full w-full" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="civicBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#121218" />
          <stop offset="1" stopColor="#0a0a0c" />
        </linearGradient>
      </defs>
      <rect width="360" height="170" fill="url(#civicBg)" />
      <g stroke="#ffffff" strokeOpacity="0.08">
        {[0, 1, 2, 3, 4].map((i) => (
          <line key={i} x1="40" y1={30 + i * 30} x2="320" y2={30 + i * 30} />
        ))}
      </g>
      <rect x="70" y="95" width="34" height="35" rx="4" fill="#3b82f6" opacity="0.9" />
      <rect x="118" y="75" width="34" height="55" rx="4" fill="#8b5cf6" opacity="0.9" />
      <rect x="166" y="58" width="34" height="72" rx="4" fill="#22d3ee" opacity="0.9" />
      <g fill="none" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round">
        <path d="M70 112 L118 98 L166 84" />
        <path d="M70 128 L118 114 L166 102" />
      </g>
      <circle cx="270" cy="66" r="28" fill="none" stroke="#3b82f6" strokeOpacity="0.35" strokeWidth="6" />
      <path d="M270 66 A 28 28 0 0 1 290 46" fill="none" stroke="#8b5cf6" strokeWidth="6" strokeLinecap="round" />
      <text x="270" y="73" textAnchor="middle" fontSize="14" fontWeight="700" fill="#ffffff" fontFamily="Space Grotesk, sans-serif">
        72%
      </text>
    </svg>
  )
}

export function ProjectVisual({ variant, className }: ProjectVisualProps) {
  return (
    <div className={className}>
      {variant === 'reel-framework' && <ReelScene accent="#8b5cf6" secondary="#3b82f6" />}
      {variant === 'reel-slot' && <ReelScene accent="#fbbf24" secondary="#ef4444" />}
      {variant === 'techtube' && <TechTubeScene />}
      {variant === 'civic' && <CivicScene />}
    </div>
  )
}
