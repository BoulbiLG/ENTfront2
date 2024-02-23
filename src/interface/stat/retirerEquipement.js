import retirerObjetEffet from '../inventaire/retirerEffetItem';

export const retirerEquipement = (id, type, inventaireStore, joueurStore) => {

    joueurStore.modifierIdParType(type, '');

    const infoItem = inventaireStore.inventaire.find((element) => element.id === id);

    if (infoItem) {
        retirerObjetEffet(id, infoItem.type, infoItem.action, inventaireStore, joueurStore);
    }
};