/**
 * LEAGUECOMPS.GG - DATA STORE
 * Contains mock data for Champions, Matchups, Runes, and Patch Notes.
 * Sources modeled after: U.gg, Lolalytics, Porofessor.
 */

// --- Constants for Asset Paths ---
const PATHS = {
    champions: 'images/champions/',
    runes: 'images/runes/',
    roles: 'images/roles/',
    ui: 'images/'
};

// --- Champion Database ---
// A subset of champions to demonstrate functionality.
// In a real app, this would be fetched from an API like DataDragon.
export const champions = [
    { id: 'Aatrox', name: 'Aatrox', roles: ['top'], img: `${PATHS.champions}Aatrox.png` },
    { id: 'Ahri', name: 'Ahri', roles: ['mid'], img: `${PATHS.champions}Ahri.png` },
    { id: 'Akali', name: 'Akali', roles: ['mid', 'top'], img: `${PATHS.champions}Akali.png` },
    { id: 'Ashe', name: 'Ashe', roles: ['bottom', 'support'], img: `${PATHS.champions}Ashe.png` },
    { id: 'Blitzcrank', name: 'Blitzcrank', roles: ['support'], img: `${PATHS.champions}Blitzcrank.png` },
    { id: 'Caitlyn', name: 'Caitlyn', roles: ['bottom'], img: `${PATHS.champions}Caitlyn.png` },
    { id: 'Darius', name: 'Darius', roles: ['top'], img: `${PATHS.champions}Darius.png` },
    { id: 'Ezreal', name: 'Ezreal', roles: ['bottom'], img: `${PATHS.champions}Ezreal.png` },
    { id: 'Fiora', name: 'Fiora', roles: ['top'], img: `${PATHS.champions}Fiora.png` },
    { id: 'Hecarim', name: 'Hecarim', roles: ['jungle'], img: `${PATHS.champions}Hecarim.png` },
    { id: 'Jinx', name: 'Jinx', roles: ['bottom'], img: `${PATHS.champions}Jinx.png` },
    { id: 'KaiSa', name: "Kai'Sa", roles: ['bottom'], img: `${PATHS.champions}Kai'Sa.png` }, // Handle filename special char
    { id: 'LeeSin', name: 'Lee Sin', roles: ['jungle'], img: `${PATHS.champions}Lee Sin.png` },
    { id: 'Lux', name: 'Lux', roles: ['support', 'mid'], img: `${PATHS.champions}Lux.png` },
    { id: 'Malphite', name: 'Malphite', roles: ['top', 'mid'], img: `${PATHS.champions}Malphite.png` },
    { id: 'MissFortune', name: 'Miss Fortune', roles: ['bottom'], img: `${PATHS.champions}Miss Fortune.png` },
    { id: 'Orianna', name: 'Orianna', roles: ['mid'], img: `${PATHS.champions}Orianna.png` },
    { id: 'Thresh', name: 'Thresh', roles: ['support'], img: `${PATHS.champions}Thresh.png` },
    { id: 'Yasuo', name: 'Yasuo', roles: ['mid', 'top'], img: `${PATHS.champions}Yasuo.png` },
    { id: 'Zed', name: 'Zed', roles: ['mid'], img: `${PATHS.champions}Zed.png` },
];

// --- Feature 1: Lane Matchups ---
// Structured data for counters and gameplay tips.
export const matchupData = {
    'Ahri': {
        lane: 'mid',
        counters: [
            { 
                championId: 'Zed', 
                tier: 'S', 
                winRate: '52.4%', 
                reason: 'Zed can easily dodge Ahri\'s charm with his shadows and burst her down before she can kite.',
                tips: ['Rush Zhonya\'s Hourglass.', 'Save Charm for when he ults (he appears behind you).']
            },
            { 
                championId: 'Yasuo', 
                tier: 'A', 
                winRate: '51.1%', 
                reason: 'Windwall blocks all of Ahri\'s high impact abilities (Charm, Q return).',
                tips: ['Auto attack to break his shield before trading.', 'Don\'t throw Charm into his Windwall.']
            },
            { 
                championId: 'Fizz', 
                tier: 'A', 
                winRate: '50.8%', 
                reason: 'Playful/Trickster allows Fizz to completely negate Ahri\'s combo.',
                tips: ['Abuse your range advantage early.', 'Hold charm until he uses E.']
            }
        ],
        generalTips: "Play around her Charm (E) cooldown. If she misses it, she is very vulnerable. Stand behind minions to block Charm, but watch out for Q poke through the wave."
    },
    'Darius': {
        lane: 'top',
        counters: [
            { 
                championId: 'Vayne', 
                tier: 'S+', 
                winRate: '54.2%', 
                reason: 'Vayne can kite Darius indefinitely with Tumble and Condemn, never letting him get close enough to pull.',
                tips: ['Save Condemn for his E pull.', 'Rush Boots of Swiftness.']
            },
            { 
                championId: 'Fiora', 
                tier: 'S', 
                winRate: '53.5%', 
                reason: 'Fiora can Parry Darius\'s ult or pull, and out-duels him with Vitals.',
                tips: ['Parry his Hook or Ult.', 'Dash inside his Q handle to avoid the heal/bleed stack.']
            },
             { 
                championId: 'Malphite', 
                tier: 'B', 
                winRate: '49.5%', 
                reason: 'Can survive lane with Q poke and armor stacking, but struggles in extended trades.',
                tips: ['Poke with Q.', 'Do not take long trades.']
            }
        ],
        generalTips: "Darius excels in extended trades. Do not let him stack 5 stacks of Hemorrhage on you. Short trades are key. If he misses Q (the outer ring), punish him immediately."
    }
    // ... more matchups would go here
};

// --- Feature 2: Rune Setups ---
// Linking rune IDs to their image paths.
export const runeBuilds = {
    'Ahri': {
        keystone: { name: 'Electrocute', img: `${PATHS.runes}Electrocute.png` },
        primaryTree: 'Domination',
        primaryRunes: [
            { name: 'Sudden Impact', img: `${PATHS.runes}Sudden_Impact.png` },
            { name: 'Eyeball Collection', img: `${PATHS.runes}Eyeball_Collection.png` },
            { name: 'Ultimate Hunter', img: `${PATHS.runes}Ultimate_Hunter.png` }
        ],
        secondaryTree: 'Sorcery',
        secondaryRunes: [
            { name: 'Manaflow Band', img: `${PATHS.runes}Manaflow_Band.png` },
            { name: 'Transcendence', img: `${PATHS.runes}Transcendence.png` }
        ],
        shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    'Darius': {
        keystone: { name: 'Conqueror', img: `${PATHS.runes}Conqueror.png` },
        primaryTree: 'Precision',
        primaryRunes: [
            { name: 'Triumph', img: `${PATHS.runes}Triumph.png` },
            { name: 'Legend: Alacrity', img: `${PATHS.runes}Legend-_Alacrity.png` },
            { name: 'Last Stand', img: `${PATHS.runes}Last_Stand.png` }
        ],
        secondaryTree: 'Resolve',
        secondaryRunes: [
            { name: 'Bone Plating', img: `${PATHS.runes}Bone_Plating.png` },
            { name: 'Unflinching', img: `${PATHS.runes}Unflinching.png` }
        ],
        shards: ['Attack Speed', 'Adaptive Force', 'Armor']
    },
    'Ashe': {
        keystone: { name: 'Lethal Tempo', img: `${PATHS.runes}Lethal_Tempo.png` },
        primaryTree: 'Precision',
        primaryRunes: [
            { name: 'Presence of Mind', img: `${PATHS.runes}Presence_of_Mind.png` },
            { name: 'Legend: Bloodline', img: `${PATHS.runes}Legend-_Bloodline.png` },
            { name: 'Coup de Grace', img: `${PATHS.runes}Coup_de_Grace.png` }
        ],
        secondaryTree: 'Inspiration',
        secondaryRunes: [
            { name: 'Biscuit Delivery', img: `${PATHS.runes}Biscuit_Delivery.png` },
            { name: 'Approach Velocity', img: `${PATHS.runes}Approach_Velocity.png` }
        ],
        shards: ['Attack Speed', 'Adaptive Force', 'Health']
    }
};

// --- Feature 3: Meta Stats (Top 5) ---
export const metaStats = {
    'top': [
        { name: 'Darius', winRate: '51.5%', pickRate: '12.4%', banRate: '28.2%', desc: 'Dominates melee matchups with high sustain and bleed damage.' },
        { name: 'Fiora', winRate: '50.9%', pickRate: '8.7%', banRate: '18.5%', desc: 'Unmatched split-pushing power and dueling capability.' },
        { name: 'Aatrox', winRate: '49.8%', pickRate: '14.2%', banRate: '12.1%', desc: 'Strong blind pick with massive teamfight sustain.' },
        { name: 'Malphite', winRate: '52.1%', pickRate: '7.5%', banRate: '15.3%', desc: 'Hard counter to AD heavy teams, massive engage ult.' },
        { name: 'Camille', winRate: '51.2%', pickRate: '6.8%', banRate: '9.4%', desc: 'High mobility and true damage, excellent at locking down carries.' }
    ],
    'mid': [
        { name: 'Ahri', winRate: '50.5%', pickRate: '15.2%', banRate: '8.4%', desc: 'Versatile mage with safety, mobility, and catch potential.' },
        { name: 'Zed', winRate: '48.9%', pickRate: '11.5%', banRate: '30.1%', desc: 'High skill ceiling assassin, terrorizes squishy backlines.' },
        { name: 'Yasuo', winRate: '49.2%', pickRate: '18.2%', banRate: '15.4%', desc: 'Scaling skirmisher with windwall utility.' },
        { name: 'Orianna', winRate: '50.1%', pickRate: '9.2%', banRate: '2.1%', desc: 'The standard control mage, game-changing ultimate.' },
        { name: 'Sylas', winRate: '50.8%', pickRate: '10.1%', banRate: '14.2%', desc: 'Hijacks ultimates, incredibly strong skirmisher.' }
    ]
    // Add other lanes similarly...
};

// --- Feature 3: Latest Patch Changes ---
export const patchNotes = [
    {
        type: 'nerf',
        champion: 'Ahri',
        img: `${PATHS.champions}Ahri.png`,
        changes: [
            'W (Fox-Fire): Damage reduced from 50-150 to 45-145.',
            'R (Spirit Rush): Cooldown increased by 10s at rank 1.'
        ]
    },
    {
        type: 'buff',
        champion: 'Thresh',
        img: `${PATHS.champions}Thresh.png`,
        changes: [
            'Q (Death Sentence): Cooldown refunded on hit increased from 2s to 3s.',
            'E (Flay): Passive damage ratio increased to 200% AD souls.'
        ]
    },
    {
        type: 'change',
        champion: 'Ezreal',
        img: `${PATHS.champions}Ezreal.png`,
        changes: [
            'Base AD increased by 2.',
            'Passive attack speed scaling adjusted for smoother mid-game.'
        ]
    }
];