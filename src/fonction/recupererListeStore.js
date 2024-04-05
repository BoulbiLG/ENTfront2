
import CelestinStore from '../variableGlobal/personnage/CelestinStore';
import BenzemonstreStore from '../variableGlobal/personnage/JouhnStore';
import ChevalierMauditStore from '../variableGlobal/personnage/ChevalierMaudit';
import CleaMoletteStore from '../variableGlobal/personnage/CleaMoletteStore';
import BlondinStore from '../variableGlobal/personnage/BlondinStore';
import SneakyStore from '../variableGlobal/personnage/SneakyStore';
import FranckDuboscStore from '../variableGlobal/personnage/FranckDuboscStore';
import LeobenStore from '../variableGlobal/personnage/LeobenStore';
import VolutesStore from '../variableGlobal/personnage/VolutesStore';
import ZosteraeStore from '../variableGlobal/personnage/ZosteraeStore';

import equipeStore from '../variableGlobal/personnage/equipeStore';

export const recupererListeStore = () => {

    const celestin = CelestinStore();
    const benze = BenzemonstreStore();
    const chevalier = ChevalierMauditStore();
    const cleamolette = CleaMoletteStore();
    const blondin = BlondinStore();
    const sneaky = SneakyStore();
    const franck = FranckDuboscStore();
    const leoben = LeobenStore();
    const volutes = VolutesStore();
    const zosterae = ZosteraeStore();

    const storeEquipe = equipeStore();

    const listeStore = [];

    for (let i = 0; i < storeEquipe.nom.length; i++) {
        const store = storeEquipe.nom[i];
        if (store === 'Celestin') {listeStore.push(celestin);}
        if (store === 'Jouhn_ingroum') {listeStore.push(benze);}
        if (store === 'ChevalierMaudit') {listeStore.push(chevalier);}
        if (store === 'CleaMolette') {listeStore.push(cleamolette);}
        if (store === 'Blondin') {listeStore.push(blondin);}
        if (sneaky === 'Sneaky') {listeStore.push(sneaky);}
        if (sneaky === 'FranckDubosc') {listeStore.push(franck);}
        if (sneaky === 'Leoben') {listeStore.push(leoben);}
        if (sneaky === 'Volutes') {listeStore.push(volutes);}
        if (sneaky === 'Zosterae') {listeStore.push(zosterae);}
    }

    return listeStore;

}