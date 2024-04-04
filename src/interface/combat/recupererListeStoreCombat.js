
import CelestinStore from '../../variableGlobal/personnage/CelestinStore';
import BenzemonstreStore from '../../variableGlobal/personnage/JouhnStore';
import ChevalierMauditStore from '../../variableGlobal/personnage/ChevalierMaudit';
import CleaMoletteStore from '../../variableGlobal/personnage/CleaMoletteStore';
import BlondinStore from '../../variableGlobal/personnage/BlondinStore';
import SneakyStore from '../../variableGlobal/personnage/SneakyStore';

import combatStore from '../../variableGlobal/global/combatStore';

export const recupererListeStoreCombat = () => {

    const celestin = CelestinStore();
    const benze = BenzemonstreStore();
    const chevalier = ChevalierMauditStore();
    const cleamolette = CleaMoletteStore();
    const blondin = BlondinStore();
    const sneaky = SneakyStore();

    const storeCombat = combatStore();

    const listeStore = [];

    for (let i = 0; i < storeCombat.nom.length; i++) {
        const store = storeCombat.nom[i];
        if (store === 'Celestin') {listeStore.push(celestin);}
        if (store === 'Jouhn_ingroum') {listeStore.push(benze);}
        if (store === 'ChevalierMaudit') {listeStore.push(chevalier);}
        if (store === 'CleaMolette') {listeStore.push(cleamolette);}
        if (store === 'Blondin') {listeStore.push(blondin);}
        if (store === 'Sneaky') {listeStore.push(sneaky);}
    }

    return listeStore;

}