const makeViewer = () => {
  const viewer = document.getElementById("viewer")
  new Draggable(viewer)
  for (let i = 0; i < 50; i += 1) {
    const fat = document.createElement("li")
    fat.className = "fat line"
    viewer.appendChild(fat)
    const thin = document.createElement("li")
    thin.className = "thin line"
    viewer.appendChild(thin)
  }
}

makeViewer()
