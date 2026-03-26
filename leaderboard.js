const leaderboardBody = document.getElementById('leaderboard-body');
const analysisSection = document.getElementById('analysis-section');
const analysisTitle = document.getElementById('analysis-title');
const analysisContent = document.getElementById('analysis-content');
const tabs = document.querySelectorAll('.tab-btn');

let leaderboard = JSON.parse(localStorage.getItem('ecet_leaderboard') || '[]');
leaderboard.sort((a, b) => b.score - a.score);

let selectedUser = null;

function renderLeaderboard() {
    leaderboardBody.innerHTML = '';

    if (leaderboard.length === 0) {
        leaderboardBody.innerHTML = '<tr><td colspan="3">No results</td></tr>';
        return;
    }

    leaderboard.forEach((entry, index) => {
        const tr = document.createElement('tr');
        tr.className = 'user-row';

        tr.innerHTML = `
            <td>#${index + 1}</td>
            <td>${entry.name}</td>
            <td>${entry.score} / ${entry.total}</td>
        `;

        tr.addEventListener('click', () => {
            selectedUser = entry;
            showAnalysis(entry);
        });

        leaderboardBody.appendChild(tr);
    });
}

function showAnalysis(userEntry) {
    analysisTitle.textContent = `Analysis for: ${userEntry.name}`;
    analysisSection.classList.add('show');

    setTabActive('correct');
    renderAnalysisContent('correct');
}

function setTabActive(tabId) {
    tabs.forEach(tab => tab.classList.remove('active'));
    document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
}

function renderAnalysisContent(type) {
    if (!selectedUser) return;

    analysisContent.innerHTML = '';

    const { shuffledQuestions, userAnswers } = selectedUser;

    let filtered = shuffledQuestions.filter(q => {
        const ans = userAnswers[q.id];

        if (type === 'correct') return ans === q.answer;
        if (type === 'wrong') return ans !== q.answer && ans !== null;
        if (type === 'not-answered') return ans === null;
    });

    if (filtered.length === 0) {
        analysisContent.innerHTML = "No questions";
        return;
    }

    filtered.forEach(q => {
        const card = document.createElement('div');
        card.className = 'analysis-card';

        const title = document.createElement('div');
        title.className = 'question-title';
        title.textContent = q.question; // ✅ FIX
        card.appendChild(title);

        q.options.forEach(opt => {
            const div = document.createElement('div');
            div.className = 'option-label';

            const userAns = userAnswers[q.id];

            if (type === 'correct') {
                if (opt === q.answer) div.classList.add('opt-correct');
            }

            if (type === 'wrong') {
                if (opt === q.answer) div.classList.add('opt-correct');
                if (opt === userAns) div.classList.add('opt-wrong');
            }

            if (type === 'not-answered') {
                if (opt === q.answer) div.classList.add('opt-correct');
                else div.classList.add('opt-gray');
            }

            div.textContent = opt;
            card.appendChild(div);
        });

        analysisContent.appendChild(card);
    });
}

tabs.forEach(tab => {
    tab.addEventListener('click', function () {
        const tabId = this.getAttribute('data-tab');
        setTabActive(tabId);
        renderAnalysisContent(tabId);
    });
});

window.onload = renderLeaderboard;
