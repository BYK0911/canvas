import { IPainter } from './painter'

export default function (path: number[], ctx: CanvasRenderingContext2D, painterOption: IPainter): void {
  if (path.length < 4) return

  ctx.globalCompositeOperation = 'destination-out'
  ctx.beginPath()
  ctx.moveTo(path[0], path[1])
  for (let i = 2; i < path.length; i += 2) {
    ctx.lineTo(path[i], path[i + 1])
  }
  ctx.strokeStyle = painterOption.color
  ctx.lineWidth = painterOption.size
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.stroke()
  ctx.closePath()
}