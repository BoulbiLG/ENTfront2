export const decisionStrat = (store, tableau) => {



    // ==================== DECISION STRAT ==================== //



    for (let i = 0; i < tableau.length; i++) {
        const ennemi = tableau[i];

        if (store.nom == ennemi.nom) {

            if (ennemi.strategie == '') {
                let nombre = Math.floor(Math.random() * (3 - 1)) + 1;

                if (nombre == 1) {
                    ennemi.strategie = 'faible' // Se focaliser sur le plus faible
                }

                if (nombre == 2) {
                    ennemi.strategie = 'fort' // Se focaliser sur le plus fort
                }

                if (nombre == 3) {
                    ennemi.strategie = 'hasard' // Se focaliser au hasard
                }
            } else {
                return tableau;
            }

        }
    }

    return tableau;

}