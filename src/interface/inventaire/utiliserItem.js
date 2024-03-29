import { verificationTypeObjet } from "./verificationTypeObjet";

export const utiliserItem = async (id, type, cible, action, quantite, equipe, equipierCourant, storeInventaire, joueurStore, poid, img) => {

    const inventaire = storeInventaire.inventaire;

    
    console.log('id : ', id);
    console.log('type : ', type);
    console.log('cible : ', cible);
    console.log('action : ', action);
    console.log('quantite : ', quantite);
    console.log('joueurStore : ', joueurStore);
    



    // =========== CONSOMABLE =========== //
    


    if (type === 'consomable') {

        const ligneASupprimer = inventaire.find((element) => element.id === id);
    
        if (ligneASupprimer) {
            if (ligneASupprimer.important === 'non') {
                if (ligneASupprimer.quantite > 1) {
                    storeInventaire.retireQuantiteItem(id, 'quantite', 1);
                    storeInventaire.calculerPoid();
                    storeInventaire.retirer('poid', poid);
                } else {
                    storeInventaire.retirerLigneInventaire(id);
                    storeInventaire.calculerPoid();
                    storeInventaire.retirer('poid', poid);
                }
                console.log('gfvdc');
                verificationTypeObjet(id, type, action, inventaire, joueurStore);
            } else {
                return;
            }
        }
    }



    // =========== ARME =========== //



    if (type === 'arme') {

        // main gauche

        var ligneMainG = joueurStore.equipement.find(function(element) {return element.type === 'mainG';});
        var ligneItem = inventaire.find((element) => element.id === id);
        const quantite = ligneItem.quantite;
        const equipe = ligneItem.equipe;

        if (ligneMainG && quantite > equipe) {

            if (ligneMainG.id === '') {

                storeInventaire.ajouterQuantiteItem(ligneItem.id, 'equipe', 1);
                var indexMainG = joueurStore.equipement.findIndex(function(element) {return element.type === 'mainG';});

                if (indexMainG !== -1) {
                    joueurStore.modifierIdParType('mainG', id);
                    joueurStore.modifierImgParType('mainG', img);
                    console.log("Le champ 'id' de 'mainG' a été modifié avec succès.");
                    verificationTypeObjet(id, type, action, inventaire, joueurStore);
                }

            } else {

                // main droite

                var ligneMainD = joueurStore.equipement.find(function(element) {return element.type === 'mainD';});
                ligneItem = inventaire.find((element) => element.id === id);
                const quantite = ligneItem.quantite;
                const equipe = ligneItem.equipe;
            
                if (ligneMainD && quantite > equipe) {

                    storeInventaire.ajouterQuantiteItem(ligneItem.id, 'equipe', 1);

                    if (ligneMainD.id === '') {                            
                        
                        var indexMainD = joueurStore.equipement.findIndex(function(element) {return element.type === 'mainD';});
                    
                        if (indexMainD !== -1) {
                            joueurStore.modifierIdParType('mainD', id);
                            joueurStore.modifierImgParType('mainD', img);
                            console.log("Le champ 'id' de 'mainD' a été modifié avec succès.");
                            verificationTypeObjet(id, type, action, inventaire, joueurStore);
                        }
                    }
                }
            }
        }
    }



    // =========== ARMURE =========== //



    if (type === 'armure') {


        var ligneTete = joueurStore.equipement.find(function(element) {return element.type === cible;});
        ligneItem = inventaire.find((element) => element.id === id);
        const quantite = ligneItem.quantite;
        const equipe = ligneItem.equipe;
    
        if (ligneTete && quantite > equipe) {

            storeInventaire.ajouterQuantiteItem(ligneItem.id, 'equipe', 1);

            if (ligneTete.id === '') {
                
                // equipe l'objet cible

                var indexTete = joueurStore.equipement.findIndex(function(element) {return element.type === cible;});
            
                if (indexTete !== -1) {
                    joueurStore.modifierIdParType(cible, id);
                    joueurStore.modifierImgParType(cible, img);
                    console.log("Le champ 'id' de ", cible, " a été modifié avec succès.");
                    verificationTypeObjet(id, type, action, inventaire, joueurStore);
                }
            }
        }
    }
}