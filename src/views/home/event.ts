import Canvas from "@/modules/canvas/"
import Path from "@/modules/canvas/layer/path"
import { log } from './log'
import setting from "./setting"

let path: Path | null = null;

export default function (cvs: Canvas): void {
  cvs.on('touchstart', e => {
    const ev = e as TouchEvent
    if (setting.mode === 'default') {
      path = new Path({
        type: setting.painter,
        size: setting.painterSize,
        color: setting.color,
      })
      path.data.push(ev.touches[0].screenX, ev.touches[0].screenY)
      cvs.layers.push(path)
      setting.his = [...cvs.layers]
      setting.index++
      log('create path, length: ' + cvs.layers.length)
      log(`event anchor: ${ev.touches[0].screenX}, ${ev.touches[0].screenY}`)
    }
  })

  cvs.on('touchmove', e => {
    const ev = e as TouchEvent
    if (path) {
      path.data.push(ev.touches[0].screenX, ev.touches[0].screenY)
    }
  })

  cvs.on('touchend', () => {
    if (path) {
      path = null
    }
  })
}