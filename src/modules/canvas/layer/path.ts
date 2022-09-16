import Layer from "."
import draw from "../painter";
import { IPainter } from "../painter/painter";

export default class Path extends Layer {
  type = 'Path'
  painter: IPainter
  data: number[] = []

  constructor (painter: IPainter) {
    super()

    this.painter = painter
  }

  draw (ctx: CanvasRenderingContext2D): void {
    draw(this.data, ctx, this.painter)
  }
}