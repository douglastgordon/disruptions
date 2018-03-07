const makeViewer = () => {
  const viewer = document.getElementById("viewer")
  new Draggable(viewer)
  for (let i = 0; i < 60; i += 1) {
    const fat = document.createElement("li")
    fat.className = "fat black line"
    viewer.appendChild(fat)
    const thin = document.createElement("li")
    thin.className = "thin transparent line"
    viewer.appendChild(thin)
  }
}

const makeImageOne = () => {
  const ballContainer = document.createElement("div")
  ballContainer.className = "ball-container"
  for (let i = 0; i < 80; i += 1) {
    new Layer(document.createElement("div"), i, "ball", ballContainer)
  }
  return ballContainer
}

makeViewer()
const ballContainer = makeImageOne()
document.getElementById("image-port").appendChild(ballContainer)
