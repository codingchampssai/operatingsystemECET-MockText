let score = localStorage.getItem("score");
let total = localStorage.getItem("total");

document.getElementById("score").innerText =
"Score: " + score + " / " + total;

function saveScore(){

let name = prompt("Enter your name");

if(!name || name.trim()==""){
alert("Enter a valid name");
return;
}

name = name.trim();

let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

// find if name already exists
let index = leaderboard.findIndex(player =>
player.name.toLowerCase() === name.toLowerCase()
);

if(index !== -1){

// update existing score (last attempt)
leaderboard[index].score = Number(score);

}else{

// add new player
leaderboard.push({
name: name,
score: Number(score)
});

}

localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

window.location.href = "leaderboard.html";

}