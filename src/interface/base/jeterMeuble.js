
export const jeterMeuble = (storeDeplacement, storeInventaire, storeBase, type, nom, img, imgItem, description, valeur, poid, action, id, x, y, quantite, protection, piege, idBase=0) => {

    const X = storeDeplacement.zoneX;
    const Y = storeDeplacement.zoneY;
    const Z = storeDeplacement.zoneZ;

    const idBaseTotal = storeBase.idBase;
    const idMeubleTotal = storeBase.idBase;

    storeInventaire.retirer('poidMeuble', poid);

    if (quantite > 1) {
        storeInventaire.retirerQuantiteMeuble(type, 'quantite', 1);
    } else {
        storeInventaire.retirerLigneMeuble(type);
    }

}