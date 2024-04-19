
import { lexiqueArme } from "../../variableGlobal/item/lexiqueArme";

export const verificationCase = (direction, x, y, z, storeDeplacement, lieuxSet, storeMusique, piedBiche, storeInventaire) => {

    let autorisation = true;

    if (piedBiche === 'oui') {
        const ligneASupprimer = storeInventaire.inventaire.find((element) => element.id === 'piedBiche');
      
        if (ligneASupprimer) {
            if (ligneASupprimer.quantite > 1) {
                storeInventaire.retireQuantiteItem('piedBiche', 'quantite', 1);
                storeInventaire.retirer('poid', lexiqueArme.piedBiche.poid);
            } else {
                storeInventaire.retirerLigneInventaire('piedBiche');
                storeInventaire.retirer('poid', lexiqueArme.piedBiche.poid);
            }
        }
    }

    const mettreMusique = (nom) => {
        storeMusique.modifier('courante', nom);
        storeMusique.modifier('lecture', 0);
    }

    if (direction == 'monter') {

        if (x == 2 && y == -5 && z == 0) {storeDeplacement.modifier('zoneZ', 1); lieuxSet('Cabane de FranckDubosc'); autorisation = false; mettreMusique('franck');} //  franck
        if (x == -4 && y == -1 && z == -1) {storeDeplacement.modifier('lieux', 'foretENT'); lieuxSet('Foret du ENT');} //  entreer foret

    } else if (direction == 'haut') {

        // z 999999
        
        if (x == 2 && y == -4 && z == 0) {storeDeplacement.modifier('zoneX', 0); storeDeplacement.modifier('zoneZ', 999999); lieuxSet('Maison de CleaMolette'); autorisation = false;} //  x: 0
        if (x == 1 && y == -3 && z == 0) {storeDeplacement.modifier('zoneX', 1); storeDeplacement.modifier('zoneZ', 999999); lieuxSet('Auberge'); autorisation = false; mettreMusique('auberge');} //  x: 1
        if (x == 1 && y == -3 && z == 999999) {storeDeplacement.modifier('zoneX', 8); storeDeplacement.modifier('zoneZ', 999999); lieuxSet('Auberge'); autorisation = false;} //  x: 8
        if (x == -1 && y == -3 && z == 0) {storeDeplacement.modifier('zoneX', 2); storeDeplacement.modifier('zoneZ', 999999); lieuxSet('Lidl'); autorisation = false; mettreMusique('lidl');} //  x: 2
        if (x == 1 && y == -5 && z == 0) {storeDeplacement.modifier('zoneX', 3); storeDeplacement.modifier('zoneZ', 999999); lieuxSet('Maison Sneaky'); autorisation = false;} //  x: 3
        if (x == 2 && y == -6 && z == 0) {storeDeplacement.modifier('zoneX', 4); storeDeplacement.modifier('zoneZ', 999999); lieuxSet('Maison Zosterae'); autorisation = false;} //  x: 4
        if (x == 3 && y == -6 && z == 0) {storeDeplacement.modifier('zoneX', 5); storeDeplacement.modifier('zoneZ', 999999); lieuxSet('Maison Leoben'); autorisation = false;} //  x: 5
        if (x == 1 && y == -6 && z == 0) {storeDeplacement.modifier('zoneX', 6); storeDeplacement.modifier('zoneZ', 999999); lieuxSet("Gazette d'Onche"); autorisation = false;} //  x: 6
        if (x == -4 && y == -3 && z == 0) {storeDeplacement.modifier('zoneX', 7); storeDeplacement.modifier('zoneZ', 999999); lieuxSet("Mairie d'Onche"); autorisation = false;} //  x: 7
        if (x == 1 && y == -2 && z == 0) {storeDeplacement.modifier('zoneX', 9); storeDeplacement.modifier('zoneZ', 999999); lieuxSet("Maison de Celestin"); autorisation = false;} //  x: 9
        if (x == -2 && y == -4 && z == 0) {storeDeplacement.modifier('zoneX', 10); storeDeplacement.modifier('zoneZ', 999999); lieuxSet("Maison de Blondin le garde"); autorisation = false;} //  x: 10
        if (x == -1 && y == -1 && z == 0) {storeDeplacement.modifier('zoneX', 11); storeDeplacement.modifier('zoneZ', 999999); lieuxSet("Toilette publique / Antre de PuerAnus"); autorisation = false;} //  x: 11
        if (x == 0 && y == 0 && z == 0) {lieuxSet("Foret du ENT"); storeDeplacement.modifier('lieux', 'foretENT'); mettreMusique('foretENT');} // aller foret
        
        // z 666

        if (x == -2 && y == -5 && z == 0) {storeDeplacement.modifier('zoneX', 0); storeDeplacement.modifier('zoneZ', 666); lieuxSet('Goulag'); autorisation = false; mettreMusique('goulag');} //  x: 0

    } else if (direction == 'descendre') {

        if (x == 2 && y == -5 && z == 1) {storeDeplacement.modifier('zoneZ', 0); lieuxSet("Village d'Onche"); autorisation = false; mettreMusique('onche');} // retour franck
        if (x == -4 && y == -1 && z == 0) {lieuxSet("Village d'Onche"); storeDeplacement.modifier('lieux', 'onche'); mettreMusique('onche');} // retour village

    } else if (direction == 'gauche') {

        if (x == 1 && y == -1 && z == -1) {storeDeplacement.modifier('zoneX', -4); storeDeplacement.ajouter('miniMapX', 100); autorisation = false;} //  x: -4

    } else if (direction == 'bas') {

        // z 999999

        if (x == 0 && y == -4 && z == 999999) {storeDeplacement.modifier('zoneZ', 0); storeDeplacement.modifier('zoneX', 2); lieuxSet("Village d'Onche"); autorisation = false; mettreMusique('onche');} // retour
        if (x == 1 && y == -3 && z == 999999) {storeDeplacement.modifier('zoneZ', 0); storeDeplacement.modifier('zoneX', 1); lieuxSet("Village d'Onche"); autorisation = false; mettreMusique('onche');} // retour auberge
        if (x == 8 && y == -3 && z == 999999) {storeDeplacement.modifier('zoneZ', 999999); storeDeplacement.modifier('zoneX', 1); lieuxSet("Auberge"); autorisation = false;} // retour auberge 2
        if (x == 2 && y == -3 && z == 999999) {storeDeplacement.modifier('zoneZ', 0); storeDeplacement.modifier('zoneX', -1); lieuxSet("Village d'Onche"); autorisation = false; mettreMusique('onche');} // retour clea
        if (x == 3 && y == -5 && z == 999999) {storeDeplacement.modifier('zoneZ', 0); storeDeplacement.modifier('zoneX', 1); lieuxSet("Village d'Onche"); autorisation = false; mettreMusique('onche');} // retour sneaky
        if (x == 4 && y == -6 && z == 999999) {storeDeplacement.modifier('zoneZ', 0); storeDeplacement.modifier('zoneX', 2); lieuxSet("Village d'Onche"); autorisation = false; mettreMusique('onche');} // retour zosterae
        if (x == 5 && y == -6 && z == 999999) {storeDeplacement.modifier('zoneZ', 0); storeDeplacement.modifier('zoneX', 3); lieuxSet("Village d'Onche"); autorisation = false; mettreMusique('onche');} // retour leoben
        if (x == 6 && y == -6 && z == 999999) {storeDeplacement.modifier('zoneZ', 0); storeDeplacement.modifier('zoneX', 1); lieuxSet("Village d'Onche"); autorisation = false; mettreMusique('onche');} // retour gazette
        if (x == 7 && y == -3 && z == 999999) {storeDeplacement.modifier('zoneZ', 0); storeDeplacement.modifier('zoneX', -4); lieuxSet("Village d'Onche"); autorisation = false; mettreMusique('onche');} // retour mairie
        if (x == 9 && y == -2 && z == 999999) {storeDeplacement.modifier('zoneZ', 0); storeDeplacement.modifier('zoneX', 1); lieuxSet("Village d'Onche"); autorisation = false; mettreMusique('onche');} // retour celestin
        if (x == 10 && y == -4 && z == 999999) {storeDeplacement.modifier('zoneZ', 0); storeDeplacement.modifier('zoneX', -2); lieuxSet("Village d'Onche"); autorisation = false; mettreMusique('onche');} // retour blondin
        if (x == 11 && y == -1 && z == 999999) {storeDeplacement.modifier('zoneZ', 0); storeDeplacement.modifier('zoneX', -1); lieuxSet("Village d'Onche"); autorisation = false; mettreMusique('onche');} // retour chiotte
        if (x == 0 && y == 1 && z == 0) {lieuxSet("Village d'Onche"); storeDeplacement.modifier('lieux', 'onche'); mettreMusique('onche');} // aller village onche
        
        // z 666

        if (x == 0 && y == -5 && z == 666) {storeDeplacement.modifier('zoneZ', 0); storeDeplacement.modifier('zoneX', -2); lieuxSet("Village d'Onche"); autorisation = false; mettreMusique('onche');} // retour goulag
    
    } else if (direction == 'droite') {

        if (x == -4 && y == -1 && z == -1) {storeDeplacement.modifier('zoneX', 1); storeDeplacement.retirer('miniMapX', 100); autorisation = false;} //  x: -1

    }

    return autorisation;

}