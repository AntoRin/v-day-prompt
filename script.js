// Get DOM elements
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const promptCard = document.getElementById('promptCard');
const successMessage = document.getElementById('successMessage');

// Handle Yes button click
yesBtn.addEventListener('click', function() {
    promptCard.style.display = 'none';
    successMessage.classList.add('show');
});

// Make No button float away on mouseover
noBtn.addEventListener('mouseover', function() {
    moveNoButton();
});

// Also move on click attempt (for touch devices)
noBtn.addEventListener('click', function(e) {
    e.preventDefault();
    moveNoButton();
});

function moveNoButton() {
    // Get the viewport dimensions
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;
    
    // Generate random positions
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    // Apply the new position
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}
