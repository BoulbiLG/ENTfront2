import create from 'zustand';

const deplacementStore = create((set) => ({

  zoneX: 0,
  zoneY: 0,
  zoneZ: 0,

  fenetreOuverte: [],

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