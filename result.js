// Security implementations
document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener('keydown', event => {
    if (
        event.key === 'F12' ||
        (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'J' || event.key === 'C')) ||
        (event.ctrlKey && event.key === 'U')
    ) {
        event.preventDefault();
    }
});

// Load session data
const sessionDataText = localStorage.getItem('ecet_current_session');

if (!sessionDataText) {
    // If no recent quiz session, redirect to index
    window.location.href = 'index.html';
}

const sessionData = JSON.parse(sessionDataText);

// 3. Result Page - Display total score
document.getElementById('score-text').textContent = `${sessionData.score} / ${sessionData.total}`;

// 3. Ask user to enter their name and save to leaderboard
document.getElementById('save-btn').addEventListener('click', () => {
    const nameInput = document.getElementById('user-name').value.trim();

    if (!nameInput) {
        alert('Please enter your name to proceed!');
        return;
    }

    const newLeaderboardEntry = {
        id: Date.now(),
        name: nameInput,
        score: sessionData.score,
        total: sessionData.total,
        userAnswers: sessionData.userAnswers,
        shuffledQuestions: sessionData.shuffledQuestions,
        date: new Date().toISOString()
    };

    // Load existing leaderboard or create new array
    let leaderboard = JSON.parse(localStorage.getItem('ecet_leaderboard') || '[]');
    leaderboard.push(newLeaderboardEntry);

    // Save updated leaderboard back to local storage
    localStorage.setItem('ecet_leaderboard', JSON.stringify(leaderboard));

    // Clean up current session
    localStorage.removeItem('ecet_current_session');

    // Redirect to leaderboard page
    window.location.href = 'leaderboard.html';
});
