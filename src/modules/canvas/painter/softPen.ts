import { IPainter } from './painter'
import Coord from '@/modules/coord'

export default function (path: number[], ctx: CanvasRenderingContext2D, painterOption: IPainter): void {
  if (path.length < 4) return
  ctx.fillStyle = painterOption.color
  ctx.strokeStyle = painterOption.color
  const scale = painterOption.scale as number
  const size = painterOption.size
  let lw0 = size / 8
  for (let i = 0; i < path.length - 2; i += 2) {
    let x0 = path[i]
    let y0 = path[i + 1]
    const x1 = path[i + 2]
    const y1 = path[i + 3]
    const n = new Coord(x1 - x0, y1 - y0).norm() / scale
    if (n <= 1) {
      ctx.beginPath()
      ctx.moveTo(x0, y0)
      ctx.lineTo(x1, y1)
      ctx.stroke()
      ctx.closePath()
    } else {
      const lw1 = Math.min(size * 5 / n, size / 2, lw0 * 1.3)
      const dw = (lw1 - lw0) / n
      const dx = (x1 - x0) / n
      const dy = (y1 - y0) / n
      for (let i = 0; i < n; i += 1) {
        if (lw0 > 0) {
          ctx.beginPath()
          ctx.arc(x0, y0, lw0, 0, Math.PI * 2)
          ctx.closePath()
          ctx.fill()
        }
        x0 += dx
        y0 += dy
        lw0 += dw
      }
    }
  }
}