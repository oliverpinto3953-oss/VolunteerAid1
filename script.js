// 1. Toggle the Dropdown Menu
function toggleDropdown() {
    const dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("hidden");
}

// 2. Copy Email Function
function copyEmail() {
    const email = 'oliverpinto3953@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        alert('Email copied to clipboard!');
    });
}

// 3. Search Filter Function
function filterOpps() {
    let input = document.getElementById('oppSearch').value.toLowerCase();
    let cards = document.getElementsByClassName('opp-card');
    
    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector('.opp-title').innerText.toLowerCase();
        if (title.includes(input)) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// 4. Daily Impact Timer (Seconds since midnight)
function updateTimer() {
    const now = new Date();
    const seconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
    const timerDisplay = document.getElementById('impact-timer');
    if (timerDisplay) {
        timerDisplay.innerText = seconds.toLocaleString();
    }
}

// Update timer every second
setInterval(updateTimer, 1000);
updateTimer();

// 5. Close dropdown if user clicks anywhere else on screen
window.onclick = function(event) {
    if (!event.target.matches('button') && !event.target.closest('.relative')) {
        const dropdown = document.getElementById("myDropdown");
        if (dropdown && !dropdown.classList.contains('hidden')) {
            dropdown.classList.add('hidden');
        }
    }
}
