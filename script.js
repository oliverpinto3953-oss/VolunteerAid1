// Toggle the Menu Dropdown
function toggleDropdown() {
    const dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("hidden");
}

// Toggle the Leaderboard Popup
function toggleLeaderboard() {
    const modal = document.getElementById("leaderboardModal");
    // This switches the display from 'none' to 'flex'
    if (modal.style.display === "flex") {
        modal.style.display = "none";
    } else {
        modal.style.display = "flex";
    }
}

// Copy Email
function copyEmail() {
    navigator.clipboard.writeText('oliverpinto3953@gmail.com');
    alert('Email copied to clipboard!');
}

// Search Filter
function filterOpps() {
    let input = document.getElementById('oppSearch').value.toLowerCase();
    let cards = document.getElementsByClassName('opp-card');
    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector('.opp-title').innerText.toLowerCase();
        cards[i].style.display = title.includes(input) ? "" : "none";
    }
}

// Seconds Timer
function updateTimer() {
    const now = new Date();
    const seconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
    const timer = document.getElementById('impact-timer');
    if (timer) timer.innerText = seconds.toLocaleString();
}
setInterval(updateTimer, 1000);
updateTimer();
