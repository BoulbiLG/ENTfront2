export const decisionStrat = (store, tableau) => {



    // ==================== DECISION STRAT ==================== //



    for (let i = 0; i < tableau.length; i++) {
        const ennemi = tableau[i];

        if (store.nom == ennemi.nom) {

            if (ennemi.strategie == '') {
                let nombre = Math.floor(Math.random() * (3 - 1)) + 1;


                if (nombre == 1) {
                    ennemi.strategie = 'faible' // Se focaliser sur le plus faible
                    //console.log(store.nom, ' strategie : plus faible');
                }

                if (nombre == 2) {
                    ennemi.strategie = 'fort' // Se focaliser sur le plus fort
                    //console.log(store.nom, ' strategie : plus fort');
                }

                if (nombre == 3) {
                    ennemi.strategie = 'hasard' // Se focaliser au hasard
                    //console.log(store.nom, ' strategie : hasard');
                }
            } else {
                return tableau;
            }

        }
    }

    return tableau;

}