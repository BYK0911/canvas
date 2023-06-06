import Canvas from "@/modules/canvas/"
import Path from "@/modules/canvas/layer/path"
import setting from "../setting"
import { IPainter } from "@/modules/canvas/painter/painter";

let path: Path | null = null;

export default function (cvs: Canvas): void {
  cvs.on('touchstart', e => {
    const ev = e as TouchEvent
    if (setting.mode === 'default') {
      if (ev.touches.length === 1) {
        const painter: IPainter = {
          type: setting.painter,
          size: setting.painterSize,
          color: setting.color,
        }
        const c = cvs.getRelativeCoord(ev.touches[0].pageX, ev.touches[0].pageY)
        path = new Path(painter)
        path.data.push(c.x, c.y)
        cvs.layers.push(path)
        setting.his = [...cvs.layers]
        setting.index++
      }
    }
  })

  cvs.on('touchmove', e => {
    const ev = e as TouchEvent
    if (ev.touches.length === 1) {
      if (path) {
        const c = cvs.getRelativeCoord(ev.touches[0].pageX, ev.touches[0].pageY)
        path.data.push(c.x, c.y)
      }
    }
  })

  cvs.on('touchend', () => {
    if (path) {
      path = null
    }
  })
}