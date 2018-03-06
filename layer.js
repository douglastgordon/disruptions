class Layer {
  constructor(element, frame, className) {
    this.element = element
    this.frame = frame
    this.className = className

    this.createHTML()
    this.maskElement()
  }

  createHTML() {
    this.element.id = this.frame
    this.element.className = `${this.className} frame-${this.frame}`
    document.getElementById("image-port").appendChild(this.element)
  }

  maskElement() {
    // this.element.style.mask = url(#mask)
  }
}
