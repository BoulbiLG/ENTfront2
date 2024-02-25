import BenzemonstreStore from "../variableGlobal/personnage/JouhnStore";
import JouhnStore from '../variableGlobal/personnage/JouhnStore';
import ChevalierMauditStore from "../variableGlobal/personnage/ChevalierMaudit";

export const analysePositionPNJ = (x, y, z) => {

    const benzemonstre = BenzemonstreStore();
    const jouhn = JouhnStore();
    const Chevalier = ChevalierMauditStore();

    const listePNJ = [];

    if (x === benzemonstre.zoneX && y === benzemonstre.zoneY && z === benzemonstre.zoneZ){listePNJ.push({x: benzemonstre.x, y: benzemonstre.y, store: benzemonstre});}
    if (x === jouhn.zoneX && y === jouhn.zoneY && z === jouhn.zoneZ){listePNJ.push({x: jouhn.x, y: jouhn.y, store: jouhn});}
    if (x === Chevalier.zoneX && y === Chevalier.zoneY && z === Chevalier.zoneZ){listePNJ.push({x: Chevalier.x, y: Chevalier.y, store: Chevalier});}

    return listePNJ;

}