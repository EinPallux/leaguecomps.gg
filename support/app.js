// DOM Elements
const adcGrid = document.getElementById('adcGrid');
const adcSearch = document.getElementById('adcSearch');
const resultsSection = document.getElementById('resultsSection');
const selectedAdcSpan = document.getElementById('selectedAdc');
const tierContainer = document.getElementById('tierContainer');
const sourcesBtn = document.getElementById('sourcesBtn');
const sourcesModal = document.getElementById('sourcesModal');
const modalClose = document.getElementById('modalClose');
const changelogBtn = document.getElementById('changelogBtn');
const changelogModal = document.getElementById('changelogModal');
const changelogModalClose = document.getElementById('changelogModalClose');

// State
let currentSelectedAdc = null;

// Initialize the application
function init() {
    renderAdcGrid();
    setupEventListeners();
}

// Render ADC Champion Grid
function renderAdcGrid() {
    adcGrid.innerHTML = '';
    
    championData.adcs.forEach(adc => {
        const card = document.createElement('div');
        card.className = 'champion-card';
        card.dataset.name = adc.name.toLowerCase();
        card.title = adc.name; // Add title for hover
        
        card.innerHTML = `
            <div class="champion-icon"><img src="${adc.icon}" alt="${adc.name}"></div>
            <div class="champion-name">${adc.name}</div>
        `;
        
        // Add keyboard accessibility
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        
        card.addEventListener('click', (e) => {
            createRipple(e, card);
            selectAdc(adc.name);
        });

        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectAdc(adc.name);
            }
        });

        adcGrid.appendChild(card);
    });
}

// Setup Event Listeners
function setupEventListeners() {
    // Search functionality with simple debounce
    let timeout = null;
    adcSearch.addEventListener('input', (e) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            const searchTerm = e.target.value.toLowerCase();
            filterAdcGrid(searchTerm);
        }, 50);
    });

    // Focus effects for search
    adcSearch.addEventListener('focus', () => {
        adcSearch.parentElement.style.transform = 'scale(1.01)';
        adcSearch.parentElement.style.transition = 'transform 0.2s ease';
    });
    
    adcSearch.addEventListener('blur', () => {
        adcSearch.parentElement.style.transform = 'scale(1)';
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

// Filter ADC Grid based on search
function filterAdcGrid(searchTerm) {
    const cards = adcGrid.querySelectorAll('.champion-card');
    
    cards.forEach(card => {
        const name = card.dataset.name;
        if (name.includes(searchTerm)) {
            card.classList.remove('hidden');
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
            <p style="color: var(--text-secondary); margin-top: 1rem; font-size: 0.9rem;">Analyzing synergies...</p>
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

// Select an ADC
function selectAdc(adcName) {
    if (currentSelectedAdc === adcName) return;
    
    currentSelectedAdc = adcName;
    selectedAdcSpan.textContent = adcName;
    
    // Update support type recommendation
    const supportTypeText = document.getElementById('supportTypeText');
    const recommendation = championData.supportTypeRecommendations[adcName];
    
    // Show results section
    resultsSection.style.display = 'block';
    
    // Show loading animation
    showLoading();
    
    // Scroll to results smoothly
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Simulate short delay for UX
    setTimeout(() => {
        if (recommendation) {
            supportTypeText.innerHTML = recommendation;
        } else {
            supportTypeText.innerHTML = "Various support types can work well with this champion. Check the tier list below for specific recommendations.";
        }
        renderSupportRecommendations(adcName);
    }, 400);
}

// Render Support Recommendations by Tier
function renderSupportRecommendations(adcName) {
    tierContainer.innerHTML = '';
    
    const synergies = championData.synergies[adcName];
    
    if (!synergies) {
        tierContainer.innerHTML = `
            <div class="tier-section">
                <p style="text-align: center; color: var(--text-secondary); padding: 2rem;">
                    No synergy data available for ${adcName} yet. Check back soon!
                </p>
            </div>
        `;
        return;
    }
    
    // Tier configuration
    const tiers = [
        { key: 'tierS', name: 'S Tier', description: 'Best possible supports - Maximum synergy', class: 'tier-s' },
        { key: 'tierA', name: 'A Tier', description: 'Excellent supports - Strong synergy', class: 'tier-a' },
        { key: 'tierB', name: 'B Tier', description: 'Good supports - Decent synergy', class: 'tier-b' },
        { key: 'tierC', name: 'C Tier', description: 'Mediocre supports - Limited synergy', class: 'tier-c' },
        { key: 'tierD', name: 'D Tier', description: 'Avoid if possible - Poor synergy', class: 'tier-d' }
    ];
    
    // Render each tier
    tiers.forEach(tier => {
        const supports = synergies[tier.key];
        
        if (supports && supports.length > 0) {
            const tierSection = createTierSection(tier, supports);
            tierContainer.appendChild(tierSection);
        }
    });
    
    // Fade in effect
    tierContainer.style.opacity = '0';
    requestAnimationFrame(() => {
        tierContainer.style.transition = 'opacity 0.4s ease';
        tierContainer.style.opacity = '1';
    });
}

// Create a tier section with supports
function createTierSection(tier, supports) {
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
    
    // Supports grid
    const grid = document.createElement('div');
    grid.className = 'supports-grid';
    
    supports.forEach(support => {
        const card = createSupportCard(support);
        grid.appendChild(card);
    });
    
    section.appendChild(grid);
    return section;
}

// Create a support champion card
function createSupportCard(support) {
    const card = document.createElement('div');
    card.className = 'support-card';
    
    // Header
    const header = document.createElement('div');
    header.className = 'support-header';
    header.innerHTML = `
        <div class="support-icon"><img src="${support.icon}" alt="${support.name}"></div>
        <div class="support-info">
            <h3>${support.name}</h3>
            <div class="support-role">${support.role}</div>
        </div>
    `;
    card.appendChild(header);
    
    // Synergy reasons
    const reasonsList = document.createElement('ul');
    reasonsList.className = 'synergy-reasons';
    
    support.reasons.forEach(reason => {
        const li = document.createElement('li');
        li.innerHTML = reason; // Allow HTML content
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