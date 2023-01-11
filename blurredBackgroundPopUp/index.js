const  btnEl = document.querySelector(".btn")
const popupContainerEl = document.querySelector(".popup-container")
const mainContainerEl = document.querySelector(".main-container")
const closeIconEl = document.querySelector(".close-icon");


btnEl.addEventListener("click", () => {
	mainContainerEl.classList.add("active");
	popupContainerEl.classList.remove("active")
})