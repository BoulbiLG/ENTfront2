import { verificationTypeObjet } from "./verificationTypeObjet";

export const utiliserItem = async (id, type, cible, action, quantite, equipe, equipierCourant, storeInventaire, joueurStore) => {

    const inventaire = storeInventaire.inventaire;

    console.log(joueurStore);

     const ok = (await import(`../../variableGlobal/personnage/${equipierCourant}Store`)).default();

     //console.log(ok)


        // =========== CONSOMABLE =========== //
        


        console.log('erere')
        if (type === 'consomable') {

            const ligneASupprimer = inventaire.find((element) => element.id === id);
        
            if (ligneASupprimer) {
                if (ligneASupprimer.important === 'non') {
                    if (ligneASupprimer.quantite > 1) {
                        storeInventaire.ajouterQuantiteItem(id, quantite, -1);
                    } else {
                        storeInventaire.retirerLigneInventaire(id);
                    }
                    console.log('erere')
                    verificationTypeObjet(id, type, action);
                } else {
                    return;
                }
            }
        }
}