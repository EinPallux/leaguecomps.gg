// DOM Elements
const midlanerGrid = document.getElementById('midlanerGrid');
const midlanerSearch = document.getElementById('midlanerSearch');
const resultsSection = document.getElementById('resultsSection');
const selectedMidlanerSpan = document.getElementById('selectedMidlaner');
const tierContainer = document.getElementById('tierContainer');
const sourcesBtn = document.getElementById('sourcesBtn');
const sourcesModal = document.getElementById('sourcesModal');
const modalClose = document.getElementById('modalClose');
const changelogBtn = document.getElementById('changelogBtn');
const changelogModal = document.getElementById('changelogModal');
const changelogModalClose = document.getElementById('changelogModalClose');

// State
let currentSelectedMidlaner = null;

// Initialize the application
function init() {
    renderMidlanerGrid();
    setupEventListeners();
}

// Render Enemy Midlaner Champion Grid
function renderMidlanerGrid() {
    midlanerGrid.innerHTML = '';
    
    midlaneData.midlaners.forEach(midlaner => {
        const card = document.createElement('div');
        card.className = 'champion-card';
        card.dataset.name = midlaner.name.toLowerCase();
        card.title = midlaner.name; // Add title for hover
        
        card.innerHTML = `
            <div class="champion-icon"><img src="${midlaner.icon}" alt="${midlaner.name}"></div>
            <div class="champion-name">${midlaner.name}</div>
        `;
        
        // Add keyboard accessibility
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        
        card.addEventListener('click', (e) => {
            createRipple(e, card);
            selectMidlaner(midlaner.name);
        });

        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectMidlaner(midlaner.name);
            }
        });

        midlanerGrid.appendChild(card);
    });
}

// Setup Event Listeners
function setupEventListeners() {
    // Search functionality with simple debounce
    let timeout = null;
    midlanerSearch.addEventListener('input', (e) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            const searchTerm = e.target.value.toLowerCase();
            filterMidlanerGrid(searchTerm);
        }, 50);
    });

    // Focus effects for search
    midlanerSearch.addEventListener('focus', () => {
        midlanerSearch.parentElement.style.transform = 'scale(1.01)';
        midlanerSearch.parentElement.style.transition = 'transform 0.2s ease';
    });
    
    midlanerSearch.addEventListener('blur', () => {
        midlanerSearch.parentElement.style.transform = 'scale(1)';
    });
    
    // Sources modal controls
    if(sourcesBtn) sourcesBtn.addEventListener('click', openSourcesModal);
    if(modalClose) modalClose.addEventListener('click', closeSourcesModal);
    
    // Changelog modal controls
    if(changelogBtn) changelogBtn.addEventListener('click', openChangelogModal);
    if(changelogModalClose) changelogModalClose.addEventListener('click', closeChangelogModal);
    
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === sourcesModal) closeSourcesModal();
        if (e.target === changelogModal) closeChangelogModal();
    });
    
    // Close modals with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (sourcesModal && sourcesModal.classList.contains('active')) closeSourcesModal();
            if (changelogModal && changelogModal.classList.contains('active')) closeChangelogModal();
        }
    });
}

// Filter Midlaner Grid based on search
function filterMidlanerGrid(searchTerm) {
    const cards = midlanerGrid.querySelectorAll('.champion-card');
    let hasVisible = false;
    
    cards.forEach(card => {
        const name = card.dataset.name;
        if (name.includes(searchTerm)) {
            card.classList.remove('hidden');
            hasVisible = true;
        } else {
            card.classList.add('hidden');
        }
    });
}

// Create Ripple Effect
function createRipple(event, element) {
    const circle = document.createElement("span");
    const diameter = Math.max(element.clientWidth, element.clientHeight);
    const radius = diameter / 2;

    const rect = element.getBoundingClientRect();
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    circle.style.position = 'absolute';
    circle.style.borderRadius = '50%';
    circle.style.transform = 'scale(0)';
    circle.style.animation = 'ripple 0.6s linear';
    circle.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    circle.style.pointerEvents = 'none';

    // Add CSS for ripple if not exists
    if (!document.getElementById('ripple-style')) {
        const style = document.createElement('style');
        style.id = 'ripple-style';
        style.textContent = `
            @keyframes ripple {
                to { transform: scale(4); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }

    const existingRipple = element.querySelector('.ripple');
    if (existingRipple) existingRipple.remove();

    circle.classList.add('ripple');
    element.appendChild(circle);
}

// Show Loading State
function showLoading() {
    tierContainer.innerHTML = `
        <div style="text-align: center; padding: 4rem;">
            <div style="display: inline-block; width: 40px; height: 40px; border: 3px solid rgba(255,255,255,0.1); border-radius: 50%; border-top-color: var(--accent-primary); animation: spin 1s ease-in-out infinite;"></div>
            <p style="color: var(--text-secondary); margin-top: 1rem; font-size: 0.9rem;">Analyzing matchups...</p>
        </div>
    `;
    
    // Add spin animation if needed
    if (!document.getElementById('spin-style')) {
        const style = document.createElement('style');
        style.id = 'spin-style';
        style.textContent = `@keyframes spin { to { transform: rotate(360deg); } }`;
        document.head.appendChild(style);
    }
}

// Select an Enemy Midlaner
function selectMidlaner(midlanerName) {
    if (currentSelectedMidlaner === midlanerName) return; // Prevent reload if same
    
    currentSelectedMidlaner = midlanerName;
    selectedMidlanerSpan.textContent = midlanerName;
    
    // Update counter strategy recommendation
    const strategyText = document.getElementById('strategyText');
    const recommendation = midlaneData.counterStrategies[midlanerName];
    
    // Show results section
    resultsSection.style.display = 'block';
    
    // Show loading animation
    showLoading();
    
    // Scroll to results smoothly
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Simulate short delay for UX
    setTimeout(() => {
        if (recommendation) {
            strategyText.innerHTML = recommendation;
        } else {
            strategyText.innerHTML = "No specific strategy data available for this champion. Focus on punishing their key cooldowns.";
        }
        renderCounterRecommendations(midlanerName);
    }, 400);
}

// Render Counter Recommendations by Tier
function renderCounterRecommendations(midlanerName) {
    tierContainer.innerHTML = '';
    
    const counters = midlaneData.counters[midlanerName];
    
    if (!counters || Object.keys(counters).every(tier => counters[tier].length === 0)) {
        tierContainer.innerHTML = `
            <div class="tier-section">
                <p style="text-align: center; color: var(--text-secondary); padding: 2rem;">
                    No counter data available for ${midlanerName} yet. Check back soon!
                </p>
            </div>
        `;
        return;
    }
    
    // Tier configuration
    const tiers = [
        { key: 'tierS', name: 'S Tier', description: 'Best possible counters - Hard counters', class: 'tier-s' },
        { key: 'tierA', name: 'A Tier', description: 'Excellent counters - Strong matchup', class: 'tier-a' },
        { key: 'tierB', name: 'B Tier', description: 'Good counters - Favorable skill matchup', class: 'tier-b' },
        { key: 'tierC', name: 'C Tier', description: 'Mediocre - Even skill matchup', class: 'tier-c' },
        { key: 'tierD', name: 'D Tier', description: 'Avoid if possible - Bad matchup', class: 'tier-d' }
    ];
    
    // Render each tier
    tiers.forEach(tier => {
        const counterChamps = counters[tier.key];
        
        if (counterChamps && counterChamps.length > 0) {
            const tierSection = createTierSection(tier, counterChamps);
            tierContainer.appendChild(tierSection);
        }
    });
    
    // Fade in effect for results
    tierContainer.style.opacity = '0';
    requestAnimationFrame(() => {
        tierContainer.style.transition = 'opacity 0.4s ease';
        tierContainer.style.opacity = '1';
    });
}

// Create a tier section with counters
function createTierSection(tier, counterChamps) {
    const section = document.createElement('div');
    section.className = `tier-section ${tier.class}`;
    
    // Tier header
    const header = document.createElement('div');
    header.className = 'tier-header';
    header.innerHTML = `
        <div class="tier-badge">${tier.name}</div>
        <div class="tier-description">${tier.description}</div>
    `;
    section.appendChild(header);
    
    // Counters grid
    const grid = document.createElement('div');
    grid.className = 'supports-grid'; 
    
    counterChamps.forEach(counter => {
        const card = createCounterCard(counter);
        grid.appendChild(card);
    });
    
    section.appendChild(grid);
    return section;
}

// Create a counter champion card
function createCounterCard(counter) {
    const card = document.createElement('div');
    card.className = 'support-card'; // Re-using class for style consistency
    
    // Header
    const header = document.createElement('div');
    header.className = 'support-header';
    header.innerHTML = `
        <div class="support-icon"><img src="${counter.icon}" alt="${counter.name}"></div>
        <div class="support-info">
            <h3>${counter.name}</h3>
            <div class="support-role">${counter.role}</div>
        </div>
    `;
    card.appendChild(header);
    
    // Reasons list
    const reasonsList = document.createElement('ul');
    reasonsList.className = 'synergy-reasons';
    
    counter.reasons.forEach(reason => {
        const li = document.createElement('li');
        li.innerHTML = reason; // Allow HTML for bold text
        reasonsList.appendChild(li);
    });
    
    card.appendChild(reasonsList);
    return card;
}

// Modal functions
function openSourcesModal() {
    if(sourcesModal) {
        sourcesModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeSourcesModal() {
    if(sourcesModal) {
        sourcesModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function openChangelogModal() {
    if(changelogModal) {
        changelogModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeChangelogModal() {
    if(changelogModal) {
        changelogModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}