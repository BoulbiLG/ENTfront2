
import { typeArme } from "../../typeArme";
import { lexiqueArme } from '../../../../variableGlobal/item/lexiqueArme';

export const verificationArme = (storeEnnemis) => {

    var mainG = 0;
    var mainD = 0;

    var item;

    for (let i = 0; i < storeEnnemis.equipement.length; i++) {
        const ligne = storeEnnemis.equipement[i];

        if (ligne.type == 'mainG') {
            typeArme[0].offensive.forEach((offensive) => {
                if (ligne.id == offensive) {
                    const tableau = lexiqueArme[offensive];
                    if (tableau.id === ligne.id) {

                        mainG = tableau.action;
                    }
                }
            });
        } else if (ligne.type == 'mainD') {
            typeArme[0].offensive.forEach((offensive) => {
                if (ligne.id == offensive) {
                    const tableau = lexiqueArme[offensive];
                    if (tableau.id === ligne.id) {

                        mainD = tableau.action;
                    }
                }
            });
        }
    }

    if (mainD > mainG) {
        item = mainD;
    } else {
        item = mainG;
    }

    return item;

}