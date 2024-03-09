
export const lexiqueMagie = {
    

    // STAT


    nofap: {
        id: 'nofap',
        nom: 'No fap',
        type: 'augmenteStat',
        consequence: [
            {stat: 'attaque', action: 10},
        ],
        action: 0,
        niveau: 3,
        cout: 12,
    },


    // OFFENSIVE

    pistoletPisse: {
        id: 'pistoletPisse',
        nom: 'Pistolet à pisse',
        type: 'offensive',
        consequence: [
            {stat: 'attaque', action: 10},
        ],
        action: 11,
        niveau: 10,
        cout: 37,
    },


    // SOIN


    benedictionZoulman: {
        id: 'benedictionZoulman',
        nom: 'Bénédiction de Zoulman',
        type: 'soin',
        action: 50,
        niveau: 2,
        cout: 43,
    },


    // SOIN TOUR 


    heineken: {
        id: 'heineken',
        nom: 'Heineken de secours',
        type: 'soinTour',
        action: 4,
        niveau: 1,
        cout: 25,
        tour: 4,
    },

    
}