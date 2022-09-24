//Getting elements
const questionEl = document.getElementById('question');
const formEL = document.getElementById('form');

//Generating random numbers
const num1 = Math.floor(Math.random() * 10);
const num2 = Math.floor(Math.random() * 10);


//InnerText
questionEl.innerText = `What is ${num1} multiplied by ${num2}?`


