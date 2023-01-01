const btnEl = document.querySelector(".btn")
const closeBtnEl = document.querySelector(".close-icon")
const trailerEL	 = document.querySelector(".trailer-container")
const videoEl = document.querySelector(".video")

btnEl.addEventListener("click", ()=>{
	trailerEL.classList.remove("active")
})
// console.log("Checking")
closeBtnEl.addEventListener("click", ()=>{
	trailerEL.classList.add("active");
	videoEl.pause();

})