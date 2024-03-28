export const verificationCase = (direction, x, y, z, storeDeplacement, lieuxSet, storeMusique) => {

    let autorisation = true;

    const mettreMusique = (nom) => {
        storeMusique.modifier('courante', nom);
        storeMusique.modifier('lecture', 0);
    }

    if (direction == 'monter') {

    } else if (direction == 'haut') {
        
        if (x == 2 && y == -4 && z == 0) {storeDeplacement.modifier('zoneX', 0); storeDeplacement.modifier('zoneZ', 999999); lieuxSet('Maison de CleaMolette'); autorisation = false; mettreMusique('maisonClea');} //  x: 0
        if (x == 1 && y == -3 && z == 0) {storeDeplacement.modifier('zoneX', 1); storeDeplacement.modifier('zoneZ', 999999); lieuxSet('Auberge'); autorisation = false; mettreMusique('auberge');} //  x: 1
        if (x == -1 && y == -3 && z == 0) {storeDeplacement.modifier('zoneX', 2); storeDeplacement.modifier('zoneZ', 999999); lieuxSet('Lidl'); autorisation = false; mettreMusique('lidl');} //  x: 2

    } else if (direction == 'descendre') {

    } else if (direction == 'gauche') {

    } else if (direction == 'bas') {

        if (x == 0 && y == -4 && z == 999999) {storeDeplacement.modifier('zoneZ', 0); storeDeplacement.modifier('zoneX', 2); lieuxSet("Village d'Onche"); autorisation = false; mettreMusique('onche');} // retour
        if (x == 1 && y == -3 && z == 999999) {storeDeplacement.modifier('zoneZ', 0); storeDeplacement.modifier('zoneX', 1); lieuxSet("Village d'Onche"); autorisation = false; mettreMusique('onche');} // retour
        if (x == 2 && y == -3 && z == 999999) {storeDeplacement.modifier('zoneZ', 0); storeDeplacement.modifier('zoneX', -1); lieuxSet("Village d'Onche"); autorisation = false; mettreMusique('onche');} // retour clea
    
    } else if (direction == 'droite') {

    }

    return autorisation;

}