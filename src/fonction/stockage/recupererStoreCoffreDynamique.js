
import oncheStore from "../../variableGlobal/stockage/oncheStore";

export const recupererStoreCoffreDynamique = (lieux) => {

    const storeOnche = oncheStore();
    var storeJoueur;

    switch (lieux) {
        case 'onche':storeJoueur = storeOnche; break;
        default: console.log('rien');
    }

    return storeJoueur

}

/*import s1Store from "../variableGlobal/stockage/onche/s1Store";

export const recupererStoreCoffreDynamique = (id) => {

    const storeS1 = s1Store();

    var storeJoueur;

    switch (id) {
        case '1':storeJoueur = storeS1; break;
        default: console.log('rien');
    }

    return storeJoueur

}
*/

/*

import oncheStore from "../../variableGlobal/stockage/oncheStore";

export const recupererStoreCoffreDynamique = (idStockage, lieux) => {

    const storeOnche = oncheStore();
    const storeStockage = [];
    var storeGlobal = [];

    if (lieux == 'onche') {
        for (let i = 0; i < storeOnche.stockage.length; i++) {
            const coffre = storeOnche.stockage[i];
            if (coffre.idStockage == idStockage) {
                storeStockage.push({x: coffre.x, y: coffre.y, id: coffre.idStockage,type: coffre.type,img: coffre.img,inventaire: coffre.inventaire,store: coffre,});
                storeGlobal = storeOnche;
            }
        }
    
    }

    console.log(storeStockage);

    return storeStockage, storeGlobal;

}
*/