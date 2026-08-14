import { useEffect } from 'react'

const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight']

export function useKonamiCode(onTriggered: () => void): void {
  useEffect(() => {
    let buffer: string[] = []

    const onKeyDown = (event: KeyboardEvent) => {
      const key =
        event.key === 'ArrowUp' || event.key === 'ArrowDown'
          ? event.key
          : event.key === 'ArrowLeft'
            ? event.key
            : event.key === 'ArrowRight'
              ? event.key
              : null
      if (key === null) return

      buffer = [...buffer.slice(-(KONAMI.length - 1)), key]
      if (buffer.join('') === KONAMI.join('')) {
        buffer = []
        onTriggered()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onTriggered])
}
