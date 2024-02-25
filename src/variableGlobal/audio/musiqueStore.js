import create from 'zustand';

const musiqueStore = create((set) => ({
  courante: 'onche',
  modifierCourante: (nouvelleValeur) => {
    set({ courante: nouvelleValeur });
  },
}));

export default musiqueStore;