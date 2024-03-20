
import { calculDefenseEnnemi } from "../calculDefenseEnnemi";
import { calculAttaqueJoueurMagie } from "./calculAttaqueJoueurMagie";

export const utiliserSort = (storeJoueurs, storeCombat, storeEnnemis, sort, historique, historiqueSet, avertissementSet) => {

    if (storeJoueurs.magie >= sort.cout) {

        if (sort.type === 'offensive') {
            
        }

    } else {
        avertissementSet("Vous n'avez pas assez de magie");
    }

}