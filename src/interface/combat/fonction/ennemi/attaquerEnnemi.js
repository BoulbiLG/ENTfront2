
import { decisionStrat } from "./decisionStrat";
import { decisionCible } from "./decisionCible";
import { verificationArme } from "./verificationArme";
import { decisionMagie } from "./decisionMagie";
import { calculAttaqueEnnemi } from "./calculAttaqueEnnemi";
import { typeArme } from "../../typeArme";
import { lexiqueConsomable } from '../../../../variableGlobal/item/lexiqueConsomable';

export const attaquerEnnemi = (storeEnnemis, storeJoueurs, lexiqueArme, storeCombat, tourSet, strategieEnnemi, strategieEnnemiSet) => {

    let tableau = strategieEnnemi;

    for (let i = 0; i < storeEnnemis.length; i++) {
        const store = storeEnnemis[i];

        // DECISION STRATEGIE
        tableau = decisionStrat(store, tableau);
        
        // DECISION CIBLE
        tableau = decisionCible(store, tableau, storeJoueurs);
        
        strategieEnnemiSet(tableau);

        // VERIFICATION ARME
        var action = verificationArme(store);

        // DECISION MAGIE
        var tableauMagie = decisionMagie(store, storeCombat);

        if (tableauMagie[0].action == 'passer') {
            console.log('Tour de ', storeEnnemis.nom, ' terminé !');
            return
        } else {

            let nombre = Math.floor(Math.random() * (20 - 1)) + 1;

            if (nombre >= 0 && nombre <= 5) {

                let nombre = Math.floor(Math.random() * (10 - 1)) + 1;
                if (nombre >= 0 && nombre <= 7) {
                    const magie = tableauMagie[0].sortStatOffensif;
                    var attaque = calculAttaqueEnnemi(storeEnnemis, magie.action);
                }

            }

        }
    }

}



        









