const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["Hyperlinks and Text Markup Language", "Home Tool Markup Language", "HyperText Markup Language", "HyperText Machine Language"],
    answer: "HyperText Markup Language"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
    answer: "Cascading Style Sheets"
  }
];

const quizContent = document.getElementById('quiz-content');
const submitBtn = document.getElementById('submit');
const resultDiv = document.getElementById('result');

let currentQuestion = 0;
let score = 0;
let userAnswers = [];

function loadQuiz() {
  const data = quizData[currentQuestion];
  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.innerHTML = `<h3>${data.question}</h3>`;

  data.options.forEach((option) => {
    const label = document.createElement('label');
    label.innerHTML = `
      <input type="radio" name="question${currentQuestion}" value="${option}"> ${option}
    `;
    questionElement.appendChild(label);
    questionElement.appendChild(document.createElement('br'));
  });

  quizContent.appendChild(questionElement);
}

function getSelectedAnswer(index) {
  const radios = document.getElementsByName(`question${index}`);
  for (let radio of radios) {
    if (radio.checked) {
      return radio.value;
    }
  }
  return null;
}

submitBtn.addEventListener('click', () => {
  const selected = getSelectedAnswer(currentQuestion);
  if (!selected) {
    alert("Please select an answer before proceeding.");
    return;
  }

  if (selected === quizData[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    quizContent.innerHTML = '';
    loadQuiz();
  } else {
    quizContent.innerHTML = '';
    resultDiv.innerHTML = `You scored ${score} out of ${quizData.length}!`;
    submitBtn.style.display = 'none';
  }
});

// Load first question
loadQuiz();