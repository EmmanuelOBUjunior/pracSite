const btnEl = document.querySelector(".btn")
const closeBtnEl = document.querySelector(".close-icon")
const trailerEL	 = document.querySelector(".trailer-container")

btnEl.addEventListener("click", ()=>{
	trailerEL.classList.remove("active")
})

closeBtnEl.addEventListener("click", ()=>{
	trailerEL.classList.add("active");
})