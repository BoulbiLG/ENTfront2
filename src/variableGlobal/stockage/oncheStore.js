import create from 'zustand';
import coffre from '../../asset/stockage/coffre.png';
import poubelle from '../../asset/stockage/poubelle.png';
import commode from '../../asset/stockage/commode.png';
import coca from '../../asset/item/consomable/coca.png';
import monster from '../../asset/item/consomable/monster.png';

import { lexiqueConsomable } from '../item/lexiqueConsomable';

import { epeeURL, bouclierURL, casqueURL, plastronURL, jambiereURL, epauliereURL, nikeURL } from '../../graphisme/item/item';


const heightCoffre = 10;
const widthCoffre = 10;
console.log(lexiqueConsomable);

const oncheStore = create((set) => ({
    stockage: [
        {
            zoneX: 2, zoneY: -2, zoneZ: 0,
            x: 100, y: 400,
            idStockage: '1', type: 'coffre',
            img: coffre,
            height: heightCoffre, width: widthCoffre,
            inventaire: [
                { equipe: 0, action: lexiqueConsomable.pomme.action, important: lexiqueConsomable.pomme.important, id: lexiqueConsomable.pomme.id,
                    nom: lexiqueConsomable.pomme.nom, quantite: 1, img: lexiqueConsomable.pomme.img, description: lexiqueConsomable.pomme.description, 
                    valeur: lexiqueConsomable.pomme.valeur, type: lexiqueConsomable.pomme.type, poid: lexiqueConsomable.pomme.poid},
            ],
        },
        {
            zoneX: 0, zoneY: -1, zoneZ: 0,
            x: 700, y: 400,
            idStockage: '2', type: 'coffre',
            img: coffre,
            height: heightCoffre, width: widthCoffre,
            inventaire: [
                { equipe: 0, action: lexiqueConsomable.bouteillepisse.action, important: lexiqueConsomable.bouteillepisse.important, id: lexiqueConsomable.bouteillepisse.id,
                    nom: lexiqueConsomable.bouteillepisse.nom, quantite: 1, img: lexiqueConsomable.bouteillepisse.img, description: lexiqueConsomable.bouteillepisse.description, 
                    valeur: lexiqueConsomable.bouteillepisse.valeur, type: lexiqueConsomable.bouteillepisse.type, poid: lexiqueConsomable.bouteillepisse.poid},
            ],
        },
        {   
            // maison cleamolette

            zoneX: 0, zoneY: -4, zoneZ: 999999,
            x: 1056, y: 400,
            idStockage: '3', type: 'coffre',
            img: coffre,
            height: heightCoffre, width: widthCoffre,
            inventaire: [
                { equipe: 0, action: lexiqueConsomable.pomme.action, important: lexiqueConsomable.pomme.important, id: lexiqueConsomable.pomme.id,
                nom: lexiqueConsomable.pomme.nom, quantite: 2, img: lexiqueConsomable.pomme.img, description: lexiqueConsomable.pomme.description, 
                valeur: lexiqueConsomable.pomme.valeur, type: lexiqueConsomable.pomme.type, poid: lexiqueConsomable.pomme.poid},
                { equipe: 0, action: lexiqueConsomable.coca.action, important: lexiqueConsomable.coca.important, id: lexiqueConsomable.coca.id,
                nom: lexiqueConsomable.coca.nom, quantite: 1, img: lexiqueConsomable.coca.img, description: lexiqueConsomable.coca.description, 
                valeur: lexiqueConsomable.coca.valeur, type: lexiqueConsomable.coca.type, poid: lexiqueConsomable.coca.poid},
            ],
        },
        {   
            // toilette

            zoneX: 11, zoneY: -1, zoneZ: 999999,
            x: 1056, y: 300,
            idStockage: '4', type: 'poubelle',
            img: poubelle,
            height: heightCoffre, width: widthCoffre,
            inventaire: [
                { equipe: 0, action: lexiqueConsomable.caca.action, important: lexiqueConsomable.caca.important, id: lexiqueConsomable.caca.id,
                nom: lexiqueConsomable.caca.nom, quantite: 5, img: lexiqueConsomable.caca.img, description: lexiqueConsomable.caca.description, 
                valeur: lexiqueConsomable.caca.valeur, type: lexiqueConsomable.caca.type, poid: lexiqueConsomable.caca.poid},
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

export default oncheStore;
