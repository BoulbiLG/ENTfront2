
export const decisionMagie = (storeEnnemis, storeCombat) => {

    const lexique = storeEnnemis.magieTout.lexique;
    const tableauSortSoin = [];
    const tableauSortOffensif = [];
    const tableauSortAugmenteStat = [];
    const tableauSortBaisseStat = [];
    let decisionSort = '';

    const tableauDefinitif = [{
        sortStatAugmente: [],
        sortBaisseStat: [],
        sortStatOffensif: [],
        action: '',
    }];


    // VERIFIE CHAQUE SORT
    for (let i = 0; i < lexique.length; i++) {
        const magie = lexique[i];
        const tauxVie = storeEnnemis.vie / storeEnnemis.vieMax * 100;
        if (tauxVie < 50 && storeEnnemis.magie >= magie.cout) {

            // RECUPERE TOUS LES SORT DE SOIN
            if (magie.type == 'soin') {
                if (storeEnnemis.niveau >= magie.niveau) {
                    decisionSort = 'soin';
                    tableauSortSoin.push(magie);
                } 
            }
        } else {

            // RECUPERE TOUS LES SORTS OFFENSIF
            if (magie.type == 'offensive') {
                decisionSort = 'offensive';
                tableauSortOffensif.push(magie);
            }

            // RECUPERE TOUS LES SORT AUGMENTE STAT
            if (magie.type == 'augmenteStat') {
                if (storeEnnemis.niveau >= magie.niveau) {
                    decisionSort = 'augmenteStat';
                    tableauSortAugmenteStat.push(magie);
                } 
            }

            // RECUPERE TOUS LES SORT BAISSE STAT
            if (magie.type == 'baisseStat') {
                if (storeEnnemis.niveau >= magie.niveau) {
                    decisionSort = 'baisseStat';
                    tableauSortBaisseStat.push(magie);
                } 
            }
        }
    }

    // SOIN
    if (decisionSort == 'soin') {
        let nombre = Math.floor(Math.random() * (tableauSortSoin.length - 0)) + 0;
        const sort = tableauSortSoin[nombre];

        // RETIRER MAGIE
        storeEnnemis.retirer('magie', sort.cout);
        var tauxVie = parseInt(sort.action * storeEnnemis.vieMax / 100);
        if (tauxVie + storeEnnemis.vie >= storeEnnemis.vieMax) {tauxVie = storeEnnemis.vieMax;}        
        if (sort.type == 'soinTour') {
            const ligne = {id: sort.id, nom: storeEnnemis.nom, tour: sort.tour};
            storeCombat.ajouterSoinTour(ligne);
            storeEnnemis.ajouter('vie', tauxVie);
            tableauDefinitif[0].action = 'passer';
            
        } else if (sort.type == 'soin') {
            storeEnnemis.ajouter('vie', tauxVie);
            tableauDefinitif[0].action = 'passer';
        }

        console.log('Le sort choisi est', sort.nom);
    }



    // OFFENSIF
    if (decisionSort == 'offensive') {
        let nombre = Math.floor(Math.random() * (tableauSortOffensif.length - 0)) + 0;
        const sort = tableauSortOffensif[nombre];

        tableauDefinitif[0].sortStatOffensif.push(sort);
    }

    // STAT AUMENTE
    if (decisionSort == 'augmenteStat') {
        let nombre = Math.floor(Math.random() * (tableauSortOffensif.length - 0)) + 0;
        const sort = tableauSortAugmenteStat[nombre];

        tableauDefinitif[0].sortStatAugmente.push(sort);
    }

    // STAT BAISSE
    if (decisionSort == 'augmenteStat') {
        let nombre = Math.floor(Math.random() * (tableauSortOffensif.length - 0)) + 0;
        const sort = tableauSortBaisseStat[nombre];

        tableauDefinitif[0].sortBaisseStat.push(sort);
    }

    return tableauDefinitif;
}