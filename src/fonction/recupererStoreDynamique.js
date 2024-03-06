import CelestinStore from '../variableGlobal/personnage/CelestinStore';
import BenzemonstreStore from '../variableGlobal/personnage/BenzemonstreStore';
import JouhnStore from '../variableGlobal/personnage/JouhnStore';
import ChevalierMauditStore from '../variableGlobal/personnage/ChevalierMaudit';
import CleaMoletteStore from '../variableGlobal/personnage/CleaMoletteStore';
import BlondinStore from '../variableGlobal/personnage/BlondinStore';

export const recupererStoreDynamique = (equipierCourant) => {

    const celestinStore = CelestinStore();
    const benzemonstreStore = BenzemonstreStore();
    const jouhnStore = JouhnStore();
    const chevalierMauditStore = ChevalierMauditStore();
    const cleaMoletteStore = CleaMoletteStore();
    const blondin = BlondinStore();

    var storeJoueur;

    switch (equipierCourant) {
        case 'Celestin':storeJoueur = celestinStore; break;
        case 'Benzemonstre':storeJoueur = benzemonstreStore; break;
        case 'Jouhn_ingroum':storeJoueur = jouhnStore; break;
        case 'ChevalierMaudit':storeJoueur = chevalierMauditStore; break;
        case 'CleaMolette':storeJoueur = cleaMoletteStore; break;
        case 'Blondin':storeJoueur = blondin; break;
        default: console.log('rien');
    }

    return storeJoueur

}