import CelestinStore from '../variableGlobal/personnage/CelestinStore';
import BenzemonstreStore from '../variableGlobal/personnage/BenzemonstreStore';
import JouhnStore from '../variableGlobal/personnage/JouhnStore';
import ChevalierMauditStore from '../variableGlobal/personnage/ChevalierMaudit';
import CleaMoletteStore from '../variableGlobal/personnage/CleaMoletteStore';
import BlondinStore from '../variableGlobal/personnage/BlondinStore';
import SneakyStore from '../variableGlobal/personnage/SneakyStore';
import FranckDuboscStore from '../variableGlobal/personnage/FranckDuboscStore';
import LeobenStore from '../variableGlobal/personnage/LeobenStore';
import VolutesStore from '../variableGlobal/personnage/VolutesStore';
import ZosteraeStore from '../variableGlobal/personnage/ZosteraeStore';

export const recupererStoreDynamique = (equipierCourant) => {

    const celestinStore = CelestinStore();
    const benzemonstreStore = BenzemonstreStore();
    const jouhnStore = JouhnStore();
    const chevalierMauditStore = ChevalierMauditStore();
    const cleaMoletteStore = CleaMoletteStore();
    const blondin = BlondinStore();
    const sneaky = SneakyStore();
    const franck = FranckDuboscStore();
    const leoben = LeobenStore();
    const volutes = VolutesStore();
    const zosterae = ZosteraeStore();

    var storeJoueur;

    switch (equipierCourant) {
        case 'Celestin':storeJoueur = celestinStore; break;
        case 'Benzemonstre':storeJoueur = benzemonstreStore; break;
        case 'Jouhn_ingroum':storeJoueur = jouhnStore; break;
        case 'ChevalierMaudit':storeJoueur = chevalierMauditStore; break;
        case 'CleaMolette':storeJoueur = cleaMoletteStore; break;
        case 'Blondin':storeJoueur = blondin; break;
        case 'Sneaky':storeJoueur = sneaky; break;
        case 'FranckDubosc':storeJoueur = franck; break;
        case 'Leoben':storeJoueur = leoben; break;
        case 'Volutes':storeJoueur = volutes; break;
        case 'Zosterae':storeJoueur = zosterae; break;
        default: console.log('rien');
    }

    return storeJoueur

}