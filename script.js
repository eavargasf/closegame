const questionElement = document.getElementById('question');
const answerButtonsElement = document.querySelector('.answer-buttons');
const feedbackElement = document.getElementById('feedback');
const nextButton = document.getElementById('next-button');
const correctScoreElement = document.get
const wrongScoreElement = document.getElementById('wrong-score');
const restartButton = document.getElementById('restart-button');
const endContainer = document.getElementById('end-container');

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
    },
    {
        text: "Which team won the first Super Bowl?",
        answers: [
            { text: "Green Bay Packers", correct: true },
            { text: "Kansas City Chiefs", correct: false },
            { text: "New York Jets", correct: false },
            { text: "Minnesota Vikings", correct: false }
        ]
    },
    {
        text: "Who holds the record for the most touchdown passes in a single season?",
        answers: [
            { text: "Peyton Manning", correct: true },
            { text: "Tom Brady", correct: false },
            { text: "Drew Brees", correct: false },
            { text: "Aaron Rodgers", correct: false }
        ]
    },
    {
        text: "Which team has the most Super Bowl appearances?",
        answers: [
            { text: "New England Patriots", correct: true },
            { text: "Pittsburgh Steelers", correct: false },
            { text: "Dallas Cowboys", correct: false },
            { text: "San Francisco 49ers", correct: false }
        ]
    },
    {
        text: "Who is the NFL's all-time leading passer in terms of yardage?",
        answers: [
            { text: "Drew Brees", correct: true },
            { text: "Tom Brady", correct: false },
            { text: "Peyton Manning", correct: false },
            { text: "Brett Favre", correct: false }
        ]
    },
    {
        text: "Which player has the most career sacks?",
        answers: [
            { text: "Bruce Smith", correct: true },
            { text: "Reggie White", correct: false },
            { text: "Deacon Jones", correct: false },
            { text: "Kevin Greene", correct: false }
        ]
    },
    {
        text: "Who is the NFL's all-time leader in receptions?",
        answers: [
            { text: "Jerry Rice", correct: true },
            { text: "Tony Gonzalez", correct: false },
            { text: "Larry Fitzgerald", correct: false },
            { text: "Randy Moss", correct: false }
        ]
    },
    {
        text: "Which team drafted Brett Favre?",
        answers: [
            { text: "Atlanta Falcons", correct: true },
            { text: "Green Bay Packers", correct: false },
            { text: "New York Jets", correct: false },
            { text: "Minnesota Vikings", correct: false }
        ]
    },
    {
        text: "Who was the MVP of Super Bowl XLIX?",
        answers: [
            { text: "Tom Brady", correct: true },
            { text: "Julian Edelman", correct: false },
            { text: "Malcolm Butler", correct: false },
            { text: "Russell Wilson", correct: false }
        ]
    },
    {
        text: "Which NFL team has a star on its helmet?",
        answers: [
            { text: "Dallas Cowboys", correct: true },
            { text: "Houston Texans", correct: false },
            { text: "Tennessee Titans", correct: false },
            { text: "New York Giants", correct: false }
        ]
    },
    {
        text: "Who holds the record for the most rushing touchdowns in a single season?",
        answers: [
            { text: "LaDainian Tomlinson", correct: true },
            { text: "Shaun Alexander", correct: false },
            { text: "Priest Holmes", correct: false },
            { text: "Emmitt Smith", correct: false }
        ]
    },
    {
        text: "Which quarterback has won the most Super Bowl titles?",
        answers: [
            { text: "Tom Brady", correct: true },
            { text: "Joe Montana", correct: false },
            { text: "Terry Bradshaw", correct: false },
            { text: "Peyton Manning", correct: false }
        ]
    },
    {
        text: "Which player has the most career interceptions?",
        answers: [
            { text: "Paul Krause", correct: true },
            { text: "Rod Woodson", correct: false },
            { text: "Night Train Lane", correct: false },
            { text: "Charles Woodson", correct: false }
        ]
    },
    {
        text: "Who was the first overall pick in the 2012 NFL Draft?",
        answers: [
            { text: "Andrew Luck", correct: true },
            { text: "Robert Griffin III", correct: false },
            { text: "Trent Richardson", correct: false },
            { text: "Matt Kalil", correct: false }
        ]
    },
    {
        text: "Which team is known as the 'Steel Curtain'?",
        answers: [
            { text: "Pittsburgh Steelers", correct: true },
            { text: "Detroit Lions", correct: false },
            { text: "Chicago Bears", correct: false },
            { text: "Cleveland Browns", correct: false }
        ]
    },
    {
        text: "Which NFL team has a lightning bolt on its helmet?",
        answers: [
            { text: "Los Angeles Chargers", correct: true },
            { text: "Denver Broncos", correct: false },
            { text: "Miami Dolphins", correct: false },
            { text: "Seattle Seahawks", correct: false }
        ]
    },
    {
        text: "Who was the head coach of the 1972 Miami Dolphins, the only team to have a perfect season?",
        answers: [
            { text: "Don Shula", correct: true },
            { text: "Chuck Noll", correct: false },
            { text: "Tom Landry", correct: false },
            { text: "Bill Walsh", correct: false }
        ]
    },
    {
        text: "Which player is known as 'The Bus'?",
        answers: [
            { text: "Jerome Bettis", correct: true },
            { text: "Marshall Faulk", correct: false },
            { text: "LaDainian Tomlinson", correct: false },
            { text: "Eddie George", correct: false }
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
    endContainer.style.display = 'none';
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
        endGame();
    }
}

function showNextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

function endGame() {
    restartButton.style.display = 'block';
    endContainer.style.display = 'block';
    feedbackElement.textContent += ' You have completed the quiz!';
}

function restartGame() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    correctScoreElement.textContent = correctAnswers;
    wrongScoreElement.textContent = wrongAnswers;
    restartButton.style.display = 'none';
    endContainer.style.display = 'none';
    showQuestion();
}

nextButton.addEventListener('click', showNextQuestion);
restartButton.addEventListener('click', restartGame);

showQuestion();


