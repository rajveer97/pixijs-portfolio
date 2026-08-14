import { cn } from '../../lib/utils'

interface TechTagProps {
  children: string
  className?: string
}

export function TechTag({ children, className }: TechTagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted transition-colors duration-300',
        className,
      )}
    >
      {children}
    </span>
  )
}
