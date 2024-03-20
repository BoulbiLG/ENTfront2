
import { lexiqueConsomable } from '../../../../variableGlobal/item/lexiqueConsomable';
import { lexiqueArmure } from '../../../../variableGlobal/item/lexiqueArmure';

export const calculDefenseEnnemi = (storeJoueurs) => {

    var defenseEnnemi = storeJoueurs.defense;
    
    // CALCUL DEFENSE BRUT
    storeJoueurs.equipement.forEach(item => {
        if (item.id !== '') {

            let idVariable = item.id;
            
            for (let i = 0; i < lexiqueArmure.length; i++) {
                const ligne = lexiqueArmure[i];
                if (ligne.id === idVariable) {
                    let actionValue = ligne.action;
                    defenseEnnemi = defenseEnnemi + actionValue;
                }
            }
        }
    });    

    // CALCUL DEFENSE AVEC HUMEUR
    var tauxJoieEnnemi = storeJoueurs.joie;
    var tauxNiveauEnnemi = storeJoueurs.niveau / 10 + 1;
    var tauxColereEnnemi = storeJoueurs.colere / 10 + 1;
    var tauxTristesseEnnemi = storeJoueurs.tristesse;
    var tauxPeurEnnemi = storeJoueurs.peur;
    var tauxTestoEnnemi = (storeJoueurs.testo / 10 + 1) * tauxColereEnnemi;

    if (storeJoueurs.joie > 0) {tauxJoieEnnemi = storeJoueurs.joie / 100 + 1;} else {tauxJoieEnnemi = 0;}
    if (storeJoueurs.tristesse > 0) {tauxTristesseEnnemi = storeJoueurs.tristesse / 100 + 1;} else {tauxTristesseEnnemi = 0;}
    if (storeJoueurs.peur > 0) {tauxPeurEnnemi = storeJoueurs.peur / 100 + 1;} else {tauxPeurEnnemi = 0;}

    var defenseHumeur = 0;

    let attaqueJoie = 0;
    let attaquePeur = 0;
    let attaqueTristesse = 0;

    if (tauxJoieEnnemi > 0) {attaqueJoie = defenseEnnemi / tauxJoieEnnemi;}
    if (tauxTristesseEnnemi > 0) {attaqueTristesse = defenseEnnemi / tauxTristesseEnnemi;}
    if (tauxPeurEnnemi > 0) {attaquePeur = defenseEnnemi * tauxPeurEnnemi;}

    let compteur = 0;

    if (attaqueJoie > 0) {defenseHumeur = defenseHumeur + attaqueJoie; compteur++}
    if (attaqueTristesse > 0) {defenseHumeur = defenseHumeur + attaqueTristesse; compteur++}
    if (attaquePeur > 0) {defenseHumeur = defenseHumeur + attaquePeur; compteur++}

    if (compteur > 0) {defenseHumeur = parseInt(defenseHumeur / compteur);} else {defenseHumeur = defenseEnnemi}

    defenseEnnemi = parseInt((defenseHumeur * tauxNiveauEnnemi) * tauxTestoEnnemi);

    return defenseEnnemi;

}