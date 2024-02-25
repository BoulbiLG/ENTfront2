import CelestinStore from '../variableGlobal/personnage/CelestinStore';
import BenzemonstreStore from '../variableGlobal/personnage/BenzemonstreStore';
import JouhnStore from '../variableGlobal/personnage/JouhnStore';

export const recupererStoreDynamique = (equipierCourant) => {

    const celestinStore = CelestinStore();
    const benzemonstreStore = BenzemonstreStore();
    const jouhnStore = JouhnStore();

    var storeJoueur;

    switch (equipierCourant) {
        case 'Celestin':storeJoueur = celestinStore; break;
        case 'Benzemonstre':storeJoueur = benzemonstreStore; break;
        case 'Jouhn_ingroum':storeJoueur = jouhnStore; break;
        default: console.log('rien');
    }

    return storeJoueur

}