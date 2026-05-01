// Cat emoji possibilities
const catEmojis = ['😺', '😸', '😻'];
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
    currentCatIndex = (currentCatIndex + 1) % catEmojis.length;
    const catEmoji = document.getElementById('catEmoji');
    catEmoji.textContent = catEmojis[currentCatIndex];
    
    // Trigger bounce animation
    catEmoji.style.animation = 'none';
    setTimeout(() => {
        catEmoji.style.animation = 'bounce 0.6s ease';
    }, 10);

    // Log to console
    console.log(`Cat changed to: ${catEmojis[currentCatIndex]}`);
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
console.log('Try pressing Space to shuffle the cat!');
