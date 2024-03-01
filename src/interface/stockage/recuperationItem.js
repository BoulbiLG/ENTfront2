
export const recuperationItem = (idStockage, action, cible, important, id, nom, img, description, valeur, type, stockageStore, inventaireStockage, storeInventaire, poid, avertissementSet) => {

    // suppression coffre

    const poidTotal = storeInventaire.poid + poid;
    if (poidTotal <= storeInventaire.poidMax) {
        var inventaireLigne = [];

        for (let i = 0; i < stockageStore.stockage.length; i++) {
            const coffre = stockageStore.stockage[i];
            if (coffre.idStockage == idStockage) {
                inventaireLigne = coffre;
            }
        }

        const ligneASupprimer = inventaireLigne.inventaire.find((element) => element.id === id);

        
        if (ligneASupprimer) {
            if (ligneASupprimer.quantite > 1) {
                stockageStore.retirerQuantiteItem(id, 'quantite', 1, idStockage);
            } else {
                stockageStore.retirerLigneInventaire(id, idStockage);
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

/*
export const recuperationItem = (idStockage, action, cible, important, id, nom, img, description, valeur, type, stockageStore, inventaireStockage, storeInventaire) => {

    // suppression coffre

    const ligneASupprimer = stockageStore.inventaire.find((element) => element.id === id);
    
    if (ligneASupprimer) {
        if (ligneASupprimer.quantite > 1) {
            stockageStore.retireQuantiteItem(id, 'quantite', 1);
            stockageStore.ajouter('zoneX', 1);
            stockageStore.retirer('zoneX', 1);
        } else {
            stockageStore.retirerLigneInventaire(id);
        }
    }

    // ajout inventaire

    const ligneAajouter = storeInventaire.inventaire.find((element) => element.id === id);
      
    if (ligneAajouter) {
        storeInventaire.ajouterQuantiteItem(id, 'quantite', 1)
    } else {
        const ligne = { equipe: 0, action: action, cible: cible, important: important, id: id, nom: nom, quantite: 1, img: img, description: description, valeur: valeur, type: type};
        storeInventaire.inventaire.ajouterLigneInventaire(ligne);
    }

}
*/