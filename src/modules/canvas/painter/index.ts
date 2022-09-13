import drawPen from './pen'
import drawPencil from './pencil'
import drawMarkPen from './markPen'

import { IPainter } from './painter'

export default function (path: number[], ctx: CanvasRenderingContext2D, painterOption: IPainter): void {
  switch (painterOption.type) {
    case 'MarkPen':
      return drawMarkPen(path, ctx, painterOption)
    case 'Pencil':
      return drawPencil(path, ctx, painterOption)
    default:
      return drawPen(path, ctx, painterOption)
  }
}