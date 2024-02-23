import { verificationTypeObjet } from "./verificationTypeObjet";

export const utiliserItem = async (id, type, cible, action, quantite, equipe, equipierCourant, storeInventaire, joueurStore) => {

    const inventaire = storeInventaire.inventaire;



    // =========== CONSOMABLE =========== //
    


    if (type === 'consomable') {

        const ligneASupprimer = inventaire.find((element) => element.id === id);

        console.log(ligneASupprimer);
    
        if (ligneASupprimer) {
            if (ligneASupprimer.important === 'non') {
                console.log('non');
                if (ligneASupprimer.quantite > 1) {
                    console.log('quantite superieur a 1');
                    storeInventaire.retireQuantiteItem(id, 'quantite', 1);
                } else {
                    console.log('quantite brise');
                    storeInventaire.retirerLigneInventaire(id);
                }
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
                    joueurStore.modifierIdParType('mainG', id)
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
                            joueurStore.modifierIdParType('mainD', id)
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
                    joueurStore.modifierIdParType(cible, id)
                    console.log("Le champ 'id' de ", cible, " a été modifié avec succès.");
                    verificationTypeObjet(id, type, action, inventaire, joueurStore);
                }
            }
        }
    }
}