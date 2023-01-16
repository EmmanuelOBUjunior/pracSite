const bgImageEl = document.getElementById('bg-image');

window.addEventListener("scroll", ()=>{
	updateBackgroundImage();
})


function updateBacgroundImage() {
	bgImageEl.style.opacity = 1 - window.pageYOffset/900;
}

