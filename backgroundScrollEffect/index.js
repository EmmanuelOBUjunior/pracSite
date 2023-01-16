const bgImageEl = document.getElementById('bg-image');

window.addEventListener("scroll", ()=>{
	console.log("scrolling")
	updateBackgroundImage();
})


function updateBackgroundImage() {
	bgImageEl.style.opacity = 1 - window.pageYOffset/900;
}

