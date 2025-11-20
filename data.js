/**
 * LEAGUECOMPS.GG - DATA STORE
 * Updated for Patch 25.23
 */

// --- Constants for Asset Paths ---
const PATHS = {
    champions: 'images/champions/',
    runes: 'images/runes/',
    roles: 'images/roles/',
    ui: 'images/'
};

// --- Champion Database (Expanded) ---
export const champions = [
    { id: 'Aatrox', name: 'Aatrox', roles: ['top'], img: `${PATHS.champions}Aatrox.png` },
    { id: 'Ahri', name: 'Ahri', roles: ['mid'], img: `${PATHS.champions}Ahri.png` },
    { id: 'Akali', name: 'Akali', roles: ['mid', 'top'], img: `${PATHS.champions}Akali.png` },
    { id: 'Akshan', name: 'Akshan', roles: ['mid', 'top'], img: `${PATHS.champions}Akshan.png` },
    { id: 'Alistar', name: 'Alistar', roles: ['support'], img: `${PATHS.champions}Alistar.png` },
    { id: 'Amumu', name: 'Amumu', roles: ['jungle', 'support'], img: `${PATHS.champions}Amumu.png` },
    { id: 'Anivia', name: 'Anivia', roles: ['mid'], img: `${PATHS.champions}Anivia.png` },
    { id: 'Annie', name: 'Annie', roles: ['mid', 'support'], img: `${PATHS.champions}Annie.png` },
    { id: 'Aphelios', name: 'Aphelios', roles: ['bottom'], img: `${PATHS.champions}Aphelios.png` },
    { id: 'Ashe', name: 'Ashe', roles: ['bottom', 'support'], img: `${PATHS.champions}Ashe.png` },
    { id: 'AurelionSol', name: 'Aurelion Sol', roles: ['mid'], img: `${PATHS.champions}Aurelion Sol.png` },
    { id: 'Aurora', name: 'Aurora', roles: ['mid', 'top'], img: `${PATHS.champions}Aurora.png` },
    { id: 'Azir', name: 'Azir', roles: ['mid'], img: `${PATHS.champions}Azir.png` },
    { id: 'Bard', name: 'Bard', roles: ['support'], img: `${PATHS.champions}Bard.png` },
    { id: 'BelVeth', name: "Bel'Veth", roles: ['jungle'], img: `${PATHS.champions}Bel'Veth.png` },
    { id: 'Blitzcrank', name: 'Blitzcrank', roles: ['support'], img: `${PATHS.champions}Blitzcrank.png` },
    { id: 'Brand', name: 'Brand', roles: ['support', 'jungle', 'mid'], img: `${PATHS.champions}Brand.png` },
    { id: 'Braum', name: 'Braum', roles: ['support'], img: `${PATHS.champions}Braum.png` },
    { id: 'Briar', name: 'Briar', roles: ['jungle', 'top'], img: `${PATHS.champions}Briar.png` },
    { id: 'Caitlyn', name: 'Caitlyn', roles: ['bottom'], img: `${PATHS.champions}Caitlyn.png` },
    { id: 'Camille', name: 'Camille', roles: ['top', 'support'], img: `${PATHS.champions}Camille.png` },
    { id: 'Cassiopeia', name: 'Cassiopeia', roles: ['mid', 'top'], img: `${PATHS.champions}Cassiopeia.png` },
    { id: 'ChoGath', name: "Cho'Gath", roles: ['top', 'mid'], img: `${PATHS.champions}Cho'Gath.png` },
    { id: 'Corki', name: 'Corki', roles: ['mid', 'bottom'], img: `${PATHS.champions}Corki.png` },
    { id: 'Darius', name: 'Darius', roles: ['top'], img: `${PATHS.champions}Darius.png` },
    { id: 'Diana', name: 'Diana', roles: ['jungle', 'mid'], img: `${PATHS.champions}Diana.png` },
    { id: 'DrMundo', name: 'Dr. Mundo', roles: ['top', 'jungle'], img: `${PATHS.champions}Dr. Mundo.png` },
    { id: 'Draven', name: 'Draven', roles: ['bottom'], img: `${PATHS.champions}Draven.png` },
    { id: 'Ekko', name: 'Ekko', roles: ['jungle', 'mid'], img: `${PATHS.champions}Ekko.png` },
    { id: 'Elise', name: 'Elise', roles: ['jungle'], img: `${PATHS.champions}Elise.png` },
    { id: 'Evelynn', name: 'Evelynn', roles: ['jungle'], img: `${PATHS.champions}Evelynn.png` },
    { id: 'Ezreal', name: 'Ezreal', roles: ['bottom'], img: `${PATHS.champions}Ezreal.png` },
    { id: 'Fiddlesticks', name: 'Fiddlesticks', roles: ['jungle', 'support'], img: `${PATHS.champions}Fiddlesticks.png` },
    { id: 'Fiora', name: 'Fiora', roles: ['top'], img: `${PATHS.champions}Fiora.png` },
    { id: 'Fizz', name: 'Fizz', roles: ['mid'], img: `${PATHS.champions}Fizz.png` },
    { id: 'Galio', name: 'Galio', roles: ['mid', 'support'], img: `${PATHS.champions}Galio.png` },
    { id: 'Gangplank', name: 'Gangplank', roles: ['top', 'mid'], img: `${PATHS.champions}Gangplank.png` },
    { id: 'Garen', name: 'Garen', roles: ['top'], img: `${PATHS.champions}Garen.png` },
    { id: 'Gnar', name: 'Gnar', roles: ['top'], img: `${PATHS.champions}Gnar.png` },
    { id: 'Gragas', name: 'Gragas', roles: ['jungle', 'top', 'mid'], img: `${PATHS.champions}Gragas.png` },
    { id: 'Graves', name: 'Graves', roles: ['jungle'], img: `${PATHS.champions}Graves.png` },
    { id: 'Gwen', name: 'Gwen', roles: ['top', 'jungle'], img: `${PATHS.champions}Gwen.png` },
    { id: 'Hecarim', name: 'Hecarim', roles: ['jungle'], img: `${PATHS.champions}Hecarim.png` },
    { id: 'Heimerdinger', name: 'Heimerdinger', roles: ['mid', 'top', 'support'], img: `${PATHS.champions}Heimerdinger.png` },
    { id: 'Hwei', name: 'Hwei', roles: ['mid', 'support'], img: `${PATHS.champions}Hwei.png` },
    { id: 'Illaoi', name: 'Illaoi', roles: ['top'], img: `${PATHS.champions}Illaoi.png` },
    { id: 'Irelia', name: 'Irelia', roles: ['top', 'mid'], img: `${PATHS.champions}Irelia.png` },
    { id: 'Ivern', name: 'Ivern', roles: ['jungle'], img: `${PATHS.champions}Ivern.png` },
    { id: 'Janna', name: 'Janna', roles: ['support'], img: `${PATHS.champions}Janna.png` },
    { id: 'JarvanIV', name: 'Jarvan IV', roles: ['jungle'], img: `${PATHS.champions}Jarvan VI.png` },
    { id: 'Jax', name: 'Jax', roles: ['top', 'jungle'], img: `${PATHS.champions}Jax.png` },
    { id: 'Jayce', name: 'Jayce', roles: ['top', 'mid'], img: `${PATHS.champions}Jayce.png` },
    { id: 'Jhin', name: 'Jhin', roles: ['bottom'], img: `${PATHS.champions}Jhin.png` },
    { id: 'Jinx', name: 'Jinx', roles: ['bottom'], img: `${PATHS.champions}Jinx.png` },
    { id: 'KSante', name: "K'Sante", roles: ['top'], img: `${PATHS.champions}K'Sante.png` },
    { id: 'KaiSa', name: "Kai'Sa", roles: ['bottom'], img: `${PATHS.champions}Kai'Sa.png` },
    { id: 'Kalista', name: 'Kalista', roles: ['bottom', 'top'], img: `${PATHS.champions}Kalista.png` },
    { id: 'Karma', name: 'Karma', roles: ['support', 'mid'], img: `${PATHS.champions}Karma.png` },
    { id: 'Karthus', name: 'Karthus', roles: ['jungle', 'bottom'], img: `${PATHS.champions}Karthus.png` },
    { id: 'Kassadin', name: 'Kassadin', roles: ['mid'], img: `${PATHS.champions}Kassadin.png` },
    { id: 'Katarina', name: 'Katarina', roles: ['mid'], img: `${PATHS.champions}Katarina.png` },
    { id: 'Kayle', name: 'Kayle', roles: ['top', 'mid'], img: `${PATHS.champions}Kayle.png` },
    { id: 'Kayn', name: 'Kayn', roles: ['jungle'], img: `${PATHS.champions}Kayn.png` },
    { id: 'Kennen', name: 'Kennen', roles: ['top', 'mid'], img: `${PATHS.champions}Kennen.png` },
    { id: 'Kled', name: 'Kled', roles: ['top'], img: `${PATHS.champions}Kled.png` },
    { id: 'KogMaw', name: "Kog'Maw", roles: ['bottom', 'mid'], img: `${PATHS.champions}Kog'Maw.png` },
    { id: 'LeBlanc', name: 'LeBlanc', roles: ['mid', 'support'], img: `${PATHS.champions}LeBlanc.png` },
    { id: 'LeeSin', name: 'Lee Sin', roles: ['jungle'], img: `${PATHS.champions}Lee Sin.png` },
    { id: 'Leona', name: 'Leona', roles: ['support'], img: `${PATHS.champions}Leona.png` },
    { id: 'Lillia', name: 'Lilia', roles: ['jungle', 'top'], img: `${PATHS.champions}Lilia.png` },
    { id: 'Lissandra', name: 'Lissandra', roles: ['mid'], img: `${PATHS.champions}Lissandra.png` },
    { id: 'Lucian', name: 'Lucian', roles: ['bottom', 'mid'], img: `${PATHS.champions}Lucian.png` },
    { id: 'Lulu', name: 'Lulu', roles: ['support'], img: `${PATHS.champions}Lulu.png` },
    { id: 'Lux', name: 'Lux', roles: ['support', 'mid'], img: `${PATHS.champions}Lux.png` },
    { id: 'Malphite', name: 'Malphite', roles: ['top', 'mid', 'support'], img: `${PATHS.champions}Malphite.png` },
    { id: 'Malzahar', name: 'Malzahar', roles: ['mid'], img: `${PATHS.champions}Malzahar.png` },
    { id: 'Maokai', name: 'Maokai', roles: ['support', 'jungle', 'top'], img: `${PATHS.champions}Maokai.png` },
    { id: 'MasterYi', name: 'Master Yi', roles: ['jungle'], img: `${PATHS.champions}Master Yi.png` },
    { id: 'Mel', name: 'Mel', roles: ['support', 'mid'], img: `${PATHS.champions}Mel.png` },
    { id: 'Milio', name: 'Milio', roles: ['support'], img: `${PATHS.champions}Milio.png` },
    { id: 'MissFortune', name: 'Miss Fortune', roles: ['bottom'], img: `${PATHS.champions}Miss Fortune.png` },
    { id: 'Mordekaiser', name: 'Mordekaiser', roles: ['top', 'jungle'], img: `${PATHS.champions}Mordekaiser.png` },
    { id: 'Morgana', name: 'Morgana', roles: ['support', 'mid', 'jungle'], img: `${PATHS.champions}Morgana.png` },
    { id: 'Naafiri', name: 'Naafiri', roles: ['mid', 'top'], img: `${PATHS.champions}Naafiri.png` },
    { id: 'Nami', name: 'Nami', roles: ['support'], img: `${PATHS.champions}Nami.png` },
    { id: 'Nasus', name: 'Nasus', roles: ['top'], img: `${PATHS.champions}Nasus.png` },
    { id: 'Nautilus', name: 'Nautilus', roles: ['support'], img: `${PATHS.champions}Nautilus.png` },
    { id: 'Neeko', name: 'Neeko', roles: ['mid', 'support'], img: `${PATHS.champions}Neeko.png` },
    { id: 'Nidalee', name: 'Nidalee', roles: ['jungle'], img: `${PATHS.champions}Nidalee.png` },
    { id: 'Nilah', name: 'Nilah', roles: ['bottom'], img: `${PATHS.champions}Nilah.png` },
    { id: 'Nocturne', name: 'Nocturne', roles: ['jungle'], img: `${PATHS.champions}Nocturne.png` },
    { id: 'Norra', name: 'Norra', roles: ['mid', 'support'], img: `${PATHS.champions}Norra.png` },
    { id: 'Nunu', name: 'Nunu', roles: ['jungle'], img: `${PATHS.champions}Nunu.png` },
    { id: 'Olaf', name: 'Olaf', roles: ['jungle', 'top'], img: `${PATHS.champions}Olaf.png` },
    { id: 'Orianna', name: 'Orianna', roles: ['mid'], img: `${PATHS.champions}Orianna.png` },
    { id: 'Ornn', name: 'Ornn', roles: ['top'], img: `${PATHS.champions}Ornn.png` },
    { id: 'Pantheon', name: 'Pantheon', roles: ['top', 'mid', 'support', 'jungle'], img: `${PATHS.champions}Pantheon.png` },
    { id: 'Poppy', name: 'Poppy', roles: ['top', 'jungle', 'support'], img: `${PATHS.champions}Poppy.png` },
    { id: 'Pyke', name: 'Pyke', roles: ['support'], img: `${PATHS.champions}Pyke.png` },
    { id: 'Qiyana', name: 'Qiyana', roles: ['mid', 'jungle'], img: `${PATHS.champions}Qiyana.png` },
    { id: 'Quinn', name: 'Quinn', roles: ['top'], img: `${PATHS.champions}Quinn.png` },
    { id: 'Rakan', name: 'Rakan', roles: ['support'], img: `${PATHS.champions}Rakan.png` },
    { id: 'Rammus', name: 'Rammus', roles: ['jungle'], img: `${PATHS.champions}Rammus.png` },
    { id: 'RekSai', name: "Rek'Sai", roles: ['jungle'], img: `${PATHS.champions}Rek'Sai.png` },
    { id: 'Rell', name: 'Rell', roles: ['support', 'jungle'], img: `${PATHS.champions}Rell.png` },
    { id: 'Renata', name: 'Renata Glasc', roles: ['support'], img: `${PATHS.champions}Renata Glasc.png` },
    { id: 'Renekton', name: 'Renekton', roles: ['top'], img: `${PATHS.champions}Renekton.png` },
    { id: 'Rengar', name: 'Rengar', roles: ['jungle', 'top'], img: `${PATHS.champions}Rengar.png` },
    { id: 'Riven', name: 'Riven', roles: ['top'], img: `${PATHS.champions}Riven.png` },
    { id: 'Rumble', name: 'Rumble', roles: ['top', 'mid'], img: `${PATHS.champions}Rumble.png` },
    { id: 'Ryze', name: 'Ryze', roles: ['mid', 'top'], img: `${PATHS.champions}Ryze.png` },
    { id: 'Samira', name: 'Samira', roles: ['bottom'], img: `${PATHS.champions}Samira.png` },
    { id: 'Sejuani', name: 'Sejuani', roles: ['jungle', 'top'], img: `${PATHS.champions}Sejuani.png` },
    { id: 'Senna', name: 'Senna', roles: ['support', 'bottom'], img: `${PATHS.champions}Senna.png` },
    { id: 'Seraphine', name: 'Seraphine', roles: ['support', 'mid', 'bottom'], img: `${PATHS.champions}Seraphine.png` },
    { id: 'Sett', name: 'Sett', roles: ['top', 'support'], img: `${PATHS.champions}Sett.png` },
    { id: 'Shaco', name: 'Shaco', roles: ['jungle', 'support'], img: `${PATHS.champions}Shaco.png` },
    { id: 'Shen', name: 'Shen', roles: ['top', 'support'], img: `${PATHS.champions}Shen.png` },
    { id: 'Shyvana', name: 'Shyvana', roles: ['jungle', 'top'], img: `${PATHS.champions}Shyvana.png` },
    { id: 'Singed', name: 'Singed', roles: ['top'], img: `${PATHS.champions}Singed.png` },
    { id: 'Sion', name: 'Sion', roles: ['top'], img: `${PATHS.champions}Sion.png` },
    { id: 'Sivir', name: 'Sivir', roles: ['bottom'], img: `${PATHS.champions}Sivir.png` },
    { id: 'Skarner', name: 'Skarner', roles: ['jungle', 'top'], img: `${PATHS.champions}Skarner.png` },
    { id: 'Smolder', name: 'Smolder', roles: ['bottom', 'mid'], img: `${PATHS.champions}Smolder.png` },
    { id: 'Sona', name: 'Sona', roles: ['support'], img: `${PATHS.champions}Sona.png` },
    { id: 'Soraka', name: 'Soraka', roles: ['support'], img: `${PATHS.champions}Soraka.png` },
    { id: 'Swain', name: 'Swain', roles: ['mid', 'support', 'top'], img: `${PATHS.champions}Swain.png` },
    { id: 'Sylas', name: 'Sylas', roles: ['mid', 'top'], img: `${PATHS.champions}Sylas.png` },
    { id: 'Syndra', name: 'Syndra', roles: ['mid'], img: `${PATHS.champions}Syndra.png` },
    { id: 'TahmKench', name: 'Tahm Kench', roles: ['support', 'top'], img: `${PATHS.champions}Tahm Kench.png` },
    { id: 'Taliyah', name: 'Taliyah', roles: ['jungle', 'mid'], img: `${PATHS.champions}Taliyah.png` },
    { id: 'Talon', name: 'Talon', roles: ['jungle', 'mid'], img: `${PATHS.champions}Talon.png` },
    { id: 'Taric', name: 'Taric', roles: ['support'], img: `${PATHS.champions}Taric.png` },
    { id: 'Teemo', name: 'Teemo', roles: ['top', 'support'], img: `${PATHS.champions}Teemo.png` },
    { id: 'Thresh', name: 'Thresh', roles: ['support'], img: `${PATHS.champions}Thresh.png` },
    { id: 'Tristana', name: 'Tristana', roles: ['bottom', 'mid'], img: `${PATHS.champions}Tristana.png` },
    { id: 'Trundle', name: 'Trundle', roles: ['jungle', 'top'], img: `${PATHS.champions}Trundle.png` },
    { id: 'Tryndamere', name: 'Tryndamere', roles: ['top'], img: `${PATHS.champions}Tryndamere.png` },
    { id: 'TwistedFate', name: 'Twisted Fate', roles: ['mid'], img: `${PATHS.champions}Twisted Fate.png` },
    { id: 'Twitch', name: 'Twitch', roles: ['bottom', 'support'], img: `${PATHS.champions}Twitch.png` },
    { id: 'Udyr', name: 'Udyr', roles: ['jungle', 'top'], img: `${PATHS.champions}Udyr.png` },
    { id: 'Urgot', name: 'Urgot', roles: ['top'], img: `${PATHS.champions}Urgot.png` },
    { id: 'Varus', name: 'Varus', roles: ['bottom', 'mid'], img: `${PATHS.champions}Varus.png` },
    { id: 'Vayne', name: 'Vayne', roles: ['bottom', 'top'], img: `${PATHS.champions}Vayne.png` },
    { id: 'Veigar', name: 'Veigar', roles: ['mid', 'support'], img: `${PATHS.champions}Veigar.png` },
    { id: 'VelKoz', name: "Vel'Koz", roles: ['support', 'mid'], img: `${PATHS.champions}Vel'Koz.png` },
    { id: 'Vex', name: 'Vex', roles: ['mid'], img: `${PATHS.champions}Vex.png` },
    { id: 'Vi', name: 'Vi', roles: ['jungle'], img: `${PATHS.champions}Vi.png` },
    { id: 'Viego', name: 'Viego', roles: ['jungle'], img: `${PATHS.champions}Viego.png` },
    { id: 'Viktor', name: 'Viktor', roles: ['mid'], img: `${PATHS.champions}Viktor.png` },
    { id: 'Vladimir', name: 'Vladimir', roles: ['mid', 'top'], img: `${PATHS.champions}Vladimir.png` },
    { id: 'Volibear', name: 'Volibear', roles: ['jungle', 'top'], img: `${PATHS.champions}Volibear.png` },
    { id: 'Warwick', name: 'Warwick', roles: ['jungle', 'top'], img: `${PATHS.champions}Warwick.png` },
    { id: 'Wukong', name: 'Wukong', roles: ['jungle', 'top'], img: `${PATHS.champions}Wukong.png` },
    { id: 'Xayah', name: 'Xayah', roles: ['bottom'], img: `${PATHS.champions}Xayah.png` },
    { id: 'Xerath', name: 'Xerath', roles: ['support', 'mid'], img: `${PATHS.champions}Xerath.png` },
    { id: 'XinZhao', name: 'Xin Zhao', roles: ['jungle'], img: `${PATHS.champions}Xin Zhao.png` },
    { id: 'Yasuo', name: 'Yasuo', roles: ['mid', 'top'], img: `${PATHS.champions}Yasuo.png` },
    { id: 'Yone', name: 'Yone', roles: ['mid', 'top'], img: `${PATHS.champions}Yone.png` },
    { id: 'Yorick', name: 'Yorick', roles: ['top'], img: `${PATHS.champions}Yorick.png` },
    { id: 'Yunara', name: 'Yunara', roles: ['mid'], img: `${PATHS.champions}Yunara.png` },
    { id: 'Yuumi', name: 'Yuumi', roles: ['support'], img: `${PATHS.champions}Yuumi.png` },
    { id: 'Zaahen', name: 'Zaahen', roles: ['mid', 'support'], img: `${PATHS.champions}Zaahen.png` },
    { id: 'Zac', name: 'Zac', roles: ['jungle', 'top'], img: `${PATHS.champions}Zac.png` },
    { id: 'Zed', name: 'Zed', roles: ['mid', 'jungle'], img: `${PATHS.champions}Zed.png` },
    { id: 'Zeri', name: 'Zeri', roles: ['bottom'], img: `${PATHS.champions}Zeri.png` },
    { id: 'Ziggs', name: 'Ziggs', roles: ['bottom', 'mid'], img: `${PATHS.champions}Ziggs.png` },
    { id: 'Zilean', name: 'Zilean', roles: ['support', 'mid'], img: `${PATHS.champions}Zilean.png` },
    { id: 'Zoe', name: 'Zoe', roles: ['mid'], img: `${PATHS.champions}Zoe.png` },
    { id: 'Zyra', name: 'Zyra', roles: ['support', 'mid'], img: `${PATHS.champions}Zyra.png` },
];

// --- Feature 1: Lane Matchups (Sample) ---
export const matchupData = {
    'Ahri': {
        lane: 'mid',
        counters: [
            { championId: 'Zed', tier: 'S', winRate: '52.4%', reason: 'Zed can dodge Charm with shadows and burst quickly.', tips: ['Rush Zhonyas.', 'Hold Charm for his ult arrival.'] },
            { championId: 'Yasuo', tier: 'A', winRate: '51.1%', reason: 'Windwall blocks all projectiles.', tips: ['Auto to break shield.', 'Do not ult into windwall.'] },
            { championId: 'Fizz', tier: 'A', winRate: '50.8%', reason: 'Playful/Trickster dodges combos.', tips: ['Abuse range early.', 'Hold Charm for E.'] }
        ],
        generalTips: "Patch 25.23: Ahri's W movespeed was nerfed, so she is easier to catch. Punish her when Q is on cooldown."
    },
    'Aurora': {
        lane: 'mid',
        counters: [
            { championId: 'Yone', tier: 'S', winRate: '53.8%', reason: 'Yone can stick to her through her invisibility.', tips: ['Buy Sweeper.', 'Trade when her passive is down.'] },
            { championId: 'Vex', tier: 'A', winRate: '52.2%', reason: 'Vex passive interrupts her dashes.', tips: ['Poke with Q.', 'Fear her when she engages.'] }
        ],
        generalTips: "Aurora excels in skirmishes. Ward pixel brush to track her roams."
    },
    'Smolder': {
        lane: 'bottom',
        counters: [
            { championId: 'Draven', tier: 'S+', winRate: '55.1%', reason: 'Draven dominates the early game before Smolder stacks.', tips: ['Play aggressive early.', 'Deny stacks.'] },
            { championId: 'Caitlyn', tier: 'S', winRate: '53.4%', reason: 'Range advantage makes stacking difficult.', tips: ['Trap zoning.', 'Poke constantly.'] }
        ],
        generalTips: "End the game early. Patch 25.23 buffed his late game execute slightly."
    }
};

// --- Feature 2: Rune Setups (Expanded) ---
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
    'Jinx': {
        keystone: { name: 'Lethal Tempo', img: `${PATHS.runes}Lethal_Tempo.png` },
        primaryTree: 'Precision',
        primaryRunes: [
            { name: 'Presence of Mind', img: `${PATHS.runes}Presence_of_Mind.png` },
            { name: 'Legend: Bloodline', img: `${PATHS.runes}Legend-_Bloodline.png` },
            { name: 'Cut Down', img: `${PATHS.runes}Cut_Down.png` }
        ],
        secondaryTree: 'Domination',
        secondaryRunes: [
            { name: 'Taste of Blood', img: `${PATHS.runes}Taste_of_Blood.png` },
            { name: 'Treasure Hunter', img: `${PATHS.runes}Treasure_Hunter.png` }
        ],
        shards: ['Attack Speed', 'Adaptive Force', 'Armor']
    },
    'Yone': {
        keystone: { name: 'Lethal Tempo', img: `${PATHS.runes}Lethal_Tempo.png` },
        primaryTree: 'Precision',
        primaryRunes: [
            { name: 'Triumph', img: `${PATHS.runes}Triumph.png` },
            { name: 'Legend: Alacrity', img: `${PATHS.runes}Legend-_Alacrity.png` },
            { name: 'Last Stand', img: `${PATHS.runes}Last_Stand.png` }
        ],
        secondaryTree: 'Resolve',
        secondaryRunes: [
            { name: 'Second Wind', img: `${PATHS.runes}Second_Wind.png` },
            { name: 'Unflinching', img: `${PATHS.runes}Unflinching.png` }
        ],
        shards: ['Attack Speed', 'Adaptive Force', 'Magic Resist']
    },
    'Hecarim': {
        keystone: { name: 'Phase Rush', img: `${PATHS.runes}Phase_Rush.png` },
        primaryTree: 'Sorcery',
        primaryRunes: [
            { name: 'Nimbus Cloak', img: `${PATHS.runes}Nimbus_Cloak.png` },
            { name: 'Celerity', img: `${PATHS.runes}Celerity.png` },
            { name: 'Waterwalking', img: `${PATHS.runes}Waterwalking.png` }
        ],
        secondaryTree: 'Precision',
        secondaryRunes: [
            { name: 'Triumph', img: `${PATHS.runes}Triumph.png` },
            { name: 'Legend: Tenacity', img: `${PATHS.runes}Legend-_Tenacity.png` }
        ],
        shards: ['Adaptive Force', 'Adaptive Force', 'Health']
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
    },
    'Smolder': {
        keystone: { name: 'Arcane Comet', img: `${PATHS.runes}Arcane_Comet.png` },
        primaryTree: 'Sorcery',
        primaryRunes: [
            { name: 'Manaflow Band', img: `${PATHS.runes}Manaflow_Band.png` },
            { name: 'Absolute Focus', img: `${PATHS.runes}Absolute_Focus.png` },
            { name: 'Scorch', img: `${PATHS.runes}Scorch.png` }
        ],
        secondaryTree: 'Inspiration',
        secondaryRunes: [
            { name: 'Magical Footwear', img: `${PATHS.runes}Magical_Footwear.png` },
            { name: 'Biscuit Delivery', img: `${PATHS.runes}Biscuit_Delivery.png` }
        ],
        shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    'Mel': {
        keystone: { name: 'Summon Aery', img: `${PATHS.runes}Summon_Aery.png` },
        primaryTree: 'Sorcery',
        primaryRunes: [
            { name: 'Manaflow Band', img: `${PATHS.runes}Manaflow_Band.png` },
            { name: 'Transcendence', img: `${PATHS.runes}Transcendence.png` },
            { name: 'Scorch', img: `${PATHS.runes}Scorch.png` }
        ],
        secondaryTree: 'Domination',
        secondaryRunes: [
            { name: 'Cheap Shot', img: `${PATHS.runes}Cheap_Shot.png` },
            { name: 'Ultimate Hunter', img: `${PATHS.runes}Ultimate_Hunter.png` }
        ],
        shards: ['Ability Haste', 'Adaptive Force', 'Health']
    }
};

// --- Feature 3: Meta Stats ---
export const metaStats = {
    'top': [
        { name: 'Darius', winRate: '51.5%', pickRate: '12.4%', banRate: '28.2%', desc: 'Dominates melee matchups with high sustain.' },
        { name: 'Aurora', winRate: '52.1%', pickRate: '9.5%', banRate: '45.3%', desc: 'Patch 25.23 S+ tier. High mobility skirmisher.' },
        { name: 'Aatrox', winRate: '49.8%', pickRate: '14.2%', banRate: '12.1%', desc: 'Strong blind pick with massive teamfight sustain.' },
        { name: 'K\'Sante', winRate: '48.2%', pickRate: '6.5%', banRate: '10.1%', desc: 'High skill ceiling tank/skirmisher hybrid.' },
        { name: 'Camille', winRate: '51.2%', pickRate: '6.8%', banRate: '9.4%', desc: 'High mobility and true damage.' }
    ],
    'mid': [
        { name: 'Mel', winRate: '53.2%', pickRate: '18.5%', banRate: '62.1%', desc: 'New champion overtuned in Patch 25.23.' },
        { name: 'Ahri', winRate: '50.5%', pickRate: '15.2%', banRate: '8.4%', desc: 'Versatile mage with safety and catch potential.' },
        { name: 'Hwei', winRate: '49.5%', pickRate: '8.2%', banRate: '5.4%', desc: 'Artillery mage with 10 spell combinations.' },
        { name: 'Zed', winRate: '48.9%', pickRate: '11.5%', banRate: '30.1%', desc: 'Assassin that terrorizes squishy backlines.' },
        { name: 'Yasuo', winRate: '49.2%', pickRate: '18.2%', banRate: '15.4%', desc: 'Scaling skirmisher with windwall utility.' }
    ],
    'bottom': [
         { name: 'Smolder', winRate: '51.8%', pickRate: '14.2%', banRate: '22.4%', desc: 'Infinite scaling caster marksman.' },
         { name: 'Zeri', winRate: '50.1%', pickRate: '11.2%', banRate: '18.1%', desc: 'High mobility hypercarry.' },
         { name: 'Jinx', winRate: '52.4%', pickRate: '22.1%', banRate: '12.5%', desc: 'Reset queen, excels in chaotic teamfights.' }
    ],
    'jungle': [
        { name: 'Bel\'Veth', winRate: '52.5%', pickRate: '8.4%', banRate: '35.2%', desc: 'Infinite attack speed scaling void empress.' },
        { name: 'Viego', winRate: '49.8%', pickRate: '12.2%', banRate: '9.5%', desc: 'Possession mechanic allows for huge multikills.' },
        { name: 'Briar', winRate: '51.2%', pickRate: '7.5%', banRate: '15.6%', desc: 'Berserker diver with global presence.' }
    ],
    'support': [
         { name: 'Renata Glasc', winRate: '51.9%', pickRate: '5.4%', banRate: '8.2%', desc: 'Anti-carry support with revive mechanic.' },
         { name: 'Milio', winRate: '50.5%', pickRate: '9.2%', banRate: '4.1%', desc: 'Range extension and cleansing fire.' }
    ]
};

// --- Feature 3: Latest Patch Changes (25.23) ---
export const patchNotes = [
    {
        type: 'buff',
        champion: 'Zeri',
        img: `${PATHS.champions}Zeri.png`,
        changes: [
            'Q (Burst Fire): Active damage ratio increased to 120% AD.',
            'E (Spark Surge): Cooldown reduced by 2s at all ranks.'
        ]
    },
    {
        type: 'nerf',
        champion: 'Mel',
        img: `${PATHS.champions}Mel.png`,
        changes: [
            'W (Law of the Golden): Shield duration reduced from 3s to 2s.',
            'R (Dictate): Cooldown increased from 100/90/80s to 120/110/100s.'
        ]
    },
    {
        type: 'change',
        champion: 'Smolder',
        img: `${PATHS.champions}Smolder.png`,
        changes: [
            'Passive (Dragon Practice): Stacks required for execute lowered to 200.',
            'Q (Super Scorcher Breath): Base damage reduced by 5.'
        ]
    },
     {
        type: 'nerf',
        champion: 'Ahri',
        img: `${PATHS.champions}Ahri.png`,
        changes: [
            'W (Fox-Fire): Damage reduced from 50-150 to 45-145.',
        ]
    }
];