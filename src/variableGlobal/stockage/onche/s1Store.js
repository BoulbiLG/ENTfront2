import create from 'zustand';

import { pommeURL, epeeURL, bouclierURL, casqueURL, plastronURL, jambiereURL, epauliereURL, nikeURL } from '../../../graphisme/item/item';

const s1Store = create((set) => ({
  
    zoneX: 0, zoneY: 0, zoneZ: 0,
    x: 0, y: 0,
    idStockage: '1', type: 'coffre',
    img: 'hytgdrsefds',

    inventaire: [
        { equipe: 0, action: 5, important: 'non', id: 'pomme', nom: 'Pomme', quantite: 3, img: pommeURL, description: 'fdp.', valeur: 2, type: 'consomable', poid: 1},
        { equipe: 0, action: 5, important: 'non', id: 'epee', nom: 'Epée', quantite: 999, img: epeeURL, description: 'fdp.', valeur: 50, type: 'arme', poid: 10},
        { equipe: 0, action: 5, important: 'non', id: 'bouclier', nom: 'Bouclier', quantite: 1, img: bouclierURL, description: 'fdp.', valeur: 30, type: 'arme', poid: 17},
        { equipe: 0, action: 5, cible: 'tete', important: 'non', id: 'casque', nom: 'Casque', quantite: 12, img: casqueURL, description: 'fdp.', valeur: 30, type: 'armure', poid: 13},
        { equipe: 0, action: 5, cible: 'buste', important: 'non', id: 'plastron', nom: 'Plastron', quantite: 1, img: plastronURL, description: 'fdp.', valeur: 30, type: 'armure', poid: 28},
        { equipe: 0, action: 5, cible: 'jambe', important: 'non', id: 'jambiere', nom: 'Jambière', quantite: 7, img: jambiereURL, description: 'fdp.', valeur: 30, type: 'armure', poid: 11},
        { equipe: 0, action: 5, cible: 'bras', important: 'non', id: 'epauliere', nom: 'Epaulière', quantite: 53, img: epauliereURL, description: 'fdp.', valeur: 30, type: 'armure', poid: 8},
        { equipe: 0, action: 5, cible: 'pied', important: 'non', id: 'nike', nom: 'Nike', quantite: 2, img: nikeURL, description: 'fdp.', valeur: 30, type: 'armure', poid: 6},
      ],
    
      poidMax: 500,
      poid: 96,
    
      ajouter: (champ, valeur) => {
        set((state) => {
          const newState = {
            ...state,
            [champ]: state[champ] + valeur,
          };
          return newState;
        }, 'ajouter');
      },
      
      retirer: (champ, valeur) => {
        set((state) => {
          const newState = {
            ...state,
            [champ]: state[champ] - valeur,
          };
          return newState;
        }, 'retirer');
      },
      
      ajouterQuantiteItem: (id, champ, nombre) => {
        set((state) => {
          const newState = {
            ...state,
            inventaire: state.inventaire.map((item) =>
              item.id === id ? { ...item, [champ]: item[champ] + nombre } : item
            ),
          };
          return newState;
        }, 'ajouterQuantiteItem');
      },
      
      retireQuantiteItem: (id, champ, nombre) => {
        set((state) => {
          const newState = {
            ...state,
            inventaire: state.inventaire.map((item) =>
              item.id === id ? { ...item, [champ]: Math.max(item[champ] - nombre, 0) } : item
            ),
          };
          return newState;
        }, 'retireQuantiteItem');
      },
      
      ajouterLigneInventaire: (nouvelItem) => {
        set((state) => {
          console.log('Avant modification (ajouterLigneInventaire) :', state);
          const newState = {
            ...state,
            inventaire: [...state.inventaire, nouvelItem],
          };
          console.log('Après modification (ajouterLigneInventaire) :', newState);
          return newState;
        }, 'ajouterLigneInventaire');
      },
      
      retirerLigneInventaire: (id) => {
        set((state) => {
          console.log('Avant modification (retirerLigneInventaire) :', state);
          const newState = {
            ...state,
            inventaire: state.inventaire.filter((item) => item.id !== id),
          };
          console.log('Après modification (retirerLigneInventaire) :', newState);
          return newState;
        }, 'retirerLigneInventaire');
      },
      
}));

export default s1Store;
