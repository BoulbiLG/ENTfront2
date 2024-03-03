export const retirerObjetEffet = (id, type, action, inventaireStore, joueurStore) => {

    var ligneItem = inventaireStore.inventaire.find((element) => element.id === id);

    if (type === 'arme') {
        if (id === 'epee') { joueurStore.attaque = joueurStore.retirer('attaque', action); inventaireStore.retireQuantiteItem(ligneItem.id, 'equipe', 1);}
        if (id === 'bouclier') { joueurStore.defense = joueurStore.retirer('defense', action); inventaireStore.retireQuantiteItem(ligneItem.id,'equipe', 1);}
    }

    if (type === 'armure') {
        if (id === 'casque') { joueurStore.defense = joueurStore.retirer('defense', action); inventaireStore.retireQuantiteItem(ligneItem.id,'equipe', 1);}
        if (id === 'kippa') { joueurStore.defense = joueurStore.retirer('defense', action); inventaireStore.retireQuantiteItem(ligneItem.id,'equipe', 1);}
        if (id === 'epauliere') { joueurStore.defense = joueurStore.retirer('defense', action); inventaireStore.retireQuantiteItem(ligneItem.id,'equipe', 1);}
        if (id === 'nike') { joueurStore.defense = joueurStore.retirer('defense', action); inventaireStore.retireQuantiteItem(ligneItem.id,'equipe', 1);}
        if (id === 'plastron') { joueurStore.defense = joueurStore.retirer('defense', action); inventaireStore.retireQuantiteItem(ligneItem.id,'equipe', 1);}
        if (id === 'jambiere') { joueurStore.defense = joueurStore.retirer('defense', action); inventaireStore.retireQuantiteItem(ligneItem.id,'equipe', 1);}
    }
}