import { analysePositionBase } from '../../fonction/analysePositionBase';

export const utiliserMeuble = (storeDeplacement, storeInventaire, storeBase, type, nom, img, imgItem, description, valeur, poid, action, id, x, y, quantite, protection, piege, idBase=0) => {

    const X = storeDeplacement.zoneX;
    const Y = storeDeplacement.zoneY;
    const Z = storeDeplacement.zoneZ;

    const idBaseTotal = storeBase.idBase;
    const idMeubleTotal = storeBase.idBase;

    console.log('storeDeplacement : ', storeDeplacement);
    console.log('storeInventaire : ', storeInventaire);
    console.log('storeBase : ', storeBase);
    console.log('type : ', type);
    console.log('nom : ', nom);
    console.log('img : ', img);
    console.log('imgItem : ', imgItem);
    console.log('description : ', description);
    console.log('description : ', description);
    console.log('id : ', id);
    console.log(' : ', );
    console.log(' : ', );

    const yMeuble = 100;

    console.log(storeInventaire);
    console.log(storeBase);
    console.log('idBase : ', idBase);

    for (let i = 0; i < storeBase.base.length; i++) {
        const base = storeBase.base[i];
        if (base.zoneX == X && base.zoneY == Y && base.zoneZ == Z) {

            if (type == 'drapeau') {

                console.log('il y a deja une base à cette endroit');

            } else {

                // creation meuble

                const ligne = {
                    type: type,
                    nom: nom,
                    img: img,
                    imgItem: imgItem,
                    description: description,
                    valeur: valeur,
                    poid: poid,
                    action: action,
                    id: idMeubleTotal + 1,
                    x: x,
                    y: y,
                    protection: protection,
                    piege: piege, 
                }

                storeBase.ajouterMeuble(idBase, ligne);
                storeBase.ajouter('idMeuble', 1);
                storeBase.ajouterChampsBase(idBase, 'protection', protection);
                storeBase.ajouterChampsBase(idBase, 'piege', piege);
                storeInventaire.retirer('poidMeuble', poid);
                
                if (quantite > 1) {
                    console.log('retirer quantite');
                    storeInventaire.retirerQuantiteMeuble(type, 'quantite', 1);
                } else {
                    console.log('retirer ligne');
                    storeInventaire.retirerLigneMeuble(type);
                }

            }

        } else {

            if (type == 'drapeau') {

                // creation d'une nouvelle base

                console.log("creation d'une nouvelle base");

                const base = {
                    meubles: [
                        {
                            type: type,
                            nom: nom,
                            img: img,
                            imgItem: imgItem,
                            description: description,
                            valeur: valeur,
                            poid: poid,
                            action: action,
                            id: idMeubleTotal + 1,
                            x: 700,
                            y: yMeuble,
                            protection: protection,
                            piege: piege,
                        },
                    ],
                    zoneX: X,
                    zoneY: Y,
                    zoneZ: Z,
                    idBase: idBaseTotal + 1,
            
                    protection: protection,
                    piege: 0,
                    nom: 'La base des puceaux',
                }

                storeBase.ajouterBase(base);
                storeBase.ajouter('idBase', 1);
                storeBase.ajouter('idMeuble', 1);
                storeInventaire.retirer('poidMeuble', poid);
                
                if (quantite > 1) {
                    console.log('retirer quantite');
                    storeInventaire.retirerQuantiteMeuble(type, 'quantite', 1);
                } else {
                    console.log('retirer ligne');
                    storeInventaire.retirerLigneMeuble(type);
                }
            } else {
                console.log('Aucune base crée')
            }

        }
    }

}