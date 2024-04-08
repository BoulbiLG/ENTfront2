
import nofap from '../../../asset/magie/icone/nofap.png';

export const lexiqueStatAugmente = {

    nofap: {
        id: 'nofap',
        nom: 'No fap',
        type: 'augmenteStat',
        imgIcone: nofap,
        
        consequence: [
            {stat: 'attaque', action: 1.5, tour: 0},
        ],
        status: [],

        action: 0,
        niveau: 4,
        cout: 12,
        tour: 0,
    },
    
}