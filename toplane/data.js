// Toplane Counter Data based on professional guides and meta analysis
//
// PATCH 25.24 UPDATE (Season 15):
// - NEW CHAMPION: Zaahen added to the roster.
// - Malphite & K'Sante are currently S-Tier Dominant picks.
// - Volibear adjustments reflect his new top lane power.
//
// HOW TO ADD NEW TOPLANERS:
// 1. Add to the toplaners array: { name: "NewToplaner", icon: "../icons/NewToplaner.png" }
// 2. Add a new section in counters: "NewToplaner": { tierS: [...], tierA: [...], etc. }
// 3. Add a new entry in counterStrategies: "NewToplaner": "General strategy here..."
//
const toplaneData = {
    toplaners: [
        { name: "Aatrox", icon: "../icons/Aatrox.png" },
        { name: "Darius", icon: "../icons/Darius.png" },
        { name: "Fiora", icon: "../icons/Fiora.png" },
        { name: "Garen", icon: "../icons/Garen.png" },
        { name: "Irelia", icon: "../icons/Irelia.png" },
        { name: "Jax", icon: "../icons/Jax.png" },
        { name: "Kayle", icon: "../icons/Kayle.png" },
        { name: "Kled", icon: "../icons/Kled.png" },
        { name: "Malphite", icon: "../icons/Malphite.png" },
        { name: "Mordekaiser", icon: "../icons/Mordekaiser.png" },
        { name: "Nasus", icon: "../icons/Nasus.png" },
        { name: "Olaf", icon: "../icons/Olaf.png" },
        { name: "Ornn", icon: "../icons/Ornn.png" },
        { name: "Renekton", icon: "../icons/Renekton.png" },
        { name: "Riven", icon: "../icons/Riven.png" },
        { name: "Rumble", icon: "../icons/Rumble.png" },
        { name: "Sett", icon: "../icons/Sett.png" },
        { name: "Sylas", icon: "../icons/Sylas.png" },
        { name: "Teemo", icon: "../icons/Teemo.png" },
        { name:"Tryndamere", icon: "../icons/Tryndamere.png" },
        { name: "Vayne", icon: "../icons/Vayne.png" },
        { name: "Vladimir", icon: "../icons/Vladimir.png" },
        { name: "Volibear", icon: "../icons/Volibear.png" },
        { name: "Yasuo", icon: "../icons/Yasuo.png" },
        { name: "Yone", icon: "../icons/Yone.png" },
        { name: "Yorick", icon: "../icons/Yorick.png" },
        // --- NEW CHAMPIONS ADDED ---
        { name: "Akali", icon: "../icons/Akali.png" },
        { name: "Camille", icon: "../icons/Camille.png" },
        { name: "Cho'Gath", icon: "../icons/Cho'Gath.png" },
        { name: "Dr. Mundo", icon: "../icons/Dr. Mundo.png" },
        { name: "Gangplank", icon: "../icons/Gangplank.png" },
        { name: "Gnar", icon: "../icons/Gnar.png" },
        { name: "Gragas", icon: "../icons/Gragas.png" },
        { name: "Gwen", icon: "../icons/Gwen.png" },
        { name: "Illaoi", icon: "../icons/Illaoi.png" },
        { name: "Jayce", icon: "../icons/Jayce.png" },
        { name: "K'Sante", icon: "../icons/K'Sante.png" },
        { name: "Kennen", icon: "../icons/Kennen.png" },
        { name: "Poppy", icon: "../icons/Poppy.png" },
        { name: "Quinn", icon: "../icons/Quinn.png" },
        { name: "Shen", icon: "../icons/Shen.png" },
        { name: "Singed", icon: "../icons/Singed.png" },
        { name: "Sion", icon: "../icons/Sion.png" },
        { name: "Tahm Kench", icon: "../icons/Tahm Kench.png" },
        { name: "Urgot", icon: "../icons/Urgot.png" },
        { name: "Warwick", icon: "../icons/Warwick.png" },
        { name: "Wukong", icon: "../icons/Wukong.png" },
        { name: "Zaahen", icon: "../icons/Zaahen.png" }
    ],

    // Counter-picks organized by tier for each enemy toplaner
    counters: {
        // --- EXISTING DATA ---
        "Garen": {
            tierS: [
                { 
                    name: "Darius", 
                    icon: "../icons/Darius.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Wins any extended trade with Hemorrhage (Passive).",
                        "Can easily re-stack passive if Garen uses Q to run away.",
                        "Applies Grievous Wounds with ult, countering Garen's passive."
                    ]
                },
                { 
                    name: "Vayne", 
                    icon: "../icons/Vayne.png", 
                    role: "Marksman",
                    reasons: [
                        "True damage from W (Silver Bolts) ignores Garen's armor stacking.",
                        "Can kite him endlessly with Q (Tumble) and E (Condemn).",
                        "Outranges and pokes him down, making his passive useless."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Teemo", 
                    icon: "../icons/Teemo.png", 
                    role: "Marksman",
                    reasons: [
                        "Q (Blinding Dart) makes Garen's Q trade completely useless.",
                        "Constant ranged poke and kiting with W (Move Quick).",
                        "Mushrooms (R) control the lane and prevent him from engaging."
                    ]
                },
                { 
                    name: "Kayle", 
                    icon: "../icons/Kayle.png", 
                    role: "Fighter",
                    reasons: [
                        "Can poke him from range and kite with Q and W.",
                        "Outscales him significantly in the late game.",
                        "Ultimate (R) completely counters Garen's R (Demacian Justice)."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Fiora", 
                    icon: "../icons/Fiora.png", 
                    role: "Skirmisher",
                    reasons: [
                        "W (Riposte) can parry his Q (Silence) or his R (Ultimate).",
                        "True damage from Vitals ignores his armor.",
                        "Can win extended trades if she plays around his E (Spin)."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Sett", 
                    icon: "../icons/Sett.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Skill matchup. Sett wins short trades, Garen wins long trades.",
                        "Garen's E (Spin) can out-damage Sett's W (Haymaker) shield.",
                        "Garen's silence (Q) can interrupt Sett's combo."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Irelia", 
                    icon: "../icons/Irelia.png", 
                    role: "Diver",
                    reasons: [
                        "Garen's Q (Silence) interrupts Irelia's Q (Bladesurge) combo.",
                        "Garen's W (Courage) and E (Spin) make him too tanky to burst.",
                        "Very difficult for Irelia to win trades."
                    ]
                }
            ]
        },
        "Aatrox": {
            tierS: [
                { 
                    name: "Irelia", 
                    icon: "../icons/Irelia.png", 
                    role: "Diver",
                    reasons: [
                        "High mobility with Q (Bladesurge) to dodge Aatrox's Q sweet spots.",
                        "Can easily stack her passive and win all-in trades.",
                        "Strong burst damage to kill him through his healing."
                    ]
                },
                { 
                    name: "Fiora", 
                    icon: "../icons/Fiora.png", 
                    role: "Skirmisher",
                    reasons: [
                        "W (Riposte) can parry his Q3 (Knockup) or W (Chain).",
                        "High mobility to dodge his abilities.",
                        "True damage and built-in healing win extended duels."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Kled", 
                    icon: "../icons/Kled.png", 
                    role: "Diver",
                    reasons: [
                        "Q (Bear Trap on a Rope) applies 60% Grievous Wounds.",
                        "High mobility with E (Jousting) to dodge Qs.",
                        "Can remount (Skaarl) to win long trades."
                    ]
                },
                { 
                    name: "Renekton", 
                    icon: "../icons/Renekton.png", 
                    role: "Diver",
                    reasons: [
                        "Strong early game trades with W (Stun).",
                        "Can dash in and out (E) to avoid his Q sweet spots.",
                        "Can build early Grievous Wounds and still dominate."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Jax", 
                    icon: "../icons/Jax.png", 
                    role: "Skirmisher",
                    reasons: [
                        "E (Counter Strike) can dodge Aatrox's auto-attacks.",
                        "Can Q (Leap Strike) to dodge his Qs.",
                        "Scales very well, but needs to avoid early poke."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Darius", 
                    icon: "../icons/Darius.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Skill matchup. Depends on who lands their abilities.",
                        "Aatrox can poke Darius from range.",
                        "Darius wins if he can get on top of Aatrox."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Malphite", 
                    icon: "../icons/Malphite.png", 
                    role: "Tank",
                    reasons: [
                        "Aatrox can easily heal off Malphite's low damage.",
                        "Armor stacking is less effective due to Aatrox's healing.",
                        "Aatrox can poke him down and win lane."
                    ]
                }
            ]
        },
        "Teemo": {
            tierS: [
                { 
                    name: "Yorick", 
                    icon: "../icons/Yorick.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Can spawn Mist Walkers (Ghouls) from a safe distance.",
                        "W (Dark Procession) wall traps the immobile Teemo.",
                        "Ghouls and Maiden (R) will auto-push and kill mushrooms."
                    ]
                },
                { 
                    name: "Irelia", 
                    icon: "../icons/Irelia.png", 
                    role: "Diver",
                    reasons: [
                        "Can Q (Bladesurge) to low-health minions to close the gap.",
                        "High mobility and burst damage can one-shot Teemo.",
                        "Can build Wit's End to counter his magic damage."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Akali", 
                    icon: "../icons/Akali.png", 
                    role: "Assassin",
                    reasons: [
                        "W (Twilight Shroud) allows her to avoid Teemo's auto-attacks.",
                        "High mobility with R (Perfect Execution) to all-in him.",
                        "Strong burst damage."
                    ]
                },
                { 
                    name: "Malphite", 
                    icon: "../icons/Malphite.png", 
                    role: "Tank",
                    reasons: [
                        "Can stack Magic Resist and become unkillable for Teemo.",
                        "Point-and-click R (Unstoppable Force) for easy all-in.",
                        "Q (Seismic Shard) allows him to poke back."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Sylas", 
                    icon: "../icons/Sylas.png", 
                    role: "Burst Mage",
                    reasons: [
                        "Can heal back Teemo's poke with W (Kingslayer).",
                        "Stealing Teemo's R (Mushrooms) is very effective.",
                        "Strong all-in burst damage."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Garen", 
                    icon: "../icons/Garen.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Struggles to get on top of Teemo.",
                        "Q (Blinding Dart) counters Garen's Q (Decisive Strike).",
                        "A very difficult matchup for Garen."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Nasus", 
                    icon: "../icons/Nasus.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Gets poked out of lane and cannot stack Q (Siphoning Strike).",
                        "Teemo's blind (Q) counters Nasus's Q.",
                        "One of the hardest counters to Nasus."
                    ]
                }
            ]
        },
        "Darius": {
            tierS: [
                { 
                    name: "Vayne", 
                    icon: "../icons/Vayne.png", 
                    role: "Marksman",
                    reasons: [
                        "Ranged champion who can kite him endlessly.",
                        "Q (Tumble) can dodge his Q (Decimate) or E (Apprehend).",
                        "E (Condemn) can push him away if he gets too close."
                    ]
                },
                { 
                    name: "Kayle", 
                    icon: "../icons/Kayle.png", 
                    role: "Fighter",
                    reasons: [
                        "Can poke him from range and kite with Q (Radiant Blast).",
                        "Completely outscales him in the late game.",
                        "R (Divine Judgment) can block his entire R (Noxian Guillotine) damage."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Fiora", 
                    icon: "../icons/Fiora.png", 
                    role: "Skirmisher",
                    reasons: [
                        "W (Riposte) can parry his R (Ultimate) or his E (Pull).",
                        "Wins extended duels with her Vitals (Passive).",
                        "High mobility to dodge his Q (Decimate)."
                    ]
                },
                { 
                    name: "Yorick", 
                    icon: "../icons/Yorick.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Can poke him from a safe distance with Ghouls.",
                        "W (Dark Procession) wall can trap Darius.",
                        "Can win trades if he lands his E (Mourning Mist)."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Renekton", 
                    icon: "../icons/Renekton.png", 
                    role: "Diver",
                    reasons: [
                        "Can win short trades with his W (Stun) and E (Dash) out.",
                        "Needs to avoid extended trades at all costs.",
                        "Skill matchup, but favored for Renekton if played correctly."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Sett", 
                    icon: "../icons/Sett.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Skill matchup. Darius wins if he can stack his passive.",
                        "Sett can win if he lands his W (Haymaker) true damage.",
                        "Very even and volatile matchup."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Garen", 
                    icon: "../icons/Garen.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Darius wins the extended trade due to his passive.",
                        "Garen cannot out-damage Darius's healing and bleed.",
                        "Very difficult for Garen."
                    ]
                }
            ]
        },
        "Malphite": {
            tierS: [
                { 
                    name: "Sylas", 
                    icon: "../icons/Sylas.png", 
                    role: "Burst Mage",
                    reasons: [
                        "Steals Malphite's R (Unstoppable Force), one of the best ults.",
                        "Deals magic damage, which Malphite is weak against early.",
                        "W (Kingslayer) healing outsustains Malphite's poke."
                    ]
                },
                { 
                    name: "Rumble", 
                    icon: "../icons/Rumble.png", 
                    role: "Battle Mage",
                    reasons: [
                        "High, sustained magic damage (Q - Flamespitter) melts him.",
                        "Can poke him out of lane easily.",
                        "R (The Equalizer) is devastating in teamfights."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Vladimir", 
                    icon: "../icons/Vladimir.png", 
                    role: "Battle Mage",
                    reasons: [
                        "Deals magic damage and outsustains Malphite's poke.",
                        "W (Sanguine Pool) can dodge Malphite's ultimate.",
                        "Scales much better into the late game."
                    ]
                },
                { 
                    name: "Mordekaiser", 
                    icon: "../icons/Mordekaiser.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Deals magic damage with his passive (Darkness Rise).",
                        "R (Realm of Death) can isolate Malphite in teamfights.",
                        "Wins extended trades."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Aatrox", 
                    icon: "../icons/Aatrox.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Can heal off Malphite's low damage.",
                        "Malphite's armor stacking is less effective.",
                        "Can poke him, but a skill matchup."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Teemo", 
                    icon: "../icons/Teemo.png", 
                    role: "Marksman",
                    reasons: [
                        "Can poke him, but Malphite can stack MR.",
                        "Malphite's R (Ultimate) is a hard counter to Teemo.",
                        "Favored for Malphite post-6."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Yasuo", 
                    icon: "../icons/Yasuo.png", 
                    role: "Skirmisher",
                    reasons: [
                        "All AD damage, which Malphite builds armor against.",
                        "Malphite's E (Ground Slam) reduces Yasuo's attack speed.",
                        "One of the hardest counters to Yasuo."
                    ]
                }
            ]
        },
        "Tryndamere": {
            tierS: [
                { 
                    name: "Malphite", 
                    icon: "../icons/Malphite.png", 
                    role: "Tank",
                    reasons: [
                        "Stacks armor, making Tryndamere's damage useless.",
                        "E (Ground Slam) reduces his attack speed significantly.",
                        "Can easily disengage with Q (Seismic Shard) when he ults."
                    ]
                },
                { 
                    name: "Jax", 
                    icon: "../icons/Jax.png", 
                    role: "Skirmisher",
                    reasons: [
                        "E (Counter Strike) blocks all of Tryndamere's auto-attacks.",
                        "Wins extended trades.",
                        "Can leap away (Q) when Tryndamere ults."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Renekton", 
                    icon: "../icons/Renekton.png", 
                    role: "Diver",
                    reasons: [
                        "Strong early game trades.",
                        "Point-and-click W (Stun) to lock him down.",
                        "Can dash away (E) when he ults."
                    ]
                },
                { 
                    name: "Teemo", 
                    icon: "../icons/Teemo.png", 
                    role: "Marksman",
                    reasons: [
                        "Q (Blinding Dart) makes his auto-attacks miss.",
                        "Can kite him easily.",
                        "Mushrooms (R) control his engage paths."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Volibear", 
                    icon: "../icons/Volibear.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Can win trades with his W (Frenzied Maul) healing.",
                        "E (Sky Splitter) shield blocks damage.",
                        "Can disengage with Q (Thundering Smash) when he ults."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Kayle", 
                    icon: "../icons/Kayle.png", 
                    role: "Fighter",
                    reasons: [
                        "Skill matchup. Kayle's R (Ultimate) can counter his R.",
                        "Tryndamere can dive her easily before she scales.",
                        "Kayle wins if she survives laning phase."
                    ]
                },
                { 
                    name: "Zaahen", 
                    icon: "../icons/Zaahen.png", 
                    role: "Fighter",
                    reasons: [
                        "Zaahen can revive with passive, matching Trynd's ult.",
                        "Tryndamere wins early, Zaahen wins late.",
                        "Volatile skill matchup."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Garen", 
                    icon: "../icons/Garen.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Tryndamere can ult (R) Garen's R (Ultimate).",
                        "Can win extended trades.",
                        "Garen's Q (Silence) is not enough to stop him."
                    ]
                }
            ]
        },
        "Fiora": {
            tierS: [
                { 
                    name: "Renekton", 
                    icon: "../icons/Renekton.png", 
                    role: "Diver",
                    reasons: [
                        "Point-and-click W (Stun) can't be parried effectively.",
                        "Wins short, bursty trades; Fiora wants extended trades.",
                        "Can dash away (E) to avoid her Riposte (W)."
                    ]
                },
                { 
                    name: "Malphite", 
                    icon: "../icons/Malphite.png", 
                    role: "Tank",
                    reasons: [
                        "E (Ground Slam) attack speed slow cripples Fiora.",
                        "Stacks armor, making her non-vital damage very low.",
                        "Point-and-click Q (Poke) is hard to Riposte."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Jax", 
                    icon: "../icons/Jax.png", 
                    role: "Skirmisher",
                    reasons: [
                        "E (Counter Strike) blocks her auto-attacks.",
                        "Can build armor and still out-scale her.",
                        "Skill matchup, but favored for Jax if E is used well."
                    ]
                },
                { 
                    name: "Kled", 
                    icon: "../icons/Kled.png", 
                    role: "Diver",
                    reasons: [
                        "Q (Bear Trap) applies Grievous Wounds to stop her healing.",
                        "Strong all-in can burst her before she procs vitals.",
                        "W (Violent Tendencies) wins early auto trades."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Teemo", 
                    icon: "../icons/Teemo.png", 
                    role: "Marksman",
                    reasons: [
                        "Q (Blinding Dart) stops her from proccing Vitals with autos.",
                        "Can kite her, but vulnerable if Fiora all-ins.",
                        "Skill matchup."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Darius", 
                    icon: "../icons/Darius.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Very skill-dependent. Fiora can parry his Q or R.",
                        "Darius wins if Fiora misstimes her W (Riposte).",
                        "Fiora wins if she can proc her R (Grand Challenge) vitals."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Mordekaiser", 
                    icon: "../icons/Mordekaiser.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Fiora can easily parry his Q or E.",
                        "Fiora's R (Grand Challenge) provides healing inside his R.",
                        "Fiora has the mobility and tools to win the 1v1."
                    ]
                }
            ]
        },
        "Irelia": {
            tierS: [
                { 
                    name: "Renekton", 
                    icon: "../icons/Renekton.png", 
                    role: "Diver",
                    reasons: [
                        "Point-and-click W (Stun) interrupts her Q (Bladesurge) combo.",
                        "Strong early trades deny her from stacking passive.",
                        "Can burst her down before she can heal."
                    ]
                },
                { 
                    name: "Volibear", 
                    icon: "../icons/Volibear.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Wins stat-check duels at all stages.",
                        "W (Frenzied Maul) provides healing and burst.",
                        "E (Sky Splitter) shield blocks her burst."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Jax", 
                    icon: "../icons/Jax.png", 
                    role: "Skirmisher",
                    reasons: [
                        "E (Counter Strike) blocks her Q and auto-attacks.",
                        "Can win extended trades.",
                        "Outscales her in the 1v1."
                    ]
                },
                { 
                    name: "Garen", 
                    icon: "../icons/Garen.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Q (Silence) interrupts her Q combo.",
                        "E (Spin) wins the trade if Irelia is silenced.",
                        "Too tanky for Irelia to burst down early."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Sett", 
                    icon: "../icons/Sett.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Can E (Facebreaker) her mid-Q.",
                        "Strong early game trades.",
                        "W (Haymaker) shield can turn the fight."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Fiora", 
                    icon: "../icons/Fiora.png", 
                    role: "Skirmisher",
                    reasons: [
                        "Pure skill matchup.",
                        "Depends on Fiora parrying Irelia's E (Stun) or R.",
                        "Both champions can snowball hard."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Yorick", 
                    icon: "../icons/Yorick.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Irelia can one-shot his Ghouls with Q (Bladesurge) for resets.",
                        "Can easily dash out of his W (Wall).",
                        "One of Irelia's easiest matchups."
                    ]
                }
            ]
        },
        "Jax": {
            tierS: [
                { 
                    name: "Malphite", 
                    icon: "../icons/Malphite.png", 
                    role: "Tank",
                    reasons: [
                        "Stacks armor, making Jax's damage very low.",
                        "E (Ground Slam) attack speed slow cripples him.",
                        "Can poke him with Q and disengage."
                    ]
                },
                { 
                    name: "Garen", 
                    icon: "../icons/Garen.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Can use Q (Silence) on Jax.",
                        "Can E (Spin) while Jax is using his E (Counter Strike).",
                        "Wins trades if Jax can't auto-attack."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Renekton", 
                    icon: "../icons/Renekton.png", 
                    role: "Diver",
                    reasons: [
                        "Strong early game trades.",
                        "Can E (Dash) out after baiting Jax's E (Counter Strike).",
                        "Can bully him off farm early."
                    ]
                },
                { 
                    name: "Darius", 
                    icon: "../icons/Darius.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Can pull Jax (E) out of his E (Counter Strike).",
                        "Wins extended trades with his passive.",
                        "Can poke with Q."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Gragas", 
                    icon: "../icons/Gragas.png", 
                    role: "Battle Mage",
                    reasons: [
                        "AP damage, which Jax doesn't build against.",
                        "Can disengage with E (Body Slam) and R (Ultimate).",
                        "Can poke with Q."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Aatrox", 
                    icon: "../icons/Aatrox.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Skill matchup. Jax can E (Counter Strike) Aatrox's W.",
                        "Jax can Q (Leap Strike) to dodge Aatrox's Qs.",
                        "Aatrox wins if he can poke Jax down."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Fiora", 
                    icon: "../icons/Fiora.png", 
                    role: "Skirmisher",
                    reasons: [
                        "Can W (Riposte) Jax's E (Counter Strike) stun.",
                        "True damage ignores Jax's R (Armor/MR).",
                        "Very difficult matchup for Jax."
                    ]
                }
            ]
        },
        "Kayle": {
            tierS: [
                { 
                    name: "Irelia", 
                    icon: "../icons/Irelia.png", 
                    role: "Diver",
                    reasons: [
                        "Can dash onto her (Q) repeatedly, even if slowed.",
                        "Extremely strong all-in pre-6.",
                        "Can easily kill her before she scales."
                    ]
                },
                { 
                    name: "Renekton", 
                    icon: "../icons/Renekton.png", 
                    role: "Diver",
                    reasons: [
                        "Can E (Dash) through minions to get to her.",
                        "Point-and-click W (Stun) for easy all-in.",
                        "Dominates her pre-6."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Tryndamere", 
                    icon: "../icons/Tryndamere.png", 
                    role: "Skirmisher",
                    reasons: [
                        "Can E (Spin) onto her easily.",
                        "His R (Undying Rage) outlasts her R (Divine Judgment).",
                        "Can tower dive her repeatedly."
                    ]
                },
                { 
                    name: "Jax", 
                    icon: "../icons/Jax.png", 
                    role: "Skirmisher",
                    reasons: [
                        "Can Q (Leap Strike) onto her.",
                        "Can block her auto-attacks with E (Counter Strike).",
                        "Strong all-in."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Riven", 
                    icon: "../icons/Riven.png", 
                    role: "Skirmisher",
                    reasons: [
                        "High mobility to get onto her.",
                        "Strong burst damage.",
                        "Can kill her pre-6."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Teemo", 
                    icon: "../icons/Teemo.png", 
                    role: "Marksman",
                    reasons: [
                        "Skill matchup. Both are ranged.",
                        "Kayle outscales Teemo.",
                        "Kayle's W (Heal) can outsustain Teemo's poke."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Malphite", 
                    icon: "../icons/Malphite.png", 
                    role: "Tank",
                    reasons: [
                        "Kayle can kite him easily.",
                        "Kayle's R (Ultimate) can block his R (Ultimate).",
                        "Kayle scales into an AP carry, which Malphite is weak to."
                    ]
                }
            ]
        },
        "Kled": {
            tierS: [
                { 
                    name: "Fiora", 
                    icon: "../icons/Fiora.png", 
                    role: "Skirmisher",
                    reasons: [
                        "W (Riposte) can parry his Q (Pull) or his E (Dash).",
                        "High mobility to dodge his abilities.",
                        "True damage and healing win duels."
                    ]
                },
                { 
                    name: "Jax", 
                    icon: "../icons/Jax.png", 
                    role: "Skirmisher",
                    reasons: [
                        "E (Counter Strike) blocks Kled's W (Violent Tendencies) autos.",
                        "Can Q (Leap Strike) to dodge his Q (Bear Trap).",
                        "Outscales him in the 1v1."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Renekton", 
                    icon: "../icons/Renekton.png", 
                    role: "Diver",
                    reasons: [
                        "Can win short trades.",
                        "Can E (Dash) out to avoid Kled's W.",
                        "Strong early game."
                    ]
                },
                { 
                    name: "Garen", 
                    icon: "../icons/Garen.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Can silence Kled (Q) to stop his combo.",
                        "Too tanky for Kled to burst down.",
                        "Wins extended trades with E (Spin)."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Sett", 
                    icon: "../icons/Sett.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Can E (Facebreaker) him mid-dash.",
                        "W (Haymaker) shield can turn the fight.",
                        "Skill matchup."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Darius", 
                    icon: "../icons/Darius.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Skill matchup. Kled's Q (Grievous Wounds) is good.",
                        "Darius wins if he can stack his passive.",
                        "Kled can win with his R (All-in)."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Teemo", 
                    icon: "../icons/Teemo.png", 
                    role: "Marksman",
                    reasons: [
                        "Kled's E (Dash) and R (All-in) are hard counters to Teemo.",
                        "Kled can easily get on top of him.",
                        "Teemo is too squishy."
                    ]
                }
            ]
        },
        "Mordekaiser": {
            tierS: [
                { 
                    name: "Fiora", 
                    icon: "../icons/Fiora.png", 
                    role: "Skirmisher",
                    reasons: [
                        "W (Riposte) can parry his Q (Obliterate) or E (Death's Grasp).",
                        "R (Grand Challenge) provides healing inside his R (Realm of Death).",
                        "High mobility to dodge his abilities."
                    ]
                },
                { 
                    name: "Vayne", 
                    icon: "../icons/Vayne.png", 
                    role: "Marksman",
                    reasons: [
                        "Can kite him endlessly.",
                        "True damage (W) melts him.",
                        "Can Q (Tumble) to dodge his Q and E.",
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Olaf", 
                    icon: "../icons/Olaf.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Can R (Ragnarok) to cleanse Mordekaiser's R (Realm of Death).",
                        "Wins stat-check duels.",
                        "Strong early game."
                    ]
                },
                { 
                    name: "Jax", 
                    icon: "../icons/Jax.png", 
                    role: "Skirmisher",
                    reasons: [
                        "Can E (Counter Strike) to block his passive auto-attacks.",
                        "Can Q (Leap Strike) to dodge his abilities.",
                        "Outscales him."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Tryndamere", 
                    icon: "../icons/Tryndamere.png", 
                    role: "Skirmisher",
                    reasons: [
                        "Can R (Undying Rage) during Mordekaiser's R (Realm of Death).",
                        "High sustained damage.",
                        "Can spin (E) to dodge abilities."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Garen", 
                    icon: "../icons/Garen.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Skill matchup. Mordekaiser wins extended trades.",
                        "Garen's Q (Silence) is good, but Morde's passive is too strong.",
                        "Garen needs to build QSS."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Malphite", 
                    icon: "../icons/Malphite.png", 
                    role: "Tank",
                    reasons: [
                        "Mordekaiser's passive (AP damage) melts Malphite.",
                        "Malphite has no way to escape his R (Realm of Death).",
                        "Very difficult matchup for Malphite."
                    ]
                }
            ]
        },
        "Nasus": {
            tierS: [
                { 
                    name: "Darius", 
                    icon: "../icons/Darius.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Completely dominates him early game.",
                        "Can zone him off farm, preventing him from stacking Q.",
                        "Wins all-in at all stages."
                    ]
                },
                { 
                    name: "Olaf", 
                    icon: "../icons/Olaf.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Can run him down early.",
                        "R (Ragnarok) ignores Nasus's W (Wither) slow.",
                        "Strong early game prevents Nasus from stacking."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Renekton", 
                    icon: "../icons/Renekton.png", 
                    role: "Diver",
                    reasons: [
                        "Strong early game trades.",
                        "Can E (Dash) in, W (Stun), Q, and E (Dash) out.",
                        "Zones him off farm."
                    ]
                },
                { 
                    name: "Teemo", 
                    icon: "../icons/Teemo.png", 
                    role: "Marksman",
                    reasons: [
                        "Q (Blinding Dart) makes his Q (Siphoning Strike) miss.",
                        "Can poke him down and kite him.",
                        "Mushrooms (R) control his engage paths."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Vayne", 
                    icon: "../icons/Vayne.png", 
                    role: "Marksman",
                    reasons: [
                        "Can kite him and poke.",
                        "True damage (W) is good against his R (Armor/MR).",
                        "W (Wither) is very strong against Vayne, so it's a skill matchup."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Garen", 
                    icon: "../icons/Garen.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Skill matchup. Garen wins early.",
                        "Nasus can win mid-game if he stacks.",
                        "Nasus's W (Wither) is good against Garen's E (Spin)."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Malphite", 
                    icon: "../icons/Malphite.png", 
                    role: "Tank",
                    reasons: [
                        "Malphite has no way to stop Nasus from stacking.",
                        "Nasus can free farm.",
                        "Nasus's W (Wither) counters Malphite's E (Attack Speed Slow)."
                    ]
                }
            ]
        },
        "Olaf": {
            tierS: [
                { 
                    name: "Irelia", 
                    icon: "../icons/Irelia.png", 
                    role: "Diver",
                    reasons: [
                        "Can dodge his Q (Axe) with her Q (Bladesurge).",
                        "Can kite him and win extended trades with passive.",
                        "Strong all-in."
                    ]
                },
                { 
                    name: "Fiora", 
                    icon: "../icons/Fiora.png", 
                    role: "Skirmisher",
                    reasons: [
                        "W (Riposte) can parry his Q (Axe) or E (True Damage).",
                        "True damage and healing win duels.",
                        "High mobility to kite him."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Jax", 
                    icon: "../icons/Jax.png", 
                    role: "Skirmisher",
                    reasons: [
                        "E (Counter Strike) blocks his auto-attacks.",
                        "Can Q (Leap Strike) to dodge his Q (Axe).",
                        "Outscales him."
                    ]
                },
                { 
                    name: "Tryndamere", 
                    icon: "../icons/Tryndamere.png", 
                    role: "Skirmisher",
                    reasons: [
                        "Can match his R (Ragnarok) with his own R (Undying Rage).",
                        "Wins extended trades.",
                        "High sustained damage."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Kled", 
                    icon: "../icons/Kled.png", 
                    role: "Diver",
                    reasons: [
                        "Q (Grievous Wounds) is good against his W (Lifesteal).",
                        "Can E (Dash) to dodge his Q (Axe).",
                        "Can remount to win long trades."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Renekton", 
                    icon: "../icons/Renekton.png", 
                    role: "Diver",
                    reasons: [
                        "Skill matchup. Both are strong early.",
                        "Olaf wins extended trades.",
                        "Renekton needs to play short trades."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Malphite", 
                    icon: "../icons/Malphite.png", 
                    role: "Tank",
                    reasons: [
                        "Olaf's E (True Damage) ignores armor.",
                        "Olaf's R (Ragnarok) ignores Malphite's CC.",
                        "Very difficult matchup for Malphite."
                    ]
                }
            ]
        },
        "Ornn": {
            tierS: [
                { 
                    name: "Fiora", 
                    icon: "../icons/Fiora.png", 
                    role: "Skirmisher",
                    reasons: [
                        "W (Riposte) can parry his W (Brittle) or R (Knockup).",
                        "True damage (Vitals) melts his tank stats.",
                        "High mobility to dodge his Q and E."
                    ]
                },
                { 
                    name: "Vayne", 
                    icon: "../icons/Vayne.png", 
                    role: "Marksman",
                    reasons: [
                        "True damage (W) melts his tank stats.",
                        "Can kite him endlessly.",
                        "Can E (Condemn) him out of his E (Searing Charge)."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Olaf", 
                    icon: "../icons/Olaf.png", 
                    role: "Juggernaut",
                    reasons: [
                        "E (True Damage) ignores his armor.",
                        "R (Ragnarok) ignores his Q (Slow) and R (Knockup).",
                        "Wins all-in trades."
                    ]
                },
                { 
                    name: "Sylas", 
                    icon: "../icons/Sylas.png", 
                    role: "Burst Mage",
                    reasons: [
                        "Steals one of the best ults in the game.",
                        "AP damage is good against his armor stacking.",
                        "W (Kingslayer) healing outsustains Ornn's trades."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Mordekaiser", 
                    icon: "../icons/Mordekaiser.png", 
                    role: "Juggernaut",
                    reasons: [
                        "AP damage (Passive) melts his tank stats.",
                        "Can R (Realm of Death) him to isolate him.",
                        "Wins extended trades."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Aatrox", 
                    icon: "../icons/Aatrox.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Skill matchup. Aatrox can heal off him.",
                        "Ornn can build armor to counter him.",
                        "Depends on dodging abilities."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Malphite", 
                    icon: "../icons/Malphite.png", 
                    role: "Tank",
                    reasons: [
                        "Ornn can free farm and outscale with item upgrades.",
                        "Ornn's W (Brittle) does % max HP damage.",
                        "Very boring lane, but favored for Ornn."
                    ]
                }
            ]
        },
        "Renekton": {
            tierS: [
                { 
                    name: "Vayne", 
                    icon: "../icons/Vayne.png", 
                    role: "Marksman",
                    reasons: [
                        "Can kite him endlessly.",
                        "E (Condemn) pushes him away during his E (Dash).",
                        "True damage (W) melts him when he ults."
                    ]
                },
                { 
                    name: "Kayle", 
                    icon: "../icons/Kayle.png", 
                    role: "Fighter",
                    reasons: [
                        "Can poke him from range.",
                        "R (Ultimate) can block his entire burst combo.",
                        "Outscales him significantly."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Teemo", 
                    icon: "../icons/Teemo.png", 
                    role: "Marksman",
                    reasons: [
                        "Q (Blinding Dart) makes his W (Stun) do no damage.",
                        "Can kite him.",
                        "Mushrooms (R) control his engage paths."
                    ]
                },
                { 
                    name: "Malphite", 
                    icon: "../icons/Malphite.png", 
                    role: "Tank",
                    reasons: [
                        "Can stack armor.",
                        "E (Attack Speed Slow) is good against his W.",
                        "Can poke with Q and disengage."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Garen", 
                    icon: "../icons/Garen.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Q (Silence) can interrupt his combo.",
                        "Wins extended trades with E (Spin).",
                        "Can build armor and tank his burst."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Darius", 
                    icon: "../icons/Darius.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Skill matchup. Renekton wins short trades.",
                        "Darius wins long trades.",
                        "Depends on Renekton's ability to dash out."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Irelia", 
                    icon: "../icons/Irelia.png", 
                    role: "Diver",
                    reasons: [
                        "Irelia can stack her passive and win all-in.",
                        "Renekton's W (Stun) is good, but Irelia wins extended trade.",
                        "Difficult matchup for Renekton."
                    ]
                }
            ]
        },
        "Riven": {
            tierS: [
                { 
                    name: "Renekton", 
                    icon: "../icons/Renekton.png", 
                    role: "Diver",
                    reasons: [
                        "Point-and-click W (Stun) interrupts her combo.",
                        "Strong early trades.",
                        "Can burst her down."
                    ]
                },
                { 
                    name: "Garen", 
                    icon: "../icons/Garen.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Q (Silence) interrupts her Q (Broken Wings) combo.",
                        "E (Spin) wins the trade if she is silenced.",
                        "Too tanky for Riven to burst down."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Malphite", 
                    icon: "../icons/Malphite.png", 
                    role: "Tank",
                    reasons: [
                        "Stacks armor.",
                        "E (Attack Speed Slow) is good against her.",
                        "Point-and-click R (Ultimate) for all-in."
                    ]
                },
                { 
                    name: "Volibear", 
                    icon: "../icons/Volibear.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Wins stat-check duels.",
                        "E (Sky Splitter) shield blocks her burst.",
                        "W (Frenzied Maul) healing."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Sett", 
                    icon: "../icons/Sett.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Can E (Facebreaker) her mid-dash.",
                        "W (Haymaker) shield can turn the fight.",
                        "Strong early trades."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Fiora", 
                    icon: "../icons/Fiora.png", 
                    role: "Skirmisher",
                    reasons: [
                        "Pure skill matchup.",
                        "Depends on Fiora parrying Riven's Q3 or W (Stun).",
                        "Both can snowball."
                    ]
                },
                { 
                    name: "Zaahen", 
                    icon: "../icons/Zaahen.png", 
                    role: "Fighter",
                    reasons: [
                        "Skill matchup. Zaahen's E (Jump) can dodge Riven's stun.",
                        "Riven's burst can overwhelm Zaahen early.",
                        "Both scale well."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Kayle", 
                    icon: "../icons/Kayle.png", 
                    role: "Fighter",
                    reasons: [
                        "Riven can easily all-in Kayle pre-6.",
                        "High mobility to stick on her.",
                        "Kayle is too squishy early."
                    ]
                }
            ]
        },
        "Rumble": {
            tierS: [
                { 
                    name: "Teemo", 
                    icon: "../icons/Teemo.png", 
                    role: "Marksman",
                    reasons: [
                        "Can kite him easily.",
                        "Can build Magic Resist and still do damage.",
                        "Mushrooms (R) control his engage."
                    ]
                },
                { 
                    name: "Vladimir", 
                    icon: "../icons/Vladimir.png", 
                    role: "Battle Mage",
                    reasons: [
                        "Outsustains his poke.",
                        "W (Sanguine Pool) can dodge his R (Ultimate).",
                        "Scales better."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Kayle", 
                    icon: "../icons/Kayle.png", 
                    role: "Fighter",
                    reasons: [
                        "Can poke from range.",
                        "R (Ultimate) can block his burst.",
                        "Outscales him."
                    ]
                },
                { 
                    name: "Renekton", 
                    icon: "../icons/Renekton.png", 
                    role: "Diver",
                    reasons: [
                        "Can E (Dash) in, W (Stun), Q, and E (Dash) out.",
                        "Strong burst damage.",
                        "Can kill him before he overheats."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Irelia", 
                    icon: "../icons/Irelia.png", 
                    role: "Diver",
                    reasons: [
                        "Can Q (Dash) to dodge his E (Harpoons).",
                        "Strong all-in.",
                        "Can build Wit's End."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Aatrox", 
                    icon: "../icons/Aatrox.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Skill matchup. Aatrox can heal.",
                        "Rumble can kite Aatrox.",
                        "Depends on dodging abilities."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Malphite", 
                    icon: "../icons/Malphite.png", 
                    role: "Tank",
                    reasons: [
                        "Rumble's Q (Flamespitter) melts Malphite.",
                        "AP damage is good against armor stacking.",
                        "Difficult matchup for Malphite."
                    ]
                }
            ]
        },
        "Sett": {
            tierS: [
                { 
                    name: "Vayne", 
                    icon: "../icons/Vayne.png", 
                    role: "Marksman",
                    reasons: [
                        "Can kite him endlessly.",
                        "E (Condemn) pushes him away.",
                        "True damage (W) melts him."
                    ]
                },
                { 
                    name: "Renekton", 
                    icon: "../icons/Renekton.png", 
                    role: "Diver",
                    reasons: [
                        "Can E (Dash) in, W (Stun), Q, and E (Dash) out.",
                        "Can avoid his W (Haymaker) true damage.",
                        "Strong early trades."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Malphite", 
                    icon: "../icons/Malphite.png", 
                    role: "Tank",
                    reasons: [
                        "Stacks armor.",
                        "E (Attack Speed Slow) is good against his autos.",
                        "Can poke with Q and disengage."
                    ]
                },
                { 
                    name: "Teemo", 
                    icon: "../icons/Teemo.png", 
                    role: "Marksman",
                    reasons: [
                        "Q (Blinding Dart) makes his autos miss.",
                        "Can kite him.",
                        "Mushrooms (R) control his engage."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Kayle", 
                    icon: "../icons/Kayle.png", 
                    role: "Fighter",
                    reasons: [
                        "Can poke from range.",
                        "R (Ultimate) can block his W (Haymaker) or R (The Show Stopper).",
                        "Outscales him."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Darius", 
                    icon: "../icons/Darius.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Skill matchup. Darius wins long trades.",
                        "Sett wins short trades.",
                        "Very even matchup."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Garen", 
                    icon: "../icons/Garen.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Skill matchup. Garen wins long trades.",
                        "Sett wins short trades.",
                        "Garen's Q (Silence) is good."
                    ]
                }
            ]
        },
        "Sylas": {
            tierS: [
                { 
                    name: "Renekton", 
                    icon: "../icons/Renekton.png", 
                    role: "Diver",
                    reasons: [
                        "Strong early trades.",
                        "Can build Grievous Wounds.",
                        "Dominates him early."
                    ]
                },
                { 
                    name: "Kled", 
                    icon: "../icons/Kled.png", 
                    role: "Diver",
                    reasons: [
                        "Q (Grievous Wounds) counters his W (Heal).",
                        "Strong all-in.",
                        "Wins extended trades."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Tryndamere", 
                    icon: "../icons/Tryndamere.png", 
                    role: "Skirmisher",
                    reasons: [
                        "Can R (Undying Rage) his burst.",
                        "Wins stat-check duels.",
                        "High sustained damage."
                    ]
                },
                { 
                    name: "Garen", 
                    icon: "../icons/Garen.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Q (Silence) interrupts his combo.",
                        "E (Spin) wins the trade.",
                        "Can build Grievous Wounds."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Teemo", 
                    icon: "../icons/Teemo.png", 
                    role: "Marksman",
                    reasons: [
                        "Can kite him.",
                        "Q (Blind) is good against his autos.",
                        "Skill matchup."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Aatrox", 
                    icon: "../icons/Aatrox.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Skill matchup. Both heal.",
                        "Sylas can steal a good ult.",
                        "Depends on dodging abilities."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Malphite", 
                    icon: "../icons/Malphite.png", 
                    role: "Tank",
                    reasons: [
                        "Sylas steals one of the best ults.",
                        "AP damage is good against armor stacking.",
                        "W (Kingslayer) healing."
                    ]
                }
            ]
        },
        "Vayne": {
            tierS: [
                { 
                    name: "Malphite", 
                    icon: "../icons/Malphite.png", 
                    role: "Tank",
                    reasons: [
                        "Point-and-click R (Ultimate) for all-in.",
                        "E (Attack Speed Slow) cripples her.",
                        "Stacks armor."
                    ]
                },
                { 
                    name: "Irelia", 
                    icon: "../icons/Irelia.png", 
                    role: "Diver",
                    reasons: [
                        "Can Q (Dash) to her.",
                        "Strong all-in.",
                        "Can burst her down."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Renekton", 
                    icon: "../icons/Renekton.png", 
                    role: "Diver",
                    reasons: [
                        "Can E (Dash) to her.",
                        "Point-and-click W (Stun).",
                        "Strong burst damage."
                    ]
                },
                { 
                    name: "Teemo", 
                    icon: "../icons/Teemo.png", 
                    role: "Marksman",
                    reasons: [
                        "Q (Blinding Dart) makes her autos miss.",
                        "Can match her range.",
                        "Mushrooms (R) control her kiting."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Akali", 
                    icon: "../icons/Akali.png", 
                    role: "Assassin",
                    reasons: [
                        "W (Shroud) avoids her autos.",
                        "High mobility to stick on her.",
                        "Strong burst."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Jax", 
                    icon: "../icons/Jax.png", 
                    role: "Skirmisher",
                    reasons: [
                        "Skill matchup. Jax can Q (Leap Strike) to her.",
                        "Vayne can E (Condemn) him mid-Q.",
                        "Jax's E (Counter Strike) is good."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Garen", 
                    icon: "../icons/Garen.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Vayne can kite him endlessly.",
                        "E (Condemn) pushes him away.",
                        "Very difficult for Garen."
                    ]
                }
            ]
        },
        "Vladimir": {
            tierS: [
                { 
                    name: "Irelia", 
                    icon: "../icons/Irelia.png", 
                    role: "Diver",
                    reasons: [
                        "Strong all-in.",
                        "Can build Grievous Wounds.",
                        "Can Q (Dash) to dodge his E (Tides of Blood)."
                    ]
                },
                { 
                    name: "Kled", 
                    icon: "../icons/Kled.png", 
                    role: "Diver",
                    reasons: [
                        "Q (Grievous Wounds) counters his healing.",
                        "Strong all-in.",
                        "Can E (Dash) to stick on him."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Yorick", 
                    icon: "../icons/Yorick.png", 
                    role: "Juggernaut",
                    reasons: [
                        "W (Wall) traps him.",
                        "Ghouls (Passive) provide sustained poke.",
                        "Maiden (R) provides constant pressure."
                    ]
                },
                { 
                    name: "Renekton", 
                    icon: "../icons/Renekton.png", 
                    role: "Diver",
                    reasons: [
                        "Strong early game.",
                        "Can build Grievous Wounds.",
                        "Strong burst damage."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Nasus", 
                    icon: "../icons/Nasus.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Can free stack.",
                        "W (Wither) is good against him.",
                        "Can outsustain his poke."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Aatrox", 
                    icon: "../icons/Aatrox.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Skill matchup. Both heal.",
                        "Aatrox can poke.",
                        "Vlad can W (Pool) Aatrox's Q3."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Malphite", 
                    icon: "../icons/Malphite.png", 
                    role: "Tank",
                    reasons: [
                        "Vlad's AP damage pokes him.",
                        "Vlad can W (Pool) Malphite's R (Ultimate).",
                        "Vlad outsustains."
                    ]
                }
            ]
        },
        "Volibear": {
            tierS: [
                { 
                    name: "Vayne", 
                    icon: "../icons/Vayne.png", 
                    role: "Marksman",
                    reasons: [
                        "Can kite him endlessly.",
                        "E (Condemn) pushes him away.",
                        "True damage (W) melts him."
                    ]
                },
                { 
                    name: "Kayle", 
                    icon: "../icons/Kayle.png", 
                    role: "Fighter",
                    reasons: [
                        "Can poke from range.",
                        "R (Ultimate) blocks his all-in.",
                        "Outscales him."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Teemo", 
                    icon: "../icons/Teemo.png", 
                    role: "Marksman",
                    reasons: [
                        "Q (Blinding Dart) makes his autos miss.",
                        "Can kite him.",
                        "Mushrooms (R) control his engage."
                    ]
                },
                { 
                    name: "Garen", 
                    icon: "../icons/Garen.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Q (Silence) interrupts his Q (Thundering Smash).",
                        "E (Spin) wins the trade.",
                        "Can R (Ultimate) him through his E (Shield)."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Darius", 
                    icon: "../icons/Darius.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Wins extended trades.",
                        "Passive (Hemorrhage) is strong.",
                        "Can E (Pull) him."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Sett", 
                    icon: "../icons/Sett.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Skill matchup. Both are strong.",
                        "Sett's W (Haymaker) is good.",
                        "Volibear's W (Heal) is good."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Jax", 
                    icon: "../icons/Jax.png", 
                    role: "Skirmisher",
                    reasons: [
                        "Volibear wins trades.",
                        "Volibear's E (Shield) blocks Jax's burst.",
                        "Difficult for Jax."
                    ]
                }
            ]
        },
        "Yasuo": {
            tierS: [
                { 
                    name: "Renekton", 
                    icon: "../icons/Renekton.png", 
                    role: "Diver",
                    reasons: [
                        "Point-and-click W (Stun).",
                        "Strong early trades.",
                        "Can E (Dash) through his minions."
                    ]
                },
                { 
                    name: "Riven", 
                    icon: "../icons/Riven.png", 
                    role: "Skirmisher",
                    reasons: [
                        "Can match his mobility.",
                        "Strong trades.",
                        "W (Stun) interrupts his E (Dash)."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Malphite", 
                    icon: "../icons/Malphite.png", 
                    role: "Tank",
                    reasons: [
                        "Stacks armor.",
                        "E (Attack Speed Slow) cripples him.",
                        "Point-and-click R (Ultimate)."
                    ]
                },
                { 
                    name: "Volibear", 
                    icon: "../icons/Volibear.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Wins stat-check duels.",
                        "E (Shield) blocks his burst.",
                        "W (Heal)."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Garen", 
                    icon: "../icons/Garen.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Q (Silence) interrupts his combo.",
                        "E (Spin) wins the trade.",
                        "Too tanky."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Irelia", 
                    icon: "../icons/Irelia.png", 
                    role: "Diver",
                    reasons: [
                        "Pure skill matchup.",
                        "Both are highly mobile.",
                        "Depends on dodging abilities."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Kayle", 
                    icon: "../icons/Kayle.png", 
                    role: "Fighter",
                    reasons: [
                        "Yasuo can all-in her pre-6.",
                        "W (Wind Wall) blocks her Q.",
                        "Kayle is too squishy."
                    ]
                }
            ]
        },
        "Yone": {
            tierS: [
                { 
                    name: "Renekton", 
                    icon: "../icons/Renekton.png", 
                    role: "Diver",
                    reasons: [
                        "Point-and-click W (Stun).",
                        "Strong early trades.",
                        "Can burst him down."
                    ]
                },
                { 
                    name: "Volibear", 
                    icon: "../icons/Volibear.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Wins stat-check duels.",
                        "E (Shield) blocks his burst.",
                        "W (Heal)."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Riven", 
                    icon: "../icons/Riven.png", 
                    role: "Skirmisher",
                    reasons: [
                        "Can match his mobility.",
                        "Strong trades.",
                        "W (Stun) interrupts his combo."
                    ]
                },
                { 
                    name: "Jax", 
                    icon: "../icons/Jax.png", 
                    role: "Skirmisher",
                    reasons: [
                        "E (Counter Strike) blocks his autos.",
                        "Can Q (Leap Strike) to dodge his Q3.",
                        "Outscales him."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Garen", 
                    icon: "../icons/Garen.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Q (Silence) interrupts his combo.",
                        "E (Spin) wins the trade.",
                        "Too tanky."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Irelia", 
                    icon: "../icons/Irelia.png", 
                    role: "Diver",
                    reasons: [
                        "Pure skill matchup.",
                        "Both are highly mobile.",
                        "Depends on dodging abilities."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Kayle", 
                    icon: "../icons/Kayle.png", 
                    role: "Fighter",
                    reasons: [
                        "Yone can all-in her pre-6.",
                        "High mobility to stick on her.",
                        "Kayle is too squishy."
                    ]
                }
            ]
        },
        "Yorick": {
            tierS: [
                { 
                    name: "Irelia", 
                    icon: "../icons/Irelia.png", 
                    role: "Diver",
                    reasons: [
                        "Can Q (Dash) to one-shot his Ghouls for resets.",
                        "Can Q (Dash) out of his W (Wall).",
                        "Strong all-in."
                    ]
                },
                { 
                    name: "Jax", 
                    icon: "../icons/Jax.png", 
                    role: "Skirmisher",
                    reasons: [
                        "E (Counter Strike) blocks his Ghouls' autos.",
                        "Can Q (Leap Strike) out of his W (Wall).",
                        "Outscales him."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Tryndamere", 
                    icon: "../icons/Tryndamere.png", 
                    role: "Skirmisher",
                    reasons: [
                        "Can E (Spin) out of his W (Wall).",
                        "Can R (Undying Rage) his burst.",
                        "Can kill his Maiden (R) quickly."
                    ]
                },
                { 
                    name: "Renekton", 
                    icon: "../icons/Renekton.png", 
                    role: "Diver",
                    reasons: [
                        "Can E (Dash) out of his W (Wall).",
                        "Strong early trades.",
                        "Can burst him down."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Aatrox", 
                    icon: "../icons/Aatrox.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Can Q (Knockup) his Ghouls.",
                        "Can heal off his Ghouls.",
                        "Skill matchup."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Darius", 
                    icon: "../icons/Darius.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Skill matchup. Darius can Q (Heal) off Ghouls.",
                        "Yorick can W (Wall) him.",
                        "Yorick can poke with E (Mist)."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Malphite", 
                    icon: "../icons/Malphite.png", 
                    role: "Tank",
                    reasons: [
                        "Malphite can't kill his Ghouls quickly.",
                        "Yorick can poke him down.",
                        "Malphite's R (Ultimate) is good, but Yorick wins lane."
                    ]
                }
            ]
        },

        // --- NEW DATA ---
        "Akali": {
            tierS: [
                { 
                    name: "Renekton", 
                    icon: "../icons/Renekton.png", 
                    role: "Diver",
                    reasons: [
                        "Point-and-click W (Stun) provides unavoidable CC.",
                        "Can trade effectively even inside her W (Shroud).",
                        "Strong early burst beats her pre-6."
                    ]
                },
                { 
                    name: "Galio", 
                    icon: "../icons/Galio.png", 
                    role: "Warden",
                    reasons: [
                        "W (Taunt) is a large AoE that hits her in shroud.",
                        "Naturally tanky and builds MR, nullifying her burst.",
                        "Strong wave clear to shove her in."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Kled", 
                    icon: "../icons/Kled.png", 
                    role: "Diver",
                    reasons: [
                        "Q (Bear Trap) provides reveal and Grievous Wounds.",
                        "Strong all-in can burst her down.",
                        "Can E (Dash) to follow her."
                    ]
                },
                { 
                    name: "Sett", 
                    icon: "../icons/Sett.png", 
                    role: "Juggernaut",
                    reasons: [
                        "E (Facebreaker) can pull her out of shroud.",
                        "Strong sustained damage in trades.",
                        "W (Haymaker) shield blocks her burst."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Garen", 
                    icon: "../icons/Garen.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Q (Silence) stops her combo.",
                        "E (Spin) deals damage to her inside shroud.",
                        "Too tanky for Akali to one-shot."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Jax", 
                    icon: "../icons/Jax.png", 
                    role: "Skirmisher",
                    reasons: [
                        "Skill matchup. Jax's E (Counter Strike) can be timed well.",
                        "Akali can dodge his E with her mobility.",
                        "Favored for Akali if played well."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Kayle", 
                    icon: "../icons/Kayle.png", 
                    role: "Fighter",
                    reasons: [
                        "Extremely vulnerable to Akali's all-in pre-6 and post-6.",
                        "Akali can easily dive and one-shot her.",
                        "Akali can disengage during Kayle's R (Ultimate)."
                    ]
                }
            ]
        },
        "Camille": {
            tierS: [
                { 
                    name: "Jax", 
                    icon: "../icons/Jax.png", 
                    role: "Skirmisher",
                    reasons: [
                        "E (Counter Strike) blocks her Q (auto-attack) and stuns her.",
                        "Wins extended trades easily.",
                        "Can Q (Leap Strike) to follow her E (Hookshot)."
                    ]
                },
                { 
                    name: "Renekton", 
                    icon: "../icons/Renekton.png", 
                    role: "Diver",
                    reasons: [
                        "Stronger early game trades.",
                        "Point-and-click W (Stun) wins trades.",
                        "Can break her passive shield easily."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Darius", 
                    icon: "../icons/Darius.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Wins any extended trade if she engages.",
                        "Passive (Hemorrhage) is too strong for her.",
                        "E (Apprehend) can cancel her Hookshot (E)."
                    ]
                },
                { 
                    name: "Fiora", 
                    icon: "../icons/Fiora.png", 
                    role: "Skirmisher",
                    reasons: [
                        "W (Riposte) can parry Camille's E (Stun) or Q2 (True Damage).",
                        "Outscales in the 1v1.",
                        "True damage (Vitals) wins duels."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Garen", 
                    icon: "../icons/Garen.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Q (Silence) stops her from using Q2 or E.",
                        "Too tanky for her short trades.",
                        "Wins trades with E (Spin)."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Malphite", 
                    icon: "../icons/Malphite.png", 
                    role: "Tank",
                    reasons: [
                        "E (Attack Speed Slow) is very effective.",
                        "However, Camille's Q2 (True Damage) ignores his armor.",
                        "Skill matchup."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Kayle", 
                    icon: "../icons/Kayle.png", 
                    role: "Fighter",
                    reasons: [
                        "Extremely easy for Camille to dive and one-shot.",
                        "Camille's R (Hextech Ultimatum) traps her.",
                        "Kayle cannot survive the laning phase."
                    ]
                }
            ]
        },
        "Cho'Gath": {
            tierS: [
                { 
                    name: "Vayne", 
                    icon: "../icons/Vayne.png", 
                    role: "Marksman",
                    reasons: [
                        "W (Silver Bolts) % max HP true damage melts him.",
                        "High mobility with Q (Tumble) to dodge his Q and W.",
                        "Can E (Condemn) him away."
                    ]
                },
                { 
                    name: "Fiora", 
                    icon: "../icons/Fiora.png", 
                    role: "Skirmisher",
                    reasons: [
                        "Passive (Vitals) % max HP true damage melts him.",
                        "W (Riposte) can parry his Q (Knockup) or W (Silence).",
                        "High mobility to dodge his abilities."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Darius", 
                    icon: "../icons/Darius.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Strong early game trades punish Cho'Gath.",
                        "Passive (Hemorrhage) and R (True Damage) kill him.",
                        "Can zone him off farm."
                    ]
                },
                { 
                    name: "Gwen", 
                    icon: "../icons/Gwen.png", 
                    role: "Skirmisher",
                    reasons: [
                        "% max HP magic damage (Passive) melts him.",
                        "W (Hallowed Mist) makes her untargetable to his Q/W.",
                        "High mobility and healing."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Sett", 
                    icon: "../icons/Sett.png", 
                    role: "Juggernaut",
                    reasons: [
                        "W (Haymaker) true damage is strong against tanks.",
                        "R (The Show Stopper) does % bonus HP damage.",
                        "Strong trades."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Teemo", 
                    icon: "../icons/Teemo.png", 
                    role: "Marksman",
                    reasons: [
                        "Can poke, but Cho'Gath can build MR and outsustain.",
                        "Cho'Gath's W (Silence) is very good against Teemo.",
                        "Skill matchup."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Malphite", 
                    icon: "../icons/Malphite.png", 
                    role: "Tank",
                    reasons: [
                        "Malphite can't kill him.",
                        "Cho'Gath can free stack R (Feast) and become unkillable.",
                        "Cho'Gath wins by default."
                    ]
                }
            ]
        },
        "Dr. Mundo": {
            tierS: [
                { 
                    name: "Fiora", 
                    icon: "../icons/Fiora.png", 
                    role: "Skirmisher",
                    reasons: [
                        "% max HP true damage (Vitals) shreds him.",
                        "Built-in healing to match his.",
                        "W (Riposte) can parry his Q (Cleaver) or E.",
                        "Builds Grievous Wounds easily."
                    ]
                },
                { 
                    name: "Kled", 
                    icon: "../icons/Kled.png", 
                    role: "Diver",
                    reasons: [
                        "Q (Bear Trap) applies 60% Grievous Wounds.",
                        "Strong all-in can burst him before his R (Ultimate) heals.",
                        "Can E (Dash) to dodge his Qs."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Darius", 
                    icon: "../icons/Darius.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Wins extended trades.",
                        "R (Ultimate) true damage executes him.",
                        "Can build Grievous Wounds."
                    ]
                },
                { 
                    name: "Gwen", 
                    icon: "../icons/Gwen.png", 
                    role: "Skirmisher",
                    reasons: [
                        "% max HP magic damage (Passive) shreds him.",
                        "Builds Grievous Wounds (Morellonomicon).",
                        "W (Hallowed Mist) dodges his Qs."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Sett", 
                    icon: "../icons/Sett.png", 
                    role: "Juggernaut",
                    reasons: [
                        "W (Haymaker) true damage is good against tanks.",
                        "R (The Show Stopper) does % bonus HP damage.",
                        "Strong trades."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Jax", 
                    icon: "../icons/Jax.png", 
                    role: "Skirmisher",
                    reasons: [
                        "Can E (Counter Strike) his auto-attacks.",
                        "Scales well, but Mundo is too tanky early.",
                        "Skill matchup."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Malphite", 
                    icon: "../icons/Malphite.png", 
                    role: "Tank",
                    reasons: [
                        "Mundo's E (Blunt Force Trauma) does magic damage.",
                        "Mundo can free farm and become unkillable.",
                        "Malphite has no kill pressure."
                    ]
                }
            ]
        },
        "Gangplank": {
            tierS: [
                { 
                    name: "Irelia", 
                    icon: "../icons/Irelia.png", 
                    role: "Diver",
                    reasons: [
                        "Can Q (Dash) to barrels or low-health minions to engage.",
                        "Strong all-in burst can kill him.",
                        "Can build Wit's End."
                    ]
                },
                { 
                    name: "Riven", 
                    icon: "../icons/Riven.png", 
                    role: "Skirmisher",
                    reasons: [
                        "High mobility to get on top of him.",
                        "Can E (Shield) his Q (Parrrley) poke.",
                        "Strong all-in burst."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Jax", 
                    icon: "../icons/Jax.png", 
                    role: "Skirmisher",
                    reasons: [
                        "Can Q (Leap Strike) onto him.",
                        "E (Counter Strike) blocks his Q and barrel autos.",
                        "Outscales him."
                    ]
                },
                { 
                    name: "Tryndamere", 
                    icon: "../icons/Tryndamere.png", 
                    role: "Skirmisher",
                    reasons: [
                        "Can E (Spin) onto him.",
                        "Can R (Undying Rage) his burst.",
                        "Sustains through his poke."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Akali", 
                    icon: "../icons/Akali.png", 
                    role: "Assassin",
                    reasons: [
                        "High mobility to engage.",
                        "W (Shroud) avoids his poke.",
                        "Strong burst."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Darius", 
                    icon: "../icons/Darius.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Skill matchup. Gangplank can kite.",
                        "Darius wins if he can E (Pull) him.",
                        "Gangplank's W (Cleanse) removes Darius's passive."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Malphite", 
                    icon: "../icons/Malphite.png", 
                    role: "Tank",
                    reasons: [
                        "Can stack armor and become unkillable.",
                        "E (Attack Speed Slow) is good.",
                        "Can R (Ultimate) him easily."
                    ]
                }
            ]
        },
        "Gnar": {
            tierS: [
                { 
                    name: "Irelia", 
                    icon: "../icons/Irelia.png", 
                    role: "Diver",
                    reasons: [
                        "Can Q (Dash) to minions to close the gap.",
                        "Can all-in Mini Gnar easily.",
                        "High mobility to dodge Q (Boomerang)."
                    ]
                },
                { 
                    name: "Yasuo", 
                    icon: "../icons/Yasuo.png", 
                    role: "Skirmisher",
                    reasons: [
                        "W (Wind Wall) blocks his Q (Boomerang) and autos.",
                        "High mobility to dash onto him.",
                        "Can all-in Mini Gnar."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Malphite", 
                    icon: "../icons/Malphite.png", 
                    role: "Tank",
                    reasons: [
                        "Can Q (Poke) him back.",
                        "Point-and-click R (Ultimate) to engage on Mini Gnar.",
                        "Stacks armor against him."
                    ]
                },
                { 
                    name: "Riven", 
                    icon: "../icons/Riven.png", 
                    role: "Skirmisher",
                    reasons: [
                        "High mobility to get on top of him.",
                        "E (Shield) can absorb his poke.",
                        "Strong all-in."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Camille", 
                    icon: "../icons/Camille.png", 
                    role: "Diver",
                    reasons: [
                        "Can E (Hookshot) onto him.",
                        "R (Ultimatum) traps him.",
                        "Strong burst."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Jax", 
                    icon: "../icons/Jax.png", 
                    role: "Skirmisher",
                    reasons: [
                        "Can Q (Leap Strike) onto him.",
                        "E (Counter Strike) blocks his autos.",
                        "Gnar can kite him well."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Garen", 
                    icon: "../icons/Garen.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Gets kited endlessly by Mini Gnar.",
                        "Cannot get on top of him.",
                        "Very difficult matchup."
                    ]
                }
            ]
        },
        "Gragas": {
            tierS: [
                { 
                    name: "Yasuo", 
                    icon: "../icons/Yasuo.png", 
                    role: "Skirmisher",
                    reasons: [
                        "W (Wind Wall) blocks his Q (Barrel) and R (Ultimate).",
                        "High mobility to dodge his E (Body Slam).",
                        "Can dash onto him easily."
                    ]
                },
                { 
                    name: "Sylas", 
                    icon: "../icons/Sylas.png", 
                    role: "Burst Mage",
                    reasons: [
                        "Steals a very strong ultimate.",
                        "W (Kingslayer) healing outsustains his poke.",
                        "Can E (Dash) to follow his E (Body Slam)."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Irelia", 
                    icon: "../icons/Irelia.png", 
                    role: "Diver",
                    reasons: [
                        "High mobility to dodge his abilities.",
                        "Can Q (Dash) to him.",
                        "Strong all-in burst."
                    ]
                },
                { 
                    name: "Vladimir", 
                    icon: "../icons/Vladimir.png", 
                    role: "Battle Mage",
                    reasons: [
                        "W (Sanguine Pool) can dodge his R (Ultimate) or E (Body Slam).",
                        "Outsustains his poke.",
                        "Scales better."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Dr. Mundo", 
                    icon: "../icons/Dr. Mundo.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Passive (Goes Where He Pleases) blocks his CC.",
                        "Can build MR and outsustain him.",
                        "Too tanky for Gragas to burst."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Renekton", 
                    icon: "../icons/Renekton.png", 
                    role: "Diver",
                    reasons: [
                        "Strong trades, but Gragas can E (Dash) away.",
                        "Gragas can build armor.",
                        "Skill matchup."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Malphite", 
                    icon: "../icons/Malphite.png", 
                    role: "Tank",
                    reasons: [
                        "Gragas's AP damage is good against armor stacking.",
                        "Can poke him down.",
                        "Can disengage Malphite's R (Ultimate) with his own."
                    ]
                }
            ]
        },
        "Gwen": {
            tierS: [
                { 
                    name: "Tryndamere", 
                    icon: "../icons/Tryndamere.png", 
                    role: "Skirmisher",
                    reasons: [
                        "Can R (Undying Rage) her burst.",
                        "Wins stat-check duels.",
                        "Can E (Spin) onto her easily."
                    ]
                },
                { 
                    name: "Vayne", 
                    icon: "../icons/Vayne.png", 
                    role: "Marksman",
                    reasons: [
                        "Can kite her endlessly.",
                        "True damage (W) ignores her W (Hallowed Mist) defenses.",
                        "Can E (Condemn) her away."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Jax", 
                    icon: "../icons/Jax.png", 
                    role: "Skirmisher",
                    reasons: [
                        "E (Counter Strike) blocks her auto-attacks.",
                        "Can Q (Leap Strike) to get inside her W (Mist).",
                        "Wins extended trades."
                    ]
                },
                { 
                    name: "Fiora", 
                    icon: "../icons/Fiora.png", 
                    role: "Skirmisher",
                    reasons: [
                        "W (Riposte) can parry her R (Ultimate).",
                        "True damage (Vitals) wins duels.",
                        "High mobility."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Sett", 
                    icon: "../icons/Sett.png", 
                    role: "Juggernaut",
                    reasons: [
                        "W (Haymaker) true damage is strong.",
                        "Strong early trades.",
                        "Can E (Pull) her."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Darius", 
                    icon: "../icons/Darius.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Skill matchup. Gwen can W (Mist) his Q/E.",
                        "Darius wins if he can stack passive.",
                        "Gwen wins if she can kite him."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Malphite", 
                    icon: "../icons/Malphite.png", 
                    role: "Tank",
                    reasons: [
                        "Gwen's % max HP magic damage (Passive) melts him.",
                        "W (Hallowed Mist) blocks his Q and E.",
                        "Very difficult for Malphite."
                    ]
                }
            ]
        },
        "Illaoi": {
            tierS: [
                { 
                    name: "Vayne", 
                    icon: "../icons/Vayne.png", 
                    role: "Marksman",
                    reasons: [
                        "Can kite her and her tentacles.",
                        "Can Q (Tumble) to dodge her E (Test of Spirit) and Q (Tentacle Smash).",
                        "Can E (Condemn) her away."
                    ]
                },
                { 
                    name: "Yorick", 
                    icon: "../icons/Yorick.png", 
                    role: "Juggernaut",
                    reasons: [
                        "W (Wall) traps her.",
                        "Ghouls (Passive) can tank her E (Test of Spirit) pull.",
                        "Maiden (R) provides constant pressure."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Mordekaiser", 
                    icon: "../icons/Mordekaiser.png", 
                    role: "Juggernaut",
                    reasons: [
                        "R (Realm of Death) removes her from all her tentacles.",
                        "Wins the 1v1 inside his R.",
                        "AP damage is good against her."
                    ]
                },
                { 
                    name: "Fiora", 
                    icon: "../icons/Fiora.png", 
                    role: "Skirmisher",
                    reasons: [
                        "W (Riposte) can parry her E (Test of Spirit).",
                        "High mobility to dodge tentacles.",
                        "True damage (Vitals) wins duels."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Gwen", 
                    icon: "../icons/Gwen.png", 
                    role: "Skirmisher",
                    reasons: [
                        "W (Hallowed Mist) makes her untargetable to Illaoi's E/R.",
                        "High mobility.",
                        "Good sustained damage."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Darius", 
                    icon: "../icons/Darius.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Skill matchup. Darius needs to dodge E.",
                        "Darius wins if he can all-in.",
                        "Illaoi wins if she lands E or R."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Garen", 
                    icon: "../icons/Garen.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Has to run at her, making it easy to land E (Test of Spirit).",
                        "Cannot kill tentacles quickly.",
                        "Very difficult for Garen."
                    ]
                }
            ]
        },
        "Jayce": {
            tierS: [
                { 
                    name: "Irelia", 
                    icon: "../icons/Irelia.png", 
                    role: "Diver",
                    reasons: [
                        "Can Q (Dash) to low-health minions to engage.",
                        "Can all-in him easily.",
                        "High mobility to dodge his Q (Shock Blast)."
                    ]
                },
                { 
                    name: "Renekton", 
                    icon: "../icons/Renekton.png", 
                    role: "Diver",
                    reasons: [
                        "Can E (Dash) through minions to engage.",
                        "Point-and-click W (Stun) locks him down.",
                        "Strong all-in burst."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Malphite", 
                    icon: "../icons/Malphite.png", 
                    role: "Tank",
                    reasons: [
                        "Can stack armor and become unkillable.",
                        "Q (Poke) him back.",
                        "Point-and-click R (Ultimate) to engage."
                    ]
                },
                { 
                    name: "Yasuo", 
                    icon: "../icons/Yasuo.png", 
                    role: "Skirmisher",
                    reasons: [
                        "W (Wind Wall) blocks his Q (Shock Blast).",
                        "High mobility to dodge his abilities.",
                        "Can all-in him."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Wukong", 
                    icon: "../icons/Wukong.png", 
                    role: "Diver",
                    reasons: [
                        "Can E (Dash) onto him.",
                        "W (Clone) can block his Q (Shock Blast).",
                        "Strong all-in."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Fiora", 
                    icon: "../icons/Fiora.png", 
                    role: "Skirmisher",
                    reasons: [
                        "Skill matchup. Can W (Riposte) his Q or E.",
                        "Jayce can kite her.",
                        "Depends on Fiora's timing."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Garen", 
                    icon: "../icons/Garen.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Gets kited endlessly.",
                        "Cannot get on top of him.",
                        "Very difficult for Garen."
                    ]
                }
            ]
        },
        "K'Sante": {
            tierS: [
                { 
                    name: "Fiora", 
                    icon: "../icons/Fiora.png", 
                    role: "Skirmisher",
                    reasons: [
                        "% max HP true damage (Vitals) shreds him.",
                        "W (Riposte) can parry his W (Path Maker) or Q3.",
                        "High mobility to dodge his abilities."
                    ]
                },
                { 
                    name: "Darius", 
                    icon: "../icons/Darius.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Wins extended trades.",
                        "R (True Damage) executes him.",
                        "Can E (Pull) him."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Gwen", 
                    icon: "../icons/Gwen.png", 
                    role: "Skirmisher",
                    reasons: [
                        "% max HP magic damage (Passive) shreds him.",
                        "W (Hallowed Mist) makes her untargetable.",
                        "Good sustained damage."
                    ]
                },
                { 
                    name: "Olaf", 
                    icon: "../icons/Olaf.png", 
                    role: "Juggernaut",
                    reasons: [
                        "R (Ragnarok) ignores his CC.",
                        "E (True Damage) ignores his armor.",
                        "Wins stat-check duels."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Camille", 
                    icon: "../icons/Camille.png", 
                    role: "Diver",
                    reasons: [
                        "Q2 (True Damage) is good against his W (Resistance).",
                        "R (Ultimatum) can lock him down.",
                        "Skill matchup."
                    ]
                },
                { 
                    name: "Zaahen", 
                    icon: "../icons/Zaahen.png", 
                    role: "Fighter",
                    reasons: [
                        "Zaahen's sustain matches K'Sante's tankiness.",
                        "True damage in Zaahen's kit helps shred K'Sante.",
                        "Skill matchup in extended trades."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Renekton", 
                    icon: "../icons/Renekton.png", 
                    role: "Diver",
                    reasons: [
                        "Strong trades, but K'Sante can W (Path Maker) away.",
                        "Skill matchup.",
                        "K'Sante outscales."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Malphite", 
                    icon: "../icons/Malphite.png", 
                    role: "Tank",
                    reasons: [
                        "K'Sante can build MR.",
                        "K'Sante's R (All Out) does true damage.",
                        "Malphite has no kill pressure."
                    ]
                }
            ]
        },
        "Kennen": {
            tierS: [
                { 
                    name: "Irelia", 
                    icon: "../icons/Irelia.png", 
                    role: "Diver",
                    reasons: [
                        "Can Q (Dash) to minions to engage.",
                        "Can all-in him easily.",
                        "Can build Wit's End."
                    ]
                },
                { 
                    name: "Yorick", 
                    icon: "../icons/Yorick.png", 
                    role: "Juggernaut",
                    reasons: [
                        "W (Wall) traps him.",
                        "Ghouls (Passive) provide poke.",
                        "Maiden (R) provides constant pressure."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Malphite", 
                    icon: "../icons/Malphite.png", 
                    role: "Tank",
                    reasons: [
                        "Can stack MR.",
                        "Q (Poke) him back.",
                        "Point-and-click R (Ultimate) to engage."
                    ]
                },
                { 
                    name: "Dr. Mundo", 
                    icon: "../icons/Dr. Mundo.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Passive (Goes Where He Pleases) blocks his stun.",
                        "Can build MR and outsustain him.",
                        "Too tanky for Kennen to burst."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Renekton", 
                    icon: "../icons/Renekton.png", 
                    role: "Diver",
                    reasons: [
                        "Can E (Dash) to engage.",
                        "Point-and-click W (Stun).",
                        "Strong burst."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Yasuo", 
                    icon: "../icons/Yasuo.png", 
                    role: "Skirmisher",
                    reasons: [
                        "W (Wind Wall) blocks his Q.",
                        "High mobility.",
                        "Kennen's R (Ultimate) is still very strong."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Garen", 
                    icon: "../icons/Garen.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Gets kited endlessly.",
                        "Cannot get on top of him.",
                        "Very difficult for Garen."
                    ]
                }
            ]
        },
        "Poppy": {
            tierS: [
                { 
                    name: "Darius", 
                    icon: "../icons/Darius.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Wins extended trades.",
                        "E (Apprehend) pulls her, canceling her W (Steadfast Presence).",
                        "True damage (R) ignores her armor stacking."
                    ]
                },
                { 
                    name: "Olaf", 
                    icon: "../icons/Olaf.png", 
                    role: "Juggernaut",
                    reasons: [
                        "R (Ragnarok) ignores her W (Steadfast Presence) and E (Stun).",
                        "E (True Damage) ignores her armor.",
                        "Wins stat-check duels."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Garen", 
                    icon: "../icons/Garen.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Q (Silence) stops her combo.",
                        "E (Spin) wins the trade.",
                        "Too tanky."
                    ]
                },
                { 
                    name: "Teemo", 
                    icon: "../icons/Teemo.png", 
                    role: "Marksman",
                    reasons: [
                        "Can kite her.",
                        "Q (Blind) stops her Q (Hammer Shock) empowered auto.",
                        "Mushrooms (R) control her engage paths."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Mordekaiser", 
                    icon: "../icons/Mordekaiser.png", 
                    role: "Juggernaut",
                    reasons: [
                        "AP damage is good against her armor stacking.",
                        "Can R (Realm of Death) her.",
                        "Wins extended trades."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Sett", 
                    icon: "../icons/Sett.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Skill matchup. Sett's W (Haymaker) is strong.",
                        "Poppy's W (Steadfast Presence) is good.",
                        "Even trades."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Irelia", 
                    icon: "../icons/Irelia.png", 
                    role: "Diver",
                    reasons: [
                        "Poppy's W (Steadfast Presence) stops Irelia's Q (Dash).",
                        "Poppy's E (Heroic Charge) can stun her.",
                        "Very difficult for Irelia."
                    ]
                }
            ]
        },
        "Quinn": {
            tierS: [
                { 
                    name: "Malphite", 
                    icon: "../icons/Malphite.png", 
                    role: "Tank",
                    reasons: [
                        "Can stack armor and become unkillable.",
                        "E (Attack Speed Slow) cripples her.",
                        "Point-and-click R (Ultimate) to engage."
                    ]
                },
                { 
                    name: "Irelia", 
                    icon: "../icons/Irelia.png", 
                    role: "Diver",
                    reasons: [
                        "Can Q (Dash) to low-health minions to engage.",
                        "Strong all-in burst.",
                        "Can burst her before she can E (Vault) away."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Yasuo", 
                    icon: "../icons/Yasuo.png", 
                    role: "Skirmisher",
                    reasons: [
                        "W (Wind Wall) blocks her Q (Blind) and autos.",
                        "High mobility to engage.",
                        "Can all-in her."
                    ]
                },
                { 
                    name: "Akali", 
                    icon: "../icons/Akali.png", 
                    role: "Assassin",
                    reasons: [
                        "High mobility to engage.",
                        "W (Shroud) avoids her autos.",
                        "Strong burst."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Teemo", 
                    icon: "../icons/Teemo.png", 
                    role: "Marksman",
                    reasons: [
                        "Q (Blind) vs Q (Blind) matchup.",
                        "Skill matchup.",
                        "Both are ranged."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Jax", 
                    icon: "../icons/Jax.png", 
                    role: "Skirmisher",
                    reasons: [
                        "Can Q (Leap Strike) to her.",
                        "Quinn can E (Vault) away.",
                        "Skill matchup."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Garen", 
                    icon: "../icons/Garen.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Gets kited endlessly.",
                        "Quinn's E (Vault) interrupts his Q (Silence).",
                        "Very difficult for Garen."
                    ]
                }
            ]
        },
        "Shen": {
            tierS: [
                { 
                    name: "Mordekaiser", 
                    icon: "../icons/Mordekaiser.png", 
                    role: "Juggernaut",
                    reasons: [
                        "R (Realm of Death) cancels Shen's R (Ultimate) channel.",
                        "AP damage (Passive) wins extended trades.",
                        "Can poke him."
                    ]
                },
                { 
                    name: "Vayne", 
                    icon: "../icons/Vayne.png", 
                    role: "Marksman",
                    reasons: [
                        "Can kite him.",
                        "True damage (W) ignores his armor.",
                        "Can E (Condemn) him away."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Darius", 
                    icon: "../icons/Darius.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Wins extended trades.",
                        "Can E (Pull) him.",
                        "True damage (R) is good."
                    ]
                },
                { 
                    name: "Gwen", 
                    icon: "../icons/Gwen.png", 
                    role: "Skirmisher",
                    reasons: [
                        "% max HP magic damage (Passive) shreds him.",
                        "W (Hallowed Mist) avoids his E (Taunt).",
                        "Good sustained damage."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Sett", 
                    icon: "../icons/Sett.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Strong trades.",
                        "W (Haymaker) true damage is good.",
                        "Can E (Pull) him."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Renekton", 
                    icon: "../icons/Renekton.png", 
                    role: "Diver",
                    reasons: [
                        "Skill matchup. Shen can W (Dodge) Renekton's W (Stun).",
                        "Renekton wins early trades.",
                        "Even matchup."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Jax", 
                    icon: "../icons/Jax.png", 
                    role: "Skirmisher",
                    reasons: [
                        "Shen's W (Spirit's Refuge) blocks Jax's autos.",
                        "Shen wins short trades.",
                        "Difficult for Jax."
                    ]
                }
            ]
        },
        "Singed": {
            tierS: [
                { 
                    name: "Vayne", 
                    icon: "../icons/Vayne.png", 
                    role: "Marksman",
                    reasons: [
                        "Can kite him endlessly.",
                        "True damage (W) melts him.",
                        "Can E (Condemn) him away."
                    ]
                },
                { 
                    name: "Kayle", 
                    icon: "../icons/Kayle.png", 
                    role: "Fighter",
                    reasons: [
                        "Can poke him from range.",
                        "Can W (Heal) and Q (Slow) to kite.",
                        "Outscales him significantly."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Teemo", 
                    icon: "../icons/Teemo.png", 
                    role: "Marksman",
                    reasons: [
                        "Can kite him.",
                        "Q (Blind) stops his autos.",
                        "Mushrooms (R) control his proxy paths."
                    ]
                },
                { 
                    name: "Gnar", 
                    icon: "../icons/Gnar.png", 
                    role: "Fighter",
                    reasons: [
                        "Can kite him in Mini Gnar form.",
                        "Can all-in him in Mega Gnar form.",
                        "High mobility."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Fiora", 
                    icon: "../icons/Fiora.png", 
                    role: "Skirmisher",
                    reasons: [
                        "High mobility.",
                        "True damage (Vitals) is good.",
                        "Skill matchup."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Darius", 
                    icon: "../icons/Darius.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Skill matchup. Singed can kite.",
                        "Darius can E (Pull) him.",
                        "Singed can W (Ground) him."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Akali", 
                    icon: "../icons/Akali.png", 
                    role: "Assassin",
                    reasons: [
                        "Has to run into his poison.",
                        "Singed can E (Fling) her.",
                        "Difficult for Akali."
                    ]
                }
            ]
        },
        "Sion": {
            tierS: [
                { 
                    name: "Vayne", 
                    icon: "../icons/Vayne.png", 
                    role: "Marksman",
                    reasons: [
                        "% max HP true damage (W) melts him.",
                        "High mobility to dodge his Q (Knockup) and R (Ultimate).",
                        "Can E (Condemn) him away."
                    ]
                },
                { 
                    name: "Fiora", 
                    icon: "../icons/Fiora.png", 
                    role: "Skirmisher",
                    reasons: [
                        "% max HP true damage (Vitals) melts him.",
                        "W (Riposte) can parry his Q (Knockup) or R (Ultimate).",
                        "High mobility."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Darius", 
                    icon: "../icons/Darius.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Wins extended trades.",
                        "True damage (R) executes him.",
                        "Can E (Pull) him out of his Q."
                    ]
                },
                { 
                    name: "Gwen", 
                    icon: "../icons/Gwen.png", 
                    role: "Skirmisher",
                    reasons: [
                        "% max HP magic damage (Passive) melts him.",
                        "W (Hallowed Mist) dodges his Q/R.",
                        "High mobility."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Aatrox", 
                    icon: "../icons/Aatrox.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Can Q (Knockup) him out of his Q.",
                        "Can heal off him.",
                        "Good sustained damage."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Sett", 
                    icon: "../icons/Sett.png", 
                    role: "Juggernaut",
                    reasons: [
                        "W (Haymaker) true damage is good.",
                        "R (The Show Stopper) % bonus HP damage.",
                        "Skill matchup."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Malphite", 
                    icon: "../icons/Malphite.png", 
                    role: "Tank",
                    reasons: [
                        "Sion can free farm and outscale.",
                        "Sion can build MR.",
                        "Malphite has no kill pressure."
                    ]
                }
            ]
        },
        "Tahm Kench": {
            tierS: [
                { 
                    name: "Vayne", 
                    icon: "../icons/Vayne.png", 
                    role: "Marksman",
                    reasons: [
                        "% max HP true damage (W) melts him.",
                        "High mobility to dodge his Q (Tongue Lash).",
                        "Can E (Condemn) him away."
                    ]
                },
                { 
                    name: "Gwen", 
                    icon: "../icons/Gwen.png", 
                    role: "Skirmisher",
                    reasons: [
                        "% max HP magic damage (Passive) melts him.",
                        "W (Hallowed Mist) makes her untargetable.",
                        "High mobility."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Fiora", 
                    icon: "../icons/Fiora.png", 
                    role: "Skirmisher",
                    reasons: [
                        "% max HP true damage (Vitals) melts him.",
                        "W (Riposte) can parry his Q (Stun).",
                        "High mobility."
                    ]
                },
                { 
                    name: "Sett", 
                    icon: "../icons/Sett.png", 
                    role: "Juggernaut",
                    reasons: [
                        "W (Haymaker) true damage is good.",
                        "R (The Show Stopper) % bonus HP damage.",
                        "Strong trades."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Darius", 
                    icon: "../icons/Darius.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Wins extended trades.",
                        "True damage (R) executes him.",
                        "Skill matchup."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Renekton", 
                    icon: "../icons/Renekton.png", 
                    role: "Diver",
                    reasons: [
                        "Strong trades, but Tahm Kench's E (Thick Skin) is strong.",
                        "Skill matchup.",
                        "Tahm Kench wins extended trades."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Malphite", 
                    icon: "../icons/Malphite.png", 
                    role: "Tank",
                    reasons: [
                        "Tahm Kench's Q (Magic Damage) is good.",
                        "Can free farm and outscale.",
                        "Malphite has no kill pressure."
                    ]
                }
            ]
        },
        "Urgot": {
            tierS: [
                { 
                    name: "Vayne", 
                    icon: "../icons/Vayne.png", 
                    role: "Marksman",
                    reasons: [
                        "Can kite him endlessly.",
                        "Can E (Condemn) his E (Dash).",
                        "True damage (W) melts him."
                    ]
                },
                { 
                    name: "Kayle", 
                    icon: "../icons/Kayle.png", 
                    role: "Fighter",
                    reasons: [
                        "Can poke him from range.",
                        "Can R (Ultimate) his R (Execute).",
                        "Outscales him significantly."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Fiora", 
                    icon: "../icons/Fiora.png", 
                    role: "Skirmisher",
                    reasons: [
                        "W (Riposte) can parry his E (Dash) or R (Execute).",
                        "True damage (Vitals) wins duels.",
                        "High mobility."
                    ]
                },
                { 
                    name: "Jax", 
                    icon: "../icons/Jax.png", 
                    role: "Skirmisher",
                    reasons: [
                        "E (Counter Strike) blocks his W (Purge) autos.",
                        "Can Q (Leap Strike) to dodge his Q or E.",
                        "Outscales him."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Teemo", 
                    icon: "../icons/Teemo.png", 
                    role: "Marksman",
                    reasons: [
                        "Q (Blind) makes his W (Purge) miss.",
                        "Can kite him.",
                        "Skill matchup."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Darius", 
                    icon: "../icons/Darius.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Skill matchup. Urgot wins short trades.",
                        "Darius wins long trades.",
                        "Even matchup."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Garen", 
                    icon: "../icons/Garen.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Has to run at him.",
                        "Urgot's E (Dash) counters Garen's Q (Silence).",
                        "Difficult for Garen."
                    ]
                }
            ]
        },
        "Warwick": {
            tierS: [
                { 
                    name: "Jax", 
                    icon: "../icons/Jax.png", 
                    role: "Skirmisher",
                    reasons: [
                        "E (Counter Strike) blocks his autos and Q.",
                        "Wins extended trades.",
                        "Outscales him."
                    ]
                },
                { 
                    name: "Olaf", 
                    icon: "../icons/Olaf.png", 
                    role: "Juggernaut",
                    reasons: [
                        "R (Ragnarok) ignores his E (Fear) and R (Ultimate).",
                        "Wins stat-check duels.",
                        "Builds Grievous Wounds."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Kled", 
                    icon: "../icons/Kled.png", 
                    role: "Diver",
                    reasons: [
                        "Q (Grievous Wounds) counters his healing.",
                        "Strong all-in.",
                        "Wins extended trades."
                    ]
                },
                { 
                    name: "Kayle", 
                    icon: "../icons/Kayle.png", 
                    role: "Fighter",
                    reasons: [
                        "Can poke from range.",
                        "R (Ultimate) can block his R (Ultimate).",
                        "Outscales him."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Darius", 
                    icon: "../icons/Darius.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Wins extended trades.",
                        "True damage (R) executes him.",
                        "Skill matchup."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Garen", 
                    icon: "../icons/Garen.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Q (Silence) is good.",
                        "E (Spin) wins trades.",
                        "Skill matchup."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Renekton", 
                    icon: "../icons/Renekton.png", 
                    role: "Diver",
                    reasons: [
                        "Warwick wins extended trades.",
                        "His healing is too strong.",
                        "Difficult for Renekton."
                    ]
                }
            ]
        },
        "Wukong": {
            tierS: [
                { 
                    name: "Renekton", 
                    icon: "../icons/Renekton.png", 
                    role: "Diver",
                    reasons: [
                        "Point-and-click W (Stun).",
                        "Strong early trades.",
                        "Can burst him down."
                    ]
                },
                { 
                    name: "Garen", 
                    icon: "../icons/Garen.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Q (Silence) stops his combo.",
                        "E (Spin) wins trades.",
                        "Too tanky."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Darius", 
                    icon: "../icons/Darius.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Wins extended trades.",
                        "E (Pull) reveals his W (Clone).",
                        "True damage (R) executes him."
                    ]
                },
                { 
                    name: "Jax", 
                    icon: "../icons/Jax.png", 
                    role: "Skirmisher",
                    reasons: [
                        "E (Counter Strike) blocks his autos.",
                        "Wins extended trades.",
                        "Outscales him."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Sett", 
                    icon: "../icons/Sett.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Strong trades.",
                        "W (Haymaker) true damage.",
                        "E (Pull) reveals his W (Clone)."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Fiora", 
                    icon: "../icons/Fiora.png", 
                    role: "Skirmisher",
                    reasons: [
                        "Skill matchup.",
                        "Fiora can W (Riposte) his R (Ultimate).",
                        "Wukong wins short trades."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Kayle", 
                    icon: "../icons/Kayle.png", 
                    role: "Fighter",
                    reasons: [
                        "Wukong can all-in her easily.",
                        "High mobility to stick on her.",
                        "Kayle is too squishy."
                    ]
                }
            ]
        },
        
        // --- NEW ZAAHEN DATA ---
        "Zaahen": {
            tierS: [
                { 
                    name: "Fiora", 
                    icon: "../icons/Fiora.png", 
                    role: "Skirmisher",
                    reasons: [
                        "True damage Vitals ignore Zaahen's defensive stacks.",
                        "W (Riposte) can parry his Q or R slam.",
                        "Mobility to dodge his E jump."
                    ]
                },
                { 
                    name: "Vayne", 
                    icon: "../icons/Vayne.png", 
                    role: "Marksman",
                    reasons: [
                        "Can kite Zaahen easily with Tumble and Condemn.",
                        "Silver Bolts true damage shreds his health.",
                        "Zaahen struggles to stick to her."
                    ]
                }
            ],
            tierA: [
                { 
                    name: "Darius", 
                    icon: "../icons/Darius.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Wins the stat-check in extended trades.",
                        "Bleed prevents Zaahen from healing effectively.",
                        "True damage R executes through Zaahen's resistances."
                    ]
                },
                { 
                    name: "Jax", 
                    icon: "../icons/Jax.png", 
                    role: "Skirmisher",
                    reasons: [
                        "Counter Strike blocks Zaahen's enhanced autos.",
                        "Outscales Zaahen in the 1v1.",
                        "Can match Zaahen's mobility."
                    ]
                }
            ],
            tierB: [
                { 
                    name: "Aatrox", 
                    icon: "../icons/Aatrox.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Skill matchup based on spacing.",
                        "Aatrox can poke Zaahen down.",
                        "Both have strong sustain."
                    ]
                }
            ],
            tierC: [
                { 
                    name: "Sett", 
                    icon: "../icons/Sett.png", 
                    role: "Juggernaut",
                    reasons: [
                        "Even trade in melee range.",
                        "Zaahen can dodge Haymaker with E.",
                        "Volatile lane."
                    ]
                }
            ],
            tierD: [
                { 
                    name: "Sion", 
                    icon: "../icons/Sion.png", 
                    role: "Tank",
                    reasons: [
                        "Zaahen shreds tanks with %HP damage.",
                        "Sion is too immobile to dodge Zaahen's combo.",
                        "Zaahen wins the attrition war."
                    ]
                }
            ]
        }

    },

    // General strategy recommendations for each enemy toplaner
    counterStrategies: {
        // --- EXISTING DATA ---
        "Aatrox": "Buy <strong>Grievous Wounds</strong> early (Executioner's Calling or Bramble Vest). Focus on dodging his Q sweet spots, especially the third Q (Knockup).",
        "Darius": "<strong>Avoid extended trades</strong> at all costs. His passive (Hemorrhage) will kill you. Kite him and poke him down. His Q only heals if he hits you with the *outer* blade.",
        "Fiora": "Try to bait out her W (Riposte) before using your key CC abilities. Build <strong>Grievous Wounds</strong> to counter her healing. Attack speed slows are very effective.",
        "Garen": "Poke him down to prevent his passive (Perseverance) from healing him. <strong>Kite him</strong> and avoid long trades where he can use his E (Spin) on you.",
        "Irelia": "<strong>Do not fight her when she has 5 stacks</strong> of her passive (Ionian Fervor). Stand away from low-health minions so she can't Q (Bladesurge) to them and get on you.",
        "Jax": "Bait out his E (Counter Strike) before trading. It has a long cooldown. <strong>Avoid auto-attacking him</strong> while it's active. Poke him.",
        "Kayle": "<strong>Punish her heavily in the early game</strong>. She is extremely weak before level 6 and level 11. All-in her repeatedly and deny her farm.",
        "Kled": "You must kill him twice (once to dismount, once to kill Kled). <strong>Grievous Wounds</strong> is effective. Be aware of his E (Jousting) dash for engage.",
        "Malphite": "Patch 25.24 S-Tier. He is very weak early, especially against <strong>AP damage</strong>. Poke him down. Do not group up in teamfights to avoid his R (Unstoppable Force).",
        "Mordekaiser": "Buy <strong>Quicksilver Sash (QSS)</strong> to escape his R (Realm of Death). Dodge his Q (Obliterate) and E (Death's Grasp) as they are his main damage tools.",
        "Nasus": "<strong>Punish him early</strong> and do not let him stack his Q (Siphoning Strike). Freeze the wave outside your tower and all-in him when he tries to farm.",
        "Olaf": "<strong>Kite him</strong> and avoid close-range fights. His R (Ragnarok) makes him immune to CC, so save your stuns/roots until it's over.",
        "Ornn": "Dodge his Q (Volcanic Rupture) and W (Bellows Breath). Do not stand near walls to avoid his E (Searing Charge) knockup. He is very tanky, so % max HP damage is good.",
        "Renekton": "He is extremely strong early. <strong>Avoid trades when he has his W (Stun)</strong> and high Fury. He falls off late game, so play safe and scale.",
        "Riven": "She is very mobile and relies on combos. <strong>Hard CC (stuns/roots)</strong> can interrupt her. Build armor and avoid long trades.",
        "Rumble": "Stay away from his Q (Flamespitter) to avoid his 'Danger Zone' damage. <strong>Dodge his R (The Equalizer)</strong> in teamfights, as it does massive damage.",
        "Sett": "Bait out his W (Haymaker) before all-inning. The center of the W deals <strong>True Damage</strong>, so dodge it. Avoid trading into his E (Facebreaker) stun.",
        "Sylas": "Buy <strong>Grievous Wounds</strong> to counter his W (Kingslayer) healing. Be aware of which ultimate he has stolen. Dodge his E (Abduct) chain.",
        "Teemo": "Buy <strong>Sweeper Lens</strong> and <strong>Control Wards</strong> to clear his R (Mushrooms). All-in him repeatedly, as he is very squishy. His Q (Blinding Dart) makes auto-attacks miss.",
        "Tryndamere": "<strong>Bait out his R (Undying Rage)</strong> and then disengage. Kite him and use CC (stuns/slows) to run away. <strong>Attack Speed slows</strong> (like Malphite E) are very effective.",
        "Vayne": "She is a ranged champion. All-in her and <strong>do not let her kite you</strong>. Be careful of her E (Condemn) which can stun you against walls.",
        "Vladimir": "Buy <strong>Grievous Wounds</strong>. Dodge his Q (Transfusion) and E (Tides of Blood). His W (Sanguine Pool) makes him untargetable, so wait for it to be on cooldown.",
        "Volibear": "Patch 25.24 changes buffed his Top lane. Dodge his E (Sky Splitter) shield. <strong>Kite him</strong> and avoid his W (Frenzied Maul) healing. His R disables towers.",
        "Yasuo": "Poke him down when his passive (Way of the Wanderer) shield is down. <strong>Avoid standing near your minions</strong> so he can't E (Sweeping Blade) through them to get to you.",
        "Yone": "Dodge his Q3 (Knockup) and R (Fate Sealed). When he uses his E (Soul Unbound), <strong>trade with him</strong> and he will take a portion of that damage when he returns.",
        "Yorick": "<strong>Kill his Maiden (R)</strong> immediately if you can. Break his W (wall) with auto-attacks. Dodge his E (Mourning Mist) and kill his Ghouls.",

        // --- NEW DATA ---
        "Akali": "Bait out her W (Twilight Shroud) before committing to a trade. Champions with <strong>point-and-click CC</strong> (like Renekton W) or <strong>AoE CC</strong> (like Galio W) that can hit her in the shroud are very effective.",
        "Camille": "Respect her short trades with her passive shield and Q2 (True Damage). <strong>Stay away from walls</strong> to avoid her E (Hookshot) stun. Champions who win extended trades (like Jax, Darius) do very well.",
        "Cho'Gath": "He is very weak early. <strong>Champions with % max HP damage</strong> (like Fiora, Vayne, Gwen) are his hardest counters. Dodge his Q (Rupture) and W (Feral Scream) and poke him down.",
        "Dr. Mundo": "Buy <strong>Grievous Wounds</strong> immediately. His passive makes him immune to the first CC, so bait that out. He is very weak to all-ins early before he gets items and his R (Ultimate) healing ramps up.",
        "Gangplank": "<strong>Focus on destroying his barrels (E)</strong>. Champions with high mobility (Irelia, Riven) or ranged attacks (Jayce, Teemo) can deal with his barrels easily. His W (Cleanse) removes CC, so be aware.",
        "Gnar": "<strong>Trade with him in his Mini Gnar form</strong> and run away when he is about to transform into Mega Gnar. High-mobility champions (Irelia, Yasuo) can dodge his Q (Boomerang) and all-in him.",
        "Gragas": "He is an AP-based champion, so <strong>build Magic Resist</strong>. Dodge his E (Body Slam) as it sets up his entire combo. Champions with high mobility (Yasuo, Irelia) or strong sustain (Vladimir) do well.",
        "Gwen": "Her W (Hallowed Mist) makes her untargetable to abilities from *outside* the mist. <strong>Get inside the mist</strong> to fight her. She wins extended trades, so champions with strong burst (Renekton) or who can disengage (Tryndamere) are good.",
        "Illaoi": "<strong>Dodge her E (Test of Spirit)</strong> at all costs. If she lands it, run out of the circle. <strong>Do not fight her when she ults (R)</strong>. Kill her tentacles quickly. Champions with high mobility (Vayne) or who can isolate her (Mordekaiser) are strong.",
        "Jayce": "He is a lane bully. <strong>Stand behind minions</strong> to block his Q (Shock Blast). He is very squishy in melee form. Champions with strong all-in (Irelia, Renekton) or who can stack armor (Malphite) do well.",
        "K'Sante": "Patch 25.24 S-Tier. He is extremely tanky. <strong>Bait out his W (Path Maker)</strong> damage reduction. Champions with <strong>True Damage</strong> (Fiora, Vayne) or extended trade power (Darius) are required to kill him.",
        "Kennen": "He is an AP-based ranged champion. <strong>Build Magic Resist</strong>. All-in him after he uses his E (Lightning Rush) as it has a long cooldown. Champions with strong all-in (Irelia, Malphite) do well.",
        "Poppy": "Her W (Steadfast Presence) <strong>blocks all dashes</strong>. Do not pick champions like Irelia, Riven, or Yasuo. Fight her when her passive (Iron Ambassador) shield is down. Champions who win extended trades (Darius, Olaf) are good.",
        "Quinn": "She is a ranged lane bully. <strong>Stand behind minions</strong> to avoid her Q (Blinding Assault). All-in her repeatedly as she is very squishy. Champions with strong gap close (Irelia, Malphite) or who can block her autos (Malphite, Teemo) are good.",
        "Shen": "He wins short trades with his Q (Twilight Assault) and W (Spirit's Refuge). <strong>Trade with him when his W is down</strong>. Champions who win extended trades (Mordekaiser, Darius) or can poke him (Vayne) do well. Watch for his R (Ultimate).",
        "Singed": "<strong>Do not chase him</strong>. Try to farm safely and avoid his Q (Poison Trail). He is weak to ranged poke and kiting. Champions like Vayne and Kayle can farm safely and outscale him.",
        "Sion": "<strong>Dodge his Q (Decimating Smash)</strong>. It has a long channel. Champions with <strong>% max HP damage</strong> (Fiora, Vayne) or high mobility (Irelia) are very effective against his large health pool.",
        "Tahm Kench": "He wins extended trades with his passive (An Acquired Taste) and E (Thick Skin) shield. <strong>Poke him down</strong> and avoid long fights. Champions with <strong>% max HP damage</strong> (Vayne, Gwen) are his hardest counters.",
        "Urgot": "<strong>Dodge his E (Disdain)</strong> as it sets up his entire combo. His W (Purge) can be blocked by Jax's E (Counter Strike) or Teemo's Q (Blind). Kite him and avoid getting low for his R (Execute).",
        "Warwick": "He is very strong in early duels due to his W (Blood Hunt) and Q (Jaws of the Beast) healing. <strong>Buy Grievous Wounds</strong>. Champions who can block his autos (Jax) or ignore his CC (Olaf) are strong.",
        "Wukong": "He has a strong all-in with his E (Nimbus Strike) and Q (Crushing Blow). <strong>Respect his level 6 R (Cyclone)</strong>. Champions with strong early trades (Renekton, Garen) or who can win extended duels (Darius, Jax) do well.",
        "Zaahen": "New champion. He relies on stacking Determination for stats. <strong>Burst him down</strong> before he stacks it. True damage counters his tankiness. Avoid his W pull zone."
    }
};