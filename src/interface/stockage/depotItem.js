export const depotItem = (idStockage, action, cible, important, id, nom, img, description, valeur, type, stockageStore, inventaireStockage, storeInventaire, poid) => {

    // suppression inventaire

    const ligneASupprimer = storeInventaire.inventaire.find((element) => element.id === id);
      
    if (ligneASupprimer) {
        if (ligneASupprimer.important === 'non') {
            if (ligneASupprimer.quantite > 1) {
                storeInventaire.retireQuantiteItem(id, 'quantite', 1);
                storeInventaire.retirer('poid', poid);
            } else {
                storeInventaire.retirerLigneInventaire(id);
                storeInventaire.retirer('poid', poid);
            }
        } else {
            return;
        }
    }

    // ajoute inventaire coffre

    var inventaireLigne = [];

    for (let i = 0; i < stockageStore.stockage.length; i++) {
        const coffre = stockageStore.stockage[i];
        if (coffre.idStockage == idStockage) {
            inventaireLigne = coffre;
        }
    }

    const ligneAajouter = inventaireLigne.inventaire.find((element) => element.id === id);
      
    if (ligneAajouter) {
        stockageStore.ajouterQuantiteItem(id, 'quantite', 1, idStockage);
    } else {
        const ligne = { equipe: 0, action: action, cible: cible, important: important, id: id, nom: nom, quantite: 1, img: img, description: description, valeur: valeur, type: type, poid: poid};
        stockageStore.ajouterLigneInventaire(ligne, idStockage);
    }

}