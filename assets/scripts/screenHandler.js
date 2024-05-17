const fullScreenIcon = $.querySelector(".full-screen-icon")

let isFullScreen = false

fullScreenIcon.addEventListener("click", () => {
  if (isFullScreen) {
    document.exitFullscreen()
    fullScreenIcon.className = "bi bi-arrows-fullscreen full-screen-icon"
    isFullScreen = false
  } else {
    document.documentElement.requestFullscreen()
    fullScreenIcon.classList.add("hidden")
    fullScreenIcon.className = "bi bi-fullscreen-exit full-screen-icon"
    isFullScreen = true
  }
})
