//Getting elements
const questionEl = document.getElementById('question');
const formEL = document.getElementById('form');
const inputEl = document.getElementById('input')

//Generating random numbers
const num1 = Math.floor(Math.random() * 10);
const num2 = Math.floor(Math.random() * 10);
//Calculating the answer
const correctAns = num1 * num2;

//InnerText
questionEl.innerText = `What is ${num1} multiplied by ${num2}?`


formEL.addEventListener('submit', ()=>{
	const userAns = +inputEl.value;
	console.log(userAns, typeof(userAns) );
})