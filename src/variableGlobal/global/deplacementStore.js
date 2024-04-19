import create from 'zustand';

const px = 20;

const deplacementStore = create((set) => ({

  zoneX: 0,
  zoneY: 0,
  zoneZ: 0,

  lieux: 'onche',
  tutoVillage: 'oui',

  fenetreOuverte: [],

  miniMapX: px,
  miniMapY: px,

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

  modifier: (champ, valeur) => {
    set((state) => ({
      [champ]: state[champ] = valeur,
    }));
  },

}));

export default deplacementStore;