import create from 'zustand';

const musiqueStore = create((set) => ({
  courante: '',
  modifierCourante: (nouvelleValeur) => {
    set({ courante: nouvelleValeur });
  },
}));

export default musiqueStore;