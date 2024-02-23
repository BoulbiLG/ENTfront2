import { retirerObjetEffet } from "./retirerEffetItem";

export const jeterItem = (id, type, inventaireStore, joueurStore, poid) => {

    const inventaire = inventaireStore.inventaire;

    // suppression equipement

    const maj = joueurStore.equipement.find(item => item.id === id);

    if (maj) {
        maj.id = '';
      } else {
        console.error(`L'élément avec l'ID ${id} n'a pas été trouvé.`);
      }
  
    const infoItem = inventaire.find((element) => element.id === id);

    retirerObjetEffet(id, infoItem.type, infoItem.action, inventaireStore, joueurStore);

    // suppression inventaire

    const ligneASupprimer = inventaire.find((element) => element.id === id);
  
    if (ligneASupprimer) {
        if (ligneASupprimer.important === 'non') {
            if (ligneASupprimer.quantite > 1) {
                inventaireStore.retireQuantiteItem(id, 'quantite', 1);
                inventaireStore.calculerPoid();
                inventaireStore.retirer('poid', poid);
            } else {
                inventaireStore.retirerLigneInventaire(id);
                inventaireStore.calculerPoid();
                inventaireStore.retirer('poid', poid);
            }
        } else {
            return;
        }
    }

};
