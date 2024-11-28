// Example data
const players = [
    { name: "Lionel Messi", wins: 20, draws: 5, losses: 3, goals: 30 },
    { name: "Cristiano Ronaldo", wins: 25, draws: 4, losses: 2, goals: 40 },
    { name: "Araf Islam", wins: 15, draws: 6, losses: 5, goals: 20 },
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
