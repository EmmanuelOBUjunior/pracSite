const containerEl = document.querySelector(".container")

for (let index = 0; index < 30; index++) {
	const colorContainer = document.createElement("div")
	colorContainer.classList.add("color-container")

	containerEl.appendChild(colorContainer)
}

function generateRandomColors(){
	const colorContainerEls = document.querySelectorAll('.color-container');
	console
}

function randomNumber(){
	const chars = "0123456789abcdef";
	let colorCode = " ";

	for (let index = 0; index < 6; index++) {
		const randomNum = Math.floor(Math.random() * chars.length)
		colorCode += chars.substring(randomNum, randomNum + 1);
	}
	return colorCode;
}