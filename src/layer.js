class Layer {
  constructor(element, frame, className, container) {
    this.element = element
    this.frame = frame % 6
    this.className = className
    this.container = container

    this.createHTML()
  }

  createHTML() {
    this.element.id = this.frame
    this.element.className = `${this.className} frame-${this.frame}`
    this.container.appendChild(this.element)
  }

}
