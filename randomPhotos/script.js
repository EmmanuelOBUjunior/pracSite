const containerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () =>{
	createImages()
})


function createImages() {
	for (let index = 0; index < noOfImages; index++) {
		const imgEl = document.createElement("img")
		imgEl.src = `https://picsum.photos/200/300?random=${Math.floor(Math.random()*2000)}`
	}
	
}