import CelestinStore from '../variableGlobal/personnage/CelestinStore';
import BenzemonstreStore from '../variableGlobal/personnage/BenzemonstreStore';

export const recupererStoreDynamique = (equipierCourant) => {

    const celestinStore = CelestinStore();
    const benzemonstreStore = BenzemonstreStore();

    var storeJoueur;

    switch (equipierCourant) {
        case 'Celestin':storeJoueur = celestinStore; break;
        case 'Benzemonstre':storeJoueur = benzemonstreStore; break;
        default: console.log('rien');
    }

    return storeJoueur

}