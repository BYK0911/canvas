import { Layer } from "./layer"
import initEvent from './event'
import Coord from "../coord";

interface CB {
  (...args: unknown[]): void
}

export default class Canvas {
  x = 0;
  y = 0;
  scale = 1;
  rotation = 0;
  mode = 'default'
  backgroundColor = 'rgba(255, 255, 255, 1)'
  width = 400
  height = 300
  layers: Layer[] = []
  activePath: Layer | null = null
  dom: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  activeCanvas: HTMLCanvasElement
  activeCtx: CanvasRenderingContext2D
  img: {
    x: number,
    y: number,
    w: number,
    h: number,
    img: HTMLCanvasElement
  } | null = null

  private handlers: Record<string, CB[]> = {}

  constructor () {
    this.dom = this.initDom()
    this.ctx = this.dom.getContext('2d', { willReadFrequently: true }) as CanvasRenderingContext2D
    this.activeCanvas = document.createElement('canvas')
    this.activeCanvas.width = this.width
    this.activeCanvas.height = this.height
    this.activeCtx = this.activeCanvas.getContext('2d') as CanvasRenderingContext2D
    document.body.appendChild(this.activeCanvas)
    initEvent(this)
  }

  initDom (): HTMLCanvasElement {
    const cvs = document.createElement('canvas')
  
    cvs.width = this.width
    cvs.height = this.height
    Object.assign(cvs.style, {
      width: this.width + 'px',
      height: this.height + 'px',
      verticalAlign: 'middle',
    })

    return cvs
  }

  mount (dom: HTMLElement): void {
    dom.appendChild(this.dom)
    const w = dom.offsetWidth
    const h = dom.offsetHeight

    this.resize(w, h)
  }

  resize (w: number, h: number): void {
    this.width = w
    this.height = h
    this.dom.width = w
    this.dom.height = h
    this.dom.style.width = w + 'px'
    this.dom.style.height = h + 'px'
    this.activeCanvas.width = w
    this.activeCanvas.height = h
    this.activeCanvas.style.width = w + 'px'
    this.activeCanvas.style.height = h + 'px'
  }

  refreshImage (): void {
    const { x, y, w, h } = this.getBoundingBox()
    if (w === 0 || h === 0) {
      this.img = null
      return
    }

    const cvs = document.createElement('canvas')
    cvs.width = w
    cvs.height = h
    const ctx = cvs.getContext('2d') as CanvasRenderingContext2D
    ctx.translate(-x, -y)
    this.layers.forEach(layer => {
      ctx.save()
      layer.draw(ctx)
      ctx.restore()
    })

    this.img = { x, y, w, h, img: cvs }
  }

  getBoundingBox (): { x: number, y: number, w: number, h: number} {
    if (this.layers.length === 0) {
      return { x: 0, y: 0, w: 0, h: 0 }
    } else {
      let s = 1
      const rs = this.layers.map(l => {
        const _s = (<any>l)?.painter?.size || 0
        _s > s && (s = _s)
        return l.boundingBox
      })
      let { x: x0, y: y0 } = rs[0]
      const { w, h } = rs[0]
      let x1 = x0 + w
      let y1 = y0 + h

      for (let i = 1; i < rs.length; i++) {
        const { x, y, w: _w, h: _h} = rs[i]
        if (x < x0) x0 = x
        if (y < y0) y0 = y
        if (x + _w > x1) x1 = x + _w
        if (y + _h > y1) y1 = y + _h
      }
      return { x: x0 - s, y: y0 - s, w: x1 - x0 + s, h: y1 - y0 + s }
    }
  }

  drawFrame (): void {
    const {
      x,
      y,
      scale,
      width,
      height,
      activeCtx: ctx,
      rotation,
      backgroundColor,
      img
    } = this

    ctx.clearRect(0, 0, width, height)
    ctx.save()
    ctx.translate(x, y)
    ctx.scale(scale, scale)
    ctx.rotate(rotation)
    this.layers.forEach(layer => {
      ctx.save()
      layer.draw(ctx)
      ctx.restore()
    })
    // img && ctx.drawImage(img.img, img.x, img.y, img.w, img.h)
    if (this.activePath) this.activePath.draw(ctx)
    ctx.restore()

    this.ctx.clearRect(0, 0, width, height)
    this.ctx.fillStyle = backgroundColor
    this.ctx.fillRect(0, 0, width, height)
    this.ctx.drawImage(this.activeCanvas, 0, 0, width, height)
  }

  getRelativeCoord (x: number, y: number): Coord {
    return new Coord(x, y)
      .translate(-this.x, -this.y)
      .scale(1 / this.scale, 1 / this.scale)
      .rotate(-this.rotation)
  }

  on (eventType: string, eventHandler: CB): void {
    if (!this.handlers[eventType]) {
      this.handlers[eventType] = []
    }
    const handlers = this.handlers[eventType]
    handlers.push(eventHandler)
  }

  off (eventType: string, eventHandler?: CB): void {
    if (!this.handlers[eventType]) return
    if (!eventHandler) {
      this.handlers[eventType] = []
      return
    }

    const handlers = this.handlers[eventType]
    const i = handlers.indexOf(eventHandler)

    if (i > -1) handlers.splice(i, 1)
  }

  emit (eventType: string, ...args: unknown[]): void {
    const handlers = this.handlers[eventType]
    if (!handlers || handlers.length === 0) return

    handlers.forEach(cb => cb(...args))
  }
}