import drawPen from './pen'
import drawPencil from './pencil'
import drawMarkPen from './markPen'
import drawEraser from './eraser'
import drawSoftPen from './softPen'

import { IPainter } from './painter'

export default function (path: number[], ctx: CanvasRenderingContext2D, painterOption: IPainter): void {
  switch (painterOption.type) {
    case 'MarkPen':
      return drawMarkPen(path, ctx, painterOption)
    case 'Pencil':
      return drawPencil(path, ctx, painterOption)
    case 'Eraser':
      return drawEraser(path, ctx, painterOption)
    case 'SoftPen':
      return drawSoftPen(path, ctx, painterOption)
    default:
      return drawPen(path, ctx, painterOption)
  }
}