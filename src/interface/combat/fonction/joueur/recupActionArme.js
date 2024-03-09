
export const recupActionArme = (storeJoueurs, storeInventaire, choix) => {

    // recuperation action de l'arme

    const equipementCible = storeJoueurs[0].equipement.find(equip => equip.type === choix);
    const id = equipementCible ? equipementCible.id : null;

    const inventaireCible = storeInventaire.inventaire.find(equip => equip.id === id);
    const action = inventaireCible.action;

    return action;

}

export const recupIdArme = (storeJoueurs, storeInventaire, choix) => {

    // recuperation action de l'arme

    const equipementCible = storeJoueurs[0].equipement.find(equip => equip.type === choix);
    const id = equipementCible ? equipementCible.id : null;

    const inventaireCible = storeInventaire.inventaire.find(equip => equip.id === id);
    const action = inventaireCible.action;

    return id;

}