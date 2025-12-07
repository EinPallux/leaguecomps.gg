// Midlane Counter Data based on professional guides and meta analysis
//
// PATCH 25.24 UPDATE (Season 15):
// - Syndra & Yone buffs moved them to S-Tier priority.
// - Diana & Morgana added as top meta picks (S/A Tier).
// - LeBlanc & Akshan nerfs taken into account for matchup difficulty.
//
// HOW TO ADD NEW MIDLANERS:
// 1. Add to the midlaners array: { name: "NewMidlaner", icon: "../icons/NewMidlaner.png" }
// 2. Add a new section in counters: "NewMidlaner": { tierS: [...], tierA: [...], etc. }
// 3. Add a new entry in counterStrategies: "NewMidlaner": "General strategy here..."
//
const midlaneData = {
    midlaners: [
        { name: "Ahri", icon: "../icons/Ahri.png" },
        { name: "Zed", icon: "../icons/Zed.png" },
        { name: "Yasuo", icon: "../icons/Yasuo.png" },
        { name: "Katarina", icon: "../icons/Katarina.png" },
        { name: "Veigar", icon: "../icons/Veigar.png" },
        { name: "Lux", icon: "../icons/Lux.png" },
        { name: "Fizz", icon: "../icons/Fizz.png" },
        { name: "Syndra", icon: "../icons/Syndra.png" },
        { name: "Akali", icon: "../icons/Akali.png" },
        { name: "Yone", icon: "../icons/Yone.png" },
        { name: "Viktor", icon: "../icons/Viktor.png" },
        { name: "Orianna", icon: "../icons/Orianna.png" },
        { name: "LeBlanc", icon: "../icons/LeBlanc.png" },
        { name: "Mel", icon: "../icons/Mel.png" },
        { name: "Malzahar", icon: "../icons/Malzahar.png" },
        { name: "Sylas", icon: "../icons/Sylas.png" },
        { name: "Galio", icon: "../icons/Galio.png" },
        { name: "Xerath", icon: "../icons/Xerath.png" },
        { name: "Aurelion Sol", icon: "../icons/Aurelion Sol.png" },
        { name: "Aurora", icon: "../icons/Aurora.png" },
        { name: "Ryze", icon: "../icons/Ryze.png" },
        { name: "Anivia", icon: "../icons/Anivia.png" },
        { name: "Vladimir", icon: "../icons/Vladimir.png" },
        { name: "Twisted Fate", icon: "../icons/Twisted Fate.png" },
        { name: "Akshan", icon: "../icons/Akshan.png" },
        { name: "Kassadin", icon: "../icons/Kassadin.png" },
        { name: "Qiyana", icon: "../icons/Qiyana.png" },
        { name: "Annie", icon: "../icons/Annie.png" },
        { name: "Zoe", icon: "../icons/Zoe.png" },
        { name: "Irelia", icon: "../icons/Irelia.png" },
        { name: "Diana", icon: "../icons/Diana.png" },
        { name: "Morgana", icon: "../icons/Morgana.png" }
    ],

    // Counter-picks organized by tier for each enemy midlaner
    counters: {
        "Ahri": {
            tierS: [
                { 
                    name: "Yasuo", 
                    icon: "../icons/Yasuo.png", 
                    role: "Skirmisher",
                    reasons: [
                        "Wind Wall (W) can block Ahri's Charm (E) and Orb (Q).",
                        "High mobility to dodge skills and dash onto her.",
                        "Strong all-in once he gets items and stacks Q."
                    ]
                },
                { 
                    name: "Fizz", 
                    icon: "../icons/Fizz.png", 
                    role: "Assassin",
                    reasons: [
                        "Playful/Trickster (E) can dodge her Charm and ultimate.",
                        "Strong all-in burst damage post-6.",
                        "Can easily gap-close when she uses abilities."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Zed", 
                    icon: "../icons/Zed.png", 
                    role: "Assassin",
                    reasons: [
                        "Death Mark (R) can dodge her Charm and follow her ult.",
                        "Stronger all-in burst damage post-6.",
                        "Good poke with shurikens to whittle her down."
                    ]
                },
                { 
                    name: "LeBlanc", 
                    icon: "../icons/LeBlanc.png", 
                    role: "Burst Mage",
                    reasons: [
                        "High mobility (W) makes it easy to dodge Charm.",
                        "Strong burst trades, forcing Ahri to play safe.",
                        "Can match her roams effectively."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Lux", 
                    icon: "../icons/Lux.png", 
                    role: "Artillery Mage",
                    reasons: [
                        "Can match her waveclear from a safer distance.",
                        "Barrier/Shield can survive burst, but hard to land Q.",
                        "A skill matchup, but Lux has range advantage."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Katarina", 
                    icon: "../icons/Katarina.png", 
                    role: "Assassin",
                    reasons: [
                        "Ahri's Charm is a direct counter to Katarina's ultimate.",
                        "Ahri has multiple dashes to escape Katarina's all-in.",
                        "Very difficult matchup for Katarina."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Veigar", 
                    icon: "../icons/Veigar.png", 
                    role: "Burst Mage",
                    reasons: [
                        "Immobile, making it easy for Ahri to land Charm.",
                        "Ahri's R allows her to easily escape Veigar's cage.",
                        "Gets out-roamed and out-maneuvered hard."
                    ]
                }
            ]
        },

        "Zed": {
            tierS: [
                { 
                    name: "Lissandra", 
                    icon: "../icons/Lissandra.png", 
                    role: "Burst Mage",
                    reasons: [
                        "Frozen Tomb (R) on herself perfectly counters Zed's R.",
                        "Strong wave clear to shove him in.",
                        "W root provides easy gank setup."
                    ]
                },
                { 
                    name: "Malzahar", 
                    icon: "../icons/Malzahar.png", 
                    role: "Control Mage",
                    reasons: [
                        "Nether Grasp (R) suppresses Zed during his all-in.",
                        "Passive shield blocks his first poke ability.",
                        "Voidlings (W) provide easy wave clear and push."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Akali", 
                    icon: "../icons/Akali.png", 
                    role: "Assassin",
                    reasons: [
                        "Shroud (W) allows Akali to dodge Zed's combo.",
                        "Can build Zhonya's/Stopwatch effectively.",
                        "Strong skirmisher who can match his all-in."
                    ]
                },
                { 
                    name: "Fizz", 
                    icon: "../icons/Fizz.png", 
                    role: "Assassin",
                    reasons: [
                        "Playful/Trickster (E) can dodge Zed's entire R damage.",
                        "Stronger all-in potential at level 6.",
                        "Can easily escape ganks or all-ins."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Yasuo", 
                    icon: "../icons/Yasuo.png", 
                    role: "Skirmisher",
                    reasons: [
                        "A high-skill matchup, but Yasuo can win trades.",
                        "Wind Wall does not block Zed's shadows or R.",
                        "Both champions want to all-in."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Lux", 
                    icon: "../icons/Lux.png", 
                    role: "Artillery Mage",
                    reasons: [
                        "Very squishy and vulnerable to his all-in.",
                        "Relies on landing a slow-moving Q to stop him.",
                        "Must build Zhonya's first, delaying power spike."
                    ]
                },
                { 
                    name: "Veigar", 
                    icon: "../icons/Veigar.png", 
                    role: "Burst Mage",
                    reasons: [
                        "Extremely immobile and easy for Zed to target.",
                        "Zed's R can place him outside Veigar's cage.",
                        "Building Zhonya's is mandatory and delays AP."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Orianna", 
                    icon: "../icons/Orianna.png", 
                    role: "Control Mage",
                    reasons: [
                        "Very immobile and a prime target for Zed.",
                        "Lacks immediate CC to stop his combo.",
                        "Forced to build defensive items early."
                    ]
                }
            ]
        },

        "Yasuo": {
            tierS: [
                { 
                    name: "Renekton", 
                    icon: "../icons/Renekton.png", 
                    role: "Fighter",
                    reasons: [
                        "Point-and-click W stun goes through Wind Wall.",
                        "Strong early game trades that Yasuo cannot win.",
                        "Tanky build survives his damage."
                    ]
                },
                { 
                    name: "Akali", 
                    icon: "../icons/Akali.png", 
                    role: "Assassin",
                    reasons: [
                        "Doesn't rely on projectiles, making Wind Wall useless.",
                        "Shroud (W) prevents Yasuo from auto-attacking or ulting.",
                        "Stronger short trades and all-in."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Annie", 
                    icon: "../icons/Annie.png", 
                    role: "Burst Mage",
                    reasons: [
                        "Point-and-click Q and R (Tibbers) can't be blocked.",
                        "Passive stun is reliable lockdown.",
                        "Can pop his passive shield easily with Q."
                    ]
                },
                { 
                    name: "Zed", 
                    icon: "../icons/Zed.png", 
                    role: "Assassin",
                    reasons: [
                        "Skill matchup, but Zed's all-in is often stronger.",
                        "Doesn't rely on projectiles.",
                        "Can poke Yasuo's passive shield before engaging."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Ahri", 
                    icon: "../icons/Ahri.png", 
                    role: "Burst Mage",
                    reasons: [
                        "Wind Wall can block her Charm and Q, making it hard.",
                        "However, her mobility and range can keep Yasuo away.",
                        "Can set up ganks if Yasuo pushes."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Lux", 
                    icon: "../icons/Lux.png", 
                    role: "Artillery Mage",
                    reasons: [
                        "Yasuo's Wind Wall blocks every single one of her abilities.",
                        "Her only hope is to bait out Wind Wall first.",
                        "Very difficult matchup for Lux."
                    ]
                },
                { 
                    name: "Orianna", 
                    icon: "../icons/Orianna.png", 
                    role: "Control Mage",
                    reasons: [
                        "Wind Wall blocks her Q (the ball), making her useless.",
                        "Yasuo's dash can get onto her easily.",
                        "Extremely Yasuo-favored matchup."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Veigar", 
                    icon: "../icons/Veigar.png", 
                    role: "Burst Mage",
                    reasons: [
                        "Wind Wall blocks his Q, R, and auto-attacks.",
                        "Yasuo can dash out of his cage.",
                        "One of the hardest counters to Veigar."
                    ]
                }
            ]
        },

        "Katarina": {
            tierS: [
                { 
                    name: "Lissandra", 
                    icon: "../icons/Lissandra.png", 
                    role: "Burst Mage",
                    reasons: [
                        "Point-and-click R instantly stops Katarina's ultimate.",
                        "W root can stop her from dashing.",
                        "Strong waveclear to keep her under tower."
                    ]
                },
                { 
                    name: "Malzahar", 
                    icon: "../icons/Malzahar.png", 
                    role: "Control Mage",
                    reasons: [
                        "Point-and-click R (suppression) stops her ultimate.",
                        "Passive shield blocks her initial burst.",
                        "Can push waves fast, forcing her to farm."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Fizz", 
                    icon: "../icons/Fizz.png", 
                    role: "Assassin",
                    reasons: [
                        "Can dodge her ultimate with E.",
                        "Stronger all-in burst, can one-shot her.",
                        "Can match her roams effectively."
                    ]
                },
                { 
                    name: "Yasuo", 
                    icon: "../icons/Yasuo.png", 
                    role: "Skirmisher",
                    reasons: [
                        "Tornado (Q3) can interrupt her ultimate.",
                        "Wind Wall blocks her Q (dagger).",
                        "Stronger sustained damage in melee."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Ahri", 
                    icon: "../icons/Ahri.png", 
                    role: "Burst Mage",
                    reasons: [
                        "Charm (E) can interrupt Katarina's ultimate.",
                        "Her ultimate allows her to reposition safely.",
                        "Can poke her down before she engages."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Veigar", 
                    icon: "../icons/Veigar.png", 
                    role: "Burst Mage",
                    reasons: [
                        "Katarina can easily blink out of his cage.",
                        "No reliable way to stop her ultimate.",
                        "Very easy target for her all-in."
                    ]
                },
                { 
                    name: "Lux", 
                    icon: "../icons/Lux.png", 
                    role: "Artillery Mage",
                    reasons: [
                        "Katarina can shunpo (E) to dodge all of Lux's spells.",
                        "No instant CC to stop her ultimate.",
                        "Very squishy and easy to one-shot."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Orianna", 
                    icon: "../icons/Orianna.png", 
                    role: "Control Mage",
                    reasons: [
                        "Immobile and squishy.",
                        "Ultimate has a delay, Katarina can blink away.",
                        "Very easy matchup for Katarina."
                    ]
                }
            ]
        },

        "Mel": {
            tierS: [
                {
                    name: "Akali",
                    icon: "../icons/Akali.png",
                    role: "Assassin",
                    reasons: [
                        "Akali's shroud (W) and mobility make her hard to hit with Mel's projectiles.",
                        "Mel's reflect (W) is less useful against Akali's non-projectile damage.",
                        "Strong all-in burst can kill Mel before her execute stacks."
                    ]
                },
                {
                    name: "Fizz",
                    icon: "../icons/Fizz.png",
                    role: "Assassin",
                    reasons: [
                        "Playful/Trickster (E) allows Fizz to dodge all of Mel's abilities.",
                        "Mel has no escape from Fizz's all-in once he lands his ult.",
                        "Reflect (W) cannot stop Fizz's shark."
                    ]
                }
            ],
            tierA: [
                {
                    name: "Zed",
                    icon: "../icons/Zed.png",
                    role: "Assassin",
                    reasons: [
                        "Zed's high mobility and shadows allow him to dodge Mel's E snare.",
                        "Can ult to dodge Mel's abilities and apply burst.",
                        "Mel's reflect (W) has a long cooldown; Zed can play around it."
                    ]
                },
                {
                    name: "Yasuo",
                    icon: "../icons/Yasuo.png",
                    role: "Skirmisher",
                    reasons: [
                        "Wind Wall (W) blocks Mel's Q, E, and passive-enhanced autos.",
                        "High mobility makes it hard for Mel to land her E snare.",
                        "Can dash onto Mel and win extended trades."
                    ]
                }
            ],
            tierB: [
                {
                    name: "LeBlanc",
                    icon: "../icons/LeBlanc.png",
                    role: "Burst Mage",
                    reasons: [
                        "High mobility makes it easy to dodge Mel's skillshots.",
                        "Can poke Mel down safely before committing to an all-in.",
                        "Mel's reflect is hard to time against LeBlanc's fast combo."
                    ]
                }
            ],
            tierC: [
                {
                    name: "Vladimir",
                    icon: "../icons/Vladimir.png",
                    role: "Battle Mage",
                    reasons: [
                        "Vladimir's pool (W) can dodge her E snare and burst.",
                        "Can outsustain Mel's poke in the laning phase.",
                        "Mel's reflect is useless against Vladimir."
                    ]
                }
            ],
            tierD: [
                {
                    name: "Xerath",
                    icon: "../icons/Xerath.png",
                    role: "Artillery Mage",
                    reasons: [
                        "Mel can reflect (W) Xerath's E stun and Q poke.",
                        "Xerath is immobile and an easy target for Mel's E snare.",
                        "Mel's ult can execute Xerath from a long range."
                    ]
                }
            ]
        },

        "Akali": {
            tierS: [
                {
                    name: "Lissandra",
                    icon: "../icons/Lissandra.png",
                    role: "Control Mage",
                    reasons: [
                        "Point-and-click W and R provide unavoidable CC.",
                        "Can root Akali in her shroud (W).",
                        "Can ult herself to survive Akali's burst."
                    ]
                },
                {
                    name: "Twisted Fate",
                    icon: "../icons/Twisted Fate.png",
                    role: "Control Mage",
                    reasons: [
                        "Point-and-click Gold Card (W) reveals her in shroud.",
                        "Can safely farm from a distance and push waves.",
                        "Global ult (R) can follow her roams."
                    ]
                }
            ],
            tierA: [
                {
                    name: "Galio",
                    icon: "../icons/Galio.png",
                    role: "Warden",
                    reasons: [
                        "Taunt (W) is a large AoE that can hit her in shroud.",
                        "Naturally tanky and builds MR, nullifying her burst.",
                        "Global ult (R) can counter her roams."
                    ]
                },
                {
                    name: "Veigar",
                    icon: "../icons/Veigar.png",
                    role: "Burst Mage",
                    reasons: [
                        "Cage (E) makes it very difficult for Akali to dash.",
                        "Point-and-click R (ult) can execute her if she gets low.",
                        "Outscales her in teamfights."
                    ]
                }
            ],
            tierB: [
                {
                    name: "Morgana",
                    icon: "../icons/Morgana.png",
                    role: "Control Mage",
                    reasons: [
                        "Her ultimate (R) can stun Akali in her shroud.",
                        "Black Shield (E) can prevent her burst on an ally.",
                        "Soil (W) can get vision of her in shroud."
                    ]
                }
            ],
            tierC: [
                {
                    name: "Viktor",
                    icon: "../icons/Viktor.png",
                    role: "Control Mage",
                    reasons: [
                        "Akali can easily dodge Viktor's E and W.",
                        "Viktor is immobile and vulnerable to her all-in.",
                        "A skill matchup, but favored for Akali."
                    ]
                }
            ],
            tierD: [
                {
                    name: "Ziggs",
                    icon: "../icons/Ziggs.png",
                    role: "Artillery Mage",
                    reasons: [
                        "Very immobile and squishy.",
                        "Akali can dodge all his abilities easily.",
                        "Easy target for Akali to one-shot."
                    ]
                }
            ]
        },

        "Malzahar": {
            tierS: [
                {
                    name: "Kassadin",
                    icon: "../icons/Kassadin.png",
                    role: "Assassin",
                    reasons: [
                        "Kassadin's Q (Null Sphere) interrupts Malzahar's abilities.",
                        "His passive magic damage reduction is very strong.",
                        "Post-6, his ult (R) makes him immune to Malzahar's combo."
                    ]
                },
                {
                    name: "Fizz",
                    icon: "../icons/Fizz.png",
                    role: "Assassin",
                    reasons: [
                        "Playful/Trickster (E) can dodge Malzahar's ult (R).",
                        "Can easily break Malzahar's passive shield.",
                        "Strong all-in burst can kill Malzahar."
                    ]
                }
            ],
            tierA: [
                {
                    name: "Kayle",
                    icon: "../icons/Kayle.png",
                    role: "Marksman",
                    reasons: [
                        "Can ult (R) herself or an ally to block Malzahar's ult.",
                        "Outscales him significantly in the late game.",
                        "Can farm safely from a distance."
                    ]
                },
                {
                    name: "Xerath",
                    icon: "../icons/Xerath.png",
                    role: "Artillery Mage",
                    reasons: [
                        "Can easily break Malzahar's passive from a safe distance.",
                        "Out-ranges Malzahar in all stages of the game.",
                        "Can push the wave just as fast."
                    ]
                }
            ],
            tierB: [
                {
                    name: "Swain",
                    icon: "../icons/Swain.png",
                    role: "Battle Mage",
                    reasons: [
                        "Can outsustain Malzahar's poke.",
                        "His E (Nevermove) can pull Malzahar.",
                        "Tanky enough to survive the ult and fight back."
                    ]
                }
            ],
            tierC: [
                {
                    name:"Aurelion Sol",
                    icon: "../icons/Aurelion Sol.png",
                    role: "Control Mage",
                    reasons: [
                        "Malzahar's ult (R) is a perfect counter to Aurelion's W.",
                        "Can't fly away or channel safely.",
                        "Easy to push in and suppress."
                    ]
                }
            ],
            tierD: [
                {
                    name: "Yasuo",
                    icon: "../icons/Yasuo.png",
                    role: "Skirmisher",
                    reasons: [
                        "Malzahar's point-and-click ult (R) is unavoidable.",
                        "Voidlings block Yasuo's Q and dashes.",
                        "One of the hardest counters to Yasuo."
                    ]
                }
            ]
        },

        "Sylas": {
            tierS: [
                {
                    name: "Vex",
                    icon: "../icons/Vex.png",
                    role: "Burst Mage",
                    reasons: [
                        "Vex's passive (Gloom) applies 'Fear' to Sylas every time he dashes.",
                        "This completely neutralizes his E (Abscond/Abduct).",
                        "Has strong burst to kill him if he engages."
                    ]
                },
                {
                    name: "Malzahar",
                    icon: "../icons/Malzahar.png",
                    role: "Control Mage",
                    reasons: [
                        "Point-and-click ult (R) suppresses Sylas.",
                        "Stealing Malzahar's ult is very risky for Sylas.",
                        "Passive shield blocks Sylas's E engage."
                    ]
                }
            ],
            tierA: [
                {
                    name: "Cassiopeia",
                    icon: "../icons/Cassiopeia.png",
                    role: "Battle Mage",
                    reasons: [
                        "Miasma (W) grounds Sylas, preventing him from using E.",
                        "Strong sustained damage wins extended trades.",
                        "Can kite him easily."
                    ]
                },
                {
                    name: "Naafiri",
                    icon: "../icons/Naafiri.png",
                    role: "Assassin",
                    reasons: [
                        "Point-and-click dash (W) makes it easy to engage.",
                        "Strong burst damage, especially against melee.",
                        "Sylas has a hard time dealing with her packmates."
                    ]
                }
            ],
            tierB: [
                {
                    name: "Xerath",
                    icon: "../icons/Xerath.png",
                    role: "Artillery Mage",
                    reasons: [
                        "Can poke Sylas from a very safe distance.",
                        "Sylas's ult steal is very low-impact.",
                        "Hard for Sylas to engage."
                    ]
                }
            ],
            tierC: [
                {
                    name: "Yone",
                    icon: "../icons/Yone.png",
                    role: "Skirmisher",
                    reasons: [
                        "A skill matchup, but Sylas can steal a powerful ult.",
                        "Sylas's W (Kingslayer) heal is very strong in duels.",
                        "Both champions want to fight."
                    ]
                }
            ],
            tierD: [
                {
                    name: "Malphite",
                    icon: "../icons/Malphite.png",
                    role: "Tank",
                    reasons: [
                        "Sylas can steal one of the best ults in the game.",
                        "Malphite is AP, so Sylas's build works well.",
                        "Very easy matchup for Sylas."
                    ]
                }
            ]
        },

        "Lux": {
            tierS: [
                {
                    name: "Fizz",
                    icon: "../icons/Fizz.png",
                    role: "Assassin",
                    reasons: [
                        "Playful/Trickster (E) makes him untargetable, dodging all of Lux's spells.",
                        "Can easily one-shot her at level 6.",
                        "Lux is immobile and an easy target for his R."
                    ]
                },
                {
                    name: "Zed",
                    icon: "../icons/Zed.png",
                    role: "Assassin",
                    reasons: [
                        "His ult (R) makes him untargetable, dodging Lux's Q or R.",
                        "Can easily shadow (W) to dodge her Q (Light Binding).",
                        "Kills her easily if she ever misses her Q."
                    ]
                }
            ],
            tierA: [
                {
                    name: "Katarina",
                    icon: "../icons/Katarina.png",
                    role: "Assassin",
                    reasons: [
                        "Can use Shunpo (E) to dodge all of Lux's abilities.",
                        "Immobile and squishy, a perfect target for Katarina.",
                        "Can easily roam and get fed."
                    ]
                },
                {
                    name: "Kassadin",
                    icon: "../icons/Kassadin.png",
                    role: "Assassin",
                    reasons: [
                        "His Q (Null Sphere) provides a magic shield.",
                        "His ult (R) allows him to dodge all her abilities.",
                        "Completely outscales her."
                    ]
                }
            ],
            tierB: [
                {
                    name: "Yasuo",
                    icon: "../icons/Yasuo.png",
                    role: "Skirmisher",
                    reasons: [
                        "Wind Wall (W) blocks her Q, E, and R.",
                        "High mobility to dash through minions and dodge Q.",
                        "Very difficult matchup for Lux."
                    ]
                }
            ],
            tierC: [
                {
                    name: "Orianna",
                    icon: "../icons/Orianna.png",
                    role: "Control Mage",
                    reasons: [
                        "A pure skill matchup.",
                        "Lux has more poke, but Orianna has better sustained damage.",
                        "Both are immobile."
                    ]
                }
            ],
            tierD: [
                {
                    name: "Veigar",
                    icon: "../icons/Veigar.png",
                    role: "Burst Mage",
                    reasons: [
                        "Lux's long range (E) can poke Veigar safely.",
                        "Her Q can stop him from engaging.",
                        "Can out-range his cage."
                    ]
                }
            ]
        },

        "Galio": {
            tierS: [
                {
                    name: "Vex",
                    icon: "../icons/Vex.png",
                    role: "Burst Mage",
                    reasons: [
                        "Vex's passive (Gloom) applies 'Fear' to Galio every time he uses his E (Justice Punch).",
                        "Completely neutralizes his main engage tool.",
                        "Can poke him from a safe distance."
                    ]
                },
                {
                    name: "Morgana",
                    icon: "../icons/Morgana.png",
                    role: "Control Mage",
                    reasons: [
                        "Black Shield (E) makes her and her allies immune to his Taunt (W) and E.",
                        "Can root him if he tries to engage.",
                        "Can safely push waves from a distance."
                    ]
                }
            ],
            tierA: [
                {
                    name: "Ahri",
                    icon: "../icons/Ahri.png",
                    role: "Burst Mage",
                    reasons: [
                        "Her mobility (R) allows her to easily dodge his E and W.",
                        "Can poke him down from a safe distance.",
                        "Can cancel his E dash with her Charm (E)."
                    ]
                },
                {
                    name: "Cassiopeia",
                    icon: "../icons/Cassiopeia.png",
                    role: "Battle Mage",
                    reasons: [
                        "Miasma (W) grounds Galio, preventing him from using E or R.",
                        "Can kite him easily with her movement speed.",
                        "Strong sustained damage."
                    ]
                }
            ],
            tierB: [
                {
                    name: "Pantheon",
                    icon: "../icons/Pantheon.png",
                    role: "Fighter",
                    reasons: [
                        "Strong early game trades.",
                        "His E (Aegis Assault) can block Galio's poke.",
                        "Can match his global ult (R) with his own."
                    ]
                }
            ],
            tierC: [
                {
                    name: "Sylas",
                    icon: "../icons/Sylas.png",
                    role: "Battle Mage",
                    reasons: [
                        "A skill matchup, but Sylas can steal a great ult.",
                        "Galio is tanky, making it hard for Sylas to burst.",
                        "Sylas wins extended trades."
                    ]
                }
            ],
            tierD: [
                {
                    name: "Akali",
                    icon: "../icons/Akali.png",
                    role: "Assassin",
                    reasons: [
                        "Galio's Taunt (W) and E can hit her in shroud.",
                        "He builds MR naturally.",
                        "Very difficult for Akali to kill."
                    ]
                }
            ]
        },

        "Xerath": {
            tierS: [
                {
                    name: "Fizz",
                    icon: "../icons/Fizz.png",
                    role: "Assassin",
                    reasons: [
                        "Playful/Trickster (E) allows him to dodge all of Xerath's spells.",
                        "Xerath is immobile and an easy target for Fizz's ult (R).",
                        "Can one-shot Xerath easily."
                    ]
                },
                {
                    name: "Zed",
                    icon: "../icons/Zed.png",
                    role: "Assassin",
                    reasons: [
                        "His ult (R) and shadows (W) make him impossible to hit.",
                        "Can easily dodge Xerath's E (Stun).",
                        "Immobile and squishy, a perfect target for Zed."
                    ]
                }
            ],
            tierA: [
                {
                    name: "Katarina",
                    icon: "../icons/Katarina.png",
                    role: "Assassin",
                    reasons: [
                        "Can Shunpo (E) to dodge all of Xerath's abilities.",
                        "Extremely mobile, can get on top of him easily.",
                        "Can roam and get fed."
                    ]
                },
                {
                    name: "Talon",
                    icon: "../icons/Talon.png",
                    role: "Assassin",
                    reasons: [
                        "Can easily jump on Xerath with his Q (Noxian Diplomacy).",
                        "His ult (R) gives him stealth to avoid poke.",
                        "Can one-shot him at level 6."
                    ]
                }
            ],
            tierB: [
                {
                    name: "Aurora",
                    icon: "../icons/Aurora.png",
                    role: "Battle Mage",
                    reasons: [
                        "Her mobility and ult (R) can lock down Xerath.",
                        "Can dodge his poke with her W (Hops & Bounds).",
                        "A skill matchup, but favored for Aurora."
                    ]
                }
            ],
            tierC: [
                {
                    name: "Lux",
                    icon: "../icons/Lux.png",
                    role: "Artillery Mage",
                    reasons: [
                        "A pure skill matchup.",
                        "Both are long-range poke mages.",
                        "Whoever lands their CC first wins."
                    ]
                }
            ],
            tierD: [
                {
                    name: "Annie",
                    icon: "../icons/Annie.png",
                    role: "Burst Mage",
                    reasons: [
                        "Xerath out-ranges her significantly.",
                        "Annie has to walk up to use her spells.",
                        "Easy for Xerath to poke her down."
                    ]
                }
            ]
        },

        "Aurelion Sol": {
            tierS: [
                {
                    name: "Fizz",
                    icon: "../icons/Fizz.png",
                    role: "Assassin",
                    reasons: [
                        "Playful/Trickster (E) allows him to get on top of Aurelion Sol.",
                        "Can dodge his Q (Breath of Light) and R (The Heavens Fall).",
                        "Strong all-in burst damage."
                    ]
                },
                {
                    name: "Kassadin",
                    icon: "../icons/Kassadin.png",
                    role: "Assassin",
                    reasons: [
                        "His ult (R) allows him to blink onto Aurelion Sol.",
                        "His Q (Null Sphere) provides a magic shield.",
                        "Completely outscales him."
                    ]
                }
            ],
            tierA: [
                {
                    name: "Irelia",
                    icon: "../icons/Irelia.png",
                    role: "Fighter",
                    reasons: [
                        "Can dash (Q) through minions to get onto him.",
                        "Can dodge his abilities with her mobility.",
                        "Strong extended trades."
                    ]
                },
                {
                    name: "Ekko",
                    icon: "../icons/Ekko.png",
                    role: "Assassin",
                    reasons: [
                        "His dash (E) and blink (R) make him hard to hit.",
                        "Can easily get onto Aurelion Sol.",
                        "Strong burst damage."
                    ]
                }
            ],
            tierB: [
                {
                    name: "Yone",
                    icon: "../icons/Yone.png",
                    role: "Skirmisher",
                    reasons: [
                        "Can get onto him with his E (Soul Unbound) and R (Fate Sealed).",
                        "Can dodge his abilities with mobility.",
                        "Strong all-in."
                    ]
                }
            ],
            tierC: [
                {
                    name: "Syndra",
                    icon: "../icons/Syndra.png",
                    role: "Burst Mage",
                    reasons: [
                        "A skill matchup.",
                        "Syndra can interrupt his Q (Breath of Light) with her E.",
                        "Both are scaling mages."
                    ]
                }
            ],
            tierD: [
                {
                    name: "Lux",
                    icon: "../icons/Lux.png",
                    role: "Artillery Mage",
                    reasons: [
                        "Aurelion Sol can easily farm and outscale.",
                        "Lux is immobile and easy to hit with his E (Singularity).",
                        "Aurelion Sol is good against immobile mages."
                    ]
                }
            ]
        },

        "Aurora": {
            tierS: [
                {
                    name: "Fizz",
                    icon: "../icons/Fizz.png",
                    role: "Assassin",
                    reasons: [
                        "Can dodge her entire kit with Playful/Trickster (E).",
                        "Aurora is very vulnerable to all-ins.",
                        "Can easily kill her once he hits level 6."
                    ]
                },
                {
                    name: "Irelia",
                    icon: "../icons/Irelia.png",
                    role: "Fighter",
                    reasons: [
                        "Can dash onto Aurora repeatedly.",
                        "Aurora has no way to escape Irelia's all-in.",
                        "Strong sustained damage."
                    ]
                }
            ],
            tierA: [
                {
                    name: "Vex",
                    icon: "../icons/Vex.png",
                    role: "Burst Mage",
                    reasons: [
                        "Vex's passive (Gloom) 'Fears' Aurora when she uses her W (Hops & Bounds).",
                        "Neutralizes her main mobility tool.",
                        "Strong burst damage."
                    ]
                },
                {
                    name: "Vladimir",
                    icon: "../icons/Vladimir.png",
                    role: "Battle Mage",
                    reasons: [
                        "Can pool (W) to dodge her burst and ult (R).",
                        "Outsustains her poke in lane.",
                        "Scales better into the late game."
                    ]
                }
            ],
            tierB: [
                {
                    name: "Yasuo",
                    icon: "../icons/Yasuo.png",
                    role: "Skirmisher",
                    reasons: [
                        "Wind Wall (W) blocks her Q and E projectiles.",
                        "High mobility makes it hard for her to land spells.",
                        "A skill matchup, but favored for Yasuo."
                    ]
                }
            ],
            tierC: [
                {
                    name: "Ahri",
                    icon: "../icons/Ahri.png",
                    role: "Burst Mage",
                    reasons: [
                        "A skill matchup.",
                        "Both champions are highly mobile.",
                        "Ahri can follow her roams."
                    ]
                }
            ],
            tierD: [
                {
                    name: "Xerath",
                    icon: "../icons/Xerath.png",
                    role: "Artillery Mage",
                    reasons: [
                        "Xerath is immobile and an easy target for Aurora's all-in.",
                        "Aurora can dodge his poke with her W (Hops & Bounds).",
                        "Very hard for Xerath to land his E (Stun)."
                    ]
                }
            ]
        },

        "Ryze": {
            tierS: [
                {
                    name: "Aurelion Sol",
                    icon: "../icons/Aurelion Sol.png",
                    role: "Control Mage",
                    reasons: [
                        "Can easily farm and outscale Ryze.",
                        "Ryze has no way to stop his Q (Breath of Light).",
                        "Out-ranges him significantly."
                    ]
                },
                {
                    name: "Veigar",
                    icon: "../icons/Veigar.png",
                    role: "Burst Mage",
                    reasons: [
                        "Veigar's cage (E) makes it impossible for Ryze to move.",
                        "Ryze's short range forces him to walk into the cage.",
                        "Veigar outscales in burst damage."
                    ]
                }
            ],
            tierA: [
                {
                    name: "Qiyana",
                    icon: "../icons/Qiyana.png",
                    role: "Assassin",
                    reasons: [
                        "Ryze is immobile and an easy target for Qiyana's all-in.",
                        "Can easily roam and get fed.",
                        "Strong burst damage."
                    ]
                },
                {
                    name: "Irelia",
                    icon: "../icons/Irelia.png",
                    role: "Fighter",
                    reasons: [
                        "Can dash onto Ryze repeatedly.",
                        "Ryze has no escape from her all-in.",
                        "Strong sustained damage."
                    ]
                }
            ],
            tierB: [
                {
                    name: "Cassiopeia",
                    icon: "../icons/Cassiopeia.png",
                    role: "Battle Mage",
                    reasons: [
                        "Miasma (W) grounds Ryze, preventing him from moving.",
                        "Out-ranges him slightly.",
                        "Strong sustained damage."
                    ]
                }
            ],
            tierC: [
                {
                    name: "Syndra",
                    icon: "../icons/Syndra.png",
                    role: "Burst Mage",
                    reasons: [
                        "A skill matchup.",
                        "Both are scaling mages.",
                        "Syndra has more range and burst."
                    ]
                }
            ],
            tierD: [
                {
                    name: "Fizz",
                    icon: "../icons/Fizz.png",
                    role: "Assassin",
                    reasons: [
                        "Ryze's point-and-click W (Rune Prison) is a nightmare for Fizz.",
                        "Can't dodge it with his E (Playful/Trickster).",
                        "Ryze can survive his burst."
                    ]
                }
            ]
        },

        "Anivia": {
            tierS: [
                {
                    name: "Fizz",
                    icon: "../icons/Fizz.png",
                    role: "Assassin",
                    reasons: [
                        "Playful/Trickster (E) can dodge her Q (Stun) and R (Ult).",
                        "Can get over her W (Wall) easily.",
                        "Can kill her egg (Passive) easily."
                    ]
                },
                {
                    name: "Kassadin",
                    icon: "../icons/Kassadin.png",
                    role: "Assassin",
                    reasons: [
                        "His ult (R) allows him to blink over her wall and dodge her Q.",
                        "His Q (Null Sphere) provides a magic shield.",
                        "Can kill her egg (Passive) easily."
                    ]
                }
            ],
            tierA: [
                {
                    name: "Vel'Koz",
                    icon: "../icons/Vel'Koz.png",
                    role: "Artillery Mage",
                    reasons: [
                        "Out-ranges Anivia significantly.",
                        "Can poke her down from a safe distance.",
                        "His ult (R) can kill her egg (Passive) from far away."
                    ]
                },
                {
                    name: "Xerath",
                    icon: "../icons/Xerath.png",
                    role: "Artillery Mage",
                    reasons: [
                        "Out-ranges Anivia significantly.",
                        "Can poke her down from a safe distance.",
                        "Can kill her egg (Passive) easily."
                    ]
                }
            ],
            tierB: [
                {
                    name: "Swain",
                    icon: "../icons/Swain.png",
                    role: "Battle Mage",
                    reasons: [
                        "Can outsustain her poke.",
                        "His E (Nevermove) can pull her.",
                        "Tanky enough to survive her burst."
                    ]
                }
            ],
            tierC: [
                {
                    name: "Orianna",
                    icon: "../icons/Orianna.png",
                    role: "Control Mage",
                    reasons: [
                        "A pure skill matchup.",
                        "Both are control mages.",
                        "Orianna has better sustained damage."
                    ]
                }
            ],
            tierD: [
                {
                    name: "Vladimir",
                    icon: "../icons/Vladimir.png",
                    role: "Battle Mage",
                    reasons: [
                        "Anivia's burst and CC can lock down Vladimir.",
                        "Her wall (W) can block his escape.",
                        "Hard for Vladimir to get onto her."
                    ]
                }
            ]
        },

        "Vladimir": {
            tierS: [
                {
                    name: "Malzahar",
                    icon: "../icons/Malzahar.png",
                    role: "Control Mage",
                    reasons: [
                        "Malzahar's ult (R) suppresses Vladimir, even in his pool (W).",
                        "His W (Voidlings) and E (Malefic Visions) apply anti-heal.",
                        "Can push waves fast and roam."
                    ]
                },
                {
                    name: "Anivia",
                    icon: "../icons/Anivia.png",
                    role: "Control Mage",
                    reasons: [
                        "Anivia's burst and CC can lock down Vladimir.",
                        "Her wall (W) can block his escape.",
                        "Hard for Vladimir to get onto her."
                    ]
                }
            ],
            tierA: [
                {
                    name: "Cassiopeia",
                    icon: "../icons/Cassiopeia.png",
                    role: "Battle Mage",
                    reasons: [
                        "Miasma (W) grounds Vladimir, preventing him from using his pool (W).",
                        "Strong sustained damage.",
                        "Can kite him easily."
                    ]
                },
                {
                    name: "Swain",
                    icon: "../icons/Swain.png",
                    role: "Battle Mage",
                    reasons: [
                        "Can match his sustain.",
                        "His E (Nevermove) can pull Vladimir.",
                        "Builds anti-heal naturally."
                    ]
                }
            ],
            tierB: [
                {
                    name: "Ryze",
                    icon: "../icons/Ryze.png",
                    role: "Battle Mage",
                    reasons: [
                        "Ryze's point-and-click W (Rune Prison) can lock him down.",
                        "Strong sustained damage.",
                        "A skill matchup."
                    ]
                }
            ],
            tierC: [
                {
                    name: "Ahri",
                    icon: "../icons/Ahri.png",
                    role: "Burst Mage",
                    reasons: [
                        "Vladimir can pool (W) her Charm (E).",
                        "Can outsustain her poke.",
                        "A skill matchup."
                    ]
                }
            ],
            tierD: [
                {
                    name: "Katarina",
                    icon: "../icons/Katarina.png",
                    role: "Assassin",
                    reasons: [
                        "Vladimir can pool (W) her ultimate (R).",
                        "Can outsustain her poke.",
                        "Very hard for Katarina to kill."
                    ]
                }
            ]
        },

        "Twisted Fate": {
            tierS: [
                {
                    name: "Fizz",
                    icon: "../icons/Fizz.png",
                    role: "Assassin",
                    reasons: [
                        "Playful/Trickster (E) can dodge his Gold Card (W).",
                        "Can easily one-shot him at level 6.",
                        "Twisted Fate is immobile and an easy target."
                    ]
                },
                {
                    name: "Zed",
                    icon: "../icons/Zed.png",
                    role: "Assassin",
                    reasons: [
                        "Can ult (R) to dodge his Gold Card (W).",
                        "Can easily get onto him and one-shot him.",
                        "Twisted Fate is very squishy."
                    ]
                }
            ],
            tierA: [
                {
                    name: "Lissandra",
                    icon: "../icons/Lissandra.png",
                    role: "Burst Mage",
                    reasons: [
                        "Can root him if he tries to ult (R).",
                        "Can push waves just as fast.",
                        "Can follow his roams with her E (Glacial Path)."
                    ]
                },
                {
                    name: "Irelia",
                    icon: "../icons/Irelia.png",
                    role: "Fighter",
                    reasons: [
                        "Can dash (Q) onto him repeatedly.",
                        "Twisted Fate has no escape.",
                        "Very hard for him to land his Gold Card."
                    ]
                }
            ],
            tierB: [
                {
                    name: "Kassadin",
                    icon: "../icons/Kassadin.png",
                    role: "Assassin",
                    reasons: [
                        "His Q (Null Sphere) provides a magic shield.",
                        "His ult (R) allows him to dodge his Gold Card.",
                        "Outscales him significantly."
                    ]
                }
            ],
            tierC: [
                {
                    name: "Galio",
                    icon: "../icons/Galio.png",
                    role: "Warden",
                    reasons: [
                        "Galio can't stop his roams.",
                        "A skill matchup.",
                        "Twisted Fate can poke him down."
                    ]
                }
            ],
            tierD: [
                {
                    name: "Ryze",
                    icon: "../icons/Ryze.png",
                    role: "Battle Mage",
                    reasons: [
                        "Twisted Fate can easily set up ganks with his Gold Card.",
                        "Ryze is immobile.",
                        "Can match his wave clear."
                    ]
                }
            ]
        },

        "Akshan": {
            tierS: [
                {
                    name: "Irelia",
                    icon: "../icons/Irelia.png",
                    role: "Fighter",
                    reasons: [
                        "Irelia can dash (Q) onto him repeatedly.",
                        "Akshan has no escape from her all-in.",
                        "Strong sustained damage."
                    ]
                },
                {
                    name: "Yasuo",
                    icon: "../icons/Yasuo.png",
                    role: "Skirmisher",
                    reasons: [
                        "Wind Wall (W) blocks his Q (Avengerang) and R (Ult).",
                        "Can dash onto him easily.",
                        "Akshan is very squishy."
                    ]
                }
            ],
            tierA: [
                {
                    name: "Malphite",
                    icon: "../icons/Malphite.png",
                    role: "Tank",
                    reasons: [
                        "Builds armor, neutralizing Akshan's damage.",
                        "His ult (R) is unavoidable.",
                        "Can slow his attack speed (E)."
                    ]
                },
                {
                    name: "Talon",
                    icon: "../icons/Talon.png",
                    role: "Assassin",
                    reasons: [
                        "Can easily jump on Akshan with his Q (Noxian Diplomacy).",
                        "Strong burst damage.",
                        "Can match his roams."
                    ]
                }
            ],
            tierB: [
                {
                    name: "Twisted Fate",
                    icon: "../icons/Twisted Fate.png",
                    role: "Control Mage",
                    reasons: [
                        "Point-and-click Gold Card (W) stops Akshan's E (Grapple).",
                        "Can match his roams.",
                        "A skill matchup."
                    ]
                }
            ],
            tierC: [
                {
                    name: "Viktor",
                    icon: "../icons/Viktor.png",
                    role: "Control Mage",
                    reasons: [
                        "Akshan can easily dodge Viktor's abilities.",
                        "Can poke him down.",
                        "A skill matchup."
                    ]
                }
            ],
            tierD: [
                {
                    name: "LeBlanc",
                    icon: "../icons/LeBlanc.png",
                    role: "Burst Mage",
                    reasons: [
                        "Akshan's E (Grapple) can follow her W (Distortion).",
                        "Can poke her down.",
                        "Very good matchup for Akshan."
                    ]
                }
            ]
        },

        "Kassadin": {
            tierS: [
                {
                    name: "Zed",
                    icon: "../icons/Zed.png",
                    role: "Assassin",
                    reasons: [
                        "Strong early game AD damage.",
                        "Kassadin has no armor.",
                        "Can easily kill him before level 6."
                    ]
                },
                {
                    name: "Talon",
                    icon: "../icons/Talon.png",
                    role: "Assassin",
                    reasons: [
                        "Strong early game AD damage.",
                        "Can easily one-shot him.",
                        "Kassadin has no escape before level 6."
                    ]
                }
            ],
            tierA: [
                {
                    name: "Pantheon",
                    icon: "../icons/Pantheon.png",
                    role: "Fighter",
                    reasons: [
                        "Strong early game AD damage.",
                        "Point-and-click stun (W).",
                        "Can easily kill him."
                    ]
                },
                {
                    name: "Qiyana",
                    icon: "../icons/Qiyana.png",
                    role: "Assassin",
                    reasons: [
                        "Strong early game AD damage.",
                        "Can easily all-in him.",
                        "Kassadin is very squishy."
                    ]
                }
            ],
            tierB: [
                {
                    name: "Jayce",
                    icon: "../icons/Jayce.png",
                    role: "Fighter",
                    reasons: [
                        "Strong early game AD damage.",
                        "Can poke him down from a distance.",
                        "A skill matchup."
                    ]
                }
            ],
            tierC: [
                {
                    name: "Ahri",
                    icon: "../icons/Ahri.png",
                    role: "Burst Mage",
                    reasons: [
                        "Kassadin's Q (Null Sphere) provides a magic shield.",
                        "Can dodge her Charm (E) with his ult (R).",
                        "A skill matchup."
                    ]
                }
            ],
            tierD: [
                {
                    name: "LeBlanc",
                    icon: "../icons/LeBlanc.png",
                    role: "Burst Mage",
                    reasons: [
                        "Kassadin's Q (Null Sphere) interrupts her W (Distortion).",
                        "His passive magic damage reduction is very strong.",
                        "Completely outscales her."
                    ]
                }
            ]
        },

        "Qiyana": {
            tierS: [
                {
                    name: "Galio",
                    icon: "../icons/Galio.png",
                    role: "Warden",
                    reasons: [
                        "Taunt (W) is a large AoE that hits her.",
                        "Builds armor and MR, nullifying her burst.",
                        "His E (Justice Punch) can interrupt her."
                    ]
                },
                {
                    name: "Lissandra",
                    icon: "../icons/Lissandra.png",
                    role: "Burst Mage",
                    reasons: [
                        "Point-and-click W and R provide unavoidable CC.",
                        "Can root her in place.",
                        "Can ult herself to survive her burst."
                    ]
                }
            ],
            tierA: [
                {
                    name: "Vex",
                    icon: "../icons/Vex.png",
                    role: "Burst Mage",
                    reasons: [
                        "Vex's passive (Gloom) 'Fears' Qiyana when she uses her E (Audacity).",
                        "Neutralizes her main engage tool.",
                        "Strong burst damage."
                    ]
                },
                {
                    name: "Renekton",
                    icon: "../icons/Renekton.png",
                    role: "Fighter",
                    reasons: [
                        "Point-and-click W stun.",
                        "Strong early game trades.",
                        "Tanky enough to survive her burst."
                    ]
                }
            ],
            tierB: [
                {
                    name: "Ahri",
                    icon: "../icons/Ahri.png",
                    role: "Burst Mage",
                    reasons: [
                        "Her mobility (R) allows her to dodge Qiyana's ult (R).",
                        "Her Charm (E) can interrupt Qiyana's engage.",
                        "A skill matchup."
                    ]
                }
            ],
            tierC: [
                {
                    name: "Kassadin",
                    icon: "../icons/Kassadin.png",
                    role: "Assassin",
                    reasons: [
                        "Qiyana's strong early game AD damage counters Kassadin.",
                        "Kassadin is very squishy.",
                        "A skill matchup."
                    ]
                }
            ],
            tierD: [
                {
                    name: "Aurelion Sol",
                    icon: "../icons/Aurelion Sol.png",
                    role: "Control Mage",
                    reasons: [
                        "Immobile and squishy.",
                        "Easy target for Qiyana's all-in.",
                        "Qiyana can easily roam and get fed."
                    ]
                }
            ]
        },

        "Annie": {
            tierS: [
                {
                    name: "Aurelion Sol",
                    icon: "../icons/Aurelion Sol.png",
                    role: "Control Mage",
                    reasons: [
                        "Can easily farm and outscale Annie.",
                        "Out-ranges her significantly.",
                        "Annie has no way to stop his Q (Breath of Light)."
                    ]
                },
                {
                    name: "Xerath",
                    icon: "../icons/Xerath.png",
                    role: "Artillery Mage",
                    reasons: [
                        "Out-ranges Annie significantly.",
                        "Can poke her down from a safe distance.",
                        "Annie is immobile and an easy target."
                    ]
                }
            ],
            tierA: [
                {
                    name: "Lux",
                    icon: "../icons/Lux.png",
                    role: "Artillery Mage",
                    reasons: [
                        "Out-ranges Annie.",
                        "Can poke her down safely.",
                        "A skill matchup, but favored for Lux."
                    ]
                },
                {
                    name: "Vladimir",
                    icon: "../icons/Vladimir.png",
                    role: "Battle Mage",
                    reasons: [
                        "Can pool (W) her stun and ult (R).",
                        "Outsustains her poke.",
                        "Scales better."
                    ]
                }
            ],
            tierB: [
                {
                    name: "Kayle",
                    icon: "../icons/Kayle.png",
                    role: "Marksman",
                    reasons: [
                        "Can ult (R) herself or an ally to block Annie's burst.",
                        "Outscales her significantly.",
                        "Can farm safely."
                    ]
                }
            ],
            tierC: [
                {
                    name: "Ahri",
                    icon: "../icons/Ahri.png",
                    role: "Burst Mage",
                    reasons: [
                        "A skill matchup.",
                        "Annie's point-and-click stun is hard for Ahri.",
                        "Ahri has more mobility."
                    ]
                }
            ],
            tierD: [
                {
                    name: "Fizz",
                    icon: "../icons/Fizz.png",
                    role: "Assassin",
                    reasons: [
                        "Annie's point-and-click stun (Q) is a nightmare for Fizz.",
                        "Can't dodge it with his E (Playful/Trickster).",
                        "Annie can survive his burst."
                    ]
                }
            ]
        },

        "Zoe": {
            tierS: [
                {
                    name: "Fizz",
                    icon: "../icons/Fizz.png",
                    role: "Assassin",
                    reasons: [
                        "Playful/Trickster (E) can dodge her E (Sleepy Trouble Bubble).",
                        "Can easily one-shot her at level 6.",
                        "Zoe is immobile and an easy target."
                    ]
                },
                {
                    name: "Yasuo",
                    icon: "../icons/Yasuo.png",
                    role: "Skirmisher",
                    reasons: [
                        "Wind Wall (W) blocks her Q (Paddle Star) and E (Bubble).",
                        "High mobility to dash through minions.",
                        "Very hard for Zoe to land anything."
                    ]
                }
            ],
            tierA: [
                {
                    name: "Irelia",
                    icon: "../icons/Irelia.png",
                    role: "Fighter",
                    reasons: [
                        "Can dash (Q) onto her repeatedly.",
                        "Zoe has no escape.",
                        "Can dodge her E (Bubble) with her mobility."
                    ]
                },
                {
                    name: "Zed",
                    icon: "../icons/Zed.png",
                    role: "Assassin",
                    reasons: [
                        "Can ult (R) to dodge her E (Bubble).",
                        "Can easily get onto her and one-shot her.",
                        "Zoe is very squishy."
                    ]
                }
            ],
            tierB: [
                {
                    name: "Kassadin",
                    icon: "../icons/Kassadin.png",
                    role: "Assassin",
                    reasons: [
                        "His Q (Null Sphere) provides a magic shield.",
                        "His ult (R) allows him to dodge her E (Bubble).",
                        "Outscales her significantly."
                    ]
                }
            ],
            tierC: [
                {
                    name: "Ahri",
                    icon: "../icons/Ahri.png",
                    role: "Burst Mage",
                    reasons: [
                        "A skill matchup.",
                        "Ahri has more mobility.",
                        "Zoe can one-shot her if she lands E (Bubble)."
                    ]
                }
            ],
            tierD: [
                {
                    name: "Lux",
                    icon: "../icons/Lux.png",
                    role: "Artillery Mage",
                    reasons: [
                        "Zoe can easily dodge Lux's abilities.",
                        "Can one-shot her.",
                        "A skill matchup, but favored for Zoe."
                    ]
                }
            ]
        },

        "Irelia": {
            tierS: [
                {
                    name: "Renekton",
                    icon: "../icons/Renekton.png",
                    role: "Fighter",
                    reasons: [
                        "Point-and-click W (Stun) interrupts her Q (Bladesurge).",
                        "Strong early game trades.",
                        "Tanky enough to survive her burst."
                    ]
                },
                {
                    name: "Jax",
                    icon: "../icons/Jax.png",
                    role: "Fighter",
                    reasons: [
                        "His E (Counter Strike) blocks her auto attacks.",
                        "Strong sustained damage.",
                        "Outscales her."
                    ]
                }
            ],
            tierA: [
                {
                    name: "Vex",
                    icon: "../icons/Vex.png",
                    role: "Burst Mage",
                    reasons: [
                        "Vex's passive (Gloom) 'Fears' Irelia when she uses her Q (Bladesurge).",
                        "Neutralizes her main mobility tool.",
                        "Strong burst damage."
                    ]
                },
                {
                    name: "Galio",
                    icon: "../icons/Galio.png",
                    role: "Warden",
                    reasons: [
                        "Taunt (W) is a large AoE that hits her.",
                        "Builds armor and MR.",
                        "His E (Justice Punch) can interrupt her."
                    ]
                }
            ],
            tierB: [
                {
                    name: "Tryndamere",
                    icon: "../icons/Tryndamere.png",
                    role: "Fighter",
                    reasons: [
                        "His ult (R) allows him to survive her burst.",
                        "Strong sustained damage.",
                        "A skill matchup."
                    ]
                }
            ],
            tierC: [
                {
                    name: "Ahri",
                    icon: "../icons/Ahri.png",
                    role: "Burst Mage",
                    reasons: [
                        "A skill matchup.",
                        "Ahri's mobility (R) allows her to dodge Irelia's ult.",
                        "Irelia can dodge her Charm (E)."
                    ]
                }
            ],
            tierD: [
                {
                    name: "Xerath",
                    icon: "../icons/Xerath.png",
                    role: "Artillery Mage",
                    reasons: [
                        "Immobile and squishy.",
                        "Easy target for Irelia's all-in.",
                        "Very hard for Xerath to land his E (Stun)."
                    ]
                }
            ]
        },

        "Diana": {
            tierS: [
                { 
                    name: "Galio", 
                    icon: "../icons/Galio.png", 
                    role: "Warden",
                    reasons: [
                        "Magic shield and MR build counters her completely.",
                        "Taunt disrupts her engage combo.",
                        "Can match her push and roam."
                    ]
                },
                { 
                    name: "Mordekaiser", 
                    icon: "../icons/Mordekaiser.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Wins the melee stat check every time.",
                        "His shield absorbs her burst.",
                        "Ult removes her from teamfights."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Swain", 
                    icon: "../icons/Swain.png", 
                    role: "Battle Mage",
                    reasons: [
                        "Outsustains her burst with his ultimate.",
                        "Tanky build path survives her combo.",
                        "Can root her when she engages."
                    ]
                },
                { 
                    name: "Sett", 
                    icon: "../icons/Sett.png", 
                    role: "Fighter",
                    reasons: [
                        "Haymaker (W) shield completely negates her burst.",
                        "Wins prolonged melee trades.",
                        "Can ult her away from his team."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Yasuo", 
                    icon: "../icons/Yasuo.png", 
                    role: "Skirmisher",
                    reasons: [
                        "Wind Wall blocks her Q, preventing resets.",
                        "Skill matchup favoring Yasuo in extended trades.",
                        "High mobility to dodge her Q."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Sylas", 
                    icon: "../icons/Sylas.png", 
                    role: "Battle Mage",
                    reasons: [
                        "Skill matchup.",
                        "Both want to dive and burst.",
                        "Sylas can steal her ult for a big impact."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Lux", 
                    icon: "../icons/Lux.png", 
                    role: "Artillery Mage",
                    reasons: [
                        "Extremely vulnerable to Diana's all-in.",
                        "Cannot stop Diana once she jumps.",
                        "One of the easiest matchups for Diana."
                    ]
                }
            ]
        },

        "Morgana": {
            tierS: [
                { 
                    name: "Zed", 
                    icon: "../icons/Zed.png", 
                    role: "Assassin",
                    reasons: [
                        "Black Shield does not block physical damage.",
                        "Can easily dodge her Q binding.",
                        "One-shots her through her shield."
                    ]
                },
                { 
                    name: "Talon", 
                    icon: "../icons/Talon.png", 
                    role: "Assassin",
                    reasons: [
                        "Physical damage ignores her Black Shield.",
                        "High mobility to avoid her binding.",
                        "Can roam better than her."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Xerath", 
                    icon: "../icons/Xerath.png", 
                    role: "Artillery Mage",
                    reasons: [
                        "Outranges her pool farming range.",
                        "Breaks Black Shield easily with poke.",
                        "Never has to get in range of her ult."
                    ]
                },
                { 
                    name: "Vel'Koz", 
                    icon: "../icons/Vel'Koz.png", 
                    role: "Artillery Mage",
                    reasons: [
                        "True damage ignores her shield.",
                        "Extreme range advantage.",
                        "Can clear waves just as fast."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Yasuo", 
                    icon: "../icons/Yasuo.png", 
                    role: "Skirmisher",
                    reasons: [
                        "Wind Wall blocks her binding (Q).",
                        "Mixed damage (physical) hurts her.",
                        "Can dash out of her pool."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Lux", 
                    icon: "../icons/Lux.png", 
                    role: "Artillery Mage",
                    reasons: [
                        "Morgana can shield Lux's binding.",
                        "Both just want to shove and farm.",
                        "Very stalemate lane."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Lissandra", 
                    icon: "../icons/Lissandra.png", 
                    role: "Burst Mage",
                    reasons: [
                        "Black Shield blocks Lissandra's entire combo.",
                        "Cannot engage on Morgana.",
                        "Gets out-pushed and out-scaled."
                    ]
                }
            ]
        }
    },

    // General strategy recommendations for each enemy midlaner
    counterStrategies: {
        "Ahri": "High mobility champs (to dodge E) and champs with strong, unavoidable all-in (like point-and-click CC) work best. Push her in to prevent roams.",
        "Zed": "Champions who can survive his burst (tanks, shields) or build an early <strong>Zhonya's Hourglass</strong>. Strong wave clear can keep him under tower, preventing roams.",
        "Yasuo": "Point-and-click CC (to stop his dash) and champions who don't rely on projectiles (which he can block with <strong>Wind Wall</strong>) are strong. Poke him down when his passive shield is gone.",
        "Katarina": "<strong>Instant, hard CC</strong> (stuns, suppresses, knock-ups) is mandatory to stop her ultimate. Champions with strong wave clear can shove her in and prevent her from roaming.",
        "Lux": "Highly mobile assassins (<strong>Zed, Fizz, Akali</strong>) are her worst nightmare. She is very immobile and squishy. Get on top of her and she dies.",
        "Fizz": "Champions with strong, non-skillshot CC (like <strong>Lissandra R</strong> or <strong>Malzahar R</strong>) can lock him down. Avoid picking mages who rely on skillshots he can dodge with E.",
        "Veigar": "Mobile champions (<strong>Yasuo, Zed, Ahri, LeBlanc</strong>) can easily dodge his abilities and escape his cage. Champions with long-range poke can abuse him early.",
        "Syndra": "Patch 25.24 buffed her late game but nerfed early Q damage. <strong>Abuse her weak early game</strong> with aggressive assassins. Long-range mages can also farm safely against her.",
        "Akali": "Champions with <strong>point-and-click CC</strong> (Lissandra, Malzahar) or champs that reveal stealth (Twisted Fate R) are effective. Do not fight her in her shroud.",
        "Yone": "Patch 25.24 buffs make him a premier threat. Champions with strong early trades (<strong>Renekton, Pantheon</strong>) are essential to shut him down before he scales. Hard CC is required.",
        "Viktor": "Adjusted in 25.24 for smoother scaling. Punish him before his <strong>first Hex Core upgrade</strong>. Long-range poke (Xerath) or hard engage assassins are best.",
        "Orianna": "Immobile and vulnerable to ganks and all-ins. Assassins (<strong>Zed, Fizz</strong>) and long-range poke (<strong>Lux, Xerath</strong>) work very well.",
        "LeBlanc": "Nerfed in 25.24 (HP/Armor). She is squishier than ever. Champions with <strong>point-and-click CC</strong> or undodgeable damage (Annie, Malzahar) can one-shot her if she missteps.",
        "Mel": "Mel is a projectile-based mage. Her <strong>W (Rebuttal)</strong> can reflect projectiles, so avoid using key CC abilities on it. Assassins (<strong>Fizz, Akali, Zed</strong>) who can dodge her E (Solar Snare) and all-in her are her biggest counters.",
        "Malzahar": "<strong>Quicksilver Sash (QSS)</strong> is a mandatory purchase to cleanse his ultimate (R). Break his passive shield with a single-target spell before engaging. Do not stand in his E (Malefic Visions) minion wave.",
        "Sylas": "Champions with <strong>low-impact ultimates</strong> (Vex, Xerath) are good. Build <strong>anti-heal (Grievous Wounds)</strong> to counter his W (Kingslayer) heal. Stand behind minions to avoid his E (Abduct).",
        "Galio": "Champions with <strong>dashes</strong> (Ahri, LeBlanc) or <strong>grounding effects</strong> (Cassiopeia W) work well. Poke him from a distance. Do not group up, as his R (Hero's Entrance) is a large AoE.",
        "Xerath": "He is extremely immobile. <strong>Assassins (Fizz, Zed, Talon)</strong> can easily get on top of him and one-shot him. Dodge his E (Stun) and you are safe to engage.",
        "Aurelion Sol": "He is a scaling mage who is weak early. <strong>Assassins (Fizz, Kassadin, Irelia)</strong> can get on top of him and kill him. CC (Crowd Control) is essential to stop his Q (Breath of Light).",
        "Aurora": "Aurora is a mobile mage who is vulnerable to <strong>all-in burst</strong>. Champions with <strong>point-and-click CC</strong> or <strong>grounding effects</strong> (Fizz, Vex, Cassiopeia) can lock her down. Build magic resistance.",
        "Ryze": "Ryze is very weak early and scales into a late-game monster. <strong>End the game quickly</strong>. Champions with <strong>long-range poke</strong> (Xerath, Vel'Koz) or <strong>strong all-ins</strong> (Qiyana, Irelia) can abuse him.",
        "Anivia": "<strong>Mobile assassins (Fizz, Kassadin)</strong> can dodge her Q (Stun) and get over her W (Wall). Long-range mages (Xerath, Vel'Koz) can poke her down and kill her egg (Passive) from a safe distance.",
        "Vladimir": "<strong>Anti-heal (Grievous Wounds)</strong> is mandatory. Champions with <strong>point-and-click CC</strong> (Malzahar, Anivia) or <strong>grounding effects</strong> (Cassiopeia W) can lock him down and prevent him from pooling (W).",
        "Twisted Fate": "He is very weak early and immobile. <strong>Assassins (Fizz, Zed, LeBlanc)</strong> can easily kill him. Push him under his tower to prevent him from using his R (Destiny) to roam.",
        "Akshan": "Nerfed in 25.24 (HP/Q CD). He is more vulnerable to all-ins. <strong>Fighters (Irelia, Yasuo)</strong> who can stick to him and block his swing will dominate him.",
        "Kassadin": "He is extremely weak early game, especially against <strong>AD champions (Zed, Talon, Pantheon)</strong>. Punish him heavily before he reaches level 6. End the game before he reaches level 16.",
        "Qiyana": "She is an AD assassin. <strong>Do not fight her near walls or in the river</strong>. Champions with <strong>point-and-click CC</strong> (Galio, Lissandra) or <strong>tanks</strong> can survive her burst. Respect her level 3 all-in.",
        "Annie": "She is a burst mage with a <strong>point-and-click stun</strong>. <strong>Long-range mages (Xerath, Lux)</strong> can poke her down from a safe distance. Do not group up for her R (Tibbers).",
        "Zoe": "Her entire kit revolves around landing her E (Sleepy Trouble Bubble). <strong>Mobile champions (Fizz, Yasuo, Irelia)</strong> can dodge it easily. Stand behind minions to block the bubble.",
        "Irelia": "She is a fighter who thrives on <strong>fully stacked passive</strong>. Do not fight her when her passive is stacked. <strong>Champions with point-and-click CC (Renekton, Vex, Galio)</strong> can interrupt her Q (Bladesurge).",
        "Diana": "Top tier in 25.24. She wants to dive and burst. <strong>Anti-Burst Tanks (Galio)</strong> or <strong>Bruisers (Mordekaiser/Sett)</strong> counter her hard. Dodge her Q (Crescent Strike) to prevent her dash reset.",
        "Morgana": "A strong counter-pick to CC-heavy teams. Pick <strong>AD Assassins (Zed, Talon)</strong> to render her Black Shield useless. She struggles against long-range poke that breaks her shield."
    }
};