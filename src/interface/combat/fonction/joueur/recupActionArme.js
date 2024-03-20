
export const recupActionArme = (storeJoueurs, storeInventaire, choix) => {

    // recuperation action de l'arme

    const equipementCible = storeJoueurs.equipement.find(equip => equip.type === choix);
    const id = equipementCible ? equipementCible.id : null;

    const inventaireCible = storeInventaire.inventaire.find(equip => equip.id === id);
    const action = inventaireCible && inventaireCible.action ? inventaireCible.action : 1;

    return action;

}

export const recupIdArme = (storeJoueurs, storeInventaire, choix) => {

    // recuperation action de l'arme

    const equipementCible = storeJoueurs.equipement.find(equip => equip.type === choix);
    const id = equipementCible.id ? equipementCible.id : 'main';

    //console.log('id : ', id);

    return id;

}