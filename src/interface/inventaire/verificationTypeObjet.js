import equipeStore from "../../variableGlobal/personnage/equipeStore";

export const verificationTypeObjet = (id, type, action) => {

    const storeEquipe = equipeStore();

    import(`../../variableGlobal/personnage/${storeEquipe.courant}Store`)
    .then((dynamicStore) => {

        const joueurStore = dynamicStore.default();

        if (type === 'consomable') {
            if (id === 'pomme') { joueurStore.vie = joueurStore.vie + action; if (joueurStore.vie > 100) {joueurStore.vie = 100}}
        }

        if (type === 'arme') {
            if (id === 'epee') { joueurStore.attaque = joueurStore.attaque + action;}
            if (id === 'bouclier') { joueurStore.defense = joueurStore.defense + action;}
        }

        if (type === 'armure') {
            if (id === 'casque') { joueurStore.defense = joueurStore.attaque + action;}
            if (id === 'epauliere') { joueurStore.defense = joueurStore.defense + action;}
            if (id === 'nike') { joueurStore.defense = joueurStore.defense + action;}
            if (id === 'plastron') { joueurStore.defense = joueurStore.defense + action;}
            if (id === 'jambiere') { joueurStore.defense = joueurStore.defense + action;}
        }

    })
    .catch((error) => {console.error(`Erreur lors de l'importation du store ${storeEquipe.courant}:`, error);});
}

export const retirerObjetEffet = (id, type, action) => {

    const storeEquipe = equipeStore();

    import(`../../variableGlobal/personnage/${storeEquipe.courant}Store`)
    .then((dynamicStore) => {

        const joueurStore = dynamicStore.default();

        var inventaire = JSON.parse(sessionStorage.getItem('inventaire'));
        var ligneItem = inventaire.find((element) => element.id === id);

        if (type === 'arme') {
            if (id === 'epee') { joueurStore.attaque = joueurStore.attaque - action; ligneItem.equipe--;}
            if (id === 'bouclier') { joueurStore.defense = joueurStore.defense - action; ligneItem.equipe--;}
        }

        if (type === 'armure') {
            if (id === 'casque') { joueurStore.defense = joueurStore.defense - action; ligneItem.equipe--;}
            if (id === 'epauliere') { joueurStore.defense = joueurStore.defense - action; ligneItem.equipe--;}
            if (id === 'nike') { joueurStore.defense = joueurStore.defense - action; ligneItem.equipe--;}
            if (id === 'plastron') { joueurStore.defense = joueurStore.defense - action; ligneItem.equipe--;}
            if (id === 'jambiere') { joueurStore.defense = joueurStore.defense - action; ligneItem.equipe--;}
        }

    })
    .catch((error) => {console.error(`Erreur lors de l'importation du store ${storeEquipe.courant}:`, error);});
}