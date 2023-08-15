const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const submitButton = document.getElementById('submit');
const scoreElement = document.getElementById('score');

const questions = [
    {
        question: 'What is the full form of DBMS?',
        choices: ['Data of Binary Management System', 'Database Management System', 'Database Management Service', 'Data Backup Management System'],
        correctAnswer: 'Database Management System'
    },
    {
        question: 'What is DBMS?',
        choices: ['DBMS is a collection of queries', 'DBMS is a high-level language', ' DBMS is a programming language', 'DBMS stores, modifies and retrieves data'],
        correctAnswer: 'DBMS stores, modifies and retrieves data'
    },
    {
        question: 'Who created the first DBMS?',
        choices: ['Edgar Frank Codd', 'Charles Bachman', 'Charles Babbage', 'Sharon B. Codd'],
        correctAnswer: 'Charles Bachman'
    },
    {
       question: ' In which of the following formats data is stored in the database management system?',
       choices: ['Image', 'Text', 'Table', 'Graph'],
       correctAnswer: 'Table'
    }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    choicesElement.innerHTML = '';
    currentQuestion.choices.forEach((choice) => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click', () => checkAnswer(choice, currentQuestion.correctAnswer));
        choicesElement.appendChild(li);
    });
}

function checkAnswer(selectedChoice, correctAnswer) {
    if (selectedChoice === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionElement.textContent = 'Quiz Completed!';
    choicesElement.innerHTML = '';
    submitButton.disabled = true;
    scoreElement.textContent = `Final Score: ${score}`;
}

submitButton.addEventListener('click', () => displayQuestion());

// Start the quiz when the page loads
displayQuestion();