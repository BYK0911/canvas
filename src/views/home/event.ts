import Canvas from "@/modules/canvas/"
import Path from "@/modules/canvas/layer/path"
import setting from "./setting"
import Coord from '@/modules/coord'
import { IPainter } from "@/modules/canvas/painter/painter";

let path: Path | null = null;
let x0: number, x1: number, y0: number, y1: number;
let moved = false

export default function (cvs: Canvas): void {
  cvs.on('touchstart', e => {
    const ev = e as TouchEvent
    moved = false
    if (setting.mode === 'default') {
      if (ev.touches.length === 1) {
        const painter: IPainter = {
          type: setting.painter,
          size: setting.painterSize,
          color: setting.color,
        }
        if (setting.painter === 'SoftPen') {
          painter.scale = cvs.scale
        }
        path = new Path(painter)
        const c = cvs.getRelativeCoord(ev.touches[0].pageX, ev.touches[0].pageY)
        path.data.push(c.x, c.y)
      } else if (ev.touches.length > 1) {
        x0 = ev.touches[0].pageX
        y0 = ev.touches[0].pageY
        x1 = ev.touches[1].pageX
        y1 = ev.touches[1].pageY
      }
    }
  })

  cvs.on('touchmove', e => {
    const ev = e as TouchEvent
    if (ev.touches.length === 1) {
      if (path) {
        const c = cvs.getRelativeCoord(ev.touches[0].pageX, ev.touches[0].pageY)
        path.data.push(c.x, c.y)
        if (!moved) {
          moved = true
          cvs.layers.push(path)
          setting.his = [...cvs.layers]
          setting.index++
        }
      }
    } else if (ev.touches.length > 1) {
      const _x0 = ev.touches[0].pageX
      const _y0 = ev.touches[0].pageY
      const _x1 = ev.touches[1].pageX
      const _y1 = ev.touches[1].pageY
      const v = new Coord(x1 - x0, y1 - y0)
      const _v = new Coord(_x1 - _x0, _y1 - _y0)
      const ang = v.angle(_v.x, _v.y)
      const angle = v.cross(_v.x, _v.y) > 0 ? ang : -ang
      const k = _v.norm() / v.norm()
      const c0 = cvs.getRelativeCoord((x0 + x1) / 2, (y0 + y1) / 2)
      
      cvs.rotation += (angle / Math.PI) * 180
      cvs.scale *= k
      c0.rotate(cvs.rotation)
        .scale(cvs.scale, cvs.scale)
      const c1 = new Coord((_x0 + _x1) / 2, (_y0 + _y1) / 2).move(-c0.x, -c0.y)
      cvs.x = c1.x
      cvs.y = c1.y

      x0 = _x0
      x1 = _x1
      y0 = _y0
      y1 = _y1
    }
  })

  cvs.on('touchend', () => {
    if (path) {
      path = null
      moved = false
    }
  })
}