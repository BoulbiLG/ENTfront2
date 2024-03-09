
export const animation = (storeJoueurs) => {

    const enculerPromise = new Promise((resolve) => {
        setTimeout(() => {
            storeJoueurs[0].modifier('comportement', '');
            resolve();
        }, 2000);
        storeJoueurs[0].modifier('comportement', 'attaque');
    });

}