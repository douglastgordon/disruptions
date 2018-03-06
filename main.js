const makeViewer = () => {
  const viewer = document.getElementById("viewer")
  new Draggable(viewer)
  for (let i = 0; i < 50; i += 1) {
    const fat = document.createElement("li")
    fat.className = "fat black line"
    viewer.appendChild(fat)
    const thin = document.createElement("li")
    thin.className = "thin transparent line"
    viewer.appendChild(thin)
  }
}

const makeImageOne = () => {
  for (let i = 0; i < 6; i += 1) {
    new Layer(document.createElement("div"), i, "ball")
  }
}

makeViewer()
makeImageOne()
