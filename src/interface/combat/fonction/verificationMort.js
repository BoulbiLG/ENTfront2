
export const verificationMort = async (storeJoueurs, storeEnnemis, storeCombat, storeEquipe, storeInventaire, joueurRestant, ennemiEnVie, storeMusique, storeDeplacement, storeCinematique, storeCelestin) => {

    console.log(storeJoueurs)
    //console.log('verification mort', joueurRestant, ', length : ', joueurRestant.joueur.length);
    //console.log('verification mort ennemi', ennemiEnVie, ', length : ', ennemiEnVie.length);
    //console.log('verification mort joueurRestant', joueurRestant, ', length : ', joueurRestant.length);

    if (joueurRestant) {
        if (joueurRestant.joueur.length === 0) {

            console.log('Tous les joueurs sont morts');


            // VALIDER MORT JOUEUR
    
            const ligne = {
                icone: 'https://jvflux.fr/images/4/45/avatar_chocorat_IA.jpg',
                couleurFond: 'white',
                couleurPolice: 'black',
                texte: `Vous avez perdu le combat`,
                resume: `:mort-cérébrale:`,
            }
        
            storeCombat.ajouterTableau('historiqueAction', ligne);
    
            console.log(storeCombat.effetTemporaire);
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

            storeMusique.modifier('lecture', 0);

            const enculerPromise = new Promise((resolve) => {
                setTimeout(() => {
                    storeCombat.modifier('combat', 'non');
                    storeCombat.modifier('type', '');
                    storeCombat.modifier('tour', '');
                    storeCombat.modifier('nombreEnnemi', 0);
                    storeCombat.modifier('nom', []);
                    storeCombat.modifier('ennemiEnVie', []);
                    storeCombat.modifier('soinTour', []);
                    storeCombat.modifier('historique', []);
                    storeCombat.modifier('effetTemporaire', []);
                    storeCombat.modifier('historiqueAction', []);
                    resolve();
                }, 2000);
            });
            
            await enculerPromise;

            for (let i = 0; i < storeJoueurs.length; i++) {
                const store = storeJoueurs[i];

                if (store.nom === 'Celestin') {
                    if (store.goulagBlondin === '') {
                        store.modifier('goulagBlondin', 'fini');
                        storeDeplacement.modifier('zoneX', 0);
                        storeDeplacement.modifier('zoneY', 0);
                        storeDeplacement.modifier('zoneZ', 666);
                        storeMusique.modifier('courante', 'onche');
                        storeCelestin.modifierInformation('premierCombat', 'oui');
                        storeCelestin.modifier('vie', 100);
                        const enculerPromise = new Promise((resolve) => {
                            setTimeout(() => {
                                storeCinematique.modifier('cinematique', 'oui');
                                storeCinematique.modifier('courant', 'goulag');
                                resolve();
                            }, 5000);
                        });
                        
                        await enculerPromise;
                    }
                } else {
                    storeMusique.modifier('courante', storeCombat.lieuPrecedent);
                }
            }
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


        console.log('Tous les ennemis sont morts');
        storeMusique.modifier('courante', 'victoireNormal');
        storeMusique.modifier('lecture', 0);
        storeCombat.modifier('etat', 'gainItem');
    }

}