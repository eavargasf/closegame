const questionElement = document.getElementById('question');
const answerButtonsElement = document.querySelector('.answer-buttons');
const feedbackElement = document.getElementById('feedback');

const question = {
    text: "Who won the Super Bowl in 2020?",
    answers: [
        { text: "Kansas City Chiefs", correct: true },
        { text: "San Francisco 49ers", correct: false },
        { text: "New England Patriots", correct: false },
        { text: "Los Angeles Rams", correct: false }
    ]
};

function showQuestion() {
    questionElement.textContent = question.text;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    feedbackElement.textContent = correct ? 'Correct!' : 'Wrong!';
}

showQuestion();
