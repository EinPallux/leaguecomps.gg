/**
 * LEAGUECOMPS.GG - MAIN APPLICATION LOGIC
 * Handles navigation, state management, and rendering of all features.
 */

// Import data from the module
import { champions, matchupData, runeBuilds, metaStats, patchNotes } from './data.js';

// --- State Management ---
const state = {
    currentTab: 'matchup-section',
    matchup: {
        selectedLane: 'mid',
        selectedChampion: null,
        searchQuery: ''
    },
    runes: {
        searchQuery: ''
    },
    meta: {
        selectedLane: 'mid'
    }
};

// --- DOM Elements ---
const elements = {
    navButtons: document.querySelectorAll('.nav-btn'),
    sections: document.querySelectorAll('.content-section'),
    laneSelector: document.getElementById('lane-selector'),
    championSearch: document.getElementById('champion-search'),
    championGrid: document.getElementById('champion-grid'),
    matchupPlaceholder: document.getElementById('matchup-placeholder'),
    matchupResult: document.getElementById('matchup-result'),
    runeSearch: document.getElementById('rune-search'),
    runeDisplayArea: document.getElementById('rune-display-area'),
    metaLaneFilters: document.getElementById('meta-lane-filters'),
    metaList: document.getElementById('meta-list'),
    patchNotesList: document.getElementById('patch-notes')
};

// --- Initialization ---
function init() {
    setupNavigation();
    setupMatchupTool();
    setupRuneForge();
    setupMetaHub();
    
    renderChampionGrid();
    renderMetaList();
    renderPatchNotes();
    renderRunes(); // Render initially so Rune Forge is populated
}

// --- Navigation Logic ---
function setupNavigation() {
    elements.navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.dataset.target;
            
            elements.navButtons.forEach(b => b.classList.remove('active', 'border-lol-gold/30', 'bg-slate-800/50'));
            btn.classList.add('active', 'border-lol-gold/30', 'bg-slate-800/50');
            
            elements.sections.forEach(section => {
                if(section.id === targetId) {
                    section.classList.remove('hidden');
                    section.classList.add('block', 'animate-fade-in');
                } else {
                    section.classList.add('hidden');
                    section.classList.remove('block', 'animate-fade-in');
                }
            });
            
            state.currentTab = targetId;
        });
    });
}

// --- Feature 1: Matchup Tool ---

function setupMatchupTool() {
    const laneMap = [
        { id: 'top', label: 'Top', img: 'images/roles/all_lane.png' },
        { id: 'jungle', label: 'Jungle', img: 'images/roles/jungle_lane.png' },
        { id: 'mid', label: 'Mid', img: 'images/roles/mid_lane.png' },
        { id: 'bottom', label: 'Bot', img: 'images/roles/bottom_lane.png' },
        { id: 'support', label: 'Support', img: 'images/roles/support_lane.png' }
    ];

    elements.laneSelector.innerHTML = laneMap.map(lane => `
        <button class="lane-btn flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 bg-slate-900/50 hover:border-lol-gold transition-all ${state.matchup.selectedLane === lane.id ? 'border-lol-gold bg-slate-800' : ''}" data-lane="${lane.id}">
            <img src="${lane.img}" class="w-5 h-5 opacity-80" onerror="this.src='images/roles/special_lane.png'"> 
            <span class="font-rajdhani font-bold text-sm uppercase">${lane.label}</span>
        </button>
    `).join('');

    elements.laneSelector.addEventListener('click', (e) => {
        const btn = e.target.closest('.lane-btn');
        if (!btn) return;
        
        document.querySelectorAll('.lane-btn').forEach(b => b.classList.remove('border-lol-gold', 'bg-slate-800'));
        btn.classList.add('border-lol-gold', 'bg-slate-800');
        
        state.matchup.selectedLane = btn.dataset.lane;
        renderChampionGrid();
    });

    elements.championSearch.addEventListener('input', (e) => {
        state.matchup.searchQuery = e.target.value.toLowerCase();
        renderChampionGrid();
    });
}

function renderChampionGrid() {
    const filteredChampions = champions.filter(champ => {
        const roleMatch = champ.roles.includes(state.matchup.selectedLane);
        const nameMatch = champ.name.toLowerCase().includes(state.matchup.searchQuery);
        return roleMatch && nameMatch;
    });

    if (filteredChampions.length === 0) {
        elements.championGrid.innerHTML = `<div class="col-span-full text-center text-slate-500 py-8 font-rajdhani">No champions found.</div>`;
        return;
    }

    elements.championGrid.innerHTML = filteredChampions.map(champ => `
        <div class="champion-card group relative cursor-pointer transition-transform hover:scale-105" onclick="window.selectChampion('${champ.id}')">
            <div class="aspect-square rounded-lg overflow-hidden border border-slate-700 group-hover:border-lol-gold transition-colors">
                <img src="${champ.img}" alt="${champ.name}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" onerror="this.src='images/lol_logo.png'">
            </div>
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-1">
                <span class="text-xs font-bold text-center block text-slate-200 group-hover:text-lol-gold truncate">${champ.name}</span>
            </div>
        </div>
    `).join('');
}

// EXPOSE to Window so HTML onclick works
window.selectChampion = (champId) => {
    const champion = champions.find(c => c.id === champId);
    state.matchup.selectedChampion = champion;
    renderMatchupResult(champion);
};

function renderMatchupResult(champion) {
    elements.matchupPlaceholder.classList.add('hidden');
    elements.matchupResult.classList.remove('hidden');
    elements.matchupResult.classList.add('animate-slide-in');

    let data = matchupData[champion.name];
    
    // If specific matchup data missing, simulate it for demo purposes
    if (!data) {
        data = {
            lane: state.matchup.selectedLane,
            counters: [
                { championId: 'Generic Counter', tier: 'A', winRate: '51.0%', reason: 'Simulation: High burst and crowd control effective.', tips: ['Build defensive items early.', 'Avoid fighting in minion waves.'] },
                { championId: 'Skill Matchup', tier: 'B', winRate: '50.0%', reason: 'Simulation: Dependent on dodging key skillshots.', tips: ['Punish missed abilities.', 'Control vision around objectives.'] }
            ],
            generalTips: `Current Patch 25.23 strategies against ${champion.name} suggest playing safe until level 6 and waiting for jungle assistance.`
        };
    }

    const countersHtml = data.counters.map(counter => {
        const counterChamp = champions.find(c => c.name === counter.championId) || { img: 'images/lol_logo.png', name: counter.championId };
        
        let tierColor = 'text-slate-400';
        if(counter.tier.includes('S')) tierColor = 'text-yellow-400';
        if(counter.tier === 'A') tierColor = 'text-emerald-400';
        
        return `
        <div class="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-slate-600 transition-all group">
            <div class="flex items-start gap-4">
                <div class="relative">
                    <img src="${counterChamp.img}" class="w-16 h-16 rounded-lg object-cover border border-slate-600" onerror="this.src='images/lol_logo.png'">
                    <div class="absolute -top-2 -right-2 bg-slate-900 border border-slate-700 rounded-full w-8 h-8 flex items-center justify-center font-bold ${tierColor}">
                        ${counter.tier}
                    </div>
                </div>
                <div class="flex-1">
                    <div class="flex justify-between items-center mb-1">
                        <h4 class="font-bold text-lg text-white">${counter.championId}</h4>
                        <span class="text-sm font-mono text-slate-400">WR: <span class="text-white">${counter.winRate}</span></span>
                    </div>
                    <p class="text-sm text-slate-300 mb-2 leading-snug">${counter.reason}</p>
                    <ul class="text-xs text-slate-500 space-y-1 list-disc list-inside">
                        ${counter.tips.map(tip => `<li>${tip}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
        `;
    }).join('');

    elements.matchupResult.innerHTML = `
        <div class="flex flex-col h-full">
            <div class="bg-gradient-to-r from-slate-900 to-slate-800/0 p-6 rounded-2xl border-l-4 border-lol-gold mb-6 flex items-center gap-6">
                <img src="${champion.img}" class="w-24 h-24 rounded-full border-4 border-slate-800 shadow-2xl glow-gold">
                <div>
                    <h2 class="text-3xl font-rajdhani font-bold text-white uppercase">Vs. ${champion.name}</h2>
                    <p class="text-slate-400 text-sm mt-1">Lane: <span class="text-lol-gold uppercase font-bold">${state.matchup.selectedLane}</span></p>
                </div>
            </div>
            <div class="bg-slate-900/60 p-5 rounded-xl border border-slate-700/50 mb-6">
                <h3 class="text-lol-blue font-bold uppercase text-sm mb-2 tracking-wider">Strategic Intel (v25.23)</h3>
                <p class="text-slate-300 leading-relaxed">${data.generalTips}</p>
            </div>
            <div class="flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-4">
                <h3 class="text-slate-400 font-bold uppercase text-xs tracking-wider mb-2">Recommended Counters</h3>
                ${countersHtml}
            </div>
            <div class="mt-4 pt-4 border-t border-slate-800 text-center">
                <button onclick="window.navigateToRunes('${champion.name}')" class="text-lol-blue hover:text-white text-sm font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 group">
                    View Rune Builds
                    <span class="transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
            </div>
        </div>
    `;
}

window.navigateToRunes = (championName) => {
    document.querySelector('[data-target="runes-section"]').click();
    elements.runeSearch.value = championName;
    state.runes.searchQuery = championName.toLowerCase();
    renderRunes();
};

// --- Feature 2: Rune Forge ---

function setupRuneForge() {
    elements.runeSearch.addEventListener('input', (e) => {
        state.runes.searchQuery = e.target.value.toLowerCase();
        renderRunes();
    });
}

function renderRunes() {
    const query = state.runes.searchQuery;
    const championNames = Object.keys(runeBuilds);
    // Logic Update: If query is empty, show ALL builds (limit to 10 for perf) or filtered list
    const filtered = query 
        ? championNames.filter(name => name.toLowerCase().includes(query))
        : championNames; // Show all if empty

    if (filtered.length === 0) {
         elements.runeDisplayArea.innerHTML = `<div class="col-span-full text-center text-slate-500 py-12 font-rajdhani text-xl">No rune data found.</div>`;
         return;
    }

    elements.runeDisplayArea.innerHTML = filtered.map(name => {
        const build = runeBuilds[name];
        const champImg = champions.find(c => c.name === name)?.img || 'images/lol_logo.png';

        return `
        <div class="bg-slate-950 rounded-2xl p-0 overflow-hidden border border-slate-800 hover:border-lol-blue/50 transition-all group h-fit">
            <div class="bg-slate-900 p-4 flex items-center gap-4 border-b border-slate-800">
                <img src="${champImg}" class="w-12 h-12 rounded-full border-2 border-slate-700">
                <div>
                    <h3 class="text-xl font-bold text-white font-rajdhani">${name}</h3>
                    <span class="text-xs text-lol-blue bg-lol-blue/10 px-2 py-0.5 rounded uppercase tracking-wider">Highest Winrate</span>
                </div>
            </div>
            <div class="p-5 flex gap-6 justify-center relative">
                <div class="flex flex-col items-center gap-3">
                    <h4 class="text-[10px] uppercase text-slate-500 font-bold mb-1 tracking-widest">${build.primaryTree}</h4>
                    <div class="w-12 h-12 rounded-full bg-slate-800 border border-lol-gold/50 flex items-center justify-center shadow-[0_0_10px_rgba(200,170,110,0.2)] mb-2 relative group/rune">
                         <img src="${build.keystone.img}" class="w-10 h-10">
                    </div>
                    <div class="space-y-2 flex flex-col items-center">
                        ${build.primaryRunes.map(rune => `
                            <div class="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center relative group/smallrune">
                                <img src="${rune.img}" class="w-6 h-6">
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="w-px bg-slate-800 h-auto"></div>
                <div class="flex flex-col items-center gap-3 pt-8">
                    <h4 class="text-[10px] uppercase text-slate-500 font-bold mb-1 tracking-widest">${build.secondaryTree}</h4>
                    <div class="space-y-2 flex flex-col items-center">
                        ${build.secondaryRunes.map(rune => `
                            <div class="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center relative group/smallrune">
                                <img src="${rune.img}" class="w-6 h-6">
                            </div>
                        `).join('')}
                    </div>
                    <div class="flex gap-1 mt-4 opacity-50">
                        <div class="w-2 h-2 rounded-full bg-slate-500"></div>
                        <div class="w-2 h-2 rounded-full bg-slate-500"></div>
                        <div class="w-2 h-2 rounded-full bg-slate-500"></div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }).join('');
}

// --- Feature 3: Meta & Patch ---

function setupMetaHub() {
    const lanes = ['top', 'jungle', 'mid', 'bottom', 'support'];
    elements.metaLaneFilters.innerHTML = lanes.map(lane => `
        <button class="px-3 py-1 rounded hover:bg-slate-800 text-xs uppercase font-bold text-slate-400 hover:text-white transition-colors ${state.meta.selectedLane === lane ? 'bg-slate-800 text-white' : ''}" onclick="window.filterMeta('${lane}')">
            ${lane}
        </button>
    `).join('');
}

// EXPOSE to Window
window.filterMeta = (lane) => {
    state.meta.selectedLane = lane;
    
    const buttons = elements.metaLaneFilters.querySelectorAll('button');
    buttons.forEach(btn => {
        if(btn.innerText.toLowerCase() === lane) {
            btn.classList.add('bg-slate-800', 'text-white');
            btn.classList.remove('text-slate-400');
        } else {
            btn.classList.remove('bg-slate-800', 'text-white');
            btn.classList.add('text-slate-400');
        }
    });

    renderMetaList();
};

function renderMetaList() {
    const laneStats = metaStats[state.meta.selectedLane];
    
    if(!laneStats) {
        elements.metaList.innerHTML = `<div class="p-4 text-center text-slate-500 text-sm">Data coming soon for ${state.meta.selectedLane}...</div>`;
        return;
    }

    elements.metaList.innerHTML = laneStats.map((champ, index) => {
        const champData = champions.find(c => c.name === champ.name) || { img: 'images/lol_logo.png' };
        
        return `
        <div class="flex items-center gap-4 p-4 border-b border-slate-800 hover:bg-slate-800/30 transition-colors last:border-0">
            <div class="text-2xl font-bold text-slate-600 w-6">#${index + 1}</div>
            <img src="${champData.img}" class="w-12 h-12 rounded-lg border border-slate-600" onerror="this.src='images/lol_logo.png'">
            <div class="flex-1 min-w-0">
                <h4 class="font-bold text-white truncate">${champ.name}</h4>
                <p class="text-xs text-slate-400 truncate">${champ.desc}</p>
            </div>
            <div class="text-right">
                <div class="text-emerald-400 font-bold font-mono">${champ.winRate}</div>
                <div class="text-[10px] text-slate-500 uppercase tracking-wide">Win Rate</div>
            </div>
        </div>
        `;
    }).join('');
}

function renderPatchNotes() {
    elements.patchNotesList.innerHTML = patchNotes.map(note => {
        let typeClass = 'text-slate-400';
        let typeLabel = 'Change';
        let borderClass = 'border-slate-700';
        
        if (note.type === 'buff') { typeClass = 'text-emerald-400'; typeLabel = 'Buff'; borderClass = 'border-emerald-500/30'; }
        if (note.type === 'nerf') { typeClass = 'text-red-400'; typeLabel = 'Nerf'; borderClass = 'border-red-500/30'; }

        return `
        <div class="bg-slate-950 p-4 rounded-xl border ${borderClass} flex gap-4">
            <div class="flex-shrink-0">
                <img src="${note.img}" class="w-10 h-10 rounded border border-slate-700" onerror="this.src='images/lol_logo.png'">
            </div>
            <div>
                <div class="flex items-center gap-2 mb-1">
                    <h4 class="font-bold text-white">${note.champion}</h4>
                    <span class="text-[10px] uppercase border border-slate-700 px-1.5 rounded ${typeClass}">${typeLabel}</span>
                </div>
                <ul class="list-disc list-inside text-xs text-slate-300 space-y-1">
                    ${note.changes.map(c => `<li>${c}</li>`).join('')}
                </ul>
            </div>
        </div>
        `;
    }).join('');
}

// Start App
init();