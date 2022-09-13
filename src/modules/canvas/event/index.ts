import Canvas from "../"

const touchstart = (cvs: Canvas, e: TouchEvent): void => {
  e.preventDefault()
  cvs.emit('touchstart', e)
}
const touchmove = (cvs: Canvas, e: TouchEvent): void => {
  e.preventDefault()
  cvs.emit('touchmove', e)
}
const touchend = (cvs: Canvas, e: TouchEvent): void => {
  e.preventDefault()
  cvs.emit('touchend', e)
}

export function initEvent (cvs: Canvas): void {
  cvs.dom.addEventListener('touchstart', touchstart.bind(cvs.dom, cvs))
  cvs.dom.addEventListener('touchmove', touchmove.bind(cvs.dom, cvs))
  cvs.dom.addEventListener('touchend', touchend.bind(cvs.dom, cvs))
}

export function disposeEvent (cvs: Canvas): void {
  cvs.dom.removeEventListener('touchstart', touchstart.bind(cvs.dom, cvs))
  cvs.dom.removeEventListener('touchmove', touchmove.bind(cvs.dom, cvs))
  cvs.dom.removeEventListener('touchend', touchend.bind(cvs.dom, cvs))
}