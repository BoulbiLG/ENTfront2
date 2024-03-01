export const verificationCase = (direction, x, y, z, storeDeplacement, lieuxSet) => {

    let autorisation = true;

    if (direction == 'monter') {

    } else if (direction == 'haut') {
        
        if (x == 2 && y == -4 && z == 0) {storeDeplacement.modifier('zoneX', 0); storeDeplacement.modifier('zoneZ', 999999); lieuxSet('Maison de CleaMolette'); autorisation = false} //  x: 0

    } else if (direction == 'descendre') {

    } else if (direction == 'gauche') {

    } else if (direction == 'bas') {

        if (x == 0 && y == -4 && z == 999999) {storeDeplacement.modifier('zoneZ', 0); storeDeplacement.modifier('zoneX', 2); lieuxSet("Village d'Onche"); autorisation = false} // retour
    
    } else if (direction == 'droite') {

    }

    return autorisation;

}