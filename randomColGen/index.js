const containerEl = document.querySelector(".container")

for (let index = 0; index < 30; index++) {
	const colorContainer = document.createElement("div")
	colorContainer.classList.add("color-container")

	containerEl.appendChild(colorContainer)
}


function randomNumber(){
	const chars = "0123456789abcdef";
	let colorCode = "";

	for (let index = 0; index < chars.length; index++) {
		const randomNum = Math.floor(Math.random() * chars.length)
		
	}
}