// DOM Elements
const adcGrid = document.getElementById('adcGrid');
const adcSearch = document.getElementById('adcSearch');
const resultsSection = document.getElementById('resultsSection');
const selectedAdcSpan = document.getElementById('selectedAdc');
const tierContainer = document.getElementById('tierContainer');
const supportTypeText = document.getElementById('supportTypeText');

// State
let currentSelectedAdc = null;

// Initialize
function init() {
    renderAdcGrid();
    setupEventListeners();
}

// Render Grid
function renderAdcGrid() {
    adcGrid.innerHTML = '';
    
    // Sort alphabetically for easier finding
    const sortedAdcs = [...championData.adcs].sort((a, b) => a.name.localeCompare(b.name));

    sortedAdcs.forEach(adc => {
        const card = document.createElement('div');
        // Tailwind classes for Grid Item (Violet Theme)
        card.className = 'group flex flex-col items-center p-3 bg-white/5 border border-white/10 rounded-xl cursor-pointer hover:bg-white/10 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-900/20 transition-all duration-200';
        card.dataset.name = adc.name.toLowerCase();
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        
        card.innerHTML = `
            <div class="relative w-12 h-12 mb-2 rounded-lg overflow-hidden border border-white/20 group-hover:scale-105 transition-transform shadow-sm">
                <img src="${adc.icon}" alt="${adc.name}" class="w-full h-full object-cover" loading="lazy">
            </div>
            <span class="text-xs font-medium text-slate-300 group-hover:text-white truncate w-full text-center">${adc.name}</span>
        `;
        
        const handleSelect = () => selectAdc(adc.name);
        
        card.addEventListener('click', handleSelect);
        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleSelect();
            }
        });

        adcGrid.appendChild(card);
    });
}

function setupEventListeners() {
    // Search with debounce
    let timeout = null;
    adcSearch.addEventListener('input', (e) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            const term = e.target.value.toLowerCase();
            const cards = adcGrid.children;
            
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

function selectAdc(name) {
    if (currentSelectedAdc === name) return;
    currentSelectedAdc = name;
    
    // Update UI Text
    selectedAdcSpan.textContent = name;
    
    // Update Support Type Recommendation
    const recommendation = championData.supportTypeRecommendations[name];
    if (recommendation) {
        supportTypeText.innerHTML = recommendation;
    } else {
        supportTypeText.innerHTML = "Various support types can work well. Check specific synergies below.";
    }

    // Show Results
    resultsSection.classList.remove('hidden');
    
    // Smooth Scroll
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Render Data
    renderSupportRecommendations(name);
}

function renderSupportRecommendations(name) {
    tierContainer.innerHTML = '';
    const synergies = championData.synergies[name];

    if (!synergies || Object.keys(synergies).every(key => synergies[key].length === 0)) {
        tierContainer.innerHTML = `
            <div class="text-center p-8 border border-dashed border-slate-700 rounded-2xl bg-white/5">
                <p class="text-slate-400">No specific synergy data available for ${name} yet.</p>
            </div>
        `;
        return;
    }

    // Tier Configuration (Matches Top/Mid but with Violet accents implies Support theme)
    const tiers = [
        { key: 'tierS', label: 'S Tier', desc: 'Perfect Synergy', bg: 'bg-gradient-to-r from-pink-500/10 to-rose-500/10', border: 'border-pink-500/30', badge: 'bg-pink-500' },
        { key: 'tierA', label: 'A Tier', desc: 'Strong Synergy', bg: 'bg-gradient-to-r from-purple-500/10 to-indigo-500/10', border: 'border-purple-500/30', badge: 'bg-purple-500' },
        { key: 'tierB', label: 'B Tier', desc: 'Good Synergy', bg: 'bg-gradient-to-r from-blue-500/10 to-cyan-500/10', border: 'border-blue-500/30', badge: 'bg-blue-500' },
        { key: 'tierC', label: 'C Tier', desc: 'Decent / Average', bg: 'bg-gradient-to-r from-emerald-500/10 to-teal-500/10', border: 'border-emerald-500/30', badge: 'bg-emerald-500' },
        { key: 'tierD', label: 'D Tier', desc: 'Poor Synergy', bg: 'bg-gradient-to-r from-amber-500/10 to-orange-500/10', border: 'border-amber-500/30', badge: 'bg-amber-500' },
    ];

    tiers.forEach(tier => {
        const supportList = synergies[tier.key];
        
        if (supportList && supportList.length > 0) {
            const section = document.createElement('div');
            section.className = `rounded-2xl overflow-hidden border ${tier.border} ${tier.bg} mb-6 shadow-md`;
            
            section.innerHTML = `
                <div class="px-6 py-4 border-b border-white/5 flex items-center gap-3 backdrop-blur-sm">
                    <span class="${tier.badge} text-white text-xs font-black px-3 py-1 rounded-md shadow-sm tracking-wide">${tier.label}</span>
                    <span class="text-slate-300 text-sm font-medium tracking-wide">${tier.desc}</span>
                </div>
                <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${supportList.map(support => createSupportHTML(support)).join('')}
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

function createSupportHTML(support) {
    return `
        <div class="flex gap-4 p-4 bg-dark-900/60 rounded-xl border border-white/5 hover:border-white/20 transition-all hover:-translate-y-1">
            <div class="flex-shrink-0">
                <img src="${support.icon}" alt="${support.name}" class="w-14 h-14 rounded-xl border border-white/10 shadow-lg object-cover">
            </div>
            <div class="flex-grow">
                <div class="flex items-center justify-between mb-2">
                    <h4 class="font-bold text-white text-lg">${support.name}</h4>
                    <span class="text-[10px] uppercase font-bold text-slate-400 bg-white/10 px-2 py-1 rounded border border-white/5">${support.role}</span>
                </div>
                <ul class="text-sm text-slate-400 space-y-1.5">
                    ${support.reasons.map(r => `
                        <li class="flex items-start gap-2 leading-snug">
                            <span class="text-violet-400 mt-1 flex-shrink-0 text-xs">●</span>
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