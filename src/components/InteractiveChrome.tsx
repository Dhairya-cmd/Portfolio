import { useEffect, useState } from 'react'

export function PointerGlow() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 })
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return

    setEnabled(true)
    let frame = 0
    let next = { x: 0, y: 0 }

    const onMove = (e: PointerEvent) => {
      next = { x: e.clientX, y: e.clientY }
      if (frame) return
      frame = requestAnimationFrame(() => {
        setPos(next)
        frame = 0
      })
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  if (!enabled) return null

  return (
    <div
      className="pointer-glow"
      style={{ left: pos.x, top: pos.y }}
      aria-hidden
    />
  )
}

export function ScrollProgress() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      setWidth(max > 0 ? (doc.scrollTop / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <div className="scroll-progress" style={{ width: `${width}%` }} aria-hidden />
}
