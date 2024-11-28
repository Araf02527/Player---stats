// Example data
const players = [
    { name: "Arif", wins: 0, draws: 0, losses: 0, goals: 0 },
    { name: "Sowmik", wins: 0, draws: 0, losses: 0, goals: 0 },
    { name: "Araf", wins: 0, draws: 0, losses: 0, goals: 0 },
    { name: "Naim", wins: 0, draws: 0, losses: 0, goals: 0 },
    { name: "Sakib", wins: 0, draws: 0, losses: 0, goals: 0 },
    { name: "Rumman", wins: 0, draws: 0, losses: 0, goals: 0 },
     { name: "Sayeed", wins: 0, draws: 0, losses: 0, goals: 0 },
    { name: "Shipon", wins: 0, draws: 0, losses: 0, goals: 0 },
    { name: "Shojib", wins: 0, draws: 0, losses: 0, goals: 0 },
     { name: "Anam", wins: 0, draws: 0, losses: 0, goals: 0 },
    { name: "Andy", wins: 0, draws: 0, losses: 0, goals: 0 },
    { name: "Shakib", wins: 0, draws: 0, losses: 0, goals: 0 },
];

// Search Function
function searchPlayer() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    const player = players.find(p => p.name.toLowerCase() === input);

    if (player) {
        resultDiv.innerHTML = `
            <p><strong>Name:</strong> ${player.name}</p>
            <p><strong>Wins:</strong> ${player.wins}</p>
            <p><strong>Draws:</strong> ${player.draws}</p>
            <p><strong>Losses:</strong> ${player.losses}</p>
            <p><strong>Goals:</strong> ${player.goals}</p>
        `;
    } else {
        resultDiv.innerHTML = "<p>Player not found!</p>";
    }
}
