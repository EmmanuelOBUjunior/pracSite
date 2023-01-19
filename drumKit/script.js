const kits = ["crash","kick","snare","tom"]

const containerEl = document.querySelector(".container")

kits.forEach(kit =>{
	const buttonEl = document.createElement("button")
	buttonEl.classList.add("btn")
	buttonEl.innerText  = kit;
	buttonEl.style.backgroundImage = "url(images/"+kit+".png)"
	containerEl.appendChild(buttonEl)
	const audioEl = document.createElement("audio");
	audioEl.src = "sounds/" + kit + ".mp3";
	containerEl.appendChild(audioEl);
	buttonEl.addEventListiner("click", ()=>{
		// console.log(kit);
		audioEl.play()
	})
})



console.log(containerEl)