import { Layer, BoundingBox } from "."
import { drawPen, drawEraser } from "../painter";

interface Painter {
  type: 'pen' | 'eraser',
  size: number,
  color?: string,
  force?: number
}

export default class Path extends Layer {
  type = 'Path'
  painter: {
    type: 'pen' | 'eraser',
    size: number,
    color?: string,
    force?: number
  }
  data: number[] = []
  _boundingBox?: BoundingBox
  get boundingBox (): BoundingBox {
    if (this._boundingBox) return this._boundingBox
    const s = this.painter.size
    let x0 = this.data[0];
    let y0 = this.data[1];
    let x1 = this.data[0];
    let y1 = this.data[1];
    for (let i = 2; i < this.data.length; i += 2) {
      const x = this.data[i]
      const y = this.data[i + 1]
      if (x < x0) x0 = x
      if (x > x1) x1 = x
      if (y < y0) y0 = y
      if (y > y1) y1 = y
    }
    this._boundingBox = { x: x0 - s, y: y0 - s, w: x1 - x0 + s * 2, h: y1 - y0 + s * 2 }

    return this._boundingBox
  }

  constructor (painter: Painter) {
    super()

    this.painter = painter
  }

  draw (ctx: CanvasRenderingContext2D): void {
    const { type, size, color, force } = this.painter
    if (type === 'pen') {
      const c = color as string
      drawPen(this.data, ctx, { size, color: c })
    } else {
      const f = force as number
      drawEraser(this.data, ctx, { size, force: f})
    }
  }
}