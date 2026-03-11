// Macro Caminapiedras - Toggle ES/EN
(async () => {
    const TRADUCCIONES = {
        items: {
            "Aluminum Shackles": "Grilletes de Aluminio",
            "Raysium Knife": "Cuchillo de Raysium",
            "Taln's Honorblade": "Hoja de Honor de Taln",
            "Veth's Dagger": "Daga de Veth",
            "Breathe Stormlight": "Respirar Tormenta de Luz",
            "Enhance": "Mejorar",
            "Regenerate": "Regenerar",
            "Cohesion Surge": "Surgimiento de Cohesión",
            "Cohesion Talents": "Talentos de Cohesión",
            "Flowing Earth": "Tierra Fluyente",
            "Memories of Stone": "Memorias de Piedra",
            "Sinkhole": "Socavón",
            "Stone Spear": "Lanza de Piedra",
            "Through the Stone": "A Través de la Piedra",
            "True Stoneshaping": "Modelado de Piedra Verdadero",
            "Tunneling": "Tunelado",
            "Unbound Cohesion": "Cohesión Desatada",
            "Tension Surge": "Surgimiento de Tensión",
            "Cloth Mastery": "Maestría Textil",
            "Clothsmith": "Tejedor",
            "Hardened Defense": "Defensa Endurecida",
            "Extended Tension": "Tensión Extendida",
            "Fine Control": "Control Fino",
            "Rigged Weaponry": "Armamento Trampeado",
            "Stormlight Reclamation": "Recuperación de Tormenta de Luz",
            "Surface Tension": "Tensión Superficial",
            "Tension Parry": "Parada de Tensión",
            "Tension Talents": "Talentos de Tensión"
        },
        actores: {
            "NOTOCAR-EN": "NOTOCAR-ES",
            "Axehound": "Axehound",
            "Chull (Huge)": "Chull (Enorme)",
            "Chull (Large)": "Chull (Grande)",
            "Greater Skyeel": "Gran Anguila del Cielo",
            "Juvenile Whitespine": "Espinablanca Juvenil",
            "Khornak": "Khornak",
            "Shellmite": "Shellmite",
            "Skyeel": "Anguila del Cielo",
            "Bandit": "Bandido",
            "Commoner": "Plebeyo",
            "Expert": "Experto",
            "Duelist Shardbearer": "Duelista Portador de Esquirla",
            "Eyes of Pala Agent": "Agente de los Ojos de Pala",
            "Eyes of Pala Watcher": "Vigilante de los Ojos de Pala",
            "Guard": "Guardia",
            "Bordin": "Bordin",
            "Ellar": "Ellar",
            "Hana": "Hana",
            "Nen": "Nen",
            "Svalka": "Svalka",
            "Tet Rebin": "Tet Rebin",
            "Brightlord Meridas Amaram": "Señor Brillante Meridas Amaram",
            "Brightness Bettani": "Luminosidad Bettani",
            "Calinai": "Calinai",
            "Ishali": "Ishali",
            "Ka": "Ka",
            "Kalay": "Kalay",
            "Lirdan": "Lirdan",
            "Liss": "Liss",
            "Nel": "Nel",
            "Ryvlk": "Ryvlk",
            "Shansan": "Shansan",
            "Vedolin": "Vedolin",
            "Volikk": "Volikk",
            "Yarren": "Yarren",
            "Cipher": "Cifra",
            "Lorn": "Lorn",
            "Nadari": "Nadari",
            "Teryn": "Teryn",
            "The Gray Remnant": "El Remanente Gris",
            "Tuxli": "Tuxli",
            "Ubo": "Ubo",
            "Axoq": "Axoq",
            "Horizons-Ever-Drifting": "Horizontes-Siempre-Flotantes",
            "Roil": "Roil",
            "Tam": "Tam",
            "The Nightwatcher": "La Observadora Nocturna",
            "Veda": "Veda",
            "Ashil": "Ashil",
            "Batazi": "Batazi",
            "Chanil": "Chanil",
            "Farriqa": "Farriqa",
            "Gamish": "Gamish",
            "Jazima": "Jazima",
            "Jazirin": "Jazirin",
            "Loxim": "Loxim",
            "Odax": "Odax",
            "The Archivist Nattaqim": "El Archivista Nattaqim",
            "Vanzi": "Vanzi",
            "Vaqqui": "Vaqqui",
            "Yasiqqi": "Yasiqqi",
            "Cabsan": "Cabsan",
            "Dymab": "Dymab",
            "Heth": "Heth",
            "Nanath": "Nanath",
            "Shull": "Shull",
            "Teba": "Teba",
            "Yana": "Yana",
            "Rit-daughter-Clutio": "Rit-hija-Clutio",
            "Ryel": "Ryel",
            "Tyche": "Tyche",
            "Lilinum, the Devastating One": "Lilinum, la Devastadora",
            "Taszo-son-Clutio": "Taszo-hijo-Clutio",
            "Veth": "Veth",
            "Axies the Collector": "Axies el Coleccionista",
            "Kaiana the Truthwatcher": "Kaiana la Observadora de Verdad",
            "Po'ahu": "Po'ahu",
            "Ylt the Truthwatcher": "Ylt el Observador de Verdad",
            "Dustbringer of the Second Ideal": "Destructor de Polvo del Segundo Ideal",
            "Skybreaker of the Second Ideal": "Rompedor de Cielo del Segundo Ideal",
            "Deepest One": "El Más Profundo",
            "Direform Regal": "Regal Formaterrible",
            "Nimbleform Singer": "Cantor Formaágil",
            "Shadowform Zealot": "Zelote Formasombra",
            "Stormform Regal": "Regal Formatormenta",
            "Warform Singer": "Cantor Formaguerrera",
            "Archer": "Arquero",
            "Spear Infantry": "Infantería de Lanza",
            "Spearmaster": "Maestro de Lanza",
            "Thrill Berserker": "Berserker del Éxtasis",
            "Thief": "Ladrón",
            "Zealot": "Zelote"
        },
        escenas: {
            "1.1 Stuck in the Crem": "1.1 Atrapados en el Crem",
            "1.2 The Caravan": "1.2 La Caravana",
            "1.3 Battle With Veth": "1.3 Batalla con Veth",
            "Cover Art": "Portada",
            "Stonewalkers Landing": "Página de Inicio de Caminantes de Piedra",
            "2.3 Monastery Interior": "2.3 Interior del Monasterio",
            "2.1 Kholin Warcamp": "2.1 Campamento de Guerra Kholin",
            "2.2 Temple Complex": "2.2 Complejo del Templo",
            "3.2 Canyon Floor": "3.2 Suelo del Cañón",
            "3.3 Rathalas Prison": "3.3 Prisión de Rathalas",
            "3.4-3.5 The Hall and the Platform": "3.4-3.5 El Salón y la Plataforma",
            "3.1 City of Rathalas": "3.1 Ciudad de Rathalas",
            "Maze of Bridges": "Laberinto de Puentes",
            "4.1 Hexi Trenches": "4.1 Trincheras de Hexi",
            "4.2 Cultivation's Valley": "4.2 Valle de Cultivación",
            "The Valley": "El Valle",
            "5.1 Battle for Ashiqqil Keep": "5.1 Batalla por el Fuerte Ashiqqil",
            "Emuli Fortress": "Fortaleza Emuli",
            "6.1 Resistance Hideout": "6.1 Escondite de la Resistencia",
            "6.2 Dirgehollow Well": "6.2 Pozo de Dirgehollow",
            "Fabrial Survey": "Estudio de Fabriales",
            "Rall Elorim": "Rall Elorim",
            "Within Rall Elorim": "Dentro de Rall Elorim",
            "7.1 Outer and Inner Vaults": "7.1 Cámaras Exterior e Interior",
            "7.2 Pailiah's Vault": "7.2 Cámara de Pailiah",
            "The Herald Herself": "La Heraldo en Persona"
        },
        journals: {
            "00: Introduction": "00: Introducción",
            "01: Honor Beyond the Storm": "01: Honor Más Allá de la Tormenta",
            "02: Weeper's Trail": "02: La Senda del Llorón",
            "03: The City That Smolders": "03: La Ciudad que Humea",
            "04: Into the Valley": "04: Hacia el Valle",
            "05: The Eighty's War": "05: La Guerra de los Ochenta",
            "06: Precipice of Change": "06: Precipicio del Cambio",
            "07: What Was and What Could Be": "07: Lo que Fue y lo que Podría Ser",
            "Acknowledgments": "Agradecimientos",
            "Appendix A: Adversaries": "Apéndice A: Adversarios",
            "Appendix B: Items": "Apéndice B: Objetos",
            "Appendix C: Tables": "Apéndice C: Tablas",
            "Creation and Copyright": "Creación y Copyright",
            "Digital GM Tools": "Herramientas Digitales para el DJ"
        },
        carpetas: {

            "Adversaries": "Adversarios",
            "Animal": "Animales",
            "Civilian": "Civiles",
            "Minor Characters": "Personajes Menores",
            "Named": "Personajes con Nombre",
            "Notable Characters": "Personajes Notables",
            "Radiant": "Radiantes",
            "Singer/Fused": "Cantores/Fundidos",
            "Soldier": "Soldados",
            "Various": "Varios",

            "Battle Maps": "Mapas de Batalla",
            "Stonewalkers Scenes": "Escenas de Caminapiedras",
            "Theatre of the Mind": "Teatro de la Mente",

            "Surges": "Surgimientos",
            "Stormlight": "Luz Tormentosa",
            "Tension": "Tensión",
            "Cohesion": "Cohesión",
            "Effects": "Efectos",
            "Stonewalkers Unique Items": "Objetos Únicos de Caminapiedras",

            "Chapter 1: Honor Beyond the Storm": "Capítulo 1: Honor Más Allá de la Tormenta",
            "Chapter 2: Weeper’s Trail": "Capítulo 2: La Senda del Llorón",
            "Chapter 3: The City That Smolders": "Capítulo 3: La Ciudad que Humea",
            "Chapter 4: Into the Valley": "Capítulo 4: Hacia el Valle",
            "Chapter 5: The Eighty’s War": "Capítulo 5: La Guerra de los Ochenta",
            "Chapter 6: Precipice of Change": "Capítulo 6: Precipicio del Cambio",
            "Chapter 7: What Was and What Could Be": "Capítulo 7: Lo que Fue y lo que Podría Ser"

        }
    };

    // Detectar idioma mirando si algún nombre en español existe en el mundo
    const valoresES = [
        ...Object.values(TRADUCCIONES.items),
        ...Object.values(TRADUCCIONES.actores),
        ...Object.values(TRADUCCIONES.escenas)
    ];

    const nombresActuales = [
        ...game.items.contents.map(i => i.name),
        ...game.actors.contents.map(a => a.name),
        ...game.scenes.contents.map(s => s.name)
    ];

    const enES = game.actors.contents.some(a => a.name === "NOTOCAR-ES");
    const destino = enES ? "en" : "es";

    console.log(`Cambiando a ${destino.toUpperCase()}...`);

    const mapItems = enES ? Object.fromEntries(Object.entries(TRADUCCIONES.items).map(([en, es]) => [es, en])) : TRADUCCIONES.items;
    const mapActores = enES ? Object.fromEntries(Object.entries(TRADUCCIONES.actores).map(([en, es]) => [es, en])) : TRADUCCIONES.actores;
    const mapEscenas = enES ? Object.fromEntries(Object.entries(TRADUCCIONES.escenas).map(([en, es]) => [es, en])) : TRADUCCIONES.escenas;

    // Items
    for (const item of game.items.contents) {
        const t = mapItems[item.name];
        if (t) await item.update({ name: t });
    }

    // Actores
    for (const actor of game.actors.contents) {
        const t = mapActores[actor.name];
        if (t) await actor.update({ name: t });
    }

    // Escenas
    for (const scene of game.scenes.contents) {
        const updates = { "grid.units": destino === "es" ? "m" : "ft" };
        const t = mapEscenas[scene.name];
        if (t) updates.name = t;
        await scene.update(updates);
    }

    // Tokens dentro de escenas
    for (const scene of game.scenes.contents) {
        const updates = [];

        for (const token of scene.tokens) {

            if (!token.actor) continue;

            const nombreActor = token.actor.name;

            if (token.name !== nombreActor) {
                updates.push({
                    _id: token.id,
                    name: nombreActor
                });
            }
        }

        if (updates.length > 0) {
            await scene.updateEmbeddedDocuments("Token", updates);
        }
    }

    // Diarios
    for (const journal of game.journal.contents) {
        const t = TRADUCCIONES.journals?.[journal.name];
        if (t) await journal.update({ name: t });
    }

    // Carpetas
    for (const folder of game.folders) {
        const t = TRADUCCIONES.carpetas?.[folder.name];
        if (t) {
            await folder.update({ name: t });
        }
    }

    ui.notifications.info(`Aventura cambiada a ${destino.toUpperCase()}`);
})();
