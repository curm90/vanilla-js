const quizData = [
  {
    question: 'How old is Liam?',
    a: '18',
    b: '21',
    c: '28',
    d: '30',
    answer: 'd',
  },
  {
    question:
      'What is the most used programming language of in 2019?',
    a: 'C',
    b: 'Java',
    c: 'Python',
    d: 'JavaScript',
    answer: 'd',
  },
  {
    question: 'Who is the president of the USA?',
    a: 'Barack Obama',
    b: 'Donald Trump',
    c: 'JFK',
    d: 'Boris Johnson',
    answer: 'b',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hello to my legs',
    b: 'Hypertext makeup Language',
    c: 'Having the most luck',
    d: 'Hypertext markup Language',
    answer: 'd',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1990',
    b: '1996',
    c: '1997',
    d: 'none of the above',
    answer: 'd',
  },
];

let currentQuestion = 0;
let score = 0;

const quiz = document.querySelector('.quiz-container');
const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');

const optionA = document.getElementById('option-a');
const optionB = document.getElementById('option-b');
const optionC = document.getElementById('option-c');
const optionD = document.getElementById('option-d');
const submit = document.querySelector('.submit');

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  let currentQuestionData = quizData[currentQuestion];
  questionEl.textContent = currentQuestionData.question;

  optionA.textContent = currentQuestionData.a;
  optionB.textContent = currentQuestionData.b;
  optionC.textContent = currentQuestionData.c;
  optionD.textContent = currentQuestionData.d;
}

function getSelectedAnswer() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submit.addEventListener('click', () => {
  const selectedAnswer = getSelectedAnswer();

  if (selectedAnswer) {
    if (selectedAnswer === quizData[currentQuestion].answer) {
      score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h1>You scored ${score} out of ${quizData.length}!</h1>
      <button onclick='location.reload()'>Try Again</button>
      `;
    }
  }
});
