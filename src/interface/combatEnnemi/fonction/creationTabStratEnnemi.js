export const creationTabStratEnnemi = (storeEnnemis, strategieEnnemiSet) => {

    let tableau = [];

    for (let i = 0; i < storeEnnemis.ennemi.length; i++) {
        const store = storeEnnemis.ennemi[i];
        tableau.push({
            nom: store.id,
            strategie: '',
            cible: '',
        })
    }

    strategieEnnemiSet(tableau);

}