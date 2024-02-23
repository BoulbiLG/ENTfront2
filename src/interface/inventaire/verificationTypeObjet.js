export const verificationTypeObjet = (id, type, action, inventaire, joueurStore) => {

    if (type === 'consomable') {
        if (id === 'pomme') { joueurStore.vie = joueurStore.ajouter('vie', action); if (joueurStore.vie > 100) {joueurStore.vie = joueurStore.modifier('vie', joueurStore.vieMax)}}
    }

    if (type === 'arme') {
        if (id === 'epee') { joueurStore.attaque = joueurStore.ajouter('attaque', action);}
        if (id === 'bouclier') { joueurStore.defense = joueurStore.ajouter('defense', action);}
    }

    if (type === 'armure') {
        if (id === 'casque') { joueurStore.defense = joueurStore.ajouter('defense', action);}
        if (id === 'epauliere') { joueurStore.defense = joueurStore.ajouter('defense', action);}
        if (id === 'nike') { joueurStore.defense = joueurStore.ajouter('defense', action);}
        if (id === 'plastron') { joueurStore.defense = joueurStore.ajouter('defense', action);}
        if (id === 'jambiere') { joueurStore.defense = joueurStore.ajouter('defense', action);}
    }
}