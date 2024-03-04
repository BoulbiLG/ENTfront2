import create from 'zustand';

const parametreStore = create((set) => ({

  bruitage: 'oui',
  volumeBruitage: 50,

  musique: 'oui',
  volumeMusique: 50,

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

export default parametreStore;