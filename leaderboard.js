let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

leaderboard.sort((a,b)=>b.score-a.score);

let html="";

leaderboard.forEach(player=>{

html += `
<tr>
<td>${player.name}</td>
<td>${player.score}</td>
</tr>
`;

});

document.getElementById("board").innerHTML = html;