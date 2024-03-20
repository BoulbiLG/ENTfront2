
import { decisionStrat } from "./decisionStrat";
import { decisionCible } from "./decisionCible";
import { verificationArme } from "./verificationArme";
import { decisionMagie } from "./decisionMagie";
import { calculAttaqueEnnemi } from "./calculAttaqueEnnemi";
import { utiliserSortStat } from "./utiliserSortStat";
import { calculDefenseJoueur } from "./calculDefenseJoueur";
import { typeArme } from "../../typeArme";
import { lexiqueConsomable } from '../../../../variableGlobal/item/lexiqueConsomable';

export const attaquerEnnemi = (storeEnnemis, storeJoueurs, lexiqueArme, storeCombat, tourSet, strategieEnnemi, strategieEnnemiSet, setJoueurUtilisable, joueurUtilisable, storeEquipe, ennemiEnVie, historique, historiqueSet) => {

    console.log('');
    console.log('=======================');
    console.log('');

    let tableau = strategieEnnemi;

    for (let i = 0; i < storeEnnemis.length; i++) {

        const calculAttaqueNet = (store) => {
            for (const joueur of storeJoueurs) {
                if (joueur.nom == tableau[0].cible) {
                    const defense = calculDefenseJoueur(joueur);
                    attaque = attaque - defense;

                    if (attaque <= 0) {attaque = 1}

                    const vie = joueur.vie;

                    historiqueSet([...historique, {
                        icone: store.imgIcone,
                        couleurFond: 'rgb(225, 107, 107)',
                        couleurPolice: 'white',
                        texte: `${store.nom} inflige ${attaque} de dégat à ${joueur.nom}.`,
                        resume: `${store.nom} => ${joueur.nom} - ${attaque}.`,
                    }]);

                    //console.log('attaqueNet : ', parseInt(attaque), ' pour : ', tableau[0].cible, ' de la part de : ', store.nom);
                    joueur.retirer('vie', parseInt(attaque));

                    //console.log(joueur.nom, ' : ', vie - attaque);
                    if (vie - attaque <= 0) {

                        //console.log('supprimer : ', joueur.nom);
            
                        const nouveauTableau = storeEquipe.filter(item => item !== joueur.nom);
                        setJoueurUtilisable(nouveauTableau);

                        console.log('tableau : ', tableau);
                        // REINITIALISER CIBLE
                        for (let i = 0; i < tableau.length; i++) {
                            const ennemi = tableau[i];
                            if (store.nom == ennemi.nom) {ennemi.cible = ''}
                            strategieEnnemiSet(tableau);
                        }
                    }
                }
            };
        }

        const store = storeEnnemis[i];

        console.log('ennemiEnVie : ', ennemiEnVie);
        const estPresent = ennemiEnVie.includes(store.nom);

        console.log(store.nom, ' estPresent : ', estPresent);

        if (estPresent) {

            // DECISION STRATEGIE
            tableau = decisionStrat(store, tableau);
            
            // DECISION CIBLE
            tableau = decisionCible(store, tableau, storeJoueurs);
            
            strategieEnnemiSet(tableau);

            // VERIFICATION ARME
            var tableauArme = verificationArme(store);

            // DECISION MAGIE
            var tableauMagie = decisionMagie(store, storeCombat, historique, historiqueSet);
            
            var attaque;
            var tourTermine = '';

            if (tableauMagie[0].action == 'passer') {
                //console.log('Tour de ', store.nom, ' terminé !');
                return
            } else {

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
                            historiqueSet([...historique, {
                                icone: store.imgIcone,
                                couleurFond: 'rgb(225, 107, 107)',
                                couleurPolice: 'white',
                                texte: `${store.nom} utilise le sort ${tableauMagie[0].sortStatOffensif[0].nom}.`,
                                resume: `${store.nom} => ${tableauMagie[0].sortStatOffensif[0].nom}.`,
                            }]);
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

                        //console.log('<---> ', nombre, ' <--->');

                        if (nombre == 1) {

                            // AUGMENTE STAT
                            if (tableauMagie[0].sortStatAugmente[0]) {
                                //console.log(store.nom, ' : 3 - 1 nbr = ', nombre, ' => Magie augmente stat');
                                tourTermine = utiliserSortStat(storeCombat, store, storeJoueurs, tableauMagie[0].sortStatAugmente[0], 'augmente', historique, historiqueSet);
                                //calculAttaqueNet();
                            } else {
                                //console.log(store.nom, ' : 3 - 1 nbr = ', nombre, ' => Magie augmente stat mais aucun sort disponible');
                            }


                        } else if (nombre == 2) {


                            // BAISSE STAT
                            if (tableauMagie[0].sortBaisseStat[0]) {

                                //console.log(store.nom, ' : 3 - 1 nbr = ', nombre, ' => Magie baisse stat');

                                storeJoueurs.forEach((joueur) => {
                                    if (joueur.nom == tableau[0].cible) {
                                        tourTermine = utiliserSortStat(storeCombat, store, joueur, tableauMagie[0].sortBaisseStat[0], 'baisse');
                                    }
                                });
                            } else {
                                //console.log(store.nom, ' : 3 - 1 nbr = ', nombre, ' => Magie baisse stat mais aucun sort disponible');
                            }


                        }  else if (nombre == 3) {


                            // STATUS
                            if (tableauMagie[0].sortStatus[0]) {

                                //console.log(store.nom, ' : 3 - 1 nbr = ', nombre, ' => Magie status');

                                storeJoueurs.forEach((joueur) => {
                                    if (joueur.nom == tableau[0].cible) {
                                        tourTermine = utiliserSortStat(storeCombat, store, joueur, tableauMagie[0].sortStatus[0], 'status');
                                    }
                                });
                            } else {
                                //console.log(store.nom, ' : 3 - 1 nbr = ', nombre, ' => Magie status mais aucun sort disponible');
                            }
                        }

                        if (tourTermine == '') {
                            //console.log(store.nom, "Aucun sort n'a été utilisé => Arme");
                            attaque = calculAttaqueEnnemi(store, tableauArme[0].mainDefinitive);
                            calculAttaqueNet(store);
                        }
                    }
                } else {

                    if (tourTermine == '') {
                        //console.log(store.nom, ' : 20 - 1 nbr = ', nombre, ' => Arme');

                        // MAIN
                        attaque = calculAttaqueEnnemi(store, tableauArme[0].mainDefinitive);
                        historiqueSet([...historique, {
                            icone: store.imgIcone,
                            couleurFond: 'rgb(225, 107, 107)',
                            couleurPolice: 'white',
                            texte: `${store.nom} n'utilise pas de magie.`,
                            resume: `${store.nom} => pas de magie.`,
                        }]);
                        calculAttaqueNet(store);
                    }
                }
            }
        } else {
            console.log(store.nom, ' est mort, il ne peut pas attaquer');
        }
    }
}



        









