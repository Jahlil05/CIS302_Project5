// Project 5
// Jahlil Mendoza
// Date: November 24th, 2023
// filename: project.js


// Questions that will be asked

const Questions = [{
	q: "How many Superbowls have the Giants won?",
	a: [{ text: "4", isCorrect: true },
	{ text: "5", isCorrect: false },
	{ text: "10", isCorrect: false },
	{ text: "6", isCorrect: false }
	]

},
{
	q: "Who is the last Giants to win MVP?",
	a: [{ text: "Eli Manning", isCorrect: false, isSelected: false },
	{ text: "Michael Strahan", isCorrect: false },
	{ text: "Y.A. Tittle", isCorrect: false },
	{ text: "Lawrence Taylor", isCorrect: true }
	]

},
{
	q: "Who is the Giants all-time leading rusher?",
	a: [{ text: "Ahmad Bradshaw", isCorrect: false },
	{ text: "Brandon Jacobs", isCorrect: false },
	{ text: "Tiki Barber", isCorrect: true },
	{ text: "Saquon Barkeley", isCorrect: false }
	]

}

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
    const superWinner = document.getElementById('superWinner');

    if(score === 3) {
        superWinner.innerHTML = "<p>You're pretty cool. And Jahlil said so, so that means you're pretty freakin' cool.</p>";
    } else {
        superWinner.innerHTML = '';
    }
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}