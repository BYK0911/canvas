import Canvas from "../canvas"

export default function (cvs: Canvas): void {
  const touchstart = (e: TouchEvent): void => {
    e.preventDefault()
    cvs.emit('touchstart', e)
  }
  const touchmove = (e: TouchEvent): void => {
    e.preventDefault()
    cvs.emit('touchmove', e)
  }
  const touchend = (e: TouchEvent): void => {
    e.preventDefault()
    cvs.emit('touchend', e)
  }
  cvs.dom.addEventListener('touchstart', touchstart)
  cvs.dom.addEventListener('touchmove', touchmove)
  cvs.dom.addEventListener('touchend', touchend)
}