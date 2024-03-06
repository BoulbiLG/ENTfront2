
import CelestinStore from '../variableGlobal/personnage/CelestinStore';
import BenzemonstreStore from '../variableGlobal/personnage/JouhnStore';
import ChevalierMauditStore from '../variableGlobal/personnage/ChevalierMaudit';
import CleaMoletteStore from '../variableGlobal/personnage/CleaMoletteStore';
import BlondinStore from '../variableGlobal/personnage/BlondinStore';

import equipeStore from '../variableGlobal/personnage/equipeStore';

export const recupererListeStore = () => {

    const celestin = CelestinStore();
    const benze = BenzemonstreStore();
    const chevalier = ChevalierMauditStore();
    const cleamolette = CleaMoletteStore();
    const blondin = BlondinStore();

    const storeEquipe = equipeStore();

    const listeStore = [];

    for (let i = 0; i < storeEquipe.nom.length; i++) {
        const store = storeEquipe.nom[i];
        if (store === 'Celestin') {listeStore.push(celestin);}
        if (store === 'Jouhn_ingroum') {listeStore.push(benze);}
        if (store === 'ChevalierMaudit') {listeStore.push(chevalier);}
        if (store === 'CleaMolette') {listeStore.push(cleamolette);}
        if (store === 'Blondin') {listeStore.push(blondin);}
    }

    return listeStore;

}