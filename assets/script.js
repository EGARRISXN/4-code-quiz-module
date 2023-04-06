const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-container"));
const timer = document.getElementById("timer");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let availableQuestions = [];
let questionIndex = 0;
let timeLeft = 50;
let timerInterval;

//question and answer prompts//
let questions = [
    {
        question: "What does HTML stand for?",
        choice1: "1 Hyperworld Markup Language",
        choice2: "2 Hypertext Markup Language",
        choice3: "3 Hypertext Makeup Language",
        choice4: "4 Hypertext Markup Lesson",
        answer: "2 Hypertext Markup Language"
      },
      {
        question: "What does CSS stand for?",
        choice1: "1 Cascading Style Sheets",
        choice2: "2 Cascading Server Sheets",
        choice3: "3 Counting Server Situation",
        choice4: "4 Corner Style Sheets",
        answer: "1 Cascading Style Sheets"
      },
      {
        question: "What is JavaScript?",
        choice1: "1 Professional Server",
        choice2: "2 Profound Language",
        choice3: "3 Programming Service",
        choice4: "4 Programming Language",
        answer: "4 Programming Language"
      },
      {
        question: "What does JSON stand for?",
        choice1: "1 JavaScript Object Negative",
        choice2: "2 JavaScript Object Number",
        choice3: "3 JavaScript Object Notion",
        choice4: "4 JavaScript Object Narrative",
        answer: "3 JavaScript Object Notion"
      },
      {
        question: "What is GitHub used for?",
        choice1: "1 Video storage",
        choice2: "2 Picture storage",
        choice3: "3 Recording music",
        choice4: "4 Sharing code",
        answer: "4 Sharing code"
    }
  ]

//constants//
const correct_bonus = 10;
const max_questions = 5;

startGame = () => {
    timeLeft = 50;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion(questionIndex);
    timerInterval = setInterval(updateTimer, 1000);
};

updateTimer = () => {
  timeLeft--;
  timer.innerText = `Time left: ${timeLeft}`;
  if (timeLeft === 0) {
    clearInterval(timerInterval);
    endGame();
  }
};

//new question is prompt//
getNewQuestion = (questionIndex) => {
  currentQuestion = questions[questionIndex];

  if(availableQuestions.length === 0) {
    localStorage.setItem("mostRecentScore", "score");
    clearInterval(timerInterval);
    window.location.href ="final.html"
    return;
  }


  question.innerText = currentQuestion["question"];

    choices.forEach(choice => {
      const number = choice.dataset["number"];
      choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

//what happens when you press an answer//
choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;

    const selectedChoice = e.target.innerText;
    
    const statusText = selectedChoice === currentQuestion['answer'] ? "Correct" : "Incorrect";

    document.getElementById('results').innerText = statusText;

    if (statusText === "Incorrect") {
      timeLeft -= 10; // deduct

    }
    
    questionIndex++;

    setTimeout( () => {
     // selectedChoice.parentElement.classlist.remove(classToApply);
    document.getElementById('results').innerText = '';
      getNewQuestion(questionIndex);
    }, 1000);

  });
});

startGame();