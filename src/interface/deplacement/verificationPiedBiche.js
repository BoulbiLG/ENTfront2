
import { lexiqueArme } from '../../variableGlobal/item/lexiqueArme';
import { positionEgout } from '../../variableGlobal/global/positionEgout';

export const verificationPiedBiche = (storeInventaire, x, y, z) => {

    let verificationEgout = 'non';

    const conclusion = {
        egout: 'non',
        piedBiche: 'non'
    }

    for (let i = 0; i < positionEgout.length; i++) {

        const position = positionEgout[i];

        if (x === position.x && y === position.y && z === position.z) {

            verificationEgout = 'oui';
            conclusion.egout = 'oui';

        }

    }    

    if (verificationEgout === 'oui') {
        for (let i = 0; i < storeInventaire.inventaire.length; i++) {

            const item = storeInventaire.inventaire[i];

            if (item.id === 'piedBiche') {

                conclusion.piedBiche = 'oui';

            }

        }
    }

    return conclusion;

}