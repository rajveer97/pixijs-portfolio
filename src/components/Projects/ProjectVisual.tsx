import type { ReactNode } from 'react'
import type { ProjectVisualVariant } from '../../data/projects'

interface ProjectVisualProps {
  variant: ProjectVisualVariant
  className?: string
}

/** Canvas matches the 16:9 card frame so `slice` never crops the artwork. */
const VIEW_W = 360
const VIEW_H = 203
const ART_H = 170
const ART_OFFSET = (VIEW_H - ART_H) / 2

interface SceneProps {
  id: string
  children: ReactNode
  gridStroke?: string
  glow?: string
}

function Scene({ id, children, gridStroke = '#ffffff', glow }: SceneProps) {
  return (
    <svg
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#141420" />
          <stop offset="1" stopColor="#0a0a0c" />
        </linearGradient>
        <pattern id={`${id}-grid`} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke={gridStroke} strokeOpacity="0.06" />
        </pattern>
        {glow ? (
          <radialGradient id={`${id}-glow`} cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor={glow} stopOpacity="0.3" />
            <stop offset="1" stopColor={glow} stopOpacity="0" />
          </radialGradient>
        ) : null}
      </defs>

      <rect width={VIEW_W} height={VIEW_H} fill={`url(#${id}-bg)`} />
      <rect width={VIEW_W} height={VIEW_H} fill={`url(#${id}-grid)`} />
      {glow ? (
        <ellipse cx={VIEW_W / 2} cy={VIEW_H / 2} rx={150} ry={80} fill={`url(#${id}-glow)`} />
      ) : null}

      <g transform={`translate(0 ${ART_OFFSET})`}>{children}</g>
    </svg>
  )
}

interface Candle {
  x: number
  high: number
  low: number
  open: number
  close: number
}

const CANDLES: Candle[] = [
  { x: 44, high: 74, low: 130, open: 120, close: 94 },
  { x: 82, high: 84, low: 124, open: 98, close: 110 },
  { x: 120, high: 70, low: 118, open: 110, close: 84 },
  { x: 158, high: 76, low: 126, open: 88, close: 112 },
  { x: 196, high: 62, low: 118, open: 106, close: 76 },
  { x: 234, high: 54, low: 102, open: 80, close: 66 },
  { x: 272, high: 58, low: 110, open: 70, close: 98 },
  { x: 310, high: 40, low: 94, open: 90, close: 54 },
]

function TradingScene() {
  return (
    <Scene id="trading" glow="#22c3ee">
      <g stroke="#ffffff" strokeOpacity="0.05">
        {[0, 1, 2, 3, 4].map((i) => (
          <line key={i} x1="16" y1={34 + i * 28} x2="344" y2={34 + i * 28} />
        ))}
      </g>

      {CANDLES.map((candle) => {
        const isUp = candle.close < candle.open
        const color = isUp ? '#22c55e' : '#ef4444'
        const bodyTop = Math.min(candle.open, candle.close)
        const bodyHeight = Math.max(Math.abs(candle.open - candle.close), 2)

        return (
          <g key={candle.x}>
            <line
              x1={candle.x}
              y1={candle.high}
              x2={candle.x}
              y2={candle.low}
              stroke={color}
              strokeOpacity="0.5"
            />
            <rect
              x={candle.x - 6}
              y={bodyTop}
              width="12"
              height={bodyHeight}
              rx="2"
              fill={color}
              fillOpacity="0.85"
            />
          </g>
        )
      })}

      <polyline
        points="44,94 82,110 120,84 158,112 196,76 234,66 272,98 310,54"
        fill="none"
        stroke="#22c3ee"
        strokeOpacity="0.55"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
    </Scene>
  )
}

const FRAMEWORK_MODULES = [
  { label: 'REEL SYSTEM', side: 'left' },
  { label: 'SYMBOLS', side: 'left' },
  { label: 'ANIMATION', side: 'left' },
  { label: 'ASSETS', side: 'right' },
  { label: 'GAME STATE', side: 'right' },
  { label: 'LAYOUT', side: 'right' },
] as const

const CHIP = { w: 104, h: 30, left: 16, right: 240 } as const
const CHIP_Y = [16, 70, 124] as const
const CORE = { x: 140, y: 62, w: 80, h: 46 } as const

function FrameworkScene() {
  return (
    <Scene id="framework" glow="#8b5cf6">
      {FRAMEWORK_MODULES.map((module, i) => {
        const x = module.side === 'left' ? CHIP.left : CHIP.right
        const y = CHIP_Y[i % CHIP_Y.length]
        const isLeft = module.side === 'left'
        const lineStart = isLeft ? x + CHIP.w : x
        const lineEnd = isLeft ? CORE.x : CORE.x + CORE.w

        return (
          <g key={module.label}>
            <line
              x1={lineStart}
              y1={y + CHIP.h / 2}
              x2={lineEnd}
              y2={CORE.y + CORE.h / 2}
              stroke="#8b5cf6"
              strokeOpacity="0.3"
            />
            <circle
              cx={isLeft ? lineStart : lineEnd}
              cy={y + CHIP.h / 2}
              r="2"
              fill="#8b5cf6"
              fillOpacity="0.7"
            />
            <rect
              x={x}
              y={y}
              width={CHIP.w}
              height={CHIP.h}
              rx="8"
              fill="#12121b"
              stroke="#8b5cf6"
              strokeOpacity="0.28"
            />
            <text
              x={x + CHIP.w / 2}
              y={y + CHIP.h / 2 + 3.5}
              textAnchor="middle"
              fontSize="9"
              fontWeight="600"
              fill="#c7c7d1"
              letterSpacing="0.6"
              fontFamily="JetBrains Mono, monospace"
            >
              {module.label}
            </text>
          </g>
        )
      })}

      <rect
        x={CORE.x}
        y={CORE.y}
        width={CORE.w}
        height={CORE.h}
        rx="10"
        fill="#0d0d14"
        stroke="#8b5cf6"
        strokeOpacity="0.7"
      />
      <text
        x={CORE.x + CORE.w / 2}
        y={CORE.y + 21}
        textAnchor="middle"
        fontSize="12"
        fontWeight="700"
        fill="#ffffff"
        letterSpacing="1"
        fontFamily="Space Grotesk, sans-serif"
      >
        GAME
      </text>
      <text
        x={CORE.x + CORE.w / 2}
        y={CORE.y + 36}
        textAnchor="middle"
        fontSize="12"
        fontWeight="700"
        fill="#8b5cf6"
        letterSpacing="1"
        fontFamily="Space Grotesk, sans-serif"
      >
        CORE
      </text>
    </Scene>
  )
}

function CivicScene() {
  return (
    <Scene id="civic">
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
      <circle
        cx="270"
        cy="72"
        r="28"
        fill="none"
        stroke="#3b82f6"
        strokeOpacity="0.35"
        strokeWidth="6"
      />
      <path
        d="M270 72 A 28 28 0 0 1 290 52"
        fill="none"
        stroke="#8b5cf6"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <text
        x="270"
        y="76"
        textAnchor="middle"
        fontSize="9"
        fontWeight="600"
        fill="#c7c7d1"
        letterSpacing="0.6"
        fontFamily="JetBrains Mono, monospace"
      >
        SCORECARD
      </text>
    </Scene>
  )
}

function TechTubeScene() {
  return (
    <img
      src={`${import.meta.env.BASE_URL}techtube_icon.png`}
      alt=""
      loading="lazy"
      decoding="async"
      className="h-full w-full object-cover"
    />
  )
}

export function ProjectVisual({ variant, className }: ProjectVisualProps) {
  return (
    <div className={className}>
      {variant === 'game-engine' && <FrameworkScene />}
      {variant === 'techtube' && <TechTubeScene />}
      {variant === 'trading' && <TradingScene />}
      {variant === 'civic' && <CivicScene />}
    </div>
  )
}
