
import exibitionisme from '../../../asset/magie/icone/exibitionisme.png';

export const lexiqueStatBaisse = {

    exibitionisme: {
        id: 'exibitionisme',
        nom: 'Exibitionisme',
        type: 'baisseStat',
        imgIcone: exibitionisme,

        consequence: [
            {stat: 'attaque', action: 1.5},
        ],
        status: [],

        action: 0,
        niveau: 3,
        cout: 9,
        tour: 0,
    },
    
}