import create from 'zustand';

const combatStore = create((set) => ({

  combat: 'non',
  type: '',
  tour: '',

  nom: [],

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

  // ajoute element tableau

  ajouterNom: (id) => {
    set((state) => ({
      nom: [...state.nom, id],
    }));
  },

}));

export default combatStore;