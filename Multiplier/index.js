//Getting elements
const questionEl = document.getElementById('question');


//Generating random numbers
const num1 = Math.floor(Math.random() * 10);
const num2 = Math.floor(Math.random() * 10);


//InnerText
questionEl.innerText = `What is ${num1} multiplied by ${num2}?`
