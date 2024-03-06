import BenzemonstreStore from "../variableGlobal/personnage/JouhnStore";
import JouhnStore from '../variableGlobal/personnage/JouhnStore';
import ChevalierMauditStore from "../variableGlobal/personnage/ChevalierMaudit";
import CleaMoletteStore from "../variableGlobal/personnage/CleaMoletteStore";
import BlondinStore from "../variableGlobal/personnage/BlondinStore";

export const analysePositionPNJ = (x, y, z) => {

    const benzemonstre = BenzemonstreStore();
    const jouhn = JouhnStore();
    const Chevalier = ChevalierMauditStore();
    const Clea = CleaMoletteStore();
    const blondin = BlondinStore();

    const listePNJ = [];

    if (x === benzemonstre.zoneX && y === benzemonstre.zoneY && z === benzemonstre.zoneZ){listePNJ.push({x: benzemonstre.x, y: benzemonstre.y, store: benzemonstre});}
    if (x === jouhn.zoneX && y === jouhn.zoneY && z === jouhn.zoneZ){listePNJ.push({x: jouhn.x, y: jouhn.y, store: jouhn});}
    if (x === Chevalier.zoneX && y === Chevalier.zoneY && z === Chevalier.zoneZ){listePNJ.push({x: Chevalier.x, y: Chevalier.y, store: Chevalier});}
    if (x === Clea.zoneX && y === Clea.zoneY && z === Clea.zoneZ){listePNJ.push({x: Clea.x, y: Clea.y, store: Clea});}
    if (x === blondin.zoneX && y === blondin.zoneY && z === blondin.zoneZ){listePNJ.push({x: blondin.x, y: blondin.y, store: blondin});}

    return listePNJ;

}