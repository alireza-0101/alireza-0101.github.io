const body = $.querySelector("body")
const userIcon = $.querySelector(".user-icon")
const modalWrap = $.querySelector(".modal-wrap")

const chatModalToggle = () => body.classList.toggle("show-chat-modal")

userIcon.addEventListener("click", chatModalToggle)
modalWrap.addEventListener("click", chatModalToggle)
