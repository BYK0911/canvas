import Canvas from '../canvas'
import { Layer } from '../layer'

export default class memo {
  data: Layer[] = []
  index = -1
  cvs: Canvas

  get head () {
    return this.data.slice(0, this.index + 1)
  }

  constructor (cvs: Canvas) {
    this.cvs = cvs
  }

  reset (): void {
    this.data = []
    this.index = -1
  }

  undo (): void {
    if (this.index === -1) return
    this.index--
    this.cvs.layers = [...this.head]
    this.cvs.refreshImage()
  }

  redo (): void {
    if (this.index === this.data.length - 1) return
    this.index++
    this.cvs.layers = [...this.head]
    this.cvs.refreshImage()
  }

  add (path: Layer): void {
    this.data.splice(this.index + 1)
    this.data.push(path)
    this.cvs.layers.push(path)
    this.cvs.refreshImage()
    this.index++
  }
}