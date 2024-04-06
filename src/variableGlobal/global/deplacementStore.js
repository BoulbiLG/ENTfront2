import create from 'zustand';

const px = 20;

const deplacementStore = create((set) => ({

  zoneX: 9,
  zoneY: -2,
  zoneZ: 999999,

  lieux: 'Maison de Celestin',
  tutoVillage: 'non',

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

  modifier: (champ, nouvelleValeur) => {
    set({ [champ]: nouvelleValeur });
  },

}));

export default deplacementStore;