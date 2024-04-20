import create from 'zustand';
import coffre from '../../asset/stockage/coffre.png';
import poubelle from '../../asset/stockage/poubelle.png';
import commode from '../../asset/stockage/commode.png';
import coca from '../../asset/item/consomable/coca.png';
import monster from '../../asset/item/consomable/monster.png';

import { lexiqueArme } from '../item/lexiqueArme';
import { lexiqueDivers } from '../item/lexiqueDivers';

import { epeeURL, bouclierURL, casqueURL, plastronURL, jambiereURL, epauliereURL, nikeURL } from '../../graphisme/item/item';


const heightCoffre = 10;
const widthCoffre = 10;
console.log(lexiqueArme);

const foretENTStore = create((set) => ({
    stockage: [
        {
            zoneX: 12, zoneY: 4, zoneZ: 999999,
            x: 0, y: 400,
            idStockage: '10', type: 'coffre',
            img: coffre,
            height: heightCoffre, width: widthCoffre,
            inventaire: [
                { equipe: 0, action: lexiqueArme.epee.action, important: lexiqueArme.epee.important, id: lexiqueArme.epee.id,
                    nom: lexiqueArme.epee.nom, quantite: 1, img: lexiqueArme.epee.img, description: lexiqueArme.epee.description, 
                    valeur: lexiqueArme.epee.valeur, type: lexiqueArme.epee.type, poid: lexiqueArme.epee.poid},
            ],
        },
    ],

    ajouter: (champ, valeur) => {
        set((state) => ({
            ...state,
            [champ]: state[champ] + valeur,
        }));
    },

    retirer: (champ, valeur) => {
        set((state) => ({
            ...state,
            [champ]: state[champ] - valeur,
        }));
    },

    ajouterQuantiteItem: (id, champ, nombre, idStockage) => {
        set((state) => ({
            ...state,
            stockage: state.stockage.map((stock) => {
                if (stock.idStockage === idStockage) {
                    return {
                        ...stock,
                        inventaire: stock.inventaire.map((item) =>
                            item.id === id ? { ...item, [champ]: item[champ] + nombre } : item
                        ),
                    };
                }
                return stock;
            }),
        }));
    },

    retirerQuantiteItem: (id, champs, valeur, idStockage) => {
        console.log('id : ', id);
        console.log('champs : ', champs);
        console.log('valeur : ', valeur);
        console.log('idStockage : ', idStockage);
        set((state) => ({
            stockage: state.stockage.map((stockageElement) => 
                stockageElement.idStockage === idStockage ? {
                    ...stockageElement,
                    inventaire: stockageElement.inventaire.map((inventaireElement) => 
                        inventaireElement.id === id && inventaireElement[champs] !== undefined ? {
                            ...inventaireElement,
                            [champs]: inventaireElement[champs] - valeur,
                        } : inventaireElement
                    ),
                } : stockageElement
            ),
        }));
    },
    
    
    ajouterLigneInventaire: (nouvelItem, idStockage) => {
        set((state) => ({
            ...state,
            stockage: state.stockage.map((stock) => {
                if (stock.idStockage === idStockage) {
                    return {
                        ...stock,
                        inventaire: [...stock.inventaire, nouvelItem],
                    };
                }
                return stock;
            }),
        }));
    },
    
    retirerLigneInventaire: (id, idStockage) => {
        set((state) => ({
            ...state,
            stockage: state.stockage.map((stock) => {
                if (stock.idStockage === idStockage) {
                    return {
                        ...stock,
                        inventaire: stock.inventaire.filter((item) => item.id !== id),
                    };
                }
                return stock;
            }),
        }));
    },

    calculerPoid: () => {
        let globalPoids = 0;

        set((state) => ({
            ...state,
            stockage: state.personnages.map((perso) => {
                let localPoids = 0;
                const newInventaire = perso.inventaire.map((item) => {
                    const lignePoids = item.quantite * item.poid;
                    localPoids += lignePoids;
                    return item;
                });

                return {
                    ...perso,
                    inventaire: newInventaire,
                };
            }),
        }));
    },
}));

export default foretENTStore;
