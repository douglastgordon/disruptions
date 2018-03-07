class Draggable {
  constructor(element) {
    this.element = element
    this.positions = {
      "a": 0,
      "b": 0,
      "c": 0,
      "d": 0,
    }
    this.dragMouseDown = this.dragMouseDown.bind(this)
    this.closeDragElement = this.closeDragElement.bind(this)
    this.elementDrag = this.elementDrag.bind(this)

    element.onmousedown = this.dragMouseDown
  }

  dragMouseDown(event=window.event) {
    const { clientX, clientY } = event
    this.positions.c = clientX
    this.positions.d = clientY
    document.onmouseup = this.closeDragElement
    document.onmousemove = this.elementDrag
  }

  elementDrag(event=window.event) {
    const { clientX, clientY } = event
    this.positions.a = this.positions.c - clientX
    this.positions.b = this.positions.d - clientY
    this.positions.c = clientX
    this.positions.d = clientY

    this.element.style.top = (this.element.offsetTop - this.positions.b) + "px"
    this.element.style.left = (this.element.offsetLeft - this.positions.a) + "px"
  }

  closeDragElement() {
    document.onmouseup = null
    document.onmousemove = null
  }
}
