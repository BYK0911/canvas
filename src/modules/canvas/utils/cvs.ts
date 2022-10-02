
export default function (width: number, height: number): {
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D
} {
  const cvs = document.createElement('canvas')
  cvs.width = width
  cvs.height = height

  return {
    canvas: cvs,
    ctx: cvs.getContext('2d') as CanvasRenderingContext2D
  }
}