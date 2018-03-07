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

const makeImage = (imageCreator) => {
  const imagePort = document.getElementById("image-port")
  imagePort.innerHTML = ""
  imagePort.appendChild(imageCreator())
}

const makeImageOne = () => {
  const ballContainer = document.createElement("div")
  ballContainer.className = "ball-container"
  for (let i = 0; i < 80; i += 1) {
    new Layer(document.createElement("div"), i, "ball", ballContainer)
  }
  return ballContainer
}

const makeImageTwo = () => {
  console.log("sdf")
  return ""
}

const imageMap = () => {
  return {
    1: makeImageOne,
    2: makeImageTwo,
  }
}

const makeButtons = () => {
  const images = imageMap()
  const buttons = document.getElementById("image-options")

  Object.keys(images).forEach((imageNumber, idx) => {
    const newButton = document.createElement("li")
    newButton.innerHTML = imageNumber
    if (idx === 0) {
      newButton.className = "focus"
    }
    newButton.addEventListener("click", () => {
      makeImage(images[imageNumber])
    })
    buttons.appendChild(newButton)
  })

  buttons.addEventListener("click", (event) => {
    const currentlyFocused = document.getElementsByClassName("focus")[0]
    currentlyFocused.classList.remove("focus")
    event.target.classList.add("focus")
  })
}

const run = () => {
  makeViewer()
  makeButtons()

  const firstImage = imageMap()["1"]
  makeImage(firstImage)
}

run()
