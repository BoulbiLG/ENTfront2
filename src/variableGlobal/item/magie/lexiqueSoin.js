
import benedictionZoulman from '../../../asset/magie/icone/benedictionZoulman.png';
import heinekenSecours  from '../../../asset/magie/icone/heinekenSecours.png';

export const lexiqueSoin = {
    

    // SOIN


    benedictionZoulman: {
        id: 'benedictionZoulman',
        nom: 'Bénédiction de Zoulman',
        type: 'soin',
        imgIcone: benedictionZoulman,

        consequence: [],
        status: [],

        action: 50,
        niveau: 2,
        cout: 28,
        tour: 0,
    },


    // SOIN TOUR 


    heinekenSecours: {
        id: 'heinekenSecours',
        nom: 'Heineken de secours',
        type: 'soinTour',
        imgIcone: heinekenSecours,

        consequence: [],
        status: [],

        action: 4,
        niveau: 1,
        cout: 25,
        tour: 4,
    },
    
}