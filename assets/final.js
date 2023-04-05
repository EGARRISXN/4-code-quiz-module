const username = document.getElementById("username");
const btnFinal = document.getElementById("btn-final");
const finalNumber = document.getElementById("final-number");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
//max amount of names on score list//
const max_high_scores = 10;

finalNumber.innerText = mostRecentScore;
//scores being saved to list in order//
saveHighScore = e => {
    console.log("clicked")

    const score = {
        score: Math.floor(Math.random() * 100),
        name: username.value
    };
    highScores.push(score);
    highScores.sort( (a,b) => b.score - a.score)
    highScores.splice(10);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("./highscore.html");
};