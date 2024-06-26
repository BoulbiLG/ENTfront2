
import { decisionStrat } from "./decisionStrat";
import { decisionCible } from "./decisionCible";
import { verificationArme } from "./verificationArme";
import { decisionMagie } from "./decisionMagie";
import { calculAttaqueEnnemi } from "./calculAttaqueEnnemi";
import { utiliserSortStat } from "./utiliserSortStat";
import { calculDefenseJoueur } from "./calculDefenseJoueur";

export const attaquerEnnemi = (storeEnnemis, storeJoueurs, lexiqueArme, storeCombat, tourSet, strategieEnnemi, strategieEnnemiSet, setJoueurUtilisable, joueurUtilisable, storeEquipe, ennemiEnVie, historique, historiqueSet) => {

    console.log(storeJoueurs)
    let joueurRestant = [{
        joueurRestant: storeEquipe,
        joueur: storeEquipe,
        ennemi: storeCombat.nom,
    }];

    let ligne;

    let tableau = strategieEnnemi;

    let attaqueTotal = [];

    for (const joueur of storeJoueurs) {
        attaqueTotal.push({
            nom: joueur.nom,
            attaque: 0,
        })
    }

    for (const joueur of storeJoueurs) {
        for (const nom of joueurRestant) {
            if (joueur.nom === nom) {
                if (joueur.vie < 1) {
                    console.log(joueur.nom, ', vie : ', joueur.vie);
                    joueurRestant[0].joueurRestant = joueurRestant[0].joueurRestant.filter(item => item !== joueur.nom);
                    joueurRestant[0].joueur = joueurRestant[0].joueur.filter(item2 => item2 !== joueur.nom);
                }
            }
        }
    }

    for (let i = 0; i < storeEnnemis.length; i++) {

        // CALCUL ATTAQUE
        const calculAttaqueNet = (store) => {
            let attaqueCible = 0;
            
            for (const joueur of storeJoueurs) {
                let ligneTableauCible = [];
                for (let e = 0; e < tableau.length; e++) {
                    if (tableau[e].nom === store.nom) {ligneTableauCible = tableau[e]}
                }
                if (joueur.nom === ligneTableauCible.cible) {
                    
                    const defense = calculDefenseJoueur(joueur);
                    attaque = parseInt(attaque - defense);
                    
                    for (let n = 0; n < attaqueTotal.length; n++) {
                        if (attaqueTotal[n].nom === ligneTableauCible.cible) {
                            attaqueTotal[n].attaque = attaqueTotal[n].attaque + attaque;
                            attaqueCible = attaqueTotal[n];
                        }
                    }

                    if (attaque <= 0) {attaque = 1}

                    const vie = joueur.vie;

                    //console.log(store.nom, ' entrée attaque calcul');

                    ligne = {
                        icone: store.imgIcone,
                        couleurFond: 'rgb(225, 107, 107)',
                        couleurPolice: 'white',
                        texte: `${store.nom} inflige ${attaque} de dégat à ${joueur.nom}.`,
                        resume: `${store.nom} => ${joueur.nom} - ${attaque}.`,
                    }

                    storeCombat.ajouterTableau('historiqueAction', ligne);

                    //console.log('attaqueNet : ', parseInt(attaque), ' pour : ', tableau[0].cible, ' de la part de : ', store.nom);
                    joueur.retirer('vie', parseInt(attaque));
                    //console.log(vie - attaqueCible.attaque, ', ', joueur.nom);
                    if (vie - attaqueCible.attaque < 1) {

                        joueurRestant[0].joueurRestant = joueurRestant[0].joueurRestant.filter(item => item !== joueur.nom);
                        joueurRestant[0].joueur = joueurRestant[0].joueur.filter(item2 => item2 !== joueur.nom);

                        //console.log(joueurRestant, ', ', vie - attaque, ', ', joueur.nom);
            
                        const nouveauTableau = storeEquipe.filter(item => item !== joueur.nom);
                        setJoueurUtilisable(nouveauTableau);

                        // REINITIALISER CIBLE
                        for (let i = 0; i < tableau.length; i++) {
                            const ennemi = tableau[i];
                            if (store.nom === ennemi.nom) {ennemi.cible = ''}
                            strategieEnnemiSet(tableau);
                        }
                    }
                }
            };
        }

        const store = storeEnnemis[i];

        console.log('');
        console.log('=======================');
        console.log('');
        
        const estPresent = ennemiEnVie.includes(store.nom);

        /*
        ligne = {
            icone: storeEnnemis.imgIcone,
            couleurFond: 'rgb(225, 107, 107)',
            couleurPolice: 'white',
            texte: `${store.nom}, ${estPresent}`,
            resume: `${store.nom} est vivant`,
        }

        storeCombat.ajouterTableau('historiqueAction', ligne);
        */

        if (estPresent) {

            // DECISION STRATEGIE
            tableau = decisionStrat(store, tableau);
            
            // DECISION CIBLE
            tableau = decisionCible(store, tableau, storeJoueurs);
            //console.log('3');
            
            strategieEnnemiSet(tableau);

            // VERIFICATION ARME
            var tableauArme = verificationArme(store);

            // DECISION MAGIE
            var tableauMagie = decisionMagie(store, storeCombat, historique, historiqueSet);
            
            var attaque;
            var tourTermine = '';

            //console.log(store.nom, ' etape calcul basique passé');

            if (tableauMagie[0].action === 'passer') {
                ligne = {
                    icone: storeEnnemis.imgIcone,
                    couleurFond: 'rgb(225, 107, 107)',
                    couleurPolice: 'white',
                    texte: `${store.nom} passer`,
                    resume: `${store.nom} passer`,
                }
    
                storeCombat.ajouterTableau('historiqueAction', ligne);

                //console.log(store.nom, ' magie soin passé');

                return
            } else {
                //console.log('5');

                //console.log(store.nom, ' etape proba go');

                let nombre = Math.floor(Math.random() * (20 - 1)) + 1;

                const min = store.magieTout.proba1.min;
                const max = store.magieTout.proba1.max;
                
                // MAGIE
                if (nombre >= min && nombre <= max) {

                    //console.log(store.nom, ' : 20 - 1 nbr = ', nombre, ' => Magie');


                    // OFFENSIVE
                    nombre = Math.floor(Math.random() * (10 - 1)) + 1;
                    if (nombre >= 0 && nombre <= 5) {

                        if (tableauMagie[0].sortStatOffensif[0]) {

                            //console.log(store.nom, ' : 10 - 1 nbr = ', nombre, ' => Magie offensive');
                            attaque = calculAttaqueEnnemi(store, tableauMagie[0].sortStatOffensif[0].action);

                            ligne = {
                                icone: store.imgIcone,
                                couleurFond: 'rgb(225, 107, 107)',
                                couleurPolice: 'white',
                                texte: `${store.nom} utilise le sort ${tableauMagie[0].sortStatOffensif[0].nom}.`,
                                resume: `${store.nom} => ${tableauMagie[0].sortStatOffensif[0].nom}.`,
                            }
        
                            storeCombat.ajouterTableau('historiqueAction', ligne);

                            calculAttaqueNet(store);
                        } else {

                            //console.log(store.nom, ' : 10 - 1 nbr = ', nombre, ' => Magie offensive mais aucun sort disponible => Arme');

                            // MAIN
                            attaque = calculAttaqueEnnemi(store, tableauArme[0].mainDefinitive);
                            calculAttaqueNet(store);
                        }


                    } else {

                        // VERIFIE SI IL Y A UN SORT DE STAT

                        nombre = Math.floor(Math.random() * (4 - 1)) + 1;

                        if (nombre === 1) {

                            // AUGMENTE STAT
                            if (tableauMagie[0].sortStatAugmente[0]) {
                                //console.log(store.nom, ' : 3 - 1 nbr = ', nombre, ' => Magie augmente stat');
                                tourTermine = utiliserSortStat(storeCombat, store, storeJoueurs, tableauMagie[0].sortStatAugmente[0], 'augmente', historique, historiqueSet);
                                //calculAttaqueNet();
                            } else {
                                //console.log(store.nom, ' : 3 - 1 nbr = ', nombre, ' => Magie augmente stat mais aucun sort disponible');
                            }


                        } else if (nombre === 2) {

                            // BAISSE STAT
                            if (tableauMagie[0].sortBaisseStat[0]) {

                                //console.log(store.nom, ' : 3 - 1 nbr = ', nombre, ' => Magie baisse stat');

                                storeJoueurs.forEach((joueur) => {
                                    if (joueur.nom === tableau[0].cible) {
                                        tourTermine = utiliserSortStat(storeCombat, store, joueur, tableauMagie[0].sortBaisseStat[0], 'baisse');
                                    }
                                });
                            } else {
                                //console.log(store.nom, ' : 3 - 1 nbr = ', nombre, ' => Magie baisse stat mais aucun sort disponible');
                            }


                        }  else if (nombre === 3) {


                            // STATUS
                            if (tableauMagie[0].sortStatus[0]) {

                                //console.log(store.nom, ' : 3 - 1 nbr = ', nombre, ' => Magie status');

                                storeJoueurs.forEach((joueur) => {
                                    if (joueur.nom === tableau[0].cible) {
                                        tourTermine = utiliserSortStat(storeCombat, store, joueur, tableauMagie[0].sortStatus[0], 'status');
                                    }
                                });
                            } else {
                                //console.log(store.nom, ' : 3 - 1 nbr = ', nombre, ' => Magie status mais aucun sort disponible');
                            }
                        }

                        if (tourTermine === '') {
                            //console.log(store.nom, "Aucun sort n'a été utilisé => Arme");
                            attaque = calculAttaqueEnnemi(store, tableauArme[0].mainDefinitive);
                            calculAttaqueNet(store);
                        }
                    }
                } else {
                    if (tourTermine === '') {
                        //console.log(store.nom, ' : 20 - 1 nbr = ', nombre, ' => Arme');

                        // MAIN
                        attaque = calculAttaqueEnnemi(store, tableauArme[0].mainDefinitive);
                        calculAttaqueNet(store);
                    }
                }
            }
        } else {
            //console.log(store.nom, ' est mort, il ne peut pas attaquer');
        }
    }

    for (const joueur of storeJoueurs) {
        if (joueur.vie < 1) {
            console.log(joueur.nom, ', vie : ', joueur.vie);
            joueurRestant[0].joueurRestant = joueurRestant[0].joueurRestant.filter(item => item !== joueur.nom);
            joueurRestant[0].joueur = joueurRestant[0].joueur.filter(item2 => item2 !== joueur.nom);
        }
    }

    console.log(joueurRestant);

    ligne = {
        icone: 'https://jvflux.fr/images/4/45/avatar_chocorat_IA.jpg',
        couleurFond: 'white',
        couleurPolice: 'black',
        texte: `Tour terminé`,
        resume: `!`,
    }

    storeCombat.ajouterTableau('historiqueAction', ligne);

    return joueurRestant;
}



        









