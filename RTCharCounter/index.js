const textAreaEl = document.getElementById('textarea');
const totalCharEl = document.getElementById('total-counter')


textAreaEl.addEventListener("keyup", ()=>{
	console.log(textAreaEl.value.length)
})

function updateCounter() {
	totalCharEl.innerText = textAreaEl.value.length
}