// 1. Function to show/hide the dropdown menu
function toggleDropdown() {
    const dropdown = document.getElementById("myDropdown");
    // This removes 'hidden' to show the menu, or adds it back to hide it
    dropdown.classList.toggle("hidden");
}

// 2. Function to copy your email (Fixes the "not defined" error)
function copyEmail() {
    const email = 'oliverpinto3953@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        alert('Email copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// 3. Logic for the "Impact Timer"
function updateImpactTimer() {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const secondsSinceStart = Math.floor((now - startOfDay) / 1000);
    const timerElement = document.getElementById('impact-timer');
    if (timerElement) {
        timerElement.textContent = secondsSinceStart.toLocaleString();
    }
}

// Start the timer and update it every second
setInterval(updateImpactTimer, 1000);
updateImpactTimer();

// 4. Close the dropdown if you click outside of it
window.onclick = function(event) {
    if (!event.target.matches('button')) {
        const dropdown = document.getElementById("myDropdown");
        if (dropdown && !dropdown.classList.contains('hidden')) {
            dropdown.classList.add('hidden');
        }
    }
}
