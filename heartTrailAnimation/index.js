const bodyEl = document.querySelector("body")


bodyEl.addEventListener("mousemove", (event)=>{
	const xPos = event.offsetX
	const YPos = event.offsetY

	const spanEl = document.createElement("span")
	spanEl.style.top = xPos + "px";
	spanEl.style.left = yPos + "px";

})