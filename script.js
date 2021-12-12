var allQuestions = [
	{
		question: "Fråga 1",
		choices: ["Svar 1", "Svar 2", "Svar 3"],
		answer: "2",
		qVar: "q1"
	},
	{
		question: "Fråga 2",
		choices: ["Svar 1", "Svar 2", "Svar 3"],
		answer: "1",
		qVar: "q2"
	},
	{
		question: "Fråga 3",
		choices: ["Svar 1", "Svar 2", "Svar 3"],
		answer: "2",
		qVar: "q3"
	},
	{
		question: "Fråga 4",
		choices: ["Svar 1", "Svar 2", "Svar 3"],
		answer: "1",
		qVar: "q4"
	},
	{
		question: "Fråga 5",
		choices: ["Svar 1", "Svar 2", "Svar 3"],
		answer: "2",
		qVar: "q5"
	},
	{
		question: "Fråga 6",
		choices: ["Svar 1", "Svar 2", "Svar 3"],
		answer: "3",
		qVar: "q6"
	},
	{
		question: "Fråga 7",
		choices: ["Svar 1", "Svar 2", "Svar 3"],
		answer: "2",
		qVar: "q7"
	},
	{
		question: "Fråga 8",
		choices: ["Svar 1", "Svar 2", "Svar 3"],
		answer: "1",
		qVar: "q8"
	},
	{
		question: "Fråga 9",
		choices: ["Svar 1", "Svar 2", "Svar 3"],
		answer: "3",
		qVar: "q9"
	},
	{
		question: "Fråga 10",
		choices: ["Svar 1", "Svar 2", "Svar 3"],
		answer: "1",
		qVar: "q10"
	}
]

// function outputQuestions(){
// 	var list = document.getElementById("quizList");

// 	allQuestions.forEach((item)=>{
// 		let li = document.createElement("li");
		
// 		li.classList.add('questionClass');
// 		li.innerHTML.add = item.question + "<br>" 
// 		"<input type=\"radio\" name=\"" + item.qVar + "\" ;
// 		li.
// 		list.appendChild(li);
// 	})
// }

// Checks all answers
function correct(){

	// Number of correct answers
	var sum = 0;

	// Loops through all questions and checks which answer is selected
	for (var i = 0; i < 10; i++) {

		// Get radio group name variable
		var nameTemp = allQuestions[i].qVar;	

		// Get value (selected answer) of each question (input radio group)
		var quest = document.querySelector("input[name="+nameTemp+"]:checked");

		// Check if null (no answer selected)
		if (quest === null){
			console.log(i + ": Inget svar valt");
			// Change color of question div to yellow
				document.getElementById(nameTemp+"Div").style.backgroundColor = 'yellow';
		}

		// Not null
		else{

			// Get answer (checked radio button value)
			var temp = quest.value;

			// Check if correct
			if (temp == allQuestions[i].answer) {
				console.log(i + ": Rätt");
				sum++;
				// Change color of question div to green
				document.getElementById(nameTemp+"Div").style.backgroundColor = 'green';
			}
			else {
				console.log(i + ": Fel");
				// Change color of question div to red
				document.getElementById(nameTemp+"Div").style.backgroundColor = 'red';
			}
		}
	}

	// Print sum
	document.getElementById("quizText").innerHTML = "Du fick " + sum + " rätt av 10 möjliga!"
}

// Reset background color and result
function reset(){
	document.getElementById("quizText").innerHTML = null;

	for (var i = 0; i < 10; i++){
		var nameTemp = allQuestions[i].qVar;
		document.getElementById(nameTemp+"Div").style.backgroundColor = '#bae1ff';
	}
}
