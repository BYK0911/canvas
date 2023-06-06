import Layer from "."

export default class Path extends Layer {
  type = 'Rasterized'
  x = 0
  y = 0
  width = 100
  height = 100
  rotation = 0
  img: HTMLCanvasElement

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