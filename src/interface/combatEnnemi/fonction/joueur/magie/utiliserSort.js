
import { calculDefenseEnnemi } from "../calculDefenseEnnemi";
import { calculAttaqueJoueurMagie } from "./calculAttaqueJoueurMagie";

export const utiliserSort = (storeJoueurs, storeCombat, storeEnnemis, sort, historique, historiqueSet, avertissementSet, cible='', ennemiEnVie, storeJoueursTotal, idEnnemi) => {

    let store;

    if (cible !== '' ) {
        for (let i = 0; i < storeEnnemis.ennemi.length; i++) {
            const storeBrut = storeEnnemis.ennemi[i];
            
            if (storeBrut === cible) {
                store = storeBrut;
            }
        }
    }

    if (storeJoueurs.magie >= sort.cout) {



        // OFFENSIVE
        if (sort.type === 'offensive') {

            const attaque = calculAttaqueJoueurMagie(storeJoueurs, sort);
            const defenseEnnemi = store.defense;

            let attaqueNet = parseInt(attaque - defenseEnnemi);

            if (attaqueNet <= 0) {attaqueNet = 1;}

            storeEnnemis.retirerChampsEnnemi(idEnnemi, 'vie', attaqueNet);
            storeJoueurs.retirer('magie', sort.cout);

            const ligne = {
                icone: storeJoueurs.imgIcone,
                couleurFond: 'rgb(109, 255, 109)',
                couleurPolice: 'black',
                texte: `${storeJoueurs.nom} a attaqué ${store.nom} avec le sort ${sort.nom} pour des dégat de ${attaqueNet}PV. La vie initiale de ${store.vie}PV baisse à ${store.vie - attaqueNet}PV.`,
                resume: `${storeJoueurs.nom} => ${store.nom} | vie: ${store.vie} - attaque: ${attaqueNet} = ${store.vie - attaqueNet}PV.`,
            };

            storeCombat.ajouterTableau('historiqueAction', ligne);

            if (store.vie - attaqueNet <= 0) {
        
                const nouveauTableau = storeCombat.ennemiEnVie.filter(element => element !== store.nom);
                ennemiEnVie = nouveauTableau;
                storeCombat.modifierTableau('ennemiEnVie', nouveauTableau);

                const ligne = {
                    icone: storeJoueurs.imgIcone,
                    couleurFond: 'black',
                    couleurPolice: 'white',
                    texte: `${storeJoueurs.nom} a tué ${store.nom}.`,
                    resume: `${storeJoueurs.nom} a tué ${store.nom}.`,
                };
    
                storeCombat.ajouterTableau('historiqueAction', ligne);
            }
        }



        // SOIN
        if (sort.type === 'soin') {

            storeJoueurs.retirer('magie', sort.cout);
            var tauxVie = parseInt(sort.action * storeJoueurs.vieMax / 100);
            const addition = tauxVie + storeJoueurs.vie;
            if (addition > storeJoueurs.vieMax) {
                tauxVie = storeJoueurs.vieMax;
                storeJoueurs.modifier('vie', tauxVie);
            } else {
                storeJoueurs.ajouter('vie', tauxVie);
            }

            const ligne = {
                icone: storeJoueurs.imgIcone,
                couleurFond: 'rgb(109, 255, 109)',
                couleurPolice: 'black',
                texte: `${storeJoueurs.nom} s'est soigné de ${tauxVie}Pv avec le sort ${sort.nom}`,
                resume: `${storeJoueurs.nom} => ${sort.nom} | gain de vie: ${tauxVie}Pv`,
            };

            storeCombat.ajouterTableau('historiqueAction', ligne);

        }



        // AUGMENTE STAT
        if (sort.type === 'augmenteStat') {

            // AJOUTE LIGNE EFFET
            const ligne = {
                type: 'augmenteStat',
                id: sort.id, 
                consequence: sort.consequence, 
                cible: storeJoueurs.nom,
                imgIcone: sort.imgIcone,
                tour: sort.tour,
            };

            storeCombat.ajouterTableau('effetTemporaire', ligne);

            // APPLIQUE EFFET
            sort.consequence.forEach((joueur) => {
                const stat = storeJoueurs[joueur.stat];
                storeJoueurs.modifier(joueur.stat, parseInt(stat * joueur.action));
                storeJoueurs.retirer('magie', sort.cout);
                //console.log(stat, ' * par ', joueur.action, ' = ', parseInt(stat * joueur.action));
                //console.log(storeEnnemis.nom, ' voit sa ', [joueur.stat], ' initiale de : ', stat, ' augmenté a ', parseInt(stat * joueur.action));

                const ligne = {
                    icone: storeJoueurs.imgIcone,
                    couleurFond: 'rgb(109, 255, 109)',
                    couleurPolice: 'black',
                    texte: `${storeJoueurs.nom} utilise le sort ${sort.nom} et voit sa ${[joueur.stat]} initale de : ${stat} augmenté à ${parseInt(stat * joueur.action)}`,
                    resume: `${storeJoueurs.nom} + ${sort.nom} => ${[joueur.stat]}: ${stat} >> ${parseInt(stat * joueur.action)}`,
                };
    
                storeCombat.ajouterTableau('historiqueAction', ligne);
            });

        }



        // BAISSE STAT
        if (sort.type === 'baisseStat') {

            // AJOUTE LIGNE EFFET
            const ligne = {
                type: 'baisseStat',
                id: sort.id, 
                cible: storeEnnemis.nom,
                consequence: sort.consequence,
                lanceur: storeEnnemis.nom,
                imgIcone: sort.imgIcone,
                tour: sort.tour,
            };

            storeCombat.ajouterTableau('effetTemporaire', ligne);

            // APPLIQUE EFFET
            sort.consequence.forEach((joueur) => {
                const stat = storeEnnemis.ennemi[idEnnemi][joueur.stat];
                storeEnnemis.modifierChampsEnnemi(idEnnemi, joueur.stat, parseInt(stat / joueur.action));
                storeJoueurs.retirer('magie', sort.cout);
                //console.log(stat, ' / par ', joueur.action, ' = ', parseInt(stat / joueur.action));
                //console.log(storeJoueurs.nom, ' voit sa ', [joueur.stat], ' initiale de : ', stat,  ' reduite a ', parseInt(stat / joueur.action));

                const ligne2 = {
                    icone: storeJoueurs.imgIcone,
                    couleurFond: 'rgb(109, 255, 109)',
                    couleurPolice: 'black',
                    texte: `${storeJoueurs.nom} utilise le sort ${sort.nom}. ${store.nom} voit sa ${[joueur.stat]}: ${stat} réduite à ${parseInt(stat / joueur.action)}`,
                    resume: `${storeJoueurs.nom} + ${sort.nom} => ${storeJoueurs.nom} ${[joueur.stat]}: ${stat} >> ${parseInt(stat / joueur.action)}`,
                }

                storeCombat.ajouterTableau('historiqueAction', ligne2);
            });

        }

    } else {
        avertissementSet("Vous n'avez pas assez de magie");
    }

    return ennemiEnVie;

}