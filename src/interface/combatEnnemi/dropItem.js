
export const dropItem = (storeEnnemis) => {

    let listeItem = [];
    let historiqueItem = [];

    for (let i = 0; i < storeEnnemis.ennemi.length; i++) {

        const store = storeEnnemis.ennemi[i];

        for (let n = 0; n < store.itemDropable.length; n++) {

            let apparition = Math.floor(Math.random() * (100 - 1)) + 1;

            const item = store.itemDropable[n];
            //console.log('item : ', item);
            //console.log('apparition : ', apparition, ', store.tauxApparition : ', item.tauxApparition);

            if (apparition < item.tauxApparition) {

                let quantite = Math.floor(Math.random() * (item.quantite.max - item.quantite.min)) + item.quantite.min;

                //console.log('quantite : ', quan
                if (listeItem.length === 0) {

                    //console.log('ajout premier item');

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

                } else {

                    for (let i = 0; i < listeItem.length; i++) {
                        const objet = listeItem[i];
                        if (item.id === objet.id) {
                            //console.log('ajouter quantite', item.id, objet.id);
                            objet.quantite = objet.quantite + quantite;
                        } else {
                            //console.log('ajouter item', item.id, objet.id)
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
                    console.log(listeItem)
                }
                
                historiqueItem.push({
                    imgIcone: store.imgIcone,
                    texte: `${store.nom} a donné ${quantite} ${item.id}`,
                })
            }
        }
    }

    return listeItem

}