export const decisionCible = (store, tableau, storeJoueurs) => {

    let tableauFaible = [];
    let lePlusFaible = null;
    let lePlusFort;
    let cibleAleatoire;
    let cibleDefinitive;



    // ==================== DECISION STRAT ==================== //



    for (let i = 0; i < tableau.length; i++) {
        const ennemi = tableau[i];

        if (store.id == ennemi.nom) {
            if (ennemi.cible == '') {

                // CALCUL TAUX DE PROTECTION DE CHAQUE JOUEUR
                for (let i = 0; i < storeJoueurs.length; i++) {
                    const cible = storeJoueurs[i];

                    if (cible.vie > 0) {
                        const defense = (cible.defense * (cible.niveau / 10 + 1));
                        const vie = (cible.vie * (cible.niveau / 10 + 1));
                        const protection = defense + vie;
                        tableauFaible.push({nom: cible.nom, protection: parseInt(protection)});
                    }
                }

                // VERIFIE LE JOUEUR LE PLUS FAIBLE
                for (let i = 0; i < tableauFaible.length; i++) {
                    const valeur = tableauFaible[i];
                    if (lePlusFaible == null) {lePlusFaible = valeur;} else {
                        if (lePlusFaible.protection > valeur.protection) {lePlusFaible = valeur}
                    }

                    if (lePlusFort == null) {lePlusFort = valeur;} else {
                        if (lePlusFort.protection < valeur.protection) {lePlusFort = valeur}
                    }
                }

                // DECISION CIBLE ALEATOIRE
                let nombre = Math.floor(Math.random() * (storeJoueurs.length - 0)) + 0;
                cibleAleatoire = storeJoueurs[nombre].nom;
                
                if (ennemi.strategie == 'faible') {cibleDefinitive = lePlusFaible;}
                if (ennemi.strategie == 'fort') {cibleDefinitive = lePlusFort;}
                if (ennemi.strategie == 'hasard') {cibleDefinitive = cibleAleatoire;}

                ennemi.cible = cibleDefinitive.nom;

                return tableau;

            } else {
                return tableau;
            }
        }
    }
}
