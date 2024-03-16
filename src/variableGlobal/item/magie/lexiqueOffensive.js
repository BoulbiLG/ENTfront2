
import pistoletPisse  from '../../../asset/magie/icone/pistoletPisse.png';

export const lexiqueOffensive = {


    // OFFENSIVE

    pistoletPisse: {
        id: 'pistoletPisse',
        nom: 'Pistolet à pisse',
        type: 'offensive',
        imgIcone: pistoletPisse,

        consequence: [
            {stat: 'attaque', action: 10, tour: 0},
        ],
        status: [
            {status: 'poison'},
        ],

        action: 11,

        niveau: 10,
        cout: 37,
        tour: 0,
    },

}