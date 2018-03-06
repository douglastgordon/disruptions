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
    console.log(this.element.offsetTop, this.positions.b)
  }

  closeDragElement() {
    document.onmouseup = null
    document.onmousemove = null
  }
}

// function dragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//
//   elmnt.onmousedown = dragMouseDown;
//
//
//   function dragMouseDown(e) {
//     e = e || window.event;
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }
//
//   function elementDrag(e) {
//     e = e || window.event;
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     console.log(pos2)
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }
//
//   function closeDragElement() {
//     /* stop moving when mouse button is released:*/
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }
