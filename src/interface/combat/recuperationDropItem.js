

export const recuperationDropItem = (action, 
cible, 
important, 
id, 
nom,
img, 
description, 
valeur, 
type,
storeInventaire,
poid,
listeItem,
avertissementSet,
listeItemNetSet,
) => {

    // suppression coffre

    for (let i = 0; i < listeItem.length; i++) {

        const item = listeItem[i];

        const poidTotal = storeInventaire.poid + poid;
        
        if (poidTotal <= storeInventaire.poidMax) {
            
            var inventaireLigne = [];

            //const ligneASupprimer = listeItem.find((element) => element.id === id);
            
            if (item) {
                if (item.quantite > 1) {
                    item.quantite--;
                } else {
                    listeItem = listeItem.filter(element => element.id !== id);
                }
            }

            // ajout inventaire

            const ligneAajouter = storeInventaire.inventaire.find((element) => element.id === id);
            
            if (ligneAajouter) {
                storeInventaire.ajouterQuantiteItem(id, 'quantite', 1);
                storeInventaire.ajouter('poid', poid);
            } else {
                const ligne = { equipe: 0, action: action, cible: cible, important: important, id: id, nom: nom, quantite: 1, img: img, description: description, valeur: valeur, type: type, poid: poid};
                storeInventaire.ajouterLigneInventaire(ligne);
                storeInventaire.ajouter('poid', poid);
            }
        } else {
            avertissementSet("Impossible de récuperer l'objet vous êtes trop lourd");
        }

    }

    listeItemNetSet(listeItem)

}