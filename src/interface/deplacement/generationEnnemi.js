
import { lexiqueEnnemi } from "../../variableGlobal/ennemi/LexiqueEnnemi";

export const generationEnnemi = (storeCombat, lieux, storeEquipe, storeEnnemi, storeMusique) => {

    let ennemi = [];
    let niveauPossible = [];
    let ennemiId = [];
    let ennemiType = [];
    let ennemiPossibilite = [];

    let id = 0;

    // TYPE DE LIEUX


    
    if (lieux === 'foretENT') {
        ennemiPossibilite = ['nainJardin', 'tareBois', 'serponche', 'tuberculonche', 'chatBois', 'fouErrant', 'gaimon', 'philliproute'];
        niveauPossible = [1, 3];
        storeCombat.modifier('lieuPrecedent', 'foretENT');
    }




    // GENERATION ENNEMI



    const max = storeEquipe.nom.length + 3;
    const nombreAleatoire = Math.floor(Math.random() * max) + 1;

    for (let i = 0; i < nombreAleatoire; i++) {

        const max2 = ennemiPossibilite.length;
        const nombreAleatoire2 = Math.floor(Math.random() * max2);

        ennemiType.push(ennemiPossibilite[nombreAleatoire2]);

    }

    for (let a = 0; a < ennemiType.length; a++) {
        ennemiId.push(id);
        const ennemiTemp = ennemiType[a];
        let lexique = lexiqueEnnemi[ennemiTemp];
        const niveau = Math.floor(Math.random() * (niveauPossible[1] - niveauPossible[0] + 1)) + niveauPossible[0];
        lexique = { ...lexique, niveau, id };
        id = id + 1;
        ennemi.push(lexique);
        storeEnnemi.ajouterEnnemi(lexique);
    }

    storeCombat.modifier('type', 'normal');
    storeCombat.modifier('nombreEnnemi',  ennemiType.length);
    storeCombat.modifier('ennemiEnVie',  ennemiId);
    storeCombat.modifier('typeEnnemi',  'ennemi');
    storeCombat.modifier('combat', 'oui');
    storeMusique.modifier('courante', 'combatForet');
    storeMusique.modifier('lecture', 0);
}