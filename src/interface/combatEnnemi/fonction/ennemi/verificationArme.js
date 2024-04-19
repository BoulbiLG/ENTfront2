
import { typeArme } from "../../typeArme";
import { lexiqueArme } from '../../../../variableGlobal/item/lexiqueArme';

export const verificationArme = (storeEnnemis) => {

    var mainG = 0;
    var mainD = 0;

    const tableauArme = [{
        mainG: '',
        mainD: '',
        mainDefinitive: '',
    }]

    var item;

    for (let i = 0; i < storeEnnemis.equipement.length; i++) {
        const ligne = storeEnnemis.equipement[i];

        if (ligne.type == 'mainG') {
            typeArme[0].offensive.forEach((offensive) => {
                if (ligne.id == offensive) {
                    const tableau = lexiqueArme[offensive];
                    if (tableau.id === ligne.id) {
                        tableauArme[0].mainG = tableau.action;
                        mainG = tableau.action;
                    }
                }
            });
        } else if (ligne.type == 'mainD') {
            typeArme[0].offensive.forEach((offensive) => {
                if (ligne.id == offensive) {
                    const tableau = lexiqueArme[offensive];
                    if (tableau.id === ligne.id) {
                        tableauArme[0].mainD = tableau.action;
                        mainD = tableau.action;
                    }
                }
            });
        }
    }

    if (mainD > mainG) {
        tableauArme[0].mainDefinitive = mainD;
    } else {
        tableauArme[0].mainDefinitive = mainG;
    }

    return tableauArme;

}