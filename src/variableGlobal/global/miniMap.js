import create from 'zustand';

const miniMapStore = create((set) => ({

  /*
  x: -57.5,
  y: -23.5,
  z: 0,
  */
 /*
  x: 17.5,
  y: 53.5,
  z: 0,
  */

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

export default miniMapStore;