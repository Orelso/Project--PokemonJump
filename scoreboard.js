const table = document.createElement("table");
table.classList.add("scoreboard");
table.innerHTML = `
    <tr>
        <th>Name</th>
        <th>Score</th>
    </tr>
`;
document.getElementById("scoreboard").appendChild(table);

function showScoreBoard() {
    // get the scoreBoard data
    const scoreBoard = JSON.parse(localStorage.getItem("scoreBoard")) || [];
    // update the content of the table
    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Score</th>
        </tr>
    `;
    scoreBoard.forEach(function(player) {
        table.innerHTML += `
            <tr>
                <td>${player.name}</td>
                <td>${player.score}</td>
            </tr>
        `;
    });
}

export default showScoreBoard