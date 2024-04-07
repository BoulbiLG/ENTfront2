import create from 'zustand';

const refreshStore = create((set) => ({
  refresh: false,
  
  setRefresh: (value) => set({ refresh: value }),

  ajouter: (champ, valeur) => {
    set((state) => ({
      [champ]: state[champ] + valeur,
    }));
  },
}));

export default refreshStore;
