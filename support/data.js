// Champion Data with Synergies based on professional guides and meta analysis
// 
// PATCH 25.24 UPDATE (Season 15):
// - Thresh buffs (Armor/Q CD) have elevated him to S+ Tier. He is now S-Tier with almost every ADC.
// - Lulu remains S-Tier, dominating with Hypercarries.
// - Ashe and Jinx received nerfs but remain top-tier picks.
//
// HOW TO ADD NEW SUPPORTS:
// Simply add more support objects to any tier array with this format:
// { name: "SupportName", icon: "../icons/SupportName.png", role: "Role Type", reasons: ["Reason 1", "Reason 2", "Reason 3"] }
//
// HOW TO ADD NEW ADCs:
// 1. Add to the adcs array: { name: "NewADC", icon: "../icons/NewADC.png" }
// 2. Add a new section in synergies: "NewADC": { tierS: [...], tierA: [...], etc. }
//
const championData = {
    adcs: [
        { name: "Ashe", icon: "../icons/Ashe.png" },
        { name: "Caitlyn", icon: "../icons/Caitlyn.png" },
        { name: "Draven", icon: "../icons/Draven.png" },
        { name: "Ezreal", icon: "../icons/Ezreal.png" },
        { name: "Jhin", icon: "../icons/Jhin.png" },
        { name: "Jinx", icon: "../icons/Jinx.png" },
        { name: "Kai'Sa", icon: "../icons/Kai'Sa.png" },
        { name: "Kalista", icon: "../icons/Kalista.png" },
        { name: "Kog'Maw", icon: "../icons/Kog'Maw.png" },
        { name: "Lucian", icon: "../icons/Lucian.png" },
        { name: "Miss Fortune", icon: "../icons/Miss Fortune.png" },
        { name: "Samira", icon: "../icons/Samira.png" },
        { name: "Sivir", icon: "../icons/Sivir.png" },
        { name: "Tristana", icon: "../icons/Tristana.png" },
        { name: "Twitch", icon: "../icons/Twitch.png" },
        { name: "Vayne", icon: "../icons/Vayne.png" },
        { name: "Varus", icon: "../icons/Varus.png" },
        { name: "Xayah", icon: "../icons/Xayah.png" },
        { name: "Aphelios", icon: "../icons/Aphelios.png" },
        { name: "Zeri", icon: "../icons/Zeri.png" },
        { name: "Nilah", icon: "../icons/Nilah.png" },
        { name: "Smolder", icon: "../icons/Smolder.png" },
        { name: "Ziggs", icon: "../icons/Ziggs.png" },
        { name: "Seraphine", icon: "../icons/Seraphine.png" },
        { name: "Yunara", icon: "../icons/Yunara.png" }
    ],

    // Support synergies organized by tier for each ADC
    synergies: {
        "Ashe": {
            tierS: [
                { 
                    name: "Thresh", 
                    icon: "../icons/Thresh.png", 
                    role: "Hook Support",
                    reasons: [
                        "Patch 25.24 buffs make Thresh the premier lockdown partner for Ashe",
                        "Thresh hook followed by Ashe slows prevents any escape",
                        "Lantern offers Ashe safety, covering her lack of mobility"
                    ]
                },
                { 
                    name: "Zyra", 
                    icon: "../icons/Zyra.png", 
                    role: "Mage Support",
                    reasons: [
                        "Ashe's slow + Zyra's root creates extended CC chains for easy kills",
                        "Both excel at long-range poke and zone control in lane",
                        "Ultimate synergy: Ashe arrow into Zyra ultimate is devastating"
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Leona", 
                    icon: "../icons/Leona.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Ashe's vision with E helps Leona set up perfect engages",
                        "Chain CC locks down targets for guaranteed kills",
                        "Strong all-in potential at level 6 with both ultimates"
                    ]
                },
                { 
                    name: "Brand", 
                    icon: "../icons/Brand.png", 
                    role: "Mage Support",
                    reasons: [
                        "Ashe's slows make Brand's skillshots extremely easy to land",
                        "High burst damage combo can delete enemies caught by Ashe's ultimate",
                        "Strong poke synergy dominates lane phase"
                    ]
                },
                { 
                    name: "Nami", 
                    icon: "../icons/Nami.png", 
                    role: "Enchanter",
                    reasons: [
                        "Nami's E enhances Ashe's already strong kiting and slows",
                        "Healing sustains Ashe through poke-heavy lanes",
                        "Bubble + Ashe slow makes landing CC very reliable"
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Nautilus", 
                    icon: "../icons/Nautilus.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Point-and-click CC chains well with Ashe's crowd control",
                        "Protects Ashe with strong frontline presence",
                        "Good engage tools to start fights Ashe can follow up on"
                    ]
                },
                { 
                    name: "Morgana", 
                    icon: "../icons/Morgana.png", 
                    role: "Control Mage",
                    reasons: [
                        "Black Shield protects Ashe from enemy engage",
                        "Long snare duration pairs well with Ashe's follow-up damage",
                        "Both have strong pick potential with long-range abilities"
                    ]
                },
                { 
                    name: "Lux", 
                    icon: "../icons/Lux.png", 
                    role: "Mage Support",
                    reasons: [
                        "Strong poke and burst damage from range",
                        "CC chains work well together for picks",
                        "Both excel at sieging and defending objectives"
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Alistar", 
                    icon: "../icons/Alistar.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Can engage for Ashe but lacks strong follow-up synergy",
                        "Provides decent peel but better options exist",
                        "Works but doesn't maximize Ashe's strengths"
                    ]
                },
                { 
                    name: "Braum", 
                    icon: "../icons/Braum.png", 
                    role: "Tank Support",
                    reasons: [
                        "Good defensive synergy but limited offensive potential",
                        "Ashe can help proc Braum passive from range",
                        "Better with more aggressive ADCs"
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Yuumi", 
                    icon: "../icons/Yuumi.png", 
                    role: "Enchanter",
                    reasons: [
                        "Provides minimal lane presence with immobile Ashe",
                        "Ashe needs a more proactive support early game",
                        "Doesn't help Ashe's weak laning phase"
                    ]
                },
                { 
                    name: "Sona", 
                    icon: "../icons/Sona.png", 
                    role: "Enchanter",
                    reasons: [
                        "Both are too passive and vulnerable to ganks",
                        "Lacks the engage tools Ashe benefits from",
                        "Better supports for Ashe's utility-focused playstyle"
                    ]
                }
            ]
        },

        "Caitlyn": {
            tierS: [
                { 
                    name: "Morgana", 
                    icon: "../icons/Morgana.png", 
                    role: "Control Mage",
                    reasons: [
                        "Dark Binding into Caitlyn trap creates up to 5 seconds of CC",
                        "Black Shield protects Caitlyn allowing safe aggressive trades",
                        "Excellent zone control with traps and Morgana's W pool"
                    ]
                },
                { 
                    name: "Lux", 
                    icon: "../icons/Lux.png", 
                    role: "Mage Support",
                    reasons: [
                        "Dominant poke lane with extreme range advantage",
                        "CC chains allow Caitlyn to land multiple headshots",
                        "Both can execute low health targets from safe distance"
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Thresh", 
                    icon: "../icons/Thresh.png", 
                    role: "Hook Support",
                    reasons: [
                        "Buffed Q cooldown allows frequent hook attempts for trap setups",
                        "Great pick potential utilizing Caitlyn's long range",
                        "Flay can protect Caitlyn from assassins and divers"
                    ]
                },
                { 
                    name: "Zyra", 
                    icon: "../icons/Zyra.png", 
                    role: "Mage Support",
                    reasons: [
                        "Root setup allows easy trap placement and headshots",
                        "Strong poke synergy controls lane from range",
                        "Plants block skillshots protecting Caitlyn"
                    ]
                },
                { 
                    name: "Karma", 
                    icon: "../icons/Karma.png", 
                    role: "Enchanter",
                    reasons: [
                        "Empowered Q poke plus Caitlyn's range dominates lane",
                        "Shield and movement speed help Caitlyn kite effectively",
                        "Strong early game pressure matches Caitlyn's strengths"
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Leona", 
                    icon: "../icons/Leona.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Strong all-in but Caitlyn prefers poke playstyle",
                        "Works but doesn't maximize Caitlyn's range advantage",
                        "Better with shorter range ADCs who want to fight"
                    ]
                },
                { 
                    name: "Nautilus", 
                    icon: "../icons/Nautilus.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Provides engage but Caitlyn excels at sieging not diving",
                        "CC is good but doesn't synergize with trap mechanics",
                        "Functional but not optimal for Caitlyn's playstyle"
                    ]
                },
                { 
                    name: "Nami", 
                    icon: "../icons/Nami.png", 
                    role: "Enchanter",
                    reasons: [
                        "Decent sustain and poke but lacks trap synergy",
                        "Bubble can set up headshots but inconsistent",
                        "Better enchanters exist for Caitlyn"
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Alistar", 
                    icon: "../icons/Alistar.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Playstyles clash - Alistar wants to engage, Caitlyn wants to poke",
                        "Doesn't help Caitlyn use her range advantage",
                        "Works in coordinated play but awkward in solo queue"
                    ]
                },
                { 
                    name: "Braum", 
                    icon: "../icons/Braum.png", 
                    role: "Tank Support",
                    reasons: [
                        "Too passive for Caitlyn's lane dominant style",
                        "Headshots don't proc passive quickly enough",
                        "Better with auto-attack focused ADCs"
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Yuumi", 
                    icon: "../icons/Yuumi.png", 
                    role: "Enchanter",
                    reasons: [
                        "Wastes Caitlyn's strong laning phase completely",
                        "Caitlyn needs a support who can help set up traps",
                        "Zero synergy with Caitlyn's strengths"
                    ]
                },
                { 
                    name: "Taric", 
                    icon: "../icons/Taric.png", 
                    role: "Tank Support",
                    reasons: [
                        "Needs to be in melee range, Caitlyn is maximum range",
                        "Playstyles completely incompatible",
                        "One of the worst pairings for Caitlyn"
                    ]
                }
            ]
        },

        "Ezreal": {
            tierS: [
                { 
                    name: "Karma", 
                    icon: "../icons/Karma.png", 
                    role: "Enchanter",
                    reasons: [
                        "Empowered Q + Ezreal Q creates oppressive poke damage",
                        "Shield and speed boost enhance Ezreal's already strong kiting",
                        "Both scale well and dominate through poke and mobility"
                    ]
                },
                { 
                    name: "Lux", 
                    icon: "../icons/Lux.png", 
                    role: "Mage Support",
                    reasons: [
                        "Double skillshot poke from safe distance is extremely strong",
                        "Similar range and playstyle creates natural synergy",
                        "Both ultimates can execute low health targets globally"
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Nami", 
                    icon: "../icons/Nami.png", 
                    role: "Enchanter",
                    reasons: [
                        "E buff makes Ezreal's Qs hurt even more with extra damage",
                        "Healing sustains Ezreal through poke lanes",
                        "Strong scaling duo with poke and sustain"
                    ]
                },
                { 
                    name: "Yuumi", 
                    icon: "../icons/Yuumi.png", 
                    role: "Enchanter",
                    reasons: [
                        "Ezreal's safety and mobility makes Yuumi actually viable",
                        "Poke amplification and healing scale well together",
                        "Can roam together or split for map pressure"
                    ]
                },
                { 
                    name: "Zilean", 
                    icon: "../icons/Zilean.png", 
                    role: "Enchanter",
                    reasons: [
                        "Bombs + Ezreal poke creates strong harass pattern",
                        "Speed boost enhances Ezreal's kiting and positioning",
                        "Revive gives Ezreal room for aggressive plays"
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Thresh", 
                    icon: "../icons/Thresh.png", 
                    role: "Hook Support",
                    reasons: [
                        "Lantern is great for Ezreal's aggressive positioning",
                        "Hook provides picks but Ezreal prefers poke",
                        "Stronger in 25.24 due to buffs, moving up from C-Tier"
                    ]
                },
                { 
                    name: "Morgana", 
                    icon: "../icons/Morgana.png", 
                    role: "Control Mage",
                    reasons: [
                        "Black Shield is good but Ezreal has natural safety",
                        "Snare helps but Ezreal doesn't need much setup",
                        "Works but not optimal for Ezreal's playstyle"
                    ]
                },
                { 
                    name: "Senna", 
                    icon: "../icons/Senna.png", 
                    role: "Marksman Support",
                    reasons: [
                        "Double ADC comp with good scaling",
                        "Both prefer farming to fighting early",
                        "Weak laning phase but strong late game"
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Leona", 
                    icon: "../icons/Leona.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Playstyles don't match - Leona wants to dive, Ezreal wants to poke",
                        "Ezreal can't follow up on Leona engages effectively",
                        "Better with auto-attack ADCs"
                    ]
                },
                { 
                    name: "Nautilus", 
                    icon: "../icons/Nautilus.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Engage tools don't synergize with Ezreal's kiting playstyle",
                        "Ezreal prefers poke over all-ins",
                        "Awkward pairing in most situations"
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Alistar", 
                    icon: "../icons/Alistar.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Completely incompatible playstyles",
                        "Alistar engages while Ezreal wants to stay back and poke",
                        "Zero synergy between their kits"
                    ]
                },
                { 
                    name: "Braum", 
                    icon: "../icons/Braum.png", 
                    role: "Tank Support",
                    reasons: [
                        "Ezreal's abilities don't proc Braum passive quickly",
                        "Too defensive for Ezreal's poke-heavy style",
                        "Better with rapid auto-attack ADCs"
                    ]
                }
            ]
        },

        "Jhin": {
            tierS: [
                { 
                    name: "Thresh", 
                    icon: "../icons/Thresh.png", 
                    role: "Hook Support",
                    reasons: [
                        "Hook into Jhin W root creates extended lockdown for 4th shot",
                        "Flay and box work perfectly with Jhin's trap and grenade",
                        "Buffed Thresh armor makes this lane even more oppressive"
                    ]
                },
                { 
                    name: "Pantheon", 
                    icon: "../icons/Pantheon.png", 
                    role: "Fighter Support",
                    reasons: [
                        "Aggressive stun setup guarantees Jhin's 4th shot damage",
                        "Strong early kill pressure matches Jhin's power spikes",
                        "Incredible roaming synergy with both ultimates"
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Bard", 
                    icon: "../icons/Bard.png", 
                    role: "Roaming Support",
                    reasons: [
                        "Q stun sets up perfect 4th shots and abilities",
                        "Roaming playstyle matches Jhin's utility focus",
                        "Ultimate synergizes for team fight setup"
                    ]
                },
                { 
                    name: "Morgana", 
                    icon: "../icons/Morgana.png", 
                    role: "Control Mage",
                    reasons: [
                        "Long snare duration allows Jhin to land full combo",
                        "Black Shield protects immobile Jhin from engage",
                        "Strong pick potential together"
                    ]
                },
                { 
                    name: "Swain", 
                    icon: "../icons/Swain.png", 
                    role: "Battle Mage",
                    reasons: [
                        "Pull guarantees Jhin's grenade and W root",
                        "Both excel at long range poke and control",
                        "Strong synergy in extended fights"
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Leona", 
                    icon: "../icons/Leona.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Strong engage but Jhin lacks sustained DPS for all-ins",
                        "Works if enemies stay CCd long enough for Jhin combo",
                        "Better with rapid fire ADCs"
                    ]
                },
                { 
                    name: "Nautilus", 
                    icon: "../icons/Nautilus.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Point-click CC helps but Jhin needs setup time",
                        "Provides peel for immobile Jhin",
                        "Functional but not optimal"
                    ]
                },
                { 
                    name: "Nami", 
                    icon: "../icons/Nami.png", 
                    role: "Enchanter",
                    reasons: [
                        "Bubble can set up Jhin combos but inconsistent",
                        "E buff helps Jhin's 4th shot damage",
                        "Decent but better options exist"
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Lulu", 
                    icon: "../icons/Lulu.png", 
                    role: "Enchanter",
                    reasons: [
                        "Provides peel but doesn't help Jhin's burst pattern",
                        "Better with DPS carries than burst ADCs",
                        "Underwhelming synergy overall"
                    ]
                },
                { 
                    name: "Soraka", 
                    icon: "../icons/Soraka.png", 
                    role: "Enchanter",
                    reasons: [
                        "Healing doesn't help immobile Jhin survive",
                        "Too passive for Jhin's power spike windows",
                        "Better supports for Jhin's playstyle"
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Yuumi", 
                    icon: "../icons/Yuumi.png", 
                    role: "Enchanter",
                    reasons: [
                        "Jhin is immobile and needs an active support for protection",
                        "Can't help Jhin land his skillshots effectively",
                        "One of the worst possible supports for Jhin"
                    ]
                },
                { 
                    name: "Braum", 
                    icon: "../icons/Braum.png", 
                    role: "Tank Support",
                    reasons: [
                        "Jhin's slow attack speed makes proccing passive nearly impossible",
                        "Defensive playstyle doesn't match Jhin's burst windows",
                        "Terrible synergy overall"
                    ]
                }
            ]
        },

        "Jinx": {
            tierS: [
                { 
                    name: "Thresh", 
                    icon: "../icons/Thresh.png", 
                    role: "Hook Support",
                    reasons: [
                        "Promoted to S Tier due to Patch 25.24 buffs",
                        "Hook guarantees Jinx Chomper placement for massive damage",
                        "Flay and lantern provide safety for Jinx's hypercarry playstyle"
                    ]
                },
                { 
                    name: "Lulu", 
                    icon: "../icons/Lulu.png", 
                    role: "Enchanter",
                    reasons: [
                        "Shield and ultimate make hypercarry Jinx unkillable",
                        "Speed boost helps offset Jinx's passive nerf",
                        "Polymorph provides peel for immobile Jinx"
                    ]
                },
                { 
                    name: "Nami", 
                    icon: "../icons/Nami.png", 
                    role: "Enchanter",
                    reasons: [
                        "E buff on Jinx's rockets creates insane poke and kiting",
                        "Bubble setup allows Jinx to land perfect Chompers",
                        "Healing sustains Jinx until her late game power spike"
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Braum", 
                    icon: "../icons/Braum.png", 
                    role: "Tank Support",
                    reasons: [
                        "Jinx's rapid fire procs Braum passive extremely fast",
                        "Shield blocks damage letting Jinx attack freely",
                        "Strong defensive synergy for late game carries"
                    ]
                },
                { 
                    name: "Leona", 
                    icon: "../icons/Leona.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Hard engage locks down targets for Jinx to shred",
                        "Strong all-in potential in lane phase",
                        "Provides frontline Jinx desperately needs"
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Morgana", 
                    icon: "../icons/Morgana.png", 
                    role: "Control Mage",
                    reasons: [
                        "Black Shield protects immobile Jinx from CC",
                        "Snare allows Jinx to position for Chompers",
                        "Good but better options exist"
                    ]
                },
                { 
                    name: "Nautilus", 
                    icon: "../icons/Nautilus.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Point-click CC provides reliable peel for Jinx",
                        "Engages work but Jinx prefers safer laning",
                        "Functional but not optimal"
                    ]
                },
                { 
                    name: "Karma", 
                    icon: "../icons/Karma.png", 
                    role: "Enchanter",
                    reasons: [
                        "Shield and speed help but Jinx needs stronger late game support",
                        "Good poke synergy early",
                        "Falls off compared to other enchanters"
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Zyra", 
                    icon: "../icons/Zyra.png", 
                    role: "Mage Support",
                    reasons: [
                        "Too squishy with immobile Jinx",
                        "Doesn't provide the protection Jinx needs",
                        "Better with poke ADCs"
                    ]
                },
                { 
                    name: "Brand", 
                    icon: "../icons/Brand.png", 
                    role: "Mage Support",
                    reasons: [
                        "High damage but no peel for Jinx",
                        "Both are vulnerable to ganks",
                        "Risky pairing without proper peel"
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Pyke", 
                    icon: "../icons/Pyke.png", 
                    role: "Assassin Support",
                    reasons: [
                        "Roaming playstyle leaves Jinx vulnerable",
                        "Doesn't provide the safety Jinx needs to scale",
                        "Terrible for hypercarry protection"
                    ]
                },
                { 
                    name: "Senna", 
                    icon: "../icons/Senna.png", 
                    role: "Marksman Support",
                    reasons: [
                        "Double ADC with no frontline is extremely risky",
                        "Both need time to scale, very weak early",
                        "Doesn't fit Jinx's need for protection"
                    ]
                }
            ]
        },

        "Lucian": {
            tierS: [
                { 
                    name: "Thresh", 
                    icon: "../icons/Thresh.png", 
                    role: "Hook Support",
                    reasons: [
                        "Thresh buffs make this classic kill lane S Tier again",
                        "Hook into Lucian dash creates guaranteed kill pressure",
                        "Flay helps Lucian burst down targets instantly"
                    ]
                },
                { 
                    name: "Nami", 
                    icon: "../icons/Nami.png", 
                    role: "Enchanter",
                    reasons: [
                        "E buff on Lucian's double shots is the most oppressive lane combo",
                        "Bubble guarantees Lucian can land full combo",
                        "One of the most famous and dominant bot lane synergies"
                    ]
                },
                { 
                    name: "Braum", 
                    icon: "../icons/Braum.png", 
                    role: "Tank Support",
                    reasons: [
                        "Lucian's passive procs Braum passive incredibly fast for stuns",
                        "Shield protects Lucian during aggressive trades",
                        "Strong all-in and defensive synergy"
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Leona", 
                    icon: "../icons/Leona.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Sunlight passive + Lucian's double shots is huge damage",
                        "Strong level 2-3 all-in potential",
                        "Excellent aggressive synergy"
                    ]
                },
                { 
                    name: "Alistar", 
                    icon: "../icons/Alistar.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Combo knocks up for easy Lucian full rotation",
                        "Provides tankiness for Lucian's short range playstyle",
                        "Strong dive potential together"
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Karma", 
                    icon: "../icons/Karma.png", 
                    role: "Enchanter",
                    reasons: [
                        "Shield and speed boost enhance Lucian's mobility",
                        "Good poke synergy but lacks all-in tools",
                        "Works but better options exist"
                    ]
                },
                { 
                    name: "Morgana", 
                    icon: "../icons/Morgana.png", 
                    role: "Control Mage",
                    reasons: [
                        "Snare allows Lucian to dash in for full combo",
                        "Black Shield is good but Lucian has natural mobility",
                        "Functional pairing but not optimal"
                    ]
                },
                { 
                    name: "Nautilus", 
                    icon: "../icons/Nautilus.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Point-click CC provides reliable engage",
                        "Good but less synergy than other tanks",
                        "Decent option but not best in slot"
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Lulu", 
                    icon: "../icons/Lulu.png", 
                    role: "Enchanter",
                    reasons: [
                        "Speed buff helps but Lucian prefers aggressive supports",
                        "Better with hypercarries than burst ADCs",
                        "Underwhelming for Lucian's playstyle"
                    ]
                },
                { 
                    name: "Soraka", 
                    icon: "../icons/Soraka.png", 
                    role: "Enchanter",
                    reasons: [
                        "Too passive for Lucian's aggressive short-range style",
                        "Doesn't help Lucian's burst combos",
                        "Poor synergy overall"
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Yuumi", 
                    icon: "../icons/Yuumi.png", 
                    role: "Enchanter",
                    reasons: [
                        "Lucian needs an active lane partner to dominate early",
                        "Short range means Lucian needs peel, not more damage",
                        "Terrible pairing that wastes Lucian's strengths"
                    ]
                },
                { 
                    name: "Senna", 
                    icon: "../icons/Senna.png", 
                    role: "Marksman Support",
                    reasons: [
                        "No frontline with two squishy marksmen",
                        "Both want farm and gold, creates resource conflict",
                        "Weak defensive pairing"
                    ]
                }
            ]
        },

        "Vayne": {
            tierS: [
                { 
                    name: "Thresh", 
                    icon: "../icons/Thresh.png", 
                    role: "Hook Support",
                    reasons: [
                        "Buffed Thresh (Armor/CDs) is huge for Vayne's lane survival",
                        "Flay and hook pin enemies to walls for Vayne's condemn",
                        "Lantern saves Vayne during aggressive tumble plays"
                    ]
                },
                { 
                    name: "Lulu", 
                    icon: "../icons/Lulu.png", 
                    role: "Enchanter",
                    reasons: [
                        "Shield and ultimate make Vayne nearly unkillable",
                        "Speed boost enhances Vayne's kiting and chase potential",
                        "Perfect synergy for hypercarry protection and scaling"
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Nami", 
                    icon: "../icons/Nami.png", 
                    role: "Enchanter",
                    reasons: [
                        "E buff on Vayne's silver bolts is substantial damage",
                        "Healing sustains Vayne through weak early game",
                        "Bubble provides peel and engage options"
                    ]
                },
                { 
                    name: "Braum", 
                    icon: "../icons/Braum.png", 
                    role: "Tank Support",
                    reasons: [
                        "Provides strong frontline for short-range Vayne",
                        "Shield blocks projectiles aimed at Vayne",
                        "Good defensive synergy for late game"
                    ]
                },
                { 
                    name: "Soraka", 
                    icon: "../icons/Soraka.png", 
                    role: "Enchanter",
                    reasons: [
                        "Massive healing sustains Vayne through lane phase",
                        "Silence can peel assassins off Vayne",
                        "Allows Vayne to reach late game carry status"
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Leona", 
                    icon: "../icons/Leona.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Can engage but Vayne's weak early makes all-ins risky",
                        "Provides frontline but Vayne needs sustain more",
                        "Works but better with early game ADCs"
                    ]
                },
                { 
                    name: "Alistar", 
                    icon: "../icons/Alistar.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Knock-up sets up Vayne's condemn but timing is tight",
                        "Good tankiness but Vayne prefers enchanters",
                        "Functional but not optimal"
                    ]
                },
                { 
                    name: "Morgana", 
                    icon: "../icons/Morgana.png", 
                    role: "Control Mage",
                    reasons: [
                        "Black Shield is great for protecting Vayne",
                        "Snare helps but doesn't enhance Vayne's damage",
                        "Decent option but better supports exist"
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Nautilus", 
                    icon: "../icons/Nautilus.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Too aggressive for Vayne's scaling playstyle",
                        "Doesn't help Vayne survive weak laning phase",
                        "Better with lane dominant ADCs"
                    ]
                },
                { 
                    name: "Zyra", 
                    icon: "../icons/Zyra.png", 
                    role: "Mage Support",
                    reasons: [
                        "No peel or protection for vulnerable Vayne",
                        "Both are squishy and easy to gank",
                        "Doesn't fit Vayne's needs"
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Brand", 
                    icon: "../icons/Brand.png", 
                    role: "Mage Support",
                    reasons: [
                        "Zero peel for short-range Vayne",
                        "Both extremely vulnerable to engage",
                        "One of the worst possible pairings"
                    ]
                },
                { 
                    name: "Pyke", 
                    icon: "../icons/Pyke.png", 
                    role: "Assassin Support",
                    reasons: [
                        "Roaming leaves weak Vayne alone in lane",
                        "Doesn't provide the protection Vayne desperately needs",
                        "Terrible synergy for scaling ADC"
                    ]
                }
            ]
        },

        "Kai'Sa": {
            tierS: [
                { 
                    name: "Thresh", 
                    icon: "../icons/Thresh.png", 
                    role: "Hook Support",
                    reasons: [
                        "Buffed Q cooldown means more hooks to mark enemies for Kai'Sa",
                        "Flay keeps targets in range for plasma stacks",
                        "Strong playmaking duo with high skill expression"
                    ]
                },
                { 
                    name: "Nautilus", 
                    icon: "../icons/Nautilus.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Point-click CC allows Kai'Sa to instantly dash in with ultimate",
                        "Lockdown guarantees Kai'Sa can stack plasma for burst",
                        "Extremely reliable engage synergy"
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Leona", 
                    icon: "../icons/Leona.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Strong engage allows Kai'Sa to follow with ultimate",
                        "Sunlight passive helps Kai'Sa burst targets",
                        "Excellent aggressive synergy"
                    ]
                },
                { 
                    name: "Alistar", 
                    icon: "../icons/Alistar.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Combo knocks up for easy Kai'Sa follow-up",
                        "Provides tankiness for Kai'Sa's short range fights",
                        "Strong all-in potential"
                    ]
                },
                { 
                    name: "Nami", 
                    icon: "../icons/Nami.png", 
                    role: "Enchanter",
                    reasons: [
                        "E buff helps Kai'Sa stack plasma faster",
                        "Bubble allows Kai'Sa to dash in safely",
                        "Good balance of aggression and sustain"
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Lulu", 
                    icon: "../icons/Lulu.png", 
                    role: "Enchanter",
                    reasons: [
                        "Shield and ultimate help Kai'Sa survive dives",
                        "Speed boost helps Kai'Sa reposition",
                        "Good defensive option but lacks engage synergy"
                    ]
                },
                { 
                    name: "Braum", 
                    icon: "../icons/Braum.png", 
                    role: "Tank Support",
                    reasons: [
                        "Passive procs quickly with Kai'Sa's missiles",
                        "Provides protection but lacks engage tools",
                        "Functional but better options exist"
                    ]
                },
                { 
                    name: "Morgana", 
                    icon: "../icons/Morgana.png", 
                    role: "Control Mage",
                    reasons: [
                        "Black Shield protects Kai'Sa during ultimate dives",
                        "Snare is okay but doesn't maximize Kai'Sa's kit",
                        "Works but not optimal"
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Karma", 
                    icon: "../icons/Karma.png", 
                    role: "Enchanter",
                    reasons: [
                        "Shield and speed are decent but Kai'Sa wants engage",
                        "Doesn't help Kai'Sa's ultimate usage",
                        "Better supports for Kai'Sa's dive playstyle"
                    ]
                },
                { 
                    name: "Soraka", 
                    icon: "../icons/Soraka.png", 
                    role: "Enchanter",
                    reasons: [
                        "Too passive for Kai'Sa's aggressive style",
                        "Doesn't help Kai'Sa engage on targets",
                        "Underwhelming synergy"
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Yuumi", 
                    icon: "../icons/Yuumi.png", 
                    role: "Enchanter",
                    reasons: [
                        "Kai'Sa needs an active support to create engage opportunities",
                        "Wastes Kai'Sa's early game power spike",
                        "Poor pairing overall"
                    ]
                },
                { 
                    name: "Senna", 
                    icon: "../icons/Senna.png", 
                    role: "Marksman Support",
                    reasons: [
                        "Double ADC with no engage or frontline",
                        "Doesn't help Kai'Sa utilize her ultimate effectively",
                        "Weak laning and team fighting"
                    ]
                }
            ]
        },

        "Draven": {
            tierS: [
                { 
                    name: "Thresh", 
                    icon: "../icons/Thresh.png", 
                    role: "Hook Support",
                    reasons: [
                        "Hook guarantees Draven can land both axes for massive damage",
                        "Flay keeps targets in place for Draven's damage window",
                        "Thresh buffs make this S+ tier in 25.24"
                    ]
                },
                { 
                    name: "Leona", 
                    icon: "../icons/Leona.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Strong engage locks down targets for Draven to execute",
                        "Sunlight passive amplifies Draven's already high damage",
                        "Dominant all-in potential from level 2 onwards"
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Nautilus", 
                    icon: "../icons/Nautilus.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Point-click CC provides reliable all-in setup",
                        "Strong lockdown for Draven to cash in kills",
                        "Excellent aggressive synergy"
                    ]
                },
                { 
                    name: "Alistar", 
                    icon: "../icons/Alistar.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Knock-up combo allows Draven to position axes",
                        "Tankiness lets Draven play aggressive for stacks",
                        "Strong dive potential to snowball Draven"
                    ]
                },
                { 
                    name: "Blitzcrank", 
                    icon: "../icons/Blitzcrank.png", 
                    role: "Hook Support",
                    reasons: [
                        "Hook instantly secures kills for Draven's passive stacks",
                        "Strong lane pressure matches Draven's dominance",
                        "Excellent for snowballing Draven early"
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Zyra", 
                    icon: "../icons/Zyra.png", 
                    role: "Mage Support",
                    reasons: [
                        "Root allows Draven to land axes but both are squishy",
                        "Good damage but risky without tankiness",
                        "Works but better with tank supports"
                    ]
                },
                { 
                    name: "Morgana", 
                    icon: "../icons/Morgana.png", 
                    role: "Control Mage",
                    reasons: [
                        "Black Shield is decent but Draven wants aggressive engage",
                        "Snare helps but doesn't maximize Draven's strength",
                        "Functional but not optimal"
                    ]
                },
                { 
                    name: "Nami", 
                    icon: "../icons/Nami.png", 
                    role: "Enchanter",
                    reasons: [
                        "E buff on axes hurts but Draven prefers tank engage",
                        "Healing is okay but doesn't fit aggressive playstyle",
                        "Better options exist for Draven"
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Lulu", 
                    icon: "../icons/Lulu.png", 
                    role: "Enchanter",
                    reasons: [
                        "Too passive for Draven's early game dominance",
                        "Doesn't help Draven snowball through kills",
                        "Better with scaling ADCs"
                    ]
                },
                { 
                    name: "Karma", 
                    icon: "../icons/Karma.png", 
                    role: "Enchanter",
                    reasons: [
                        "Poke is okay but Draven wants to all-in for kills",
                        "Doesn't provide the engage Draven needs",
                        "Underwhelming for Draven's playstyle"
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Yuumi", 
                    icon: "../icons/Yuumi.png", 
                    role: "Enchanter",
                    reasons: [
                        "Wastes Draven's strongest point in the game completely",
                        "Draven needs an active aggressive support early",
                        "Absolutely terrible pairing"
                    ]
                },
                { 
                    name: "Soraka", 
                    icon: "../icons/Soraka.png", 
                    role: "Enchanter",
                    reasons: [
                        "Far too passive for Draven's aggressive cash-in playstyle",
                        "Doesn't help Draven get kills for passive stacks",
                        "One of the worst supports for Draven"
                    ]
                }
            ]
        },

        "Twitch": {
            tierS: [
                { 
                    name: "Lulu", 
                    icon: "../icons/Lulu.png", 
                    role: "Enchanter",
                    reasons: [
                        "Shield and ultimate make invisible Twitch assassinations guaranteed",
                        "Speed boost enhances Twitch's positioning and kiting",
                        "One of the most famous hypercarry protection duos"
                    ]
                },
                { 
                    name: "Yuumi", 
                    icon: "../icons/Yuumi.png", 
                    role: "Enchanter",
                    reasons: [
                        "Can stay attached during Twitch's stealth for surprise burst",
                        "Healing and adaptive force amplify Twitch's damage",
                        "Strong roaming synergy with both being mobile"
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Thresh", 
                    icon: "../icons/Thresh.png", 
                    role: "Hook Support",
                    reasons: [
                        "Buffed Thresh is great for getting picks for Twitch",
                        "Lantern helps Twitch escape after stealth engages",
                        "Good playmaking potential together"
                    ]
                },
                { 
                    name: "Nami", 
                    icon: "../icons/Nami.png", 
                    role: "Enchanter",
                    reasons: [
                        "E buff on Twitch's ultimate spray damage is devastating",
                        "Healing sustains Twitch through laning phase",
                        "Strong scaling synergy"
                    ]
                },
                { 
                    name: "Braum", 
                    icon: "../icons/Braum.png", 
                    role: "Tank Support",
                    reasons: [
                        "Provides frontline Twitch desperately needs",
                        "Shield protects Twitch during ultimate",
                        "Good defensive synergy"
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Leona", 
                    icon: "../icons/Leona.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Engage is okay but Twitch prefers to scale",
                        "Can work in aggressive lanes",
                        "Better with early game ADCs"
                    ]
                },
                { 
                    name: "Morgana", 
                    icon: "../icons/Morgana.png", 
                    role: "Control Mage",
                    reasons: [
                        "Black Shield protects Twitch but he needs more",
                        "Snare helps but doesn't maximize Twitch's kit",
                        "Functional but not optimal"
                    ]
                },
                { 
                    name: "Soraka", 
                    icon: "../icons/Soraka.png", 
                    role: "Enchanter",
                    reasons: [
                        "Healing sustains Twitch through lane",
                        "Allows Twitch to scale but lacks proactive tools",
                        "Decent but better enchanters exist"
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Nautilus", 
                    icon: "../icons/Nautilus.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Too aggressive for Twitch's scaling needs",
                        "Doesn't help Twitch's weak laning phase",
                        "Better with lane dominant ADCs"
                    ]
                },
                { 
                    name: "Zyra", 
                    icon: "../icons/Zyra.png", 
                    role: "Mage Support",
                    reasons: [
                        "No protection for invisible Twitch plays",
                        "Both too squishy for consistent safety",
                        "Doesn't fit Twitch's playstyle"
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Pyke", 
                    icon: "../icons/Pyke.png", 
                    role: "Assassin Support",
                    reasons: [
                        "Both want to roam, leaves lane unattended",
                        "Doesn't provide protection Twitch needs",
                        "Poor synergy for team fighting"
                    ]
                },
                { 
                    name: "Brand", 
                    icon: "../icons/Brand.png", 
                    role: "Mage Support",
                    reasons: [
                        "Zero peel for vulnerable Twitch",
                        "Both extremely squishy with no escape",
                        "Terrible defensive pairing"
                    ]
                }
            ]
        },

        "Miss Fortune": {
            tierS: [
                { 
                    name: "Leona", 
                    icon: "../icons/Leona.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Engage locks targets in MF's E and ultimate",
                        "Sunlight passive amplifies MF's poke damage",
                        "Perfect synergy for ultimate wombo combos"
                    ]
                },
                { 
                    name: "Zyra", 
                    icon: "../icons/Zyra.png", 
                    role: "Mage Support",
                    reasons: [
                        "Root guarantees MF ultimate hits full duration",
                        "Plants + MF's E create extreme zone control",
                        "Dominant poke and teamfight synergy"
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Thresh", 
                    icon: "../icons/Thresh.png", 
                    role: "Hook Support",
                    reasons: [
                        "Hook and box help MF land ultimate",
                        "Buffed Thresh makes this a very strong A+ tier pairing",
                        "Lantern offers mobility to immobile MF"
                    ]
                },
                { 
                    name: "Morgana", 
                    icon: "../icons/Morgana.png", 
                    role: "Control Mage",
                    reasons: [
                        "Binding locks targets for MF ultimate",
                        "Ultimate synergy creates massive AOE lockdown",
                        "Strong pick and team fight potential"
                    ]
                },
                { 
                    name: "Nautilus", 
                    icon: "../icons/Nautilus.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Engage guarantees MF ultimate lands",
                        "CC chain keeps targets in bullet rain",
                        "Strong initiation synergy"
                    ]
                },
                { 
                    name: "Swain", 
                    icon: "../icons/Swain.png", 
                    role: "Battle Mage",
                    reasons: [
                        "Pull + root combo with MF's E and ultimate is devastating",
                        "Both have strong AOE damage for teamfights",
                        "Excellent control and damage synergy"
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Karma", 
                    icon: "../icons/Karma.png", 
                    role: "Enchanter",
                    reasons: [
                        "Poke synergy is strong in lane",
                        "Shield helps MF channel ultimate safely",
                        "Good but lacks hard engage MF loves"
                    ]
                },
                { 
                    name: "Brand", 
                    icon: "../icons/Brand.png", 
                    role: "Mage Support",
                    reasons: [
                        "Double AOE damage is strong in teamfights",
                        "Good poke in lane but both are squishy",
                        "Functional but risky pairing"
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Braum", 
                    icon: "../icons/Braum.png", 
                    role: "Tank Support",
                    reasons: [
                        "Can block damage but doesn't help MF's ultimate",
                        "Too defensive for MF's aggressive style",
                        "Better with auto-attack ADCs"
                    ]
                },
                { 
                    name: "Nami", 
                    icon: "../icons/Nami.png", 
                    role: "Enchanter",
                    reasons: [
                        "Bubble can set up ultimate but inconsistent",
                        "Doesn't provide the AOE engage MF wants",
                        "Underwhelming synergy"
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Yuumi", 
                    icon: "../icons/Yuumi.png", 
                    role: "Enchanter",
                    reasons: [
                        "MF is immobile during ultimate and needs active peel",
                        "Doesn't help MF land or channel ultimate safely",
                        "Poor pairing for immobile ultimate ADC"
                    ]
                },
                { 
                    name: "Soraka", 
                    icon: "../icons/Soraka.png", 
                    role: "Enchanter",
                    reasons: [
                        "Too passive for MF's aggressive ultimate playstyle",
                        "No setup for MF's abilities",
                        "Terrible synergy overall"
                    ]
                }
            ]
        },

        "Samira": {
            tierS: [
                { 
                    name: "Thresh", 
                    icon: "../icons/Thresh.png", 
                    role: "Hook Support",
                    reasons: [
                        "Hook provides knock-up for Samira's passive and combo",
                        "Flay chains perfectly into Samira's CC for style points",
                        "Thresh buffs make this arguably Samira's best pairing now"
                    ]
                },
                { 
                    name: "Nautilus", 
                    icon: "../icons/Nautilus.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Multiple knock-ups allow Samira to dash and build style",
                        "Point-click CC guarantees Samira can all-in safely",
                        "Extremely reliable aggressive synergy"
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Leona", 
                    icon: "../icons/Leona.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Strong engage with CC for Samira's passive",
                        "Tankiness allows Samira to dive freely",
                        "Excellent aggressive all-in synergy"
                    ]
                },
                { 
                    name: "Alistar", 
                    icon: "../icons/Alistar.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Knock-up combo triggers Samira's passive perfectly",
                        "Ultimate synergy for team fight dives",
                        "Strong playmaking potential"
                    ]
                },
                { 
                    name: "Rell", 
                    icon: "../icons/Rell.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Engage with CC chains into Samira's kit beautifully",
                        "Tankiness provides frontline for Samira's dives",
                        "Great aggressive synergy"
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Rakan", 
                    icon: "../icons/Rakan.png", 
                    role: "Engage Support",
                    reasons: [
                        "Knock-up helps but less reliable than tank supports",
                        "Good mobility matches Samira's aggressive style",
                        "Works but squishier than ideal"
                    ]
                },
                { 
                    name: "Braum", 
                    icon: "../icons/Braum.png", 
                    role: "Tank Support",
                    reasons: [
                        "Provides knock-up for passive but too defensive",
                        "Good peel but Samira wants engage more",
                        "Functional but not optimal"
                    ]
                },
                { 
                    name: "Pantheon", 
                    icon: "../icons/Pantheon.png", 
                    role: "Fighter Support",
                    reasons: [
                        "Aggressive stun helps Samira engage",
                        "Strong damage but both can be focused",
                        "Good but riskier than tank supports"
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Morgana", 
                    icon: "../icons/Morgana.png", 
                    role: "Control Mage",
                    reasons: [
                        "Snare doesn't provide knock-up for Samira's passive",
                        "Black Shield is okay but Samira wants engage",
                        "Doesn't maximize Samira's strengths"
                    ]
                },
                { 
                    name: "Nami", 
                    icon: "../icons/Nami.png", 
                    role: "Enchanter",
                    reasons: [
                        "Too passive for Samira's aggressive all-in style",
                        "Bubble helps but Samira needs tank engage",
                        "Poor fit for Samira's playstyle"
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Yuumi", 
                    icon: "../icons/Yuumi.png", 
                    role: "Enchanter",
                    reasons: [
                        "Provides zero engage for Samira's aggressive style",
                        "Samira needs an active frontline support",
                        "One of the worst possible supports for Samira"
                    ]
                },
                { 
                    name: "Soraka", 
                    icon: "../icons/Soraka.png", 
                    role: "Enchanter",
                    reasons: [
                        "Completely passive, doesn't help Samira engage at all",
                        "No knock-ups or CC chains for Samira's passive",
                        "Terrible synergy"
                    ]
                }
            ]
        },

        "Aphelios": {
            tierS: [
                { 
                    name: "Thresh", 
                    icon: "../icons/Thresh.png", 
                    role: "Hook Support",
                    reasons: [
                        "Hook sets up perfect Aphelios weapon combos",
                        "CC chains allow Aphelios to switch weapons optimally",
                        "Lantern saves immobile Aphelios from danger"
                    ]
                },
                { 
                    name: "Lulu", 
                    icon: "../icons/Lulu.png", 
                    role: "Enchanter",
                    reasons: [
                        "Shield and ultimate make complex Aphelios plays safer",
                        "Speed boost helps immobile Aphelios position for combos",
                        "Perfect protection for high skill cap ADC"
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Nautilus", 
                    icon: "../icons/Nautilus.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Point-click CC allows Aphelios to follow with any weapon",
                        "Lockdown gives time for complex weapon rotations",
                        "Reliable engage synergy"
                    ]
                },
                { 
                    name: "Braum", 
                    icon: "../icons/Braum.png", 
                    role: "Tank Support",
                    reasons: [
                        "Shield protects Aphelios during weapon transitions",
                        "Provides frontline for close-range weapon plays",
                        "Good defensive synergy"
                    ]
                },
                { 
                    name: "Nami", 
                    icon: "../icons/Nami.png", 
                    role: "Enchanter",
                    reasons: [
                        "E buff enhances all of Aphelios's weapons",
                        "Healing sustains through complex laning phase",
                        "Bubble provides setup for weapon combos"
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Leona", 
                    icon: "../icons/Leona.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Strong engage but Aphelios is timing-dependent",
                        "Works but requires good coordination",
                        "Better with simpler ADCs"
                    ]
                },
                { 
                    name: "Morgana", 
                    icon: "../icons/Morgana.png", 
                    role: "Control Mage",
                    reasons: [
                        "Black Shield protects but doesn't help weapon combos",
                        "Snare is okay but timing with weapons can be awkward",
                        "Functional but not optimal"
                    ]
                },
                { 
                    name: "Soraka", 
                    icon: "../icons/Soraka.png", 
                    role: "Enchanter",
                    reasons: [
                        "Healing sustains Aphelios but lacks proactive tools",
                        "Too passive for Aphelios's situational strengths",
                        "Works but better enchanters exist"
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Karma", 
                    icon: "../icons/Karma.png", 
                    role: "Enchanter",
                    reasons: [
                        "Shield and speed are okay but Aphelios needs more",
                        "Doesn't help Aphelios maximize weapon combos",
                        "Better supports for complex ADCs"
                    ]
                },
                { 
                    name: "Zyra", 
                    icon: "../icons/Zyra.png", 
                    role: "Mage Support",
                    reasons: [
                        "No protection for immobile Aphelios",
                        "Both need good positioning, easy to punish",
                        "Risky pairing"
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Pyke", 
                    icon: "../icons/Pyke.png", 
                    role: "Assassin Support",
                    reasons: [
                        "Roaming leaves complex Aphelios vulnerable",
                        "Doesn't provide the setup Aphelios needs",
                        "Poor synergy with high skill cap ADC"
                    ]
                },
                { 
                    name: "Yuumi", 
                    icon: "../icons/Yuumi.png", 
                    role: "Enchanter",
                    reasons: [
                        "Aphelios needs active support for positioning and setup",
                        "Can't help Aphelios execute complex weapon combos",
                        "Terrible pairing"
                    ]
                }
            ]
        },

        "Tristana": {
            tierS: [
                { 
                    name: "Thresh", 
                    icon: "../icons/Thresh.png", 
                    role: "Hook Support",
                    reasons: [
                        "Moved to S Tier in 25.24 - his hook guarantees bomb charge",
                        "Lantern enables aggressive Tristana jumps",
                        "Flay keeps enemies in range for reset kills"
                    ]
                },
                { 
                    name: "Alistar", 
                    icon: "../icons/Alistar.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Knock-up combo guarantees Tristana's explosive bomb damage",
                        "Strong level 2 all-in with jump and combo is deadly",
                        "Excellent tower dive synergy with both having resets/sustain"
                    ]
                },
                { 
                    name: "Leona", 
                    icon: "../icons/Leona.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Lockdown allows Tristana to stack bomb to full duration",
                        "Level 2-3 all-in is one of the strongest in bot lane",
                        "Perfect aggressive synergy for snowballing"
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Nautilus", 
                    icon: "../icons/Nautilus.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Point-click CC guarantees Tristana bomb stacks",
                        "Reliable engage for Tristana's explosive damage",
                        "Strong all-in potential"
                    ]
                },
                { 
                    name: "Braum", 
                    icon: "../icons/Braum.png", 
                    role: "Tank Support",
                    reasons: [
                        "Tristana's rapid fire procs Braum passive very fast",
                        "Good defensive synergy for dive heavy playstyle",
                        "Strong synergy for all-ins"
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Lulu", 
                    icon: "../icons/Lulu.png", 
                    role: "Enchanter",
                    reasons: [
                        "Shield and ultimate help Tristana survive dives",
                        "Speed boost enhances Tristana's jump resets",
                        "Good but Tristana prefers tank engage"
                    ]
                },
                { 
                    name: "Nami", 
                    icon: "../icons/Nami.png", 
                    role: "Enchanter",
                    reasons: [
                        "E buff on Tristana's explosive charge damage is decent",
                        "Bubble can set up all-ins but inconsistent",
                        "Works but tank supports better"
                    ]
                },
                { 
                    name: "Morgana", 
                    icon: "../icons/Morgana.png", 
                    role: "Control Mage",
                    reasons: [
                        "Black Shield protects Tristana during jumps",
                        "Snare helps but Tristana wants more reliable engage",
                        "Functional but not optimal"
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Karma", 
                    icon: "../icons/Karma.png", 
                    role: "Enchanter",
                    reasons: [
                        "Poke is okay but Tristana wants to all-in",
                        "Doesn't maximize Tristana's assassination potential",
                        "Better supports for her playstyle"
                    ]
                },
                { 
                    name: "Zyra", 
                    icon: "../icons/Zyra.png", 
                    role: "Mage Support",
                    reasons: [
                        "Root helps but both too squishy for Tristana's dives",
                        "Doesn't provide the frontline Tristana benefits from",
                        "Risky pairing"
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Yuumi", 
                    icon: "../icons/Yuumi.png", 
                    role: "Enchanter",
                    reasons: [
                        "Wastes Tristana's strong early all-in windows",
                        "Tristana needs an active engage support",
                        "Terrible pairing for aggressive ADC"
                    ]
                },
                { 
                    name: "Soraka", 
                    icon: "../icons/Soraka.png", 
                    role: "Enchanter",
                    reasons: [
                        "Far too passive for Tristana's assassination playstyle",
                        "Doesn't help Tristana's explosive damage pattern",
                        "One of the worst supports for Tristana"
                    ]
                }
            ]
        },

        // Additional ADCs with shorter data
        "Sivir": {
            tierS: [
                { name: "Karma", icon: "../icons/Karma.png", role: "Enchanter", reasons: ["Speed boost + Sivir ultimate = extreme map mobility", "Poke synergy dominates lane", "Both scale well into team fights"] },
                { name: "Lulu", icon: "../icons/Lulu.png", role: "Enchanter", reasons: ["Shield enhances Sivir's wave clear safety", "Speed boost amplifies ultimate", "Strong protective scaling"] }
            ],
            tierA: [
                { name: "Thresh", icon: "../icons/Thresh.png", role: "Hook Support", reasons: ["Buffed Thresh provides great peel for Sivir", "Lantern enables Sivir's aggressive positioning", "Good utility synergy"] },
                { name: "Nami", icon: "../icons/Nami.png", role: "Enchanter", reasons: ["E buff on Sivir's W ricochets is strong", "Sustain through wave clear", "Good scaling synergy"] },
                { name: "Morgana", icon: "../icons/Morgana.png", role: "Control Mage", reasons: ["Black Shield protects immobile Sivir", "Snare helps Sivir land abilities", "Decent poke synergy"] }
            ],
            tierB: [
                { name: "Leona", icon: "../icons/Leona.png", role: "Tank Engage", reasons: ["Can engage but Sivir prefers wave clear", "Works but not optimal", "Better with different ADCs"] },
                { name: "Braum", icon: "../icons/Braum.png", role: "Tank Support", reasons: ["Defensive but Sivir wants scaling supports", "Functional pairing", "Better options exist"] }
            ],
            tierC: [
                { name: "Nautilus", icon: "../icons/Nautilus.png", role: "Tank Engage", reasons: ["Too aggressive for Sivir's playstyle", "Doesn't enhance wave clear strengths", "Awkward synergy"] },
                { name: "Zyra", icon: "../icons/Zyra.png", role: "Mage Support", reasons: ["Both need positioning, easy to punish", "No protection for Sivir", "Risky pairing"] }
            ],
            tierD: [
                { name: "Yuumi", icon: "../icons/Yuumi.png", role: "Enchanter", reasons: ["Better options exist for Sivir", "Doesn't maximize Sivir's strengths", "Weak laning phase"] },
                { name: "Pyke", icon: "../icons/Pyke.png", role: "Assassin Support", reasons: ["Roaming leaves Sivir vulnerable", "Doesn't help Sivir's wave clear", "Poor synergy"] }
            ]
        },

        "Varus": {
            tierS: [
                { name: "Thresh", icon: "../icons/Thresh.png", role: "Hook Support", reasons: ["Hook into Varus ultimate is guaranteed kill", "Flay keeps targets for full Q charge", "Excellent pick potential"] },
                { name: "Karma", icon: "../icons/Karma.png", role: "Enchanter", reasons: ["Poke synergy is extremely oppressive", "Shield helps Varus position safely", "Strong lane dominance"] }
            ],
            tierA: [
                { name: "Nami", icon: "../icons/Nami.png", role: "Enchanter", reasons: ["E buff enhances Varus's poke damage", "Bubble sets up Varus ultimate", "Good sustain and poke"] },
                { name: "Lux", icon: "../icons/Lux.png", role: "Mage Support", reasons: ["Double poke from range is strong", "CC chains work well together", "Strong burst combo"] },
                { name: "Zyra", icon: "../icons/Zyra.png", role: "Mage Support", reasons: ["Root guarantees Varus Q lands", "Strong poke and zone control", "Good teamfight synergy"] }
            ],
            tierB: [
                { name: "Leona", icon: "../icons/Leona.png", role: "Tank Engage", reasons: ["Can engage but Varus prefers poke", "Works in aggressive lanes", "Not optimal"] },
                { name: "Morgana", icon: "../icons/Morgana.png", role: "Control Mage", reasons: ["Black Shield protects immobile Varus", "Snare helps but poke supports better", "Functional"] }
            ],
            tierC: [
                { name: "Braum", icon: "../icons/Braum.png", role: "Tank Support", reasons: ["Too defensive for Varus's poke style", "Doesn't enhance Varus's strengths", "Better options exist"] },
                { name: "Alistar", icon: "../icons/Alistar.png", role: "Tank Engage", reasons: ["Playstyles don't match well", "Varus wants to poke not dive", "Awkward pairing"] }
            ],
            tierD: [
                { name: "Yuumi", icon: "../icons/Yuumi.png", role: "Enchanter", reasons: ["Varus is immobile and needs active support", "Wastes Varus's lane strength", "Poor pairing"] },
                { name: "Taric", icon: "../icons/Taric.png", role: "Tank Support", reasons: ["Needs melee range, Varus is long range", "Completely incompatible", "Terrible synergy"] }
            ]
        },

        "Xayah": {
            tierS: [
                { name: "Rakan", icon: "../icons/Rakan.png", role: "Engage Support", reasons: ["Iconic duo with built-in synergy bonuses", "Engage and disengage tools match perfectly", "Ultimate combo is devastating"] },
                { name: "Thresh", icon: "../icons/Thresh.png", role: "Hook Support", reasons: ["Thresh buffs are excellent for Xayah", "Hook keeps targets in feather range", "Lantern enables aggressive Xayah plays"] }
            ],
            tierA: [
                { name: "Nautilus", icon: "../icons/Nautilus.png", role: "Tank Engage", reasons: ["Lockdown allows Xayah to recall feathers", "Point-click engage is reliable", "Good aggressive synergy"] },
                { name: "Leona", icon: "../icons/Leona.png", role: "Tank Engage", reasons: ["Strong engage for feather setup", "Sunlight passive enhances damage", "Good all-in potential"] },
                { name: "Lulu", icon: "../icons/Lulu.png", role: "Enchanter", reasons: ["Shield and ultimate protect during feather recalls", "Speed boost helps Xayah kite", "Good scaling synergy"] }
            ],
            tierB: [
                { name: "Braum", icon: "../icons/Braum.png", role: "Tank Support", reasons: ["Shield protects but doesn't help feathers", "Decent defensive synergy", "Better options exist"] },
                { name: "Nami", icon: "../icons/Nami.png", role: "Enchanter", reasons: ["E buff helps but Xayah wants engage", "Healing is okay", "Not optimal"] }
            ],
            tierC: [
                { name: "Karma", icon: "../icons/Karma.png", role: "Enchanter", reasons: ["Speed is decent but doesn't maximize feathers", "Better with poke ADCs", "Underwhelming"] },
                { name: "Morgana", icon: "../icons/Morgana.png", role: "Control Mage", reasons: ["Black Shield is okay but Xayah has ultimate", "Doesn't enhance feather mechanics", "Average synergy"] }
            ],
            tierD: [
                { name: "Yuumi", icon: "../icons/Yuumi.png", role: "Enchanter", reasons: ["Xayah needs active support for feather setup", "Wastes Xayah's abilities", "Poor pairing"] },
                { name: "Soraka", icon: "../icons/Soraka.png", role: "Enchanter", reasons: ["Too passive for Xayah's aggressive feather style", "Doesn't help feather recalls", "Weak synergy"] }
            ]
        },

        "Kalista": {
            tierS: [
                { name: "Thresh", icon: "../icons/Thresh.png", role: "Hook Support", reasons: ["Kalista ultimate into Thresh hook is lethal", "Can throw Thresh into enemies for engage", "Perfect playmaking synergy"] },
                { name: "Alistar", icon: "../icons/Alistar.png", role: "Tank Engage", reasons: ["Kalista ultimate into Alistar combo is unstoppable", "Strong dive synergy", "One of the best Kalista pairings"] }
            ],
            tierA: [
                { name: "Nautilus", icon: "../icons/Nautilus.png", role: "Tank Engage", reasons: ["Kalista ultimate into Nautilus CC chain", "Reliable engage synergy", "Good aggressive pairing"] },
                { name: "Leona", icon: "../icons/Leona.png", role: "Tank Engage", reasons: ["Strong engage with Kalista ultimate throw", "Good lockdown for Kalista's rend stacks", "Excellent synergy"] },
                { name: "Braum", icon: "../icons/Braum.png", role: "Tank Support", reasons: ["Kalista's rapid autos proc passive instantly", "Good synergy with Kalista ultimate", "Strong defensive pairing"] }
            ],
            tierB: [
                { name: "Blitzcrank", icon: "../icons/Blitzcrank.png", role: "Hook Support", reasons: ["Hook is good but Thresh offers more", "Can work with ultimate", "Decent option"] },
                { name: "Rakan", icon: "../icons/Rakan.png", role: "Engage Support", reasons: ["Kalista ultimate enables Rakan engage", "Good mobility synergy", "Works but tanks better"] }
            ],
            tierC: [
                { name: "Lulu", icon: "../icons/Lulu.png", role: "Enchanter", reasons: ["Shield is okay but Kalista wants engage partners", "Doesn't use ultimate synergy well", "Not optimal"] },
                { name: "Nami", icon: "../icons/Nami.png", role: "Enchanter", reasons: ["E buff is decent but Kalista needs tanks", "Can't utilize ultimate effectively", "Underwhelming"] }
            ],
            tierD: [
                { name: "Yuumi", icon: "../icons/Yuumi.png", role: "Enchanter", reasons: ["Can't use Kalista ultimate at all", "Wastes Kalista's unique synergy", "One of worst supports"] },
                { name: "Soraka", icon: "../icons/Soraka.png", role: "Enchanter", reasons: ["Too passive, doesn't use Kalista ultimate", "No engage synergy", "Terrible pairing"] }
            ]
        },

        "Kog'Maw": {
            tierS: [
                { name: "Lulu", icon: "../icons/Lulu.png", role: "Enchanter", reasons: ["Shield and ultimate make Kog'Maw unkillable", "Speed boost enhances Kog'Maw's kiting", "One of the most famous protect-the-carry duos"] },
                { name: "Nami", icon: "../icons/Nami.png", role: "Enchanter", reasons: ["E buff on Kog'Maw's max HP damage is huge", "Healing sustains through laning", "Strong scaling synergy"] }
            ],
            tierA: [
                { name: "Braum", icon: "../icons/Braum.png", role: "Tank Support", reasons: ["Shield protects immobile Kog'Maw", "Provides frontline for short range hypercarry", "Good defensive synergy"] },
                { name: "Thresh", icon: "../icons/Thresh.png", role: "Hook Support", reasons: ["Lantern saves immobile Kog'Maw", "Provides peel and engage options", "Buffed utility in 25.24 helps Kog'Maw survive"] },
                { name: "Soraka", icon: "../icons/Soraka.png", role: "Enchanter", reasons: ["Massive healing sustains Kog'Maw", "Allows Kog'Maw to reach late game", "Strong sustain synergy"] }
            ],
            tierB: [
                { name: "Leona", icon: "../icons/Leona.png", role: "Tank Engage", reasons: ["Can engage but Kog'Maw prefers to scale", "Works in some lanes", "Better with early ADCs"] },
                { name: "Morgana", icon: "../icons/Morgana.png", role: "Control Mage", reasons: ["Black Shield protects but Kog needs more", "Decent but better enchanters exist", "Functional"] }
            ],
            tierC: [
                { name: "Nautilus", icon: "../icons/Nautilus.png", role: "Tank Engage", reasons: ["Too aggressive for Kog'Maw's scaling", "Doesn't help weak laning phase", "Not optimal"] },
                { name: "Zyra", icon: "../icons/Zyra.png", role: "Mage Support", reasons: ["No protection for immobile Kog'Maw", "Both too squishy", "Risky pairing"] }
            ],
            tierD: [
                { name: "Pyke", icon: "../icons/Pyke.png", role: "Assassin Support", reasons: ["Roaming leaves Kog'Maw alone and vulnerable", "Doesn't provide scaling protection", "Terrible pairing"] },
                { name: "Brand", icon: "../icons/Brand.png", role: "Mage Support", reasons: ["Zero peel for short range Kog'Maw", "Both extremely vulnerable", "One of worst pairings"] }
            ]
        },

        "Zeri": {
            tierS: [
                { name: "Lulu", icon: "../icons/Lulu.png", role: "Enchanter", reasons: ["Shield and ultimate enhance Zeri's mobility", "Speed boost stacks with Zeri's ultimate", "Perfect hypercarry protection"] },
                { name: "Nami", icon: "../icons/Nami.png", role: "Enchanter", reasons: ["E buff on Zeri's rapid fire is devastating", "Healing sustains through lane", "Strong scaling synergy"] }
            ],
            tierA: [
                { name: "Thresh", icon: "../icons/Thresh.png", role: "Hook Support", reasons: ["Lantern enables Zeri's aggressive plays", "Provides peel for mobile ADC", "Great A+ tier synergy with Thresh buffs"] },
                { name: "Yuumi", icon: "../icons/Yuumi.png", role: "Enchanter", reasons: ["Can stay attached during Zeri's hyper mobility", "Adaptive force amplifies Zeri's damage", "Good roaming synergy"] },
                { name: "Karma", icon: "../icons/Karma.png", role: "Enchanter", reasons: ["Speed boost stacks with Zeri's kit", "Shield helps Zeri survive", "Good poke synergy"] }
            ],
            tierB: [
                { name: "Braum", icon: "../icons/Braum.png", role: "Tank Support", reasons: ["Shield protects but Zeri has mobility", "Decent defensive option", "Works but enchanters better"] },
                { name: "Leona", icon: "../icons/Leona.png", role: "Tank Engage", reasons: ["Can engage but Zeri prefers to kite", "Works in aggressive lanes", "Not optimal"] }
            ],
            tierC: [
                { name: "Nautilus", icon: "../icons/Nautilus.png", role: "Tank Engage", reasons: ["Too slow for Zeri's mobile playstyle", "Doesn't maximize Zeri's strengths", "Awkward pairing"] },
                { name: "Morgana", icon: "../icons/Morgana.png", role: "Control Mage", reasons: ["Black Shield is okay but Zeri has mobility", "Doesn't enhance Zeri's kit", "Average"] }
            ],
            tierD: [
                { name: "Alistar", icon: "../icons/Alistar.png", role: "Tank Engage", reasons: ["Playstyles clash completely", "Too slow for Zeri's speed", "Poor synergy"] },
                { name: "Taric", icon: "../icons/Taric.png", role: "Tank Support", reasons: ["Needs melee range, Zeri is mobile skirmisher", "Incompatible playstyles", "Terrible"] }
            ]
        },

        "Nilah": {
            tierS: [
                { name: "Nami", icon: "../icons/Nami.png", role: "Enchanter", reasons: ["Nilah's passive doubles healing and shielding effects", "E buff on Nilah's melee is extremely strong", "One of the most synergistic duos"] },
                { name: "Lulu", icon: "../icons/Lulu.png", role: "Enchanter", reasons: ["Shield and ultimate doubled by Nilah's passive", "Perfect protection for melee ADC", "Incredible scaling synergy"] }
            ],
            tierA: [
                { name: "Thresh", icon: "../icons/Thresh.png", role: "Hook Support", reasons: ["Hook enables Nilah's melee engage", "Lantern helps Nilah escape", "Buffs make Thresh very viable for Nilah"] },
                { name: "Braum", icon: "../icons/Braum.png", role: "Tank Support", reasons: ["Nilah procs passive very fast", "Shield doubled by Nilah's passive", "Strong defensive synergy"] },
                { name: "Soraka", icon: "../icons/Soraka.png", role: "Enchanter", reasons: ["Healing doubled is insane sustain", "Allows Nilah to be extremely aggressive", "Strong synergy"] }
            ],
            tierB: [
                { name: "Leona", icon: "../icons/Leona.png", role: "Tank Engage", reasons: ["Engage is good but enchanters better for Nilah", "Works but doesn't use passive fully", "Decent option"] },
                { name: "Karma", icon: "../icons/Karma.png", role: "Enchanter", reasons: ["Shield doubled is strong", "Speed boost helps Nilah engage", "Good but Nami/Lulu better"] }
            ],
            tierC: [
                { name: "Nautilus", icon: "../icons/Nautilus.png", role: "Tank Engage", reasons: ["Engage is okay but doesn't maximize passive", "Better supports exist", "Not optimal"] },
                { name: "Morgana", icon: "../icons/Morgana.png", role: "Control Mage", reasons: ["Black Shield doesn't synergize with passive", "Average pairing", "Better options"] }
            ],
            tierD: [
                { name: "Zyra", icon: "../icons/Zyra.png", role: "Mage Support", reasons: ["No shields/heals for Nilah's passive", "Doesn't help melee ADC survive", "Poor synergy"] },
                { name: "Brand", icon: "../icons/Brand.png", role: "Mage Support", reasons: ["Zero synergy with Nilah's passive", "No protection for melee range", "Terrible pairing"] }
            ]
        },

        "Smolder": {
            tierS: [
                { name: "Braum", icon: "../icons/Braum.png", role: "Tank Support", reasons: ["Shield protects scaling Smolder", "Provides frontline for Smolder's growth", "Perfect protective synergy"] },
                { name: "Nami", icon: "../icons/Nami.png", role: "Enchanter", reasons: ["Sustain allows Smolder to stack safely", "E buff enhances Smolder's poke", "Strong scaling synergy"] }
            ],
            tierA: [
                { name: "Thresh", icon: "../icons/Thresh.png", role: "Hook Support", reasons: ["Provides picks and peel", "Lantern enables safe Smolder plays", "Great utility"] },
                { name: "Lulu", icon: "../icons/Lulu.png", role: "Enchanter", reasons: ["Shield protects Smolder while stacking", "Ultimate helps Smolder survive", "Good protective synergy"] },
                { name: "Karma", icon: "../icons/Karma.png", role: "Enchanter", reasons: ["Shield and poke help Smolder's lane", "Speed boost aids positioning", "Good synergy"] }
            ],
            tierB: [
                { name: "Leona", icon: "../icons/Leona.png", role: "Tank Engage", reasons: ["Can engage but Smolder wants to scale", "Works but not optimal", "Better with early ADCs"] },
                { name: "Morgana", icon: "../icons/Morgana.png", role: "Control Mage", reasons: ["Black Shield protects but Smolder needs scaling support", "Functional", "Better options exist"] }
            ],
            tierC: [
                { name: "Nautilus", icon: "../icons/Nautilus.png", role: "Tank Engage", reasons: ["Too aggressive for Smolder's stacking", "Doesn't help Smolder scale", "Not optimal"] },
                { name: "Zyra", icon: "../icons/Zyra.png", role: "Mage Support", reasons: ["No protection for scaling Smolder", "Both vulnerable early", "Risky"] }
            ],
            tierD: [
                { name: "Pyke", icon: "../icons/Pyke.png", role: "Assassin Support", reasons: ["Roaming leaves Smolder alone to stack", "Doesn't provide scaling protection", "Terrible"] },
                { name: "Brand", icon: "../icons/Brand.png", role: "Mage Support", reasons: ["Zero protection for immobile Smolder", "Doesn't help stacking phase", "Poor pairing"] }
            ]
        },

        "Ziggs": {
            tierS: [
                { 
                    name: "Lux", 
                    icon: "../icons/Lux.png", 
                    role: "Mage Support",
                    reasons: [
                        "Double artillery mage poke from extreme range is oppressive",
                        "Both excel at sieging towers and wave clear",
                        "CC chains and burst combos can delete enemies instantly"
                    ]
                },
                { 
                    name: "Karma", 
                    icon: "../icons/Karma.png", 
                    role: "Enchanter",
                    reasons: [
                        "Empowered Q plus Ziggs bombs creates insane poke damage",
                        "Shield and speed boost keep Ziggs safe while bombing",
                        "Both have strong wave clear and siege potential"
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Xerath", 
                    icon: "../icons/Xerath.png", 
                    role: "Mage Support",
                    reasons: [
                        "Double long-range artillery destroys enemy positioning",
                        "Both can poke from fog of war safely",
                        "Excellent objective control and siege power"
                    ]
                },
                { 
                    name: "Zyra", 
                    icon: "../icons/Zyra.png", 
                    role: "Mage Support",
                    reasons: [
                        "Root setup guarantees Ziggs full combo lands",
                        "Zone control with plants and bombs is extreme",
                        "Strong team fight and objective control"
                    ]
                },
                { 
                    name: "Brand", 
                    icon: "../icons/Brand.png", 
                    role: "Mage Support",
                    reasons: [
                        "Double AP damage forces enemies into impossible situations",
                        "Both excel at area denial and burst damage",
                        "Strong mid-game power spike together"
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Morgana", 
                    icon: "../icons/Morgana.png", 
                    role: "Control Mage",
                    reasons: [
                        "Black Shield protects Ziggs but both want to poke",
                        "Snare helps Ziggs land abilities but awkward playstyle",
                        "Works but better mage supports exist"
                    ]
                },
                { 
                    name: "Nami", 
                    icon: "../icons/Nami.png", 
                    role: "Enchanter",
                    reasons: [
                        "Healing sustains poke wars but Ziggs wants mage support",
                        "E buff on Ziggs autos is minimal value",
                        "Functional but not optimal for artillery mage"
                    ]
                },
                { 
                    name: "Vel'Koz", 
                    icon: "../icons/Vel'Koz.png", 
                    role: "Mage Support",
                    reasons: [
                        "Double poke is good but both are immobile",
                        "Strong damage but vulnerable to engage",
                        "Works but risky against dive compositions"
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Thresh", 
                    icon: "../icons/Thresh.png", 
                    role: "Hook Support",
                    reasons: [
                        "Hook is okay but Ziggs doesn't follow up well",
                        "Ziggs wants to stay far back, Thresh wants to engage",
                        "Playstyle mismatch"
                    ]
                },
                { 
                    name: "Leona", 
                    icon: "../icons/Leona.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Ziggs is long-range, Leona is melee engage",
                        "Completely different playstyles clash",
                        "Poor synergy overall"
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Alistar", 
                    icon: "../icons/Alistar.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Ziggs wants to poke from range, Alistar wants to dive",
                        "Completely incompatible playstyles",
                        "One of the worst pairings for Ziggs"
                    ]
                },
                { 
                    name: "Braum", 
                    icon: "../icons/Braum.png", 
                    role: "Tank Support",
                    reasons: [
                        "Ziggs has zero synergy with Braum's melee kit",
                        "Abilities don't proc Braum passive effectively",
                        "Terrible pairing for artillery mage"
                    ]
                }
            ]
        },

        "Seraphine": {
            tierS: [
                { 
                    name: "Senna", 
                    icon: "../icons/Senna.png", 
                    role: "Marksman Support",
                    reasons: [
                        "Double scaling bot lane with incredible late game power",
                        "Both have healing, shields, and crowd control",
                        "One of the strongest APC + enchanter marksman duos"
                    ]
                },
                { 
                    name: "Sona", 
                    icon: "../icons/Sona.png", 
                    role: "Enchanter",
                    reasons: [
                        "Musical duo with incredible sustain and scaling",
                        "Double enchanter buffs create unkillable team fights",
                        "Both excel at team fighting and group utility"
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Lux", 
                    icon: "../icons/Lux.png", 
                    role: "Mage Support",
                    reasons: [
                        "CC chains allow Seraphine to land full combo",
                        "Double shield and poke is very strong",
                        "Good burst and utility synergy"
                    ]
                },
                { 
                    name: "Karma", 
                    icon: "../icons/Karma.png", 
                    role: "Enchanter",
                    reasons: [
                        "Shields and speed boosts enhance Seraphine's kiting",
                        "Strong poke synergy in lane phase",
                        "Both scale well into team fights"
                    ]
                },
                { 
                    name: "Nami", 
                    icon: "../icons/Nami.png", 
                    role: "Enchanter",
                    reasons: [
                        "Double healing and CC is oppressive",
                        "Bubble into Seraphine charm is guaranteed kill",
                        "Strong enchanter synergy"
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Thresh", 
                    icon: "../icons/Thresh.png", 
                    role: "Hook Support",
                    reasons: [
                        "Hook provides picks for Seraphine's follow up",
                        "Can work due to Thresh buffs, but Seraphine usually prefers enchanters",
                        "Functional pairing"
                    ]
                },
                { 
                    name: "Swain", 
                    icon: "../icons/Swain.png", 
                    role: "Battle Mage",
                    reasons: [
                        "Pull into Seraphine charm creates long CC chains",
                        "Both are battle mages with good team fighting",
                        "Works but Seraphine prefers enchanters"
                    ]
                },
                { 
                    name: "Morgana", 
                    icon: "../icons/Morgana.png", 
                    role: "Control Mage",
                    reasons: [
                        "Black Shield is decent for Seraphine",
                        "Snare helps but doesn't maximize Seraphine's strengths",
                        "Functional but not optimal"
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Leona", 
                    icon: "../icons/Leona.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Too aggressive for Seraphine's scaling nature",
                        "Seraphine prefers poke and sustain over all-ins",
                        "Awkward synergy"
                    ]
                },
                { 
                    name: "Nautilus", 
                    icon: "../icons/Nautilus.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Engage doesn't fit Seraphine's poke mage style",
                        "Better with traditional ADCs",
                        "Poor fit"
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Alistar", 
                    icon: "../icons/Alistar.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Playstyles completely clash",
                        "Seraphine is long range poke, Alistar is melee dive",
                        "Terrible synergy"
                    ]
                },
                { 
                    name: "Blitzcrank", 
                    icon: "../icons/Blitzcrank.png", 
                    role: "Hook Support",
                    reasons: [
                        "Hook into melee range doesn't help Seraphine's poke",
                        "Doesn't provide the scaling support Seraphine needs",
                        "Poor pairing for APC"
                    ]
                }
            ]
        },

        "Yunara": {
            tierS: [
                { 
                    name: "Lulu", 
                    icon: "../icons/Lulu.png", 
                    role: "Enchanter",
                    reasons: [
                        "Shield and ultimate make Yunara unkillable while stacking Q",
                        "Speed boost helps Yunara position for AOE splash damage",
                        "Polymorph provides peel for immobile traditional ADC"
                    ]
                },
                { 
                    name: "Milio", 
                    icon: "../icons/Milio.png", 
                    role: "Enchanter",
                    reasons: [
                        "W extends Yunara's attack range for safer trading",
                        "Ultimate cleanses CC allowing aggressive plays with Q stacks",
                        "Shield and heal sustain Yunara through laning phase"
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Thresh", 
                    icon: "../icons/Thresh.png", 
                    role: "Hook Support",
                    reasons: [
                        "Buffed Thresh is great for keeping Yunara safe",
                        "Hook locks down targets for Yunara's AOE splash autos",
                        "Lantern provides escape tool for immobile marksman"
                    ]
                },
                { 
                    name: "Nami", 
                    icon: "../icons/Nami.png", 
                    role: "Enchanter",
                    reasons: [
                        "E buff enhances Yunara's on-hit and splash damage",
                        "Bubble provides CC setup for Yunara's Q stack burst",
                        "Healing sustains trades while Yunara scales"
                    ]
                },
                { 
                    name: "Braum", 
                    icon: "../icons/Braum.png", 
                    role: "Tank Support",
                    reasons: [
                        "Yunara's attack speed procs Braum passive quickly",
                        "Shield tanks damage while Yunara stacks Q safely",
                        "Provides strong frontline protection for traditional ADC"
                    ]
                },
                { 
                    name: "Renata Glasc", 
                    icon: "../icons/Renata Glasc.png", 
                    role: "Enchanter",
                    reasons: [
                        "W revive allows Yunara to play aggressively",
                        "Q provides picks and CC for Yunara to follow up",
                        "Strong protective tools for scaling ADC"
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Morgana", 
                    icon: "../icons/Morgana.png", 
                    role: "Control Mage",
                    reasons: [
                        "Black Shield protects Yunara from engage",
                        "Binding provides setup but Yunara prefers enchanters",
                        "Works but lacks the buffs Yunara benefits from"
                    ]
                },
                { 
                    name: "Leona", 
                    icon: "../icons/Leona.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Strong engage but Yunara needs time to stack Q",
                        "Provides tankiness but Yunara prefers shields/heals",
                        "Works in aggressive lanes but not optimal"
                    ]
                },
                { 
                    name: "Nautilus", 
                    icon: "../icons/Nautilus.png", 
                    role: "Tank Engage",
                    reasons: [
                        "Point-click CC is reliable but Yunara wants enchanters",
                        "Provides frontline but doesn't enhance Yunara's damage",
                        "Functional but better options exist"
                    ]
                },
                { 
                    name: "Rakan", 
                    icon: "../icons/Rakan.png", 
                    role: "Engage Support",
                    reasons: [
                        "Knock-up provides setup for Q stacks",
                        "Good mobility but Yunara prefers more protective supports",
                        "Works but enchanters synergize better"
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Zilean", 
                    icon: "../icons/Zilean.png", 
                    role: "Enchanter",
                    reasons: [
                        "Revive is good but Yunara prefers active buffs",
                        "Speed boost helps but less impactful than Lulu/Milio",
                        "Stuns are okay but not ideal for Yunara's kit"
                    ]
                },
                { 
                    name: "Pantheon", 
                    icon: "../icons/Pantheon.png", 
                    role: "Fighter Support",
                    reasons: [
                        "Early aggression can work but Yunara wants to scale",
                        "Stun setup is decent but risky with squishy ADC",
                        "Better with burst ADCs"
                    ]
                },
                { 
                    name: "Karma", 
                    icon: "../icons/Karma.png", 
                    role: "Enchanter",
                    reasons: [
                        "Shield and speed are okay but Yunara needs stronger buffs",
                        "Poke synergy is decent early",
                        "Falls off compared to other enchanters"
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Pyke", 
                    icon: "../icons/Pyke.png", 
                    role: "Assassin Support",
                    reasons: [
                        "Roaming leaves immobile Yunara vulnerable",
                        "Doesn't provide the protection traditional ADCs need",
                        "Gold sharing doesn't compensate for lack of peel"
                    ]
                },
                { 
                    name: "Senna", 
                    icon: "../icons/Senna.png", 
                    role: "Marksman Support",
                    reasons: [
                        "Double ADC with no frontline or protection",
                        "Both need to scale, extremely weak early",
                        "Doesn't provide buffs Yunara benefits from"
                    ]
                }
            ]
        }
    },

    // Support type recommendations for each ADC
    supportTypeRecommendations: {
        "Ashe": "Engage or Control Mages work best with Ashe due to her strong utility and crowd control. Thresh (buffed), Leona, and Zyra can chain CC with Ashe's ultimate for easy picks.",
        "Caitlyn": "Poke or Control Mages excel with Caitlyn's long range and trap setup. Morgana and Lux can create extended CC chains, while Caitlyn safely deals damage from distance.",
        "Draven": "Tank Engage supports are ideal for Draven's aggressive early game. Thresh, Leona, and Nautilus can lock down targets, allowing Draven to cash in on kills and stack his passive.",
        "Ezreal": "Enchanters or Poke Mages match Ezreal's safe, scaling playstyle. Karma, Lux, and Yuumi complement his poke damage and mobility, allowing him to farm safely and scale.",
        "Jhin": "Playmaking Hook or Control supports work perfectly with Jhin's setup-heavy kit. Thresh, Pantheon, and Morgana can lock targets for Jhin's 4th shot and abilities.",
        "Jinx": "Enchanters are essential for Jinx to safely scale into a late-game hypercarry. Nami, Lulu, and Thresh provide protection, peel, and sustain while Jinx farms.",
        "Kai'Sa": "Tank Engage supports enable Kai'Sa's aggressive ultimate dives. Nautilus, Thresh, and Leona provide reliable engage markers for Kai'Sa to dash in and burst targets.",
        "Kalista": "Tank Engage supports synergize perfectly with Kalista's unique ultimate. Thresh, Alistar, and Nautilus can be thrown into enemies, creating devastating engage combos.",
        "Kog'Maw": "Enchanters are mandatory for protecting immobile hypercarry Kog'Maw. Lulu, Nami, and Braum provide shields, healing, and frontline to keep Kog'Maw alive while he shreds enemies.",
        "Lucian": "Aggressive Engage or Enchanter supports match Lucian's burst-heavy, short-range playstyle. Thresh, Nami, and Braum help Lucian dominate early fights and snowball.",
        "Miss Fortune": "Engage or AOE Control supports maximize MF's ultimate. Leona, Zyra, and Thresh can lock multiple enemies in place for MF's Bullet Time to devastate teamfights.",
        "Samira": "Tank Engage with knock-ups are essential for Samira's passive and combos. Thresh, Nautilus, and Alistar provide the CC needed for Samira to build style and unleash her ultimate.",
        "Sivir": "Enchanters or Utility supports complement Sivir's scaling and wave clear. Lulu, Karma, and Nami help Sivir survive lane and enhance her team fight utility with ultimate synergies.",
        "Tristana": "Tank Engage supports enable Tristana's explosive all-in potential. Thresh, Alistar, and Leona can lock targets for Tristana to stack her bomb and secure resets.",
        "Twitch": "Enchanters protect invisible Twitch and amplify his late-game carry potential. Lulu, Yuumi, and Nami provide shields, healing, and buffs for Twitch's surprise assassinations.",
        "Vayne": "Enchanters or Peel-Heavy supports are critical for Vayne's weak early game. Lulu, Thresh, and Nami help Vayne survive laning and scale into a 1v9 late-game carry.",
        "Varus": "Poke or Control Mages synergize with Varus's long-range poke style. Karma, Thresh, and Zyra can set up picks and enhance Varus's ability to control fights from distance.",
        "Xayah": "Engage or Playmaking supports work well with Xayah's feather mechanics. Rakan (iconic duo), Thresh, and Nautilus help Xayah set up feather recalls for maximum damage.",
        "Aphelios": "Enchanters or Versatile Tank supports help complex Aphelios execute weapon combos safely. Lulu, Thresh, and Nautilus provide protection and setup for his situational strengths.",
        "Zeri": "Enchanters enhance Zeri's hyper-mobile, kiting playstyle. Lulu, Nami, and Thresh provide speed boosts, shields, and buffs that stack with Zeri's ultimate mobility.",
        "Nilah": "Enchanters with strong shields/heals are perfect for Nilah's unique passive. Nami, Lulu, and Braum have their effects doubled, making them incredibly powerful with this melee ADC.",
        "Smolder": "Protective Enchanters or Tanks help Smolder safely stack and scale. Braum, Nami, and Thresh protect Smolder during his stacking phase and enable his late-game power.",
        "Ziggs": "Poke or Artillery Mages create oppressive double-mage bot lanes. Lux, Karma, and Xerath synergize with Ziggs's long-range poke and siege potential for dominant lane control.",
        "Seraphine": "Enchanters or Utility Mages complement Seraphine's scaling APC playstyle. Senna, Sona, and Lux provide sustain, shields, and CC that enhance Seraphine's team fight utility.",
        "Yunara": "Enchanters are ideal for traditional ADC Yunara's stacking and scaling playstyle. Lulu, Milio, and Nami provide buffs, protection, and sustain to help Yunara dominate fights with Q stacks."
    }
};