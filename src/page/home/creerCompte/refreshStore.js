import create from 'zustand';

const refreshStore = create((set) => ({
  refresh: 0,
  pseudo: '',

  ajouter: (champ, valeur) => {
    set((state) => ({
      [champ]: state[champ] + valeur,
    }));
  },

  modifier: (champ, valeur) => {
    set((state) => ({
      [champ]: state[champ] = valeur,
    }));
  },

}));

export default refreshStore;