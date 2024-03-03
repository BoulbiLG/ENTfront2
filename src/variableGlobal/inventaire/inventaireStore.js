import create from 'zustand';

import { lexiqueConsomable } from '../item/lexiqueConsomable';
import { lexiqueArmure } from '../item/lexiqueArmure';

import { pommeURL, epeeURL, bouclierURL, casqueURL, plastronURL, jambiereURL, epauliereURL, nikeURL } from '../../graphisme/item/item';

const inventaireStore = create((set) => ({
  inventaire: [
    { equipe: 0, action: lexiqueConsomable.pomme.action, important: lexiqueConsomable.pomme.important, id: lexiqueConsomable.pomme.id,
      nom: lexiqueConsomable.pomme.nom, quantite: 2, img: lexiqueConsomable.pomme.img, description: lexiqueConsomable.pomme.description, 
      valeur: lexiqueConsomable.pomme.valeur, type: lexiqueConsomable.pomme.type, poid: lexiqueConsomable.pomme.poid},
   
    /*
    { equipe: 0, action: 5, important: 'non', id: 'epee', nom: 'Epée', quantite: 999, img: epeeURL, description: 'fdp.', valeur: 50, type: 'arme', poid: 10},
    { equipe: 0, action: 5, important: 'non', id: 'bouclier', nom: 'Bouclier', quantite: 1, img: bouclierURL, description: 'fdp.', valeur: 30, type: 'arme', poid: 17},
    { equipe: 0, action: 5, cible: 'tete', important: 'non', id: 'casque', nom: 'Casque', quantite: 12, img: casqueURL, description: 'fdp.', valeur: 30, type: 'armure', poid: 13},
    { equipe: 0, action: 5, cible: 'buste', important: 'non', id: 'plastron', nom: 'Plastron', quantite: 1, img: plastronURL, description: 'fdp.', valeur: 30, type: 'armure', poid: 28},
    { equipe: 0, action: 5, cible: 'jambe', important: 'non', id: 'jambiere', nom: 'Jambière', quantite: 7, img: jambiereURL, description: 'fdp.', valeur: 30, type: 'armure', poid: 11},
    { equipe: 0, action: 5, cible: 'bras', important: 'non', id: 'epauliere', nom: 'Epaulière', quantite: 53, img: epauliereURL, description: 'fdp.', valeur: 30, type: 'armure', poid: 8},
    { equipe: 0, action: 5, cible: 'pied', important: 'non', id: 'nike', nom: 'Nike', quantite: 2, img: nikeURL, description: 'fdp.', valeur: 30, type: 'armure', poid: 6},
    */
  ],

  meubles: [],

  poidMax: 100,
  poid: 2,
  argent: 10,

  ajouter: (champ, valeur) => {
    set((state) => ({
      [champ]: state[champ] + valeur,
    }));
  },

  retirer: (champ, valeur) => {
    set((state) => ({
      [champ]: state[champ] - valeur,
    }));
  },

  ajouterQuantiteItem: (id, champ, nombre) => {
    set((state) => ({
      inventaire: state.inventaire.map((item) =>
        item.id === id ? { ...item, [champ]: item[champ] + nombre } : item
      ),
    }));
  },

  retireQuantiteItem: (id, champ, nombre) => {
    set((state) => ({
      inventaire: state.inventaire.map((item) =>
        item.id === id ? { ...item, [champ]: Math.max(item[champ] - nombre, 0) } : item
      ),
    }));
  },

  ajouterLigneInventaire: (nouvelItem) => {
    set((state) => ({
      inventaire: [...state.inventaire, nouvelItem],
    }));
  },

  retirerLigneInventaire: (id) => {
    set((state) => ({
      inventaire: state.inventaire.filter((item) => item.id !== id),
    }));
  },

  calculerPoid: () => {
    let globalPoids = 0;

    set((state) => {
      state.inventaire.forEach((item) => {
        const lignePoids = item.quantite * item.poid;
        globalPoids += lignePoids;
      });

      return {
        poid: globalPoids,
        ...state,
      };
    });
  },

}));

export default inventaireStore;
