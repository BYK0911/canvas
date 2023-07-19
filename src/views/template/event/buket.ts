import { Canvas } from "@/modules/canvas/"
import { memo, setting } from "../../template"
import magicWand from "@/modules/canvas/utils/magicWand"
import Rasterized from '@/modules/canvas/layer/Rasterized'

console.log(memo, setting)

let x: number, y: number
const offsetY = 45;

export default function (cvs: Canvas): void {
  cvs.on('drop', e => {
    const ev = e as { x: number, y: number }
    x = Math.floor(ev.x)
    y = Math.floor(ev.y - offsetY)
    
    const imageData = cvs.ctx.getImageData(0, 0, cvs.width, cvs.height)
    const res = magicWand(imageData, x, y, 50)
    let x0 = res[0][0]
    let x1 = x0
    let y0 = res[0][1]
    let y1 = y0
    res.forEach(([_x, _y]) => {
      if (x0 === undefined || _x < x0) x0 = _x
      if (y0 === undefined || _y < y0) y0 = _y
      if (x1 === undefined || _x > x1) x1 = _x
      if (y1 === undefined || _y > y1) y1 = _y
    })
    const _cvs = document.createElement('canvas')
    _cvs.width = x1 - x0 + 1
    _cvs.height = y1 - y0 + 1
    const _ctx = _cvs.getContext('2d') as CanvasRenderingContext2D;
    _ctx.fillStyle = setting.pen.color
    res.forEach(([px, py]) => _ctx.fillRect(px - x0, py - y0, 1, 1))
    const v = cvs.getRelativeCoord(x0, y0)
    const w = Math.round((x1 - x0) / cvs.scale)
    const h = Math.round((y1 - y0) / cvs.scale)
    const layer = new Rasterized(_cvs, v.x, v.y, w, h, -cvs.rotation)
    memo.add(layer)
  })
}