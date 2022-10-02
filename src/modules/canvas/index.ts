import Layer from "./layer"
import { initEvent, disposeEvent } from './event'
import Coord from "../coord";
import cvs from './utils/cvs'

interface CB {
  (e: Event): void
}

export default class Canvas {
  x = 0;
  y = 0;
  scale = 1;
  rotation = 0;
  mode = 'default'
  backgroundColor = '#f0f0f0'
  width = 400
  height = 300
  layers: Layer[] = []
  dom: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  offScreenCanvas: {
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D
  } | null = null

  private handlers: Record<string, CB[]> = {}

  constructor () {
    this.dom = this.initDom()
    this.ctx = this.dom.getContext('2d') as CanvasRenderingContext2D
    initEvent(this)
  }

  initDom (): HTMLCanvasElement {
    const cvs = document.createElement('canvas')
  
    cvs.width = this.width
    cvs.height = this.height
    Object.assign(cvs.style, {
      width: this.width + 'px',
      height: this.height + 'px',
      background: '#f0f0f0',
      verticalAlign: 'middle',
    })

    return cvs
  }

  mount (dom: HTMLElement): void {
    dom.appendChild(this.dom)
    const w = dom.offsetWidth
    const h = dom.offsetHeight
    
    this.offScreenCanvas = cvs(w, h)
    this.resize(w, h)
  }

  resize (w: number, h: number): void {
    this.width = w
    this.height = h
    this.dom.width = w
    this.dom.height = h
    this.dom.style.width = w + 'px'
    this.dom.style.height = h + 'px'
  }

  drawFrame (): void {
    const {
      x,
      y,
      scale,
      width,
      height,
      layers,
      ctx,
      backgroundColor,
      rotation,
    } = this

    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = backgroundColor
    ctx.fillRect(0, 0, width, height)

    if (this.offScreenCanvas) {
      const _ctx = this.offScreenCanvas.ctx
      _ctx.clearRect(0, 0, width, height)
      _ctx.save()
      _ctx.translate(x, y)
      _ctx.scale(scale, scale)
      _ctx.rotate(rotation / 180 * Math.PI)
      layers.forEach(layer => {
        _ctx.save()
        layer.draw(_ctx)
        _ctx.restore()
      })
      _ctx.restore()
      ctx.drawImage(this.offScreenCanvas.canvas, 0, 0, width, height)
    }
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

  emit (eventType: string, e: Event): void {
    const handlers = this.handlers[eventType]
    if (!handlers || handlers.length === 0) return

    handlers.forEach(cb => cb(e))
  }

  destroy (): void {
    disposeEvent(this)
  }
}