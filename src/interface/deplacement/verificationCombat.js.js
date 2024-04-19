
import { generationEnnemi } from "./generationEnnemi";

export const verificationCombat = (miniMapCourante, storeDeplacement, storeCombat, storeEquipe, storeEnnemi, storeMusique) => {

    for (let i = 0; i < miniMapCourante.length; i++) {
        const caseCourante = miniMapCourante[i];
        
        if (caseCourante.type === 'combat') {

            if (storeDeplacement.zoneX === caseCourante.x && storeDeplacement.zoneY === caseCourante.y) {
            
                const nombreAleatoire = Math.floor(Math.random() * 2) + 1;

                //console.log('nombre aleatoire : ', nombreAleatoire);

                if (nombreAleatoire === 1) {

                    if (storeDeplacement.lieux === 'foretENT') {

                        //console.log('combat à ', ' x : ', caseCourante.x, ' y : ', caseCourante.y, ' dans le lieux : ', storeDeplacement.lieux, '!');

                        generationEnnemi(storeCombat, storeDeplacement.lieux, storeEquipe, storeEnnemi, storeMusique);

                    }
                } else {
                    //console.log('pas combat . . .');
                }
            }
        }
    }
};
