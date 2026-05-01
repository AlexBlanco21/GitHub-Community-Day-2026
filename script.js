// Octocat variations
const octocats = [
    '<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="30" fill="#0d1117" stroke="#58a6ff" stroke-width="2"/><circle cx="20" cy="24" r="6" fill="#58a6ff"/><circle cx="44" cy="24" r="6" fill="#58a6ff"/><path d="M32 40 Q24 48 20 44" stroke="#58a6ff" stroke-width="2" fill="none"/><path d="M32 40 Q40 48 44 44" stroke="#58a6ff" stroke-width="2" fill="none"/><rect x="26" y="50" width="4" height="8" fill="#58a6ff"/><rect x="34" y="50" width="4" height="8" fill="#58a6ff"/></svg>',
    '<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="30" fill="#1f6feb" stroke="#58a6ff" stroke-width="2"/><circle cx="20" cy="26" r="5" fill="#ffd700"/><circle cx="44" cy="26" r="5" fill="#ffd700"/><path d="M32 38 Q26 46 22 42" stroke="#ffd700" stroke-width="2" fill="none"/><path d="M32 38 Q38 46 42 42" stroke="#ffd700" stroke-width="2" fill="none"/><rect x="28" y="48" width="3" height="10" fill="#ffd700"/><rect x="36" y="48" width="3" height="10" fill="#ffd700"/></svg>',
    '<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="30" fill="#0d1117" stroke="#58a6ff" stroke-width="2"/><circle cx="20" cy="24" r="6" fill="#58a6ff"/><circle cx="44" cy="24" r="6" fill="#58a6ff"/><polygon points="24,38 32,48 40,38" fill="#58a6ff"/><circle cx="32" cy="50" r="3" fill="#58a6ff"/></svg>'
];
let currentCatIndex = 0;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    updateBackground(210);
});

// Setup event listeners
function setupEventListeners() {
    const shuffleBtn = document.getElementById('shuffleBtn');
    const colorSlider = document.getElementById('colorSlider');
    
    shuffleBtn.addEventListener('click', shuffleCat);
    colorSlider.addEventListener('input', handleColorChange);
}

// Shuffle cat emoji
function shuffleCat() {
    const shuffleBtn = document.getElementById('shuffleBtn');
    
    // Add animation
    shuffleBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        shuffleBtn.style.transform = 'scale(1)';
    }, 100);

    // Change cat emoji
    currentCatIndex = (currentCatIndex + 1) % octocats.length;
    const catEmoji = document.getElementById('catEmoji');
    catEmoji.innerHTML = octocats[currentCatIndex];
    
    // Trigger bounce animation
    catEmoji.style.animation = 'none';
    setTimeout(() => {
        catEmoji.style.animation = 'bounce 0.6s ease';
    }, 10);

    // Log to console
    console.log(`Octocat changed to variation ${currentCatIndex + 1}`);
}

// Handle color slider change
function handleColorChange(event) {
    const hue = event.target.value;
    updateBackground(hue);
    updateColorValue(hue);
}

// Update background color
function updateBackground(hue) {
    const color = `hsl(${hue}, 100%, 50%)`;
    document.body.style.background = `linear-gradient(135deg, ${color} 0%, hsl(${hue}, 100%, 50%) 100%)`;
}

// Update color value display
function updateColorValue(hue) {
    const colorValue = document.getElementById('colorValue');
    colorValue.textContent = `${hue}°`;
}

// Additional: Log event interactions
const shuffleBtn = document.getElementById('shuffleBtn');
shuffleBtn.addEventListener('click', () => {
    console.log(`[${new Date().toLocaleTimeString()}] Shuffle button clicked`);
});

const colorSlider = document.getElementById('colorSlider');
colorSlider.addEventListener('change', () => {
    const hue = colorSlider.value;
    console.log(`[${new Date().toLocaleTimeString()}] Background color changed to ${hue}°`);
});

// Accessibility: keyboard support
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        event.preventDefault();
        shuffleCat();
    }
});

// Console message
console.log('%cGitHub Community Day 2026 - Perú', 'font-size: 20px; font-weight: bold; color: #0969da;');
console.log('%cExploring Agentic Workflows', 'font-size: 14px; color: #58a6ff;');
console.log('Try pressing Space or clicking the button to shuffle the Octocat!');