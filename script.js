// Dropdown Toggle
function toggleDropdown() {
    const dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("hidden");
}

// Leaderboard Modal Toggle
function toggleLeaderboard() {
    const modal = document.getElementById("leaderboardModal");
    modal.style.display = (modal.style.display === "flex") ? "none" : "flex";
}

// Search Filter for Opportunities
function filterOpps() {
    let input = document.getElementById('oppSearch').value.toLowerCase();
    let cards = document.getElementsByClassName('opp-card');
    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector('.opp-title').innerText.toLowerCase();
        cards[i].style.display = title.includes(input) ? "" : "none";
    }
}

// Copy Email Function
function copyEmail() {
    navigator.clipboard.writeText('oliverpinto3953@gmail.com');
    alert('Email copied to clipboard!');
}

// Live Timer Logic
function updateTimer() {
    const now = new Date();
    const seconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
    const timer = document.getElementById('impact-timer');
    if (timer) timer.innerText = seconds.toLocaleString();
}
setInterval(updateTimer, 1000);
updateTimer();

// Close dropdown if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('button') && !event.target.closest('.relative')) {
        const dropdown = document.getElementById("myDropdown");
        if (dropdown && !dropdown.classList.contains('hidden')) {
            dropdown.classList.add('hidden');
        }
    }
}
