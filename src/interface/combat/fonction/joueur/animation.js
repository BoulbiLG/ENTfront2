
export const animation = (storeJoueurs) => {

    const enculerPromise = new Promise((resolve) => {
        setTimeout(() => {
            storeJoueurs.modifier('comportement', '');
            resolve();
        }, 2000);
        storeJoueurs.modifier('comportement', 'attaque');
    });

}