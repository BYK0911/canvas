import { Canvas, Path } from "@/modules/canvas/"
import { memo, setting } from ".."

let path: Path | null = null;
let moved = false;
const offsetY = 45;

export default function (cvs: Canvas): void {
  cvs.on('touchstart', e => {
    const ev = e as TouchEvent
    if (ev.touches.length === 1) {
      const painter: {
        type: 'pen' | 'eraser',
        size: number,
        force?: number,
        color?: string
      } = setting.mode === 'pen' ? { type: 'pen', ...setting.pen } : { type: 'eraser', ...setting.eraser }
      const c = cvs.getRelativeCoord(ev.touches[0].pageX, ev.touches[0].pageY - offsetY)
      path = new Path(painter)
      path.data.push(c.x, c.y)
    }
  })

  cvs.on('touchmove', e => {
    const ev = e as TouchEvent
    if (ev.touches.length === 1) {
      if (path) {
        const c = cvs.getRelativeCoord(ev.touches[0].pageX, ev.touches[0].pageY - offsetY)
        path.data.push(c.x, c.y)
        if (!moved) {
          cvs.activePath = path
          moved = true
        }
      }
    }
  })

  cvs.on('touchend', () => {
    if (moved) memo.add(path as Path)
    moved = false;
    cvs.activePath = null
    path = null
  })
}