export const dormirEffet = (prix, storeJoueurs) => {

    for (let i = 0; i < storeJoueurs.length; i++) {
        const store = storeJoueurs[i];

        const vieMax = store.vieMax;

        store.modifier('vie', vieMax);

        if (store.nom == 'Celestin') {
            store.retirer('argent', prix);
        }

    }

}