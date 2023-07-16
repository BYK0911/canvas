import { Layer, BoundingBox } from "."
import Coord from "@/modules/coord"
export default class Path extends Layer {
  type = 'Rasterized'
  x = 0
  y = 0
  width = 100
  height = 100
  rotation = 0
  img: HTMLCanvasElement
  _boundingBox?: BoundingBox;

  get boundingBox () {
    const { x, y, width: w, height: h, rotation } = this
    const ps = [[w, 0], [w, h], [0, h]]
    let x0 = 0
    let y0 = 0
    let x1 = 0
    let y1 = 0
    ps.forEach(p => {
      const { x: _x, y: _y } = new Coord(p[0], p[1]).rotate(rotation)
      if (_x < x0) x0 = _x
      if (_x > x1) x1 = _x
      if (_y < y0) y0 = _y
      if (_y > y1) y1 = _y
    })
    return {
      x: x0 + x,
      y: y0 + y,
      w: x1 - x0,
      h: y1 - y0
    }
  }

  constructor (img: HTMLCanvasElement, x: number, y: number, w: number, h: number, rotation: number) {
    super()
    this.img = img
    this.x = x
    this.y = y
    this.width = w
    this.height = h
    this.rotation = rotation
  }

  draw (ctx: CanvasRenderingContext2D): void {
    ctx.translate(this.x, this.y)
    ctx.rotate(this.rotation)
    ctx.drawImage(this.img, 0, 0, this.width, this.height)
  }
}