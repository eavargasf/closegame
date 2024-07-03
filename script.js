const questionElement = document.getElementById('question');
const answerButtonsElement = document.querySelector('.answer-buttons');
const feedbackElement = document.getElementById('feedback');
const nextButton = document.getElementById('next-button');

const questions = [
    {
        text: "Who won the Super Bowl in 2020?",
        answers: [
            { text: "Kansas City Chiefs", correct: true },
            { text: "San Francisco 49ers", correct: false },
            { text: "New England Patriots", correct: false },
            { text: "Los Angeles Rams", correct: false }
        ]
    },
    {
        text: "Which team has won the most Super Bowls?",
        answers: [
            { text: "Pittsburgh Steelers", correct: false },
            { text: "New England Patriots", correct: true },
            { text: "Dallas Cowboys", correct: false },
            { text: "San Francisco 49ers", correct: false }
        ]
    },
    {
        text: "Who is the NFL's all-time leading rusher?",
        answers: [
            { text: "Walter Payton", correct: false },
            { text: "Emmitt Smith", correct: true },
            { text: "Barry Sanders", correct: false },
            { text: "Eric Dickerson", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.text;
    currentQuestion.answers.forEach(answer => {
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

function resetState() {
    feedbackElement.textContent = '';
    nextButton.style.display = 'none';
    answerButtonsElement.innerHTML = '';
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    feedbackElement.textContent = correct ? 'Correct!' : 'Wrong!';
    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        feedbackElement.textContent = 'You have completed the quiz!';
        nextButton.style.display = 'none';
    }
}

nextButton.addEventListener('click', showNextQuestion);

showQuestion();
