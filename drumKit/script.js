const kits = ["crash","kick","snare","tom"]

const containerEl = document.querySelector(".container")

kits.forEach(kit =>{
	const buttonEl = document.createElement("button")
	buttonEl.classList.add("btn")
	containerEl.appendChild(buttonEl)
})



console.log(containerEl)