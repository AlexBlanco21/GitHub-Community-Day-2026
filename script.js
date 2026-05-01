// Classic Octocats from https://octodex.github.com/
const octocats = [
    { number: 1, name: 'Original', slug: 'original' },
    { number: 2, name: 'Class Act', slug: 'class-act' },
    { number: 3, name: 'Octobi Wan Catnobi', slug: 'octobiwan' },
    { number: 4, name: 'Puppeteer', slug: 'puppeteer' },
    { number: 5, name: 'Scottocat', slug: 'scottocat' },
    { number: 6, name: 'Benevocats', slug: 'benevocats' },
    { number: 7, name: 'Forktocat', slug: 'forktocat' },
    { number: 8, name: 'Repo', slug: 'repo' },
    { number: 9, name: 'Setuptocat', slug: 'setuptocat' },
    { number: 10, name: 'Socialite', slug: 'socialite' },
    { number: 11, name: 'Drupalcat', slug: 'drupalcat' },
    { number: 12, name: 'Pythocat', slug: 'pythocat' },
    { number: 13, name: 'Founding Father', slug: 'founding-father' },
    { number: 14, name: 'Bouncer', slug: 'bouncer' },
    { number: 15, name: 'Octonaut', slug: 'octonaut' },
    { number: 16, name: 'Trekkie', slug: 'trekkie' },
    { number: 17, name: 'Monroe', slug: 'monroe' },
    { number: 18, name: 'Hubot', slug: 'hubot' },
    { number: 19, name: 'Swagtocat', slug: 'swagtocat' },
    { number: 20, name: 'Wilson', slug: 'wilson' },
    { number: 21, name: 'Spocktocat', slug: 'spocktocat' },
    { number: 22, name: 'Jean-Luc Picat', slug: 'jean-luc-picat' },
    { number: 23, name: 'Inspectocat', slug: 'inspectocat' },
    { number: 24, name: 'IronCat', slug: 'ironcat' },
    { number: 25, name: 'Agendacat', slug: 'agendacat' },
    { number: 26, name: 'Octoclark Kentocat', slug: 'octoclarkkentocat' },
    { number: 27, name: 'Okal-Eltocat', slug: 'okal-eltocat' },
    { number: 28, name: 'PAC-MAN Ghosts', slug: 'pacman-ghosts' },
    { number: 29, name: 'Total Eclipse of the Octocat', slug: 'total-eclipse-of-the-octocat' },
    { number: 30, name: 'Constructocat', slug: 'constructocat-v2' },
    { number: 31, name: 'Collabocats', slug: 'collabocats' },
    { number: 32, name: 'Supportcat', slug: 'supportcat' },
    { number: 33, name: 'Cherryontop-o-cat', slug: 'cherryontop-o-cat' },
    { number: 34, name: 'Chellocat', slug: 'chellocat' },
    { number: 35, name: 'X-tocat', slug: 'xtocat' },
    { number: 36, name: 'Jenktocat', slug: 'jenktocat' },
    { number: 37, name: 'Poptocat', slug: 'poptocat' },
    { number: 38, name: 'Scarletteocat', slug: 'scarletteocat' },
    { number: 39, name: 'Cloud', slug: 'cloud' },
    { number: 40, name: 'Dodgetocat', slug: 'dodgetocat' },
    { number: 41, name: 'Not Octocat', slug: 'notocat' },
    { number: 42, name: 'Andycat', slug: 'andycat' },
    { number: 43, name: 'Bear Cavalry', slug: 'bear-cavalry' },
    { number: 44, name: 'Spectrocat', slug: 'spectrocat' },
    { number: 45, name: 'Octdrey Catburn', slug: 'octdrey-catburn' },
    { number: 46, name: 'Nyantocat', slug: 'nyantocat' },
    { number: 47, name: 'Shoptocat', slug: 'shoptocat' },
    { number: 48, name: 'Oktobercat', slug: 'oktobercat' },
    { number: 49, name: 'Visionary', slug: 'visionary' },
    { number: 50, name: 'Riddlocat', slug: 'riddlocat' },
    { number: 51, name: 'Hipster Partycat', slug: 'hipster-partycat' },
    { number: 52, name: "Where's Waldocat", slug: 'wheres-waldocat' },
    { number: 53, name: 'Father Timeout', slug: 'father-timeout' },
    { number: 54, name: 'Grim Repo', slug: 'grim-repo' },
    { number: 55, name: 'Octocat De Los Muertos', slug: 'octocat-de-los-muertos' },
    { number: 56, name: 'Baracktocat', slug: 'baracktocat' },
    { number: 57, name: 'Octotron', slug: 'octotron' },
    { number: 58, name: 'Plumber', slug: 'plumber' },
    { number: 59, name: 'Linktocat', slug: 'linktocat' },
    { number: 60, name: 'Megacat', slug: 'megacat' },
    { number: 61, name: 'Thanktocat', slug: 'thanktocat' },
    { number: 62, name: 'Ordered Listocat', slug: 'orderedlistocat' },
    { number: 63, name: 'Saint Nicktocat', slug: 'saint-nicktocat' },
    { number: 64, name: 'Nemesis', slug: 'nemesis' },
    { number: 65, name: 'Defunktocat', slug: 'defunktocat' },
    { number: 66, name: 'Dojocat', slug: 'dojocat' },
    { number: 67, name: 'Doctocat Brown', slug: 'doctocat-brown' },
    { number: 68, name: 'Adventure Cat', slug: 'adventure-cat' },
    { number: 69, name: 'Strongbadtocat', slug: 'strongbadtocat' },
    { number: 70, name: 'Codercat', slug: 'codercat' },
    { number: 71, name: 'Electrocat', slug: 'electrocat' },
    { number: 72, name: 'Snow Octocat', slug: 'snowoctocat' },
    { number: 73, name: 'Momtocat', slug: 'momtocat' },
    { number: 74, name: '20% Cooler Octocat', slug: 'twenty-percent-cooler-octocat' },
    { number: 75, name: 'Red Polo', slug: 'red-polo' },
    { number: 76, name: 'Heisencat', slug: 'heisencat' },
    { number: 77, name: 'Octofez', slug: 'octofez' },
    { number: 78, name: 'Droidtocat', slug: 'droidtocat' },
    { number: 79, name: 'Minion', slug: 'minion' },
    { number: 80, name: 'Homercat', slug: 'homercat' },
    { number: 81, name: 'Murakamicat', slug: 'murakamicat' },
    { number: 82, name: 'Deckfailcat', slug: 'deckfailcat' },
    { number: 83, name: 'Pusheencat', slug: 'pusheencat' },
    { number: 84, name: 'Stormtroopocat', slug: 'stormtroopocat' },
    { number: 85, name: 'Dodgetocat v2', slug: 'dodgetocat-v2' },
    { number: 86, name: 'Megacat v2', slug: 'megacat-2' },
    { number: 87, name: 'Spidertocat', slug: 'spidertocat' },
    { number: 88, name: 'Dr. Octocat', slug: 'droctocat' },
    { number: 89, name: 'Gangnamtocat', slug: 'gangnamtocat' },
    { number: 90, name: 'Skitchtocat', slug: 'skitchtocat' }
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
    const imageUrl = `https://octodex.github.com/images/${selectedOctocat.slug}.png`;
    catEmoji.innerHTML = `<img src="${imageUrl}" alt="${selectedOctocat.name}" />`;
    
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