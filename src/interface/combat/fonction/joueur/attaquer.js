
import { typeArme } from "../../typeArme";

import { recupActionArme, recupIdArme } from "./recupActionArme";
import { calculAttaqueJoueur } from "./calculAttaqueJoueur";
import { calculDefenseEnnemi } from "./calculDefenseEnnemi";
import { animation } from "./animation";

export const attaquer = (choix, storeEnnemis, storeJoueurs, lexiqueArme, storeInventaire, storeCombat, joueurUtilisableSet, tourSet) => {



        // RECUPERATION ACTION & ID ARME
        const action = recupActionArme(storeJoueurs, storeInventaire, choix);
        const id = recupIdArme(storeJoueurs, storeInventaire, choix);

        // VERIFICATION TYPE ARME
        typeArme[0].offensive.forEach((offensive) => {
            if (offensive == id) {

                // CALCUL ATTAQUE JOUEUR BRUT
                const attaqueBrut = calculAttaqueJoueur(storeJoueurs);

                // CALCUL DEFENSE ENNEMI BRUT
                const defenseEnnemi = calculDefenseEnnemi(storeEnnemis);
                console.log('attaqueBrut ', attaqueBrut, ' - defenseEnnemi ', defenseEnnemi, ' = ', attaqueBrut - defenseEnnemi);
        
                let attaqueNet = parseInt(attaqueBrut - defenseEnnemi);
                if (attaqueNet <= 0) {attaqueNet = 1;}

                console.log('attaque Net : ', attaqueNet);

                storeEnnemis.retirer('vie', attaqueNet);

                // ANIMATION
                animation(storeJoueurs);

                tourSet('ennemi(s)');


                if (storeEnnemis.vie < 0) {

                    storeEnnemis.vie = 0;
                    storeCombat.retirer('nombreEnnemi', -1);

                    // drop item

                    let ligne;

                    storeEnnemis.itemDropable.forEach(item => {
                        let id = item.id;
                        let img = item.img;
                        let action = item.action;
                        let description = item.description;
                        let important = item.important;
                        let nom = item.nom;
                        let valeur = item.valeur;
                        let type = item.type;
                        let quantite = Math.floor(Math.random() * (item.quantite.max - item.quantite.min + 1)) + item.quantite.min;

                        ligne = {
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
/*
        storeCombat.nombreEquipe--;
        storeCombat.nomEquipe = storeCombat.nomEquipe.filter((element) => element !== nom);
        console.log('storeCombat.nomEquipe : ', storeCombat.nomEquipe);*/
}