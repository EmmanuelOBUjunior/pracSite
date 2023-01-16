const bgImageEl = document.getElementByID("bg-image")

window.addEventListener("scroll", ()=>{
	updateBackgroundImage();
})


function updateBacgroundImage() {
	bgImageEl.style.opacity = 1 - window.pageXOffset/900;
}

