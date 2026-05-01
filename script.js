// Classic Octocats from https://octodex.github.com/
const octocats = [
    { number: 1, name: 'Original', slug: 'original', artist: 'Simon Oxley', description: 'The Octocat that started it all, originally named "Octopuss"!' },
    { number: 2, name: 'Class Act', slug: 'class-act', artist: 'Cameron McEfee', description: 'Used as promotional material for a party. Was also used to highlight PSD diffing.' },
    { number: 3, name: 'Octobi Wan Catnobi', slug: 'octobiwan', artist: 'Cameron McEfee', description: 'A reference to Obi-Wan Kenobi from Star Wars, used on 404 page. The first public variation!' },
    { number: 4, name: 'Puppeteer', slug: 'puppeteer', artist: 'Cameron McEfee', description: 'Most likely used for something related to the Puppeteer web automation tool.' },
    { number: 5, name: 'Scottocat', slug: 'scottocat', artist: 'Cameron McEfee', description: 'This is most likely Scott Chacon, a GitHub co-founder with a similar profile picture.' },
    { number: 6, name: 'Benevocats', slug: 'benevocats', artist: 'Cameron McEfee', description: 'Presumably a play on "benevolent", used for GitHub\'s Global Indigenous CoB.' },
    { number: 7, name: 'Forktocat', slug: 'forktocat', artist: 'Cameron McEfee', description: 'Included in early onboarding docs, a reference to "Fork"ing a repository.' },
    { number: 8, name: 'Repo', slug: 'repo', artist: 'Cameron McEfee', description: 'Included in early onboarding docs, a reference to repositories.' },
    { number: 9, name: 'Setuptocat', slug: 'setuptocat', artist: 'Cameron McEfee', description: 'Included in early onboarding docs.' },
    { number: 10, name: 'Socialite', slug: 'socialite', artist: 'Cameron McEfee', description: 'Included in early onboarding docs, specifically around social features.' },
    { number: 11, name: 'Drupalcat', slug: 'drupalcat', artist: 'Cameron McEfee', description: 'A reference to the Drupal CMS.' },
    { number: 12, name: 'Pythocat', slug: 'pythocat', artist: 'Cameron McEfee', description: 'A reference to the Python language, used for Python related posts.' },
    { number: 13, name: 'Founding Father', slug: 'founding-father', artist: 'Cameron McEfee', description: 'A reference to the USA Founding Father George Washington.' },
    { number: 14, name: 'Bouncer', slug: 'bouncer', artist: 'Cameron McEfee', description: 'Most likely used for real life merchandise for (real world!) office security.' },
    { number: 15, name: 'Octonaut', slug: 'octonaut', artist: 'Cameron McEfee', description: 'A play on "Astronaut".' },
    { number: 16, name: 'Trekkie', slug: 'trekkie', artist: 'Cameron McEfee', description: 'A reference to Geordi La Forge from Star Trek.' },
    { number: 17, name: 'Monroe', slug: 'monroe', artist: 'Cameron McEfee', description: 'A reference to Marilyn Monroe.' },
    { number: 18, name: 'Hubot', slug: 'hubot', artist: 'Cameron McEfee', description: 'Hubot is GitHub\'s mostly internal chatbot platform that enables automations.' },
    { number: 19, name: 'Swagtocat', slug: 'swagtocat', artist: 'Cameron McEfee', description: 'A reference to free items from the CodeConf 2011 event.' },
    { number: 20, name: 'Wilson', slug: 'wilson', artist: 'Cameron McEfee', description: 'A reference to Brian Wilson, a baseball player.' },
    { number: 21, name: 'Spocktocat', slug: 'spocktocat', artist: 'Cameron McEfee', description: 'A reference to Spock from Star Trek.' },
    { number: 22, name: 'Jean-Luc Picat', slug: 'jean-luc-picat', artist: 'Cameron McEfee', description: 'A reference to Jean-Luc Picard from Star Trek.' },
    { number: 23, name: 'Inspectocat', slug: 'inspectocat', artist: 'Jason Costello', description: 'Likely a reference to a browser\'s "Inspect Element" feature. First octocat not by Cameron McEfee!' },
    { number: 24, name: 'Ironcat', slug: 'ironcat', artist: 'Cameron McEfee', description: 'A reference to Iron Man.' },
    { number: 25, name: 'Agendacat', slug: 'agendacat', artist: 'Jason Costello', description: 'An agenda, presumably used in relation to CodeConf 2011.' },
    { number: 26, name: 'Octoclark Kentocat', slug: 'octoclarkkentocat', artist: 'Cameron McEfee', description: 'A reference to Superman AKA Clark Kent.' },
    { number: 27, name: 'Okal-Eltocat', slug: 'okal-eltocat', artist: 'Cameron McEfee', description: 'A reference to Superman AKA Kal-El.' },
    { number: 28, name: 'Blinktocat & Pac-Man Cats', slug: 'pacman', artist: 'Cameron McEfee', description: 'A reference to the 4 ghosts (Blinky, Pinky, Inky, Clyde) in Pac Man.' },
    { number: 29, name: 'Total Eclipse of the Octocat', slug: 'total-eclipse-of-the-octocat', artist: 'Cameron McEfee', description: 'Created for an Eclipse IDE related article, with a pun on "Total Eclipse of the Heart".' },
    { number: 30, name: 'Constructocat', slug: 'constructocat', artist: 'Jason Costello', description: 'Probably used for "Under Construction" screen(s).' },
    { number: 31, name: 'Collabocats', slug: 'collabocats', artist: 'Jason Costello', description: 'A play on the word "collaboration".' },
    { number: 32, name: 'Supportcat', slug: 'supportcat', artist: 'Jason Costello', description: 'Presumably used in relation to help / support.' },
    { number: 33, name: 'Cherryontop-o-cat', slug: 'cherryontop-o-cat', artist: 'Jason Costello', description: 'Unknown purpose.' },
    { number: 34, name: 'Chellocat', slug: 'chellocat', artist: 'Cameron McEfee', description: 'A reference to Chell from Portal.' },
    { number: 35, name: 'X-tocat', slug: 'xtocat', artist: 'Cameron McEfee', description: 'A reference to Wolverine from X-Men.' },
    { number: 36, name: 'Jenktocat', slug: 'jenktocat', artist: 'Cameron McEfee', description: 'A reference to the Jenkins CI system.' },
    { number: 37, name: 'Poptocat', slug: 'poptocat', artist: 'Cameron McEfee', description: 'Likely a play on "Pop", used for Father\'s Day.' },
    { number: 38, name: 'Scarletteocat', slug: 'scarletteocat', artist: 'Jordan McCullough', description: 'Created by a former employee for his daughter Scarlette.' },
    { number: 39, name: 'Cloud', slug: 'cloud', artist: 'Cameron McEfee', description: 'A reference to GitHub being a "cloud" service.' },
    { number: 40, name: 'Dodgetocat', slug: 'dodgetocat', artist: 'Cameron McEfee', description: 'A reference to The Five D\'s of Dodgeball from the film Dodgeball.' },
    { number: 41, name: 'Not Octocat', slug: 'notocat', artist: 'Cameron McEfee', description: 'Translates from French into "this is not an octopus cat".' },
    { number: 42, name: 'Andycat', slug: 'andycat', artist: 'Jordan McCullough', description: 'A reference to the "Shot Marilyns" series of paintings by Andy Warhol.' },
    { number: 43, name: 'Bear Cavalry', slug: 'bear-cavalry', artist: 'Cameron McEfee', description: 'A reference to the "Bear Cavalry" meme popular at the time.' },
    { number: 44, name: 'Spectrocat', slug: 'spectrocat', artist: 'Cameron McEfee', description: 'Unknown, possibly just a play on "Spectre".' },
    { number: 45, name: 'Octdrey Catburn', slug: 'octdrey-catburn', artist: 'Cameron McEfee', description: 'A reference to Audrey Hepburn, an actress.' },
    { number: 46, name: 'Nyantocat', slug: 'nyantocat', artist: 'Cameron McEfee', description: 'A recreation of the Nyan Cat meme.' },
    { number: 47, name: 'Shoptocat', slug: 'shoptocat', artist: 'Cameron McEfee', description: 'Themed after an employee who handled merchandise.' },
    { number: 48, name: 'Oktobercat', slug: 'oktobercat', artist: 'Cameron McEfee', description: 'A reference to Oktoberfest.' },
    { number: 49, name: 'Visionary', slug: 'visionary', artist: 'Cameron McEfee', description: 'A reference to Steve Jobs, former Apple CEO.' },
    { number: 50, name: 'Riddlocat', slug: 'riddlocat', artist: 'Cameron McEfee', description: 'A reference to Riddler from Batman.' },
    { number: 51, name: 'Hipster Partycat', slug: 'hipster-partycat', artist: 'Jina Anne', description: 'Likely used for "a company party invitation".' },
    { number: 52, name: 'Where\'s Waldocat', slug: 'wheres-waldocat', artist: 'Jason Costello', description: 'A reference to the Where\'s Wally / Waldo series.' },
    { number: 53, name: 'Father Timeout', slug: 'father-timeout', artist: 'Jason Costello', description: 'Used to "soften errors with cuteness". A play on "Father Time".' },
    { number: 54, name: 'Grim Repo', slug: 'grim-repo', artist: 'Cameron McEfee', description: 'A play on "Grim Reaper", created purely for the excellent pun.' },
    { number: 55, name: 'Octocat De Los Muertos', slug: 'octocat-de-los-muertos', artist: 'Cameron McEfee', description: 'A reference to the Mexican holiday Dia de los Muertos.' },
    { number: 56, name: 'Baracktocat', slug: 'baracktocat', artist: 'Cameron McEfee', description: 'A reference to Barack Obama\'s "Yes We Can" slogan.' },
    { number: 57, name: 'Octotron', slug: 'octotron', artist: 'Diana Mounter', description: 'A reference to the Tron series of films.' },
    { number: 58, name: 'Plumber', slug: 'plumber', artist: 'Cameron McEfee', description: 'A reference to Mario.' },
    { number: 59, name: 'Linktocat', slug: 'linktocat', artist: 'Cameron McEfee', description: 'A reference to Link from Legend of Zelda.' },
    { number: 60, name: 'Megacat', slug: 'megacat', artist: 'Jason Costello', description: 'A reference to Mega Man.' },
    { number: 61, name: 'Thanktocat', slug: 'thanktocat', artist: 'Cameron McEfee', description: 'A reference to the holiday Thanksgiving.' },
    { number: 62, name: 'Ordered Listocat', slug: 'orderedlistocat', artist: 'Cameron McEfee', description: 'Used to announce GitHub\'s acquisition of "Ordered List".' },
    { number: 63, name: 'Saint Nicktocat', slug: 'saint-nicktocat', artist: 'Cameron McEfee', description: 'A play on Saint Nick / Santa Claus.' },
    { number: 64, name: 'Nemesis', slug: 'nemesis', artist: 'Cameron McEfee', description: 'A reference to BitBucket ("Herme T. Crab, codes not socially, but alone").' },
    { number: 65, name: 'Defunktocat', slug: 'defunktocat', artist: 'Jason Costello', description: 'Styled after GitHub Co-founder Chris Wanstrath.' },
    { number: 66, name: 'Dojocat', slug: 'dojocat', artist: 'Cameron McEfee', description: 'Made for stickers at GitHub\'s "CoderDojo" sessions.' },
    { number: 67, name: 'Doctocat Brown', slug: 'doctocat-brown', artist: 'Jon Rohan', description: 'A reference to Doc Brown from Back to the Future.' },
    { number: 68, name: 'Adventure Cat', slug: 'adventure-cat', artist: 'Jon Rohan', description: 'A reference to Finn from Adventure Time.' },
    { number: 69, name: 'Strongbadtocat', slug: 'strongbadtocat', artist: 'Cameron McEfee', description: 'A reference to Strong Bad from Homestar Runner.' },
    { number: 70, name: 'Codercat', slug: 'codercat', artist: 'Cameron McEfee', description: 'Represents a generic user, in the likeness of an employee.' },
    { number: 71, name: 'Electrocat', slug: 'electrocat', artist: 'Cameron McEfee', description: 'Used for GitHub\'s "Security and IT" jobs.' },
    { number: 72, name: 'Snow Octocat', slug: 'snowoctocat', artist: 'Cameron McEfee', description: 'A reference to Mac OS X Snow Leopard.' },
    { number: 73, name: 'Momtocat', slug: 'momtocat', artist: 'Tony Jaramillo', description: 'A reference to Mom / Mum, used for Mother\'s day.' },
    { number: 74, name: '20% Cooler Octocat', slug: 'cooltocat', artist: 'Cameron McEfee', description: 'A reference to Rainbow Dash from My Little Pony.' },
    { number: 75, name: 'Red Polo', slug: 'red-polo', artist: 'Cameron McEfee', description: 'A reference to Scott Guthrie, a senior leader at Microsoft.' },
    { number: 76, name: 'Heisencat', slug: 'heisencat', artist: 'Jon Rohan', description: 'A reference to Heisenberg from Breaking Bad.' },
    { number: 77, name: 'Octofez', slug: 'octofez', artist: 'Nick Hengeveld', description: 'A portrait of the artist\'s dog.' },
    { number: 78, name: 'Droidtocat', slug: 'droidtocat', artist: 'Tony Jaramillo', description: 'Used for the first GitHub Android app release in July 2012.' },
    { number: 79, name: 'Minion', slug: 'minion', artist: 'Nick Hengeveld', description: 'A reference to Minions from Despicable Me.' },
    { number: 80, name: 'Homercat', slug: 'homercat', artist: 'Nick Hengeveld', description: 'A reference to Homer Simpson from The Simpsons.' },
    { number: 81, name: 'Murakamicat', slug: 'murakamicat', artist: 'Billy Roh', description: 'A reference to Mr. DOB by Takashi Murakami.' },
    { number: 82, name: 'Deckfailcat', slug: 'deckfailcat', artist: 'Matt Graham', description: 'Something related to the Speaker Deck software.' }
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

// Check if image URL exists
async function imageExists(url) {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok;
    } catch (error) {
        return false;
    }
}

// Get valid image URL (try PNG first, then JPG)
async function getValidImageUrl(slug) {
    const pngUrl = `https://octodex.github.com/images/${slug}.png`;
    const jpgUrl = `https://octodex.github.com/images/${slug}.jpg`;
    
    if (await imageExists(pngUrl)) {
        return pngUrl;
    } else if (await imageExists(jpgUrl)) {
        return jpgUrl;
    }
    return null;
}

// Shuffle cat emoji
async function shuffleCat() {
    const shuffleBtn = document.getElementById('shuffleBtn');
    
    // Add animation
    shuffleBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        shuffleBtn.style.transform = 'scale(1)';
    }, 100);

    // Disable button while loading
    shuffleBtn.disabled = true;

    // Pick a random octocat and find a valid image
    let validOctocat = null;
    let imageUrl = null;
    let attempts = 0;
    const maxAttempts = 10;

    while (!validOctocat && attempts < maxAttempts) {
        const randomIndex = Math.floor(Math.random() * octocats.length);
        const selectedOctocat = octocats[randomIndex];
        currentCatIndex = randomIndex;

        // Try to get a valid image URL
        imageUrl = await getValidImageUrl(selectedOctocat.slug);
        
        if (imageUrl) {
            validOctocat = selectedOctocat;
        }
        attempts++;
    }

    // Re-enable button
    shuffleBtn.disabled = false;

    if (!validOctocat) {
        console.error('Could not find a valid octocat image');
        return;
    }

    // Update the display
    const catEmoji = document.getElementById('catEmoji');
    catEmoji.innerHTML = `<img src="${imageUrl}" alt="${validOctocat.name}" />`;
    
    // Display octocat information with description
    const octocatInfo = document.getElementById('octocatInfo');
    if (octocatInfo) {
        octocatInfo.innerHTML = `
            <div class="octocat-title">#${validOctocat.number}: ${validOctocat.name}</div>
            <div class="octocat-artist">${validOctocat.artist} (${new Date().getFullYear()})</div>
            <div class="octocat-description">"${validOctocat.description}"</div>
        `;
    }
    
    // Trigger bounce animation
    catEmoji.style.animation = 'none';
    setTimeout(() => {
        catEmoji.style.animation = 'bounce 0.6s ease';
    }, 10);

    // Log to console
    console.log(`Octocat changed to #${validOctocat.number}: ${validOctocat.name}`);
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