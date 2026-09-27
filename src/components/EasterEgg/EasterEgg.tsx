import { useCallback, useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '../../lib/utils'

const TITLE_ID = 'easter-egg-title'
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
    const interval = window.setInterval(
      () => {
        setSymbol((prev) => {
          const idx = SYMBOLS.indexOf(prev as (typeof SYMBOLS)[number])
          return SYMBOLS[(idx + 1) % SYMBOLS.length]
        })
      },
      70 + index * 30,
    )

    const stop = window.setTimeout(
      () => {
        window.clearInterval(interval)
        setSymbol(WIN_SYMBOL)
        setStopped(true)
        onStopped()
      },
      800 + index * 500,
    )

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

function SlotGame({
  onClose,
  closeRef,
}: {
  onClose: () => void
  closeRef: RefObject<HTMLButtonElement | null>
}) {
  const [stoppedCount, setStoppedCount] = useState(0)
  const jackpot = stoppedCount >= 3

  const handleStopped = useCallback(() => setStoppedCount((c) => c + 1), [])

  return (
    <>
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
        // Dev mode unlocked
      </p>
      <h2
        id={TITLE_ID}
        className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl"
      >
        {jackpot ? <span className="text-gradient-accent">JACKPOT!</span> : 'Spinning…'}
      </h2>

      <div className="mt-8 flex justify-center gap-3 sm:gap-4">
        <Reel index={0} onStopped={handleStopped} />
        <Reel index={1} onStopped={handleStopped} />
        <Reel index={2} onStopped={handleStopped} />
      </div>

      <p className="mt-6 min-h-5 text-sm text-muted" aria-live="polite">
        {jackpot ? (
          <>
            Nice moves — <span className="text-foreground">7 · 7 · 7</span>. Some things never
            change.
          </>
        ) : (
          'Three of a kind wins…'
        )}
      </p>

      <button
        ref={closeRef}
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
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const previouslyFocused = document.activeElement as HTMLElement | null
    panelRef.current?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab' || !panelRef.current) return

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
      previouslyFocused?.focus()
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
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={TITLE_ID}
            tabIndex={-1}
            initial={{ scale: 0.92, y: 12 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-3xl border border-line bg-surface p-8 text-center focus:outline-none"
          >
            <SlotGame onClose={onClose} closeRef={closeRef} />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
