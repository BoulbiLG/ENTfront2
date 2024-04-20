import BenzemonstreStore from "../variableGlobal/personnage/JouhnStore";
import JouhnStore from '../variableGlobal/personnage/JouhnStore';
import ChevalierMauditStore from "../variableGlobal/personnage/ChevalierMaudit";
import CleaMoletteStore from "../variableGlobal/personnage/CleaMoletteStore";
import BlondinStore from "../variableGlobal/personnage/BlondinStore";
import SneakyStore from "../variableGlobal/personnage/SneakyStore";
import FranckDuboscStore from "../variableGlobal/personnage/FranckDuboscStore";
import LeobenStore from "../variableGlobal/personnage/LeobenStore";
import VolutesStore from "../variableGlobal/personnage/VolutesStore";
import ZosteraeStore from "../variableGlobal/personnage/ZosteraeStore";
import MothStore from "../variableGlobal/personnage/MothStore";
import ObelixStore from "../variableGlobal/personnage/ObelixStore";
import AsterixStore from "../variableGlobal/personnage/AsterixStore";

export const analysePositionPNJ = (x, y, z) => {

    const asterix = AsterixStore();
    const obelix = ObelixStore();
    const benzemonstre = BenzemonstreStore();
    const jouhn = JouhnStore();
    const Chevalier = ChevalierMauditStore();
    const Clea = CleaMoletteStore();
    const blondin = BlondinStore();
    const sneaky = SneakyStore();
    const franck = FranckDuboscStore();
    const leoben = LeobenStore();
    const volutes = VolutesStore();
    const zosterae = ZosteraeStore();
    const moth = MothStore();

    const listePNJ = [];

    if (x === benzemonstre.zoneX && y === benzemonstre.zoneY && z === benzemonstre.zoneZ){listePNJ.push({x: benzemonstre.x, y: benzemonstre.y, store: benzemonstre});}
    if (x === jouhn.zoneX && y === jouhn.zoneY && z === jouhn.zoneZ){listePNJ.push({x: jouhn.x, y: jouhn.y, store: jouhn});}
    if (x === Chevalier.zoneX && y === Chevalier.zoneY && z === Chevalier.zoneZ){listePNJ.push({x: Chevalier.x, y: Chevalier.y, store: Chevalier});}
    if (x === Clea.zoneX && y === Clea.zoneY && z === Clea.zoneZ){listePNJ.push({x: Clea.x, y: Clea.y, store: Clea});}
    if (x === blondin.zoneX && y === blondin.zoneY && z === blondin.zoneZ){listePNJ.push({x: blondin.x, y: blondin.y, store: blondin});}
    if (x === sneaky.zoneX && y === sneaky.zoneY && z === sneaky.zoneZ){listePNJ.push({x: sneaky.x, y: sneaky.y, store: sneaky});}
    if (x === franck.zoneX && y === franck.zoneY && z === franck.zoneZ){listePNJ.push({x: franck.x, y: franck.y, store: franck});}
    if (x === leoben.zoneX && y === leoben.zoneY && z === leoben.zoneZ){listePNJ.push({x: leoben.x, y: leoben.y, store: leoben});}
    if (x === volutes.zoneX && y === volutes.zoneY && z === volutes.zoneZ){listePNJ.push({x: volutes.x, y: volutes.y, store: volutes});}
    if (x === zosterae.zoneX && y === zosterae.zoneY && z === zosterae.zoneZ){listePNJ.push({x: zosterae.x, y: zosterae.y, store: zosterae});}
    if (x === moth.zoneX && y === moth.zoneY && z === moth.zoneZ){listePNJ.push({x: moth.x, y: moth.y, store: moth});}
    if (x === asterix.zoneX && y === asterix.zoneY && z === asterix.zoneZ){listePNJ.push({x: asterix.x, y: asterix.y, store: asterix});}
    if (x === obelix.zoneX && y === obelix.zoneY && z === obelix.zoneZ){listePNJ.push({x: obelix.x, y: obelix.y, store: obelix});}

    return listePNJ;

}