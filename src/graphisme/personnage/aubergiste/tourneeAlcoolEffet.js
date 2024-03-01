export const tourneeAlcoolEffet = (choix, prix, storeJoueurs) => {

    for (let i = 0; i < storeJoueurs.length; i++) {
        const store = storeJoueurs[i];
        
        if (choix == 'ricard') {
            store.modifier('tristesse', 0);
        }

        if (choix == 'pastis') {
            store.modifier('peur', 0);
        }

        if (choix == 'cidre') {
            store.modifier('joie', 100);
        }

        if (choix == 'rouge') {
            store.modifier('colere', 0);
        }

        if (store.nom == 'Celestin') {
            store.retirer('argent', prix);
        }

    }

}