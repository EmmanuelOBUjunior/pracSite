const bodyEl = document.querySelector("body")


bodyEl.addEventListener("mousemove", (event)=>{
	const xPos = event.offsetX
	const yPos = event.offsetY

	console.log(xPos, yPos);

	const spanEl = document.createElement("span")
	spanEl.style.top = yPos + "px";
	spanEl.style.left = xPos + "px";

	bodyEl.appendChild(spanEl)

	setTimeout(()=>{
		spanEl.remove()
	}, 3000)
})