const kits = ["crash","kick","snare","tom"]

const containerEl = document.querySelector(".container")

kits.forEach(kit =>{
	const buttonEl = document.createElement("button")
	buttonEl.classList.add("btn")
	containerEl.appendChild(buttonEl)
	buttonEl.innerText  = kit;
	buttonEl.style.backgroundImage = "url(images/"+kit+".png)"
	const audioEl = document.createElement("audio");
	audioEl.src = "sounds/" + kit + ".mp3";
	containerEl.appendChild(audioEl);
})



console.log(containerEl)