const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
//creates high score list//
highScoresList.innerHTML = highScores.map(score => {
        return `<li class="high-scores">${score.name} - ${score.score}</li>`;
})
.join("");