
export const dropItem = (storeEnnemis) => {

    let listeItem = [];

    for (let i = 0; i < storeEnnemis.length; i++) {

        const store = storeEnnemis[i];

        for (let n = 0; n < store.itemDropable.length; n++) {

            let apparition = Math.floor(Math.random() * (100 - 1)) + 1;

            const item = store.itemDropable[n];
            //console.log('item : ', item);
            //console.log('apparition : ', apparition, ', store.tauxApparition : ', item.tauxApparition);

            if (apparition < item.tauxApparition) {

                let quantite = Math.floor(Math.random() * (item.quantite.max - item.quantite.min)) + item.quantite.min;

                //console.log('quantite : ', quantite);

                listeItem.push({
                    quantite: quantite,
                    img: item.img,
                    action: item.action,
                    cible: item.cible,
                    important: item.important,
                    id: item.id,
                    nom: item.nom,
                    description: item.description,
                    poid: item.poid,
                    valeur: item.valeur,
                    type: item.type,
                });

            }

        }

    }

    //console.log('listeItem : ', listeItem);

    return listeItem

}