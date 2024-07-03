const questionElement = document.getElementById('question');
const answerButtonsElement = document.querySelector('.answer-buttons');
const feedbackElement = document.getElementById('feedback');
const nextButton = document.getElementById('next-button');
const correctScoreElement = document.getElementById('correct-score');
const wrongScoreElement = document.getElementById('wrong-score');
const restartButton = document.getElementById('restart-button');

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
let correctAnswers = 0;
let wrongAnswers = 0;

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
    restartButton.style.display = 'none';
    answerButtonsElement.innerHTML = '';
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    feedbackElement.textContent = correct ? 'Correct!' : 'Wrong!';
    correct ? correctAnswers++ : wrongAnswers++;
    correctScoreElement.textContent = correctAnswers;
    wrongScoreElement.textContent = wrongAnswers;
    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
    });
    if (currentQuestionIndex < questions.length - 1) {
        nextButton.style.display = 'block';
    } else {
        restartButton.style.display = 'block';
        feedbackElement.textContent += ' You have completed the quiz!';
    }
}

function showNextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

function restartGame() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    correctScoreElement.textContent = correctAnswers;
    wrongScoreElement.textContent = wrongAnswers;
    restartButton.style.display = 'none';
    showQuestion();
}

nextButton.addEventListener('click', showNextQuestion);
restartButton.addEventListener('click', restartGame);

showQuestion();

