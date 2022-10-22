const containerEl = document.querySelector(".container")


for (let index = 0; index < 30; index++) {
	const colorContainer = document.createElement("div")
	colorContainer.classList.add("color-container")

	containerEl.appendChild(colorContainer)
}
const colorContainerEls = document.querySelectorAll('.color-container');

generateColors();
document.addEventListener('keydown', (e) => {
	e.preventDefault();
	if(e.keyCode == 32){
		generateColors();
		
	}
})

function generateColors(){
	colorContainerEls.forEach(colorContainerEl => {
		const newColor = randomColor()
		colorContainerEl.style.backgroundColor = newColor;
		console.log(newColor)

		colorContainerEl.innerText = newColor;
	});
	
}

function randomColor(){
	const chars = "0123456789abcdef";
	let colorCode = "";

	for (let index = 0; index < 6; index++) {
		const randomNum = Math.floor(Math.random() * chars.length)
		colorCode += chars.substring(randomNum, randomNum + 1);
	}
	return "#"+colorCode;
}