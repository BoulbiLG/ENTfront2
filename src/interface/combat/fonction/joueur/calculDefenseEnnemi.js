
import { lexiqueConsomable } from '../../../../variableGlobal/item/lexiqueConsomable';
import { lexiqueArmure } from '../../../../variableGlobal/item/lexiqueArmure';

export const calculDefenseEnnemi = (storeEnnemis) => {

    var defenseEnnemi = storeEnnemis.defense;

    
    // CALCUL DEFENSE BRUT
    storeEnnemis.equipement.forEach(item => {
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
    var tauxJoieEnnemi = storeEnnemis.joie;
    var tauxNiveauEnnemi = storeEnnemis.niveau / 10 + 1;
    var tauxColereEnnemi = storeEnnemis.colere / 10 + 1;
    var tauxTristesseEnnemi = storeEnnemis.tristesse;
    var tauxPeurEnnemi = storeEnnemis.peur;
    var tauxTestoEnnemi = (storeEnnemis.testo / 10 + 1) * tauxColereEnnemi;

    if (storeEnnemis.joie > 0) {tauxJoieEnnemi = storeEnnemis.joie / 10 + 1;} else {tauxJoieEnnemi = 0;}
    if (storeEnnemis.tristesse > 0) {tauxTristesseEnnemi = storeEnnemis.tristesse / 10 + 1;} else {tauxTristesseEnnemi = 0;}
    if (storeEnnemis.peur > 0) {tauxPeurEnnemi = storeEnnemis.peur / 10 + 1;} else {tauxPeurEnnemi = 0;}

    if (tauxPeurEnnemi > 0) {
        if (tauxTristesseEnnemi > 0) {
            if (tauxJoieEnnemi > 0) {
                defenseEnnemi = ((defenseEnnemi * tauxPeurEnnemi) / tauxTristesseEnnemi) / tauxJoieEnnemi;
            } else {
                defenseEnnemi = (defenseEnnemi * tauxPeurEnnemi) / tauxTristesseEnnemi;
            }
        } else {
            defenseEnnemi = defenseEnnemi * tauxPeurEnnemi;
        }
    }

    //console.log('tauxTestoEnnemi : ', tauxTestoEnnemi);
    //console.log('tauxNiveauEnnemi : ', tauxNiveauEnnemi);

    defenseEnnemi = (defenseEnnemi * tauxNiveauEnnemi) * tauxTestoEnnemi;

    //console.log('defenseEnnemi : ', defenseEnnemi);

    return defenseEnnemi;

}