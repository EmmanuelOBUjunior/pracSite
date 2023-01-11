const  btnEl = document.querySelector(".btn")
const popupContainerEl = document.querySelector(".popup-container")
const mainContainerEl = document.querySelector(".main-container")

btnEl.addEventListener("click", () => {
	mainContainerEl.classList.add("active");
	popupContainerEl.classList.remove("active")
})