const textAreaEl = document.getElementById('textarea');
const totalCharEl = document.getElementById('total-counter')
const remCharEl = document.getElementById('remaining-counter')


textAreaEl.addEventListener("keyup", ()=>{
	console.log(textAreaEl.getAttribute('maxlength'))
	updateCounter();
	// console.log(textAreaEl.getAttribute('maxlength'))
})

function updateCounter() {
	totalCharEl.innerText = textAreaEl.value.length

}