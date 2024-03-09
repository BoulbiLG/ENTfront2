export const creationTabStratEnnemi = (storeEnnemis, strategieEnnemiSet) => {

    let tableau = [];

    for (let i = 0; i < storeEnnemis.length; i++) {
        const store = storeEnnemis[i];
        tableau.push({
            nom: store.nom,
            strategie: '',
            cible: '',
        })
    }

    strategieEnnemiSet(tableau);

}