import create from 'zustand';

const fenetreStore = create((set) => ({
  courante: '',
  modifierCourante: (nouvelleValeur) => {
    set({ courante: nouvelleValeur });
  },
}));

export default fenetreStore;
