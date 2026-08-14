import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface LoadingScreenProps {
  onComplete: () => void
}

interface LogLine {
  text: string
  done?: boolean
}

const TOTAL_MS = 2800
const LOG_STEPS: Array<{ at: number; line: string; done?: boolean }> = [
  { at: 80, line: 'Initializing renderer…' },
  { at: 650, line: 'WebGL context ready', done: true },
  { at: 850, line: 'Initializing game engine…' },
  { at: 1450, line: 'Engine online', done: true },
  { at: 1650, line: 'Initializing portfolio…' },
  { at: 2250, line: 'Portfolio online', done: true },
]

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [logs, setLogs] = useState<LogLine[]>([])
  const [progress, setProgress] = useState(0)
  const [welcome, setWelcome] = useState(false)
  const completedRef = useRef(false)

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []

    for (const step of LOG_STEPS) {
      timers.push(
        setTimeout(() => {
          setLogs((prev) => [...prev, { text: step.line, done: step.done }])
        }, step.at),
      )
    }

    timers.push(
      setTimeout(() => {
        setWelcome(true)
      }, 2400),
    )
    timers.push(
      setTimeout(() => {
        completedRef.current = true
        onComplete()
      }, TOTAL_MS),
    )

    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  useEffect(() => {
    let raf = 0
    const start = performance.now()

    const tick = (now: number) => {
      const elapsed = now - start
      const p = Math.min(elapsed / TOTAL_MS, 1)
      setProgress(Math.round(p * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  const skip = () => {
    if (completedRef.current) return
    completedRef.current = true
    onComplete()
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col justify-between bg-bg px-6 py-8 sm:px-12 sm:py-10"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: 'easeInOut' }}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">Rajveer Pandey</span>
        <button
          type="button"
          onClick={skip}
          className="cursor-pointer rounded-full border border-line px-4 py-1.5 font-mono text-xs text-muted transition-colors hover:border-line-strong hover:text-foreground"
        >
          Skip
        </button>
      </div>

      <div className="mx-auto w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: welcome ? 1 : 0, y: welcome ? 0 : 12 }}
          transition={{ duration: 0.35 }}
          className="mb-6"
          aria-hidden={!welcome}
        >
          {welcome ? (
            <h1 className="font-display text-2xl font-bold tracking-tight sm:text-4xl">
              <span className="text-gradient">WELCOME, RAJVEER.</span>
            </h1>
          ) : (
            <span className="font-mono text-sm text-faint">Initializing experience…</span>
          )}
        </motion.div>

        <div className="font-mono text-xs leading-7 sm:text-sm">
          {logs.map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-3 text-muted"
            >
              <span className="text-accent">›</span>
              <span>{log.text}</span>
              {log.done ? <span className="text-cyan">✓</span> : null}
            </motion.div>
          ))}
        </div>

        <div className="mt-8" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}>
          <div className="flex items-center justify-between font-mono text-[11px] text-faint">
            <span>LOADING EXPERIENCE</span>
            <span>{progress}%</span>
          </div>
          <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-surface-2">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-accent to-blue"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: 'linear' }}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between font-mono text-[11px] text-faint">
        <span>v1.0.0 — game.dev</span>
        <span>pixi + ts + webgl</span>
      </div>
    </motion.div>
  )
}
