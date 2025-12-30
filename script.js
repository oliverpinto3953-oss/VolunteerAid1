// 1. Function to Copy Email (Fixes your error)
function copyEmail() {
    const email = 'oliverpinto3953@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        alert('Email copied to clipboard: ' + email);
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}

// 2. Function for the Dropdown Menu
function toggleDropdown() {
    const menu = document.getElementById('dropdownMenu');
    // This "toggles" the hidden class on and off
    menu.classList.toggle('hidden');
}

// 3. Close dropdown if user clicks anywhere else
window.onclick = function(event) {
    if (!event.target.matches('button')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        const menu = document.getElementById('dropdownMenu');
        if (menu && !menu.classList.contains('hidden')) {
            menu.classList.add('hidden');
        }
    }
}
