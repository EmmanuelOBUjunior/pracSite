const containerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () =>{
	createImages()
})


function createImages() {
	for (let index = 0; index < noOfImages; index++) {
		const imgEl = document.createElement("img")
		imgEl.src = ``
	}
	
}