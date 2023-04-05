const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-container"));
const timeLeft = document.getElementsByClassName("time-left");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let availableQuestions = [];

//question and answer prompts//
let questions = [
    {
        question: "What does HTML stand for?",
        choice1: "1 Hyperworld Markup Language",
        choice2: "2 Hypertext Markup Language",
        choice3: "3 Hypertext Makeup Language",
        choice4: "4 Hypertext Markup Lesson",
        answer: 2
      },
      {
        question: "What does CSS stand for?",
        choice1: "1 Cascading Style Sheets",
        choice2: "2 Cascading Server Sheets",
        choice3: "3 Counting Server Situation",
        choice4: "4 Corner Style Sheets",
        answer: 1
      },
      {
        question: "What is JavaScript?",
        choice1: "1 Professional Server",
        choice2: "2 Profound Language",
        choice3: "3 Programming Service",
        choice4: "4 Programming Language",
        answer: 4
      },
      {
        question: "What does JSON stand for?",
        choice1: "1 JavaScript Object Negative",
        choice2: "2 JavaScript Object Number",
        choice3: "3 JavaScript Object Notion",
        choice4: "4 JavaScript Object Narrative",
        answer: 3
      },
      {
        question: "What is GitHub used for?",
        choice1: "1 Video storage",
        choice2: "2 Picture storage",
        choice3: "3 Recording music",
        choice4: "4 Sharing code",
        answer: 4
    }
  ]

//constants//
const correct_bonus = 10;
const max_questions = 5;

startGame = () => {
    timeLeft = 50;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

//new question is prompt//
getNewQuestion = () => {

  if(availableQuestions.length === 0) {
    localStorage.setItem("mostRecentScore", "score");
    return window.location.assign("/final.html");
  }

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

    if(!acceptingAnswers) return;

    acceptingAnswers = true;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
    selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    selectedChoice.parentElement.classlist.add(classToApply);

    setTimeout( () => {
      selectedChoice.parentElement.classlist.remove(classToApply);
      getNewQuestion();
    }, 1000);

  });
});

startGame();