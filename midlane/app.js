// DOM Elements
const midlanerGrid = document.getElementById('midlanerGrid');
const midlanerSearch = document.getElementById('midlanerSearch');
const resultsSection = document.getElementById('resultsSection');
const selectedMidlanerSpan = document.getElementById('selectedMidlaner');
const tierContainer = document.getElementById('tierContainer');
const strategyText = document.getElementById('strategyText');

// State
let currentSelectedMidlaner = null;

// Initialize
function init() {
    renderMidlanerGrid();
    setupEventListeners();
}

// Render Grid
function renderMidlanerGrid() {
    midlanerGrid.innerHTML = '';
    
    // Sort alphabetically for easier finding
    const sortedMidlaners = [...midlaneData.midlaners].sort((a, b) => a.name.localeCompare(b.name));

    sortedMidlaners.forEach(midlaner => {
        const card = document.createElement('div');
        // Tailwind classes for the grid item (Blue hover theme)
        card.className = 'group flex flex-col items-center p-3 bg-white/5 border border-white/10 rounded-xl cursor-pointer hover:bg-white/10 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-200';
        card.dataset.name = midlaner.name.toLowerCase();
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        
        card.innerHTML = `
            <div class="relative w-12 h-12 mb-2 rounded-lg overflow-hidden border border-white/20 group-hover:scale-105 transition-transform shadow-sm">
                <img src="${midlaner.icon}" alt="${midlaner.name}" class="w-full h-full object-cover" loading="lazy">
            </div>
            <span class="text-xs font-medium text-slate-300 group-hover:text-white truncate w-full text-center">${midlaner.name}</span>
        `;
        
        const handleSelect = () => selectMidlaner(midlaner.name);
        
        card.addEventListener('click', handleSelect);
        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleSelect();
            }
        });

        midlanerGrid.appendChild(card);
    });
}

function setupEventListeners() {
    // Search with debounce
    let timeout = null;
    midlanerSearch.addEventListener('input', (e) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            const term = e.target.value.toLowerCase();
            const cards = midlanerGrid.children;
            
            Array.from(cards).forEach(card => {
                const name = card.dataset.name;
                if (name.includes(term)) {
                    card.classList.remove('hidden');
                    card.classList.add('flex');
                } else {
                    card.classList.add('hidden');
                    card.classList.remove('flex');
                }
            });
        }, 50);
    });
}

function selectMidlaner(name) {
    if (currentSelectedMidlaner === name) return;
    currentSelectedMidlaner = name;
    
    // Update UI Text
    selectedMidlanerSpan.textContent = name;
    
    // Update Strategy Text
    const strategy = midlaneData.counterStrategies[name];
    if (strategy) {
        strategyText.innerHTML = strategy;
    } else {
        strategyText.innerHTML = "No specific strategy data available. Focus on trading around key cooldowns and managing the wave.";
    }

    // Show Results
    resultsSection.classList.remove('hidden');
    
    // Smooth Scroll
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Render Data
    renderCounterRecommendations(name);
}

function renderCounterRecommendations(name) {
    tierContainer.innerHTML = '';
    const counters = midlaneData.counters[name];

    // Handle empty data
    if (!counters || Object.keys(counters).every(key => counters[key].length === 0)) {
        tierContainer.innerHTML = `
            <div class="text-center p-8 border border-dashed border-slate-700 rounded-2xl bg-white/5">
                <p class="text-slate-400">No specific counter data available for ${name} yet.</p>
            </div>
        `;
        return;
    }

    // Tier Configuration (Standardized Colors)
    const tiers = [
        { key: 'tierS', label: 'S Tier', desc: 'Hard Counters', bg: 'bg-gradient-to-r from-pink-500/10 to-rose-500/10', border: 'border-pink-500/30', badge: 'bg-pink-500' },
        { key: 'tierA', label: 'A Tier', desc: 'Strong Picks', bg: 'bg-gradient-to-r from-purple-500/10 to-indigo-500/10', border: 'border-purple-500/30', badge: 'bg-purple-500' },
        { key: 'tierB', label: 'B Tier', desc: 'Good Matchups', bg: 'bg-gradient-to-r from-blue-500/10 to-cyan-500/10', border: 'border-blue-500/30', badge: 'bg-blue-500' },
        { key: 'tierC', label: 'C Tier', desc: 'Skill Matchups', bg: 'bg-gradient-to-r from-emerald-500/10 to-teal-500/10', border: 'border-emerald-500/30', badge: 'bg-emerald-500' },
        { key: 'tierD', label: 'D Tier', desc: 'Risky Picks', bg: 'bg-gradient-to-r from-amber-500/10 to-orange-500/10', border: 'border-amber-500/30', badge: 'bg-amber-500' },
    ];

    tiers.forEach(tier => {
        const champList = counters[tier.key];
        
        if (champList && champList.length > 0) {
            const section = document.createElement('div');
            section.className = `rounded-2xl overflow-hidden border ${tier.border} ${tier.bg} mb-6 shadow-md`;
            
            section.innerHTML = `
                <div class="px-6 py-4 border-b border-white/5 flex items-center gap-3 backdrop-blur-sm">
                    <span class="${tier.badge} text-white text-xs font-black px-3 py-1 rounded-md shadow-sm tracking-wide">${tier.label}</span>
                    <span class="text-slate-300 text-sm font-medium tracking-wide">${tier.desc}</span>
                </div>
                <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${champList.map(counter => createCounterHTML(counter)).join('')}
                </div>
            `;
            tierContainer.appendChild(section);
        }
    });
    
    // Animation
    tierContainer.animate([
        { opacity: 0, transform: 'translateY(10px)' },
        { opacity: 1, transform: 'translateY(0)' }
    ], {
        duration: 400,
        easing: 'ease-out'
    });
}

function createCounterHTML(counter) {
    return `
        <div class="flex gap-4 p-4 bg-dark-900/60 rounded-xl border border-white/5 hover:border-white/20 transition-all hover:-translate-y-1">
            <div class="flex-shrink-0">
                <img src="${counter.icon}" alt="${counter.name}" class="w-14 h-14 rounded-xl border border-white/10 shadow-lg object-cover">
            </div>
            <div class="flex-grow">
                <div class="flex items-center justify-between mb-2">
                    <h4 class="font-bold text-white text-lg">${counter.name}</h4>
                    <span class="text-[10px] uppercase font-bold text-slate-400 bg-white/10 px-2 py-1 rounded border border-white/5">${counter.role}</span>
                </div>
                <ul class="text-sm text-slate-400 space-y-1.5">
                    ${counter.reasons.map(r => `
                        <li class="flex items-start gap-2 leading-snug">
                            <span class="text-blue-400 mt-1 flex-shrink-0 text-xs">●</span>
                            <span>${r}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
}

// Initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}