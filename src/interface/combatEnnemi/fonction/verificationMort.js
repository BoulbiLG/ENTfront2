
export const verificationMort = async (storeJoueurs, storeEnnemis, storeCombat, storeEquipe, storeInventaire, joueurRestant, ennemiEnVie, storeMusique, storeDeplacement, storeCinematique, storeCelestin) => {

    //console.log('verification mort', joueurRestant, ', length : ', joueurRestant.joueur.length);
    //console.log('verification mort ennemi', ennemiEnVie, ', length : ', ennemiEnVie.length);
    //console.log('verification mort joueurRestant', joueurRestant, ', length : ', joueurRestant.length);
    const joueurRestantJoueur = joueurRestant.joueur;

    if (joueurRestant && joueurRestantJoueur) {
        if (joueurRestantJoueur.length === 0) {

            //console.log('Tous les joueurs sont morts');
            storeEnnemis.modifier('ennemi', []);


            // VALIDER MORT JOUEUR
    
            const ligne = {
                icone: 'https://jvflux.fr/images/4/45/avatar_chocorat_IA.jpg',
                couleurFond: 'white',
                couleurPolice: 'black',
                texte: `Vous avez perdu le combat`,
                resume: `:mort-cérébrale:`,
            }
        
            storeCombat.ajouterTableau('historiqueAction', ligne);
    
            //console.log(storeCombat.effetTemporaire);
            for (let i = 0; i < storeCombat.effetTemporaire.length; i++) {
                const effet = storeCombat.effetTemporaire[i];
                let store;
                for (let n = 0; n < storeJoueurs.length; n++) {
                    const storeTemporaire = storeJoueurs[n];
                    //console.log(storeTemporaire.nom, " === ", effet.cible);
                    if (storeTemporaire.nom === effet.cible) {
                        store = storeTemporaire;
                        for (let e = 0; e < effet.consequence.length; e++) {
                            const consequence = effet.consequence[e];
                            const stat = store[consequence.stat];
                            //console.log('consequence.stat : ', consequence.stat);
                            //console.log('stat : ', stat);
                            if (effet.type === 'baisseStat') {
                                store.retirer(consequence.stat, parseInt(stat / consequence.action));
                                console.log("l'effet :", effet, ' modifie ', stat, ' de ', store.nom, 'et la met a ', parseInt(stat / consequence.action));
                            } else if (effet.type === 'augmenteStat') {
                                store.retirer(consequence.stat, parseInt(stat * consequence.action));
                                console.log("l'effet :", effet, ' modifie ', stat, ' de ', store.nom, 'et la met a ', parseInt(stat * consequence.action));
                            }
                        }
                    }
                }
            }
            storeMusique.modifier('lecture', 0);

            const enculerPromise = new Promise((resolve) => {
                setTimeout(() => {
                    storeCombat.modifier('combat', 'non');
                    storeDeplacement.modifier('zoneX', 9);
                    storeDeplacement.modifier('zoneY', -2);
                    storeDeplacement.modifier('zoneZ', 999999);
                    storeDeplacement.modifier('miniMapX', 0);
                    storeDeplacement.modifier('miniMapY', 60);
                    storeDeplacement.modifier('lieux', 'onche');
                    storeMusique.modifier('courante', storeCombat.lieuPrecedent);
                    storeMusique.modifier('lecture', 0);
                    storeEnnemis.modifier('ennemi', []);

                    storeCombat.modifier('combat', 'non');
                    storeCombat.modifier('lieuPrecedent', '');
                    storeCombat.modifier('etat', '');
                    storeCombat.modifier('type', '');
                    storeCombat.modifier('tour', '');
                    storeCombat.modifier('nombreEnnemi', 0);
                    storeCombat.modifier('nom', []);
                    storeCombat.modifier('ennemiEnVie', []);
                    storeCombat.modifier('soinTour', []);
                    storeCombat.modifier('historique', []);
                    storeCombat.modifier('effetTemporaire', []);
                    storeCombat.modifier('historiqueAction', []);
                    for (let i = 0; i < storeJoueurs.length; i++) {

                        const store = storeJoueurs[i];
        
                        const vieMax = store.vieMax;
                        store.modifier('vie', vieMax);
        
                    }
                    resolve();
                }, 2000);
            });
            
            await enculerPromise;
        }
    }

    if (ennemiEnVie.length === 0) {


        for (let i = 0; i < storeCombat.effetTemporaire.length; i++) {
            const effet = storeCombat.effetTemporaire[i];
            let store;
            for (let n = 0; n < storeJoueurs.length; n++) {
                const storeTemporaire = storeJoueurs[n];
                console.log(storeTemporaire.nom, " === ", effet.cible);
                if (storeTemporaire.nom === effet.cible) {
                    store = storeTemporaire;
                    for (let e = 0; e < effet.consequence.length; e++) {
                        const consequence = effet.consequence[e];
                        const stat = store[consequence.stat];
                        console.log('consequence.stat : ', consequence.stat);
                        console.log('stat : ', stat);
                        if (effet.type === 'baisseStat') {
                            store.retirer(consequence.stat, parseInt(stat / consequence.action));
                            console.log("l'effet :", effet, ' modifie ', stat, ' de ', store.nom, 'et la met a ', parseInt(stat / consequence.action));
                        } else if (effet.type === 'augmenteStat') {
                            store.retirer(consequence.stat, parseInt(stat * consequence.action));
                            console.log("l'effet :", effet, ' modifie ', stat, ' de ', store.nom, 'et la met a ', parseInt(stat * consequence.action));
                        }
                    }
                }
            }
        }


        storeMusique.modifier('courante', 'victoireNormal');
        storeMusique.modifier('lecture', 0);
        storeCombat.modifier('etat', 'gainItem');
    }

}