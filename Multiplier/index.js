//Generating random numbers
const num1 = Math.floor(Math.random() * 10);
const num2 = Math.floor(Math.random() * 10);
//Calculating the answer
const correctAns = num1 * num2;

//Getting elements
const questionEl = document.getElementById('question');
const formEL = document.getElementById('form');
const inputEl = document.getElementById('input')
const scoreEl = document.getElementById('score');


let score = JSON.parse(localStorage.getItem('score'));

if(!score){
	score = 0
}

//InnerText
questionEl.innerText = `What is ${num1} multiplied by ${num2}?`
scoreEl.innerText = `Score: ${score}`


formEL.addEventListener("submit", (e)=>{
	const userAns = +inputEl.value;
	if(userAns ===	correctAns){
		score++
		storeScore
	}
	else{
		score--
		storeScore
	}
})

function storeScore(){
	localStorage.setItem('score', JSON.stringify(score))
}