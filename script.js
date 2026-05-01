// Classic Octocats from https://blog.jakelee.co.uk/what-on-earth-are-octocats/#classic-octocats
const octocats = [
    { name: 'Original', number: 1 },
    { name: 'Class Act', number: 2 },
    { name: 'Octobi Wan Catnobi', number: 3 },
    { name: 'Puppeteer', number: 4 },
    { name: 'Scottocat', number: 5 },
    { name: 'Benevocats', number: 6 },
    { name: 'Forktocat', number: 7 },
    { name: 'Repo', number: 8 },
    { name: 'Setuptocat', number: 9 },
    { name: 'Socialite', number: 10 },
    { name: 'Drupalcat', number: 11 },
    { name: 'Pythocat', number: 12 },
    { name: 'Founding Father', number: 13 },
    { name: 'Bouncer', number: 14 },
    { name: 'Octonaut', number: 15 },
    { name: 'Trekkie', number: 16 },
    { name: 'Monroe', number: 17 },
    { name: 'Hubot', number: 18 },
    { name: 'Swagtocat', number: 19 },
    { name: 'Wilson', number: 20 },
    { name: 'Spocktocat', number: 21 },
    { name: 'Jean-Luc Picat', number: 22 },
    { name: 'Inspectocat', number: 23 },
    { name: 'Ironcat', number: 24 },
    { name: 'Agendacat', number: 25 },
    { name: 'Octoclark Kentocat', number: 26 },
    { name: 'Okal-Eltocat', number: 27 },
    { name: 'Pac-Man Cats', number: 28 },
    { name: 'Total Eclipse of the Octocat', number: 29 },
    { name: 'Constructocat', number: 30 },
    { name: 'Collabocats', number: 31 },
    { name: 'Supportcat', number: 32 },
    { name: 'Cherryontop-o-cat', number: 33 },
    { name: 'Chellocat', number: 34 },
    { name: 'X-tocat', number: 35 },
    { name: 'Jenktocat', number: 36 },
    { name: 'Poptocat', number: 37 },
    { name: 'Scarletteocat', number: 38 },
    { name: 'Cloud', number: 39 },
    { name: 'Dodgetocat', number: 40 },
    { name: 'Not Octocat', number: 41 },
    { name: 'Bear Cavalry', number: 43 },
    { name: 'Spectrocat', number: 44 },
    { name: 'Octdrey Catburn', number: 45 },
    { name: 'Nyantocat', number: 46 },
    { name: 'Shoptocat', number: 47 },
    { name: 'Oktobercat', number: 48 },
    { name: 'Visionary', number: 49 },
    { name: 'Riddlocat', number: 50 },
    { name: 'Hipster Partycat', number: 51 },
    { name: "Where's Waldocat", number: 52 },
    { name: 'Father Timeout', number: 53 },
    { name: 'Grim Repo', number: 54 },
    { name: 'Octocat De Los Muertos', number: 55 },
    { name: 'Baracktocat', number: 56 },
    { name: 'Octotron', number: 57 },
    { name: 'Plumber', number: 58 },
    { name: 'Linktocat', number: 59 },
    { name: 'Megacat', number: 60 },
    { name: 'Thanktocat', number: 61 },
    { name: 'Ordered Listocat', number: 62 },
    { name: 'Saint Nicktocat', number: 63 },
    { name: 'Nemesis', number: 64 },
    { name: 'Defunktocat', number: 65 },
    { name: 'Dojocat', number: 66 },
    { name: 'Doctocat Brown', number: 67 },
    { name: 'Adventure Cat', number: 68 },
    { name: 'Strongbadtocat', number: 69 },
    { name: 'Codercat', number: 70 },
    { name: 'Electrocat', number: 71 },
    { name: 'Snow Octocat', number: 72 },
    { name: 'Momtocat', number: 73 },
    { name: '20% Cooler Octocat', number: 74 },
    { name: 'Red Polo', number: 75 },
    { name: 'Heisencat', number: 76 },
    { name: 'Octofez', number: 77 },
    { name: 'Droidtocat', number: 78 },
    { name: 'Minion', number: 79 },
    { name: 'Homercat', number: 80 },
    { name: 'Murakamicat', number: 81 },
    { name: 'Deckfailcat', number: 82 }
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

    // Pick a random octocat
    const randomIndex = Math.floor(Math.random() * octocats.length);
    const selectedOctocat = octocats[randomIndex];
    currentCatIndex = randomIndex;

    // Update the display
    const catEmoji = document.getElementById('catEmoji');
    catEmoji.textContent = '🐙';
    
    // Display octocat information
    const octocatInfo = document.getElementById('octocatInfo');
    if (octocatInfo) {
        octocatInfo.textContent = `#${selectedOctocat.number}: ${selectedOctocat.name}`;
    }
    
    // Trigger bounce animation
    catEmoji.style.animation = 'none';
    setTimeout(() => {
        catEmoji.style.animation = 'bounce 0.6s ease';
    }, 10);

    // Log to console
    console.log(`Octocat changed to #${selectedOctocat.number}: ${selectedOctocat.name}`);
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