
export const calculExp = (storeJoueurs, storeEnnemis) => {

    let exp = 0;
    let listeExp = [];
    const nombreJoueur = storeJoueurs.length;

    for (let i = 0; i < storeEnnemis.length; i++) {

        const store = storeEnnemis[i];

        store.modifier('colere', 100);
        store.modifier('joie', 0);
        store.modifier('empathie', 0);
        store.modifier('confiance', 0);

        exp = parseInt(exp + (store.niveau * 10));

        console.log(store.nom, ', exp : ', exp, ', nombre joueur : ', nombreJoueur);

    }

    for (let i = 0; i < storeJoueurs.length; i++) {

        const store = storeJoueurs[i];
        let compteurExp = exp;
        let expNet = store.exp;
        let expMax = store.expMax;
        let niveau = store.niveau;

        if ((exp + store.exp) >= store.expMax) {
            for (compteurExp > expMax; compteurExp - exp;) {
                store.ajouter('niveau', 1);
                store.ajouter('expMax', 20);
                expMax = expMax + 20;
                niveau++;
            }
            store.ajouter('exp', parseInt(compteurExp));
            expNet = expNet + compteurExp;
        } else {
            store.ajouter('exp', parseInt(exp));
            expNet = expNet + compteurExp;
        }

        listeExp.push({
            nom: store.nom,
            imgIcone: store.imgIcone,
            expMax: expMax,
            niveau: niveau,
            exp: expNet,
        })

    }

    console.log('listeExp : ', listeExp);

    return listeExp;

}