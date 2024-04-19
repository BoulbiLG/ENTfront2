
import { lexiqueConsomable } from '../../../../variableGlobal/item/lexiqueConsomable';
import { lexiqueArmure } from '../../../../variableGlobal/item/lexiqueArmure';

export const calculDefenseEnnemi = (storeEnnemis, idEnnemi) => {
    
    // CALCUL DEFENSE BRUT
    let store;

    for (let i = 0; i < storeEnnemis.ennemi.length; i++) {

        if (idEnnemi === storeEnnemis.ennemi[i].id) {
            store = storeEnnemis.ennemi[i];
        }

    }

    return store.defense;

}