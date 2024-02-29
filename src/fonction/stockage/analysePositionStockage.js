import oncheStore from '../../variableGlobal/stockage/oncheStore';

export const analysePositionStockage = (x, y, z, lieux) => {

    const storeOnche = oncheStore();


    const listeStockage = [];

    if (lieux == 'onche') {
        for (let i = 0; i < storeOnche.stockage.length; i++) {
            const coffre = storeOnche.stockage[i];
            if (coffre.zoneX == x && coffre.zoneY == y && coffre.zoneZ == z) {listeStockage.push({x: coffre.x, y: coffre.y, id: coffre.idStockage,type: coffre.type,img: coffre.img,inventaire: coffre.inventaire,store: coffre,});}
        }
    
    }

    return listeStockage;

}


/*import s1Store from '../variableGlobal/stockage/onche/s1Store';
import oncheStore from '../variableGlobal/stockage/oncheStore';

export const analysePositionStockage = (x, y, z, lieux) => {

    const s1 = s1Store();

    const listeStockage = [];

    if (lieux == 'onche') {
        
        if (s1.zoneX == x && s1.zoneY == y && s1.zoneZ == z) {listeStockage.push({x: s1.x, y: s1.y, id: s1.idStockage,type: s1.type,img: s1.img,inventaire: s1.inventaire,store: s1,});}
    
    }

    return listeStockage;

}*/