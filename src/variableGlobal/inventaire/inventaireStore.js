import create from 'zustand';

import { lexiqueConsomable } from '../item/lexiqueConsomable';
import { lexiqueMeuble } from '../item/lexiqueMeuble';
import { lexiqueArmure } from '../item/lexiqueArmure';

import { pommeURL, epeeURL, bouclierURL, casqueURL, plastronURL, jambiereURL, epauliereURL, nikeURL } from '../../graphisme/item/item';

const yMeuble = 100;

const inventaireStore = create((set) => ({
  inventaire: [
    { equipe: 0, action: lexiqueConsomable.pomme.action, important: lexiqueConsomable.pomme.important, id: lexiqueConsomable.pomme.id,
      nom: lexiqueConsomable.pomme.nom, quantite: 2, img: lexiqueConsomable.pomme.img, description: lexiqueConsomable.pomme.description, 
      valeur: lexiqueConsomable.pomme.valeur, type: lexiqueConsomable.pomme.type, poid: lexiqueConsomable.pomme.poid},
   
    
    { equipe: 0, action: 5, important: 'non', id: 'piedBiche', nom: 'Pied de biche', quantite: 999, img: epeeURL, description: 'fdp.', valeur: 50, type: 'arme', poid: 10},
    { equipe: 0, action: 5, important: 'non', id: 'caca', nom: 'Pied de biche', quantite: 999, img: epeeURL, description: 'fdp.', valeur: 1, type: 'arme', poid: 10},
    { equipe: 0, action: 5, important: 'non', id: 'epee', nom: 'Epée', quantite: 999, img: epeeURL, description: 'fdp.', valeur: 50, type: 'arme', poid: 10},
    { equipe: 0, action: 5, important: 'non', id: 'bouclier', nom: 'Bouclier', quantite: 1, img: bouclierURL, description: 'fdp.', valeur: 30, type: 'arme', poid: 17},
    { equipe: 0, action: 5, cible: 'tete', important: 'non', id: 'casque', nom: 'Casque', quantite: 12, img: casqueURL, description: 'fdp.', valeur: 30, type: 'armure', poid: 13},
    { equipe: 0, action: 5, cible: 'buste', important: 'non', id: 'plastron', nom: 'Plastron', quantite: 1, img: plastronURL, description: 'fdp.', valeur: 30, type: 'armure', poid: 28},
    { equipe: 0, action: 5, cible: 'jambe', important: 'non', id: 'jambiere', nom: 'Jambière', quantite: 7, img: jambiereURL, description: 'fdp.', valeur: 30, type: 'armure', poid: 11},
    { equipe: 0, action: 5, cible: 'bras', important: 'non', id: 'epauliere', nom: 'Epaulière', quantite: 53, img: epauliereURL, description: 'fdp.', valeur: 30, type: 'armure', poid: 8},
    { equipe: 0, action: 5, cible: 'pied', important: 'non', id: 'nike', nom: 'Nike', quantite: 2, img: nikeURL, description: 'fdp.', valeur: 30, type: 'armure', poid: 6},
    
  ],

  meubles: [
    {
      type: lexiqueMeuble.drapeau.type,
      nom: lexiqueMeuble.drapeau.nom,
      img: lexiqueMeuble.drapeau.img,
      imgItem: lexiqueMeuble.drapeau.imgItem,
      description: lexiqueMeuble.drapeau.description,
      valeur: lexiqueMeuble.drapeau.valeur,
      poid: lexiqueMeuble.drapeau.poid,
      action: lexiqueMeuble.drapeau.action, 
      id: 1,
      x: 500,
      y: yMeuble,
      protection: lexiqueMeuble.drapeau.action,
      piege: lexiqueMeuble.drapeau.piege,
      quantite: 5,
    },
    {
      type: lexiqueMeuble.tente.type,
      nom: lexiqueMeuble.tente.nom,
      img: lexiqueMeuble.tente.img,
      imgItem: lexiqueMeuble.tente.imgItem,
      description: lexiqueMeuble.tente.description,
      valeur: lexiqueMeuble.tente.valeur,
      poid: lexiqueMeuble.tente.poid,
      action: lexiqueMeuble.tente.action, 
      id: 2,
      x: 500,
      y: yMeuble,
      protection: lexiqueMeuble.tente.action,
      piege: lexiqueMeuble.tente.piege,
      quantite: 5,
    },
  ],

  poidMax: 100,
  poid: 2,

  idMeuble: 2,

  poidMeubleMax: 100,
  poidMeuble: lexiqueMeuble.drapeau.poid,

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

  // meuble

  ajouterQuantiteMeuble: (type, champ, nombre) => {
    set((state) => ({
      meubles: state.meubles.map((item) =>
        item.type === type ? { ...item, [champ]: item[champ] + nombre } : item
      ),
    }));
  },

  retirerQuantiteMeuble: (type, champ, nombre) => {
    set((state) => ({
      meubles: state.meubles.map((item) =>
        item.type === type ? { ...item, [champ]: Math.max(item[champ] - nombre, 0) } : item
      ),
    }));
  },

  ajouterLigneMeuble: (nouvelItem) => {
    set((state) => ({
      meubles: [...state.meubles, nouvelItem],
    }));
  },

  retirerLigneMeuble: (id) => {
    set((state) => ({
      meubles: state.meubles.filter((item) => item.type !== id),
    }));
  },

}));

export default inventaireStore;
