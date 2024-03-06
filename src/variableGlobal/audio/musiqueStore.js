import create from 'zustand';

const musiqueStore = create((set) => ({
  courante: 'onche',
  lecture: 0,
  modifierCourante: (nouvelleValeur) => {
    set({ courante: nouvelleValeur });
  },

  ajouter: (champ, valeur) => {
    set((state) => ({
      [champ]: state[champ] + valeur,
    }));
  },

  // retire valeur

  retirer: (champ, valeur) => {
    set((state) => ({
      [champ]: state[champ] - valeur,
    }));
  },

  // modifie valeur

  modifier: (champ, nouvelleValeur) => {
    set({ [champ]: nouvelleValeur });
  },
  
}));

export default musiqueStore;