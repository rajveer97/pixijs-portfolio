import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '../../lib/utils'

const SYMBOLS = ['7', 'BAR', '★', '◆'] as const
const WIN_SYMBOL = '7'

function symbolColor(symbol: string): string {
  switch (symbol) {
    case '7':
      return 'text-yellow-400'
    case 'BAR':
      return 'text-accent'
    case '★':
      return 'text-cyan'
    case '◆':
      return 'text-blue'
    default:
      return 'text-muted'
  }
}

function Reel({ index, onStopped }: { index: number; onStopped: () => void }) {
  const [symbol, setSymbol] = useState<string>(SYMBOLS[0])
  const [stopped, setStopped] = useState(false)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSymbol((prev) => {
        const idx = SYMBOLS.indexOf(prev as (typeof SYMBOLS)[number])
        return SYMBOLS[(idx + 1) % SYMBOLS.length]
      })
    }, 70 + index * 30)

    const stop = window.setTimeout(() => {
      window.clearInterval(interval)
      setSymbol(WIN_SYMBOL)
      setStopped(true)
      onStopped()
    }, 800 + index * 500)

    return () => {
      window.clearInterval(interval)
      window.clearTimeout(stop)
    }
  }, [index, onStopped])

  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-line-strong bg-bg-elevated sm:h-28 sm:w-28">
      <span
        className={cn(
          'font-display text-4xl font-bold sm:text-5xl',
          symbolColor(symbol),
          stopped && 'animate-pulse-glow',
        )}
      >
        {symbol}
      </span>
    </div>
  )
}

function SlotGame({ onClose }: { onClose: () => void }) {
  const [stoppedCount, setStoppedCount] = useState(0)
  const jackpot = stoppedCount >= 3

  const handleStopped = useCallback(() => setStoppedCount((c) => c + 1), [])

  return (
    <>
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
        // Dev mode unlocked
      </p>
      <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
        {jackpot ? <span className="text-gradient-accent">JACKPOT!</span> : 'Spinning…'}
      </h2>

      <div className="mt-8 flex justify-center gap-3 sm:gap-4">
        <Reel index={0} onStopped={handleStopped} />
        <Reel index={1} onStopped={handleStopped} />
        <Reel index={2} onStopped={handleStopped} />
      </div>

      <p className="mt-6 min-h-5 text-sm text-muted">
        {jackpot ? (
          <>
            Nice moves — <span className="text-white">7 · 7 · 7</span>. Some things never change.
          </>
        ) : (
          'Three of a kind wins…'
        )}
      </p>

      <button
        type="button"
        onClick={onClose}
        className="mt-8 rounded-full border border-line-strong px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent"
      >
        Close
      </button>
    </>
  )
}

interface EasterEggProps {
  open: boolean
  onClose: () => void
}

export function EasterEgg({ open, onClose }: EasterEggProps) {
  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-bg/85 p-5 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Konami code unlocked"
        >
          <motion.div
            initial={{ scale: 0.92, y: 12 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-3xl border border-line bg-surface p-8 text-center"
          >
            <SlotGame onClose={onClose} />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
