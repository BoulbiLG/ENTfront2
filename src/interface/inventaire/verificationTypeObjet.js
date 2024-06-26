export const verificationTypeObjet = (id, type, action, inventaire, joueurStore) => {

    console.log('id : ', id);
    console.log('type : ', type);
    console.log('action : ', action);

    const ajouterVie = (valeur) => {
        if ((joueurStore.vie + valeur) > joueurStore.vieMax) {
            joueurStore.vie = joueurStore.modifier('vie', joueurStore.vieMax);
        } else {
            joueurStore.vie = joueurStore.ajouter('vie', action);
        }
    }

    if (type === 'consomable') {
        if (id === 'pomme') { ajouterVie(action);}
    }

    if (type === 'arme') {
        if (id === 'epee') { joueurStore.attaque = joueurStore.ajouter('attaque', action);}
        if (id === 'piedBiche') { joueurStore.attaque = joueurStore.ajouter('attaque', action);}
        if (id === 'bouclier') { joueurStore.defense = joueurStore.ajouter('defense', action);}
    }

    if (type === 'armure') {
        if (id === 'casque') { joueurStore.defense = joueurStore.ajouter('defense', action);}
        if (id === 'kippa') { joueurStore.defense = joueurStore.ajouter('defense', action);}
        if (id === 'epauliere') { joueurStore.defense = joueurStore.ajouter('defense', action);}
        if (id === 'nike') { joueurStore.defense = joueurStore.ajouter('defense', action);}
        if (id === 'plastron') { joueurStore.defense = joueurStore.ajouter('defense', action);}
        if (id === 'jambiere') { joueurStore.defense = joueurStore.ajouter('defense', action);}
    }
}