import { useEffect, useRef } from 'react'
import { Application, Container, Graphics, Text, type Ticker } from 'pixi.js'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import {
  systemEdges,
  systemNodes,
  type SystemNodeId,
  type SystemNodeSpec,
} from '../../data/systemMap'

interface SystemMapProps {
  activeId: SystemNodeId | null
  onActiveChange: (id: SystemNodeId | null) => void
}

interface SystemMapApi {
  setActive: (id: SystemNodeId | null) => void
}

const FONT_DISPLAY = '"Space Grotesk", "Inter", sans-serif'
const FONT_MONO = '"JetBrains Mono", monospace'

const RADIUS_DESKTOP = 26
const RADIUS_MOBILE = 19
const HOVER_DESKTOP = 78
const HOVER_MOBILE = 54

type GlyphType = SystemNodeSpec['glyph']

function makeDiamond(color: number): Container {
  const c = new Container()
  const size = 15
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

function makeSeven(color: number): Container {
  const c = new Container()
  const text = new Text({
    text: '7',
    style: { fontFamily: FONT_DISPLAY, fontSize: 40, fontWeight: '700', fill: color },
  })
  text.anchor.set(0.5)
  c.addChild(text)
  return c
}

function makeBar(color: number): Container {
  const c = new Container()
  const g = new Graphics()
  g.roundRect(-30, -14, 60, 28, 6).fill({ color })
  g.roundRect(-30, -14, 60, 28, 6).stroke({ width: 1, color: 0xffffff, alpha: 0.18 })
  const text = new Text({
    text: 'API',
    style: {
      fontFamily: FONT_MONO,
      fontSize: 13,
      fontWeight: '700',
      fill: 0x0a0a0c,
      letterSpacing: 2,
    },
  })
  text.anchor.set(0.5)
  c.addChild(g, text)
  return c
}

function makeDisc(color: number): Container {
  const c = new Container()
  const g = new Graphics()
  const layers = 3
  for (let i = layers; i > 0; i--) {
    g.ellipse(0, -3 * (i - 1), 15, 5.5 + i).fill({ color, alpha: 0.22 + i * 0.16 })
  }
  c.addChild(g)
  return c
}

function makeTriangle(color: number): Container {
  const c = new Container()
  const g = new Graphics()
  g.poly([0, -18, 17, 13, -17, 13]).fill({ color, alpha: 0.75 })
  g.poly([0, -18, 17, 13, -17, 13]).stroke({ width: 1, color: 0xffffff, alpha: 0.3 })
  c.addChild(g)
  return c
}

function makeGlyph(type: GlyphType, color: number): Container {
  switch (type) {
    case 'diamond':
      return makeDiamond(color)
    case 'seven':
      return makeSeven(color)
    case 'bar':
      return makeBar(color)
    case 'circle':
      return makeDisc(color)
    case 'triangle':
      return makeTriangle(color)
  }
}

interface NodeRuntime {
  spec: SystemNodeSpec
  root: Container
  ring: Graphics
  label: Text
  homeX: number
  homeY: number
  phase: number
}

function nodePosition(spec: SystemNodeSpec, isMobile: boolean): { x: number; y: number } {
  return {
    x: isMobile ? (spec.fxSm ?? spec.fx) : spec.fx,
    y: isMobile ? (spec.fySm ?? spec.fy) : spec.fy,
  }
}

export function SystemMap({ activeId, onActiveChange }: SystemMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const apiRef = useRef<SystemMapApi | null>(null)
  const activePropRef = useRef(activeId)
  const onChangeRef = useRef(onActiveChange)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    activePropRef.current = activeId
    apiRef.current?.setActive(activeId)
  }, [activeId])

  useEffect(() => {
    onChangeRef.current = onActiveChange
  }, [onActiveChange])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const isMobile = window.matchMedia('(max-width: 767px)').matches
    const radius = isMobile ? RADIUS_MOBILE : RADIUS_DESKTOP
    const hoverRadius = isMobile ? HOVER_MOBILE : HOVER_DESKTOP
    const app = new Application()
    let destroyed = false
    let inited = false
    let time = 0
    let world: Container | null = null
    let grid: Graphics | null = null
    let edgeLayer: Graphics | null = null
    let pointerX = 0
    let pointerY = 0
    let applied: SystemNodeId | null = null
    const nodes: NodeRuntime[] = []
    const particles: {
      graphics: Graphics
      fx: number
      fy: number
      speed: number
      phase: number
    }[] = []
    const textObjects: Text[] = []

    const drawEdges = (active: SystemNodeId | null) => {
      if (!edgeLayer) return
      edgeLayer.clear()
      for (const edge of systemEdges) {
        const a = nodes.find((n) => n.spec.id === edge.from)
        const b = nodes.find((n) => n.spec.id === edge.to)
        if (!a || !b) continue
        const connected = active === null || active === edge.from || active === edge.to
        edgeLayer
          .moveTo(a.homeX, a.homeY)
          .lineTo(b.homeX, b.homeY)
          .stroke({
            width: connected && active ? 1.8 : 1,
            color: connected && active ? 0x8b5cf6 : 0xffffff,
            alpha: active ? (connected ? 0.55 : 0.08) : 0.16,
          })
      }
    }

    const applyActive = (active: SystemNodeId | null) => {
      applied = active
      for (const n of nodes) {
        const isActive = n.spec.id === active
        const dim = active !== null && !isActive
        n.ring.alpha = isActive ? 0.95 : dim ? 0.22 : 0.4
        n.label.alpha = dim ? 0.3 : 0.9
        n.root.scale.set(isActive ? 1.14 : 1)
      }
      drawEdges(active)
    }

    apiRef.current = {
      setActive: (id) => {
        if (id !== applied) applyActive(id)
      },
    }

    const layout = () => {
      if (!world) return
      const w = app.renderer.width
      const h = app.renderer.height
      if (grid) {
        grid.clear()
        grid.setStrokeStyle({ width: 1, color: 0xffffff, alpha: 0.05 })
        for (let x = 64; x < w; x += 64) {
          grid.moveTo(x, 0).lineTo(x, h).stroke()
        }
        for (let y = 64; y < h; y += 64) {
          grid.moveTo(0, y).lineTo(w, y).stroke()
        }
      }
      for (const n of nodes) {
        const pos = nodePosition(n.spec, isMobile)
        n.homeX = pos.x * w
        n.homeY = pos.y * h
      }
      applyActive(applied)
    }

    const buildScene = () => {
      const scene = new Container()
      world = scene
      app.stage.addChild(scene)

      const w = app.renderer.width
      const h = app.renderer.height

      grid = new Graphics()
      grid.setStrokeStyle({ width: 1, color: 0xffffff, alpha: 0.05 })
      for (let x = 64; x < w; x += 64) {
        grid.moveTo(x, 0).lineTo(x, h).stroke()
      }
      for (let y = 64; y < h; y += 64) {
        grid.moveTo(0, y).lineTo(w, y).stroke()
      }
      scene.addChild(grid)

      edgeLayer = new Graphics()
      scene.addChild(edgeLayer)

      const particleCount = isMobile ? 10 : 24
      for (let i = 0; i < particleCount; i++) {
        const g = new Graphics()
        g.circle(0, 0, 1.5).fill({ color: 0xffffff, alpha: 0.6 })
        const fx = Math.random()
        const fy = Math.random()
        g.position.set(fx * w, fy * h)
        particles.push({
          graphics: g,
          fx,
          fy,
          speed: 0.01 + Math.random() * 0.016,
          phase: Math.random() * Math.PI * 2,
        })
        scene.addChild(g)
      }

      systemNodes.forEach((spec, i) => {
        const root = new Container()
        const ring = new Graphics()
        ring.circle(0, 0, radius + 9).stroke({ width: 1, color: spec.color, alpha: 0.4 })
        const glyph = makeGlyph(spec.glyph, spec.color)
        const label = new Text({
          text: spec.label,
          style: {
            fontFamily: FONT_MONO,
            fontSize: 9,
            fontWeight: '600',
            fill: 0xffffff,
            letterSpacing: 1.6,
          },
        })
        label.anchor.set(0.5, 0)
        label.position.set(0, radius + 14)
        const plate = new Graphics()
        plate.roundRect(-label.width / 2 - 6, radius + 10, label.width + 12, 16, 4).fill({
          color: 0x0a0a0c,
          alpha: 0.55,
        })
        textObjects.push(label)
        root.addChild(ring, glyph, plate, label)
        scene.addChild(root)
        const pos = nodePosition(spec, isMobile)
        nodes.push({
          spec,
          root,
          ring,
          label,
          homeX: pos.x * w,
          homeY: pos.y * h,
          phase: i * 1.3,
        })
      })

      applyActive(activePropRef.current)
    }

    const nearestNode = (): SystemNodeId | null => {
      let nearest: SystemNodeId | null = null
      let best = hoverRadius
      for (const n of nodes) {
        const dx = pointerX - n.homeX
        const dy = pointerY - n.homeY
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < best) {
          best = distance
          nearest = n.spec.id
        }
      }
      return nearest
    }

    const onPointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect()
      pointerX = event.clientX - rect.left
      pointerY = event.clientY - rect.top
      const next = nearestNode()
      if (next !== applied) onChangeRef.current(next)
    }

    const onPointerLeave = () => {
      pointerX = 0
      pointerY = 0
      if (applied !== null) onChangeRef.current(null)
    }

    const tick = (ticker: Ticker) => {
      if (destroyed || !world) return
      const dt = Math.min(ticker.deltaMS / 1000, 0.05)
      time += dt

      const w = app.renderer.width
      const h = app.renderer.height

      for (const n of nodes) {
        n.root.position.set(
          n.homeX + Math.sin(time * 0.6 + n.phase) * 3,
          n.homeY + Math.cos(time * 0.5 + n.phase) * 4,
        )
      }

      for (const p of particles) {
        p.fy -= p.speed * dt
        if (p.fy < -0.05) {
          p.fy = 1.05
          p.fx = Math.random()
        }
        p.graphics.position.set(p.fx * w, p.fy * h)
        p.graphics.alpha = 0.15 + 0.25 * (0.6 + 0.4 * Math.sin(time * 2 + p.phase))
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
        document.fonts.ready
          .then(() => {
            for (const t of textObjects) {
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
      apiRef.current = null
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
      className="absolute inset-0 overflow-hidden"
      aria-hidden="true"
      role="presentation"
    />
  )
}
