import { epeeURL } from "../../graphisme/item/item"
import piedBiche from '../../asset/item/arme/piedBiche.png'

export const lexiqueArme = {
    
    epee: {
        id: 'epee',
        nom: 'epee',
        img: epeeURL,
        description: 'epee',
        valeur: 50,
        action: 5,
        poid: 10,
        important: 'non',
        type: 'arme',
        cible: 'main',
    },

    piedBiche: {
        id: 'piedBiche',
        nom: 'Pied de biche',
        img: piedBiche,
        description: "Un pied de biche utile pour ouvrir une bouche d'égout",
        valeur: 10,
        action: 2,
        poid: 3,
        important: 'non',
        type: 'arme',
        cible: 'main',
    },
    
}