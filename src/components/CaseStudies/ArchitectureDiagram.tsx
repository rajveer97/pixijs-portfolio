import { Fragment } from 'react'

interface ArchitectureDiagramProps {
  nodes: string[]
  note?: string
}

export function ArchitectureDiagram({ nodes, note }: ArchitectureDiagramProps) {
  return (
    <div className="flex flex-col items-center py-2">
      {nodes.map((node, i) => (
        <Fragment key={node}>
          <div className="rounded-lg border border-line-strong bg-surface-2 px-4 py-2 font-mono text-xs text-foreground shadow-[0_0_18px_rgba(139,92,246,0.06)]">
            {node}
          </div>
          {i < nodes.length - 1 ? (
            <div className="flex flex-col items-center" aria-hidden="true">
              <span className="h-3.5 w-px bg-line-strong" />
              <span className="-mt-0.5 text-[9px] leading-none text-accent">▼</span>
              <span className="h-3.5 w-px bg-line-strong" />
            </div>
          ) : null}
        </Fragment>
      ))}
      {note ? <p className="mt-4 text-center font-mono text-[10px] leading-relaxed text-faint">{note}</p> : null}
    </div>
  )
}
