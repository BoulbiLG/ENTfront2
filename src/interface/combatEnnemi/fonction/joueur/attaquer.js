
import { typeArme } from "../../typeArme";

import { recupIdArme } from "./recupActionArme";
import { calculAttaqueJoueur } from "./calculAttaqueJoueur";
import { calculDefenseEnnemi } from "./calculDefenseEnnemi";
import { animation } from "./animation";

export const attaquer = (choix, storeEnnemis, storeJoueurs, lexiqueArme, storeInventaire, storeCombat, joueurUtilisableSet, tourSet, ennemiEnVie, nom, historique, historiqueSet, idEnnemi) => {

    // RECUPERATION ACTION & ID ARME
    const id = recupIdArme(storeJoueurs, storeInventaire, choix);

    // VERIFICATION TYPE ARME
    typeArme[0].offensive.forEach((offensive) => {
        if (offensive === id || id === 'main') {

            // CALCUL ATTAQUE JOUEUR BRUT
            const attaqueBrut = calculAttaqueJoueur(storeJoueurs);

            // CALCUL DEFENSE ENNEMI BRUT
            const defenseEnnemi = calculDefenseEnnemi(storeEnnemis, idEnnemi);
    
            let attaqueNet = parseInt(attaqueBrut - defenseEnnemi);
            if (attaqueNet <= 0) {attaqueNet = 1;}

            const vie = storeEnnemis.ennemi[idEnnemi].vie;

            storeEnnemis.ajouterChampsEnnemi(idEnnemi, 'vie', -attaqueNet);

            let ligne = {
                icone: storeJoueurs.imgIcone,
                couleurFond: 'rgb(109, 255, 109)',
                couleurPolice: 'black',
                texte: `${storeJoueurs.nom} a attaqué ${storeEnnemis.ennemi[idEnnemi].nom} avec l'item ${id} pour des dégat de ${attaqueNet}PV. La vie initiale de ${storeEnnemis.ennemi[idEnnemi].vie}PV baisse à ${storeEnnemis.ennemi[idEnnemi].vie - attaqueNet}PV.`,
                resume: `${storeJoueurs.nom} => ${storeEnnemis.ennemi[idEnnemi].nom} | vie: ${storeEnnemis.ennemi[idEnnemi].vie} - attaque: ${attaqueNet} = ${storeEnnemis.ennemi[idEnnemi].vie - attaqueNet}PV.`,
            }

            storeCombat.ajouterTableau('historiqueAction', ligne);

            if (vie - attaqueNet <= 0) {
        
                const nouveauTableau = storeCombat.ennemiEnVie.filter(element => element !== storeEnnemis.ennemi[idEnnemi].id);
                ennemiEnVie = nouveauTableau;
                storeCombat.modifierTableau('ennemiEnVie', nouveauTableau);

                const ligne = {
                    icone: storeJoueurs.imgIcone,
                    couleurFond: 'black',
                    couleurPolice: 'white',
                    texte: `${storeJoueurs.nom} a tué ${storeEnnemis.ennemi[idEnnemi].nom}.`,
                    resume: `${storeJoueurs.nom} a tué ${storeEnnemis.ennemi[idEnnemi].nom}.`,
                }

                storeCombat.ajouterTableau('historiqueAction', ligne);

            }

            // ANIMATION
            animation(storeJoueurs);

            tourSet('ennemi(s)');


            if (storeEnnemis.ennemi[idEnnemi].vie < 0) {

                storeEnnemis.ennemi[idEnnemi].vie = 0;
                storeCombat.retirer('nombreEnnemi', -1);

                // drop item

                storeEnnemis.ennemi[idEnnemi].itemDropable.forEach(item => {
                    let id = item.id;
                    let img = item.img;
                    let action = item.action;
                    let description = item.description;
                    let important = item.important;
                    let nom = item.nom;
                    let valeur = item.valeur;
                    let type = item.type;
                    let quantite = Math.floor(Math.random() * (item.quantite.max - item.quantite.min + 1)) + item.quantite.min;

                    let ligne = {
                        id: id, 
                        quantite: quantite, 
                        img: img, 
                        description: description, 
                        action: action,
                        important: important,
                        nom: nom,
                        valeur: valeur,
                        type: type,
                    };

                    //console.log('ligne a ajouter :', ligne);

                    //itemGagne.item.push(ligne);
                });

                if (storeCombat.nombreEnnemi <= 0) {
                    //itemGagne.etat = 'oui';
                }
                
            }
        }
    });

    return ennemiEnVie;
}