import { useEffect, useRef } from 'react'
import { Application, Container, Graphics, Text, type Ticker } from 'pixi.js'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

type SymbolType = 'seven' | 'bar' | 'cherry' | 'diamond' | 'square' | 'triangle' | 'circle'

interface FloaterSpec {
  type: SymbolType
  color: number
  fx: number
  fy: number
  depth: number
  scale?: number
}

interface Floater extends FloaterSpec {
  container: Container
  phase: number
  freq: number
  radius: number
  rotationSpeed: number
}

interface Particle {
  graphics: Graphics
  fx: number
  fy: number
  speed: number
  alpha: number
  phase: number
}

const C = {
  accent: 0x8b5cf6,
  blue: 0x3b82f6,
  cyan: 0x22d3ee,
  gold: 0xfbbf24,
  white: 0xffffff,
  red: 0xef4444,
  green: 0x22c55e,
}

const DESKTOP_FLOATERS: FloaterSpec[] = [
  { type: 'seven', color: C.gold, fx: 0.6, fy: 0.2, depth: 1.1 },
  { type: 'bar', color: C.accent, fx: 0.82, fy: 0.34, depth: 0.7 },
  { type: 'cherry', color: C.red, fx: 0.54, fy: 0.5, depth: 0.85 },
  { type: 'diamond', color: C.cyan, fx: 0.72, fy: 0.12, depth: 1.25 },
  { type: 'square', color: C.blue, fx: 0.66, fy: 0.66, depth: 0.55 },
  { type: 'triangle', color: C.accent, fx: 0.87, fy: 0.56, depth: 1.05 },
  { type: 'seven', color: C.white, fx: 0.5, fy: 0.12, depth: 0.9, scale: 0.6 },
  { type: 'circle', color: C.cyan, fx: 0.91, fy: 0.74, depth: 0.5 },
  { type: 'bar', color: C.blue, fx: 0.57, fy: 0.82, depth: 0.9, scale: 0.7 },
  { type: 'diamond', color: C.white, fx: 0.9, fy: 0.92, depth: 0.75, scale: 0.7 },
]

const MOBILE_FLOATERS: FloaterSpec[] = [
  { type: 'seven', color: C.gold, fx: 0.84, fy: 0.16, depth: 1 },
  { type: 'cherry', color: C.red, fx: 0.14, fy: 0.24, depth: 0.8 },
  { type: 'bar', color: C.accent, fx: 0.86, fy: 0.5, depth: 0.7 },
  { type: 'diamond', color: C.cyan, fx: 0.12, fy: 0.6, depth: 1 },
  { type: 'triangle', color: C.blue, fx: 0.8, fy: 0.84, depth: 0.6 },
]

function makeSeven(color: number, glow: boolean): Container {
  const c = new Container()
  if (glow) {
    const g = new Graphics()
    g.circle(0, 0, 46).fill({ color, alpha: 0.06 })
    c.addChild(g)
  }
  const text = new Text({
    text: '7',
    style: {
      fontFamily: '"Space Grotesk", "Inter", sans-serif',
      fontSize: 44,
      fontWeight: '700',
      fill: color,
    },
  })
  text.anchor.set(0.5)
  c.addChild(text)
  return c
}

function makeBar(color: number): Container {
  const c = new Container()
  const g = new Graphics()
  g.roundRect(-34, -16, 68, 32, 6).fill({ color })
  g.roundRect(-34, -16, 68, 32, 6).stroke({ width: 1, color: 0xffffff, alpha: 0.15 })
  const text = new Text({
    text: 'BAR',
    style: {
      fontFamily: '"Space Grotesk", "Inter", sans-serif',
      fontSize: 17,
      fontWeight: '700',
      fill: 0x0a0a0c,
      letterSpacing: 3,
    },
  })
  text.anchor.set(0.5)
  c.addChild(g, text)
  return c
}

function makeCherry(): Container {
  const c = new Container()
  const body = new Graphics()
  body.circle(-6, 5, 11).fill({ color: C.red })
  body.circle(8, 9, 11).fill({ color: C.red })
  body.circle(-9, 2, 4).fill({ color: 0xffffff, alpha: 0.35 })
  const stem = new Graphics()
  stem.moveTo(0, -4).lineTo(-5, -20).stroke({ width: 2.5, color: C.green })
  const leaf = new Graphics()
  leaf.ellipse(8, -19, 7, 3.5).fill({ color: C.green })
  leaf.rotation = -0.5
  c.addChild(stem, body, leaf)
  return c
}

function makeDiamond(color: number): Container {
  const c = new Container()
  const size = 16
  const outer = new Graphics()
  outer.poly([0, -size, size, 0, 0, size, -size, 0]).fill({ color })
  const inner = new Graphics()
  inner.poly([0, -size * 0.36, size * 0.36, 0, 0, size * 0.36, -size * 0.36, 0]).fill({
    color: 0x0a0a0c,
    alpha: 0.8,
  })
  c.addChild(outer, inner)
  return c
}

function makeSquare(color: number): Container {
  const c = new Container()
  const g = new Graphics()
  g.roundRect(-18, -18, 36, 36, 5).fill({ color, alpha: 0.9 })
  g.roundRect(-18, -18, 36, 36, 5).stroke({ width: 1, color: 0xffffff, alpha: 0.2 })
  c.addChild(g)
  return c
}

function makeTriangle(color: number): Container {
  const c = new Container()
  const g = new Graphics()
  g.poly([0, -20, 18, 14, -18, 14]).fill({ color, alpha: 0.55 })
  c.addChild(g)
  return c
}

function makeCircle(color: number): Container {
  const c = new Container()
  const g = new Graphics()
  g.circle(0, 0, 13).fill({ color, alpha: 0.85 })
  g.circle(0, 0, 13).stroke({ width: 1, color: 0xffffff, alpha: 0.25 })
  c.addChild(g)
  return c
}

function buildSymbol(type: SymbolType, color: number, glow: boolean): Container {
  switch (type) {
    case 'seven':
      return makeSeven(color, glow)
    case 'bar':
      return makeBar(color)
    case 'cherry':
      return makeCherry()
    case 'diamond':
      return makeDiamond(color)
    case 'square':
      return makeSquare(color)
    case 'triangle':
      return makeTriangle(color)
    case 'circle':
      return makeCircle(color)
  }
}

function buildGrid(width: number, height: number, cell: number): Graphics {
  const g = new Graphics()
  g.setStrokeStyle({ width: 1, color: 0xffffff, alpha: 0.045 })
  for (let x = cell; x < width; x += cell) {
    g.moveTo(x, 0).lineTo(x, height).stroke()
  }
  for (let y = cell; y < height; y += cell) {
    g.moveTo(0, y).lineTo(width, y).stroke()
  }
  return g
}

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const isMobile = window.matchMedia('(max-width: 767px)').matches
    const app = new Application()
    let destroyed = false
    let inited = false
    let time = 0
    let world: Container | null = null
    let grid: Graphics | null = null
    let glow: Graphics | null = null
    let pointerTargetX = 0
    let pointerTargetY = 0
    let pointerX = 0
    let pointerY = 0
    let pointerActive = false
    const textSymbols: Text[] = []

    const specs = isMobile ? MOBILE_FLOATERS : DESKTOP_FLOATERS
    const floaters: Floater[] = []
    const particles: Particle[] = []

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect()
      pointerTargetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      pointerTargetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      if (!pointerActive) {
        pointerX = pointerTargetX
        pointerY = pointerTargetY
        pointerActive = true
      }
    }

    const onPointerLeave = () => {
      pointerActive = false
      pointerTargetX = 0
      pointerTargetY = 0
    }

    const buildScene = () => {
      const scene = new Container()
      world = scene
      app.stage.addChild(scene)

      const width = container.clientWidth
      const height = container.clientHeight

      grid = buildGrid(width, height, 64)
      scene.addChild(grid)

      if (!isMobile) {
        glow = new Graphics()
        glow.circle(0, 0, 130).fill({ color: C.accent, alpha: 0.06 })
        glow.position.set(width * 0.78, height * 0.4)
        scene.addChild(glow)
      }

      const particleCount = isMobile ? 12 : 30
      for (let i = 0; i < particleCount; i++) {
        const g = new Graphics()
        g.circle(0, 0, 1.6).fill({ color: 0xffffff, alpha: 0.7 })
        const p: Particle = {
          graphics: g,
          fx: Math.random(),
          fy: Math.random(),
          speed: 0.012 + Math.random() * 0.02,
          alpha: 0.16 + Math.random() * 0.3,
          phase: Math.random() * Math.PI * 2,
        }
        particles.push(p)
        scene.addChild(g)
      }

      specs.forEach((spec, i) => {
        const c = buildSymbol(spec.type, spec.color, !isMobile)
        c.rotation = (i % 4) * 0.3
        for (const child of c.children) {
          if (child instanceof Text) textSymbols.push(child)
        }
        const f: Floater = {
          ...spec,
          container: c,
          phase: i * 1.7,
          freq: 0.5 + (i % 3) * 0.22,
          radius: 14 + (i % 4) * 8,
          rotationSpeed: (0.1 + (i % 3) * 0.09) * (i % 2 === 0 ? 1 : -1),
        }
        floaters.push(f)
        scene.addChild(c)
      })

      layout()
    }

    const layout = () => {
      if (!world) return
      const w = app.renderer.width
      const h = app.renderer.height
      if (grid) {
        grid.clear()
        grid.setStrokeStyle({ width: 1, color: 0xffffff, alpha: 0.045 })
        const cell = 64
        for (let x = cell; x < w; x += cell) {
          grid.moveTo(x, 0).lineTo(x, h).stroke()
        }
        for (let y = cell; y < h; y += cell) {
          grid.moveTo(0, y).lineTo(w, y).stroke()
        }
      }
      if (glow) glow.position.set(w * 0.78, h * 0.4)
      for (const f of floaters) {
        f.container.position.set(f.fx * w, f.fy * h)
      }
      for (const p of particles) {
        p.graphics.position.set(p.fx * w, p.fy * h)
      }
    }

    const tick = (ticker: Ticker) => {
      if (destroyed || !world) return
      const dt = Math.min(ticker.deltaMS / 1000, 0.05)
      time += dt

      pointerX += (pointerTargetX - pointerX) * 0.06
      pointerY += (pointerTargetY - pointerY) * 0.06

      const scroll = Math.min(window.scrollY / window.innerHeight, 1)
      world.rotation = pointerX * 0.02 + scroll * 0.02
      world.y = pointerY * -6 + scroll * -10

      const w = app.renderer.width
      const h = app.renderer.height

      for (const f of floaters) {
        f.container.rotation += f.rotationSpeed * dt
        const wobbleX = Math.sin(time * f.freq + f.phase) * f.radius * (pointerActive ? 1 : 0.5)
        const wobbleY = Math.cos(time * f.freq * 0.8 + f.phase) * f.radius * 0.7
        f.container.position.set(
          f.fx * w + pointerX * 18 * f.depth + wobbleX,
          f.fy * h + pointerY * 14 * f.depth + wobbleY,
        )
      }

      for (const p of particles) {
        p.fy -= p.speed * dt
        if (p.fy < -0.05) {
          p.fy = 1.05
          p.fx = Math.random()
        }
        p.graphics.position.set(p.fx * w, p.fy * h)
        p.graphics.alpha = p.alpha * (0.6 + 0.4 * Math.sin(time * 2 + p.phase))
      }
    }

    const init = async () => {
      await app.init({
        backgroundAlpha: 0,
        antialias: !isMobile,
        autoDensity: true,
        resolution: Math.min(window.devicePixelRatio || 1, 2),
        resizeTo: container,
        powerPreference: 'high-performance',
      })
      if (destroyed) {
        app.destroy(true)
        return
      }
      inited = true
      container.appendChild(app.canvas)
      buildScene()

      if (!reducedMotion) {
        container.addEventListener('pointermove', onPointerMove, { passive: true })
        container.addEventListener('pointerleave', onPointerLeave)
      }

      if (!reducedMotion) {
        document.fonts.ready
          .then(() => {
            for (const t of textSymbols) {
              t.style = { ...t.style }
            }
          })
          .catch(() => undefined)
        app.ticker.add(tick)
      }
    }

    const resizeObserver = new ResizeObserver(() => layout())
    resizeObserver.observe(container)

    void init()

    return () => {
      destroyed = true
      resizeObserver.disconnect()
      container.removeEventListener('pointermove', onPointerMove)
      container.removeEventListener('pointerleave', onPointerLeave)
      if (inited) {
        app.destroy(true, { children: true })
      }
    }
  }, [reducedMotion])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-60 sm:opacity-90"
      aria-hidden="true"
    />
  )
}
