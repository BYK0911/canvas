export default function (
  path: number[],
  ctx: CanvasRenderingContext2D,
  opt: { size: number, force: number }
): void {
  if (path.length < 4) return

  const { size, force } = opt
  ctx.globalCompositeOperation = 'destination-out'
  ctx.beginPath()
  ctx.moveTo(path[0], path[1])
  for (let i = 2; i < path.length; i += 2) {
    ctx.lineTo(path[i], path[i + 1])
  }
  ctx.strokeStyle = `rgba(255, 255, 255, ${force})`
  ctx.lineWidth = size
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.stroke()
  ctx.closePath()
}